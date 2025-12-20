"use client";

import { AnimatePresence } from "framer-motion";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { TransitionNavigationContext } from "@/components/transitionNavigation";

type LayoutProps = { children?: ReactNode };

type TransitionPhase = "idle" | "closing" | "covered" | "opening";

const TransitionProvider = (props: LayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const pageName: string = FormatPathName(pathname);

  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const pendingHrefRef = useRef<string | null>(null);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const isTransitioning = phase !== "idle";

  const transitionLabel = pendingHref ? FormatPathName(pendingHref) : pageName;

  const startNavigate = useCallback(
    (href: string) => {
      if (!href || href === pathname) return;
      if (phase !== "idle") return;

      pendingHrefRef.current = href;
      setPendingHref(href);
      setPhase("closing");
    },
    [pathname, phase]
  );

  useEffect(() => {
    if (phase !== "covered") return;
    const pending = pendingHref;
    if (!pending) return;
    if (pathname === pending) {
      setPhase("opening");
    }
  }, [pathname, phase, pendingHref]);

  // Special case for blog posts I am testing out not using the transition for blog posts
  const isBlogPost =
    /^\/blog\//.test(pathname) && pathname.split("/").length === 3;

  if (isBlogPost) {
    return (
      <TransitionNavigationContext.Provider
        value={{
          isTransitioning: false,
          startNavigate: (href: string) => {
            if (!href || href === pathname) return;
            router.push(href);
          },
        }}
      >
        <div className="w-screen h-screen">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{props.children}</div>
        </div>
      </TransitionNavigationContext.Provider>
    );
  }
  // --- Special case end ---

  const bottomOverlayTargetHeight =
    phase === "closing" || phase === "covered" ? "140vh" : "0vh";

  return (
    <TransitionNavigationContext.Provider
      value={{ startNavigate, isTransitioning }}
    >
      <AnimatePresence>
        <div className="w-screen h-screen">
          {/* Initial page reveal (mount only) */}
          <motion.div
            className="h-screen w-screen fixed bg-[#181926] rounded-b-[100px] z-40"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Navigation cover/uncover */}
          <motion.div
            className="h-screen w-screen fixed bg-[#181926] rounded-t-[100px] bottom-0 z-40 overflow-hidden"
            animate={{ height: bottomOverlayTargetHeight }}
            transition={{
              duration: 0.5,
              ease: phase === "opening" ? "easeOut" : "easeIn",
            }}
            onAnimationComplete={() => {
              if (phase === "closing") {
                const pending = pendingHrefRef.current;
                if (!pending) {
                  setPhase("idle");
                  return;
                }
                setPhase("covered");
                router.push(pending);
                return;
              }

              if (phase === "opening") {
                pendingHrefRef.current = null;
                setPendingHref(null);
                setPhase("idle");
              }
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-50">
              <div
                className="text-[#cad3f5] cursor-default whitespace-nowrap overflow-hidden truncate max-w-[90vw]"
                style={{
                  fontSize: "clamp(2rem, 10vw, 6rem)",
                  lineHeight: 1.1,
                  paddingBottom: "0.2em",
                  opacity: phase === "idle" ? 0 : 1,
                  transition: "opacity 250ms ease-out",
                }}
              >
                {transitionLabel}
              </div>
            </div>
          </motion.div>

          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{props.children}</div>
        </div>
      </AnimatePresence>
    </TransitionNavigationContext.Provider>
  );
};

function FormatPathName(pathName: string): string {
  pathName = pathName
    .substring(pathName.lastIndexOf("/"), pathName.length)
    .substring(1)
    .replace(/_/g, " ")
    .replace(/-/g, " ");
  pathName = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  if (pathName === "") {
    pathName = "Home";
  }

  return pathName;
}

export default TransitionProvider;

"use client";

import { motion } from "framer-motion";
import React, { ReactNode, useCallback } from "react";
import Navbar from "./navbar";
import { usePathname, useRouter } from "next/navigation";
import { TransitionNavigationContext } from "@/components/transitionNavigation";

type LayoutProps = { children?: ReactNode };

const TransitionProvider = (props: LayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // Navigation no longer waits on an animation to finish before routing -
  // it's instant, same as a plain <Link>. The fade below is purely visual,
  // keyed off the resulting pathname change.
  const startNavigate = useCallback(
    (href: string) => {
      if (!href || href === pathname) return;
      router.push(href);
    },
    [pathname, router]
  );

  return (
    <TransitionNavigationContext.Provider
      value={{ startNavigate, isTransitioning: false }}
    >
      <div className="w-screen h-screen">
        <div className="h-24">
          <Navbar />
        </div>
        {/*
          No AnimatePresence/exit animation on purpose: exit animations need
          the old page to keep rendering (and the new one to wait) until the
          exit finishes, which produces a fade-out, a blank gap, then the new
          page popping in - reads as a flash, not a transition. A plain
          enter-only fade swaps instantly (like a normal link) and just
          fades the new content in, no gap.
        */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-[calc(100vh-6rem)]"
        >
          {props.children}
        </motion.div>
      </div>
    </TransitionNavigationContext.Provider>
  );
};

export default TransitionProvider;

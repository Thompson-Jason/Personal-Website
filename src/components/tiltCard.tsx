"use client";

import React, { useRef, useState } from "react";

type Props = {
  id?: string;
  className?: string;
  maxTiltDeg?: number;
  children: React.ReactNode;
};

// Wraps a card so it tilts toward the cursor: the corner nearest the pointer
// lifts up toward the viewer while the opposite corner stays anchored flat,
// like the card is being picked up from wherever you're pointing.
//
// The rotation math (rotateX from vertical position, rotateY from horizontal
// position, both centered on the card's midpoint) matches the standard
// "tilt toward cursor" formula used by libraries like vanilla-tilt.js. The
// part that's different: transform-origin tracks the pointer too, pinned to
// the *opposite* point from the cursor, so that corner reads as the anchor
// that stays "laying down" instead of the whole card tilting symmetrically
// around its center.
//
// Two-layer structure on purpose: mouse listeners live on an outer wrapper
// that never itself gets a transform, and only the inner div tilts. If the
// listeners and the transform were on the same element, tilting it shifts
// its own hit-testable surface out from under a stationary cursor - that
// triggers a real mouseleave, which resets the tilt, which puts the flat
// edge back under the cursor, which re-triggers mouseenter, forever. The
// outer wrapper's box never moves, so it can't jitter itself out from under
// the cursor no matter how the inner card tilts.
const TiltCard = ({ id, className = "", maxTiltDeg = 10, children }: Props) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion()) return;
    const el = outerRef.current;
    if (!el) return;

    // Safe to read live here - this element never gets a transform, so its
    // rect never moves regardless of how the inner card tilts.
    const rect = el.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width; // 0 (left) -> 1 (right)
    const relY = (event.clientY - rect.top) / rect.height; // 0 (top) -> 1 (bottom)

    const rotateY = (relX - 0.5) * 2 * maxTiltDeg;
    const rotateX = (0.5 - relY) * 2 * maxTiltDeg;
    const originX = (1 - relX) * 100;
    const originY = (1 - relY) * 100;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`,
      transformOrigin: `${originX}% ${originY}%`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)",
      transformOrigin: "center",
    });
  };

  return (
    <div
      id={id}
      ref={outerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <div
        className={`${className} h-full transition-transform duration-150 ease-out will-change-transform`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;

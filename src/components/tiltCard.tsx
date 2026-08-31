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
const TiltCard = ({ id, className = "", maxTiltDeg = 10, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  // getBoundingClientRect() reflects the element's current *visual* (i.e.
  // transformed) box, not its resting layout box. If we re-measured it on
  // every mousemove, tilting the card would shift its own edges, which
  // shifts the next frame's relX/relY, which changes the tilt again -
  // a feedback loop that jitters worst right at the edges. Measure once on
  // enter, while the card is still flat, and reuse that rect for the whole
  // hover instead of re-measuring mid-tilt.
  const restRectRef = useRef<DOMRect | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleMouseEnter = () => {
    restRectRef.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion()) return;
    const rect = restRectRef.current ?? ref.current?.getBoundingClientRect();
    if (!rect) return;

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
    restRectRef.current = null;
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)",
      transformOrigin: "center",
    });
  };

  return (
    <div
      id={id}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${className} transition-transform duration-150 ease-out will-change-transform`}
      style={style}
    >
      {children}
    </div>
  );
};

export default TiltCard;

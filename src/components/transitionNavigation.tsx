"use client";

import { createContext, useContext } from "react";

export type TransitionNavigationContextValue = {
  startNavigate: (href: string) => void;
  isTransitioning: boolean;
};

export const TransitionNavigationContext = createContext<
  TransitionNavigationContextValue | undefined
>(undefined);

export function useTransitionNavigation(): TransitionNavigationContextValue {
  const ctx = useContext(TransitionNavigationContext);
  if (!ctx) {
    throw new Error(
      "useTransitionNavigation must be used within a TransitionNavigationContext.Provider"
    );
  }
  return ctx;
}

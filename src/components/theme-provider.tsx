"use client";

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

/**
 * Wrapper around next-themes ThemeProvider. This component simply
 * forwards its props to NextThemesProvider. Using this wrapper makes
 * it easier to swap out theme implementations or apply additional
 * behaviour globally in the future.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
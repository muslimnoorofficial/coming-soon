// "use client";

// /**
//  * Wrapper around next-themes ThemeProvider. This component simply
//  * forwards its props to NextThemesProvider. Using this wrapper makes
//  * it easier to swap out theme implementations or apply additional
//  * behaviour globally in the future.
//  */
// import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }


"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

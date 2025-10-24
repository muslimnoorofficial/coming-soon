"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "primary";
  size?: "sm" | "default" | "lg" | "icon";
}

/**
 * A minimal button component that supports a few variants and sizes.
 * The styles are inspired by Shadcn UI's button. Variants correspond
 * to visual treatments such as default (brand coloured background),
 * outline, ghost (icon only) and primary. Sizes adjust height and
 * padding.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<Required<ButtonProps>["variant"], string> = {
      default:
        "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-600 dark:bg-brand-500 dark:hover:bg-brand-600 dark:text-white dark:focus:ring-brand-500",
      outline:
        "border border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground focus:ring-ring",
      ghost:
        "bg-transparent hover:bg-accent/50 text-muted-foreground focus:ring-ring",
      primary:
        "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-600",
    };

    const sizes: Record<Required<ButtonProps>["size"], string> = {
      sm: "h-8 px-3",
      default: "h-10 px-4",
      lg: "h-12 px-6",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
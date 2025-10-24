"use client";

import React, { createContext, useContext, useState } from "react";

/**
 * SidebarContext provides a simple way to toggle the desktop and mobile
 * variants of the sidebar from anywhere in your application. The desktop
 * sidebar remains fixed on large screens while the mobile sidebar can
 * slide in from the left on smaller devices. The provider maintains
 * separate state for each variant so they don't interfere with one
 * another.
 */
interface SidebarContextProps {
  /** Whether the desktop sidebar is visible. */
  isSidebarOpen: boolean;
  /** Whether the mobile sidebar (drawer) is visible. */
  isMobileOpen: boolean;
  /** Toggle the desktop sidebar. */
  toggleSidebar: () => void;
  /** Toggle the mobile sidebar. */
  toggleMobileSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((open) => !open);
  const toggleMobileSidebar = () => setMobileOpen((open) => !open);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, isMobileOpen, toggleSidebar, toggleMobileSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

/**
 * Hook to access the sidebar state. Will throw if used outside of
 * SidebarProvider.
 */
export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return ctx;
}
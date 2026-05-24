"use client"

import { createContext, useState } from "react";

export const sidebarContext = createContext({
  isCollapsed: false,
  toggleSidebar: () => { }
})

export default function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  }

  return (
    <sidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </sidebarContext.Provider>
  );
}
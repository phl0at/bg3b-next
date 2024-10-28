"use client";
import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext<any>({});

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [display, setDisplay] = useState("origins");
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <MenuContext.Provider value={{ showMenu, toggleMenu, display, setDisplay }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}

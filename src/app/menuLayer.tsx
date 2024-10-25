import React from "react";
import { useMenuContext } from "@/context/menu";
import MenuList from "./menuList";

const MenuLayer = () => {
  const { showMenu, toggleMenu } = useMenuContext();

  return (
    <div
      onClick={toggleMenu}
      className={`fixed z-10 backdrop-blur-md transition-all ease-in-out delay-50 duration-100 ${
        showMenu
          ? "fixed z-10 w-screen h-screen backdrop-blur-sm transition-all ease-in-out delay-100"
          : "w-0 h-0"
      }`}
    >
      <ul
        className={`fixed flex flex-col gap-6  text-3xl top-24 -left-52 ${
          showMenu ? "translate-x-60" : ""
        } transition-transform ease-in-out delay-300 duration-300 `}
      >
        <MenuList />
      </ul>
    </div>
  );
};

export default MenuLayer;

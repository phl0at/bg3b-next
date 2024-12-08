import React from "react";
import { useStore } from "@/store/store";
import MenuList from "./menuList";

const MenuLayer = ({ handleToggle }: { handleToggle: () => void }) => {
  const { showMenu } = useStore((state) => state);

  return (
    <div
      onClick={handleToggle}
      className={`fixed z-10 backdrop-blur-md transition-all ease-in-out delay-50 duration-100 ${
        showMenu
          ? "fixed z-10 w-screen h-screen backdrop-blur-sm transition-all ease-in-out delay-100"
          : "w-0 h-0"
      }`}
    >
      <ul
        className={`fixed flex flex-col gap-6  text-3xl top-24 -left-52 ${
          showMenu ? "translate-x-60" : ""
        } transition-transform ease-in-out delay-150 duration-200 `}
      >
        <MenuList />
      </ul>
    </div>
  );
};

export default MenuLayer;

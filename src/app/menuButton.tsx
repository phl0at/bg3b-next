"use client";
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useMenuContext } from "@/context/menu";
import MainMenu from "./mainMenu";

const MenuButton = () => {
  const { toggleMenu } = useMenuContext();

  return (
    <>
      <div className="fixed z-20 w-12 h-12 group">
        <FiAlignJustify
          onClick={toggleMenu}
          className="text-blue-300 group-hover:text-blue-500 cursor-pointer fixed -left-9 group-hover:translate-x-10 transition ease-in-out delay-250 duration-300"
          size="45"
        />
      </div>
      <MainMenu />
    </>
  );
};

export default MenuButton;

"use client";
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import MenuLayer from "@/components/overlayMenu/menuLayer";
import { useStore } from "@/store/store";

const MenuButton = () => {
  const { dispatch, showMenu } = useStore((state) => state);

  const handleToggle = () => {
    dispatch({ type: "SHOW MENU", payload: !showMenu });
  };

  return (
    <>
      <div className="fixed z-20 w-1/4 h-12 group">
        <FiAlignJustify
          onClick={handleToggle}
          className="text-amber-100 group-hover:text-amber-300 cursor-pointer fixed -left-9 group-hover:translate-x-10 transition ease-in-out delay-250 duration-300"
          size="45"
        />
      </div>
      <MenuLayer handleToggle={handleToggle} />
    </>
  );
};

export default MenuButton;

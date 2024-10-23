import React from "react";
import { useMenuContext } from "@/context/menu";
import Link from "next/link";

const MainMenu = () => {
  const { showMenu, toggleMenu } = useMenuContext();
  const list = [
    { type: "New Build", href: "/create" },
    { type: "Browse Builds", href: "/browse" },
    { type: "Log In", href: "/login" },
    { type: "Log Out", href: "/logout" },
  ];
  return (
    <div
      onClick={toggleMenu}
      className={`${
        showMenu
          ? "fixed z-10 w-screen h-screen backdrop-blur-sm transition-all ease-in-out delay-250 duration-300"
          : "w-0 h-0"
      }`}
    >
      <ul
        className={`fixed flex flex-col gap-6  text-3xl top-24 -left-52 ${
          showMenu ? "translate-x-60" : ""
        } transition-all ease-in-out delay-250 duration-300 `}
      >
        {list.map((option) => (
          <Link
            className="text-blue-300 hover:text-blue-500 transition-all ease-in-out delay-250 duration-300"
            href={option.href}
            key={option.type}
          >
            {option.type}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;

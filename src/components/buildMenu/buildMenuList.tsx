"use client";
import React from "react";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { useStore } from "@/store/store";

const BuildMenuList = () => {
  const { buildMenu, dispatch } = useStore((state) => state);
  const onClick = (menu: string) =>
    dispatch({ type: "SET BUILD MENU", payload: menu });
  const menuOptions = [
    {
      title: "Origins",
      translateHover: "group-hover:-translate-x-[167px]",
      translate: "-translate-x-[167px]",
    },
    {
      title: "Races",
      translateHover: "group-hover:-translate-x-[147px]",
      translate: "-translate-x-[147px]",
    },
    {
      title: "Backgrounds",
      translateHover: "group-hover:-translate-x-[243px]",
      translate: "-translate-x-[243px]",
    },
    {
      title: "Classes",
      translateHover: "group-hover:-translate-x-[167px]",
      translate: "-translate-x-[167px]",
    },
    {
      title: "Abilities",
      translateHover: "group-hover:-translate-x-[175px]",
      translate: "-translate-x-[175px]",
    },
  ];

  return (
    <div className="flex flex-col gap-12 text-3xl font-sans">
      {menuOptions.map((option, i) => (
        <div
          onClick={() => onClick(option.title)}
          className="flex justify-end items-center text-amber-100 group cursor-pointer"
          key={i}
        >
          <div
            className={
              option.title === buildMenu
                ? "text-amber-300"
                : "group-hover:opacity-100 opacity-0 transition-all ease-in-out"
            }
          >
            {option.title}
          </div>
          {option.title === buildMenu ? (
            <FaRegDotCircle
              size="67"
              className={`${option.translate} text-amber-300`}
            />
          ) : (
            <FaRegCircle
              size="67"
              className={`${option.translateHover} transition eas-in-out`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BuildMenuList;

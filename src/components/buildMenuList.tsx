"use client";
import React from "react";
import Link from "next/link";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";

const BuildMenuList = () => {
  const pathname = usePathname();
  const menuOptions = [
    {
      title: "Origins",
      translateHover: "group-hover:-translate-x-[113px]",
      translate: "-translate-x-[113px]",
      menu: "/origins",
    },
    {
      title: "Races",
      translateHover: "group-hover:-translate-x-[100px]",
      translate: "-translate-x-[100px]",
      menu: "/races",
    },
    {
      title: "Backgrounds",
      translateHover: "group-hover:-translate-x-[164px]",
      translate: "-translate-x-[164px]",
      menu: "/backgrounds",
    },
    {
      title: "Classes",
      translateHover: "group-hover:-translate-x-[113px]",
      translate: "-translate-x-[113px]",
      menu: "/classes",
    },
    {
      title: "Abilities",
      translateHover: "group-hover:-translate-x-[119px]",
      translate: "-translate-x-[119px]",
      menu: "/abilities",
    },
  ];

  return (
    <ul className="flex flex-col gap-7 text-xl font-sans">
      {menuOptions.map((option) => (
        <Link
          className="flex justify-end items-center text-blue-300 group"
          href={`${option.menu}`}
          key={option.menu}
        >
          <div
            className={
              option.menu === pathname
                ? "text-blue-500"
                : "group-hover:text-blue-300 text-zinc-900 transition-colors ease-in-out"
            }
          >
            {option.title}
          </div>
          {option.menu === pathname ? (
            <FaRegDotCircle
              size="45"
              className={`${option.translate} text-blue-500`}
            />
          ) : (
            <FaRegCircle
              size="45"
              className={`${option.translateHover} transition ease-in-out`}
            />
          )}
        </Link>
      ))}
    </ul>
  );
};

export default BuildMenuList;

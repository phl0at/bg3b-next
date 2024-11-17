"use client";
import React from "react";
import Link from "next/link";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/store";

const BuildMenuList = () => {
  const pathname = usePathname();
  const buildId = useStore((state) => state.current.id);
  const menuOptions = [
    {
      title: "Origins",
      translateHover: "group-hover:-translate-x-[113px]",
      translate: "-translate-x-[113px]",
      menu: `/build/${buildId}/origins`,
    },
    {
      title: "Races",
      translateHover: "group-hover:-translate-x-[100px]",
      translate: "-translate-x-[100px]",
      menu: `/build/${buildId}/races`,
    },
    {
      title: "Backgrounds",
      translateHover: "group-hover:-translate-x-[164px]",
      translate: "-translate-x-[164px]",
      menu: `/build/${buildId}/backgrounds`,
    },
    {
      title: "Classes",
      translateHover: "group-hover:-translate-x-[113px]",
      translate: "-translate-x-[113px]",
      menu: `/build/${buildId}/classes`,
    },
    {
      title: "Abilities",
      translateHover: "group-hover:-translate-x-[119px]",
      translate: "-translate-x-[119px]",
      menu: `/build/${buildId}/abilities`,
    },
  ];

  return (
    <div className="flex flex-col gap-7 text-xl font-sans">
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
              className={`${option.translateHover} transition eas-in-out`}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default BuildMenuList;

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
      translateHover: "group-hover:-translate-x-[167px]",
      translate: "-translate-x-[167px]",
      menu: `/build/${buildId}/origins`,
    },
    {
      title: "Races",
      translateHover: "group-hover:-translate-x-[147px]",
      translate: "-translate-x-[147px]",
      menu: `/build/${buildId}/races`,
    },
    {
      title: "Backgrounds",
      translateHover: "group-hover:-translate-x-[243px]",
      translate: "-translate-x-[243px]",
      menu: `/build/${buildId}/backgrounds`,
    },
    {
      title: "Classes",
      translateHover: "group-hover:-translate-x-[167px]",
      translate: "-translate-x-[167px]",
      menu: `/build/${buildId}/classes`,
    },
    {
      title: "Abilities",
      translateHover: "group-hover:-translate-x-[175px]",
      translate: "-translate-x-[175px]",
      menu: `/build/${buildId}/abilities`,
    },
  ];

  return (
    <div className="flex flex-col gap-12 text-3xl font-sans">
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
              size="67"
              className={`${option.translate} text-blue-500`}
            />
          ) : (
            <FaRegCircle
              size="67"
              className={`${option.translateHover} transition eas-in-out`}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default BuildMenuList;

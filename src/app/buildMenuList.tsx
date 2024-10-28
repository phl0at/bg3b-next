"use client";
import React from "react";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { useMenuContext } from "../context/menu";

const BuildMenuList = () => {
  const { display, setDisplay } = useMenuContext();
  const menus = [
    {
      title: "Origins",
      translate: "group-hover:-translate-x-28",
      menu: "origins",
    },
    { title: "Races", translate: "group-hover:-translate-x-28", menu: "races" },
    {
      title: "Backgrounds",
      translate: "group-hover:-translate-x-44",
      menu: "backgrounds",
    },
    {
      title: "Classes",
      translate: "group-hover:-translate-x-28",
      menu: "classes",
    },
    {
      title: "Abilities",
      translate: "group-hover:-translate-x-32",
      menu: "abilities",
    },
  ];

  return (
    <ul className="flex flex-col gap-7 text-xl font-sans">
      {menus.map((d) => (
        <button
          className="flex justify-end items-center text-blue-300 hover:text-blue-500 group"
          onClick={(e) => {
            e.preventDefault();
            setDisplay(d.menu);
          }}
          key={d.title}
        >
          <div className="group-hover:text-blue-500 text-zinc-900 transition-colors ease-in-out">
            {d.title}
          </div>
          {d.menu === display ? (
            <FaRegDotCircle
              size="45"
              className={`${d.translate} transition ease-in-out`}
            />
          ) : (
            <FaRegCircle
              size="45"
              className={`${d.translate} transition ease-in-out`}
            />
          )}
        </button>
      ))}
    </ul>
  );
};

export default BuildMenuList;

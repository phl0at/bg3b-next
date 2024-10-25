"use client";
import React from "react";
import { GiVibratingShield } from "react-icons/gi";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { useState } from "react";

const BuildPage = () => {
  const [display, setDisplay] = useState("Origin");
  const displays = [
    { name: "Origin", translate: 28 },
    { name: "Race", translate: 28 },
    { name: "Background", translate: 40 },
    { name: "Class", translate: 28 },
    { name: "Abilities", translate: 32 },
  ];

  return (
    <>
      <main className="w-screen h-screen absolute top-0 py-3 gap-4 flex justify-center items-center">
        <ul className="flex flex-col gap-5 text-xl">
          {displays.map((d) => (
            <button
              className="flex gap-2 justify-end items-center
              text-blue-300
              hover:text-blue-500
                group"
              onClick={(e) => {
                e.preventDefault();
                setDisplay(d.name);
              }}
              key={d.name}
            >
              <div className="group-hover:text-blue-500 text-zinc-900 transition-colors ease-in-out">
                {d.name}
              </div>
              {d.name === display ? (
                <FaRegDotCircle size="40" className={`group-hover:-translate-x-${d.translate} transition-all eas-in-out`} />
              ) : (
                <FaRegCircle size="40" className={`group-hover:-translate-x-${d.translate} transition-all eas-in-out`} />
              )}
            </button>
          ))}
        </ul>
        <div className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl"></div>
      </main>
      <GiVibratingShield className="text-blue-300 hover:text-blue-500 cursor-pointer fixed right-1 bottom-1 size-36 hover:-translate-y-1 transition ease-in-out delay-250 duration-300" />
    </>
  );
};

export default BuildPage;

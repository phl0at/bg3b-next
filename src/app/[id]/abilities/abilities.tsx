"use client";
import React from "react";
import { Ability } from "./ability";
import { useStore } from "@/store/store";

export const Abilities = () => {
  const { abilityPoints, plus_1, plus_2 } = useStore((state) => state.current);
  const abilities = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  return (
    <div className="bg-zinc-800 shadow-xl w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div>{`Ability Points: ${abilityPoints}`}</div>
      <div className="w-[85%] flex flex-col gap-y-[5px]">
        <div className="relative top-8 text-sm flex flex-row items-end justify-end gap-x-[7px]">
          <div className={plus_2 === "" ? "text-red-700" : ""}>+2</div>
          <div className={plus_1 === "" ? "text-red-700" : ""}>+1</div>
        </div>
        {abilities.map((ability) => (
          <Ability key={ability} ability={ability} />
        ))}
      </div>
    </div>
  );
};

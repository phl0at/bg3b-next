"use client";
import React from "react";
import { Ability } from "./ability";

export const Abilities = () => {
  const abilities = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  return (
    <main className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div>{`Ability Points: 0`}</div>
      <div className="w-[80%] flex flex-col gap-y-[5px]">
        <div className="relative flex flex-row items-end justify-end gap-x-[8px]">
          <div>+2</div>
          <div>+1</div>
        </div>
        {abilities.map((ability) => (
          <Ability key={ability} ability={ability} />
        ))}
      </div>
    </main>
  );
};

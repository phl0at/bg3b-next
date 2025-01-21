"use client";
import React, { MouseEvent } from "react";
import Ability from "./ability";
import { useStore } from "@/store/store";
import { CiUndo } from "react-icons/ci";
import { StaticImageData } from "next/image";

const Abilities = ({ images }: { images: StaticImageData[] }) => {
  const {
    dispatch,
    current: { abilityPoints, plus_1, plus_2 },
  } = useStore((state) => state);
  const abilities = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "RESET ABILITIES", payload: "" });
  };

  return (
    <>
      <div className="flex justify-between w-[80%] h-[30px]">
        <div className="w-[30px]"></div>
        <div className="w-[30px]">
          {abilityPoints < 27 && (
            <button onClick={handleReset}>
              <CiUndo
                size="50"
                className="text-amber-100 hover:text-amber-400"
              />
            </button>
          )}
        </div>
      </div>
      <div className="text-amber-400 text-3xl">{`Ability Points: ${abilityPoints}`}</div>
      <div className="w-[85%] flex flex-col gap-y-[5px]">
        <div className="relative top-8 text-sm flex flex-row items-end justify-end gap-x-[7px]">
          <div
            className={`text-lg ${
              plus_2 === "" ? "text-red-700" : "text-amber-100"
            }`}
          >
            +2
          </div>
          <div
            className={`text-lg ${
              plus_2 === "" ? "text-red-700" : "text-amber-100"
            }`}
          >
            +1
          </div>
        </div>
        {abilities.map((ability, i) => (
          <Ability key={ability} ability={ability} image={images[i]} />
        ))}
      </div>
    </>
  );
};

export default Abilities;

"use client";
import React, { MouseEvent } from "react";
import Ability from "./ability";
import { useStore } from "@/store/store";
import { CiUndo } from "react-icons/ci";

const Abilities = () => {
  const { abilityPoints, plus_1, plus_2 } = useStore((state) => state.current);
  const { dispatch } = useStore((state) => state);
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
      <div className="flex justify-between w-5/6 h-[30px]">
        <div className="w-[30px]"></div>
        <div>{`Abilities`}</div>
        <div className="w-[30px]">
          {abilityPoints < 27 && (
            <button onClick={handleReset}>
              <CiUndo size="30" />
            </button>
          )}
        </div>
      </div>
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
    </>
  );
};

export default Abilities;

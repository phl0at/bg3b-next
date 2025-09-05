"use client";
import React, { MouseEvent } from "react";
import AbilityComponent from "./ability";
import { useStore } from "@/store/store";
import { CiUndo } from "react-icons/ci";
import Strength from "../../../public/images/stats/Strength.png";
import Dexterity from "../../../public/images/stats/Dexterity.png"
import Constitution from "../../../public/images/stats/Constitution.png"
import Intelligence from "../../../public/images/stats/Intelligence.png"
import Wisdom from "../../../public/images/stats/Wisdom.png"
import Charisma from "../../../public/images/stats/Charisma.png"

const AbilitiesComponent = () => {
  const {
    dispatch,
    current: { abilityPoints, plus1, plus2 },
  } = useStore((state) => state);
  const abilities = [
    { name: "strength", img: Strength },
    { name: "dexterity", img: Dexterity },
    { name: "constitution", img: Constitution },
    { name: "intelligence", img: Intelligence },
    { name: "wisdom", img: Wisdom },
    { name: "charisma", img: Charisma },
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
            className={`text-lg ${plus2 === "" ? "text-red-700" : "text-amber-100"
              }`}
          >
            +2
          </div>
          <div
            className={`text-lg ${plus1 === "" ? "text-red-700" : "text-amber-100"
              }`}
          >
            +1
          </div>
        </div>
        {abilities.map((ability) => (
          <AbilityComponent key={ability.name} ability={ability.name} img={ability.img} />
        ))}
      </div>
    </>
  );
};

export default AbilitiesComponent;

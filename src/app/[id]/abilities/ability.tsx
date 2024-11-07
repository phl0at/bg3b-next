import React, { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useStore } from "@/store/store";

export const Ability = ({ ability }: { ability: string }) => {
  const titleCaseStat = ability[0].toUpperCase() + ability.slice(1);
  const val = useStore((state) => state.current[ability]);
  const [clicks, setClicks] = useState(val - 8);
  const { plus_1, plus_2, abilityPoints } = useStore((state) => state.current);
  const { dispatch } = useStore((state) => state);
  
  // An ability can only be clicked/increased 7 times.
  // This will track the number of increases by setting the # of clicks
  // to the ability's current value, minus its base value.
  // The base value changes depending on whether a +1 or +2 bonus is applied to the ability.
  useEffect(() => {
    if (plus_2 === ability) {
      setClicks(val - 10);
    } else if (plus_1 === ability) {
      setClicks(val - 9);
    } else {
      setClicks(val - 8);
    }
  }, [val]);

  // The first 5 increases to an ability cost 1 point and the last two cost 2 points.
  // These two functions ensure the correct amount of ability
  // points are added or subtracted based on how many times
  // an ability has been clicked/increased.
  const clickRaise = (e: MouseEvent<HTMLButtonElement>, type: string) => {
    e.preventDefault();
    if (clicks < 5) {
      dispatch({ type: "LOWER ABILITY POINTS", payload: 1 });
      dispatch({ type: "INCREASE ABILITY", payload: type });
    } else if (clicks >= 5 && abilityPoints > 1) {
      dispatch({ type: "LOWER ABILITY POINTS", payload: 2 });
      dispatch({ type: "INCREASE ABILITY", payload: type });
      // } else {
      // Throw an error if the user tries increasing an ability
      // that's been increased 5 times but only 1 point remains.
      // setModalContent(
      //   <ErrorModal
      //     errors={{
      //       FAQ: ["Increasing this ability requires 2 points"],
      //     }}
      //   />
      // );
    }
  };
  const clickLower = (e: MouseEvent<HTMLButtonElement>, type: string) => {
    e.preventDefault();
    if (clicks < 6) {
      dispatch({ type: "RAISE ABILITY POINTS", payload: 1 });
      dispatch({ type: "DECREASE ABILITY", payload: type });
    } else {
      dispatch({ type: "RAISE ABILITY POINTS", payload: 2 });
      dispatch({ type: "DECREASE ABILITY", payload: type });
    }
  };

  // A user cannot set the +1 and +2 bonuses to the same ability.
  // These functions will clear any existing bonuses
  // to the chosen ability before applying new ones
  const clickPlusTwo = (e: MouseEvent<HTMLButtonElement>, ability: string) => {
    e.preventDefault();
    if (plus_2 === ability) {
      dispatch({
        type: "REMOVE BONUS",
        payload: { amount: "plus_2", ability },
      });
    } else {
      if (plus_1 === ability) {
        dispatch({
          type: "REMOVE BONUS",
          payload: { amount: "plus_1", ability },
        });
      }
      dispatch({ type: "SET BONUS", payload: { amount: "plus_2", ability } });
    }
  };

  const clickPlusOne = (e: MouseEvent<HTMLButtonElement>, ability: string) => {
    e.preventDefault();
    if (plus_1 === ability) {
      dispatch({
        type: "REMOVE BONUS",
        payload: { amount: "plus_1", ability },
      });
    } else {
      if (plus_2 === ability) {
        dispatch({
          type: "REMOVE BONUS",
          payload: { amount: "plus_2", ability },
        });
      }
      dispatch({ type: "SET BONUS", payload: { amount: "plus_1", ability } });
    }
  };

  return (
    <main className="flex flex-row justify-between">
      <div className="flex items-center">
        <Image
          priority={true}
          src={`https://ik.imagekit.io/phl0at/images/stat_icons/${titleCaseStat}.png`}
          alt=""
          width={85}
          height={85}
        />
        <div>{titleCaseStat}</div>
      </div>
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex items-center justify-center gap-x-[4px]">
          <button
            disabled={clicks < 1 || abilityPoints > 26}
            className={
              clicks < 1 || abilityPoints > 26
                ? "text-gray-600 cursor-default"
                : ""
            }
            onClick={(e) => clickLower(e, ability)}
          >
            <CiCircleMinus size="35" />
          </button>
          <div>{val}</div>
          <button
            disabled={clicks > 6 || abilityPoints < 1}
            className={
              clicks > 6 || abilityPoints < 1
                ? "text-gray-600 cursor-default"
                : ""
            }
            onClick={(e) => clickRaise(e, ability)}
          >
            <CiCirclePlus size="35" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-[6px]">
          <button
            className="w-[16px] h-[16px] border-solid border-[2px]"
            onClick={(e) => clickPlusTwo(e, ability)}
          />
          <button
            className="w-[16px] h-[16px] border-solid border-[2px]"
            onClick={(e) => clickPlusOne(e, ability)}
          />
        </div>
      </div>
    </main>
  );
};

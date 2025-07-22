import React, { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useStore } from "@/store/store";

const AbilityComponent = ({ ability }: { ability: string }) => {
  const titleCaseStat = ability[0].toUpperCase() + ability.slice(1);
  const {
    dispatch,
    current: { plus1, plus2, abilityPoints },
  } = useStore((state) => state);
  const val = useStore((state) => state.current[ability]);
  const [clicks, setClicks] = useState(val - 8);

  // An ability can only be clicked/increased 7 times.
  // Each time the ability's + or - button is clicked, the "clicks" variable will
  // be calculated as the difference between 8 (lowest possible value)
  // and the current value. This calculation changes depending on whether
  // a +1 or +2 bonus is applied to the ability.
  useEffect(() => {
    if (plus2 === ability) {
      setClicks(val - 10);
    } else if (plus1 === ability) {
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
    } else {
      // Throw an error if the user tries increasing an ability
      // that's been increased 5 times but only 1 point remains.
      alert("Increasing abilities beyond 13 requires 2 Ability Points!");
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
    if (plus2 === ability) {
      dispatch({
        type: "REMOVE BONUS",
        payload: { amount: "plus2", ability },
      });
    } else {
      if (plus1 === ability) {
        dispatch({
          type: "REMOVE BONUS",
          payload: { amount: "plus1", ability },
        });
      }
      dispatch({ type: "SET BONUS", payload: { amount: "plus2", ability } });
    }
  };

  const clickPlusOne = (e: MouseEvent<HTMLButtonElement>, ability: string) => {
    e.preventDefault();
    if (plus1 === ability) {
      dispatch({
        type: "REMOVE BONUS",
        payload: { amount: "plus1", ability },
      });
    } else {
      if (plus2 === ability) {
        dispatch({
          type: "REMOVE BONUS",
          payload: { amount: "plus2", ability },
        });
      }
      dispatch({ type: "SET BONUS", payload: { amount: "plus1", ability } });
    }
  };

  return (
    <main className="flex flex-row justify-between text-2xl text-amber-100">
      <div className="flex items-center">
        <Image
          src={`/images/full/stats/${ability}.png`}
          blurDataURL={`/images/loading/stats/${ability}.png`}
          placeholder="blur"
          alt=""
          width={120}
          height={120}
          loading="lazy"
        />
        <div>{titleCaseStat}</div>
      </div>
      <div className="flex flex-row items-center justify-evenly gap-x-5">
        <div className="flex items-center justify-center gap-x-2">
          <button
            disabled={clicks < 1 || abilityPoints > 26}
            className={`hover:text-amber-400 ${
              clicks < 1 || abilityPoints > 26
                ? "text-gray-600 cursor-default"
                : ""
            }`}
            onClick={(e) => clickLower(e, ability)}
          >
            <CiCircleMinus size="50" />
          </button>
          <div className="w-[18px] flex justify-center">{val}</div>
          <button
            disabled={clicks > 6 || abilityPoints < 1}
            className={`hover:text-amber-400 ${
              clicks > 6 || abilityPoints < 1
                ? "text-gray-600 cursor-default"
                : ""
            }`}
            onClick={(e) => clickRaise(e, ability)}
          >
            <CiCirclePlus size="50" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-[6px]">
          <button
            className={`${
              plus2 === ability && "bg-amber-400"
            } w-[20px] h-[20px] border-solid border-[2px] border-amber-100 hover:border-amber-400`}
            onClick={(e) => clickPlusTwo(e, ability)}
          />
          <button
            className={`${
              plus1 === ability && "bg-amber-400"
            } w-[20px] h-[20px] border-solid border-[2px] border-amber-100 hover:border-amber-400`}
            onClick={(e) => clickPlusOne(e, ability)}
          />
        </div>
      </div>
    </main>
  );
};

export default AbilityComponent;

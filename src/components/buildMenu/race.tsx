"use client";
import React from "react";
import Image from "next/image";
import { useStore } from "@/store/store";
import { Race } from "@/lib/types";
import Races from "@/lib/races";


const RaceComponent = () => {
  const {
    dispatch,
    current: { race, origin },
  } = useStore((state) => state);
  const setter = (race: Race) => {
    if (origin != 7 && origin != 6) {
      alert(
        "Cannot change the Race of your current Character. Select either Custom or The Dark Urge Origin to edit your Race."
      );
    } else {
      dispatch({ type: "SET RACE", payload: race });
    }
  };


  return (
    <>
      <div className="grid grid-cols-4 gap-x-3 gap-y-5 w-[90%] text-amber-100">
        {Races.map((element: Race) => {
          return (
            <div
              className="flex flex-col gap-y-1 justify-center items-center cursor-pointer w-fill h-fill hover:text-amber-400"
              key={element.name}
              onClick={() => setter(element)}
            >
              <div
                style={{
                  outline: element.id === race ? "solid" : "none",
                }}
                className="rounded-md"
              >
                <Image
                  src={element.img}
                  placeholder="blur"
                  alt=""
                  width={130}
                  height={130}
                  className="rounded-md object-cover"
                />
              </div>
              {element.name}
            </div>
          );
        })}
      </div>
      <div className="w-[80%] gap-y-3 flex flex-col mt-12 text-left text-amber-100">
        <p className="text-amber-400 underline">Description</p>
        <p className="text-md">{Races[race].description}</p>
      </div>
    </>
  );
};

export default RaceComponent;

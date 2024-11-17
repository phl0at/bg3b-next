"use client";
import { useStore } from "@/store/store";
import Image from "next/image";
import React from "react";

const Races = ({ races }: { races: Race[] }) => {
  const race = useStore((state) => state.current.race);
  const dispatch = useStore((state) => state.dispatch);

  return (
    <main className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {races.map((race) => (
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            key={race.id}
            onClick={() => dispatch({ type: "SET RACE", payload: race.id })}
          >
            <Image
              className="object-cover"
              width={90}
              height={90}
              src={`https://ik.imagekit.io/phl0at/images/race_icons/${race.name}.png`}
              alt=""
            />
            {race.name}
          </div>
        ))}
      </div>
      <div className="text-center">{races[race - 1].description}</div>
    </main>
  );
};

export default Races;

"use client";
import { useStore } from "@/store/store";
import Image from "next/image";
import React from "react";

export function Backgrounds({ backgrounds }: { backgrounds: Background[] }) {
  const background = useStore((state) => state.current.background);
  const dispatch = useStore((state) => state.dispatch);

  return (
    <div className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {backgrounds.map((bg) => {
          if (bg.id < 12)
            return (
              <div
                className="flex flex-col justify-center items-center cursor-pointer"
                key={bg.id}
                onClick={() => dispatch({type: "SET BACKGROUND", payload: bg.id})}
              >
                <Image
                  className="object-cover"
                  width={90}
                  height={90}
                  src={`https://ik.imagekit.io/phl0at/images/bg_icons/${bg.name}.png`}
                  alt=""
                />
                {bg.name}
              </div>
            );
        })}
      </div>
      <div className="text-center">
        {backgrounds[background - 1].description}
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export const Ability = ({ ability }: { ability: string }) => {
  const titleCaseStat = ability[0].toUpperCase() + ability.slice(1);
  return (
    <main className="flex flex-row justify-between">
      <div className="flex items-center">
        <Image
          src={`https://ik.imagekit.io/phl0at/images/stat_icons/${titleCaseStat}.png`}
          alt=""
          width={80}
          height={50}
        />
        <div>{titleCaseStat}</div>
      </div>
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex items-center justify-center gap-x-[4px]">
          <button className="disable/enable">
            <CiCircleMinus size="35" />
          </button>
          <div>{"val"}</div>
          <button className="disable/enable">
            <CiCirclePlus size="35" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-[6px]">
          <button className="w-[16px] h-[16px] border-solid border-[2px]" />
          <button className="w-[16px] h-[16px] border-solid border-[2px]" />
        </div>
      </div>
    </main>
  );
};

"use client";
import React from "react";
import { useStore } from "@/store/store";
import CurrentEquipment from "./currentEquipment";
import ItemList from "./itemList";

const Equipment = () => {
  const { showEquipment } = useStore((state) => state);

  return (
    <div
      className="
    bg-opacity-80
    bg-stone-950
    outline-amber-400
    outline
    shadow-black
    shadow-2xl
    w-[40%]
    max-w-[760px]
    min-w-[440px]
    h-[93%]
    max-h-[1080px]
    min-h-[615px]
    rounded-3xl
    flex
    flex-col
    justify-start
    items-center
    py-8"
    >
      {showEquipment === "current" ? (
        <CurrentEquipment />
      ) : (
        <ItemList slot={showEquipment} />
      )}
    </div>
  );
};

export default Equipment;

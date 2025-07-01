"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useStore } from "@/store/store";

const BuildComponent = () => {
  const buildMenu = useStore((state) => state.buildMenu);
  const DynamicOrigins = dynamic(() => import("@/components/origin"), {
    loading: () => <p>LOADING DATA</p>,
  });
  const DynamicRaces = dynamic(() => import("@/components/race"), {
    loading: () => <p>LOADING DATA</p>,
  });

  return (
    <div
      className="
        text-lg
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
        py-12"
    >
      {buildMenu === "Origins" && <DynamicOrigins />}
      {buildMenu === "Races" && <DynamicRaces />}
    </div>
  );
};

export default BuildComponent;

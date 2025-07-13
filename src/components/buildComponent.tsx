"use client";
import React from "react";
import dynamic from "next/dynamic";
import { PulseLoader } from "react-spinners";
import { useStore } from "@/store/store";

const BuildComponent = () => {
  const buildMenu = useStore((state) => state.buildMenu);
  const DynamicOrigins = dynamic(() => import("@/components/origin"), {
    loading: () => <PulseLoader className="my-80" color="#e4c274" />,
  });
  const DynamicRaces = dynamic(() => import("@/components/race"), {
    loading: () => <PulseLoader className="my-80" color="#e4c274" />,
  });
  const DynamicBackgrounds = dynamic(() => import("@/components/background"), {
    loading: () => <PulseLoader className="my-80" color="#e4c274" />,
  });
  const DynamicClasses = dynamic(() => import("@/components/classes"), {
    loading: () => <PulseLoader className="my-80" color="#e4c274" />,
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
      {buildMenu === "Backgrounds" && <DynamicBackgrounds />}
      {buildMenu === "Classes" && <DynamicClasses />}
    </div>
  );
};

export default BuildComponent;

"use client";
import React from "react";
import Image from "next/image";
import { useStore } from "@/store/store";
import { Origin } from "@/lib/types";
import Origins from "@/lib/origins";
import Description from "./description";

const OriginComponent = () => {
  const {
    dispatch,
    current: { origin },
  } = useStore((state) => state);
  const setter = (origin: Origin) =>
    dispatch({ type: "SET ORIGIN", payload: origin });


  return (
    <>
      <div className="grid grid-cols-4 gap-x-3 gap-y-5 w-[90%] text-amber-100">
        {Origins.map((element: Origin, i: number) => {
          return (
            <div
              className="flex flex-col gap-y-1 justify-center items-center cursor-pointer w-fill h-fill hover:text-amber-400"
              key={element.name}
              onClick={() => setter(element)}
            >
              <div
                style={{
                  outline: element.id === origin ? "solid" : "none",
                }}
                className="rounded-md"
              >
                <Image
                  src={element.img}
                  placeholder="blur"
                  alt=""
                  width={155}
                  height={155}
                  className="rounded-md object-cover"
                />
              </div>
              {element.name}
            </div>
          );
        })}
      </div>
      <Description data={Origins} selectedElement={origin} />
    </>
  );
};

export default OriginComponent;

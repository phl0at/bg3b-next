"use client";
import { useStore } from "@/store/store";
import React from "react";
import Backgrounds from "@/lib/backgrounds";
import Image from "next/image";
import { Background } from "@/lib/types";

const BackgroundComponent = () => {
  const {
    dispatch,
    current: { background, origin },
  } = useStore((state) => state);
  const setter = (background: Background) => {
    if (origin != 7) {
      alert(
        "Cannot change the Background of your current Origin Character. Select the Custom Origin to edit your Background."
      );
    } else {
      dispatch({ type: "SET BACKGROUND", payload: background });
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-x-3 gap-y-5 w-[90%] text-amber-100">
        {Backgrounds.slice(0, Backgrounds.length - 1).map((element: Background) => {
          return (
            <div
              className="flex flex-col gap-y-1 justify-center items-center cursor-pointer w-fill h-fill hover:text-amber-400"
              key={element.name}
              onClick={() => setter(element)}
            >
              <div
                style={{
                  outline: element.id === background ? "solid" : "none",
                }}
                className="rounded-md"
              >
                <Image
                  src={element.img}
                  placeholder="blur"
                  alt=""
                  width={120}
                  height={120}
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
        <p className="text-md">{Backgrounds[background].description}</p>
      </div>
    </>
  );
};

export default BackgroundComponent;

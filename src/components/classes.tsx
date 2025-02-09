"use client";
import { StaticImageData } from "next/image";
import React, { MouseEvent } from "react";
import { useStore } from "@/store/store";
import SubClassComponent from "./subClasses";
import DataMapper from "./dataMapper";

const Classes = ({
  classes,
  subClasses,
  images,
}: {
  classes: Class[];
  subClasses: SubClass[];
  images: StaticImageData[];
}) => {
  const { dispatch, selectedClass } = useStore((state) => state);
  const { level } = useStore((state) => state.current);
  const setter = (_class: any) =>
    dispatch({ type: "SET CLASS", payload: _class });
  const selectedClassInBuild = useStore(
    (state) => state.current.classList[selectedClass]
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD CLASS", payload: classes[selectedClass - 1] });
  };

  return (
    <>
      <DataMapper
        data={classes}
        selectedElement={selectedClass}
        setter={setter}
        width={105}
        height={105}
        button={
          <div className="w-[78%] mt-5 gap-x-5 flex items-center justify-between text-amber-100 ">
            <div className="gap-x-5 flex items-center justify-start text-amber-100 ">
              <button
                className="p-3 outline rounded-lg hover:text-amber-400"
                onClick={handleClick}
              >
                Add Class
              </button>

              <div className="flex flex-col items-start justify-center">
                <p>
                  {`${classes[selectedClass - 1].name}: ${
                    classes[selectedClass - 1].level || 0
                  }`}
                </p>
                <p>{`Total: ${level} / 12`}</p>
              </div>
            </div>
            <button className="p-3 outline rounded-lg hover:text-red-400">
              Reset Classes
            </button>
          </div>
        }
        images={images}
      />
      <SubClassComponent
        selectedClassInBuild={selectedClassInBuild}
        subClasses={subClasses}
      />
    </>
  );
};

export default Classes;

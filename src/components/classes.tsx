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
          <div className="w-full mt-5 flex items-center justify-center text-amber-100 ">
            <button className="p-3 outline rounded-lg hover:text-amber-400" onClick={handleClick}>Add Class</button>
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

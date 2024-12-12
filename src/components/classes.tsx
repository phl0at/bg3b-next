"use client";
import React, { MouseEvent } from "react";
import { useStore } from "@/store/store";
import SubClassComponent from "./subClasses";
import DataMapper from "./dataMapper";

const Classes = ({
  classes,
  subClasses,
}: {
  classes: Class[];
  subClasses: SubClass[];
}) => {
  const setter = (id: number) => dispatch({ type: "SET CLASS", payload: id });
  const { dispatch, selectedClass } = useStore((state) => state);
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
        route="class"
        width={90}
        height={90}
        button={
          <div>
            <button onClick={handleClick}>Add Class</button>
          </div>
        }
      />
      <SubClassComponent
        selectedClassInBuild={selectedClassInBuild}
        subClasses={subClasses}
      />
    </>
  );
};

export default Classes;

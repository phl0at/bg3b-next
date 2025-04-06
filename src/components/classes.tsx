"use client";
import React, { MouseEvent, useState } from "react";
import { useStore } from "@/store/store";
import SubClassComponent from "./subClasses";
import DataMapper from "./dataMapper";
import SubClassButton from "./subClassButton";

const Classes = ({
  classes,
  subClasses,
  images,
}: {
  classes: Class[];
  subClasses: SubClass[];
  images: string[];
}) => {
  const { dispatch, selectedClass } = useStore((state) => state);
  const { level } = useStore((state) => state.current);
  const [display, setDisplay] = useState("class");
  const setter = (_class: any) =>
    dispatch({ type: "SET CLASS", payload: _class });
  const selectedClassInBuild = useStore(
    (state) => state.current.classList[selectedClass]
  );

  const handleClickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD CLASS", payload: classes[selectedClass - 1] });
  };

  const handleClickReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CLEAR CLASSES" });
  };

  return (
    <>
      {display === "class" && (
        <>
          <DataMapper
            data={classes}
            selectedElement={selectedClass}
            setter={setter}
            width={105}
            height={105}
            button={
              <div className="w-[78%] mt-12 gap-x-5 flex items-center justify-between text-amber-100 ">
                <div className="gap-x-5 flex items-center justify-start text-amber-100 ">
                  <button
                    className="p-3 outline rounded-lg hover:text-amber-400"
                    onClick={handleClickAdd}
                  >
                    Add Class
                  </button>

                  <div className="flex flex-col items-start justify-center">
                    <p>
                      {`${classes[selectedClass - 1].name}: ${
                        selectedClassInBuild?.level || 0
                      }`}
                    </p>
                    <p>{`Total: ${level} / 12`}</p>
                  </div>
                </div>
                <button
                  className="p-3 outline rounded-lg hover:text-red-400"
                  onClick={handleClickReset}
                >
                  Reset Classes
                </button>
              </div>
            }
            menu={"classes"}
            images={images}
          />
          <SubClassButton
            selectedClassInBuild={selectedClassInBuild}
            subClasses={subClasses}
            setDisplay={setDisplay}
          />
        </>
      )}
      {display === "subclass" && (
        <SubClassComponent
          selectedClassInBuild={selectedClassInBuild}
          subClasses={subClasses}
          setDisplay={setDisplay}
        />
      )}
    </>
  );
};

export default Classes;

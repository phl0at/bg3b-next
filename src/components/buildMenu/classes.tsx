"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "@/store/store";
import { Class } from "@/lib/types";
import SubClassComponent from "./subClasses";
import AddClassButton from "./addClassButton";
import Classes from "@/lib/classes";
import SubClasses from "@/lib/subclasses";
import Description from "./description";
import ClassInfo from "./classInfo";


const ClassComponent = () => {
  const {
    dispatch,
    selectedClass,
    current: { classList, level },
  } = useStore((state) => state);
  const selectedClassInBuild = classList[selectedClass];
  const [display, setDisplay] = useState("class");
  const setter = (_class: any) =>
    dispatch({ type: "SET CLASS", payload: _class });
  const availableSubClasses = SubClasses.filter(
    (subClass) =>
      selectedClassInBuild?.id === subClass.class &&
      selectedClassInBuild?.level >= subClass.level
  );

  return (
    <>
      {display === "class" && (
        <>
          <div className="grid grid-cols-4 gap-x-3 gap-y-5 w-[90%] text-amber-100">
            {Classes.map((element: Class, i: number) => {
              return (
                <div
                  className="flex flex-col gap-y-1 justify-center items-center cursor-pointer w-fill h-fill hover:text-amber-400"
                  key={element.name}
                  onClick={() => setter(element)}
                >
                  <div
                    style={{
                      outline: element.id === selectedClass ? "solid" : "none",
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
          <AddClassButton
            selectedClass={selectedClass}
            selectedClassInBuild={selectedClassInBuild}
            availableSubClasses={availableSubClasses}
            setDisplay={setDisplay}
          />
          <ClassInfo selectedClass={selectedClass} addedClass={selectedClassInBuild} level={level} />
          <Description data={Classes} selectedElement={selectedClass} />
        </>
      )}
      {display === "subclass" && (
        <SubClassComponent
          selectedClassInBuild={selectedClassInBuild}
          availableSubClasses={availableSubClasses}
          setDisplay={setDisplay}
        />
      )}
    </>
  );
};

export default ClassComponent;

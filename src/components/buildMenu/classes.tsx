"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "@/store/store";
import { Class } from "@/lib/types";
import SubClassComponent from "./subClasses";
import AddClassButton from "./addClassButton";
import Classes from "@/lib/classes";
import ClassInfo from "./levelInfo";


const ClassComponent = () => {
  const {
    dispatch,
    selectedClass,
  } = useStore((state) => state);
  const [display, setDisplay] = useState("class");
  const setter = (_class: any) =>
    dispatch({ type: "SET CLASS", payload: _class });

  return (
    <>
      {display === "class" && (
        <>
          <div className="grid grid-cols-4 gap-x-3 gap-y-5 w-[90%] text-amber-100">
            {Classes.map((element: Class) => {
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
            setDisplay={setDisplay}
          />
          <ClassInfo />
          <div className="w-[80%] gap-y-3 flex flex-col mt-12 text-left text-amber-100">
            <p className="text-amber-400 underline">Description</p>
            <p className="text-md">{Classes[selectedClass].description}</p>
          </div>
        </>
      )}
      {display === "subclass" && (
        <SubClassComponent
          setDisplay={setDisplay}
        />
      )}
    </>
  );
};

export default ClassComponent;

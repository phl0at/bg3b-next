"use client";
import React, { MouseEvent, useState } from "react";
import { useStore } from "@/store/store";
import SubClassComponent from "./subClasses";
import SubClassButton from "./subClassButton";
import AddClassButton from "./addClassButton";
import DataMapper from "./dataMapper";
import Classes from "@/lib/classes";
import SubClasses from "@/lib/subclasses";

const ClassComponent = () => {
  const {
    dispatch,
    selectedClass,
    current: { level, classList },
  } = useStore((state) => state);

  const selectedClassInBuild = classList[selectedClass];
  const [display, setDisplay] = useState("class");
  const setter = (_class: any) =>
    dispatch({ type: "SET CLASS", payload: _class });

  return (
    <>
      {display === "class" && (
        <>
          <DataMapper
            data={Classes}
            selectedElement={selectedClass}
            setter={setter}
            width={105}
            height={105}
            button={
              <AddClassButton
                level={level}
                selectedClass={selectedClass}
                selectedClassInBuild={selectedClassInBuild}
              />
            }
            menu={"classes"}
          />
          <SubClassButton
            selectedClassInBuild={selectedClassInBuild}
            subClasses={SubClasses}
            setDisplay={setDisplay}
          />
        </>
      )}
      {display === "subclass" && (
        <SubClassComponent
          selectedClassInBuild={selectedClassInBuild}
          subClasses={SubClasses}
          setDisplay={setDisplay}
        />
      )}
    </>
  );
};

export default ClassComponent;

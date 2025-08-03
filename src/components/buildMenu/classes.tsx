"use client";
import React, { useState } from "react";
import { useStore } from "@/store/store";
import SubClassComponent from "./subClasses";
import SubClassButton from "./subClassButton";
import AddClassButton from "./addClassButton";
import Classes from "@/lib/classes";
import SubClasses from "@/lib/subclasses";
import MapSelections from "./mapSelections";
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

  //! Implement UI for Class/Total level in this component and the stats component on the right
  return (
    <>
      {display === "class" && (
        <>
          <MapSelections
            menu={"classes"}
            data={Classes}
            selectedElement={selectedClass}
            setter={setter}
            width={120}
            height={120}
          />
          <AddClassButton
            selectedClass={selectedClass}
            selectedClassInBuild={selectedClassInBuild}
          />
          <ClassInfo selectedClass={selectedClassInBuild} level={level} />
          <Description data={Classes} selectedElement={selectedClass} />
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

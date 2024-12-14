"use client";
import React, { MouseEvent } from "react";
import { useStore } from "@/store/store";
import SubClassComponent from "./subClasses";
import DataMapper from "./dataMapper";
import Barbarian from "../../public/classes/Barbarian.png";
import Bard from "../../public/classes/Bard.png";
import Cleric from "../../public/classes/Cleric.png";
import Druid from "../../public/classes/Druid.png";
import Fighter from "../../public/classes/Fighter.png";
import Monk from "../../public/classes/Monk.png";
import Paladin from "../../public/classes/Paladin.png";
import Ranger from "../../public/classes/Ranger.png";
import Rogue from "../../public/classes/Rogue.png";
import Sorcerer from "../../public/classes/Sorcerer.png";
import Warlock from "../../public/classes/Warlock.png";
import Wizard from "../../public/classes/Wizard.png";

const Classes = ({
  classes,
  subClasses,
}: {
  classes: Class[];
  subClasses: SubClass[];
}) => {
  const { dispatch, selectedClass } = useStore((state) => state);
  const setter = (item: {}) => dispatch({ type: "SET CLASS", payload: item });
  const selectedClassInBuild = useStore(
    (state) => state.current.classList[selectedClass]
  );
  const images = [
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard,
  ];

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
        width={90}
        height={90}
        button={
          <div>
            <button onClick={handleClick}>Add Class</button>
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

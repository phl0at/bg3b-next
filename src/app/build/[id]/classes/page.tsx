import React from "react";
import Classes from "@/components/classes";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";

const ClassPage = async () => {
  const classes = await getData("classes");
  const subClasses = await getData("subclasses");

  console.log(subClasses)
  const images = [
    "Barbarian.png",
    "Bard.png",
    "Cleric.png",
    "Druid.png",
    "Fighter.png",
    "Monk.png",
    "Paladin.png",
    "Ranger.png",
    "Rogue.png",
    "Sorcerer.png",
    "Warlock.png",
    "Wizard.png",
  ];

  return (
    <BuildComponent>
    </BuildComponent>
  );
};

export default ClassPage;

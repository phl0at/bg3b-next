import React from "react";
import Classes from "@/components/classes";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";
import Barbarian from "../../../../../public/classes/Barbarian.png";
import Bard from "../../../../../public/classes/Bard.png";
import Cleric from "../../../../../public/classes/Cleric.png";
import Druid from "../../../../../public/classes/Druid.png";
import Fighter from "../../../../../public/classes/Fighter.png";
import Monk from "../../../../../public/classes/Monk.png";
import Paladin from "../../../../../public/classes/Paladin.png";
import Ranger from "../../../../../public/classes/Ranger.png";
import Rogue from "../../../../../public/classes/Rogue.png";
import Sorcerer from "../../../../../public/classes/Sorcerer.png";
import Warlock from "../../../../../public/classes/Warlock.png";
import Wizard from "../../../../../public/classes/Wizard.png";

const ClassPage = async () => {
  //!Create a custom route in Neurelo to get both of these in one request
  const classes = await getData("classes");
  const subClasses = await getData("subclasses");
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

  return (
    <BuildComponent>
      <Classes classes={classes} subClasses={subClasses} images={images} />
    </BuildComponent>
  );
};

export default ClassPage;

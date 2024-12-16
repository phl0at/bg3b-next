import React from "react";
import Races from "@/components/race";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";
import Elf from "../../../../../public/races/Elf.png";
import Tiefling from "../../../../../public/races/Tiefling.png";
import Drow from "../../../../../public/races/Drow.png";
import Human from "../../../../../public/races/Human.png";
import Githyanki from "../../../../../public/races/Githyanki.png";
import Dwarf from "../../../../../public/races/Dwarf.png";
import HalfElf from "../../../../../public/races/HalfElf.png";
import Halfling from "../../../../../public/races/Halfling.png";
import Gnome from "../../../../../public/races/Gnome.png";
import Dragonborn from "../../../../../public/races/Dragonborn.png";
import HalfOrc from "../../../../../public/races/HalfOrc.png";

const RacePage = async () => {
  const races = await getData("races");
  const images = [
    Elf,
    Tiefling,
    Drow,
    Human,
    Githyanki,
    Dwarf,
    HalfElf,
    Halfling,
    Gnome,
    Dragonborn,
    HalfOrc,
  ];

  return (
    <BuildComponent>
      <Races races={races} images={images} />
    </BuildComponent>
  );
};

export default RacePage;

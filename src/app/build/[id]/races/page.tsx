import React from "react";
import Races from "@/components/race";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";


const RacePage = async () => {
  const races = await getData("races");
  const images = [
    "Elf.png",
    "Tiefling.png",
    "Drow.png",
    "Human.png",
    "Githyanki.png",
    "Dwarf.png",
    "HalfElf.png",
    "Halfling.png",
    "Gnome.png",
    "Dragonborn.png",
    "HalfOrc.png",
  ];

  return (
    <BuildComponent>
      <Races races={races} images={images} />
    </BuildComponent>
  );
};

export default RacePage;

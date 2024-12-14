"use client";
import { useStore } from "@/store/store";
import DataMapper from "./dataMapper";
import React from "react";
import Elf from "../../public/races/Elf.png";
import Tiefling from "../../public/races/Tiefling.png";
import Drow from "../../public/races/Drow.png";
import Human from "../../public/races/Human.png";
import Githyanki from "../../public/races/Githyanki.png";
import Dwarf from "../../public/races/Dwarf.png";
import HalfElf from "../../public/races/HalfElf.png";
import Halfling from "../../public/races/Halfling.png";
import Gnome from "../../public/races/Gnome.png";
import Dragonborn from "../../public/races/Dragonborn.png";
import HalfOrc from "../../public/races/HalfOrc.png";

const Races = ({ races }: { races: Race[] }) => {
  const setter = (race: Race) => dispatch({ type: "SET RACE", payload: race });
  const {
    dispatch,
    current: { race },
  } = useStore((state) => state);
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
    <DataMapper
      data={races}
      selectedElement={race}
      setter={setter}
      width={90}
      height={90}
      button={<></>}
      images={images}
    />
  );
};

export default Races;

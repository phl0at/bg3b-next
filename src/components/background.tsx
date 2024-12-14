"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";
import Acolyte from "../../public/backgrounds/Acolyte.png";
import Charlatan from "../../public/backgrounds/Charlatan.png";
import Criminal from "../../public/backgrounds/Criminal.png";
import Entertainer from "../../public/backgrounds/Entertainer.png";
import FolkHero from "../../public/backgrounds/Folk Hero.png";
import GuildArtisan from "../../public/backgrounds/Guild Artisan.png";
import Noble from "../../public/backgrounds/Noble.png";
import Outlander from "../../public/backgrounds/Outlander.png";
import Sage from "../../public/backgrounds/Sage.png";
import Soldier from "../../public/backgrounds/Soldier.png";
import Urchin from "../../public/backgrounds/Urchin.png";
// import HauntedOne from "../../public/backgrounds/Haunted One.png";

const Backgrounds = ({ backgrounds }: { backgrounds: Background[] }) => {
  const setter = (item: {}) =>
    dispatch({ type: "SET BACKGROUND", payload: item });
  const {
    dispatch,
    current: { background },
  } = useStore((state) => state);
  const images = [
    Acolyte,
    Charlatan,
    Criminal,
    Entertainer,
    FolkHero,
    GuildArtisan,
    Noble,
    Outlander,
    Sage,
    Soldier,
    Urchin,
  ];

  return (
    <DataMapper
      data={backgrounds.toSpliced(backgrounds.length - 1)}
      selectedElement={background}
      setter={setter}
      width={90}
      height={90}
      button={<></>}
      images={images}
    />
  );
};

export default Backgrounds;

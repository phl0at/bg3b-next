import React from "react";
import Backgrounds from "@/components/background";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";
import Acolyte from "../../../../../public/backgrounds/Acolyte.png";
import Charlatan from "../../../../../public/backgrounds/Charlatan.png";
import Criminal from "../../../../../public/backgrounds/Criminal.png";
import Entertainer from "../../../../../public/backgrounds/Entertainer.png";
import FolkHero from "../../../../../public/backgrounds/Folk Hero.png";
import GuildArtisan from "../../../../../public/backgrounds/Guild Artisan.png";
import Noble from "../../../../../public/backgrounds/Noble.png";
import Outlander from "../../../../../public/backgrounds/Outlander.png";
import Sage from "../../../../../public/backgrounds/Sage.png";
import Soldier from "../../../../../public/backgrounds/Soldier.png";
import Urchin from "../../../../../public/backgrounds/Urchin.png";

const BGPage = async () => {
  const backgrounds = await getData("backgrounds");
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
    <BuildComponent>
      <Backgrounds backgrounds={backgrounds} images={images} />
    </BuildComponent>
  );
};

export default BGPage;

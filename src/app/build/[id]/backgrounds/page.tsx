import React from "react";
import Backgrounds from "@/components/background";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";


const BGPage = async () => {
  const backgrounds = await getData("backgrounds");
  const images = [
    "Acolyte.png",
    "Charlatan.png",
    "Criminal.png",
    "Entertainer.png",
    "Folk Hero.png",
    "Guild Artisan.png",
    "Noble.png",
    "Outlander.png",
    "Sage.png",
    "Soldier.png",
    "Urchin.png",
  ];

  return (
    <BuildComponent>
      <Backgrounds backgrounds={backgrounds} images={images} />
    </BuildComponent>
  );
};

export default BGPage;

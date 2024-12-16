import React from "react";
import Origins from "@/components/origin";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";
import Karlach from "../../../../../public/origins/Karlach.webp";
import Astarion from "../../../../../public/origins/Astarion.webp";
import Custom from "../../../../../public/origins/Custom.webp";
import Gale from "../../../../../public/origins/Gale.webp";
import Laezel from "../../../../../public/origins/Laezel.webp";
import Shadowheart from "../../../../../public/origins/Shadowheart.webp";
import TheDarkUrge from "../../../../../public/origins/TheDarkUrge.webp";
import Wyll from "../../../../../public/origins/Wyll.webp";

const OriginPage = async () => {
  const origins = await getData("origins");
  const images = [
    Astarion,
    Laezel,
    Gale,
    Shadowheart,
    Wyll,
    Karlach,
    TheDarkUrge,
    Custom,
  ];

  return (
    <BuildComponent>
      <Origins origins={origins} images={images} />
    </BuildComponent>
  );
};

export default OriginPage;

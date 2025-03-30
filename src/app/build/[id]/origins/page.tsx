import React from "react";
import Origins from "@/components/origin";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";

const OriginPage = async () => {
  const origins = await getData("origins");
  const images = [
    "Astarion.webp",
    "Laezel.webp",
    "Gale.webp",
    "Shadowheart.webp",
    "Wyll.webp",
    "Karlach.webp",
    "TheDarkUrge.webp",
    "Custom.webp",
  ];

  return (
    <BuildComponent>
      <Origins origins={origins} images={images} />
    </BuildComponent>
  );
};

export default OriginPage;

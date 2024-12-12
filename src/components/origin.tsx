"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";
import Karlach from "../../public/origins/Karlach.webp";
import Astarion from "../../public/origins/Astarion.webp";
import Custom from "../../public/origins/Custom.webp";
import Gale from "../../public/origins/Gale.webp";
import Laezel from "../../public/origins/Laezel.webp";
import Shadowheart from "../../public/origins/Shadowheart.webp";
import TheDarkUrge from "../../public/origins/TheDarkUrge.webp";
import Wyll from "../../public/origins/Wyll.webp";

const Origins = ({ origins }: { origins: Origin[] }) => {
  const {
    dispatch,
    current: { origin },
  } = useStore((state) => state);
  const setter = (id: number) => dispatch({ type: "SET ORIGIN", payload: id });
  const images = [
    Astarion,
    Custom,
    Gale,
    Karlach,
    Laezel,
    Shadowheart,
    TheDarkUrge,
    Wyll,
  ];

  return (
    <DataMapper
      images={images}
      data={origins}
      selectedElement={origin}
      setter={setter}
      width={125}
      height={150}
      button={<></>}
    />
  );
};

export default Origins;

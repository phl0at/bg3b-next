"use client";
import { useStore } from "@/store/store";
import React from "react";
import DataMapper from "./dataMapper";
import Races from "@/lib/races";

const RaceComponent = () => {
  const {
    dispatch,
    current: { race },
  } = useStore((state) => state);
  const setter = (race: Race) => dispatch({ type: "SET RACE", payload: race });

  return (
    <DataMapper
      menu={"races"}
      data={Races}
      selectedElement={race}
      setter={setter}
      width={120}
      height={120}
      button={<></>}
    />
  );
};

export default RaceComponent;

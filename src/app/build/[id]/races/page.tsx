import React from "react";
import Races from "@/components/race";
import BuildComponent from "@/components/buildComponent";
import { getData } from "@/lib/utils";

const RacePage = async () => {
  const races = await getData("races");

  return (
    <BuildComponent>
      <Races races={races} />
    </BuildComponent>
  );
};

export default RacePage;

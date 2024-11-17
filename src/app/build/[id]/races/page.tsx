import React from "react";
import Races from "./race";
import { getData } from "@/lib/utils";
import BuildLayout from "../../layout";

const RacePage = async () => {
  const races = await getData("races");

  return (
    <BuildLayout>
      <Races races={races} />
    </BuildLayout>
  );
};

export default RacePage;

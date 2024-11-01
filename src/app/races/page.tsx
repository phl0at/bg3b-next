import React from "react";
import BuildMenuList from "@/components/buildMenuList";
import Races from "./race";
import { getData } from "@/lib/utils";

const RacePage = async () => {
  const races = await getData("races");

  return (
    <main className="w-screen h-screen absolute top-0 py-3 gap-4 flex justify-center items-center">
      <BuildMenuList />
      <Races races={races} />
    </main>
  );
};

export default RacePage;

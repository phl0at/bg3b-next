import { getData } from "@/lib/utils";
import BuildMenuList from "@/components/buildMenuList";
import React from "react";
import Races from "./race";

const RacePage = async () => {
  const races = await getData("races");

  return (
    <main className="w-screen h-screen fixed left-[21%] top-0 py-3 gap-4 flex items-center">
      <BuildMenuList />
      <Races races={races} />
    </main>
  );
};

export default RacePage;

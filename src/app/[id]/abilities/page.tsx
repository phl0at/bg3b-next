import React from "react";
import BuildMenuList from "@/components/buildMenuList";
import { Abilities } from "./abilities";

const AbilitiesPage = async () => {
  return (
    <main className="w-screen h-screen fixed left-[21%] top-0 py-3 gap-4 flex items-center">
      <BuildMenuList />
      <Abilities />
    </main>
  );
};

export default AbilitiesPage;

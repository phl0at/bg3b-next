import React from "react";
import BuildMenuList from "@/components/buildMenuList";
import { Abilities } from "./abilities";

const AbilitiesPage = async () => {
  return (
    <main className="w-screen h-screen absolute top-0 py-3 gap-4 flex justify-center items-center">
      <BuildMenuList />
      <Abilities />
    </main>
  );
};

export default AbilitiesPage;

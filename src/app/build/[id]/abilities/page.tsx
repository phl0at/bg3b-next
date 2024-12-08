import React from "react";
import { Abilities } from "./abilities";
import BuildMenuList from "@/components/buildMenuList";
import BuildComponent from "@/components/buildComponent";

const AbilitiesPage = async () => {
  return (
    <BuildComponent>
      <Abilities />
    </BuildComponent>
  );
};

export default AbilitiesPage;

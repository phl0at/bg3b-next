import React from "react";
import { Abilities } from "./abilities";
import BuildLayout from "../../layout";
import BuildMenuList from "@/components/buildMenuList";

const AbilitiesPage = async () => {
  return (
    <BuildLayout>
      <BuildMenuList />
      <Abilities />
    </BuildLayout>
  );
};

export default AbilitiesPage;

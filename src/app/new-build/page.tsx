import BuildMenuList from "@/components/buildMenu/buildMenuList";
import BuildComponent from "@/components/buildMenu/buildComponent";
import Equipment from "@/components/equipmentMenu/equipment";
import React from "react";

const BuildPage = () => {
  return (
    <main className="h-screen flex gap-4 items-center justify-center mr-[9.85%]">
      <BuildMenuList />
      <BuildComponent />
      <Equipment />
    </main>
  );
};

export default BuildPage;

import BuildMenuList from "@/components/buildMenu/buildMenuList";
import BuildComponent from "@/components/buildMenu/buildComponent";
import Equipment from "@/components/equipmentMenu/equipment";
import InfoPanel from "@/components/infoPanel/mainPanel";
import React from "react";

const BuildPage = () => {
  return (
    <main className="h-screen flex gap-4 items-center justify-center">
      <BuildMenuList />
      <BuildComponent />
      <Equipment />
      <InfoPanel />
    </main>
  );
};

export default BuildPage;

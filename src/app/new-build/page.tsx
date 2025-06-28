import BuildMenuList from "@/components/buildMenuList";
import BuildComponent from "@/components/buildComponent";
import Equipment from "@/components/equipment";
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

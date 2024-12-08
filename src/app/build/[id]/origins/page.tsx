import React from "react";
import Origins from "./origin";
import { getData } from "@/lib/utils";
import BuildMenuList from "@/components/buildMenuList";

const OriginPage = async () => {
  const origins = await getData("origins");

  return (
    <main className="w-screen h-screen fixed left-[21%] top-0 py-3 gap-4 flex items-center">
      <BuildMenuList />
      <Origins origins={origins} />
    </main>
  );
};

export default OriginPage;

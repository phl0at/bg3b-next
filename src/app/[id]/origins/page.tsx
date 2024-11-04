import React from "react";
import BuildMenuList from "@/components/buildMenuList";
import Origins from "./origin";
import { getData } from "@/lib/utils";

const OriginPage = async () => {
  const origins = await getData("origins");

  return (
    <main className="w-screen h-screen absolute top-0 py-3 gap-4 flex justify-center items-center">
      <BuildMenuList />
      <Origins origins={origins} />
    </main>
  );
};

export default OriginPage;

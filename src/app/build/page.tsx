import React from "react";
import BuildMenuList from "../buildMenuList";
import BuildMenu from "../buildMenu";
import { getStaticData } from "@/lib/utils";

const BuildPage = async () => {
  const staticData = await getStaticData();

  return (
    <main className="w-screen h-screen absolute top-0 py-3 gap-4 flex justify-center items-center">
      <BuildMenuList />
      <BuildMenu data={staticData}/>
    </main>
  );
};

export default BuildPage;

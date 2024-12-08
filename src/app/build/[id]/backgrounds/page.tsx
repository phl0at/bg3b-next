import React from "react";
import { Backgrounds } from "./background";
import { getData } from "@/lib/utils";
import BuildMenuList from "@/components/buildMenuList";

const BGPage = async () => {
  const backgrounds = await getData("backgrounds");

  return (
    <main className="w-screen h-screen fixed left-[21%] top-0 py-3 gap-4 flex items-center">
      <BuildMenuList />
      <Backgrounds backgrounds={backgrounds} />
    </main>
  );
};

export default BGPage;

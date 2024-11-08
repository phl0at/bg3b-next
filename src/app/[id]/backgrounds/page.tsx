import React from "react";
import BuildMenuList from "@/components/buildMenuList";
import { Backgrounds } from "./background";
import { getData } from "@/lib/utils";

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

import React from "react";
import Classes from "./classes";
import { getData } from "@/lib/utils";
import BuildMenuList from "@/components/buildMenuList";

const ClassPage = async () => {
  const classes = await getData("classes");

  return (
    <main className="w-screen h-screen fixed left-[21%] top-0 py-3 gap-4 flex items-center">
      <BuildMenuList />
      <Classes classes={classes} />
    </main>
  );
};

export default ClassPage;

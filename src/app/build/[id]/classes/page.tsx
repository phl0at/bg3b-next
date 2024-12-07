import React from "react";
import Classes from "./classes";
import { getData } from "@/lib/utils";
import BuildLayout from "../../layout";
import BuildMenuList from "@/components/buildMenuList";

const ClassPage = async () => {
  const classes = await getData("classes");

  return (
    <BuildLayout>
      <BuildMenuList />
      <Classes classes={classes} />
    </BuildLayout>
  );
};

export default ClassPage;

import React from "react";
import Classes from "./classes";
import { getData } from "@/lib/utils";
import BuildLayout from "../../layout";

const ClassPage = async () => {
  const classes = await getData("classes");

  return (
    <BuildLayout>
      <Classes classes={classes} />
    </BuildLayout>
  );
};

export default ClassPage;

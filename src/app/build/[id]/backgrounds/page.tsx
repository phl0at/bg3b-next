import React from "react";
import { Backgrounds } from "./background";
import { getData } from "@/lib/utils";
import BuildLayout from "../../layout";

const BGPage = async () => {
  const backgrounds = await getData("backgrounds");

  return (
    <BuildLayout>
      <Backgrounds backgrounds={backgrounds} />
    </BuildLayout>
  );
};

export default BGPage;

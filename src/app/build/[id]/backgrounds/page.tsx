import React from "react";
import { Backgrounds } from "./background";
import { getData } from "@/lib/utils";
import BuildLayout from "../../layout";
import BuildMenuList from "@/components/buildMenuList";

const BGPage = async () => {
  const backgrounds = await getData("backgrounds");

  return (
    <BuildLayout>
      <BuildMenuList />
      <Backgrounds backgrounds={backgrounds} />
    </BuildLayout>
  );
};

export default BGPage;

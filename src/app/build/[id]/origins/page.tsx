import React from "react";
import Origins from "./origin";
import { getData } from "@/lib/utils";
import BuildLayout from "../../layout";
import BuildMenuList from "@/components/buildMenuList";

const OriginPage = async () => {
  const origins = await getData("origins");

  return (
    <BuildLayout>
      <BuildMenuList />
      <Origins origins={origins} />
    </BuildLayout>
  );
};

export default OriginPage;

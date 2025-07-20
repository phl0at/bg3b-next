import React from "react";
import ItemList from "@/components/itemList";
import Helmets from "@/lib/helmets";

const HelmetsPage = () => {
  return <ItemList items={Helmets} slot="helmet" title="Helmets" />;
};

export default HelmetsPage;

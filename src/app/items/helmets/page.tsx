import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Helmets from "@/lib/helmets";

const HelmetsPage = () => {
  return <ItemList items={Helmets} slot="helmet" title="Helmets" />;
};

export default HelmetsPage;

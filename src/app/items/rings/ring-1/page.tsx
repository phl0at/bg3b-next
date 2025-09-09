import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Rings from "@/lib/equipment/rings";

const RingsPage = () => {
  return <ItemList items={Rings} slot="ring1" title="Rings" />;
};

export default RingsPage;

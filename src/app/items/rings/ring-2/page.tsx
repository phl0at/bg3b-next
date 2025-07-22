import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Rings from "@/lib/rings";

const RingsPage = () => {
  return <ItemList items={Rings} slot="ring2" title="Rings" />;
};

export default RingsPage;

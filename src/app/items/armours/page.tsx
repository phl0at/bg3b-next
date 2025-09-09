import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Armours from "@/lib/equipment/armours";

const ArmoursPage = () => {
  return <ItemList items={Armours} slot="armour" title="Armours" />;
};

export default ArmoursPage;

import React from "react";
import ItemList from "@/components/itemList";
import Armours from "@/lib/armours";

const ArmoursPage = () => {
  return <ItemList items={Armours} slot="armour" title="Armours" />;
};

export default ArmoursPage;

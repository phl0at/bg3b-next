import React from "react";
import ItemList from "@/components/itemList";
import Rings from "@/lib/rings";

const RingsPage = () => {
  return <ItemList items={Rings} slot="ring1" title="Rings" />;
};

export default RingsPage;

import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";

const MeleePage = () => {
  // const MainHandWeapons = Melee.filter((item) => item.type != "Shield");
  return <ItemList slot="meleeMH" title="Main Hand Melee Weapons" />;
};

export default MeleePage;

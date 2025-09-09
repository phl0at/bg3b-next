import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Melee from "@/lib/equipment/meleeWeapons";

const MeleePage = () => {
  const MainHandWeapons = Object.values(Melee).filter((item) => item.type != "Shield");
  return (
    <ItemList
      items={MainHandWeapons}
      slot="meleeMH"
      title="Main Hand Melee Weapons"
    />
  );
};

export default MeleePage;

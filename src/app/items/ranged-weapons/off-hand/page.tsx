import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Ranged from "@/lib/equipment/rangedWeapons";

const RangedPage = () => {
  const OffHandWeapons = Object.values(Ranged).filter((item) => item.type === "Hand Crossbow");
  return (
    <ItemList
      items={OffHandWeapons}
      slot="rangedOH"
      title="Offhand Ranged Weapons"
    />
  );
};

export default RangedPage;

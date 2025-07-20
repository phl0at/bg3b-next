import React from "react";
import ItemList from "@/components/itemList";
import Ranged from "@/lib/rangedWeapons";

const RangedPage = () => {
  const OffHandWeapons = Ranged.filter((item) => item.type === "Hand Crossbow");
  return (
    <ItemList
      items={OffHandWeapons}
      slot="rangedOH"
      title="Offhand Ranged Weapons"
    />
  );
};

export default RangedPage;

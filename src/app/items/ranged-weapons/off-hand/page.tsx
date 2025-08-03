import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";

const RangedPage = () => {
  // const OffHandWeapons = Ranged.filter((item) => item.type === "Hand Crossbow");
  return <ItemList slot="rangedOH" title="Offhand Ranged Weapons" />;
};

export default RangedPage;

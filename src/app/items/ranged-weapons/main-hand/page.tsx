import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";
import Ranged from "@/lib/equipment/rangedWeapons";

const RangedPage = () => {
  const RangedArr = Object.values(Ranged)
  return (
    <ItemList items={RangedArr} slot="rangedMH" title="Main Hand Range Weapons" />
  );
};

export default RangedPage;

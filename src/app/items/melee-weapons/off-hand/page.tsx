import React from "react";
import ItemList from "@/components/equipmentMenu/itemList";

const MeleePage = () => {
  // const OffHandWeapons = Melee.filter(
  //   (item) => item.type != "Greatsword" && item.type != "Trident"
  // );
  return <ItemList slot="meleeOH" title="Offhand Melee Weapons" />;
};

export default MeleePage;

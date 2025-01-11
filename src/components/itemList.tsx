import React from "react";
import { getData } from "@/lib/utils";

const ItemList = async ({ slot }: { slot: string }) => {
  const items = await getData(slot)

  console.log(slot, items)

  return <div></div>;
};

export default ItemList;

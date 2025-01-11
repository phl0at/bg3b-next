import React from "react";
import { useStore } from "@/store/store";

const ItemSlot = ({
  slot,
  image,
}: {
  slot: string;
  image: React.ReactNode;
}) => {
  const item = useStore((state) => state.current[slot]);
  console.log(slot, item)
  //!TODO: Figure out modals and make this component open a list of given items on click

  return <div className="cursor-pointer outline p-3 rounded-md text-amber-100 hover:text-amber-400">{image}</div>;
};

export default ItemSlot;

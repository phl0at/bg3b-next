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

  return <div className="cursor-pointer outline p-3 rounded-md">{image}</div>;
};

export default ItemSlot;

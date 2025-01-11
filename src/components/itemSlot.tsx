import React from "react";
import Link from "next/link";
import { useStore } from "@/store/store";

const ItemSlot = ({
  slot,
  image,
  path,
}: {
  slot: string;
  image: React.ReactNode;
  path: string;
}) => {
  const item = useStore((state) => state.current[slot]);

  return (
    <Link
      href={`/items/${path}`}
      className="cursor-pointer outline p-3 rounded-md text-amber-100 hover:text-amber-400"
    >
      {item ? "" : image}
    </Link>
  );
};

export default ItemSlot;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/store";

const ItemSlot = ({
  slot,
  path,
  defaultImg,
}: {
  slot: string;
  path: string;
  defaultImg: React.ReactNode;
}) => {
  const { current } = useStore(state => state)
  const item = current[slot]
  const twoHandedRanged = slot === "rangedOH" && current.rangedMH === item
  const twoHandedMelee = slot === "meleeOH" && current.meleeMH === item

  return (
    <Link
      href={`/items/${path}`}
      className={`
        ${twoHandedRanged && item.type != "Hand Crossbow" && "opacity-50"}
        ${twoHandedMelee && item.type === "Greatsword" && "opacity-50"}
        outline p-3 rounded-md text-amber-100 hover:text-amber-400
        `}
    >
      {item.id > 0 ? (
        <Image
          src={item.img}
          placeholder="blur"
          alt="loading"
          width={75}
          height={75}
        />
      ) : (
        defaultImg
      )}
    </Link>
  );
};

export default ItemSlot;

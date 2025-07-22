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
  const item = useStore((state) => state.current[slot]);

  return (
    <Link
      href={`/items/${path}`}
      className="cursor-pointer outline p-3 rounded-md text-amber-100 hover:text-amber-400"
    >
      {item ? (
        <Image
          src={`/images/full/items/${path.split("/")[0]}/${item.img}.png`}
          blurDataURL={`/images/loading/items/${path.split("/")[0]}/${item.img}.png`}
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

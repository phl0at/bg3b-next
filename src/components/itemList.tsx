"use client";
import React from "react";
import Image from "next/image";
import ItemToolTip from "./itemToolTip";
import { usePathname, useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

const ItemList = ({ items, title }: { items: ItemData; title: string }) => {
  const pathname = usePathname().split("/")[2];
  const router = useRouter();
  const clickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="overflow-y-auto w-[90%] mt-10 flex flex-col">
      <div className="text-3xl w-[50%] mb-10 flex justify-start items-center">
        <div className="fixed pl-2">
          <button onClick={clickBack}>
            <IoArrowBackCircleOutline
              size="60"
              className="hover:text-amber-400"
            />
          </button>
        </div>
        <div className="w-full flex justify-center text-4xl text-amber-400">
          {title}
        </div>
      </div>
      {items.map((item, i) => (
        <ItemToolTip key={item.id} index={i} item={item}>
          <div className="flex justify-center">
            <Image
              src={`${imgURL}/item_icons/${pathname}/${item.img}.png`}
              loading="lazy"
              alt="loading"
              width={75}
              height={75}
            />
          </div>
          <div
            className={`${
              item.rarity === "Uncommon"
                ? "text-green-500"
                : item.rarity === "Rare"
                ? "text-blue-500"
                : item.rarity === "Very Rare"
                ? "text-pink-600"
                : item.rarity === "Legendary"
                ? "text-yellow-700"
                : ""
            }`}
          >
            {item.name}
          </div>
        </ItemToolTip>
      ))}
    </div>
  );
};

export default ItemList;

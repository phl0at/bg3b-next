"use client";
import React, { useState } from "react";
import Image from "next/image";
import ItemToolTip from "./itemToolTip";
import { useStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

const ItemList = ({
  items,
  slot,
  title,
}: {
  items: ItemData;
  slot: string;
  title: string;
}) => {
  const pathname = usePathname().split("/")[2];
  const equippedItem = useStore((state) => state.current[slot]);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const router = useRouter();
  const clickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };
  const clickItem = (item: SomeItem) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="overflow-y-auto w-[55%] flex flex-col">
        <div className="text-3xl mb-10 flex justify-start items-center">
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
          <section
            key={i}
            onClick={() => clickItem(item)}
            className={`flex items-center gap-x-6 py-4 m-1 text-2xl cursor-pointer hover:outline ${
              i % 2 === 0 ? "bg-black" : ""
            } ${item.id === selectedItem?.id && "bg-gray-800"}`}
          >
            <div className="relative text-green-500 ml-4 w-[50px]">
              {item.id === equippedItem?.id && <FaCheckCircle size="47" />}
            </div>
            <div className="flex justify-center">
              <Image
                src={`${imgURL}/item_icons/${pathname}/${item.img}.png`}
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
          </section>
        ))}
      </div>
      <div className="relative w-[30%]">
        <ItemToolTip item={selectedItem} slot={slot} />
      </div>
    </>
  );
};

export default ItemList;

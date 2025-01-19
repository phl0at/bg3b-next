"use client";
import React from "react";
import Image from "next/image";
import ItemToolTip from "./itemToolTip";
import { usePathname, useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

const ItemList = ({ items }: { items: ItemData }) => {
  const pathname = usePathname().split("/")[2];
  const router = useRouter();
  const clickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="overflow-y-auto w-[90%] mt-5">
      <div className="text-3xl flex justify-start items-center">
        <div className="w-[10%] pl-2">
          <button onClick={clickBack}>
            <IoArrowBackCircleOutline
              size="60"
              className="hover:text-amber-400"
            />
          </button>
        </div>
        <div className="w-[20%]">Name</div>
        <div>Info</div>
      </div>
      {items.map((item, i) => {
        const des1 = item.description.split("&*&")[0];
        const des2 = item.description.split("&*&")[1];

        return (
          <ItemToolTip key={item.id} index={i} item={item}>
            <div className="w-[10%] flex justify-center">
              <Image
                src={`${imgURL}/item_icons/${pathname}/${item.img}.png`}
                loading="lazy"
                alt="loading"
                width={75}
                height={75}
              />
            </div>
            <div
              className={`w-[15%] ${
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
            <div className="w-[70%] py-10">
              <div>
                <div className="text-amber-400">{des1.split(":")[0]}:</div>
                {des1.split(":")[1]}
              </div>
              {des2 && (
                <div>
                  <div className="text-amber-400">{des2.split(":")[0]}:</div>
                  {des2.split(":")[1]}
                </div>
              )}
            </div>
          </ItemToolTip>
        );
      })}
    </div>
  );
};

export default ItemList;

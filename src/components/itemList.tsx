"use client";
import React from "react";
import Image from "next/image";
import ItemToolTip from "./itemToolTip";
import { useStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

const ItemList = ({ items }: { items: ItemData }) => {
  const { viewItem } = useStore((state) => state);
  const equippedItem = useStore((state) => state.current[viewItem]);
  const pathname = usePathname().split("/")[2];
  const router = useRouter();
  const clickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="overflow-y-auto w-[90%] mt-5">
      <table>
        <tbody>
          <tr className="text-3xl">
            <th></th>
            <th className="w-[8%]">
              <button onClick={clickBack}>
                <IoArrowBackCircleOutline
                  size="60"
                  className="hover:text-amber-400"
                />
              </button>
            </th>
            <th className="w-[22%]">Name</th>
            <th>Info</th>
          </tr>
          {items.map((item, i) => {
            const des1 = item.description.split("&*&")[0];
            const des2 = item.description.split("&*&")[1];

            return (
              <ItemToolTip key={item.id} index={i} item={item}>
                <td className="pl-3">
                  <Image
                    src={`${imgURL}/item_icons/${pathname}/${item.img}.png`}
                    loading="lazy"
                    alt="loading"
                    width={75}
                    height={75}
                  />
                </td>
                <td
                  className={`${
                    item.rarity === "Uncommon"
                      ? "text-green-500"
                      : item.rarity === "Rare"
                      ? "text-blue-500"
                      : item.rarity === "Very Rare"
                      ? "text-pink-600"
                      : item.rarity === "Legendary"
                      ? "text-yellow-700"
                      : "th"
                  }`}
                >
                  {item.name}
                </td>
                <td className="py-10 pr-10">
                  <div>
                    <div className="text-amber-400">{des1.split(":")[0]}:</div>
                    {des1.split(":")[1]}
                  </div>
                  {des2 && (
                    <div>
                      <div className="text-amber-400">
                        {des2.split(":")[0]}:
                      </div>
                      {des2.split(":")[1]}
                    </div>
                  )}
                </td>
              </ItemToolTip>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;

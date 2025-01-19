"use client";
import React from "react";
import Image from "next/image";
import { useStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

const ItemList = ({ items }: { items: ItemData }) => {
  const { dispatch, viewItem } = useStore((state) => state);
  const equippedItem = useStore((state) => state.current[viewItem]);
  const pathname = usePathname().split("/")[2];
  const router = useRouter();
  const clickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };
  const clickItem = (item: SomeItem) => {
    dispatch({ type: "EQUIP ITEM", payload: { item, slot: viewItem } });
  };

  return (
    <div className="overflow-y-auto w-[90%] my-10">
      <table>
        <tbody>
          <tr className="text-3xl">
            <td className="w-[8%]">
              <button onClick={clickBack}>
                <IoArrowBackCircleOutline
                  size="60"
                  className="hover:text-amber-400"
                />
              </button>
            </td>
            <td className="w-[22%]">Name</td>
            <td>Info</td>
          </tr>
          {items.map((item, i) => {
            const des1 = item.description.split("&*&")[0];
            const des2 = item.description.split("&*&")[1];

            return (
              <tr
                key={item.id}
                onClick={() => clickItem(item)}
                className={`text-2xl cursor-pointer hover:outline ${
                  i % 2 === 0 ? "bg-black" : ""
                } ${item === equippedItem ? "bg-gray-800" : ""}`}
              >
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
                  className={`${item === equippedItem ? "text-amber-400" : ""}`}
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

const ItemList = ({ items }: { items: ItemData }) => {
  const pathname = usePathname().split("/")[2];
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="overflow-y-auto w-[90%] my-10">
      <table>
        <tbody>
          <tr className="text-3xl">
            <td className="w-[8%]">
              <button onClick={handleClick}>
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
                className={`text-2xl ${i % 2 === 0 ? "bg-black" : ""}`}
              >
                <td className="pl-3">
                  <Image
                    src={`${imgURL}/item_icons/${pathname}/${item.img}.png`}
                    alt="loading"
                    width={75}
                    height={75}
                  />
                </td>
                <td>{item.name}</td>
                <td className="py-10">
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

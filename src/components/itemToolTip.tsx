"use client";
import React from "react";
import { useStore } from "@/store/store";
import { parseMods } from "@/lib/utils";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ItemToolTip = ({
  item,
  children,
  index,
}: Readonly<{
  index: number;
  item: SomeItem;
  children: React.ReactNode;
}>) => {
  const { dispatch, viewItem } = useStore((state) => state);
  const equippedItem = useStore((state) => state.current[viewItem]);
  const [display, setDisplay] = useState(false);
  const clickItem = (item: SomeItem) => {
    dispatch({ type: "EQUIP ITEM", payload: { item, slot: viewItem } });
  };

  const modifiers = parseMods(item);
  const spells = item.spell ? item.spell.split("&*&") : [];
  const des1 = item.description.split("&*&")[0];
  const des2 = item.description.split("&*&")[1];


  return (
    <div
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      onClick={() => clickItem(item)}
      className={`flex items-center gap-x-6 py-4 m-1 text-2xl w-[50%] cursor-pointer hover:outline ${
        index % 2 === 0 ? "bg-black" : ""
      } ${item === equippedItem ? "bg-gray-800" : ""}`}
    >
      {display && (
        //! TODO: Finish the rest of the item data and beautify the tooltip
        <div className="absolute flex flex-col gap-y-2 right-[22%] top-[18%] text-xl w-[25%] min-h-[25%] p-5 bg-opacity-80 bg-stone-950 rounded-xl border-2 border-amber-400">
          <p>{`${item.rarity} ${item.type && item.type}`}</p>
          <p>
            <div className="w-[70%] py-6">
              <div className="pr-2">
                <div className="text-amber-400">{des1.split(":")[0]}:</div>
                {des1.split(":")[1]}
              </div>
              {des2 && (
                <div className="pr-2">
                  <div className="text-amber-400">{des2.split(":")[0]}:</div>
                  {des2.split(":")[1]}
                </div>
              )}
            </div>
          </p>

          {modifiers && <p>{modifiers}</p>}

          {spells.length > 0 ? (
            <p>
              <div className="text-amber-400">Spells:</div>
              <div>
                {spells.map((spell) => (
                  <p key={spell}>{spell}</p>
                ))}
              </div>
            </p>
          ) : (
            ""
          )}
        </div>
      )}

      {/*
       */}
      <div className="relative text-green-500 ml-4 w-[50px]">
        {item === equippedItem && <FaCheckCircle size="47" />}
      </div>
      {children}
    </div>
  );
};

export default ItemToolTip;

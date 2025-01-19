"use client";
import { useStore } from "@/store/store";
import { parseMods } from "@/lib/utils";
import React from "react";
import { useState } from "react";

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

  return (
    <div
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      onClick={() => clickItem(item)}
      className={`flex items-center gap-x-6 text-2xl cursor-pointer hover:outline ${
        index % 2 === 0 ? "bg-black" : ""
      } ${item === equippedItem ? "bg-gray-800" : ""}`}
    >
      {display && (
        <div className="absolute flex flex-col gap-y-2 left-[5%] top-[9%] text-xl w-[14%] p-5 bg-opacity-80 bg-stone-950 rounded-xl border-2 border-amber-400">
          <p>{`${item.rarity} ${item.type && item.type}`}</p>
          {modifiers && <p>{modifiers}</p>}

          {spells.length > 0 ? (
            <div>
              Grants:
              {spells.map((spell) => (
                <p>{spell}</p>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default ItemToolTip;
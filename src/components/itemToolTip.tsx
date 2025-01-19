"use client";
import { useStore } from "@/store/store";
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

  console.log(item);

  return (
    <tr
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      onClick={() => clickItem(item)}
      className={`text-2xl cursor-pointer hover:outline ${
        index % 2 === 0 ? "bg-black" : ""
      } ${item === equippedItem ? "bg-gray-800" : ""}`}
    >
      {display ? (
        <td className="absolute text-xl left-[5%] w-[14%] p-5 bg-black rounded-md border-2 border-amber-400">
          {item.rarity && <div>Rarity: {item.rarity}</div>}
          {item.type && <div>Type: {item.type}</div>}
          {item.modifiers && <div>Modifiers: {item.modifiers}</div>}
          {item.spell && <div>Grants: {item.spell}</div>}
        </td>
      ) : (
        <td></td>
      )}
      {children}
    </tr>
  );
};

export default ItemToolTip;

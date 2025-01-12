"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ItemList = ({ items }: { items: ItemData }) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      <div className="flex flex-col gap-y-3">
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default ItemList;

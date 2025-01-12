import React from "react";
import ItemList from "@/components/itemList";
import { getData } from "@/lib/utils";

const ItemsPage = async ({ params }: { params: Promise<{ slot: string }> }) => {
  const slot = (await params).slot;
  const items = await getData(`${slot}`);
  const title = slot[0].toUpperCase() + slot.slice(1);
  return (
    <main className="h-screen flex gap-4 items-center justify-center text-amber-100">
      <div
        className="
        bg-opacity-80
        bg-stone-950
        outline-amber-400
        outline
        shadow-black
        shadow-2xl
        w-[80%]
        max-w-[1536px]
        min-w-[880px]
        h-[93%]
        max-h-[1080px]
        min-h-[615px]
        rounded-3xl
        flex
        flex-col
        justify-start
        items-center
        py-12"
      >
        <div className="w-full h-[10%] text-3xl px-5">{title}</div>
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default ItemsPage;

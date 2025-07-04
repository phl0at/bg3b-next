import React from "react";
import ItemList from "@/components/itemList";
import { getData } from "@/lib/utils";

const ItemsPage = async ({ params }: { params: Promise<{ path: string }> }) => {
  const path = (await params).path;
  const title = path[0].toUpperCase() + path.slice(1);
  // make a file for each weapon slot and copy the returned neurelo data to each respective file

  const items =
    path === "ranged" || path === "melee"
      ? await getData(`weapons?filter={"range":"${title}"}`)
      : await getData(`${path}`);

  console.log(items);
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
        items-center"
      >
        <ItemList items={items} title={title} />
      </div>
    </main>
  );
};

export default ItemsPage;

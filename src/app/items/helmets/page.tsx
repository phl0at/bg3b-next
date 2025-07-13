import React from "react";
import ItemList from "@/components/itemList";
import Helmets from "@/lib/helmets"

const HelmetsPage = () => {
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
        <ItemList items={Helmets} slot="helmet" title="Helmets" />
      </div>
    </main>
  );
};

export default HelmetsPage;

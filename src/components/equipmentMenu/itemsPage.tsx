import React from "react";

const ItemsPage = ({ children }: { children: React.ReactNode }) => {
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
        w-[90%]
        max-w-[1536px]
        min-w-[880px]
        h-[93%]
        max-h-[1080px]
        min-h-[615px]
        rounded-3xl
        flex
        justify-around
        items-start
        py-10"
      >
        {children}
      </div>
    </main>
  );
};

export default ItemsPage;

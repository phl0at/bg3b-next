import React from "react";
import BuildMenuList from "@/components/buildMenuList";
const BuildComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="h-screen flex gap-4 items-center justify-center">
      <BuildMenuList />
      <div className="bg-opacity-80 bg-stone-950 outline-amber-400 outline shadow-2xl w-[40%] max-w-[760px] min-w-[440px] h-[93%] max-h-[1080px] min-h-[615px] rounded-3xl flex flex-col justify-start items-center py-8">
        {children}
      </div>
    </main>
  );
};

export default BuildComponent;

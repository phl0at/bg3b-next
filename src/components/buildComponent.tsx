import React from "react";
import BuildMenuList from "@/components/buildMenuList";
const BuildComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <main className="w-screen h-screen fixed left-[21%] top-0 py-3 gap-4 flex items-center">
        <BuildMenuList />
        <div className="bg-zinc-800 shadow-xl w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default BuildComponent;

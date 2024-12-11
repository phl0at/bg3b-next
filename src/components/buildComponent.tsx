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
        {children}
      </main>
    </div>
  );
};

export default BuildComponent;

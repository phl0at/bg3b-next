import BuildMenuList from "@/components/buildMenuList";
import Equipment from "@/components/equipment";
import React from "react";

const BuildPage = () => {
  return (
    <main className="h-screen flex gap-4 items-center justify-center mr-[9.85%]">
      <BuildMenuList/>
      <div
        className="
        text-lg
        bg-opacity-80
        bg-stone-950
        outline-amber-400
        outline
        shadow-black
        shadow-2xl
        w-[40%]
        max-w-[760px]
        min-w-[440px]
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
have one page for creating a build,
with route ending in either "new" or the id of the build.
all api data should be grabbed at once for the menu items.

each menu option will change menus by modifying react state,
instead of grabbing new data in a whole new page
      </div>
      <Equipment/>
    </main>
  );
};

export default BuildPage;

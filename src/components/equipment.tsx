"use client";
import React from "react";
import ItemSlot from "./itemSlot";
import { useStore } from "@/store/store";

import {
  GiElfHelmet,
  GiCape,
  GiCapeArmor,
  GiGloves,
  GiLegArmor,
  GiBroadsword,
  GiBroadDagger,
  GiBowArrow,
  GiCrossbow,
  GiEmeraldNecklace,
  GiDiamondRing,
} from "react-icons/gi";

const Equipment = () => {
  const { current: armourClass } = useStore((state) => state);

  return (
    <div
      className="
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
      py-8"
    >
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key={1}
          slot="helmet"
          path="helmets"
          defaultImg={<GiElfHelmet size="80" />}
        />
        <div className="text-2xl">{`AC: ${armourClass}`}</div>
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key={2}
          slot="cloak"
          path="cloaks"
          defaultImg={<GiCape size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key={3}
          slot="armour"
          path="armours"
          defaultImg={<GiCapeArmor size="80" />}
        />
        <ItemSlot
          key={4}
          slot="amulet"
          path="amulets"
          defaultImg={<GiEmeraldNecklace size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key={5}
          slot="gloves"
          path="gloves"
          defaultImg={<GiGloves size="80" />}
        />
        <ItemSlot
          key={6}
          slot="ring1"
          path="rings"
          defaultImg={<GiDiamondRing size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key={7}
          slot="boots"
          path="boots"
          defaultImg={<GiLegArmor size="80" />}
        />
        <ItemSlot
          key={8}
          slot="ring2"
          path="rings"
          defaultImg={<GiDiamondRing size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <div className="flex gap-x-2">
          <ItemSlot
            key={9}
            slot="meleeMH"
            path="melee"
            defaultImg={<GiBroadsword size="80" />}
          />
          <ItemSlot
            key={10}
            slot="meleeOH"
            path="melee"
            defaultImg={<GiBroadDagger size="80" />}
          />
        </div>
        <div className="flex gap-x-2">
          <ItemSlot
            key={11}
            slot="rangedMH"
            path="ranged"
            defaultImg={<GiBowArrow size="80" />}
          />
          <ItemSlot
            key={12}
            slot="rangedOH"
            path="ranged"
            defaultImg={<GiCrossbow size="80" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Equipment;

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
  const { armourClass } = useStore((state) => state.current);

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
          key="helmet"
          slot="helmet"
          path="helmets"
          image={<GiElfHelmet size="80" />}
        />
        <div className="text-2xl">{`AC: ${armourClass}`}</div>
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key="cloak"
          slot="cloak"
          path="cloaks"
          image={<GiCape size="80" />}
        />
        <div></div>
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key="armour"
          slot="armour"
          path="armours"
          image={<GiCapeArmor size="80" />}
        />
        <ItemSlot
          key="amulet"
          slot="amulet"
          path="amulets"
          image={<GiEmeraldNecklace size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key="gloves"
          slot="gloves"
          path="gloves"
          image={<GiGloves size="80" />}
        />
        <ItemSlot
          key="ring1"
          slot="ring1"
          path="rings"
          image={<GiDiamondRing size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key="boots"
          slot="boots"
          path="boots"
          image={<GiLegArmor size="80" />}
        />
        <ItemSlot
          key="ring2"
          slot="ring2"
          path="rings"
          image={<GiDiamondRing size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <div className="flex gap-x-2">
          <ItemSlot
            key="meleeMH"
            slot="meleeMH"
            path="weapons"
            image={<GiBroadsword size="80" />}
          />
          <ItemSlot
            key="meleeOH"
            slot="meleeOH"
            path="weapons"
            image={<GiBroadDagger size="80" />}
          />
        </div>
        <div className="flex gap-x-2">
          <ItemSlot
            key="rangedMH"
            slot="rangedMH"
            path="weapons"
            image={<GiBowArrow size="80" />}
          />
          <ItemSlot
            key="rangedOH"
            slot="rangedOH"
            path="weapons"
            image={<GiCrossbow size="80" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Equipment;

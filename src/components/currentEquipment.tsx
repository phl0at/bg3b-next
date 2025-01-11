import React from "react";
import { useStore } from "@/store/store";
import ItemSlot from "./itemSlot";
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

const CurrentEquipment = () => {
  const { armourClass } = useStore((state) => state.current);

  return (
    <>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key="helmet"
          slot="helmet"
          image={<GiElfHelmet size="80" />}
        />
        <div className="text-2xl">{`AC: ${armourClass}`}</div>
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot key="cloak" slot="cloak" image={<GiCape size="80" />} />
        <div></div>
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot
          key="armour"
          slot="armour"
          image={<GiCapeArmor size="80" />}
        />
        <ItemSlot
          key="amulet"
          slot="amulet"
          image={<GiEmeraldNecklace size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot key="gloves" slot="gloves" image={<GiGloves size="80" />} />
        <ItemSlot
          key="ring1"
          slot="ring1"
          image={<GiDiamondRing size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <ItemSlot key="boots" slot="boots" image={<GiLegArmor size="80" />} />
        <ItemSlot
          key="ring2"
          slot="ring2"
          image={<GiDiamondRing size="80" />}
        />
      </div>
      <div className="w-5/6 flex flex-row justify-between py-4">
        <div className="flex gap-x-2">
          <ItemSlot
            key="meleeMH"
            slot="meleeMH"
            image={<GiBroadsword size="80" />}
          />
          <ItemSlot
            key="meleeOH"
            slot="meleeOH"
            image={<GiBroadDagger size="80" />}
          />
        </div>
        <div className="flex gap-x-2">
          <ItemSlot
            key="rangedMH"
            slot="rangedMH"
            image={<GiBowArrow size="80" />}
          />
          <ItemSlot
            key="rangedOH"
            slot="rangedOH"
            image={<GiCrossbow size="80" />}
          />
        </div>
      </div>
    </>
  );
};

export default CurrentEquipment;

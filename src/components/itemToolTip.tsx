import React from "react";
import { parseMods } from "@/lib/utils";

const ItemToolTip = ({
  item,
}: Readonly<{
  item: SomeItem | any;
}>) => {
  const modifiers = parseMods(item);
  const spells = item.spell ? item.spell.split("&*&") : [];
  const des1 = item.description.split("&*&")[0];
  const des2 = item.description.split("&*&")[1];

  return (
    <div className="absolute flex flex-col gap-y-2 right-[22%] top-[18%] text-xl w-[25%] min-h-[25%] p-5 bg-opacity-80 bg-stone-950 rounded-xl border-2 border-amber-400">
      <p>{`${item.rarity} ${item.type && item.type}`}</p>
      <p>
        <div className="w-[70%] py-6">
          <div className="pr-2">
            <div className="text-amber-400">{des1.split(":")[0]}:</div>
            {des1.split(":")[1]}
          </div>
          {des2 && (
            <div className="pr-2">
              <div className="text-amber-400">{des2.split(":")[0]}:</div>
              {des2.split(":")[1]}
            </div>
          )}
        </div>
      </p>

      {modifiers && <p>{modifiers}</p>}

      {spells.length > 0 ? (
        <p>
          <div className="text-amber-400">Spells:</div>
          <div>
            {spells.map((spell: string) => (
              <p key={spell}>{spell}</p>
            ))}
          </div>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ItemToolTip;

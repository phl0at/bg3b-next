import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/store";
const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

const ItemSlot = ({
  slot,
  defaultImg,
  path,
}: {
  slot: string;
  defaultImg: React.ReactNode;
  path: string;
}) => {
  const item = useStore((state) => state.current[slot]);
  const { dispatch } = useStore((state) => state);
  const handleClick = () => {
    dispatch({ type: "VIEW ITEM", payload: slot });
  };

  return (
    <Link
      onClick={handleClick}
      href={`/items/${path}`}
      className="cursor-pointer outline p-3 rounded-md text-amber-100 hover:text-amber-400"
    >
      {item ? (
        <Image
          src={`${imgURL}/item_icons/${path}/${item.img}.png`}
          // loading="lazy"
          alt="loading"
          width={75}
          height={75}
        />
      ) : (
        defaultImg
      )}
    </Link>
  );
};

export default ItemSlot;

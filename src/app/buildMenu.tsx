"use client";
import React from "react";
import { useMenuContext } from "@/context/menu";
import { GiVibratingShield } from "react-icons/gi";
import Origin from "./origin";
import Race from "./race";
import Backgrounds from "./backgrounds";
import Abilities from "./abilities";
import Classes from "./classes";
const BuildMenu = ({ data }: { data: StaticData }) => {
  const { display } = useMenuContext();

  return (
    <>
      {display === "origins" && <Origin origins={data.origins} />}
      {display === "races" && <Race races={data.races} />}
      {display === "backgrounds" && <Backgrounds backgrounds={data.backgrounds} />}
      {display === "abilities" && <Abilities abilities={data.abilities} />}
      {display === "classes" && <Classes classes={data.classes} />}
      <GiVibratingShield className="text-blue-300 hover:text-blue-500 cursor-pointer fixed right-1 bottom-1 size-36 hover:-translate-y-1 transition ease-in-out delay-250 duration-300" />
    </>
  );
};

export default BuildMenu;

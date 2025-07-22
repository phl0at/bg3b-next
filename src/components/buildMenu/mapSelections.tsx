import React from "react";
import Image from "next/image";

const MapSelections = ({
  data,
  setter,
  selectedElement,
  menu,
  width,
  height,
}: {
  data: Origin[] | Background[] | Race[] | Class[];
  setter: (element: Class | Background | Race | Origin) => void;
  selectedElement: number;
  width: number;
  height: number;
  menu: string;
}) => {
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-5 w-[90%] text-amber-100">
      {data.map((element: Class | Background | Race | Origin) => {
        return (
          <div
            className="flex flex-col gap-y-1 justify-center items-center cursor-pointer w-fill h-fill hover:text-amber-400"
            key={element.name}
            onClick={() => setter(element)}
          >
            <div
              style={{
                outline: element.id === selectedElement ? "solid" : "none",
              }}
              className="rounded-md"
            >
              <Image
                src={`/images/full/${menu}/${element.img}.png`}
                blurDataURL={`/images/loading/${menu}/${element.img}.png`}
                placeholder="blur"
                alt=""
                width={width}
                height={height}
                className="rounded-md object-cover"
              />
            </div>
            {element.name}
          </div>
        );
      })}
    </div>
  );
};

export default MapSelections;

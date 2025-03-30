import React from "react";
import Image, { StaticImageData } from "next/image";

const DataMapper = ({
  data,
  selectedElement,
  setter,
  width,
  height,
  button,
  images,
  menu
}: {
  data: Class[] | Origin[] | Background[] | Race[];
  selectedElement: number;
  setter: (element: Class | Background | Race | Origin) => void;
  width: number;
  height: number;
  button: React.ReactNode;
  images: string[];
  menu: string
}) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-3 gap-y-5 w-[90%] text-amber-100">
        {data.map((element: Class | Background | Race | Origin, i) => {
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
                  src={`/${menu}/${images[i]}`}
                  alt=""
                  width={width}
                  height={height}
                  className="rounded-md object-cover"
                  loading="lazy"
                />
              </div>
              {element.name}
            </div>
          );
        })}
      </div>
      {button}
      <div className="w-[78%] mt-12 text-left text-amber-100">
        <p className="text-amber-400 my-1">{data[selectedElement - 1]?.name}</p>
        <p>{data[selectedElement - 1]?.description}</p>
      </div>
    </>
  );
};

export default DataMapper;

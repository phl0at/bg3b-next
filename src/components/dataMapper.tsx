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
}: {
  data: Class[] | Origin[] | Background[] | Race[];
  selectedElement: number;
  setter: (element: Class | Background | Race | Origin) => void;
  width: number;
  height: number;
  button: React.ReactNode;
  images: StaticImageData[];
}) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-3 gap-y-5 w-5/6">
        {data.map((element: Class | Background | Race | Origin, i) => {
          return (
            <div
              className="flex flex-col justify-center items-center cursor-pointer w-fill h-fill"
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
                  src={images[i]}
                  alt=""
                  width={width}
                  height={height}
                  placeholder="blur"
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
      <div className="text-center">
        {data[selectedElement - 1]?.description}
      </div>
    </>
  );
};

export default DataMapper;

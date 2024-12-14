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
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {data.map((element: Class | Background | Race | Origin, i) => {
          return (
            <div
              style={{
                width: width,
                height: height,
                outline: element.id === selectedElement ? "solid" : "none",
              }}
              className="flex flex-col justify-center items-center cursor-pointer rounded-md"
              key={element.name}
              onClick={() => setter(element)}
            >
              <Image src={images[i]} alt="" placeholder="blur" />
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

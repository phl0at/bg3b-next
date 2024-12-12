import React from "react";
import Image from "next/image";

const DataMapper = ({
  data,
  selectedElement,
  setter,
  route,
  width,
  height,
  button,
}: {
  data: Class[] | Origin[] | Background[] | Race[];
  selectedElement: number;
  setter: (id: number) => void;
  route: string;
  width: number;
  height: number;
  button: React.ReactNode;
}) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {data.map((element: Class | Background | Race | Origin) => {
          //!TO DO: Test whether local images blur/load better than imagekitio hosted images
          const URL = `https://ik.imagekit.io/phl0at/images/${route}_icons/${element.name}.png`;

          return (
            <div
              className={`flex flex-col justify-center items-center cursor-pointer rounded-md ${
                element.id === selectedElement ? "outline " : ""
              }`}
              key={element.name}
              onClick={() => setter(element.id)}
            >
              <Image
                width={width}
                height={height}
                src={URL}
                alt=""
              />
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

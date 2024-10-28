import React, { useState } from "react";

const Backgrounds = ({ backgrounds }: { backgrounds: Background[] }) => {
  const [selectedBackground, setSelectedBackground] = useState(1);

  return (
    <main className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {backgrounds.map((bg) => {
          if (bg.id < 12)
            return (
              <div
                className="flex flex-col justify-center items-center cursor-pointer"
                key={bg.id}
                onClick={() => setSelectedBackground(bg.id)}
              >
                <img
                  className="w-[60px] h-[60px] object-cover"
                  src={`https://ik.imagekit.io/phl0at/images/bg_icons/${bg.name}.png`}
                />
                {bg.name}
              </div>
            );
        })}
      </div>
      <div className="text-center">
        {backgrounds[selectedBackground - 1].description}
      </div>
    </main>
  );
};

export default Backgrounds;

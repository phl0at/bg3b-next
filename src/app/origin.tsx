import React, { useState } from "react";

const Origin = ({ origins }: { origins: Origin[] }) => {
  const [selectedOrigin, setSelectedOrigin] = useState(1);

  return (
    <main className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {origins.map((origin) => (
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            key={origin.id}
            onClick={() => setSelectedOrigin(origin.id - 1)}
          >
            <img
              className="w-[60px] h-[90px] object-cover rounded-md"
              src={`https://ik.imagekit.io/phl0at/images/char_icons/${origin.name}.png`}
            />
            {origin.name}
          </div>
        ))}
      </div>
      <div className="text-center">{origins[selectedOrigin].description}</div>
    </main>
  );
};

export default Origin;

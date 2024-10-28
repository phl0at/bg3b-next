import React, { useState } from "react";

const Race = ({ races }: { races: Race[] }) => {
  const [selectedRace, setSelectedRace] = useState(1);
  
  return (
    <main className="bg-zinc-800 shadow-xl min-w-96 w-2/5 h-full rounded-3xl flex flex-col justify-start items-center py-8">
      <div className="grid grid-cols-4 gap-y-5 w-5/6">
        {races.map((race) => (
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            key={race.id}
            onClick={() => setSelectedRace(race.id)}
          >
            <img
              className="w-[60px] h-[60px] object-cover"
              src={`https://ik.imagekit.io/phl0at/images/race_icons/${race.name}.png`}
            />
            {race.name}
          </div>
        ))}
      </div>
      <div className="text-center">{races[selectedRace - 1].description}</div>
    </main>
  );
};

export default Race;

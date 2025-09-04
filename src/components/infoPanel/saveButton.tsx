"use client"
import React from 'react'
import { FaRegSave } from "react-icons/fa";
import { useStore } from '@/store/store';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import prisma from '@/lib/client';

const SaveButton = () => {
  const { current } = useStore(state => state)
  const { isAuthenticated, user } = useKindeBrowserClient();

  const handleClick = ({ e, build }: { e: React.MouseEvent, build: Build }) => {
    e.preventDefault();
    console.log(build)

    if (!isAuthenticated || !user) {
      alert("You must be logged in to save a build!")
      return
    } else if (current.id != "new") {
      if (user?.id != build.authorId) {
        alert("You can only edit your own builds!")
        return
      }
    } else if (build.characterName.trim().length < 3 || build.characterName.length > 25) {
      alert("Character name must be between 3 and 25 characters!")
      return
    } else if (build.abilityPoints > 0) {
      alert("You have unspent ability points!")
      return
    } else if (build.plus1 === "" || build.plus2 === "") {
      alert("You must select two ability bonuses!")
      return
    } else {
      const newBuild = prisma.build.create({
        data: {
          authorId: user.id,
          armourClass: build.armourClass,
          background: build.background,
          characterName: build.characterName,
          charisma: build.charisma,
          constitution: build.constitution,
          dexterity: build.dexterity,
          intelligence: build.intelligence,
          level: build.level,
          origin: build.origin,
          plus1: build.plus1,
          plus2: build.plus2,
          race: build.race,
          subRace: build.subRace,
          strength: build.strength,
          wisdom: build.wisdom,
          helmet: build.helmet.id,
          cloak: build.cloak.id,
          armour: build.armour.id,
          gloves: build.gloves.id,
          amulet: build.amulet.id,
          ring1: build.ring1.id,
          ring2: build.ring2.id,
          boots: build.boots.id,
          meleeMH: build.meleeMH.id,
          meleeOH: build.meleeOH?.id || null,
          rangedMH: build.rangedMH.id,
          rangedOH: build.rangedOH?.id || null,
        }
      })
      console.log(newBuild)
    }

  }

  return (
    <button onClick={(e) => handleClick({ e, build: current })}>
      <FaRegSave title="Save Build" className='hover:text-amber-300 hover:shadow-sm hover:-translate-y-1 transition ease-in-out delay-250 duration-300' size={45} />
    </button>
  )

}

export default SaveButton
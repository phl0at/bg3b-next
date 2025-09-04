"use client"
import React from 'react'
import { FaRegSave } from "react-icons/fa";
import { useStore } from '@/store/store';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const SaveButton = () => {
  const { current } = useStore(state => state)
  const { isAuthenticated, user } = useKindeBrowserClient();

  const handleClick = ({ e, build }: { e: React.MouseEvent, build: Build }) => {
    e.preventDefault();
    console.log(build)

    if (!isAuthenticated) {
      alert("You must be logged in to save a build!")
      return
    }

    if (current.id != "new") {
      if(user?.id != build.authorId) {
        alert("You can only edit your own builds!")
        return
      }
    }

    if (build.characterName.trim().length < 3 || build.characterName.length > 25) {
      alert("Character name must be between 3 and 25 characters!")
      return
    }

    if (build.abilityPoints > 0) {
      alert("You have unspent ability points!")
      return
    }

    if (build.plus1 === "" || build.plus2 === "") {
      alert("You must select two ability bonuses!")
      return
    }

  }

  return (
    <button onClick={(e) => handleClick({ e, build: current })}>
      <FaRegSave title="Save Build" className='hover:text-amber-300 hover:shadow-sm hover:-translate-y-1 transition ease-in-out delay-250 duration-300' size={45} />
    </button>
  )

}

export default SaveButton
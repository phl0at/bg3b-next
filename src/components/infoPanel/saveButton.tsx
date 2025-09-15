"use client"
import React from 'react'
import { FaRegSave } from "react-icons/fa";
import { useStore } from '@/store/store';
import { saveBuild } from '@/lib/actions';
import { FrontEndBuild } from '@/lib/types';
import { navigateToBuild } from '@/lib/actions';

const SaveButton = () => {
  const { current } = useStore(state => state)

  const handleClick = async ({ e, build }: { e: React.MouseEvent, build: FrontEndBuild }) => {
    e.preventDefault();
    try {
      const newBuild = await saveBuild(build);
      if (newBuild != undefined) {
        navigateToBuild(newBuild.id)
      }
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <button onClick={(e) => handleClick({ e, build: current })}>
      <FaRegSave title="Save Build" className='hover:text-amber-300 hover:shadow-sm hover:-translate-y-1 transition ease-in-out delay-250 duration-300' size={45} />
    </button>
  )

}

export default SaveButton
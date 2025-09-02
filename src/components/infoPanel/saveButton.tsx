"use client"
import React from 'react'
import { FaRegSave } from "react-icons/fa";
import { useStore } from '@/store/store';

const SaveButton = () => {
  const { current } = useStore(state => state)

  return <FaRegSave title="Save Build" className='cursor-pointer hover:text-amber-300 hover:shadow-sm hover:-translate-y-1 transition ease-in-out delay-250 duration-300' size={45} onClick={() => console.log(current)} />

}

export default SaveButton
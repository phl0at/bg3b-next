"use client"
import React from 'react'
import Origins from '@/lib/origins'
import Backgrounds from '@/lib/backgrounds'
import Races from '@/lib/races'
import { useStore } from '@/store/store'

const CharacterInfo = () => {
    const { current } = useStore(state => state);

    return (
        <div className='flex flex-col gap-1'>
            <p className='text-xl flex justify-center underline text-amber-300'>
                Character
            </p>
            <ul className='grid grid-cols-2'>
                <li className='flex justify-center'>
                    Origin:
                </li>
                <li className='flex justify-center'>
                    {Origins[current?.origin]?.name}
                </li>
            </ul>
            <ul className='grid grid-cols-2'>
                <li className='flex justify-center'>
                    Race:
                </li>
                <li className='flex justify-center'>
                    {Races[current?.race]?.name}
                </li>
            </ul>
            <ul className='grid grid-cols-2'>
                <li className='flex justify-center'>
                    Background:
                </li>
                <li className='flex justify-center'>
                    {Backgrounds[current?.background]?.name}
                </li>

            </ul>
        </div>
    )
}

export default CharacterInfo

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
            <p className='text-xl underline text-amber-300'>
                Character
            </p>
            <p>
                Origin: {Origins[current?.origin]?.name}
            </p>
            <p>
                Race: {Races[current?.race]?.name}
            </p>
            <p>
                Background: {Backgrounds[current?.background]?.name}
            </p>
        </div>
    )
}

export default CharacterInfo

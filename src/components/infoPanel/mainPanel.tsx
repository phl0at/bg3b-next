import React from 'react'
import CharacterInfo from './charaterInfo'
import AbilityInfo from './abilityInfo'

const InfoPanel = () => {
    return (
        <div
            className='
        text-amber-100
        bg-opacity-80
        bg-stone-950
        outline
        outline-amber-400
        shadow-black
        shadow-2xl
        h-[93%]
        rounded-3xl
        flex
        flex-col
        gap-8
        p-10
        max-h-[1080px]
        min-h-[900px]
        max-w-[400px]
        min-w-[350px]'
        >
            <CharacterInfo />
            <AbilityInfo />
        </div>
    )
}

export default InfoPanel
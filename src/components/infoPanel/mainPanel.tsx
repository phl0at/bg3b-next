"use client"
import React from 'react'
import CharacterInfo from './charaterInfo'
import AbilityInfo from './abilityInfo'
import ClassInfo from './classInfo'
import SaveButton from './saveButton'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useStore } from '@/store/store'
import DeleteButton from './deleteButton'

const InfoPanel = () => {
    const { user } = useKindeBrowserClient()
    const { current: { authorId } } = useStore(state => state)

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
            justify-between
            p-10
            max-h-[1080px]
            min-h-[900px]
            w-[350px]'
        >
            <div className='flex flex-col gap-8'>
                <CharacterInfo />
                <AbilityInfo />
                <ClassInfo />
            </div>
            <div className='flex justify-between'>
                <SaveButton />
                {user?.id === authorId && <DeleteButton />}
            </div>
        </div>

    )
}

export default InfoPanel
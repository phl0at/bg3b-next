"use client"
import React from 'react'
import { useStore } from '@/store/store'

const AbilityInfo = () => {
    const { current } = useStore(state => state)
    return (
        <div className='flex flex-col gap-1'>
            <p className='flex justify-center text-xl underline text-amber-300'>
                Abilities
            </p>
            <ul className='grid grid-cols-2'>
                <li className='flex justify-center'>STR: {current.strength}</li>
                <li className='flex justify-center'>DEX: {current.dexterity}</li>
            </ul>
            <ul className='grid grid-cols-2'>
                <li className='flex justify-center'>CON: {current.constitution}</li>
                <li className='flex justify-center'>INT: {current.intelligence}</li>
            </ul>
            <ul className='grid grid-cols-2'>
                <li className='flex justify-center'>WIS: {current.wisdom}</li>
                <li className='flex justify-center'>CHA: {current.charisma}</li>
            </ul>
        </div>
    )
}   


export default AbilityInfo
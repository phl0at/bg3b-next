"use client"
import React from 'react'
import { useStore } from '@/store/store'
import { mergeSequences } from '@/lib/utils'

const ClassInfo = () => {
    const { current } = useStore(state => state)

    return (
        <div className='flex flex-col gap-1'>
            <p className='flex justify-center text-xl underline text-amber-300'>
                Classes
            </p>
            <ul className='flex flex-col justify-center gap-y-4'>
                {current.classList && Object.values(current.classList as Class[]).map((_class: Class) => {
                    return (
                        <li key={_class.id} className='grid grid-cols-3'>
                            <div title={_class.name} className='flex justify-start items-center col-span-2'>
                                {_class.subClass ? _class.subClass.name + ' ' + _class.name : _class.name}
                            </div>
                            <div className='flex flex-col gap-1 justify-center items-center'>
                                <div>Levels: </div>
                                <div>{mergeSequences(_class.levelsAddedToBuild) || []}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ClassInfo
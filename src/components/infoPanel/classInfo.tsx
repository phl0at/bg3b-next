"use client"
import React from 'react'
import { useStore } from '@/store/store'
import { mergeSequences, sortClasses } from '@/lib/utils'
import { AddedClass } from '@/lib/types'

const ClassInfo = () => {
    const { classList } = useStore(state => state.current)
    const classes = Object.values(classList as AddedClass[])

    return (
        <div className='flex flex-col gap-1'>
            <p className='flex justify-center text-xl underline text-amber-300'>
                Classes
            </p>
            <ul className='flex flex-col justify-center gap-y-4'>
                {sortClasses(classes).map((_class: AddedClass) =>
                    <li key={_class.id} className='grid grid-cols-3'>
                        <div title={_class.name} className='flex justify-start items-center col-span-2'>
                            {_class.subClass ? _class.subClass.name + ' ' + _class.name : _class.name}
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <div>Levels: </div>
                            <div>{mergeSequences(_class.levelsAdded) || ""}</div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ClassInfo
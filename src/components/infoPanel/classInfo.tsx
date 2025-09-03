"use client"
import React from 'react'
import { useStore } from '@/store/store'

const ClassInfo = () => {
    const { current } = useStore(state => state)

    return (
        <div className='flex flex-col gap-1'>
            <p className='flex justify-center text-xl underline text-amber-300'>
                Classes
            </p>
            <ul className='items-start justify-center gap-2'>
                {Object.values(current.classList as Class[]).map((_class: Class) => {
                    return (
                        <li key={_class.id} className='grid grid-cols-3'>
                            <div title={_class.name} className='flex justify-start col-span-2'>
                                {_class.subClass ? _class.subClass.name + ' ' + _class.name : _class.name}
                            </div>
                            <div className='flex justify-center items-center'>{_class.level}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ClassInfo
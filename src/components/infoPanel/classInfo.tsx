"use client"
import React from 'react'
import { useStore } from '@/store/store'
import Image from "next/image";

const ClassInfo = () => {
    const { current } = useStore(state => state)

    return (
        <div className='flex flex-col gap-1'>
            <p className='flex justify-center text-xl underline text-amber-300'>
                Classes
            </p>
            <ul className='grid grid-cols-3 items-start justify-center gap-2 min-h-[156px]'>
                {Object.values(current.classList as Class[]).map((_class: Class) => {
                    return (
                        <li key={_class.id} title={_class.name} className='flex flex-col items-center justify-center cursor-pointer'>
                            <Image
                                src={`/images/full/classes/${_class.img}.png`}
                                alt="Loading"
                                width={50}
                                height={50}
                            />
                            {_class.level}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ClassInfo
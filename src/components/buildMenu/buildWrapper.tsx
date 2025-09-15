"use client"
import { ReactNode, useEffect } from 'react'
import { useStore } from '@/store/store'
import { BackEndBuild } from '@/lib/types';


const BuildWrapper = ({ children, build }: { children: ReactNode; build: BackEndBuild | null; }) => {

    const { dispatch } = useStore((state) => state)
    useEffect(() => {

    }, [])

    return (
        <>{children}</>
    )
}

export default BuildWrapper
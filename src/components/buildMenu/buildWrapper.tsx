"use client"
import { ReactNode, useEffect } from 'react'
import { useStore } from '@/store/store'
import { BackEndBuild } from '@/lib/types';

const BuildWrapper = ({ children, build, id }: { children: ReactNode; build: BackEndBuild; id: string }) => {
    const { dispatch } = useStore((state) => state)
    useEffect(() => {
        if (id !== "new-build") {
            dispatch({ type: "GET BUILD", payload: build })
        }
    }, [])

    return (
        <>{children}</>
    )
}

export default BuildWrapper
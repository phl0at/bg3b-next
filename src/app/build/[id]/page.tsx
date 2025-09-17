"use client"
import React, { useEffect, useTransition } from 'react'
import { useStore } from '@/store/store';
import { usePathname } from 'next/navigation';
import BuildMenuList from "@/components/buildMenu/buildMenuList";
import BuildComponent from "@/components/buildMenu/buildComponent";
import Equipment from "@/components/equipmentMenu/equipment";
import InfoPanel from "@/components/infoPanel/mainPanel";
import { getBuildByID } from '@/lib/actions';


const ExistingBuildPage = () => {
    /* eslint-disable */
    const [_isPending, startTransition] = useTransition()
    /* eslint-disable */
    const { dispatch, current: { id } } = useStore(state => state)
    const pathname = usePathname()
    const pathId = parseInt(pathname.split("/")[2])

    useEffect(() => {
        startTransition(async () => {
            if (id === "new") {
                const build = await getBuildByID(Number(pathId))
                dispatch({ type: "GET BUILD", payload: build })
            }
        })
    }, [pathId])

    return (
        < main className="h-screen flex gap-4 items-center justify-center" >
            <BuildMenuList />
            <BuildComponent />
            <Equipment />
            <InfoPanel />
        </main >

    )
}

export default ExistingBuildPage
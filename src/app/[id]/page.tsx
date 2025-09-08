"use server"
import React from 'react'
import BuildWrapper from '@/components/buildMenu/buildWrapper';
import BuildMenuList from "@/components/buildMenu/buildMenuList";
import BuildComponent from "@/components/buildMenu/buildComponent";
import Equipment from "@/components/equipmentMenu/equipment";
import InfoPanel from "@/components/infoPanel/mainPanel";
import prisma from '@/lib/client';

const ExistingBuildPage = async ({ params: { id } }: { params: { id: string } }) => {
    const res = await prisma.build.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            classList: true,
            cantrips: true
        }
    })
    console.log(res)
    if (!res) return "Loading"

    return (
        <main className="h-screen flex gap-4 items-center justify-center">
            <BuildWrapper build={res} id={id}>
                <BuildMenuList />
                <BuildComponent />
                <Equipment />
                <InfoPanel />
            </BuildWrapper>
        </main>
    )
}

export default ExistingBuildPage
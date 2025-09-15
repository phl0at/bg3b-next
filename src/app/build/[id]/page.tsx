"use server"
import React from 'react'
import BuildWrapper from '@/components/buildMenu/buildWrapper';
import BuildMenuList from "@/components/buildMenu/buildMenuList";
import BuildComponent from "@/components/buildMenu/buildComponent";
import Equipment from "@/components/equipmentMenu/equipment";
import InfoPanel from "@/components/infoPanel/mainPanel";
import prisma from '@/lib/client';

const ExistingBuildPage = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params
    const build = await prisma.build.findUnique({
        where: { id }
    })

    return (
        <BuildWrapper build={build} >
            <main className="h-screen flex gap-4 items-center justify-center">
                <BuildMenuList />
                <BuildComponent />
                <Equipment />
                <InfoPanel />
            </main>
        </BuildWrapper>
    )
}

export default ExistingBuildPage
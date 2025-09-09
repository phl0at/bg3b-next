"use client"
import { ReactNode, useEffect } from 'react'
import { useStore } from '@/store/store'
import { BackEndBuild } from '@/lib/types';
import Amulets from "@/lib/equipment/amulets"
import Armours from "@/lib/equipment/armours";
import Boots from "@/lib/equipment/boots";
import Cloaks from "@/lib/equipment/cloaks";
import Gloves from "@/lib/equipment/gloves";
import Helmets from "@/lib/equipment/helmets";
import Rings from "@/lib/equipment/rings";
import Melee from "@/lib/equipment/meleeWeapons";
import Ranged from "@/lib/equipment/rangedWeapons";

const BuildWrapper = ({ children, build, id }: { children: ReactNode; build: BackEndBuild; id: string }) => {
    const { dispatch } = useStore((state) => state)
    useEffect(() => {
        if (id !== "new-build") {
            // Prizma backend stores equipment on a build by its ID. The front end needs them
            // converted into an object containing data for the respective item.
            const serializedBuild: any = { ...build }
            serializedBuild.amulet = Amulets[build.amulet as keyof typeof Amulets]
            serializedBuild.armour = Armours[build.armour as keyof typeof Armours]
            serializedBuild.boots = Boots[build.boots as keyof typeof Boots]
            serializedBuild.cloak = Cloaks[build.cloak as keyof typeof Cloaks]
            serializedBuild.gloves = Gloves[build.gloves as keyof typeof Gloves]
            serializedBuild.helmet = Helmets[build.helmet as keyof typeof Helmets]
            serializedBuild.ring1 = Rings[build.ring1 as keyof typeof Rings]
            serializedBuild.ring2 = Rings[build.ring2 as keyof typeof Rings]
            serializedBuild.meleeMH = Melee[build.meleeMH as keyof typeof Melee]
            serializedBuild.meleeOH = Melee[build.meleeOH as keyof typeof Melee]
            serializedBuild.rangedMH = Ranged[build.rangedMH as keyof typeof Ranged]
            serializedBuild.rangedOH = Ranged[build.rangedOH as keyof typeof Ranged]

            dispatch({ type: "GET BUILD", payload: serializedBuild })
        }
    }, [])

    return (
        <>{children}</>
    )
}

export default BuildWrapper
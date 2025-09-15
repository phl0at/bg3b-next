"use server"
import prisma from './client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { BackEndBuild, FrontEndBuild } from './types';
import Amulets from "@/lib/equipment/amulets"
import Armours from "@/lib/equipment/armours";
import Boots from "@/lib/equipment/boots";
import Cloaks from "@/lib/equipment/cloaks";
import Gloves from "@/lib/equipment/gloves";
import Helmets from "@/lib/equipment/helmets";
import Rings from "@/lib/equipment/rings";
import Melee from "@/lib/equipment/meleeWeapons";
import Ranged from "@/lib/equipment/rangedWeapons";
import { redirect } from 'next/navigation';

export const saveBuild = async (build: FrontEndBuild) => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();
    if (!isUserAuthenticated || !user) {
        throw new Error("You must be logged in to save a build!")
    } else if (build.id != "new") {
        if (user?.id != build.authorId) {
            throw new Error("You can only perform this action on builds you own!")
        }
    } else if (build.characterName.trim().length < 3 || build.characterName.length > 25) {
        throw new Error("Character name must be between 3 and 25 characters!")
    } else if (build.abilityPoints > 0) {
        throw new Error("You have unspent ability points!")
    } else if (build.plus1 === "" || build.plus2 === "") {
        throw new Error("You must select two ability bonuses!")
    } else if (build.level < 12) {
        throw new Error("Please add classes to your build until you reach level 12!")
    } else if (build.helmet.id === 0) {
        throw new Error("Please equip a helmet!")
    } else if (build.cloak.id === 0) {
        throw new Error("Please equip a cloak!")
    } else if (build.armour.id === 0) {
        throw new Error("Please equip chest armour!")
    } else if (build.gloves.id === 0) {
        throw new Error("Please equip gloves!")
    } else if (build.amulet.id === 0) {
        throw new Error("Please equip an amulet!")
    } else if (build.ring1.id === 0) {
        throw new Error("Please equip an ring(1) slot!")
    } else if (build.ring2.id === 0) {
        throw new Error("Please equip an ring(2) slot!")
    } else if (build.boots.id === 0) {
        throw new Error("Please equip boots!")
    } else if (build.meleeMH.id === 0) {
        throw new Error("Please equip a melee weapon!")
    } else if (build.rangedMH.id === 0) {
        throw new Error("Please equip a ranged weapon!")
    } else {
        const newBuild = await prisma.build.create({
            data: {
                authorId: user.id,
                armourClass: build.armourClass,
                background: build.background,
                characterName: build.characterName,
                charisma: build.charisma,
                constitution: build.constitution,
                dexterity: build.dexterity,
                intelligence: build.intelligence,
                level: build.level,
                origin: build.origin,
                plus1: build.plus1,
                plus2: build.plus2,
                race: build.race,
                subRace: build.subRace,
                strength: build.strength,
                wisdom: build.wisdom,
                helmet: build.helmet.id,
                cloak: build.cloak.id,
                armour: build.armour.id,
                gloves: build.gloves.id,
                amulet: build.amulet.id,
                ring1: build.ring1.id,
                ring2: build.ring2.id,
                boots: build.boots.id,
                meleeMH: build.meleeMH.id,
                meleeOH: build.meleeOH.id,
                rangedMH: build.rangedMH.id,
                rangedOH: build.rangedOH.id,
            }
        })
        return newBuild
    }
};


export const getBuildByID = async (id: number) => {
    const build = await prisma.build.findUnique({
        where: {
            id: id
        }
    })
    return build
}

export const navigateToBuild = async (id: number) => {
    return redirect(`/build/${id}`)
}

export const formatBuild = (build: BackEndBuild) => {
    const formattedBuild: any = { ...build }
    formattedBuild.abilityPoints = 0;
    formattedBuild.cantripPoints = 0;
    formattedBuild.amulet = Amulets[build.amulet as keyof typeof Amulets]
    formattedBuild.armour = Armours[build.armour as keyof typeof Armours]
    formattedBuild.boots = Boots[build.boots as keyof typeof Boots]
    formattedBuild.cloak = Cloaks[build.cloak as keyof typeof Cloaks]
    formattedBuild.gloves = Gloves[build.gloves as keyof typeof Gloves]
    formattedBuild.helmet = Helmets[build.helmet as keyof typeof Helmets]
    formattedBuild.ring1 = Rings[build.ring1 as keyof typeof Rings]
    formattedBuild.ring2 = Rings[build.ring2 as keyof typeof Rings]
    formattedBuild.meleeMH = Melee[build.meleeMH as keyof typeof Melee]
    formattedBuild.meleeOH = Melee[build.meleeOH as keyof typeof Melee]
    formattedBuild.rangedMH = Ranged[build.rangedMH as keyof typeof Ranged]
    formattedBuild.rangedOH = Ranged[build.rangedOH as keyof typeof Ranged]

    return formattedBuild
}
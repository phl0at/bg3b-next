"use server"
import prisma from './client';
import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { FrontEndBuild } from './types';


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

        Object.values(build.classList).forEach(async (_class) => {
            await prisma.class.create({
                data: {
                    level: _class.level,
                    name: _class.name,
                    classId: _class.id,
                    order: _class.order,
                    levelsAdded: _class.levelsAdded.join(","),
                    subClassId: _class.subClass?.id || 0,
                    modifier: _class.modifier,
                    buildId: newBuild.id
                }
            })
        })
        return newBuild.id
    }
};


export const getBuildByID = async (id: number) => {
    const build = await prisma.build.findUnique({
        where: {
            id
        },
        include: {
            classList: true,
            cantrips: true
        }
    })
    return build
}


export const navigateToBuild = async (id: number) => {
    return redirect(`/build/${id}`)
}
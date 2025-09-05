"use server"
import prisma from './client';
import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export const saveBuild = async (build: Build) => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();


    if (!isUserAuthenticated || !user) {
        throw new Error("You must be logged in to save a build!")
    } else if (build.id != "new") {
        if (user?.id != build.authorId) {
            throw new Error("You can only edit your own builds!")
        }
    } else if (build.characterName.trim().length < 3 || build.characterName.length > 25) {
        throw new Error("Character name must be between 3 and 25 characters!")
    } else if (build.abilityPoints > 0) {
        throw new Error("You have unspent ability points!")
    } else if (build.plus1 === "" || build.plus2 === "") {
        throw new Error("You must select two ability bonuses!")
    } else if (build.level < 12) {
        throw new Error("Please add classes to your build until you reach level 12!")
    } else if (!build.helmet || !build.cloak || !build.armour || !build.gloves || !build.amulet || !build.ring1 || !build.ring2 || !build.boots || !build.meleeMH || !build.rangedMH) {
        throw new Error("Please equip all required gear before saving your build!")
    } else {
        const newBuild = prisma.build.create({
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
                meleeOH: build.meleeOH?.id || null,
                rangedMH: build.rangedMH.id,
                rangedOH: build.rangedOH?.id || null,
            }
        })
        if (newBuild != undefined) {
            redirect(`/${(await newBuild).id}`)
        }
        return newBuild
    }


};
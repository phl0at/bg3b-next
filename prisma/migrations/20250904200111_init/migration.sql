/*
  Warnings:

  - You are about to drop the `BuildCantrip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BuildClass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BuildSpell` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `boot` on the `Build` table. All the data in the column will be lost.
  - You are about to drop the column `glove` on the `Build` table. All the data in the column will be lost.
  - You are about to alter the column `subRace` on the `Build` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `boots` to the `Build` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gloves` to the `Build` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Build` table without a default value. This is not possible if the table is not empty.
  - Made the column `armourClass` on table `Build` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subRace` on table `Build` required. This step will fail if there are existing NULL values in that column.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BuildCantrip";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BuildClass";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BuildSpell";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "modifier" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AddedClass" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "subClass" TEXT,
    "level" INTEGER NOT NULL,
    "levelsAdded" TEXT NOT NULL,
    "modifier" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "AddedClass_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AddedClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cantrip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cantripId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AddedCantrip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "cantripId" INTEGER NOT NULL,
    CONSTRAINT "AddedCantrip_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AddedCantrip_cantripId_fkey" FOREIGN KEY ("cantripId") REFERENCES "Cantrip" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "spellId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AddedSpell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "spellId" INTEGER NOT NULL,
    CONSTRAINT "AddedSpell_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AddedSpell_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Build" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "origin" INTEGER NOT NULL,
    "race" INTEGER NOT NULL,
    "subRace" INTEGER NOT NULL,
    "background" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,
    "plus2" TEXT NOT NULL,
    "plus1" TEXT NOT NULL,
    "helmet" INTEGER NOT NULL,
    "cloak" INTEGER NOT NULL,
    "armour" INTEGER NOT NULL,
    "gloves" INTEGER NOT NULL,
    "boots" INTEGER NOT NULL,
    "amulet" INTEGER NOT NULL,
    "ring1" INTEGER NOT NULL,
    "ring2" INTEGER NOT NULL,
    "meleeMH" INTEGER NOT NULL,
    "meleeOH" INTEGER,
    "rangedMH" INTEGER NOT NULL,
    "rangedOH" INTEGER,
    "armourClass" INTEGER NOT NULL
);
INSERT INTO "new_Build" ("amulet", "armour", "armourClass", "authorId", "background", "characterName", "charisma", "cloak", "constitution", "dexterity", "helmet", "id", "meleeMH", "meleeOH", "origin", "plus1", "plus2", "race", "rangedMH", "rangedOH", "ring1", "ring2", "strength", "subRace", "wisdom") SELECT "amulet", "armour", "armourClass", "authorId", "background", "characterName", "charisma", "cloak", "constitution", "dexterity", "helmet", "id", "meleeMH", "meleeOH", "origin", "plus1", "plus2", "race", "rangedMH", "rangedOH", "ring1", "ring2", "strength", "subRace", "wisdom" FROM "Build";
DROP TABLE "Build";
ALTER TABLE "new_Build" RENAME TO "Build";
CREATE UNIQUE INDEX "Build_authorId_key" ON "Build"("authorId");
CREATE TABLE "new_Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "buildId" INTEGER NOT NULL,
    CONSTRAINT "Favorite_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Favorite" ("buildId", "id", "userId") SELECT "buildId", "id", "userId" FROM "Favorite";
DROP TABLE "Favorite";
ALTER TABLE "new_Favorite" RENAME TO "Favorite";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "AddedClass_buildId_classId_idx" ON "AddedClass"("buildId", "classId");

-- CreateIndex
CREATE INDEX "AddedCantrip_buildId_cantripId_idx" ON "AddedCantrip"("buildId", "cantripId");

-- CreateIndex
CREATE INDEX "AddedSpell_buildId_spellId_idx" ON "AddedSpell"("buildId", "spellId");

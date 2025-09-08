/*
  Warnings:

  - Added the required column `intelligence` to the `Build` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Build" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "armourClass" INTEGER NOT NULL,
    "background" INTEGER NOT NULL,
    "characterName" TEXT NOT NULL,
    "charisma" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "origin" INTEGER NOT NULL,
    "plus1" TEXT NOT NULL,
    "plus2" TEXT NOT NULL,
    "race" INTEGER NOT NULL,
    "subRace" INTEGER NOT NULL,
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
    "rangedOH" INTEGER
);
INSERT INTO "new_Build" ("amulet", "armour", "armourClass", "authorId", "background", "boots", "characterName", "charisma", "cloak", "constitution", "dexterity", "gloves", "helmet", "id", "level", "meleeMH", "meleeOH", "origin", "plus1", "plus2", "race", "rangedMH", "rangedOH", "ring1", "ring2", "strength", "subRace", "wisdom") SELECT "amulet", "armour", "armourClass", "authorId", "background", "boots", "characterName", "charisma", "cloak", "constitution", "dexterity", "gloves", "helmet", "id", "level", "meleeMH", "meleeOH", "origin", "plus1", "plus2", "race", "rangedMH", "rangedOH", "ring1", "ring2", "strength", "subRace", "wisdom" FROM "Build";
DROP TABLE "Build";
ALTER TABLE "new_Build" RENAME TO "Build";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

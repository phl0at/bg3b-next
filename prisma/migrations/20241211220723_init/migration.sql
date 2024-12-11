-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Build" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "characterName" TEXT NOT NULL,
    "origin" INTEGER NOT NULL,
    "race" INTEGER NOT NULL,
    "subRace" TEXT,
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
    "glove" INTEGER NOT NULL,
    "boot" INTEGER NOT NULL,
    "amulet" INTEGER NOT NULL,
    "ring1" INTEGER NOT NULL,
    "ring2" INTEGER NOT NULL,
    "meleeMH" INTEGER NOT NULL,
    "meleeOH" INTEGER NOT NULL,
    "rangedMH" INTEGER NOT NULL,
    "rangedOH" INTEGER NOT NULL,
    "armourClass" INTEGER,
    CONSTRAINT "Build_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BuildClass" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "sub_class" TEXT,
    "order" INTEGER NOT NULL,
    "modifier" TEXT NOT NULL,
    CONSTRAINT "BuildClass_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BuildCantrip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "cantripId" INTEGER NOT NULL,
    CONSTRAINT "BuildCantrip_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BuildSpell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "spellId" INTEGER NOT NULL,
    CONSTRAINT "BuildSpell_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "buildId" INTEGER NOT NULL,
    CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorite_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Build_authorId_key" ON "Build"("authorId");

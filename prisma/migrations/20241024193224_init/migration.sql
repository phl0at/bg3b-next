-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Build" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "author_id" INTEGER NOT NULL,
    "character_name" TEXT NOT NULL,
    "origin" INTEGER NOT NULL,
    "race" INTEGER NOT NULL,
    "sub_race" TEXT,
    "background" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,
    "plus_2" TEXT NOT NULL,
    "plus_1" TEXT NOT NULL,
    "helmet" INTEGER NOT NULL,
    "cloak" INTEGER NOT NULL,
    "armour" INTEGER NOT NULL,
    "glove" INTEGER NOT NULL,
    "boot" INTEGER NOT NULL,
    "amulet" INTEGER NOT NULL,
    "ring_1" INTEGER NOT NULL,
    "ring_2" INTEGER NOT NULL,
    "melee_mh" INTEGER NOT NULL,
    "melee_oh" INTEGER NOT NULL,
    "ranged_mh" INTEGER NOT NULL,
    "ranged_oh" INTEGER NOT NULL,
    "armour_class" INTEGER,
    CONSTRAINT "Build_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BuildClass" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "build_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "sub_class" TEXT,
    "order" INTEGER NOT NULL,
    "modifier" TEXT NOT NULL,
    CONSTRAINT "BuildClass_build_id_fkey" FOREIGN KEY ("build_id") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BuildCantrip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "build_id" INTEGER NOT NULL,
    "cantrip_id" INTEGER NOT NULL,
    CONSTRAINT "BuildCantrip_build_id_fkey" FOREIGN KEY ("build_id") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BuildSpell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "build_id" INTEGER NOT NULL,
    "spell_id" INTEGER NOT NULL,
    CONSTRAINT "BuildSpell_build_id_fkey" FOREIGN KEY ("build_id") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "build_id" INTEGER NOT NULL,
    CONSTRAINT "Favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorite_build_id_fkey" FOREIGN KEY ("build_id") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Build_author_id_key" ON "Build"("author_id");

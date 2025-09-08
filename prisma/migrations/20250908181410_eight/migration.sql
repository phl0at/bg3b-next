/*
  Warnings:

  - You are about to drop the `AddedCantrip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AddedClass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AddedSpell` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Spell` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `buildId` to the `Cantrip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buildId` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `levelsAdded` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subClass` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AddedCantrip_buildId_cantripId_idx";

-- DropIndex
DROP INDEX "AddedClass_buildId_classId_idx";

-- DropIndex
DROP INDEX "AddedSpell_buildId_spellId_idx";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AddedCantrip";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AddedClass";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AddedSpell";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Favorite";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Spell";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cantrip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "cantripId" INTEGER NOT NULL,
    CONSTRAINT "Cantrip_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cantrip" ("cantripId", "id") SELECT "cantripId", "id" FROM "Cantrip";
DROP TABLE "Cantrip";
ALTER TABLE "new_Cantrip" RENAME TO "Cantrip";
CREATE INDEX "Cantrip_buildId_cantripId_idx" ON "Cantrip"("buildId", "cantripId");
CREATE TABLE "new_Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "subClass" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "levelsAdded" TEXT NOT NULL,
    "modifier" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "Class_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Class" ("classId", "id", "modifier", "name") SELECT "classId", "id", "modifier", "name" FROM "Class";
DROP TABLE "Class";
ALTER TABLE "new_Class" RENAME TO "Class";
CREATE INDEX "Class_buildId_classId_idx" ON "Class"("buildId", "classId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "Build_id_authorId_idx" ON "Build"("id", "authorId");

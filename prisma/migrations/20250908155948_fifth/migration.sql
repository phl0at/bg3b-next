/*
  Warnings:

  - Made the column `subClass` on table `AddedClass` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AddedClass" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "subClass" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "levelsAdded" TEXT NOT NULL,
    "modifier" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "AddedClass_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AddedClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AddedClass" ("buildId", "classId", "id", "level", "levelsAdded", "modifier", "name", "order", "subClass") SELECT "buildId", "classId", "id", "level", "levelsAdded", "modifier", "name", "order", "subClass" FROM "AddedClass";
DROP TABLE "AddedClass";
ALTER TABLE "new_AddedClass" RENAME TO "AddedClass";
CREATE INDEX "AddedClass_buildId_classId_idx" ON "AddedClass"("buildId", "classId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

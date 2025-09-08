/*
  Warnings:

  - You are about to drop the column `subClass` on the `Class` table. All the data in the column will be lost.
  - Added the required column `subClassName` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "subClassName" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "levelsAdded" TEXT NOT NULL,
    "modifier" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "Class_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Class" ("buildId", "classId", "id", "level", "levelsAdded", "modifier", "name", "order") SELECT "buildId", "classId", "id", "level", "levelsAdded", "modifier", "name", "order" FROM "Class";
DROP TABLE "Class";
ALTER TABLE "new_Class" RENAME TO "Class";
CREATE INDEX "Class_buildId_classId_idx" ON "Class"("buildId", "classId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

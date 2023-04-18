/*
  Warnings:

  - You are about to drop the column `wekDays` on the `Ad` table. All the data in the column will be lost.
  - Added the required column `weekDays` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ad" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gameId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "yearsPlaying" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "weekDays" TEXT NOT NULL,
    "hourStart" INTEGER NOT NULL,
    "hourEnd" INTEGER NOT NULL,
    "useVoiceChannel" BOOLEAN NOT NULL,
    "createdAd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Ad_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ad" ("createdAd", "discord", "gameId", "hourEnd", "hourStart", "id", "name", "useVoiceChannel", "yearsPlaying") SELECT "createdAd", "discord", "gameId", "hourEnd", "hourStart", "id", "name", "useVoiceChannel", "yearsPlaying" FROM "Ad";
DROP TABLE "Ad";
ALTER TABLE "new_Ad" RENAME TO "Ad";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coordinate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,
    FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Coordinate" ("id", "longitude", "latitude", "locationId") SELECT "id", "longitude", "latitude", "locationId" FROM "Coordinate";
DROP TABLE "Coordinate";
ALTER TABLE "new_Coordinate" RENAME TO "Coordinate";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

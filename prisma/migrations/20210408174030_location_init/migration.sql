-- CreateTable
CREATE TABLE "Coordinate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "longitude" INTEGER NOT NULL,
    "latitude" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Location" (
    "name" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Location.name_unique" ON "Location"("name");

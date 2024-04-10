-- CreateEnum
CREATE TYPE "BasketballPositions" AS ENUM ('pointGuard', 'shootingGuard', 'smallForward', 'powerForward', 'center');

-- CreateTable
CREATE TABLE "Athlete" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "highSchool" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "positionFootball" TEXT,
    "positionBasketball" "BasketballPositions",

    CONSTRAINT "Athlete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasketballPlayer" (
    "id" SERIAL NOT NULL,
    "athleteId" INTEGER NOT NULL,
    "position" "BasketballPositions" NOT NULL,
    "currentTeamId" INTEGER,
    "currentSeasonStatsId" INTEGER,

    CONSTRAINT "BasketballPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasketballTeam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "BasketballTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasketballStats" (
    "id" SERIAL NOT NULL,
    "athleteId" INTEGER NOT NULL,
    "position" "BasketballPositions" NOT NULL,
    "points" INTEGER NOT NULL,
    "rebounds" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "steals" INTEGER NOT NULL,
    "blocks" INTEGER NOT NULL,
    "turnovers" INTEGER NOT NULL,
    "fieldGoalsMade" INTEGER NOT NULL,
    "fieldGoalsAttempted" INTEGER NOT NULL,
    "threePointersMade" INTEGER NOT NULL,
    "threePointersAttempted" INTEGER NOT NULL,
    "freeThrowsMade" INTEGER NOT NULL,
    "freeThrowsAttempted" INTEGER NOT NULL,
    "minutesPlayed" INTEGER NOT NULL,
    "gamesPlayed" INTEGER NOT NULL,
    "gamesStarted" INTEGER NOT NULL,
    "personalFouls" INTEGER NOT NULL,
    "technicalFouls" INTEGER NOT NULL,
    "flagrantFouls" INTEGER NOT NULL,
    "ejections" INTEGER NOT NULL,

    CONSTRAINT "BasketballStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "dateStarted" TIMESTAMP(3) NOT NULL,
    "dateEnded" TIMESTAMP(3),
    "graduationDate" TIMESTAMP(3),
    "major" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BasketballPlayer_athleteId_key" ON "BasketballPlayer"("athleteId");

-- CreateIndex
CREATE UNIQUE INDEX "BasketballStats_athleteId_key" ON "BasketballStats"("athleteId");

-- AddForeignKey
ALTER TABLE "Athlete" ADD CONSTRAINT "Athlete_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketballPlayer" ADD CONSTRAINT "BasketballPlayer_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketballPlayer" ADD CONSTRAINT "BasketballPlayer_currentTeamId_fkey" FOREIGN KEY ("currentTeamId") REFERENCES "BasketballTeam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketballPlayer" ADD CONSTRAINT "BasketballPlayer_currentSeasonStatsId_fkey" FOREIGN KEY ("currentSeasonStatsId") REFERENCES "BasketballStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketballStats" ADD CONSTRAINT "BasketballStats_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

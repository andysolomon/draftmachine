DO $$ BEGIN
 CREATE TYPE "draftmanager_basketball_positions" AS ENUM('pointGuard', 'shootingGuard', 'smallForward', 'powerForward', 'center');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "draftmanager_athlete" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"date_of_birth" date,
	"college" varchar(256),
	"high_school" varchar(256),
	"height" integer,
	"weight" integer,
	"position_football" varchar(256),
	"draftmanager_basketball_positions" "draftmanager_basketball_positions"
);
--> statement-breakpoint
ALTER TABLE "draftmanager_post" ALTER COLUMN "created_at" SET DEFAULT now();
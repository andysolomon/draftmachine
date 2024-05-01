DO $$ BEGIN
 CREATE TYPE "basketball_positions" AS ENUM('pointGuard', 'shootingGuard', 'smallForward', 'powerForward', 'center');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "draftmanager_athlete" RENAME TO "athlete";--> statement-breakpoint
ALTER TABLE "draftmanager_post" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE "athlete" ALTER COLUMN "first_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "athlete" ALTER COLUMN "last_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "athlete" ALTER COLUMN "draftmanager_basketball_positions" SET DATA TYPE basketball_positions;
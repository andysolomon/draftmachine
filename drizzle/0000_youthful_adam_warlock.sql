-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "draftmanager_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "draftmanager_post" ("name");
*/
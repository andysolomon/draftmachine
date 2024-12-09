DO $$ BEGIN
 CREATE TYPE "public"."basketball_positions" AS ENUM('pointGuard', 'shootingGuard', 'smallForward', 'powerForward', 'center');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "athlete" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(256) NOT NULL,
	"last_name" varchar(256) NOT NULL,
	"date_of_birth" date,
	"college" varchar(256),
	"high_school" varchar(256),
	"height" integer,
	"weight" integer,
	"position_football" varchar(256),
	"basketball_positions" "basketball_positions"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "basketball_player" (
	"id" serial PRIMARY KEY NOT NULL,
	"athlete_id" integer,
	"basketball_positions" "basketball_positions",
	"current_team_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "basketball_team" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"location" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "basketball_team_depth_chart" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_id" integer,
	"pg1" integer,
	"pg2" integer,
	"sg1" integer,
	"sg2" integer,
	"sf1" integer,
	"sf2" integer,
	"pf1" integer,
	"pf2" integer,
	"c1" integer,
	"c2" integer,
	"reserve1" integer,
	"reserve2" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "draftmanager_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_player" ADD CONSTRAINT "basketball_player_athlete_id_athlete_id_fk" FOREIGN KEY ("athlete_id") REFERENCES "public"."athlete"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_player" ADD CONSTRAINT "basketball_player_current_team_id_basketball_team_id_fk" FOREIGN KEY ("current_team_id") REFERENCES "public"."basketball_team"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_team_id_basketball_team_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."basketball_team"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_pg1_basketball_player_id_fk" FOREIGN KEY ("pg1") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_pg2_basketball_player_id_fk" FOREIGN KEY ("pg2") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_sg1_basketball_player_id_fk" FOREIGN KEY ("sg1") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_sg2_basketball_player_id_fk" FOREIGN KEY ("sg2") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_sf1_basketball_player_id_fk" FOREIGN KEY ("sf1") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_sf2_basketball_player_id_fk" FOREIGN KEY ("sf2") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_pf1_basketball_player_id_fk" FOREIGN KEY ("pf1") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_pf2_basketball_player_id_fk" FOREIGN KEY ("pf2") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_c1_basketball_player_id_fk" FOREIGN KEY ("c1") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_c2_basketball_player_id_fk" FOREIGN KEY ("c2") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_reserve1_basketball_player_id_fk" FOREIGN KEY ("reserve1") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "basketball_team_depth_chart" ADD CONSTRAINT "basketball_team_depth_chart_reserve2_basketball_player_id_fk" FOREIGN KEY ("reserve2") REFERENCES "public"."basketball_player"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "draftmanager_post" USING btree ("name");
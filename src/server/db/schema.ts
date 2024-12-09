// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";

import { pgTable, pgEnum, date, index, serial, varchar, timestamp, integer, pgTableCreator, jsonb } from "drizzle-orm/pg-core"

export const createTable = pgTableCreator((name) => `draftmanager_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const BasketballPositions = pgEnum("basketball_positions",
    ['pointGuard', 'shootingGuard', 'smallForward', 'powerForward', 'center']);

export const Athlete = pgTable("athlete", {
    id: serial("id").primaryKey().notNull(),
    firstName: varchar("first_name", { length: 256 }).notNull(),
    lastName: varchar("last_name", { length: 256 }).notNull(),
    dateOfBirth: date("date_of_birth", { mode: 'string' }),
    college: varchar("college", { length: 256 }),
    highSchool: varchar("high_school", { length: 256 }),
    height: integer("height"),
    weight: integer("weight"),
    positionFootball: varchar("position_football", { length: 256 }),
    positionBasketball: BasketballPositions('basketball_positions'),
})

export const BasketballTeam = pgTable("basketball_team", {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    location: varchar("location", { length: 256 }),
})

export const BasketballTeamDepthChart = pgTable("basketball_team_depth_chart", {
    id: serial("id").primaryKey().notNull(),
    teamId: integer("team_id").references(() => BasketballTeam.id),
    pg1: integer("pg1").references(() => BasketballPlayer.id),
    pg2: integer("pg2").references(() => BasketballPlayer.id),
    sg1: integer("sg1").references(() => BasketballPlayer.id),
    sg2: integer("sg2").references(() => BasketballPlayer.id),
    sf1: integer("sf1").references(() => BasketballPlayer.id),
    sf2: integer("sf2").references(() => BasketballPlayer.id),
    pf1: integer("pf1").references(() => BasketballPlayer.id),
    pf2: integer("pf2").references(() => BasketballPlayer.id),
    c1: integer("c1").references(() => BasketballPlayer.id),
    c2: integer("c2").references(() => BasketballPlayer.id),
    reserve1: integer("reserve1").references(() => BasketballPlayer.id),
    reserve2: integer("reserve2").references(() => BasketballPlayer.id),
})

export const BasketballPlayer = pgTable("basketball_player", {
    id: serial("id").primaryKey().notNull(),
    athleteId: integer("athlete_id").references(() => Athlete.id),
    position: BasketballPositions('basketball_positions'),
    currentTeamId: integer("current_team_id").references(() => BasketballTeam.id),
})
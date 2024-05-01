// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";

import { pgTable, pgEnum, date, index, serial, varchar, timestamp, integer, pgTableCreator } from "drizzle-orm/pg-core"

export const createTable = pgTableCreator((name) => `draftmanager_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
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

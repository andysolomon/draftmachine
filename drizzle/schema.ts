import { pgTable, pgEnum, date, index, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const draftmanagerPost = pgTable("draftmanager_post", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }),
},
(table) => {
	return {
		nameIdx: index("name_idx").on(table.name),
	}
});

export const BasketballPositions = pgEnum("draftmanager_basketball_positions",
    ['pointGuard', 'shootingGuard', 'smallForward', 'powerForward', 'center']);

export const Athlete = pgTable("draftmanager_athlete", {
    id: serial("id").primaryKey().notNull(),
    firstName: varchar("first_name", { length: 256 }),
    lastName: varchar("last_name", { length: 256 }),
    dateOfBirth: date("date_of_birth", { mode: 'string' }),
    college: varchar("college", { length: 256 }),
    highSchool: varchar("high_school", { length: 256 }),
    height: integer("height"),
    weight: integer("weight"),
    positionFootball: varchar("position_football", { length: 256 }),
    positionBasketball: BasketballPositions('draftmanager_basketball_positions'),
})
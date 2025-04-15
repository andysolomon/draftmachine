import { pgTable, index, serial, varchar, timestamp, date, integer, foreignKey, pgEnum } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const basketballPositions = pgEnum("basketball_positions", ['pointGuard', 'shootingGuard', 'smallForward', 'powerForward', 'center'])
export const draftmanagerBasketballPositions = pgEnum("draftmanager_basketball_positions", ['pointGuard', 'shootingGuard', 'smallForward', 'powerForward', 'center'])



export const draftmanagerPost = pgTable("draftmanager_post", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
},
(table) => {
	return {
		nameIdx: index("name_idx").using("btree", table.name.asc().nullsLast()),
	}
});

export const athlete = pgTable("athlete", {
	id: serial("id").primaryKey().notNull(),
	firstName: varchar("first_name", { length: 256 }).notNull(),
	lastName: varchar("last_name", { length: 256 }).notNull(),
	dateOfBirth: date("date_of_birth"),
	college: varchar("college", { length: 256 }),
	highSchool: varchar("high_school", { length: 256 }),
	height: integer("height"),
	weight: integer("weight"),
	positionFootball: varchar("position_football", { length: 256 }),
	basketballPositions: basketballPositions("basketball_positions"),
});

export const basketballPlayer = pgTable("basketball_player", {
	id: serial("id").primaryKey().notNull(),
	athleteId: integer("athlete_id"),
	basketballPositions: basketballPositions("basketball_positions"),
	currentTeamId: integer("current_team_id"),
},
(table) => {
	return {
		basketballPlayerAthleteIdAthleteIdFk: foreignKey({
			columns: [table.athleteId],
			foreignColumns: [athlete.id],
			name: "basketball_player_athlete_id_athlete_id_fk"
		}),
		basketballPlayerCurrentTeamIdBasketballTeamIdFk: foreignKey({
			columns: [table.currentTeamId],
			foreignColumns: [basketballTeam.id],
			name: "basketball_player_current_team_id_basketball_team_id_fk"
		}),
	}
});

export const basketballTeam = pgTable("basketball_team", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }).notNull(),
	location: varchar("location", { length: 256 }),
});

export const basketballTeamDepthChart = pgTable("basketball_team_depth_chart", {
	id: serial("id").primaryKey().notNull(),
	teamId: integer("team_id"),
	pg1: integer("pg1"),
	pg2: integer("pg2"),
	sg1: integer("sg1"),
	sg2: integer("sg2"),
	sf1: integer("sf1"),
	sf2: integer("sf2"),
	pf1: integer("pf1"),
	pf2: integer("pf2"),
	c1: integer("c1"),
	c2: integer("c2"),
	reserve1: integer("reserve1"),
	reserve2: integer("reserve2"),
},
(table) => {
	return {
		basketballTeamDepthChartTeamIdBasketballTeamIdFk: foreignKey({
			columns: [table.teamId],
			foreignColumns: [basketballTeam.id],
			name: "basketball_team_depth_chart_team_id_basketball_team_id_fk"
		}),
		basketballTeamDepthChartPg1BasketballPlayerIdFk: foreignKey({
			columns: [table.pg1],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_pg1_basketball_player_id_fk"
		}),
		basketballTeamDepthChartPg2BasketballPlayerIdFk: foreignKey({
			columns: [table.pg2],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_pg2_basketball_player_id_fk"
		}),
		basketballTeamDepthChartSg1BasketballPlayerIdFk: foreignKey({
			columns: [table.sg1],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_sg1_basketball_player_id_fk"
		}),
		basketballTeamDepthChartSg2BasketballPlayerIdFk: foreignKey({
			columns: [table.sg2],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_sg2_basketball_player_id_fk"
		}),
		basketballTeamDepthChartSf1BasketballPlayerIdFk: foreignKey({
			columns: [table.sf1],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_sf1_basketball_player_id_fk"
		}),
		basketballTeamDepthChartSf2BasketballPlayerIdFk: foreignKey({
			columns: [table.sf2],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_sf2_basketball_player_id_fk"
		}),
		basketballTeamDepthChartPf1BasketballPlayerIdFk: foreignKey({
			columns: [table.pf1],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_pf1_basketball_player_id_fk"
		}),
		basketballTeamDepthChartPf2BasketballPlayerIdFk: foreignKey({
			columns: [table.pf2],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_pf2_basketball_player_id_fk"
		}),
		basketballTeamDepthChartC1BasketballPlayerIdFk: foreignKey({
			columns: [table.c1],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_c1_basketball_player_id_fk"
		}),
		basketballTeamDepthChartC2BasketballPlayerIdFk: foreignKey({
			columns: [table.c2],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_c2_basketball_player_id_fk"
		}),
		basketballTeamDepthChartReserve1BasketballPlayerIdFk: foreignKey({
			columns: [table.reserve1],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_reserve1_basketball_player_id_fk"
		}),
		basketballTeamDepthChartReserve2BasketballPlayerIdFk: foreignKey({
			columns: [table.reserve2],
			foreignColumns: [basketballPlayer.id],
			name: "basketball_team_depth_chart_reserve2_basketball_player_id_fk"
		}),
	}
});
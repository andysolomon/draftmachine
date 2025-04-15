import { relations } from "drizzle-orm/relations";
import { athlete, basketballPlayer, basketballTeam, basketballTeamDepthChart } from "./schema";

export const basketballPlayerRelations = relations(basketballPlayer, ({one, many}) => ({
	athlete: one(athlete, {
		fields: [basketballPlayer.athleteId],
		references: [athlete.id]
	}),
	basketballTeam: one(basketballTeam, {
		fields: [basketballPlayer.currentTeamId],
		references: [basketballTeam.id]
	}),
	basketballTeamDepthCharts_pg1: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_pg1_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_pg2: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_pg2_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_sg1: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_sg1_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_sg2: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_sg2_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_sf1: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_sf1_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_sf2: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_sf2_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_pf1: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_pf1_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_pf2: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_pf2_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_c1: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_c1_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_c2: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_c2_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_reserve1: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_reserve1_basketballPlayer_id"
	}),
	basketballTeamDepthCharts_reserve2: many(basketballTeamDepthChart, {
		relationName: "basketballTeamDepthChart_reserve2_basketballPlayer_id"
	}),
}));

export const athleteRelations = relations(athlete, ({many}) => ({
	basketballPlayers: many(basketballPlayer),
}));

export const basketballTeamRelations = relations(basketballTeam, ({many}) => ({
	basketballPlayers: many(basketballPlayer),
	basketballTeamDepthCharts: many(basketballTeamDepthChart),
}));

export const basketballTeamDepthChartRelations = relations(basketballTeamDepthChart, ({one}) => ({
	basketballTeam: one(basketballTeam, {
		fields: [basketballTeamDepthChart.teamId],
		references: [basketballTeam.id]
	}),
	basketballPlayer_pg1: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.pg1],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_pg1_basketballPlayer_id"
	}),
	basketballPlayer_pg2: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.pg2],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_pg2_basketballPlayer_id"
	}),
	basketballPlayer_sg1: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.sg1],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_sg1_basketballPlayer_id"
	}),
	basketballPlayer_sg2: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.sg2],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_sg2_basketballPlayer_id"
	}),
	basketballPlayer_sf1: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.sf1],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_sf1_basketballPlayer_id"
	}),
	basketballPlayer_sf2: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.sf2],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_sf2_basketballPlayer_id"
	}),
	basketballPlayer_pf1: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.pf1],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_pf1_basketballPlayer_id"
	}),
	basketballPlayer_pf2: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.pf2],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_pf2_basketballPlayer_id"
	}),
	basketballPlayer_c1: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.c1],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_c1_basketballPlayer_id"
	}),
	basketballPlayer_c2: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.c2],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_c2_basketballPlayer_id"
	}),
	basketballPlayer_reserve1: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.reserve1],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_reserve1_basketballPlayer_id"
	}),
	basketballPlayer_reserve2: one(basketballPlayer, {
		fields: [basketballTeamDepthChart.reserve2],
		references: [basketballPlayer.id],
		relationName: "basketballTeamDepthChart_reserve2_basketballPlayer_id"
	}),
}));
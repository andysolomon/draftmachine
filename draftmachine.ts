// Types and Interfaces >>>
type CombineFortyYardDashTimeTrials = {
   attempts: {
      firstAttempt: number
      secondAttempt: number
      thirdAttempt: number
   }
}
type CombineFortyYardDash = {
   officialTime: number
   trials: CombineFortyYardDashTimeTrials 
}
type ProspectCombine = {
   fortyYardDash: CombineFortyYardDash
   benchPressReps: number
   vertical: number
   coneDrill: number
}
type DraftProspect = {
    athlete: Athlete
    combine: ProspectCombine
    projectedRound: number
}
type College = {
    name: string
    state: string
    dateStarted: Date
    dateEnded: Date
    graduationDate: Date
    major: string
    url: string
}
type Athlete = {
    firstName: string
    lastName: string
    dateOfBirth: Date
    college: College
    highSchool: string
    height: number
    weight: number
    positionFootball: string
    positionBasketball: string
}

export enum BasketballPositions {
    pointGuard,
    shootingGuard,
    smallForward,
    powerForward,
    center
}

enum FootballOffensiveLinePositions {
    center,
    leftGuard,
    rightGuard,
    leftTackle,
    rightTackle,
}
enum FootballOffensiveSkillPositions {
    quarterback,
    runningBack,
    fullBack,
    tightEnd,
    wideReceiver,
}
enum FootballDefensiveLinePositions {
    defensiveTackle,
    defensiveEnd,
    edgeRusher,
}
enum FootballDefensiveLineBackerPositions {
    middleLinebacker,
    outsideLinebacker,
    weakSideLinebacker,
    strongSideLinebacker,
    edgeRusher,
}
enum FootballDefensiveBackPositions {
    cornerback,
    freeSafety,
    strongSafety,
    nickelBack,
    dimeBack,
}
enum FootballSpecialTeamsPositions {
    kicker,
    punter,
    longSnapper,
    holder,
    kickReturner,
    puntReturner,
    gunner,
    jammer,
    upback,
    personalProtector,
    wedgeBuster,
    wedge,
    blocker,
    tackler,
}

type BasketballStats = {
    athlete: Athlete
    position: BasketballPositions
    points: number
    rebounds: number
    assists: number
    steals: number
    blocks: number
    turnovers: number
    fieldGoalsMade: number
    fieldGoalsAttempted: number
    threePointersMade: number
    threePointersAttempted: number
    freeThrowsMade: number
    freeThrowsAttempted: number
    minutesPlayed: number
    gamesPlayed: number
    gamesStarted: number
    personalFouls: number
    technicalFouls: number
    flagrantFouls: number
    ejections: number
}

type FootballStats = {
    athlete: Athlete
    position: FootballOffensiveSkillPositions | FootballOffensiveLinePositions | FootballDefensiveLinePositions | FootballDefensiveLineBackerPositions | FootballDefensiveBackPositions | FootballSpecialTeamsPositions 
    gamesPlayed: number
    gamesStarted: number
    quarterbackStats: FootballStatsQuarterback
    runningBackStats: FootballStatsRunningBack
    wideReceiverStats: FootballStatsWideReceiver
    tightEndStats: FootballStatsTightEnd
    offensiveLineStats: FootballStatsOffensiveLine
    defensiveLineStats: FootballStatsDefensiveLine
    defensiveLineBackerStats: FootballStatsDefensiveLineBacker
    defensiveBackStats: FootballStatsDefensiveBack
    specialTeamsStats: FootballStatsSpecialTeams
}

type FootballStatsQuarterback = {
    passingYards: number
    passingTouchdowns: number
    passingInterceptions: number
}
type FootballStatsRunningBack = {
    rushingYards: number
    rushingTouchdowns: number
    rushingAttempts: number
    receivingYards: number
    receivingTouchdowns: number
    receivingReceptions: number
    receivingTargets: number
    fumbles: number
    fumblesLost: number
}
type FootballStatsWideReceiver = {
    receivingYards: number
    receivingTouchdowns: number
    receivingReceptions: number
    receivingTargets: number
    fumbles: number
    fumblesLost: number
}
type FootballStatsTightEnd = {
    receivingYards: number
    receivingTouchdowns: number
    receivingReceptions: number
    receivingTargets: number
    fumbles: number
    fumblesLost: number
    sacksAllowed: number
    pancakeBlocks: number
}
type FootballStatsOffensiveLine = {
    penalties: number
    penaltiesYards: number
    sacksAllowed: number
    quarterbackHitsAllowed: number
    rushingYards: number
    rushingTouchdowns: number
    rushingAttempts: number
    pancakeBlocks: number
}
type FootballStatsDefensiveLine = {
    tackles: number
    sacks: number
    interceptions: number
    passesDefended: number
    forcedFumbles: number
    fumbleRecoveries: number
    defensiveTouchdowns: number
    quarterbackHits: number
    tacklesForLoss: number
    quarterbackHurries: number
}
type FootballStatsLinebacker = {
    tackles: number
    sacks: number
    interceptions: number
    passesDefended: number
    forcedFumbles: number
    fumbleRecoveries: number
    defensiveTouchdowns: number
    quarterbackHits: number
    tacklesForLoss: number
    quarterbackHurries: number
}
type FootballStatsDefensiveBack = {
    tackles: number
    sacks: number
    interceptions: number
    passesDefended: number
    forcedFumbles: number
    fumbleRecoveries: number
    defensiveTouchdowns: number
    catchesAllowed: number
    targetsAllowed: number
    yardsAllowed: number
    catchesAllowedInManCoverage: number
    targetsAllowedInManCoverage: number
    yardsAllowedInManCoverage: number
    catchesAllowedInZoneCoverage: number
    targetsAllowedInZoneCoverage: number
    yardsAllowedInZoneCoverage: number
}
type FootballStatsSpecialTeams = {
    fieldGoalsMade: number
    fieldGoalsAttempted: number
    extraPointsMade: number
    extraPointsAttempted: number
    punts: number
    puntYards: number
    puntAverage: number
    puntLong: number
    puntInsideTwenty: number
    puntTouchbacks: number
    puntBlocked: number
    kickoffs: number
    kickoffYards: number
    kickoffAverage: number
    kickoffTouchbacks: number
    kickoffOutOfBounds: number
    kickoffOnside: number
    kickoffOnsideRecovered: number
    kickoffOnsideAttempted: number
    kickreturnYards: number
    kickreturnTouchdowns: number
    kickreturnAttempts: number
    puntreturnYards: number
    puntreturnTouchdowns: number
    puntreturnAttempts: number
    blockedKicks: number
    blockedPunts: number
}

export interface IBasketballPlayer {
    readonly athlete: Athlete
    position: BasketballPositions
    currentTeamId: number
    currentSeasonStats: BasketballStats
}
type FootballPlayer = {
    athlete: Athlete
    position: FootballOffensiveLinePositions | FootballOffensiveSkillPositions | FootballDefensiveLinePositions | FootballDefensiveLineBackerPositions | FootballDefensiveBackPositions | FootballSpecialTeamsPositions
    currentTeamId: number
    currentSeasonStats: FootballStats
}
type DepthChart = {
   name: Array<Athlete>
}
type BasketballDepthChart = {
    pg1: BasketballPlayer
    pg2: BasketballPlayer
    sg1: BasketballPlayer
    sg2: BasketballPlayer
    sf1: BasketballPlayer
    sf2: BasketballPlayer
    pf1: BasketballPlayer
    pf2: BasketballPlayer
    c1: BasketballPlayer
    c2: BasketballPlayer
    reserve1: BasketballPlayer
    reserve2: BasketballPlayer
}
type BasketballStartingLineup = {
    pg1: BasketballPlayer
    sg1: BasketballPlayer
    sf1: BasketballPlayer
    pf1: BasketballPlayer
    c1: BasketballPlayer
}
type FootballDepthChart = {
    offensiveSkillDepthChart: FootballOffensiveSkillDepthChart
    offensiveLineDepthChart: FootballOffensiveLineDepthChart
    defensiveLineDepthChart: FootballDefensiveLineDepthChart
    defensiveLineBackerDepthChart: FootballDefensiveLineBackerDepthChart
    defensiveBackDepthChart: FootballDefensiveBackDepthChart
    specialTeamsDepthChart: FootballSpecialTeamsDepthChart
}
type FootballOffensiveSkillDepthChart = {
    quarterback1: FootballPlayer
    quarterback2: FootballPlayer
    runningBack1: FootballPlayer
    runningBack2: FootballPlayer
    runningBack3: FootballPlayer
    wideReceiver1: FootballPlayer
    wideReceiver2: FootballPlayer
    wideReceiver3: FootballPlayer
    wideReceiver4: FootballPlayer
    tightEnd1: FootballPlayer
    tightEnd2: FootballPlayer
}
type FootballOffensiveLineDepthChart = {
    leftTackle1: FootballPlayer
    leftTackle2: FootballPlayer
    leftGuard1: FootballPlayer
    leftGuard2: FootballPlayer
    center1: FootballPlayer
    center2: FootballPlayer
    rightGuard1: FootballPlayer
    rightGuard2: FootballPlayer
    rightTackle1: FootballPlayer
    rightTackle2: FootballPlayer
}
type FootballDefensiveLineDepthChart = {
    defensiveEnd1: FootballPlayer
    defensiveEnd2: FootballPlayer
    defensiveTackle1: FootballPlayer
    defensiveTackle2: FootballPlayer
}
type FootballDefensiveLineBackerDepthChart = {
    outsideLinebacker1: FootballPlayer
    outsideLinebacker2: FootballPlayer
    middleLinebacker1: FootballPlayer
    middleLinebacker2: FootballPlayer
}
type FootballDefensiveBackDepthChart = {
    cornerback1: FootballPlayer
    cornerback2: FootballPlayer
    cornerback3: FootballPlayer
    cornerback4: FootballPlayer
    safety1: FootballPlayer
    safety2: FootballPlayer
    safety3: FootballPlayer
    safety4: FootballPlayer
}
type FootballSpecialTeamsDepthChart = {
    kicker1: FootballPlayer
    kicker2: FootballPlayer
    punter1: FootballPlayer
    punter2: FootballPlayer
    kickReturner1: FootballPlayer
    kickReturner2: FootballPlayer
    puntReturner1: FootballPlayer
    puntReturner2: FootballPlayer
    longSnapper1: FootballPlayer
    longSnapper2: FootballPlayer
}
interface IBasketballTeam {
    depthChart: BasketballDepthChart
    startingLineup: Array<BasketballPlayer> 
    readonly teamId: number
}
interface IFootballTeam {
   depthChart: DepthChart
   offensiveStarters: Array<FootballPlayer>
   defensiveStarters: Array<FootballPlayer>
   specialTeamsStarters: Array<FootballPlayer>
}
// <<< Types and Interfaces


class DraftMachine {
   team: object
   prospect: DraftProspect

   constructor(team: object, prospect: DraftProspect) {
      this.team = team
      this.prospect = prospect
   }
}

// Models >>>
class Team {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

class Player {
}
class User {}
class Prospect {}
// <<< Models

// Basketball >>>
// Users will have the ability to create a basketball team and add players to
// an already existing team. They will also be able to create a depth chart for
// this team and set a starting lineup. Users can also remove players from the
// team and depth chart.
export class BasketballTeam extends Team implements IBasketballTeam {
   depthChart: BasketballDepthChart
   _startingLineup: Array<BasketballPlayer>
   readonly _teamId: string

   constructor(name: string, depthChart: BasketballDepthChart = {
            pg1: null, pg2: null, sg1: null, sg2: null,
            sf1: null, sf2: null, pf1: null, pf2: null,
            c1: null, c2: null, reserve1: null, reserve2: null
    }) {
        super(name)
        this.depthChart = depthChart
        // Generate a unique id for the team prepended with the team name anb
        // bball
        this._teamId = `bball-${name}--${crypto.randomUUID()}`
   }

   get
   teamId() {
       ths._teamId
   }

    set
    startingLineup(val: Array<BasketballPlayer>) {
        // Check if all players in the starting lineup are in the depth chart
        const areAllPlayersInDepthChart = val.every(player =>
            Object.values(this.depthChart).includes(player)
        );

        // If all players in the starting lineup are in the depth chart, set
        // theo starting lineup. Otherwise, throw an error.
        if (areAllPlayersInDepthChart) {
            this._startingLineup = val;
        } else {
            throw new Error("All players in the starting lineup must be from the depth chart.");
        }
   }
    get
    startingLineup() {
        return this._startingLineup
    }
}

export class BasketballPlayer extends Player implements IBasketballPlayer {
    private _athlete: Athlete
    position: BasketballPositions
    currentTeamId: number
    currentSeasonStats: BasketballStats

    constructor(athlete: Athlete, position: BasketballPositions, currentTeamId: number, currentSeasonStats: BasketballStats) {
        super()
        this._athlete = athlete
        this.position = position
        this.currentTeamId = currentTeamId
        this.currentSeasonStats = currentSeasonStats
    }

    set
    athlete(val: Athlete) {
        throw new Error("Cannot modify athlete");
    }

    get
    athlete() {
        return this._athlete
    }
}
// <<< Basketball
// Generic Athlete >>>
export class Athlete implements Athlete {
    firstName: string
    lastName: string
    dateOfBirth: Date
    college: College
    highSchool: string
    height: number
    weight: number
    positionFootball: string
    positionBasketball: string

    constructor(firstName: string, lastName: string, dateOfBirth: Date, college: College, highSchool: string, height: number, weight: number, positionFootball: string, positionBasketball: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
        this.college = college
        this.highSchool = highSchool
        this.height = height
        this.weight = weight
        this.positionFootball = positionFootball
        this.positionBasketball = positionBasketball
    }
}
// Generic Athlete >>>

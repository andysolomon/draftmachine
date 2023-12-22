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
    athlete: Athelete
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
type Athelete = {
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

enum BasketballPositions {
    pointGuard,
    shootingGuard,
    smallForward,
    powerForward,
    center: string
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
    athlete: Athelete
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
    athlete: Athelete
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



type BasketballPlayer = {
    athlete: Athelete
    position: BasketballPositions
    currentTeamId: number
    currentSeasonStats: BasketballStats
}
type FootballPlayer = {
    athlete: Athelete
    position: FootballOffensiveLinePositions | FootballOffensiveSkillPositions | FootballDefensiveLinePositions | FootballDefensiveLineBackerPositions | FootballDefensiveBackPositions | FootballSpecialTeamsPositions
    currentTeamId: number
    currentSeasonStats: FootballStats
}
type DepthChart = {
   name: Array<Athelete>
}
interface IBasketballTeam {
   depthChart: Array<BasketballPlayer>
   startingLineup: Array<BasketballPlayer> 
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
class Team {}
class User {}
// class Player {}
class Prospect {}
// <<< Models

// Basketball >>>
class BasketballTeam extends Team implements IBasketballTeam {
   depthChart: Array<BasketballPlayer>
   _startingLineup: Array<BasketballPlayer>

   constructor(depthChart: Array<BasketballPlayer>) {
      super()
      this.depthChart = depthChart
   }

   set
   startingLineup(val: Array<BasketballPlayer>) {
      // Create Implementation Details
     this._startingLineup = val
   }
   get
   startingLineup() {
     return this._startingLineup
   }

}
// <<< Basketball

// Mixins >>>
const TeamMixin = (Team: any) => class extends Team { }
// <<< Mixins

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
   name: string
   age: number
}
type Athelete = {
   name: string
}
type BasketballPlayer = {
   name: string
}
type FootballPlayer = {
   name: string
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

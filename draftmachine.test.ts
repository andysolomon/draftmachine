import { BasketballTeam, BasketballPositions, BasketballPlayer, IBasketballPlayer, Athlete } from './draftmachine'

const mockAthlete = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: new Date(1990, 1, 1),
    college: {
        name: 'Sample College',
        state: 'Sample State',
        dateStarted: new Date(2008, 8, 1),
        dateEnded: new Date(2012, 5, 1),
        graduationDate: new Date(2012, 5, 1),
        major: 'Sports Science',
        url: 'http://samplecollege.edu'
    },
    highSchool: 'Sample High School',
    height: 190,
    weight: 80,
    positionFootball: 'Quarterback',
    positionBasketball: 'Shooting Guard'
};

const mockPosition = BasketballPositions.shootingGuard;
const mockTeamId = 1;
const mockStats = {
    points: 50,
    rebounds: 20,
    assists: 10,
}

const mockAthlete2 = {
    firstName: 'Emily',
    lastName: 'Smith',
    dateOfBirth: new Date(1992, 3, 15),
    college: {
        name: 'University of Excellence',
        state: 'New State',
        dateStarted: new Date(2010, 9, 1),
        dateEnded: new Date(2014, 6, 1),
        graduationDate: new Date(2014, 6, 1),
        major: 'Health Sciences',
        url: 'http://universityofexcellence.edu'
    },
    highSchool: 'Prestige High School',
    height: 178,
    weight: 70,
    positionFootball: 'Running Back',
    positionBasketball: 'Point Guard'
};

const mockPosition2 = BasketballPositions.pointGuard;
const mockTeamId2 = 2;
const mockStats2 = {
    points: 30,
    rebounds: 5,
    assists: 15,
};

const mockAthlete3 = {
    firstName: 'Alex',
    lastName: 'Johnson',
    dateOfBirth: new Date(1991, 10, 20),
    college: {
        name: 'Global Sports Academy',
        state: 'Liberty State',
        dateStarted: new Date(2009, 8, 1),
        dateEnded: new Date(2013, 5, 1),
        graduationDate: new Date(2013, 5, 1),
        major: 'Kinesiology',
        url: 'http://globalsportsacademy.edu'
    },
    highSchool: 'Elite Athletes School',
    height: 185,
    weight: 85,
    positionFootball: 'Wide Receiver',
    positionBasketball: 'Small Forward'
};

const mockPosition3 = BasketballPositions.smallForward;
const mockTeamId3 = 3;
const mockStats3 = {
    points: 40,
    rebounds: 10,
    assists: 7,
};

// Test suite for BasketballPlayer
describe('BasketballPlayer ⛹️', () => {
    // Test for createPlayer method
    it('should create a new BasketballPlayer with the specified name and position', () => {


        const player = new BasketballPlayer(mockAthlete, mockPosition, mockTeamId, mockStats);

        expect(player).toBeInstanceOf(BasketballPlayer);
        expect(player.athlete).toEqual(mockAthlete);
        expect(player.athlete.firstName).toBe(mockAthlete.firstName);
    });
})

// Test suite for BasketballTeam
describe('BasketballTeam 🏀', () => {
    // Test for createTeam method
    it('should create a new BasketballTeam with the specified name and an empty depth chart', () => {
        const teamName = 'Shooting Stars';
        const team = new BasketballTeam(teamName);

        expect(team).toBeInstanceOf(BasketballTeam);
        expect(team.name).toBe(teamName);

        // Check if the depth chart is initialized correctly (all positions should be null)
        Object.values(team.depthChart).forEach(position => {
            expect(position).toBeNull();
        });
    });

    // Test for addPlayer method
    it('should add a player to the depth chart', () => {
        const team = new BasketballTeam('Shooting Stars');

        const player = new BasketballPlayer(mockAthlete, mockPosition, mockTeamId, mockStats);

        team.updateDepthChart('sg2', player);

        expect(team.depthChart.sg2.athlete.firstName).toBe(player.athlete.firstName);
    })

    // Cant add same player to multiple positions
    it('should not add the same player to multiple positions', () => {
        const team = new BasketballTeam('Shooting Stars');

        const player = new BasketballPlayer(mockAthlete, mockPosition, mockTeamId, mockStats);

        team.updateDepthChart('sg2', player);

        expect(() => {
            team.updateDepthChart('sg1', player);
        }).toThrow();
    })

    it('should set a starting lineup', () => {
        const player1 = new BasketballPlayer(mockAthlete, mockPosition, mockTeamId, mockStats);
        const player2 = new BasketballPlayer(mockAthlete2, mockPosition2, mockTeamId2, mockStats2);
        const player3 = new BasketballPlayer(mockAthlete3, mockPosition3, mockTeamId3, mockStats3);

        // Creating a new team
        const team = new BasketballTeam("Test Team");

        // Adding players to the team's depth chart
        team.updateDepthChart('pg1', player1);
        team.updateDepthChart('sg1', player2);
        team.updateDepthChart('sf1', player3);

        // Setting the starting lineup
        team.startingLineup = [player1, player2, player3];

        // Assertions
        expect(team.startingLineup).toEqual([player1, player2, player3]);
    })

    it('should remove a player from the depth chart', () => {
        // Creating a new team
        const team = new BasketballTeam('Shooting Stars');

        // Adding a player to the team's depth chart
        const player = new BasketballPlayer(mockAthlete, mockPosition, mockTeamId, mockStats);

        // Adding a player to the team's depth chart
        team.updateDepthChart('pg1', player);
        expect(team.depthChart.pg1).toBe(player)

        // Removing the player from the team's depth chart
        team.removePlayerFromDepthChart('pg1');
        expect(team.depthChart.pg1).toBeNull();
    })

    // test for readonly athlete property
    it('should not be able to update an athlete from Basketball Team instance', () => {
        const team = new BasketballTeam('Shooting Stars');

        const player = new BasketballPlayer(mockAthlete, mockPosition, mockTeamId, mockStats);

        team.updateDepthChart('pg1', player);
        expect(team.depthChart.pg1).toBe(player)

        // try to change the athlete
        expect(() => {
            team.depthChart.pg1.athlete = mockAthlete2;
        }).toThrow();
    })

    // test changing team name and location
    it('should change team name and location', () => {
        const team = new BasketballTeam('Shooting Stars', 'New York');

        team.name = 'New Name';
        team.location = 'New Location';

        expect(team.name).toBe('New Name');
        expect(team.location).toBe('New Location');
    })

    // shouldnt be able to change teamId and should contain team name and bball
    it('should not be able to change teamId', () => {
        const team = new BasketballTeam('Shooting Stars', 'New York');

        expect(() => {
            team.teamId = 2;
        }).toThrow();
        // expect the teadId to contain the word bball
        expect(team.teamId).toContain('bball');
        expect(team.teamId).toContain(team.name);
    })

    // should not be able to exceed the amount of players on the depth chart
    it('should not be able to exceed the amount of players on the depth chart', () => {
        const team = new BasketballTeam('Shooting Stars', 'New York');

        const player = new BasketballPlayer(mockAthlete, mockPosition, mockTeamId, mockStats);
        const player2 = new BasketballPlayer(mockAthlete2, mockPosition2, mockTeamId2, mockStats2);
        const player3 = new BasketballPlayer(mockAthlete3, mockPosition3, mockTeamId3, mockStats3);

        team.depthChart.pg1 = player;
        team.depthChart.pg2 = player2;
        team.depthChart.pg3 = player3;

        expect(() => {
            team.depthChart.pg3.athlete = mockAthlete3;
        }).toThrow();
    })
});

describe('Generic Athlete 😐', () => {
    // test to update athlete attributes
    it('should update athlete attributes', () => {
        const athlete = new Athlete(mockAthlete);

        athlete.firstName = 'Jessica';
        athlete.weight = 200;

        expect(athlete.firstName).toBe('Jessica');
    })
})


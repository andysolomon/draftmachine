import { Router } from "express";
import { db } from '~/server/db'
import { Athlete, BasketballTeam, BasketballTeamDepthChart } from "~/server/db/schema";
import crypto from 'crypto';

const router = Router();

// Get all basketball teams
router.get("/get-basketball-teams", async (req, res) => {
  const basketballTeams = await db.select().from(BasketballTeam);
  res.status(200).json({ basketballTeams });
});

// Add a basketball team to the database
router.post("/add-basketball-team", async (req, res) => {
  // Check if request body is an object and not empty
  if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
    return res.status(400).json({ message: "Request body is not an object" });
  }

  console.log("Request Body :: ", req.body)

  try {
    const {
      id,
      name,
      location,
      depthChart,
      startingLineup,
    } = req.body;

    console.log("Request Body id :: ", id)
    console.log("Request Body name :: ", name)
    console.log("Request Body location :: ", location)

    // Check for missing required fields
    const fields = ["name", "location"];
    const missingFields = fields.filter(
      (field) => !req.body.hasOwnProperty(field),
    );

    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }

    // Create a new basketball team and then create a depth chart and starting lineup
    const newBasketballTeam = await db.insert(BasketballTeam).values({
      name,
      location,
    }).returning();

    // Create a depth chart and starting lineup for the new basketball team
    // const newDepthChart = await db.insert(BasketballTeamDepthChart).values({
    //   teamId: newBasketballTeam[0]?.id,
    //   pg1: depthChart.pg1,
    //   pg2: depthChart.pg2, 
    //   sg1: depthChart.sg1,
    //   sg2: depthChart.sg2,
    //   sf1: depthChart.sf1,
    //   sf2: depthChart.sf2,
    //   pf1: depthChart.pf1,
    //   pf2: depthChart.pf2,
    //   c1: depthChart.c1,
    //   c2: depthChart.c2,
    //   reserve1: depthChart.reserve1,
    //   reserve2: depthChart.reserve2
    // }).returning();

    res.status(201).json({ message: "Basketball team created successfully", basketballTeam: newBasketballTeam});

  } catch (error: unknown) {

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    console.error("Error creating basketball team", errorMessage);
    res.status(500).json({ message: "Internal Server Error", error: errorMessage });
  }
})

// Add an athlete to the database
router.post("/add-athlete", async (req, res) => {
  // Check if request body is an object and not empty
  if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
    return res.status(400).json({ message: "Request body is not an object" });
  }

  console.log("Request Body :: ", req.body)

  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      college,
      highSchool,      height,
      weight,
      positionFootball,
      positionBasketball,
    } = req.body;

    // Check for missing required fields
    const fields = ["firstName", "lastName", "dateOfBirth", "height", "weight"];
    const missingFields = fields.filter(
      (field) => !req.body.hasOwnProperty(field),
    );

    if (missingFields.length > 0) {
      // return res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
      // Throw an error with a list of missing fields
      throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }

    console.log('Request Body firstName :: ', firstName)
    console.log('Request Body positionBasketball :: ', positionBasketball)

    // Create a new athelete if we have all the required fields
    const newAthlete = await db.insert(Athlete).values({
      firstName,
      lastName,
      dateOfBirth: dateOfBirth, // Ensure date is in the correct format
      college: college || null,
      highSchool: highSchool || null,
      height: parseInt(height, 10),
      weight: parseInt(weight, 10),
      positionFootball: positionFootball || null,
      positionBasketball: positionBasketball || null,
    }).returning();

    res.status(201).json({ message: "Athlete created successfully", athlete: newAthlete });
  } catch (error: unknown) {
    
    console.log("Request Body on Failure :: ", req.body)

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    console.error("Error creating athlete", errorMessage);
    res.status(500).json({ message: "Internal Server Error", error: errorMessage });
  }
});

export default router;

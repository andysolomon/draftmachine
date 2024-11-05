import { Router } from "express";
import { db } from '~/server/db'
import { Athlete } from "~/server/db/schema";

const router = Router();

router.post("/add-athlete", async (req, res) => {
  // Check if request body is an object and not empty
  if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
    return res.status(400).json({ message: "Request body is not an object" });
  }

  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      collegeId,
      highSchool,
      height,
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

    // Create a new athelete if we have all the required fields
    const newAthlete = await db.insert(Athlete).values({
      firstName,
      lastName,
      dateOfBirth: dateOfBirth, // Ensure date is in the correct format
      collegeId: collegeId || null,
      highSchool: highSchool || null,
      height: parseInt(height, 10),
      weight: parseInt(weight, 10),
      positionFootball: positionFootball || null,
      positionBasketball: positionBasketball || null,
    }).returning();

    res.status(201).json({ message: "Athlete created successfully", athlete: newAthlete });
  } catch (error) {
    console.error("Error creating athlete", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

export default router;

import { Router } from 'express';

const router = Router();

router.post('/add-athlete', (req, res) => {

    // Check if request body is an object and not empty
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object){
        return res.status(400).json({ message: 'Request body is not an object' });
    }

    try {
        const { firstName, lastName, dateOfBirth, collegeId, highSchool, height, weight, positionFootball, positionBasketball } = req.body;

        // Check for missing required fields
        const fields = ['firstName', 'lastName', 'dateOfBirth','height', 'weight'];
        const missingFields = fields.filter(field => !req.body.hasOwnProperty(field));

        if (missingFields.length > 0) {
            // Throw an error with a list of missing fields
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
        }

        // Create a new athelete if we have all the required fields
        const newAthlete = createAthlete({ firstName, lastName, dateOfBirth, collegeId, highSchool, height, weight, positionFootball, positionBasketball });
        res.status(201).json(newAthlete);

    } catch (error) {
        console.error('Error creating athlete', error);
        res.status(500);
        res.json({ message: 'Internal Server Error', error: error.message });
    }
});

const createAthlete = ( (athleteData) => {
    return {
        ...athleteData,
    }
})


export default router

import { Router } from 'express';

const router = Router();

router.post('/add-athlete', (req, res) => {

    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: 'Request body is not an object' });
    }

    try {
        const { firstName, lastName, dateOfBirth, collegeId, highSchool, height, weight, positionFootball, positionBasketball } = req.body;
        const newAthlete = createAthlete({ firstName, lastName, dateOfBirth, collegeId, highSchool, height, weight, positionFootball, positionBasketball });
        res.status(201).json(newAthlete);

    } catch (error) {
        console.error(error);
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

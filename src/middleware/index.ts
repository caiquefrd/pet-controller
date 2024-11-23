import { Request, Response, NextFunction } from 'express';
import express from 'express';


const validatePetData = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { name, age, specie } = req.body;

    if (!name || typeof name !== 'string') {
        res.status(400).json({ error: 'Invalid or missing pet name' });
        return
    }

    if (!age || typeof age !== 'number') {
        res.status(400).json({ error: 'Invalid or missing pet age' });
        return
    }

    if (!specie || typeof specie !== 'string') {
        res.status(400).json({ error: 'Invalid or missing pet specie' });
        return
    }
    next();
};

export default validatePetData;
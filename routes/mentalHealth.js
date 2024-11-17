import express from "express";
import mentalHealthResources from '../data/mentalHealthResources.js';

const router = express.Router();

router.get('/', (req, res) => {

    // Log healthResources to verify the data
    console.log("Mental Health Resource:", mentalHealthResources);

    // Pass the data to res.locals
    res.locals.mentalHealthResources = mentalHealthResources;

    res.render('mental-health');
});

export default router;

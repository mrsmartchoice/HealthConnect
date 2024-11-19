import express from "express";
import diseasePreventionTips from '../data/diseasePreventionData.js'

const router = express.Router();

router.get('/', (req, res) => {
    // Log healthResources to verify the data
    console.log("Disease Prevention Tips:", diseasePreventionTips);

    // Pass the data to res.locals
    res.locals.diseasePreventionTips = diseasePreventionTips;

    res.render('disease-prevent',);
});

export default router;

import express from "express";
import peerEducators from '../data/peerEducatorsData.js';

const router = express.Router();

router.get('/', (req, res) => {

    // Log healthResources to verify the data
    console.log("Mental Health Resource:", peerEducators);

    // Pass the data to res.locals
    res.locals.peerEducators = peerEducators;

    res.render('peer-education');
});

export default router;

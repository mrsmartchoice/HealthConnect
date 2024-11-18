import express from 'express';
import healthAlerts from '../data/healthAlertsData.js'; // Ensure this path is correct

const router = express.Router();

router.get('/', (req, res) => {
    // Log healthResources to verify the data
    console.log("Health alert Data:", healthAlerts);

    // Pass the data to res.locals
    res.locals.healthAlerts = healthAlerts;

    // Render the template
    res.render('health-alert');
});

export default router;

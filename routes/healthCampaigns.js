import express from 'express';
import healthCampaigns from '../data/healthCampaignsData'; // Ensure this path is correct

const router = express.Router();

router.get('/', (req, res) => {
    // Log healthResources to verify the data
    console.log("Health Campaigns Data:", healthCampaigns);

    // Pass the data to res.locals
    res.locals.healthCampaigns = healthCampaigns;

    // Render the template
    res.render('health-campaigns');
});

export default router;

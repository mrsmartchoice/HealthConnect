import express from 'express';
import healthResources from '../data/healthResourcesData.js'; // Ensure this path is correct

const router = express.Router();

router.get('/', (req, res) => {
   // Log healthResources to verify the data
   console.log("Health Resources Data:", healthResources);

   // Pass the data to res.locals
   res.locals.healthResources = healthResources;

   // Render the template
   res.render('health-resources');
});

export default router;

import express from 'express';
import symptomsData from '../data/symptomCheckerData.js'; // Ensure this path is correct

const router = express.Router();

router.get('/', (req, res) => {
   // Log symptomsData to verify the data
   console.log("Check symptoms Data:", symptomsData);

   // Pass the data to res.locals
   res.locals.symptomsData = symptomsData;

   // Render the template
   res.render('symptom-checker');
});

export default router;

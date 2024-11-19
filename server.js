import express from "express";
import bodyParser from "body-parser";

import healthResourcesRoutes from './routes/healthResources.js';
import mentalHealthRoutes from './routes/mentalHealth.js';
import diseasePrevention from './routes/diseasePrevent.js';
import peerEducationRoutes from './routes/peerEducation.js';
import symptomheckerRoutes from './routes/symptomChecker.js';
import userAccountRoutes from './routes/userAccount.js';
import appointmentRoutes from './routes/appointments.js';
import healthAlertRoutes from './routes/healthAlert.js';
import healthCampaignsRoutes from './routes/healthCampaigns.js';

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/health-resources', healthResourcesRoutes);
app.use('/mental-health', mentalHealthRoutes);
app.use('/peer-education', peerEducationRoutes);
app.use('/disease-prevention', diseasePrevention);
app.use('/symptom-checker', symptomheckerRoutes);
app.use('/user-account', userAccountRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/health-alert', healthAlertRoutes);
app.use('/health-campaigns', healthCampaignsRoutes);


// Home route
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
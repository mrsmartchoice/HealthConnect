import express from "express";
import bodyParser from "body-parser";

import healthResourcesRoutes from './routes/healthResources.js';
import mentalHealthRoutes from './routes/mentalHealth.js';
import diseasePrevention from './routes/diseasePrevent.js';
import peerEducationRoutes from './routes/peerEducation.js';
import symptonCheckerRoutes from './routes/symptonChecker.js';
import userAccountRoutes from './routes/userAccount.js';
import onlineBookingRoutes from './routes/onlineBooking.js';

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/health-resources', healthResourcesRoutes);
app.use('/mental-health', mentalHealthRoutes);
app.use('/peer-education', peerEducationRoutes);
app.use('/disease-prevention', diseasePrevention);
app.use('/sympton-checker', symptonCheckerRoutes);
app.use('/user-account', userAccountRoutes);
app.use('/online-booking', onlineBookingRoutes);
gi
// Home route
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
import express from 'express';
import appointments from '../data/appointmentData.js'; // Ensure this path is correct

const router = express.Router();

// Render booking form
router.get('/book', (req, res) => {

    console.log('Route accessed');
    
    res.render('book-appointment');
});


// Handle appointment booking
router.post('/book', (req, res) => {
    const { name, date, time, doctor } = req.body;
    const newAppointment = { id: appointments.length + 1, name, date, time, doctor };
    appointments.push(newAppointment);
    res.redirect('/appointments');
});

// Display all appointments
router.get('/', (req, res) => {
    res.render('appointments', { appointments });
});

export default router;

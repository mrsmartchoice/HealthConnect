import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('sympton-checker');
});

export default router;

import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('user-account');
});

export default router;

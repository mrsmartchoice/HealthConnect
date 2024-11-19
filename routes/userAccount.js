import express from "express";
const router = express.Router();

// Temporary in-memory "database"
const users = [];

// Render Login/Registration Page
router.get("/", (req, res) => {
    res.render("user-account", { message: null, isLogin: true });
});

// Handle Registration
router.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    // Check if email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.render("user-account", { 
            message: "Email already registered. Please login.", 
            isLogin: false 
        });
    }

    // Save user data
    users.push({ username, email, password });

    // Render success message on the same page
    res.render("user-account", { 
        message: "Registration successful! You can now log in.", 
        isLogin: true 
    });
});

// Handle Login
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check user credentials
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.redirect("/");
    } else {
        res.render("user-account", { 
            message: "Invalid credentials. Please register.", 
            isLogin: true 
        });
    }
});


export default router;

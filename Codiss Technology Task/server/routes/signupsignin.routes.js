import express from "express";

import user from "../controllers/signupsignin.controller.js";

const router=express.Router();

//User Register Route
router.post("/register",user.register);
//User Login Route
router.post('/login',user.login);

export default router;
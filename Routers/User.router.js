import express from "express";
import UserController from "f:/Node.js Task 5/Router/User.router.js";
import validators from 'f:/Node.js Task 5/Router/User.router.js';

const router = express.Router();

router.post("/signup", validators.validate("signup"), validators.validationMiddleware, UserController.signupController);
router.post("/signin", validators.validate("signin"), validators.validationMiddleware, UserController.signinController);
router.post("/forgot-password", validators.validate("forgotPassWord"), validators.validationMiddleware, UserController.forgotPassword);
router.post("/reset-password", validators.validate("resetPassWord"), validators.validationMiddleware, UserController.resetPassword);

export default router
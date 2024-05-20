import { Router } from "express";
import authController from '../controllers/authController';

const router = Router();

router.get('/login', authController.showLoginPage);
router.post('/login', authController.handleLogin);

export default router;
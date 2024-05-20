import { Request, Response } from 'express';
import AuthService from '../services/auth';

class AuthController {
    showLoginPage(req: Request, res: Response) {
        res.render('login');
    }

    async handleLogin(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const user = await AuthService.login(username, password);
            if (user) {
                res.render('dashboard', { username: user.username });
            } else {
                res.render('login', { error: 'Invalid username or password' });
            }
        } catch (err) {
            res.render('login', { error: 'An error occurred, please try again' });
        }
    }
}

export default new AuthController();

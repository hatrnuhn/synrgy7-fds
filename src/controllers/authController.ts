import { RequestHandler } from 'express';
import userModel from '../models/userModel';

const showLoginPage: RequestHandler = (req, res) => {
    res.render('login');
};

const handleLogin: RequestHandler = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.findUser(username);
    
        if (user && user.password === password) res.render('dashboard', { username });
    } catch (err: any) {
        res.render('login', err);
    }
};

export default {
    showLoginPage,
    handleLogin
};
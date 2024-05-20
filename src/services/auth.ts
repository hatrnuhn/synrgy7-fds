import bcrypt from 'bcrypt';
import UserRepository from '../repositories/user';
import { User } from '@prisma/client';

class AuthService {
    async login(username: string, password: string): Promise<User | null> {
        const user = await UserRepository.findByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        return null;
    }

    async register(username: string, password: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: User = {
            id: 0, // Prisma will auto-generate the ID
            username,
            password: hashedPassword
        };
        return UserRepository.create(newUser);
    }
}

export default new AuthService();

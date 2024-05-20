import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

class UserRepository {
    async findByUsername(username: string): Promise<User | null> {
        return await prisma.user.findFirst({
            where: { username }
        });
    }

    async create(user: User): Promise<User> {
        return await prisma.user.create({
            data: user
        });
    }
}

export default new UserRepository();
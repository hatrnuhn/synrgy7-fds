import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
 const alice = await prisma.user.upsert(
    {
        where: { id: 2 },
        update: {},
        create: {
          username: 'alice',
          password: await bcrypt.hash('alice', 10)
        },        
    }
 )
};

main()
    .finally(async () => {
        await prisma.$disconnect();
    });
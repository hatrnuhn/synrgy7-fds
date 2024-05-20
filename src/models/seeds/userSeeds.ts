import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const main = async () => {
 const bob = await prisma.user.upsert(
    {
        where: { id: 1 },
        update: {},
        create: {
          username: 'bobby',
          password: 'bobby123'
        },        
    }
 )
};

main()
    .finally(async () => {
        await prisma.$disconnect();
    });
import { PrismaClient } from "@prisma/client"

const findUser = async (username: string) => {
    const prisma = new PrismaClient();

    try {
        const user = await prisma.user.findFirstOrThrow({
            where: {
                username
            }
        })

        return user;
    } catch (err: any) {
        throw err;
    } finally {
        await prisma.$disconnect();
    }
}

export default {
    findUser
}
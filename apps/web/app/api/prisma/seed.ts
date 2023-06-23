import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const getSubscribers = (): Prisma.InscritosCreateInput[] => {

    return [
        {
           email: 'mateus.vnlima@gmail.com' 
        },
        {
            email: 'caiohoborghi@gmail.com'
        }
    ]
}

void async function(){
    const subscribers = await Promise.all(
        getSubscribers().map(async (subscriber) => client.inscritos.create({ data: subscriber }))
    )
}()
import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name: string;
}

class CreateOrderService{

    async execute({table, name}: OrderRequest){
        const tableExists = await prismaClient.order.findFirst({
            where: {
                table: table,
                status: false
            }
        })

        console.log(tableExists)

        if(tableExists){
            throw new Error('Table already is open.');
        }

        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name,
            },
            select:{
                id: true,
                name: true,
                table: true,
                status: true,
                draft: true
            }
        })

        return order;

    }

}

export {CreateOrderService}
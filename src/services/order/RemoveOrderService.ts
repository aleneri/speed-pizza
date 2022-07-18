import prismaClient from "../../prisma";

interface OrderRequest {
    orderId: string
}

class RemoveOrderService{
    async execute({orderId}: OrderRequest){
        const isOrderExists = await prismaClient.order.findFirst({
            where: {
                id: orderId,
                status: false
            }
        })

        if(!isOrderExists){
            throw new Error("Order not found");
        }
        
        const order = await prismaClient.order.delete({
            where: {
                id: orderId
            }
        });

        return order
    }

}

export { RemoveOrderService }
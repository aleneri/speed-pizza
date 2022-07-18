import prismaClient from "../../prisma";

interface OrderRequest {
    orderId: string
}

class CloseOrderService{
    async execute({orderId}: OrderRequest){
        const isOrderExists = await prismaClient.order.findFirst({
            where: {
                id: orderId,
                status: false
            }
        })

        if(!isOrderExists){
            throw new Error("Order not found or is already closed");
        }
        
        const order = await prismaClient.order.update({

            where: {
                id: isOrderExists.id
            },
            data: {
                status: true
            }
        })

        return order
    }

}

export { CloseOrderService }
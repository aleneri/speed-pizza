import prismaClient from "../../prisma";

interface SendOrderRequest {
    orderId: string
}

class SendOrderService{
    async execute({orderId}: SendOrderRequest){
        const isOrderExists = await prismaClient.order.findFirst({
            where: {
                id: orderId,
                draft: true
            }
        })

        if(!isOrderExists){
            throw new Error("Order not found or is already sent");
        }
        
        const order = await prismaClient.order.update({

            where: {
                id: isOrderExists.id
            },
            data: {
                draft: false
            }
        })

        return order
    }

}

export { SendOrderService }
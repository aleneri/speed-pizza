import prismaClient from "../../prisma";

interface ItemRequest {
    orderId: string;
    productId: string;
    amount: number;
}

class AddItemService{

    async execute({orderId, productId, amount}: ItemRequest){

        const order = await prismaClient.item.create({
            data: {
                order_id: orderId,
                product_id: productId,
                amount: amount
            },
            select: {
                id: true,
                amount: true,
                product_id: true,
                order_id: true
            }
        })

        return order;
    }   

}

export {AddItemService}
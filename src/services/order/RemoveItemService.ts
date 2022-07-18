import prismaClient from "../../prisma";

interface ItemRequest {
    itemId: string 
}

class RemoveItemService{

    async execute({itemId}: ItemRequest){

        const isOrderExists = await prismaClient.item.findFirst({
            where: {
                id: itemId
            }
        })
    
        if(!isOrderExists){
            throw new Error("Item not found");
        }

        await prismaClient.item.delete({
            where: {
                id: itemId
            }
        })

    }   

}

export {RemoveItemService}
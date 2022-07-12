import prismaClient from "../../prisma";

class ListCategoryService{
    
        async list(){

            const categories = await prismaClient.category.findMany({
                select: {
                    id: true,
                    name: true
                }
            });
    
            return categories;
        }
}

export { ListCategoryService };
import prismaClient from "../../prisma"

interface ProductByCategoryRequest {
    categoryId: string;
}

class ListByCategoryService{
    async execute({categoryId}: ProductByCategoryRequest){
      const products =  prismaClient.product.findMany({
            where: { category_id: categoryId },
            select:{
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true
            }
        })

        return products;
    }
}

export { ListByCategoryService }
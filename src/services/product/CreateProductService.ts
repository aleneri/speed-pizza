import { response } from "express";
import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    price: string;
    banner: string;
    description: string;
    categoryId: string;
}

class CreateProductService{

    async execute({name, price, description, banner, categoryId}: ProductRequest){

        const isProductExist = await prismaClient.product.findFirst({
            where: {
                name: name,
                category_id: categoryId
            }
        })

        if(isProductExist){
            throw new Error('Product already exist');
        }

        const product = prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: categoryId
            },
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                category_id: true
            }
        });

        return product;
    }

}

export { CreateProductService };
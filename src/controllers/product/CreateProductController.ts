import { Request, Response  } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{

    async handle(req: Request, res: Response){
        if(!req.file){
            throw new Error('File is required');
        }

        const {filename:banner} = req.file;
        const {name, price, description, categoryId} = req.body;
        const service = new CreateProductService();
        const product = await service.execute({name, price, description, banner, categoryId});
        return res.json(product);
    }

}

export {CreateProductController}
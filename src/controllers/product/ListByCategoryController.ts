import { Request, Response  } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController{

    async handle(req: Request, res: Response){

        const {categoryId} = req.body;
        const service = new ListByCategoryService();
        const products = await service.execute({categoryId});
        return res.json(products);
    }

}

export { ListByCategoryController }
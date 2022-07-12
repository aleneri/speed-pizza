import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){
        const {name} = req.body;
        const service = new ListCategoryService();
        const categories = await service.list();
        return res.json(categories);
    }
}

export { ListCategoryController }
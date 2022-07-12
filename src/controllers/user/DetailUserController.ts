import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{

    async handle(req: Request, res: Response){
        const {name, email, password} = req.body;
        const service = new DetailUserService();
        const result = await service.execute();
        return res.json(result);
    }

}

export { DetailUserController }
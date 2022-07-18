import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{

    async handle(req: Request, res: Response){
        const userId = req.userId;
        const {name, email, password} = req.body;
        const service = new DetailUserService();
        const result = await service.execute(userId);
        return res.json(result);
    }

}

export { DetailUserController }
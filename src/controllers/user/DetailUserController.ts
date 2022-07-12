import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{

    async handle(req: Request, res: Response){
        const user_id = req.user_id;
        console.log("ID DO USER: ", user_id);
        const {name, email, password} = req.body;
        const service = new DetailUserService();
        const result = await service.execute(user_id);
        return res.json(result);
    }

}

export { DetailUserController }
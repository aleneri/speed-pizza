import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";
class CreateOrderController{

    async handle(req: Request, res: Response){
        const { name, table } = req.body;
        const service = new CreateOrderService();
        const order = await service.execute({name, table});
        return res.json(order);
    }
}

export {CreateOrderController}
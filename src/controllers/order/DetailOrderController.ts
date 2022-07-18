import {Request, Response} from 'express'
import { DetailOrderService } from '../../services/order/DetailOrderService';

class DetailOrderController{

    async handle(req: Request, res: Response){
        const orderId = req.params.orderId;
        const order = await new DetailOrderService().execute({orderId});
        return res.json(order);
    }
}

export {DetailOrderController}
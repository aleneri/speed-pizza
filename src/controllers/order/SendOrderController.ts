import {Request, Response} from 'express'; 
import {SendOrderService} from '../../services/order/SendOrderService';

class SendOrderController{
    async handle(req: Request, res: Response){
        const orderId = req.query.orderId as string;
        const service = new SendOrderService();
        const order = await service.execute({orderId});
        return res.status(200).json(order);
    }
}

export { SendOrderController }
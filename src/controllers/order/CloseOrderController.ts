import {Request, Response} from 'express'; 
import {CloseOrderService} from '../../services/order/CloseOrderService';

class CloseOrderController{
    async handle(req: Request, res: Response){
        const orderId = req.query.orderId as string;
        const service = new CloseOrderService();
        const order = await service.execute({orderId});
        return res.status(200).json(order);
    }
}

export { CloseOrderController }
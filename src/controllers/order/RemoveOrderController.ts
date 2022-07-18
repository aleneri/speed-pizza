import {Request, Response} from 'express'; 
import {RemoveOrderService} from '../../services/order/RemoveOrderService';

class RemoveOrderController{
    async handle(req: Request, res: Response){
        const orderId = req.query.orderId as string;
        const service = new RemoveOrderService();
        const order = await service.execute({orderId});
        return res.status(204).json(order);
    }
}

export { RemoveOrderController }
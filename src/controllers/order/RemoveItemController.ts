import {Request, Response} from 'express';
import { RemoveItemService } from '../../services/order/RemoveItemService';

class RemoveItemController{

    async handle(req: Request, res: Response){
        const itemId = req.params.itemId;
        const addItemService = new RemoveItemService();
        await addItemService.execute({itemId});
        return res.status(204).json();
    }

}

export { RemoveItemController }
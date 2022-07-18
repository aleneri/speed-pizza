import { Router, Request, Response } from "express";
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';
import multer from "multer";

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { CloseOrderController } from "./controllers/order/CloseOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./img"))

router.get('/health', (req: Request, res: Response) => {
    return res.json({ status: 'live' });
})

// User Routes
router.post('/users', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/me', isAuthenticated , new DetailUserController().handle);

// Category Routes
router.post('/categories', isAuthenticated , new CreateCategoryController().handle);
router.get('/categories', isAuthenticated , new ListCategoryController().handle);

// Product Routes
router.post('/products', isAuthenticated, upload.single('file') , new CreateProductController().handle);
router.get('/products', isAuthenticated , new ListByCategoryController().handle);

// Order Routes
router.post('/orders', isAuthenticated, new CreateOrderController().handle);
router.delete('/orders', isAuthenticated , new RemoveOrderController().handle);
router.patch('/orders/finish', isAuthenticated , new CloseOrderController().handle);
router.patch('/orders/send', isAuthenticated , new SendOrderController().handle);
router.post('/orders/items', isAuthenticated , new AddItemController().handle);
router.delete('/orders/items/:itemId', isAuthenticated , new RemoveItemController().handle);
router.get('/orders', isAuthenticated , new ListOrderController().handle);
router.get('/orders/detail/:orderId', isAuthenticated , new DetailOrderController().handle);

export { router };
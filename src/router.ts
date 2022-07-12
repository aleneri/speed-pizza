import { Router, Request, Response } from "express";
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    return res.json({ status: 'live' });
})

// User Routes
router.post('/user', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/me', isAuthenticated , new DetailUserController().handle);

// Category Routes
router.post('/category', isAuthenticated , new CreateCategoryController().handle);
router.get('/category', isAuthenticated , new ListCategoryController().handle);

export { router };
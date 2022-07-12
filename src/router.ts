import { Router, Request, Response } from "express";
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    return res.json({ status: 'live' });
})

router.post('/users', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/me', isAuthenticated , new DetailUserController().handle);

export { router };
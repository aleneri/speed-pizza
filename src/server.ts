import express, {Request, Response, NextFunction} from "express"
import 'express-async-errors'
import {router} from "./router"
import cors from 'cors'

const app = express();
app.use(express.json());
app.use
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        }) 
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal sever error.'
    })

})
app.listen(3333, () => {console.log("Server started on port 3333  🚀")});
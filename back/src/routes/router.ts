import { Router } from "express"; 
import appointRouter from "./appointRouter";
import userRouter from "./userRouter";

const router: Router = Router();

router.use("/users",  userRouter)

router.use("/appointments", appointRouter)


export default router;
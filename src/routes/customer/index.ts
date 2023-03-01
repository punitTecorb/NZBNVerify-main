import { Router } from 'express';
import NZBN from './NZBN'
const baseRouter = Router();
console.log("enter1")

// Setup routers
baseRouter.use('/NZBN', NZBN);


// Export default.
export default baseRouter;
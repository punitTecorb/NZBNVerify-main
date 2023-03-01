import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import NZBNController from '@controllers/customer/NZBN';

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    NZBNVerification: '/NZBNVerification'
} as const;

/////////////////////// Normal Checkout ///////////////////////
router.post(p.NZBNVerification, async (req: any, res: Response) => {
    const data = await NZBNController.NZBNVerification(req.body);
    return res.status(OK).send({ data, code: OK, message:'success',result:data});
});

// Export default
export default router;
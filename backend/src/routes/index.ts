import { Router } from 'express';

import plansRouter from './plans.routes';
import discountRouter from './discount.routes';

const routes = Router();

routes.use('/plans', plansRouter);
routes.use('/discount', discountRouter);

export default routes;

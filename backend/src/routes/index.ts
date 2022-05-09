import { Router } from 'express';

import plansRouter from './plans.routes';

const routes = Router();

routes.use('/plans', plansRouter);

export default routes;

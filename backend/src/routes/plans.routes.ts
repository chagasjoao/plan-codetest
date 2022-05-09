import { Router } from 'express';
import { getRepository } from 'typeorm';

import Plan from '../models/Plan';
import CreatePlanService from '../services/CreatePlanService';
import UpdatePlanService from '../services/UpdatePlanService';
import DeletePlanService from '../services/DeletePlanService';

import validateResourceMiddleware from '../middlewares/validateResource';
import {
  PlanPatchSchema,
  PlanPostSchema,
  PlanDeleteSchema,
} from '../validators/PlanValidator';

const plansRouter = Router();

plansRouter.get('/', async (request, response) => {
  const plansRepositoty = getRepository(Plan);
  const plans = await plansRepositoty.find();

  return response.json(plans);
});

plansRouter.post(
  '/',
  validateResourceMiddleware(PlanPostSchema),
  async (request, response) => {
    try {
      const { name, price, features } = request.body;

      const createPlan = new CreatePlanService();

      const plan: Plan = await createPlan.execute({
        name,
        price,
        features,
      });

      return response.json(plan);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  },
);

plansRouter.patch(
  '/',
  validateResourceMiddleware(PlanPatchSchema),
  async (request, response) => {
    try {
      const { id, name, price, features } = request.body;

      const updatePlan = new UpdatePlanService();

      const plan: Plan = await updatePlan.execute({
        id,
        name,
        price,
        features,
      });

      return response.json(plan);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  },
);

plansRouter.delete(
  '/',
  validateResourceMiddleware(PlanDeleteSchema),
  async (request, response) => {
    try {
      const { id } = request.body;

      const deletePlan = new DeletePlanService();

      await deletePlan.execute({
        id,
      });

      return response.json('Deleted');
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default plansRouter;

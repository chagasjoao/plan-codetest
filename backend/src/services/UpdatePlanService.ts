import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Plan from '../models/Plan';

interface Request {
  id: string;
  name: string;
  price: number;
  features: string;
}

class UpdatePlanService {
  public async execute({ id, name, price, features }: Request): Promise<Plan> {
    const plansRepositoty = getRepository(Plan);

    const plan = await plansRepositoty.findOne(id);

    if (!plan) {
      throw new AppError('Plan not found.', 401);
    }

    plan.name = name;
    plan.price = price;
    plan.features = features;

    await plansRepositoty.save(plan);

    return plan;
  }
}

export default UpdatePlanService;

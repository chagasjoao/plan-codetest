import { getRepository } from 'typeorm';

import Plan from '../models/Plan';

interface Request {
  name: string;
  price: number;
  features: string;
}

class CreatePlanService {
  public async execute({ name, price, features }: Request): Promise<Plan> {
    const plansRepositoty = getRepository(Plan);

    const plan = plansRepositoty.create({
      name,
      price,
      features,
    });

    await plansRepositoty.save(plan);

    return plan;
  }
}

export default CreatePlanService;

import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Plan from '../models/Plan';

interface Request {
  id: string;
}

class CreatePlanService {
  public async execute({ id }: Request): Promise<void> {
    const plansRepositoty = getRepository(Plan);

    const plan = await plansRepositoty.findOne(id);

    if (!plan) {
      throw new AppError('Plan not found.', 401);
    }

    await plansRepositoty.remove(plan);
  }
}

export default CreatePlanService;

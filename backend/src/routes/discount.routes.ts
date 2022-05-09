import { Router } from 'express';
import { getRepository } from 'typeorm';

import AnuallyDiscount from '../models/AnuallyDiscount';

import UpdateDiscountService from '../services/UpdateDiscountService';

import DiscountSchema from '../validators/DiscountValitor';
import validateResourceMiddleware from '../middlewares/validateResource';

const discountRouter = Router();

discountRouter.get('/', async (request, response) => {
  const discountRepository = getRepository(AnuallyDiscount);
  const discount = await discountRepository.find();

  return response.json(discount);
});

discountRouter.patch(
  '/',
  validateResourceMiddleware(DiscountSchema),
  async (request, response) => {
    try {
      const { discount } = request.body;

      const updateDiscount = new UpdateDiscountService();

      const anuallyDiscount: AnuallyDiscount = await updateDiscount.execute({
        discount,
      });

      return response.json(anuallyDiscount);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default discountRouter;

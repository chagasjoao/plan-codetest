import { getRepository } from 'typeorm';

import AnuallyDiscount from '../models/AnuallyDiscount';

interface Request {
  discount: number;
}

class UpdateDiscountService {
  public async execute({ discount }: Request): Promise<AnuallyDiscount> {
    const discountRepository = getRepository(AnuallyDiscount);

    const anuallyDiscount = await discountRepository.findOne();

    if (!anuallyDiscount) {
      const newAnuallyDiscount = discountRepository.create({
        discount,
      });

      await discountRepository.save(newAnuallyDiscount);
      return newAnuallyDiscount;
    }

    anuallyDiscount.discount = discount;

    await discountRepository.save(anuallyDiscount);

    return anuallyDiscount;
  }
}

export default UpdateDiscountService;

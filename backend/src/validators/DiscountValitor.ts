import * as yup from 'yup';

export const DiscountSchema = yup.object({
  discount: yup.number().positive().max(100).min(0).required(),
});

export default DiscountSchema;

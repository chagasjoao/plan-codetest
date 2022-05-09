import * as yup from 'yup';

export const PlanPatchSchema = yup.object({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  price: yup.number().positive().required(),
  features: yup.string(),
});

export const PlanPostSchema = yup.object({
  name: yup.string().required('Name is required'),
  price: yup.number().positive().required('Price is required'),
  features: yup.string(),
});

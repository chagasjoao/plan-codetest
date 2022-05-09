/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'yup'

const validateResourceMiddleware =
  (resourceSchema: AnySchema) =>
    async (request: Request, response: Response, next: NextFunction) => {
      const resource = request.body;
      try {
        await resourceSchema.validate(resource);
        next();
      } catch (err: any) {
        response.status(400).json({ error: err.message });
      }
    };

export default validateResourceMiddleware;

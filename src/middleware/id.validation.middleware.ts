import { ValidationError } from "#utils/app.errors.js";
import type { RequestParamHandler } from "express";
import z from "zod";

const idSchema = z.coerce.number().int().positive();

export const validateIdParam: RequestParamHandler = (req, res, next, value, param) => {
  const result = idSchema.safeParse(value);
  if (!result.success) {
    return next(new ValidationError(`${param} must be a positive integer`));
  }
  next();
};

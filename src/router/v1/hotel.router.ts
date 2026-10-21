import { createHotel } from "#controller/hotel.controller.js";
import { validateSchema } from "#middleware/validation.middleware.js";
import hotelSchema from "#schemas/hotel.schema.js";
import { Router } from "express";

const hotelRouter = Router();

hotelRouter.post("/", validateSchema(hotelSchema), createHotel);

export default hotelRouter;

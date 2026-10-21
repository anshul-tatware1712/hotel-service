import {
  createHotelHandler,
  getAllHotelsHandler,
  getHotelByIdHandler,
  updateHotelHandler,
  deleteHotelHandler,
} from "#controller/hotel.controller.js";
import { validateSchema } from "#middleware/validation.middleware.js";
import { validateIdParam } from "#middleware/id.validation.middleware.js";
import { hotelSchema, hotelUpdateSchema } from "#schemas/hotel.schema.js";
import { Router } from "express";

const hotelRouter = Router();

hotelRouter.param("id", validateIdParam);

hotelRouter.post("/", validateSchema(hotelSchema), createHotelHandler);
hotelRouter.get("/", getAllHotelsHandler);
hotelRouter.get("/:id", getHotelByIdHandler);
hotelRouter.put("/:id", validateSchema(hotelUpdateSchema), updateHotelHandler);
hotelRouter.delete("/:id", deleteHotelHandler);

export default hotelRouter;

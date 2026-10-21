import {
  createRoomCategoryHandler,
  getRoomCategoryByIdHandler,
  getAllRoomCategoriesByHotelIdHandler,
  updateRoomCategoryHandler,
  deleteRoomCategoryHandler,
} from "#controller/room.category.controller.js";
import { validateSchema } from "#middleware/validation.middleware.js";
import { validateIdParam } from "#middleware/id.validation.middleware.js";
import { roomCategorySchema, roomCategoryUpdateSchema } from "#schemas/room.category.schema.js";
import { Router } from "express";

const roomCategoryRouter = Router();

roomCategoryRouter.param("id", validateIdParam);
roomCategoryRouter.param("hotelId", validateIdParam);

roomCategoryRouter.post("/", validateSchema(roomCategorySchema), createRoomCategoryHandler);
roomCategoryRouter.get("/hotel/:hotelId", getAllRoomCategoriesByHotelIdHandler);
roomCategoryRouter.get("/:id", getRoomCategoryByIdHandler);
roomCategoryRouter.put("/:id", validateSchema(roomCategoryUpdateSchema), updateRoomCategoryHandler);
roomCategoryRouter.delete("/:id", deleteRoomCategoryHandler);

export default roomCategoryRouter;

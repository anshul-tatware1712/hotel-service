import { RoomType } from "#database/models/room-category.js";
import z from "zod";

const roomCategorySchema = z.strictObject({
  hotelId: z.number().int().positive(),
  price: z.number().int().nonnegative(),
  roomType: z.enum(RoomType),
  roomCount: z.number().int().nonnegative(),
});

const roomCategoryUpdateSchema = roomCategorySchema
  .partial()
  .refine((data) => Object.values(data).some((value) => value !== undefined), { message: "At least one room category field is required" });

export { roomCategorySchema, roomCategoryUpdateSchema };

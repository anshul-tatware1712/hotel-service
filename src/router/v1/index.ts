import { Router } from "express";
import hotelRouter from "./hotel.router.js";
import roomCategoryRouter from "./room.category.router.js";

const v1Router = Router();

v1Router.use("/hotel", hotelRouter);
v1Router.use("/room-category", roomCategoryRouter);

export default v1Router;

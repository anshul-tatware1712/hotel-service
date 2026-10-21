import {
  createRoomCategoryService,
  getRoomCategoryByIdService,
  getAllRoomCategoriesByHotelIdService,
  updateRoomCategoryService,
  deleteRoomCategoryService,
} from "#service/room.category.service.js";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export async function createRoomCategoryHandler(req: Request, res: Response) {
  const roomCategoryResponse = await createRoomCategoryService(req.body);
  res.status(StatusCodes.CREATED).json({
    message: "Room category created successfully",
    data: roomCategoryResponse,
    success: true,
  });
}

export async function getRoomCategoryByIdHandler(req: Request, res: Response) {
  const roomCategoryResponse = await getRoomCategoryByIdService(Number(req.params.id));
  res.status(StatusCodes.OK).json({
    message: "Room category found successfully",
    data: roomCategoryResponse,
    success: true,
  });
}

export async function getAllRoomCategoriesByHotelIdHandler(req: Request, res: Response) {
  const roomCategoriesResponse = await getAllRoomCategoriesByHotelIdService(Number(req.params.hotelId));
  res.status(StatusCodes.OK).json({
    message: "Room categories found successfully",
    data: roomCategoriesResponse,
    success: true,
  });
}

export async function updateRoomCategoryHandler(req: Request, res: Response) {
  const roomCategoryResponse = await updateRoomCategoryService(Number(req.params.id), req.body);
  res.status(StatusCodes.OK).json({
    message: "Room category updated successfully",
    data: roomCategoryResponse,
    success: true,
  });
}

export async function deleteRoomCategoryHandler(req: Request, res: Response) {
  const roomCategoryResponse = await deleteRoomCategoryService(Number(req.params.id));
  res.status(StatusCodes.OK).json({
    message: "Room category deleted successfully",
    data: roomCategoryResponse,
    success: true,
  });
}

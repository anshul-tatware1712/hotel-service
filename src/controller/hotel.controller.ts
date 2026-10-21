import { createHotelService, deleteHotelService, getAllHotelsService, getHotelByIdService, updateHotelService } from "#service/hotel.service.js";
import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await createHotelService(req.body);

  res.status(StatusCodes.CREATED).json({
    message: "Hotel created successfully",
    data: hotelResponse,
    success: true,
  });
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await getHotelByIdService(Number(req.params.id));
  res.status(StatusCodes.OK).json({
    message: "Hotel found successfully",
    data: hotelResponse,
    success: true,
  });
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {
  const hotelsResponse = await getAllHotelsService();
  res.status(StatusCodes.OK).json({
    message: "Hotels found successfully",
    data: hotelsResponse,
    success: true,
  });
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
  const hotelsResponse = await deleteHotelService(Number(req.params.id));
  res.status(StatusCodes.OK).json({
    message: "Hotels deleted successfully",
    data: hotelsResponse,
    success: true,
  });
}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await updateHotelService(Number(req.params.id), req.body);
  res.status(StatusCodes.OK).json({
    message: "Hotel updated successfully",
    data: hotelResponse,
    success: true,
  });
}

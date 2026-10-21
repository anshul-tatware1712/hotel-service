import { addHotel } from "#service/hotel.service.js";
import type { Request, Response } from "express";

export const createHotel = async (req: Request, res: Response): Promise<void> => {
  const hotel = await addHotel(req.body);
  res.status(201).json({ success: true, data: hotel });
};

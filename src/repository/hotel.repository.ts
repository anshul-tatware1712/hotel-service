import logger from "#config/logger.js";
import { Hotel } from "#database/models/hotel.js";
import type { hotelDto } from "#dto/hotel.dto.js";

export const createHotel = async (hotelData: hotelDto): Promise<Hotel> => {
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.address,
    city: hotelData.city,
    country: hotelData.country,
  });
  logger.info(`Hotel created with ID: ${hotel.id}`);
  return hotel;
};

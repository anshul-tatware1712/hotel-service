import type { Hotel } from "#database/models/hotel.js";
import type { hotelDto } from "#dto/hotel.dto.js";
import { createHotel } from "#repository/hotel.repository.js";

export const addHotel = async (hotelData: hotelDto): Promise<Hotel> => {
  const result = await createHotel(hotelData);
  return result;
};

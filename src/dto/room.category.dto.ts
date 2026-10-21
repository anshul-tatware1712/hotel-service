import type { RoomType } from "#database/models/room-category.js";

export interface CreateRoomCategoryDto {
  hotelId: number;
  price: number;
  roomType: RoomType;
  roomCount: number;
}

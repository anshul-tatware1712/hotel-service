import { RoomCategoryRepository } from "#repository/room.category.repository.js";
import RoomCategory from "#database/models/room-category.js";
import type { CreateRoomCategoryDto } from "#dto/room.category.dto.js";

const roomCategoryRepository = new RoomCategoryRepository();

export async function createRoomCategoryService(roomCategoryData: CreateRoomCategoryDto) {
  const roomCategory = await roomCategoryRepository.create(roomCategoryData);
  return roomCategory;
}

export const getRoomCategoryByIdService = async (id: number) => {
  const roomCategory = await roomCategoryRepository.findById(id);
  return roomCategory;
};

export async function getAllRoomCategoriesByHotelIdService(hotelId: number) {
  const roomCategories = await roomCategoryRepository.findAllByHotelId({ hotelId });
  return roomCategories;
}

export async function deleteRoomCategoryService(id: number) {
  const roomCategory = await roomCategoryRepository.delete({ id });
  return roomCategory;
}
export async function updateRoomCategoryService(id: number, roomCategoryData: Partial<RoomCategory>) {
  const roomCategory = await roomCategoryRepository.update(id, roomCategoryData);
  return roomCategory;
}

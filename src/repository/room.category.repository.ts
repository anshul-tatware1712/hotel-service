import RoomCategory from "#database/models/room-category.js";
import { BaseRepository } from "./base.repository.js";

export class RoomCategoryRepository extends BaseRepository<RoomCategory> {
  constructor() {
    super(RoomCategory);
  }

  async findAllByHotelId({ hotelId }: { hotelId: number }) {
    return this.model.findAll({ where: { hotelId, deletedAt: null } });
  }
}

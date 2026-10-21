import { DataTypes, Model } from "@sequelize/core";
import type { InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Default, Table } from "@sequelize/core/decorators-legacy";

export enum RoomType {
  SINGLE = "SINGLE",
  DOUBLE = "DOUBLE",
  FAMILY = "FAMILY",
  DELUXE = "DELUXE",
  SUITE = "SUITE",
}

@Table({ tableName: "room_categories", underscored: true, timestamps: true })
export class RoomCategory extends Model<InferAttributes<RoomCategory>, InferCreationAttributes<RoomCategory>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute({ type: DataTypes.INTEGER, references: { table: "hotels", key: "id" } })
  @NotNull
  declare hotelId: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare price: number;

  @Attribute(DataTypes.ENUM(...Object.values(RoomType)))
  declare roomType: RoomType;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare roomCount: number;

  @Attribute(DataTypes.DATE)
  declare createdAt: CreationOptional<Date>;

  @Attribute(DataTypes.DATE)
  declare updatedAt: CreationOptional<Date>;

  @Attribute(DataTypes.DATE)
  @Default(null)
  declare deletedAt: CreationOptional<Date> | null;
}

export default RoomCategory;

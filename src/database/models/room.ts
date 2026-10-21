import { DataTypes, Model } from "@sequelize/core";
import type { InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Default, Table } from "@sequelize/core/decorators-legacy";

@Table({ tableName: "rooms", underscored: true, timestamps: true })
export class Room extends Model<InferAttributes<Room>, InferCreationAttributes<Room>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute({ type: DataTypes.INTEGER, references: { table: "hotels", key: "id" } })
  @NotNull
  declare hotelId: number;

  @Attribute({ type: DataTypes.INTEGER, references: { table: "room_categories", key: "id" } })
  @NotNull
  declare roomCategoryId: number;

  @Attribute(DataTypes.DATE)
  @NotNull
  declare dateOfAvailability: Date;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare price: number;

  @Attribute(DataTypes.DATE)
  declare createdAt: CreationOptional<Date>;

  @Attribute(DataTypes.DATE)
  declare updatedAt: CreationOptional<Date>;

  @Attribute(DataTypes.DATE)
  @Default(null)
  declare deletedAt: CreationOptional<Date> | null;

  @Attribute(DataTypes.INTEGER)
  @Default(null)
  declare bookingId?: number | null;
}

export default Room;

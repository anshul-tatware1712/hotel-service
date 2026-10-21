import Sequelize, { DataTypes, Model } from "@sequelize/core";
import type { InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from "@sequelize/core/decorators-legacy";
import { MySqlDialect } from "@sequelize/mysql";

const sequelize = new Sequelize({ dialect: MySqlDialect });

export class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare address: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare city: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare country: string;

  @Attribute(DataTypes.DATE)
  declare createdAt: CreationOptional<Date>;

  @Attribute(DataTypes.DATE)
  declare updatedAt: CreationOptional<Date>;
}

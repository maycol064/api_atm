import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

class Cliente extends Model {
  public id_cliente!: number;
  public primer_nombre !: string;
  public segundo_nombre !: string;
  public apellido_paterno!: string;
  public apellido_materno!: string;
}

Cliente.init(
  {
    id_cliente: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true
    },
    primer_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    segundo_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido_paterno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido_materno: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: 'Cliente',
    tableName: 'cliente',
    timestamps: false
  }
);

export default Cliente;
import { DataTypes, Model } from "sequelize";
import sequelize from '../connection';
import Cliente from "./client";

export class Cuenta extends Model {
  public id_cuenta!: number;
  public monto!: number;
  public id_banco!: number;
  public id_tipo_cuenta!: number;
  public id_cliente!: number;
  public NIP!: number;
  public n_cuenta!: number;
}

Cuenta.init(
  {
    id_cuenta: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    monto: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    id_banco: {
      type: DataTypes.NUMBER,

    },
    id_tipo_cuenta: {
      type: DataTypes.NUMBER,

    },
    id_cliente: {
      type: DataTypes.NUMBER,
      references: {
        model: Cliente,
        key: 'id_cliente'
      }
    },
    NIP: {
      type: DataTypes.NUMBER,

    },
    n_cuenta: {
      type: DataTypes.NUMBER,

    },
  },
  {
    sequelize,
    modelName: 'Cuenta',
    tableName: 'cuenta',
    timestamps: false
  }
)

Cuenta.hasOne(Cliente, { foreignKey: 'id_cliente' });
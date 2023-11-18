import { DataTypes, UUIDV4 } from 'sequelize';
import { connection } from '../config/database.js';

export const Products = connection.define('products', {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ingredients: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
}, {
  timestamps: false
})
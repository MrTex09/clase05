import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './userModel.js';
import Product from './productModel.js';

const Sale = sequelize.define('Sale', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sellerId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
});

export default Sale;

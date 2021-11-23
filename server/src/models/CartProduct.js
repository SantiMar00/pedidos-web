'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartProduct.belongsTo(models.cart, {
        as: 'cart',
        foreignKey: 'cartId',
      })
      CartProduct.belongsTo(models.product, {
        as: 'product',
        foreignKey: 'productId',
      })
    }
  };
  CartProduct.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'cartProduct',
  });
  return CartProduct;
};
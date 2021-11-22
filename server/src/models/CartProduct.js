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
        foreignKey: 'cart_id',
      })
      CartProduct.belongsTo(models.product, {
        as: 'product',
        foreignKey: 'product_id',
      })
    }
  };
  CartProduct.init({
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    close: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'cartProduct',
  });
  return CartProduct;
};
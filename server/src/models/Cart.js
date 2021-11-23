'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.user, {
        as: 'user',
        foreignKey: 'userId',
      })
      Cart.belongsToMany(models.product, {
        through: "cartproducts",
        as: 'products',
        foreignKey: "productId",
      })
    }
  };
  Cart.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart',
  });
  return Cart;
};
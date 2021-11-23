// const Mongoose = require('mongoose')

// const UsuariosSchema = new Mongoose.Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true },
// })

// module.exports = Mongoose.model('usuarios', UsuariosSchema)


'use strict';

const { Model } = require('sequelize');
const PROTECTED_ATTRIBUTES = ['password']

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
        toJSON() {
            // hide protected fields
            let attributes = Object.assign({}, this.get())
            for (let a of PROTECTED_ATTRIBUTES) {
                delete attributes[a]
            }
            return attributes
        }
    };
    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'user',
    });
    return User;
};
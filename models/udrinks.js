'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class uDrinks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    };
    uDrinks.init({
        userID: DataTypes.INTEGER,
        CocktailId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'uDrinks',
    });
    return uDrinks;
};
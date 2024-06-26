const { Model, DataTypes } = require('sequelize');

const sequelize = require('../configure/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNUll: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name:{
      type: DataTypes.STRING,
      allowNUll: false,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

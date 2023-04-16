const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Type',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    main:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}
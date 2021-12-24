const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', {
    country_id: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'countries',
        key: 'country_id'
      }
    },
    country_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'countries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "countries_pkey",
        unique: true,
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};

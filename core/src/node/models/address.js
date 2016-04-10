'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Address = sequelize.define('Address', {
      address_id : {
        type : DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement : true
      },

      neighborhood : DataTypes.STRING,
      number : DataTypes.INTEGER(11),
      street : DataTypes.STRING,
      zip_code : DataTypes.STRING(8)

  }, {
      tableName : 'ccb_address',
      paranoid : true,
      classMethods : {
          associate: function(models) {
              Address.belongsTo(models.ccb.City, {
                as : 'City',
                foreignKey : 'city_id'
              });
          }
      }
  });

  return Address;
};

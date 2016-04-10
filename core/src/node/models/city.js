'use strict';

module.exports = function(sequelize, DataTypes) {

    var City = sequelize.define('City', {
        city_id : {
            type : DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement : true
        },

        name : DataTypes.STRING

    }, {
        tableName : 'ccb_city',
        paranoid : true
    });

    return City;
};

'use strict';

module.exports = function(sequelize, DataTypes) {

    var Crurch = sequelize.define('Crurch', {
        crurch_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },

        code: DataTypes.STRING,
        name: DataTypes.STRING,
        immobile_type : DataTypes.INTEGER

    }, {
        tableName: 'ccb_crurch',
        classMethods: {
            associate: function(models) {
                Crurch.belongsTo(models.ccb.Address, {
                    as:'address',
                    foreignKey: 'address_id'
                });
                Crurch.belongsTo(models.ccb.Servant, {
                    as: 'responsible',
                    foreignKey: 'servant_id'
                })
            }
        }
    });

    const ImmobileType = {
        OWNERSHIP: 0,
        RENTED: 1,
        BORROWED: 2
    };

    Crurch.ImmobileType = ImmobileType;

    return Crurch;
};

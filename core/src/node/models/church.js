'use strict';

module.exports = function(sequelize, DataTypes) {

    var Church = sequelize.define('Church', {
        church_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },

        code: DataTypes.STRING,
        name: DataTypes.STRING,
        immobile_type : DataTypes.INTEGER

    }, {
        tableName: 'ccb_church',
        classMethods: {
            associate: function(models) {
                Church.belongsTo(models.ccb.Address, {
                    as:'address',
                    foreignKey: 'address_id'
                });
                Church.belongsTo(models.ccb.Servant, {
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

    Church.ImmobileType = ImmobileType;

    return Church;
};

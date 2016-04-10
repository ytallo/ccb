'use strict';

module.exports = function(sequelize, DataTypes) {
    var Servant = sequelize.define('Servant', {
        servant_id : {
            type : DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement : true
        },

        phone : DataTypes.STRING(15),
        cpf : DataTypes.STRING(11),
        ministry : DataTypes.INTEGER
    }, {
        tableName : 'ccb_servant',

        classMethods : {
            associate : function (models) {
                Servant.belongsTo(models.core.User, {
                  as : 'User',
                  foreignKey: 'user_id'
                });
            }
        }

    });

    Servant.MinistryType = {
      NONE : 0
    };

    return Servant;
};

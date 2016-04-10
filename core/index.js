var config = require('./config/default'),
	Saphyre = require('@sergiofilhow/saphyre'),
	path = require('path');

//var warehouse = require('./src/node');

var saphyre = Saphyre({ modules : [{
		name : 'ccb.core',
		
		dirname : __dirname,

		deploymentFolder : path.join(__dirname, 'deployment'),

		angular : false,

		loadModels : function(dao, acqua) {
			dao.loadModels('ccb', path.join(__dirname, 'src', 'node', 'models'));
		},

		load : function (acqua, saphyre, languages) {
			
		}
	}] 
});

saphyre.start();
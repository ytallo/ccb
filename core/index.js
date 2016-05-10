var config = require('./config/default'),
	Saphyre = require('@sergiofilhow/saphyre'),
	path = require('path');

//var warehouse = require('./src/node');

var saphyre = Saphyre({ modules : [{
		name : 'ccb.core',
		
		dirname : __dirname,

		deploymentFolder : path.join(__dirname, 'deployment'),

		publicFolder : path.join(__dirname, 'public'),

		loadModels : function(dao, acqua) {
			dao.loadModels('ccb', path.join(__dirname, 'src', 'node', 'models'));
		},

		load : function (acqua, saphyre, languages) {

			languages.loadLocaleFolder(path.join(__dirname, 'languages'));
			
			acqua.importModule(path.join(__dirname, 'src/node/config/security'));
	        acqua.importModule(path.join(__dirname, 'src/node/config/menu'));
	        acqua.importModule(path.join(__dirname, 'src/node/config/scripts'));
		}
	}] 
});

saphyre.start();
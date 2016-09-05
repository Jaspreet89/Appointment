'use strict';

// Development specific configuration
// ==================================
module.exports = {
	mysql: {
     uri: 'mysql://root:@localhost:3306/physician'
	},
	// Seed database on startup
  seedDB: true

};
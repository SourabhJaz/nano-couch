module.exports = function(){
	var nano = require('nano')('http://localhost:5984');
	nano.db.create('business_cards_db');
	var business_cards_db = nano.db.use('business_cards_db');
	return business_cards_db;
};
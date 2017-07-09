var db_setup = require('./couchDB_start.js');
var business_cards_db = db_setup();
// JSONs to be inserted into db
var card1 = {
	name: 'aman kumari',
	position: 'doctor',
	organisation: 'university of science',
	phone: '9867986789',
	email: 'aman.k@gmail.com'
};
var card2 = {
	name: 'nitika',
	position: 'secretary',
	organisation: 'world vines',
	fax: '5555-8888-9999'
};
var card3 ={
	name: 'gwen stokes',
	position: 'professor',
	organisation: 'university of science',
	phone: '7891283921',
	fax: '9980-1232-3411',
	location: 'delhi' 
}

// Insertion
business_cards_db.insert(card1, 'person_1', function(error, body){
	if(error){
		console.log('Insertion failed for person_1');
		return;
	}
	console.log('Insertion successful for person_1: ', body);
});
business_cards_db.insert(card2, 'person_2', function(error, body){
	if(error){
		console.log('Insertion failed for person_2');
		return;
	}
	console.log('Insertion successful for person_2: ', body);
});
business_cards_db.insert(card3, 'person_3', function(error, body){
	if(error){
		console.log('Insertion failed for person_3');
		return;
	}
	console.log('Insertion successful for person_3: ', body);
});

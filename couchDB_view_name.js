var db_setup = require('./couchDB_start');
var business_cards_db = db_setup();
// Views to query
business_cards_db.view('business_views','get_name',function(err, body){
	if(!err){
		body.rows.forEach(function(doc) {
			console.log(doc.value);
		});		
	}
});

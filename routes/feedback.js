//Importing the dependencies
const express = require('express');
const sql = require('mysql');
var router = express.Router();
var db_config = {
  host: 'localhost',
    user: 'root',
    password: 'notdefined',
    database: 'cbpgec'
};

var con;

function handleDisconnect() {
  con = sql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  con.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  con.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      console.log(err);                                  // server variable configures this)
    }
  });
}

handleDisconnect();


setInterval(function () {
    con.query('SELECT 1');
}, 5000);


//Global Variables

var today = new Date();
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Global Functions////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

//function to insert data into DB
var insert = function (tableName, assData, res) {
	con.query(`INSERT INTO ${tableName} SET ?`, assData, function (err, result) {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
		else res.send(JSON.stringify({ msg: 'Insertion Successful' }));
	});
}

//Fetch Details page wise
var fetchpage = function (page, data, res) {
	var arr = [];
	var starting = (12 * page) - 12;
	var ending;
	if (data[12 * page]) {
		ending = 12 * page
	}
	else {
		ending = data.length;
	}
	for (var i = starting; i < ending; i++) {
		arr.push(data[i]);
	}
	res.send(arr);
}

//To Delete Data
var deleteData = function (tableName, row, tid, res) {
	var delstm = `delete from ${tableName} where ${row} = ${tid};`
	con.query(delstm, (err, data) => {
		if (err) {console.log(err);
			res.send(JSON.stringify({ msg: 'Delete Unsuccessful' }));}
			else
			{
				res.send(JSON.stringify({ msg: 'Delete Successful' }));
			}

	})
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////Actual Routing Start///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//Feedback Submission
router.post('/submit', (req, res) => {
var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var id = req.params.id;
		var feedData = req.body;
		feedData['date'] = today;
		insert('feedback', feedData, res)
	}
})

//Details of the feedback ID wise
router.get('/detail/id/:id/page/:page', (req, res) => {
	var check = req.check;
	var page = req.params.page
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var stm = `select * from feedback where id = ${req.params.id};`;
		con.query(stm, (err, result) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Fetch Unsuccessful' }));
			 }
		else fetchpage(page, result, res);

		})
	}

})

//Details of entire feedback list
router.get('/detail/page/:page', (req, res) => {
	var check = req.check;
	var page = req.params.page
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var stm = `select * from feedback;`;
		con.query(stm, (err, result) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Fetch Unsuccessful' }));
			 }
		else fetchpage(page, result, res);
		})
	}

})
//Delete the Feedback 
router.delete('/delete/id/:id', (req, res) => {
	var check = req.check;
	var id = req.params.id
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		deleteData('feedback', 'id', id, res);
		}		
})

var fetchpage = function (page, data, res) {

	var arr = [];
	var starting = (12 * page) - 12;
	var ending;
	if (data[12 * page]) {
		ending = 12 * page
	}
	else {
		ending = data.length;
	}
	for (var i = starting; i < ending; i++) {
		arr.push(data[i]);
	}
	res.send(arr);
}


module.exports = router;
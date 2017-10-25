//Importing the dependencies
const express = require('express');
const path = require('path');
const http = require('http');
// const bodyParser = require('body-parser');
const sql = require('mysql');


var router = express.Router();


var con = sql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "cbpgec"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("connected");
});


//Global Functions

//function to insert data into DB
var insert = function (tableName, assData, res) {
	con.query(`INSERT INTO ${tableName} SET ?`, assData, function (err, result) {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
		else {
			res.send(JSON.stringify({ msg: 'Insertion Successful' }));

		}
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
	console.log(`starting: ${starting}`);
	console.log(`ending: ${ending}`);
	for (var i = starting; i < ending; i++) {
		arr.push(data[i]);
	}
	res.send(arr);
}

//To Delete Data
var deleteData = function (tableName, row, tid, res) {
	console.log(row);
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


router.post('/submit', (req, res) => {
var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var id = req.params.id;
		var feedData = req.body;
		insert('feedback', feedData, res)


	}
})


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
		else {
			fetchpage(page, result, res);

		}
		})
	}

})

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
		else {
			fetchpage(page, result, res);

		}
		})
	}

})


router.delete('/delete/id/:id', (req, res) => {
	var check = req.check;
	var id = req.params.id
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		deleteData('feedback', 'id', id, res);

		}		
	

})


module.exports = router;
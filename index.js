//Importing the dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const sql = require('mysql');
var cors = require('cors');

const app = express();
//Initialising the basic token
app.use(cors());
var con = sql.createConnection({
	host: "localhost",
	user: "root",
	password: "notdefined",
	database: "cbpgec"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("connected");
});



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.use('/api', api);

app.get('/test', function (req, res) {
	res.sendfile("form.html");
})

// app.post('/login', function(req, res){
// 	var roll = req.body.roll;
// 	var pass = req.body.pass;
// 	var stmt = "select * from logindata where roll = '"+roll+"' && password = '"+pass+"';";
// 	con.query(stmt, function(err, result){
// 		if (err) throw err;
// 		else if (result[0].password = pass){
// 			res.send("Login Success");
// 		}
// 	}
// 		)
// 	}


// );
var Bearer = 0;


app.post('/login', function (req, res, next) {

	var a1 = req.query.id;
	var a2 = req.query.pass;
	console.log(a2);
	console.log(a1)
	var a4 = JSON.parse(JSON.stringify(req.headers));
	console.log(a4.authorization);

	if( a4.authorization == 'Basic cbpgec-a24-u26-n20-p21'){
		
		var stmt = `select * from logindata where roll = ${a1} && password = '${a2}'`;
		console.log(stmt);
		con.query(stmt, function (err, result) {
			res.setHeader('Content-Type', 'application/json');
			if (err) {
				// console.log(err);
				 
				res.send(JSON.stringify({ error : 'Invalid Credentials dvfd'})); }
			else {
				console.log("Inside user checkig");
				if (result.length == 0) { res.send(JSON.stringify({'error' : 'Invalid Credentials'})); }
				else {
						var roll = result[0].roll;
						var name = result[0].password;
						var stm = "select bear from bearer";
						con.query(stm, (err, res1) => {
							if (err) throw err;
							else {
								if (res1.length == 0) {
									Bearer = 1;
								}
								else {
									// var i = res.length();
									console.log(res1.length);
									var ln = res1.length - 1;
									Bearer = parseInt(res1[ln].bear) + 1;
								}
								console.log(Bearer);
								Bearer = func(Bearer,roll);
								res.send(JSON.stringify({access_token : Bearer}));
							}
						});
				}
			}
		}
		)
	
	}
	else{
		res.send("Access Denied");
	}

	// 	}
	// else{
	// 	res.send("Wrong Authentication");

});

var func = (bearer,roll) => {
	console.log("st" + bearer);
	var stmt1 = "INSERT into bearer VALUES(" + bearer + ", '" + roll + "');";
	con.query(stmt1, function (err, result) {
		if (err) throw err;
		else console.log("Insertion successful");
	});
	console.log("Inside func");
	console.log(bearer);
	return bearer;
}

app.post('/form', function (req, res) {
	var bear = req.query.bearer;
	var stmt2 = "select * from logindata where token = '" + bear + "';";
	con.query(stmt2, function (err, data) {
		if (err) throw err;
		else {
			if (!data[0]) { res.send("User not available"); }
			else {
				console.log(data);
				res.send(data);
			}
		}
	})
});

var assData =
	{
		'date': '12-10-2017',
		'heading': 'abc',
		'ques': [

			{
				'qu1': "jhsdb",
				'op1': "12",
				'op2': "13",
				'opq': "321"
			},

			{
				'qu1': "jhsdb",
				'op1': "12",
				'op2': "13",
				'opq': "321"
			},

			{
				'qu1': "jhsdb",
				'op1': "12",
				'op2': "13",
				'opq': "321"
			},

			{
				'qu1': "jhsdb",
				'op1': "12",
				'op2': "13",
				'opq': "321"
			},
		],
		'ans': 'q1'
	}



////////Assignment////////////////////

var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
	host: 'localhost',
	user: 'root',
	password: 'notdefined',
	database: 'cbpgec'
});
var temp = 0;
var assID;
app.post('/assignment', function (req, res, next) {
	assID = 'ass' + temp;



	var bear = req.query.bear;
	var stmt2 = "select * from bearer where bear = '" + bear + "';";
	con.query(stmt2, function (err, data) {
		if (err) throw err;
		else {
			if (!data[0]) { res.send("Teacher not available Or session expired...Login Again"); }
			else {
				console.log(data[0].roll + "submitted the assignment");


				mysqlJson.insert('assignment', {
					assid: assID,
					date: assData.date,
					heading: assData.heading,
					ans: assData.ans
				}, function (err, response) {
					console.log("checkpoint1");
					if (err) throw err;
					console.log(response);
				});

				var stmt5 = 'create table ' + assID + ' (ques varchar(255), op1 char(20), op2 char(20));';
				console.log(stmt5);
				console.log("statmenet paasesed");
				con.query(stmt5, function (err, result) {
					if (err) throw err;
					console.log("Table created");
					next();
					res.send("success");
				})
			}
		}
	})
}, function () {
	for (i = 0; i < assData.ques.length; i++) {
		mysqlJson.insert(assID, {
			ques: assData.ques[i].qu1,
			op1: assData.ques[i].op1,
			op2: assData.ques[i].op2

		}, function (err, response) {
			if (err) throw err;
			console.log(response);
		});
	}
	temp += 1;


})



// app.get('/ass', function(req, res){

//     for ques in ass{
//         var question = ques.ques1;
//         console.log(question);
//     };
// });

// // Catch all other routes and return the index file
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

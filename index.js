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
	password: "abhay",
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
						var email = result[0].email;
						var semester = result[0].semester;
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
								res.send(JSON.stringify({access_token : Bearer, id : roll, email : email, semester :semester}));
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




////////Assignment////////////////////

var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
	host: 'localhost',
	user: 'root',
	password: 'abhay',
	database: 'cbpgec'
});
var temp = 0;
var assID;





//assignment create

var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
	host: 'localhost',
	user: 'root',
	password: 'abhay',
	database: 'cbpgec'
});
var t
var assID;
app.post('/assignment', function (req, res, next) {
	assID = 'ass' + temp;
	var bear = req.headers.authorization;
	var bear = bear.substring(7, bear.length);
	console.log(bear);
	var stmt2 = `select * from bearer where bear = ${bear}`;
	var assData = req.body;
	console.log(req.body);
	con.query(stmt2, function (err, data) {
		if (err) throw err;
		else {
			if (!data[0]) { res.send('Access Denied'); }
			else {
				console.log("working");
				var stm = `select assid from assignment`;
				con.query(stm, function (err, res1) {
					if (err) throw err;
					else {
						if (res1.length == 0) {
							assId = 1;
						}
						else {
							// var i = res.length();
							console.log(res1.length);
							var ln = res1.length - 1;
							assId = parseInt(res1[ln].assid) + 1;
						}
						console.log(assId);
						newAssignment(assData,assId,res);
					}
				});
				console.log(data[0].roll + "submitted the assignment");
			}
		}
	})
})

var newAssignment = (assData,id,res) => {
	console.log(assData);
	mysqlJson.insert('assignment', {
		assid: id,
		date: assData.date,
		dateOfTest: assData.dateOfTest,
		startTime: assData.stTime,
		endTime: assData.endTime,
		semester: assData.semester,
		subject: assData.subject,
		department: assData.department,
		heading: assData.heading,
		teacherId : assData.teacherId
	}, function (err, response) {
		console.log("checkpoint1");
		if (err) throw err;
		console.log("assignment added");
		console.log(response);
	});
	
	var stmt6 = `create table assSol${id} (studentId char(20)`;
	for(let ques=0; ques < assData.ques.length; ques++){
		stmt6 += `, ques${ques + 1} varchar(255)`;
	}
	stmt6 += ');';
	console.log(stmt6);
	con.query(stmt6, (err,result)=>{
		if(err) throw err;
		else{
			console.log("sol table ");
		}
	})
	var stmt5 = 'create table ass' + id + ' (ques varchar(255), answer char(40) , op1 char(20) , op2 char(20), op3 char(20), op4 char(20));';
	console.log(stmt5);
	console.log("statmenet paasesed");
	con.query(stmt5, function (err, result) {
		if (err) throw err;
		console.log("Table created");
		insertQuestions(assData,id);
		res.send("success");
	})
}

function insertQuestions (assData,id) {
	for (i = 0; i < assData.ques.length; i++) {
		mysqlJson.insert('ass'+id, {
			ques: assData.ques[i].qu1,
			op1: assData.ques[i].op1,
			op2: assData.ques[i].op2,
			answer : assData.ques[i].answer,
			op3 : assData.ques[i].op3,
			op4 : assData.ques[i].op4

		}, function (err, response) {
			if (err) throw err;
			console.log(response);
		});
	}
}

//teacher fetch
app.get('/assignment/semester/:sem/student/:id', ( req, res) => {
	console.log( req.params.id );
	console.log( req.params.sem);

	var queryStmt = `select * from assignment where semester = ${req.params.sem}`;
	con.query(queryStmt, (err,data)=>{
		if(err) throw err;
		else{
			if(!data[0]){
				res.send('No assignments Available');
			}
			else{
				var array = [];
				console.log(data.length);
				for(let dat of data){
					var obj = {
						assid : dat.assid,
						heading : dat.heading,
						teacherId : dat.teacherId,
						semester : dat.semester,
						startTime : dat.startTime,
						endTime : dat.endTime,
						date : dat.date,
						subject : dat.subject,
						dateOfTest : dat.dateOfTest,
						department : dat.department
					}

					array.push(obj);
				}
				res.send(array);
			}
		}
	})
})

app.get('/assignment/semester/:sem/teacher/:id', ( req, res) => {
	console.log( req.params.id );
	console.log( req.params.sem);

	var queryStmt = `select * from assignment where teacherId = ${req.params.id}`;
	con.query(queryStmt, (err,data)=>{
		if(err) throw err;
		else{
			if(!data[0]){
				res.send('No assignments Available');
			}
			else{
				var array = [];
				console.log(data.length);
				for(let dat of data){
					var obj = {
						assid : dat.assid,
						heading : dat.heading,
						teacherId : dat.teacherId,
						semester : dat.semester,
						startTime : dat.startTime,
						endTime : dat.endTime,
						date : dat.date,
						subject : dat.subject,
						dateOfTest : dat.dateOfTest,
						department : dat.department
					}
					array.push(obj);
				}
				res.send(array);
			}
		}
	})
})


app.get('/assignment/byId/:id', (req,res) => {
	console.log(req.params.id);
	var tableName = 'ass' + req.params.id;
	var queryStmt = `select * from ${tableName}`;
	var array = [];
	con.query(queryStmt, (err,data) => {
		if(err) throw err;
		else{
			for( let ques of data){
				var obj = {
					ques : ques.ques,
					answer : ques.answer,
					op1 : ques.op1,
					op2 : ques.op2,
					op3 : ques.op3,
					op4 : ques.op4
				}
				array.push(obj);
			}
			res.send(array);
		}
	})
})


// app.get('/ass', function(req, res){

//     for ques in ass{
//         var question = ques.ques1;
//         console.log(question);
//     };
// });

// // Catch all other routes and return the index file
app.get('*', (req, res) => {
	console.log("main");
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

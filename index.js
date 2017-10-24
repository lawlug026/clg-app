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

var today = new Date();
console.log(today);



app.use(jsonFormat);

function jsonFormat(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	next();
}

//Global Variables for date

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
var Bearer = 0;
app.post('/login', function (req, res, next) {
	var a1 = req.query.id;
	var a2 = req.query.pass;
	console.log(a2);
	console.log(a1)
	var a4 = JSON.parse(JSON.stringify(req.headers));
	console.log(a4.authorization);
	if (a4.authorization == 'Basic cbpgec-a24-u26-n20-p21') {
		var stmt = `select * from logindata where roll = '${a1}' && password = '${a2}'`;
		console.log(stmt);
		con.query(stmt, function (err, result) {
			if (err) {
				// console.log(err);
				res.send(JSON.stringify({ error: 'Invalid Credentials dvfd' }));
			}
			else {
				console.log("Inside user checkig");
				if (result.length == 0) { res.send(JSON.stringify({ 'error': 'Invalid Credentials' })); }
				else {
					var roll = result[0].roll;
					var name = result[0].password;
					var email = result[0].email;
					var username = result[0].name;
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
							Bearer = func(Bearer, roll);
							res.send(JSON.stringify({ access_token: Bearer, name: username, id: roll, email: email, semester: semester }));
						}
					})
				}
			}
		})
	}
	else {
		res.send(JSON.stringify({ msg: 'Access Denied' }));
	}
});

var func = (bearer, roll) => {
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
	password: 'notdefined',
	database: 'cbpgec'
});
var temp = 0;
var assID;





//assignment create

var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
	host: 'localhost',
	user: 'root',
	password: 'notdefined',
	database: 'cbpgec'
});
var t
var assID;
var bearerCheck = function (req, res, next) {
	var bear = req.headers.authorization;
	var bear = bear.substring(7, bear.length);
	var stmt2 = `select * from bearer where bear = ${bear}`;
	con.query(stmt2, function (err, data) {
		if (err) throw err;
		else {
			if (!data[0]) {
			req.check = true;
				next();
			}
			else {
				req.check = false;
				next();
			}
		}
	});
}

app.use(bearerCheck);
app.post('/assignment', function (req, res, next) {

	var assData = req.body;
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
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
				newAssignment(assData, assId, res);
			}
		});
	}
});

var newAssignment = (assData, id, res) => {
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
		teacherId: assData.teacherId,
		instructions: assData.instructions,
		status: 'New',
		colorCode: '#00AA44'

	}, function (err, response) {
		console.log("checkpoint1");
		if (err) throw err;
		console.log("assignment added");
		console.log(response);
	});
	var stmt7 = `create table assRes${id} (studentId char(20)`;
	for (let ques = 0; ques < assData.ques.length; ques++) {
		stmt6 += `, ques${ques + 1} varchar(255)`;
	}
	stmt7 += ');';
	con.query(stmt7, (err, result) => {
		if (err) throw err;
		else {
			console.log("res table ");
		}
	})
	var stmt6 = `create table assSol${id} (studentId char(20)`;
	for (let ques = 0; ques < assData.ques.length; ques++) {
		stmt6 += `, ques${ques + 1} varchar(255)`;
	}
	stmt6 += ');';
	console.log(stmt6);
	con.query(stmt6, (err, result) => {
		if (err) throw err;
		else {
			console.log("sol table ");
		}
	})
	var stmt5 = 'create table ass' + id + ' (ques varchar(255), answer char(40) , op1 char(20) , op2 char(20), op3 char(20), op4 char(20));';
	console.log(stmt5);
	console.log("statmenet paasesed");
	con.query(stmt5, function (err, result) {
		if (err) throw err;
		console.log("Table created");
		insertQuestions(assData, id);
		res.send(JSON.stringify({ msg: 'Assignment Submission Successful' }));;
	})
}
function insertQuestions(assData, id) {
	for (i = 0; i < assData.ques.length; i++) {
		mysqlJson.insert('ass' + id, {
			ques: assData.ques[i].qu1,
			op1: assData.ques[i].op1,
			op2: assData.ques[i].op2,
			answer: assData.ques[i].answer,
			op3: assData.ques[i].op3,
			op4: assData.ques[i].op4

		}, function (err, response) {
			if (err) throw err;
			console.log(response);
		});
	}
}
var statuts = "";
var color = "";

//assignment fetch for student (using sem)
app.get('/assignment/semester/:sem/student/:id', (req, res) => {
	console.log(req.params.id);
	console.log(req.params.sem);
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var queryStmt = `select * from assignment where semester = ${req.params.sem}`;
		con.query(queryStmt, (err, data) => {
			if (err) throw err;
			else {
				if (!data[0]) {
					res.send(JSON.stringify({ msg: 'No Assignments Available' }));
				}
				else {
					var array = [];
					var status = '';
					var color = '';
					console.log(data.length);
					for (let dat of data) {
						var parts = dat.dateOfTest;
						var a = parts<today;
						console.log(a);
						if(a){
							status='Expired';
							color='#b6201f';
						}
						else
							{if(parts==today){status='Running';
							color='#12d265';}
							else{
							status='Active';
							color='#AA0044';}}
						var obj = {
							assid: dat.assid,
							heading: dat.heading,
							teacherId: dat.teacherId,
							semester: dat.semester,
							startTime: dat.startTime,
							endTime: dat.endTime,
							date: dat.date,
							subject: dat.subject,
							dateOfTest: dat.dateOfTest,
							department: dat.department,
							instructions: dat.instructions,
							status: status,
							colorCode: color
						}

						array.push(obj);
					}
					res.send(array);
				}
			}
		})
	}
})


//fetch assignment for teacher

app.get('/assignment/semester/:sem/teacher/:id', (req, res) => {
	console.log(req.params.id);
	console.log(req.params.sem);
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var queryStmt = `select * from assignment where teacherId = ${req.params.id}`;
		con.query(queryStmt, (err, data) => {
			if (err) throw err;
			else {

				if (!data[0]) {
					res.send(JSON.stringify({ msg: 'No assignments Available' }));
				}
				else {
					var array = [];
					console.log(data.length);
					for (let dat of data) {
						var obj = {
							assid: dat.assid,
							heading: dat.heading,
							teacherId: dat.teacherId,
							semester: dat.semester,
							startTime: dat.startTime,
							endTime: dat.endTime,
							date: dat.date,
							subject: dat.subject,
							dateOfTest: dat.dateOfTest,
							department: dat.department,
							instructions: dat.instructions
						}
						array.push(obj);
					}
					res.send(array);
				}
			}
		})
	}
})


app.get('/assignment/byId/:id', (req, res) => {
	console.log(req.params.id);
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var tableName = 'ass' + req.params.id;
		var queryStmt = `select * from ${tableName}`;
		var array = [];
		con.query(queryStmt, (err, data) => {
			if (err) throw err;
			else {
				for (let ques of data) {
					var obj = {
						ques: ques.ques,
						answer: ques.answer,
						op1: ques.op1,
						op2: ques.op2,
						op3: ques.op3,
						op4: ques.op4
					}
					array.push(obj);
				}
				res.send(array);
			}
		})
	}
})


//form fetch from student
app.get('/form/fetch/student/:stid', function (req, res) {
	console.log(req.params.stid);
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {

		var formstm1 = `select * from form where Enrollment_No = ${req.params.stid};`;
		con.query(formstm1, (err, data) => {
			if (err) throw err;
			else {
				if (!data[0]) {
					fetchfromlogin(req.params.stid, res);
				}
				else {
					fetchfromform(req.params.stid, res);
				}
			}

		})
	}
})
//function to fetch details from form
function fetchfromform(id, res) {
	var formstm3 = `select * from form where Enrollment_No = ${id};`;
	con.query(formstm3, (err, data) => {
		if (err) throw err;
		else {
			var obj = {
				Enrollment_No: data[0].Enrollment_No,
				Name: data[0].Name,
				Email: data[0].Email,
				Semester: data[0].Semester,
				Father_Name: data[0].Father_Name,
				Mother_Name: data[0].Mother_Name,
				Student_Mobile: data[0].Student_Mobile,
				Father_Mobile: data[0].Father_Mobile,
				Father_Occupation: data[0].Father_Occupation,
				Mother_Occupation: data[0].Mother_Ocupation,
				Father_Office_Address: data[0].Father_Office_Address,
				Permanent_Address: data[0].Permanent_Address,
				Correspondence_Address: data[0].Correspondence_Address,
				Date_Of_Birth: data[0].Date_Of_Birth,
				Training_Details: data[0].Training_Details,
				Achievement_Details: data[0].Achievement_Details
			}
			console.log(obj);
			res.send(obj);
		}
	})
}
//function to fetch details from logindata
function fetchfromlogin(id, res) {
	console.log(id);
	var formstm2 = `select * from logindata where Enrollment_No = ${id};`;
	con.query(formstm2, (err, data) => {
		if (err) throw err;
		else {
			if (!data[0]) { res.send(JSON.stringify({'message' : "Student not found"})); }
			else {
				var obj = {
					Enrollment_No: data[0].roll,
					Name: data[0].name,
					Email: data[0].email,
					Semester: data[0].semester,
					Father_Name: '',
					Mother_Name: '',
					Student_Mobile: '',
					Father_Mobile: '',
					Father_Occupation: '',
					Mother_Occupation: '',
					Father_Office_Address: '',
					Permanent_Address: '',
					Correspondence_Address: '',
					Date_Of_Birth: '',
					Training_Details: '',
					Achievement_Details: ''
				}
				console.log(obj);
				res.send(obj);
			}
		}
	})
}

//Insert solution into database

app.post('/assignment/submit/student/:stid/assignID/:assid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var tableName = `assSol${req.params.assid}`;
		var assData = req.body;
		insert(tableName, assData, res);
	}
});
//function to insert data into DB
var insert = function (tableName, assData, res) {
	con.query(`INSERT INTO ${tableName} SET ?`, assData, function (err, result) {
		if (err) throw err;
		else {

		}
	});
}

//fetch soln for teacher
app.get('/assignment/teacher/:teachid/assid/:assid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var solnstmt1 = `select answer from ass${req.params.assid};`;
		con.query(solnstmt1, (err, result) => {
			if (err) throw err;
			else {
				res.send(result);
			}
		});
	}
});

//Students Solution Page Wise
app.get('/assignment/studentsoln/assid/:assid/page/:page', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var page = req.params.page;
		var stsolstmt1 = `select * from assSol${req.params.assid};`;
		con.query(stsolstmt1, (err, data) => {
			if (err) throw err;
			else {
				fetchpage(page, data, res);
			}
		})
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
	console.log(`starting: ${starting}`);
	console.log(`ending: ${ending}`);
	for (var i = starting; i < ending; i++) {
		arr.push(data[i]);
	}
	res.send(arr);
}
//fetch students details
app.get('/details/student/page/:page', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var page = req.params.page;
		var ststmt1 = `select * from form;`;
		con.query(ststmt1, (err, data) => {
			if (err) throw err;
			else {
				fetchpage(page, data, res);
			}
		})
	}
})
//fetch teacher details
app.get('/details/teacher', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var page = req.params.page;
		var ststmt1 = `select * from teacher;`;
		con.query(ststmt1, (err, data) => {
			if (err) throw err;
			else {
			}
		})
	}
})


// //Insert form details
// app.post('/form/insert/student/:stdid', (req, res) => {
// 	var check = req.check;
// 	if (check) { res.send('Access Denied'); }
// 	else
// {
// 	var assData = req.body;
// 	insert('form', assData, res);	
// } 
// })
//Insert teacher details
// app.post('/form/insert/teacher', (req, res) => {
// 	var check = req.check;
// 	if (check) { res.send('Access Denied'); }
// 	else
// {
// 	var assData = req.body;
// 	insert('teacher', assData, res);	 
// }
// })


//Delete form details student
app.delete('/form/delete/student/:stid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' }));}
	else {
		var stid = req.params.stid;
		deleteData('form', 'roll', stid);
		deleteData('logindata', 'roll', stid);
		res.send(JSON.stringify({ message: 'Student Deletion Successful' }));
	}
})
//delete teacher
app.delete('/form/delete/teacher/:tid', (req, res) => {
	var check = req.check;
	var tid = req.params.tid;
	if (check) {res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {


		deleteData('teacher', 'teacherId', tid);
		deleteData('teaches', 'teacherId', tid);
		deleteData('logindata', 'roll', tid);
		res.send(JSON.stringify({ message: 'Teacher Deletion Successful' }));
	}
})

var deleteData = function (tableName, row, tid) {
	console.log(row);
	var delstm = `delete from ${tableName} where ${row} = ${tid};`
	con.query(delstm, (err, data) => {
		if (err) throw err;
		else {

		}
	})
}

//Update form details
app.post('/form/update/student/:stdid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var assData = req.body;
		var stid = req.params.stdid;
		update('form', assData, 'Enrollment_No', stid, res);
	}
})
var update = function (tableName, assData, row, id, res) {
	console.log(row);
	con.query(`UPDATE ${tableName} SET ? where ${row} = ${id};`, assData, (err, data) => {
		if (err) throw err;
		else {
			res.send(JSON.stringify({ msg: 'Update Successful' }));
		}
	})
}


//Insert form details
app.post('/form/insert/student', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var assData = req.body;
		insert('form', assData, res);
		var indexSpace = assData.Name.indexOf(" ");
		var password;
		if (indexSpace > 0) {
			password = assData.Name.substring(0, indexSpace).toLowerCase();
		}
		else {
			password = assData.name;
		}

		console.log(password);
		var loginData = {
			Enrollment_No: assData.Enrollment_No,
			Name: assData.Name,
			Password: password,
			Email: assData.Email,
			Semester: assData.Semester

		}
		insert('logindata', loginData, res);
		res.send(JSON.stringify({ message: "success" }));

	}
});

//Insert teacher details
app.post('/form/insert/teacher', (req, res) => {
	var check = req.check;
	var assData = req.body;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var indexSpace = assData.teacherName.indexOf(" ");
		var password;
		if (indexSpace > 0) {
			password = assData.teacherName.substring(0, indexSpace).toLowerCase();
		}
		else {
			password = assData.teacherName;
		}

		insert('teacher', assData, res);
		var loginData = {
			name: assData.teacherName,
			roll: assData.teacherId,
			semester: 0,
			password: password
		}
		insert('logindata', loginData, res);
		res.send(JSON.stringify({ message: 'Success' }));
	}
})


//subject & semester fetch according to teacher detials
app.get('/details/teacher/sem/subject/:tid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
	var page = req.params.page;
	var stm = `select semester, subName from teaches, subject where (subject.subId = teaches.subId) && teaches.teacherId = ${req.params.tid}`;
	con.query(stm, (err, data) => {
		if (err) throw err;
		else {
			res.send(data);
		}
	})
	}
});

//teacher & semester fetch according to subject detials(Complete subject query)
app.get('/details/subject/page/:page', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
	var page = req.params.page;
	var stm = `select semester, subName, teacherName from subject,teacher where (teaches.teacherId = teacher.teacherId);`;
	con.query(stm, (err, data) => {
		if (err) throw err;
		else {
			fetchpage(page, data, res);
		}
	})
}
});

// Fetch Student details semester wise
app.get('/details/student/semester/:sem/page/:page', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var page = req.params.page;
		var ststmt1 = `select * from form where Semester = ${req.params.sem};`;
		con.query(ststmt1, (err, data) => {
			if (err) throw err;
			else {
				fetchpage(page, data, res);
			}
		})
	}
})


// Update the form table

app.post('/update/form', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		updateColumn('form', req.body.column, 'VARCHAR(255)', res);
		
	}
})

var updateColumn = function(table, column, datatype, res){
	var stmt = `ALTER TABLE ${table} ADD ${column} ${datatype};`;
	con.query(stmt, (err, data) => {
		if (err) {console.log(err);
		res.send(JSON.stringify({"message":"Column Not Added Successfully"}));}
		else{
			res.send(JSON.stringify({"message":"Column Added Successfully"}));
			
		}
	})
}


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

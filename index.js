//Importing the dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const sql = require('mysql');
var cors = require('cors');
var feedback = require('./routes/feedback');
var assignment = require('./routes/assignment');
var newform = require('./routes/form');

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
	if (err) console.log(err);;
	console.log("connected");
});


setInterval(function () {
    con.query('SELECT 1');
}, 5000);

var dateUTC = new Date();
var dateUTC = dateUTC.getTime() 
var today = new Date(dateUTC);


//date shifting for IST timezone (+5 hours and 30 minutes)
today.setHours(today.getHours() + 5); 
today.setMinutes(today.getMinutes() + 30);
console.log(today);

// // Catch all other routes and return the index file


// app.use(jsonFormat);

// function jsonFormat(req, res, next) {
// 	res.setHeader('Content-Type', 'application/json');
// 	next();
// }

//Global Variables for date

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.use('/api', api);

var Bearer = 0;
app.post('/login', function (req, res, next) {
	var a1 = req.query.id;
	var a2 = req.query.pass;
	var a4 = JSON.parse(JSON.stringify(req.headers));
	if (a4.authorization == 'Basic cbpgec-a24-u26-n20-p21') {
		if(a1 == 0 || a1.length<5){
			var stmt = `select * from logindatat where Enrollment_No = '${a1}' && Password = '${a2}'`;
			con.query(stmt, function (err, result) {
			if (err) {
				res.send(JSON.stringify({ error: 'Invalid Credentials dvfd' }));
			}
			else {
				if (result.length == 0) { res.send(JSON.stringify({ 'error': 'Invalid Credentials' })); }
				else {
					var roll = result[0].Enrollment_No;					
					var name = result[0].Password;
					var email = result[0].Email;
					var username = result[0].Name;
					var semester = result[0].Semester;
					var stm = "select bear from bearer";
					con.query(stm, (err, res1) => {
						if (err) console.log(err);
						else {
							if (res1.length == 0) Bearer = 1;						
							else {
								var ln = res1.length - 1;
								Bearer = parseInt(res1[ln].bear) + 1;
							}
							Bearer = func(Bearer, roll);	
							res.send(JSON.stringify({ access_token: Bearer, department:null, name: username, id: roll, email: email, semester: semester}));			
							}
					});
				}
			}
		})
		}
		else	
		{var year = getYear(a1);
				var stmt = `select * from log${year} where Enrollment_No = '${a1}' && Password = '${a2}'`;
				con.query(stmt, function (err, result) {
					if (err) res.send(JSON.stringify({ error: 'Invalid Credentials dvfd' }));
					else {
						if (result.length == 0) res.send(JSON.stringify({ 'error': 'Invalid Credentials' })); 
						else {
							var roll = result[0].Enrollment_No;
							var name = result[0].Password;
							var email = result[0].Email;
							var username = result[0].Name;
							var semester = result[0].Semester;
							var stm = "select bear from bearer";
							con.query(stm, (err, res1) => {
								if (err) console.log(err);
								else {
									if (res1.length == 0) {
										Bearer = 1;
									}
									else {
										var ln = res1.length - 1;
										Bearer = parseInt(res1[ln].bear) + 1;
									}
									Bearer = func(Bearer, roll);
									if(roll.length<=4)
									res.send(JSON.stringify({ access_token: Bearer, department:null, name: username, id: roll, email: email, semester: semester}));
									else{
										var ver = roll.substring(7,9);
										if(ver==31)
									res.send(JSON.stringify({ access_token: Bearer, department:'IT', name: username, id: roll, email: email, semester: semester}));
										else {
											res.send(JSON.stringify({ access_token: Bearer, department:'civil', name: username, id: roll, email: email, semester: semester}));
										}
		
									}						
										}
								})
							
						}
					}
				})}
	}
	else {
		res.send(JSON.stringify({ msg: 'Access Denied' }));
	}

});
var getYear = function(id){
	var year = id.substring(9,11);
	var curYear = today.getYear();
	var current = (curYear.toString()).substring(1,3);
	var yearc = current-year+1;
	return yearc;
}

var func = (bearer, roll) => {
	var stmt1 = "INSERT into bearer VALUES(" + bearer + ", '" + roll + "');";
	con.query(stmt1, function (err, result) {
		if (err) console.log(err);
		else console.log("Insertion successful");
	});
	return bearer;
}

app.post('/form', function (req, res) {
	var bear = req.query.bearer;
	var stmt2 = "select * from logindata where token = '" + bear + "';";
	con.query(stmt2, function (err, data) {
		if (err) console.log(err);
		else {
			if (!data[0]) { res.send("User not available"); }
			else {
				res.send(data);
			}
		}
	})
});





var t
var assID;
var bearerCheck = function (req, res, next) {
	var bear = req.headers.authorization;
	var bear = bear.substring(7, bear.length);
	var stmt2 = `select * from bearer where bear = ${bear}`;
	con.query(stmt2, function (err, data) {
		if (err) console.log(err);
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

// app.use(bearerCheck);
app.use('/feedback', feedback);
app.use('/assignment', assignment);
app.use('/newform', newform);


//form fetch from student
app.get('/form/fetch/student/:stid', function (req, res) {
	var a = req.params.stid;
	var year = getYear(a);
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {

		var formstm1 = `select * from log${year} where Enrollment_No = ${req.params.stid};`;
		con.query(formstm1, (err, data) => {
			if (err) console.log(err);
			else {
				if (!data[0]) {
					fetchfromlogin(req.params.stid, res, year);
				}
				else {
					fetchfromform(req.params.stid, res, year);
				}
			}

		})
	}
})



//fetch students details
app.get('/details/student/semester/:sem/dept/:dept/page/:page', (req, res) => {
	var check = req.check;
	var tmpsem = req.params.sem;
		var sem = tmpsem.substring(0,1);
		var year = getYearFromSem(sem);
		var tabletmp = req.params.form;
		var page = req.params.page
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {	
		var ststmt1 = `select * from log${year} where Department = '${req.params.dept}';`;
		con.query(ststmt1, (err, data) => {
			if (err) console.log(err);
			else {
				fetchpage(page, data, res);
			}
		})
	}
})
//fetch teacher details
app.get('/details/teacher/page/:page', (req, res) => {
	var check = req.check;
	
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var page = req.params.page;
		var ststmt1 = `select * from teacher;`;
		con.query(ststmt1, (err, data) => {
			if (err) console.log(err);
			else {
				fetchpage(page, data, res);
			}
		})
	}
})


//Show column Names from form table

app.get('/showform', (req, res)=>{
	var stm = `show columns from Form1`;
	con.query(stm, (err, data)=>{
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Fetch Unsuccessful' }));
			 }
			else{				
				var arr = [];
				for(i=0; i<data.length; i++){					
					arr.push(data[i].Field);
				}
				res.send(arr);				
			}
	})
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
		var year = getYear(stid);
		var form = `form${year}`;
		var log = `log${year}`;
		deleteData(form, 'Enrollment_No', stid);
		deleteData(log, 'Enrollment_No', stid);
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
		deleteData('logindatat', 'Enrollment_No', tid);
		res.send(JSON.stringify({ message: 'Teacher Deletion Successful' }));
	}
})



//Update form details
app.post('/form/update/student/:stdid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var assData = req.body;
		var stid = req.params.stdid;
		var year = getYear(stid);
		var form = `form${year}`;
		update(form, assData, 'Enrollment_No', stid, res);
	}
})



//Insert form details
app.post('/form/insert/student', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var assData = req.body;
		var stid = assData.Enrollment_No;
		var year = getYear(stid);
		var form = `form${year}`;
		insert(form, assData, res);
		var indexSpace = assData.Name.indexOf(" ");
		var password;
		if (indexSpace > 0) {
			password = assData.Name.substring(0, indexSpace).toLowerCase();
		}
		else {
			password = assData.Name.toLowerCase();
		}
		var loginData = {
			Enrollment_No: assData.Enrollment_No,
			Name: assData.Name,
			Password: password,
			Semester: assData.Semester
		}
		var log = `log${year}`;
		insert(log, loginData, res);
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
		var loginData = {
			Name: assData.teacherName,			
			Semester: 0,
			Password: password
		}
		maxId(loginData, res);		
		insert('teacher', assData, res);		
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
		if (err) console.log(err);
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
	var stm = `select semester, subName, teacherName from subject,teacher, teaches where (teaches.teacherId = teacher.teacherId);`;
	con.query(stm, (err, data) => {
		if (err) console.log(err);
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
		var sem = req.params.sem;
		var year = getYearFromSem(sem);
		var ststmt1 = `select * from log${year} where Semester = ${req.params.sem};`;
		con.query(ststmt1, (err, data) => {
			if (err) console.log(err);
			else {
				fetchpage(page, data, res);
			}
		})
	}
})


//Fetch Subject semester wise
app.get('/details/subject/semester/:sem', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var ststmt1 = `select subName from subject where semester = ${req.params.sem};`;
		con.query(ststmt1, (err, data) => {
			if (err) console.log(err);
			else {
				res.send(data);}
		})
	}
})


// Update the form table, Adding a new column

app.post('/update/form', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		addColumn('log1', req.body.column, 'VARCHAR(255)', res);
		addColumn('log2', req.body.column, 'VARCHAR(255)', res);
		addColumn('log3', req.body.column, 'VARCHAR(255)', res);
		addColumn('log4', req.body.column, 'VARCHAR(255)', res);
	}
})


//route to delete the column of any form
app.delete('/update/form/delete/:column', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var column = req.params.column;
		deleteColumn('log1', column, res);
		deleteColumn('log2', column, res);
		deleteColumn('log3', column, res);
		deleteColumn('log4', column, res);
	}
})


app.get('/details/semester/:sem', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
	var sem = req.params.sem;
	var stmt = `SELECT subName, subId FROM subject where semester = ${req.params.sem} && subId NOT IN (
   SELECT DISTINCT subId FROM teaches);`;
	con.query(stmt, (err, datas)=>{
		if (err){ console.log(err);
		}
		else{
			res.send(datas);
		}
	})
	
}
});
app.get('/list/semester/teacher/:tid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
	var tid = req.params.tid;
	var stmt = `SELECT semester from subject, teaches where teaches.subId = subject.subId && teacherId = ${tid};`;
	con.query(stmt, (err, datas)=>{
		if (err){ console.log(err);
		}
		else{
			res.send(datas);
			}
	})	
}
})


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

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////GLOBAL FUNCTIONS///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////



var getYearFromSem = function(sem){
	if(sem==1 || sem==2) return 1;
	if(sem==3 || sem==4) return 2;
	if(sem==5 || sem==6) return 3;
	if(sem==7 || sem==8) return 4;
}



var deleteColumn = function(table, column, res){
	var stmt = `ALTER TABLE ${table} DROP ${column}`;
	con.query(stmt, (err, data) => {
		if (err) {console.log(err);
		res.send(JSON.stringify({"message":"Column Not Deleted Successfully"}));}
		else{
			res.send(JSON.stringify({"message":"Column Deleted Successfully"}));			
		}
	})
}

var addColumn = function(table, column, datatype, res){
	var stmt = `ALTER TABLE ${table} ADD ${column} ${datatype};`;
	con.query(stmt, (err, data) => {
		if (err) {console.log(err);
		res.send(JSON.stringify({"message":"Column Not Added Successfully"}));}
		else{
			res.send(JSON.stringify({"message":"Column Added Successfully"}));
		}
	})
}

var roll;

var maxId = function(loginData, res){
	var stm = `select MAX(teacherId) from teacher`;
		con.query(stm, (err, data)=>{
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Fetching unsuccessful' }));
					 }
			else{
				roll = data[0]['MAX(teacherId)']+1;
				loginData['Enrollment_No'] = roll;
				insert('logindatat', loginData, res);
				res.send(JSON.stringify({ 'New Teacher Id': roll }));
			}
		})

}

var update = function (tableName, assData, row, id, res) {
	con.query(`UPDATE ${tableName} SET ? where ${row} = ${id};`, assData, (err, data) => {
		if (err) console.log(err);
		else {
			res.send(JSON.stringify({ msg: 'Update Successful' }));
		}
	})
}

//Insert Student solution into database

var insert = function (tableName, assData, res) {
	con.query(`INSERT INTO ${tableName} SET ?`, assData, function (err, result) {
		if (err) console.log(err);
		else {

		}
	});
}

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

var deleteData = function (tableName, row, tid) {
	console.log(row);
	var delstm = `delete from ${tableName} where ${row} = ${tid};`
	con.query(delstm, (err, data) => {
		if (err) console.log(err);
		else {

		}
	})
}

//function to fetch details from form
function fetchfromform(id, res, year) {
	var formstm3 = `select * from log${year} where Enrollment_No = ${id};`;
	con.query(formstm3, (err, data) => {
		if (err) console.log(err);
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
			res.send(obj);
		}
	})
}
//function to fetch details from logindata
function fetchfromlogin(id, res, year) {
	var formstm2 = `select * from log${year} where Enrollment_No = ${id};`;
	con.query(formstm2, (err, data) => {
		if (err) console.log(err);
		else {
			if (!data[0]) { res.send(JSON.stringify({'message' : "Student not found"})); }
			else {
				var obj = {
					Enrollment_No: data[0].Enrollment_No,
					Name: data[0].Name,
					Email: data[0].Email,
					Semester: data[0].Semester,
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
				res.send(obj);
			}
		}
	})
}
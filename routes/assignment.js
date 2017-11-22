const express = require('express');
const sql = require('mysql');
var router = express.Router();
var con;
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

var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
	host: 'localhost',
	user: 'root',
	password: 'notdefined',
	database: 'cbpgec'

});


setInterval(function () {
    con.query('SELECT 1');
}, 5000);


var dateUTC = new Date();
var dateUTC = dateUTC.getTime() 
var today = new Date(dateUTC);
today.setHours(today.getHours() + 5); 
today.setMinutes(today.getMinutes() + 30);
console.log(today);

// router.use(bearerCheck);

//Assignment Create
router.post('/', function (req, res, next) {
	var teacherName;
	var assData = req.body;
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var stm = `select assid from assignment`;
		con.query(stm, function (err, res1) {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				console.log('Fetching teacher details');
				
	var stmt12=`select Name from logindatat where Enrollment_No = ${assData.teacherId};`;
	con.query(stmt12, (err, result) => {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			 else{
			 	var teacherName = result[0].Name;
			 	console.log(teacherName);
			 	assData['teacherName']=teacherName;

		
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
				newAssignment(assData, assId, res, teacherName);
					 }
	})
			}
		});
	}
});

var newAssignment = (assData, id, res, teacherName) => {
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
		colorCode: '#00AA44',
		teacherName:teacherName

	}, function (err, response) {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
		console.log("assignment added");
		console.log(response);
	});

	var stmt7 = `create table assRes${id} (studentId char(20)`;
	for (var ques = 0; ques < assData.ques.length; ques++) {
		stmt7 += `, ques${ques + 1} varchar(255)`;
	}
	stmt7 += ', total varchar(50));';
	console.log(stmt7);
	con.query(stmt7, (err, result) => {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
		else {
			console.log("res table ");
		}
	})
	var stmt6 = `create table assSol${id} (studentId char(20)`;
	for (var ques = 0; ques < assData.ques.length; ques++) {
		stmt6 += `, ques${ques + 1} varchar(255)`;
	}
	stmt6 += ');';
	console.log(stmt6);
	con.query(stmt6, (err, result) => {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
		else {
			console.log("sol table ");
		}
	})
	var stmt5 = 'create table ass' + id + ' (ques varchar(255), answer char(40) , op1 char(20) , op2 char(20), op3 char(20), op4 char(20));';
	console.log(stmt5);
	console.log("statmenet paasesed");
	con.query(stmt5, function (err, result) {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
		console.log("Table created");
		insertQuestions(assData, id);
		res.send(JSON.stringify({ msg: 'Assignment Submission Successful' }));;
	})
}
function insertQuestions(assData, id) {
	for (var i = 0; i < assData.ques.length; i++) {
		mysqlJson.insert('ass' + id, {
			ques: assData.ques[i].qu1,
			op1: assData.ques[i].op1,
			op2: assData.ques[i].op2,
			answer: assData.ques[i].answer,
			op3: assData.ques[i].op3,
			op4: assData.ques[i].op4

		}, function (err, response) {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			console.log(response);
		});
	}
}
var statuts = "";
var color = "";

//assignment fetch for student (using sem)
router.get('/semester/:sem/department/:dept/page/:page/stdid/:stdid', (req, res) => {
	var page = req.params.page;
	var check = req.check;
	if (check) {  res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		console.log("working");
		var tmpsem = req.params.sem;
		var sem = tmpsem.substring(0,1);
		var year = getYearFromSem(sem);
		var queryStmt = `select * from assignment where semester = ${sem} && department = '${req.params.dept}' ORDER BY dateOfTest DESC`;
		con.query(queryStmt, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				if (!data[0]) {
					res.send(JSON.stringify({ msg: 'No Assignments Available' }));
				}
				else {
					var array = [];
					var status = '';
					var color = '';
					var c=0;
					for (var dat of data) {
						var parts = dat.dateOfTest;
						parts.setHours(parts.getHours() + 5); 
						parts.setMinutes(parts.getMinutes() + 30);
						var yp = parts.getYear();
						var mp = parts.getMonth();
						var dp = parts.getDate();
						var yt = today.getYear();
						var mt = today.getMonth();
						var dt = today.getDate();
						if(yp<yt){
							status='Expired';
							color='#ff0000';
						}
						else
							{
								if(yp>yt)
								{
									status='New';
									color='#AAOO44';
								}
								else{
									if(mp<mt){
										status='Expired';
										color='#ff0000';
									}
									else{
										if(mp>mt){
											status='New';
											color='#AAOO44';
										}
										else{
											if(dp<dt){
												status='Expired';
												color='#ff0000';
											}
											else{
												if(dp>dt){
													status='New';
													color='#AAOO44';
												}
												else{
													status='Progress';
													color='#12d265';
												}
											}
										}
									}
								}
							}								
						var obj = {
							assid: dat.assid,
							heading: dat.heading,
							teacherId: dat.teacherId,
							semester: dat.semester,
							startTime: dat.startTime,
							endTime: dat.endTime,
							date: dat.date,
							teacherName: dat.teacherName,
							subject: dat.subject,
							dateOfTest: dat.dateOfTest,
							department: dat.department,
							instructions: dat.instructions,
							status: status,
							colorCode: color
						}		
						array.push(obj);							
						changeStatus(obj);
						c=c+1;
						console.log(c);						
							}
							
							fetchpage(page, array, res);
						}					
					
				}
			}
		)
	}
})

var fetchpage = function (page, data, res) {
	console.log(data);
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

//assignment fetch for student (using sem & subject)
router.get('/semester/:sem/department/:dept/subject/:sub', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var queryStmt = `select * from assignment where semester = ${req.params.sem} && department = ${req.params.dept} && subject = ${req.params.dept} ORDER BY dateOfTest DESC`;
		con.query(queryStmt, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				if (!data[0]) {
					res.send(JSON.stringify({ msg: 'No Assignments Available' }));
				}
				else {
					var array = [];
					var status = '';
					var color = '';
					for (var dat of data) {
						var parts = dat.dateOfTest;
						parts.setHours(parts.getHours() + 5); 
						parts.setMinutes(parts.getMinutes() + 30);
						var yp = parts.getYear();
						var mp = parts.getMonth();
						var dp = parts.getDate();
						var yt = today.getYear();
						var mt = today.getMonth();
						var dt = today.getDate();
						if(yp<yt){
							status='Expired';
							color='#ff0000';
						}
						else
							{
								if(yp>yt)
								{
									status='New';
									color='#AAOO44';
								}
								else{
									if(mp<mt){
										status='Expired';
										color='#ff0000';
									}
									else{
										if(mp>mt){
											status='New';
											color='#AAOO44';
										}
										else{
											if(dp<dt){
												status='Expired';
												color='#ff0000';
											}
											else{
												if(dp>dt){
													status='New';
													color='#AAOO44';
												}
												else{
													status='Progress';
													color='#12d265';
												}
											}
										}
									}
								}
							}
						var obj = {
							assid: dat.assid,
							heading: dat.heading,
							teacherId: dat.teacherId,
							semester: dat.semester,
							startTime: dat.startTime,
							endTime: dat.endTime,
							date: dat.date,
							teacherName: dat.teacherName,
							subject: dat.subject,
							dateOfTest: dat.dateOfTest,
							department: dat.department,
							instructions: dat.instructions,
							status: status,
							colorCode: color
						}
						array.push(obj);
						changeStatus(obj);						
					}
					res.send(array);
				}
			}
		})
	}
})

//functio to change status
var changeStatus = function(obj){
	var stm = `UPDATE assignment SET status = '${obj.status}', colorCode = '${obj.colorCode}' where assid = ${obj.assid}`;
	con.query(stm, (err, result)=>{
		if (err) {
			console.log(err);			
			 }
		else{
			console.log('Update Successful');
		}

	})
}


//fetch assignment for teacher

router.get('/semester/:sem/teacher/:id', (req, res) => {
	var check = req.check;
	var tmpsem = req.params.sem;
		var sem = tmpsem.substring(0,1);
		var year = getYearFromSem(sem);
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var queryStmt = `select * from assignment where teacherId = ${req.params.id} && semester = ${sem} ORDER BY dateOfTest DESC;`;
		con.query(queryStmt, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				if (!data[0]) {
					res.send(JSON.stringify({ msg: 'No assignments Available' }));
				}
				else {
					var array = [];
					for (var dat of data) {
					var parts = dat.dateOfTest;
					parts.setHours(parts.getHours() + 5); 
					parts.setMinutes(parts.getMinutes() + 30);
					var yp = parts.getYear();
					var mp = parts.getMonth();
					var dp = parts.getDate();
					var yt = today.getYear();
					var mt = today.getMonth();
					var dt = today.getDate();
						if(yp<yt){
							status='Expired';
							color='#ff0000';
						}
						else
							{
								if(yp>yt)
								{
									status='New';
									color='#AAOO44';
								}
								else{
									if(mp<mt){
										status='Expired';
										color='#ff0000';
									}
									else{
										if(mp>mt){
											status='New';
											color='#AAOO44';
										}
										else{
											if(dp<dt){
												status='Expired';
												color='#ff0000';
											}
											else{
												if(dp>dt){
													status='New';
													color='#AAOO44';
												}
												else{
													status='Progress';
													color='#12d265';
												}
											}
										}
									}
								}
							}
						var obj = {
							assid: dat.assid,
							heading: dat.heading,
							teacherId: dat.teacherId,
							teacherName: dat.teacherName,
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
						changeStatus(obj);
					}
					res.send(array);
				}
			}
		})
	}
})

// Teacher fetch soln key with ques
router.get('/teacher/wans/id/:id', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var tableName = 'ass' + req.params.id;
		var queryStmt = `select * from ${tableName}`;
		var array = [];
		con.query(queryStmt, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				for (var ques of data) {
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

// student fetch ques during test
router.get('/student/ques/id/:id', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var tableName = 'ass' + req.params.id;
		var queryStmt = `select * from ${tableName}`;
		var array = [];
		con.query(queryStmt, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				for (var ques of data) {
					var obj = {
						ques: ques.ques,
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

var expired = false;
//fetching of ans when assignment is expired
router.get('/student/wans/id/:id/stid/:stid', (req, res) => {
	var id = req.params.id;
	var stid = req.params.stid;
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {		
			 		var stm = `select * from assSol${req.params.id} where studentId = ${stid};`;
			 		con.query(stm, (err, result)=>{
			 			if (err) console.log(err);
			 			else{
			 				if(result[0]){
			 						var tableName = 'ass' + req.params.id;
		var queryStmt = `select * from ${tableName}`;
		var array = [];
		con.query(queryStmt, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				for (var ques of data) {
					var obj = {
						ques: ques.ques,
						answer: ques.answer,
					}
					array.push(obj);
				}
				var obj1 = {
					status:"Submitted",
					ans:array
				}
				res.send(obj1);
			}
		})

			 				}
			 			}
			 		})
			 }
			})
// 			 	if (result[0].status == 'Expired'){
// 			console.log('w1');
// 			var tableName = 'ass' + req.params.id;

// 		var queryStmt = `select * from ${tableName}`;
// 		var array = [];
// 		con.query(queryStmt, (err, data) => {
// 			if (err) {
// 			console.log(err);
// 			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
// 			 }
// 			else {
// 				console.log("inside if");
// 				for (var ques of data) {
// 					var obj = {
// 						ques: ques.ques,
// 						answer: ques.answer,
// 						op1: ques.op1,
// 						op2: ques.op2,
// 						op3: ques.op3,
// 						op4: ques.op4
// 					}
// 					array.push(obj);
// 				}
// 				res.send(array);
// 			}
// 		})
// 	}}
		
// })



//student submission

router.post('/submit/student/:stid/assignID/:assid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var tableName = `assSol${req.params.assid}`;
		var assData = req.body;
		var resData = [`studentID:${req.params.stid}`];
		insert(tableName, assData, res);
		console.log("finding result");
		var solnstmt1 = `select answer from ass${req.params.assid};`;
		con.query(solnstmt1, (err, result) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				console.log("getting correct soln")
				var soln=[0];
				var rest = [];
				var i=1;
				for (data in assData)
				{
					soln.push(assData['ques'+i]);
					i++;
				}
					 
				for(i = 0; i<result.length; i++){
					rest.push(result[i].answer)
				}				
				var tableName = `assRes${req.params.assid}`;
				var arrTotal = 0;
				console.log("Calculation of marks begin");
				var obj = {
					studentID:req.params.stid}
				var i=0;
				for(i=0; i<result.length; i++)
				{	
				console.log("inside loop")			
					if(rest[i]==soln[i+1]){	
					obj['ques'+(i+1)] =1;
					arrTotal+=1;}
					else{
						obj['ques'+(i+1)] =0;	
					}
				}
				console.log(i);
				console.log(result.length)
				if(i==result.length){
					obj['total']=arrTotal;
					console.log("calculation finish")
				insert(tableName, obj, res);
				res.send(JSON.stringify({message:"Submission Successful"}));
				}
			}
		});
	}
});


//function to insert data into DB
var insert = function (tableName, assData, res) {
	con.query(`INSERT INTO ${tableName} SET ?`, assData, function (err, result) {
		if (err) {console.log(err);}
	});
}

//fetch soln for teacher
router.get('/assignment/teacher/:teachid/assid/:assid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var solnData = solnFetch(req.params.assid);	
	}
});

var solnFetch = function(assid)
{
	var solnstmt1 = `select answer from ass${assid};`;
con.query(solnstmt1, (err, result) => {
	if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
	else {
		res.send(result);		
	}
});
}

//Students Solution Page Wise
router.get('/studentsoln/assid/:assid/page/:page', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var page = req.params.page;
		var stsolstmt1 = `select * from assSol${req.params.assid};`;
		con.query(stsolstmt1, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				fetchpage(page, data, res);
			}
		})
	}
})

//Students Marks Page Wise

router.get('/studentres/assid/:assid/page/:page', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var page = req.params.page;
		var stresstmt1 = `select * from assRes${req.params.assid};`;
		con.query(stresstmt1, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
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
	for (var i = starting; i < ending; i++) {
		arr.push(data[i]);
	}
	res.send(arr);
}

//Teacher edit general details
router.post('/update/general/assid/:assid', (req, res)=> {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var assData = req.body;
		var stmt = `UPDATE assignment SET ? where assid = ${req.params.assid}`;
		con.query(stmt, assData, (err, result) => {
			if (err) console.log(err);
			else{
				res.send(JSON.stringify({"message":"Updation successful"}));
			}
		})
	}

})

//Teacher edit Questions details
router.post('/update/questions/assid/:assid', (req, res)=> {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var assData = req.body;
		var stmt = `UPDATE ass${req.params.assid} SET ? where assid = ${req.params.assid}`;
		con.query(stmt, assData, (err, result) => {
		if (err) console.log(err);
		else{
			res.send(JSON.stringify({"message":"Updation successful"}));
		}
		})
	}

})
var getYearFromSem = function(sem){
	if(sem==1 || sem==2) return 1;
	if(sem==3 || sem==4) return 2;
	if(sem==5 || sem==6) return 3;
	if(sem==7 || sem==8) return 4;
}

module.exports = router;
const express = require('express');
const sql = require('mysql');
var router = express.Router();
var con = sql.createConnection({
	host: "localhost",
	user: "root",
	password: "notdefined",
	database: "cbpgec"
});
con.connect(function (err) {
	if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			 else console.log("connected");
});
var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
	host: 'localhost',
	user: 'root',
	password: 'notdefined',
	database: 'cbpgec'
});

var dateUTC = new Date();
var dateUTC = dateUTC.getTime() 
var today = new Date(dateUTC);
today.setHours(today.getHours() + 5); 
today.setMinutes(today.getMinutes() + 30);
console.log(today);



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
				
	var stmt12=`select teacherName from teacher where teacherId = ${assData.teacherId};`;
	con.query(stmt12, (err, result) => {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			 else{
			 	teacherName = result[0].teacherName;
			 	console.log(teacherName);

		
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
	for (let ques = 0; ques < assData.ques.length; ques++) {
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
	for (i = 0; i < assData.ques.length; i++) {
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
router.get('/semester/:sem/department/:dept/page/:page', (req, res) => {
	console.log(req.params.id);
	console.log(req.params.sem);
	var page = req.params.page;
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var queryStmt = `select * from assignment where semester = ${req.params.sem} && department = '${req.params.dept}' ORDER BY dateOfTest DESC`;
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
					console.log(data.length);
					for (let dat of data) {
						var parts = dat.dateOfTest;
						parts.setHours(parts.getHours() + 5); 
						parts.setMinutes(parts.getMinutes() + 30);
						var yp = parts.getYear();
						var mp = parts.getMonth();
						var dp = parts.getDate();
						var yt = today.getYear();
						var mt = today.getMonth();
						var dt = today.getDate();
						console.log(yp,mp,dp);
						console.log(yt,mt,dt);
						
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
					fetchpage(page, array, res);
				}
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

//assignment fetch for student (using sem & subject)
router.get('/semester/:sem/department/:dept/subject/:sub', (req, res) => {
	console.log(req.params.id);
	console.log(req.params.sem);
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
					console.log(data.length);
					for (let dat of data) {
						var parts = dat.dateOfTest;
						parts.setHours(parts.getHours() + 5); 
						parts.setMinutes(parts.getMinutes() + 30);
						var yp = parts.getYear();
						var mp = parts.getMonth();
						var dp = parts.getDate();
						var yt = today.getYear();
						var mt = today.getMonth();
						var dt = today.getDate();
						console.log(yp,mp,dp);
						console.log(yt,mt,dt);
						
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
	console.log(req.params.id);
	console.log(req.params.sem);
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var queryStmt = `select * from assignment where teacherId = ${req.params.id} && semester = ${req.params.sem} ORDER BY dateOfTest DESC;`;
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
					console.log(data.length);
					for (let dat of data) {
						var parts = dat.dateOfTest;
						parts.setHours(parts.getHours() + 5); 
						parts.setMinutes(parts.getMinutes() + 30);
						var yp = parts.getYear();
						var mp = parts.getMonth();
						var dp = parts.getDate();
						var yt = today.getYear();
						var mt = today.getMonth();
						var dt = today.getDate();
						console.log(yp,mp,dp);
						console.log(yt,mt,dt);
						
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
							status: dat.status,
							colorCode: dat.colorCode
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
	console.log(req.params.id);
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

// student fetch ques during test
router.get('/student/ques/id/:id', (req, res) => {
	console.log(req.params.id);
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
				for (let ques of data) {
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
router.get('/student/wans/id/:id', (req, res) => {
	console.log(req.params.id);
	var id = req.params.id;
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var stm = `select status from assignment where assid = ${id};`;
	con.query(stm, (err, result)=>{
		if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			 else{
			 	if (result[0].status == 'Expired'){
			console.log('w1');
			var tableName = 'ass' + req.params.id;

		var queryStmt = `select * from ${tableName}`;
		var array = [];
		con.query(queryStmt, (err, data) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				console.log("inside if");
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
	}}
		
})
}
});



//student submission

router.post('/submit/student/:stid/assignID/:assid', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var tableName = `assSol${req.params.assid}`;
		var assData = req.body;
		var resData = [`studentID:${req.params.stid}`];
		insert(tableName, assData, res);
		var solnstmt1 = `select answer from ass${req.params.assid};`;
		con.query(solnstmt1, (err, result) => {
			if (err) {
			console.log(err);
			res.send(JSON.stringify({ msg: 'Insertion Unsuccessful' }));
			 }
			else {
				console.log(result)
				console.log(assData)
				var soln=[];
				var rest = [];
				for (data in assData)
					soln.push(assData[data]); 
				for(i = 0; i<result.length; i++){
					rest.push(result[i].answer)
				}				
				console.log(soln);
				
				console.log(rest);
				var tableName = `assRes${req.params.assid}`;
				var arrTotal = 0;
				var obj = {
					studentID:req.params.stid}
				var i=0;
				for(i=0; i<result.length; i++)
				{				
					console.log(i);
					console.log(rest[i]);
					console.log(soln[i+1])
					if(rest[i]==soln[i+1]){	
					obj['ques'+(i+1)] =1;
					arrTotal+=1;}
					else{
						obj['ques'+(i+1)] =0;	
						
					}
				}
				if(i==3){
					console.log(arrTotal)
					obj['total']=arrTotal;
				console.log(obj);
				insert(tableName, obj, res);
				res.send(JSON.stringify({message:"HI"}));
				}
			}
		});
	}
});


//function to insert data into DB
var insert = function (tableName, assData, res) {
	con.query(`INSERT INTO ${tableName} SET ?`, assData, function (err, result) {
		if (err) {console.log(err);}
			
		else {

		}
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
		var stsolstmt1 = `select * from asssol${req.params.assid};`;
		console.log(stsolstmt1);
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
		var stresstmt1 = `select * from assres${req.params.assid};`;
		console.log(stsolstmt1);
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
	console.log(`starting: ${starting}`);
	console.log(`ending: ${ending}`);
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
		var stmt = ``
	}

})


module.exports = router;
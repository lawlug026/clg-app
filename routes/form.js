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

var dateUTC = new Date();
var dateUTC = dateUTC.getTime() 
var today = new Date(dateUTC);
//date shifting for IST timezone (+5 hours and 30 minutes)
today.setHours(today.getHours() + 5); 
today.setMinutes(today.getMinutes() + 30);
console.log(today);

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////Routes/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Route to create a form & create a separate table in db
router.post('/create', (req, res) => {
	var arr = [];
	var tableList = [];
	var newData = req.body;
	var formTableData = {
		"Title":newData.Title,
		"Start_Date":newData.startDate,
		"End_Date":newData.endDate,
		}
	var a = newData.Year;
	var tmp;		
	for (year in a){
		formTableData['Year_'+a[year]]='1';
	}
	con.query("insert into forms SET ?", formTableData, (err, data)=> {
		if (err) {console.log(err);
			res.send(JSON.stringify({"message":"Problem in creation form"}));}
		else{
			console.log("form table has been updated");
				
		
		var stm = `show columns from log1`;
		con.query(stm, (err, data)=>{
			if (err) {
				console.log(err);
				res.send(JSON.stringify({ msg: 'Fetch Unsuccessful' }));
			}
			else{
				for(i=0; i<data.length; i++){
					arr.push(data[i].Field)
				}
				var b = newData.Column;
				var c = newData.ColumnType;
				a=newData.Year;
				for (year in a){
					var arr1=[];
					var arr2=[];
					var d = newData.Title+a[year];
					var ctstm = `create table ${d} AS (SELECT Enrollment_No, Department, Name, Semester from log${a[year]});`;
					for (col in b){
						
							arr1.push(b[col]);
							
					}
					
					con.query(ctstm, (err, data)=>{
						if (err){console.log(err)}
						else{
							console.log("table Created");
							}
					})
					for (each in arr1){				
						var f = b.indexOf(arr1[each]);	
						var e = c[f]+"(255)";
						addColumn(d, arr1[each], e, res)
					}
				}
				res.send(JSON.stringify({"message":"Table Has Been Successfully created"}));
			}
		})}
	});
	
})	

//show the columns of the form
router.get('/showform/table/:table', (req, res)=>{
	var table = `${req.params.table}1`;
	showForm(table, res);	
})
//update general form details
router.post('/updateformdetails/table/:table', (req, res)=>{
	var dataForm = req.body;
	var table = `forms`;
	var title = req.params.table;
	update(table, dataForm, 'Title', title, res );	
})

//Update the student details in the form
router.post('/updateform/table/:table/student/:stid', (req, res)=>{
	var dataForm = req.body;
	var stid = req.params.stid;
	var year = getYear(stid);
	var title = `${req.params.table}${year}`;
	update(title, dataForm, 'Enrollment_No', stid, res );	
})
//addition of the form
router.post('/update/form/:form', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var table = req.params.form;
		addColumn(`${table}1`, req.body.column, 'VARCHAR(255)', res);
		addColumn(`${table}2`, req.body.column, 'VARCHAR(255)', res);
		addColumn(`${table}3`, req.body.column, 'VARCHAR(255)', res);
		addColumn(`${table}4`, req.body.column, 'VARCHAR(255)', res);
		req.send(JSON.stringify({message: "Column Successfully added"}))
	}
})
//Update Password
router.post('/password/:id', (req, res)=> {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else{
		var id = req.params.id;
		var year = getYear(id);
		var table = `log${year}`; 
		var newPass = {Password : req.body.new}
		if(req.body.old==req.body.confirmOld){
			if (id.length<4){
				update('logindatat', newPass, 'Enrollment_No', id, res)
			}
			var stm = ` select * from ${table} where Enrollment_No = ${id};`;
			con.query(stm, (err, result)=> {
				if (err) console.log(err)
					else{
						if (!result[0]){
							if (year<4)
							{
								var yearL = year+1;
								console.log(yearL);
								var tableL = `log${yearL}`;
								update(tableL, newPass, 'Enrollment_No', id, res);
							}			
						}
						else{
								update(table, newPass, 'Enrollment_No', id, res);
						}
					}
			})
		}
		else{res.send(JSON.stringify({msg: 'Password does not match'}));}

	}

})
//route to delete the column of any form
router.delete('/update/form/delete/table/:table/column/:column', (req, res) => {
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var column = req.params.column;
		var table = req.params.table;
		deleteColumn(`${table}1`, column, res);
		deleteColumn(`${table}2`, column, res);
		deleteColumn(`${table}3`, column, res);
		deleteColumn(`${table}4`, column, res);
	}
})

//fetch List of forms created by admin
router.get('/fetchformlist', (req, res)=>{
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var stm = "select Title from forms";
		con.query(stm, (err, data)=>{
			if (err) console.log(err);
			else{
				var arr = [];
				for(i=0; i<data.length; i++){					
					arr.push(data[i].Title);
				}
				res.send(arr);		
			}
		})
	}

})
//All Students Fetch semester wise
router.get('/details/student/form/:form/sem/:sem/page/:page', (req, res)=>{
	var check = req.check;
	if (check) { res.send(JSON.stringify({ msg: 'Access Denied' })); }
	else {
		var tmpsem = req.params.sem;
		var sem = tmpsem.substring(0,1);
		var year = getYearFromSem(sem);
		var tabletmp = req.params.form;
		var table = `${tabletmp}${year}`;
		var page = req.params.page
		fetch(table, page, res);
	}
})

//Fetch Details student wise
router.get('/fetchform/table/:table/student/:stid', (req, res)=>{
	
	var stid = req.params.stid;
	var year = getYear(stid);

	
	var title = `${req.params.table}${year}`;
	
	var stm = `select * from ${title} where Enrollment_No = '${stid}'`;
	
	console.log(stm);	
	con.query(stm, (err, result)=>{
		if (err) console.log(err);
		else {
			if(!result[0]){
				if(year<4){
		var title1 = `${req.params.table}${year+1}`;
		var stm = `select * from ${title1} where Enrollment_No = '${stid}';`;
		con.query(stm, (err, result1)=>{
			if (err) console.log(err);
			else{
				if(!result1[0]){res.send(JSON.stringify({"messaege":"Student unavailable"}))}
					else{res.send(result1);}
			}
		})
	}
}
			else{console.log(result);
						res.send(result);}
		}
	})
})


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Global Functions///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
var fetch = function(table, page, res){
	var stm = `select * from ${table}, ;`;
	con.query(stm, (err, result) => {
		if (err) console.log(err);
		else{
			fetchpage(page, result, res);
		}
	})
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


var getYear = function(id){
	var year = id.substring(9,11);
	var curYear = today.getYear();
	var current = (curYear.toString()).substring(1,3);
	var yearc = current-year+1;
	return yearc;
}
//function to show columns
var showForm = function(table, res){
	var stm = `show columns from ${table}`;
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

}
//Function to add column
var addColumn = function(table, column, datatype, res){
	var stmt = `ALTER TABLE ${table} ADD ${column} ${datatype};`;
	con.query(stmt, (err, data) => {
		if (err) {console.log(err);}
	})
}

//Function to insert data into the Table
var insert = function (tableName, assData, res) {
	con.query(`INSERT INTO ${tableName} SET ?`, assData, function (err, result) {
		if (err) console.log(err);
	});
}

var update = function (tableName, assData, row, id, res) {
	con.query(`UPDATE ${tableName} SET ? where ${row} = '${id}';`, assData, (err, data) => {
		if (err) console.log(err);
		else {
			res.send(JSON.stringify({ msg: 'Update Successful' }));
		}
	})
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
var getYearFromSem = function(sem){
	if(sem==1 || sem==2) return 1;
	if(sem==3 || sem==4) return 2;
	if(sem==5 || sem==6) return 3;
	if(sem==7 || sem==8) return 4;
}
// var createTable = new function(){
// 	var stm = `create table ${table} AS (SELECT )`
// }

module.exports = router;
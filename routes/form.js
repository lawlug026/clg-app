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
	if (err) throw err;
	console.log("connected");
});

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
		if (err) console.log(err)
		else{
			console.log("form table has been updated");
		}
	});
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
				var ctstm = `create table ${d} AS (SELECT NULL`;
				for (col in b){
					if(arr.indexOf(b[col])>=0){
						arr2.push(b[col]);
						ctstm+= `, ${b[col]} `;
					}
					else{
						arr1.push(b[col]);
						}
				}
				ctstm+=` from log${a[year]});`;
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
	})	
})	
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Global Functions///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

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

// var createTable = new function(){
// 	var stm = `create table ${table} AS (SELECT )`
// }

module.exports = router;
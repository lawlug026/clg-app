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


var arr = [];
var tableList = [];

router.post('/create', (req, res) => {
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
			var temp = newData.Title+a[year];
			tableList.push(temp);
		}

		con.query("insert into forms SET ?", formTableData, (err, data)=> {
			if (err) console.log(err)
				else{
					console.log("form table has been updated");
				}
		})
		console.log(tableList);
		console.log(formTableData);
		var arr1 = [];
		var arr2 = [];
		
		var stm = `show columns from form1`;
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
				for (year in a){
					var d = newData.Title+a[year];

		var ctstm = `create table ${d} AS (SELECT NULL`;

				for (col in b){
					if(arr.includes(b[col])){
						
						arr2.push(b[col]);
						ctstm+= `, ${b[col]} `;
							}
					else{arr1.push(b[col]);
						}
				}

				ctstm+=`from form${a[year]});`
				console.log(ctstm);
				con.query(ctstm, (err, data)=>{
					if (err){console.log(err)}
						else{
							console.log("table Created");
						}
				})
				console.log(ctstm)
				console.log(arr1);
				for (each in arr1){
					console.log(c)
					console.log(b)
					console.log(arr1[each])
					var a = b.indexOf(arr1[each]);
					console.log(a);
					console.log(c[a])
					var e = c[a]+"(255)";
					addColumn(d, arr1[each], e, res)
				}
			}
			res.send(JSON.stringify({"message":"Table Has Been Successfully created"}));
		}
			})	

			})	

var addColumn = function(table, column, datatype, res){
	var stmt = `ALTER TABLE ${table} ADD ${column} ${datatype};`;
	con.query(stmt, (err, data) => {
		if (err) {console.log(err);}
		// res.send(JSON.stringify({"message":"Column Not Added Successfully"}));}
		else{
			//res.send(JSON.stringify({"message":"Column Added Successfully"}));
			
		}
	})
}




// var createTable = new function(){
// 	var stm = `create table ${table} AS (SELECT )`
// }

module.exports = router;
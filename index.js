//Importing the dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const sql = require('mysql');

const app = express();
//Initialising the basic token
const Basictoken = 'cbpgec-a24-u26-n20-p21';
// Creating connection to the database
var con = sql.createConnection({
	host:"localhost",
	user:"root",
	password:"notdefined",
	database:"cbpgec"
});

con.connect(function(err){
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

app.get('/test', function(req, res){
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
var Bearer = 12;

app.post('/login', function(req, res)
	{
		var a1 = req.query.id;
		var a2 = req.query.pass;
		var a3 = req.query.basic;
		if (a3 == Basictoken)
			{
				var stmt = "select * from logindata where roll = '"+a1+"';";
				con.query(stmt, function(err, result)
				{
					if (err) {res.send("Invalid User");}
					else 
					{
						console.log("Inside user checkig");
						if(!result[0]){res.send("Invalid User");}
						else
						{
							if (result[0].password == a2)
							{
							
								var stmt1 = "UPDATE logindata SET token = '"+ Bearer + "' WHERE roll = '" + a1 + "';";
								con.query(stmt1, function(err, result){
									if (err) throw err;
									else console.log("Updation successful");
								});
								res.send("Login Success with" + a1 + '' + a2+ "Bearer Token" + Bearer);
								Bearer+=1;
							}
							else {
								res.send("Wrong Credentials");
								}
						}

						
					}
				}
				)
				
			}
		else{
			res.send("Wrong Authentication");
		}

		
	});


app.post('/form', function(req, res){
	var bear = req.query.bearer;
	var stmt2 = "select * from logindata where token = '"+ bear+"';";
	con.query(stmt2, function(err, data){
		if (err) throw err;
		else
		{
			if(!data[0]){res.send("User not available");}
			else
			{
				console.log(data);
				res.send(data);
			}
		}
	})
});

var assData = 
	{
		'date':'12-10-2017',
		'heading':'abc',
		'ques':[
			
			{
				'qu1':"jhsdb",
				'op1':"12",
				'op2':"13",
				'opq':"321"
			},
			
			{
				'qu1':"jhsdb",
				'op1':"12",
				'op2':"13",
				'opq':"321"
			},
			
			{
				'qu1':"jhsdb",
				'op1':"12",
				'op2':"13",
				'opq':"321"
			},
			
			{
				'qu1':"jhsdb",
				'op1':"12",
				'op2':"13",
				'opq':"321"
			},
			],
			'ans':'q1'
	}



////////Assignment////////////////////

var MysqlJson = require('mysql-json');
  var mysqlJson = new MysqlJson({
    host:'localhost',
    user:'root',
    password:'notdefined',
    database:'cbpgec'
  });
var temp = 1;
var assID = 'ass';
app.post('/assignment', function(req, res, next){
	

	var bear = req.query.bear;
	var stmt2 = "select * from logindata where token = '"+ bear+"';";
	con.query(stmt2, function(err, data){
		if (err) throw err;
		else
		{
			if(!data[0]){res.send("Teacher not available Or session expired...Login Again");}
			else
			{
				console.log(data[0].roll+"submitted the assignment");
				

				mysqlJson.insert('assignment', {
				assid:assID,
			    date:assData.date,
			    heading:assData.heading,
			    ans:assData.ans				   
				  }, function(err, response) {
				  	console.log("checkpoint1");
				    if (err) throw err;
				    console.log(response);
				  });
					
					var stmt5 = 'create table ' + assID + ' (ques varchar(255), op1 char(20), op2 char(20));';
					console.log(stmt5);
					console.log("statmenet paasesed");
					con.query(stmt5, function(err, result){
						if (err) throw err;
						console.log("Table created");
						next();
					})

					
			}

			



		}

	})
}, function(){
						for(i=0; i<assData.ques.length;i++)
		{
						mysqlJson.insert(assID, {
				ques:assData.ques[i].qu1,
					    op1:assData.ques[i].op1,
					    op2:assData.ques[i].op2
					   
					  }, function(err, response) {
					    if (err) throw err;
					    console.log(response);
					  });
					}
					temp+=1;

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

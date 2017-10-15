const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const sql = require('mysql');

const app = express();

// var con = sql.createConnection({
// 	host:"localhost",
// 	user:"root",
// 	password:"notdefined",
// 	database:"practice"
// });

// con.connect(function(err){
// 	if (err) throw err;
// 	console.log("connected");
// 	});



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

app.post('/test2', function(req, res){
	var a1 = req.query.id;
	var a2 = req.query.pass;
	console.log(a1+a2);
	res.send('query success');
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

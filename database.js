var mysql = require('mysql');

//db configuration
var conn = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: '',      
  database: 'nodetest' 
}); 

//DB connection
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
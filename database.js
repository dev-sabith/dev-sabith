var mysql = require('mysql');

//db configuration
var conn = mysql.createConnection({
  host: 'bgsozicv6sti5rho0ks7-mysql.services.clever-cloud.com', 
  user: 'uowsrqku18tcg8qo',      
  password: '1zVFc3DnX5NMs6cFLL0D',      
  database: 'bgsozicv6sti5rho0ks7',
  port:3306
}); 

//DB connection
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
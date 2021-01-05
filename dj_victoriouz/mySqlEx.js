import { createConnection } from 'mysql';
 var connection = createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'em11evol',
   database : 'classicmodels'
 });

 connection.connect();

 connection.query('SELECT * from customers', function(err, rows, fields) {
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
 });

 connection.end();
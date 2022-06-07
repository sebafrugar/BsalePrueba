var mysql= require('mysql');

let data 
var connection = mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    database: "bsale_test",
    user: "bsale_test",
    password: "bsale_test"
});

connection.connect();

var get_next = function(next_id){
  var statement = 'SELECT * from product';
  

  connection.query(statement, function(err, rows, fields) {
    if (!err){
        data=rows;
      if(rows.length > 0){
        console.log("current: ", rows[0].id, rows[0].name);
        setTimeout(function(){
          get_next(rows[0].id)
        }, 10000);
      }else{
        console.log("no more new records!");
        connection.end();
      }
    }
    else
      console.log('Error while performing Query.');
  });  

  connection.on("error", function(err){
    console.log("an error occurred: ", err);
  });
}

setInterval(function () {
    connection.query('SELECT 1');
}, 4900);

get_next();

module.exports.conexion = () => {return connection}
module.exports.prueba1 = () => {return "hola"}

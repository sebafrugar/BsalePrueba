const connection2 = require("../server-alive");



module.exports.AllProducts = (req, res) => {
    var statement = 'SELECT * from product';
    console.log(connection2.prueba1())
  
    connection2.conexion().query(statement, function(err, rows, fields) {
      if (!err){
          data=rows;
        if(rows.length > 0){
          console.log("current: ", rows[0].id, rows[0].name);
          res.json({productos:rows})
        }else{
          console.log("no more new records!");
          connection.end();
        }
      }
      else
        console.log('Error while performing Query.');
    });  
  }
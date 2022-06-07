const ProductsControllers = require("../controllers/products.controllers")


module.exports = function(app){

    app.get("/api/prueba", ProductsControllers.AllProducts);

}

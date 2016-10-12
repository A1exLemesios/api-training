'use strict';
   // Include our "db"
   var db = require('../../config/db')();
   // Exports all the functions to perform on the db
   module.exports = { post}; // getAll, , getOne, update, delShoe

   function post(req, res , next) {
     const model = req.swagger.params.model.value;
     const size = req.swagger.params.size.value;
     res.json(model);
   }

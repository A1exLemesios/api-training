'use strict';
   // Include our "db"
   var db = require('../../config/db')();
   // Exports all the functions to perform on the db
   module.exports = {post, getOne, update, delShoe, getAll}; // , , getOne, ,

   function post(req, res , next) {
     const model = req.body.model.value;
     const size = req.body.size.value;
     console.log(req.swagger.params.shoe.value);
     res.json({success: 1, description: "Movie updated!"});
   }

   function getOne(req , res , next) {
     const id = req.swagger.params.id.value;
     console.log(req.swagger.params);
     const shoe = db.find(id);
     if(shoe) {
       res.json(shoe);
     }
     else {
       res.status(204).send();
     }
   }

   function update(req, res, next) {
     const id = req.swagger.params.id.value;
     const model = req.swagger.params.model.value;
     const size = req.swagger.params.size.value;
     res.json(model);
   }

function delShoe(req, res, next) {
  const id = req.swagger.params.id.value;
  res.json(id);
}

function getAll(req, res, next) {
  const id = req.swagger.params.id.value;
  console.log(req.swagger);
  res.json({success: 1, description: "Shoe found!"});
}

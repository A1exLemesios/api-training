'use strict';
   // Include our "db"
   const db = require("mysql");

   const pool  = db.createPool({
    connectionLimit : 10,
    host            : "127.0.0.1",
    user            : "root",
    password        : '',
    port            : 3306,
    database        : "shoe-store"
  });

   module.exports = {post, getOne, update, delShoe, getByBrand};

 function post(req, res , next) {
   const shoe = (req.swagger.params.shoe.value);
   pool.query('INSERT INTO shoe SET ?', shoe ,  function(err, rows, fields) {
     if (err) throw err;
     console.log(rows);
     res.json({success: 1, description: "Shoe inserted succesfully"});
   });
 }

 function getOne(req , res , next) {
   const id = req.swagger.params.id.value;
   pool.query('SELECT * FROM shoe WHERE idShoe = ?', id , function(err, rows, fields) {
     if (err) throw err;
     console.log(rows);
   });
   res.json({success: 1, description: "Shoe retrieved succesfully"});
 }

 function update(req, res, next) {
   const id = req.swagger.params.id.value;
   const shoe = req.swagger.params.shoe.value;
   pool.query('UPDATE shoe SET model = ?, size = ? WHERE idshoe = ?', [shoe.model, shoe.size, id], function(err, rows, fields) {
     if (err) throw err;
     console.log(rows);
     res.json({success: 1, description: "Shoe updated succesfully"});
   });
 }

function delShoe(req, res, next) {
  const id = req.swagger.params.id.value;
  pool.query(`DELETE FROM shoe WHERE idshoe = ?`, id, function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
  });
     res.json({success: 1, description: "Shoe deleted succesfully"});
}

function getByBrand(req, res, next) {
  const idBrand = req.swagger.params.idBrand.value;
  pool.query(`SELECT * FROM shoe WHERE idBrand = ?`, idBrand, function(err,rows,fields) {
    if (err) throw err;
    console.log(rows)
  });
  res.json({success: 1, description: rows});
}

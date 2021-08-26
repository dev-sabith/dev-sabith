var express = require('express');
var router = express.Router();
var db=require('../database');

// this script to fetch data from MySQL databse table
router.get('/category-list', (req, res)=>{
    var sql='SELECT * FROM main_category';
    db.query(sql, function (err, data) {
    if (err) throw err;
    console.log(data)
    res.render('category-list', { title: 'User List', userData: data});
  });
});
module.exports = router;

//api for selected item
router.get('/category/:catId', (req, res)=>{
  let catId =req.params.catId
    var sql=`SELECT * FROM main_category natural join sub_category natural join product where catId=`+catId;
    db.query(sql, function (err, data) {
    if (err) throw err;
    console.log(data)
    res.render('product-list', { title: 'User List', userData: data});
  });
});
module.exports = router;
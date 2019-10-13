var express = require('express');
var fs = require('fs')
var router = express.Router();
router.get('/shop',function(req,res){
    var vip = eval(fs.readFileSync('./datalist/gmdata.txt', 'utf8'))
    res.send(vip)
})
module.exports = router;
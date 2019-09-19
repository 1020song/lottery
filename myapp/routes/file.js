const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const router = express.Router()

router.use(multer({
    dest:'./public/images'
}).any())

router.get('/files',function(req,res){
    var file = req.files[0]
    console.log(req);
    
    var oldname = file.filename
    var newname = oldname+path.parse(file.originalname).ext
    fs.renameSync('./public/images/'+oldname,'./public/images/'+newname)
    res.send('ok')
    
})

module.exports = router
const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const router = express.Router()

router.use(multer({
    // dest:'../../lottery/public/images'
}).any())

router.get('/files',function(req,res){
    // var file = req.files[0]
    console.log(req);
    
    // var oldname = file.filename
    // var newname = oldname+path.parse(file.originalname).ext
    // fs.renameSync('../../lottery/public/images/'+oldname,'../../lottery/public/images/'+newname)
    res.send('ok')
    
})

module.exports = router
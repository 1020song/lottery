const express = require('express')
const multer = require('multer')
const fs = require('fs')
const router = express.Router()

<<<<<<< HEAD
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
    
=======
router.use(multer({dest:'./public/file/'}).any())


router.post('/files',(req,res)=>{
	var files = req.files[0]
	var oldname = files.filename
	var f = files.originalname
	var newname = oldname+'.'+f.split('.')[f.split('.').length-1]
	fs.renameSync('./public/file/'+oldname,'./public/file/'+newname)
	res.send(newname)
>>>>>>> 0987442557d26ca12a079cd87af1a7180cda2b3a
})







module.exports = router
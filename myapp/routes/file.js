const express = require('express')
const multer = require('multer')
const fs = require('fs')
const router = express.Router()
      
router.use(multer({dest:'./public/file/'}).any())
   

router.post('/files',(req,res)=>{
	var files = req.files[0]
	var oldname = files.filename
	var f = files.originalname
	var newname = oldname+'.'+f.split('.')[f.split('.').length-1]
	fs.renameSync('./public/file/'+oldname,'./public/file/'+newname)
	res.send(newname)
})







module.exports = router
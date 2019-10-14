var express = require('express');
var fs = require('fs')
var md5 = require('md5')
var router = express.Router();
router.get('/mo',function(req,res){
	var json = req.query
	if (json.user == '') {
		res.send({
			type: 'no',
			data: '参数缺失'
		})
	}else{
		var user_type = true
		var userlist
		var vip = eval(fs.readFileSync('./datalist/login.txt', 'utf8'))
		for (var i = 0; i < vip.length; i++) {
			if (vip[i].user == json.user) {
				user_type = false
				userlist=vip[i]
			}
		}
		if(user_type){
			res.send({
				type: 'no',
				data: '用户名不匹配'
			})
		}else{
			res.send({
				type: 'ok',
				data: userlist
			})
		}
	}
})
/*注册*/
router.post('/up', function (req, res) {
	var json = req.body
	console.log(json)
	if (json.user == '' || json.pass == ''|| json.img_url == ''||json.chong=='') {
		res.send({
			type: 'no',
			data: '参数缺失'
		})
	} else {
		console.log('ok')
		var user_type = true
		var vip = eval(fs.readFileSync('./datalist/login.txt', 'utf8'))
		for (var i = 0; i < vip.length; i++) {
			if (vip[i].user == json.user) {
				user_type = false
			}
		}
		if (user_type) {
			vip.push(json)
			json.pass=md5(json.pass)
			fs.writeFileSync('./datalist/login.txt', JSON.stringify(vip), 'utf8')
			var kkk = []
			fs.writeFileSync('./datalist/'+json.user+'dui.txt',JSON.stringify(kkk),'utf8')
			fs.writeFileSync('./datalist/'+json.user+'gou.txt',JSON.stringify(kkk),'utf8')
			res.send({
				type: 'yes',
				data: '注册成功'
			})
		} else {
			res.send({
				type: 'no',
				data: '用户名已存在'
			})
		}
	}

})
/*登录*/
router.post('/in', function(req, res) {
	var json = req.body
	res.cookie('user',json.user,{maxAge:1000*60*60*24*7})
	res.cookie('pass',json.pass,{maxAge:1000*60*60*24*7})
	console.log(json)
	if(json.user == '' || json.pass == '') {
		res.send({
			type: 'no',
			data: '参数缺失'
		})
	} else {
		json.pass = md5(json.pass)
		var data =''
		var img = ''
		var user_type = false
		var vip = eval(fs.readFileSync('./datalist/login.txt','utf8')) 
		for(var i = 0; i < vip.length; i++) {
			if(vip[i].user == json.user && vip[i].pass == json.pass) {
				user_type = true
				data = vip[i].user
				img = vip[i].img_url
				
			}
		}
		if(user_type) {

			res.send({
				type: 'yes',
				data: '登录成功',
				url:img,
				datas:data
			})

		} else {
			res.send({
				type: 'no',
				data: '账号密码不匹配'
			})
		}
	}

})
module.exports = router;

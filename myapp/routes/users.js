var express = require('express');
var fs = require('fs')
var md5 = require('md5')
var router = express.Router();

/*注册*/
router.post('/up', function (req, res) {
	var json = req.body
	console.log(req.body)
	if (json.user == '' || json.pass == '') {
		res.send({
			type: 'no',
			data: '参数缺失'
		})
	} else {
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
			res.send({
				type: 'yes',
				data: json
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
	if(json.user == '' || json.pass == '') {
		res.send({
			type: 'no',
			data: '参数缺失'
		})
	} else {
		json.pass = md5(json.pass)
		// var data =''
		var user_type = false
		var vip = eval(fs.readFileSync('./datalist/login.txt','utf8')) 
		for(var i = 0; i < vip.length; i++) {
			if(vip[i].user == json.user && vip[i].pass == json.pass) {
				user_type = true
				data = json.url
			}
		}
		if(user_type) {
			res.send({
				type: 'yes',
				data: json,
				// url:data
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

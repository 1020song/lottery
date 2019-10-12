var express = require('express');
var fs = require('fs')
var md5 = require('md5')
var router = express.Router();
router.get('/hqsj',(req,res)=>{
    // console.log('123')   
    var str=fs.readFileSync('./datalist/shangpin.txt','utf8')
    // console.log("str")
    res.send(str)
   
})
router.post('/buy',(req,res)=>{
    var json = req.body.params;//前台传来的数据
    console.log(json,'shangpin')
    var cook = req.cookies;//获取cookies
    cook.pass=md5(cook.pass)
    console.log(cook,'cookies')
    var arr = eval(fs.readFileSync('./datalist/login.txt', 'utf8'))//获取用户信息
    console.log(arr,'用户')
    var shangpin = eval(fs.readFileSync('./datalist/shangpin.txt', 'utf8'))//获取商品信息
    console.log(shangpin,'商品')
    if (json.shang == '') {
    	res.send('页面发生错误')
    }else{
    	var yhxx = '';
    	var sp = '';
    	var types = false;
    	var ty = false;
    	for(var i = 0;i<arr.length;i++){
	    	if(arr[i].user == cook.user && arr[i].pass == cook.pass){
	    		// console.log('用户已找到')
	    		yhxx = arr[i]
	    		types = true
	    		// mima = arr[i].pass
	    	}
	    }
	    if(types == false){
	    	res.send('用户名密码不匹配')
	    }
	   	for(var j=0;j<shangpin.length;j++){
    		if(Number(shangpin[j].id)==json.shang){
    			sp = shangpin[j]
    			ty = true
    			// console.log('可以购买1')
    		}
    	}
    	if(ty == false){
    		res.send('该商品已不存在')
    	}
    	if(Number(yhxx.point)>=Number(sp.score)){
    		var sss = true
    		var aa = ''
    		var num = Number(yhxx.point)-Number(sp.score)
    		yhxx.point = num
    		console.log(yhxx,787878)
    		console.log(num,45465465)
    		// fs.writeFileSync('./datalist/login.txt',JSON.stringify(yhxx),'utf8')
    		// var vip = eval(fs.readFileSync('./datalist/login.txt', 'utf8'))
    		// console.log(vip,1231123)
    		// for(var s=0;s<arr.length;s++){
    		// 	if(yhxx.user == arr[s].user && yhxx==arr[s].pass){
    		// 		arr[s].point = num;
    		// 		console.log(arr[s],'147')

    		// 	}
    		// }
    		// for(var z=0;z<vip.length;z++){
    		// 
    			
    		// }
    		
    		
    		console.log('可以购买')

    	}else{
    		res.send('积分不足')
    	}
   		console.log(yhxx,sp)

    	res.send('no')
    }
    
    
})
module.exports = router;
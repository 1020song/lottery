var express = require('express');
var fs = require('fs')
var md5 = require('md5')
var router = express.Router();
router.get('/qqbuy',(req,res)=>{
    var str=fs.readFileSync('./datalist/gmdata.txt','utf8')
    console.log(123)
    res.send(str)
})
router.post('/jsbuy',(req,res)=>{
    var json = req.body.params;//前台传来的数据
    console.log(json)
    var cook = req.cookies;//获取前台cookies
    cook.pass=md5(cook.pass)
    // console.log(cook,'cookies')
    var arr = eval(fs.readFileSync('./datalist/login.txt', 'utf8'))//获取用户信息
    // console.log(arr,'用户')
    var shangpin = eval(fs.readFileSync('./datalist/gmdata.txt', 'utf8'))//获取商品信息
    // console.log(shangpin,'商品')
    if (json.shang == '') {//判断前台的传过来的数据
    	res.send('页面发生错误')
    }else{
    	var yhxx = '';
    	var sp = '';
    	var types = false;
    	var ty = false;
    	for(var i = 0;i<arr.length;i++){//循环数据♂
	    	if(arr[i].user == cook.user && arr[i].pass == cook.pass){//获取当前用户信息
	    		yhxx = arr[i]//得到当前用户数据
	    		types = true
	    	}
	    }
	    if(types == false){//判单是否登录
	    	res.send('用户名密码不匹配')
	    }
	   	for(var j=0;j<shangpin.length;j++){//循环商品
    		if(Number(shangpin[j].goodsid)==json.shang){//判断购买的那件商品
    			sp = shangpin[j]//得到当前商品信息
    			ty = true
            }
    	}
    	if(ty == false){//判断商品是否存在
    		res.send('该商品已不存在')
    	}
    	if(Number(yhxx.chong)>=Number(sp.money)){//判断积分
    		var num = Number(yhxx.chong)-Number(sp.money)//得到的剩余金币
            yhxx.chong = num//赋值
            if(Number(yhxx.monijin)>0){
                var integral = Number(yhxx.monijin) + (Number(sp.money) * 10)
                yhxx.monijin = integral  
            }else{
                yhxx.monijin = Number(sp.money) * 10
            }
    		for(var s=0;s<arr.length;s++){//获取当前用户信息
    			if(yhxx.user == arr[s].user && yhxx.pass==arr[s].pass){//判断账户
    				arr[s].point = num;//赋值
                    fs.writeFileSync('./datalist/login.txt',JSON.stringify(arr),'utf8')//购买完成的修改
    			}
    		}
            var lsjl = eval(fs.readFileSync('./datalist/'+yhxx.user+'gou.txt','utf8'))//获取历史记录
            var myDate = new Date();  //时间
            myDate.getYear(); //获取当前年份(2位)  
            myDate.getFullYear(); //获取完整的年份(4位,1970-????)  
            myDate.getMonth(); //获取当前月份(0-11,0代表1月)         // 所以获取当前月份是myDate.getMonth()+1;   
            myDate.getDate(); //获取当前日(1-31)  
            myDate.getDay(); //获取当前星期X(0-6,0代表星期天)  
            myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)  
            myDate.getHours(); //获取当前小时数(0-23)  
            myDate.getMinutes(); //获取当前分钟数(0-59)  
            myDate.getSeconds(); //获取当前秒数(0-59)  
            myDate.getMilliseconds(); //获取当前毫秒数(0-999)  
            myDate.toLocaleDateString(); //获取当前日期  
            var mytime=myDate.toLocaleTimeString(); //获取当前时间  
            myDate.toLocaleString( ); //获取日期与时间 
            lsjl.push({
                user:yhxx.user,
                pass:yhxx.pass,
                chong:yhxx.chong,
                img_url:yhxx.img_url,
                point:yhxx.point,
                monijin:yhxx.monijin,
                img:sp.imgurl,
                goods:sp.title,
                score:sp.money,
                id:sp.goodsid,
                sj:myDate.toLocaleString(),
            })
            fs.writeFileSync('./datalist/'+yhxx.user+'gou.txt',JSON.stringify(lsjl),'utf8')//更改历史记录
            res.send('购买成功')

    	}else{
    		res.send('金币不足')
    	}
    }
    
    
})
module.exports = router;
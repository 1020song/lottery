var express = require('express');
var fs = require('fs')
var md5 = require('md5')
var router = express.Router();
//获取积分信息
router.get('/hqsj',(req,res)=>{
    var str=fs.readFileSync('./datalist/shangpin.txt','utf8')
    res.send(str)
   
})
// 积分计算
router.post('/buy',(req,res)=>{
    var json = req.body.params;//前台传来的数据
    var cook = req.cookies;//获取前台cookies
    cook.pass=md5(cook.pass)
    var arr = eval(fs.readFileSync('./datalist/login.txt', 'utf8'))//获取用户信息
    var shangpin = eval(fs.readFileSync('./datalist/shangpin.txt', 'utf8'))//获取商品信息
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
	    }else{
            for(var j=0;j<shangpin.length;j++){//循环商品
                if(Number(shangpin[j].id)==json.shang){//判断购买的那件商品
                    sp = shangpin[j]//得到当前商品信息
                    ty = true
                }
            }
            if(ty == false){//判断商品是否存在
                res.send('该商品已不存在')
            }else{
                if(Number(yhxx.point)>=Number(sp.score)){//判断积分
                    var num = Number(yhxx.point)-Number(sp.score)//得到的剩余积分
                    yhxx.point = num//赋值
                    for(var s=0;s<arr.length;s++){//获取当前用户信息
                        if(yhxx.user == arr[s].user && yhxx.pass==arr[s].pass){//判断账户
                            arr[s].point = num;//赋值
                            fs.writeFileSync('./datalist/login.txt',JSON.stringify(arr),'utf8')//购买完成的修改
                        }
                    }
                    var lsjl = eval(fs.readFileSync('./datalist/'+yhxx.user+'dui.txt','utf8'))//获取历史记录
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
                    console.log(mytime,789)
                    lsjl.push({
                        user:yhxx.user,
                        pass:yhxx.pass,
                        chong:yhxx.chong,
                        img_url:yhxx.img_url,
                        point:yhxx.point,
                        monijin:yhxx.monijin,
                        img:sp.img,
                        goods:sp.goods,
                        score:sp.score,
                        market:sp.market,
                        id:sp.id,
                        sj:myDate.toLocaleString()
                    })
                    fs.writeFileSync('./datalist/'+yhxx.user+'dui.txt',JSON.stringify(lsjl),'utf8')//更改历史记录
                    res.send('购买成功')
                
                }else{
                    res.send('积分不足')
                }
            }
        }
    }
    
    
})

//中奖
router.post('/zj',(req,res)=>{
    var list=req.body
    var yhxx = ''
    var arr = eval(fs.readFileSync('./datalist/login.txt', 'utf8'))//获取用户信息
    var cook = req.cookies;//获取前台cookies
    cook.pass=md5(cook.pass)
    for(var i = 0;i<arr.length;i++){//循环数据♂
        if(arr[i].user == cook.user && arr[i].pass == cook.pass){//获取当前用户信息
            yhxx = arr[i]//得到当前用户数据
            types = true
        }
    }
    if(types){
        var kuai=eval(fs.readFileSync('./datalist/kuaisan.txt', 'utf8'))//获取用户信息
        var newcai=kuai.pop()
        var zjh=newcai.prizeNum.split(',')
        var sum=0
        var mytype=false
        for(var i=0;i<zjh.length;i++){
            sum+=Number(zjh[i])
        }
        list.forEach((item)=>{
            item.arr.forEach((itm)=>{
                console.log(itm,333)
                if(itm==sum){
                    mytype=true
                }
            })
        })
        if(mytype){
            res.send('恭喜！中彩')
        }else{
            res.send('没中')
        }
        
    }else{
        res.send('用户名密码不匹配')
    }
   
})
module.exports = router;



var express = require('express');
var router = express.Router();
var cheerio = require('cheerio')
var https = require('https')
var fs = require('fs')

/* GET home page. */
var h = 'https://kuai3.cjcp.com.cn/beijing/'
function run() {
	https.get(h, function (res) {
		let html = "";
		res.on("data", function (data) {
			html += data;
		});
		res.on("end", function () {
			var $ = cheerio.load(html)
			x_dom($)
		})
	});
}
var json = eval(fs.readFileSync('./datalist/kuaisan.txt','utf8'))
function x_dom($) {
	var arr=[]
	for(var i=0;i<$('#kjinfos1 tr').length;i++){
		let qi = {}
		if($('#kjinfos1 tr').eq(i).find('td').eq(8).text()=='-') break;	
		qi.qishu=$('#kjinfos1 tr').eq(i).find('td').eq(0).text()
		qi.time=$('#kjinfos1 tr').eq(i).find('td').eq(1).text()
		qi.prizeNum=$('#kjinfos1 tr').eq(i).find('td').eq(2).text()
		qi.sum=$('#kjinfos1 tr').eq(i).find('td').eq(3).text()
		qi.santh=$('#kjinfos1 tr').eq(i).find('td').eq(4).text()
		qi.erth=$('#kjinfos1 tr').eq(i).find('td').eq(5).text()
		qi.sanbt=$('#kjinfos1 tr').eq(i).find('td').eq(6).text()
		qi.erbt=$('#kjinfos1 tr').eq(i).find('td').eq(7).text()
		qi.sanlh=$('#kjinfos1 tr').eq(i).find('td').eq(8).text()
		arr.push(qi)
		fs.writeFileSync('./datalist/kuaisan.txt',JSON.stringify(arr),'utf8')
		console.log(json)
	}
}
run()


module.exports = router;

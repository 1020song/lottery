<template>
	<div class="content">
		<div class="banner">
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544695339701&di=e614a2ae7b5d3fd39738839e46e534ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8415a77c3a4a80120a12372925c.jpg%402o.jpg" alt="">
			<div class="user">
				<p>恭喜用户123****321，购买32个烟斗，获赠999模拟金</p>
			</div>
		</div>
		<div class="clearfix exchange">
			<!-- <div class="exchange fl" v-for="(i,$index) in exchange" :class="index==$index?'active':''" @click="add($index)">
				{{i}}
			</div> -->
			<a href="#" @click="tabId=0" >兑换区</a>
     		<a href="#" @click="tabId=1" >购物区</a>
			<div :style='{"left":tabId*50+"%","transition":"all 0.5s"}'></div>
		</div>
		<div class='outNode'>
			<div :style='{"width":"200%","position":"absolute","top":"0","left":-tabId*100+"%","transition":"all 0.5s"}'>
				<div class="item1 clearfix">
					<div class="list1" v-for="(item,index) in data" :key="index" @click="gm(item)">
						<div>
							<!-- {{item.img}} -->
							<img :src=item.img alt="">
						</div>
						
						<p>{{item.goods}}}</p>
						<p>积分：{{item.score}}</p>
						<p>市场参考价：{{item.market}}</p>
					</div>
				</div>
				<div class="item1 clearfix">
					<div class="list1" v-for="(i,index) in shoplist" :key="index" @click="gmbuy(i)">
						<div>
							<img :src="i.imgurl" alt="">
						</div>
						<p>{{i.title}}({{i.info}})</p>
						<p>{{i.money}}</p>
						<p>市场参考价：9999.00</p>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
export default {
  name: 'Integral',
  data(){
  	return{
		  tabId:0,
		  data:'',
		  shoplist:'',
		  buydata:'',
  	}
  },
  created () {
	this.qqsj()
	this.qqbuy()
	this.$axios.get('/goods/shop').then((data)=>{
		//   console.log(data.data);
		  this.shoplist = data.data
	  })
  },
  methods: {
	qqsj(){
		 this.$axios.get('/duihuan/hqsj',{//获取数据
			
		 }).then((res)=>{
			//  console.log(res)
			this.data = res.data
			console.log(this.data)
		 }).catch((err)=>{
			 console.log(err)
		 })
	  },
	gm(e){
		console.log(e)
		this.$axios.post('/duihuan/buy',{//购买
			params:{
				shang:e.id
			}
		}).then((res)=>{
			console.log(res)
			alert(res.data)
		}).catch((err)=>{
			console.log(err)
		})
	},
	gmbuy(e){
		console.log(e)
		this.$axios.post('/gmbuy/jsbuy',{//购买
			params:{
				shang:e.goodsid
			}
		}).then((res)=>{
			console.log(res)
			alert(res.data)
		}).catch((err)=>{
			console.log(err)
		})
	},
	qqbuy(){
		 this.$axios.get('/gmbuy/qqbuy',{//获取数据
			
		 }).then((res)=>{
			this.buydata = res.data
			console.log(this.buydata)
		 }).catch((err)=>{
			 console.log(err)
		 })
	  },
	
  }	 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	*{
		margin: 0;padding: 0;list-style: none;
	}
	body,html{
		background-color: #ccc;
	}
	.item1 div{
		width: 50%;
		height: auto;
		float: left;
		padding:.1rem 0.5rem;
		box-sizing: border-box;
		font-size: 0.3rem;
		color: darkgreen;
	}
	.item1{
		width: 50%;
		float: left;
	}
	.list1 div{
		width: 4rem;
		height: 4rem;
	}
	.list2 div{
		width: 4rem;
		height: 4rem;
	}
	.list1 img{
		width: 3rem;
		height: 3.5rem;
	}
	.list2 img{
		width: 3rem;
		height: 2rem;
		margin: 0.8rem 0;
	}
	.clearfix:before,.clearfix:after{
		content: '';
		display: table;
	}
	.clearfix:after{
		clear:both;
	}
	.fl{
		float: left;
	}
	.exchange{
		position: relative;
		background: rgba(0,0,0,.1)
	}
	.exchange a{
		text-decoration: none;
		color: black;
		display: inline-block;
		width: 50%;
		height: 1.5rem;
		line-height: 1.5rem;
		opacity: .7;
		font-size: 0.3rem;
		box-sizing: border-box;
		text-align: center;
	}
	.exchange div{
		width: 50%;
		height: 1.5rem;
		line-height: 1.5rem;
		box-sizing: border-box;
		border-bottom: 2px solid red;
		position: absolute;
		left: 0;
		top: 0;
		/* z-index: -1; */
	}
	.exchange .active{
		border-bottom: 2px solid red;
	}
	.banner{
		width: 10rem;
		height: 3rem;
		position: relative;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	.user{
		width: 100%;
		position: absolute;
		bottom: 0;left: 0;
		color:red;
		line-height: 0.6rem;
		background-color: rgba(0,0,0,.5);
		text-align: left;
	}
	.user p{
		text-indent: 0.1rem;
		font-size: 0.2rem;
	}
	.outNode{
		overflow: hidden;
		min-height: 13rem;
		position: relative;
	}

	.outNode p{
		line-height: 0.5rem;
	}
</style>

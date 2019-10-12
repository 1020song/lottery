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
							<!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077945538&di=003d3de1479ae95ab6131ca11d042c4a&imgtype=0&src=http%3A%2F%2Fa.vpimg3.com%2Fupload%2Fmerchandise%2Fpdcvis%2F146767%2F2017%2F1104%2F115%2F88257c95-7205-4390-8eab-635fc8384069_t.jpg" alt=""> -->
						</div>
						
						<p>{{item.goods}}}</p>
						<p>积分：{{item.score}}</p>
						<p>市场参考价：{{item.market}}</p>
					</div>
					<!-- <div class="list2">
						<div>
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077790483&di=716de166c55fe352462ca970809e926f&imgtype=0&src=http%3A%2F%2Fi1.hexunimg.cn%2F2016-03-15%2F182772684.jpg" alt="">
						</div>
						<p>花费充值卡</p>
						<p>积分：100.00</p>
						<p>市场参考价：9999.00</p>
					</div> -->
				</div>
				<div class="item1 clearfix">
					<div class="list1">
						<div>
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg" alt="">
						</div>
						<p>烟斗(小号)</p>
						<p>积分：9999</p>
						<p>市场参考价：9999.00</p>
					</div>
					<div class="list1">
						<div>
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg" alt="">
						</div>
						<p>烟斗(中号)</p>
						<p>积分：9999</p>
						<p>市场参考价：9999.00</p>
					</div>
					<div class="list1">
						<div>
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg" alt="">
						</div>
						<p>烟斗(大号)</p>
						<p>积分：9999</p>
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
  	}
  },
  created () {
	this.qqsj()
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
		}).catch((err)=>{
			console.log(err)
		})
	}
	
  }
//   components: {
	
//   }
 
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
		min-height: 15.03125rem ;
		position: relative;
	}

	.outNode p{
		line-height: 0.5rem;
	}
</style>

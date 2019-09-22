<template>
	<div>
		<div class="head">
			<!-- 头部时间 -->
			<div class="tit">
				<div class="opencode">
					<dl>
						<dt>上期开奖</dt>
						<dd>136</dd>
					</dl>
				</div>
				<div class="opentime">
					<dl>
						<dt>距01期截止</dt>
						<dd><span>{{minute}}</span> : <span>{{second}}</span></dd>
					</dl>
				</div>
			</div>
			<!-- tab切换 -->
			<div class="tab">
				<div @click="Is=true" :class="{avtive:Is}"><router-link :to="{name:'selects'}">选号</router-link></div>
				<div @click="Is=false"  :class="{avtive:!Is}"><router-link :to="{name:'trend'}">走势图</router-link></div>
			</div>
		</div>
		<!-- contain -->
			<keep-alive><router-view></router-view></keep-alive>
		<!-- footer -->
		<div class="footer">
			<div class="l_box">
				<span style="color:white" >共{{$store.state.order.zhu}}注</span>
				<span style="color:orange">{{$store.state.order.jin}}模拟金</span>
			</div>
			<div class="r_box">
				<span style="color:white;font-size:.3rem">确定</span>
			</div>
		</div>
	</div>
</template>
<style scoped>
.contain{
	box-sizing: border-box;
	position: fixed;
	height: 100%;
	width: 100%;
	background: #297a62;
}
	.tab-enter-active{
		transition: opacity 1.5s;
		transform: translateX(0);
		opacity: 1;
	}
	.tab-enter{
		opacity: 1;
		transform: translateX(0 /* 200/64 */)
	}
	.tab-leave-active{
		transition: opacity 1.5s;
		opacity: 0;
		transform: translateX(-10rem /* 200/64 */)
	}
	.tab-leave{
		opacity: 0;
		transform: translateX(-10rem /* 200/64 */)
	}
	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		text-align: center;
		line-height: 1rem /* 30/64 */
	}
	.footer .l_box{
		background: rgba(0,0,0,.87);
		width: 70%;
		font-size: .3rem
	}
	.footer .r_box{
		width: 30%;
		background: rgb(204, 35, 35);
	}
	.tab .avtive{
		border-bottom: .05rem /* 1/64 */ solid orange;
		
	}
	.tab>div a{
		color: orange;
		display: block;
	}
	.tab{
		display: flex;
		background: #48b892;
	}
	.tab>div{
		flex: 1;
		line-height: .625rem /* 40/64 */;
		text-align: center;
	}
	.tit{
		height: 1.375rem /* 88/64 */;
		background: #08533c;
		border-top: .05rem solid #004832;
		border-bottom: .05rem solid #004832;
		display: flex;

	}
	.tit dl dt{
		margin-top: .18625rem /* 10/64 */;
		font-size: .3125rem /* 20/64 */;
		margin-bottom: .15625rem /* 10/64 */
	}
	.tit dl dd{
		font-size: .46875rem /* 30/64 */
	}
	.tit dl{
		display: inline-block;
		width: 50%;
		height: 100%;
		line-height: 1.2;
		color: white;
	}
	.tit>div:nth-of-type(1){
		border-right: .01rem solid gainsboro
	}
	.tit>div{
		flex: 1;
		text-align: center;
	}
</style>
<script>
export default {
	data() {
		return {
			Is:true,
			minute:10,
			second:'00',
			tid:''
		}
	},
	created() {
		var str = 60
		this.tid=setInterval(()=>{
			str--
			this.$nextTick(()=>{
				if(this.second=='00'){
					this.minute--
					str=59
					if(this.minute==0) this.minute=10
				}
				this.second=add(str)
			})
		},1000)
		function add(str){
			return str < 10 ? '0'+str:str
		}
	},
	beforeDestroy() {
		clearInterval(this.tid)
	},
}
</script>
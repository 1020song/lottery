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
		<transition name="add" v-if="Is">
			<keep-alive><router-view></router-view></keep-alive>
		</transition>
		<transition name="del" v-else>
			<keep-alive><router-view></router-view></keep-alive>
		</transition>
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
/* contain 动画效果 */
.router-link-active{
	color: orange
}
.add-leave{
	opacity: 1;
}
/* 离开时的状态 */
.add-leave-active{
	transition: all 1s;
}
/* 离开后 */
.add-leave-to{
transform: translateX(-100%);
}

/* 进入时 */
.add-enter{
transform: translateX(100%);
}
/* 进入时的状态 */
.add-enter-active{
	transition: all 1s;
}
/* 进入后 */
.add-enter-to{
	transform: translateX(0);
}

.del-leave{
	opacity: 1;
}
.del-leave-active{
	transition: all 1s;
}
.del-leave-to{
	transform: translateX(100%);
}


.del-enter{
	transform: translateX(-100%);
}
.del-enter-active{
	transition: all 1s;
}
.del-enter-to{
	transform: translateX(0);
}
.contain{
	box-sizing: border-box;
	position: fixed;
	height: 100%;
	width: 100%;
	background: #077552;
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
	.tab .avtive a{
		color: #ffab00 !important;
	}
	.tab>div a{
		color: #ffc107;
		display: block;
		
	}
	.tab{
		display: flex;
		background: #169967;
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
					str=59
					if(this.minute==0) this.minute=10
					this.minute--
					
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
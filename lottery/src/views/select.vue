<template>
	<div class="contain">
		<!-- 类型选择 -->
		<div class="type-tit">
			<div class="btn" @click="typebtns=!typebtns">
				玩法:{{types}} >
				<!-- 下拉 -->
				<ul class="selects" v-show="typebtns">
					<li v-for="(i,$index) in type_btns" @click="types=i" :key="$index">{{i}}</li>
				</ul>
			</div>
			<!-- 说明按钮 -->
			<div class="info_btn"><router-link to="/help">?</router-link></div>
		</div>
		<!-- 和值 -->
		<div style="padding:.1rem;text-align: center;" v-if="types==type_btns[0]">
			<p style="text-align:left;color:white;margin-bottom:.2rem"><span class="sj"> {{types}}</span>猜开奖号码相加的和</p>
			<div>
				<div class="btns" v-for="(i,$index) in btn.H_num[0]" @click="btns($event)" :key="$index +new Date">
					<md-button>
						<dl>
						<dt>{{i}}</dt>
						<dd style="font-size:.2rem">奖励{{btn.H_num[1][$index]}}积分</dd>
						</dl>
					</md-button>
				</div>
			</div>
		</div>
		<!-- 三同号 -->
		<div style="text-align: center;padding:.1rem" v-else-if="types==type_btns[1]">
			<p style="text-align:left;color:white;margin-bottom:.2rem"><span class="sj"> {{types}}</span>猜中豹子号(三个相同号)</p>
			<div>
				<div class="btns" v-for="(i,$index) in btn.threeT_num[0]" @click="btns($event)" :key="$index +new Date">
					<md-button>
						<dl>
							<dt>{{i}}</dt>
							<dd style="font-size:.2rem">奖励240积分</dd>
						</dl>
					</md-button>
				</div>
			</div>
			<p style="text-align:left;color:white;margin-bottom:.2rem"><span class="sj"> {{types}}</span>猜中豹子号(三个相同号)</p>
			<div class="btns" style="width:100%" :key="'1' + new Date"  @click="btns($event)">
				<md-button>
				<dl style="width:auto;text-align:center">
					<dt>三同号通选</dt>
					<dd>任意一个豹子号开出即中40积分</dd>
				</dl>
				</md-button>
			</div>
		</div>
		<!-- 二同号 -->
		<div style="text-align: center;padding:.1rem" v-else-if="types==type_btns[2]">
			<p style="text-align:left;color:white;margin-bottom:.2rem"><span class="sj"> {{types}}</span>选择同号和不同号的组合,奖励80积分</p>
			<div>
				<div class="T">
					<p style="color:#93b3a9">同号</p>
					<div class="btns" v-for="(i,$index) in btn.twoT_num[0]" :key="$index + new Date" @click="btns($event,$index)">
						<md-button>
							<dl>
								<dt style="line-height:.6rem;">{{i}}</dt>
							</dl>
						</md-button>
					</div>
				</div>
				<div class="B">
					<p style="color:#93b3a9">不同号</p>
					<div class="btns" v-for="(i,$index) in btn.twoT_num[1]" :key="$index + new Date" @click="btns($event,$index)">
						<md-button>
							<dl>
								<dt style="line-height:.6rem;">{{i}}</dt>
							</dl>
						</md-button>
					</div>
				</div>
				<p style="text-align:left;color:white;margin-bottom:.2rem"><span class="sj"> {{types}}</span>猜开奖中的2个指定的相同号码，奖励15积分</p>
				<div class="btns" v-for="(i,index) in btn.twoT_num[2]" :key="index +new Date" @click="btns($event)">
					<md-button>
						<dl>
							<dt style="line-height:.6rem;">{{i}}</dt>
						</dl>
					</md-button>
				</div>
			</div>
			
		</div>
		<!-- 三不同 -->
		<div style="text-align: center;padding:.1rem" v-else-if="types==type_btns[3]">
			<p style="text-align:left;color:white;margin-bottom:.2rem"><span class="sj"> {{types}}</span>猜开奖的三个不同号码，奖励40积分</p>
			<div>
				<div class="btns" v-for="(i,$index) in btn.threeB_num" :key="$index +new Date" @click="btns($event)">
					<md-button>
						<dl>
							<dt style="line-height:.6rem">{{i}}</dt>
						</dl>
					</md-button>
				</div>
			</div>
			<p style="text-align:left;color:white;margin-bottom:.2rem"><span class="sj"> {{types}}</span>123,234,345,456，任一开出即中10积分</p>
			<div class="btns" style="width:100%" :key="'1'+ new Date" @click="btns($event)">
				<md-button>
				<dl style="width:auto;text-align:center">
					<dt style="line-height:.6rem">三连号通过</dt>
				</dl>
				</md-button>
			</div>
		</div>
		<!-- 二不同 -->
		<div style="text-align: center;padding:.1rem" v-else-if="types==type_btns[4]">
			<p style="text-align:left;color:white;margin-bottom:.2rem"><span class="sj"> {{types}}</span>猜开奖中的2个指定的不同号码，奖励8积分</p>
			<div>
				<div class="btns" v-for="(i,$index) in btn.twoB_num" :key="$index + new Date" @click="btns($event)">
					<md-button>
						<dl>
							<dt style="line-height:.6rem">{{i}}</dt>
						</dl>
					</md-button>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	.md-button{
		width: 100% !important;
		min-width: 1.25rem /* 80/64 */;
		height: 1.2rem /* 58/64 */ !important;
		/*padding: .09375rem  .125rem  !important;*/
		margin: 0 !important;
	}
	.md-button-content{
		width: 100%;
		height: 100%;
	}
</style>
<style scoped>
.selects li{
	line-height: 1rem;
	color: black;
	padding: 0 .15625rem /* 10/64 */;
	font-size: .25rem /* 16/64 */;
	border-bottom: .015625rem /* 1/64 */ solid gainsboro
}
.selects{
	position: absolute;
	width: 100%;
	background: #fff;
	left: 0;
	z-index: 99;
}
.active{
	border: .046875rem solid orange !important;
}
.active *{
color: orange
}
.btns dl{
	width: 100% ;
	height: 100% ;
	padding: 0.2rem 0;
	color: #f5f5f5;
}
.btns{
	display: inline-block;
    margin: 5px;
	border:.03125rem /* 2/64 */ solid gainsboro;
    line-height: 1.2;
	box-sizing: border-box;
    border-width: 2px;
	border-radius: .0625rem /* 4/64 */;
    border-color: #229474;
    background-color: #08533c!important;
}
.sj:before {
    content: "";
    display: inline-block;
    position: absolute;
    border-left: .15625rem solid #169967;
    border-right: 0 solid #169967;
    border-top: .15625rem solid transparent;
    border-bottom: .15625rem solid transparent;
    right: -.15625rem /* 10/64 */;
	top: 0;
}
.sj{
	color: #89dec1;
    background-color: grey;
    display: inline-block;
    height: .3125rem /* 20/64 */;
	line-height: .3125rem;
    padding: 0 .078125rem /* 5/64 */;
    margin-right: .21875rem /* 14/64 */;
    vertical-align: middle;
    border-radius: .03125rem /* 2/64 */;
    background-color: #169967;
    position: relative;
}
.contain{
	padding: 0 .3125rem /* 20/64 */
}
.info_btn{
	float: right;
	width: .375rem /* 24/64 */;
	height: .375rem /* 24/64 */;
	border-radius: 50%;
	text-align: center;
	margin-top: .3125rem /* 20/64 */;
	line-height: .375rem;
	
	border: .03125rem /* 2/64 */ solid white
}
.info_btn a{
 color: white;
}
.type-tit{
	text-align: left
}
.type-tit .btn{
	position: relative;
	background: #169967;
	display: inline-block;
	line-height: .46875rem /* 30/64 */;
	padding: .15625rem /* 10/64 */;
	color: white;
	font-weight: 600;
	margin: .15625rem /* 10/64 */ .3125rem /* 20/64 */;
	border-radius: .0625rem /* 4/64 */
}
</style>
<script>
export default {
	data() {
		return {
			btns_num:0,
			types:'和值',
			typebtns:false,
			cparr:[],
			arr:[],
			result:[],
			arrItem:{
				jin:0,
				zhu:0,
				arr:[],
				type:''
			},
			type_btns:['和值','三同号','二同号','三不同','二不同'],
			datas:{
				zhu:0,
				jin:0
			},
			btn:{
				H_num:[[4,5,6,7,8,9,10,11,12,13,14,15,16,17],[80,40,25,16,12,10,9,9,10,12,16,25,40,80]],
				threeT_num:[[111,222,333,444,555,666]],
				twoT_num:[[11,22,33,44,55,66],[1,2,3,4,5,6],['11*','22*','33*','44*','55*','66*']],
				threeB_num:[1,2,3,4,5,6],
				twoB_num:[1,2,3,4,5,6]
			},
			num:0,
			nu:0
		}
	},
	methods: {
		// 二不同 三不同
		combine(start, count) {
			let i = 0;
			for(i = start; i < this.arr.length + 1 - count; i++) {
				this.result[count - 1] = i;
				if(count - 1 == 0) {
					console.log(this.result);
				} else {
					this.combine(++start, count - 1);
				}
			}
		},
		btns(e,index){
			if(this.types== this.type_btns[2]){
				// 判断是否是二同号
				var tDiv= document.querySelectorAll('.T .btns')
				var bDiv= document.querySelectorAll('.B .btns')
					e.path.forEach(Element=>{
						if(Element.className == 'btns'){
							Element.className='btns active'
							console.log(111111)
							if(Element.parentNode.className=='T'){
								bDiv[index].className='btns'
								console.log(22222)
							}else if(Element.parentNode.className=='B'){
								tDiv[index].className='btns'
								console.log(333333)
							}
						}else if(Element.className == 'btns active'){
							Element.className='btns'
							console.log(444444)
						}
					})
			}else{
			e.path.forEach(Element=>{
				let val = e.path[1].firstElementChild.innerText
				if(Element.className=='btns'){
					Element.className='btns active'
					// 判断点击个数 num
					this.$store.commit('setZhu',this.datas.zhu)
					this.cparr.push(val);// 存点击的数据
					this.$store.commit('setJin',this.datas.jin)
					console.log(this.cparr)
					//和值 三同号
					if(this.types==this.type_btns[0]||this.types==this.type_btns[1]){
						this.datas.zhu++
						this.datas.jin+=2
						this.$store.commit('setZhu',this.datas.zhu)
						this.$store.commit('setJin',this.datas.jin)
						this.arrItem.jin=this.datas.jin
						this.arrItem.zhu=this.datas.zhu
						this.arrItem.type=this.types
						this.arrItem.arr=this.cparr
						this.$store.commit('setJson',this.arrItem)
					}
					//三不同
					if(this.types==this.type_btns[3]){
						//this.arr = this.cparr;
						this.result = new Array(3);
						this.combine(0, 3);
					}	
				}else if(Element.className=='btns active'){
					Element.className='btns'
					// 判断点击个数 num
					let index= this.cparr.indexOf(val);
                    this.cparr.splice(index,1)
					console.log(this.cparr)
					if(this.types==this.type_btns[0]||this.types==this.type_btns[1]){
						this.datas.zhu--
						this.datas.jin-=2
						this.$store.commit('setZhu',this.datas.zhu)
						this.$store.commit('setJin',this.datas.jin)
						
					}	
				}
			})
		}	
	}
}
}
</script>

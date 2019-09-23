<template>
	<div class="contain" style="overflow-y:scroll">
		<table style="position:fixed;left:0;z-index:11;">
			<!-- 头部 -->
			<thead>
				<tr style="background:#0b5f45">
					<th>期次</th>
					<th>开奖号</th>
					<th>大小</th>
					<th>单双</th>
					<th class="w_6" v-for="i in 6">{{i}}</th>
				</tr>
			</thead>
		</table>
		<div style="padding-top:.5rem">
	<table>
				<tbody>
					<tr v-for="(i,$index) in arrList[0]" :key="$index" :style="{background:$index%2!=1?'#08533c':'#0b5f45','margin-top':$index==0?'1rem':'0'}">
						<td>{{i}}期</td>
						<td>{{arrList[4][$index]}}</td>
						<td>{{arrList[3][$index]}}</td>
						<td>{{arrList[2][$index]}}</td>
						<td class="w_6" v-for="(j,index) in 6" :key="index">
							<span :class="{active:j==parseInt(arrList[1][$index][0]) || j==parseInt(arrList[1][$index][1]) || j==parseInt(arrList[1][$index][2])}">
								{{j}}
								<!-- 蓝色小圆圈 -->
								<div class="blue_two" v-if="(arrList[1][$index][0]==arrList[1][$index][1] && j==arrList[1][$index][1] || arrList[1][$index][1]==arrList[1][$index][2] && j==arrList[1][$index][1])">2</div>	
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<style scoped>
.blue_two{
	width: .3125rem ;
	height: .3125rem;
	border-radius: 50%;
	overflow: hidden;
	text-align: center;
	line-height: .3125rem;
	font-size: .1875rem /* 12/64 */;
	color: white;
	background: blue;
	position: absolute;
	top:-.09375rem /* 6/64 */;
	right: -.09375rem;
}
tr .w_6{
	width:6.6%;
}
tr{
	width: 10%;
}
tr>td,tr>th{
	text-align: center;
	width: 10%;
	color: #48b892;
}
table{
	width: 100%;
	background: red !important;
}
thead{
	/* position: fixed; */
	width: 100%;
	background: #0b5f45;
}
tbody{
	padding-top: .3125rem /* 20/64 */
}
td .active{
	position: relative;
	padding: .09375rem /* 6/64 */ .1875rem /* 12/64 */;
	border-radius: 50%;
	overflow: hidden;
	background: red;
	font-weight: 600;
	color: white;
	text-align: center;
	line-height: .625rem /* 40/64 */;
	font-size: .25rem /* 16/64 */;
}
</style>
<script>
export default {
	data() {
		return {
			lottery:'',
			arrList:[]
		}
	},
	created() {
		this.$axios.get('/indexs/index').then(res=>{
			var qishu = [],prizeNum = [],sum = [],max = [],san = []
			res.data.forEach((element,index) => {
				qishu.push(element.qishu)
				prizeNum.push(element.prizeNum.split(','))
				sum.push(element.sum%2==0?'双':'单')
				san.push(element.prizeNum.split(',')[0]+element.prizeNum.split(',')[1]+element.prizeNum.split(',')[2])
				var mx = 0
				element.sanbt.split('').forEach((e,i) => {
					if(e != 0) mx += parseInt(e)
				})
				max.push(mx>=10?'大':'小')
			});
			
			this.arrList.push(qishu,prizeNum,sum,max,san)
			console.log(this.arrList[1])
		})
	},
}
</script>
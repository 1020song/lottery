<template>
	<div class="contain" style="overflow-y:scroll">
		<table>
			<!-- 头部 -->
			<thead>
				<tr style="background:#0b5f45">
					<th>期次</th>
					<th>开奖号</th>
					<th>大小</th>
					<th>单双</th>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
					<th>6</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(i,$index) in 15" :key="$index" :style="{background:$index%2!=1?'#08533c':'#0b5f45'}">
					<td>{{$index}}期</td>
					<td></td>
					<td></td>
					<td></td>
					<td v-for="j in 6"><span>{{j}}</span></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style scoped>
tr{
	line-height: 1rem
}
tr>td,tr>th{
	text-align: center;
	width: 10%;
	color: #48b892;
}
table{
	width: 100%
}
	.active{
		display: inline-block;
		width: .3125rem /* 20/64 */;
		height: .3125rem /* 20/64 */;
		border-radius: 50%;
		text-align: center;
		line-height: 20px;
		font-size: .25rem /* 16/64 */;
	}
</style>
<script>
export default {
	data() {
		return {
			lottery:''
		}
	},
}
</script>
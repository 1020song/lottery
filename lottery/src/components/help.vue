<template>
  <div class="help">
    <!-- <header>&lt;&nbsp;&nbsp;返回</header> -->
    <div class="rules">
      <div class="rules_div">
        <div class="red_rules_div">
          <p class="rules_p1">玩法规则</p>
          <p class="rules_p2">每期开出3个数字作为开奖号码，每个数字取值范围1-6（相当于摇3个骰子）。</p>
        </div>
        <h2 class="rules_p1">奖励说明</h2>
        <table>
          <tr v-for="(item,index) in arr"
              :key="index"
              :class="{'active':!(index % 2)}">
            <td>{{item.play[0]}} <br /> {{item.play[1]}}</td>
            <td>{{item.prize}}</td>
            <td>{{item.jifen}}</td>
          </tr>
        </table>
        <h2 class="rules_p1">便捷返奖</h2>
        <p>奖励自动返还至用户账户中，可继续投注或者提现!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {
          play: ['玩法'],
          prize: '中奖条件',
          jifen: '奖励(积分)'
        },
        {
          play: ['和值'],
          prize: '猜中开奖号相加的和',
          jifen: '9-80'
        },

        {
          play: ['三同号', '单选'],
          prize: '猜中111、222、333、444、555、666中指定一个',
          jifen: '240'
        }, {
          play: ['三同号', '通选'],
          prize: '111、222、333、444、555、666中任一个开出中奖条件',
          jifen: '40'
        },
        {
          play: ['二同号', '单选'],
          prize: '猜中3个号（有2个号相同）',
          jifen: '80'
        },
        {
          play: ['二同号', '复选'],
          prize: '猜中开奖中相同的2个号',
          jifen: '15'
        },
        {
          play: ['三不同号'],
          prize: '猜中3个号（各不相同）',
          jifen: '40'
        },
        {
          play: ['二不同号'],
          prize: '猜中开奖中不相同的2个号',
          jifen: '8'
        },
        {
          play: ['三连号', '通选'],
          prize: '123，234，345，456任意一个开出',
          jifen: '10'
        }

      ]
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #08533c;
}
.help {
  width: 10rem /* 640/64 */;
}
header {
  width: 100%;
  height: 1.5625rem /* 100/64 */;
  line-height: 1.5625rem;
  color: #fff;
  font-size: 20px;
  padding-left: 0.46875rem /* 30/64 */;
  box-sizing: border-box;
  background: #08533c;
}

.rules {
  width: 10rem /* 640/64 */;
  height: auto;
  padding: 0 20px 0.78125rem 20px;
  box-sizing: border-box;
}
.rules_div {
  height: 300px;
}
.red_rules_div {
}
.rules_p1 {
  color: red;
  margin: 10px 0 5px;
  font-size: 16px;
}
.rules_p2 {
  margin-bottom: 16px;
}

table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

.active {
  background-color: #eee;
}
/* table tr:nth-child(odd) {
  background-color: #eee;
} */
table tr > td {
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 5px;
  text-align: center;
  min-width: 6em;
}
</style>

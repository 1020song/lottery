<template>
  <div class="home">
    <div class="warp">
      <!--      头部-->
      <div class="tit">
        <h3>{{tartTime()<6?'早上好！朋友':tartTime()>6&&tartTime()<11?'上午好！朋友':tartTime()>11&&tartTime()<14?'中午好！朋友':tartTime()>14&&tartTime()<17?'下午好！朋友':tartTime()>17&&tartTime()<24?'晚上好！朋友':''}}</h3>
        <div class="login">
          <router-link to='/login' class="bg_img">
            <!--            用户信息-->
            <span class="iconfont" v-show="!type">&#xe601;</span>
            <p class="username" v-show="!type">用户名</p>
          </router-link>
            <img :src="picture" alt style="width:65px;height:65px;border-radius:50%" v-show="type">
            <p class="username" v-show="type">{{user}}</p>
        </div>
        <!--        兑换-->
        <div class="operate">
          <div class="oper_price">
            <span>{{monijin}}模拟金</span>
          </div>
          <div class="oper_convert">
            <span>{{point}}积分</span>
            <router-link
              to="/Integral"
              style="color: #fff;margin-left: 0.3125rem;text-decoration: none"
            >兑换</router-link>
          </div>
        </div>
      </div>
      <div class="content">
        <router-link
          tag="div"
          class="router_link"
          to='/lotteryHall'
          v-for="(i, index) in arr"
          :class="{hebei:index!=0}"
          :key="index"
        >
          <img class="img" :src="i.img" alt>
          <p style="padding-top: .2rem;">{{i.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      tiem: 0,
      user: "",
      picture: "",
      type: false,
      datas: "",
      monijin:'--',
      point:'--',
      arr: [
        { img: require("../assets/img/1.png"), name: "河北快三" },
        { img: require("../assets/img/2.jpg"), name: "安徽快三" },
        { img: require("../assets/img/2.jpg"), name: "江苏快三" },
        { img: require("../assets/img/2.jpg"), name: "江西快三" },
        { img: require("../assets/img/2.jpg"), name: "内蒙古快三" },
        { img: require("../assets/img/2.jpg"), name: "吉林快三" },
        { img: require("../assets/img/2.jpg"), name: "湖北快三" },
        { img: require("../assets/img/2.jpg"), name: "贵州快三" },
        { img: require("../assets/img/2.jpg"), name: "广州快三" },
        { img: require("../assets/img/2.jpg"), name: "甘肃快三" },
        { img: require("../assets/img/2.jpg"), name: "福建快三" },
        { img: require("../assets/img/2.jpg"), name: "北京快三" },
        { img: require("../assets/img/2.jpg"), name: "上海快三" }
      ]
    };
  },
  created() {
    this.user = localStorage.user;
    this.picture = localStorage.picture;
    if(localStorage.user&&localStorage.picture){
      this.type = true;
    }else{
      this.type = false;
      this.monijin='--'
        this.point='--'
    }
    this.is()
    this.mo()
  },
  methods: {
    tartTime() {
      var now = new Date();
      var hour = now.getHours();
      return hour;
    },
    is() {
      if(localStorage.user){
        this.user = localStorage.user;
        this.picture = localStorage.picture;
      }
    },
    mo(){
      this.$http.get('/users/mo',{
        params:{
          user:this.user
        }
      }).then((data) => {
        console.log(data)
        this.monijin=data.data.data.monijin
        this.point=data.data.data.point
      })
    }
  }
};
</script>
<style scoped>
a{
  text-decoration: none !important;
}
.home {
  text-align: center;
  height: 100%;
}
.hebei {
  pointer-events: none;
}
.warp {
  height: 100%;
  background-color: #077552;
}
.tit {
  width: 100%;
  background-color: rgb(8, 83, 60);
  color: #fff;
}
.tit h3 {
  font-size: 0.46875rem;
  padding: 0.390625rem 0;
}
.bg_img {
  color: #fff;
  text-decoration: none;
}
.bg_img span {
  font-size: 1.65rem;
  line-height: 2rem;
}
.username {
  padding: 0.3125rem 0;
}
.operate {
  line-height: 0.9375rem;
  display: flex;
  background-color: rgb(7, 74, 53);
}
.operate div span {
  color: #ffab00;
}
.oper_price {
  flex: 1;
}
.oper_convert {
  flex: 1;
}
.content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1 1 auto;
}
.content .router_link {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.375rem;
  color: #48b892;
}
.img {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  margin-top: 0.4rem;
}
</style>

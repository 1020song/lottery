<template>
  <div class="home">
    <div class="warp">
<!--      头部-->
      <div class="tit">
        <h3>上午好！朋友</h3>
        <div class="login">
          <router-link to="" class="bg_img">
<!--            用户信息-->
            <img src="../assets/img/1.png" alt="">
            <p class="username">用户名</p>
          </router-link>
        </div>
<!--        兑换-->
        <div class="operate">
          <div class="oper_price">
            <span>1420模拟金</span>
          </div>
          <div class="oper_convert">
            <span>2积分</span><router-link to="" style="color: #fff;margin-left: 0.3125rem;text-decoration: none">兑换</router-link>
          </div>
        </div>
      </div>
      <div class="content">
       <router-link class="router_link" to="" v-for="i in arr">
         <img :src="i.img" alt="" class="img">
         <p style="padding-top: .2rem;">{{i.name}}</p>
       </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data () {
      return {
        arr:[
            {img:'/img/1.ea0489f1.png',name:'河北快三'},
            {img:'/img/2.f388457f.jpg',name:'安徽快三'},
            {img:'/img/2.f388457f.jpg',name:'江苏快三'},
            {img:'/img/2.f388457f.jpg',name:'江西快三'},
            {img:'/img/2.f388457f.jpg',name:'内蒙古快三'},
            {img:'/img/2.f388457f.jpg',name:'吉林快三'},
            {img:'/img/2.f388457f.jpg',name:'湖北快三'},
            {img:'/img/2.f388457f.jpg',name:'贵州快三'},
            {img:'/img/2.f388457f.jpg',name:'广州快三'},
            {img:'/img/2.f388457f.jpg',name:'甘肃快三'},
            {img:'/img/2.f388457f.jpg',name:'福建快三'},
            {img:'/img/2.f388457f.jpg',name:'北京快三'},
            {img:'/img/2.f388457f.jpg',name:'上海快三'}
        ]
      }
    },
    methods:{
        myEvent(){
            this.$emit('click')
        }
    },
}
</script>
<style scoped>
  .warp{
    height:100%;
    background-color: #077552;
  }
  .tit{
    width: 100%;
    background-color: rgb(8, 83, 60);
    color: #fff;
  }
  .tit h3{
    font-size: 0.46875rem;
    padding: 0.390625rem 0;
  }
  .bg_img{
    color: #fff;
    text-decoration: none;
  }
  .bg_img img{
    width:1.3rem;
    height: 1.3rem;
  }
  .username{
    padding: 0.3125rem 0;
  }
  .operate{
    line-height: 0.9375rem;
    display: flex;
    background-color: rgb(7, 74, 53);
  }
  .operate div span{
    color: #ffab00;
  }
  .oper_price{
    flex: 1;
  }
  .oper_convert{
    flex: 1;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex: 1 1 auto;
  }
  .content .router_link{
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.375rem;
    color: #48b892;
  }
  .img{
    width:1.3rem;
    height:1.3rem;
    border-radius: 50%;
    margin-top: .4rem;
  }
</style>

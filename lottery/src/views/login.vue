<template>
  <div class="html">
    <header>
      <div class="content">
        <div class="logins" v-show="type">
          <h2>登录</h2>
          <div class="si" style="margin-top:60px">
            <input type="text" placeholder="请输入账号" v-model="json_log.user">
          </div>
          <div class="si">
            <input type="password" placeholder="请输入密码" v-model="json_log.pass">
          </div>
          <div class="lo"><button @click="login">登录</button></div> 
        </div>
        <div class="zhus" v-show="!type">
          <div class="file">
            <input type="file" @change="btn($event)">
            <img :src="json_zhu.img_url" style="width: 100%;height: 100%;border-radius:50%;">
          </div>
          <div class="si" style="margin-top:50px">
            <input type="text" placeholder="请输入账号" v-model="json_zhu.user">
          </div>
          <div class="si">
            <input type="password" placeholder="请输入密码" v-model="json_zhu.pass">
          </div>
          <div class="si">
            <input type="text" placeholder="请输入充值金币" v-model="json_zhu.chong">
          </div>
          <div class="lo"><button @click="zhu">注册</button></div>
        </div>
        <div class="btn">
          <div class="item" @click="type=true" style="border-radius: 2rem 0 0 2rem ;">登录</div>
          <div class="item" @click="type=false">注册</div>
        </div>
      </div>
      <img src="" alt="">
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: false,
      json_log: {
        user: "",
        pass: "",
      },
      json_zhu: {
        user: "",
        pass: "",
        chong:'',
        img_url:'',
        chong:'',
      }
    };
  },
  methods: {
    btn($event) {
      var f = $event.target.files[0]
      var d = new FormData
      d.append('img', f)
      this.$http.post('/file/files', d, {
        headers: 'multipart/form-data'
      }).then((data) => {
        console.log(data)
        this.json_zhu.img_url = 'http://localhost:8000/file/'+data.data
      })
    },
    login() {
      this.$axios.post('/users/in',this.json_log)
      .then(data=>{
        if(!this.json_log.user){
          alert('请输入账号')
        }else if(!this.json_log.pass){
          alert('请输入密码')
        }else if(data.data.type=='no'){
          alert(data.data.data)
          this.json_log.user = ''
          this.json_log.pass = ''
        }else{
          console.log(data)
          this.json_log.user = ''
          this.json_log.pass = ''
          this.$router.push({name:'home'})
          localStorage.user = data.data.datas;
          localStorage.picture = data.data.url;
        }
      }) 
    },
    zhu() {
      this.$axios.post('/users/up',this.json_zhu)
      .then(data=>{
        if(!this.json_zhu.user){
          alert('请输入账号')
        }else if(!this.json_zhu.pass){
          alert('请输入密码')
        }else if(!this.json_zhu.img_url){
          alert('请选择头像')
        }else if(data.data.type=='no'){
          alert(data.data.data)
          this.json_zhu.user = ''
          this.json_zhu.pass = ''
        }else{
          this.json_zhu.user = ''
          this.json_zhu.pass = ''
          alert(data.data.data)
        }
        
      })
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.html {
  width: 100%;
  height: 100%;
  background-color: rgb(8, 83, 60);
}
header {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.content {
  width: 9.375rem /* 600/64 */;
  height: auto;
  margin: 0 auto;
}
h2 {
  width: 80%;
  height: 1rem;
  color: #fff;
  font-size: 0.6rem;
  margin: 0.3125rem auto;
}
.item {
  width: 50%;
  height: 1.09375rem /* 70/64 */;
  line-height: 1.09375rem /* 70/64 */;
  border: 1px solid green;
  float: left;
  text-align: center;
  font-size: 0.390625rem /* 25/64 */;
  box-sizing: border-box;
  border-left: none;
  border-radius: 0 2rem 2rem 0;
  background-color: green;
  color: #fff;
}
.logins {
  height: 7.8125rem /* 500/64 */;
  margin: 1.5625rem /* 100/64 */ auto;
  overflow: hidden;
}
.zhus {
  height: 7.8125rem /* 500/64 */;
  margin: 1.5625rem /* 100/64 */ auto;
}
.file {
  width: 1.5625rem /* 100/64 */;
  height: 1.5625rem /* 100/64 */;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 auto;
  overflow: hidden;
}
.file input {
  width: 0.78125rem /* 50/64 */;
  height: 0.78125rem /* 50/64 */;
  opacity: 0;
  position: absolute;
}
.si {
  width: 85%;
  height: 1.25rem /* 80/64 */;
  margin: 0 auto;
}
input {
  width: 100%;
  height: 1.25rem /* 80/64 */;
  background-color: rgb(8, 83, 60);
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  margin: 0 auto;
  color: #fff;
  text-indent: 0.2rem;
  font-size: 0.3125rem;
}
button {
  outline: none;
  border: none;
  width: 100%;
  height:1.09375rem /* 70/64 */;
  border-radius: 0.3125rem;
  /* margin: 0.3rem 0.5rem; */
  background-color: green;
  font-size: 0.4rem;
  color: #fff;
  
}
.btn{
  width: 95%;
  height: 1.25rem /* 80/64 */;
  margin: 0 auto;
}
.lo{
  width: 80%;
  margin:.78125rem /* 50/64 */ auto;
}
</style>

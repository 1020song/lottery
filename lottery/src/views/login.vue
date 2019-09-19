<template>
  <div class="html">
    <header>
      <div class="content">
        <div class="logins" v-show="type">
          <h2>登录</h2>
          <div class="si" style="margin-top:59px">
            <input type="text" placeholder="请输入账号" v-model="json_log.user">
          </div>
          <div class="si">
            <input type="password" placeholder="请输入密码" v-model="json_log.pass">
          </div>
          <button @click="login">登录</button>
        </div>
        <div class="zhus" v-show="!type">
          <div class="file">
            <input type="file" @change="btn($event)">
            <!-- <img :src="url " style="width: 100%;height: 100%;border-radius:50%;"> -->
          </div>
          <div class="si" style="margin-top:50px">
            <input type="text" placeholder="请输入账号" v-model="json_zhu.user">
          </div>
          <div class="si">
            <input type="password" placeholder="请输入密码" v-model="json_zhu.pass">
          </div>
          <button @click="zhu">注册</button>
        </div>
        <div class="btn">
          <div class="item" @click="type=true" style="border-radius: 2rem 0 0 2rem ;">登录</div>
          <div class="item" @click="type=false">注册</div>
        </div>
      </div>
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
        pass: ""
      },
      json_zhu: {
        user: "",
        pass: ""
      }

      // url: ""
    };
  },
  methods: {
    btn(e) {
      var f = e.target.files[0];
      var d = new FormData();
      d.append("img", f);
      this.$axios
        .get("/file/files", {
          headers: "multipart/form-data"
        })
        .then(data => {
          console.log(data);
          // this.url = "http://localhost:8080/images/" + data.data;
          // console.log(this.url);
        });
    },
    login() {
      this.$axios.post('/users/in',this.json_log)
      .then(data=>{
        console.log(data);
      })
    },
    zhu() {
      this.$axios.post('/users/up',this.json_zhu)
      .then(data=>{
        console.log(data);
        
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
  padding: 0 0.3125rem /* 20/64 */;
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
  overflow: hidden;
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
  width: 85%;
  height: 1.25rem /* 80/64 */;
  border-radius: 0.3125rem;
  margin: 0.5rem 0.7rem;
  background-color: green;
  font-size: 0.4rem;
  color: #fff;
}
</style>

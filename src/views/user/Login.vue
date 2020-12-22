<template>
  <div class="login" v-show="isShow">
    <div class="top-img"><img src="../../assets/img/user/backsslogo.png"></div>
    <div class="middle-img"><img src="../../assets/img/user/login-logo.png"></div>
    <van-form @submit="onSubmit" class="login-box">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        isShow: true,
        userShow: false
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values)
        this.isShow = false
        this.userShow = true
      },
    }
  }
</script>

<style scoped>
  .guide{
    
  }
  .top-img>img{
    width: 100%;
  }
  .middle-img>img{
    width: 25%;
  }
  .middle-img{
    /* display: table-cell; */
    vertical-align: middle;
    text-align: center;
    margin-top: -12%;
  }
  .login-box{
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
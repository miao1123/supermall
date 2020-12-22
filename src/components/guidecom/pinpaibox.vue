<template>
  <div class="container flex">
    <div class="innerbox flex">
      <div class="title flex">
        <div class="line"></div>
        <span>知名品牌</span>
        <div class="line"></div>
      </div>
      <ul class="logo-ul flex">
        <li v-for="(item,index) in logolist1" class="flex" :key="index"><img :src='item.shopIcon' />{{item.pinpai_name}}</li>
      </ul>
      <ul class="logo-ul flex">
        <li v-for="(item,index) in logolist2" class="flex" :key="index"><img :src="item.shopIcon" />{{item.pinpai_name}}</li>
      </ul>
      <div id="more">更多</div>
    </div>

    <div v-for="(item,index) in shoplist" class="innerbox2" :key="index">
      <div class="topbox flex">
        <div class="logo flex">
          <div class="logo-img"><img :src="item.msg.logo" /></div>
          <div class="logo-text">{{item.msg.dianpu}}</div>
        </div>
        <div class="more">更多</div>
      </div>
      <ul class="porductlit flex">
        <li v-for="(product,index) in item.data" class="flex" :key="index"><img :src="product.mainimage" />
          <div class="flex"><span class="label1">劵后价:</span><span class="label2">{{product.price}}</span></div>
          <div class="label3">预计赚:{{product.couponPrice}}￥</div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  // 导入json数据
  let shop1 = require('../../../static/data/guide/pinpaidatas1/chengguang.json')
  let shop2 = require('../../../static/data/guide/pinpaidatas1/feike.json')
  let shop3 = require('../../../static/data/guide/pinpaidatas2/deli.json')
  let shop4 = require('../../../static/data/guide/pinpaidatas2/disney.json')
  let shop5 = require('../../../static/data/guide/pinpaidatas1/nanjirendata.json')
  let shop6 = require('../../../static/data/guide/pinpaidatas1/pingsheng.json')
  let shop7 = require('../../../static/data/guide/pinpaidatas1/hengyuanxiang.json')

  let shoplist = [shop1, shop2, shop3, shop4, shop5, shop6, shop7]

  let pinpai1 = require('../../../static/data/guide/pinpaidatas1/pinpais1.json')
  let pinpai2 = require('../../../static/data/guide/pinpaidatas2/pinpais2.json')

  let logolist1 = pinpai1.data
  let logolist2 = pinpai2.data


  export default {
    data: function() {
      return {
        shoplist,
        logolist1,
        logolist2
      }
    }
  }
</script>

<style scoped>
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }

  .container {
    margin-top: 9.4rem;
    width: 100%;
    background: url(../../assets/img/guide/box2_bg.png) no-repeat;
    background-size: 100% 12rem;
  }

  .innerbox {
    flex-direction: column;
    justify-content: end;
    width: 90%;
    height: 15rem;
    /*  */
    border: 1px solid lightgray;
    border-top: 0;
    background-color: white;
  }

  .title {
    height: 2rem;
    /*  */
    font-size: 1rem;
    padding-top: 0.5rem;
  }

  .title>.line {
    margin: 0 1rem;
    width: 4rem;
    height: 0.1rem;
    /*  */
    background-color: #979797;
  }

  .logo-ul {
    width: 100%;
    margin-top: 1.15rem;
  }

  .logo-ul>li {
    flex-direction: column;
    width: 3rem;
    font-size: 0.9rem;
  }

  .logo-ul>li>img {
    width: 2.8rem;
    height: 2.8rem;
    /*  */
    border-radius: 50%;
  }

  #more {
    margin-top: 0.5rem;
    width: 5rem;
    height: 1.5rem;
    /*  */
    line-height: 1.5rem;
    font-size: 0.9rem;
    text-align: center;
    border-radius: 2rem;
    background-color: lightgray;
  }

  .container {
    flex-direction: column;
    margin-bottom: 4rem;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .innerbox2 {
    margin-top: 1rem;
    width: 94%;
  }

  .topbox {
    justify-content: space-between;
    width: 100%;
    height: 2rem;
  }

  .topbox>.logo {
    justify-content: space-evenly;
    width: 50%;
    height: 1.9rem;
    /*  */
    color: #FFF;
    font-size: 0.8rem;
    /* background-color: #40A7E8; */
    background-image: linear-gradient(to right,#1dc4ee 30%, #0077ff);
    border-radius: 2rem 0 0 0;
    display: flex;
  }
  .logo-img {
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    left: 1.8rem;
  }
  .logo-img>img {
    /* height: 2rem; */
    height: 100%;
    /*  */
  }
  .logo-text {
    position: absolute;
    left: 4.5rem;
  }
  .topbox>.more {
    width: 3rem;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.9rem;
    /*  */
    color: #FFF;
    line-height: 2rem;
    text-align: center;
    border-radius: 2rem 0 0 2rem;
    background-color: #979797;
  }

  .porductlit {
    padding-top: 0.5rem;
    width: 100%;
    background-color: #EFEEEE;
  }

  .porductlit>li {
    flex-direction: column;
  }

  .porductlit>li>div {
    margin: 0.2rem 0;
    width: 100%;
  }

  .porductlit>li>img {
    width: 7rem;
    height: 7rem;
  }

  .label1 {
    width: 4.25rem;
    /*  */
    color: #FFF;
    text-align: center;
    background-color: #FD9E2F;
  }

  .label2 {
    color: red;
    font-weight: bold;
  }

  .label3 {
    color: #FFF;
    text-align: center;
    background-color: #40A7E8;
  }
</style>

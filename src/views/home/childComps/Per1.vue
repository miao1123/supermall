<template>
    <div id="per1">
      <div class="per1-box" v-for="(item, index) in data" :key="index">
        <div class="img1-1"><img :src="item.pict_urls"></div>
        <div class="per1-1">
          <img src="../../../assets/img/home/goods/taobao.png">
        {{item.title}}
        </div>
        <div class="per1-2">￥{{item.after_price}}</div>
        <div class="per1-2-1">￥{{item.zk_final_price}}</div>
        <div class="img1-2">
          <img src="../../../assets/img/home/lofyb_03.png">
          <img src="../../../assets/img/home/lofyb_05.png">
        </div>
        <div class="imgz1-1">￥0</div>
        <div class="imgz1-2">{{item.coupon_amount}}</div>
        <div class="imgz1-3">赚</div>
        <div class="imgz1-4">券</div>
      </div>
    </div>
  
</template>

<script>
  export default {
    name: "Per1",
    props: {
      data: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .per1-box{
    display: inline-block;
    width: 46%;
    height: 14rem;
    background-color: white;
    position: relative;
    border-radius: 0.3125rem;
    margin-left: 2%;
    margin-right: 2%;
  }
  .img1-1>img{
    position: absolute;
    width: 96%;
    height: 57%;
    background-color: mediumpurple;
    line-height: 6.25rem;
    margin-left: 2%;
    margin-right: 2%;
    top: 0.25rem;
    border-radius: 0.3125rem;
  }
  .per1-1{
    font-size: 0.3125rem;
    position: absolute;
    margin-left: 2%;
    margin-right: 2%;
    top: 61%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .per1-1>img{
    height: 0.75rem;
    width: 1.5rem;
  }
  .per1-2{
    position: absolute;
    top: 75.5%;
    color: #c14738;
    font-weight: 600;
    font-size: 0.875rem;
    margin-left: 2%;
  }
  .per1-2-1{
    position: absolute;
    top: 76%;
    color: gray;
    font-weight: 500;
    font-size: 0.75rem;
    left: 48%;
    text-decoration:line-through;
  }
  .img1-2{
    position: absolute;
    top: 85%;
  }
  .img1-2>img{
    height: 1rem;
    width: 35%;
    margin-left: 2%;
  }
  .per1-4{
    position: absolute;
    top: 87%;
    font-size: 0.8125rem;
    left: 12%;
    color: #a0a0a0;
  }
  .img1-3>img{
    position: absolute;
    height: 5%;
    width: 9%;
    top: 87.5%;
    left: 2%;
  }
  .imgz1-1{
    position: absolute;
    color: white;
    top: 85%;
    font-size: 0.75rem;
    left: 17%;
  }
  .imgz1-2{
    position: absolute;
    color: white;
    top: 85.8%;
    font-size: 0.75rem;
    left: 57%;
  }
  .imgz1-3{
    position: absolute;
    color: #d2c7b5;
    top: 85%;
    font-size: 0.75rem;
    left: 3.5%;
  }
  .imgz1-4{
    position: absolute;
    color: white;
    top: 85%;
    font-size: 0.75rem;
    left: 41.5%;
  }
</style>

<template>
    <div class="per">
      <div class="per-box" v-for="(item, index) in data" :key="index">
        <div class="img1"><img :src="item.mainimage"></div>
        <div class="pper1">
          <img src="../../../assets/img/home/goods/taobao.png">
          {{item.title}}
        </div>
        <div class="per2">￥{{item.couponPrice}}</div>
        <div class="per2-1">￥{{item.price}}</div>
        <div class="per3">已有{{item.volume}}人付款</div>
        <div class="img2">
          <img src="../../../assets/img/home/lofyb_03.png">
          <img src="../../../assets/img/home/lofyb_05.png">
        </div>
        <div class="imgz1">￥0</div>
        <div class="imgz2">{{item.couponAmount}}</div>
        <div class="imgz3">赚</div>
        <div class="imgz4">券</div>
        <div class="img3"><img src="../../../assets/img/home/store-icon.png"></div>
        <div class="per4">{{item.nick}}</div>
        <div class="per-shadow"></div>
      </div>
    </div>
  
</template>

<script>
  export default {
    name: "Per",
    props: {
      data: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .per-box{
    display: inline-block;
    width: 46%;
    height: 17rem;
    background-color: white;
    position: relative;
    border-radius: 0.3125rem;
    margin-left: 2%;
    margin-right: 2%;
  }
  .img1>img{
    position: absolute;
    width: 96%;
    height: 50%;
    background-color: mediumpurple;
    line-height: 6.25rem;
    margin-left: 2%;
    margin-right: 2%;
    top: 0.25rem;
    border-radius: 0.3125rem;
  }
  .pper1{
    font-size: 0.3125rem;
    position: absolute;
    margin-left: 2%;
    margin-right: 2%;
    top: 55%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .pper1>img{
    height: 0.75rem;
    width: 1.5rem;
  }
  .per2{
    position: absolute;
    top: 68%;
    color: #c14738;
    font-weight: 600;
    font-size: 0.875rem;
    margin-left: 2%;
  }
  .per2-1{
    position: absolute;
    top: 68.5%;
    color: gray;
    font-weight: 500;
    font-size: 0.75rem;
    left: 40%;
    text-decoration:line-through;
  }
  .per3{
    position: absolute;
    top: 75%;
    font-size: 0.75rem;
    color: #a0a0a0;
    margin-left: 2%;
  }
  .img2{
    position: absolute;
    top: 83.5%;
  }
  .img2>img{
    height: 1rem;
    width: 35%;
    margin-left: 2%;
  }
  .per4{
    position: absolute;
    top: 91%;
    font-size: 0.8125rem;
    left: 14%;
    color: #a0a0a0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .img3>img{
    position: absolute;
    height: 5%;
    width: 10%;
    top: 92%;
    left: 2%;
  }
  .imgz1{
    position: absolute;
    color: white;
    top: 83%;
    font-size: 0.75rem;
    left: 17%;
  }
  .imgz2{
    position: absolute;
    color: white;
    top: 83.8%;
    font-size: 0.75rem;
    left: 57%;
  }
  .imgz3{
    position: absolute;
    color: #d2c7b5;
    top: 83%;
    font-size: 0.75rem;
    left: 3.5%;
  }
  .imgz4{
    position: absolute;
    color: white;
    top: 83%;
    font-size: 0.75rem;
    left: 41.5%;
  }
</style>

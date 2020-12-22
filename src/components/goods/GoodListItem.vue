<template>
  <div class="per-box" >
    <div class="img1">
      <slot name="g-img"></slot>
    </div>
    <div class="per1">
      <slot name="g-icon"></slot>
      <slot name="g-text"></slot>
    </div>
    <div class="per2"><slot name="gn-price"></slot></div>
    <div class="per2-1">￥<slot name="gp-price"></slot></div>
    <div class="per3">已售<slot name="sell"></slot></div>
    <div class="img2">
      <img src="../../assets/img/home/lofyb_03.png">
      <img src="../../assets/img/home/lofyb_05.png">
    </div>
    <div class="imgz1"><slot name="commission"></slot></div>
    <div class="imgz2"><slot name="amount"></slot></div>
    <div class="imgz3">赚</div>
    <div class="imgz4">券</div>
    <div class="per-shadow"></div>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  props: {
    id: {
      type: Number
    }
  }
}
</script>

<style>
  /* #good-list-item {
    display: flex;
    flex-wrap: wrap;
  } */
  .per-box{
    /* display: inline-block; */
    width: 47%;
    height: 17rem;
    background-color: white;
    position: relative;
    border-radius: 0.3125rem;
    margin: 0.25rem;
  }
    .img1>img{
        position: absolute;
        width: 95%;
        /* height: 50%; */
        background-color: mediumpurple;
        line-height: 6.25rem;
        margin-left: 2%;
        margin-right: 2%;
        top: 0.25rem;
        border-radius: 0.3125rem;
    }
    .per1{
        font-size: 0.3125rem;
        position: absolute;
        margin-left: 2%;
        margin-right: 2%;
        top: 11rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .per1>img{
        height: 0.75rem;
        width: 1.5rem;
    }
    .per2{
        position: absolute;
        top: 13.1rem;
        color: #c14738;
        font-weight: 600;
        font-size: 0.875rem;
        margin-left: 2%;
    }
    .per2-1{
        position: absolute;
        top: 13.3rem;
        color: gray;
        font-weight: 500;
        font-size: 0.75rem;
        left: 40%;
        text-decoration:line-through;
    }
    .per3{
        position: absolute;
        top: 14.3rem;
        font-size: 0.75rem;
        color: #a0a0a0;
        margin-left: 2%;
    }
    .img2{
        position: absolute;
        top: 15.5rem;
    }
    .img2>img{
        height: 1rem;
        width: 35%;
        margin-left: 2%;
    }
    .per4{
        position: absolute;
        top: 15.5rem;
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
        top: 15.5rem;
        font-size: 0.75rem;
        left: 1.5rem;
  }
  .imgz2{
    position: absolute;
    color: white;
    top: 15.6rem;
    font-size: 0.75rem;
    left: 57%;
  }
  .imgz3{
    position: absolute;
    color: #d2c7b5;
    top: 15.5rem;
    font-size: 0.75rem;
    left: 3.5%;
  }
  .imgz4{
    position: absolute;
    color: white;
    top: 15.5rem;
    font-size: 0.75rem;
    left: 41.5%;
  }
</style>
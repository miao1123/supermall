<template>
  <div id="look-more">
    <div class="look-more-box">
      <span>查看更多</span>
      <img src="../../../assets/img/home/douyinmore.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LookMore'
}
</script>

<style>
  #look-more {
    width: 97%;
    height: 1.9rem;
    background-color: #fff;
    margin: 0.4rem auto;
    border-radius: 5%;
  }
  .look-more-box {
    line-height: 1.9rem;
    font-size: 0.8rem;
    color: #000;
    text-align: center;
  }
  .look-more-box>img {
    padding-left: 0.3rem;
    height: 0.7rem;
  }
</style>
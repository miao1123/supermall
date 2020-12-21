<template>
  <div id="home-swiper-center">
    <van-swipe :autoplay="5000" class="autoplay">
      <van-swipe-item v-for="(item, index) in swiper2" :key="index">
        <img class="autoplay-center-image" v-lazy="item.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
  
</template>

<script>
export default {
  name: 'HomeCenterSwiper',
  props: {
    swiper2: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .home-swiper-center {
    width: 100%;
    height: 6rem;
    position: relative;
    background-color: #fff;
  }
  .autoplay-center-image {
    width: 100%;
    height: 6rem;
  }
</style>
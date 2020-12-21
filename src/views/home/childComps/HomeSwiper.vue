<template>
  <van-swipe :autoplay="5000" class="autoplay">
      <van-swipe-item v-for="(item, index) in swiper1" :key="index">
        <img class="autoplay-image" v-lazy="item.image" />
      </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiper1: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  van-swipe {
    width: 100%;
    height: 8rem;
    position: relative;
  }
  .autoplay-image {
    width: 100%;
    height: 8rem;
    border-radius: 4%;
  }
</style>
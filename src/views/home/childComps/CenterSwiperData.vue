<template>
  <div id="center-swiper-data">
    <div class="data-box" v-for="(item, index) in swiperdatas" :key="index">
      <img :src="item.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterSwiperData',
  props: {
    swiperdatas: {
      type: Array
    }
  }
}
</script>

<style>
  #center-swiper-data {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .data-box {
    width: 47%;
    height: 4.5rem;
    padding: 0.25rem;
  }
  .data-box>img {
    width: 100%;
    height: 4.5rem;
    border-radius: 2%;
  }
</style>
<template>
  <div id="detail-item">
    <div class="detail-item-head">
      <div class="detail-item-head-back" @click="back">
        <img src="../../assets/img/goodsDetails/prev.png" alt="">
      </div>
      <div class="detail-item-head-images">
        <!-- <van-swipe :autoplay="5000" class="autoplay">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <img class="d-autoplay-image" v-lazy="item.image" />
          </van-swipe-item>
        </van-swipe> -->
      </div>
      <div class="detail-item-body">
        还没写完
        <div class="detail-item-body-price">
          <div class="detail-item-body-price-left">
            <div class="g-price">

            </div>
            <div class="g-sell">

            </div>
          </div>
          <div class="detail-item-body-price-right">
            <div class="g-discount">

            </div>
            <div class="g-same">

            </div>
          </div>
        </div>
        <div class="g-vip-price">

        </div>
        <div class="g-detial-title">

        </div>
        <div class="g-discout-img">
          <img src="" alt="">
        </div>
        <div class="g-tip">

        </div>
        <div class="g-recommend">

        </div>
        <div class="shangjia-message">

        </div>
        <div class="g-estimate">

        </div>
        <div class="g-more">

        </div>
        <div class="g-guess-like">

        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetaildsItem',
  data() {
    return {
      detaildatas: [],
      images: []
    }
  },
  created() {
    this.$store.state.isShow = false
    console.log(this.$route.query.goods_id)
  },
  methods: {
    back() {
      this.$store.state.isShow = true
      history.go(-1)
    }
  }
}
</script>

<style>
  .detail-item-head-back>img {
    height: 2rem;
  }
</style>
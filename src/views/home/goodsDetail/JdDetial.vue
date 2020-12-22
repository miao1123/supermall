<template>
  <div id="jd-detial">
    <detailds-item>
      <van-swipe :autoplay="5000" class="autoplay" slot="d_swipe">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img class="d-autoplay-image" v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
      <span slot="d_couponPrice">{{detaildatas.quanhou}}</span>
      <span slot="d_price">{{detaildatas.act_price}}</span>
      <span slot="d_volume">{{detaildatas.volume}}</span>
      <span slot="d_commission">{{detaildatas.commission}}</span>
      <span slot="d_tuanzhang">{{detaildatas.tuanzhang}}</span>
      <span slot="d_title">{{detaildatas.title}}</span>
      <span slot="d_couponAmount">{{detaildatas.couponAmount}}</span>
      <span slot="d_nick">{{detaildatas.mall_name}}</span>
      <div slot="g-goods">
        <jd-goods />
      </div>
    </detailds-item>
  </div>
</template>

<script>
import jd from '../../../../static/data/home/goods/jd/jdgoods1'
import DetaildsItem from '../../../components/goods/DetaildsItem.vue'
import JdGoods from '../childComps/HomeGoods/JdGoods.vue'
export default {
  name: 'JdDetial',
  components: {
    JdGoods,
    DetaildsItem,
  },
  data() {
    return {
      detaildatas: {},
      images: [],
      g_id: 0
    }
  },
  created() {
    this.g_id = this.$route.query.goods_id
    this.detaildatas = jd.msg[this.$route.query.goods_id]
    this.images = jd.msg[this.$route.query.goods_id].goodCommentsShare
  }
}
</script>

<style>

</style>
<template>
  <div id="pdd-detial">
    <detailds-item>
      <img slot="d_swipe" :src="detaildatas.goods_thumbnail_url" />
      <span slot="d_couponPrice">{{detaildatas.quanhou}}</span>
      <span slot="d_price">{{detaildatas.act_price}}</span>
      <span slot="d_volume">{{detaildatas.volume}}</span>
      <span slot="d_commission">{{detaildatas.commission}}</span>
      <span slot="d_tuanzhang">{{detaildatas.tuanzhang}}</span>
      <span slot="d_title">{{detaildatas.title}}</span>
      <span slot="d_couponAmount">{{detaildatas.couponAmount}}</span>
      <span slot="d_nick">{{detaildatas.mall_name}}</span>
      <div slot="g-goods">
        <pdd-goods />
      </div>
    </detailds-item>
  </div>
</template>

<script>
import pdd from '../../../../static/data/home/goods/pdd/pddgoods1'
import DetaildsItem from '../../../components/goods/DetaildsItem.vue'
import PddGoods from '../childComps/HomeGoods/PddGoods.vue'
export default {
  name: 'JdDetial',
  components: {
    PddGoods,
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
    this.detaildatas = pdd.data[this.$route.query.goods_id]
    this.images = pdd.data[this.$route.query.goods_id].goodCommentsShare
  }
}
</script>

<style>

</style>
<template>
  <div id="tb-detial">
    <detailds-item>
      <van-swipe :autoplay="5000" class="autoplay" slot="d_swipe">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img class="d-autoplay-image" v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
      <span slot="d_couponPrice">{{detaildatas.couponPrice}}</span>
      <span slot="d_price">{{detaildatas.price}}</span>
      <span slot="d_volume">{{detaildatas.volume}}</span>
      <span slot="d_commission">{{detaildatas.commission}}</span>
      <span slot="d_tuanzhang">{{detaildatas.tuanzhang}}</span>
      <span slot="d_title">{{detaildatas.title}}</span>
      <span slot="d_couponAmount">{{detaildatas.couponAmount}}</span>
      <span slot="d_nick">{{detaildatas.nick}}</span>
      <div slot="g-goods">
        <tb-goods />
      </div>
    </detailds-item>
  </div>
</template>

<script>
import tb from '../../../../static/data/home/goods/taobao/taobaogoods1'
import DetaildsItem from '../../../components/goods/DetaildsItem.vue'
import TbGoods from '../childComps/HomeGoods/TbGoods.vue'
export default {
  name: 'TbDetial',
  components: {
    TbGoods,
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
    this.detaildatas = tb.data[this.$route.query.goods_id]
    this.images = tb.data[this.$route.query.goods_id].item_usp_list.concat(tb.data[this.$route.query.goods_id].pic_url_for_w_l)
  }
}
</script>

<style>

</style>
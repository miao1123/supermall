<template>
  <div id="main-home-nav">
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/alert1.png" alt=""></template>
        <template #item-text><div>小米有品</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/alert2.png" alt=""></template>
        <template #item-text><div>网易严选</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/alert10.png" alt=""></template>
        <template #item-text><div>精选高佣</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/alert5.gif" alt=""></template>
        <template #item-text><div>1688</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/alert6.png" alt=""></template>
        <template #item-text><div>聚划算</div></template>
      </home-head-nav-item>
    </home-head-nav>
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/9.9_.png" alt=""></template>
        <template #item-text><div>9.9包邮</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/alert7.png" alt=""></template>
        <template #item-text><div>大额卷</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/alert8.gif" alt=""></template>
        <template #item-text><div>多件特惠</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/alert9.gif" alt=""></template>
        <template #item-text><div>预告商品</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/shop/genguo.png" alt=""></template>
        <template #item-text><div>更多</div></template>
      </home-head-nav-item>
    </home-head-nav>
  </div>
</template>

<script>
import HomeHeadNav from '../../../../components/navs/HomeHeadNav'
import HomeHeadNavItem from '../../../../components/navs/HomeHeadNavItem.vue'
export default {
  name: 'ShopNav',
  components: { 
    HomeHeadNav,
    HomeHeadNavItem
  },
}
</script>

<style>

</style>
<template>
  <div id="main-home-nav">
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/fuck1.png" alt=""></template>
        <template #item-text><div>活动中心</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/fuck2.png" alt=""></template>
        <template #item-text><div>0元购</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/gaoyong.png" alt=""></template>
        <template #item-text><div>独享高佣</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/fuck3.png" alt=""></template>
        <template #item-text><div>红包墙</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/fuck4.png" alt=""></template>
        <template #item-text><div>日结</div></template>
      </home-head-nav-item>
    </home-head-nav>
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/fuck5.png" alt=""></template>
        <template #item-text><div>小程序</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/fuck6.png" alt=""></template>
        <template #item-text><div>个人商城</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/xianbao1.png" alt=""></template>
        <template #item-text><div>实时线报</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/fuck8.png" alt=""></template>
        <template #item-text><div>链接转换</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/ybown/fuck9.png" alt=""></template>
        <template #item-text><div>地堆物料</div></template>
      </home-head-nav-item>
    </home-head-nav>
  </div>
</template>

<script>
import HomeHeadNav from '../../../../components/navs/HomeHeadNav'
import HomeHeadNavItem from '../../../../components/navs/HomeHeadNavItem.vue'
export default {
  name: 'OwnNav',
  components: { 
    HomeHeadNav,
    HomeHeadNavItem
  },
}
</script>

<style>

</style>
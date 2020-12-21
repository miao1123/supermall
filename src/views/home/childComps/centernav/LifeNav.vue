<template>
  <div id="main-home-nav">
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/part1.png" alt=""></template>
        <template #item-text><div>饿了么</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/part2.png" alt=""></template>
        <template #item-text><div>美团外卖</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/part3.png" alt=""></template>
        <template #item-text><div>口碑</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/part4.png" alt=""></template>
        <template #item-text><div>美团点评</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/part5.png" alt=""></template>
        <template #item-text><div>生活卷</div></template>
      </home-head-nav-item>
    </home-head-nav>
    <home-head-nav>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/part6.png" alt=""></template>
        <template #item-text><div>淘票票</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/part7.png" alt=""></template>
        <template #item-text><div>永乐票务</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/part8.gif" alt=""></template>
        <template #item-text><div>特权卡</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/shoujiliuliang.gif" alt=""></template>
        <template #item-text><div>30G流量</div></template>
      </home-head-nav-item>
      <home-head-nav-item>
        <template #item-icon><img src="../../../../assets/img/home/life/kenken.gif" alt=""></template>
        <template #item-text><div>肯德基</div></template>
      </home-head-nav-item>
    </home-head-nav>
  </div>
</template>

<script>
import HomeHeadNav from '../../../../components/navs/HomeHeadNav'
import HomeHeadNavItem from '../../../../components/navs/HomeHeadNavItem.vue'
export default {
  name: 'LifeNav',
  components: { 
    HomeHeadNav,
    HomeHeadNavItem
  },
}
</script>

<style>

</style>
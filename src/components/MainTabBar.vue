<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="#8E4FFE">
        <template #item-icon><img src="../assets/img/tabbar/bottombtn0101.png" alt=""></template>
        <template #item-icon-active><img src="../assets/img/tabbar/bottombtn0102.png" alt=""></template>
        <template #item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/guide" activeColor="#8E4FFE">
        <template #item-icon><img src="../assets/img/tabbar/bottombtn0201.png" alt=""></template>
        <template #item-icon-active><img src="../assets/img/tabbar/bottombtn0202.png" alt=""></template>
        <template #item-text><div>导航</div></template>
      </tab-bar-item>
      <tab-bar-item path="/lesson" activeColor="#8E4FFE">
        <template #item-icon><img src="../assets/img/tabbar/bottombtn0301.png" alt=""></template>
        <template #item-icon-active><img src="../assets/img/tabbar/bottombtn0302.png" alt=""></template>
        <template #item-text><div>悦课堂</div></template>
      </tab-bar-item>
      <tab-bar-item path="/community" activeColor="#8E4FFE">
        <template #item-icon><img src="../assets/img/tabbar/bottombtn0501.png" alt=""></template>
        <template #item-icon-active><img src="../assets/img/tabbar/bottombtn0502.png" alt=""></template>
        <template #item-text><div>分享</div></template>
      </tab-bar-item>
      <tab-bar-item path="/user" activeColor="#8E4FFE">
        <template #item-icon><img src="../assets/img/tabbar/bottombtn0401.png" alt=""></template>
        <template #item-icon-active><img src="../assets/img/tabbar/bottombtn0402.png" alt=""></template>
        <template #item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
	.tab-bar-item{
		z-index: 1000000;
	}
</style>
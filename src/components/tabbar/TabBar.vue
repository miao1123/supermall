<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #tab-bar{
    /* 开启flex布局 */
    display: flex;
    background-color: white;
    /* 固定于窗口底部定位 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* 阴影效果:第一个参数是相对于x轴的偏移（正为向右负为向左）第二个是相对于y轴 第三个是模糊程度 */
    box-shadow: 0 -1px 2px rgba(100, 100, 100, 0.1);
		z-index: 999999;
  }
</style>

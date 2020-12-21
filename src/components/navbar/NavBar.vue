<template>
  <!-- 导航条组件 -->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar {
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .left .right {
    width: 10%;
  }
  .center {
    /* 自动填满 */
    flex: 1;
  }
</style>
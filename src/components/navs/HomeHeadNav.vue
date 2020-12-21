<template>
  <div id="home-head-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HomeHeadNav'
}
</script>

<style>
  #home-head-nav {
    /* 开启flex布局 */
    display: flex;
    background-color: white;
    width: 98%;
    margin: 0 auto;
  }
</style>
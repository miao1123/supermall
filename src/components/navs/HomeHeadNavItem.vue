<template>
  <div class="home-head-nav-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'HomeHeadNavItem'
}
</script>

<style>
  .home-head-nav-item{
    flex: 1;
    text-align: center;
    height: 5rem;
    font-size: 0.85rem;
    color: black;
  }
  .home-head-nav-item img{
    height: 3rem;
    margin-top: 0.4rem;
    margin-bottom: 0.25rem;
    vertical-align: middle;
  }
</style>
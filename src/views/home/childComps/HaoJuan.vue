<template>
  <div id="haojuan">
    <div class="haojuan-img">
      <img src="../../../assets/img/home/ahaoquanzhibo.png" alt="">
      <img src="../../../assets/img/home/ajipinbaodan.png" alt="">
      <img src="../../../assets/img/home/ayugaoshangpin.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HaoJuan'
}
</script>

<style>
  #haojuan {
    background-color: #fff;
  }
  .haojuan-img {
    width: 97%;
    margin: 0.4rem auto;
    display: flex;
    justify-content: space-around;
  }
  .haojuan-img>img {
    width: 30%;
    padding: 0.3rem 0;
  }
</style>
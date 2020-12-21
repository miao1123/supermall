<template>
  <div id="mainbox" class="flex">
    <span id="title">超级导航</span>
    <input id="search2" placeholder="输入商品名称或粘贴商品标题" />
    <ul class="nav flex">
      <li>频道</li>
      <li>品牌</li>
      <li>淘宝</li>
      <li>京东</li>
      <li>拼多多</li>
    </ul>
  </div>

</template>

<script>
</script>

<style scoped>
  /* 区块大小、位置相关样式和呈现样式以注释为分界 */
  .flex {
    /* 弹性布局类 */
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }

  #mainbox {
    flex-direction: column;
    padding-top: 2rem;
    /*  */
    width: 100%;
    min-height: 8rem;
    background-color: #8848FE;
    background-size: 100% 10rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 222;
  }

  #title {
    color: white;
    font-size: 1.2rem;
  }

  #search2 {
    width: 80%;
    height: 2rem;
    /*  */
    font-size: 1rem;
    text-align: center;
    border-radius: 2rem;
  }

  .nav {
    width: 100%;
    /*  */
    color: #F1D322;
  }

  .nav>li {
    width: 15%;
    height: 2rem;
    /*  */
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }

  .nav>li:hover {
    border-radius: 2rem;
    color: #864AFE;
    background-color: #fff;
  }
</style>

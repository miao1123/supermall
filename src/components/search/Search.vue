<template>
  <div class="search">
    <div class="search-main">
      <input type="text" placeholder="输入商品名称或粘贴商品标题">
      <img src="../../assets/img/home/xi_05.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style>
  .search{
    padding-top: 2.5rem;
  }
  .search-main {
    position: relative;
    height: 3rem;
    z-index: 1;
  }
  .search-main>input{
    width: 80%;
    box-sizing: border-box;
    border: 2px solid white;
    border-radius: 8px;
    font-size: 0.75rem;
    background-color: white;
    background-image: url(../../assets/img/home/sou_05.png);
    background-position: 40px 8px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 85px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    margin-left: 5%;
    margin-right: 3.5%;
    height: 2.25rem;
    background-size: 5%;
    position: absolute;
    top: 0.3rem;
  }
  .search-main>img{
    position: absolute;
    width: 8%;
    top: 0.5rem;
    right: 0.6rem;
    z-index: 1111;
  }
</style>

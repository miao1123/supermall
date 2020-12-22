<template>
  <div class="dh-outer flex">
    <ul class="dh-leftlist">
      <li @click="showchange(1)" class="flex dh-center">
        <div :class="{lichosed:current==1}">热门</div>
      </li>
      <li @click="showchange(2)" class="flex dh-center">
        <div :class="{lichosed:current==2}">生活</div>
      </li>
      <li @click="showchange(3)" class="flex dh-center">
        <div :class="{lichosed:current==3}">出行</div>
      </li>
      <li @click="showchange(4)" class="flex dh-center">
        <div :class="{lichosed:current==4}">购物</div>
      </li>
    </ul>
    <div class="dh-rightbox">
      <div v-show="current==1" class="dh-page1 dh-page ">
        <img src="../../assets/img/guide/page1.png" />
      </div>
      <div v-show="current==2" class="dh-page2 dh-page">
        <img src="../../assets/img/guide/page2.png" />
      </div>
      <div v-show="current==3" class="dh-page3 dh-page">
        <img src="../../assets/img/guide/page3.png" />
      </div>
      <div v-show="current==4" class="dh-page4 dh-page">
        <img src="../../assets/img/guide/page4.png" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        current: 1,
        lichosed: true,
  
      }
    },
    methods: {
      showchange(n) {
        return this.current = n
      }
    }
  }
</script>

<style>
  
  .flex {
    display: flex;
  }
  
  .dh-center {
    top: 5rem;
    align-items: center;
    justify-content: center;
  }
  
  .dh-outer {
    width: 100%;
    /* height: auto; */
    overflow: hidden;
  }
  
  .dh-leftlist {
    margin-top: -16rem;
    flex-direction: column;
    width: 25%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  
  .dh-leftlist>li {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    overflow: hidden;
  }
  .lichosed {
    height: 2rem;
    width: 80%;
    margin: 0 auto;
    /*  */
    color: #FFFFFF;
    text-align: center;
    line-height: 2rem;
    border-radius: 0.5rem;
    background: linear-gradient(to top, #ec773d, #e34b32);
  }
  
  .dh-rightbox {
    margin-top:9rem ;
    width: 80%;
    height: 40rem;
    padding-top: 1rem;
    background-color: #f1f2f6;
    overflow: hidden;
  }
  .dh-page {
    width: 100%;
    height: 100%;
    float: left;  
  }
  
  .dh-page1>img {
    width: 95%;
    background-color: #F1F2F6;
  }
  
  .dh-page2>img {
    width: 95%;
    background-color: #F1F2F6;
    
  }
  
  .dh-page3>img {
    width: 95%;
    background-color: #F1F2F6;
    
  }
  
  .dh-page4>img {
    width: 95%;
    background-color: #F1F2F6;
    
  }
</style>

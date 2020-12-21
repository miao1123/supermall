<template>
  <div class="pai-list-item">
    <div class="ranking-body-img">
      <slot name="mainimage"></slot>
      <!-- <img :src="item.mainimage" alt=""> -->
    </div>
    <div class="ranking-body-text">
      <span class="juanhou">卷后价</span>
      ￥<slot name="couponPrice"></slot>
      <!-- <span>￥{{item.couponPrice}}</span> -->
    </div>
    <div class="ranking-body-yugu">
      预估赚￥<slot name="commission"></slot>
      <!-- {{item.commission}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaiListItem'
}
</script>

<style>
  .pai-list-item {
    padding: 0.3rem;
    width: 7rem;
  }
  .ranking-body-img>img {
    width: 100%;
    height: 7rem;
  }
  .ranking-body-text {
    font-size: 0.85rem;
  }
  .juanhou {
    background: #F19D39;
    color: white;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 10%;
    padding: 0.15rem 0.2rem;
    margin-top: 0.3rem;
    margin-bottom: 0.4rem;
  }
  .ranking-body-yugu {
    margin: 0.6rem 0;
    /* background: #7651F6; */
    background-image: url('../../assets/img/home/cainixihuan1.png');
    background-size: 100%;
    color: white;
    font-size: 0.9rem;
    /* border-radius: 10%; */
    text-align: center;
    padding: 0.1rem;
    height: 1.1rem;
    line-height: 1.1rem;
  }
</style>
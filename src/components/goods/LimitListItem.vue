<template>
  <div>
    <div class="limit-body-box">
      <slot name="itempic"></slot>
      <!-- <img :src="item.itempic" alt=""> -->
      <div class="limit-body-box-text">
        <slot name="itemtitle"></slot>
        <!-- {{item.itemtitle}} -->
      </div>
      <div class="limit-body-box-price">
        <div class="price">￥<slot name="itemendprice"></slot></div>
        <!-- {{item.itemendprice}} -->
        <div class="button">马上抢</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LimitListItem'
}
</script>

<style>
  .limit-body-box {
    padding: 1rem 0;
  }
  .limit-head-left {
    position: absolute;
    left: 0.4rem;
  }
  .limit-head-left>img {
    width: 7rem;
  }
  .limit-head-right {
    margin-left: 7.5rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .time {
    color: #E13C38;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .time-status {
    color: #E13C38;
    font-size: 0.5rem;
  }
  .limit-body-box>img {
    width: 6.5rem;
  }
  .limit-body-box-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 7rem;
    font-size: 0.85rem;
  }
  .limit-body-box-price {
    position: relative;
    line-height: 1rem;
    margin-top: 0.6rem;
    padding-bottom: 0.45rem;
  }
  .price {
    position: absolute;
    left: 0;
    color: #E13C38;
    font-size: 1rem;
    font-weight: 600;
  }
  .button {
    position: absolute;
    right: 0.4rem;
    background-color: #E13C38;
    border-radius: 10%;
    color: white;
    font-size: 0.55rem;
    width: 3rem;
    text-align: center;
  }
</style>
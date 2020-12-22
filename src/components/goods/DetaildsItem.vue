<template>
  <div id="detail-item">
    <div class="detail-item-head">
      <div class="detail-item-head-back" @click="back">
        <img src="../../assets/img/goodsDetails/prev.png" alt="">
      </div>
      <div class="detail-item-head-kefu">
        <img src="../../assets/img/goodsDetails/kefu.png" alt="">
      </div>
    </div>
    <div class="g-message">
      <div class="detail-item-head-images">
        <slot name="d_swipe"></slot>
        <!-- <van-swipe :autoplay="5000" class="autoplay">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <img class="d-autoplay-image" v-lazy="item" />
          </van-swipe-item>
        </van-swipe> -->
      </div>
      <div class="detail-item-body">
        <div class="detail-item-body-price">
          <div class="detail-item-body-price-left">
            <div class="g-price">
              <span class="g-price-now">
                ￥<slot name="d_couponPrice"></slot>
                <!-- {{detaildatas.couponPrice}} -->
              </span>
              <del class="g-price-pre">
                ￥<slot name="d_price"></slot>
                <!-- ￥{{detaildatas.price}} -->
              </del>
            </div>
            <div class="g-sell">
              <div class="g-sell-nums">
                销量 <slot name="d_volume"></slot>件
                <!-- {{detaildatas.volume}} -->
              </div>
              <div class="g-sell-tao">复制淘口令</div>
            </div>
          </div>
          <div class="detail-item-body-price-right">
            <div class="g-discount">
              <img src="../../assets/img/goodsDetails/xinban_03.png" alt="">
              <div class="g-discount-text">
                降价通知
              </div>
            </div>
            <div class="g-same">
              <img src="../../assets/img/goodsDetails/xinban_05.png" alt="">
              <div class="g-same-text">
                找同款
              </div>
            </div>
          </div>
        </div>
        <div class="g-vip-price">
          <span class="g-yugu">
            预估赚￥<slot name="d_commission"></slot>
            <!-- {{detaildatas.commission}} -->
          </span>
          <span class="g-vip-yugu">
            升级运营商赚￥<slot name="d_tuanzhang"></slot>
            <!-- {{detaildatas.tuanzhang}} -->
          </span>
          <img src="../../assets/img/goodsDetails/shengji.png" alt="" class="shengji-img">
        </div>
        <div class="g-detial-title">
          <img src="../../assets/img/goodsDetails/timg.png" alt="">
          <span class="g-detial-title-text">
            <slot name="d_title"></slot>
            <!-- {{detaildatas.title}} -->
          </span>
        </div>
        <div class="g-discout-img">
          <div class="g-discout-img-l">
            ￥<span class="g-discout-img-p">
              <slot name="d_couponAmount"></slot>
              <!-- {{detaildatas.couponAmount}} -->
            </span>
          </div>
          <div class="g-discout-img-j">
            <span class="g-discout-j-text">悦拜专享优惠卷</span>
            <span class="g-discout-j-time">2020-12-22-2020-12-24</span>
          </div>
        </div>
        <div class="g-history">
          <span>历史价格趋势</span>
        <img src="../../assets/img/goodsDetails/youpng.png"/>
        </div>
        <div class="g-tip-recommend">
          <div class="g-tip">
            <img class="g-tip1" src=../../assets/img/goodsDetails/tip-purple.png />
            <div class="g-tip-wenzi1">使用红包、淘礼金等付款影响订单奖励。</div>
            <div class="g-tip-wenzi2">佣金规则></div>
          </div>
          <div class="g-recommend">
            <img class="g-recommand-tuijian" src="../../assets/img/goodsDetails/xinban_10.png" />
            <div class="g-recommend-details">【送面膜1盒5片装】【医美院线大热冻干粉套盒40瓶装】6大贵妇级核心成分！富勒烯、二裂酵母提取物、玫瑰干细胞、寡肽-1等！激活细胞再生，抗衰老抗氧化修护受损肌肤，28天焕颜新生，还你一张初恋脸</div>
            <img class="g-copy" src="../../assets/img/goodsDetails/copy-yellow.png" />
          </div>  
        </div>
        <div class="shangjia-message">
          <img class="g-touxiang" src="../../assets/img/community/fillPathYeart.png"/>
          <div class="g-dianming">
            <slot name="d_nick"></slot>
            <!-- {{detaildatas.nick}} -->
          </div>
          <img class="fztkouling" src="../../assets/img/goodsDetails/1.jpg"/>
          <img class="ckdpyouhui" src="../../assets/img/goodsDetails/2.jpg" />
          <br/>
          <div class="g-pingfen">
            <div>宝贝描述：4.8</div>
            <div style="width: 1rem;">|</div> 
            <div>卖家服务：4.8</div>
            <div style="width: 1rem;">|</div>
            <div>物流描述：4.8</div>
          </div>
        </div>
        <div class="g-estimate">
          <span>宝贝评价</span>
          <div class="pingjia-count">(1703)</div>
          <div class="show-all">查看全部></div>
          <br/>
          <img src="../../assets/img/goodsDetails/taotao.png">
          <span class="g-id">美***丽</span>
          <span class="g-pingjia">很好，很棒，很喜欢。</span>
        </div>
        <div class="g-more">
          <span>查看宝贝详情</span>
          <img src="../../assets/img/goodsDetails/setup-icon-more-black.png"/>
        </div>
        <div class="g-guess-like">
          <div class="g-guess-like-box">
            <img src="../../assets/img/goodsDetails/cainixihuanXin.png" alt="">
            <span>猜你喜欢</span>
          </div>
        </div>
      </div>
    </div>
    <div class="g-goods">
      <!-- <tb-goods /> -->
      <slot name="g-goods"></slot>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button color="#be99ff" type="warning" text="立即分享" />
      <van-goods-action-button color="#7232dd" type="danger" text="领卷购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'DetaildsItem',
  created() {
    this.$store.state.isShow = false
  },
  methods: {
    back() {
      this.$store.state.isShow = true
      history.go(-1)
    }
  }
}
</script>

<style>
  .detail-item-head {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: transparent;
    z-index: 2;
  }
  .detail-item-head-back {
    position: absolute;
    left: 0.8rem;
    top: 0.5rem;
  }
  .detail-item-head-back>img {
    height: 1.7rem;
    z-index: 2;
  }
  .detail-item-head-kefu {
    position: absolute;
    right: 0.8rem;
    top: 0.5rem;
  }
  .detail-item-head-kefu>img {
    height: 1.7rem;
    z-index: 2;
  }
  .detail-item-head-images {
    width: 100%;
    height: 19rem;
    z-index: 0;
    overflow: hidden;
  }
  .d-autoplay-image {
    width: 100%;
    z-index: 0;
  }
  .detail-item-body {
    width: 94%;
    margin: 0 auto;
    z-index: 0;
  }
  .detail-item-body-price {
    height: 4rem;
    position: relative;
    margin-top: 0.5rem;
  }
  .detail-item-body-price-left {
    position: absolute;
    left: 0;
  }
  .g-price-now {
    font-size: 1.3rem;
    font-weight: 600;
    color: red;
  }
  .g-price-pre {
    font-size: 0.85rem;
    color: #7A7A7A;
    padding-left: 0.5rem;
  }
  .g-sell {
    color: #D2D4D9;
    display: flex;
    font-size: 0.5rem;
    text-align: center;
    margin-top: 0.5rem;
  }
  .g-sell-nums {
    background-color: #F0F3FD;
    width: 5rem;
    border-radius: 10%;
  }
  .g-sell-tao {
    background-color: #F0F3FD;
    width: 5rem;
    border-radius: 10%;
    margin-left: 0.8rem;
  }
  .detail-item-body-price-right {
    position: absolute;
    right: 0;
    display: flex;
    text-align: center;
  }
  .g-discount>img {
    height: 2rem;
  }
  .g-discount-text {
    font-size: 0.6rem;
  }
  .g-same {
    padding-left: 2rem;
  }
  .g-same>img {
    height: 2rem;
  }
  .g-same-text {
    font-size: 0.6rem;
  }
  .g-vip-price {
    background-image: url(../../assets/img/goodsDetails/yuguzhuan_03.png);
    background-size: 100%;
    height: 2.3rem;
    line-height: 2.3rem;
    position: relative;
  }
  .g-vip-price>img {
    height: 1.3rem;
    /* width: 1rem; */
  }
  .shengji-img {
    position: absolute;
    right: 1.75rem;
    top: 0.5rem;
  }
  .g-yugu {
    color: #9682D4;
    font-size: 0.75rem;
    position: absolute;
    left: 2.5rem;
  }
  .g-vip-yugu {
    color: #E2BD68;
    font-size: 0.85rem;
    position: absolute;
    left: 7.5rem;
    padding-left: 0.25rem;
  }
  .g-detial-title {
    height: 2.8rem;
    /* width: 10rem; */
    /* display: flex; */
    margin: 0.7rem 0;
    position: relative;
  }
  .g-detial-title-text {
    word-wrap: break-word; 
    word-break: break-all; 
    margin-left: 1.6rem;
  }
  .g-detial-title>img {
    height: 1.3rem;
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
    margin-right: 0.2rem;
  }
  .g-discout-img {
    background: url(../../assets/img/goodsDetails/youhuiquanXin.png);
    background-size: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    color: white;
    position: relative;
  }
  .g-discout-img-l {
    margin-left: 0.5rem;
  }
  .g-discout-img-p {
    font-size: 2.5rem;
  }
  .g-discout-img-j {
    width: 8rem;
    position: absolute;
    right: 6.5rem;
    text-align: center;
  }
  .g-discout-j-text {
    font-size: 1rem;
  }
  .g-discout-j-time {
    font-size: 0.5rem;
  }
  .g-guess-like {
    height: 1.8rem;
    line-height: 1.8rem;
    width: 100%;
    margin: 0.3rem 0;
    font-size: 1rem;
  }
  .g-guess-like-box {
    width: 10rem;
    margin: 0 auto;
  }
  .g-guess-like-box>img {
    height: 0.8rem;
    padding-right: 0.4rem;
  }
  .g-goods {
    margin-bottom: 3.25rem;
    background-color: #F9F9F9;
  }
  /* 店家信息 */
  .g-history{
    width: 100%;
    height: 2rem;
    background-color: #F5F6FB ;
    border-radius: 0.4rem;
    display: flex;
    position: relative;
    margin: 0.6rem 0 0.4rem 0;
  }
  .g-history>span{
    position: absolute;
    left: 0.5rem;
    font-size: 0.9rem;
    margin-top: 0.3rem;
    
  }
  .g-history>img{
    width: 1rem;
    height: 1rem;
    position: absolute;
    margin-top: 0.5rem;
    right: 0.5rem;
  }
  .g-tip-recommend{
    width: 100%;
    height: 6.5rem;
    font-size: 0.9rem;
  }
  .g-tip{
    width: 100%;
    height: 2rem;
    background-color: #F5F6FB ;
    border-radius: 0.4rem;
    display: flex;
    position: relative;
    margin: 0.8rem 0;
  }
  .g-tip1{
    top: 0.2rem;
    left: 0.3rem;
    width: 2.4rem;
    height: 1.5rem;
    position: absolute;
  }
  .g-tip-wenzi1{
    font-size: 0.75rem;
    color: #5A5B5B ;
    top: 0.5rem;
    left: 3rem;
    position: absolute;
  }
  .g-tip-wenzi2{
    font-size: 0.8rem;
    color: #989BAB ;
    position: absolute;
    top: 0.45rem;
    right: 0.5rem;
  }
  .g-recommend{
    width: 100%;
    height: 3.5rem;
    background-color: #ECEAFF ;
    display: flex;
    position: relative;
    margin: 0.6rem 0 0.8rem 0;
  }
  .g-recommand-tuijian{
    top: -0.2rem;
    left: 0.2rem;
    width: 3rem;
    height: 3.5rem;
    position: absolute;
  }
  .g-recommend-details{
    width: 15rem;
    position: absolute;
    left: 3.5rem;
    top: 0.7rem;
    font-size: 0.7rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .g-copy{
    width: 3rem;
    top:1rem;
    right: 0.3rem;
    position: absolute;
  }
  .shangjia-message{
    width: 100%;
    height: 4rem;
    position: relative;
    margin: 0.8rem 0;
  }
  .g-touxiang{
    left: 0.3rem;
    width: 2rem;
    position: absolute;
  }
  .g-dianming{
    left: 2.7rem;
    font-size: 0.9rem;
    position: absolute;
  }
  .fztkouling{
    width: 5rem;
    position: absolute;
    right: 5rem;
  }
  .ckdpyouhui{
    width: 5rem;
    position: absolute;
    right: 0rem;
  }
  .g-pingfen{
    display: flex;
    justify-content: space-around;
  }
  .g-pingfen>div{
    width: 6rem;
    margin-left: 0.7rem;
    margin-top: 1.5rem;
    font-size: 0.75rem;
/*    text-align: center; */
    color: #9E9E9E;
  }
  .g-estimate{
    width: 96%;
    margin: 0.8rem auto;
    display: flex;
    position: relative;
  }
  .pingjia-count{
    font-size: 0.75rem;
    color: #C9C9C9;
    position: absolute;
    left:4.2rem ;
    top: 0.3rem;
  }
  .show-all{
    color: #F6432C ;
    font-size: 0.75rem;
    right: 0rem;
    position: absolute;
  }
  .g-estimate>img{
    position: absolute;
    top: 1.7rem;
    width: 1.6rem;
  }
  .g-id{
    font-size: 0.75rem;
    color: #9E9E9E;
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
  .g-pingjia{
    position: absolute;
    font-size: 0.75rem;
    color: #353535;
    top: 3.7rem;
  }
  .g-more{
    width: 100%;
    height: 2rem;
    background-color: #F5F6FB ;
    border-radius: 0.4rem;
    display: flex;
    position: relative;
    margin-top: 4.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  .g-more>span{
    position: absolute;
    left: 0.5rem;
    margin-top: 0.3rem;
  }
  .g-more>img{
    width: 0.6rem;
    height: 1rem;
    position: absolute;
    margin-top: 0.5rem;
    right: 0.8rem;
  }
</style>
<template>
  <div>
    <div class="user">
      <!-- 头部信息 -->
      <div>
        <div class="container flex">
          <div class="touxiang"></div>
          <div class="info">
            <div class="name">
              <span>归途</span>
            </div>
            <div class="vip">
              <span>VIP</span>
            </div>
            <div class="rocket">
              <img src="../../assets/img/user/myselfjx-13.png" />
            </div>
            <br />
            <div class="id">
              <span>MDIB7I</span>
            </div>
            <div class="copy">
              <span>复制</span>
            </div>
          </div>
        </div>
        <div class="top-right">
          <div class="message" style="margin-right: 1rem;">
            <img src="../../assets/img/user/myimg1.png"/>
          </div>
          <div class="settings">
            <img src="../../assets/img/user/myimg2.png" />
          </div>
        </div>
        <div class="money">
          <div class="yue">
            <span>余额 ￥0.00</span>
          </div>
          <div class="tixian">
            立即提现
          </div>
          <div class="wenhao">
            <img src="../../assets/img/user/tixianwenti.png"/>
          </div>
          <div class="fenge"></div>
          <div class="money-bottom flex">
            <div>今日预估<br /><span>0.00</span></div>
            <div>本月预估<br /><span>0.00</span></div>
            <div>上月预估<br /><span>0.00</span></div>
            <div>上月结算<br /><span>0.00</span></div>
          </div>
        </div>
      </div>
      <!-- 个人功能区 -->
      <div class="mainer">
        <!-- 下面的四大个人功能区 -->
        <div>
          <van-grid class="my-shop" :border="false" :column-num="4">
            <van-grid-item v-for="(n,index) in myShop" :key="index">
              <img class="myShopImg" :src="n.imgurl">
              <div class="myShopFont">{{n.myShopTxt}}</div>
            </van-grid-item>
          </van-grid>
        </div>
        <!-- 多个广告 -->
        <div>
          <van-row type="flex" justify="space-around" align="center">
            <van-col span="6">
              <van-image class="advImg1" width="10rem" :src="require('../../assets/img/user/myimg16.png')" />
            </van-col>
            <van-col span="6">
              <van-image class="advImg2" width="10rem" :src="require('../../assets/img/user/myimg17.png')" />
            </van-col>
          </van-row>
          <!-- 活动 -->
          <van-row type="flex" justify="space-around" align="center">
            <van-image width="21rem" :src="require('../../assets/img/user/huodong.png')" />
          </van-row>
          <!-- 申请 -->
          <div class="myApply">
          <van-row>
            <van-col>
            <!-- 	<van-image width="1.5rem" :src="require('../../assets/img/user/myselfjx-18.png')" /> -->
            <img class="applyImg" src="../../assets/img/user/myselfjx-18.png">
            </van-col>
            <van-col>
              <div class="applyFont">
                <div>升级 运营商 级别</div>
                <div class="myIndentFont">带你轻松月入百万</div>
              </div>
            </van-col>
            <van-col>
              <!-- <van-button class="myBtn1" color="linear-gradient(to right, #F85220, #F78727)">
                立即申请
              </van-button> -->
              <button class="myBtn1">
                立即申请
              </button>
            </van-col>
          </van-row>
          </div>
        </div>
        <!-- 订单条 -->
        <div class="myIndent">
          <van-grid :border="false" :column-num="4">
            <van-grid-item v-for="(n,index) in myIndent " :key="index">
              <img class="myShopImg" :src="n.imgurl">
              <div class="myIndentFont">{{n.myShopTxt}}</div>
            </van-grid-item>
          </van-grid>
        </div>
        <!-- 我的工具 -->
        <div class="tool distance">
          <van-panel title="我的工具">
            <div>
              <van-grid :border="false" :column-num="4">
                <van-grid-item v-for="(n,index) in myTool" :key="index">
                  <img class="myToolImg" :src="n.imgurl">
                  <div class="myIndentFont">{{n.myShopTxt}}</div>
                </van-grid-item>
              </van-grid>
            </div>
          </van-panel>
        </div>
      <!-- 实验室-->
      <div class="lab distance">
        <van-panel title="实验室">
          <div>
            <van-grid :border="false" :column-num="4">
              <van-grid-item v-for="(n,index) in myLab" :key="index">
                <img class="myToolImg" :src="n.imgurl">
                <div class="myIndentFont">{{n.myShopTxt}}</div>
              </van-grid-item>
            </van-grid>
          </div>
        </van-panel>
      </div>
      <!-- 联系我们-->
      <div class="contact distance">
        <van-panel title="联系我们">
          <div>
            <van-grid :border="false" :column-num="4">
              <van-grid-item v-for="(n,index) in myContact" :key="index">
                <img class="myToolImg" :src="n.imgurl">
                <div class="myIndentFont">{{n.myShopTxt}}</div>
              </van-grid-item>
            </van-grid>
          </div>
        </van-panel>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userbox1',
    data() {
      return {
        myShop: [{
            imgurl: require('../../assets/img/user/myimg3.png'),
            myShopTxt: '我的收益'
          },
          {
            imgurl: require('../../assets/img/user/myimg4.png'),
            myShopTxt: '我的团队'
          },
          {
            imgurl: require('../../assets/img/user/myimg5.png'),
            myShopTxt: '我的收藏'
          },
          {
            imgurl: require('../../assets/img/user/myimg6.png'),
            myShopTxt: '足迹'
          }
        ],
        myIndent: [{
            imgurl: require('../../assets/img/user/myselfjx-09.png'),
            myShopTxt: '我的订单'
          },
          {
            imgurl: require('../../assets/img/user/myselfjx-32.png'),
            myShopTxt: '订单找回'
          },
          {
            imgurl: require('../../assets/img/user/xiaoCx.png'),
            myShopTxt: '悦拜小程序'
          },
          {
            imgurl: require('../../assets/img/user/myselfjx-09.png'),
            myShopTxt: '历史'
          }
        ],
        myTool: [{
            imgurl: require('../../assets/img/user/1.png'),
            myShopTxt: '云发单'
          },
          {
            imgurl: require('../../assets/img/user/2.png'),
            myShopTxt: '地推物料'
          },
          {
            imgurl: require('../../assets/img/user/3.png'),
            myShopTxt: '链接转换'
          },
          {
            imgurl: require('../../assets/img/user/4.png'),
            myShopTxt: '日结申请'
          },
          {
            imgurl: require('../../assets/img/user/5.png'),
            myShopTxt: '个人商城'
          },
          {
            imgurl: require('../../assets/img/user/6.png'),
            myShopTxt: 'PC网站'
          },
          {
            imgurl: require('../../assets/img/user/7.png'),
            myShopTxt: '换邀请码'
          },
          {
            imgurl: require('../../assets/img/user/8.png'),
            myShopTxt: '链接解析'
          },
          {
            imgurl: require('../../assets/img/user/9.png'),
            myShopTxt: '任务奖励'
          },
          {
            imgurl: require('../../assets/img/user/10.png'),
            myShopTxt: '口令红包'
          },
          {
            imgurl: require('../../assets/img/user/11.png'),
            myShopTxt: '商品播报'
          },
          {
            imgurl: require('../../assets/img/user/12.png'),
            myShopTxt: '商品线报'
          }
        ],
        myLab: [{
            imgurl: require('../../assets/img/user/13.png'),
            myShopTxt: '多商品分享'
          },
          {
            imgurl: require('../../assets/img/user/14.png'),
            myShopTxt: '商品合作'
          },
          {
            imgurl: require('../../assets/img/user/15.png'),
            myShopTxt: '办卡流量'
          },
          {
            imgurl: require('../../assets/img/user/16.png'),
            myShopTxt: '办信用卡'
          }
        ],
        myContact: [{
            imgurl: require('../../assets/img/user/17.png'),
            myShopTxt: '联系客服'
          },
          {
            imgurl: require('../../assets/img/user/18.png'),
            myShopTxt: '商务合作'
          },
          {
            imgurl: require('../../assets/img/user/19.png'),
            myShopTxt: '意见反馈'
          },
          {
            imgurl: require('../../assets/img/user/20.png'),
            myShopTxt: '关于'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  /* 主体样式 */
  .user{
    margin-bottom: 5rem;
    overflow: hidden;
  }
  .mainer {
    border: .5rem solid white;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }
  .my-shop {
    border: 1px solid rgb(247, 247, 247);
    border-radius: .5rem;
    padding-top: 1rem;
    background-color: white;
  }
  .myShopImg {
    width: 2.5rem;
    margin-top: -1rem;
  }
  .myShopFont {
    margin-top: .5rem;
  }
  .van-row {
    background-color: white;
  }
  .advImg1 {
    position: relative;
    left: -2.3rem;
  }
  .advImg2 {
    position: relative;
    left: -2.3rem;
  }
  .myApply{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: white;
  }
  .applyFont{
    margin-left: 1.5rem;
  }
  .applyImg{
    width: 1.5rem;
    margin-left: .5rem;
    margin-top: .5rem;
  }
  .myBtn1{
    width: 5rem;
    height: 1.5rem;
    text-align: center;
    border: .1rem solid #F78727;
    border-radius: .5rem;
    background-color: #F78727;
    color:  white;
    font-size: .8rem;
    margin-left: 4rem;
    margin-top: .5rem;
  }
  .myIndentFont {
    margin-top: .5rem;
    font-size: .8rem;
    color: #979797;
  }
  .myToolImg{
    width: 1.5rem;
  }
  .van-cell__title{
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-left: .5rem;
  }
  .distance{
    margin-top: .5rem;		
  }
  .iconImg{
    width: 2rem;
    margin-top: -1rem;
  }
  .user {
    height: 100%;
    position: relative;
    background-color: rgb(245,245,245);
  }	
  .flex {
    display: flex;
  }
  .container {
    flex-direction: column;
    padding-top: 2rem;
    width: 100%;
    height: 15rem;
    background-image: url(../../assets/img/user/fenleiPop_01.png);	
  }
  .touxiang {
    width: 3.75rem;
    height: 3.75rem;
    position:absolute;
    top: 3.75rem;
    left: 0.625rem;
    border: 0.0625rem white solid;
    border-radius: 1.875rem;
    background-image: url(../../assets/img/user/a.png);
    background-color: red;
    background-size: 100%;
  }
  .info {
    width: 6.25rem;
    height: 2.5rem;
    top: 4.375rem;
    left: 6.25rem;
    position: absolute;
  }
  .name {
    display: inline-block;
    font-size: 0.8125rem;
  }
  .name>span {
    color: white;
  }
  .vip {
    display: inline-block;
    background-color: #dc772f;
    width: 2.375rem;
    height: 0.9375rem;
    font-size: 0.5rem;
    text-align: center;
    line-height: 0.9375rem;
    border-radius: 0.3125rem;
    margin-left: 0.4375rem;
    margin-right: 0.4375rem;
  }
  .vip>span {
    color: white;
  }
  .rocket {
    display: inline-block;
    width: 0.9375rem;
    height: 0.9375rem;
  }
  .rocket>img {
    width: 100%;
  }
  .id {
    display: inline-block;
    background-color: white;
    width: 3.125rem;
    height: 1.0625rem;
    font-size: 0.5rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.0625rem;
    border-radius: 0.5rem;
  }
  .copy {
    display: inline-block;
    background-color: #b0b7bc;
    width: 2.375rem;
    height: 1.0625rem;
    font-size: 0.4375rem;
    font-weight: 200;
    text-align: center;
    line-height: 1.0625rem;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
  }
  .copy>span {
    color: white;
  }
  .top-right {
    width: 3.75rem;
    height: 1.875rem;
    position: absolute;
    top: 1.875rem;
    right: 1.25rem;
  }
  .top-right>div {
    display: inline-block;
    width: 1.25rem;
  }
  .top-right>div>img {
    width: 100%;
  }
  .money {
    position: absolute;
    left: 0;
    right: 0;
    top: 10rem;
    margin: 0 auto;
    width: 96%;
    height: 6.875rem;
    background-image: url(../../assets/img/user/my_yeart_03.png);
    background-size: cover;
  }
  .yue {
    display: inline-block;
    font-size: 0.875rem;
    margin-top: 0.9375rem;
    margin-left: 0.875rem;
  }
  .yue>span {
    color: #f0f1b3;
  }	
  .tixian {
    display: inline-block;
    position: absolute;
    right: 2.8125rem;
    width: 4.6875rem;
    height: 1.375rem;
    font-size: 0.8125rem;
    text-align: center;
    line-height: 1.375rem;
    background-color: #f5d686;
    border-radius: 0.5rem;
    margin-top: 0.9375rem;
  }
  .tixian>span {
    color: saddlebrown;
  }
  .wenhao {
    display: inline-block;
    position: absolute;
    right: 0.9375rem;
    width: 1.0625rem;
    margin-top: 1.125rem;
  }
  .wenhao>img {
    width: 100%;
  }		
  .fenge {
    position: relative;
    left: 0;
    right: 0;
    top: 1.125rem;
    width: 88%;
    height: 0.0625rem;
    border-top: 0.0625rem gray dashed;
    padding: 0;
    margin: 0 auto;
  }
  .money-bottom {
    position: relative;
    left: 0;
    right: 0;
    top: 1.375rem;
    width: 100%;
    height: 1.875rem;
    justify-content: space-around;
  }
  .money-bottom>div {
    margin-top: 0.5rem;
    text-align: center;
    color: #864AFE;
    font-size: 0.75rem;
  }
  .money-bottom>div>span {
    color: #f0f1b3;;
  }
</style>

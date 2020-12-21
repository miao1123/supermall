<template>
  <div class="baokuan-main">
    <div class="baokuan-wenzi">
      <div><slot name="content1"></slot></div>
    </div>
    <!-- <img :src="item.goods.mainimage" /> -->
    <div class="baokuan-pic">
      <slot name="smallimages"></slot>
    </div>
    <div class="baokuan-price">
      <div class="baokuan-minpic">
        <slot name="goods.mainimage"></slot>
      </div>
      <div class="baokuan-title1">
        <slot name="goods.title"></slot>
      </div>
      <div class="baokuan-price-box">
        <div class="baokuan-price1">
          <div class="baokuan-price1-box">
            <div class="baokuan-price2">
              ￥<slot name="goods.couponPrice"></slot>
            </div>
            <div class="baokuan-price3">
              ￥<slot name="goods.couponAmount"></slot>
            </div> 
          </div>
          <div class="baokuan-price2-box">
            <div class="baokuan-price5">券后价</div>
            <div class="baokuan-price6">券额</div>
          </div>
          <div class="baokuan-price3-box">
            <div class="baokuan-price4">
              ￥<slot name="goods.commission"></slot><br/>
            </div>
            <div class="baokuan-price7">预估赚<br/></div>
          </div>
        </div>
       <img src="../../assets/img/community/triangle.png" class="baokuan-img1"/>
     </div>
    </div>
    <div class="baokuan-cuntu">
      <div class="baokuan-cuntu1">
        <img src="../../assets/img/community/sharesave.png" />
        <div>批量存图</div>
      </div>
      <div class="baokuan-cuntu1">
        <img src="../../assets/img/community/shareword.png" />
        <div>复制口令</div>
      </div>
      <div class="baokuan-cuntu1">
        <img src="../../assets/img/community/sharecopytext.png" />
        <div>复制文案</div>
      </div>
      <div class="baokuan-cuntu1">
        <img src="../../assets/img/community/sharesend.png" />
        <div>一键发单</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaoKuanMainItem'
  }
</script>

<style>
  .baokuan-main{
     position: relative;
     top: 0.5rem;
     padding: 0 0.5rem;
   }
   .baokuan-wenzi{
     margin-top: 0.5rem;
     font-size: 0.9rem;
  
   }
   .baokuan-pic{
     display: flex;
     flex-wrap: wrap;
   }
   /* .baokuan-tupian{
     width: 31%;
     height: 5.7rem;
     padding: 0.2rem;
     margin-top: 0.3rem;
  
   }
   .baokuan-tupian>img{
     width: 100%;
     height: 100%;
     border-radius: 0.5rem;
   } */
   .baokuan-price{
     width: 100%;
     height: 5.5rem;
     margin-top: 0.5rem;
     border-radius: 0.5rem;
     background-color: #F1F1F2;
   }
   .baokuan-minpic>img{
     width: 22%;
     height: 4.5rem;
     border-radius: 1rem;
     padding: 0.6rem;
   }
   .baokuan-title1{
     position: absolute;
     bottom:7.3rem;
     left: 6rem;
     font-size: 0.8rem;
     height: 1rem;
     width: 14.5rem;
     line-height: 1rem;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
   }
   .baokuan-price-box{
     width: 65%;
     height: 3rem;
     border-radius: 0.5rem;
     border:0.09rem solid #FFABAB;
     position: absolute;
     right: 1.2rem;
     bottom: 3.9rem;
     background-color: white;
   }
   .baokuan-price1-box>div{
     display: inline-block;
     position: absolute;
     margin-top: 0.2rem;
     font-size: 1rem;
   }
   .baokuan-price2{
     color: #FE0000;
     position: absolute;
     left: 1rem;
   }
   .baokuan-price3{
     color: #FE0000;
     position: absolute;
     left: 6rem;
   }
   .baokuan-price4{
     position: absolute;
     left: 0.8rem ;
     top: 0.2rem;
     font-size: 1rem;
   }
   .baokuan-price2-box>div{
       display: inline-block;
       position: absolute;
       margin-top: 1.5rem;
       font-size: 0.75rem;
   }
   .baokuan-price5{
     position: absolute;
     left: 1.8rem;
   }
   .baokuan-price6{
     position: absolute;
     left: 6.2rem;
   }
  .baokuan-price7{
     position: absolute;
     left: 1.2rem ;
     width: 5rem;
     top: 1.5rem;
     font-size: 0.75rem;
   }
   .baokuan-price3-box{
     background-image: url(../../assets/img/community/spage-02.png);
     background-size:110%;
     width: 5rem;
     top: -0.1rem;
     height: 3.2rem;
     right: -0.1rem;
     border-radius: 0.5rem;
     position: absolute;
     color: white;
   }
   .baokuan-img1{
     position: absolute;
     width: 0.7rem;
     right:4.9rem ;
     top: 0.8rem;
   }
   .baokuan-cuntu{
     width: 100%;
     height: 2.5rem;
     border: 2px solid #EEEEEE;
     border-radius:0.5rem ;
     margin-top: 0.6rem;
     display: flex;
   }
   .baokuan-cuntu1{
     width: 100%;
     margin-top: 0.5rem;
     margin-left: 0.2rem;
     display: flex;
     display: inline-block;
   }
   .baokuan-cuntu1>img{
     width: 1.2rem;
     height: 1.2rem;
   }
   .baokuan-cuntu1>div{
     width: 3rem;
     font-size: 0.7rem;
     padding: 0.2rem;
     bottom: 0.8rem;
     position: absolute;
     display: inline-block;
   }
</style>

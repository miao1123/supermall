<template>
  <div class="lesson-search">
   <form action="#" method="post">
    <img src="../../../assets/img/lesson/search.png" alt="">
    <input type="text" name="condition" placeholder="点击搜索课程">
    <input type="submit" value="搜索">
   </form> 
  </div>
</template>

<script>
export default {
  name: 'Search'
  // data() {
  //   return {
  //     nav: true,
  //     value: '',
  //     opa: '1'
  //   }
  // },
  // mounted() {  
  //   //事件监听滚动条  
  //   window.addEventListener('scroll', this.scrollListen)  
  // },
  // methods: {
  //   onSearch(val) {
  //     Toast(val);
  //   },
  //   onCancel() {
  //     Toast('取消');
  //   },
  //   scrollListen() {
		// 	this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
		// 	if (this.scroll > 50) {
		// 		this.opa = '1'
		// 	} else {
		// 		this.opa = '0.6'
		// 	}
		// }
  // },
  // computed: {
  // }
}
</script>

<style>
  *{
   margin: 0;
   padding: 0;
  }
/* body{
   width: 100%;
   height: 20px;
   display: flex;
   margin-top: 15rem;
   justify-content: center;
   align-items: center;
  } */
  input::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: 0.75rem;
    text-align: left;
  }
 div.lesson-search{
   height: 2.5rem;
   width: 100%;  
  }
/*  div.search form{
   width: 90%;
   height: 70%;
  } */
  div.lesson-search form input:nth-child(2){
   width: 85%;
   height: 1.35rem;
   font-size: 1rem;
   text-indent: 1.875rem;
/*   border-radius: 0.3125rem solid white; */
   border-top-left-radius: 0.3rem;
   border-bottom-left-radius: 0.3rem;
   border-style: none;
   float: left;
  }
  div.lesson-search form input:nth-child(3){
   width: 14.5%;
   height: 1.36rem;
   font-size: 0.7rem;
/*   letter-spacing: 5px; */
   border-style: none;
   border-top-right-radius: 0.3rem;
   border-bottom-right-radius: 0.3rem;
   background-color: white;
  }
  div.lesson-search form img{
   position: absolute;
   left: 0.9375rem;
/*   transform: translateX(-250px); */
/*   margin-top: 0.125rem;
 */   
    margin-left: 0.5rem;
    margin-top: 0.2rem;
    height: 1rem;
    
  }
</style>

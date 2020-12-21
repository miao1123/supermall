<template>
	<div class="tab-control-muying">
		<div v-for="(item,index) in titles" 
		class="tab-control-item1" 
		:class="{active:index === currentIndex}"
		@click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabControl-muying",
		props: {
			titles: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index){
				this.currentIndex = index
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style scoped>
	.tab-control-muying{
		display: flex;
		justify-content: space-between;
		height: 2rem;
		line-height: 2rem;
		background-color: #f5f5f5;
	}
	.tab-control-item1{
		margin-left: 5%;
		margin-right: 5%;
	}
	.active span{
		color: #6742C5;
		border-bottom: 0.125rem solid #6742C5;
	}
</style>

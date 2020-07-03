<template>
	<view class="container">
		<view class="flex col">
			<view class="flex itemClass" v-for="(item,index) in lists" :key="index">
				{{item.text}}
				<button v-if="index == days && isSignIn == 0" type="primary" size="mini" @click="Sign">签到</button>
				<button disabled v-if="index == days - 1 && isSignIn == 1" type="primary" size="mini">已签到</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[
					{
						text: "积分*1"
					},
					{
						text: "积分*2"
					},
					{
						text: "积分*3"
					},
					{
						text: "积分*4"
					},
					{
						text: "积分*5"
					},
					{
						text: "积分*6"
					},
					{
						text: "积分*7"
					},
				],
				days:null,
				isSignIn: 1,
				score: 0,
				
			}
		},
		mounted(){
			this.getSign()
		},
		methods: {
			Sign(){
				uni.request({
					url: this.$baseUrl + 'data/sign.do',
					method: 'POST',
					data: {
						userId: 2
					},
					success: (res) => {
						uni.showToast({
						    title: '签到成功',
						    duration: 1000
						});
						this.getSign()
					}
				});
			},
			getSign(){
				uni.request({
					url: this.$baseUrl + 'data/getSignData.do',
					method: 'POST',
					data: {
						userId: 2
					},
					success: (res) => {
						this.days = res.data.data.days
						this.isSignIn = res.data.data.isSignIn
						this.score = res.data.data.score
					}
				});
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.itemClass{
		margin-bottom: 5px;
		border-bottom: 1px solid #ccc;
	}
</style>

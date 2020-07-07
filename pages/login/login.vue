<template>
	<view class="login_wrap">
		<view class="flex center" style="margin-bottom: 10rpx;">
			<view class="title">账号：</view>
			<input class="uni-input" placeholder="请输入账号" v-model="ruleForm.username" />
		</view>
		<view class="flex center">
			<view class="title">密码：</view>
			<input class="uni-input" placeholder="请输入密码" password v-model="ruleForm.password" />
		</view>
		<view class="flex center">
			<button type="primary" size="mini" @click="submitForm"> 登录 </button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					username: "小汤",
					password: "2"
			    },
			}
		},
		methods: {
			submitForm(){
				uni.request({
					url: this.$baseUrl + 'login.do',
					method: 'POST',
					data: this.ruleForm,
					success: (res) => {
						 console.log(res.data.data,111)
						if (res.data.code == 0) {
							uni.showToast({
							    title: '登录成功',
							    duration: 1000
							});
							this.$store.dispatch('getUserInfo',res.data.data)
							// console.log(this.$store.state.loginProvider)
							setTimeout(()=>{uni.navigateTo({
								url: '/pages/index/index'
							})},1000)
						 }else{
							 console.log(res.data.data,222)
							 uni.showToast({
							     title: JSON.stringify(res.data),
							     duration: 10000
							 });
						 }
					}
				});
			}
		}
	}
</script>

<style lang="scss">
.login_wrap{
	padding: 50rpx 0;
}
</style>

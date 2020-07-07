let env = {}
env = {
	baseUrl: "http://192.168.8.134:3000/"
}
//#ifdef MP-WEIXIN-RELEASE
	env = {
		baseUrl: "http://localhost:3000/"
	}
//#endif
//#ifdef H5
	env = {
		baseUrl: "http://localhost:3000/"
	}
//#endif
 module.exports = env
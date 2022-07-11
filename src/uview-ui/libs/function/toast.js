function toast(title, duration = 2000) {
	uni.showToast({
		title: title,
		icon: 'none',
		duration: duration
	})
}

export default toast

<template lang="pug">
	.preloader
		.preloader__body
			.preloader__text Loading...
</template>

<script>
	export default {
		name: 'preloader',
		props: {},
		watch: {},
		data () {
			return {}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.preloader {
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(white, 0.95);
		
		&__body {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
		
		&__text {
			font-size: 18px;
			font-weight: $normal-font-weight;
			color: $color-grey-text;
			text-align: center;
		}
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all .2s ease;
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>

<template lang="pug">
	#app
		.wrapper
			router-view
		transition(name="fade")
			preloader(v-if="loading")
</template>

<script>
	import preloader  from '@/components/ui/preloader'
	import {mapState} from 'vuex'
	
	export default {
		name: 'App',
		components: {
			preloader
		},
		computed: {
			...mapState({
				loading: state => state.loading
			})
		}
	}
</script>

<style>
	#app {
		position: relative;
	}
</style>

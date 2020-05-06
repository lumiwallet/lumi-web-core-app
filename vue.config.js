module.exports = {
	devServer: {
		host: '127.0.0.1'
	},
	configureWebpack: {
		resolve: {
			symlinks: false
		}
	},
	lintOnSave: process.env.NODE_ENV !== 'production',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/variables.scss";`
			}
		}
	},
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html'
		}
	}
}

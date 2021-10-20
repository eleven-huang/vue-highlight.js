import { Configuration, nodeExternals } from '@gluons/vue-up';
import { resolve } from 'path';

const config: Configuration = {
	entry: resolve(__dirname, './src/index.ts'),
	libraryName: 'VueHighlightJSExpand',
	fileName: 'vue-highlightjs-expand',
	externals: {
		module: nodeExternals({
			extra: [/^highlight\.js/],
			whitelist: [
				/vue-class-component/,
				/vue-property-decorator/
			]
		}),
		web: ['highlight.js', 'highlight.js/lib/highlight']
	},
	globals: {
		'highlight.js': 'hljs',
		'highlight.js/lib/highlight': 'hljs'
	},
	dev: {
		entry: resolve(__dirname, './dev/main.ts'),
		htmlTitle: 'Vue Highlight.js'
	}
};

export default config;

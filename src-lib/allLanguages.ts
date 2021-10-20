import hljs from 'highlight.js';

import vue from './languages/vue';
import hljsDefineGraphQL from './languages/graphql';

hljs.registerLanguage('vue', vue);
hljsDefineGraphQL(hljs);

(function(t){function e(e){for(var r,o,s=e[0],l=e[1],u=e[2],h=0,g=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(g.length)g.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-highlight.js/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0330":function(t,e,n){},"21bb":function(t,e,n){"use strict";n("0330")},2266:function(t,e,n){},4003:function(t,e,n){"use strict";n("dc24")},5153:function(t,e,n){"use strict";n("2266")},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"Home",(function(){return D}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4160"),n("159b"),n("b64b");var a=n("2b0e"),i=n("c964"),o=n("f676"),s=n("8475"),l=n("8f94"),u=n.n(l),c=n("ee8c"),h=n.n(c),g=n("4dd1"),p=n.n(g),d=n("8ed1"),v=n.n(d),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("github-corners",{attrs:{repo:"gluons/vue-highlight.js"}}),n("home")],1)},m=[],b=n("5530"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("header",[n("h1",[n("v"),t._v("ue Highlight.js")],1),t._m(0),n("p",{staticClass:"repo-buttons-container"},[n("gh-btns-star",{attrs:{slug:"gluons/vue-highlight.js"}}),n("gh-btns-fork",{attrs:{slug:"gluons/vue-highlight.js"}})],1)]),n("hr",{staticClass:"divider"}),n("main",[n("usage"),n("hr",{staticClass:"gap dash"}),n("demo")],1),t._m(1)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"emoji"},[t._v("📜")]),t._v(" "),n("a",{attrs:{href:"https://highlightjs.org",target:"_blank"}},[t._v("Highlight.js")]),t._v(" syntax highlighter component for "),n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Vue")]),t._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",[t._v("Made by "),n("a",{attrs:{href:"https://github.com/gluons",target:"_blank"}},[t._v("Saran Tanpituckpong")])]),n("div",{staticStyle:{"margin-top":".5em"}},[n("a",{attrs:{href:"https://github.com/gluons/vue-highlight.js/tree/docs",target:"_blank"}},[t._v("View Source")])])])}],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"usage"}},[n("h2",[t._v("Usage")]),n("h3",[t._v("Main File:")]),n("highlight-code",{attrs:{lang:"javascript",code:t.mainFileContent}}),n("h3",[t._v("Vue File:")]),n("highlight-code",{attrs:{lang:"vue",code:t.vueFileContent}})],1)},O=[],x="\nimport Vue from 'vue';\nimport VueHighlightJS from 'vue-highlight.js';\nimport App from './App';\n\n// Highlight.js languages (Only required languages)\nimport css from 'highlight.js/lib/languages/css';\nimport javascript from 'highlight.js/lib/languages/javascript';\nimport vue from 'vue-highlight.js/lib/languages/vue';\n\n/*\n * Import Highlight.js theme\n * Find more: https://highlightjs.org/static/demo/\n */\nimport 'highlight.js/styles/default.css';\n\n/*\n * Use Vue Highlight.js\n */\nVue.use(VueHighlightJS, {\n\t// Register only languages that you want\n\tlanguages: {\n\t\tcss,\n\t\tjavascript,\n\t\tvue\n\t}\n});\n\nnew Vue({\n\tel: '#app',\n\trender: h => h(App)\n});\n",w='\n<template>\n\t<div id="app">\n\t\t\x3c!-- Code Block --\x3e\n\t\t<highlight-code lang="javascript">\n\t\t\tlet str = \'Hello, World!\';\n\t\t\tconsole.log(str);\n\t\t</highlight-code>\n\n\t\t\x3c!-- Inline Code Block --\x3e\n\t\t<highlight-code lang="javascript" inline>alert(\'Hello, World!\');</highlight-code>\n\t</div>\n</template>\n\n<script>\n// JavaScript...\n<\/script>\n\n<style>\n/* StyleSheet... */\n</style>\n',C={name:"Usage",data:function(){return{mainFileContent:x,vueFileContent:w}}},k=C,V=n("0c7c"),S=Object(V["a"])(k,y,O,!1,null,null,null),H=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"demo"}},[n("h2",[t._v("Demo & Playground")]),n("h3",[t._v("Code:")]),n("codemirror",{attrs:{options:t.editorOptions},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("button",{staticClass:"reset-btn",attrs:{type:"button"},on:{click:t.resetCode}},[t._v("Reset")]),n("h3",[t._v("Result:")]),t.code?n("highlight-code",{attrs:{lang:"javascript",code:t.code}}):n("div",[t._v("No Result")])],1)},P=[],F=(n("498a"),"\nvar app = new Vue({\n  el: '#app',\n  data: {\n    message: 'Hello Vue!'\n  }\n});\n".trim()),$={name:"Demo",data:function(){return{code:F,editorOptions:{mode:"text/javascript",theme:"dracula",lineNumbers:!0}}},methods:{resetCode:function(){this.code=F}}},M=$,J=(n("4003"),Object(V["a"])(M,E,P,!1,null,null,null)),A=J.exports,R={name:"Home",components:{Usage:H,Demo:A}},T=R,U=(n("21bb"),Object(V["a"])(T,_,j,!1,null,null,null)),D=U.exports,B={name:"App",components:Object(b["a"])({},r)},I=B,N=Object(V["a"])(I,f,m,!1,null,null,null),W=N.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"v-char"},[t._v("V")])},z=[],G={name:"V"},K=G,L=(n("5153"),Object(V["a"])(K,q,z,!1,null,null,null)),Q=L.exports,X={V:Q};n("f9d4"),n("a7be"),n("0109"),n("b164"),n("3a06"),n("a4de"),n("b107c");a["a"].config.productionTip=!1,a["a"].use(i["a"],{languages:{css:h.a,javascript:p.a,vue:v.a}}),a["a"].use(o["a"]),a["a"].use(s["a"]),a["a"].use(u.a),Object.keys(X).forEach((function(t){a["a"].component(t,X[t])})),new a["a"]({el:"#app",render:function(t){return t(W)}})},b107c:function(t,e,n){},dc24:function(t,e,n){}});
//# sourceMappingURL=app.b6226e95.js.map
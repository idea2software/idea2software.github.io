(function(e){function t(t){for(var r,o,s=t[0],u=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",[n("v-timeline",{attrs:{reverse:!0,dense:e.$vuetify.breakpoint.smAndDown}},e._l(e.ideas,(function(t,r){return n("v-timeline-item",{key:r,attrs:{"hide-dot":""}},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[e._v(e._s(t.tags.join(", ")))]),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[e._v(" "+e._s(t.title)+" ")]),n("v-card-text",[e._v(e._s(t.description))])],1)],1)})),1)],1),n("router-view"),n("v-footer",{attrs:{padless:"",fixed:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" Idea2Software © 2021. All Rights Reserved. ")])],1)],1)},i=[],o={name:"App",data:function(){return{ideas:[{title:"Mandala Art Gallery",tags:["Art","Mandala"],description:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},{title:"Techinical Blogs",tags:["Programming","Blogs"],description:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."}]}}},s=o,u=n("2877"),l=n("6544"),c=n.n(l),p=n("7496"),d=n("b0af"),v=n("99d9"),f=n("62ad"),m=n("a523"),b=n("553a"),h=n("8414"),y=n("1e06"),g=Object(u["a"])(s,a,i,!1,null,null,null),w=g.exports;c()(g,{VApp:p["a"],VCard:d["a"],VCardText:v["a"],VCardTitle:v["b"],VCol:f["a"],VContainer:m["a"],VFooter:b["a"],VTimeline:h["a"],VTimelineItem:y["a"]});var _=n("8c4f");r["a"].use(_["a"]);var x=new _["a"]({mode:"history",base:"/",routes:[]}),O=n("2f62");r["a"].use(O["a"]);var j=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=n("f309");r["a"].use(C["a"]);var V=new C["a"]({theme:{dark:!0}});r["a"].config.productionTip=!1,new r["a"]({router:x,store:j,vuetify:V,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.d5e4d017.js.map
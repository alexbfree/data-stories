(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{443:function(t,e,n){"use strict";n.r(e);n(26),n(71),n(77);var r={name:"ImageBlock",props:{title:{type:String,default:function(){return""}},imageSrc:{type:String,default:function(){return"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"}},maxWidth:{type:String,default:function(){return"753"}},maxHeight:{type:String,default:function(){return"700"}},source:{type:String,default:function(){return""}}},computed:{hexToRgbA:function(){var t;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.color)?(3===(t=this.color.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),"rgba("+[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")+","+this.colorOpacity+")"):"white"}}},o=(n(582),n(54)),c=n(55),l=n.n(c),f=n(161),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-3 ma-3 d-flex justify-center"},[n("v-img",{attrs:{"max-height":t.maxHeight,"max-width":t.maxWidth,src:t.imageSrc,contain:""}})],1)}),[],!1,null,"6e21f556",null);e.default=component.exports;l()(component,{VImg:f.a})},491:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("7f0d082d",content,!0,{sourceMap:!1})},582:function(t,e,n){"use strict";n(491)},583:function(t,e,n){var r=n(20)(!1);r.push([t.i,".link[data-v-6e21f556]{float:right;margin-top:1em}",""]),t.exports=r}}]);
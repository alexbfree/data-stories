(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{446:function(t,e,r){"use strict";r.r(e);var n={name:"ProfileBlock",props:{title:{type:String,default:function(){return"John Doe"}},jobTitle:{type:String,default:function(){return"Journalist at LeTemps.ch"}},profilePicture:{type:String,default:function(){return"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"}},description:{type:String,default:function(){return"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix ansalutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes"}}}},o=r(54),l=r(55),c=r.n(l),v=r(467),d=r(455),f=r(161),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VCard",{staticClass:"mx-auto",attrs:{tile:"",dark:"",color:"primary"}},[r("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center"}},[r("VAvatar",{staticClass:"ma-4",attrs:{color:"#F0F0F0",size:"170"}},[r("VAvatar",{attrs:{color:"grey",size:"160"}},[r("VImg",{attrs:{src:t.profilePicture}})],1)],1),t._v(" "),r("div",{staticClass:"py-0 ml-6"},[r("div",{staticClass:"text-h4 font-weight-bold"},[t._v("\n            "+t._s(t.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"text-subtitle-1"},[t._v("\n            "+t._s(t.jobTitle)+"\n      ")]),t._v(" "),r("p",{staticClass:"text-subtitle-2 mt-4"},[t._v("\n        "+t._s(t.description)+"\n      ")])])],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:v.a,VCard:d.a,VImg:f.a})},461:function(t,e,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("ad978da8",content,!0,{sourceMap:!1})},462:function(t,e,r){var n=r(20)(!1);n.push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;position:relative;text-align:center;vertical-align:middle;overflow:hidden}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),t.exports=n},467:function(t,e,r){"use strict";r(13),r(11),r(15),r(6),r(22),r(12),r(23);var n=r(2),o=(r(37),r(461),r(66)),l=r(128),c=r(200),v=r(1),d=r(19);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(o.a,l.a,c.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return m({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return m({height:Object(v.g)(this.size),minWidth:Object(v.g)(this.size),width:Object(v.g)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),this.$slots.default)}})}}]);
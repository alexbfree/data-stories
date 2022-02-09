(window.webpackJsonp=window.webpackJsonp||[]).push([[27,22,24,28,29],{432:function(e,t,o){"use strict";o.r(t);var n=o(107),r=(o(6),o(41),o(38),["type"]),l={props:{block:{type:Object,required:!0}},computed:{component:function(){var e=this;return function(){return o(453)("./".concat(e.componentInfos.type))}},componentInfos:function(){var e=this.block;return{type:e.type,props:Object(n.a)(e,r)}}}},c=o(54),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._b({tag:"component"},"component",e.componentInfos.props,!1))}),[],!1,null,null,null);t.default=component.exports},434:function(e,t,o){"use strict";o.r(t);var n={name:"ParagraphBlock",components:{ComponentCaller:o(432).default},props:{title:{type:String,default:function(){return"Title"}},content:{type:Array,default:function(){return[]}}}},r=o(54),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"py-4 mt-4"},[o("h2",{staticClass:"headline font-weight-light mb-4 primary--text"},[e._v(e._s(e.title))]),e._v(" "),e._l(e.content,(function(e,t){return o("span",{key:t},[o("ComponentCaller",{attrs:{block:e}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ComponentCaller:o(432).default})},439:function(e,t,o){"use strict";o.r(t);o(13),o(11),o(15),o(22),o(23);var n=o(2),r=(o(63),o(6),o(12),o(38),o(490)),l=o.n(r);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"FlowBlock",components:{ParagraphBlock:o(434).default},props:{leftText:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},nodes:{type:Array,default:function(){return[]}},content:{type:Array,default:function(){return[]}},nodesAlign:{type:String,default:function(){return"center"}},dividerTop:{type:Boolean,default:function(){return!1}},dividerBottom:{type:Boolean,default:function(){return!1}}},data:function(){return{lines:[],defaultLinkConfig:{color:"#58539e",size:8,path:"grid",startPlug:"behind",endPlug:"arrow",endPlugSize:.5,outline:!1,outlineColor:"#fff",dash:!1,dropShadow:!1,hide:!0}}},mounted:function(){var e=this;setTimeout((function(){e.nodes.forEach((function(t){Object.prototype.hasOwnProperty.call(t,"links")&&t.links.forEach((function(link){return e.drawLink(t,link)}))}))}),300)},destroyed:function(){this.lines.forEach((function(e){return e.remove()}))},methods:{drawLink:function(e,link){if(e.id!==link.id)this.lines.push(new l.a(document.getElementById(e.id),document.getElementById(link.id),f(f({},this.defaultLinkConfig),link.config)).show("draw",{duration:2500}));else{var element=document.getElementById(e.id);this.lines.push(new l.a(l.a.pointAnchor({element:element,x:10}),l.a.pointAnchor({element:element,x:0}),f(f(f({},this.defaultLinkConfig),link.config),{path:"fluid",startSocket:"left",endSocket:"left",startSocketGravity:[-100,100],endSocketGravity:[-100,-100]})).show("draw",{duration:500}))}},getIcon:function(e){return this.$vuetify.icons.values[e]}}},k=(o(473),o(54)),v=o(55),h=o.n(v),m=o(467),y=o(459),B=o(191),w=o(422),component=Object(k.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VRow",{attrs:{align:"center",justify:"center"}},[o("VCol",{staticStyle:{"text-align":"center"},attrs:{cols:"1"}},[o("span",{staticClass:"overline font-weight-bold primary--text"},[e._v("\n      "+e._s(e.leftText)+"\n    ")])]),e._v(" "),o("VCol",{class:{"d-flex":e.nodes.length>1,"justify-space-around":e.nodes.length>1},style:"text-align:"+e.nodesAlign,attrs:{cols:"5"}},e._l(e.nodes,(function(t){return o("div",{key:t.id,staticClass:"node"},[o("VAvatar",{staticClass:"ma-4 pa-4",attrs:{id:t.id,color:"primary","text-color":"white",size:"64"}},[o("VIcon",{attrs:{large:"",dark:""}},[e._v("\n        "+e._s(e.getIcon(t.logo))+"\n      ")])],1),e._v(" "),t.label?o("span",{staticClass:"label overline font-weight-bold primary--text"},[e._v(" "+e._s(t.label)+" ")]):e._e()],1)})),0),e._v(" "),o("VCol",{attrs:{cols:"6"}},[o("ParagraphBlock",e._b({},"ParagraphBlock",{title:e.title,content:e.content},!1))],1)],1)}),[],!1,null,"e1c95ebe",null);t.default=component.exports;h()(component,{VAvatar:m.a,VCol:y.a,VIcon:B.a,VRow:w.a})},453:function(e,t,o){var map={"./AppHeader":[163],"./AppHeader.vue":[163],"./ComponentCaller":[432],"./ComponentCaller.vue":[432],"./DataStory":[433,23],"./DataStory.vue":[433,23],"./base/BreadCrumb":[440,1],"./base/BreadCrumb.vue":[440,1],"./base/LogoImg":[126],"./base/LogoImg.vue":[126],"./base/button/AnimatedLink":[438,2],"./base/button/AnimatedLink.vue":[438,2],"./base/button/BaseButton":[273],"./base/button/BaseButton.vue":[273],"./base/button/PagePreviewLink":[452,0,17,3],"./base/button/PagePreviewLink.vue":[452,0,17,3],"./blocks/ChatBlock":[441,4],"./blocks/ChatBlock.vue":[441,4],"./blocks/CodeBlock":[442,18,5],"./blocks/CodeBlock.vue":[442,18,5],"./blocks/FlowBlock":[439,21,22],"./blocks/FlowBlock.vue":[439,21,22],"./blocks/ImageBlock":[443,6],"./blocks/ImageBlock.vue":[443,6],"./blocks/ListBlock":[444,19,7],"./blocks/ListBlock.vue":[444,19,7],"./blocks/LongQuoteBlock":[445,8],"./blocks/LongQuoteBlock.vue":[445,8],"./blocks/PagePreviewBlock":[435,0,9],"./blocks/PagePreviewBlock.vue":[435,0,9],"./blocks/ParagraphBlock":[434,24],"./blocks/ParagraphBlock.vue":[434,24],"./blocks/ProfileBlock":[446,0,10],"./blocks/ProfileBlock.vue":[446,0,10],"./blocks/QuoteBlock":[447,0,11],"./blocks/QuoteBlock.vue":[447,0,11],"./blocks/ReadAlsoBlock":[448,0,12],"./blocks/ReadAlsoBlock.vue":[448,0,12],"./blocks/TextBlock":[449,13],"./blocks/TextBlock.vue":[449,13],"./blocks/VoiceBlock":[450,14],"./blocks/VoiceBlock.vue":[450,14],"./charts/HorizontalBarChart":[451,20,15],"./charts/HorizontalBarChart.vue":[451,20,15],"./charts/mixin":[437,16],"./charts/mixin.js":[437,16]};function n(e){if(!o.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return Promise.all(t.slice(1).map(o.e)).then((function(){return o(n)}))}n.keys=function(){return Object.keys(map)},n.id=453,e.exports=n},460:function(e,t,o){var content=o(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("c89200cc",content,!0,{sourceMap:!1})},473:function(e,t,o){"use strict";o(460)},474:function(e,t,o){var n=o(20)(!1);n.push([e.i,".label[data-v-e1c95ebe]{position:absolute;top:35%}.node[data-v-e1c95ebe]{position:relative}",""]),e.exports=n}}]);
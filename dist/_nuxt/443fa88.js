(window.webpackJsonp=window.webpackJsonp||[]).push([[28,24,29],{432:function(e,o,t){"use strict";t.r(o);var n=t(107),l=(t(6),t(41),t(38),["type"]),c={props:{block:{type:Object,required:!0}},computed:{component:function(){var e=this;return function(){return t(453)("./".concat(e.componentInfos.type))}},componentInfos:function(){var e=this.block;return{type:e.type,props:Object(n.a)(e,l)}}}},r=t(54),component=Object(r.a)(c,(function(){var e=this,o=e.$createElement;return(e._self._c||o)(e.component,e._b({tag:"component"},"component",e.componentInfos.props,!1))}),[],!1,null,null,null);o.default=component.exports},434:function(e,o,t){"use strict";t.r(o);var n={name:"ParagraphBlock",components:{ComponentCaller:t(432).default},props:{title:{type:String,default:function(){return"Title"}},content:{type:Array,default:function(){return[]}}}},l=t(54),component=Object(l.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"py-4 mt-4"},[t("h2",{staticClass:"headline font-weight-light mb-4 primary--text"},[e._v(e._s(e.title))]),e._v(" "),e._l(e.content,(function(e,o){return t("span",{key:o},[t("ComponentCaller",{attrs:{block:e}})],1)}))],2)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{ComponentCaller:t(432).default})},453:function(e,o,t){var map={"./AppHeader":[163],"./AppHeader.vue":[163],"./ComponentCaller":[432],"./ComponentCaller.vue":[432],"./DataStory":[433,23],"./DataStory.vue":[433,23],"./base/BreadCrumb":[440,1],"./base/BreadCrumb.vue":[440,1],"./base/LogoImg":[126],"./base/LogoImg.vue":[126],"./base/button/AnimatedLink":[438,2],"./base/button/AnimatedLink.vue":[438,2],"./base/button/BaseButton":[273],"./base/button/BaseButton.vue":[273],"./base/button/PagePreviewLink":[452,0,17,3],"./base/button/PagePreviewLink.vue":[452,0,17,3],"./blocks/ChatBlock":[441,4],"./blocks/ChatBlock.vue":[441,4],"./blocks/CodeBlock":[442,18,5],"./blocks/CodeBlock.vue":[442,18,5],"./blocks/FlowBlock":[439,21,22],"./blocks/FlowBlock.vue":[439,21,22],"./blocks/ImageBlock":[443,6],"./blocks/ImageBlock.vue":[443,6],"./blocks/ListBlock":[444,19,7],"./blocks/ListBlock.vue":[444,19,7],"./blocks/LongQuoteBlock":[445,8],"./blocks/LongQuoteBlock.vue":[445,8],"./blocks/PagePreviewBlock":[435,0,9],"./blocks/PagePreviewBlock.vue":[435,0,9],"./blocks/ParagraphBlock":[434,24],"./blocks/ParagraphBlock.vue":[434,24],"./blocks/ProfileBlock":[446,0,10],"./blocks/ProfileBlock.vue":[446,0,10],"./blocks/QuoteBlock":[447,0,11],"./blocks/QuoteBlock.vue":[447,0,11],"./blocks/ReadAlsoBlock":[448,0,12],"./blocks/ReadAlsoBlock.vue":[448,0,12],"./blocks/TextBlock":[449,13],"./blocks/TextBlock.vue":[449,13],"./blocks/VoiceBlock":[450,14],"./blocks/VoiceBlock.vue":[450,14],"./charts/HorizontalBarChart":[451,20,15],"./charts/HorizontalBarChart.vue":[451,20,15],"./charts/mixin":[437,16],"./charts/mixin.js":[437,16]};function n(e){if(!t.o(map,e))return Promise.resolve().then((function(){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=map[e],n=o[0];return Promise.all(o.slice(1).map(t.e)).then((function(){return t(n)}))}n.keys=function(){return Object.keys(map)},n.id=453,e.exports=n}}]);
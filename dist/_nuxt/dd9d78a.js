(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{433:function(e,t,r){"use strict";r.r(t);var n={name:"DataStory",components:{ComponentCaller:r(432).default},props:{manifest:{type:Object,default:function(){}}}},o=r(54),c=r(55),l=r.n(c),f=r(459),d=r(430),O=r(422),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.manifest?r("VContainer",e._l(e.manifest.buildingBlocks,(function(t,n){return r("VRow",{key:n},[r("VCol",{attrs:{cols:"12"}},[r("ComponentCaller",e._b({},"ComponentCaller",{block:t},!1))],1)],1)})),1):e._e()}),[],!1,null,null,null);t.default=component.exports;l()(component,{ComponentCaller:r(432).default}),l()(component,{VCol:f.a,VContainer:d.a,VRow:O.a})},459:function(e,t,r){"use strict";r(11),r(15),r(22),r(23);var n=r(2),o=(r(6),r(37),r(13),r(26),r(59),r(274),r(41),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(38),r(50),r(12),r(61),r(199),r(0)),c=r(94),l=r(1);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],y=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),j=O.reduce((function(e,t){return e["offset"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),m=O.reduce((function(e,t){return e["order"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),v={col:Object.keys(y),offset:Object.keys(j),order:Object.keys(m)};function w(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var S=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=S.get(l);return d||function(){var e,t;for(t in d=[],v)v[t].forEach((function(e){var n=r[e],o=w(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),S.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})}}]);
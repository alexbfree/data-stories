(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{442:function(e,t,n){"use strict";n.r(t);var o=n(571),r=(n(572),n(574)),l=(n(575),n(576),n(577),n(578),{name:"CodeBlock",components:{PrismEditor:o.a},props:{text:{type:String,default:""},language:{type:String,default:"text"},lineNumbers:{type:Boolean,default:!0},readonly:{type:Boolean,default:!0},title:{type:String,default:""},sourceText:{type:String,default:""},sourceLinkURL:{type:String,default:""},sourceLinkText:{type:String,default:""}},data:function(){return{code:this.text}},methods:{highlighter:function(code){switch(this.language){case"javascript":return Object(r.highlight)(code,r.languages.js);case"json":return Object(r.highlight)(code,r.languages.json);default:return Object(r.highlight)(code,r.languages.text)}}}}),c=(n(580),n(54)),d=n(55),h=n.n(d),f=n(430),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VContainer",[n("div",{staticClass:"overline"},[e._v(e._s(e.title))]),e._v(" "),n("PrismEditor",{staticClass:"my-editor",attrs:{highlight:e.highlighter,"line-numbers":e.lineNumbers,"aria-readonly":e.readonly},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e._v(" "),n("div",{staticStyle:{"text-align":"end","margin-top":"0px","font-size":"12px"}},[e._v("\n    "+e._s(e.sourceText)+"\n    "),n("a",{attrs:{target:"_blank",href:e.sourceLinkURL}},[e._v(e._s(e.sourceLinkText))])])],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VContainer:f.a})},489:function(e,t,n){var content=n(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("c2d15e5e",content,!0,{sourceMap:!1})},580:function(e,t,n){"use strict";n(489)},581:function(e,t,n){var o=n(20)(!1);o.push([e.i,".my-editor{background:#fafafa;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;font-size:14px;line-height:1.5;padding:5px}.prism-editor__textarea:focus{outline:none}.height-300{height:300px}",""]),e.exports=o}}]);
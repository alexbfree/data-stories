(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{431:function(e,t,n){"use strict";n.r(t);var r={name:"PagePreviewBlock",props:{title:{type:String,default:"Lorem ipsum"},description:{type:String,default:"Lorem John Doe ipsum dolor sit amet, no nam oblique veritus. Commune imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipi"},image:{type:String,default:"/hestialabs-logo.svg"},imageHeight:{type:String,default:"200px"}}},o=n(54),l=n(55),c=n.n(l),d=n(450),f=n(432),m=n(160),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VCard",e._b({staticClass:"pa-3"},"VCard",e.$attrs,!1),[n("VImg",{attrs:{height:e.imageHeight,src:e.image,contain:""}}),e._v(" "),n("VCardTitle",[e._v(e._s(e.title))]),e._v(" "),n("VCardText",{staticClass:"text--primary"},[n("div",[e._v(" "+e._s(e.description)+" "),n("a",[e._v(" [Read more] ")])])])],1)}),[],!1,null,"5e19ce32",null);t.default=component.exports;c()(component,{VCard:d.a,VCardText:f.a,VCardTitle:f.b,VImg:m.a})},434:function(e,t,n){"use strict";n.r(t);var r={props:{text:{type:String,default:"See also"},link:{type:String,default:"#"}}},o=(n(466),n(54)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",e._g(e._b({staticClass:"link",attrs:{href:e.link}},"a",e.$attrs,!1),e.$listeners),[e._v("\n  "+e._s(e.text)+"\n")])}),[],!1,null,null,null);t.default=component.exports},447:function(e,t,n){"use strict";n.r(t);var r=n(434),o={components:{PagePreviewBlock:n(431).default,AnimatedLink:r.default},props:{text:{type:String,default:"See also"},link:{type:String,default:"true"}}},l=n(54),c=n(55),d=n.n(c),f=n(592),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"open-on-hover":"","offset-x":"","offset-y":"",left:"","max-width":"300px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("AnimatedLink",e._g(e._b({},"AnimatedLink",{text:e.text,link:e.link,attrs:o},!1),r))]}}])},[e._v(" "),n("PagePreviewBlock",{attrs:{"image-height":"100px"}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VMenu:f.a})},456:function(e,t,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("ae5b3482",content,!0,{sourceMap:!1})},466:function(e,t,n){"use strict";n(456)},467:function(e,t,n){var r=n(20)(!1);r.push([e.i,"a.link{color:inherit;text-decoration:none;background:linear-gradient(90deg,#64c8c8,#64c8c8),linear-gradient(90deg,#58539e,#58539e);background-size:100% .15em,0 .15em;background-position:100% 100%,0 100%;background-repeat:no-repeat;transition:background-size .4s}a.link:focus,a.link:hover{background-size:0 .15em,100% .15em}",""]),e.exports=r}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15],{433:function(t,e,r){"use strict";r.r(e),e.default={props:{values:{type:Array,default:function(){return[]}},title:{type:String,default:function(){return""}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.initViz()},watch:{values:function(){this.updateViz()}}}},446:function(t,e,r){"use strict";r.r(e);r(37),r(56),r(6),r(38),r(64);var n=r(588),o={name:"HorizontalBarChart",mixins:[r(433).default],props:{xAccessor:{type:String,required:!0},yAccessor:{type:String,required:!0},xFormat:{type:String,default:function(){return"~s"}},yAxisMaxTickLength:{type:Number,default:function(){return 20}},padding:{type:Number,default:function(){return 5}},margin:{type:Number,default:function(){return 5}},adjVertical:{type:Array,default:function(){return[20,50]}},adjHorizontal:{type:Array,default:function(){return[100,100]}},xLabel:{type:String,default:function(){return"records"}},barsColor:{type:String,default:function(){return"#69b3a2"}}},methods:{initViz:function(){var t=this;n.f("#"+this.graphId+" svg").remove(),this.svg=n.f("#"+this.graphId).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","-"+this.adjHorizontal[0]+" -"+this.adjVertical[0]+" "+(300+n.h(this.adjHorizontal))+" "+(380+n.h(this.adjVertical))).style("padding",this.padding).style("margin",this.margin).classed("svg-content",!0),this.xScale=n.e().range([0,300]),this.yScale=n.d().range([0,380]).paddingInner(.1);var e=n.b(this.yScale).tickFormat((function(e){return r=e,n=t.yAxisMaxTickLength,r.length>n?r.slice(0,n)+"..":r;var r,n})).tickSizeOuter(0),r=n.a(this.xScale).ticks(4);this.xAxis=r,this.yAxis=e,this.svg.append("g").attr("class","xAxis").attr("transform","translate(0,380)").call(r).append("text").attr("dy",".75em").attr("y",30).attr("x",150).style("text-anchor","middle").text(this.xLabel),this.svg.append("g").attr("class","yAxis").call(e),this.updateViz()},updateViz:function(){var t=this;this.xScale.domain(n.c(this.values,(function(e){return e[t.xAccessor]}))),this.yScale.domain(this.values.map((function(e){return e[t.yAccessor]})));var e=this.svg.selectAll(".bars").data(this.values,(function(e){return e[t.yAccessor]})),r=this;this.svg.selectAll(".bars").attr("fill",this.barsColor),e.enter().append("rect").attr("class","bars").attr("x",5).attr("y",(function(e){return t.yScale(e[t.yAccessor])})).attr("width",0).attr("height",this.yScale.bandwidth()).attr("fill",this.barsColor).on("mouseover",(function(t,e){n.f(this).style("opacity",.7),n.f(this.parentNode).append("text").attr("class","barsLabel").text(e[r.xAccessor]).attr("text-anchor","start").attr("alignment-baseline","middle").attr("x",r.xScale(e[r.xAccessor])+15).attr("y",r.yScale(e[r.yAccessor])+r.yScale.bandwidth()/2).style("font-size","0.8rem").style("font-weight","bold").style("fill","#0A0A0A")})).on("mouseleave",(function(){n.f(this).style("opacity",1),n.f(".barsLabel").remove()})).merge(e).transition().duration(1e3).delay(200).attr("y",(function(e){return t.yScale(e[t.yAccessor])})).attr("width",(function(e){return t.xScale(e[t.xAccessor])+5})).attr("height",this.yScale.bandwidth()),e.exit().transition().duration(1e3).attr("width",0).remove(),n.f(".yAxis").transition().duration(1e3).delay(200).call(this.yAxis),n.g(".yAxis g text").transition().duration(1e3).delay(200).style("font-size",1.8/Math.log(this.values.length)+"rem"),n.f(".xAxis").transition().duration(1e3).delay(200).call(this.xAxis)}}},l=(r(576),r(54)),c=r(55),d=r.n(c),h=r(426),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VContainer",[r("div",{staticClass:"overline",staticStyle:{"text-align":"center"}},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticStyle:{position:"relative"},attrs:{id:t.graphId}})])}),[],!1,null,"b83de404",null);e.default=component.exports;d()(component,{VContainer:h.a})},480:function(t,e,r){var content=r(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("4e86343c",content,!0,{sourceMap:!1})},576:function(t,e,r){"use strict";r(480)},577:function(t,e,r){var n=r(20)(!1);n.push([t.i,"[data-v-b83de404] .xAxis line,[data-v-b83de404] .yAxis line{stroke:#706f6f;stroke-width:.5;shape-rendering:geometricPrecision}[data-v-b83de404] .xAxis path,[data-v-b83de404] .yAxis path{stroke:#706f6f;stroke-width:.7;shape-rendering:geometricPrecision}[data-v-b83de404] .yAxis path{display:none}[data-v-b83de404] .xAxis text,[data-v-b83de404] .yAxis text{fill:#2b2929;font-weight:300}[data-v-b83de404] .xAxis text{font-size:1rem}",""]),t.exports=n}}]);
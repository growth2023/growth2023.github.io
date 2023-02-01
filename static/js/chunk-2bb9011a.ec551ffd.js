(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bb9011a"],{"0a5c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],s=a("313e"),r=a.n(s),o=a("feb2");a("817d");var c=3e3,l={mixins:[o["default"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=r.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},radar:{radius:"66%",center:["50%","42%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,95,132,.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"Sales",max:1e4},{name:"Administration",max:2e4},{name:"Information Techology",max:2e4},{name:"Customer Support",max:2e4},{name:"Development",max:2e4},{name:"Marketing",max:2e4}]},legend:{left:"center",bottom:"10",data:["Allocated Budget","Expected Spending","Actual Spending"]},series:[{type:"radar",symbolSize:0,areaStyle:{normal:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1}},data:[{value:[5e3,7e3,12e3,11e3,15e3,14e3],name:"Allocated Budget"},{value:[4e3,9e3,15e3,15e3,13e3,11e3],name:"Expected Spending"},{value:[5500,11e3,12e3,15e3,12e3,12e3],name:"Actual Spending"}],animationDuration:c}]})}}},h=l,d=a("2877"),u=Object(d["a"])(h,i,n,!1,null,null,null);e["default"]=u.exports},"1e4b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("panel-group",{attrs:{"panel-group-list":t.PanelGroupList},on:{handleSetLineChartData:t.handleSetLineChartData}}),t._v(" "),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[a("line-chart",{attrs:{"chart-data":t.lineChart}})],1),t._v(" "),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:12}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart",{attrs:{"chart-data":t.PriceChart}})],1)]),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:12}},[a("div",{staticClass:"chart-wrapper"},[a("pie-chart",{attrs:{"chart-data":t.PieChart}})],1)])],1)],1)},n=[],s=a("fbc4"),r=a("eab4"),o=a("0a5c"),c=a("d153"),l=a("9488"),h={name:"Index",components:{PanelGroup:s["default"],LineChart:r["default"],RaddarChart:o["default"],PieChart:c["default"],BarChart:l["default"]},data:function(){return{PanelGroupList:[{name:"用户数量",orderNumber:"0",className:"icon-people",iconclass:"peoples"},{name:"充值总金额",orderNumber:"0",className:"icon-money",iconclass:"money"},{name:"订单总数",orderNumber:"1",className:"icon-people",iconclass:"shopping"},{name:"店铺总数",orderNumber:"0",className:"icon-people",iconclass:"store"}],lineChart:{xAxis:["5日","6日","7日","8日","9日","10日","11日"],series:[{name:"充值总金额",smooth:!0,type:"line",animationDuration:2800,animationEasing:"cubicInOut",data:[1e4,2e4,6e3,1e4,3e3,5e3,7e3]}]},PieChart:{series:[{name:"安奇尔科技",value:20},{name:"安奇尔科技测试",value:40},{name:"科技",value:60}],length:["安奇尔科技","安奇尔科技测试","科技"]},PriceChart:{xAxis:["5日","6日","7日","8日","9日","10日","11日"],series:[{name:"订单总数",type:"bar",stack:"vistors",barWidth:"60%",animationDuration:6e3,data:[20,30,40,60,80,90,40]}]}}},methods:{handleSetLineChartData:function(t){this.lineChartData=lineChartData[t]}}},d=h,u=(a("68b0"),a("2877")),p=Object(u["a"])(d,i,n,!1,null,"a4900278",null);e["default"]=p.exports},"68b0":function(t,e,a){"use strict";var i=a("7f27"),n=a.n(i);n.a},"7f27":function(t,e,a){},"8dd1":function(t,e,a){},"930d":function(t,e,a){"use strict";var i=a("8dd1"),n=a.n(i);n.a},9488:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],s=a("313e"),r=a.n(s),o=a("feb2");a("817d");var c={mixins:[o["default"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=r.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(t.expectedData,t.actualData,t.myshoperData,[{text:"近七日订单交易成功数"}]),a={text:"暂无数据",x:"center",y:"center",textStyle:{fontWeight:"normal",fontSize:16}};void 0!==this.chartData.series&&0!==this.chartData.series.length||e.push(a),this.chart.setOption({title:e,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{top:20,x:"right"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:this.chartData.xAxis},yAxis:{type:"value"},series:this.chartData.series},!0)}}},l=c,h=a("2877"),d=Object(h["a"])(l,i,n,!1,null,null,null);e["default"]=d.exports},d153:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],s=a("313e"),r=a.n(s),o=a("feb2");a("817d");var c={mixins:[o["default"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Object,default:{}}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=r.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){this.chart.setOption({title:{text:"店铺在售商品排行",padding:0},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:this.chartData.length},series:[{name:"在售商品数量：",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:this.chartData.series,animationEasing:"cubicInOut",animationDuration:2600}]})}}},l=c,h=a("2877"),d=Object(h["a"])(l,i,n,!1,null,null,null);e["default"]=d.exports},eab4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],s=a("313e"),r=a.n(s),o=a("feb2");a("817d");var c={mixins:[o["default"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,options:{title:{text:"近7日用户充值金额",padding:0},grid:{left:12,right:12,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},xAxis:[{boundaryGap:!1,axisTick:{show:!1}}],yAxis:{axisTick:{show:!1}},series:{itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",animationDuration:2800,animationEasing:"cubicInOut"}}}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=r.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){this.chart.setOption({title:{text:"近7日用户充值金额",padding:0},xAxis:{data:this.chartData.xAxis,boundaryGap:!1,axisTick:{show:!1}},grid:{left:12,right:12,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:this.chartData.length},series:this.chartData.series})}}},l=c,h=a("2877"),d=Object(h["a"])(l,i,n,!1,null,null,null);e["default"]=d.exports},fbc4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},t._l(t.PanelGroupList,(function(e,i){return a("el-col",{key:i,staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper",class:e.className},[a("svg-icon",{attrs:{"icon-class":e.iconclass,"class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),a("div",{staticClass:"Number"},[t._v(t._s(e.orderNumber))])])])])})),1)},n=[],s=a("ec1b"),r=a.n(s),o={components:{CountTo:r.a},props:{PanelGroupList:{type:Array,default:[]}},created:function(){},data:function(){return{}},methods:{}},c=o,l=(a("930d"),a("2877")),h=Object(l["a"])(c,i,n,!1,null,"41e78c08",null);e["default"]=h.exports},feb2:function(t,e,a){"use strict";a.r(e);var i=a("ed08");e["default"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){this.initListener()},activated:function(){this.$_resizeHandler||this.initListener(),this.resize()},beforeDestroy:function(){this.destroyListener()},deactivated:function(){this.destroyListener()},methods:{$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},initListener:function(){var t=this;this.$_resizeHandler=Object(i["c"])((function(){t.resize()}),100),window.addEventListener("resize",this.$_resizeHandler),this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},destroyListener:function(){window.removeEventListener("resize",this.$_resizeHandler),this.$_resizeHandler=null,this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)},resize:function(){var t=this.chart;t&&t.resize()}}}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c09c9e76"],{"13de":function(t,e,n){},ab6d:function(t,e,n){"use strict";(function(t){n("a9e3");e["a"]={name:"CustomInfoBox",components:{},props:{title:{type:String,default:"属性"},lng:String,lat:String,height:{type:String,default:"40"},info:Array,id:{type:String,default:"CustomInfoBox"}},watch:{},data:function(){return{infoVisible:!0}},computed:{},methods:{CustomInfoBox:function(){var e=this;this.$nextTick((function(){var n=window.viewer,i=n.entities.add({id:e.title,position:t.Cartesian3.fromDegrees(Number(e.lng),Number(e.lat)),point:{color:t.Color.SKYBLUE,pixelSize:12,outlineColor:t.Color.YELLOW,outlineWidth:3,heightReference:t.HeightReference.CLAMP_TO_GROUND}});e.bubbleInit(i.position._value)}))},bubbleInit:function(e){var n=this.$refs.CustomInfoBox,i=window.viewer.scene,o=window.viewer.scene.postRender,s=e,r=this;o.addEventListener((function(){if(s){var e=i.canvas.height,o=new t.Cartesian2;t.SceneTransforms.wgs84ToWindowCoordinates(i,s,o),n.style.bottom=e-o.y+Number(r.height)+"px",n.style.left=o.x+"px"}}))},close:function(){this.infoVisible=!1,window.viewer.trackedEntity=void 0,window.viewer.entities.removeById(this.title)}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){this.CustomInfoBox()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){this.close()},destroyed:function(){},activated:function(){}}}).call(this,n("ec35"))},ac2f:function(t,e,n){"use strict";n("13de")},f2d1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.infoVisible?n("div",{ref:"CustomInfoBox",staticClass:"CustomInfoBox"},[n("div",{staticClass:"bubble-tools"},[n("span",{staticClass:"bubble-title"},[t._v(t._s(t.title))]),n("span",{staticClass:"bubble-close",attrs:{title:"关闭"},on:{click:function(e){return t.close()}}},[t._v("x")])]),n("div",{staticClass:"bubble-info"},[n("table",t._l(t.info,(function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(e[0]))]),n("td",[t._v(t._s(e[1]))])])})),0)])]):t._e()},o=[],s=n("ab6d"),r=s["a"],c=(n("ac2f"),n("2877")),a=Object(c["a"])(r,i,o,!1,null,"3339ba17",null);e["default"]=a.exports}}]);
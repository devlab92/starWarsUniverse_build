"use strict";(self["webpackChunkstar_wars"]=self["webpackChunkstar_wars"]||[]).push([[554],{554:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("Menu")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu",attrs:{id:"menu"}},[n("div",{staticClass:"openMenuButton",attrs:{id:"buttonToOpenMenu"}},[n("i",{class:"fa fa-chevron-circle-down fa-4x fa-rotate-270",attrs:{"aria-hidden":"true"},on:{click:function(t){e.showHide=!e.showHide}}})]),n("div",{class:"menuBody "+(e.showHide?"showMenu":"")},[n("div",{staticClass:"menuBody__header",on:{click:function(t){e.showHide=!e.showHide}}},[e._m(0)]),n("hr"),n("div",{staticClass:"menuBody__list flex"},[n("div",{staticClass:"menuBody__list--divBtn slectApi flex"},[n("div",[e._v("Repositório de imagens")]),n("div",{staticClass:"menuBody__list--apiBtn flex"},[n("div",{class:"flex "+(e.active?"active":""),on:{click:function(t){return e.setApi("google")}}},[n("p",[e._v("Google api")])]),n("div",{class:"flex "+(e.active?"":"active"),on:{click:function(t){return e.setApi("swvg")}}},[n("p",[e._v("Star wars visual guide")])])])]),n("router-link",{staticClass:"menuBody__list--divBtn",attrs:{to:{name:"People"}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.navigate;return[n("div",{attrs:{role:"link"},on:{click:s,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.apply(null,arguments)}}},[n("p",[e._v("Pessoas")])])]}}])}),n("router-link",{staticClass:"menuBody__list--divBtn",attrs:{to:{name:"Planets"}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.navigate;return[n("div",{attrs:{role:"link"},on:{click:s,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.apply(null,arguments)}}},[n("p",[e._v("Planetas")])])]}}])}),n("router-link",{staticClass:"menuBody__list--divBtn",attrs:{to:{name:"Species"}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.navigate;return[n("div",{attrs:{role:"link"},on:{click:s,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.apply(null,arguments)}}},[n("p",[e._v("Espécies")])])]}}])}),n("router-link",{staticClass:"menuBody__list--divBtn",attrs:{to:{name:"Films"}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.navigate;return[n("div",{attrs:{role:"link"},on:{click:s,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.apply(null,arguments)}}},[n("p",[e._v("Filmes")])])]}}])}),n("router-link",{staticClass:"menuBody__list--divBtn",attrs:{to:{name:"Vehicles"}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.navigate;return[n("div",{attrs:{role:"link"},on:{click:s,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.apply(null,arguments)}}},[n("p",[e._v("veículos")])])]}}])}),n("router-link",{staticClass:"menuBody__list--divBtn",attrs:{to:{name:"Favorits"}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.navigate;return[n("div",{attrs:{role:"link"},on:{click:s,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.apply(null,arguments)}}},[n("p",[e._v("Favoritos")])])]}}])}),n("div",{staticClass:"menuBody__list--divBtn",attrs:{tag:"div"},on:{click:function(t){e.showHide=!e.showHide}}},[n("p",[e._v("Fechar Menu")])]),n("router-view")],1)])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("span",{staticClass:"menuBody__header--universo"},[e._v("universo")]),n("span",{staticClass:"menuBody__header--starwars"},[e._v(" Star "),n("br"),e._v("Wars ")])])}],r={name:"Menu",props:["allPages"],data:function(){return{showHide:!1,active:!0}},beforeMount:function(){var e=localStorage.getItem("apiSelected");e&&(this.active="google"==e)},methods:{setApi:function(e){this.active="google"==e,localStorage.setItem("apiSelected",e)},goTo:function(e){this.$router.push({path:"/"})}}},o=r,u=n(1001),c=(0,u.Z)(o,a,l,!1,null,"78d722ac",null),d=c.exports,v={components:{Menu:d},name:"Home"},p=v,f=(0,u.Z)(p,s,i,!1,null,"0fc2eff1",null),k=f.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["47c84384"],{"778b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{class:[e.openedCompletedPage?"top60":"top10"],attrs:{padding:""}},["Paperera"===this.$route.name&&e.messages.length?s("div",{staticClass:"q-my-lg q-mx-md"},[s("p",[e._v("Els elements que faci més de 30 dies que estiguin a la Paperera se suprimiran automàticament.")]),s("p",[s("q-btn",{attrs:{outline:"",color:"primary",label:"Buida la paperera ara",icon:"delete"}})],1)]):e._e(),e.inSelectionMode?s("q-header",{staticClass:"bg-primary",attrs:{elevated:""}},[s("transition",{attrs:{appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[s("q-toolbar",[s("transition",{attrs:{appear:"","enter-active-class":"animated rotateIn","leave-active-class":"animated rotateOut"}},[s("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Enrera"},on:{click:e.cancelSelection}},[s("q-icon",{attrs:{name:"arrow_back"}})],1)],1),s("q-toolbar-title",[e._v("\n              "+e._s(e.messagesSelected.length)+"\n            ")]),s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"delete"},on:{click:e.deleteMsgSelected}})],1)],1)],1):e._e(),e.messages.length?s("q-list",{staticClass:"q-my-lg",style:e.inSelectionMode?"margin-top:-26px":"",attrs:{separator:""}},[s("q-infinite-scroll",{attrs:{offset:250},on:{load:e.onLoad},scopedSlots:e._u([{key:"loading",fn:function(){return[s("div",{staticClass:"row justify-center q-my-md"},[s("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}],null,!1,3159847669)},e._l(e.messages,function(e,t){return s("messages-list-items",{key:t,attrs:{message:e,id:t}})}),1)],1):e._e(),"Paperera"===this.$route.name&&0==e.messages.length?s("div",{staticClass:"q-my-lg q-mx-lg text-center"},[s("p",[e._v("No hi ha res a la paperera")]),s("img",{attrs:{src:"/assets/undraw_empty_xct9.svg",width:"280"}})]):e._e(),"Paperera"!==this.$route.name&&0==e.messages.length?s("div",{staticClass:"q-my-lg q-mx-md text-center"},[s("p",[e._v("No hi ha res a la carpeta "),s("b",[e._v(e._s(this.$route.name))])]),s("img",{attrs:{src:"/assets/undraw_relaxation_1_wbr7.svg",width:"280"}})]):e._e()],1)},i=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("c47a")),r=s.n(n),c=s("2f62");function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(s,!0).forEach(function(t){r()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}var d={data:function(){return{}},components:{"messages-list-items":s("87c0").default},methods:l({},Object(c["b"])("messages",["addMessagesInList","cancelSelection","deleteSelection"]),{onLoad:function(e,t){var s=this;setTimeout(function(){s.messages&&(s.addMessagesInList(),t())},2e3)},modeSelection:function(){},deleteMsgSelected:function(){this.deleteSelection(),this.$q.notify({message:"S'han eliminat els missatges seleccionats"})}}),computed:l({},Object(c["c"])("global",["openedCompletedPage"]),{},Object(c["c"])("messages",["messages","messagesSelected"]),{inSelectionMode:function(){return this.messagesSelected.length}})},m=d,u=s("2877"),g=Object(u["a"])(m,a,i,!1,null,null,null);t["default"]=g.exports},"87c0":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{directives:[{name:"touch-hold",rawName:"v-touch-hold.mouse",value:e.onTouchHold,expression:"onTouchHold",modifiers:{mouse:!0}},{name:"ripple",rawName:"v-ripple"}],staticClass:"q-py-md",class:e.messagesSelected.includes(e.id)?"bg-grey-4":"",attrs:{clickable:""},on:{click:e.clickMsg}},[a("q-item-section",{attrs:{avatar:""}},[a("transition",{attrs:{appear:"","enter-active-class":"animated rotateIn","leave-active-class":"animated rotateOut absolute"}},[e.messagesSelected.includes(e.id)?a("q-avatar",{staticStyle:{"font-size":"3.2em"},attrs:{color:"primary","text-color":"white",icon:"check"}}):e._e()],1),e.messagesSelected.includes(e.id)?e._e():a("q-avatar",{staticStyle:{"font-size":"3.2em"}},[a("img",{attrs:{src:s("b2dd")}})])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[e._v("Quàlia Lleure")]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[a("span",{staticClass:"text-weight-bolder"},[e._v("Sardines i Marinada")]),e._v("\n      -- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste similique consequatur, officiis provident at sequi fuga eligendi animi veritatis itaque ex accusantium aliquam ab eos nesciunt assumenda perferendis repudiandae.\n    ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[e._v("\n    20 juliol\n    "),a("q-icon",{attrs:{name:"star_border",color:"yellow"}})],1)],1)},i=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("c47a")),r=s.n(n),c=s("2f62");function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(s,!0).forEach(function(t){r()(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}var d={props:["message","id"],data:function(){return{}},methods:l({},Object(c["b"])("messages",["addMessagesInListSelected"]),{},Object(c["b"])("global",["setCompletedPage"]),{onTouchHold:function(){this.addMessagesInListSelected(this.id),this.setCompletedPage(!0)},clickMsg:function(){this.inSelectionMode?this.addMessagesInListSelected(this.id):this.$router.push("/detall_missatge")}}),computed:l({},Object(c["c"])("global",["openedCompletedPage"]),{},Object(c["c"])("messages",["messages","messagesSelected"]),{inSelectionMode:function(){return this.messagesSelected.length>0}})},m=d,u=s("2877"),g=Object(u["a"])(m,a,i,!1,null,null,null);t["default"]=g.exports},b2dd:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIHdpZHRoPSI0MDFweCIgaGVpZ2h0PSI0MDFweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAzMTIuODA5IDAgNDAxIDQwMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIzMTIuODA5IDAgNDAxIDQwMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4yMjMgMCAwIDEuMjIzIC00NjcuNSAtODQzLjQ0KSI+Cgk8cmVjdCB4PSI2MDEuNDUiIHk9IjY1My4wNyIgd2lkdGg9IjQwMSIgaGVpZ2h0PSI0MDEiIGZpbGw9IiNFNEU2RTciLz4KCTxwYXRoIGQ9Im04MDIuMzggOTA4LjA4Yy04NC41MTUgMC0xNTMuNTIgNDguMTg1LTE1Ny4zOCAxMDguNjJoMzE0Ljc5Yy0zLjg3LTYwLjQ0LTcyLjktMTA4LjYyLTE1Ny40MS0xMDguNjJ6IiBmaWxsPSIjQUVCNEI3Ii8+Cgk8cGF0aCBkPSJtODgxLjM3IDgxOC44NmMwIDQ2Ljc0Ni0zNS4xMDYgODQuNjQxLTc4LjQxIDg0LjY0MXMtNzguNDEtMzcuODk1LTc4LjQxLTg0LjY0MSAzNS4xMDYtODQuNjQxIDc4LjQxLTg0LjY0MWM0My4zMSAwIDc4LjQxIDM3LjkgNzguNDEgODQuNjR6IiBmaWxsPSIjQUVCNEI3Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);
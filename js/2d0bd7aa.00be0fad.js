(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0bd7aa"],{"2bbf":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"top10",attrs:{padding:""}},[e("q-header",{staticClass:"bg-primary",attrs:{elevated:""}},[e("q-toolbar",[e("transition",{attrs:{appear:"","enter-active-class":"animated rotateIn","leave-active-class":"animated rotateOut"}},[e("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Enrera",to:"/el_meu_compte"}},[e("q-icon",{attrs:{name:"arrow_back"}})],1)],1),e("q-toolbar-title",[t._v("\n        "+t._s(this.$route.name)+"\n      ")])],1)],1),e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"row q-mx-md",staticStyle:{width:"480px"}},[e("q-input",{staticClass:"col-12 q-mb-md",attrs:{type:"password",label:"Contrasenya actual"}})],1),e("div",{staticClass:"row q-mx-md",staticStyle:{width:"480px"}},[e("q-input",{staticClass:"col-12 q-mb-md",attrs:{type:"password",label:"Nova contrasenya"}})],1),e("div",{staticClass:"row q-mx-md",staticStyle:{width:"480px"}},[e("q-input",{staticClass:"col-12 q-mb-md",attrs:{type:"password",label:"Confirma contrasenya"}})],1),e("div",{staticClass:"row q-mx-md justify-end q-mt-lg",staticStyle:{width:"480px"}},[e("q-btn",{attrs:{flat:"","text-color":"grey-6",to:"/el_meu_compte","no-caps":""}},[t._v("Cancel·lar")]),e("q-btn",{attrs:{outline:"",color:"primary",label:"Guardar"},on:{click:t.savePassword}})],1)])],1)},s=[],o=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("c47a")),n=e.n(o),i=e("2f62");function c(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?c(e,!0).forEach(function(a){n()(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(e).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var d={data:function(){return{}},mounted:function(){this.setCompletedPage(!0)},methods:l({},Object(i["b"])("global",["setCompletedPage"]),{goBack:function(){this.$router.go(-1)},savePassword:function(){this.$q.notify({message:"S'ha actualitzat i guardat la nova contrasenya"}),this.$router.go(-1)}})},p=d,u=e("2877"),b=Object(u["a"])(p,r,s,!1,null,null,null);a["default"]=b.exports}}]);
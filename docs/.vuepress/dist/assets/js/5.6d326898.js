(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{26:function(t,i,e){},43:function(t,i,e){"use strict";var o=e(26);e.n(o).a},96:function(t,i,e){"use strict";e.r(i);var o={name:"Video",props:["id","title","index"],data:function(){return{value:"https://www.youtube.com/embed/"+this.id+"?autoplay=1&color=white&modestbranding=1&rel=0&showinfo=0",played:!1,previewSizePrefix:"mqdefault",videoStyleObject:{},posterStyleObject:{display:"block"}}},methods:{playVideo:function(){this.played=!0},stopVideo:function(){this.played=!1}}},l=(e(43),e(1)),a=Object(l.a)(o,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"video-container"},[e("img",{attrs:{src:"//img.youtube.com/vi/"+t.id+"/"+t.previewSizePrefix+".jpg"},on:{click:function(i){t.playVideo()}}}),t.played?t._e():e("svg",{staticClass:"video-play-button",attrs:{viewBox:"0 0 200 200",alt:"Play video"},on:{click:function(i){t.playVideo()}}},[e("rect",{attrs:{y:"25",rx:"20",ry:"20",width:"200",height:"150",fill:"#4E5251"}}),e("polygon",{attrs:{points:"70, 55 70, 145 145, 100",fill:"#fff"}})]),t.played?e("div",{staticClass:"lightbox"},[e("div",{staticClass:"inner-container"},[e("h2",{staticClass:"video-title"},[t._v(t._s(t.title)+" ")]),e("div",{staticClass:"lightbox-container"},[t.played?e("iframe",{attrs:{width:"560",height:"315",src:t.value,allowfullscreen:"",frameborder:"0",allow:"autoplay"}}):t._e()])]),e("button",{staticClass:"lightbox-close",attrs:{title:"Video schliessen"},on:{click:function(i){t.stopVideo()}}})]):t._e()])},[],!1,null,null,null);i.default=a.exports}}]);
(function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("tiptap-editor")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("editor-content",{attrs:{editor:t.editor}})],1)},c=[],u=(n("4de4"),n("4160"),n("a630"),n("3ca3"),n("159b"),n("3835")),s=n("d4ec"),l=n("bee2"),f=n("262e"),p=n("2caf"),d=n("cd42"),b=n("a9de"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:t.src}})},g=[],h={props:["node"],computed:{src:function(){return console.log(this.node.attrs.src),this.node.attrs.src+"?w=780"}}},m=h,y=n("2877"),O=Object(y["a"])(m,v,g,!1,null,null,null),j=O.exports,w=/!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/,_=function(t){Object(f["a"])(n,t);var e=Object(p["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(l["a"])(n,[{key:"commands",value:function(t){var e=t.type;return function(t){return function(n,r){var a=n.selection,o=a.$cursor?a.$cursor.pos:a.$to.pos,i=e.create(t),c=n.tr.insert(o,i);r(c)}}}},{key:"inputRules",value:function(t){var e=t.type;return[Object(b["a"])(w,e,(function(t){var e=Object(u["a"])(t,4),n=e[1],r=e[2],a=e[3];return{src:r,alt:n,title:a}}))]}},{key:"view",get:function(){return j}},{key:"name",get:function(){return"image"}},{key:"schema",get:function(){return{inline:!0,attrs:{src:{},alt:{default:null},title:{default:null}},group:"inline",draggable:!0,parseDOM:[{tag:"img[src]",getAttrs:function(t){return{src:t.getAttribute("src"),title:t.getAttribute("title"),alt:t.getAttribute("alt")}}}],toDOM:function(t){return["img",t.attrs]}}}},{key:"plugins",get:function(){return[new d["d"]({props:{handleDOMEvents:{drop:function(t,e){var n=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length;if(n){var r=Array.from(e.dataTransfer.files).filter((function(t){return/image/i.test(t.type)}));if(0!==r.length){e.preventDefault();var a=t.state.schema,o=t.posAtCoords({left:e.clientX,top:e.clientY});r.forEach((function(e){var n=new FileReader;n.onload=function(e){var n=a.nodes.image.create({src:e.target.result}),r=t.state.tr.insert(o.pos,n);t.dispatch(r)},n.readAsDataURL(e)}))}}}}}})]}}]),n}(d["c"]),k={components:{EditorContent:d["b"]},data:function(){return{editor:new d["a"]({extensions:[new _],content:'<p><img src="https://cdn.meeple.link/uploads/5f43ae380074eb0007fb30bc.jpeg"></p>',editable:!1})}}},x=k,A=(n("dc84"),Object(y["a"])(x,i,c,!1,null,null,null)),T=A.exports,E={name:"App",components:{TiptapEditor:T}},M=E,P=(n("034f"),Object(y["a"])(M,a,o,!1,null,null,null)),S=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,n){},"8ea2":function(t,e,n){},dc84:function(t,e,n){"use strict";var r=n("8ea2"),a=n.n(r);a.a}});
//# sourceMappingURL=app.259d75d3.js.map
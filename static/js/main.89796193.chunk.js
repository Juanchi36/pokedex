(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{56:function(e,t,a){e.exports=a.p+"static/media/pokeball.2b4798f5.svg"},69:function(e,t,a){e.exports=a(97)},74:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(74),a(11)),i=a(141),s=a(142),m=a(143),u=a(41),p=a(34),d=a(45),b=a(4),g=a(40),f=a(139),v=a(140),h=a(153),E=Object(n.createContext)(),x=Object(b.a)({switchBase:{color:g.a[300],"&$checked":{color:g.a[400]},"&$checked + $track":{backgroundColor:"gray"}},checked:{},track:{}})(h.a);function k(){var e=Object(n.useContext)(E),t=e.language,a=e.setLanguage,c=r.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),o=Object(l.a)(c,2),i=o[0],s=o[1];return r.a.createElement(f.a,null,r.a.createElement(u.a,{component:"div",style:{color:"white"}},r.a.createElement(v.a,{component:"label",container:!0,alignItems:"center",spacing:1},r.a.createElement(v.a,{item:!0},r.a.createElement("span",{role:"img","aria-label":"Spain flag"},"\ud83c\udde9\ud83c\uddea")),r.a.createElement(v.a,{item:!0},r.a.createElement(x,{checked:i.checkedA,onChange:function(e){a(!t),s(Object(d.a)(Object(d.a)({},i),{},Object(p.a)({},e.target.name,e.target.checked)))},name:"checkedA"})),r.a.createElement(v.a,{item:!0},r.a.createElement("span",{role:"img","aria-label":"UK flag"},"\ud83c\uddec\ud83c\udde7")))))}var j=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"white"}}}));function O(){var e=j();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static",color:"transparent"},r.a.createElement(m.a,null,r.a.createElement(u.a,{variant:"h4",className:e.title,color:"error"},"Pok\xe9dex"),r.a.createElement(k,null))))}var w=a(26),C=a.n(w),y=a(38),N=a(150),P=a(151),S=a(145),U=a(149),B=a(148),A=a(144),I=a(146),T=a(147),W=a(58),R=a(152),$=Object(n.createContext)(),z=Object(n.createContext)(),G=Object(n.createContext)(),L=Object(i.a)({table:{minWidth:350,backgroundColor:"#282c34",borderColor:"#282c34",width:"90%",marginTop:10},cell:{color:"white",padding:"10px 5px"},pagination:{color:"white"}});var M=function(e){var t=e.data,a=e.render,c=e.setRender;Object(n.useEffect)((function(){if(t){var e=[];t.map((function(t){return e.push({number:t.data.id,name:t.data.name,experience:t.data.base_experience,image:""}),!0})),v(e)}}),[t]);var o=L(),i=Object(n.useContext)(z),s=i.nextUrl,m=i.prevUrl,u=i.setNextUrl,p=Object(n.useContext)($).setImage,d=Object(n.useContext)(G).setCurrentPokemon,b=Object(n.useState)([]),g=Object(l.a)(b,2),f=g[0],v=g[1],h=function(){p("")};return r.a.createElement("div",null,r.a.createElement(A.a,{component:W.a,style:{backgroundColor:"#282c34",boxShadow:"none"}},r.a.createElement(S.a,{className:o.table,"aria-label":"simple table"},r.a.createElement(I.a,null,r.a.createElement(T.a,null,r.a.createElement(B.a,{className:o.cell,align:"justify"},"Order"),r.a.createElement(B.a,{className:o.cell,align:"justify"},"Name"),r.a.createElement(B.a,{className:o.cell,align:"center"},"Experience"))),r.a.createElement(U.a,null,f.map((function(e){return r.a.createElement(T.a,{key:e.number,onMouseEnter:function(){return t=e.number,void p("https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"));var t},onMouseLeave:h,onClick:function(){return a=e.number,void t.map((function(e){return e.data.id===a&&(d(e.data),setTimeout((function(){d({})}),8e3)),!0}));var a},style:{cursor:"pointer"}},r.a.createElement(B.a,{className:o.cell,align:"justify"},e.number),r.a.createElement(B.a,{className:o.cell,align:"justify"},e.name),r.a.createElement(B.a,{className:o.cell,align:"center"},e.experience))})))),r.a.createElement(R.a,{className:o.pagination,component:"div",count:f.length,rowsPerPage:[],page:[],rowsPerPageOptions:[],labelDisplayedRows:function(){},onChangePage:function(e,t){t<0&&u(m),c(!a)},backIconButtonProps:m?null:{disabled:!0},nextIconButtonProps:s?null:{disabled:!0}})))},H=a(31),J=a.n(H),_=Object(i.a)({root:{minWidth:275,minHeight:"70vh",backgroundColor:"#282c34",borderColor:"#282c34",boxShadow:"5px 5px 5px #131518"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14,color:"white",marginTop:15},pos:{marginBottom:12}});var D=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(E).language;Object(n.useEffect)((function(){v()}),[a]);var i=_(),s=Object(n.useContext)(z),m=s.nextUrl,u=s.setNextUrl,p=s.setPrevUrl,d=Object(n.useState)([]),b=Object(l.a)(d,2),g=b[0],f=b[1],v=function(){var e=Object(y.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J.a.get(m).then((function(e){u(e.data.next),p(e.data.previous);var t=e.data.results.map((function(e){return J.a.get(e.url)}));Promise.all(t).then((function(e){f(e)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(N.a,{className:i.root,variant:"outlined"},r.a.createElement(P.a,{className:i.title,title:o?"Available Pok\xe9mons":"Verf\xfcgbare Pok\xe9mons"}),r.a.createElement(M,{data:g,render:a,setRender:c}))},K=a(56),V=a.n(K),q=(a(96),Object(i.a)({root:{minWidth:275,minHeight:"70vh",backgroundColor:"#282c34",borderColor:"#282c34",boxShadow:"5px 5px 5px #131518"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14,color:"white",marginTop:15},pos:{marginBottom:12}}));var F=function(){var e=q(),t=Object(n.useContext)($).image,a=Object(n.useContext)(G).currentPokemon,c=Object(n.useContext)(E).language,o=Object(n.useState)([]),i=Object(l.a)(o,2),s=i[0],m=i[1];Object(n.useEffect)((function(){a.id&&u()}),[a.id]);var u=function(){var e=Object(y.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,J.a.get("https://pokeapi.co/api/v2/ability/".concat(a.id,"/")).then((function(e){t=e.data.effect_entries}));case 3:m(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(N.a,{className:e.root,variant:"outlined"},a.id?r.a.createElement("div",null,r.a.createElement(P.a,{className:e.title,title:a.name.charAt(0).toUpperCase()+a.name.slice(1)}),r.a.createElement("div",null,r.a.createElement("img",{className:"Image",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(a.id,".png"),alt:"pokeball"}),r.a.createElement("ul",{style:{listStyleType:"none",padding:0}},a.types.map((function(e,t){return r.a.createElement("li",{key:t,style:{color:"white"}},e.type.name)}))),c&&s[1]?r.a.createElement("p",{style:{color:"white",padding:5}},s[1].effect):!c&&s[0]?r.a.createElement("p",{style:{color:"white",padding:5}},s[0].effect):null)):r.a.createElement("div",{className:"Container"},r.a.createElement("img",{src:t||V.a,className:t?"Pokemon":"Pokeball",alt:"pokeball"})))},Q=Object(i.a)((function(e){return{root:{flexGrow:1,width:"90%"},paper:{height:140,width:100},control:{padding:e.spacing(2)},items:{width:"80%"}}}));var X=function(){var e=Q();return r.a.createElement("div",{style:{textAlign:"-moz-center",margin:50}},r.a.createElement("div",{style:{textAlign:"-webkit-center"}},r.a.createElement(v.a,{container:!0,className:e.root,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:6},r.a.createElement(D,null)),r.a.createElement(v.a,{item:!0,xs:12,sm:6},r.a.createElement(F,null)))))};var Y=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("https://pokeapi.co/api/v2/pokemon/?limit=5"),i=Object(l.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)(""),p=Object(l.a)(u,2),d=p[0],b=p[1],g=Object(n.useState)({}),f=Object(l.a)(g,2),v=f[0],h=f[1],x=Object(n.useState)(!0),k=Object(l.a)(x,2),j=k[0],w=k[1];return r.a.createElement("div",{className:"App"},r.a.createElement(E.Provider,{value:{language:j,setLanguage:w}},r.a.createElement($.Provider,{value:{image:a,setImage:c}},r.a.createElement(z.Provider,{value:{nextUrl:s,prevUrl:d,setNextUrl:m,setPrevUrl:b}},r.a.createElement(G.Provider,{value:{currentPokemon:v,setCurrentPokemon:h}},r.a.createElement(O,null),r.a.createElement(X,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.89796193.chunk.js.map
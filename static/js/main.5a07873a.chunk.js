(this.webpackJsonpaflam=this.webpackJsonpaflam||[]).push([[0],{111:function(e,t,n){e.exports={main:"Player_main__38grl",frame:"Player_frame__H_140"}},193:function(e,t,n){e.exports={App:"App_App__15LM-"}},198:function(e,t,n){e.exports=n(431)},203:function(e,t,n){},244:function(e,t){},258:function(e,t){},260:function(e,t){},28:function(e,t,n){e.exports={Home:"Home_Home__EwjGr",search_con:"Home_search_con__3glCI",main:"Home_main__13HyB",movie:"Home_movie__qbgz4",title:"Home_title__idnpY"}},431:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(69),c=n.n(o),i=(n(203),n(193)),s=n.n(i),l=n(42),u=n(43),m=n(46),p=n(44),d=n(47),v=n(28),f=n.n(v),h=n(71),_=n(22),g=n.n(_),y=n(72),b=n(48),w=n.n(b),E=n(110),k=n.n(E);function O(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}var j,x=function(){var e=Object(y.a)(g.a.mark((function e(t){var n,a,r,o,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(t).then((function(e){return e.data}));case 2:n=e.sent,a="https://videospider"+/https:\/\/videospider([^"]+)"/.exec(n)[1],r=O("key",a),o=O("video_id",a),c=O("ticket",a),console.log(r),window.router.push("/movie/".concat(r,"/").concat(o,"/").concat(c));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.link,a=e.img;return t=t.length>30?t.slice(0,30)+"...":t,r.a.createElement("div",{className:f.a.movie,onClick:function(){x(n)}},r.a.createElement("img",{src:a,alt:"cover"}),r.a.createElement("span",{className:f.a.title},t))}}]),t}(r.a.Component),C=Object(h.b)((function(e){return{movies:e.movies}}))(j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).onChange=function(e){var t=e.target;n.setState({search:t.value})},n.onKeyPress=function(e){var t,a=e.key,r=n.state.search;"Enter"===a&&n.props.dispatch((t=r,function(){var e=Object(y.a)(g.a.mark((function e(n){var a,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://123tvstream.club/search_movies?s=".concat(t)).then((function(e){return e.data}));case 2:a=e.sent,r=k.a.load(a),o=r(".movie-list > *").filter((function(e,t){return"div"===t.name})).map((function(e,t){return{link:r(t).find("a").attr("href"),title:r(t).find(".name").text(),img:r(t).find("img").attr("src")}})),n({type:"SET_MOVIES_LIST",payload:o.toArray()});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},console.log(e),n.state={search:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.search,t=this.props.movies,n=t.loading,a=t.list;return r.a.createElement("div",{className:f.a.Home},r.a.createElement("div",{className:f.a.search_con},r.a.createElement("input",{autoFocus:!0,type:"text",value:e,onChange:this.onChange,onKeyPress:this.onKeyPress})),r.a.createElement("div",{className:f.a.main},n?"loading...!":a.map((function(e,t){return r.a.createElement(H,{key:t,movie:e})}))))}}]),t}(a.Component))||j,N=n(111),S=n.n(N),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){console.log("==============="),console.log(n.e),window.temp=n.e},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t._key,a=t.video_id,o=t.ticket,c="https://videospider.stream/getvideo?key=".concat(n,"&video_id=").concat(a,"&ticket=").concat(o);return r.a.createElement("div",{className:S.a.main},r.a.createElement("iframe",{className:S.a.frame,src:c,title:"ye",allowFullScreen:!0,onLoad:this.onLoad,ref:function(t){return e.e=t}}))}}]),t}(r.a.Component),A=n(195),L=n(18);var P=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement(A.a,null,r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",exact:!0,render:function(e){var t=e.history;return window.router=t,r.a.createElement(C,null)}}),r.a.createElement(L.a,{path:"/movie/:key/:video_id/:ticket",render:function(e){var t=e.match;return r.a.createElement(I,{_key:t.params.key,video_id:t.params.video_id,ticket:t.params.ticket})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(27),T=n(114),B=n(197),K=Object(M.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,list:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case"SET_MOVIES_LIST":return Object(T.a)({},e,{loading:!1,list:n});default:return Object(T.a)({},e)}}}),$=Object(M.a)(B.a),F=Object(M.d)(K,{},$);window.store=F;var J=F;c.a.render(r.a.createElement(h.a,{store:J},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[198,1,2]]]);
//# sourceMappingURL=main.5a07873a.chunk.js.map
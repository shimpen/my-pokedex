(this["webpackJsonpstaff-list-ux-react-query"]=this["webpackJsonpstaff-list-ux-react-query"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(37),o=n.n(a),i=n(184),s=n(106),c=(n(124),n(11)),u=n(7),l=n.n(u),d=n(15),f=["all","kanto","johto","hoenn","sinnoh","unova","kalos","alola","galar"],p=function(e){var t=e;return null===(null===t||void 0===t?void 0:t.next)||"string"===typeof(null===t||void 0===t?void 0:t.next)&&null===(null===t||void 0===t?void 0:t.previous)||"string"===typeof(null===t||void 0===t?void 0:t.previous)&&!(null===t||void 0===t?void 0:t.results.some((function(e){return!function(e){var t=e;return"string"===typeof(null===t||void 0===t?void 0:t.name)&&"string"===typeof(null===t||void 0===t?void 0:t.url)}(e)})))},v=function(e){var t=e;return"number"===typeof(null===t||void 0===t?void 0:t.id)&&"string"===typeof(null===t||void 0===t?void 0:t.name)&&"string"===typeof(null===t||void 0===t?void 0:t.species.name)&&"string"===typeof(null===t||void 0===t?void 0:t.species.url)&&!(null===t||void 0===t?void 0:t.types.some((function(e){return!function(e){var t=e;return"number"===typeof(null===t||void 0===t?void 0:t.slot)&&"string"===typeof(null===t||void 0===t?void 0:t.type.name)&&"string"===typeof(null===t||void 0===t?void 0:t.type.url)}(e)})))&&"string"===typeof(null===t||void 0===t?void 0:t.sprites.frontDefault)&&"string"===typeof(null===t||void 0===t?void 0:t.sprites.other.officialArtwork.frontDefault)},j=function(e){var t=e;return"string"===typeof(null===t||void 0===t?void 0:t.name)&&"string"===typeof(null===t||void 0===t?void 0:t.url)},b=function(e){var t=e;return"string"===typeof(null===t||void 0===t?void 0:t.name)&&j(null===t||void 0===t?void 0:t.language)},h=function(e){var t=e;return!(null===t||void 0===t?void 0:t.flavorTextEntries.some((function(e){return!function(e){var t=e;return"string"===typeof(null===t||void 0===t?void 0:t.flavorText)&&j(null===t||void 0===t?void 0:t.language)}(e)})))&&!(null===t||void 0===t?void 0:t.genera.some((function(e){return!function(e){var t=e;return"string"===typeof(null===t||void 0===t?void 0:t.genus)&&j(null===t||void 0===t?void 0:t.language)}(e)})))&&!(null===t||void 0===t?void 0:t.names.some((function(e){return!b(e)})))},m=function(e){var t=e;return"string"===typeof(null===t||void 0===t?void 0:t.name)&&!(null===t||void 0===t?void 0:t.names.some((function(e){return!b(e)})))},x=n(31),g=n(102),O=n.n(g),y={timeout:7e3,retry:2,hooks:{afterResponse:[function(){var e=Object(d.a)(l.a.mark((function e(t,n,r){var a,o,i,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Blob,e.t1=JSON,e.t2=O.a,e.next=5,r.json();case 5:return e.t3=e.sent,e.t4={deep:!0},e.t5=(0,e.t2)(e.t3,e.t4),e.t6=e.t1.stringify.call(e.t1,e.t5,null,2),e.t7=[e.t6],e.t8={type:"application/json"},a=new e.t0(e.t7,e.t8),o=r.headers,i=r.status,s=r.statusText,c={headers:o,status:i,statusText:s},e.abrupt("return",new Response(a,c));case 15:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()]}},k=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(c.a)(Object(c.a)({},y),n),e.next=3,x.a.get(t,r);case 3:return a=e.sent,e.next=6,a.json();case 6:if(o=e.sent,p(o)){e.next=9;break}throw Error("API type error");case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(c.a)(Object(c.a)({},y),n),e.next=3,x.a.get(t,r);case 3:return a=e.sent,e.next=6,a.json();case 6:if(o=e.sent,v(o)){e.next=9;break}throw Error("API type error");case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(c.a)(Object(c.a)({},y),n),e.next=3,x.a.get(t,r);case 3:return a=e.sent,e.next=6,a.json();case 6:if(o=e.sent,h(o)){e.next=9;break}throw Error("API type error");case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(c.a)(Object(c.a)({},y),n),e.next=3,x.a.get(t,r);case 3:return a=e.sent,e.next=6,a.json();case 6:if(o=e.sent,m(o)){e.next=9;break}throw Error("API type error");case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=n(40),T=n(0),A=n(182),P=n(181),S=n(103),z=n.n(S),I=n(56),R=n(59),F=n(64),H=n(186),L={0:"\u30b5\u30fc\u30d0\u30a8\u30e9\u30fc\u3067\u3059"},M=function(e){Object(R.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(I.a)(this,n),(a=t.call(this,e)).componentDidCatch=function(e,t){var n=a.props.onError;n&&n(),console.error(e,t)},a.render=function(){var e=a.props,t=e.children,n=e.statusMessages,o=void 0===n?{}:n,i=a.state,s=i.hasError,u=i.error,l=Object(c.a)(Object(c.a)({},L),o);if(s){var d,f=null===u||void 0===u||null===(d=u.response)||void 0===d?void 0:d.status;return f&&Object.keys(l).includes(String(f))?Object(r.jsx)(H.a,{warning:!0,children:l[f]}):Object(r.jsx)(H.a,{error:!0,children:l[0]})}return t},a.state={hasError:!1,error:null},a}return n}(T.PureComponent);M.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var q=M,C=n(180),J=(n(156),function(e){var t=e.size,n=void 0===t?"medium":t;return Object(r.jsx)("div",{className:"spinner",children:Object(r.jsx)(C.a,{size:n,inline:"centered",active:!0,children:"\u8aad\u307f\u8fbc\u307f\u4e2d..."})})}),B=n(187),_=n(185),G=n(183),Q=(n(157),function(e){var t,n,a,o,i,s=e.pokemon,c=e.species,u=e.types;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(_.a,{className:"card-container",children:[Object(r.jsxs)("div",{className:"card-header",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(_.a.Meta,{textAlign:"left",children:s.id}),Object(r.jsx)(G.a,{size:"mini",src:s.sprites.frontDefault})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(_.a.Header,{textAlign:"center",children:null===(t=c.names.find((function(e){return"ja"===e.language.name})))||void 0===t?void 0:t.name}),Object(r.jsx)(_.a.Header,{textAlign:"center",children:s.name})]}),Object(r.jsx)("div",{className:"card-header__type",children:u.map((function(e){return e.names.map((function(e){return"ja-Hrkt"===e.language.name&&Object(r.jsx)(_.a.Header,{textAlign:"right",children:e.name},e.name)}))}))})]}),Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)(G.a,{size:"large",src:s.sprites.other.officialArtwork.frontDefault,rounded:!0})}),Object(r.jsxs)("div",{className:"card-genera",children:[Object(r.jsx)(_.a.Description,{children:null===(n=c.genera.find((function(e){return"ja"===e.language.name})))||void 0===n?void 0:n.genus}),Object(r.jsx)(_.a.Description,{children:null===(a=c.genera.find((function(e){return"en"===e.language.name})))||void 0===a?void 0:a.genus})]}),Object(r.jsxs)("div",{className:"card-description",children:[Object(r.jsx)(_.a.Description,{children:null===(o=c.flavorTextEntries.find((function(e){return"ja"===e.language.name})))||void 0===o?void 0:o.flavorText}),Object(r.jsx)(_.a.Description,{children:null===(i=c.flavorTextEntries.find((function(e){return"en"===e.language.name})))||void 0===i?void 0:i.flavorText})]})]},s.id)})}),K=function(e){var t=e.url,n=Object(B.a)([t,"pokemon"],(function(){return w(t)}),{enabled:!!t}).data;if(!n)throw Error("getPokemon error");var a=Object(B.a)([n.species.name,"species"],(function(){return E(n.species.url)}),{enabled:!!n.species.url}).data;if(!a)throw Error("getSpecies error");var o=Object(B.a)([n.types[0].type.name,"type"],(function(){return D(n.types[0].type.url)}),{enabled:!!n.types[0]}).data;if(!o)throw Error("getType error");var i=Object(B.a)([n.types.length>=2?n.types[1].type.name:n.types[0].type.name,"type"],(function(){return D(n.types.length>=2?n.types[1].type.url:n.types[0].type.url)}),{enabled:n.types.length>=2}).data;if(!i)throw Error("getType error");var s=n.types.length>=2?[o,i]:[o];return Object(r.jsx)(Q,{pokemon:n,species:a,types:s})},U=(n(161),function(e){var t=e.result;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(_.a.Group,{className:"cards-container",children:t.results.map((function(e){return Object(r.jsx)(K,{url:e.url},e.name)}))})})}),V=function(e){var t=e.url,n=Object(B.a)([t,"pokemons"],(function(){return k(t)}),{enabled:!0}).data;if(!n)throw Error("getPokemonsResult error");return Object(r.jsx)(U,{result:n})},W=(n(162),"https://pokeapi.co/api/v2/pokemon?"),X={all:"".concat(W,"limit=100&offset=0"),kanto:"".concat(W,"limit=151&offset=0"),johto:"".concat(W,"limit=100&offset=151"),hoenn:"".concat(W,"limit=135&offset=251"),sinnoh:"".concat(W,"limit=97&offset=386"),unova:"".concat(W,"limit=156&offset=493"),kalos:"".concat(W,"limit=72&offset=649"),alola:"".concat(W,"limit=88&offset=721"),galar:"".concat(W,"limit=89&offset=809")},Y=function(e){var t=e.regionList,n=e.prefetch,a=void 0===n?function(){}:n,o=Object(T.useState)("all"),i=Object(N.a)(o,2),s=i[0],c=i[1],u=Object(T.useTransition)(),l=Object(N.a)(u,2),d=l[0],f=l[1],p=Object(T.useRef)(0),v=t.map((function(e){return{key:e,name:z()(e),onClick:function(){s?f((function(){return c(e)})):c(e)},onMouseOver:function(){return a(X[e])},active:e===s}}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{className:"app-header",children:Object(r.jsx)("h1",{children:"PokeDex"})}),Object(r.jsx)(A.a,{items:v,text:!0}),Object(r.jsx)(P.a,{}),Object(r.jsx)("div",{className:d?"loading":"",children:Object(r.jsx)(q,{statusMessages:{404:"".concat(s,"\u3068\u3044\u3046\u30ea\u30fc\u30b8\u30e7\u30f3\u304c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093")},onError:function(){p.current+=1},children:Object(r.jsx)(T.SuspenseList,{children:Object(r.jsx)(T.Suspense,{fallback:Object(r.jsx)(J,{size:"large"}),children:Object(r.jsx)(V,{url:s?X[s]:X.all})})})},p.current)})]})},Z=function(e){var t=e.enablePrefetch,n=void 0!==t&&t,a=Object(s.b)(),o=n?{regionList:f,prefetch:function(e){(function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.prefetchQuery([e,"pokemons"],(function(){return k(e)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}})()()}}:{regionList:f};return Object(r.jsx)(Y,Object(c.a)({},o))},$=(n(163),function(){return Object(r.jsx)(Z,{enablePrefetch:!1})}),ee=(n(164),n(165),new i.a({defaultOptions:{queries:{retry:0,suspense:!0},mutations:{retry:0}}})),te=document.getElementById("root");o.a.createRoot(te).render(Object(r.jsxs)(s.a,{client:ee,children:[Object(r.jsx)($,{}),!1]}))}},[[166,1,2]]]);
//# sourceMappingURL=main.b2b9808b.chunk.js.map
(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=a(3),u=a(4),h=a(7),m=a(6),p="https://hn.algolia.com/api/v1",f="/search",g="query=",v="hitsPerPage=",d="page=",P=[{value:10,label:10},{value:20,label:20},{value:40,label:40},{value:50,label:50}],w="prev",E="next",k=function(e){return!Number.isNaN(parseInt(e,10))},y=(a(13),function(e){var t=e.title;return r.a.createElement("h1",{className:"title"},t)});y.defaultProps={title:"Simple title"};var N=y,b=(a(14),function(e){var t=e.author,a=e.createdAt,n=e.numComments,c=e.title,o=e.points,i=e.url;return r.a.createElement("li",{className:"post"},r.a.createElement("a",{className:"description",href:i,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("h2",{className:"smTitle"},function(e,t){var a;return(null===e||void 0===e||null===(a=e.trim)||void 0===a?void 0:a.call(e).length)>t?"".concat(e.trim().slice(0,t),"..."):e}(c,75)),r.a.createElement("span",{className:"text"},"".concat(o," points")),r.a.createElement("span",{className:"comments"},"".concat(n," comments")),r.a.createElement("span",{className:"date"},a?new Date(a).toLocaleDateString():"No date"),r.a.createElement("span",{className:"author"},t)))});b.defaultProps={author:"Artur",createdAt:"",numComments:0,title:"Here should be a title",points:0,url:"#"};var C=b,S=(a(15),function(e){var t=e.onChange,a=e.value,n=e.onKeyPress;return r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{className:"input",onChange:t,onKeyPress:n,placeholder:"Click to search",value:a}))});S.defaultProps={onChange:function(){},onKeyPress:function(){},value:""};var A=S,W=(a(16),function(e){var t=e.handleChange,a=e.options,n=e.value;return r.a.createElement("div",{className:"selectWrapper"},a.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{defaultValue:n,onBlur:t,onChange:t},a.map((function(e){var t=e.value,a=e.label;return r.a.createElement("option",{key:t,value:t},a)}))),r.a.createElement("span",{className:"selectText"},"per page")):r.a.createElement("div",{className:"placeholder"},'"No items"'))});W.defaultProps={handleChange:function(){},options:[],value:0};var D=W,j=a(5),Q=a.n(j),H=(a(17),function(e){var t=e.onClick,a=e.page,n=e.lastPage;return r.a.createElement("div",{className:"paginationWrapper"},0!==a&&r.a.createElement("button",{"data-name":w,onClick:t},"<<"),function(e,t,a){var n=[t-2,t-1,t],c=["..."],o=[a-3,a-2,a-1];return(t<a-5?[].concat([t,t+1,t+2],c,o):a<7?Array.from({length:a},(function(e,t){return++t})):t<a-4?[].concat(n,c,o):[].concat(t<a-3?n:c,o)).map((function(a){var n=Q()({active:a===t});return"..."===a?a:r.a.createElement("button",{key:a,className:n,"data-name":a,onClick:e},a)}))}(t,a,n),a<n-1&&r.a.createElement("button",{"data-name":E,onClick:t},">>"))});H.defaultProps={onClick:function(){},page:0,lastPage:0};var T=H,x=(a(18),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",result:{},hitsPerPage:20,page:0},e.fetchData=function(t,a,n){var r=p,c=f,o=v,i=d,s="".concat(g).concat(t,"&").concat(o).concat(a,"&").concat(i).concat(n);fetch("".concat(r).concat(c,"?").concat(s)).then((function(e){return e.json()})).then((function(t){return e.setNews(t)}))},e.handleInputChange=function(t){var a=t.target.value;e.setState({searchQuery:a})},e.handleHitsChange=function(t){var a=t.target.value,n=e.state.searchQuery;e.setState({hitsPerPage:+a,page:0},(function(){var t=e.state.hitsPerPage;e.fetchData(n,t,0)}))},e.getSearch=function(t){if("Enter"===t.key){var a=e.state,n=a.searchQuery,r=a.hitsPerPage;e.setState({page:0}),e.fetchData(n,r,0)}},e.setNews=function(t){e.setState({result:t})},e.handlePageChange=function(t){var a=t.target.getAttribute("data-name");k(a)?e.updatePage(+a):e.handleSpecificBtnType(a)},e.handleSpecificBtnType=function(t){var a=e.state.page;switch(t){case w:e.updatePage(a-1);break;case E:e.updatePage(a+1)}},e.updatePage=function(t){var a=e.state,n=a.searchQuery,r=a.hitsPerPage;e.setState({page:t},(function(){e.fetchData(n,r,t)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.state,t=e.searchQuery,a=e.hitsPerPage,n=e.page;this.fetchData(t,a,n)}},{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.result,n=e.hitsPerPage,c=a.hits,o=void 0===c?[]:c,i=a.page,s=a.nbPages,l=o.length>0;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(N,{title:"Hacker News"}),r.a.createElement(D,{handleChange:this.handleHitsChange,options:P,value:n}),l&&r.a.createElement(T,{lastPage:s,onClick:this.handlePageChange,page:i}),r.a.createElement(A,{onChange:this.handleInputChange,onKeyPress:this.getSearch,value:t}),r.a.createElement("ul",{className:"newsList"},o.map((function(e){var t=e.author,a=e.objectID,n=e.title,c=e.points,o=e.url,i=e.created_at,s=e.num_comments;return r.a.createElement(C,{key:a,author:t,createdAt:i,numComments:s,points:c,title:n,url:o})}))))}}]),a}(n.Component));a(19);o.a.render(r.a.createElement(n.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/HackerNews",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/HackerNews","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.208dc34b.chunk.js.map
(this["webpackJsonpavito-test-task"]=this["webpackJsonpavito-test-task"]||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(3),r=n.n(a),c=n(19),i=n.n(c),o=(n(25),n(1)),u=n.n(o),m=n(2),l=n(5),d=n(6),h=n(9),j=n(8),v=n(7),b=n(27);function f(){return p.apply(this,arguments)}function p(){return(p=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hacker-news.firebaseio.com/v0/",t=[],n=function(){var e=Object(m.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b({method:"get",url:"".concat("https://hacker-news.firebaseio.com/v0/","newstories.json"),params:{print:"pretty"}});case 3:n=e.sent,t=n.data,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),e.next=5,n();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hacker-news.firebaseio.com/v0/",s=function(){var e=Object(m.a)(u.a.mark((function e(t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b({method:"get",url:"".concat("https://hacker-news.firebaseio.com/v0/","item/").concat(t,".json"),params:{print:"pretty"}});case 3:return s=e.sent,e.next=6,s.data;case 6:n=e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),e.next=4,s(t);case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(n(45),function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={comment:{},showComment:!1},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.item;this.getComment(e)}},{key:"onclick",value:function(){var e=this,t=this.state.showComment;return function(){e.setState({showComment:!t})}}},{key:"getComment",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=3,n(t);case 3:return s=e.sent,e.next=6,this.setState({comment:s});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.level,t=e+1,a=this.state,r=a.showComment,c=a.comment,i=c.by,o=c.text,u=c.time,m=c.kids,l=Array.isArray(m)?m.length:0;return Object(s.jsxs)("div",{className:"comment-container",children:[Object(s.jsxs)("div",{className:"main-comment comment-level-".concat(e),children:[Object(s.jsxs)("div",{className:"first-line",children:[Object(s.jsx)("div",{className:"comment-by",children:i}),Object(s.jsx)("div",{className:"comment-time",children:new Date(1e3*u).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})})]}),Object(s.jsx)("div",{className:"second-line",children:Object(s.jsx)("div",{className:"comment-text",dangerouslySetInnerHTML:{__html:o}})}),Object(s.jsx)("div",{className:"third-line",children:Object(s.jsx)("div",{onClick:this.onclick(),onKeyDown:this.onclick(),tabIndex:0,role:"button",className:"comment-comments",children:"Comments: ".concat(l," ")})})]}),m&&m.length>0&&r&&m.map((function(e){return Object(s.jsx)(n,{item:e,level:t})}))]})}}]),n}(r.a.Component));O.defaultProps={item:[],level:1};var w=O,g=(n(46),function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onclick=function(){return function(){var e=s.state.showComments;s.setState({showComments:!e})}},s.getDataOnItem=function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={showComments:!1,item:{title:"",by:"",score:0,type:"",url:"",descendants:0,time:0}},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.news;x(t).then((function(t){e.setState({item:t})}))}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.showComments,a=this.props.func,r=[],c=t.title,i=t.by,o=t.score,u=t.url,m=t.descendants,l=t.time;m>0&&(r=t.kids);var d=parseInt(m,10)>1e3?"many":m;return Object(s.jsxs)("div",{className:"item-container",children:[Object(s.jsxs)("div",{className:"item-body",children:[Object(s.jsxs)("div",{className:"first-line",children:[Object(s.jsx)("div",{className:"item-element item-title",onClick:a(t),onKeyDown:a(t),tabIndex:0,role:"button",children:c}),Object(s.jsx)("div",{className:"item-element item-time",children:new Date(1e3*l).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})})]}),Object(s.jsxs)("div",{className:"second-line",children:[Object(s.jsx)("div",{className:"item-element item-author",children:"Author: ".concat(i)}),Object(s.jsx)("div",{className:"item-element item-anchor",children:Object(s.jsx)("a",{href:u,children:"Link"})})]}),Object(s.jsxs)("div",{className:"third-line",children:[Object(s.jsx)("div",{onClick:this.onclick(r),onKeyDown:this.onclick(r),tabIndex:0,role:"button",className:"item-element item-comments",children:"Comments: ".concat(d," ")}),Object(s.jsx)("div",{className:"item-element item-score",children:"Score: ".concat(o)})]})]}),r.length>0&&n&&r.map((function(e){return Object(s.jsx)(w,{item:e,level:1})}))]})}}]),n}(r.a.Component));g.defaultProps={news:{},func:{}};var k=g;n(47);function N(e){var t=e.getItemsFromStore;return Object(s.jsxs)("div",{className:"header-container",children:[Object(s.jsxs)("div",{className:"logo",children:[Object(s.jsx)("div",{className:"logo-img",children:"y"}),Object(s.jsx)("div",{className:"logo-text",children:"Hacker News"})]}),Object(s.jsxs)("div",{className:"menu",children:[Object(s.jsx)("div",{role:"button",tabIndex:0,onClick:t,onKeyDown:t,className:"menu-news menu-item",children:"news"}),Object(s.jsx)("div",{className:"menu-past menu-item",children:"past"}),Object(s.jsx)("div",{className:"menu-comments menu-item",children:"comments"}),Object(s.jsx)("div",{className:"menu-ask menu-item",children:"ask"}),Object(s.jsx)("div",{className:"menu-show menu-item",children:"show"}),Object(s.jsx)("div",{className:"menu-jobs menu-item",children:"jobs"}),Object(s.jsx)("div",{className:"menu-submit menu-item",children:"submit"})]}),Object(s.jsx)("div",{className:"login",children:"login"})]})}N.defaultProps={getItemsFromStore:{}};var y=N;n(48);var I=function(){return Object(s.jsx)("div",{className:"footer-container",children:Object(s.jsxs)("div",{className:"footer-menu",children:[Object(s.jsx)("div",{className:"footer-menu-guide footer-menu-item",children:"Guidelines"}),Object(s.jsx)("div",{className:"footer-menu-faq footer-menu-item",children:"FAQ"}),Object(s.jsx)("div",{className:"footer-menu-lists footer-menu-item",children:"Lists"}),Object(s.jsx)("div",{className:"footer-menu-api footer-menu-item",children:"API"}),Object(s.jsx)("div",{className:"footer-menu-security footer-menu-item",children:"Security"}),Object(s.jsx)("div",{className:"footer-menu-legal footer-menu-item",children:"Legal"}),Object(s.jsx)("div",{className:"footer-menu-apply footer-menu-item",children:"Apply to YC"}),Object(s.jsx)("div",{className:"footer-menu-contact footer-menu-item",children:"Contact"})]})})},S=(n(49),n(50),function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onclick=function(){return function(){var e=s.state.showComments;s.setState({showComments:!e})}},s.getDataOnItem=function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={showComments:!0,item:{},isUpdate:!1},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,s,a,r,c=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.data,n=t.id,s=function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.next=5,c.setState({item:n});case 5:return e.next=7,c.setState({isUpdate:!0});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=window.localStorage,r=window.setInterval(s(n),6e4),a.setItem("keyPage",r);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=window.localStorage,t=e.getItem("keyPage");e.setItem("keyPage",null),window.clearInterval(t)}},{key:"render",value:function(){var e=this.state,t=e.showComments,n=e.item,a=e.isUpdate,r=this.props.data,c=this.props.btn;a&&(r=n);var i=[],o=r,u=o.title,m=o.by,l=o.score,d=o.url,h=o.descendants,j=o.time;h>0&&(i=r.kids);var v=parseInt(h,10)>1e3?"many":h;return Object(s.jsxs)("div",{className:"item-container",children:[Object(s.jsxs)("div",{className:"page-container",children:[Object(s.jsxs)("div",{className:"first-line",children:[Object(s.jsx)("div",{className:"page-font page-title-font page-title",dangerouslySetInnerHTML:{__html:u}}),Object(s.jsx)("div",{className:"page-font page-time-font page-time",children:new Date(1e3*j).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})})]}),Object(s.jsxs)("div",{className:"second-row",children:[Object(s.jsx)("div",{className:"page-font page-by-font page-by",children:"Author: ".concat(m)}),Object(s.jsx)("div",{className:"page-font page-score-font page-score",children:"Score: ".concat(l)})]}),Object(s.jsx)("div",{className:"second-line",children:Object(s.jsx)("div",{className:"page-font page-url-font page-url",children:Object(s.jsx)("a",{href:d,children:d})})}),Object(s.jsxs)("div",{className:"third-row",children:[Object(s.jsxs)("div",{className:"fourth-row",children:[Object(s.jsx)("div",{className:"page-font page-font page-descendants-font page-descendants",onClick:this.onclick(),onKeyDown:this.onclick(),tabIndex:0,role:"button",children:"Comments: ".concat(v," ")}),Object(s.jsx)("div",{className:"page-font page-kids-font page-kids",children:" First level comments: ".concat(i.length)})]}),Object(s.jsx)("div",{className:"page-back",children:c})]})]}),i.length>0&&t&&i.map((function(e){return Object(s.jsx)(w,{item:e,level:1})})),i.length>0&&t&&Object(s.jsx)("div",{className:"btn-page-line"})]})}}]),n}(r.a.Component));S.defaultProps={data:{},btn:""};var C=S,P=n(51),D=function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).getNews=s.getNews.bind(Object(h.a)(s)),s.state={itemToShow:{},newsItem:[],showPage:!1,firstPage:0,lastPage:100},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,s,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.firstPage,s=t.lastPage,e.next=3,f();case 3:return a=e.sent,e.next=6,a.slice(n,s);case 6:r=e.sent,this.setState({newsItem:r});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNext",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,s,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.lastPage,s=(n=500===t?0:t)+100,this.setState({firstPage:n,lastPage:s}),e.next=6,f();case 6:return a=e.sent,e.next=9,a.slice(n,s);case 9:r=e.sent,this.setState({newsItem:r});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNews",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,s,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.firstPage,s=t.lastPage,e.next=3,f();case 3:return a=e.sent,e.next=6,a.slice(n,s);case 6:r=e.sent,this.setState({newsItem:r}),this.setState({showPage:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBack",value:function(){this.setState({showPage:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.newsItem,a=t.showPage,r=t.itemToShow,c=function(t){return function(){e.setState({itemToShow:t,showPage:!0})}},i=window.localStorage;if(!1===a&&"null"===i.getItem("key")){var o=window.setInterval(this.getNews(),6e4);i.setItem("key",o)}if(!0===a){var u=i.getItem("key");window.clearInterval(u),i.setItem("key",null);var m=Object(s.jsx)("div",{className:"back-btn page-font",role:"button",tabIndex:0,onClick:this.getBack.bind(this),onKeyDown:this.getBack.bind(this),children:"Back"});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{getItemsFromStore:this.getNews}),Object(s.jsx)("div",{className:"board-container",children:Object(s.jsx)(C,{data:r,btn:m})}),Object(s.jsx)(I,{})]})}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{getItemsFromStore:this.getNews}),Object(s.jsxs)("div",{className:"board-container",children:[n.length>0&&n.map((function(e){return Object(s.jsx)(k,{news:e,func:c},P.uniqueId("key_"))})),n.length>0&&Object(s.jsx)("div",{role:"button",tabIndex:0,onClick:this.getNext.bind(this),onKeyDown:this.getNext,className:"btn-next",children:"More"}),Object(s.jsx)("div",{className:"btn-line"})]}),Object(s.jsx)(I,{})]})}}]),n}(r.a.Component);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.querySelector(".root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.15c33288.chunk.js.map
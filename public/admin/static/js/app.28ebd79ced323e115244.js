webpackJsonp([6,4],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(3),i=r(o),a=n(63),u=r(a),c=n(159),s=r(c),f=n(141),p=r(f);n(152);var l=n(95),h=r(l),d=n(96),v=r(d),m=n(98),y=r(m),g=n(97),_=r(g);i.default.use(h.default),i.default.use(p.default),i.default.use(u.default);var w=new u.default({routes:_.default});w.beforeEach(function(t,e,n){v.default.isLogin()?n():"login"===t.name?n():(sessionStorage.returnRouterName=t.name,n({name:"login"}))});var b=new i.default({router:w,store:y.default,render:function(t){return t(s.default)}}).$mount("#app");window.vm=b},63:function(t,e,n){/**
	  * vue-router v2.1.1
	  * (c) 2016 Evan You
	  * @license MIT
	  */
"use strict";function r(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function o(t,e){if(void 0===e&&(e={}),t){var n;try{n=i(t)}catch(t){n={}}for(var r in e)n[r]=e[r];return n}return e}function i(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=_t(n.shift()),o=n.length>0?_t(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function a(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return gt(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(gt(e)):r.push(gt(e)+"="+gt(t)))}),r.join("&")}return gt(e)+"="+gt(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function u(t,e,n){var r={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:s(e),matched:t?c(t):[]};return n&&(r.redirectedFrom=s(n)),Object.freeze(r)}function c(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function s(t){var e=t.path,n=t.query;void 0===n&&(n={});var r=t.hash;return void 0===r&&(r=""),(e||"/")+a(n)+r}function f(t,e){return e===wt?t===e:!!e&&(t.path&&e.path?t.path.replace(bt,"")===e.path.replace(bt,"")&&t.hash===e.hash&&p(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&p(t.query,e.query)&&p(t.params,e.params)))}function p(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function l(t,e){return 0===t.path.indexOf(e.path.replace(/\/$/,""))&&(!e.hash||t.hash===e.hash)&&h(t.query,e.query)}function h(t,e){for(var n in e)if(!(n in t))return!1;return!0}function d(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||0!==t.button)){var e=t.target.getAttribute("target");if(!/\b_blank\b/i.test(e))return t.preventDefault(),!0}}function v(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=v(e.children)))return e}}function m(t){if(!m.installed){m.installed=!0,mt=t,Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this.$root._route}}),t.mixin({beforeCreate:function(){this.$options.router&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current))}}),t.component("router-view",yt),t.component("router-link",Ot);var e=t.config.optionMergeStrategies;e.beforeRouteEnter=e.beforeRouteLeave=e.created}}function y(t,e,n){if("/"===t.charAt(0))return t;if("?"===t.charAt(0)||"#"===t.charAt(0))return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var o=t.replace(/^\//,"").split("/"),i=0;i<o.length;i++){var a=o[i];"."!==a&&(".."===a?r.pop():r.push(a))}return""!==r[0]&&r.unshift(""),r.join("/")}function g(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function _(t){return t.replace(/\/\//g,"/")}function w(t){var e=Object.create(null),n=Object.create(null);return t.forEach(function(t){b(e,n,t)}),{pathMap:e,nameMap:n}}function b(t,e,n,r,o){var i=n.path,a=n.name,u={path:x(i,r),components:n.components||{default:n.component},instances:{},name:a,parent:r,matchAs:o,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{}};n.children&&n.children.forEach(function(n){b(t,e,n,u)}),void 0!==n.alias&&(Array.isArray(n.alias)?n.alias.forEach(function(n){b(t,e,{path:n},r,u.path)}):b(t,e,{path:n.alias},r,u.path)),t[u.path]||(t[u.path]=u),a&&(e[a]||(e[a]=u))}function x(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:_(e.path+"/"+t)}function O(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=Rt.exec(t));){var c=n[0],s=n[1],f=n.index;if(a+=t.slice(i,f),i=f+c.length,s)a+=s[1];else{var p=t[i],l=n[2],h=n[3],d=n[4],v=n[5],m=n[6],y=n[7];a&&(r.push(a),a="");var g=null!=l&&null!=p&&p!==l,_="+"===m||"*"===m,w="?"===m||"*"===m,b=n[2]||u,x=d||v;r.push({name:h||o++,prefix:l||"",delimiter:b,optional:w,repeat:_,partial:g,asterisk:!!y,pattern:x?A(x):y?".*":"[^"+$(b)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function k(t,e){return S(O(t,e))}function j(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function E(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function S(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?j:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var f,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(jt(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(f=u(p[l]),!e[c].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===l?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?E(p):u(p),!e[c].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');o+=s.prefix+f}}else o+=s}return o}}function $(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function M(t,e){return t.keys=e,t}function R(t){return t.sensitive?"":"i"}function C(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return M(t,e)}function P(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(L(t[o],e,n).source);var i=new RegExp("(?:"+r.join("|")+")",R(n));return M(i,e)}function T(t,e,n){return q(O(t,n),e,n)}function q(t,e,n){jt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=$(u);else{var c=$(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var f=$(n.delimiter||"/"),p=i.slice(-f.length)===f;return r||(i=(p?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":r&&p?"":"(?="+f+"|$)",M(new RegExp("^"+i,R(n)),e)}function L(t,e,n){return jt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?C(t,e):jt(t)?P(t,e,n):T(t,e,n)}function U(t){var e,n,r=Ct[t];return r?(e=r.keys,n=r.regexp):(e=[],n=Et(t,e),Ct[t]={keys:e,regexp:n}),{keys:e,regexp:n}}function F(t,e,n){try{var r=Pt[t]||(Pt[t]=Et.compile(t));return r(e||{},{pretty:!0})}catch(t){return""}}function V(t,e,n){var r="string"==typeof t?{path:t}:t;if(r.name||r._normalized)return r;if(!r.path&&r.params&&e){r=H({},r),r._normalized=!0;var i=H(H({},e.params),r.params);if(e.name)r.name=e.name,r.params=i;else if(e.matched){var a=e.matched[e.matched.length-1].path;r.path=F(a,i,"path "+e.path)}return r}var u=g(r.path||""),c=e&&e.path||"/",s=u.path?y(u.path,c,n||r.append):e&&e.path||"/",f=o(u.query,r.query),p=r.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:s,query:f,hash:p}}function H(t,e){for(var n in e)t[n]=e[n];return t}function N(t){function e(t,e,n){var r=V(t,e),o=r.name;if(o){var a=s[o],u=U(a.path).keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof r.params&&(r.params={}),e&&"object"==typeof e.params)for(var f in e.params)!(f in r.params)&&u.indexOf(f)>-1&&(r.params[f]=e.params[f]);if(a)return r.path=F(a.path,r.params,'named route "'+o+'"'),i(a,r,n)}else if(r.path){r.params={};for(var p in c)if(G(p,r.params,r.path))return i(c[p],r,n)}return i(null,r)}function n(t,n){var o=t.redirect,a="function"==typeof o?o(u(t,n)):o;if("string"==typeof a&&(a={path:a}),!a||"object"!=typeof a)return i(null,n);var c=a,f=c.name,p=c.path,l=n.query,h=n.hash,d=n.params;if(l=c.hasOwnProperty("query")?c.query:l,h=c.hasOwnProperty("hash")?c.hash:h,d=c.hasOwnProperty("params")?c.params:d,f){s[f];return e({_normalized:!0,name:f,query:l,hash:h,params:d},void 0,n)}if(p){var v=z(p,t),m=F(v,d,'redirect route with path "'+v+'"');return e({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return r(!1,"invalid redirect option: "+JSON.stringify(a)),i(null,n)}function o(t,n,r){var o=F(r,n.params,'aliased route with path "'+r+'"'),a=e({_normalized:!0,path:o});if(a){var u=a.matched,c=u[u.length-1];return n.params=a.params,i(c,n)}return i(null,n)}function i(t,e,r){return t&&t.redirect?n(t,r||e):t&&t.matchAs?o(t,e,t.matchAs):u(t,e,r)}var a=w(t),c=a.pathMap,s=a.nameMap;return e}function G(t,e,n){var r=U(t),o=r.regexp,i=r.keys,a=n.match(o);if(!a)return!1;if(!e)return!0;for(var u=1,c=a.length;u<c;++u){var s=i[u-1],f="string"==typeof a[u]?decodeURIComponent(a[u]):a[u];s&&(e[s.name]=f)}return!0}function z(t,e){return y(t,e.parent?e.parent.path:"/",!0)}function B(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function I(t){if(!t)if(Tt){var e=document.querySelector("base");t=e?e.getAttribute("href"):"/"}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function J(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{activated:e.slice(n),deactivated:t.slice(n)}}function D(t,e){return"function"!=typeof t&&(t=mt.extend(t)),t.options[e]}function K(t){return et(tt(t,function(t,e){var n=D(t,"beforeRouteLeave");if(n)return Array.isArray(n)?n.map(function(t){return X(t,e)}):X(n,e)}).reverse())}function X(t,e){return function(){return t.apply(e,arguments)}}function Y(t,e,n){return et(tt(t,function(t,r,o,i){var a=D(t,"beforeRouteEnter");if(a)return Array.isArray(a)?a.map(function(t){return W(t,e,o,i,n)}):W(a,e,o,i,n)}))}function W(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&e.push(function(){Q(t,n.instances,r,o)})})}}function Q(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){Q(t,e,n,r)},16)}function Z(t){return tt(t,function(t,e,n,o){if("function"==typeof t&&!t.options)return function(e,i,a){var u=function(t){n.components[o]=t,a()},c=function(t){r(!1,"Failed to resolve async component "+o+": "+t),a(!1)},s=t(u,c);s&&"function"==typeof s.then&&s.then(u,c)}})}function tt(t,e){return et(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function et(t){return Array.prototype.concat.apply([],t)}function nt(t){t&&(Ut[t]={x:window.pageXOffset,y:window.pageYOffset})}function rt(t){if(t)return Ut[t]}function ot(t){var e=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-e.left,y:n.top-e.top}}function it(t){return ut(t.x)||ut(t.y)}function at(t){return{x:ut(t.x)?t.x:window.pageXOffset,y:ut(t.y)?t.y:window.pageYOffset}}function ut(t){return"number"==typeof t}function ct(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function st(t,e){var n=window.history;try{e?n.replaceState({key:Vt},"",t):(Vt=Ft(),n.pushState({key:Vt},"",t)),nt(Vt)}catch(n){window.location[e?"assign":"replace"](t)}}function ft(t){st(t,!0)}function pt(){var t=lt();return"/"===t.charAt(0)||(dt("/"+t),!1)}function lt(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.slice(e+1)}function ht(t){window.location.hash=t}function dt(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)}function vt(t,e,n){var r="hash"===n?"#"+e:e;return t?_(t+"/"+r):r}var mt,yt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$route,u=o._routerViewCache||(o._routerViewCache={}),c=0,s=!1;o;)o.$vnode&&o.$vnode.data.routerView&&c++,o._inactive&&(s=!0),o=o.$parent;i.routerViewDepth=c;var f=a.matched[c];if(!f)return t();var p=n.name,l=s?u[p]:u[p]=f.components[p];if(!s){var h=i.hook||(i.hook={});h.init=function(t){f.instances[p]=t.child},h.prepatch=function(t,e){f.instances[p]=e.child},h.destroy=function(t){f.instances[p]===t.child&&(f.instances[p]=void 0)}}return t(l,i,r)}},gt=encodeURIComponent,_t=decodeURIComponent,wt=u(null,{path:"/"}),bt=/\/$/,xt=[String,Object],Ot={name:"router-link",props:{to:{type:xt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,event:{type:[String,Array],default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.normalizedTo,a=o.resolved,c=o.href,s={},p=this.activeClass||n.options.linkActiveClass||"router-link-active",h=i.path?u(null,i):a;s[p]=this.exact?f(r,h):l(r,h);var m=function(t){d(t)&&(e.replace?n.replace(i):n.push(i))},y={click:d};Array.isArray(this.event)?this.event.forEach(function(t){y[t]=m}):y[this.event]=m;var g={class:s};if("a"===this.tag)g.on=y,g.attrs={href:c};else{var _=v(this.$slots.default);if(_){_.isStatic=!1;var w=mt.util.extend,b=_.data=w({},_.data);b.on=y;var x=_.data.attrs=w({},_.data.attrs);x.href=c}else g.on=y}return t(this.tag,g,this.$slots.default)}},kt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},jt=kt,Et=L,St=O,$t=k,At=S,Mt=q,Rt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Et.parse=St,Et.compile=$t,Et.tokensToFunction=At,Et.tokensToRegExp=Mt;var Ct=Object.create(null),Pt=Object.create(null),Tt="undefined"!=typeof window,qt=Tt&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")===-1&&t.indexOf("Android 4.0")===-1||t.indexOf("Mobile Safari")===-1||t.indexOf("Chrome")!==-1||t.indexOf("Windows Phone")!==-1)&&(window.history&&"pushState"in window.history)}(),Lt=function(t,e){this.router=t,this.base=I(e),this.current=wt,this.pending=null};Lt.prototype.listen=function(t){this.cb=t},Lt.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL()},n)},Lt.prototype.confirmTransition=function(t,e,n){var r=this,o=this.current,i=function(){n&&n()};if(f(t,o))return this.ensureURL(),i();var a=J(this.current.matched,t.matched),u=a.deactivated,c=a.activated,s=[].concat(K(u),this.router.beforeHooks,c.map(function(t){return t.beforeEnter}),Z(c));this.pending=t;var p=function(e,n){return r.pending!==t?i():void e(t,o,function(t){t===!1?(r.ensureURL(!0),i()):"string"==typeof t||"object"==typeof t?("object"==typeof t&&t.replace?r.replace(t):r.push(t),i()):n(t)})};B(s,p,function(){var n=[],o=Y(c,n,function(){return r.current===t});B(o,p,function(){return r.pending!==t?i():(r.pending=null,e(t),void(r.router.app&&r.router.app.$nextTick(function(){n.forEach(function(t){return t()})})))})})},Lt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var Ut=Object.create(null),Ft=function(){return String(Date.now())},Vt=Ft(),Ht=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;window.addEventListener("popstate",function(t){Vt=t.state&&t.state.key;var e=r.current;r.transitionTo(ct(r.base),function(t){o&&r.handleScroll(t,e,!0)})}),o&&window.addEventListener("scroll",function(){nt(Vt)})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t){var e=this,n=this.current;this.transitionTo(t,function(t){st(_(e.base+t.fullPath)),e.handleScroll(t,n,!1)})},e.prototype.replace=function(t){var e=this,n=this.current;this.transitionTo(t,function(t){ft(_(e.base+t.fullPath)),e.handleScroll(t,n,!1)})},e.prototype.ensureURL=function(t){if(ct(this.base)!==this.current.fullPath){var e=_(this.base+this.current.fullPath);t?st(e):ft(e)}},e.prototype.handleScroll=function(t,e,n){var r=this.router;if(r.app){var o=r.options.scrollBehavior;o&&r.app.$nextTick(function(){var r=rt(Vt),i=o(t,e,n?r:null);if(i){var a="object"==typeof i;if(a&&"string"==typeof i.selector){var u=document.querySelector(i.selector);u?r=ot(u):it(i)&&(r=at(i))}else a&&it(i)&&(r=at(i));r&&window.scrollTo(r.x,r.y)}})}},e}(Lt),Nt=function(t){function e(e,n,r){t.call(this,e,n),r&&this.checkFallback()||pt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.checkFallback=function(){var t=ct(this.base);if(!/^\/#/.test(t))return window.location.replace(_(this.base+"/#"+t)),!0},e.prototype.onHashChange=function(){pt()&&this.transitionTo(lt(),function(t){dt(t.fullPath)})},e.prototype.push=function(t){this.transitionTo(t,function(t){ht(t.fullPath)})},e.prototype.replace=function(t){this.transitionTo(t,function(t){dt(t.fullPath)})},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;lt()!==e&&(t?ht(e):dt(e))},e}(Lt),Gt=function(t){function e(e){t.call(this,e),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index+1).concat(t),e.index++})},e.prototype.replace=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index).concat(t)})},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.ensureURL=function(){},e}(Lt),zt=function(t){void 0===t&&(t={}),this.app=null,this.options=t,this.beforeHooks=[],this.afterHooks=[],this.match=N(t.routes||[]);var e=t.mode||"hash";switch(this.fallback="history"===e&&!qt,this.fallback&&(e="hash"),Tt||(e="abstract"),this.mode=e,e){case"history":this.history=new Ht(this,t.base);break;case"hash":this.history=new Nt(this,t.base,this.fallback);break;case"abstract":this.history=new Gt(this)}},Bt={currentRoute:{}};Bt.currentRoute.get=function(){return this.history&&this.history.current},zt.prototype.init=function(t){var e=this;this.app=t;var n=this.history;if(n instanceof Ht)n.transitionTo(ct(n.base));else if(n instanceof Nt){var r=function(){window.addEventListener("hashchange",function(){n.onHashChange()})};n.transitionTo(lt(),r,r)}n.listen(function(t){e.app._route=t})},zt.prototype.beforeEach=function(t){this.beforeHooks.push(t)},zt.prototype.afterEach=function(t){this.afterHooks.push(t)},zt.prototype.push=function(t){this.history.push(t)},zt.prototype.replace=function(t){this.history.replace(t)},zt.prototype.go=function(t){this.history.go(t)},zt.prototype.back=function(){this.go(-1)},zt.prototype.forward=function(){this.go(1)},zt.prototype.getMatchedComponents=function(t){var e=t?this.resolve(t).resolved:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},zt.prototype.resolve=function(t,e,n){var r=V(t,e||this.history.current,n),o=this.match(r,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=vt(a,i,this.mode);return{normalizedTo:r,resolved:o,href:u}},Object.defineProperties(zt.prototype,Bt),zt.install=m,Tt&&window.Vue&&window.Vue.use(zt),t.exports=zt},64:function(t,e,n){/**
	 * vuex v2.1.1
	 * (c) 2016 Evan You
	 * @license MIT
	 */
!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){x&&(t._devtoolHook=x,x.emit("vuex:init",t),x.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){x.emit("vuex:mutation",t,e)}))}function e(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}var n=Number(t.version.split(".")[0]);if(n>=2){var r=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(r?{init:e}:{beforeCreate:e})}else{var o=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,o.call(this,t)}}}function n(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function r(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function o(t,e){console.error("[vuex] module namespace not found in "+t+"(): "+e)}function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function a(t){return null!==t&&"object"==typeof t}function u(t){return t&&"function"==typeof t.then}function c(t,e){if(!t)throw new Error("[vuex] "+e)}function s(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");s(t.getChild(n),e.modules[n])}}function f(t){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var e=t.state;l(t,e,[],t._modules.root,!0),p(t,e)}function p(t,e){var n=t._vm;t.getters={};var r=t._wrappedGetters,o={};i(r,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=M.config.silent;M.config.silent=!0,t._vm=new M({data:{state:e},computed:o}),M.config.silent=a,t.strict&&g(t),n&&(t._withCommit(function(){n.state=null}),M.nextTick(function(){return n.$destroy()}))}function l(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(a&&(t._modulesNamespaceMap[a]=r),!i&&!o){var u=_(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){M.set(u,c,r.state)})}var s=r.context=h(t,a);r.forEachMutation(function(e,r){var o=a+r;v(t,o,e,n)}),r.forEachAction(function(e,r){var o=a+r;m(t,o,e,s,n)}),r.forEachGetter(function(e,r){var o=a+r;y(t,o,e,s,n)}),r.forEachChild(function(r,i){l(t,e,n.concat(i),r,o)})}function h(t,e){var n=""===e,r={dispatch:n?t.dispatch:function(n,r,o){var i=w(n,r,o),a=i.payload,u=i.options,c=i.type;return u&&u.root||(c=e+c,t._actions[c])?t.dispatch(c,a):void console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:n?t.commit:function(n,r,o){var i=w(n,r,o),a=i.payload,u=i.options,c=i.type;return u&&u.root||(c=e+c,t._mutations[c])?void t.commit(c,a,u):void console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperty(r,"getters",{get:n?function(){return t.getters}:function(){return d(t,e)}}),r}function d(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function v(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n(_(t.state,r),e)})}function m(t,e,n,r,o){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var a=n({dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:_(t.state,o),rootGetters:t.getters,rootState:t.state},e,i);return u(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}function y(t,e,n,r,o){return t._wrappedGetters[e]?void console.error("[vuex] duplicate getter key: "+e):void(t._wrappedGetters[e]=function(t){return n(_(t.state,o),r.getters,t.state,t.getters)})}function g(t){t._vm.$watch("state",function(){c(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function w(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function b(t){return M?void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(M=t,void e(M))}var x="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,O=r(function(t,e){var r={};return n(e).forEach(function(e){var n=e.key,i=e.val;r[n]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=this.$store._modulesNamespaceMap[t];if(!r)return void o("mapState",t);e=r.state,n=r.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]}}),r}),k=r(function(t,e){var r={};return n(e).forEach(function(e){var n=e.key,o=e.val;o=t+o,r[n]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.$store.commit.apply(this.$store,[o].concat(t))}}),r}),j=r(function(t,e){var r={};return n(e).forEach(function(e){var n=e.key,o=e.val;o=t+o,r[n]=function(){return o in this.$store.getters||console.error("[vuex] unknown getter: "+o),this.$store.getters[o]}}),r}),E=r(function(t,e){var r={};return n(e).forEach(function(e){var n=e.key,o=e.val;o=t+o,r[n]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.$store.dispatch.apply(this.$store,[o].concat(t))}}),r}),S=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t},$={state:{},namespaced:{}};$.state.get=function(){return this._rawModule.state||{}},$.namespaced.get=function(){return!!this._rawModule.namespaced},S.prototype.addChild=function(t,e){this._children[t]=e},S.prototype.removeChild=function(t){delete this._children[t]},S.prototype.getChild=function(t){return this._children[t]},S.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},S.prototype.forEachChild=function(t){i(this._children,t)},S.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},S.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},S.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(S.prototype,$);var A=function(t){var e=this;this.root=new S(t,!1),t.modules&&i(t.modules,function(t,n){e.register([n],t,!1)})};A.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},A.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},A.prototype.update=function(t){s(this.root,t)},A.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=this.get(t.slice(0,-1)),a=new S(e,n);o.addChild(t[t.length-1],a),e.modules&&i(e.modules,function(e,o){r.register(t.concat(o),e,n)})},A.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var M,R=function(e){var n=this;void 0===e&&(e={}),c(M,"must call Vue.use(Vuex) before creating a store instance."),c("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var r=e.state;void 0===r&&(r={});var o=e.plugins;void 0===o&&(o=[]);var i=e.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new A(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new M;var a=this,u=this,s=u.dispatch,f=u.commit;this.dispatch=function(t,e){return s.call(a,t,e)},this.commit=function(t,e,n){return f.call(a,t,e,n)},this.strict=i,l(this,r,[],this._modules.root),p(this,r),o.concat(t).forEach(function(t){return t(n)})},C={state:{}};C.state.get=function(){return this._vm.$data.state},C.state.set=function(t){c(!1,"Use store.replaceState() to explicit replace store state.")},R.prototype.commit=function(t,e,n){var r=this,o=w(t,e,n),i=o.type,a=o.payload,u=o.options,c={type:i,payload:a},s=this._mutations[i];return s?(this._withCommit(function(){s.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(c,r.state)}),void(u&&u.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools"))):void console.error("[vuex] unknown mutation type: "+i)},R.prototype.dispatch=function(t,e){var n=w(t,e),r=n.type,o=n.payload,i=this._actions[r];return i?i.length>1?Promise.all(i.map(function(t){return t(o)})):i[0](o):void console.error("[vuex] unknown action type: "+r)},R.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},R.prototype.watch=function(t,e,n){var r=this;return c("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},R.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm.state=t})},R.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),c(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),l(this,this.state,t,this._modules.get(t)),p(this,this.state)},R.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),c(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=_(e.state,t.slice(0,-1));M.delete(n,t[t.length-1])}),f(this)},R.prototype.hotUpdate=function(t){this._modules.update(t),f(this)},R.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(R.prototype,C),"undefined"!=typeof window&&window.Vue&&b(window.Vue);var P={Store:R,install:b,version:"2.1.1",mapState:O,mapMutations:k,mapGetters:j,mapActions:E};return P})},86:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(161),i=r(o),a=n(160),u=r(a);e.default={name:"app",components:{xMenu:i.default,xHeader:u.default},computed:{isLogin:function(){return"login"===this.$route.name}}}},87:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{logout:function(){delete localStorage.user,location.reload()}}}},88:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(94),i=r(o);e.default={data:function(){return{lists:i.default}},methods:{goTo:function(t){t&&this.$router.push({name:t})}}}},90:function(t,e){"use strict"},94:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{name:"用户管理",submenu:[{name:"用户列表",path:"user_list"},{name:"新增用户",path:"user_add"}]},{name:"商品管理",submenu:[{name:"商品列表",path:"product_list"},{name:"添加商品",path:"product_add"}]}]},95:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t.api,n=t.type,r=void 0===n?"get":n,o=t.data,i=void 0===o?{}:o;t.success;return new a.default(function(t,n){var o=new XMLHttpRequest;!i.appuid&&localStorage&&localStorage.user&&JSON.parse(localStorage.user).appuid&&(i.appuid=JSON.parse(localStorage.user).appuid);var a="";for(var u in i)a+="&"+encodeURIComponent(u)+"="+encodeURIComponent(i[u]);a=a.substr(1),"get"===r&&(o.open("GET","http://www.shop.com/index.php/"+e+"?"+a,!0),o.send()),"post"===r&&(o.open("POST","http://www.shop.com/index.php/"+e,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(a)),o.onreadystatechange=function(){if(4===o.readyState){var e=o.status;e>=200&&e<300&&t(JSON.parse(o.responseText))}}})}Object.defineProperty(e,"__esModule",{value:!0});var i=n(21),a=r(i),u=n(3);r(u),location.href.indexOf("localhost")>0;o.install=function(t,e){t.prototype.$ajax=o},e.default=o},96:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(40),i=r(o);e.default={login:function(t){localStorage.user=(0,i.default)(t)},logout:function(){localStorage.user="",delete localStorage.user},isLogin:function(){return!!localStorage&&!!localStorage.user&&!!JSON.parse(localStorage.user).appuid}}},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=[{name:"index",path:"/",component:n(163)},{name:"login",path:"/login",component:function(t){return n.e(2,function(e){var n=[e(162)];t.apply(null,n)}.bind(this))}},{name:"user_list",path:"/user/list",component:function(t){return n.e(0,function(e){var n=[e(38)];t.apply(null,n)}.bind(this))}},{name:"user_add",path:"/user/add",component:function(t){return n.e(0,function(e){var n=[e(38)];t.apply(null,n)}.bind(this))}},{name:"user_edit",path:"/user/edit/:id",component:function(t){return n.e(0,function(e){var n=[e(38)];t.apply(null,n)}.bind(this))}},{name:"product_list",path:"product/list",component:function(t){return n.e(3,function(e){var n=[e(164)];t.apply(null,n)}.bind(this))}},{name:"product_add",path:"/product/add",component:function(t){return n.e(1,function(e){var n=[e(62)];t.apply(null,n)}.bind(this))}},{name:"product_edit",path:"/product/edit/:id",component:function(t){return n.e(1,function(e){var n=[e(62)];t.apply(null,n)}.bind(this))}}];e.default=r},98:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=r(o),a=n(64),u=r(a);i.default.use(u.default);var c=new u.default.Store({state:{},getters:{},mutations:{}});e.default=c},152:function(t,e){},153:function(t,e){},154:function(t,e){},159:function(t,e,n){var r,o;n(153),r=n(86);var i=n(165);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},160:function(t,e,n){var r,o;r=n(87);var i=n(169);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},161:function(t,e,n){var r,o;r=n(88);var i=n(168);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},163:function(t,e,n){var r,o;n(154),r=n(90);var i=n(166);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},165:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLogin?t._e():n("x-header"),t._v(" "),n("el-row",{attrs:{gutter:20}},[t.isLogin?t._e():n("el-col",{attrs:{span:4}},[n("x-menu")],1),t._v(" "),n("el-col",{attrs:{span:t.isLogin?22:18}},[n("router-view")],1)],1)],1)},staticRenderFns:[]}},166:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},staticRenderFns:[]}},168:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticStyle:{height:"calc(100vh - 90px)"},attrs:{"default-active":"1"}},t._l(t.lists,function(e,r){return n("el-submenu",{attrs:{index:r+""},nativeOn:{click:function(n){t.goTo(e.path)}}},[n("template",{slot:"title"},[t._v(t._s(e.name))]),t._l(e.submenu,function(e,o){return n("el-menu-item",{attrs:{index:r+"-"+o},nativeOn:{click:function(n){t.goTo(e.path)}}},[t._v(t._s(e.name))])})],2)}))},staticRenderFns:[]}},169:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{attrs:{"default-active":"1",theme:"dark",mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("后台管理中心")]),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"2"},nativeOn:{click:function(e){t.logout(e)}}},[t._v("退出")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.28ebd79ced323e115244.js.map
webpackJsonp([0,4],{22:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(21),i=n(o);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){function n(o,a){try{var u=e[o](a),c=u.value}catch(t){return void r(t)}return u.done?void t(c):i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}},23:function(t,e,r){t.exports=r(36)},35:function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){v&&h&&(v=!1,h.length?d=h.concat(d):y=-1,d.length&&u())}function u(){if(!v){var t=o(a);v=!0;for(var e=d.length;e;){for(h=d,d=[];++y<e;)h&&h[y].run();y=-1,e=d.length}h=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function s(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(t){f=n}}();var h,d=[],v=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new c(t,e)),1!==d.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},36:function(t,e,r){(function(e){var n="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(37),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}).call(e,function(){return this}())},37:function(t,e,r){(function(e,r){!function(e){"use strict";function n(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),u=new h(n||[]);return a._invoke=l(t,r,u),a}function o(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function u(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(r,n,i,a){var u=o(t[r],t,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},a)}a(u.arg)}function n(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return i=i?i.then(n,n):n()}"object"==typeof r&&r.domain&&(e=r.domain.bind(e));var i;this._invoke=n}function l(t,e,r){var n=E;return function(i,a){if(n===T)throw new Error("Generator is already running");if(n===k){if("throw"===i)throw a;return v()}for(;;){var u=r.delegate;if(u){if("return"===i||"throw"===i&&u.iterator[i]===y){r.delegate=null;var c=u.iterator.return;if(c){var s=o(c,u.iterator,a);if("throw"===s.type){i="throw",a=s.arg;continue}}if("return"===i)continue}var s=o(u.iterator[i],u.iterator,a);if("throw"===s.type){r.delegate=null,i="throw",a=s.arg;continue}i="next",a=y;var l=s.arg;if(!l.done)return n=j,l;r[u.resultName]=l.value,r.next=u.nextLoc,r.delegate=null}if("next"===i)r.sent=r._sent=a;else if("throw"===i){if(n===E)throw n=k,a;r.dispatchException(a)&&(i="next",a=y)}else"return"===i&&r.abrupt("return",a);n=T;var s=o(t,e,r);if("normal"===s.type){n=r.done?k:j;var l={value:s.arg,done:r.done};if(s.arg!==O)return l;r.delegate&&"next"===i&&(a=y)}else"throw"===s.type&&(n=k,i="throw",a=s.arg)}}}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function d(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:y,done:!0}}var y,m=Object.prototype,g=m.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},b=w.iterator||"@@iterator",x=w.toStringTag||"@@toStringTag",_="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(_&&(t.exports=L));L=e.regeneratorRuntime=_?t.exports:{},L.wrap=n;var E="suspendedStart",j="suspendedYield",T="executing",k="completed",O={},R={};R[b]=function(){return this};var S=Object.getPrototypeOf,N=S&&S(S(d([])));N&&N!==m&&g.call(N,b)&&(R=N);var P=u.prototype=i.prototype=Object.create(R);a.prototype=P.constructor=u,u.constructor=a,u[x]=a.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(P),t},L.awrap=function(t){return{__await:t}},c(s.prototype),L.AsyncIterator=s,L.async=function(t,e,r,o){var i=new s(n(t,e,r,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(P),P[x]="Generator",P.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=d,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),u=g.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),O},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},O}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,function(){return this}(),r(35))},38:function(t,e,r){var n,o;r(157),n=r(93);var i=r(171);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=n},93:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(23),i=n(o),a=r(22),u=n(a);e.default={data:function(){return{tableData:[],page:1}},methods:{getData:function(){var t=this;return(0,u.default)(i.default.mark(function e(){var r,n,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({api:"/admin/user/list",data:{page:1}});case 2:r=e.sent,n=r.code,o=r.msg,t.tableData=o.data;case 6:case"end":return e.stop()}},e,t)}))()},add:function(){this.$router.push({name:"user_add"})},edit:function(t){this.$router.push({name:"user_edit",params:{id:t}})},disable:function(t){var e=this;return(0,u.default)(i.default.mark(function r(){var n,o,a;return i.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$ajax({api:"/admin/user/disable",data:{id:t}});case 2:n=r.sent,o=n.code,a=n.msg,0===o?(e.$message({message:"用户"+a.name+"已"+(0===a.result?"启用":"禁用"),type:"success"}),e.getData()):e.$message({message:"不能禁用管理帐号",type:"error"});case 6:case"end":return r.stop()}},r,e)}))()}},mounted:function(){this.getData()}}},135:function(t,e,r){e=t.exports=r(18)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"list.vue",sourceRoot:"webpack://"}])},157:function(t,e,r){var n=r(135);"string"==typeof n&&(n=[[t.id,n,""]]);r(19)(n,{});n.locals&&(t.exports=n.locals)},171:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("用户列表")]),r("el-table",{attrs:{data:t.tableData}},[r("el-table-column",{attrs:{label:"用户名"},scopedSlots:{default:function(e){return[r("span",[t._v(t._s(e.row.name))])]}}}),r("el-table-column",{attrs:{label:"昵称"},scopedSlots:{default:function(e){return[r("span",[t._v(t._s(e.row.nickname))])]}}}),r("el-table-column",{attrs:{label:"邮箱"},scopedSlots:{default:function(e){return[r("span",[t._v(t._s(e.row.email))])]}}}),r("el-table-column",{attrs:{label:"创建时间"},scopedSlots:{default:function(e){return[r("span",[t._v(t._s(e.row.create_time))])]}}}),r("el-table-column",{attrs:{label:"是否禁用"},scopedSlots:{default:function(e){return[r("span",[t._v(t._s(0===e.row.is_disable?"启用":"禁用"))])]}}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:{default:function(e){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){t.edit(e.row.id)}}},[t._v("修改")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){t.disable(e.row.id)}}},[t._v("禁用")])]}}})],1),r("el-button-group",{staticStyle:{"margin-top":"24px"}},[r("el-button",{on:{click:t.add}},[t._v("新增")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.ce08acdda6b8e98e4db4.js.map
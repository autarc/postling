!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Postling=e():t.Postling=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Postling=void 0;var o=n(1),i=r(o);n(3).polyfill(),e.Postling=i.default,e.default=i.default},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(2),c="REQUEST",a="RESPONSE",f={source:window,target:window.parent,origin:document.referrer.length?document.referrer:"*"},l={__setMethods__:function(t){var e=this,n=t.reduce(function(t,n){return t[n]=function(){for(var t=arguments.length,r=Array(t),o=0;t>o;o++)r[o]=arguments[o];return e.sendMessage(c,(0,u.getId)(),{name:n,args:r})},t},Object.create(null));this.methods=n},__getMethods__:function(){var t=this;return this.setMethods(this.methods).then(function(){return Object.keys(t.methods)})}},h=function(){function t(e){var n=this;if(r(this,t),this.onMessage=function(t){var e=t.data;if("string"==typeof e&&0===e.indexOf("postling:")){var r=function(){var t=JSON.parse(e.replace("postling:","")),r=t.type,o=t.id,s=t.payload;if(r===a)return{v:n.pending[o](s.error,s.result)};var u=s.name,c=s.args;if(!u)return{v:console.error("Invalid call - method name required!")};var f=/^__.*__$/.test(u)?l[u].bind(n):n.methods[u];return f?void Promise.resolve(f.apply(null,c)).then(function(t){return n.sendMessage(a,o,{result:t})}).catch(function(t){return n.sendMessage(a,o,{error:i({},t)})}):{v:console.error('Invalid method call: "'+u+'" !')}}();if("object"===("undefined"==typeof r?"undefined":o(r)))return r.v}},e&&"IFRAME"===e.tagName){var s=(0,u.parseUrl)(e.getAttribute("src")),c=s.protocol,h=s.host;e={target:e.contentWindow,origin:c+"//"+h}}var d=i({},f);e&&Object.assign(d,e),this.config=d,this.pending=Object.create(null),this.methods=Object.create(null),d.source.addEventListener("message",this.onMessage)}return s(t,[{key:"close",value:function(){var t=this.config.source;t.removeEventListener("message",this.onMessage)}},{key:"setMethods",value:function(t){var e=this;return this.methods=i({},this.methods,t),Object.keys(this.methods).forEach(function(t){e.methods[t]||delete e.methods.name}),this.sendMessage(c,(0,u.getId)(),{name:"__setMethods__",args:[Object.keys(this.methods)]})}},{key:"getMethods",value:function(){return this.sendMessage(c,(0,u.getId)(),{name:"__getMethods__"})}},{key:"sendMessage",value:function(t,e,n){var r=this;return new Promise(function(o,i){var s=r.config,u=s.target,a=s.origin;t===c&&(r.pending[e]=function(t,n){return delete r.pending[e],t?i(t):void o(n)}),u.postMessage("postling:"+JSON.stringify({type:t,id:e,payload:n}),a)})}}]),t}();e.default=h,t.exports=e.default},function(t,e){"use strict";function n(t){var e=document.createElement("a");return e.setAttribute("href",t),{protocol:e.protocol,hostname:e.hostname,port:e.port,pathname:e.pathname,search:e.search,hash:e.hash,host:e.host}}function r(){return Math.random().toString(36).substr(2,10)}Object.defineProperty(e,"__esModule",{value:!0}),e.parseUrl=n,e.getId=r},function(t,e,n){var r;(function(t,o,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */
(function(){"use strict";function s(t){return"function"==typeof t||"object"==typeof t&&null!==t}function u(t){return"function"==typeof t}function c(t){H=t}function a(t){tt=t}function f(){return function(){t.nextTick(v)}}function l(){return function(){G(v)}}function h(){var t=0,e=new rt(v),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function d(){var t=new MessageChannel;return t.port1.onmessage=v,function(){t.port2.postMessage(0)}}function p(){return function(){setTimeout(v,1)}}function v(){for(var t=0;Z>t;t+=2){var e=st[t],n=st[t+1];e(n),st[t]=void 0,st[t+1]=void 0}Z=0}function y(){try{var t=n(7);return G=t.runOnLoop||t.runOnContext,l()}catch(e){return p()}}function g(t,e){var n=this,r=new this.constructor(m);void 0===r[at]&&R(r);var o=n._state;if(o){var i=arguments[o-1];tt(function(){N(o,r,i,n._result)})}else T(n,r,t,e);return r}function _(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(m);return S(n,t),n}function m(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function w(){return new TypeError("A promises callback cannot return that same promise.")}function M(t){try{return t.then}catch(e){return dt.error=e,dt}}function j(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function A(t,e,n){tt(function(t){var r=!1,o=j(n,e,function(n){r||(r=!0,e!==n?S(t,n):P(t,n))},function(e){r||(r=!0,k(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,k(t,o))},t)}function O(t,e){e._state===lt?P(t,e._result):e._state===ht?k(t,e._result):T(e,void 0,function(e){S(t,e)},function(e){k(t,e)})}function E(t,e,n){e.constructor===t.constructor&&n===ut&&constructor.resolve===ct?O(t,e):n===dt?k(t,dt.error):void 0===n?P(t,e):u(n)?A(t,e,n):P(t,e)}function S(t,e){t===e?k(t,b()):s(e)?E(t,e,M(e)):P(t,e)}function x(t){t._onerror&&t._onerror(t._result),C(t)}function P(t,e){t._state===ft&&(t._result=e,t._state=lt,0!==t._subscribers.length&&tt(C,t))}function k(t,e){t._state===ft&&(t._state=ht,t._result=e,tt(x,t))}function T(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+lt]=n,o[i+ht]=r,0===i&&t._state&&tt(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?N(n,r,o,i):o(i);t._subscribers.length=0}}function I(){this.error=null}function L(t,e){try{return t(e)}catch(n){return pt.error=n,pt}}function N(t,e,n,r){var o,i,s,c,a=u(n);if(a){if(o=L(n,r),o===pt?(c=!0,i=o.error,o=null):s=!0,e===o)return void k(e,w())}else o=r,s=!0;e._state!==ft||(a&&s?S(e,o):c?k(e,i):t===lt?P(e,o):t===ht&&k(e,o))}function U(t,e){try{e(function(e){S(t,e)},function(e){k(t,e)})}catch(n){k(t,n)}}function F(){return vt++}function R(t){t[at]=vt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new bt(this,t).promise}function J(t){var e=this;return new e(X(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function W(t){var e=this,n=new e(m);return k(n,t),n}function q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function D(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function K(t){this[at]=F(),this._result=this._state=void 0,this._subscribers=[],m!==t&&("function"!=typeof t&&q(),this instanceof K?U(this,t):D())}function Q(t,e){this._instanceConstructor=t,this.promise=new t(m),this.promise[at]||R(this.promise),X(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?P(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&P(this.promise,this._result))):k(this.promise,$())}function $(){return new Error("Array Methods must be provided an Array")}function z(){var t;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=mt)}var B;B=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var G,H,V,X=B,Z=0,tt=function(t,e){st[Z]=t,st[Z+1]=e,Z+=2,2===Z&&(H?H(v):V())},et="undefined"!=typeof window?window:void 0,nt=et||{},rt=nt.MutationObserver||nt.WebKitMutationObserver,ot="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),it="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,st=new Array(1e3);V=ot?f():rt?h():it?d():void 0===et?y():p();var ut=g,ct=_,at=Math.random().toString(36).substring(16),ft=void 0,lt=1,ht=2,dt=new I,pt=new I,vt=0,yt=Y,gt=J,_t=W,mt=K;K.all=yt,K.race=gt,K.resolve=ct,K.reject=_t,K._setScheduler=c,K._setAsap=a,K._asap=tt,K.prototype={constructor:K,then:ut,"catch":function(t){return this.then(null,t)}};var bt=Q;Q.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ft&&t>n;n++)this._eachEntry(e[n],n)},Q.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===ct){var o=M(t);if(o===ut&&t._state!==ft)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===mt){var i=new n(m);E(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},Q.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ft&&(this._remaining--,t===ht?k(r,n):this._result[e]=n),0===this._remaining&&P(r,this._result)},Q.prototype._willSettleAt=function(t,e){var n=this;T(t,void 0,function(t){n._settledAt(lt,e,t)},function(t){n._settledAt(ht,e,t)})};var wt=z,Mt={Promise:mt,polyfill:wt};n(5).amd?(r=function(){return Mt}.call(e,n,e,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=Mt:"undefined"!=typeof this&&(this.ES6Promise=Mt),wt()}).call(this)}).call(e,n(4),function(){return this}(),n(6)(t))},function(t,e){function n(){a&&s&&(a=!1,s.length?c=s.concat(c):f=-1,c.length&&r())}function r(){if(!a){var t=setTimeout(n);a=!0;for(var e=c.length;e;){for(s=c,c=[];++f<e;)s&&s[f].run();f=-1,e=c.length}s=null,a=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var s,u=t.exports={},c=[],a=!1,f=-1;u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new o(t,e)),1!==c.length||a||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=i,u.addListener=i,u.once=i,u.off=i,u.removeListener=i,u.removeAllListeners=i,u.emit=i,u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){}])});
//# sourceMappingURL=postling.js.map
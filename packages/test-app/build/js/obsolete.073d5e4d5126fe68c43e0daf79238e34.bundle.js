!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).Obsolete=r()}(this,(function(){"use strict";function e(e,r){return e(r={exports:{}},r.exports),r.exports}var r=e((function(e){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)})),n=e((function(e){var r=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=r)})),t=(n.version,function(e,r,n){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===r)return e;switch(n){case 1:return function(n){return e.call(r,n)};case 2:return function(n,t){return e.call(r,n,t)};case 3:return function(n,t,o){return e.call(r,n,t,o)}}return function(){return e.apply(r,arguments)}}),o=function(e){return"object"==typeof e?null!==e:"function"==typeof e},i=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e},a=function(e){try{return!!e()}catch(e){return!0}},c=!a((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),u=r.document,f=o(u)&&o(u.createElement),s=!c&&!a((function(){return 7!=Object.defineProperty((e="div",f?u.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),l=Object.defineProperty,p={f:c?Object.defineProperty:function(e,r,n){if(i(e),r=function(e,r){if(!o(e))return e;var n,t;if(r&&"function"==typeof(n=e.toString)&&!o(t=n.call(e)))return t;if("function"==typeof(n=e.valueOf)&&!o(t=n.call(e)))return t;if(!r&&"function"==typeof(n=e.toString)&&!o(t=n.call(e)))return t;throw TypeError("Can't convert object to primitive value")}(r,!0),i(n),s)try{return l(e,r,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[r]=n.value),e}},d=c?function(e,r,n){return p.f(e,r,function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}}(1,n))}:function(e,r,n){return e[r]=n,e},h={}.hasOwnProperty,m=function(e,r){return h.call(e,r)},b=function(e,o,i){var a,c,u,f=e&b.F,s=e&b.G,l=e&b.S,p=e&b.P,h=e&b.B,w=e&b.W,y=s?n:n[o]||(n[o]={}),v=y.prototype,g=s?r:l?r[o]:(r[o]||{}).prototype;for(a in s&&(i=o),i)(c=!f&&g&&void 0!==g[a])&&m(y,a)||(u=c?g[a]:i[a],y[a]=s&&"function"!=typeof g[a]?i[a]:h&&c?t(u,r):w&&g[a]==u?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r.prototype=e.prototype,r}(u):p&&"function"==typeof u?t(Function.call,u):u,p&&((y.virtual||(y.virtual={}))[a]=u,e&b.R&&v&&!v[a]&&d(v,a,u)))};b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128;var w,y,v=b,g={}.toString,j=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==function(e){return g.call(e).slice(8,-1)}(e)?e.split(""):Object(e)},O=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},E=function(e){return j(O(e))},T=Math.ceil,P=Math.floor,_=function(e){return isNaN(e=+e)?0:(e>0?P:T)(e)},x=Math.min,M=Math.max,S=Math.min,C=e((function(e){var t="__core-js_shared__",o=r[t]||(r[t]={});(e.exports=function(e,r){return o[e]||(o[e]=void 0!==r?r:{})})("versions",[]).push({version:n.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),k=0,B=Math.random(),F=C("keys"),A=(w=!1,function(e,r,n){var t,o,i=E(e),a=(t=i.length)>0?x(_(t),9007199254740991):0,c=function(e,r){return(e=_(e))<0?M(e+r,0):S(e,r)}(n,a);if(w&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((w||c in i)&&i[c]===r)return w||c||0;return!w&&-1}),L=F[y="IE_PROTO"]||(F[y]=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++k+B).toString(36))}(y)),N="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),I=Object.keys||function(e){return function(e,r){var n,t=E(e),o=0,i=[];for(n in t)n!=L&&m(t,n)&&i.push(n);for(;r.length>o;)m(t,n=r[o++])&&(~A(i,n)||i.push(n));return i}(e,N)},V={f:Object.getOwnPropertySymbols},q={f:{}.propertyIsEnumerable},D=function(e){return Object(O(e))},R=Object.assign,G=!R||a((function(){var e={},r={},n=Symbol(),t="abcdefghijklmnopqrst";return e[n]=7,t.split("").forEach((function(e){r[e]=e})),7!=R({},e)[n]||Object.keys(R({},r)).join("")!=t}))?function(e,r){for(var n=D(e),t=arguments.length,o=1,i=V.f,a=q.f;t>o;)for(var c,u=j(arguments[o++]),f=i?I(u).concat(i(u)):I(u),s=f.length,l=0;s>l;)a.call(u,c=f[l++])&&(n[c]=u[c]);return n}:R;v(v.S+v.F,"Object",{assign:G});var z=n.Object.assign,Q=e((function(e){function r(){return e.exports=r=z||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(this,arguments)}e.exports=r}));v(v.S+v.F*!c,"Object",{defineProperty:p.f});var U=n.Object,H=function(e,r,n){return U.defineProperty(e,r,n)};var W=function(e,r,n){return r in e?H(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e},Y=function(e,r,n){this.name=e,this.version=r,this.primaryVersion=n},$=Object.prototype.hasOwnProperty,J=Object.prototype.toString;function K(e,r,n){if("[object Array]"!==J.call(e))throw new TypeError("Parameter `arr` is not an array.");if("[object Function]"!==J.call(r))throw new TypeError("Parameter `callback` is not an array.");for(var t in e)r.call(n,e[t],t,e)}function X(e,r,n){if("[object Array]"!==J.call(e))throw new TypeError("Parameter `arr` is not an array.");if("[object Function]"!==J.call(r))throw new TypeError("Parameter `callback` is not an array.");var t=new Array(e.length);for(var o in e){var i=r.call(n,e[o],o,e);t[o]=i}return t}function Z(e,r,n){if("[object Array]"!==J.call(e))throw new TypeError("Parameter `arr` is not an array.");if("[object Function]"!==J.call(r))throw new TypeError("Parameter `callback` is not an array.");for(var t in e)if(r.call(n,e[t],t,e))return!0;return!1}function ee(e,r,n){if(void 0===n&&(n=0),"[object Array]"!==J.call(e))throw new TypeError("Parameter `arr` is not an array.");for(var t=n;t<e.length;t++)if(e[t]===r)return!0;return!1}function re(e){if(!ee(["[object Object]","[object Function]"],J.call(e)))throw new TypeError("Parameter `obj` is not a object.");var r=function(e){if(!ee(["[object Object]","[object Function]"],J.call(e)))throw new TypeError("Parameter `obj` is not a object.");var r=[];for(var n in e)$.call(e,n)&&r.push(n);return r}(e),n=new Array(r.length);for(var t in r)n[t]=[r[t],e[r[t]]];return n}function ne(e,r){for(var n=arguments.length,t=new Array(n>2?n-2:0),o=2;o<n;o++)t[o-2]=arguments[o];if("[object Function]"!==J.call(e))throw new TypeError("Parameter `func` is not a function.");return function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e.apply(r,[].concat(t,o))}}var te=function(){function e(){this.rBrowserMap={ie:{includes:[/Trident\/[.\w]+.+?rv:((\d+)[.\w]*)/i,/MSIE ((\d+\.\d+)[.\w]*)/i],excludes:[/Mobile/i]},edge:{includes:[/Edge\/((\d+)[.\w]*)/i],excludes:[/Mobile/i]},chrome:{includes:[/Chrome\/((\d+)[.\w]*)/i],excludes:[/Mobile/i]},safari:{includes:[/Version\/((\d+\.\d+)[.\w]*).+Safari/i],excludes:[/Mobile/i]},firefox:{includes:[/Firefox\/((\d+\.\d+)[.\w]*)/i],excludes:[/Mobile/i]},opera:{includes:[/OPR\/((\d+)[.\w]*)/i,/Presto\/[.\w]+.+Version\/((\d+\.\d)[.\w]*)/i,/Opera\/((\d+\.\d)[.\w]*)/i],excludes:[/Mobile|Mobi|Tablet/i]},android:[/wv.+?Chrome\/((\d+)[.\w]*)/i],ios_saf:[/(iPad|iPhone).+OS ((\d+_\d+)\w*)/i],and_chr:{includes:[/Chrome\/((\d+)[.\w]*).+Mobile/i],excludes:[/wv/i]}}}return e.prototype.parse=function(e){var r=[];return K(re(this.rBrowserMap),(function(n){var t,o=n[0],i=n[1];if(!i.excludes||!Z(i.excludes,(function(r){return r.exec(e)})))for(var a in"[object Array]"!==Object.prototype.toString.call(i)&&(i=i.includes),i)if(t=i[a].exec(e)){r.push(new Y(o,t[1].replace(/_/g,"."),t[2].replace(/_/g,".")));break}})),r},e}();function oe(e,r){var n=/\d+/g,t=/\d+/g;for(K([e,r],(function(e){!function(e){if(!/^(\d+)(\.\d+)*$/.test(e))throw new Error("Parameter `version` `"+e+"` isn't a semantic version.")}(e)}));;){var o=n.exec(e),i=t.exec(r);if(o&&!i)return 0===Number(o[0])?oe.EQ:oe.GT;if(!o&&i)return 0===Number(i[0])?oe.EQ:oe.LT;if(o&&i){if(Number(o[0])>Number(i[0]))return oe.GT;if(Number(o[0])<Number(i[0]))return oe.LT}if(!o&&!i)return oe.EQ}}oe.GT=1,oe.EQ=0,oe.LT=-1;var ie=function(){function e(){}var r=e.prototype;return r.detect=function(e,r,n,t){var o=(new te).parse(e);if(!o.length)return!t;var i=function(e,r,n){if("[object Array]"!==J.call(e))throw new TypeError("Parameter `arr` is not an array.");if("[object Function]"!==J.call(r))throw new TypeError("Parameter `callback` is not an array.");var t=[];for(var o in e)r.call(n,e[o],o,e)&&t.push(e[o]);return t}(this.normalizeTargetBrowsers(r),(function(e){return ee(X(o,(function(e){return e.name})),e.name)}));return i.length?Z(i,(function(e){return Z(o,(function(r){return r.name===e.name&&oe(r.primaryVersion,e.primaryVersion)!==oe.LT}))})):!n},r.normalizeTargetBrowsers=function(e){var r=this,n=/(\w+) (([\d.]+)(?:-[\d.]+)?)/,t=X(e,(function(e){var t=n.exec(r.mapAlias(e));return new Y(t[1],t[2],t[3])}));return this.getLowestVersionBrowsers(t)},r.mapAlias=function(e){return{"op_mini all":"op_mini 0","safari TP":"safari 99"}[e]||e},r.getLowestVersionBrowsers=function(e){var r={};return K(e,(function(e){r[e.name]?oe(e.primaryVersion,r[e.name].primaryVersion)===oe.LT&&(r[e.name]=e):r[e.name]=e})),function(e){if(!ee(["[object Object]","[object Function]"],J.call(e)))throw new TypeError("Parameter `obj` is not a object.");var r=[];for(var n in e)$.call(e,n)&&r.push(e[n]);return r}(r)},e}(),ae=function(){function e(){this.refs=[]}var r=e.prototype;return r.prompt=function(e,r){var n=document.createDocumentFragment(),t=this.createElement("div");for(t.innerHTML=e;;){var o=t.firstChild;if(!o)break;if(1===o.nodeType&&"SCRIPT"===o.nodeName){var i=this.createElement("script");i.innerHTML=o.innerHTML,n.appendChild(i),this.refs.push(i),t.removeChild(o)}else n.appendChild(o),this.refs.push(o)}this.bindEvents(n),"afterbegin"===r&&document.body.insertBefore(n,document.body.firstChild),"beforeend"===r&&document.body.appendChild(n)},r.bindEvents=function(e){var r;e.querySelector?r=e.querySelector("#obsoleteClose"):e.getElementById&&(r=e.getElementById("obsoleteClose")),r&&(r.addEventListener?r.addEventListener("click",ne(this.handleClose,this)):r.attachEvent&&r.attachEvent("onclick",ne(this.handleClose,this)))},r.handleClose=function(){K(this.refs,(function(e){e.parentNode.removeChild(e)}))},r.createElement=function(e,r){var n=document.createElement(e);return r&&K(re(r),(function(e){var r=e[0],t=e[1];n.setAttribute(r,t)})),n},e}();v(v.S,"Date",{now:function(){return(new Date).getTime()}});var ce=n.Date.now;var ue=function(){function e(r){this.options=Q({},e.defaultOptions,r),this.detective=new ie,this.alert=null}return e.prototype.test=function(e,r){var n=this;if(!e.length)throw new Error("Parameter `browsers` is empty.");return!!this.detective.detect(navigator.userAgent,e,this.options.promptOnNonTargetBrowser,this.options.promptOnUnknownBrowser)||(function(e,r){if(void 0===r&&(r={}),"requestIdleCallback"in window)window.requestIdleCallback(e,r);else{var n=(new Date).getTime();setTimeout((function(){var r=ce()-n;e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-r)}})}),1)}}((function(){n.alert?n.alert.handleClose():n.alert=new ae,n.alert.prompt(n.options.template,n.options.position),r&&r()})),!1)},e}();return W(ue,"defaultOptions",{template:'<div>Your browser is not supported. <button id="obsoleteClose">&times;</button></div>',position:"afterbegin",promptOnNonTargetBrowser:!1,promptOnUnknownBrowser:!0}),ue})),function(){"use strict";new Obsolete({position:"afterbegin",promptOnNonTargetBrowser:!1,promptOnUnknownBrowser:!0}).test(["and_chr 86","and_ff 82","and_qq 10.4","and_uc 12.12","android 81","baidu 7.12","bb 10","bb 7","chrome 86","chrome 85","chrome 84","chrome 83","edge 86","edge 85","edge 84","edge 83","firefox 82","firefox 81","firefox 80","firefox 79","ie 11","ie 10","ie 9","ie 8","ie_mob 11","ie_mob 10","ios_saf 14","ios_saf 13.4-13.7","ios_saf 13.3","ios_saf 13.2","kaios 2.5","op_mini all","op_mob 59","op_mob 12.1","op_mob 12","op_mob 11.5","opera 72","opera 71","opera 70","opera 69","safari 14","safari 13.1","safari 13","safari 12.1","samsung 12.0","samsung 11.1-11.2","samsung 10.1","samsung 9.2"])}();
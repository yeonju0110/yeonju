"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{334:function(n,e,t){t.d(e,{S1:function(){return u},ZT:function(){return r},jU:function(){return o},on:function(){return i}});var r=function(){};function i(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];n&&n.addEventListener&&n.addEventListener.apply(n,e)}function u(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];n&&n.removeEventListener&&n.removeEventListener.apply(n,e)}var o="undefined"!=typeof window},883:function(n,e,t){var r=t(9072),i=t(334);e.Z=function(n,e,t){if(!i.jU)return[e,i.ZT,i.ZT];if(!n)throw Error("useLocalStorage key may not be falsy");var u=t?t.raw?function(n){return n}:t.deserializer:JSON.parse,o=(0,r.useRef)(function(n){try{var r=t?t.raw?String:t.serializer:JSON.stringify,i=localStorage.getItem(n);if(null!==i)return u(i);return e&&localStorage.setItem(n,r(e)),e}catch(n){return e}}),c=(0,r.useState)(function(){return o.current(n)}),a=c[0],f=c[1];(0,r.useLayoutEffect)(function(){return f(o.current(n))},[n]);var s=(0,r.useCallback)(function(e){try{var r="function"==typeof e?e(a):e;if(void 0===r)return;var i=void 0;i=t?t.raw?"string"==typeof r?r:JSON.stringify(r):t.serializer?t.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(n,i),f(u(i))}catch(n){}},[n,f]);return[a,s,(0,r.useCallback)(function(){try{localStorage.removeItem(n),f(void 0)}catch(n){}},[n,f])]}},2187:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(9072),i=function(n){(0,r.useEffect)(n,[])},u=function(n){var e=(0,r.useRef)(n);e.current=n,i(function(){return function(){return e.current()}})},o=function(n){var e=(0,r.useRef)(0),t=(0,r.useState)(n),i=t[0],o=t[1],c=(0,r.useCallback)(function(n){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){o(n)})},[]);return u(function(){cancelAnimationFrame(e.current)}),[i,c]},c=t(334),a=function(n,e){void 0===n&&(n=1/0),void 0===e&&(e=1/0);var t=o({width:c.jU?window.innerWidth:n,height:c.jU?window.innerHeight:e}),i=t[0],u=t[1];return(0,r.useEffect)(function(){if(c.jU){var n=function(){u({width:window.innerWidth,height:window.innerHeight})};return(0,c.on)(window,"resize",n),function(){(0,c.S1)(window,"resize",n)}}},[]),i}}}]);
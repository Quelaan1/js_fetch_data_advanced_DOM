parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api",t=function(t){return fetch("".concat(n).concat(t)).then(function(n){if(!n.ok)throw new Error(n.status);return n.json()})},e=function(){return t("/phones.json")},c=function(n){return t("/phones/".concat(n,".json"))},r=function(n){return e().then(function(t){var e=[];return t.forEach(function(n){e.push(c(n.id))}),"first"===n?Promise.race(e):Promise.allSettled(e)})},o=function(n,t,e){var c=document.createElement("div");c.className=t,c.innerHTML="<h2>".concat(n,"</h2>");var r=document.createElement("ul");c.append(r),document.body.append(c),e.forEach(function(n){r.insertAdjacentHTML("beforeend","\n      <li>".concat(n.name," <span hidden>").concat(n.id.toUpperCase(),"</span></li>\n    "))})},i=function(){r("first").then(function(n){o("First Received","first-received",[n])})},a=function(){r().then(function(n){var t=n.map(function(n){return n.value});o("All Successful","all-successful",t)})},u=function(){r().then(function(n){var t=n.slice(0,3).map(function(n){return n.value});o("First Three","first-three",t)})};i(),a(),u();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.58c178a5.js.map
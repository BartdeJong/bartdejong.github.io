(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3b7c5b0"],{"0790":function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return l}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var i=function(n,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},i(n,e)};function r(n,e){function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}function o(n,e,t,i){return new(t||(t=Promise))((function(r,o){function l(n){try{c(i.next(n))}catch(e){o(e)}}function s(n){try{c(i["throw"](n))}catch(e){o(e)}}function c(n){n.done?r(n.value):new t((function(e){e(n.value)})).then(l,s)}c((i=i.apply(n,e||[])).next())}))}function l(n,e){var t,i,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(n){return function(e){return c([n,e])}}function c(o){if(t)throw new TypeError("Generator is already executing.");while(l)try{if(t=1,i&&(r=2&o[0]?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,i=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=e.call(n,l)}catch(s){o=[6,s],i=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}},"5a65":function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i=function(n){try{if("string"!=typeof n||""===n)return n;var e=document.createDocumentFragment(),t=document.createElement("div");e.appendChild(t),t.innerHTML=n,s.forEach((function(n){for(var t=e.querySelectorAll(n),i=t.length-1;i>=0;i--){var l=t[i];l.parentNode?l.parentNode.removeChild(l):e.removeChild(l);for(var s=o(l),c=0;c<s.length;c++)r(s[c])}}));for(var i=o(e),l=0;l<i.length;l++)r(i[l]);var c=document.createElement("div");c.appendChild(e);var a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(n){return console.error(n),""}},r=function(n){if(!n.nodeType||1===n.nodeType){for(var e=n.attributes.length-1;e>=0;e--){var t=n.attributes[e],i=t.name;if(l.includes(i.toLowerCase())){var s=t.value;null!=s&&s.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}var c=o(n);for(e=0;e<c.length;e++)r(c[e])}},o=function(n){return null!=n.children?n.children:n.childNodes},l=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},bc0f:function(n,e,t){"use strict";t.r(e),t.d(e,"IonInfiniteScroll",(function(){return l})),t.d(e,"IonInfiniteScrollContent",(function(){return s}));var i=t("0790"),r=t("7018"),o=t("5a65"),l=function(){function n(){this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return n.prototype.thresholdChanged=function(n){n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)},n.prototype.disabledChanged=function(n){this.disabled&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)},n.prototype.componentDidLoad=function(){return i["a"](this,void 0,void 0,(function(){var n,e,t=this;return i["c"](this,(function(i){switch(i.label){case 0:return(n=this.el.closest("ion-content"))?[4,n.componentOnReady()]:[3,3];case 1:return i.sent(),e=this,[4,n.getScrollElement()];case 2:e.scrollEl=i.sent(),i.label=3;case 3:return this.thresholdChanged(this.threshold),this.enableScrollEvents(!this.disabled),"top"===this.position&&this.queue.write((function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)})),[2]}}))}))},n.prototype.componentDidUnload=function(){this.scrollEl=void 0},n.prototype.onScroll=function(){var n=this.scrollEl;if(!n||!this.canStart())return 1;var e=this.el.offsetHeight;if(0===e)return 2;var t=n.scrollTop,i=n.offsetHeight,r=0!==this.thrPc?i*this.thrPc:this.thrPx;if(("bottom"===this.position?n.scrollHeight-e-t-r-i:t-e-r)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},n.prototype.complete=function(){var n=this,e=this.scrollEl;if(this.isLoading&&e&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;var t=e.scrollHeight-e.scrollTop;requestAnimationFrame((function(){n.queue.read((function(){var i=e.scrollHeight-t;requestAnimationFrame((function(){n.queue.write((function(){e.scrollTop=i,n.isBusy=!1}))}))}))}))}},n.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},n.prototype.enableScrollEvents=function(n){this.scrollEl&&this.enableListener(this,"scroll",n,this.scrollEl)},n.prototype.hostData=function(){var n;return{class:(n={},n[""+this.mode]=!0,n["infinite-scroll-loading"]=this.isLoading,n["infinite-scroll-enabled"]=!this.disabled,n)}},Object.defineProperty(n,"is",{get:function(){return"ion-infinite-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isLoading:{state:!0},position:{type:String,attr:"position"},queue:{context:"queue"},threshold:{type:String,attr:"threshold",watchCallbacks:["thresholdChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"ionInfinite",method:"ionInfinite",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),n}(),s=function(){function n(){}return n.prototype.componentDidLoad=function(){void 0===this.loadingSpinner&&(this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","ios"===this.mode?"lines":"crescent")))},n.prototype.hostData=function(){var n;return{class:(n={},n[""+this.mode]=!0,n["infinite-scroll-content-"+this.mode]=!0,n)}},n.prototype.render=function(){return Object(r["b"])("div",{class:"infinite-loading"},this.loadingSpinner&&Object(r["b"])("div",{class:"infinite-loading-spinner"},Object(r["b"])("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(r["b"])("div",{class:"infinite-loading-text",innerHTML:Object(o["a"])(this.loadingText)}))},Object.defineProperty(n,"is",{get:function(){return"ion-infinite-scroll-content"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{config:{context:"config"},loadingSpinner:{type:String,attr:"loading-spinner",mutable:!0},loadingText:{type:String,attr:"loading-text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}()}}]);
//# sourceMappingURL=chunk-b3b7c5b0.52732750.js.map
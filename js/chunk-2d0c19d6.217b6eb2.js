(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c19d6"],{4796:function(t,e,r){"use strict";r.r(e),r.d(e,"createGesture",(function(){return v})),r.d(e,"GESTURE_CONTROLLER",(function(){return c}));var i,n=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new s(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new o(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach((function(t){n=Math.max(n,t)})),n===r){this.capturedId=e,i.clear();var s=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(s),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),s=function(){function t(t,e,r,i,n){this.id=e,this.name=r,this.disableScroll=n,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),o=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",c=new n(document);function u(t,e,r,i){var n,s,o=l(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(n="addEventListener",s="removeEventListener"),t[n](e,r,o),function(){t[s](e,r,o)}}function l(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){i=!1}return!!i}var d=2e3;function h(t,e,r,i,n){var s,o,a,c,l,h,f,v=0;function b(i){v=Date.now()+d,e(i)&&(!o&&r&&(o=u(t,"touchmove",r,n)),a||(a=u(t,"touchend",S,n)),c||(c=u(t,"touchcancel",S,n)))}function y(i){v>Date.now()||e(i)&&(!h&&r&&(h=u(p(t),"mousemove",r,n)),f||(f=u(p(t),"mouseup",m,n)))}function S(t){w(),i&&i(t)}function m(t){g(),i&&i(t)}function w(){o&&o(),a&&a(),c&&c(),o=a=c=void 0}function g(){h&&h(),f&&f(),h=f=void 0}function X(){w(),g()}function Y(e){e?(s&&s(),l&&l(),s=l=void 0,X()):(s||(s=u(t,"touchstart",b,n)),l||(l=u(t,"mousedown",y,n)))}return{setDisabled:Y,stop:X,destroy:function(){Y(!0),i=r=e=void 0}}}function p(t){return t instanceof Document?t:t.ownerDocument}function f(t,e,r){var i=r*(Math.PI/180),n="x"===t,s=Math.cos(i),o=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,i=e-c,d=r*r+i*i;if(d<o)return!1;var h=Math.sqrt(d),p=(n?r:i)/h;return l=p>s?1:p<-s?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}function v(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),r=e.canStart,i=e.onWillStart,n=e.onStart,s=e.onEnd,o=e.notCaptured,a=e.onMove,u=e.threshold,l=e.queue,d={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},p=h(e.el,(function(t){var e=S(t);return!(g||!X)&&(y(t,d),d.startX=d.currentX,d.startY=d.currentY,d.startTimeStamp=d.timeStamp=e,d.velocityX=d.velocityY=d.deltaX=d.deltaY=0,d.event=t,(!r||!1!==r(d))&&(m.release(),!!m.start()&&(g=!0,0===u?_():(v.start(d.startX,d.startY),!0))))}),(function(t){w?!Y&&X&&(Y=!0,b(d,t),l.write(G)):(b(d,t),v.detect(d.currentX,d.currentY)&&(v.isGesture()&&_()||(E(),p.stop(),o&&o(d))))}),I,{capture:!1}),v=f(e.direction,e.threshold,e.maxAngle),m=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),w=!1,g=!1,X=!0,Y=!1;function G(){w&&(Y=!1,a&&a(d))}function _(){return!(m&&!m.capture()||(w=!0,X=!1,d.startX=d.currentX,d.startY=d.currentY,d.startTimeStamp=d.timeStamp,i?i(d).then(D):D(),0))}function D(){n&&n(d),X=!0}function E(){w=!1,g=!1,Y=!1,X=!0,m.release()}function I(t){var e=w,r=X;E(),r&&(b(d,t),e?s&&s(d):o&&o(d))}return{setDisabled:function(t){t&&w&&I(void 0),p.setDisabled(t)},destroy:function(){m.destroy(),p.destroy()}}}function b(t,e){if(e){var r=t.currentX,i=t.currentY,n=t.timeStamp;y(e,t);var s=t.currentX,o=t.currentY,a=(t.timeStamp=S(e))-n;if(a>0&&a<100){var c=(o-i)/a;t.velocityX=(s-r)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=o-t.startY,t.event=e}}function y(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var s=n[0];r=s.clientX,i=s.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i}function S(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=chunk-2d0c19d6.217b6eb2.js.map
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(c){if(c.ep)return;c.ep=!0;const i=a(c);fetch(c.href,i)}})();var Xb={exports:{}},oM={},Kb={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T2=Symbol.for("react.element"),mj=Symbol.for("react.portal"),xj=Symbol.for("react.fragment"),gj=Symbol.for("react.strict_mode"),fj=Symbol.for("react.profiler"),vj=Symbol.for("react.provider"),Mj=Symbol.for("react.context"),wj=Symbol.for("react.forward_ref"),Lj=Symbol.for("react.suspense"),bj=Symbol.for("react.memo"),Cj=Symbol.for("react.lazy"),BL=Symbol.iterator;function Sj(e){return e===null||typeof e!="object"?null:(e=BL&&e[BL]||e["@@iterator"],typeof e=="function"?e:null)}var Qb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yb=Object.assign,Jb={};function Wa(e,t,a){this.props=e,this.context=t,this.refs=Jb,this.updater=a||Qb}Wa.prototype.isReactComponent={};Wa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eC(){}eC.prototype=Wa.prototype;function Uw(e,t,a){this.props=e,this.context=t,this.refs=Jb,this.updater=a||Qb}var Ow=Uw.prototype=new eC;Ow.constructor=Uw;Yb(Ow,Wa.prototype);Ow.isPureReactComponent=!0;var EL=Array.isArray,tC=Object.prototype.hasOwnProperty,Zw={current:null},aC={key:!0,ref:!0,__self:!0,__source:!0};function nC(e,t,a){var r,c={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)tC.call(t,r)&&!aC.hasOwnProperty(r)&&(c[r]=t[r]);var s=arguments.length-2;if(s===1)c.children=a;else if(1<s){for(var d=Array(s),u=0;u<s;u++)d[u]=arguments[u+2];c.children=d}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)c[r]===void 0&&(c[r]=s[r]);return{$$typeof:T2,type:e,key:i,ref:l,props:c,_owner:Zw.current}}function jj(e,t){return{$$typeof:T2,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _w(e){return typeof e=="object"&&e!==null&&e.$$typeof===T2}function Ij(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var UL=/\/+/g;function LM(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ij(""+e.key):t.toString(36)}function yn(e,t,a,r,c){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case T2:case mj:l=!0}}if(l)return l=e,c=c(l),e=r===""?"."+LM(l,0):r,EL(c)?(a="",e!=null&&(a=e.replace(UL,"$&/")+"/"),yn(c,t,a,"",function(u){return u})):c!=null&&(_w(c)&&(c=jj(c,a+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(UL,"$&/")+"/")+e)),t.push(c)),1;if(l=0,r=r===""?".":r+":",EL(e))for(var s=0;s<e.length;s++){i=e[s];var d=r+LM(i,s);l+=yn(i,t,a,d,c)}else if(d=Sj(e),typeof d=="function")for(e=d.call(e),s=0;!(i=e.next()).done;)i=i.value,d=r+LM(i,s++),l+=yn(i,t,a,d,c);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function X2(e,t,a){if(e==null)return e;var r=[],c=0;return yn(e,r,"","",function(i){return t.call(a,i,c++)}),r}function qj(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},pn={transition:null},zj={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:pn,ReactCurrentOwner:Zw};function rC(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:X2,forEach:function(e,t,a){X2(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return X2(e,function(){t++}),t},toArray:function(e){return X2(e,function(t){return t})||[]},only:function(e){if(!_w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Wa;V.Fragment=xj;V.Profiler=fj;V.PureComponent=Uw;V.StrictMode=gj;V.Suspense=Lj;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zj;V.act=rC;V.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yb({},e.props),c=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Zw.current),t.key!==void 0&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)tC.call(t,d)&&!aC.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&s!==void 0?s[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=a;else if(1<d){s=Array(d);for(var u=0;u<d;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:T2,type:e.type,key:c,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Mj,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vj,_context:e},e.Consumer=e};V.createElement=nC;V.createFactory=function(e){var t=nC.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:wj,render:e}};V.isValidElement=_w;V.lazy=function(e){return{$$typeof:Cj,_payload:{_status:-1,_result:e},_init:qj}};V.memo=function(e,t){return{$$typeof:bj,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=pn.transition;pn.transition={};try{e()}finally{pn.transition=t}};V.unstable_act=rC;V.useCallback=function(e,t){return xe.current.useCallback(e,t)};V.useContext=function(e){return xe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};V.useEffect=function(e,t){return xe.current.useEffect(e,t)};V.useId=function(){return xe.current.useId()};V.useImperativeHandle=function(e,t,a){return xe.current.useImperativeHandle(e,t,a)};V.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return xe.current.useMemo(e,t)};V.useReducer=function(e,t,a){return xe.current.useReducer(e,t,a)};V.useRef=function(e){return xe.current.useRef(e)};V.useState=function(e){return xe.current.useState(e)};V.useSyncExternalStore=function(e,t,a){return xe.current.useSyncExternalStore(e,t,a)};V.useTransition=function(){return xe.current.useTransition()};V.version="18.3.1";Kb.exports=V;var f=Kb.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pj=f,Fj=Symbol.for("react.element"),Aj=Symbol.for("react.fragment"),Hj=Object.prototype.hasOwnProperty,Nj=Pj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vj={key:!0,ref:!0,__self:!0,__source:!0};function oC(e,t,a){var r,c={},i=null,l=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Hj.call(t,r)&&!Vj.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)c[r]===void 0&&(c[r]=t[r]);return{$$typeof:Fj,type:e,key:i,ref:l,props:c,_owner:Nj.current}}oM.Fragment=Aj;oM.jsx=oC;oM.jsxs=oC;Xb.exports=oM;var o=Xb.exports,cC={exports:{}},ze={},iC={exports:{}},lC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,N){var F=I.length;I.push(N);e:for(;0<F;){var U=F-1>>>1,R=I[U];if(0<c(R,N))I[U]=N,I[F]=R,F=U;else break e}}function a(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var N=I[0],F=I.pop();if(F!==N){I[0]=F;e:for(var U=0,R=I.length,st=R>>>1;U<st;){var P=2*(U+1)-1,Ht=I[P],K=P+1,ht=I[K];if(0>c(Ht,F))K<R&&0>c(ht,Ht)?(I[U]=ht,I[K]=F,U=K):(I[U]=Ht,I[P]=F,U=P);else if(K<R&&0>c(ht,F))I[U]=ht,I[K]=F,U=K;else break e}}return N}function c(I,N){var F=I.sortIndex-N.sortIndex;return F!==0?F:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var d=[],u=[],y=1,m=null,h=3,g=!1,v=!1,w=!1,q=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var N=a(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=I)r(u),N.sortIndex=N.expirationTime,t(d,N);else break;N=a(u)}}function M(I){if(w=!1,x(I),!v)if(a(d)!==null)v=!0,be(b);else{var N=a(u);N!==null&&At(M,N.startTime-I)}}function b(I,N){v=!1,w&&(w=!1,k(j),j=-1),g=!0;var F=h;try{for(x(N),m=a(d);m!==null&&(!(m.expirationTime>N)||I&&!oe());){var U=m.callback;if(typeof U=="function"){m.callback=null,h=m.priorityLevel;var R=U(m.expirationTime<=N);N=e.unstable_now(),typeof R=="function"?m.callback=R:m===a(d)&&r(d),x(N)}else r(d);m=a(d)}if(m!==null)var st=!0;else{var P=a(u);P!==null&&At(M,P.startTime-N),st=!1}return st}finally{m=null,h=F,g=!1}}var C=!1,S=null,j=-1,D=5,A=-1;function oe(){return!(e.unstable_now()-A<D)}function ee(){if(S!==null){var I=e.unstable_now();A=I;var N=!0;try{N=S(!0,I)}finally{N?de():(C=!1,S=null)}}else C=!1}var de;if(typeof p=="function")de=function(){p(ee)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Xa=se.port2;se.port1.onmessage=ee,de=function(){Xa.postMessage(null)}}else de=function(){q(ee,0)};function be(I){S=I,C||(C=!0,de())}function At(I,N){j=q(function(){I(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,be(b))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return a(d)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var F=h;h=N;try{return I()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=h;h=I;try{return N()}finally{h=F}},e.unstable_scheduleCallback=function(I,N,F){var U=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?U+F:U):F=U,I){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=F+R,I={id:y++,callback:N,priorityLevel:I,startTime:F,expirationTime:R,sortIndex:-1},F>U?(I.sortIndex=F,t(u,I),a(d)===null&&I===a(u)&&(w?(k(j),j=-1):w=!0,At(M,F-U))):(I.sortIndex=R,t(d,I),v||g||(v=!0,be(b))),I},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(I){var N=h;return function(){var F=h;h=N;try{return I.apply(this,arguments)}finally{h=F}}}})(lC);iC.exports=lC;var Rj=iC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dj=f,qe=Rj;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dC=new Set,w2={};function ya(e,t){Ta(e,t),Ta(e+"Capture",t)}function Ta(e,t){for(w2[e]=t,e=0;e<t.length;e++)dC.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),KM=Object.prototype.hasOwnProperty,Tj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,OL={},ZL={};function Bj(e){return KM.call(ZL,e)?!0:KM.call(OL,e)?!1:Tj.test(e)?ZL[e]=!0:(OL[e]=!0,!1)}function Ej(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uj(e,t,a,r){if(t===null||typeof t>"u"||Ej(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,a,r,c,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=c,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ww=/[\-:]([a-z])/g;function Gw(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ww,Gw);le[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ww,Gw);le[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ww,Gw);le[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function $w(e,t,a,r){var c=le.hasOwnProperty(t)?le[t]:null;(c!==null?c.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uj(t,a,c,r)&&(a=null),r||c===null?Bj(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):c.mustUseProperty?e[c.propertyName]=a===null?c.type===3?!1:"":a:(t=c.attributeName,r=c.attributeNamespace,a===null?e.removeAttribute(t):(c=c.type,a=c===3||c===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var dt=Dj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K2=Symbol.for("react.element"),va=Symbol.for("react.portal"),Ma=Symbol.for("react.fragment"),Xw=Symbol.for("react.strict_mode"),QM=Symbol.for("react.profiler"),sC=Symbol.for("react.provider"),hC=Symbol.for("react.context"),Kw=Symbol.for("react.forward_ref"),YM=Symbol.for("react.suspense"),JM=Symbol.for("react.suspense_list"),Qw=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),uC=Symbol.for("react.offscreen"),_L=Symbol.iterator;function Ya(e){return e===null||typeof e!="object"?null:(e=_L&&e[_L]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,bM;function c2(e){if(bM===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);bM=t&&t[1]||""}return`
`+bM+e}var CM=!1;function SM(e,t){if(!e||CM)return"";CM=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var c=u.stack.split(`
`),i=r.stack.split(`
`),l=c.length-1,s=i.length-1;1<=l&&0<=s&&c[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(c[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||c[l]!==i[s]){var d=`
`+c[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=s);break}}}finally{CM=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?c2(e):""}function Oj(e){switch(e.tag){case 5:return c2(e.type);case 16:return c2("Lazy");case 13:return c2("Suspense");case 19:return c2("SuspenseList");case 0:case 2:case 15:return e=SM(e.type,!1),e;case 11:return e=SM(e.type.render,!1),e;case 1:return e=SM(e.type,!0),e;default:return""}}function ew(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ma:return"Fragment";case va:return"Portal";case QM:return"Profiler";case Xw:return"StrictMode";case YM:return"Suspense";case JM:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hC:return(e.displayName||"Context")+".Consumer";case sC:return(e._context.displayName||"Context")+".Provider";case Kw:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qw:return t=e.displayName||null,t!==null?t:ew(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return ew(e(t))}catch{}}return null}function Zj(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ew(t);case 8:return t===Xw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _j(e){var t=yC(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Q2(e){e._valueTracker||(e._valueTracker=_j(e))}function pC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=yC(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function N9(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tw(e,t){var a=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function WL(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=It(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kC(e,t){t=t.checked,t!=null&&$w(e,"checked",t,!1)}function aw(e,t){kC(e,t);var a=It(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nw(e,t.type,a):t.hasOwnProperty("defaultValue")&&nw(e,t.type,It(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function GL(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function nw(e,t,a){(t!=="number"||N9(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var i2=Array.isArray;function Fa(e,t,a,r){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+It(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function rw(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $L(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(L(92));if(i2(a)){if(1<a.length)throw Error(L(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:It(a)}}function mC(e,t){var a=It(t.value),r=It(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function XL(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ow(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Y2,gC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,c){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,c)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Y2=Y2||document.createElement("div"),Y2.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Y2.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function L2(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var s2={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wj=["Webkit","ms","Moz","O"];Object.keys(s2).forEach(function(e){Wj.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),s2[t]=s2[e]})});function fC(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||s2.hasOwnProperty(e)&&s2[e]?(""+t).trim():t+"px"}function vC(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,c=fC(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,c):e[a]=c}}var Gj=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cw(e,t){if(t){if(Gj[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function iw(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lw=null;function Yw(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dw=null,Aa=null,Ha=null;function KL(e){if(e=U2(e)){if(typeof dw!="function")throw Error(L(280));var t=e.stateNode;t&&(t=sM(t),dw(e.stateNode,e.type,t))}}function MC(e){Aa?Ha?Ha.push(e):Ha=[e]:Aa=e}function wC(){if(Aa){var e=Aa,t=Ha;if(Ha=Aa=null,KL(e),t)for(e=0;e<t.length;e++)KL(t[e])}}function LC(e,t){return e(t)}function bC(){}var jM=!1;function CC(e,t,a){if(jM)return e(t,a);jM=!0;try{return LC(e,t,a)}finally{jM=!1,(Aa!==null||Ha!==null)&&(bC(),wC())}}function b2(e,t){var a=e.stateNode;if(a===null)return null;var r=sM(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(L(231,t,typeof a));return a}var sw=!1;if(ot)try{var Ja={};Object.defineProperty(Ja,"passive",{get:function(){sw=!0}}),window.addEventListener("test",Ja,Ja),window.removeEventListener("test",Ja,Ja)}catch{sw=!1}function $j(e,t,a,r,c,i,l,s,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(a,u)}catch(y){this.onError(y)}}var h2=!1,V9=null,R9=!1,hw=null,Xj={onError:function(e){h2=!0,V9=e}};function Kj(e,t,a,r,c,i,l,s,d){h2=!1,V9=null,$j.apply(Xj,arguments)}function Qj(e,t,a,r,c,i,l,s,d){if(Kj.apply(this,arguments),h2){if(h2){var u=V9;h2=!1,V9=null}else throw Error(L(198));R9||(R9=!0,hw=u)}}function pa(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function SC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function QL(e){if(pa(e)!==e)throw Error(L(188))}function Yj(e){var t=e.alternate;if(!t){if(t=pa(e),t===null)throw Error(L(188));return t!==e?null:e}for(var a=e,r=t;;){var c=a.return;if(c===null)break;var i=c.alternate;if(i===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===i.child){for(i=c.child;i;){if(i===a)return QL(c),e;if(i===r)return QL(c),t;i=i.sibling}throw Error(L(188))}if(a.return!==r.return)a=c,r=i;else{for(var l=!1,s=c.child;s;){if(s===a){l=!0,a=c,r=i;break}if(s===r){l=!0,r=c,a=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===a){l=!0,a=i,r=c;break}if(s===r){l=!0,r=i,a=c;break}s=s.sibling}if(!l)throw Error(L(189))}}if(a.alternate!==r)throw Error(L(190))}if(a.tag!==3)throw Error(L(188));return a.stateNode.current===a?e:t}function jC(e){return e=Yj(e),e!==null?IC(e):null}function IC(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=IC(e);if(t!==null)return t;e=e.sibling}return null}var qC=qe.unstable_scheduleCallback,YL=qe.unstable_cancelCallback,Jj=qe.unstable_shouldYield,eI=qe.unstable_requestPaint,Y=qe.unstable_now,tI=qe.unstable_getCurrentPriorityLevel,Jw=qe.unstable_ImmediatePriority,zC=qe.unstable_UserBlockingPriority,D9=qe.unstable_NormalPriority,aI=qe.unstable_LowPriority,PC=qe.unstable_IdlePriority,cM=null,Ye=null;function nI(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(cM,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:cI,rI=Math.log,oI=Math.LN2;function cI(e){return e>>>=0,e===0?32:31-(rI(e)/oI|0)|0}var J2=64,en=4194304;function l2(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function T9(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,i=e.pingedLanes,l=a&268435455;if(l!==0){var s=l&~c;s!==0?r=l2(s):(i&=l,i!==0&&(r=l2(i)))}else l=a&~c,l!==0?r=l2(l):i!==0&&(r=l2(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&c)&&(c=r&-r,i=t&-t,c>=i||c===16&&(i&4194240)!==0))return t;if(r&4&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-Oe(t),c=1<<a,r|=e[a],t&=~c;return r}function iI(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lI(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Oe(i),s=1<<l,d=c[l];d===-1?(!(s&a)||s&r)&&(c[l]=iI(s,t)):d<=t&&(e.expiredLanes|=s),i&=~s}}function uw(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function FC(){var e=J2;return J2<<=1,!(J2&4194240)&&(J2=64),e}function IM(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function B2(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=a}function dI(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var c=31-Oe(a),i=1<<c;t[c]=0,r[c]=-1,e[c]=-1,a&=~i}}function eL(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-Oe(a),c=1<<r;c&t|e[r]&t&&(e[r]|=t),a&=~c}}var B=0;function AC(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var HC,tL,NC,VC,RC,yw=!1,tn=[],vt=null,Mt=null,wt=null,C2=new Map,S2=new Map,mt=[],sI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function JL(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":C2.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":S2.delete(t.pointerId)}}function e2(e,t,a,r,c,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[c]},t!==null&&(t=U2(t),t!==null&&tL(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function hI(e,t,a,r,c){switch(t){case"focusin":return vt=e2(vt,e,t,a,r,c),!0;case"dragenter":return Mt=e2(Mt,e,t,a,r,c),!0;case"mouseover":return wt=e2(wt,e,t,a,r,c),!0;case"pointerover":var i=c.pointerId;return C2.set(i,e2(C2.get(i)||null,e,t,a,r,c)),!0;case"gotpointercapture":return i=c.pointerId,S2.set(i,e2(S2.get(i)||null,e,t,a,r,c)),!0}return!1}function DC(e){var t=aa(e.target);if(t!==null){var a=pa(t);if(a!==null){if(t=a.tag,t===13){if(t=SC(a),t!==null){e.blockedOn=t,RC(e.priority,function(){NC(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=pw(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);lw=r,a.target.dispatchEvent(r),lw=null}else return t=U2(a),t!==null&&tL(t),e.blockedOn=a,!1;t.shift()}return!0}function eb(e,t,a){kn(e)&&a.delete(t)}function uI(){yw=!1,vt!==null&&kn(vt)&&(vt=null),Mt!==null&&kn(Mt)&&(Mt=null),wt!==null&&kn(wt)&&(wt=null),C2.forEach(eb),S2.forEach(eb)}function t2(e,t){e.blockedOn===t&&(e.blockedOn=null,yw||(yw=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,uI)))}function j2(e){function t(c){return t2(c,e)}if(0<tn.length){t2(tn[0],e);for(var a=1;a<tn.length;a++){var r=tn[a];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&t2(vt,e),Mt!==null&&t2(Mt,e),wt!==null&&t2(wt,e),C2.forEach(t),S2.forEach(t),a=0;a<mt.length;a++)r=mt[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(a=mt[0],a.blockedOn===null);)DC(a),a.blockedOn===null&&mt.shift()}var Na=dt.ReactCurrentBatchConfig,B9=!0;function yI(e,t,a,r){var c=B,i=Na.transition;Na.transition=null;try{B=1,aL(e,t,a,r)}finally{B=c,Na.transition=i}}function pI(e,t,a,r){var c=B,i=Na.transition;Na.transition=null;try{B=4,aL(e,t,a,r)}finally{B=c,Na.transition=i}}function aL(e,t,a,r){if(B9){var c=pw(e,t,a,r);if(c===null)DM(e,t,r,E9,a),JL(e,r);else if(hI(c,e,t,a,r))r.stopPropagation();else if(JL(e,r),t&4&&-1<sI.indexOf(e)){for(;c!==null;){var i=U2(c);if(i!==null&&HC(i),i=pw(e,t,a,r),i===null&&DM(e,t,r,E9,a),i===c)break;c=i}c!==null&&r.stopPropagation()}else DM(e,t,r,null,a)}}var E9=null;function pw(e,t,a,r){if(E9=null,e=Yw(r),e=aa(e),e!==null)if(t=pa(e),t===null)e=null;else if(a=t.tag,a===13){if(e=SC(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return E9=e,null}function TC(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tI()){case Jw:return 1;case zC:return 4;case D9:case aI:return 16;case PC:return 536870912;default:return 16}default:return 16}}var gt=null,nL=null,mn=null;function BC(){if(mn)return mn;var e,t=nL,a=t.length,r,c="value"in gt?gt.value:gt.textContent,i=c.length;for(e=0;e<a&&t[e]===c[e];e++);var l=a-e;for(r=1;r<=l&&t[a-r]===c[i-r];r++);return mn=c.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function an(){return!0}function tb(){return!1}function Pe(e){function t(a,r,c,i,l){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?an:tb,this.isPropagationStopped=tb,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=an)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=an)},persist:function(){},isPersistent:an}),t}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rL=Pe(Ga),E2=$({},Ga,{view:0,detail:0}),kI=Pe(E2),qM,zM,a2,iM=$({},E2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oL,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==a2&&(a2&&e.type==="mousemove"?(qM=e.screenX-a2.screenX,zM=e.screenY-a2.screenY):zM=qM=0,a2=e),qM)},movementY:function(e){return"movementY"in e?e.movementY:zM}}),ab=Pe(iM),mI=$({},iM,{dataTransfer:0}),xI=Pe(mI),gI=$({},E2,{relatedTarget:0}),PM=Pe(gI),fI=$({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),vI=Pe(fI),MI=$({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wI=Pe(MI),LI=$({},Ga,{data:0}),nb=Pe(LI),bI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jI(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=SI[e])?!!t[e]:!1}function oL(){return jI}var II=$({},E2,{key:function(e){if(e.key){var t=bI[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?CI[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oL,charCode:function(e){return e.type==="keypress"?xn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qI=Pe(II),zI=$({},iM,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rb=Pe(zI),PI=$({},E2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oL}),FI=Pe(PI),AI=$({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),HI=Pe(AI),NI=$({},iM,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),VI=Pe(NI),RI=[9,13,27,32],cL=ot&&"CompositionEvent"in window,u2=null;ot&&"documentMode"in document&&(u2=document.documentMode);var DI=ot&&"TextEvent"in window&&!u2,EC=ot&&(!cL||u2&&8<u2&&11>=u2),ob=" ",cb=!1;function UC(e,t){switch(e){case"keyup":return RI.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OC(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wa=!1;function TI(e,t){switch(e){case"compositionend":return OC(t);case"keypress":return t.which!==32?null:(cb=!0,ob);case"textInput":return e=t.data,e===ob&&cb?null:e;default:return null}}function BI(e,t){if(wa)return e==="compositionend"||!cL&&UC(e,t)?(e=BC(),mn=nL=gt=null,wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return EC&&t.locale!=="ko"?null:t.data;default:return null}}var EI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ib(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!EI[e.type]:t==="textarea"}function ZC(e,t,a,r){MC(r),t=U9(t,"onChange"),0<t.length&&(a=new rL("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var y2=null,I2=null;function UI(e){tS(e,0)}function lM(e){var t=Ca(e);if(pC(t))return e}function OI(e,t){if(e==="change")return t}var _C=!1;if(ot){var FM;if(ot){var AM="oninput"in document;if(!AM){var lb=document.createElement("div");lb.setAttribute("oninput","return;"),AM=typeof lb.oninput=="function"}FM=AM}else FM=!1;_C=FM&&(!document.documentMode||9<document.documentMode)}function db(){y2&&(y2.detachEvent("onpropertychange",WC),I2=y2=null)}function WC(e){if(e.propertyName==="value"&&lM(I2)){var t=[];ZC(t,I2,e,Yw(e)),CC(UI,t)}}function ZI(e,t,a){e==="focusin"?(db(),y2=t,I2=a,y2.attachEvent("onpropertychange",WC)):e==="focusout"&&db()}function _I(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lM(I2)}function WI(e,t){if(e==="click")return lM(t)}function GI(e,t){if(e==="input"||e==="change")return lM(t)}function $I(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:$I;function q2(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!KM.call(t,c)||!_e(e[c],t[c]))return!1}return!0}function sb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hb(e,t){var a=sb(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sb(a)}}function GC(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?GC(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $C(){for(var e=window,t=N9();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=N9(e.document)}return t}function iL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function XI(e){var t=$C(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&GC(a.ownerDocument.documentElement,a)){if(r!==null&&iL(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=a.textContent.length,i=Math.min(r.start,c);r=r.end===void 0?i:Math.min(r.end,c),!e.extend&&i>r&&(c=r,r=i,i=c),c=hb(a,i);var l=hb(a,r);c&&l&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var KI=ot&&"documentMode"in document&&11>=document.documentMode,La=null,kw=null,p2=null,mw=!1;function ub(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mw||La==null||La!==N9(r)||(r=La,"selectionStart"in r&&iL(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),p2&&q2(p2,r)||(p2=r,r=U9(kw,"onSelect"),0<r.length&&(t=new rL("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=La)))}function nn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ba={animationend:nn("Animation","AnimationEnd"),animationiteration:nn("Animation","AnimationIteration"),animationstart:nn("Animation","AnimationStart"),transitionend:nn("Transition","TransitionEnd")},HM={},XC={};ot&&(XC=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function dM(e){if(HM[e])return HM[e];if(!ba[e])return e;var t=ba[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in XC)return HM[e]=t[a];return e}var KC=dM("animationend"),QC=dM("animationiteration"),YC=dM("animationstart"),JC=dM("transitionend"),eS=new Map,yb="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){eS.set(e,t),ya(t,[e])}for(var NM=0;NM<yb.length;NM++){var VM=yb[NM],QI=VM.toLowerCase(),YI=VM[0].toUpperCase()+VM.slice(1);zt(QI,"on"+YI)}zt(KC,"onAnimationEnd");zt(QC,"onAnimationIteration");zt(YC,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(JC,"onTransitionEnd");Ta("onMouseEnter",["mouseout","mouseover"]);Ta("onMouseLeave",["mouseout","mouseover"]);Ta("onPointerEnter",["pointerout","pointerover"]);Ta("onPointerLeave",["pointerout","pointerover"]);ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ya("onBeforeInput",["compositionend","keypress","textInput","paste"]);ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var d2="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JI=new Set("cancel close invalid load scroll toggle".split(" ").concat(d2));function pb(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,Qj(r,t,void 0,e),e.currentTarget=null}function tS(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],d=s.instance,u=s.currentTarget;if(s=s.listener,d!==i&&c.isPropagationStopped())break e;pb(c,s,u),i=d}else for(l=0;l<r.length;l++){if(s=r[l],d=s.instance,u=s.currentTarget,s=s.listener,d!==i&&c.isPropagationStopped())break e;pb(c,s,u),i=d}}}if(R9)throw e=hw,R9=!1,hw=null,e}function O(e,t){var a=t[Mw];a===void 0&&(a=t[Mw]=new Set);var r=e+"__bubble";a.has(r)||(aS(t,e,2,!1),a.add(r))}function RM(e,t,a){var r=0;t&&(r|=4),aS(a,e,r,t)}var rn="_reactListening"+Math.random().toString(36).slice(2);function z2(e){if(!e[rn]){e[rn]=!0,dC.forEach(function(a){a!=="selectionchange"&&(JI.has(a)||RM(a,!1,e),RM(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rn]||(t[rn]=!0,RM("selectionchange",!1,t))}}function aS(e,t,a,r){switch(TC(t)){case 1:var c=yI;break;case 4:c=pI;break;default:c=aL}a=c.bind(null,t,a,e),c=void 0,!sw||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function DM(e,t,a,r,c){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===c||s.nodeType===8&&s.parentNode===c)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===c||d.nodeType===8&&d.parentNode===c))return;l=l.return}for(;s!==null;){if(l=aa(s),l===null)return;if(d=l.tag,d===5||d===6){r=i=l;continue e}s=s.parentNode}}r=r.return}CC(function(){var u=i,y=Yw(a),m=[];e:{var h=eS.get(e);if(h!==void 0){var g=rL,v=e;switch(e){case"keypress":if(xn(a)===0)break e;case"keydown":case"keyup":g=qI;break;case"focusin":v="focus",g=PM;break;case"focusout":v="blur",g=PM;break;case"beforeblur":case"afterblur":g=PM;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ab;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=xI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=FI;break;case KC:case QC:case YC:g=vI;break;case JC:g=HI;break;case"scroll":g=kI;break;case"wheel":g=VI;break;case"copy":case"cut":case"paste":g=wI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rb}var w=(t&4)!==0,q=!w&&e==="scroll",k=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,x;p!==null;){x=p;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,k!==null&&(M=b2(p,k),M!=null&&w.push(P2(p,M,x)))),q)break;p=p.return}0<w.length&&(h=new g(h,v,null,a,y),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&a!==lw&&(v=a.relatedTarget||a.fromElement)&&(aa(v)||v[ct]))break e;if((g||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=a.relatedTarget||a.toElement,g=u,v=v?aa(v):null,v!==null&&(q=pa(v),v!==q||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=ab,M="onMouseLeave",k="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=rb,M="onPointerLeave",k="onPointerEnter",p="pointer"),q=g==null?h:Ca(g),x=v==null?h:Ca(v),h=new w(M,p+"leave",g,a,y),h.target=q,h.relatedTarget=x,M=null,aa(y)===u&&(w=new w(k,p+"enter",v,a,y),w.target=x,w.relatedTarget=q,M=w),q=M,g&&v)t:{for(w=g,k=v,p=0,x=w;x;x=fa(x))p++;for(x=0,M=k;M;M=fa(M))x++;for(;0<p-x;)w=fa(w),p--;for(;0<x-p;)k=fa(k),x--;for(;p--;){if(w===k||k!==null&&w===k.alternate)break t;w=fa(w),k=fa(k)}w=null}else w=null;g!==null&&kb(m,h,g,w,!1),v!==null&&q!==null&&kb(m,q,v,w,!0)}}e:{if(h=u?Ca(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var b=OI;else if(ib(h))if(_C)b=GI;else{b=_I;var C=ZI}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=WI);if(b&&(b=b(e,u))){ZC(m,b,a,y);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&nw(h,"number",h.value)}switch(C=u?Ca(u):window,e){case"focusin":(ib(C)||C.contentEditable==="true")&&(La=C,kw=u,p2=null);break;case"focusout":p2=kw=La=null;break;case"mousedown":mw=!0;break;case"contextmenu":case"mouseup":case"dragend":mw=!1,ub(m,a,y);break;case"selectionchange":if(KI)break;case"keydown":case"keyup":ub(m,a,y)}var S;if(cL)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else wa?UC(e,a)&&(j="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(j="onCompositionStart");j&&(EC&&a.locale!=="ko"&&(wa||j!=="onCompositionStart"?j==="onCompositionEnd"&&wa&&(S=BC()):(gt=y,nL="value"in gt?gt.value:gt.textContent,wa=!0)),C=U9(u,j),0<C.length&&(j=new nb(j,e,null,a,y),m.push({event:j,listeners:C}),S?j.data=S:(S=OC(a),S!==null&&(j.data=S)))),(S=DI?TI(e,a):BI(e,a))&&(u=U9(u,"onBeforeInput"),0<u.length&&(y=new nb("onBeforeInput","beforeinput",null,a,y),m.push({event:y,listeners:u}),y.data=S))}tS(m,t)})}function P2(e,t,a){return{instance:e,listener:t,currentTarget:a}}function U9(e,t){for(var a=t+"Capture",r=[];e!==null;){var c=e,i=c.stateNode;c.tag===5&&i!==null&&(c=i,i=b2(e,a),i!=null&&r.unshift(P2(e,i,c)),i=b2(e,t),i!=null&&r.push(P2(e,i,c))),e=e.return}return r}function fa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kb(e,t,a,r,c){for(var i=t._reactName,l=[];a!==null&&a!==r;){var s=a,d=s.alternate,u=s.stateNode;if(d!==null&&d===r)break;s.tag===5&&u!==null&&(s=u,c?(d=b2(a,i),d!=null&&l.unshift(P2(a,d,s))):c||(d=b2(a,i),d!=null&&l.push(P2(a,d,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var eq=/\r\n?/g,tq=/\u0000|\uFFFD/g;function mb(e){return(typeof e=="string"?e:""+e).replace(eq,`
`).replace(tq,"")}function on(e,t,a){if(t=mb(t),mb(e)!==t&&a)throw Error(L(425))}function O9(){}var xw=null,gw=null;function fw(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vw=typeof setTimeout=="function"?setTimeout:void 0,aq=typeof clearTimeout=="function"?clearTimeout:void 0,xb=typeof Promise=="function"?Promise:void 0,nq=typeof queueMicrotask=="function"?queueMicrotask:typeof xb<"u"?function(e){return xb.resolve(null).then(e).catch(rq)}:vw;function rq(e){setTimeout(function(){throw e})}function TM(e,t){var a=t,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(r===0){e.removeChild(c),j2(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=c}while(a);j2(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gb(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var $a=Math.random().toString(36).slice(2),Qe="__reactFiber$"+$a,F2="__reactProps$"+$a,ct="__reactContainer$"+$a,Mw="__reactEvents$"+$a,oq="__reactListeners$"+$a,cq="__reactHandles$"+$a;function aa(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ct]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=gb(e);e!==null;){if(a=e[Qe])return a;e=gb(e)}return t}e=a,a=e.parentNode}return null}function U2(e){return e=e[Qe]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ca(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function sM(e){return e[F2]||null}var ww=[],Sa=-1;function Pt(e){return{current:e}}function Z(e){0>Sa||(e.current=ww[Sa],ww[Sa]=null,Sa--)}function E(e,t){Sa++,ww[Sa]=e.current,e.current=t}var qt={},pe=Pt(qt),Me=Pt(!1),la=qt;function Ba(e,t){var a=e.type.contextTypes;if(!a)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var c={},i;for(i in a)c[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function we(e){return e=e.childContextTypes,e!=null}function Z9(){Z(Me),Z(pe)}function fb(e,t,a){if(pe.current!==qt)throw Error(L(168));E(pe,t),E(Me,a)}function nS(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var c in r)if(!(c in t))throw Error(L(108,Zj(e)||"Unknown",c));return $({},a,r)}function _9(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,la=pe.current,E(pe,e),E(Me,Me.current),!0}function vb(e,t,a){var r=e.stateNode;if(!r)throw Error(L(169));a?(e=nS(e,t,la),r.__reactInternalMemoizedMergedChildContext=e,Z(Me),Z(pe),E(pe,e)):Z(Me),E(Me,a)}var tt=null,hM=!1,BM=!1;function rS(e){tt===null?tt=[e]:tt.push(e)}function iq(e){hM=!0,rS(e)}function Ft(){if(!BM&&tt!==null){BM=!0;var e=0,t=B;try{var a=tt;for(B=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}tt=null,hM=!1}catch(c){throw tt!==null&&(tt=tt.slice(e+1)),qC(Jw,Ft),c}finally{B=t,BM=!1}}return null}var ja=[],Ia=0,W9=null,G9=0,Fe=[],Ae=0,da=null,at=1,nt="";function Dt(e,t){ja[Ia++]=G9,ja[Ia++]=W9,W9=e,G9=t}function oS(e,t,a){Fe[Ae++]=at,Fe[Ae++]=nt,Fe[Ae++]=da,da=e;var r=at;e=nt;var c=32-Oe(r)-1;r&=~(1<<c),a+=1;var i=32-Oe(t)+c;if(30<i){var l=c-c%5;i=(r&(1<<l)-1).toString(32),r>>=l,c-=l,at=1<<32-Oe(t)+c|a<<c|r,nt=i+e}else at=1<<i|a<<c|r,nt=e}function lL(e){e.return!==null&&(Dt(e,1),oS(e,1,0))}function dL(e){for(;e===W9;)W9=ja[--Ia],ja[Ia]=null,G9=ja[--Ia],ja[Ia]=null;for(;e===da;)da=Fe[--Ae],Fe[Ae]=null,nt=Fe[--Ae],Fe[Ae]=null,at=Fe[--Ae],Fe[Ae]=null}var Ie=null,je=null,_=!1,Ue=null;function cS(e,t){var a=He(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Mb(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,je=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=da!==null?{id:at,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=He(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Ie=e,je=null,!0):!1;default:return!1}}function Lw(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bw(e){if(_){var t=je;if(t){var a=t;if(!Mb(e,t)){if(Lw(e))throw Error(L(418));t=Lt(a.nextSibling);var r=Ie;t&&Mb(e,t)?cS(r,a):(e.flags=e.flags&-4097|2,_=!1,Ie=e)}}else{if(Lw(e))throw Error(L(418));e.flags=e.flags&-4097|2,_=!1,Ie=e}}}function wb(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function cn(e){if(e!==Ie)return!1;if(!_)return wb(e),_=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fw(e.type,e.memoizedProps)),t&&(t=je)){if(Lw(e))throw iS(),Error(L(418));for(;t;)cS(e,t),t=Lt(t.nextSibling)}if(wb(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){je=Lt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ie?Lt(e.stateNode.nextSibling):null;return!0}function iS(){for(var e=je;e;)e=Lt(e.nextSibling)}function Ea(){je=Ie=null,_=!1}function sL(e){Ue===null?Ue=[e]:Ue.push(e)}var lq=dt.ReactCurrentBatchConfig;function n2(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(L(309));var r=a.stateNode}if(!r)throw Error(L(147,e));var c=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=c.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(L(284));if(!a._owner)throw Error(L(290,e))}return e}function ln(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lb(e){var t=e._init;return t(e._payload)}function lS(e){function t(k,p){if(e){var x=k.deletions;x===null?(k.deletions=[p],k.flags|=16):x.push(p)}}function a(k,p){if(!e)return null;for(;p!==null;)t(k,p),p=p.sibling;return null}function r(k,p){for(k=new Map;p!==null;)p.key!==null?k.set(p.key,p):k.set(p.index,p),p=p.sibling;return k}function c(k,p){return k=jt(k,p),k.index=0,k.sibling=null,k}function i(k,p,x){return k.index=x,e?(x=k.alternate,x!==null?(x=x.index,x<p?(k.flags|=2,p):x):(k.flags|=2,p)):(k.flags|=1048576,p)}function l(k){return e&&k.alternate===null&&(k.flags|=2),k}function s(k,p,x,M){return p===null||p.tag!==6?(p=GM(x,k.mode,M),p.return=k,p):(p=c(p,x),p.return=k,p)}function d(k,p,x,M){var b=x.type;return b===Ma?y(k,p,x.props.children,M,x.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pt&&Lb(b)===p.type)?(M=c(p,x.props),M.ref=n2(k,p,x),M.return=k,M):(M=bn(x.type,x.key,x.props,null,k.mode,M),M.ref=n2(k,p,x),M.return=k,M)}function u(k,p,x,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=$M(x,k.mode,M),p.return=k,p):(p=c(p,x.children||[]),p.return=k,p)}function y(k,p,x,M,b){return p===null||p.tag!==7?(p=ca(x,k.mode,M,b),p.return=k,p):(p=c(p,x),p.return=k,p)}function m(k,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=GM(""+p,k.mode,x),p.return=k,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case K2:return x=bn(p.type,p.key,p.props,null,k.mode,x),x.ref=n2(k,null,p),x.return=k,x;case va:return p=$M(p,k.mode,x),p.return=k,p;case pt:var M=p._init;return m(k,M(p._payload),x)}if(i2(p)||Ya(p))return p=ca(p,k.mode,x,null),p.return=k,p;ln(k,p)}return null}function h(k,p,x,M){var b=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:s(k,p,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case K2:return x.key===b?d(k,p,x,M):null;case va:return x.key===b?u(k,p,x,M):null;case pt:return b=x._init,h(k,p,b(x._payload),M)}if(i2(x)||Ya(x))return b!==null?null:y(k,p,x,M,null);ln(k,x)}return null}function g(k,p,x,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return k=k.get(x)||null,s(p,k,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case K2:return k=k.get(M.key===null?x:M.key)||null,d(p,k,M,b);case va:return k=k.get(M.key===null?x:M.key)||null,u(p,k,M,b);case pt:var C=M._init;return g(k,p,x,C(M._payload),b)}if(i2(M)||Ya(M))return k=k.get(x)||null,y(p,k,M,b,null);ln(p,M)}return null}function v(k,p,x,M){for(var b=null,C=null,S=p,j=p=0,D=null;S!==null&&j<x.length;j++){S.index>j?(D=S,S=null):D=S.sibling;var A=h(k,S,x[j],M);if(A===null){S===null&&(S=D);break}e&&S&&A.alternate===null&&t(k,S),p=i(A,p,j),C===null?b=A:C.sibling=A,C=A,S=D}if(j===x.length)return a(k,S),_&&Dt(k,j),b;if(S===null){for(;j<x.length;j++)S=m(k,x[j],M),S!==null&&(p=i(S,p,j),C===null?b=S:C.sibling=S,C=S);return _&&Dt(k,j),b}for(S=r(k,S);j<x.length;j++)D=g(S,k,j,x[j],M),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?j:D.key),p=i(D,p,j),C===null?b=D:C.sibling=D,C=D);return e&&S.forEach(function(oe){return t(k,oe)}),_&&Dt(k,j),b}function w(k,p,x,M){var b=Ya(x);if(typeof b!="function")throw Error(L(150));if(x=b.call(x),x==null)throw Error(L(151));for(var C=b=null,S=p,j=p=0,D=null,A=x.next();S!==null&&!A.done;j++,A=x.next()){S.index>j?(D=S,S=null):D=S.sibling;var oe=h(k,S,A.value,M);if(oe===null){S===null&&(S=D);break}e&&S&&oe.alternate===null&&t(k,S),p=i(oe,p,j),C===null?b=oe:C.sibling=oe,C=oe,S=D}if(A.done)return a(k,S),_&&Dt(k,j),b;if(S===null){for(;!A.done;j++,A=x.next())A=m(k,A.value,M),A!==null&&(p=i(A,p,j),C===null?b=A:C.sibling=A,C=A);return _&&Dt(k,j),b}for(S=r(k,S);!A.done;j++,A=x.next())A=g(S,k,j,A.value,M),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?j:A.key),p=i(A,p,j),C===null?b=A:C.sibling=A,C=A);return e&&S.forEach(function(ee){return t(k,ee)}),_&&Dt(k,j),b}function q(k,p,x,M){if(typeof x=="object"&&x!==null&&x.type===Ma&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case K2:e:{for(var b=x.key,C=p;C!==null;){if(C.key===b){if(b=x.type,b===Ma){if(C.tag===7){a(k,C.sibling),p=c(C,x.props.children),p.return=k,k=p;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pt&&Lb(b)===C.type){a(k,C.sibling),p=c(C,x.props),p.ref=n2(k,C,x),p.return=k,k=p;break e}a(k,C);break}else t(k,C);C=C.sibling}x.type===Ma?(p=ca(x.props.children,k.mode,M,x.key),p.return=k,k=p):(M=bn(x.type,x.key,x.props,null,k.mode,M),M.ref=n2(k,p,x),M.return=k,k=M)}return l(k);case va:e:{for(C=x.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){a(k,p.sibling),p=c(p,x.children||[]),p.return=k,k=p;break e}else{a(k,p);break}else t(k,p);p=p.sibling}p=$M(x,k.mode,M),p.return=k,k=p}return l(k);case pt:return C=x._init,q(k,p,C(x._payload),M)}if(i2(x))return v(k,p,x,M);if(Ya(x))return w(k,p,x,M);ln(k,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(a(k,p.sibling),p=c(p,x),p.return=k,k=p):(a(k,p),p=GM(x,k.mode,M),p.return=k,k=p),l(k)):a(k,p)}return q}var Ua=lS(!0),dS=lS(!1),$9=Pt(null),X9=null,qa=null,hL=null;function uL(){hL=qa=X9=null}function yL(e){var t=$9.current;Z($9),e._currentValue=t}function Cw(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Va(e,t){X9=e,hL=qa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(hL!==e)if(e={context:e,memoizedValue:t,next:null},qa===null){if(X9===null)throw Error(L(308));qa=e,X9.dependencies={lanes:0,firstContext:e}}else qa=qa.next=e;return t}var na=null;function pL(e){na===null?na=[e]:na.push(e)}function sS(e,t,a,r){var c=t.interleaved;return c===null?(a.next=a,pL(t)):(a.next=c.next,c.next=a),t.interleaved=a,it(e,r)}function it(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var kt=!1;function kL(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var c=r.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),r.pending=t,it(e,a)}return c=r.interleaved,c===null?(t.next=t,pL(r)):(t.next=c.next,c.next=t),r.interleaved=t,it(e,a)}function gn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,eL(e,a)}}function bb(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?c=i=l:i=i.next=l,a=a.next}while(a!==null);i===null?c=i=t:i=i.next=t}else c=i=t;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function K9(e,t,a,r){var c=e.updateQueue;kt=!1;var i=c.firstBaseUpdate,l=c.lastBaseUpdate,s=c.shared.pending;if(s!==null){c.shared.pending=null;var d=s,u=d.next;d.next=null,l===null?i=u:l.next=u,l=d;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=u:s.next=u,y.lastBaseUpdate=d))}if(i!==null){var m=c.baseState;l=0,y=u=d=null,s=i;do{var h=s.lane,g=s.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=t,g=a,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(g,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,m,h):v,h==null)break e;m=$({},m,h);break e;case 2:kt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=c.effects,h===null?c.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(u=y=g,d=m):y=y.next=g,l|=h;if(s=s.next,s===null){if(s=c.shared.pending,s===null)break;h=s,s=h.next,h.next=null,c.lastBaseUpdate=h,c.shared.pending=null}}while(!0);if(y===null&&(d=m),c.baseState=d,c.firstBaseUpdate=u,c.lastBaseUpdate=y,t=c.shared.interleaved,t!==null){c=t;do l|=c.lane,c=c.next;while(c!==t)}else i===null&&(c.shared.lanes=0);ha|=l,e.lanes=l,e.memoizedState=m}}function Cb(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],c=r.callback;if(c!==null){if(r.callback=null,r=a,typeof c!="function")throw Error(L(191,c));c.call(r)}}}var O2={},Je=Pt(O2),A2=Pt(O2),H2=Pt(O2);function ra(e){if(e===O2)throw Error(L(174));return e}function mL(e,t){switch(E(H2,t),E(A2,e),E(Je,O2),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ow(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ow(t,e)}Z(Je),E(Je,t)}function Oa(){Z(Je),Z(A2),Z(H2)}function uS(e){ra(H2.current);var t=ra(Je.current),a=ow(t,e.type);t!==a&&(E(A2,e),E(Je,a))}function xL(e){A2.current===e&&(Z(Je),Z(A2))}var W=Pt(0);function Q9(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var EM=[];function gL(){for(var e=0;e<EM.length;e++)EM[e]._workInProgressVersionPrimary=null;EM.length=0}var fn=dt.ReactCurrentDispatcher,UM=dt.ReactCurrentBatchConfig,sa=0,G=null,te=null,ne=null,Y9=!1,k2=!1,N2=0,dq=0;function he(){throw Error(L(321))}function fL(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!_e(e[a],t[a]))return!1;return!0}function vL(e,t,a,r,c,i){if(sa=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fn.current=e===null||e.memoizedState===null?yq:pq,e=a(r,c),k2){i=0;do{if(k2=!1,N2=0,25<=i)throw Error(L(301));i+=1,ne=te=null,t.updateQueue=null,fn.current=kq,e=a(r,c)}while(k2)}if(fn.current=J9,t=te!==null&&te.next!==null,sa=0,ne=te=G=null,Y9=!1,t)throw Error(L(300));return e}function ML(){var e=N2!==0;return N2=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?G.memoizedState=ne=e:ne=ne.next=e,ne}function Re(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ne===null?G.memoizedState:ne.next;if(t!==null)ne=t,te=e;else{if(e===null)throw Error(L(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ne===null?G.memoizedState=ne=e:ne=ne.next=e}return ne}function V2(e,t){return typeof t=="function"?t(e):t}function OM(e){var t=Re(),a=t.queue;if(a===null)throw Error(L(311));a.lastRenderedReducer=e;var r=te,c=r.baseQueue,i=a.pending;if(i!==null){if(c!==null){var l=c.next;c.next=i.next,i.next=l}r.baseQueue=c=i,a.pending=null}if(c!==null){i=c.next,r=r.baseState;var s=l=null,d=null,u=i;do{var y=u.lane;if((sa&y)===y)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:y,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(s=d=m,l=r):d=d.next=m,G.lanes|=y,ha|=y}u=u.next}while(u!==null&&u!==i);d===null?l=r:d.next=s,_e(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,a.lastRenderedState=r}if(e=a.interleaved,e!==null){c=e;do i=c.lane,G.lanes|=i,ha|=i,c=c.next;while(c!==e)}else c===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function ZM(e){var t=Re(),a=t.queue;if(a===null)throw Error(L(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,i=t.memoizedState;if(c!==null){a.pending=null;var l=c=c.next;do i=e(i,l.action),l=l.next;while(l!==c);_e(i,t.memoizedState)||(ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function yS(){}function pS(e,t){var a=G,r=Re(),c=t(),i=!_e(r.memoizedState,c);if(i&&(r.memoizedState=c,ve=!0),r=r.queue,wL(xS.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(a.flags|=2048,R2(9,mS.bind(null,a,r,c,t),void 0,null),re===null)throw Error(L(349));sa&30||kS(a,t,c)}return c}function kS(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function mS(e,t,a,r){t.value=a,t.getSnapshot=r,gS(t)&&fS(e)}function xS(e,t,a){return a(function(){gS(t)&&fS(e)})}function gS(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!_e(e,a)}catch{return!0}}function fS(e){var t=it(e,1);t!==null&&Ze(t,e,1,-1)}function Sb(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:V2,lastRenderedState:e},t.queue=e,e=e.dispatch=uq.bind(null,G,e),[t.memoizedState,e]}function R2(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function vS(){return Re().memoizedState}function vn(e,t,a,r){var c=Ke();G.flags|=e,c.memoizedState=R2(1|t,a,void 0,r===void 0?null:r)}function uM(e,t,a,r){var c=Re();r=r===void 0?null:r;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,r!==null&&fL(r,l.deps)){c.memoizedState=R2(t,a,i,r);return}}G.flags|=e,c.memoizedState=R2(1|t,a,i,r)}function jb(e,t){return vn(8390656,8,e,t)}function wL(e,t){return uM(2048,8,e,t)}function MS(e,t){return uM(4,2,e,t)}function wS(e,t){return uM(4,4,e,t)}function LS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bS(e,t,a){return a=a!=null?a.concat([e]):null,uM(4,4,LS.bind(null,t,e),a)}function LL(){}function CS(e,t){var a=Re();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&fL(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function SS(e,t){var a=Re();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&fL(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function jS(e,t,a){return sa&21?(_e(a,t)||(a=FC(),G.lanes|=a,ha|=a,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=a)}function sq(e,t){var a=B;B=a!==0&&4>a?a:4,e(!0);var r=UM.transition;UM.transition={};try{e(!1),t()}finally{B=a,UM.transition=r}}function IS(){return Re().memoizedState}function hq(e,t,a){var r=St(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},qS(e))zS(t,a);else if(a=sS(e,t,a,r),a!==null){var c=me();Ze(a,e,r,c),PS(a,t,r)}}function uq(e,t,a){var r=St(e),c={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(qS(e))zS(t,c);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,a);if(c.hasEagerState=!0,c.eagerState=s,_e(s,l)){var d=t.interleaved;d===null?(c.next=c,pL(t)):(c.next=d.next,d.next=c),t.interleaved=c;return}}catch{}finally{}a=sS(e,t,c,r),a!==null&&(c=me(),Ze(a,e,r,c),PS(a,t,r))}}function qS(e){var t=e.alternate;return e===G||t!==null&&t===G}function zS(e,t){k2=Y9=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function PS(e,t,a){if(a&4194240){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,eL(e,a)}}var J9={readContext:Ve,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},yq={readContext:Ve,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:jb,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,vn(4194308,4,LS.bind(null,t,e),a)},useLayoutEffect:function(e,t){return vn(4194308,4,e,t)},useInsertionEffect:function(e,t){return vn(4,2,e,t)},useMemo:function(e,t){var a=Ke();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=Ke();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hq.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Sb,useDebugValue:LL,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Sb(!1),t=e[0];return e=sq.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=G,c=Ke();if(_){if(a===void 0)throw Error(L(407));a=a()}else{if(a=t(),re===null)throw Error(L(349));sa&30||kS(r,t,a)}c.memoizedState=a;var i={value:a,getSnapshot:t};return c.queue=i,jb(xS.bind(null,r,i,e),[e]),r.flags|=2048,R2(9,mS.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=Ke(),t=re.identifierPrefix;if(_){var a=nt,r=at;a=(r&~(1<<32-Oe(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=N2++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=dq++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pq={readContext:Ve,useCallback:CS,useContext:Ve,useEffect:wL,useImperativeHandle:bS,useInsertionEffect:MS,useLayoutEffect:wS,useMemo:SS,useReducer:OM,useRef:vS,useState:function(){return OM(V2)},useDebugValue:LL,useDeferredValue:function(e){var t=Re();return jS(t,te.memoizedState,e)},useTransition:function(){var e=OM(V2)[0],t=Re().memoizedState;return[e,t]},useMutableSource:yS,useSyncExternalStore:pS,useId:IS,unstable_isNewReconciler:!1},kq={readContext:Ve,useCallback:CS,useContext:Ve,useEffect:wL,useImperativeHandle:bS,useInsertionEffect:MS,useLayoutEffect:wS,useMemo:SS,useReducer:ZM,useRef:vS,useState:function(){return ZM(V2)},useDebugValue:LL,useDeferredValue:function(e){var t=Re();return te===null?t.memoizedState=e:jS(t,te.memoizedState,e)},useTransition:function(){var e=ZM(V2)[0],t=Re().memoizedState;return[e,t]},useMutableSource:yS,useSyncExternalStore:pS,useId:IS,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function Sw(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:$({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yM={isMounted:function(e){return(e=e._reactInternals)?pa(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=me(),c=St(e),i=rt(r,c);i.payload=t,a!=null&&(i.callback=a),t=bt(e,i,c),t!==null&&(Ze(t,e,c,r),gn(t,e,c))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=me(),c=St(e),i=rt(r,c);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=bt(e,i,c),t!==null&&(Ze(t,e,c,r),gn(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=me(),r=St(e),c=rt(a,r);c.tag=2,t!=null&&(c.callback=t),t=bt(e,c,r),t!==null&&(Ze(t,e,r,a),gn(t,e,r))}};function Ib(e,t,a,r,c,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!q2(a,r)||!q2(c,i):!0}function FS(e,t,a){var r=!1,c=qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(c=we(t)?la:pe.current,r=t.contextTypes,i=(r=r!=null)?Ba(e,c):qt),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yM,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=i),t}function qb(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&yM.enqueueReplaceState(t,t.state,null)}function jw(e,t,a,r){var c=e.stateNode;c.props=a,c.state=e.memoizedState,c.refs={},kL(e);var i=t.contextType;typeof i=="object"&&i!==null?c.context=Ve(i):(i=we(t)?la:pe.current,c.context=Ba(e,i)),c.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Sw(e,t,i,a),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&yM.enqueueReplaceState(c,c.state,null),K9(e,a,c,r),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Za(e,t){try{var a="",r=t;do a+=Oj(r),r=r.return;while(r);var c=a}catch(i){c=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:c,digest:null}}function _M(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function Iw(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var mq=typeof WeakMap=="function"?WeakMap:Map;function AS(e,t,a){a=rt(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){tM||(tM=!0,Dw=r),Iw(e,t)},a}function HS(e,t,a){a=rt(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var c=t.value;a.payload=function(){return r(c)},a.callback=function(){Iw(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){Iw(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),a}function zb(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new mq;var c=new Set;r.set(t,c)}else c=r.get(t),c===void 0&&(c=new Set,r.set(t,c));c.has(a)||(c.add(a),e=zq.bind(null,e,t,a),t.then(e,e))}function Pb(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fb(e,t,a,r,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=rt(-1,1),t.tag=2,bt(a,t,1))),a.lanes|=1),e)}var xq=dt.ReactCurrentOwner,ve=!1;function ke(e,t,a,r){t.child=e===null?dS(t,null,a,r):Ua(t,e.child,a,r)}function Ab(e,t,a,r,c){a=a.render;var i=t.ref;return Va(t,c),r=vL(e,t,a,r,i,c),a=ML(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,lt(e,t,c)):(_&&a&&lL(t),t.flags|=1,ke(e,t,r,c),t.child)}function Hb(e,t,a,r,c){if(e===null){var i=a.type;return typeof i=="function"&&!PL(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,NS(e,t,i,r,c)):(e=bn(a.type,null,r,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&c)){var l=i.memoizedProps;if(a=a.compare,a=a!==null?a:q2,a(l,r)&&e.ref===t.ref)return lt(e,t,c)}return t.flags|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function NS(e,t,a,r,c){if(e!==null){var i=e.memoizedProps;if(q2(i,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=i,(e.lanes&c)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,lt(e,t,c)}return qw(e,t,a,r,c)}function VS(e,t,a){var r=t.pendingProps,c=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},E(Pa,Se),Se|=a;else{if(!(a&1073741824))return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,E(Pa,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,E(Pa,Se),Se|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,E(Pa,Se),Se|=r;return ke(e,t,c,a),t.child}function RS(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function qw(e,t,a,r,c){var i=we(a)?la:pe.current;return i=Ba(t,i),Va(t,c),a=vL(e,t,a,r,i,c),r=ML(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,lt(e,t,c)):(_&&r&&lL(t),t.flags|=1,ke(e,t,a,c),t.child)}function Nb(e,t,a,r,c){if(we(a)){var i=!0;_9(t)}else i=!1;if(Va(t,c),t.stateNode===null)Mn(e,t),FS(t,a,r),jw(t,a,r,c),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var d=l.context,u=a.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=we(a)?la:pe.current,u=Ba(t,u));var y=a.getDerivedStateFromProps,m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||d!==u)&&qb(t,l,r,u),kt=!1;var h=t.memoizedState;l.state=h,K9(t,r,l,c),d=t.memoizedState,s!==r||h!==d||Me.current||kt?(typeof y=="function"&&(Sw(t,a,y,r),d=t.memoizedState),(s=kt||Ib(t,a,s,r,h,d,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,hS(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Be(t.type,s),l.props=u,m=t.pendingProps,h=l.context,d=a.contextType,typeof d=="object"&&d!==null?d=Ve(d):(d=we(a)?la:pe.current,d=Ba(t,d));var g=a.getDerivedStateFromProps;(y=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==d)&&qb(t,l,r,d),kt=!1,h=t.memoizedState,l.state=h,K9(t,r,l,c);var v=t.memoizedState;s!==m||h!==v||Me.current||kt?(typeof g=="function"&&(Sw(t,a,g,r),v=t.memoizedState),(u=kt||Ib(t,a,u,r,h,v,d)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=d,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return zw(e,t,a,r,i,c)}function zw(e,t,a,r,c,i){RS(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return c&&vb(t,a,!1),lt(e,t,i);r=t.stateNode,xq.current=t;var s=l&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,s,i)):ke(e,t,s,i),t.memoizedState=r.state,c&&vb(t,a,!0),t.child}function DS(e){var t=e.stateNode;t.pendingContext?fb(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fb(e,t.context,!1),mL(e,t.containerInfo)}function Vb(e,t,a,r,c){return Ea(),sL(c),t.flags|=256,ke(e,t,a,r),t.child}var Pw={dehydrated:null,treeContext:null,retryLane:0};function Fw(e){return{baseLanes:e,cachePool:null,transitions:null}}function TS(e,t,a){var r=t.pendingProps,c=W.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(c&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),E(W,c&1),e===null)return bw(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=mM(l,r,0,null),e=ca(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fw(a),t.memoizedState=Pw,e):bL(t,l));if(c=e.memoizedState,c!==null&&(s=c.dehydrated,s!==null))return gq(e,t,l,r,s,c,a);if(i){i=r.fallback,l=t.mode,c=e.child,s=c.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==c?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=jt(c,d),r.subtreeFlags=c.subtreeFlags&14680064),s!==null?i=jt(s,i):(i=ca(i,l,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Fw(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~a,t.memoizedState=Pw,r}return i=e.child,e=i.sibling,r=jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function bL(e,t){return t=mM({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dn(e,t,a,r){return r!==null&&sL(r),Ua(t,e.child,null,a),e=bL(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gq(e,t,a,r,c,i,l){if(a)return t.flags&256?(t.flags&=-257,r=_M(Error(L(422))),dn(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,c=t.mode,r=mM({mode:"visible",children:r.children},c,0,null),i=ca(i,c,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ua(t,e.child,null,l),t.child.memoizedState=Fw(l),t.memoizedState=Pw,i);if(!(t.mode&1))return dn(e,t,l,null);if(c.data==="$!"){if(r=c.nextSibling&&c.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(L(419)),r=_M(i,r,void 0),dn(e,t,l,r)}if(s=(l&e.childLanes)!==0,ve||s){if(r=re,r!==null){switch(l&-l){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(r.suspendedLanes|l)?0:c,c!==0&&c!==i.retryLane&&(i.retryLane=c,it(e,c),Ze(r,e,c,-1))}return zL(),r=_M(Error(L(421))),dn(e,t,l,r)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=Pq.bind(null,e),c._reactRetry=t,null):(e=i.treeContext,je=Lt(c.nextSibling),Ie=t,_=!0,Ue=null,e!==null&&(Fe[Ae++]=at,Fe[Ae++]=nt,Fe[Ae++]=da,at=e.id,nt=e.overflow,da=t),t=bL(t,r.children),t.flags|=4096,t)}function Rb(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cw(e.return,t,a)}function WM(e,t,a,r,c){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=c)}function BS(e,t,a){var r=t.pendingProps,c=r.revealOrder,i=r.tail;if(ke(e,t,r.children,a),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rb(e,a,t);else if(e.tag===19)Rb(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(E(W,r),!(t.mode&1))t.memoizedState=null;else switch(c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&Q9(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),WM(t,!1,c,a,i);break;case"backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Q9(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}WM(t,!0,a,null,i);break;case"together":WM(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,!(a&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,a=jt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=jt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function fq(e,t,a){switch(t.tag){case 3:DS(t),Ea();break;case 5:uS(t);break;case 1:we(t.type)&&_9(t);break;case 4:mL(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,c=t.memoizedProps.value;E($9,r._currentValue),r._currentValue=c;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(E(W,W.current&1),t.flags|=128,null):a&t.child.childLanes?TS(e,t,a):(E(W,W.current&1),e=lt(e,t,a),e!==null?e.sibling:null);E(W,W.current&1);break;case 19:if(r=(a&t.childLanes)!==0,e.flags&128){if(r)return BS(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),E(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,VS(e,t,a)}return lt(e,t,a)}var ES,Aw,US,OS;ES=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Aw=function(){};US=function(e,t,a,r){var c=e.memoizedProps;if(c!==r){e=t.stateNode,ra(Je.current);var i=null;switch(a){case"input":c=tw(e,c),r=tw(e,r),i=[];break;case"select":c=$({},c,{value:void 0}),r=$({},r,{value:void 0}),i=[];break;case"textarea":c=rw(e,c),r=rw(e,r),i=[];break;default:typeof c.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=O9)}cw(a,r);var l;a=null;for(u in c)if(!r.hasOwnProperty(u)&&c.hasOwnProperty(u)&&c[u]!=null)if(u==="style"){var s=c[u];for(l in s)s.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(w2.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var d=r[u];if(s=c!=null?c[u]:void 0,r.hasOwnProperty(u)&&d!==s&&(d!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in d)d.hasOwnProperty(l)&&s[l]!==d[l]&&(a||(a={}),a[l]=d[l])}else a||(i||(i=[]),i.push(u,a)),a=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(i=i||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(w2.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&O("scroll",e),i||s===d||(i=[])):(i=i||[]).push(u,d))}a&&(i=i||[]).push("style",a);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};OS=function(e,t,a,r){a!==r&&(t.flags|=4)};function r2(e,t){if(!_)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&14680064,r|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function vq(e,t,a){var r=t.pendingProps;switch(dL(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&Z9(),ue(t),null;case 3:return r=t.stateNode,Oa(),Z(Me),Z(pe),gL(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(Ew(Ue),Ue=null))),Aw(e,t),ue(t),null;case 5:xL(t);var c=ra(H2.current);if(a=t.type,e!==null&&t.stateNode!=null)US(e,t,a,r,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return ue(t),null}if(e=ra(Je.current),cn(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[F2]=i,e=(t.mode&1)!==0,a){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(c=0;c<d2.length;c++)O(d2[c],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":WL(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":$L(r,i),O("invalid",r)}cw(a,i),c=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&on(r.textContent,s,e),c=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&on(r.textContent,s,e),c=["children",""+s]):w2.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&O("scroll",r)}switch(a){case"input":Q2(r),GL(r,i,!0);break;case"textarea":Q2(r),XL(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=O9)}r=c,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xC(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(a,{is:r.is}):(e=l.createElement(a),a==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,a),e[Qe]=t,e[F2]=r,ES(e,t,!1,!1),t.stateNode=e;e:{switch(l=iw(a,r),a){case"dialog":O("cancel",e),O("close",e),c=r;break;case"iframe":case"object":case"embed":O("load",e),c=r;break;case"video":case"audio":for(c=0;c<d2.length;c++)O(d2[c],e);c=r;break;case"source":O("error",e),c=r;break;case"img":case"image":case"link":O("error",e),O("load",e),c=r;break;case"details":O("toggle",e),c=r;break;case"input":WL(e,r),c=tw(e,r),O("invalid",e);break;case"option":c=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},c=$({},r,{value:void 0}),O("invalid",e);break;case"textarea":$L(e,r),c=rw(e,r),O("invalid",e);break;default:c=r}cw(a,c),s=c;for(i in s)if(s.hasOwnProperty(i)){var d=s[i];i==="style"?vC(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&gC(e,d)):i==="children"?typeof d=="string"?(a!=="textarea"||d!=="")&&L2(e,d):typeof d=="number"&&L2(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(w2.hasOwnProperty(i)?d!=null&&i==="onScroll"&&O("scroll",e):d!=null&&$w(e,i,d,l))}switch(a){case"input":Q2(e),GL(e,r,!1);break;case"textarea":Q2(e),XL(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Fa(e,!!r.multiple,i,!1):r.defaultValue!=null&&Fa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=O9)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)OS(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(a=ra(H2.current),ra(Je.current),cn(t)){if(r=t.stateNode,a=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==a)&&(e=Ie,e!==null))switch(e.tag){case 3:on(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&on(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ue(t),null;case 13:if(Z(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_&&je!==null&&t.mode&1&&!(t.flags&128))iS(),Ea(),t.flags|=98560,i=!1;else if(i=cn(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[Qe]=t}else Ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else Ue!==null&&(Ew(Ue),Ue=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?ae===0&&(ae=3):zL())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return Oa(),Aw(e,t),e===null&&z2(t.stateNode.containerInfo),ue(t),null;case 10:return yL(t.type._context),ue(t),null;case 17:return we(t.type)&&Z9(),ue(t),null;case 19:if(Z(W),i=t.memoizedState,i===null)return ue(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)r2(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Q9(e),l!==null){for(t.flags|=128,r2(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return E(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>_a&&(t.flags|=128,r=!0,r2(i,!1),t.lanes=4194304)}else{if(!r)if(e=Q9(l),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),r2(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!_)return ue(t),null}else 2*Y()-i.renderingStartTime>_a&&a!==1073741824&&(t.flags|=128,r=!0,r2(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(a=i.last,a!==null?a.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,a=W.current,E(W,r?a&1|2:a&1),t):(ue(t),null);case 22:case 23:return qL(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Mq(e,t){switch(dL(t),t.tag){case 1:return we(t.type)&&Z9(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oa(),Z(Me),Z(pe),gL(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xL(t),null;case 13:if(Z(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(W),null;case 4:return Oa(),null;case 10:return yL(t.type._context),null;case 22:case 23:return qL(),null;case 24:return null;default:return null}}var sn=!1,ye=!1,wq=typeof WeakSet=="function"?WeakSet:Set,z=null;function za(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){X(e,t,r)}else a.current=null}function Hw(e,t,a){try{a()}catch(r){X(e,t,r)}}var Db=!1;function Lq(e,t){if(xw=B9,e=$C(),iL(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var l=0,s=-1,d=-1,u=0,y=0,m=e,h=null;t:for(;;){for(var g;m!==a||c!==0&&m.nodeType!==3||(s=l+c),m!==i||r!==0&&m.nodeType!==3||(d=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break t;if(h===a&&++u===c&&(s=l),h===i&&++y===r&&(d=l),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}a=s===-1||d===-1?null:{start:s,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(gw={focusedElem:e,selectionRange:a},B9=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,q=v.memoizedState,k=t.stateNode,p=k.getSnapshotBeforeUpdate(t.elementType===t.type?w:Be(t.type,w),q);k.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(M){X(t,t.return,M)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Db,Db=!1,v}function m2(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var c=r=r.next;do{if((c.tag&e)===e){var i=c.destroy;c.destroy=void 0,i!==void 0&&Hw(t,a,i)}c=c.next}while(c!==r)}}function pM(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function Nw(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function ZS(e){var t=e.alternate;t!==null&&(e.alternate=null,ZS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[F2],delete t[Mw],delete t[oq],delete t[cq])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _S(e){return e.tag===5||e.tag===3||e.tag===4}function Tb(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_S(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vw(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=O9));else if(r!==4&&(e=e.child,e!==null))for(Vw(e,t,a),e=e.sibling;e!==null;)Vw(e,t,a),e=e.sibling}function Rw(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rw(e,t,a),e=e.sibling;e!==null;)Rw(e,t,a),e=e.sibling}var ce=null,Ee=!1;function yt(e,t,a){for(a=a.child;a!==null;)WS(e,t,a),a=a.sibling}function WS(e,t,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(cM,a)}catch{}switch(a.tag){case 5:ye||za(a,t);case 6:var r=ce,c=Ee;ce=null,yt(e,t,a),ce=r,Ee=c,ce!==null&&(Ee?(e=ce,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ce.removeChild(a.stateNode));break;case 18:ce!==null&&(Ee?(e=ce,a=a.stateNode,e.nodeType===8?TM(e.parentNode,a):e.nodeType===1&&TM(e,a),j2(e)):TM(ce,a.stateNode));break;case 4:r=ce,c=Ee,ce=a.stateNode.containerInfo,Ee=!0,yt(e,t,a),ce=r,Ee=c;break;case 0:case 11:case 14:case 15:if(!ye&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){c=r=r.next;do{var i=c,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Hw(a,t,l),c=c.next}while(c!==r)}yt(e,t,a);break;case 1:if(!ye&&(za(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){X(a,t,s)}yt(e,t,a);break;case 21:yt(e,t,a);break;case 22:a.mode&1?(ye=(r=ye)||a.memoizedState!==null,yt(e,t,a),ye=r):yt(e,t,a);break;default:yt(e,t,a)}}function Bb(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new wq),t.forEach(function(r){var c=Fq.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}}function Te(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ce=s.stateNode,Ee=!1;break e;case 3:ce=s.stateNode.containerInfo,Ee=!0;break e;case 4:ce=s.stateNode.containerInfo,Ee=!0;break e}s=s.return}if(ce===null)throw Error(L(160));WS(i,l,c),ce=null,Ee=!1;var d=c.alternate;d!==null&&(d.return=null),c.return=null}catch(u){X(c,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)GS(t,e),t=t.sibling}function GS(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Ge(e),r&4){try{m2(3,e,e.return),pM(3,e)}catch(w){X(e,e.return,w)}try{m2(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Te(t,e),Ge(e),r&512&&a!==null&&za(a,a.return);break;case 5:if(Te(t,e),Ge(e),r&512&&a!==null&&za(a,a.return),e.flags&32){var c=e.stateNode;try{L2(c,"")}catch(w){X(e,e.return,w)}}if(r&4&&(c=e.stateNode,c!=null)){var i=e.memoizedProps,l=a!==null?a.memoizedProps:i,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&kC(c,i),iw(s,l);var u=iw(s,i);for(l=0;l<d.length;l+=2){var y=d[l],m=d[l+1];y==="style"?vC(c,m):y==="dangerouslySetInnerHTML"?gC(c,m):y==="children"?L2(c,m):$w(c,y,m,u)}switch(s){case"input":aw(c,i);break;case"textarea":mC(c,i);break;case"select":var h=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Fa(c,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Fa(c,!!i.multiple,i.defaultValue,!0):Fa(c,!!i.multiple,i.multiple?[]:"",!1))}c[F2]=i}catch(w){X(e,e.return,w)}}break;case 6:if(Te(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(L(162));c=e.stateNode,i=e.memoizedProps;try{c.nodeValue=i}catch(w){X(e,e.return,w)}}break;case 3:if(Te(t,e),Ge(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{j2(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Te(t,e),Ge(e);break;case 13:Te(t,e),Ge(e),c=e.child,c.flags&8192&&(i=c.memoizedState!==null,c.stateNode.isHidden=i,!i||c.alternate!==null&&c.alternate.memoizedState!==null||(jL=Y())),r&4&&Bb(e);break;case 22:if(y=a!==null&&a.memoizedState!==null,e.mode&1?(ye=(u=ye)||y,Te(t,e),ye=u):Te(t,e),Ge(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!y&&e.mode&1)for(z=e,y=e.child;y!==null;){for(m=z=y;z!==null;){switch(h=z,g=h.child,h.tag){case 0:case 11:case 14:case 15:m2(4,h,h.return);break;case 1:za(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,a=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){X(r,a,w)}}break;case 5:za(h,h.return);break;case 22:if(h.memoizedState!==null){Ub(m);continue}}g!==null?(g.return=h,z=g):Ub(m)}y=y.sibling}e:for(y=null,m=e;;){if(m.tag===5){if(y===null){y=m;try{c=m.stateNode,u?(i=c.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,d=m.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=fC("display",l))}catch(w){X(e,e.return,w)}}}else if(m.tag===6){if(y===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){X(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;y===m&&(y=null),m=m.return}y===m&&(y=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Te(t,e),Ge(e),r&4&&Bb(e);break;case 21:break;default:Te(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(_S(a)){var r=a;break e}a=a.return}throw Error(L(160))}switch(r.tag){case 5:var c=r.stateNode;r.flags&32&&(L2(c,""),r.flags&=-33);var i=Tb(e);Rw(e,i,c);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Tb(e);Vw(e,s,l);break;default:throw Error(L(161))}}catch(d){X(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bq(e,t,a){z=e,$S(e)}function $S(e,t,a){for(var r=(e.mode&1)!==0;z!==null;){var c=z,i=c.child;if(c.tag===22&&r){var l=c.memoizedState!==null||sn;if(!l){var s=c.alternate,d=s!==null&&s.memoizedState!==null||ye;s=sn;var u=ye;if(sn=l,(ye=d)&&!u)for(z=c;z!==null;)l=z,d=l.child,l.tag===22&&l.memoizedState!==null?Ob(c):d!==null?(d.return=l,z=d):Ob(c);for(;i!==null;)z=i,$S(i),i=i.sibling;z=c,sn=s,ye=u}Eb(e)}else c.subtreeFlags&8772&&i!==null?(i.return=c,z=i):Eb(e)}}function Eb(e){for(;z!==null;){var t=z;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||pM(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(a===null)r.componentDidMount();else{var c=t.elementType===t.type?a.memoizedProps:Be(t.type,a.memoizedProps);r.componentDidUpdate(c,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cb(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}Cb(t,l,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&a.focus();break;case"img":d.src&&(a.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var y=u.memoizedState;if(y!==null){var m=y.dehydrated;m!==null&&j2(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ye||t.flags&512&&Nw(t)}catch(h){X(t,t.return,h)}}if(t===e){z=null;break}if(a=t.sibling,a!==null){a.return=t.return,z=a;break}z=t.return}}function Ub(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}function Ob(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{pM(4,t)}catch(d){X(t,a,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var c=t.return;try{r.componentDidMount()}catch(d){X(t,c,d)}}var i=t.return;try{Nw(t)}catch(d){X(t,i,d)}break;case 5:var l=t.return;try{Nw(t)}catch(d){X(t,l,d)}}}catch(d){X(t,t.return,d)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Cq=Math.ceil,eM=dt.ReactCurrentDispatcher,CL=dt.ReactCurrentOwner,Ne=dt.ReactCurrentBatchConfig,T=0,re=null,J=null,ie=0,Se=0,Pa=Pt(0),ae=0,D2=null,ha=0,kM=0,SL=0,x2=null,fe=null,jL=0,_a=1/0,et=null,tM=!1,Dw=null,Ct=null,hn=!1,ft=null,aM=0,g2=0,Tw=null,wn=-1,Ln=0;function me(){return T&6?Y():wn!==-1?wn:wn=Y()}function St(e){return e.mode&1?T&2&&ie!==0?ie&-ie:lq.transition!==null?(Ln===0&&(Ln=FC()),Ln):(e=B,e!==0||(e=window.event,e=e===void 0?16:TC(e.type)),e):1}function Ze(e,t,a,r){if(50<g2)throw g2=0,Tw=null,Error(L(185));B2(e,a,r),(!(T&2)||e!==re)&&(e===re&&(!(T&2)&&(kM|=a),ae===4&&xt(e,ie)),Le(e,r),a===1&&T===0&&!(t.mode&1)&&(_a=Y()+500,hM&&Ft()))}function Le(e,t){var a=e.callbackNode;lI(e,t);var r=T9(e,e===re?ie:0);if(r===0)a!==null&&YL(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&YL(a),t===1)e.tag===0?iq(Zb.bind(null,e)):rS(Zb.bind(null,e)),nq(function(){!(T&6)&&Ft()}),a=null;else{switch(AC(r)){case 1:a=Jw;break;case 4:a=zC;break;case 16:a=D9;break;case 536870912:a=PC;break;default:a=D9}a=aj(a,XS.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function XS(e,t){if(wn=-1,Ln=0,T&6)throw Error(L(327));var a=e.callbackNode;if(Ra()&&e.callbackNode!==a)return null;var r=T9(e,e===re?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=nM(e,r);else{t=r;var c=T;T|=2;var i=QS();(re!==e||ie!==t)&&(et=null,_a=Y()+500,oa(e,t));do try{Iq();break}catch(s){KS(e,s)}while(!0);uL(),eM.current=i,T=c,J!==null?t=0:(re=null,ie=0,t=ae)}if(t!==0){if(t===2&&(c=uw(e),c!==0&&(r=c,t=Bw(e,c))),t===1)throw a=D2,oa(e,0),xt(e,r),Le(e,Y()),a;if(t===6)xt(e,r);else{if(c=e.current.alternate,!(r&30)&&!Sq(c)&&(t=nM(e,r),t===2&&(i=uw(e),i!==0&&(r=i,t=Bw(e,i))),t===1))throw a=D2,oa(e,0),xt(e,r),Le(e,Y()),a;switch(e.finishedWork=c,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Tt(e,fe,et);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=jL+500-Y(),10<t)){if(T9(e,0)!==0)break;if(c=e.suspendedLanes,(c&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=vw(Tt.bind(null,e,fe,et),t);break}Tt(e,fe,et);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,c=-1;0<r;){var l=31-Oe(r);i=1<<l,l=t[l],l>c&&(c=l),r&=~i}if(r=c,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cq(r/1960))-r,10<r){e.timeoutHandle=vw(Tt.bind(null,e,fe,et),r);break}Tt(e,fe,et);break;case 5:Tt(e,fe,et);break;default:throw Error(L(329))}}}return Le(e,Y()),e.callbackNode===a?XS.bind(null,e):null}function Bw(e,t){var a=x2;return e.current.memoizedState.isDehydrated&&(oa(e,t).flags|=256),e=nM(e,t),e!==2&&(t=fe,fe=a,t!==null&&Ew(t)),e}function Ew(e){fe===null?fe=e:fe.push.apply(fe,e)}function Sq(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var c=a[r],i=c.getSnapshot;c=c.value;try{if(!_e(i(),c))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~SL,t&=~kM,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-Oe(t),r=1<<a;e[a]=-1,t&=~r}}function Zb(e){if(T&6)throw Error(L(327));Ra();var t=T9(e,0);if(!(t&1))return Le(e,Y()),null;var a=nM(e,t);if(e.tag!==0&&a===2){var r=uw(e);r!==0&&(t=r,a=Bw(e,r))}if(a===1)throw a=D2,oa(e,0),xt(e,t),Le(e,Y()),a;if(a===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,fe,et),Le(e,Y()),null}function IL(e,t){var a=T;T|=1;try{return e(t)}finally{T=a,T===0&&(_a=Y()+500,hM&&Ft())}}function ua(e){ft!==null&&ft.tag===0&&!(T&6)&&Ra();var t=T;T|=1;var a=Ne.transition,r=B;try{if(Ne.transition=null,B=1,e)return e()}finally{B=r,Ne.transition=a,T=t,!(T&6)&&Ft()}}function qL(){Se=Pa.current,Z(Pa)}function oa(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,aq(a)),J!==null)for(a=J.return;a!==null;){var r=a;switch(dL(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Z9();break;case 3:Oa(),Z(Me),Z(pe),gL();break;case 5:xL(r);break;case 4:Oa();break;case 13:Z(W);break;case 19:Z(W);break;case 10:yL(r.type._context);break;case 22:case 23:qL()}a=a.return}if(re=e,J=e=jt(e.current,null),ie=Se=t,ae=0,D2=null,SL=kM=ha=0,fe=x2=null,na!==null){for(t=0;t<na.length;t++)if(a=na[t],r=a.interleaved,r!==null){a.interleaved=null;var c=r.next,i=a.pending;if(i!==null){var l=i.next;i.next=c,r.next=l}a.pending=r}na=null}return e}function KS(e,t){do{var a=J;try{if(uL(),fn.current=J9,Y9){for(var r=G.memoizedState;r!==null;){var c=r.queue;c!==null&&(c.pending=null),r=r.next}Y9=!1}if(sa=0,ne=te=G=null,k2=!1,N2=0,CL.current=null,a===null||a.return===null){ae=1,D2=t,J=null;break}e:{var i=e,l=a.return,s=a,d=t;if(t=ie,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,y=s,m=y.tag;if(!(y.mode&1)&&(m===0||m===11||m===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var g=Pb(l);if(g!==null){g.flags&=-257,Fb(g,l,s,i,t),g.mode&1&&zb(i,u,t),t=g,d=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(d),t.updateQueue=w}else v.add(d);break e}else{if(!(t&1)){zb(i,u,t),zL();break e}d=Error(L(426))}}else if(_&&s.mode&1){var q=Pb(l);if(q!==null){!(q.flags&65536)&&(q.flags|=256),Fb(q,l,s,i,t),sL(Za(d,s));break e}}i=d=Za(d,s),ae!==4&&(ae=2),x2===null?x2=[i]:x2.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var k=AS(i,d,t);bb(i,k);break e;case 1:s=d;var p=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ct===null||!Ct.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var M=HS(i,s,t);bb(i,M);break e}}i=i.return}while(i!==null)}JS(a)}catch(b){t=b,J===a&&a!==null&&(J=a=a.return);continue}break}while(!0)}function QS(){var e=eM.current;return eM.current=J9,e===null?J9:e}function zL(){(ae===0||ae===3||ae===2)&&(ae=4),re===null||!(ha&268435455)&&!(kM&268435455)||xt(re,ie)}function nM(e,t){var a=T;T|=2;var r=QS();(re!==e||ie!==t)&&(et=null,oa(e,t));do try{jq();break}catch(c){KS(e,c)}while(!0);if(uL(),T=a,eM.current=r,J!==null)throw Error(L(261));return re=null,ie=0,ae}function jq(){for(;J!==null;)YS(J)}function Iq(){for(;J!==null&&!Jj();)YS(J)}function YS(e){var t=tj(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?JS(e):J=t,CL.current=null}function JS(e){var t=e;do{var a=t.alternate;if(e=t.return,t.flags&32768){if(a=Mq(a,t),a!==null){a.flags&=32767,J=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,J=null;return}}else if(a=vq(a,t,Se),a!==null){J=a;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ae===0&&(ae=5)}function Tt(e,t,a){var r=B,c=Ne.transition;try{Ne.transition=null,B=1,qq(e,t,a,r)}finally{Ne.transition=c,B=r}return null}function qq(e,t,a,r){do Ra();while(ft!==null);if(T&6)throw Error(L(327));a=e.finishedWork;var c=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(dI(e,i),e===re&&(J=re=null,ie=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||hn||(hn=!0,aj(D9,function(){return Ra(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var l=B;B=1;var s=T;T|=4,CL.current=null,Lq(e,a),GS(a,e),XI(gw),B9=!!xw,gw=xw=null,e.current=a,bq(a),eI(),T=s,B=l,Ne.transition=i}else e.current=a;if(hn&&(hn=!1,ft=e,aM=c),i=e.pendingLanes,i===0&&(Ct=null),nI(a.stateNode),Le(e,Y()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)c=t[a],r(c.value,{componentStack:c.stack,digest:c.digest});if(tM)throw tM=!1,e=Dw,Dw=null,e;return aM&1&&e.tag!==0&&Ra(),i=e.pendingLanes,i&1?e===Tw?g2++:(g2=0,Tw=e):g2=0,Ft(),null}function Ra(){if(ft!==null){var e=AC(aM),t=Ne.transition,a=B;try{if(Ne.transition=null,B=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,aM=0,T&6)throw Error(L(331));var c=T;for(T|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var d=0;d<s.length;d++){var u=s[d];for(z=u;z!==null;){var y=z;switch(y.tag){case 0:case 11:case 15:m2(8,y,i)}var m=y.child;if(m!==null)m.return=y,z=m;else for(;z!==null;){y=z;var h=y.sibling,g=y.return;if(ZS(y),y===u){z=null;break}if(h!==null){h.return=g,z=h;break}z=g}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var q=w.sibling;w.sibling=null,w=q}while(w!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:m2(9,i,i.return)}var k=i.sibling;if(k!==null){k.return=i.return,z=k;break e}z=i.return}}var p=e.current;for(z=p;z!==null;){l=z;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,z=x;else e:for(l=p;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pM(9,s)}}catch(b){X(s,s.return,b)}if(s===l){z=null;break e}var M=s.sibling;if(M!==null){M.return=s.return,z=M;break e}z=s.return}}if(T=c,Ft(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(cM,e)}catch{}r=!0}return r}finally{B=a,Ne.transition=t}}return!1}function _b(e,t,a){t=Za(a,t),t=AS(e,t,1),e=bt(e,t,1),t=me(),e!==null&&(B2(e,1,t),Le(e,t))}function X(e,t,a){if(e.tag===3)_b(e,e,a);else for(;t!==null;){if(t.tag===3){_b(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=Za(a,e),e=HS(t,e,1),t=bt(t,e,1),e=me(),t!==null&&(B2(t,1,e),Le(t,e));break}}t=t.return}}function zq(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&a,re===e&&(ie&a)===a&&(ae===4||ae===3&&(ie&130023424)===ie&&500>Y()-jL?oa(e,0):SL|=a),Le(e,t)}function ej(e,t){t===0&&(e.mode&1?(t=en,en<<=1,!(en&130023424)&&(en=4194304)):t=1);var a=me();e=it(e,t),e!==null&&(B2(e,t,a),Le(e,a))}function Pq(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ej(e,a)}function Fq(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),ej(e,a)}var tj;tj=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)ve=!0;else{if(!(e.lanes&a)&&!(t.flags&128))return ve=!1,fq(e,t,a);ve=!!(e.flags&131072)}else ve=!1,_&&t.flags&1048576&&oS(t,G9,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mn(e,t),e=t.pendingProps;var c=Ba(t,pe.current);Va(t,a),c=vL(null,t,r,e,c,a);var i=ML();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(i=!0,_9(t)):i=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,kL(t),c.updater=yM,t.stateNode=c,c._reactInternals=t,jw(t,r,e,a),t=zw(null,t,r,!0,i,a)):(t.tag=0,_&&i&&lL(t),ke(null,t,c,a),t=t.child),t;case 16:r=t.elementType;e:{switch(Mn(e,t),e=t.pendingProps,c=r._init,r=c(r._payload),t.type=r,c=t.tag=Hq(r),e=Be(r,e),c){case 0:t=qw(null,t,r,e,a);break e;case 1:t=Nb(null,t,r,e,a);break e;case 11:t=Ab(null,t,r,e,a);break e;case 14:t=Hb(null,t,r,Be(r.type,e),a);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,c=t.pendingProps,c=t.elementType===r?c:Be(r,c),qw(e,t,r,c,a);case 1:return r=t.type,c=t.pendingProps,c=t.elementType===r?c:Be(r,c),Nb(e,t,r,c,a);case 3:e:{if(DS(t),e===null)throw Error(L(387));r=t.pendingProps,i=t.memoizedState,c=i.element,hS(e,t),K9(t,r,null,a);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){c=Za(Error(L(423)),t),t=Vb(e,t,r,a,c);break e}else if(r!==c){c=Za(Error(L(424)),t),t=Vb(e,t,r,a,c);break e}else for(je=Lt(t.stateNode.containerInfo.firstChild),Ie=t,_=!0,Ue=null,a=dS(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ea(),r===c){t=lt(e,t,a);break e}ke(e,t,r,a)}t=t.child}return t;case 5:return uS(t),e===null&&bw(t),r=t.type,c=t.pendingProps,i=e!==null?e.memoizedProps:null,l=c.children,fw(r,c)?l=null:i!==null&&fw(r,i)&&(t.flags|=32),RS(e,t),ke(e,t,l,a),t.child;case 6:return e===null&&bw(t),null;case 13:return TS(e,t,a);case 4:return mL(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,a):ke(e,t,r,a),t.child;case 11:return r=t.type,c=t.pendingProps,c=t.elementType===r?c:Be(r,c),Ab(e,t,r,c,a);case 7:return ke(e,t,t.pendingProps,a),t.child;case 8:return ke(e,t,t.pendingProps.children,a),t.child;case 12:return ke(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,c=t.pendingProps,i=t.memoizedProps,l=c.value,E($9,r._currentValue),r._currentValue=l,i!==null)if(_e(i.value,l)){if(i.children===c.children&&!Me.current){t=lt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var d=s.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=rt(-1,a&-a),d.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var y=u.pending;y===null?d.next=d:(d.next=y.next,y.next=d),u.pending=d}}i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),Cw(i.return,a,t),s.lanes|=a;break}d=d.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(L(341));l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),Cw(l,a,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,t,c.children,a),t=t.child}return t;case 9:return c=t.type,r=t.pendingProps.children,Va(t,a),c=Ve(c),r=r(c),t.flags|=1,ke(e,t,r,a),t.child;case 14:return r=t.type,c=Be(r,t.pendingProps),c=Be(r.type,c),Hb(e,t,r,c,a);case 15:return NS(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,c=t.pendingProps,c=t.elementType===r?c:Be(r,c),Mn(e,t),t.tag=1,we(r)?(e=!0,_9(t)):e=!1,Va(t,a),FS(t,r,c),jw(t,r,c,a),zw(null,t,r,!0,e,a);case 19:return BS(e,t,a);case 22:return VS(e,t,a)}throw Error(L(156,t.tag))};function aj(e,t){return qC(e,t)}function Aq(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,a,r){return new Aq(e,t,a,r)}function PL(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hq(e){if(typeof e=="function")return PL(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kw)return 11;if(e===Qw)return 14}return 2}function jt(e,t){var a=e.alternate;return a===null?(a=He(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function bn(e,t,a,r,c,i){var l=2;if(r=e,typeof e=="function")PL(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ma:return ca(a.children,c,i,t);case Xw:l=8,c|=8;break;case QM:return e=He(12,a,t,c|2),e.elementType=QM,e.lanes=i,e;case YM:return e=He(13,a,t,c),e.elementType=YM,e.lanes=i,e;case JM:return e=He(19,a,t,c),e.elementType=JM,e.lanes=i,e;case uC:return mM(a,c,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sC:l=10;break e;case hC:l=9;break e;case Kw:l=11;break e;case Qw:l=14;break e;case pt:l=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=He(l,a,t,c),t.elementType=e,t.type=r,t.lanes=i,t}function ca(e,t,a,r){return e=He(7,e,r,t),e.lanes=a,e}function mM(e,t,a,r){return e=He(22,e,r,t),e.elementType=uC,e.lanes=a,e.stateNode={isHidden:!1},e}function GM(e,t,a){return e=He(6,e,null,t),e.lanes=a,e}function $M(e,t,a){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nq(e,t,a,r,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=IM(0),this.expirationTimes=IM(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=IM(0),this.identifierPrefix=r,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function FL(e,t,a,r,c,i,l,s,d){return e=new Nq(e,t,a,s,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=He(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kL(i),e}function Vq(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:va,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function nj(e){if(!e)return qt;e=e._reactInternals;e:{if(pa(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var a=e.type;if(we(a))return nS(e,a,t)}return t}function rj(e,t,a,r,c,i,l,s,d){return e=FL(a,r,!0,e,c,i,l,s,d),e.context=nj(null),a=e.current,r=me(),c=St(a),i=rt(r,c),i.callback=t??null,bt(a,i,c),e.current.lanes=c,B2(e,c,r),Le(e,r),e}function xM(e,t,a,r){var c=t.current,i=me(),l=St(c);return a=nj(a),t.context===null?t.context=a:t.pendingContext=a,t=rt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(c,t,l),e!==null&&(Ze(e,c,l,i),gn(e,c,l)),l}function rM(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wb(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function AL(e,t){Wb(e,t),(e=e.alternate)&&Wb(e,t)}function Rq(){return null}var oj=typeof reportError=="function"?reportError:function(e){console.error(e)};function HL(e){this._internalRoot=e}gM.prototype.render=HL.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));xM(e,t,null,null)};gM.prototype.unmount=HL.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ua(function(){xM(null,e,null,null)}),t[ct]=null}};function gM(e){this._internalRoot=e}gM.prototype.unstable_scheduleHydration=function(e){if(e){var t=VC();e={blockedOn:null,target:e,priority:t};for(var a=0;a<mt.length&&t!==0&&t<mt[a].priority;a++);mt.splice(a,0,e),a===0&&DC(e)}};function NL(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fM(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gb(){}function Dq(e,t,a,r,c){if(c){if(typeof r=="function"){var i=r;r=function(){var u=rM(l);i.call(u)}}var l=rj(t,r,e,0,null,!1,!1,"",Gb);return e._reactRootContainer=l,e[ct]=l.current,z2(e.nodeType===8?e.parentNode:e),ua(),l}for(;c=e.lastChild;)e.removeChild(c);if(typeof r=="function"){var s=r;r=function(){var u=rM(d);s.call(u)}}var d=FL(e,0,!1,null,null,!1,!1,"",Gb);return e._reactRootContainer=d,e[ct]=d.current,z2(e.nodeType===8?e.parentNode:e),ua(function(){xM(t,d,a,r)}),d}function vM(e,t,a,r,c){var i=a._reactRootContainer;if(i){var l=i;if(typeof c=="function"){var s=c;c=function(){var d=rM(l);s.call(d)}}xM(t,l,e,c)}else l=Dq(a,t,e,c,r);return rM(l)}HC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=l2(t.pendingLanes);a!==0&&(eL(t,a|1),Le(t,Y()),!(T&6)&&(_a=Y()+500,Ft()))}break;case 13:ua(function(){var r=it(e,1);if(r!==null){var c=me();Ze(r,e,1,c)}}),AL(e,1)}};tL=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var a=me();Ze(t,e,134217728,a)}AL(e,134217728)}};NC=function(e){if(e.tag===13){var t=St(e),a=it(e,t);if(a!==null){var r=me();Ze(a,e,t,r)}AL(e,t)}};VC=function(){return B};RC=function(e,t){var a=B;try{return B=e,t()}finally{B=a}};dw=function(e,t,a){switch(t){case"input":if(aw(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var c=sM(r);if(!c)throw Error(L(90));pC(r),aw(r,c)}}}break;case"textarea":mC(e,a);break;case"select":t=a.value,t!=null&&Fa(e,!!a.multiple,t,!1)}};LC=IL;bC=ua;var Tq={usingClientEntryPoint:!1,Events:[U2,Ca,sM,MC,wC,IL]},o2={findFiberByHostInstance:aa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bq={bundleType:o2.bundleType,version:o2.version,rendererPackageName:o2.rendererPackageName,rendererConfig:o2.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jC(e),e===null?null:e.stateNode},findFiberByHostInstance:o2.findFiberByHostInstance||Rq,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var un=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!un.isDisabled&&un.supportsFiber)try{cM=un.inject(Bq),Ye=un}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tq;ze.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!NL(t))throw Error(L(200));return Vq(e,t,null,a)};ze.createRoot=function(e,t){if(!NL(e))throw Error(L(299));var a=!1,r="",c=oj;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=FL(e,1,!1,null,null,a,!1,r,c),e[ct]=t.current,z2(e.nodeType===8?e.parentNode:e),new HL(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=jC(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return ua(e)};ze.hydrate=function(e,t,a){if(!fM(t))throw Error(L(200));return vM(null,e,t,!0,a)};ze.hydrateRoot=function(e,t,a){if(!NL(e))throw Error(L(405));var r=a!=null&&a.hydratedSources||null,c=!1,i="",l=oj;if(a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),t=rj(t,null,e,1,a??null,c,!1,i,l),e[ct]=t.current,z2(e),r)for(e=0;e<r.length;e++)a=r[e],c=a._getVersion,c=c(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,c]:t.mutableSourceEagerHydrationData.push(a,c);return new gM(t)};ze.render=function(e,t,a){if(!fM(t))throw Error(L(200));return vM(null,e,t,!1,a)};ze.unmountComponentAtNode=function(e){if(!fM(e))throw Error(L(40));return e._reactRootContainer?(ua(function(){vM(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};ze.unstable_batchedUpdates=IL;ze.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!fM(a))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return vM(e,t,a,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function cj(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cj)}catch(e){console.error(e)}}cj(),cC.exports=ze;var Eq=cC.exports,ij,$b=Eq;ij=$b.createRoot,$b.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uq={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oq=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),n=(e,t)=>{const a=f.forwardRef(({color:r="currentColor",size:c=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:s="",children:d,...u},y)=>f.createElement("svg",{ref:y,...Uq,width:c,height:c,stroke:r,strokeWidth:l?Number(i)*24/Number(c):i,className:["lucide",`lucide-${Oq(e)}`,s].join(" "),...u},[...t.map(([m,h])=>f.createElement(m,h)),...Array.isArray(d)?d:[d]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=n("AArrowDown",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=n("AArrowUp",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=n("ALargeSmall",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=n("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=n("ActivitySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=n("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=n("AirVent",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=n("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["polygon",{points:"12 15 17 21 7 21 12 15",key:"1sy95i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=n("AlarmClockCheck",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=n("AlarmClockMinus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=n("AlarmClockOff",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=n("AlarmClockPlus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=n("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=n("AlarmSmoke",[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z",key:"2c4fvq"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8",key:"1vrndv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=n("Album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=n("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=n("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=n("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=n("AlignCenterHorizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=n("AlignCenterVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=n("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=n("AlignEndHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=n("AlignEndVertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=n("AlignHorizontalDistributeCenter",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=n("AlignHorizontalDistributeEnd",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=n("AlignHorizontalDistributeStart",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=n("AlignHorizontalJustifyCenter",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=n("AlignHorizontalJustifyEnd",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=n("AlignHorizontalJustifyStart",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=n("AlignHorizontalSpaceAround",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=n("AlignHorizontalSpaceBetween",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=n("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=n("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=n("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=n("AlignStartHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=n("AlignStartVertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=n("AlignVerticalDistributeCenter",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M7 7H1",key:"105l6j"}],["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M5 17H2",key:"1gx9xc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=n("AlignVerticalDistributeEnd",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=n("AlignVerticalDistributeStart",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=n("AlignVerticalJustifyCenter",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=n("AlignVerticalJustifyEnd",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=n("AlignVerticalJustifyStart",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=n("AlignVerticalSpaceAround",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=n("AlignVerticalSpaceBetween",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=n("Ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=n("Ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=n("Ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=n("Anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=n("Angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=n("Annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=n("Antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=n("Anvil",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=n("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=n("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=n("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=n("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=n("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=n("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=n("AreaChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=n("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=n("ArrowBigDownDash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=n("ArrowBigDown",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=n("ArrowBigLeftDash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=n("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=n("ArrowBigRightDash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=n("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=n("ArrowBigUpDash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=n("ArrowBigUp",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=n("ArrowDown01",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=n("ArrowDown10",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=n("ArrowDownAZ",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=n("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=n("ArrowDownFromLine",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=n("ArrowDownLeftFromCircle",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=n("ArrowDownLeftFromSquare",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=n("ArrowDownLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=n("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=n("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=n("ArrowDownRightFromCircle",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=n("ArrowDownRightFromSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=n("ArrowDownRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=n("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=n("ArrowDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=n("ArrowDownToDot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=n("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=n("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=n("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=n("ArrowDownZA",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=n("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=n("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=n("ArrowLeftFromLine",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=n("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=n("ArrowLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=n("ArrowLeftToLine",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=n("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=n("ArrowRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=n("ArrowRightFromLine",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=n("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=n("ArrowRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=n("ArrowRightToLine",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=n("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=n("ArrowUp01",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=n("ArrowUp10",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=n("ArrowUpAZ",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=n("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=n("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=n("ArrowUpFromDot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=n("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=n("ArrowUpLeftFromCircle",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=n("ArrowUpLeftFromSquare",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=n("ArrowUpLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=n("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=n("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=n("ArrowUpRightFromCircle",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=n("ArrowUpRightFromSquare",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=n("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=n("ArrowUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=n("ArrowUpToLine",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=n("ArrowUpWideNarrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=n("ArrowUpZA",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=n("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=n("ArrowsUpFromLine",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=n("AsteriskSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=n("Asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=n("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=n("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=n("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=n("AudioWaveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=n("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=n("Axe",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=n("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=n("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=n("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=n("BadgeAlert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=n("BadgeCent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=n("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=n("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=n("BadgeEuro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=n("BadgeHelp",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=n("BadgeIndianRupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=n("BadgeInfo",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=n("BadgeJapaneseYen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=n("BadgeMinus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=n("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=n("BadgePlus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=n("BadgePoundSterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=n("BadgeRussianRuble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=n("BadgeSwissFranc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=n("BadgeX",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=n("Badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=n("BaggageClaim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=n("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=n("Banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=n("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=n("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=n("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=n("BarChart4",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=n("BarChartBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=n("BarChartHorizontalBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=n("BarChartHorizontal",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=n("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=n("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=n("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=n("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=n("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=n("BatteryFull",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=n("BatteryLow",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=n("BatteryMedium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=n("BatteryWarning",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=n("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=n("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=n("BeanOff",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=n("Bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=n("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=n("BedSingle",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=n("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=n("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=n("Beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=n("BellDot",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=n("BellElectric",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=n("BellMinus",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=n("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=n("BellPlus",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=n("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=n("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=n("BetweenHorizontalEnd",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=n("BetweenHorizontalStart",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=n("BetweenVerticalEnd",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=n("BetweenVerticalStart",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=n("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=n("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=n("Biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=n("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=n("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=n("Blend",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=n("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=n("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=n("BluetoothConnected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=n("BluetoothOff",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=n("BluetoothSearching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=n("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=n("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=n("Bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=n("Bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=n("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=n("BookA",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=n("BookAudio",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=n("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=n("BookCopy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=n("BookDashed",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=n("BookDown",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=n("BookHeadphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=n("BookHeart",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=n("BookImage",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=n("BookKey",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=n("BookLock",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=n("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=n("BookMinus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=n("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=n("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=n("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=n("BookPlus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=n("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=n("BookType",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=n("BookUp2",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=n("BookUp",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=n("BookUser",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=n("BookX",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=n("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=n("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=n("BookmarkMinus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=n("BookmarkPlus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=n("BookmarkX",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=n("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=n("BoomBox",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=n("BotMessageSquare",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=n("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=n("BoxSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=n("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=n("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=n("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=n("Brackets",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=n("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=n("BrainCog",[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=n("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=n("BrickWall",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=n("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=n("BringToFront",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=n("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=n("BugOff",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=n("BugPlay",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m12 12 8 5-8 5Z",key:"1ydf81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=n("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=n("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=n("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=n("BusFront",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=n("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=n("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=n("Cable",[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z",key:"1s6oa5"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M7 5V3",key:"1t1388"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9",key:"1ytv72"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z",key:"sdz6o8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=n("CakeSlice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=n("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=n("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=n("CalendarCheck2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=n("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=n("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=n("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=n("CalendarFold",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=n("CalendarHeart",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=n("CalendarMinus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=n("CalendarMinus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=n("CalendarOff",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=n("CalendarPlus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=n("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=n("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=n("CalendarSearch",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5",key:"1e09qw"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=n("CalendarX2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=n("CalendarX",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=n("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=n("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=n("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=n("CandlestickChart",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=n("CandyCane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=n("CandyOff",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=n("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=n("CaptionsOff",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=n("Captions",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=n("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=n("CarTaxiFront",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=n("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=n("Caravan",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=n("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=n("CaseLower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=n("CaseSensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=n("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=n("CassetteTape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=n("Cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=n("Castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=n("Cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=n("Cctv",[["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32",key:"1h9vqe"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",key:"q5d122"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=n("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=n("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=n("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=n("CheckSquare2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=n("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=n("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=n("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=n("Cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=n("ChevronDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=n("ChevronDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=n("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=n("ChevronFirst",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=n("ChevronLast",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=n("ChevronLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=n("ChevronLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=n("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=n("ChevronRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=n("ChevronRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=n("ChevronUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=n("ChevronUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=n("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=n("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=n("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=n("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=n("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=n("ChevronsRightLeft",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=n("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=n("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=n("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=n("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=n("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=n("CigaretteOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=n("Cigarette",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=n("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=n("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=n("CircleDotDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=n("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=n("CircleEllipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=n("CircleEqual",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=n("CircleFadingPlus",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=n("CircleOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=n("CircleSlash2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=n("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=n("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=n("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=n("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=n("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=n("Citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=n("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=n("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=n("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=n("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=n("ClipboardMinus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=n("ClipboardPaste",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=n("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z",key:"yg2pdb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=n("ClipboardPen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z",key:"hnx206"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=n("ClipboardPlus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=n("ClipboardType",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=n("ClipboardX",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=n("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=n("Clock1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=n("Clock10",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=n("Clock11",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=n("Clock12",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=n("Clock2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=n("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=n("Clock4",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=n("Clock5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=n("Clock6",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=n("Clock7",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=n("Clock8",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=n("Clock9",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=n("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=n("CloudCog",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=n("CloudDrizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=n("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=n("CloudHail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=n("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=n("CloudMoonRain",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=n("CloudMoon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=n("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=n("CloudRainWind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=n("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=n("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=n("CloudSunRain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=n("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=n("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=n("Cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=n("Clover",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=n("Club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=n("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=n("CodeSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=n("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=n("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=n("Codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=n("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=n("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=n("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=n("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=n("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=n("Columns4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=n("Combine",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=n("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=n("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=n("Component",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=n("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=n("ConciergeBell",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=n("Cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=n("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=n("Contact2",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=n("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=n("Container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=n("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=n("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=n("CookingPot",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=n("CopyCheck",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=n("CopyMinus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=n("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=n("CopySlash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=n("CopyX",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=n("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=n("Copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=n("Copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=n("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=n("CornerDownRight",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=n("CornerLeftDown",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=n("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=n("CornerRightDown",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=n("CornerRightUp",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=n("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=n("CornerUpRight",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=n("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=n("CreativeCommons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=n("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=n("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=n("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=n("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=n("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=n("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=n("Cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=n("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=n("Currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=n("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=n("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=n("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=n("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=n("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=n("Dessert",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=n("Diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=n("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=n("Dice1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=n("Dice2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=n("Dice3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=n("Dice4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=n("Dice5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=n("Dice6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=n("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=n("Diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=n("Disc2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=n("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=n("DiscAlbum",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=n("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=n("DivideCircle",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=n("DivideSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=n("Divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=n("DnaOff",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=n("Dna",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=n("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=n("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=n("Donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=n("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=n("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=n("DotSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=n("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=n("DownloadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=n("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=n("DraftingCompass",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=n("Drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=n("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=n("Drill",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=n("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=n("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=n("Drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=n("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=n("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=n("EarOff",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=n("Ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=n("EarthLock",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=n("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=n("Eclipse",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=n("EggFried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=n("EggOff",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=n("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=n("EqualNot",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=n("EqualSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=n("Equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=n("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=n("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=n("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=n("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=n("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=n("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=n("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=n("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=n("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=n("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=n("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=n("Fence",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=n("FerrisWheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=n("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=n("FileArchive",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18",key:"1oywqq"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=n("FileAudio2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=n("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=n("FileAxis3d",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=n("FileBadge2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=n("FileBadge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=n("FileBarChart2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=n("FileBarChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=n("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=n("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=n("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=n("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=n("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=n("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=n("FileCog",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=n("FileDiff",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=n("FileDigit",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=n("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=n("FileHeart",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=n("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=n("FileInput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=n("FileJson2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=n("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=n("FileKey2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=n("FileKey",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=n("FileLineChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=n("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=n("FileLock",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=n("FileMinus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=n("FileMinus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=n("FileMusic",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=n("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=n("FilePenLine",[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"h0fsxq"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z",key:"dyo8mm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=n("FilePen",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10",key:"x7tsz2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z",key:"o3xyfb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=n("FilePieChart",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11.5a6.02 6.02 0 1 0 8.5 8.5",key:"unkkko"}],["path",{d:"M14 16c0-3.3-2.7-6-6-6v6Z",key:"bym002"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=n("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=n("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=n("FileQuestion",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"1umxtm"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=n("FileScan",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=n("FileSearch2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=n("FileSearch",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=n("FileSliders",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=n("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=n("FileStack",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=n("FileSymlink",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=n("FileTerminal",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=n("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=n("FileType2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=n("FileType",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=n("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=n("FileVideo2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=n("FileVideo",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=n("FileVolume2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=n("FileVolume",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m7 10-3 2H2v4h2l3 2Z",key:"fiq8l4"}],["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=n("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=n("FileX2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=n("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=n("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=n("Files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=n("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=n("FilterX",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=n("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=n("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=n("FireExtinguisher",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=n("FishOff",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=n("FishSymbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=n("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=n("FlagOff",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=n("FlagTriangleLeft",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=n("FlagTriangleRight",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=n("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=n("FlameKindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=n("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=n("FlashlightOff",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=n("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=n("FlaskConicalOff",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=n("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=n("FlaskRound",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=n("FlipHorizontal2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=n("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=n("FlipVertical2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=n("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=n("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=n("Flower",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=n("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=n("FoldHorizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=n("FoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=n("FolderArchive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=n("FolderCheck",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=n("FolderClock",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=n("FolderClosed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=n("FolderCog",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=n("FolderDot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=n("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=n("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=n("FolderGit",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=n("FolderHeart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=n("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=n("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=n("FolderKey",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=n("FolderLock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=n("FolderMinus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=n("FolderOpenDot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=n("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=n("FolderOutput",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=n("FolderPen",[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z",key:"dakro8"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=n("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=n("FolderRoot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=n("FolderSearch2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=n("FolderSearch",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=n("FolderSymlink",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=n("FolderSync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=n("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=n("FolderUp",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=n("FolderX",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=n("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=n("Folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=n("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=n("Forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=n("FormInput",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=n("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=n("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=n("Framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=n("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=n("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=n("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=n("FunctionSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=n("GalleryHorizontalEnd",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=n("GalleryHorizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=n("GalleryThumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=n("GalleryVerticalEnd",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=n("GalleryVertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=n("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=n("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=n("GanttChartSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=n("GanttChart",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=n("GaugeCircle",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=n("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=n("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=n("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=n("Ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=n("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=n("GitBranchPlus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=n("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=n("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=n("GitCommitVertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=n("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=n("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=n("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=n("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=n("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=n("GitPullRequestArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=n("GitPullRequestClosed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=n("GitPullRequestCreateArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=n("GitPullRequestCreate",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=n("GitPullRequestDraft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=n("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=n("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=n("Gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=n("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=n("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=n("GlobeLock",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=n("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=n("Goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=n("Grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=n("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=n("Grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=n("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=n("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=n("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=n("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=n("Grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=n("Group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=n("Guitar",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=n("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=n("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=n("HandHeart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=n("HandHelping",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=n("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=n("HandPlatter",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0",key:"1t9y3n"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2",key:"loyjft"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",key:"1rixiy"}],["path",{d:"M5 14v7H2",key:"3mujks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=n("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=n("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=n("HardDriveDownload",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=n("HardDriveUpload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=n("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=n("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=n("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=n("Haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=n("HdmiPort",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=n("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=n("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=n("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=n("Heading4",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=n("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=n("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=n("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=n("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=n("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=n("HeartCrack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=n("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=n("HeartOff",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=n("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=n("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=n("Heater",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=n("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=n("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=n("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=n("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=n("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=n("HopOff",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=n("Hop",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=n("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=n("Hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=n("IceCream2",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"g86ewz"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=n("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=n("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=n("ImageMinus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=n("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=n("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=n("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=n("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=n("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=n("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=n("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=n("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=n("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=n("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=n("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=n("InspectionPanel",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=n("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=n("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=n("IterationCcw",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=n("IterationCw",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=n("JapaneseYen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=n("Joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=n("KanbanSquareDashed",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=n("KanbanSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=n("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=n("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=n("KeySquare",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=n("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=n("KeyboardMusic",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=n("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=n("LampCeiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=n("LampDesk",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=n("LampFloor",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=n("LampWallDown",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=n("LampWallUp",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=n("Lamp",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=n("LandPlot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=n("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=n("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=n("Laptop2",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=n("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=n("LassoSelect",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=n("Lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=n("Laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=n("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=n("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=n("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=n("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=n("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=n("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=n("LayoutPanelLeft",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=n("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=n("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=n("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=n("LeafyGreen",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=n("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=n("LibrarySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=n("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=n("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=n("Ligature",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=n("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=n("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=n("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=n("Link2Off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=n("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=n("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=n("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=n("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=n("ListCollapse",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=n("ListEnd",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=n("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=n("ListMinus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=n("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=n("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=n("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=n("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=n("ListStart",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=n("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=n("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=n("ListVideo",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=n("ListX",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=n("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=n("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=n("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=n("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=n("LocateOff",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=n("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=n("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=n("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=n("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=n("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=n("Lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=n("Luggage",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=n("MSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=n("Magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=n("MailCheck",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=n("MailMinus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=n("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=n("MailPlus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=n("MailQuestion",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=n("MailSearch",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=n("MailWarning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=n("MailX",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=n("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=n("Mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=n("Mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=n("MapPinOff",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=n("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=n("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=n("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=n("Martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=n("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=n("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=n("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=n("MegaphoneOff",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=n("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=n("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=n("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=n("MenuSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=n("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=n("Merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=n("MessageCircleCode",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 10 2 2-2 2",key:"1kkmpt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=n("MessageCircleDashed",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=n("MessageCircleHeart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=n("MessageCircleMore",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=n("MessageCircleOff",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=n("MessageCirclePlus",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=n("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=n("MessageCircleReply",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=n("MessageCircleWarning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=n("MessageCircleX",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=n("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=n("MessageSquareCode",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 8-2 2 2 2",key:"19bv1o"}],["path",{d:"m14 8 2 2-2 2",key:"1whylv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=n("MessageSquareDashed",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=n("MessageSquareDiff",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=n("MessageSquareDot",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=n("MessageSquareHeart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=n("MessageSquareMore",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=n("MessageSquareOff",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=n("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=n("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=n("MessageSquareReply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=n("MessageSquareShare",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=n("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=n("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=n("MessageSquareX",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=n("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=n("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=n("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=n("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=n("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=n("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=n("Microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=n("Milestone",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=n("MilkOff",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=n("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=n("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=n("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=n("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=n("MinusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=n("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=n("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=n("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=n("MonitorDown",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=n("MonitorOff",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=n("MonitorPause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=n("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=n("MonitorSmartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=n("MonitorSpeaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=n("MonitorStop",[["rect",{x:"9",y:"7",width:"6",height:"6",key:"4xvc6r"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=n("MonitorUp",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=n("MonitorX",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=n("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=n("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=n("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=n("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=n("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=n("MountainSnow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=n("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=n("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=n("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=n("MousePointerSquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=n("MousePointerSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=n("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=n("Mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=n("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=n("MoveDiagonal2",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=n("MoveDiagonal",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=n("MoveDownLeft",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=n("MoveDownRight",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=n("MoveDown",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=n("MoveHorizontal",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=n("MoveLeft",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=n("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=n("MoveUpLeft",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=n("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=n("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=n("MoveVertical",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=n("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=n("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=n("Music3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=n("Music4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=n("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=n("Navigation2Off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=n("Navigation2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=n("NavigationOff",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=n("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=n("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=n("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=n("Nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=n("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z",key:"1dba1m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=n("NotebookTabs",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=n("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=n("Notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=n("NotepadTextDashed",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=n("NotepadText",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=n("NutOff",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=n("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=n("Octagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=n("Option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=n("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=n("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=n("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=n("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=n("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=n("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=n("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=n("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=n("PackageX",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=n("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=n("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=n("PaintRoller",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=n("Paintbrush2",[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",key:"1c8kta"}],["path",{d:"M6 12V2h12v10",key:"1esbnf"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M10 2v2",key:"7u0qdc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=n("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=n("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=n("Palmtree",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",key:"epoumf"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=n("PanelBottomClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=n("PanelBottomDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=n("PanelBottomOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=n("PanelBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=n("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=n("PanelLeftDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=n("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=n("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=n("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=n("PanelRightDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=n("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=n("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=n("PanelTopClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=n("PanelTopDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=n("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=n("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=n("PanelsLeftBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=n("PanelsRightBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=n("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=n("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=n("Parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=n("ParkingCircleOff",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=n("ParkingCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=n("ParkingMeter",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=n("ParkingSquareOff",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=n("ParkingSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=n("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=n("PauseCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=n("PauseOctagon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",key:"1m7qra"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=n("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=n("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=n("PcCase",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=n("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=n("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=n("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=n("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=n("PencilRuler",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=n("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=n("Pentagon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=n("PercentCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=n("PercentDiamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=n("PercentSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=n("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=n("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=n("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=n("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=n("PhoneIncoming",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=n("PhoneMissed",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=n("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=n("PhoneOutgoing",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=n("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=n("PiSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=n("Pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=n("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=n("Pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=n("PictureInPicture2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=n("PictureInPicture",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=n("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=n("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=n("PilcrowSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=n("Pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=n("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=n("PinOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=n("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=n("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=n("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=n("PlaneLanding",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=n("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=n("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=n("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=n("PlaySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=n("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=n("Plug2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=n("PlugZap2",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=n("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=n("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=n("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=n("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=n("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=n("PocketKnife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=n("Pocket",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=n("Podcast",[["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",key:"1n5fvv"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0",key:"jqtxkf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=n("PointerOff",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=n("Pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=n("Popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=n("Popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=n("PoundSterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=n("PowerCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V6",key:"30zewn"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5",key:"1r0tk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=n("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=n("PowerSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=n("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=n("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=n("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=n("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=n("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=n("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=n("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=n("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=n("Rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=n("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=n("Radiation",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=n("Radical",[["path",{d:"M3 12h4l3 9 4-17h7",key:"bpxjrx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=n("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=n("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=n("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=n("Radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=n("RailSymbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=n("Rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=n("Rat",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=n("Ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=n("ReceiptCent",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=n("ReceiptEuro",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=n("ReceiptIndianRupee",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=n("ReceiptJapaneseYen",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=n("ReceiptPoundSterling",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=n("ReceiptRussianRuble",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=n("ReceiptSwissFranc",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=n("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=n("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=n("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=n("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=n("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=n("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=n("RedoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=n("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=n("RefreshCcwDot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=n("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=n("RefreshCwOff",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=n("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=n("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=n("Regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=n("RemoveFormatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=n("Repeat1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=n("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=n("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=n("ReplaceAll",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=n("Replace",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=n("ReplyAll",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=n("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=n("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=n("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=n("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=n("RockingChair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=n("RollerCoaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=n("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=n("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=n("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=n("RouteOff",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=n("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=n("Router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=n("Rows2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=n("Rows3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=n("Rows4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=n("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=n("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=n("RussianRuble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=n("Sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=n("Salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=n("Sandwich",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=n("SatelliteDish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=n("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=n("SaveAll",[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z",key:"1unput"}],["path",{d:"M10 2v4h6",key:"1p5sg6"}],["path",{d:"M18 18v-7h-8v7",key:"1oniuk"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=n("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=n("Scale3d",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=n("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=n("Scaling",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=n("ScanBarcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=n("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=n("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=n("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=n("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=n("ScanText",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=n("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=n("ScatterChart",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=n("School2",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"8z0lq4"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=n("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=n("ScissorsLineDashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=n("ScissorsSquareDashedBottom",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=n("ScissorsSquare",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=n("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=n("ScreenShareOff",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=n("ScreenShare",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=n("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=n("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=n("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=n("SearchCode",[["path",{d:"m9 9-2 2 2 2",key:"17gsfh"}],["path",{d:"m13 13 2-2-2-2",key:"186z8k"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=n("SearchSlash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=n("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=n("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=n("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=n("SendToBack",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=n("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=n("SeparatorHorizontal",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=n("SeparatorVertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=n("ServerCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=n("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=n("ServerOff",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=n("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=n("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=n("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=n("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=n("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=n("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=n("Sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=n("Shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=n("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=n("ShieldBan",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=n("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=n("ShieldEllipsis",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=n("ShieldHalf",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=n("ShieldMinus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=n("ShieldOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=n("ShieldPlus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=n("ShieldQuestion",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=n("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=n("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=n("ShipWheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=n("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=n("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=n("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=n("ShoppingBasket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=n("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=n("Shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=n("ShowerHead",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=n("Shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=n("Shrub",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=n("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=n("SigmaSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=n("Sigma",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=n("SignalHigh",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=n("SignalLow",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=n("SignalMedium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=n("SignalZero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=n("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=n("SignpostBig",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=n("Signpost",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=n("Siren",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=n("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=n("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=n("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=n("Slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=n("SlashSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=n("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=n("Slice",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=n("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=n("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=n("SmartphoneCharging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=n("SmartphoneNfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=n("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=n("SmilePlus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=n("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=n("Snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=n("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=n("Sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=n("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=n("Space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=n("Spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=n("Sparkle",[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",key:"nraa5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=n("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=n("Speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=n("Speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=n("SpellCheck2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=n("SpellCheck",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=n("Spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=n("SplitSquareHorizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=n("SplitSquareVertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=n("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=n("SprayCan",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=n("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=n("SquareDashedBottomCode",[["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=n("SquareDashedBottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=n("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=n("SquareRadical",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=n("SquareStack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=n("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=n("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=n("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=n("Squircle",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=n("Squirrel",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=n("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=n("StarHalf",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=n("StarOff",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=n("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=n("StepBack",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=n("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=n("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=n("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=n("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=n("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=n("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=n("StretchHorizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=n("StretchVertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=n("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=n("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=n("SunDim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=n("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=n("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=n("SunSnow",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=n("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=n("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=n("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=n("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=n("SwatchBook",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h0.01",key:"10821z"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=n("SwissFranc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=n("SwitchCamera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=n("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=n("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=n("Syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=n("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=n("TableCellsMerge",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=n("TableCellsSplit",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=n("TableColumnsSplit",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=n("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=n("TableRowsSplit",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=n("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=n("TabletSmartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=n("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=n("Tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=n("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=n("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=n("Tally1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=n("Tally2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=n("Tally3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=n("Tally4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=n("Tally5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=n("Tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=n("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=n("Telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=n("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=n("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=n("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=n("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=n("TestTube2",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=n("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=n("TestTubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=n("TextCursorInput",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=n("TextCursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=n("TextQuote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=n("TextSearch",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=n("TextSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=n("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=n("Theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=n("ThermometerSnowflake",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=n("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=n("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=n("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=n("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=n("TicketCheck",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=n("TicketMinus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=n("TicketPercent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=n("TicketPlus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=n("TicketSlash",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=n("TicketX",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=n("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=n("TimerOff",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=n("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=n("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=n("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=n("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=n("Tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=n("Torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=n("TouchpadOff",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=n("Touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=n("TowerControl",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=n("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=n("Tractor",[["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h9l1 7.246",key:"d639it"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=n("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=n("TrainFrontTunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=n("TrainFront",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=n("TrainTrack",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=n("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=n("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=n("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=n("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=n("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=n("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=n("Trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=n("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=n("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=n("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=n("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=n("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=n("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=n("Turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=n("Tv2",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=n("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=n("Twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=n("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=n("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=n("UmbrellaOff",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=n("Umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=n("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=n("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=n("UndoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=n("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=n("UnfoldHorizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=n("UnfoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=n("Ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=n("Unlink2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=n("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=n("UnlockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=n("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=n("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=n("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=n("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=n("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=n("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=n("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=n("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=n("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=n("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=n("UserRoundCog",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=n("UserRoundMinus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=n("UserRoundPlus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=n("UserRoundSearch",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=n("UserRoundX",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=n("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=n("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=n("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=n("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=n("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=n("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=n("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=n("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=n("UtilityPole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=n("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=n("Vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=n("Vegan",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=n("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=n("VibrateOff",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=n("Vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=n("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=n("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=n("Videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=n("View",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=n("Voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=n("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=n("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=n("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=n("Volume",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=n("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=n("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=n("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=n("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=n("Wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=n("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=n("Wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=n("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=n("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=n("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=n("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=n("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=n("Webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=n("WebhookOff",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=n("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=n("Weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=n("WheatOff",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=n("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=n("WholeWord",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=n("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=n("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=n("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=n("WineOff",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=n("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=n("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=n("WrapText",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=n("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=n("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=n("XOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=n("XSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=n("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=n("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=n("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=n("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=n("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zq=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Cn,AArrowUp:Sn,ALargeSmall:jn,Accessibility:In,Activity:zn,ActivitySquare:qn,AirVent:Pn,Airplay:Fn,AlarmClock:Hn,AlarmClockCheck:Bt,AlarmClockMinus:Et,AlarmClockOff:An,AlarmClockPlus:Ut,AlarmSmoke:Nn,Album:Vn,AlertCircle:Rn,AlertOctagon:Dn,AlertTriangle:Tn,AlignCenter:Un,AlignCenterHorizontal:Bn,AlignCenterVertical:En,AlignEndHorizontal:On,AlignEndVertical:Zn,AlignHorizontalDistributeCenter:_n,AlignHorizontalDistributeEnd:Wn,AlignHorizontalDistributeStart:Gn,AlignHorizontalJustifyCenter:$n,AlignHorizontalJustifyEnd:Xn,AlignHorizontalJustifyStart:Kn,AlignHorizontalSpaceAround:Qn,AlignHorizontalSpaceBetween:Yn,AlignJustify:Jn,AlignLeft:er,AlignRight:tr,AlignStartHorizontal:ar,AlignStartVertical:nr,AlignVerticalDistributeCenter:rr,AlignVerticalDistributeEnd:or,AlignVerticalDistributeStart:cr,AlignVerticalJustifyCenter:ir,AlignVerticalJustifyEnd:lr,AlignVerticalJustifyStart:dr,AlignVerticalSpaceAround:sr,AlignVerticalSpaceBetween:hr,Ambulance:ur,Ampersand:yr,Ampersands:pr,Anchor:kr,Angry:mr,Annoyed:xr,Antenna:gr,Anvil:fr,Aperture:vr,AppWindow:Mr,Apple:wr,Archive:Cr,ArchiveRestore:Lr,ArchiveX:br,AreaChart:Sr,Armchair:jr,ArrowBigDown:qr,ArrowBigDownDash:Ir,ArrowBigLeft:Pr,ArrowBigLeftDash:zr,ArrowBigRight:Ar,ArrowBigRightDash:Fr,ArrowBigUp:Nr,ArrowBigUpDash:Hr,ArrowDown:Jr,ArrowDown01:Vr,ArrowDown10:Rr,ArrowDownAZ:Ot,ArrowDownCircle:Dr,ArrowDownFromLine:Tr,ArrowDownLeft:Or,ArrowDownLeftFromCircle:Br,ArrowDownLeftFromSquare:Er,ArrowDownLeftSquare:Ur,ArrowDownNarrowWide:Zr,ArrowDownRight:$r,ArrowDownRightFromCircle:_r,ArrowDownRightFromSquare:Wr,ArrowDownRightSquare:Gr,ArrowDownSquare:Xr,ArrowDownToDot:Kr,ArrowDownToLine:Qr,ArrowDownUp:Yr,ArrowDownWideNarrow:Zt,ArrowDownZA:_t,ArrowLeft:Da,ArrowLeftCircle:eo,ArrowLeftFromLine:to,ArrowLeftRight:ao,ArrowLeftSquare:no,ArrowLeftToLine:ro,ArrowRight:ho,ArrowRightCircle:oo,ArrowRightFromLine:co,ArrowRightLeft:io,ArrowRightSquare:lo,ArrowRightToLine:so,ArrowUp:qo,ArrowUp01:uo,ArrowUp10:yo,ArrowUpAZ:Wt,ArrowUpCircle:po,ArrowUpDown:ko,ArrowUpFromDot:mo,ArrowUpFromLine:xo,ArrowUpLeft:Mo,ArrowUpLeftFromCircle:go,ArrowUpLeftFromSquare:fo,ArrowUpLeftSquare:vo,ArrowUpNarrowWide:Gt,ArrowUpRight:Co,ArrowUpRightFromCircle:wo,ArrowUpRightFromSquare:Lo,ArrowUpRightSquare:bo,ArrowUpSquare:So,ArrowUpToLine:jo,ArrowUpWideNarrow:Io,ArrowUpZA:$t,ArrowsUpFromLine:zo,Asterisk:Po,AsteriskSquare:Xt,AtSign:Fo,Atom:Ao,AudioLines:Ho,AudioWaveform:No,Award:Vo,Axe:Ro,Axis3d:Kt,Baby:Do,Backpack:To,Badge:tc,BadgeAlert:Bo,BadgeCent:Eo,BadgeCheck:Qt,BadgeDollarSign:Uo,BadgeEuro:Oo,BadgeHelp:Zo,BadgeIndianRupee:_o,BadgeInfo:Wo,BadgeJapaneseYen:Go,BadgeMinus:$o,BadgePercent:Xo,BadgePlus:Ko,BadgePoundSterling:Qo,BadgeRussianRuble:Yo,BadgeSwissFranc:Jo,BadgeX:ec,BaggageClaim:ac,Ban:nc,Banana:rc,Banknote:oc,BarChart:uc,BarChart2:cc,BarChart3:ic,BarChart4:lc,BarChartBig:dc,BarChartHorizontal:hc,BarChartHorizontalBig:sc,Barcode:yc,Baseline:pc,Bath:kc,Battery:Mc,BatteryCharging:mc,BatteryFull:xc,BatteryLow:gc,BatteryMedium:fc,BatteryWarning:vc,Beaker:wc,Bean:bc,BeanOff:Lc,Bed:jc,BedDouble:Cc,BedSingle:Sc,Beef:Ic,Beer:qc,Bell:Vc,BellDot:zc,BellElectric:Pc,BellMinus:Fc,BellOff:Ac,BellPlus:Hc,BellRing:Nc,BetweenHorizontalEnd:Yt,BetweenHorizontalStart:Jt,BetweenVerticalEnd:Rc,BetweenVerticalStart:Dc,Bike:Tc,Binary:Bc,Biohazard:Ec,Bird:Uc,Bitcoin:Oc,Blend:Zc,Blinds:_c,Blocks:Wc,Bluetooth:Kc,BluetoothConnected:Gc,BluetoothOff:$c,BluetoothSearching:Xc,Bold:Qc,Bolt:Yc,Bomb:Jc,Bone:ei,Book:Li,BookA:ti,BookAudio:ai,BookCheck:ni,BookCopy:ri,BookDashed:e1,BookDown:oi,BookHeadphones:ci,BookHeart:ii,BookImage:li,BookKey:di,BookLock:si,BookMarked:hi,BookMinus:ui,BookOpen:ki,BookOpenCheck:yi,BookOpenText:pi,BookPlus:mi,BookText:xi,BookType:gi,BookUp:vi,BookUp2:fi,BookUser:Mi,BookX:wi,Bookmark:Ii,BookmarkCheck:bi,BookmarkMinus:Ci,BookmarkPlus:Si,BookmarkX:ji,BoomBox:qi,Bot:Pi,BotMessageSquare:zi,Box:Ai,BoxSelect:Fi,Boxes:Hi,Braces:t1,Brackets:Ni,Brain:Di,BrainCircuit:Vi,BrainCog:Ri,BrickWall:Ti,Briefcase:Bi,BringToFront:Ei,Brush:Ui,Bug:_i,BugOff:Oi,BugPlay:Zi,Building:Gi,Building2:Wi,Bus:Xi,BusFront:$i,Cable:Qi,CableCar:Ki,Cake:Ji,CakeSlice:Yi,Calculator:ia,Calendar:kl,CalendarCheck:tl,CalendarCheck2:el,CalendarClock:al,CalendarDays:nl,CalendarFold:rl,CalendarHeart:ol,CalendarMinus:il,CalendarMinus2:cl,CalendarOff:ll,CalendarPlus:sl,CalendarPlus2:dl,CalendarRange:hl,CalendarSearch:ul,CalendarX:pl,CalendarX2:yl,Camera:xl,CameraOff:ml,CandlestickChart:gl,Candy:Ml,CandyCane:fl,CandyOff:vl,Captions:a1,CaptionsOff:wl,Car:Cl,CarFront:Ll,CarTaxiFront:bl,Caravan:Sl,Carrot:jl,CaseLower:Il,CaseSensitive:ql,CaseUpper:zl,CassetteTape:Pl,Cast:Fl,Castle:Al,Cat:Hl,Cctv:Nl,Check:El,CheckCheck:Vl,CheckCircle:Dl,CheckCircle2:Rl,CheckSquare:Bl,CheckSquare2:Tl,ChefHat:Ul,Cherry:Ol,ChevronDown:Wl,ChevronDownCircle:Zl,ChevronDownSquare:_l,ChevronFirst:Gl,ChevronLast:$l,ChevronLeft:Ql,ChevronLeftCircle:Xl,ChevronLeftSquare:Kl,ChevronRight:e0,ChevronRightCircle:Yl,ChevronRightSquare:Jl,ChevronUp:n0,ChevronUpCircle:t0,ChevronUpSquare:a0,ChevronsDown:o0,ChevronsDownUp:r0,ChevronsLeft:i0,ChevronsLeftRight:c0,ChevronsRight:d0,ChevronsRightLeft:l0,ChevronsUp:h0,ChevronsUpDown:s0,Chrome:u0,Church:y0,Cigarette:k0,CigaretteOff:p0,Circle:C0,CircleDashed:m0,CircleDollarSign:x0,CircleDot:f0,CircleDotDashed:g0,CircleEllipsis:v0,CircleEqual:M0,CircleFadingPlus:w0,CircleOff:L0,CircleSlash:b0,CircleSlash2:n1,CircleUser:o1,CircleUserRound:r1,CircuitBoard:S0,Citrus:j0,Clapperboard:I0,Clipboard:R0,ClipboardCheck:q0,ClipboardCopy:z0,ClipboardList:P0,ClipboardMinus:F0,ClipboardPaste:A0,ClipboardPen:i1,ClipboardPenLine:c1,ClipboardPlus:H0,ClipboardType:N0,ClipboardX:V0,Clock:K0,Clock1:D0,Clock10:T0,Clock11:B0,Clock12:E0,Clock2:U0,Clock3:O0,Clock4:Z0,Clock5:_0,Clock6:W0,Clock7:G0,Clock8:$0,Clock9:X0,Cloud:sd,CloudCog:Q0,CloudDrizzle:Y0,CloudFog:J0,CloudHail:ed,CloudLightning:td,CloudMoon:nd,CloudMoonRain:ad,CloudOff:rd,CloudRain:cd,CloudRainWind:od,CloudSnow:id,CloudSun:dd,CloudSunRain:ld,Cloudy:hd,Clover:ud,Club:yd,Code:kd,Code2:pd,CodeSquare:l1,Codepen:md,Codesandbox:xd,Coffee:gd,Cog:fd,Coins:vd,Columns2:d1,Columns3:s1,Columns4:Md,Combine:wd,Command:Ld,Compass:bd,Component:Cd,Computer:Sd,ConciergeBell:jd,Cone:Id,Construction:qd,Contact:Pd,Contact2:zd,Container:Fd,Contrast:Ad,Cookie:Hd,CookingPot:Nd,Copy:Ed,CopyCheck:Vd,CopyMinus:Rd,CopyPlus:Dd,CopySlash:Td,CopyX:Bd,Copyleft:Ud,Copyright:Od,CornerDownLeft:Zd,CornerDownRight:_d,CornerLeftDown:Wd,CornerLeftUp:Gd,CornerRightDown:$d,CornerRightUp:Xd,CornerUpLeft:Kd,CornerUpRight:Qd,Cpu:Yd,CreativeCommons:Jd,CreditCard:es,Croissant:ts,Crop:as,Cross:ns,Crosshair:rs,Crown:os,Cuboid:cs,CupSoda:is,Currency:ls,Cylinder:ds,Database:us,DatabaseBackup:ss,DatabaseZap:hs,Delete:ys,Dessert:ps,Diameter:ks,Diamond:ms,Dice1:xs,Dice2:gs,Dice3:fs,Dice4:vs,Dice5:Ms,Dice6:ws,Dices:Ls,Diff:bs,Disc:Is,Disc2:Cs,Disc3:Ss,DiscAlbum:js,Divide:Ps,DivideCircle:qs,DivideSquare:zs,Dna:As,DnaOff:Fs,Dog:Hs,DollarSign:Ns,Donut:Vs,DoorClosed:Rs,DoorOpen:Ds,Dot:Ts,DotSquare:h1,Download:Es,DownloadCloud:Bs,DraftingCompass:Us,Drama:Os,Dribbble:Zs,Drill:_s,Droplet:Ws,Droplets:Gs,Drum:$s,Drumstick:Xs,Dumbbell:Ks,Ear:Ys,EarOff:Qs,Earth:u1,EarthLock:Js,Eclipse:eh,Egg:nh,EggFried:th,EggOff:ah,Equal:oh,EqualNot:rh,EqualSquare:y1,Eraser:ch,Euro:ih,Expand:lh,ExternalLink:dh,Eye:hh,EyeOff:sh,Facebook:uh,Factory:yh,Fan:ph,FastForward:kh,Feather:mh,Fence:xh,FerrisWheel:gh,Figma:fh,File:fu,FileArchive:vh,FileAudio:wh,FileAudio2:Mh,FileAxis3d:p1,FileBadge:bh,FileBadge2:Lh,FileBarChart:Sh,FileBarChart2:Ch,FileBox:jh,FileCheck:qh,FileCheck2:Ih,FileClock:zh,FileCode:Fh,FileCode2:Ph,FileCog:k1,FileDiff:Ah,FileDigit:Hh,FileDown:Nh,FileHeart:Vh,FileImage:Rh,FileInput:Dh,FileJson:Bh,FileJson2:Th,FileKey:Uh,FileKey2:Eh,FileLineChart:Oh,FileLock:_h,FileLock2:Zh,FileMinus:Gh,FileMinus2:Wh,FileMusic:$h,FileOutput:Xh,FilePen:x1,FilePenLine:m1,FilePieChart:Kh,FilePlus:Yh,FilePlus2:Qh,FileQuestion:Jh,FileScan:eu,FileSearch:au,FileSearch2:tu,FileSliders:nu,FileSpreadsheet:ru,FileStack:ou,FileSymlink:cu,FileTerminal:iu,FileText:lu,FileType:su,FileType2:du,FileUp:hu,FileVideo:yu,FileVideo2:uu,FileVolume:ku,FileVolume2:pu,FileWarning:mu,FileX:gu,FileX2:xu,Files:vu,Film:Mu,Filter:Lu,FilterX:wu,Fingerprint:bu,FireExtinguisher:Cu,Fish:Iu,FishOff:Su,FishSymbol:ju,Flag:Fu,FlagOff:qu,FlagTriangleLeft:zu,FlagTriangleRight:Pu,Flame:Hu,FlameKindling:Au,Flashlight:Vu,FlashlightOff:Nu,FlaskConical:Du,FlaskConicalOff:Ru,FlaskRound:Tu,FlipHorizontal:Eu,FlipHorizontal2:Bu,FlipVertical:Ou,FlipVertical2:Uu,Flower:_u,Flower2:Zu,Focus:Wu,FoldHorizontal:Gu,FoldVertical:$u,Folder:My,FolderArchive:Xu,FolderCheck:Ku,FolderClock:Qu,FolderClosed:Yu,FolderCog:g1,FolderDot:Ju,FolderDown:ey,FolderGit:ay,FolderGit2:ty,FolderHeart:ny,FolderInput:ry,FolderKanban:oy,FolderKey:cy,FolderLock:iy,FolderMinus:ly,FolderOpen:sy,FolderOpenDot:dy,FolderOutput:hy,FolderPen:f1,FolderPlus:uy,FolderRoot:yy,FolderSearch:ky,FolderSearch2:py,FolderSymlink:my,FolderSync:xy,FolderTree:gy,FolderUp:fy,FolderX:vy,Folders:wy,Footprints:Ly,Forklift:by,FormInput:Cy,Forward:Sy,Frame:jy,Framer:Iy,Frown:qy,Fuel:zy,Fullscreen:Py,FunctionSquare:Fy,GalleryHorizontal:Hy,GalleryHorizontalEnd:Ay,GalleryThumbnails:Ny,GalleryVertical:Ry,GalleryVerticalEnd:Vy,Gamepad:Ty,Gamepad2:Dy,GanttChart:By,GanttChartSquare:$e,Gauge:Uy,GaugeCircle:Ey,Gavel:Oy,Gem:Zy,Ghost:_y,Gift:Wy,GitBranch:$y,GitBranchPlus:Gy,GitCommitHorizontal:v1,GitCommitVertical:Xy,GitCompare:Qy,GitCompareArrows:Ky,GitFork:Yy,GitGraph:Jy,GitMerge:ep,GitPullRequest:cp,GitPullRequestArrow:tp,GitPullRequestClosed:ap,GitPullRequestCreate:rp,GitPullRequestCreateArrow:np,GitPullRequestDraft:op,Github:ip,Gitlab:lp,GlassWater:dp,Glasses:sp,Globe:up,GlobeLock:hp,Goal:yp,Grab:pp,GraduationCap:kp,Grape:mp,Grid2x2:M1,Grid3x3:Xe,Grip:fp,GripHorizontal:xp,GripVertical:gp,Group:vp,Guitar:Mp,Hammer:wp,Hand:jp,HandCoins:Lp,HandHeart:bp,HandHelping:w1,HandMetal:Cp,HandPlatter:Sp,Handshake:Ip,HardDrive:Pp,HardDriveDownload:qp,HardDriveUpload:zp,HardHat:Fp,Hash:Ap,Haze:Hp,HdmiPort:Np,Heading:Up,Heading1:Vp,Heading2:Rp,Heading3:Dp,Heading4:Tp,Heading5:Bp,Heading6:Ep,Headphones:Op,Headset:Zp,Heart:Xp,HeartCrack:_p,HeartHandshake:Wp,HeartOff:Gp,HeartPulse:$p,Heater:Kp,HelpCircle:Qp,Hexagon:Yp,Highlighter:Jp,History:e4,Home:t4,Hop:n4,HopOff:a4,Hotel:r4,Hourglass:o4,IceCream:i4,IceCream2:c4,Image:y4,ImageDown:l4,ImageMinus:d4,ImageOff:s4,ImagePlus:h4,ImageUp:u4,Images:p4,Import:k4,Inbox:m4,Indent:x4,IndianRupee:g4,Infinity:f4,Info:v4,InspectionPanel:M4,Instagram:w4,Italic:L4,IterationCcw:b4,IterationCw:C4,JapaneseYen:S4,Joystick:j4,Kanban:I4,KanbanSquare:b1,KanbanSquareDashed:L1,Key:P4,KeyRound:q4,KeySquare:z4,Keyboard:A4,KeyboardMusic:F4,Lamp:T4,LampCeiling:H4,LampDesk:N4,LampFloor:V4,LampWallDown:R4,LampWallUp:D4,LandPlot:B4,Landmark:E4,Languages:U4,Laptop:Z4,Laptop2:O4,Lasso:W4,LassoSelect:_4,Laugh:G4,Layers:K4,Layers2:$4,Layers3:X4,LayoutDashboard:Q4,LayoutGrid:Y4,LayoutList:J4,LayoutPanelLeft:ek,LayoutPanelTop:tk,LayoutTemplate:ak,Leaf:nk,LeafyGreen:rk,Library:ik,LibraryBig:ok,LibrarySquare:ck,LifeBuoy:lk,Ligature:dk,Lightbulb:hk,LightbulbOff:sk,LineChart:uk,Link:kk,Link2:pk,Link2Off:yk,Linkedin:mk,List:Pk,ListChecks:xk,ListCollapse:gk,ListEnd:fk,ListFilter:vk,ListMinus:Mk,ListMusic:wk,ListOrdered:Lk,ListPlus:bk,ListRestart:Ck,ListStart:Sk,ListTodo:jk,ListTree:Ik,ListVideo:qk,ListX:zk,Loader:Ak,Loader2:Fk,Locate:Vk,LocateFixed:Hk,LocateOff:Nk,Lock:Dk,LockKeyhole:Rk,LogIn:Tk,LogOut:Bk,Lollipop:Ek,Luggage:Uk,MSquare:Ok,Magnet:Zk,Mail:Jk,MailCheck:_k,MailMinus:Wk,MailOpen:Gk,MailPlus:$k,MailQuestion:Xk,MailSearch:Kk,MailWarning:Qk,MailX:Yk,Mailbox:e5,Mails:t5,Map:o5,MapPin:n5,MapPinOff:a5,MapPinned:r5,Martini:c5,Maximize:l5,Maximize2:i5,Medal:d5,Megaphone:h5,MegaphoneOff:s5,Meh:u5,MemoryStick:y5,Menu:k5,MenuSquare:p5,Merge:m5,MessageCircle:j5,MessageCircleCode:x5,MessageCircleDashed:g5,MessageCircleHeart:f5,MessageCircleMore:v5,MessageCircleOff:M5,MessageCirclePlus:w5,MessageCircleQuestion:L5,MessageCircleReply:b5,MessageCircleWarning:C5,MessageCircleX:S5,MessageSquare:U5,MessageSquareCode:I5,MessageSquareDashed:q5,MessageSquareDiff:z5,MessageSquareDot:P5,MessageSquareHeart:F5,MessageSquareMore:A5,MessageSquareOff:H5,MessageSquarePlus:N5,MessageSquareQuote:V5,MessageSquareReply:R5,MessageSquareShare:D5,MessageSquareText:T5,MessageSquareWarning:B5,MessageSquareX:E5,MessagesSquare:O5,Mic:W5,Mic2:Z5,MicOff:_5,Microscope:G5,Microwave:$5,Milestone:X5,Milk:Q5,MilkOff:K5,Minimize:J5,Minimize2:Y5,Minus:a3,MinusCircle:e3,MinusSquare:t3,Monitor:p3,MonitorCheck:n3,MonitorDot:r3,MonitorDown:o3,MonitorOff:c3,MonitorPause:i3,MonitorPlay:l3,MonitorSmartphone:d3,MonitorSpeaker:s3,MonitorStop:h3,MonitorUp:u3,MonitorX:y3,Moon:m3,MoonStar:k3,MoreHorizontal:x3,MoreVertical:g3,Mountain:v3,MountainSnow:f3,Mouse:C3,MousePointer:b3,MousePointer2:M3,MousePointerClick:w3,MousePointerSquare:C1,MousePointerSquareDashed:L3,Move:D3,Move3d:S1,MoveDiagonal:j3,MoveDiagonal2:S3,MoveDown:z3,MoveDownLeft:I3,MoveDownRight:q3,MoveHorizontal:P3,MoveLeft:F3,MoveRight:A3,MoveUp:V3,MoveUpLeft:H3,MoveUpRight:N3,MoveVertical:R3,Music:U3,Music2:T3,Music3:B3,Music4:E3,Navigation:W3,Navigation2:Z3,Navigation2Off:O3,NavigationOff:_3,Network:G3,Newspaper:$3,Nfc:X3,Notebook:J3,NotebookPen:K3,NotebookTabs:Q3,NotebookText:Y3,NotepadText:tm,NotepadTextDashed:em,Nut:nm,NutOff:am,Octagon:rm,Option:om,Orbit:cm,Outdent:im,Package:km,Package2:lm,PackageCheck:dm,PackageMinus:sm,PackageOpen:hm,PackagePlus:um,PackageSearch:ym,PackageX:pm,PaintBucket:mm,PaintRoller:xm,Paintbrush:fm,Paintbrush2:gm,Palette:vm,Palmtree:Mm,PanelBottom:bm,PanelBottomClose:wm,PanelBottomDashed:j1,PanelBottomOpen:Lm,PanelLeft:P1,PanelLeftClose:I1,PanelLeftDashed:q1,PanelLeftOpen:z1,PanelRight:jm,PanelRightClose:Cm,PanelRightDashed:F1,PanelRightOpen:Sm,PanelTop:zm,PanelTopClose:Im,PanelTopDashed:A1,PanelTopOpen:qm,PanelsLeftBottom:Pm,PanelsRightBottom:Fm,PanelsTopLeft:H1,Paperclip:Am,Parentheses:Hm,ParkingCircle:Vm,ParkingCircleOff:Nm,ParkingMeter:Rm,ParkingSquare:Tm,ParkingSquareOff:Dm,PartyPopper:Bm,Pause:Om,PauseCircle:Em,PauseOctagon:Um,PawPrint:Zm,PcCase:_m,Pen:V1,PenLine:N1,PenTool:Wm,Pencil:Xm,PencilLine:Gm,PencilRuler:$m,Pentagon:Km,Percent:e6,PercentCircle:Qm,PercentDiamond:Ym,PercentSquare:Jm,PersonStanding:t6,Phone:l6,PhoneCall:a6,PhoneForwarded:n6,PhoneIncoming:r6,PhoneMissed:o6,PhoneOff:c6,PhoneOutgoing:i6,Pi:s6,PiSquare:d6,Piano:h6,Pickaxe:u6,PictureInPicture:p6,PictureInPicture2:y6,PieChart:k6,PiggyBank:m6,Pilcrow:g6,PilcrowSquare:x6,Pill:f6,Pin:M6,PinOff:v6,Pipette:w6,Pizza:L6,Plane:S6,PlaneLanding:b6,PlaneTakeoff:C6,Play:q6,PlayCircle:j6,PlaySquare:I6,Plug:A6,Plug2:z6,PlugZap:F6,PlugZap2:P6,Plus:V6,PlusCircle:H6,PlusSquare:N6,Pocket:D6,PocketKnife:R6,Podcast:T6,Pointer:E6,PointerOff:B6,Popcorn:U6,Popsicle:O6,PoundSterling:Z6,Power:$6,PowerCircle:_6,PowerOff:W6,PowerSquare:G6,Presentation:X6,Printer:K6,Projector:Q6,Puzzle:Y6,Pyramid:J6,QrCode:ex,Quote:tx,Rabbit:ax,Radar:nx,Radiation:rx,Radical:ox,Radio:lx,RadioReceiver:cx,RadioTower:ix,Radius:dx,RailSymbol:sx,Rainbow:hx,Rat:ux,Ratio:yx,Receipt:wx,ReceiptCent:px,ReceiptEuro:kx,ReceiptIndianRupee:mx,ReceiptJapaneseYen:xx,ReceiptPoundSterling:gx,ReceiptRussianRuble:fx,ReceiptSwissFranc:vx,ReceiptText:Mx,RectangleHorizontal:Lx,RectangleVertical:bx,Recycle:Cx,Redo:Ix,Redo2:Sx,RedoDot:jx,RefreshCcw:zx,RefreshCcwDot:qx,RefreshCw:Fx,RefreshCwOff:Px,Refrigerator:Ax,Regex:Hx,RemoveFormatting:Nx,Repeat:Dx,Repeat1:Vx,Repeat2:Rx,Replace:Bx,ReplaceAll:Tx,Reply:Ux,ReplyAll:Ex,Rewind:Ox,Ribbon:Zx,Rocket:_x,RockingChair:Wx,RollerCoaster:Gx,Rotate3d:R1,RotateCcw:$x,RotateCw:Xx,Route:Qx,RouteOff:Kx,Router:Yx,Rows2:D1,Rows3:T1,Rows4:Jx,Rss:e8,Ruler:t8,RussianRuble:a8,Sailboat:n8,Salad:r8,Sandwich:o8,Satellite:i8,SatelliteDish:c8,Save:d8,SaveAll:l8,Scale:s8,Scale3d:B1,Scaling:h8,Scan:g8,ScanBarcode:u8,ScanEye:y8,ScanFace:p8,ScanLine:k8,ScanSearch:m8,ScanText:x8,ScatterChart:f8,School:M8,School2:v8,Scissors:C8,ScissorsLineDashed:w8,ScissorsSquare:b8,ScissorsSquareDashedBottom:L8,ScreenShare:j8,ScreenShareOff:S8,Scroll:q8,ScrollText:I8,Search:H8,SearchCheck:z8,SearchCode:P8,SearchSlash:F8,SearchX:A8,Send:V8,SendHorizontal:E1,SendToBack:N8,SeparatorHorizontal:R8,SeparatorVertical:D8,Server:U8,ServerCog:T8,ServerCrash:B8,ServerOff:E8,Settings:Z8,Settings2:O8,Shapes:_8,Share:G8,Share2:W8,Sheet:$8,Shell:X8,Shield:og,ShieldAlert:K8,ShieldBan:Q8,ShieldCheck:Y8,ShieldEllipsis:J8,ShieldHalf:eg,ShieldMinus:tg,ShieldOff:ag,ShieldPlus:ng,ShieldQuestion:rg,ShieldX:U1,Ship:ig,ShipWheel:cg,Shirt:lg,ShoppingBag:dg,ShoppingBasket:sg,ShoppingCart:hg,Shovel:ug,ShowerHead:yg,Shrink:pg,Shrub:kg,Shuffle:mg,Sigma:gg,SigmaSquare:xg,Signal:Lg,SignalHigh:fg,SignalLow:vg,SignalMedium:Mg,SignalZero:wg,Signpost:Cg,SignpostBig:bg,Siren:Sg,SkipBack:jg,SkipForward:Ig,Skull:qg,Slack:zg,Slash:Pg,SlashSquare:O1,Slice:Fg,Sliders:Hg,SlidersHorizontal:Ag,Smartphone:Rg,SmartphoneCharging:Ng,SmartphoneNfc:Vg,Smile:Tg,SmilePlus:Dg,Snail:Bg,Snowflake:Eg,Sofa:Ug,Soup:Og,Space:Zg,Spade:_g,Sparkle:Wg,Sparkles:Z1,Speaker:Gg,Speech:$g,SpellCheck:Kg,SpellCheck2:Xg,Spline:Qg,Split:e7,SplitSquareHorizontal:Yg,SplitSquareVertical:Jg,SprayCan:t7,Sprout:a7,Square:i7,SquareDashedBottom:r7,SquareDashedBottomCode:n7,SquarePen:Ce,SquareRadical:o7,SquareStack:c7,SquareUser:W1,SquareUserRound:_1,Squircle:l7,Squirrel:d7,Stamp:s7,Star:y7,StarHalf:h7,StarOff:u7,StepBack:p7,StepForward:k7,Stethoscope:m7,Sticker:x7,StickyNote:g7,StopCircle:f7,Store:v7,StretchHorizontal:M7,StretchVertical:w7,Strikethrough:L7,Subscript:b7,Sun:q7,SunDim:C7,SunMedium:S7,SunMoon:j7,SunSnow:I7,Sunrise:z7,Sunset:P7,Superscript:F7,SwatchBook:A7,SwissFranc:H7,SwitchCamera:N7,Sword:V7,Swords:R7,Syringe:D7,Table:_7,Table2:T7,TableCellsMerge:B7,TableCellsSplit:E7,TableColumnsSplit:U7,TableProperties:O7,TableRowsSplit:Z7,Tablet:G7,TabletSmartphone:W7,Tablets:$7,Tag:X7,Tags:K7,Tally1:Q7,Tally2:Y7,Tally3:J7,Tally4:ef,Tally5:tf,Tangent:af,Target:f2,Telescope:nf,Tent:of,TentTree:rf,Terminal:lf,TerminalSquare:cf,TestTube:sf,TestTube2:df,TestTubes:hf,Text:mf,TextCursor:yf,TextCursorInput:uf,TextQuote:pf,TextSearch:kf,TextSelect:G1,Theater:xf,Thermometer:vf,ThermometerSnowflake:gf,ThermometerSun:ff,ThumbsDown:Mf,ThumbsUp:wf,Ticket:qf,TicketCheck:Lf,TicketMinus:bf,TicketPercent:Cf,TicketPlus:Sf,TicketSlash:jf,TicketX:If,Timer:Ff,TimerOff:zf,TimerReset:Pf,ToggleLeft:Af,ToggleRight:Hf,Tornado:Nf,Torus:Vf,Touchpad:Df,TouchpadOff:Rf,TowerControl:Tf,ToyBrick:Bf,Tractor:Ef,TrafficCone:Uf,TrainFront:Zf,TrainFrontTunnel:Of,TrainTrack:_f,TramFront:$1,Trash:Gf,Trash2:Wf,TreeDeciduous:$f,TreePine:Xf,Trees:Kf,Trello:Qf,TrendingDown:Yf,TrendingUp:v2,Triangle:ev,TriangleRight:Jf,Trophy:tv,Truck:av,Turtle:nv,Tv:ov,Tv2:rv,Twitch:cv,Twitter:iv,Type:lv,Umbrella:sv,UmbrellaOff:dv,Underline:hv,Undo:pv,Undo2:uv,UndoDot:yv,UnfoldHorizontal:kv,UnfoldVertical:mv,Ungroup:xv,Unlink:fv,Unlink2:gv,Unlock:Mv,UnlockKeyhole:vv,Unplug:wv,Upload:bv,UploadCloud:Lv,Usb:Cv,User:Av,UserCheck:Sv,UserCog:jv,UserMinus:Iv,UserPlus:qv,UserRound:ea,UserRoundCheck:X1,UserRoundCog:K1,UserRoundMinus:Q1,UserRoundPlus:Y1,UserRoundSearch:zv,UserRoundX:J1,UserSearch:Pv,UserX:Fv,Users:Hv,UsersRound:ta,Utensils:Vv,UtensilsCrossed:Nv,UtilityPole:Rv,Variable:Dv,Vault:Tv,Vegan:Bv,VenetianMask:Ev,Vibrate:Ov,VibrateOff:Uv,Video:_v,VideoOff:Zv,Videotape:Wv,View:Gv,Voicemail:$v,Volume:Yv,Volume1:Xv,Volume2:Kv,VolumeX:Qv,Vote:Jv,Wallet:a9,Wallet2:e9,WalletCards:t9,Wallpaper:n9,Wand:o9,Wand2:r9,Warehouse:c9,WashingMachine:i9,Watch:l9,Waves:d9,Waypoints:s9,Webcam:h9,Webhook:y9,WebhookOff:u9,Weight:p9,Wheat:m9,WheatOff:k9,WholeWord:x9,Wifi:f9,WifiOff:g9,Wind:v9,Wine:w9,WineOff:M9,Workflow:L9,WrapText:b9,Wrench:C9,X:q9,XCircle:S9,XOctagon:j9,XSquare:I9,Youtube:z9,Zap:F9,ZapOff:P9,ZoomIn:A9,ZoomOut:H9},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _q=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Cn,AArrowDownIcon:Cn,AArrowUp:Sn,AArrowUpIcon:Sn,ALargeSmall:jn,ALargeSmallIcon:jn,Accessibility:In,AccessibilityIcon:In,Activity:zn,ActivityIcon:zn,ActivitySquare:qn,ActivitySquareIcon:qn,AirVent:Pn,AirVentIcon:Pn,Airplay:Fn,AirplayIcon:Fn,AlarmCheck:Bt,AlarmCheckIcon:Bt,AlarmClock:Hn,AlarmClockCheck:Bt,AlarmClockCheckIcon:Bt,AlarmClockIcon:Hn,AlarmClockMinus:Et,AlarmClockMinusIcon:Et,AlarmClockOff:An,AlarmClockOffIcon:An,AlarmClockPlus:Ut,AlarmClockPlusIcon:Ut,AlarmMinus:Et,AlarmMinusIcon:Et,AlarmPlus:Ut,AlarmPlusIcon:Ut,AlarmSmoke:Nn,AlarmSmokeIcon:Nn,Album:Vn,AlbumIcon:Vn,AlertCircle:Rn,AlertCircleIcon:Rn,AlertOctagon:Dn,AlertOctagonIcon:Dn,AlertTriangle:Tn,AlertTriangleIcon:Tn,AlignCenter:Un,AlignCenterHorizontal:Bn,AlignCenterHorizontalIcon:Bn,AlignCenterIcon:Un,AlignCenterVertical:En,AlignCenterVerticalIcon:En,AlignEndHorizontal:On,AlignEndHorizontalIcon:On,AlignEndVertical:Zn,AlignEndVerticalIcon:Zn,AlignHorizontalDistributeCenter:_n,AlignHorizontalDistributeCenterIcon:_n,AlignHorizontalDistributeEnd:Wn,AlignHorizontalDistributeEndIcon:Wn,AlignHorizontalDistributeStart:Gn,AlignHorizontalDistributeStartIcon:Gn,AlignHorizontalJustifyCenter:$n,AlignHorizontalJustifyCenterIcon:$n,AlignHorizontalJustifyEnd:Xn,AlignHorizontalJustifyEndIcon:Xn,AlignHorizontalJustifyStart:Kn,AlignHorizontalJustifyStartIcon:Kn,AlignHorizontalSpaceAround:Qn,AlignHorizontalSpaceAroundIcon:Qn,AlignHorizontalSpaceBetween:Yn,AlignHorizontalSpaceBetweenIcon:Yn,AlignJustify:Jn,AlignJustifyIcon:Jn,AlignLeft:er,AlignLeftIcon:er,AlignRight:tr,AlignRightIcon:tr,AlignStartHorizontal:ar,AlignStartHorizontalIcon:ar,AlignStartVertical:nr,AlignStartVerticalIcon:nr,AlignVerticalDistributeCenter:rr,AlignVerticalDistributeCenterIcon:rr,AlignVerticalDistributeEnd:or,AlignVerticalDistributeEndIcon:or,AlignVerticalDistributeStart:cr,AlignVerticalDistributeStartIcon:cr,AlignVerticalJustifyCenter:ir,AlignVerticalJustifyCenterIcon:ir,AlignVerticalJustifyEnd:lr,AlignVerticalJustifyEndIcon:lr,AlignVerticalJustifyStart:dr,AlignVerticalJustifyStartIcon:dr,AlignVerticalSpaceAround:sr,AlignVerticalSpaceAroundIcon:sr,AlignVerticalSpaceBetween:hr,AlignVerticalSpaceBetweenIcon:hr,Ambulance:ur,AmbulanceIcon:ur,Ampersand:yr,AmpersandIcon:yr,Ampersands:pr,AmpersandsIcon:pr,Anchor:kr,AnchorIcon:kr,Angry:mr,AngryIcon:mr,Annoyed:xr,AnnoyedIcon:xr,Antenna:gr,AntennaIcon:gr,Anvil:fr,AnvilIcon:fr,Aperture:vr,ApertureIcon:vr,AppWindow:Mr,AppWindowIcon:Mr,Apple:wr,AppleIcon:wr,Archive:Cr,ArchiveIcon:Cr,ArchiveRestore:Lr,ArchiveRestoreIcon:Lr,ArchiveX:br,ArchiveXIcon:br,AreaChart:Sr,AreaChartIcon:Sr,Armchair:jr,ArmchairIcon:jr,ArrowBigDown:qr,ArrowBigDownDash:Ir,ArrowBigDownDashIcon:Ir,ArrowBigDownIcon:qr,ArrowBigLeft:Pr,ArrowBigLeftDash:zr,ArrowBigLeftDashIcon:zr,ArrowBigLeftIcon:Pr,ArrowBigRight:Ar,ArrowBigRightDash:Fr,ArrowBigRightDashIcon:Fr,ArrowBigRightIcon:Ar,ArrowBigUp:Nr,ArrowBigUpDash:Hr,ArrowBigUpDashIcon:Hr,ArrowBigUpIcon:Nr,ArrowDown:Jr,ArrowDown01:Vr,ArrowDown01Icon:Vr,ArrowDown10:Rr,ArrowDown10Icon:Rr,ArrowDownAZ:Ot,ArrowDownAZIcon:Ot,ArrowDownAz:Ot,ArrowDownAzIcon:Ot,ArrowDownCircle:Dr,ArrowDownCircleIcon:Dr,ArrowDownFromLine:Tr,ArrowDownFromLineIcon:Tr,ArrowDownIcon:Jr,ArrowDownLeft:Or,ArrowDownLeftFromCircle:Br,ArrowDownLeftFromCircleIcon:Br,ArrowDownLeftFromSquare:Er,ArrowDownLeftFromSquareIcon:Er,ArrowDownLeftIcon:Or,ArrowDownLeftSquare:Ur,ArrowDownLeftSquareIcon:Ur,ArrowDownNarrowWide:Zr,ArrowDownNarrowWideIcon:Zr,ArrowDownRight:$r,ArrowDownRightFromCircle:_r,ArrowDownRightFromCircleIcon:_r,ArrowDownRightFromSquare:Wr,ArrowDownRightFromSquareIcon:Wr,ArrowDownRightIcon:$r,ArrowDownRightSquare:Gr,ArrowDownRightSquareIcon:Gr,ArrowDownSquare:Xr,ArrowDownSquareIcon:Xr,ArrowDownToDot:Kr,ArrowDownToDotIcon:Kr,ArrowDownToLine:Qr,ArrowDownToLineIcon:Qr,ArrowDownUp:Yr,ArrowDownUpIcon:Yr,ArrowDownWideNarrow:Zt,ArrowDownWideNarrowIcon:Zt,ArrowDownZA:_t,ArrowDownZAIcon:_t,ArrowDownZa:_t,ArrowDownZaIcon:_t,ArrowLeft:Da,ArrowLeftCircle:eo,ArrowLeftCircleIcon:eo,ArrowLeftFromLine:to,ArrowLeftFromLineIcon:to,ArrowLeftIcon:Da,ArrowLeftRight:ao,ArrowLeftRightIcon:ao,ArrowLeftSquare:no,ArrowLeftSquareIcon:no,ArrowLeftToLine:ro,ArrowLeftToLineIcon:ro,ArrowRight:ho,ArrowRightCircle:oo,ArrowRightCircleIcon:oo,ArrowRightFromLine:co,ArrowRightFromLineIcon:co,ArrowRightIcon:ho,ArrowRightLeft:io,ArrowRightLeftIcon:io,ArrowRightSquare:lo,ArrowRightSquareIcon:lo,ArrowRightToLine:so,ArrowRightToLineIcon:so,ArrowUp:qo,ArrowUp01:uo,ArrowUp01Icon:uo,ArrowUp10:yo,ArrowUp10Icon:yo,ArrowUpAZ:Wt,ArrowUpAZIcon:Wt,ArrowUpAz:Wt,ArrowUpAzIcon:Wt,ArrowUpCircle:po,ArrowUpCircleIcon:po,ArrowUpDown:ko,ArrowUpDownIcon:ko,ArrowUpFromDot:mo,ArrowUpFromDotIcon:mo,ArrowUpFromLine:xo,ArrowUpFromLineIcon:xo,ArrowUpIcon:qo,ArrowUpLeft:Mo,ArrowUpLeftFromCircle:go,ArrowUpLeftFromCircleIcon:go,ArrowUpLeftFromSquare:fo,ArrowUpLeftFromSquareIcon:fo,ArrowUpLeftIcon:Mo,ArrowUpLeftSquare:vo,ArrowUpLeftSquareIcon:vo,ArrowUpNarrowWide:Gt,ArrowUpNarrowWideIcon:Gt,ArrowUpRight:Co,ArrowUpRightFromCircle:wo,ArrowUpRightFromCircleIcon:wo,ArrowUpRightFromSquare:Lo,ArrowUpRightFromSquareIcon:Lo,ArrowUpRightIcon:Co,ArrowUpRightSquare:bo,ArrowUpRightSquareIcon:bo,ArrowUpSquare:So,ArrowUpSquareIcon:So,ArrowUpToLine:jo,ArrowUpToLineIcon:jo,ArrowUpWideNarrow:Io,ArrowUpWideNarrowIcon:Io,ArrowUpZA:$t,ArrowUpZAIcon:$t,ArrowUpZa:$t,ArrowUpZaIcon:$t,ArrowsUpFromLine:zo,ArrowsUpFromLineIcon:zo,Asterisk:Po,AsteriskIcon:Po,AsteriskSquare:Xt,AsteriskSquareIcon:Xt,AtSign:Fo,AtSignIcon:Fo,Atom:Ao,AtomIcon:Ao,AudioLines:Ho,AudioLinesIcon:Ho,AudioWaveform:No,AudioWaveformIcon:No,Award:Vo,AwardIcon:Vo,Axe:Ro,AxeIcon:Ro,Axis3D:Kt,Axis3DIcon:Kt,Axis3d:Kt,Axis3dIcon:Kt,Baby:Do,BabyIcon:Do,Backpack:To,BackpackIcon:To,Badge:tc,BadgeAlert:Bo,BadgeAlertIcon:Bo,BadgeCent:Eo,BadgeCentIcon:Eo,BadgeCheck:Qt,BadgeCheckIcon:Qt,BadgeDollarSign:Uo,BadgeDollarSignIcon:Uo,BadgeEuro:Oo,BadgeEuroIcon:Oo,BadgeHelp:Zo,BadgeHelpIcon:Zo,BadgeIcon:tc,BadgeIndianRupee:_o,BadgeIndianRupeeIcon:_o,BadgeInfo:Wo,BadgeInfoIcon:Wo,BadgeJapaneseYen:Go,BadgeJapaneseYenIcon:Go,BadgeMinus:$o,BadgeMinusIcon:$o,BadgePercent:Xo,BadgePercentIcon:Xo,BadgePlus:Ko,BadgePlusIcon:Ko,BadgePoundSterling:Qo,BadgePoundSterlingIcon:Qo,BadgeRussianRuble:Yo,BadgeRussianRubleIcon:Yo,BadgeSwissFranc:Jo,BadgeSwissFrancIcon:Jo,BadgeX:ec,BadgeXIcon:ec,BaggageClaim:ac,BaggageClaimIcon:ac,Ban:nc,BanIcon:nc,Banana:rc,BananaIcon:rc,Banknote:oc,BanknoteIcon:oc,BarChart:uc,BarChart2:cc,BarChart2Icon:cc,BarChart3:ic,BarChart3Icon:ic,BarChart4:lc,BarChart4Icon:lc,BarChartBig:dc,BarChartBigIcon:dc,BarChartHorizontal:hc,BarChartHorizontalBig:sc,BarChartHorizontalBigIcon:sc,BarChartHorizontalIcon:hc,BarChartIcon:uc,Barcode:yc,BarcodeIcon:yc,Baseline:pc,BaselineIcon:pc,Bath:kc,BathIcon:kc,Battery:Mc,BatteryCharging:mc,BatteryChargingIcon:mc,BatteryFull:xc,BatteryFullIcon:xc,BatteryIcon:Mc,BatteryLow:gc,BatteryLowIcon:gc,BatteryMedium:fc,BatteryMediumIcon:fc,BatteryWarning:vc,BatteryWarningIcon:vc,Beaker:wc,BeakerIcon:wc,Bean:bc,BeanIcon:bc,BeanOff:Lc,BeanOffIcon:Lc,Bed:jc,BedDouble:Cc,BedDoubleIcon:Cc,BedIcon:jc,BedSingle:Sc,BedSingleIcon:Sc,Beef:Ic,BeefIcon:Ic,Beer:qc,BeerIcon:qc,Bell:Vc,BellDot:zc,BellDotIcon:zc,BellElectric:Pc,BellElectricIcon:Pc,BellIcon:Vc,BellMinus:Fc,BellMinusIcon:Fc,BellOff:Ac,BellOffIcon:Ac,BellPlus:Hc,BellPlusIcon:Hc,BellRing:Nc,BellRingIcon:Nc,BetweenHorizonalEnd:Yt,BetweenHorizonalEndIcon:Yt,BetweenHorizonalStart:Jt,BetweenHorizonalStartIcon:Jt,BetweenHorizontalEnd:Yt,BetweenHorizontalEndIcon:Yt,BetweenHorizontalStart:Jt,BetweenHorizontalStartIcon:Jt,BetweenVerticalEnd:Rc,BetweenVerticalEndIcon:Rc,BetweenVerticalStart:Dc,BetweenVerticalStartIcon:Dc,Bike:Tc,BikeIcon:Tc,Binary:Bc,BinaryIcon:Bc,Biohazard:Ec,BiohazardIcon:Ec,Bird:Uc,BirdIcon:Uc,Bitcoin:Oc,BitcoinIcon:Oc,Blend:Zc,BlendIcon:Zc,Blinds:_c,BlindsIcon:_c,Blocks:Wc,BlocksIcon:Wc,Bluetooth:Kc,BluetoothConnected:Gc,BluetoothConnectedIcon:Gc,BluetoothIcon:Kc,BluetoothOff:$c,BluetoothOffIcon:$c,BluetoothSearching:Xc,BluetoothSearchingIcon:Xc,Bold:Qc,BoldIcon:Qc,Bolt:Yc,BoltIcon:Yc,Bomb:Jc,BombIcon:Jc,Bone:ei,BoneIcon:ei,Book:Li,BookA:ti,BookAIcon:ti,BookAudio:ai,BookAudioIcon:ai,BookCheck:ni,BookCheckIcon:ni,BookCopy:ri,BookCopyIcon:ri,BookDashed:e1,BookDashedIcon:e1,BookDown:oi,BookDownIcon:oi,BookHeadphones:ci,BookHeadphonesIcon:ci,BookHeart:ii,BookHeartIcon:ii,BookIcon:Li,BookImage:li,BookImageIcon:li,BookKey:di,BookKeyIcon:di,BookLock:si,BookLockIcon:si,BookMarked:hi,BookMarkedIcon:hi,BookMinus:ui,BookMinusIcon:ui,BookOpen:ki,BookOpenCheck:yi,BookOpenCheckIcon:yi,BookOpenIcon:ki,BookOpenText:pi,BookOpenTextIcon:pi,BookPlus:mi,BookPlusIcon:mi,BookTemplate:e1,BookTemplateIcon:e1,BookText:xi,BookTextIcon:xi,BookType:gi,BookTypeIcon:gi,BookUp:vi,BookUp2:fi,BookUp2Icon:fi,BookUpIcon:vi,BookUser:Mi,BookUserIcon:Mi,BookX:wi,BookXIcon:wi,Bookmark:Ii,BookmarkCheck:bi,BookmarkCheckIcon:bi,BookmarkIcon:Ii,BookmarkMinus:Ci,BookmarkMinusIcon:Ci,BookmarkPlus:Si,BookmarkPlusIcon:Si,BookmarkX:ji,BookmarkXIcon:ji,BoomBox:qi,BoomBoxIcon:qi,Bot:Pi,BotIcon:Pi,BotMessageSquare:zi,BotMessageSquareIcon:zi,Box:Ai,BoxIcon:Ai,BoxSelect:Fi,BoxSelectIcon:Fi,Boxes:Hi,BoxesIcon:Hi,Braces:t1,BracesIcon:t1,Brackets:Ni,BracketsIcon:Ni,Brain:Di,BrainCircuit:Vi,BrainCircuitIcon:Vi,BrainCog:Ri,BrainCogIcon:Ri,BrainIcon:Di,BrickWall:Ti,BrickWallIcon:Ti,Briefcase:Bi,BriefcaseIcon:Bi,BringToFront:Ei,BringToFrontIcon:Ei,Brush:Ui,BrushIcon:Ui,Bug:_i,BugIcon:_i,BugOff:Oi,BugOffIcon:Oi,BugPlay:Zi,BugPlayIcon:Zi,Building:Gi,Building2:Wi,Building2Icon:Wi,BuildingIcon:Gi,Bus:Xi,BusFront:$i,BusFrontIcon:$i,BusIcon:Xi,Cable:Qi,CableCar:Ki,CableCarIcon:Ki,CableIcon:Qi,Cake:Ji,CakeIcon:Ji,CakeSlice:Yi,CakeSliceIcon:Yi,Calculator:ia,CalculatorIcon:ia,Calendar:kl,CalendarCheck:tl,CalendarCheck2:el,CalendarCheck2Icon:el,CalendarCheckIcon:tl,CalendarClock:al,CalendarClockIcon:al,CalendarDays:nl,CalendarDaysIcon:nl,CalendarFold:rl,CalendarFoldIcon:rl,CalendarHeart:ol,CalendarHeartIcon:ol,CalendarIcon:kl,CalendarMinus:il,CalendarMinus2:cl,CalendarMinus2Icon:cl,CalendarMinusIcon:il,CalendarOff:ll,CalendarOffIcon:ll,CalendarPlus:sl,CalendarPlus2:dl,CalendarPlus2Icon:dl,CalendarPlusIcon:sl,CalendarRange:hl,CalendarRangeIcon:hl,CalendarSearch:ul,CalendarSearchIcon:ul,CalendarX:pl,CalendarX2:yl,CalendarX2Icon:yl,CalendarXIcon:pl,Camera:xl,CameraIcon:xl,CameraOff:ml,CameraOffIcon:ml,CandlestickChart:gl,CandlestickChartIcon:gl,Candy:Ml,CandyCane:fl,CandyCaneIcon:fl,CandyIcon:Ml,CandyOff:vl,CandyOffIcon:vl,Captions:a1,CaptionsIcon:a1,CaptionsOff:wl,CaptionsOffIcon:wl,Car:Cl,CarFront:Ll,CarFrontIcon:Ll,CarIcon:Cl,CarTaxiFront:bl,CarTaxiFrontIcon:bl,Caravan:Sl,CaravanIcon:Sl,Carrot:jl,CarrotIcon:jl,CaseLower:Il,CaseLowerIcon:Il,CaseSensitive:ql,CaseSensitiveIcon:ql,CaseUpper:zl,CaseUpperIcon:zl,CassetteTape:Pl,CassetteTapeIcon:Pl,Cast:Fl,CastIcon:Fl,Castle:Al,CastleIcon:Al,Cat:Hl,CatIcon:Hl,Cctv:Nl,CctvIcon:Nl,Check:El,CheckCheck:Vl,CheckCheckIcon:Vl,CheckCircle:Dl,CheckCircle2:Rl,CheckCircle2Icon:Rl,CheckCircleIcon:Dl,CheckIcon:El,CheckSquare:Bl,CheckSquare2:Tl,CheckSquare2Icon:Tl,CheckSquareIcon:Bl,ChefHat:Ul,ChefHatIcon:Ul,Cherry:Ol,CherryIcon:Ol,ChevronDown:Wl,ChevronDownCircle:Zl,ChevronDownCircleIcon:Zl,ChevronDownIcon:Wl,ChevronDownSquare:_l,ChevronDownSquareIcon:_l,ChevronFirst:Gl,ChevronFirstIcon:Gl,ChevronLast:$l,ChevronLastIcon:$l,ChevronLeft:Ql,ChevronLeftCircle:Xl,ChevronLeftCircleIcon:Xl,ChevronLeftIcon:Ql,ChevronLeftSquare:Kl,ChevronLeftSquareIcon:Kl,ChevronRight:e0,ChevronRightCircle:Yl,ChevronRightCircleIcon:Yl,ChevronRightIcon:e0,ChevronRightSquare:Jl,ChevronRightSquareIcon:Jl,ChevronUp:n0,ChevronUpCircle:t0,ChevronUpCircleIcon:t0,ChevronUpIcon:n0,ChevronUpSquare:a0,ChevronUpSquareIcon:a0,ChevronsDown:o0,ChevronsDownIcon:o0,ChevronsDownUp:r0,ChevronsDownUpIcon:r0,ChevronsLeft:i0,ChevronsLeftIcon:i0,ChevronsLeftRight:c0,ChevronsLeftRightIcon:c0,ChevronsRight:d0,ChevronsRightIcon:d0,ChevronsRightLeft:l0,ChevronsRightLeftIcon:l0,ChevronsUp:h0,ChevronsUpDown:s0,ChevronsUpDownIcon:s0,ChevronsUpIcon:h0,Chrome:u0,ChromeIcon:u0,Church:y0,ChurchIcon:y0,Cigarette:k0,CigaretteIcon:k0,CigaretteOff:p0,CigaretteOffIcon:p0,Circle:C0,CircleDashed:m0,CircleDashedIcon:m0,CircleDollarSign:x0,CircleDollarSignIcon:x0,CircleDot:f0,CircleDotDashed:g0,CircleDotDashedIcon:g0,CircleDotIcon:f0,CircleEllipsis:v0,CircleEllipsisIcon:v0,CircleEqual:M0,CircleEqualIcon:M0,CircleFadingPlus:w0,CircleFadingPlusIcon:w0,CircleIcon:C0,CircleOff:L0,CircleOffIcon:L0,CircleSlash:b0,CircleSlash2:n1,CircleSlash2Icon:n1,CircleSlashIcon:b0,CircleSlashed:n1,CircleSlashedIcon:n1,CircleUser:o1,CircleUserIcon:o1,CircleUserRound:r1,CircleUserRoundIcon:r1,CircuitBoard:S0,CircuitBoardIcon:S0,Citrus:j0,CitrusIcon:j0,Clapperboard:I0,ClapperboardIcon:I0,Clipboard:R0,ClipboardCheck:q0,ClipboardCheckIcon:q0,ClipboardCopy:z0,ClipboardCopyIcon:z0,ClipboardEdit:i1,ClipboardEditIcon:i1,ClipboardIcon:R0,ClipboardList:P0,ClipboardListIcon:P0,ClipboardMinus:F0,ClipboardMinusIcon:F0,ClipboardPaste:A0,ClipboardPasteIcon:A0,ClipboardPen:i1,ClipboardPenIcon:i1,ClipboardPenLine:c1,ClipboardPenLineIcon:c1,ClipboardPlus:H0,ClipboardPlusIcon:H0,ClipboardSignature:c1,ClipboardSignatureIcon:c1,ClipboardType:N0,ClipboardTypeIcon:N0,ClipboardX:V0,ClipboardXIcon:V0,Clock:K0,Clock1:D0,Clock10:T0,Clock10Icon:T0,Clock11:B0,Clock11Icon:B0,Clock12:E0,Clock12Icon:E0,Clock1Icon:D0,Clock2:U0,Clock2Icon:U0,Clock3:O0,Clock3Icon:O0,Clock4:Z0,Clock4Icon:Z0,Clock5:_0,Clock5Icon:_0,Clock6:W0,Clock6Icon:W0,Clock7:G0,Clock7Icon:G0,Clock8:$0,Clock8Icon:$0,Clock9:X0,Clock9Icon:X0,ClockIcon:K0,Cloud:sd,CloudCog:Q0,CloudCogIcon:Q0,CloudDrizzle:Y0,CloudDrizzleIcon:Y0,CloudFog:J0,CloudFogIcon:J0,CloudHail:ed,CloudHailIcon:ed,CloudIcon:sd,CloudLightning:td,CloudLightningIcon:td,CloudMoon:nd,CloudMoonIcon:nd,CloudMoonRain:ad,CloudMoonRainIcon:ad,CloudOff:rd,CloudOffIcon:rd,CloudRain:cd,CloudRainIcon:cd,CloudRainWind:od,CloudRainWindIcon:od,CloudSnow:id,CloudSnowIcon:id,CloudSun:dd,CloudSunIcon:dd,CloudSunRain:ld,CloudSunRainIcon:ld,Cloudy:hd,CloudyIcon:hd,Clover:ud,CloverIcon:ud,Club:yd,ClubIcon:yd,Code:kd,Code2:pd,Code2Icon:pd,CodeIcon:kd,CodeSquare:l1,CodeSquareIcon:l1,Codepen:md,CodepenIcon:md,Codesandbox:xd,CodesandboxIcon:xd,Coffee:gd,CoffeeIcon:gd,Cog:fd,CogIcon:fd,Coins:vd,CoinsIcon:vd,Columns:d1,Columns2:d1,Columns2Icon:d1,Columns3:s1,Columns3Icon:s1,Columns4:Md,Columns4Icon:Md,ColumnsIcon:d1,Combine:wd,CombineIcon:wd,Command:Ld,CommandIcon:Ld,Compass:bd,CompassIcon:bd,Component:Cd,ComponentIcon:Cd,Computer:Sd,ComputerIcon:Sd,ConciergeBell:jd,ConciergeBellIcon:jd,Cone:Id,ConeIcon:Id,Construction:qd,ConstructionIcon:qd,Contact:Pd,Contact2:zd,Contact2Icon:zd,ContactIcon:Pd,Container:Fd,ContainerIcon:Fd,Contrast:Ad,ContrastIcon:Ad,Cookie:Hd,CookieIcon:Hd,CookingPot:Nd,CookingPotIcon:Nd,Copy:Ed,CopyCheck:Vd,CopyCheckIcon:Vd,CopyIcon:Ed,CopyMinus:Rd,CopyMinusIcon:Rd,CopyPlus:Dd,CopyPlusIcon:Dd,CopySlash:Td,CopySlashIcon:Td,CopyX:Bd,CopyXIcon:Bd,Copyleft:Ud,CopyleftIcon:Ud,Copyright:Od,CopyrightIcon:Od,CornerDownLeft:Zd,CornerDownLeftIcon:Zd,CornerDownRight:_d,CornerDownRightIcon:_d,CornerLeftDown:Wd,CornerLeftDownIcon:Wd,CornerLeftUp:Gd,CornerLeftUpIcon:Gd,CornerRightDown:$d,CornerRightDownIcon:$d,CornerRightUp:Xd,CornerRightUpIcon:Xd,CornerUpLeft:Kd,CornerUpLeftIcon:Kd,CornerUpRight:Qd,CornerUpRightIcon:Qd,Cpu:Yd,CpuIcon:Yd,CreativeCommons:Jd,CreativeCommonsIcon:Jd,CreditCard:es,CreditCardIcon:es,Croissant:ts,CroissantIcon:ts,Crop:as,CropIcon:as,Cross:ns,CrossIcon:ns,Crosshair:rs,CrosshairIcon:rs,Crown:os,CrownIcon:os,Cuboid:cs,CuboidIcon:cs,CupSoda:is,CupSodaIcon:is,CurlyBraces:t1,CurlyBracesIcon:t1,Currency:ls,CurrencyIcon:ls,Cylinder:ds,CylinderIcon:ds,Database:us,DatabaseBackup:ss,DatabaseBackupIcon:ss,DatabaseIcon:us,DatabaseZap:hs,DatabaseZapIcon:hs,Delete:ys,DeleteIcon:ys,Dessert:ps,DessertIcon:ps,Diameter:ks,DiameterIcon:ks,Diamond:ms,DiamondIcon:ms,Dice1:xs,Dice1Icon:xs,Dice2:gs,Dice2Icon:gs,Dice3:fs,Dice3Icon:fs,Dice4:vs,Dice4Icon:vs,Dice5:Ms,Dice5Icon:Ms,Dice6:ws,Dice6Icon:ws,Dices:Ls,DicesIcon:Ls,Diff:bs,DiffIcon:bs,Disc:Is,Disc2:Cs,Disc2Icon:Cs,Disc3:Ss,Disc3Icon:Ss,DiscAlbum:js,DiscAlbumIcon:js,DiscIcon:Is,Divide:Ps,DivideCircle:qs,DivideCircleIcon:qs,DivideIcon:Ps,DivideSquare:zs,DivideSquareIcon:zs,Dna:As,DnaIcon:As,DnaOff:Fs,DnaOffIcon:Fs,Dog:Hs,DogIcon:Hs,DollarSign:Ns,DollarSignIcon:Ns,Donut:Vs,DonutIcon:Vs,DoorClosed:Rs,DoorClosedIcon:Rs,DoorOpen:Ds,DoorOpenIcon:Ds,Dot:Ts,DotIcon:Ts,DotSquare:h1,DotSquareIcon:h1,Download:Es,DownloadCloud:Bs,DownloadCloudIcon:Bs,DownloadIcon:Es,DraftingCompass:Us,DraftingCompassIcon:Us,Drama:Os,DramaIcon:Os,Dribbble:Zs,DribbbleIcon:Zs,Drill:_s,DrillIcon:_s,Droplet:Ws,DropletIcon:Ws,Droplets:Gs,DropletsIcon:Gs,Drum:$s,DrumIcon:$s,Drumstick:Xs,DrumstickIcon:Xs,Dumbbell:Ks,DumbbellIcon:Ks,Ear:Ys,EarIcon:Ys,EarOff:Qs,EarOffIcon:Qs,Earth:u1,EarthIcon:u1,EarthLock:Js,EarthLockIcon:Js,Eclipse:eh,EclipseIcon:eh,Edit:Ce,Edit2:V1,Edit2Icon:V1,Edit3:N1,Edit3Icon:N1,EditIcon:Ce,Egg:nh,EggFried:th,EggFriedIcon:th,EggIcon:nh,EggOff:ah,EggOffIcon:ah,Equal:oh,EqualIcon:oh,EqualNot:rh,EqualNotIcon:rh,EqualSquare:y1,EqualSquareIcon:y1,Eraser:ch,EraserIcon:ch,Euro:ih,EuroIcon:ih,Expand:lh,ExpandIcon:lh,ExternalLink:dh,ExternalLinkIcon:dh,Eye:hh,EyeIcon:hh,EyeOff:sh,EyeOffIcon:sh,Facebook:uh,FacebookIcon:uh,Factory:yh,FactoryIcon:yh,Fan:ph,FanIcon:ph,FastForward:kh,FastForwardIcon:kh,Feather:mh,FeatherIcon:mh,Fence:xh,FenceIcon:xh,FerrisWheel:gh,FerrisWheelIcon:gh,Figma:fh,FigmaIcon:fh,File:fu,FileArchive:vh,FileArchiveIcon:vh,FileAudio:wh,FileAudio2:Mh,FileAudio2Icon:Mh,FileAudioIcon:wh,FileAxis3D:p1,FileAxis3DIcon:p1,FileAxis3d:p1,FileAxis3dIcon:p1,FileBadge:bh,FileBadge2:Lh,FileBadge2Icon:Lh,FileBadgeIcon:bh,FileBarChart:Sh,FileBarChart2:Ch,FileBarChart2Icon:Ch,FileBarChartIcon:Sh,FileBox:jh,FileBoxIcon:jh,FileCheck:qh,FileCheck2:Ih,FileCheck2Icon:Ih,FileCheckIcon:qh,FileClock:zh,FileClockIcon:zh,FileCode:Fh,FileCode2:Ph,FileCode2Icon:Ph,FileCodeIcon:Fh,FileCog:k1,FileCog2:k1,FileCog2Icon:k1,FileCogIcon:k1,FileDiff:Ah,FileDiffIcon:Ah,FileDigit:Hh,FileDigitIcon:Hh,FileDown:Nh,FileDownIcon:Nh,FileEdit:x1,FileEditIcon:x1,FileHeart:Vh,FileHeartIcon:Vh,FileIcon:fu,FileImage:Rh,FileImageIcon:Rh,FileInput:Dh,FileInputIcon:Dh,FileJson:Bh,FileJson2:Th,FileJson2Icon:Th,FileJsonIcon:Bh,FileKey:Uh,FileKey2:Eh,FileKey2Icon:Eh,FileKeyIcon:Uh,FileLineChart:Oh,FileLineChartIcon:Oh,FileLock:_h,FileLock2:Zh,FileLock2Icon:Zh,FileLockIcon:_h,FileMinus:Gh,FileMinus2:Wh,FileMinus2Icon:Wh,FileMinusIcon:Gh,FileMusic:$h,FileMusicIcon:$h,FileOutput:Xh,FileOutputIcon:Xh,FilePen:x1,FilePenIcon:x1,FilePenLine:m1,FilePenLineIcon:m1,FilePieChart:Kh,FilePieChartIcon:Kh,FilePlus:Yh,FilePlus2:Qh,FilePlus2Icon:Qh,FilePlusIcon:Yh,FileQuestion:Jh,FileQuestionIcon:Jh,FileScan:eu,FileScanIcon:eu,FileSearch:au,FileSearch2:tu,FileSearch2Icon:tu,FileSearchIcon:au,FileSignature:m1,FileSignatureIcon:m1,FileSliders:nu,FileSlidersIcon:nu,FileSpreadsheet:ru,FileSpreadsheetIcon:ru,FileStack:ou,FileStackIcon:ou,FileSymlink:cu,FileSymlinkIcon:cu,FileTerminal:iu,FileTerminalIcon:iu,FileText:lu,FileTextIcon:lu,FileType:su,FileType2:du,FileType2Icon:du,FileTypeIcon:su,FileUp:hu,FileUpIcon:hu,FileVideo:yu,FileVideo2:uu,FileVideo2Icon:uu,FileVideoIcon:yu,FileVolume:ku,FileVolume2:pu,FileVolume2Icon:pu,FileVolumeIcon:ku,FileWarning:mu,FileWarningIcon:mu,FileX:gu,FileX2:xu,FileX2Icon:xu,FileXIcon:gu,Files:vu,FilesIcon:vu,Film:Mu,FilmIcon:Mu,Filter:Lu,FilterIcon:Lu,FilterX:wu,FilterXIcon:wu,Fingerprint:bu,FingerprintIcon:bu,FireExtinguisher:Cu,FireExtinguisherIcon:Cu,Fish:Iu,FishIcon:Iu,FishOff:Su,FishOffIcon:Su,FishSymbol:ju,FishSymbolIcon:ju,Flag:Fu,FlagIcon:Fu,FlagOff:qu,FlagOffIcon:qu,FlagTriangleLeft:zu,FlagTriangleLeftIcon:zu,FlagTriangleRight:Pu,FlagTriangleRightIcon:Pu,Flame:Hu,FlameIcon:Hu,FlameKindling:Au,FlameKindlingIcon:Au,Flashlight:Vu,FlashlightIcon:Vu,FlashlightOff:Nu,FlashlightOffIcon:Nu,FlaskConical:Du,FlaskConicalIcon:Du,FlaskConicalOff:Ru,FlaskConicalOffIcon:Ru,FlaskRound:Tu,FlaskRoundIcon:Tu,FlipHorizontal:Eu,FlipHorizontal2:Bu,FlipHorizontal2Icon:Bu,FlipHorizontalIcon:Eu,FlipVertical:Ou,FlipVertical2:Uu,FlipVertical2Icon:Uu,FlipVerticalIcon:Ou,Flower:_u,Flower2:Zu,Flower2Icon:Zu,FlowerIcon:_u,Focus:Wu,FocusIcon:Wu,FoldHorizontal:Gu,FoldHorizontalIcon:Gu,FoldVertical:$u,FoldVerticalIcon:$u,Folder:My,FolderArchive:Xu,FolderArchiveIcon:Xu,FolderCheck:Ku,FolderCheckIcon:Ku,FolderClock:Qu,FolderClockIcon:Qu,FolderClosed:Yu,FolderClosedIcon:Yu,FolderCog:g1,FolderCog2:g1,FolderCog2Icon:g1,FolderCogIcon:g1,FolderDot:Ju,FolderDotIcon:Ju,FolderDown:ey,FolderDownIcon:ey,FolderEdit:f1,FolderEditIcon:f1,FolderGit:ay,FolderGit2:ty,FolderGit2Icon:ty,FolderGitIcon:ay,FolderHeart:ny,FolderHeartIcon:ny,FolderIcon:My,FolderInput:ry,FolderInputIcon:ry,FolderKanban:oy,FolderKanbanIcon:oy,FolderKey:cy,FolderKeyIcon:cy,FolderLock:iy,FolderLockIcon:iy,FolderMinus:ly,FolderMinusIcon:ly,FolderOpen:sy,FolderOpenDot:dy,FolderOpenDotIcon:dy,FolderOpenIcon:sy,FolderOutput:hy,FolderOutputIcon:hy,FolderPen:f1,FolderPenIcon:f1,FolderPlus:uy,FolderPlusIcon:uy,FolderRoot:yy,FolderRootIcon:yy,FolderSearch:ky,FolderSearch2:py,FolderSearch2Icon:py,FolderSearchIcon:ky,FolderSymlink:my,FolderSymlinkIcon:my,FolderSync:xy,FolderSyncIcon:xy,FolderTree:gy,FolderTreeIcon:gy,FolderUp:fy,FolderUpIcon:fy,FolderX:vy,FolderXIcon:vy,Folders:wy,FoldersIcon:wy,Footprints:Ly,FootprintsIcon:Ly,Forklift:by,ForkliftIcon:by,FormInput:Cy,FormInputIcon:Cy,Forward:Sy,ForwardIcon:Sy,Frame:jy,FrameIcon:jy,Framer:Iy,FramerIcon:Iy,Frown:qy,FrownIcon:qy,Fuel:zy,FuelIcon:zy,Fullscreen:Py,FullscreenIcon:Py,FunctionSquare:Fy,FunctionSquareIcon:Fy,GalleryHorizontal:Hy,GalleryHorizontalEnd:Ay,GalleryHorizontalEndIcon:Ay,GalleryHorizontalIcon:Hy,GalleryThumbnails:Ny,GalleryThumbnailsIcon:Ny,GalleryVertical:Ry,GalleryVerticalEnd:Vy,GalleryVerticalEndIcon:Vy,GalleryVerticalIcon:Ry,Gamepad:Ty,Gamepad2:Dy,Gamepad2Icon:Dy,GamepadIcon:Ty,GanttChart:By,GanttChartIcon:By,GanttChartSquare:$e,GanttChartSquareIcon:$e,GanttSquare:$e,GanttSquareIcon:$e,Gauge:Uy,GaugeCircle:Ey,GaugeCircleIcon:Ey,GaugeIcon:Uy,Gavel:Oy,GavelIcon:Oy,Gem:Zy,GemIcon:Zy,Ghost:_y,GhostIcon:_y,Gift:Wy,GiftIcon:Wy,GitBranch:$y,GitBranchIcon:$y,GitBranchPlus:Gy,GitBranchPlusIcon:Gy,GitCommit:v1,GitCommitHorizontal:v1,GitCommitHorizontalIcon:v1,GitCommitIcon:v1,GitCommitVertical:Xy,GitCommitVerticalIcon:Xy,GitCompare:Qy,GitCompareArrows:Ky,GitCompareArrowsIcon:Ky,GitCompareIcon:Qy,GitFork:Yy,GitForkIcon:Yy,GitGraph:Jy,GitGraphIcon:Jy,GitMerge:ep,GitMergeIcon:ep,GitPullRequest:cp,GitPullRequestArrow:tp,GitPullRequestArrowIcon:tp,GitPullRequestClosed:ap,GitPullRequestClosedIcon:ap,GitPullRequestCreate:rp,GitPullRequestCreateArrow:np,GitPullRequestCreateArrowIcon:np,GitPullRequestCreateIcon:rp,GitPullRequestDraft:op,GitPullRequestDraftIcon:op,GitPullRequestIcon:cp,Github:ip,GithubIcon:ip,Gitlab:lp,GitlabIcon:lp,GlassWater:dp,GlassWaterIcon:dp,Glasses:sp,GlassesIcon:sp,Globe:up,Globe2:u1,Globe2Icon:u1,GlobeIcon:up,GlobeLock:hp,GlobeLockIcon:hp,Goal:yp,GoalIcon:yp,Grab:pp,GrabIcon:pp,GraduationCap:kp,GraduationCapIcon:kp,Grape:mp,GrapeIcon:mp,Grid:Xe,Grid2X2:M1,Grid2X2Icon:M1,Grid2x2:M1,Grid2x2Icon:M1,Grid3X3:Xe,Grid3X3Icon:Xe,Grid3x3:Xe,Grid3x3Icon:Xe,GridIcon:Xe,Grip:fp,GripHorizontal:xp,GripHorizontalIcon:xp,GripIcon:fp,GripVertical:gp,GripVerticalIcon:gp,Group:vp,GroupIcon:vp,Guitar:Mp,GuitarIcon:Mp,Hammer:wp,HammerIcon:wp,Hand:jp,HandCoins:Lp,HandCoinsIcon:Lp,HandHeart:bp,HandHeartIcon:bp,HandHelping:w1,HandHelpingIcon:w1,HandIcon:jp,HandMetal:Cp,HandMetalIcon:Cp,HandPlatter:Sp,HandPlatterIcon:Sp,Handshake:Ip,HandshakeIcon:Ip,HardDrive:Pp,HardDriveDownload:qp,HardDriveDownloadIcon:qp,HardDriveIcon:Pp,HardDriveUpload:zp,HardDriveUploadIcon:zp,HardHat:Fp,HardHatIcon:Fp,Hash:Ap,HashIcon:Ap,Haze:Hp,HazeIcon:Hp,HdmiPort:Np,HdmiPortIcon:Np,Heading:Up,Heading1:Vp,Heading1Icon:Vp,Heading2:Rp,Heading2Icon:Rp,Heading3:Dp,Heading3Icon:Dp,Heading4:Tp,Heading4Icon:Tp,Heading5:Bp,Heading5Icon:Bp,Heading6:Ep,Heading6Icon:Ep,HeadingIcon:Up,Headphones:Op,HeadphonesIcon:Op,Headset:Zp,HeadsetIcon:Zp,Heart:Xp,HeartCrack:_p,HeartCrackIcon:_p,HeartHandshake:Wp,HeartHandshakeIcon:Wp,HeartIcon:Xp,HeartOff:Gp,HeartOffIcon:Gp,HeartPulse:$p,HeartPulseIcon:$p,Heater:Kp,HeaterIcon:Kp,HelpCircle:Qp,HelpCircleIcon:Qp,HelpingHand:w1,HelpingHandIcon:w1,Hexagon:Yp,HexagonIcon:Yp,Highlighter:Jp,HighlighterIcon:Jp,History:e4,HistoryIcon:e4,Home:t4,HomeIcon:t4,Hop:n4,HopIcon:n4,HopOff:a4,HopOffIcon:a4,Hotel:r4,HotelIcon:r4,Hourglass:o4,HourglassIcon:o4,IceCream:i4,IceCream2:c4,IceCream2Icon:c4,IceCreamIcon:i4,Image:y4,ImageDown:l4,ImageDownIcon:l4,ImageIcon:y4,ImageMinus:d4,ImageMinusIcon:d4,ImageOff:s4,ImageOffIcon:s4,ImagePlus:h4,ImagePlusIcon:h4,ImageUp:u4,ImageUpIcon:u4,Images:p4,ImagesIcon:p4,Import:k4,ImportIcon:k4,Inbox:m4,InboxIcon:m4,Indent:x4,IndentIcon:x4,IndianRupee:g4,IndianRupeeIcon:g4,Infinity:f4,InfinityIcon:f4,Info:v4,InfoIcon:v4,Inspect:C1,InspectIcon:C1,InspectionPanel:M4,InspectionPanelIcon:M4,Instagram:w4,InstagramIcon:w4,Italic:L4,ItalicIcon:L4,IterationCcw:b4,IterationCcwIcon:b4,IterationCw:C4,IterationCwIcon:C4,JapaneseYen:S4,JapaneseYenIcon:S4,Joystick:j4,JoystickIcon:j4,Kanban:I4,KanbanIcon:I4,KanbanSquare:b1,KanbanSquareDashed:L1,KanbanSquareDashedIcon:L1,KanbanSquareIcon:b1,Key:P4,KeyIcon:P4,KeyRound:q4,KeyRoundIcon:q4,KeySquare:z4,KeySquareIcon:z4,Keyboard:A4,KeyboardIcon:A4,KeyboardMusic:F4,KeyboardMusicIcon:F4,Lamp:T4,LampCeiling:H4,LampCeilingIcon:H4,LampDesk:N4,LampDeskIcon:N4,LampFloor:V4,LampFloorIcon:V4,LampIcon:T4,LampWallDown:R4,LampWallDownIcon:R4,LampWallUp:D4,LampWallUpIcon:D4,LandPlot:B4,LandPlotIcon:B4,Landmark:E4,LandmarkIcon:E4,Languages:U4,LanguagesIcon:U4,Laptop:Z4,Laptop2:O4,Laptop2Icon:O4,LaptopIcon:Z4,Lasso:W4,LassoIcon:W4,LassoSelect:_4,LassoSelectIcon:_4,Laugh:G4,LaughIcon:G4,Layers:K4,Layers2:$4,Layers2Icon:$4,Layers3:X4,Layers3Icon:X4,LayersIcon:K4,Layout:H1,LayoutDashboard:Q4,LayoutDashboardIcon:Q4,LayoutGrid:Y4,LayoutGridIcon:Y4,LayoutIcon:H1,LayoutList:J4,LayoutListIcon:J4,LayoutPanelLeft:ek,LayoutPanelLeftIcon:ek,LayoutPanelTop:tk,LayoutPanelTopIcon:tk,LayoutTemplate:ak,LayoutTemplateIcon:ak,Leaf:nk,LeafIcon:nk,LeafyGreen:rk,LeafyGreenIcon:rk,Library:ik,LibraryBig:ok,LibraryBigIcon:ok,LibraryIcon:ik,LibrarySquare:ck,LibrarySquareIcon:ck,LifeBuoy:lk,LifeBuoyIcon:lk,Ligature:dk,LigatureIcon:dk,Lightbulb:hk,LightbulbIcon:hk,LightbulbOff:sk,LightbulbOffIcon:sk,LineChart:uk,LineChartIcon:uk,Link:kk,Link2:pk,Link2Icon:pk,Link2Off:yk,Link2OffIcon:yk,LinkIcon:kk,Linkedin:mk,LinkedinIcon:mk,List:Pk,ListChecks:xk,ListChecksIcon:xk,ListCollapse:gk,ListCollapseIcon:gk,ListEnd:fk,ListEndIcon:fk,ListFilter:vk,ListFilterIcon:vk,ListIcon:Pk,ListMinus:Mk,ListMinusIcon:Mk,ListMusic:wk,ListMusicIcon:wk,ListOrdered:Lk,ListOrderedIcon:Lk,ListPlus:bk,ListPlusIcon:bk,ListRestart:Ck,ListRestartIcon:Ck,ListStart:Sk,ListStartIcon:Sk,ListTodo:jk,ListTodoIcon:jk,ListTree:Ik,ListTreeIcon:Ik,ListVideo:qk,ListVideoIcon:qk,ListX:zk,ListXIcon:zk,Loader:Ak,Loader2:Fk,Loader2Icon:Fk,LoaderIcon:Ak,Locate:Vk,LocateFixed:Hk,LocateFixedIcon:Hk,LocateIcon:Vk,LocateOff:Nk,LocateOffIcon:Nk,Lock:Dk,LockIcon:Dk,LockKeyhole:Rk,LockKeyholeIcon:Rk,LogIn:Tk,LogInIcon:Tk,LogOut:Bk,LogOutIcon:Bk,Lollipop:Ek,LollipopIcon:Ek,LucideAArrowDown:Cn,LucideAArrowUp:Sn,LucideALargeSmall:jn,LucideAccessibility:In,LucideActivity:zn,LucideActivitySquare:qn,LucideAirVent:Pn,LucideAirplay:Fn,LucideAlarmCheck:Bt,LucideAlarmClock:Hn,LucideAlarmClockCheck:Bt,LucideAlarmClockMinus:Et,LucideAlarmClockOff:An,LucideAlarmClockPlus:Ut,LucideAlarmMinus:Et,LucideAlarmPlus:Ut,LucideAlarmSmoke:Nn,LucideAlbum:Vn,LucideAlertCircle:Rn,LucideAlertOctagon:Dn,LucideAlertTriangle:Tn,LucideAlignCenter:Un,LucideAlignCenterHorizontal:Bn,LucideAlignCenterVertical:En,LucideAlignEndHorizontal:On,LucideAlignEndVertical:Zn,LucideAlignHorizontalDistributeCenter:_n,LucideAlignHorizontalDistributeEnd:Wn,LucideAlignHorizontalDistributeStart:Gn,LucideAlignHorizontalJustifyCenter:$n,LucideAlignHorizontalJustifyEnd:Xn,LucideAlignHorizontalJustifyStart:Kn,LucideAlignHorizontalSpaceAround:Qn,LucideAlignHorizontalSpaceBetween:Yn,LucideAlignJustify:Jn,LucideAlignLeft:er,LucideAlignRight:tr,LucideAlignStartHorizontal:ar,LucideAlignStartVertical:nr,LucideAlignVerticalDistributeCenter:rr,LucideAlignVerticalDistributeEnd:or,LucideAlignVerticalDistributeStart:cr,LucideAlignVerticalJustifyCenter:ir,LucideAlignVerticalJustifyEnd:lr,LucideAlignVerticalJustifyStart:dr,LucideAlignVerticalSpaceAround:sr,LucideAlignVerticalSpaceBetween:hr,LucideAmbulance:ur,LucideAmpersand:yr,LucideAmpersands:pr,LucideAnchor:kr,LucideAngry:mr,LucideAnnoyed:xr,LucideAntenna:gr,LucideAnvil:fr,LucideAperture:vr,LucideAppWindow:Mr,LucideApple:wr,LucideArchive:Cr,LucideArchiveRestore:Lr,LucideArchiveX:br,LucideAreaChart:Sr,LucideArmchair:jr,LucideArrowBigDown:qr,LucideArrowBigDownDash:Ir,LucideArrowBigLeft:Pr,LucideArrowBigLeftDash:zr,LucideArrowBigRight:Ar,LucideArrowBigRightDash:Fr,LucideArrowBigUp:Nr,LucideArrowBigUpDash:Hr,LucideArrowDown:Jr,LucideArrowDown01:Vr,LucideArrowDown10:Rr,LucideArrowDownAZ:Ot,LucideArrowDownAz:Ot,LucideArrowDownCircle:Dr,LucideArrowDownFromLine:Tr,LucideArrowDownLeft:Or,LucideArrowDownLeftFromCircle:Br,LucideArrowDownLeftFromSquare:Er,LucideArrowDownLeftSquare:Ur,LucideArrowDownNarrowWide:Zr,LucideArrowDownRight:$r,LucideArrowDownRightFromCircle:_r,LucideArrowDownRightFromSquare:Wr,LucideArrowDownRightSquare:Gr,LucideArrowDownSquare:Xr,LucideArrowDownToDot:Kr,LucideArrowDownToLine:Qr,LucideArrowDownUp:Yr,LucideArrowDownWideNarrow:Zt,LucideArrowDownZA:_t,LucideArrowDownZa:_t,LucideArrowLeft:Da,LucideArrowLeftCircle:eo,LucideArrowLeftFromLine:to,LucideArrowLeftRight:ao,LucideArrowLeftSquare:no,LucideArrowLeftToLine:ro,LucideArrowRight:ho,LucideArrowRightCircle:oo,LucideArrowRightFromLine:co,LucideArrowRightLeft:io,LucideArrowRightSquare:lo,LucideArrowRightToLine:so,LucideArrowUp:qo,LucideArrowUp01:uo,LucideArrowUp10:yo,LucideArrowUpAZ:Wt,LucideArrowUpAz:Wt,LucideArrowUpCircle:po,LucideArrowUpDown:ko,LucideArrowUpFromDot:mo,LucideArrowUpFromLine:xo,LucideArrowUpLeft:Mo,LucideArrowUpLeftFromCircle:go,LucideArrowUpLeftFromSquare:fo,LucideArrowUpLeftSquare:vo,LucideArrowUpNarrowWide:Gt,LucideArrowUpRight:Co,LucideArrowUpRightFromCircle:wo,LucideArrowUpRightFromSquare:Lo,LucideArrowUpRightSquare:bo,LucideArrowUpSquare:So,LucideArrowUpToLine:jo,LucideArrowUpWideNarrow:Io,LucideArrowUpZA:$t,LucideArrowUpZa:$t,LucideArrowsUpFromLine:zo,LucideAsterisk:Po,LucideAsteriskSquare:Xt,LucideAtSign:Fo,LucideAtom:Ao,LucideAudioLines:Ho,LucideAudioWaveform:No,LucideAward:Vo,LucideAxe:Ro,LucideAxis3D:Kt,LucideAxis3d:Kt,LucideBaby:Do,LucideBackpack:To,LucideBadge:tc,LucideBadgeAlert:Bo,LucideBadgeCent:Eo,LucideBadgeCheck:Qt,LucideBadgeDollarSign:Uo,LucideBadgeEuro:Oo,LucideBadgeHelp:Zo,LucideBadgeIndianRupee:_o,LucideBadgeInfo:Wo,LucideBadgeJapaneseYen:Go,LucideBadgeMinus:$o,LucideBadgePercent:Xo,LucideBadgePlus:Ko,LucideBadgePoundSterling:Qo,LucideBadgeRussianRuble:Yo,LucideBadgeSwissFranc:Jo,LucideBadgeX:ec,LucideBaggageClaim:ac,LucideBan:nc,LucideBanana:rc,LucideBanknote:oc,LucideBarChart:uc,LucideBarChart2:cc,LucideBarChart3:ic,LucideBarChart4:lc,LucideBarChartBig:dc,LucideBarChartHorizontal:hc,LucideBarChartHorizontalBig:sc,LucideBarcode:yc,LucideBaseline:pc,LucideBath:kc,LucideBattery:Mc,LucideBatteryCharging:mc,LucideBatteryFull:xc,LucideBatteryLow:gc,LucideBatteryMedium:fc,LucideBatteryWarning:vc,LucideBeaker:wc,LucideBean:bc,LucideBeanOff:Lc,LucideBed:jc,LucideBedDouble:Cc,LucideBedSingle:Sc,LucideBeef:Ic,LucideBeer:qc,LucideBell:Vc,LucideBellDot:zc,LucideBellElectric:Pc,LucideBellMinus:Fc,LucideBellOff:Ac,LucideBellPlus:Hc,LucideBellRing:Nc,LucideBetweenHorizonalEnd:Yt,LucideBetweenHorizonalStart:Jt,LucideBetweenHorizontalEnd:Yt,LucideBetweenHorizontalStart:Jt,LucideBetweenVerticalEnd:Rc,LucideBetweenVerticalStart:Dc,LucideBike:Tc,LucideBinary:Bc,LucideBiohazard:Ec,LucideBird:Uc,LucideBitcoin:Oc,LucideBlend:Zc,LucideBlinds:_c,LucideBlocks:Wc,LucideBluetooth:Kc,LucideBluetoothConnected:Gc,LucideBluetoothOff:$c,LucideBluetoothSearching:Xc,LucideBold:Qc,LucideBolt:Yc,LucideBomb:Jc,LucideBone:ei,LucideBook:Li,LucideBookA:ti,LucideBookAudio:ai,LucideBookCheck:ni,LucideBookCopy:ri,LucideBookDashed:e1,LucideBookDown:oi,LucideBookHeadphones:ci,LucideBookHeart:ii,LucideBookImage:li,LucideBookKey:di,LucideBookLock:si,LucideBookMarked:hi,LucideBookMinus:ui,LucideBookOpen:ki,LucideBookOpenCheck:yi,LucideBookOpenText:pi,LucideBookPlus:mi,LucideBookTemplate:e1,LucideBookText:xi,LucideBookType:gi,LucideBookUp:vi,LucideBookUp2:fi,LucideBookUser:Mi,LucideBookX:wi,LucideBookmark:Ii,LucideBookmarkCheck:bi,LucideBookmarkMinus:Ci,LucideBookmarkPlus:Si,LucideBookmarkX:ji,LucideBoomBox:qi,LucideBot:Pi,LucideBotMessageSquare:zi,LucideBox:Ai,LucideBoxSelect:Fi,LucideBoxes:Hi,LucideBraces:t1,LucideBrackets:Ni,LucideBrain:Di,LucideBrainCircuit:Vi,LucideBrainCog:Ri,LucideBrickWall:Ti,LucideBriefcase:Bi,LucideBringToFront:Ei,LucideBrush:Ui,LucideBug:_i,LucideBugOff:Oi,LucideBugPlay:Zi,LucideBuilding:Gi,LucideBuilding2:Wi,LucideBus:Xi,LucideBusFront:$i,LucideCable:Qi,LucideCableCar:Ki,LucideCake:Ji,LucideCakeSlice:Yi,LucideCalculator:ia,LucideCalendar:kl,LucideCalendarCheck:tl,LucideCalendarCheck2:el,LucideCalendarClock:al,LucideCalendarDays:nl,LucideCalendarFold:rl,LucideCalendarHeart:ol,LucideCalendarMinus:il,LucideCalendarMinus2:cl,LucideCalendarOff:ll,LucideCalendarPlus:sl,LucideCalendarPlus2:dl,LucideCalendarRange:hl,LucideCalendarSearch:ul,LucideCalendarX:pl,LucideCalendarX2:yl,LucideCamera:xl,LucideCameraOff:ml,LucideCandlestickChart:gl,LucideCandy:Ml,LucideCandyCane:fl,LucideCandyOff:vl,LucideCaptions:a1,LucideCaptionsOff:wl,LucideCar:Cl,LucideCarFront:Ll,LucideCarTaxiFront:bl,LucideCaravan:Sl,LucideCarrot:jl,LucideCaseLower:Il,LucideCaseSensitive:ql,LucideCaseUpper:zl,LucideCassetteTape:Pl,LucideCast:Fl,LucideCastle:Al,LucideCat:Hl,LucideCctv:Nl,LucideCheck:El,LucideCheckCheck:Vl,LucideCheckCircle:Dl,LucideCheckCircle2:Rl,LucideCheckSquare:Bl,LucideCheckSquare2:Tl,LucideChefHat:Ul,LucideCherry:Ol,LucideChevronDown:Wl,LucideChevronDownCircle:Zl,LucideChevronDownSquare:_l,LucideChevronFirst:Gl,LucideChevronLast:$l,LucideChevronLeft:Ql,LucideChevronLeftCircle:Xl,LucideChevronLeftSquare:Kl,LucideChevronRight:e0,LucideChevronRightCircle:Yl,LucideChevronRightSquare:Jl,LucideChevronUp:n0,LucideChevronUpCircle:t0,LucideChevronUpSquare:a0,LucideChevronsDown:o0,LucideChevronsDownUp:r0,LucideChevronsLeft:i0,LucideChevronsLeftRight:c0,LucideChevronsRight:d0,LucideChevronsRightLeft:l0,LucideChevronsUp:h0,LucideChevronsUpDown:s0,LucideChrome:u0,LucideChurch:y0,LucideCigarette:k0,LucideCigaretteOff:p0,LucideCircle:C0,LucideCircleDashed:m0,LucideCircleDollarSign:x0,LucideCircleDot:f0,LucideCircleDotDashed:g0,LucideCircleEllipsis:v0,LucideCircleEqual:M0,LucideCircleFadingPlus:w0,LucideCircleOff:L0,LucideCircleSlash:b0,LucideCircleSlash2:n1,LucideCircleSlashed:n1,LucideCircleUser:o1,LucideCircleUserRound:r1,LucideCircuitBoard:S0,LucideCitrus:j0,LucideClapperboard:I0,LucideClipboard:R0,LucideClipboardCheck:q0,LucideClipboardCopy:z0,LucideClipboardEdit:i1,LucideClipboardList:P0,LucideClipboardMinus:F0,LucideClipboardPaste:A0,LucideClipboardPen:i1,LucideClipboardPenLine:c1,LucideClipboardPlus:H0,LucideClipboardSignature:c1,LucideClipboardType:N0,LucideClipboardX:V0,LucideClock:K0,LucideClock1:D0,LucideClock10:T0,LucideClock11:B0,LucideClock12:E0,LucideClock2:U0,LucideClock3:O0,LucideClock4:Z0,LucideClock5:_0,LucideClock6:W0,LucideClock7:G0,LucideClock8:$0,LucideClock9:X0,LucideCloud:sd,LucideCloudCog:Q0,LucideCloudDrizzle:Y0,LucideCloudFog:J0,LucideCloudHail:ed,LucideCloudLightning:td,LucideCloudMoon:nd,LucideCloudMoonRain:ad,LucideCloudOff:rd,LucideCloudRain:cd,LucideCloudRainWind:od,LucideCloudSnow:id,LucideCloudSun:dd,LucideCloudSunRain:ld,LucideCloudy:hd,LucideClover:ud,LucideClub:yd,LucideCode:kd,LucideCode2:pd,LucideCodeSquare:l1,LucideCodepen:md,LucideCodesandbox:xd,LucideCoffee:gd,LucideCog:fd,LucideCoins:vd,LucideColumns:d1,LucideColumns2:d1,LucideColumns3:s1,LucideColumns4:Md,LucideCombine:wd,LucideCommand:Ld,LucideCompass:bd,LucideComponent:Cd,LucideComputer:Sd,LucideConciergeBell:jd,LucideCone:Id,LucideConstruction:qd,LucideContact:Pd,LucideContact2:zd,LucideContainer:Fd,LucideContrast:Ad,LucideCookie:Hd,LucideCookingPot:Nd,LucideCopy:Ed,LucideCopyCheck:Vd,LucideCopyMinus:Rd,LucideCopyPlus:Dd,LucideCopySlash:Td,LucideCopyX:Bd,LucideCopyleft:Ud,LucideCopyright:Od,LucideCornerDownLeft:Zd,LucideCornerDownRight:_d,LucideCornerLeftDown:Wd,LucideCornerLeftUp:Gd,LucideCornerRightDown:$d,LucideCornerRightUp:Xd,LucideCornerUpLeft:Kd,LucideCornerUpRight:Qd,LucideCpu:Yd,LucideCreativeCommons:Jd,LucideCreditCard:es,LucideCroissant:ts,LucideCrop:as,LucideCross:ns,LucideCrosshair:rs,LucideCrown:os,LucideCuboid:cs,LucideCupSoda:is,LucideCurlyBraces:t1,LucideCurrency:ls,LucideCylinder:ds,LucideDatabase:us,LucideDatabaseBackup:ss,LucideDatabaseZap:hs,LucideDelete:ys,LucideDessert:ps,LucideDiameter:ks,LucideDiamond:ms,LucideDice1:xs,LucideDice2:gs,LucideDice3:fs,LucideDice4:vs,LucideDice5:Ms,LucideDice6:ws,LucideDices:Ls,LucideDiff:bs,LucideDisc:Is,LucideDisc2:Cs,LucideDisc3:Ss,LucideDiscAlbum:js,LucideDivide:Ps,LucideDivideCircle:qs,LucideDivideSquare:zs,LucideDna:As,LucideDnaOff:Fs,LucideDog:Hs,LucideDollarSign:Ns,LucideDonut:Vs,LucideDoorClosed:Rs,LucideDoorOpen:Ds,LucideDot:Ts,LucideDotSquare:h1,LucideDownload:Es,LucideDownloadCloud:Bs,LucideDraftingCompass:Us,LucideDrama:Os,LucideDribbble:Zs,LucideDrill:_s,LucideDroplet:Ws,LucideDroplets:Gs,LucideDrum:$s,LucideDrumstick:Xs,LucideDumbbell:Ks,LucideEar:Ys,LucideEarOff:Qs,LucideEarth:u1,LucideEarthLock:Js,LucideEclipse:eh,LucideEdit:Ce,LucideEdit2:V1,LucideEdit3:N1,LucideEgg:nh,LucideEggFried:th,LucideEggOff:ah,LucideEqual:oh,LucideEqualNot:rh,LucideEqualSquare:y1,LucideEraser:ch,LucideEuro:ih,LucideExpand:lh,LucideExternalLink:dh,LucideEye:hh,LucideEyeOff:sh,LucideFacebook:uh,LucideFactory:yh,LucideFan:ph,LucideFastForward:kh,LucideFeather:mh,LucideFence:xh,LucideFerrisWheel:gh,LucideFigma:fh,LucideFile:fu,LucideFileArchive:vh,LucideFileAudio:wh,LucideFileAudio2:Mh,LucideFileAxis3D:p1,LucideFileAxis3d:p1,LucideFileBadge:bh,LucideFileBadge2:Lh,LucideFileBarChart:Sh,LucideFileBarChart2:Ch,LucideFileBox:jh,LucideFileCheck:qh,LucideFileCheck2:Ih,LucideFileClock:zh,LucideFileCode:Fh,LucideFileCode2:Ph,LucideFileCog:k1,LucideFileCog2:k1,LucideFileDiff:Ah,LucideFileDigit:Hh,LucideFileDown:Nh,LucideFileEdit:x1,LucideFileHeart:Vh,LucideFileImage:Rh,LucideFileInput:Dh,LucideFileJson:Bh,LucideFileJson2:Th,LucideFileKey:Uh,LucideFileKey2:Eh,LucideFileLineChart:Oh,LucideFileLock:_h,LucideFileLock2:Zh,LucideFileMinus:Gh,LucideFileMinus2:Wh,LucideFileMusic:$h,LucideFileOutput:Xh,LucideFilePen:x1,LucideFilePenLine:m1,LucideFilePieChart:Kh,LucideFilePlus:Yh,LucideFilePlus2:Qh,LucideFileQuestion:Jh,LucideFileScan:eu,LucideFileSearch:au,LucideFileSearch2:tu,LucideFileSignature:m1,LucideFileSliders:nu,LucideFileSpreadsheet:ru,LucideFileStack:ou,LucideFileSymlink:cu,LucideFileTerminal:iu,LucideFileText:lu,LucideFileType:su,LucideFileType2:du,LucideFileUp:hu,LucideFileVideo:yu,LucideFileVideo2:uu,LucideFileVolume:ku,LucideFileVolume2:pu,LucideFileWarning:mu,LucideFileX:gu,LucideFileX2:xu,LucideFiles:vu,LucideFilm:Mu,LucideFilter:Lu,LucideFilterX:wu,LucideFingerprint:bu,LucideFireExtinguisher:Cu,LucideFish:Iu,LucideFishOff:Su,LucideFishSymbol:ju,LucideFlag:Fu,LucideFlagOff:qu,LucideFlagTriangleLeft:zu,LucideFlagTriangleRight:Pu,LucideFlame:Hu,LucideFlameKindling:Au,LucideFlashlight:Vu,LucideFlashlightOff:Nu,LucideFlaskConical:Du,LucideFlaskConicalOff:Ru,LucideFlaskRound:Tu,LucideFlipHorizontal:Eu,LucideFlipHorizontal2:Bu,LucideFlipVertical:Ou,LucideFlipVertical2:Uu,LucideFlower:_u,LucideFlower2:Zu,LucideFocus:Wu,LucideFoldHorizontal:Gu,LucideFoldVertical:$u,LucideFolder:My,LucideFolderArchive:Xu,LucideFolderCheck:Ku,LucideFolderClock:Qu,LucideFolderClosed:Yu,LucideFolderCog:g1,LucideFolderCog2:g1,LucideFolderDot:Ju,LucideFolderDown:ey,LucideFolderEdit:f1,LucideFolderGit:ay,LucideFolderGit2:ty,LucideFolderHeart:ny,LucideFolderInput:ry,LucideFolderKanban:oy,LucideFolderKey:cy,LucideFolderLock:iy,LucideFolderMinus:ly,LucideFolderOpen:sy,LucideFolderOpenDot:dy,LucideFolderOutput:hy,LucideFolderPen:f1,LucideFolderPlus:uy,LucideFolderRoot:yy,LucideFolderSearch:ky,LucideFolderSearch2:py,LucideFolderSymlink:my,LucideFolderSync:xy,LucideFolderTree:gy,LucideFolderUp:fy,LucideFolderX:vy,LucideFolders:wy,LucideFootprints:Ly,LucideForklift:by,LucideFormInput:Cy,LucideForward:Sy,LucideFrame:jy,LucideFramer:Iy,LucideFrown:qy,LucideFuel:zy,LucideFullscreen:Py,LucideFunctionSquare:Fy,LucideGalleryHorizontal:Hy,LucideGalleryHorizontalEnd:Ay,LucideGalleryThumbnails:Ny,LucideGalleryVertical:Ry,LucideGalleryVerticalEnd:Vy,LucideGamepad:Ty,LucideGamepad2:Dy,LucideGanttChart:By,LucideGanttChartSquare:$e,LucideGanttSquare:$e,LucideGauge:Uy,LucideGaugeCircle:Ey,LucideGavel:Oy,LucideGem:Zy,LucideGhost:_y,LucideGift:Wy,LucideGitBranch:$y,LucideGitBranchPlus:Gy,LucideGitCommit:v1,LucideGitCommitHorizontal:v1,LucideGitCommitVertical:Xy,LucideGitCompare:Qy,LucideGitCompareArrows:Ky,LucideGitFork:Yy,LucideGitGraph:Jy,LucideGitMerge:ep,LucideGitPullRequest:cp,LucideGitPullRequestArrow:tp,LucideGitPullRequestClosed:ap,LucideGitPullRequestCreate:rp,LucideGitPullRequestCreateArrow:np,LucideGitPullRequestDraft:op,LucideGithub:ip,LucideGitlab:lp,LucideGlassWater:dp,LucideGlasses:sp,LucideGlobe:up,LucideGlobe2:u1,LucideGlobeLock:hp,LucideGoal:yp,LucideGrab:pp,LucideGraduationCap:kp,LucideGrape:mp,LucideGrid:Xe,LucideGrid2X2:M1,LucideGrid2x2:M1,LucideGrid3X3:Xe,LucideGrid3x3:Xe,LucideGrip:fp,LucideGripHorizontal:xp,LucideGripVertical:gp,LucideGroup:vp,LucideGuitar:Mp,LucideHammer:wp,LucideHand:jp,LucideHandCoins:Lp,LucideHandHeart:bp,LucideHandHelping:w1,LucideHandMetal:Cp,LucideHandPlatter:Sp,LucideHandshake:Ip,LucideHardDrive:Pp,LucideHardDriveDownload:qp,LucideHardDriveUpload:zp,LucideHardHat:Fp,LucideHash:Ap,LucideHaze:Hp,LucideHdmiPort:Np,LucideHeading:Up,LucideHeading1:Vp,LucideHeading2:Rp,LucideHeading3:Dp,LucideHeading4:Tp,LucideHeading5:Bp,LucideHeading6:Ep,LucideHeadphones:Op,LucideHeadset:Zp,LucideHeart:Xp,LucideHeartCrack:_p,LucideHeartHandshake:Wp,LucideHeartOff:Gp,LucideHeartPulse:$p,LucideHeater:Kp,LucideHelpCircle:Qp,LucideHelpingHand:w1,LucideHexagon:Yp,LucideHighlighter:Jp,LucideHistory:e4,LucideHome:t4,LucideHop:n4,LucideHopOff:a4,LucideHotel:r4,LucideHourglass:o4,LucideIceCream:i4,LucideIceCream2:c4,LucideImage:y4,LucideImageDown:l4,LucideImageMinus:d4,LucideImageOff:s4,LucideImagePlus:h4,LucideImageUp:u4,LucideImages:p4,LucideImport:k4,LucideInbox:m4,LucideIndent:x4,LucideIndianRupee:g4,LucideInfinity:f4,LucideInfo:v4,LucideInspect:C1,LucideInspectionPanel:M4,LucideInstagram:w4,LucideItalic:L4,LucideIterationCcw:b4,LucideIterationCw:C4,LucideJapaneseYen:S4,LucideJoystick:j4,LucideKanban:I4,LucideKanbanSquare:b1,LucideKanbanSquareDashed:L1,LucideKey:P4,LucideKeyRound:q4,LucideKeySquare:z4,LucideKeyboard:A4,LucideKeyboardMusic:F4,LucideLamp:T4,LucideLampCeiling:H4,LucideLampDesk:N4,LucideLampFloor:V4,LucideLampWallDown:R4,LucideLampWallUp:D4,LucideLandPlot:B4,LucideLandmark:E4,LucideLanguages:U4,LucideLaptop:Z4,LucideLaptop2:O4,LucideLasso:W4,LucideLassoSelect:_4,LucideLaugh:G4,LucideLayers:K4,LucideLayers2:$4,LucideLayers3:X4,LucideLayout:H1,LucideLayoutDashboard:Q4,LucideLayoutGrid:Y4,LucideLayoutList:J4,LucideLayoutPanelLeft:ek,LucideLayoutPanelTop:tk,LucideLayoutTemplate:ak,LucideLeaf:nk,LucideLeafyGreen:rk,LucideLibrary:ik,LucideLibraryBig:ok,LucideLibrarySquare:ck,LucideLifeBuoy:lk,LucideLigature:dk,LucideLightbulb:hk,LucideLightbulbOff:sk,LucideLineChart:uk,LucideLink:kk,LucideLink2:pk,LucideLink2Off:yk,LucideLinkedin:mk,LucideList:Pk,LucideListChecks:xk,LucideListCollapse:gk,LucideListEnd:fk,LucideListFilter:vk,LucideListMinus:Mk,LucideListMusic:wk,LucideListOrdered:Lk,LucideListPlus:bk,LucideListRestart:Ck,LucideListStart:Sk,LucideListTodo:jk,LucideListTree:Ik,LucideListVideo:qk,LucideListX:zk,LucideLoader:Ak,LucideLoader2:Fk,LucideLocate:Vk,LucideLocateFixed:Hk,LucideLocateOff:Nk,LucideLock:Dk,LucideLockKeyhole:Rk,LucideLogIn:Tk,LucideLogOut:Bk,LucideLollipop:Ek,LucideLuggage:Uk,LucideMSquare:Ok,LucideMagnet:Zk,LucideMail:Jk,LucideMailCheck:_k,LucideMailMinus:Wk,LucideMailOpen:Gk,LucideMailPlus:$k,LucideMailQuestion:Xk,LucideMailSearch:Kk,LucideMailWarning:Qk,LucideMailX:Yk,LucideMailbox:e5,LucideMails:t5,LucideMap:o5,LucideMapPin:n5,LucideMapPinOff:a5,LucideMapPinned:r5,LucideMartini:c5,LucideMaximize:l5,LucideMaximize2:i5,LucideMedal:d5,LucideMegaphone:h5,LucideMegaphoneOff:s5,LucideMeh:u5,LucideMemoryStick:y5,LucideMenu:k5,LucideMenuSquare:p5,LucideMerge:m5,LucideMessageCircle:j5,LucideMessageCircleCode:x5,LucideMessageCircleDashed:g5,LucideMessageCircleHeart:f5,LucideMessageCircleMore:v5,LucideMessageCircleOff:M5,LucideMessageCirclePlus:w5,LucideMessageCircleQuestion:L5,LucideMessageCircleReply:b5,LucideMessageCircleWarning:C5,LucideMessageCircleX:S5,LucideMessageSquare:U5,LucideMessageSquareCode:I5,LucideMessageSquareDashed:q5,LucideMessageSquareDiff:z5,LucideMessageSquareDot:P5,LucideMessageSquareHeart:F5,LucideMessageSquareMore:A5,LucideMessageSquareOff:H5,LucideMessageSquarePlus:N5,LucideMessageSquareQuote:V5,LucideMessageSquareReply:R5,LucideMessageSquareShare:D5,LucideMessageSquareText:T5,LucideMessageSquareWarning:B5,LucideMessageSquareX:E5,LucideMessagesSquare:O5,LucideMic:W5,LucideMic2:Z5,LucideMicOff:_5,LucideMicroscope:G5,LucideMicrowave:$5,LucideMilestone:X5,LucideMilk:Q5,LucideMilkOff:K5,LucideMinimize:J5,LucideMinimize2:Y5,LucideMinus:a3,LucideMinusCircle:e3,LucideMinusSquare:t3,LucideMonitor:p3,LucideMonitorCheck:n3,LucideMonitorDot:r3,LucideMonitorDown:o3,LucideMonitorOff:c3,LucideMonitorPause:i3,LucideMonitorPlay:l3,LucideMonitorSmartphone:d3,LucideMonitorSpeaker:s3,LucideMonitorStop:h3,LucideMonitorUp:u3,LucideMonitorX:y3,LucideMoon:m3,LucideMoonStar:k3,LucideMoreHorizontal:x3,LucideMoreVertical:g3,LucideMountain:v3,LucideMountainSnow:f3,LucideMouse:C3,LucideMousePointer:b3,LucideMousePointer2:M3,LucideMousePointerClick:w3,LucideMousePointerSquare:C1,LucideMousePointerSquareDashed:L3,LucideMove:D3,LucideMove3D:S1,LucideMove3d:S1,LucideMoveDiagonal:j3,LucideMoveDiagonal2:S3,LucideMoveDown:z3,LucideMoveDownLeft:I3,LucideMoveDownRight:q3,LucideMoveHorizontal:P3,LucideMoveLeft:F3,LucideMoveRight:A3,LucideMoveUp:V3,LucideMoveUpLeft:H3,LucideMoveUpRight:N3,LucideMoveVertical:R3,LucideMusic:U3,LucideMusic2:T3,LucideMusic3:B3,LucideMusic4:E3,LucideNavigation:W3,LucideNavigation2:Z3,LucideNavigation2Off:O3,LucideNavigationOff:_3,LucideNetwork:G3,LucideNewspaper:$3,LucideNfc:X3,LucideNotebook:J3,LucideNotebookPen:K3,LucideNotebookTabs:Q3,LucideNotebookText:Y3,LucideNotepadText:tm,LucideNotepadTextDashed:em,LucideNut:nm,LucideNutOff:am,LucideOctagon:rm,LucideOption:om,LucideOrbit:cm,LucideOutdent:im,LucidePackage:km,LucidePackage2:lm,LucidePackageCheck:dm,LucidePackageMinus:sm,LucidePackageOpen:hm,LucidePackagePlus:um,LucidePackageSearch:ym,LucidePackageX:pm,LucidePaintBucket:mm,LucidePaintRoller:xm,LucidePaintbrush:fm,LucidePaintbrush2:gm,LucidePalette:vm,LucidePalmtree:Mm,LucidePanelBottom:bm,LucidePanelBottomClose:wm,LucidePanelBottomDashed:j1,LucidePanelBottomInactive:j1,LucidePanelBottomOpen:Lm,LucidePanelLeft:P1,LucidePanelLeftClose:I1,LucidePanelLeftDashed:q1,LucidePanelLeftInactive:q1,LucidePanelLeftOpen:z1,LucidePanelRight:jm,LucidePanelRightClose:Cm,LucidePanelRightDashed:F1,LucidePanelRightInactive:F1,LucidePanelRightOpen:Sm,LucidePanelTop:zm,LucidePanelTopClose:Im,LucidePanelTopDashed:A1,LucidePanelTopInactive:A1,LucidePanelTopOpen:qm,LucidePanelsLeftBottom:Pm,LucidePanelsLeftRight:s1,LucidePanelsRightBottom:Fm,LucidePanelsTopBottom:T1,LucidePanelsTopLeft:H1,LucidePaperclip:Am,LucideParentheses:Hm,LucideParkingCircle:Vm,LucideParkingCircleOff:Nm,LucideParkingMeter:Rm,LucideParkingSquare:Tm,LucideParkingSquareOff:Dm,LucidePartyPopper:Bm,LucidePause:Om,LucidePauseCircle:Em,LucidePauseOctagon:Um,LucidePawPrint:Zm,LucidePcCase:_m,LucidePen:V1,LucidePenBox:Ce,LucidePenLine:N1,LucidePenSquare:Ce,LucidePenTool:Wm,LucidePencil:Xm,LucidePencilLine:Gm,LucidePencilRuler:$m,LucidePentagon:Km,LucidePercent:e6,LucidePercentCircle:Qm,LucidePercentDiamond:Ym,LucidePercentSquare:Jm,LucidePersonStanding:t6,LucidePhone:l6,LucidePhoneCall:a6,LucidePhoneForwarded:n6,LucidePhoneIncoming:r6,LucidePhoneMissed:o6,LucidePhoneOff:c6,LucidePhoneOutgoing:i6,LucidePi:s6,LucidePiSquare:d6,LucidePiano:h6,LucidePickaxe:u6,LucidePictureInPicture:p6,LucidePictureInPicture2:y6,LucidePieChart:k6,LucidePiggyBank:m6,LucidePilcrow:g6,LucidePilcrowSquare:x6,LucidePill:f6,LucidePin:M6,LucidePinOff:v6,LucidePipette:w6,LucidePizza:L6,LucidePlane:S6,LucidePlaneLanding:b6,LucidePlaneTakeoff:C6,LucidePlay:q6,LucidePlayCircle:j6,LucidePlaySquare:I6,LucidePlug:A6,LucidePlug2:z6,LucidePlugZap:F6,LucidePlugZap2:P6,LucidePlus:V6,LucidePlusCircle:H6,LucidePlusSquare:N6,LucidePocket:D6,LucidePocketKnife:R6,LucidePodcast:T6,LucidePointer:E6,LucidePointerOff:B6,LucidePopcorn:U6,LucidePopsicle:O6,LucidePoundSterling:Z6,LucidePower:$6,LucidePowerCircle:_6,LucidePowerOff:W6,LucidePowerSquare:G6,LucidePresentation:X6,LucidePrinter:K6,LucideProjector:Q6,LucidePuzzle:Y6,LucidePyramid:J6,LucideQrCode:ex,LucideQuote:tx,LucideRabbit:ax,LucideRadar:nx,LucideRadiation:rx,LucideRadical:ox,LucideRadio:lx,LucideRadioReceiver:cx,LucideRadioTower:ix,LucideRadius:dx,LucideRailSymbol:sx,LucideRainbow:hx,LucideRat:ux,LucideRatio:yx,LucideReceipt:wx,LucideReceiptCent:px,LucideReceiptEuro:kx,LucideReceiptIndianRupee:mx,LucideReceiptJapaneseYen:xx,LucideReceiptPoundSterling:gx,LucideReceiptRussianRuble:fx,LucideReceiptSwissFranc:vx,LucideReceiptText:Mx,LucideRectangleHorizontal:Lx,LucideRectangleVertical:bx,LucideRecycle:Cx,LucideRedo:Ix,LucideRedo2:Sx,LucideRedoDot:jx,LucideRefreshCcw:zx,LucideRefreshCcwDot:qx,LucideRefreshCw:Fx,LucideRefreshCwOff:Px,LucideRefrigerator:Ax,LucideRegex:Hx,LucideRemoveFormatting:Nx,LucideRepeat:Dx,LucideRepeat1:Vx,LucideRepeat2:Rx,LucideReplace:Bx,LucideReplaceAll:Tx,LucideReply:Ux,LucideReplyAll:Ex,LucideRewind:Ox,LucideRibbon:Zx,LucideRocket:_x,LucideRockingChair:Wx,LucideRollerCoaster:Gx,LucideRotate3D:R1,LucideRotate3d:R1,LucideRotateCcw:$x,LucideRotateCw:Xx,LucideRoute:Qx,LucideRouteOff:Kx,LucideRouter:Yx,LucideRows:D1,LucideRows2:D1,LucideRows3:T1,LucideRows4:Jx,LucideRss:e8,LucideRuler:t8,LucideRussianRuble:a8,LucideSailboat:n8,LucideSalad:r8,LucideSandwich:o8,LucideSatellite:i8,LucideSatelliteDish:c8,LucideSave:d8,LucideSaveAll:l8,LucideScale:s8,LucideScale3D:B1,LucideScale3d:B1,LucideScaling:h8,LucideScan:g8,LucideScanBarcode:u8,LucideScanEye:y8,LucideScanFace:p8,LucideScanLine:k8,LucideScanSearch:m8,LucideScanText:x8,LucideScatterChart:f8,LucideSchool:M8,LucideSchool2:v8,LucideScissors:C8,LucideScissorsLineDashed:w8,LucideScissorsSquare:b8,LucideScissorsSquareDashedBottom:L8,LucideScreenShare:j8,LucideScreenShareOff:S8,LucideScroll:q8,LucideScrollText:I8,LucideSearch:H8,LucideSearchCheck:z8,LucideSearchCode:P8,LucideSearchSlash:F8,LucideSearchX:A8,LucideSend:V8,LucideSendHorizonal:E1,LucideSendHorizontal:E1,LucideSendToBack:N8,LucideSeparatorHorizontal:R8,LucideSeparatorVertical:D8,LucideServer:U8,LucideServerCog:T8,LucideServerCrash:B8,LucideServerOff:E8,LucideSettings:Z8,LucideSettings2:O8,LucideShapes:_8,LucideShare:G8,LucideShare2:W8,LucideSheet:$8,LucideShell:X8,LucideShield:og,LucideShieldAlert:K8,LucideShieldBan:Q8,LucideShieldCheck:Y8,LucideShieldClose:U1,LucideShieldEllipsis:J8,LucideShieldHalf:eg,LucideShieldMinus:tg,LucideShieldOff:ag,LucideShieldPlus:ng,LucideShieldQuestion:rg,LucideShieldX:U1,LucideShip:ig,LucideShipWheel:cg,LucideShirt:lg,LucideShoppingBag:dg,LucideShoppingBasket:sg,LucideShoppingCart:hg,LucideShovel:ug,LucideShowerHead:yg,LucideShrink:pg,LucideShrub:kg,LucideShuffle:mg,LucideSidebar:P1,LucideSidebarClose:I1,LucideSidebarOpen:z1,LucideSigma:gg,LucideSigmaSquare:xg,LucideSignal:Lg,LucideSignalHigh:fg,LucideSignalLow:vg,LucideSignalMedium:Mg,LucideSignalZero:wg,LucideSignpost:Cg,LucideSignpostBig:bg,LucideSiren:Sg,LucideSkipBack:jg,LucideSkipForward:Ig,LucideSkull:qg,LucideSlack:zg,LucideSlash:Pg,LucideSlashSquare:O1,LucideSlice:Fg,LucideSliders:Hg,LucideSlidersHorizontal:Ag,LucideSmartphone:Rg,LucideSmartphoneCharging:Ng,LucideSmartphoneNfc:Vg,LucideSmile:Tg,LucideSmilePlus:Dg,LucideSnail:Bg,LucideSnowflake:Eg,LucideSofa:Ug,LucideSortAsc:Gt,LucideSortDesc:Zt,LucideSoup:Og,LucideSpace:Zg,LucideSpade:_g,LucideSparkle:Wg,LucideSparkles:Z1,LucideSpeaker:Gg,LucideSpeech:$g,LucideSpellCheck:Kg,LucideSpellCheck2:Xg,LucideSpline:Qg,LucideSplit:e7,LucideSplitSquareHorizontal:Yg,LucideSplitSquareVertical:Jg,LucideSprayCan:t7,LucideSprout:a7,LucideSquare:i7,LucideSquareAsterisk:Xt,LucideSquareCode:l1,LucideSquareDashedBottom:r7,LucideSquareDashedBottomCode:n7,LucideSquareDot:h1,LucideSquareEqual:y1,LucideSquareGantt:$e,LucideSquareKanban:b1,LucideSquareKanbanDashed:L1,LucideSquarePen:Ce,LucideSquareRadical:o7,LucideSquareSlash:O1,LucideSquareStack:c7,LucideSquareUser:W1,LucideSquareUserRound:_1,LucideSquircle:l7,LucideSquirrel:d7,LucideStamp:s7,LucideStar:y7,LucideStarHalf:h7,LucideStarOff:u7,LucideStars:Z1,LucideStepBack:p7,LucideStepForward:k7,LucideStethoscope:m7,LucideSticker:x7,LucideStickyNote:g7,LucideStopCircle:f7,LucideStore:v7,LucideStretchHorizontal:M7,LucideStretchVertical:w7,LucideStrikethrough:L7,LucideSubscript:b7,LucideSubtitles:a1,LucideSun:q7,LucideSunDim:C7,LucideSunMedium:S7,LucideSunMoon:j7,LucideSunSnow:I7,LucideSunrise:z7,LucideSunset:P7,LucideSuperscript:F7,LucideSwatchBook:A7,LucideSwissFranc:H7,LucideSwitchCamera:N7,LucideSword:V7,LucideSwords:R7,LucideSyringe:D7,LucideTable:_7,LucideTable2:T7,LucideTableCellsMerge:B7,LucideTableCellsSplit:E7,LucideTableColumnsSplit:U7,LucideTableProperties:O7,LucideTableRowsSplit:Z7,LucideTablet:G7,LucideTabletSmartphone:W7,LucideTablets:$7,LucideTag:X7,LucideTags:K7,LucideTally1:Q7,LucideTally2:Y7,LucideTally3:J7,LucideTally4:ef,LucideTally5:tf,LucideTangent:af,LucideTarget:f2,LucideTelescope:nf,LucideTent:of,LucideTentTree:rf,LucideTerminal:lf,LucideTerminalSquare:cf,LucideTestTube:sf,LucideTestTube2:df,LucideTestTubes:hf,LucideText:mf,LucideTextCursor:yf,LucideTextCursorInput:uf,LucideTextQuote:pf,LucideTextSearch:kf,LucideTextSelect:G1,LucideTextSelection:G1,LucideTheater:xf,LucideThermometer:vf,LucideThermometerSnowflake:gf,LucideThermometerSun:ff,LucideThumbsDown:Mf,LucideThumbsUp:wf,LucideTicket:qf,LucideTicketCheck:Lf,LucideTicketMinus:bf,LucideTicketPercent:Cf,LucideTicketPlus:Sf,LucideTicketSlash:jf,LucideTicketX:If,LucideTimer:Ff,LucideTimerOff:zf,LucideTimerReset:Pf,LucideToggleLeft:Af,LucideToggleRight:Hf,LucideTornado:Nf,LucideTorus:Vf,LucideTouchpad:Df,LucideTouchpadOff:Rf,LucideTowerControl:Tf,LucideToyBrick:Bf,LucideTractor:Ef,LucideTrafficCone:Uf,LucideTrain:$1,LucideTrainFront:Zf,LucideTrainFrontTunnel:Of,LucideTrainTrack:_f,LucideTramFront:$1,LucideTrash:Gf,LucideTrash2:Wf,LucideTreeDeciduous:$f,LucideTreePine:Xf,LucideTrees:Kf,LucideTrello:Qf,LucideTrendingDown:Yf,LucideTrendingUp:v2,LucideTriangle:ev,LucideTriangleRight:Jf,LucideTrophy:tv,LucideTruck:av,LucideTurtle:nv,LucideTv:ov,LucideTv2:rv,LucideTwitch:cv,LucideTwitter:iv,LucideType:lv,LucideUmbrella:sv,LucideUmbrellaOff:dv,LucideUnderline:hv,LucideUndo:pv,LucideUndo2:uv,LucideUndoDot:yv,LucideUnfoldHorizontal:kv,LucideUnfoldVertical:mv,LucideUngroup:xv,LucideUnlink:fv,LucideUnlink2:gv,LucideUnlock:Mv,LucideUnlockKeyhole:vv,LucideUnplug:wv,LucideUpload:bv,LucideUploadCloud:Lv,LucideUsb:Cv,LucideUser:Av,LucideUser2:ea,LucideUserCheck:Sv,LucideUserCheck2:X1,LucideUserCircle:o1,LucideUserCircle2:r1,LucideUserCog:jv,LucideUserCog2:K1,LucideUserMinus:Iv,LucideUserMinus2:Q1,LucideUserPlus:qv,LucideUserPlus2:Y1,LucideUserRound:ea,LucideUserRoundCheck:X1,LucideUserRoundCog:K1,LucideUserRoundMinus:Q1,LucideUserRoundPlus:Y1,LucideUserRoundSearch:zv,LucideUserRoundX:J1,LucideUserSearch:Pv,LucideUserSquare:W1,LucideUserSquare2:_1,LucideUserX:Fv,LucideUserX2:J1,LucideUsers:Hv,LucideUsers2:ta,LucideUsersRound:ta,LucideUtensils:Vv,LucideUtensilsCrossed:Nv,LucideUtilityPole:Rv,LucideVariable:Dv,LucideVault:Tv,LucideVegan:Bv,LucideVenetianMask:Ev,LucideVerified:Qt,LucideVibrate:Ov,LucideVibrateOff:Uv,LucideVideo:_v,LucideVideoOff:Zv,LucideVideotape:Wv,LucideView:Gv,LucideVoicemail:$v,LucideVolume:Yv,LucideVolume1:Xv,LucideVolume2:Kv,LucideVolumeX:Qv,LucideVote:Jv,LucideWallet:a9,LucideWallet2:e9,LucideWalletCards:t9,LucideWallpaper:n9,LucideWand:o9,LucideWand2:r9,LucideWarehouse:c9,LucideWashingMachine:i9,LucideWatch:l9,LucideWaves:d9,LucideWaypoints:s9,LucideWebcam:h9,LucideWebhook:y9,LucideWebhookOff:u9,LucideWeight:p9,LucideWheat:m9,LucideWheatOff:k9,LucideWholeWord:x9,LucideWifi:f9,LucideWifiOff:g9,LucideWind:v9,LucideWine:w9,LucideWineOff:M9,LucideWorkflow:L9,LucideWrapText:b9,LucideWrench:C9,LucideX:q9,LucideXCircle:S9,LucideXOctagon:j9,LucideXSquare:I9,LucideYoutube:z9,LucideZap:F9,LucideZapOff:P9,LucideZoomIn:A9,LucideZoomOut:H9,Luggage:Uk,LuggageIcon:Uk,MSquare:Ok,MSquareIcon:Ok,Magnet:Zk,MagnetIcon:Zk,Mail:Jk,MailCheck:_k,MailCheckIcon:_k,MailIcon:Jk,MailMinus:Wk,MailMinusIcon:Wk,MailOpen:Gk,MailOpenIcon:Gk,MailPlus:$k,MailPlusIcon:$k,MailQuestion:Xk,MailQuestionIcon:Xk,MailSearch:Kk,MailSearchIcon:Kk,MailWarning:Qk,MailWarningIcon:Qk,MailX:Yk,MailXIcon:Yk,Mailbox:e5,MailboxIcon:e5,Mails:t5,MailsIcon:t5,Map:o5,MapIcon:o5,MapPin:n5,MapPinIcon:n5,MapPinOff:a5,MapPinOffIcon:a5,MapPinned:r5,MapPinnedIcon:r5,Martini:c5,MartiniIcon:c5,Maximize:l5,Maximize2:i5,Maximize2Icon:i5,MaximizeIcon:l5,Medal:d5,MedalIcon:d5,Megaphone:h5,MegaphoneIcon:h5,MegaphoneOff:s5,MegaphoneOffIcon:s5,Meh:u5,MehIcon:u5,MemoryStick:y5,MemoryStickIcon:y5,Menu:k5,MenuIcon:k5,MenuSquare:p5,MenuSquareIcon:p5,Merge:m5,MergeIcon:m5,MessageCircle:j5,MessageCircleCode:x5,MessageCircleCodeIcon:x5,MessageCircleDashed:g5,MessageCircleDashedIcon:g5,MessageCircleHeart:f5,MessageCircleHeartIcon:f5,MessageCircleIcon:j5,MessageCircleMore:v5,MessageCircleMoreIcon:v5,MessageCircleOff:M5,MessageCircleOffIcon:M5,MessageCirclePlus:w5,MessageCirclePlusIcon:w5,MessageCircleQuestion:L5,MessageCircleQuestionIcon:L5,MessageCircleReply:b5,MessageCircleReplyIcon:b5,MessageCircleWarning:C5,MessageCircleWarningIcon:C5,MessageCircleX:S5,MessageCircleXIcon:S5,MessageSquare:U5,MessageSquareCode:I5,MessageSquareCodeIcon:I5,MessageSquareDashed:q5,MessageSquareDashedIcon:q5,MessageSquareDiff:z5,MessageSquareDiffIcon:z5,MessageSquareDot:P5,MessageSquareDotIcon:P5,MessageSquareHeart:F5,MessageSquareHeartIcon:F5,MessageSquareIcon:U5,MessageSquareMore:A5,MessageSquareMoreIcon:A5,MessageSquareOff:H5,MessageSquareOffIcon:H5,MessageSquarePlus:N5,MessageSquarePlusIcon:N5,MessageSquareQuote:V5,MessageSquareQuoteIcon:V5,MessageSquareReply:R5,MessageSquareReplyIcon:R5,MessageSquareShare:D5,MessageSquareShareIcon:D5,MessageSquareText:T5,MessageSquareTextIcon:T5,MessageSquareWarning:B5,MessageSquareWarningIcon:B5,MessageSquareX:E5,MessageSquareXIcon:E5,MessagesSquare:O5,MessagesSquareIcon:O5,Mic:W5,Mic2:Z5,Mic2Icon:Z5,MicIcon:W5,MicOff:_5,MicOffIcon:_5,Microscope:G5,MicroscopeIcon:G5,Microwave:$5,MicrowaveIcon:$5,Milestone:X5,MilestoneIcon:X5,Milk:Q5,MilkIcon:Q5,MilkOff:K5,MilkOffIcon:K5,Minimize:J5,Minimize2:Y5,Minimize2Icon:Y5,MinimizeIcon:J5,Minus:a3,MinusCircle:e3,MinusCircleIcon:e3,MinusIcon:a3,MinusSquare:t3,MinusSquareIcon:t3,Monitor:p3,MonitorCheck:n3,MonitorCheckIcon:n3,MonitorDot:r3,MonitorDotIcon:r3,MonitorDown:o3,MonitorDownIcon:o3,MonitorIcon:p3,MonitorOff:c3,MonitorOffIcon:c3,MonitorPause:i3,MonitorPauseIcon:i3,MonitorPlay:l3,MonitorPlayIcon:l3,MonitorSmartphone:d3,MonitorSmartphoneIcon:d3,MonitorSpeaker:s3,MonitorSpeakerIcon:s3,MonitorStop:h3,MonitorStopIcon:h3,MonitorUp:u3,MonitorUpIcon:u3,MonitorX:y3,MonitorXIcon:y3,Moon:m3,MoonIcon:m3,MoonStar:k3,MoonStarIcon:k3,MoreHorizontal:x3,MoreHorizontalIcon:x3,MoreVertical:g3,MoreVerticalIcon:g3,Mountain:v3,MountainIcon:v3,MountainSnow:f3,MountainSnowIcon:f3,Mouse:C3,MouseIcon:C3,MousePointer:b3,MousePointer2:M3,MousePointer2Icon:M3,MousePointerClick:w3,MousePointerClickIcon:w3,MousePointerIcon:b3,MousePointerSquare:C1,MousePointerSquareDashed:L3,MousePointerSquareDashedIcon:L3,MousePointerSquareIcon:C1,Move:D3,Move3D:S1,Move3DIcon:S1,Move3d:S1,Move3dIcon:S1,MoveDiagonal:j3,MoveDiagonal2:S3,MoveDiagonal2Icon:S3,MoveDiagonalIcon:j3,MoveDown:z3,MoveDownIcon:z3,MoveDownLeft:I3,MoveDownLeftIcon:I3,MoveDownRight:q3,MoveDownRightIcon:q3,MoveHorizontal:P3,MoveHorizontalIcon:P3,MoveIcon:D3,MoveLeft:F3,MoveLeftIcon:F3,MoveRight:A3,MoveRightIcon:A3,MoveUp:V3,MoveUpIcon:V3,MoveUpLeft:H3,MoveUpLeftIcon:H3,MoveUpRight:N3,MoveUpRightIcon:N3,MoveVertical:R3,MoveVerticalIcon:R3,Music:U3,Music2:T3,Music2Icon:T3,Music3:B3,Music3Icon:B3,Music4:E3,Music4Icon:E3,MusicIcon:U3,Navigation:W3,Navigation2:Z3,Navigation2Icon:Z3,Navigation2Off:O3,Navigation2OffIcon:O3,NavigationIcon:W3,NavigationOff:_3,NavigationOffIcon:_3,Network:G3,NetworkIcon:G3,Newspaper:$3,NewspaperIcon:$3,Nfc:X3,NfcIcon:X3,Notebook:J3,NotebookIcon:J3,NotebookPen:K3,NotebookPenIcon:K3,NotebookTabs:Q3,NotebookTabsIcon:Q3,NotebookText:Y3,NotebookTextIcon:Y3,NotepadText:tm,NotepadTextDashed:em,NotepadTextDashedIcon:em,NotepadTextIcon:tm,Nut:nm,NutIcon:nm,NutOff:am,NutOffIcon:am,Octagon:rm,OctagonIcon:rm,Option:om,OptionIcon:om,Orbit:cm,OrbitIcon:cm,Outdent:im,OutdentIcon:im,Package:km,Package2:lm,Package2Icon:lm,PackageCheck:dm,PackageCheckIcon:dm,PackageIcon:km,PackageMinus:sm,PackageMinusIcon:sm,PackageOpen:hm,PackageOpenIcon:hm,PackagePlus:um,PackagePlusIcon:um,PackageSearch:ym,PackageSearchIcon:ym,PackageX:pm,PackageXIcon:pm,PaintBucket:mm,PaintBucketIcon:mm,PaintRoller:xm,PaintRollerIcon:xm,Paintbrush:fm,Paintbrush2:gm,Paintbrush2Icon:gm,PaintbrushIcon:fm,Palette:vm,PaletteIcon:vm,Palmtree:Mm,PalmtreeIcon:Mm,PanelBottom:bm,PanelBottomClose:wm,PanelBottomCloseIcon:wm,PanelBottomDashed:j1,PanelBottomDashedIcon:j1,PanelBottomIcon:bm,PanelBottomInactive:j1,PanelBottomInactiveIcon:j1,PanelBottomOpen:Lm,PanelBottomOpenIcon:Lm,PanelLeft:P1,PanelLeftClose:I1,PanelLeftCloseIcon:I1,PanelLeftDashed:q1,PanelLeftDashedIcon:q1,PanelLeftIcon:P1,PanelLeftInactive:q1,PanelLeftInactiveIcon:q1,PanelLeftOpen:z1,PanelLeftOpenIcon:z1,PanelRight:jm,PanelRightClose:Cm,PanelRightCloseIcon:Cm,PanelRightDashed:F1,PanelRightDashedIcon:F1,PanelRightIcon:jm,PanelRightInactive:F1,PanelRightInactiveIcon:F1,PanelRightOpen:Sm,PanelRightOpenIcon:Sm,PanelTop:zm,PanelTopClose:Im,PanelTopCloseIcon:Im,PanelTopDashed:A1,PanelTopDashedIcon:A1,PanelTopIcon:zm,PanelTopInactive:A1,PanelTopInactiveIcon:A1,PanelTopOpen:qm,PanelTopOpenIcon:qm,PanelsLeftBottom:Pm,PanelsLeftBottomIcon:Pm,PanelsLeftRight:s1,PanelsLeftRightIcon:s1,PanelsRightBottom:Fm,PanelsRightBottomIcon:Fm,PanelsTopBottom:T1,PanelsTopBottomIcon:T1,PanelsTopLeft:H1,PanelsTopLeftIcon:H1,Paperclip:Am,PaperclipIcon:Am,Parentheses:Hm,ParenthesesIcon:Hm,ParkingCircle:Vm,ParkingCircleIcon:Vm,ParkingCircleOff:Nm,ParkingCircleOffIcon:Nm,ParkingMeter:Rm,ParkingMeterIcon:Rm,ParkingSquare:Tm,ParkingSquareIcon:Tm,ParkingSquareOff:Dm,ParkingSquareOffIcon:Dm,PartyPopper:Bm,PartyPopperIcon:Bm,Pause:Om,PauseCircle:Em,PauseCircleIcon:Em,PauseIcon:Om,PauseOctagon:Um,PauseOctagonIcon:Um,PawPrint:Zm,PawPrintIcon:Zm,PcCase:_m,PcCaseIcon:_m,Pen:V1,PenBox:Ce,PenBoxIcon:Ce,PenIcon:V1,PenLine:N1,PenLineIcon:N1,PenSquare:Ce,PenSquareIcon:Ce,PenTool:Wm,PenToolIcon:Wm,Pencil:Xm,PencilIcon:Xm,PencilLine:Gm,PencilLineIcon:Gm,PencilRuler:$m,PencilRulerIcon:$m,Pentagon:Km,PentagonIcon:Km,Percent:e6,PercentCircle:Qm,PercentCircleIcon:Qm,PercentDiamond:Ym,PercentDiamondIcon:Ym,PercentIcon:e6,PercentSquare:Jm,PercentSquareIcon:Jm,PersonStanding:t6,PersonStandingIcon:t6,Phone:l6,PhoneCall:a6,PhoneCallIcon:a6,PhoneForwarded:n6,PhoneForwardedIcon:n6,PhoneIcon:l6,PhoneIncoming:r6,PhoneIncomingIcon:r6,PhoneMissed:o6,PhoneMissedIcon:o6,PhoneOff:c6,PhoneOffIcon:c6,PhoneOutgoing:i6,PhoneOutgoingIcon:i6,Pi:s6,PiIcon:s6,PiSquare:d6,PiSquareIcon:d6,Piano:h6,PianoIcon:h6,Pickaxe:u6,PickaxeIcon:u6,PictureInPicture:p6,PictureInPicture2:y6,PictureInPicture2Icon:y6,PictureInPictureIcon:p6,PieChart:k6,PieChartIcon:k6,PiggyBank:m6,PiggyBankIcon:m6,Pilcrow:g6,PilcrowIcon:g6,PilcrowSquare:x6,PilcrowSquareIcon:x6,Pill:f6,PillIcon:f6,Pin:M6,PinIcon:M6,PinOff:v6,PinOffIcon:v6,Pipette:w6,PipetteIcon:w6,Pizza:L6,PizzaIcon:L6,Plane:S6,PlaneIcon:S6,PlaneLanding:b6,PlaneLandingIcon:b6,PlaneTakeoff:C6,PlaneTakeoffIcon:C6,Play:q6,PlayCircle:j6,PlayCircleIcon:j6,PlayIcon:q6,PlaySquare:I6,PlaySquareIcon:I6,Plug:A6,Plug2:z6,Plug2Icon:z6,PlugIcon:A6,PlugZap:F6,PlugZap2:P6,PlugZap2Icon:P6,PlugZapIcon:F6,Plus:V6,PlusCircle:H6,PlusCircleIcon:H6,PlusIcon:V6,PlusSquare:N6,PlusSquareIcon:N6,Pocket:D6,PocketIcon:D6,PocketKnife:R6,PocketKnifeIcon:R6,Podcast:T6,PodcastIcon:T6,Pointer:E6,PointerIcon:E6,PointerOff:B6,PointerOffIcon:B6,Popcorn:U6,PopcornIcon:U6,Popsicle:O6,PopsicleIcon:O6,PoundSterling:Z6,PoundSterlingIcon:Z6,Power:$6,PowerCircle:_6,PowerCircleIcon:_6,PowerIcon:$6,PowerOff:W6,PowerOffIcon:W6,PowerSquare:G6,PowerSquareIcon:G6,Presentation:X6,PresentationIcon:X6,Printer:K6,PrinterIcon:K6,Projector:Q6,ProjectorIcon:Q6,Puzzle:Y6,PuzzleIcon:Y6,Pyramid:J6,PyramidIcon:J6,QrCode:ex,QrCodeIcon:ex,Quote:tx,QuoteIcon:tx,Rabbit:ax,RabbitIcon:ax,Radar:nx,RadarIcon:nx,Radiation:rx,RadiationIcon:rx,Radical:ox,RadicalIcon:ox,Radio:lx,RadioIcon:lx,RadioReceiver:cx,RadioReceiverIcon:cx,RadioTower:ix,RadioTowerIcon:ix,Radius:dx,RadiusIcon:dx,RailSymbol:sx,RailSymbolIcon:sx,Rainbow:hx,RainbowIcon:hx,Rat:ux,RatIcon:ux,Ratio:yx,RatioIcon:yx,Receipt:wx,ReceiptCent:px,ReceiptCentIcon:px,ReceiptEuro:kx,ReceiptEuroIcon:kx,ReceiptIcon:wx,ReceiptIndianRupee:mx,ReceiptIndianRupeeIcon:mx,ReceiptJapaneseYen:xx,ReceiptJapaneseYenIcon:xx,ReceiptPoundSterling:gx,ReceiptPoundSterlingIcon:gx,ReceiptRussianRuble:fx,ReceiptRussianRubleIcon:fx,ReceiptSwissFranc:vx,ReceiptSwissFrancIcon:vx,ReceiptText:Mx,ReceiptTextIcon:Mx,RectangleHorizontal:Lx,RectangleHorizontalIcon:Lx,RectangleVertical:bx,RectangleVerticalIcon:bx,Recycle:Cx,RecycleIcon:Cx,Redo:Ix,Redo2:Sx,Redo2Icon:Sx,RedoDot:jx,RedoDotIcon:jx,RedoIcon:Ix,RefreshCcw:zx,RefreshCcwDot:qx,RefreshCcwDotIcon:qx,RefreshCcwIcon:zx,RefreshCw:Fx,RefreshCwIcon:Fx,RefreshCwOff:Px,RefreshCwOffIcon:Px,Refrigerator:Ax,RefrigeratorIcon:Ax,Regex:Hx,RegexIcon:Hx,RemoveFormatting:Nx,RemoveFormattingIcon:Nx,Repeat:Dx,Repeat1:Vx,Repeat1Icon:Vx,Repeat2:Rx,Repeat2Icon:Rx,RepeatIcon:Dx,Replace:Bx,ReplaceAll:Tx,ReplaceAllIcon:Tx,ReplaceIcon:Bx,Reply:Ux,ReplyAll:Ex,ReplyAllIcon:Ex,ReplyIcon:Ux,Rewind:Ox,RewindIcon:Ox,Ribbon:Zx,RibbonIcon:Zx,Rocket:_x,RocketIcon:_x,RockingChair:Wx,RockingChairIcon:Wx,RollerCoaster:Gx,RollerCoasterIcon:Gx,Rotate3D:R1,Rotate3DIcon:R1,Rotate3d:R1,Rotate3dIcon:R1,RotateCcw:$x,RotateCcwIcon:$x,RotateCw:Xx,RotateCwIcon:Xx,Route:Qx,RouteIcon:Qx,RouteOff:Kx,RouteOffIcon:Kx,Router:Yx,RouterIcon:Yx,Rows:D1,Rows2:D1,Rows2Icon:D1,Rows3:T1,Rows3Icon:T1,Rows4:Jx,Rows4Icon:Jx,RowsIcon:D1,Rss:e8,RssIcon:e8,Ruler:t8,RulerIcon:t8,RussianRuble:a8,RussianRubleIcon:a8,Sailboat:n8,SailboatIcon:n8,Salad:r8,SaladIcon:r8,Sandwich:o8,SandwichIcon:o8,Satellite:i8,SatelliteDish:c8,SatelliteDishIcon:c8,SatelliteIcon:i8,Save:d8,SaveAll:l8,SaveAllIcon:l8,SaveIcon:d8,Scale:s8,Scale3D:B1,Scale3DIcon:B1,Scale3d:B1,Scale3dIcon:B1,ScaleIcon:s8,Scaling:h8,ScalingIcon:h8,Scan:g8,ScanBarcode:u8,ScanBarcodeIcon:u8,ScanEye:y8,ScanEyeIcon:y8,ScanFace:p8,ScanFaceIcon:p8,ScanIcon:g8,ScanLine:k8,ScanLineIcon:k8,ScanSearch:m8,ScanSearchIcon:m8,ScanText:x8,ScanTextIcon:x8,ScatterChart:f8,ScatterChartIcon:f8,School:M8,School2:v8,School2Icon:v8,SchoolIcon:M8,Scissors:C8,ScissorsIcon:C8,ScissorsLineDashed:w8,ScissorsLineDashedIcon:w8,ScissorsSquare:b8,ScissorsSquareDashedBottom:L8,ScissorsSquareDashedBottomIcon:L8,ScissorsSquareIcon:b8,ScreenShare:j8,ScreenShareIcon:j8,ScreenShareOff:S8,ScreenShareOffIcon:S8,Scroll:q8,ScrollIcon:q8,ScrollText:I8,ScrollTextIcon:I8,Search:H8,SearchCheck:z8,SearchCheckIcon:z8,SearchCode:P8,SearchCodeIcon:P8,SearchIcon:H8,SearchSlash:F8,SearchSlashIcon:F8,SearchX:A8,SearchXIcon:A8,Send:V8,SendHorizonal:E1,SendHorizonalIcon:E1,SendHorizontal:E1,SendHorizontalIcon:E1,SendIcon:V8,SendToBack:N8,SendToBackIcon:N8,SeparatorHorizontal:R8,SeparatorHorizontalIcon:R8,SeparatorVertical:D8,SeparatorVerticalIcon:D8,Server:U8,ServerCog:T8,ServerCogIcon:T8,ServerCrash:B8,ServerCrashIcon:B8,ServerIcon:U8,ServerOff:E8,ServerOffIcon:E8,Settings:Z8,Settings2:O8,Settings2Icon:O8,SettingsIcon:Z8,Shapes:_8,ShapesIcon:_8,Share:G8,Share2:W8,Share2Icon:W8,ShareIcon:G8,Sheet:$8,SheetIcon:$8,Shell:X8,ShellIcon:X8,Shield:og,ShieldAlert:K8,ShieldAlertIcon:K8,ShieldBan:Q8,ShieldBanIcon:Q8,ShieldCheck:Y8,ShieldCheckIcon:Y8,ShieldClose:U1,ShieldCloseIcon:U1,ShieldEllipsis:J8,ShieldEllipsisIcon:J8,ShieldHalf:eg,ShieldHalfIcon:eg,ShieldIcon:og,ShieldMinus:tg,ShieldMinusIcon:tg,ShieldOff:ag,ShieldOffIcon:ag,ShieldPlus:ng,ShieldPlusIcon:ng,ShieldQuestion:rg,ShieldQuestionIcon:rg,ShieldX:U1,ShieldXIcon:U1,Ship:ig,ShipIcon:ig,ShipWheel:cg,ShipWheelIcon:cg,Shirt:lg,ShirtIcon:lg,ShoppingBag:dg,ShoppingBagIcon:dg,ShoppingBasket:sg,ShoppingBasketIcon:sg,ShoppingCart:hg,ShoppingCartIcon:hg,Shovel:ug,ShovelIcon:ug,ShowerHead:yg,ShowerHeadIcon:yg,Shrink:pg,ShrinkIcon:pg,Shrub:kg,ShrubIcon:kg,Shuffle:mg,ShuffleIcon:mg,Sidebar:P1,SidebarClose:I1,SidebarCloseIcon:I1,SidebarIcon:P1,SidebarOpen:z1,SidebarOpenIcon:z1,Sigma:gg,SigmaIcon:gg,SigmaSquare:xg,SigmaSquareIcon:xg,Signal:Lg,SignalHigh:fg,SignalHighIcon:fg,SignalIcon:Lg,SignalLow:vg,SignalLowIcon:vg,SignalMedium:Mg,SignalMediumIcon:Mg,SignalZero:wg,SignalZeroIcon:wg,Signpost:Cg,SignpostBig:bg,SignpostBigIcon:bg,SignpostIcon:Cg,Siren:Sg,SirenIcon:Sg,SkipBack:jg,SkipBackIcon:jg,SkipForward:Ig,SkipForwardIcon:Ig,Skull:qg,SkullIcon:qg,Slack:zg,SlackIcon:zg,Slash:Pg,SlashIcon:Pg,SlashSquare:O1,SlashSquareIcon:O1,Slice:Fg,SliceIcon:Fg,Sliders:Hg,SlidersHorizontal:Ag,SlidersHorizontalIcon:Ag,SlidersIcon:Hg,Smartphone:Rg,SmartphoneCharging:Ng,SmartphoneChargingIcon:Ng,SmartphoneIcon:Rg,SmartphoneNfc:Vg,SmartphoneNfcIcon:Vg,Smile:Tg,SmileIcon:Tg,SmilePlus:Dg,SmilePlusIcon:Dg,Snail:Bg,SnailIcon:Bg,Snowflake:Eg,SnowflakeIcon:Eg,Sofa:Ug,SofaIcon:Ug,SortAsc:Gt,SortAscIcon:Gt,SortDesc:Zt,SortDescIcon:Zt,Soup:Og,SoupIcon:Og,Space:Zg,SpaceIcon:Zg,Spade:_g,SpadeIcon:_g,Sparkle:Wg,SparkleIcon:Wg,Sparkles:Z1,SparklesIcon:Z1,Speaker:Gg,SpeakerIcon:Gg,Speech:$g,SpeechIcon:$g,SpellCheck:Kg,SpellCheck2:Xg,SpellCheck2Icon:Xg,SpellCheckIcon:Kg,Spline:Qg,SplineIcon:Qg,Split:e7,SplitIcon:e7,SplitSquareHorizontal:Yg,SplitSquareHorizontalIcon:Yg,SplitSquareVertical:Jg,SplitSquareVerticalIcon:Jg,SprayCan:t7,SprayCanIcon:t7,Sprout:a7,SproutIcon:a7,Square:i7,SquareAsterisk:Xt,SquareAsteriskIcon:Xt,SquareCode:l1,SquareCodeIcon:l1,SquareDashedBottom:r7,SquareDashedBottomCode:n7,SquareDashedBottomCodeIcon:n7,SquareDashedBottomIcon:r7,SquareDot:h1,SquareDotIcon:h1,SquareEqual:y1,SquareEqualIcon:y1,SquareGantt:$e,SquareGanttIcon:$e,SquareIcon:i7,SquareKanban:b1,SquareKanbanDashed:L1,SquareKanbanDashedIcon:L1,SquareKanbanIcon:b1,SquarePen:Ce,SquarePenIcon:Ce,SquareRadical:o7,SquareRadicalIcon:o7,SquareSlash:O1,SquareSlashIcon:O1,SquareStack:c7,SquareStackIcon:c7,SquareUser:W1,SquareUserIcon:W1,SquareUserRound:_1,SquareUserRoundIcon:_1,Squircle:l7,SquircleIcon:l7,Squirrel:d7,SquirrelIcon:d7,Stamp:s7,StampIcon:s7,Star:y7,StarHalf:h7,StarHalfIcon:h7,StarIcon:y7,StarOff:u7,StarOffIcon:u7,Stars:Z1,StarsIcon:Z1,StepBack:p7,StepBackIcon:p7,StepForward:k7,StepForwardIcon:k7,Stethoscope:m7,StethoscopeIcon:m7,Sticker:x7,StickerIcon:x7,StickyNote:g7,StickyNoteIcon:g7,StopCircle:f7,StopCircleIcon:f7,Store:v7,StoreIcon:v7,StretchHorizontal:M7,StretchHorizontalIcon:M7,StretchVertical:w7,StretchVerticalIcon:w7,Strikethrough:L7,StrikethroughIcon:L7,Subscript:b7,SubscriptIcon:b7,Subtitles:a1,SubtitlesIcon:a1,Sun:q7,SunDim:C7,SunDimIcon:C7,SunIcon:q7,SunMedium:S7,SunMediumIcon:S7,SunMoon:j7,SunMoonIcon:j7,SunSnow:I7,SunSnowIcon:I7,Sunrise:z7,SunriseIcon:z7,Sunset:P7,SunsetIcon:P7,Superscript:F7,SuperscriptIcon:F7,SwatchBook:A7,SwatchBookIcon:A7,SwissFranc:H7,SwissFrancIcon:H7,SwitchCamera:N7,SwitchCameraIcon:N7,Sword:V7,SwordIcon:V7,Swords:R7,SwordsIcon:R7,Syringe:D7,SyringeIcon:D7,Table:_7,Table2:T7,Table2Icon:T7,TableCellsMerge:B7,TableCellsMergeIcon:B7,TableCellsSplit:E7,TableCellsSplitIcon:E7,TableColumnsSplit:U7,TableColumnsSplitIcon:U7,TableIcon:_7,TableProperties:O7,TablePropertiesIcon:O7,TableRowsSplit:Z7,TableRowsSplitIcon:Z7,Tablet:G7,TabletIcon:G7,TabletSmartphone:W7,TabletSmartphoneIcon:W7,Tablets:$7,TabletsIcon:$7,Tag:X7,TagIcon:X7,Tags:K7,TagsIcon:K7,Tally1:Q7,Tally1Icon:Q7,Tally2:Y7,Tally2Icon:Y7,Tally3:J7,Tally3Icon:J7,Tally4:ef,Tally4Icon:ef,Tally5:tf,Tally5Icon:tf,Tangent:af,TangentIcon:af,Target:f2,TargetIcon:f2,Telescope:nf,TelescopeIcon:nf,Tent:of,TentIcon:of,TentTree:rf,TentTreeIcon:rf,Terminal:lf,TerminalIcon:lf,TerminalSquare:cf,TerminalSquareIcon:cf,TestTube:sf,TestTube2:df,TestTube2Icon:df,TestTubeIcon:sf,TestTubes:hf,TestTubesIcon:hf,Text:mf,TextCursor:yf,TextCursorIcon:yf,TextCursorInput:uf,TextCursorInputIcon:uf,TextIcon:mf,TextQuote:pf,TextQuoteIcon:pf,TextSearch:kf,TextSearchIcon:kf,TextSelect:G1,TextSelectIcon:G1,TextSelection:G1,TextSelectionIcon:G1,Theater:xf,TheaterIcon:xf,Thermometer:vf,ThermometerIcon:vf,ThermometerSnowflake:gf,ThermometerSnowflakeIcon:gf,ThermometerSun:ff,ThermometerSunIcon:ff,ThumbsDown:Mf,ThumbsDownIcon:Mf,ThumbsUp:wf,ThumbsUpIcon:wf,Ticket:qf,TicketCheck:Lf,TicketCheckIcon:Lf,TicketIcon:qf,TicketMinus:bf,TicketMinusIcon:bf,TicketPercent:Cf,TicketPercentIcon:Cf,TicketPlus:Sf,TicketPlusIcon:Sf,TicketSlash:jf,TicketSlashIcon:jf,TicketX:If,TicketXIcon:If,Timer:Ff,TimerIcon:Ff,TimerOff:zf,TimerOffIcon:zf,TimerReset:Pf,TimerResetIcon:Pf,ToggleLeft:Af,ToggleLeftIcon:Af,ToggleRight:Hf,ToggleRightIcon:Hf,Tornado:Nf,TornadoIcon:Nf,Torus:Vf,TorusIcon:Vf,Touchpad:Df,TouchpadIcon:Df,TouchpadOff:Rf,TouchpadOffIcon:Rf,TowerControl:Tf,TowerControlIcon:Tf,ToyBrick:Bf,ToyBrickIcon:Bf,Tractor:Ef,TractorIcon:Ef,TrafficCone:Uf,TrafficConeIcon:Uf,Train:$1,TrainFront:Zf,TrainFrontIcon:Zf,TrainFrontTunnel:Of,TrainFrontTunnelIcon:Of,TrainIcon:$1,TrainTrack:_f,TrainTrackIcon:_f,TramFront:$1,TramFrontIcon:$1,Trash:Gf,Trash2:Wf,Trash2Icon:Wf,TrashIcon:Gf,TreeDeciduous:$f,TreeDeciduousIcon:$f,TreePine:Xf,TreePineIcon:Xf,Trees:Kf,TreesIcon:Kf,Trello:Qf,TrelloIcon:Qf,TrendingDown:Yf,TrendingDownIcon:Yf,TrendingUp:v2,TrendingUpIcon:v2,Triangle:ev,TriangleIcon:ev,TriangleRight:Jf,TriangleRightIcon:Jf,Trophy:tv,TrophyIcon:tv,Truck:av,TruckIcon:av,Turtle:nv,TurtleIcon:nv,Tv:ov,Tv2:rv,Tv2Icon:rv,TvIcon:ov,Twitch:cv,TwitchIcon:cv,Twitter:iv,TwitterIcon:iv,Type:lv,TypeIcon:lv,Umbrella:sv,UmbrellaIcon:sv,UmbrellaOff:dv,UmbrellaOffIcon:dv,Underline:hv,UnderlineIcon:hv,Undo:pv,Undo2:uv,Undo2Icon:uv,UndoDot:yv,UndoDotIcon:yv,UndoIcon:pv,UnfoldHorizontal:kv,UnfoldHorizontalIcon:kv,UnfoldVertical:mv,UnfoldVerticalIcon:mv,Ungroup:xv,UngroupIcon:xv,Unlink:fv,Unlink2:gv,Unlink2Icon:gv,UnlinkIcon:fv,Unlock:Mv,UnlockIcon:Mv,UnlockKeyhole:vv,UnlockKeyholeIcon:vv,Unplug:wv,UnplugIcon:wv,Upload:bv,UploadCloud:Lv,UploadCloudIcon:Lv,UploadIcon:bv,Usb:Cv,UsbIcon:Cv,User:Av,User2:ea,User2Icon:ea,UserCheck:Sv,UserCheck2:X1,UserCheck2Icon:X1,UserCheckIcon:Sv,UserCircle:o1,UserCircle2:r1,UserCircle2Icon:r1,UserCircleIcon:o1,UserCog:jv,UserCog2:K1,UserCog2Icon:K1,UserCogIcon:jv,UserIcon:Av,UserMinus:Iv,UserMinus2:Q1,UserMinus2Icon:Q1,UserMinusIcon:Iv,UserPlus:qv,UserPlus2:Y1,UserPlus2Icon:Y1,UserPlusIcon:qv,UserRound:ea,UserRoundCheck:X1,UserRoundCheckIcon:X1,UserRoundCog:K1,UserRoundCogIcon:K1,UserRoundIcon:ea,UserRoundMinus:Q1,UserRoundMinusIcon:Q1,UserRoundPlus:Y1,UserRoundPlusIcon:Y1,UserRoundSearch:zv,UserRoundSearchIcon:zv,UserRoundX:J1,UserRoundXIcon:J1,UserSearch:Pv,UserSearchIcon:Pv,UserSquare:W1,UserSquare2:_1,UserSquare2Icon:_1,UserSquareIcon:W1,UserX:Fv,UserX2:J1,UserX2Icon:J1,UserXIcon:Fv,Users:Hv,Users2:ta,Users2Icon:ta,UsersIcon:Hv,UsersRound:ta,UsersRoundIcon:ta,Utensils:Vv,UtensilsCrossed:Nv,UtensilsCrossedIcon:Nv,UtensilsIcon:Vv,UtilityPole:Rv,UtilityPoleIcon:Rv,Variable:Dv,VariableIcon:Dv,Vault:Tv,VaultIcon:Tv,Vegan:Bv,VeganIcon:Bv,VenetianMask:Ev,VenetianMaskIcon:Ev,Verified:Qt,VerifiedIcon:Qt,Vibrate:Ov,VibrateIcon:Ov,VibrateOff:Uv,VibrateOffIcon:Uv,Video:_v,VideoIcon:_v,VideoOff:Zv,VideoOffIcon:Zv,Videotape:Wv,VideotapeIcon:Wv,View:Gv,ViewIcon:Gv,Voicemail:$v,VoicemailIcon:$v,Volume:Yv,Volume1:Xv,Volume1Icon:Xv,Volume2:Kv,Volume2Icon:Kv,VolumeIcon:Yv,VolumeX:Qv,VolumeXIcon:Qv,Vote:Jv,VoteIcon:Jv,Wallet:a9,Wallet2:e9,Wallet2Icon:e9,WalletCards:t9,WalletCardsIcon:t9,WalletIcon:a9,Wallpaper:n9,WallpaperIcon:n9,Wand:o9,Wand2:r9,Wand2Icon:r9,WandIcon:o9,Warehouse:c9,WarehouseIcon:c9,WashingMachine:i9,WashingMachineIcon:i9,Watch:l9,WatchIcon:l9,Waves:d9,WavesIcon:d9,Waypoints:s9,WaypointsIcon:s9,Webcam:h9,WebcamIcon:h9,Webhook:y9,WebhookIcon:y9,WebhookOff:u9,WebhookOffIcon:u9,Weight:p9,WeightIcon:p9,Wheat:m9,WheatIcon:m9,WheatOff:k9,WheatOffIcon:k9,WholeWord:x9,WholeWordIcon:x9,Wifi:f9,WifiIcon:f9,WifiOff:g9,WifiOffIcon:g9,Wind:v9,WindIcon:v9,Wine:w9,WineIcon:w9,WineOff:M9,WineOffIcon:M9,Workflow:L9,WorkflowIcon:L9,WrapText:b9,WrapTextIcon:b9,Wrench:C9,WrenchIcon:C9,X:q9,XCircle:S9,XCircleIcon:S9,XIcon:q9,XOctagon:j9,XOctagonIcon:j9,XSquare:I9,XSquareIcon:I9,Youtube:z9,YoutubeIcon:z9,Zap:F9,ZapIcon:F9,ZapOff:P9,ZapOffIcon:P9,ZoomIn:A9,ZoomInIcon:A9,ZoomOut:H9,ZoomOutIcon:H9,createLucideIcon:n,icons:Zq},Symbol.toStringTag,{value:"Module"})),Wq="data:image/png;base64,W0RVTU1ZIEZJTEUgQ09OVEVOVF0=",Gq=({currentView:e,onBack:t})=>o.jsx("header",{className:"bg-white shadow-sm border-b border-gray-200",children:o.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:o.jsx("div",{className:"flex items-center justify-between h-24 md:h-28",children:o.jsxs("div",{className:"flex items-center space-x-3",children:[e!=="category-selection"&&o.jsx("button",{onClick:t,className:"p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors",children:o.jsx(Da,{className:"h-6 w-6"})}),o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("img",{src:Wq,alt:"Finance Bro",className:"h-20 md:h-24 w-auto"}),o.jsx("p",{className:"text-base md:text-lg text-gray-700 font-bold",children:"Professional Financial Calculators"})]})]})})})}),XM=({onSelectCategory:e})=>{const t=[{id:"basic",name:"Basic",description:"Essential financial calculations for everyday use",icon:ia,color:"green",calculators:["Simple Interest","Compound Interest","Currency Converter","Percentage Calculator","Tip Calculator","Investment Growth"]},{id:"intermediate",name:"Intermediate",description:"Advanced planning tools for major financial decisions",icon:v2,color:"blue",calculators:["Mortgage Calculator","Bond Calculator","Loan Payment","Retirement Planning","Tax Calculator","Present/Future Value"]},{id:"advanced",name:"Advanced",description:"Professional-grade financial modeling and analysis",icon:f2,color:"purple",calculators:["Black-Scholes","Portfolio Optimization","Value at Risk (VaR)","CAPM Calculator","Bond Duration & Convexity","DCF Valuation","Comparative Analysis"]}];return o.jsx("div",{className:"min-h-screen bg-gray-50",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"text-center mb-8 md:mb-16",children:[o.jsx("h1",{className:"text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 px-4",children:"Choose Your Calculator Level"}),o.jsx("p",{className:"text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4",children:"Select the category that best matches your financial calculation needs"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-4",children:t.map(a=>{const r=a.icon;return o.jsx("div",{onClick:()=>e(a.id),className:`bg-white rounded-xl md:rounded-2xl shadow-lg border-2 border-transparent hover:border-${a.color}-300 hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-8`,children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:`bg-${a.color}-100 p-3 md:p-6 rounded-full w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 group-hover:bg-${a.color}-200 transition-colors`,children:o.jsx(r,{className:`h-8 w-8 md:h-12 md:w-12 text-${a.color}-600 mx-auto`})}),o.jsx("h2",{className:`text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-${a.color}-600 transition-colors`,children:a.name}),o.jsx("p",{className:"text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed",children:a.description}),o.jsxs("div",{className:"space-y-2 md:space-y-2",children:[o.jsx("h4",{className:"font-medium text-gray-900 text-xs md:text-sm",children:"Includes:"}),o.jsx("div",{className:"text-xs md:text-sm text-gray-600 space-y-1",children:a.calculators.map((c,i)=>o.jsxs("div",{className:"flex items-center justify-center",children:[o.jsx("span",{className:`w-1.5 h-1.5 md:w-2 md:h-2 bg-${a.color}-400 rounded-full mr-2`}),o.jsx("span",{children:c})]},i))})]}),o.jsxs("button",{className:`mt-4 md:mt-8 w-full bg-${a.color}-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg text-sm md:text-base font-semibold hover:bg-${a.color}-700 transition-colors`,children:["Explore ",a.name," Calculators"]})]})},a.id)})}),o.jsx("div",{className:"text-center mt-8 md:mt-16 px-4",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8 max-w-4xl mx-auto",children:[o.jsx("h3",{className:"text-lg md:text-xl font-semibold text-gray-900 mb-4",children:"Not sure which level to choose?"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm text-gray-600",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"font-medium text-green-600 mb-1 md:mb-2",children:"Basic Level"}),o.jsx("p",{children:"Perfect for personal finance, budgeting, and simple investment calculations"})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-medium text-blue-600 mb-1 md:mb-2",children:"Intermediate Level"}),o.jsx("p",{children:"Ideal for major purchases, retirement planning, and tax calculations"})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-medium text-purple-600 mb-1 md:mb-2",children:"Advanced Level"}),o.jsx("p",{children:"Designed for professional traders, portfolio managers, and financial analysts"})]})]})]})})]})})},$q=[{id:"simple-interest",name:"Simple Interest",description:"Calculate simple interest on your investments",icon:"Calculator",level:"basic"},{id:"compound-interest",name:"Compound Interest",description:"See how your money grows with compound interest",icon:"TrendingUp",level:"basic"},{id:"currency-converter",name:"Currency Converter",description:"Convert between different currencies",icon:"DollarSign",level:"basic"},{id:"percentage",name:"Percentage Calculator",description:"Calculate percentages, markups, and discounts",icon:"Percent",level:"basic"},{id:"tip-calculator",name:"Tip Calculator",description:"Calculate tips and split bills",icon:"Receipt",level:"basic"},{id:"investment-growth",name:"Investment Growth",description:"Track your investment growth over time",icon:"LineChart",level:"basic"},{id:"mortgage",name:"Mortgage Calculator",description:"Calculate monthly mortgage payments",icon:"Home",level:"intermediate"},{id:"bond-yield",name:"Bond Calculator",description:"Calculate bond prices and yields",icon:"FileText",level:"intermediate"},{id:"loan-payment",name:"Loan Payment",description:"Calculate loan payments and schedules",icon:"CreditCard",level:"intermediate"},{id:"retirement-planning",name:"Retirement Planning",description:"Plan for your retirement savings",icon:"PiggyBank",level:"intermediate"},{id:"tax-calculator",name:"Tax Calculator",description:"Estimate your tax obligations",icon:"FileX",level:"intermediate"},{id:"present-value",name:"Present/Future Value",description:"Calculate time value of money",icon:"Clock",level:"intermediate"},{id:"black-scholes",name:"Black-Scholes",description:"Option pricing using Black-Scholes model",icon:"BarChart3",level:"advanced"},{id:"portfolio-optimization",name:"Portfolio Optimization",description:"Optimize your investment portfolio",icon:"Target",level:"advanced"},{id:"value-at-risk",name:"Value at Risk (VaR)",description:"Calculate potential portfolio losses",icon:"AlertTriangle",level:"advanced"},{id:"capm",name:"CAPM Calculator",description:"Capital Asset Pricing Model calculations",icon:"TrendingUp",level:"advanced"},{id:"bond-duration",name:"Bond Duration & Convexity",description:"Advanced bond risk metrics",icon:"Activity",level:"advanced"},{id:"dcf-valuation",name:"DCF Valuation",description:"Discounted Cash Flow company valuation",icon:"Calculator",level:"advanced"},{id:"comparative-analysis",name:"Comparative Analysis",description:"Company valuation using multiples",icon:"BarChart2",level:"advanced"}],Xq=({category:e,onSelectCalculator:t,onBack:a})=>{const r=$q.filter(s=>s.level===e),i={basic:{title:"Basic Calculators",description:"Essential financial calculations for everyday use",color:"green"},intermediate:{title:"Intermediate Calculators",description:"Advanced planning tools for major financial decisions",color:"blue"},advanced:{title:"Advanced Calculators",description:"Professional-grade financial modeling and analysis",color:"purple"}}[e],l=s=>{const d=_q[s.icon];return o.jsx("div",{onClick:()=>t(s.id),className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer group",children:o.jsxs("div",{className:"flex items-start space-x-4",children:[o.jsx("div",{className:`bg-${i.color}-50 p-3 rounded-lg group-hover:bg-${i.color}-100 transition-colors`,children:o.jsx(d,{className:`h-6 w-6 text-${i.color}-600`})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:`font-semibold text-gray-900 group-hover:text-${i.color}-600 transition-colors`,children:s.name}),o.jsx("p",{className:"text-sm text-gray-600 mt-1",children:s.description})]})]})},s.id)};return o.jsx("div",{className:"min-h-screen bg-gray-50",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12",children:[o.jsxs("div",{className:"flex items-center mb-4 md:mb-8",children:[o.jsx("button",{onClick:a,className:"p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors mr-2 md:mr-4",children:o.jsx(Da,{className:"h-5 w-5"})}),o.jsxs("div",{children:[o.jsx("h1",{className:`text-xl md:text-3xl font-bold text-${i.color}-600`,children:i.title}),o.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:i.description})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",children:r.map(l)})]})})},Kq=(e,t,a,r,c=0)=>{const i=t/100,l=r,s=a,d=e*Math.pow(1+i/l,l*s);let u=0;if(c>0){const g=i/12,v=s*12;u=c*((Math.pow(1+g,v)-1)/g)}const y=d+u,m=c*12*s,h=y-e-m;return{finalAmount:y,totalInterest:h,monthlyContributions:m}},Qq=(e,t,a)=>{const r=t/100/12,c=a*12,i=e*(r*Math.pow(1+r,c))/(Math.pow(1+r,c)-1),l=i*c,s=l-e;return{monthlyPayment:i,totalPayment:l,totalInterest:s}},Yq=(e,t,a,r,c)=>{const i=(Math.log(e/t)+(r+.5*c*c)*a)/(c*Math.sqrt(a)),l=i-c*Math.sqrt(a),s=q=>.5*(1+Jq(q/Math.sqrt(2))),d=q=>Math.exp(-.5*q*q)/Math.sqrt(2*Math.PI),u=e*s(i)-t*Math.exp(-r*a)*s(l),y=t*Math.exp(-r*a)*s(-l)-e*s(-i),m=s(i),h=d(i)/(e*c*Math.sqrt(a)),g=(-e*d(i)*c/(2*Math.sqrt(a))-r*t*Math.exp(-r*a)*s(l))/365,v=e*d(i)*Math.sqrt(a)/100,w=t*a*Math.exp(-r*a)*s(l)/100;return{callPrice:u,putPrice:y,delta:m,gamma:h,theta:g,vega:v,rho:w}},Jq=e=>{const t=.254829592,a=-.284496736,r=1.421413741,c=-1.453152027,i=1.061405429,l=.3275911,s=e>=0?1:-1;e=Math.abs(e);const d=1/(1+l*e),u=1-((((i*d+c)*d+r)*d+a)*d+t)*d*Math.exp(-e*e);return s*u},ez=(e,t,a,r,c=2)=>{const i=r*c,l=e*t/100/c,s=a/100/c;let d=0,u=0;for(let h=1;h<=i;h++){const g=l/Math.pow(1+s,h);d+=g,u+=h/c*g}const y=e/Math.pow(1+s,i);d+=y,u+=r*y,u=u/d;const m=e*t/100/d*100;return{price:d,currentYield:m,duration:u}},M2={USD:1,EUR:.85,GBP:.73,JPY:110,CAD:1.25,AUD:1.35,CHF:.92,CNY:6.45,INR:74.5,BRL:5.2},tz=(e,t,a)=>e/M2[t]*M2[a],az=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState("12"),[d,u]=f.useState(""),[y,m]=f.useState(null);return f.useEffect(()=>{const h=e||"10000",g=a||"7",v=c||"10",w=d||"0";if(h&&g&&v&&l){const q=Kq(parseFloat(h),parseFloat(g),parseFloat(v),parseFloat(l),parseFloat(w));m(q)}},[e,a,c,l,d]),o.jsx("div",{className:"max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-4 md:py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8",children:[o.jsx("h2",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6",children:"Compound Interest Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8",children:[o.jsxs("div",{className:"space-y-4 md:space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Principal Amount ($)"}),o.jsx("input",{type:"number",value:e,onChange:h=>t(h.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"10000"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Annual Interest Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:a,onChange:h=>r(h.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"7"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Time Period (years)"}),o.jsx("input",{type:"number",value:c,onChange:h=>i(h.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"10"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Compounding Frequency (per year)"}),o.jsxs("select",{value:l,onChange:h=>s(h.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[o.jsx("option",{value:"1",children:"Annually"}),o.jsx("option",{value:"2",children:"Semi-annually"}),o.jsx("option",{value:"4",children:"Quarterly"}),o.jsx("option",{value:"12",children:"Monthly"}),o.jsx("option",{value:"365",children:"Daily"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Monthly Contribution ($)"}),o.jsx("input",{type:"number",value:d,onChange:h=>u(h.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"0"})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 md:p-6",children:[o.jsx("h3",{className:"text-base md:text-lg font-semibold text-gray-900 mb-4",children:"Results"}),y&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Final Amount"}),o.jsxs("p",{className:"text-lg md:text-2xl font-bold text-green-600",children:["$",y.finalAmount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Total Interest Earned"}),o.jsxs("p",{className:"text-base md:text-xl font-semibold text-blue-600",children:["$",y.totalInterest.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Principal Amount"}),o.jsxs("p",{className:"text-base md:text-lg font-medium text-gray-900",children:["$",parseFloat(e||"10000").toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),y.monthlyContributions>0&&o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Total Contributions"}),o.jsxs("p",{className:"text-base md:text-lg font-medium text-gray-900",children:["$",y.monthlyContributions.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})]})]})]})})},nz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(null);return f.useEffect(()=>{const d=e||"1000",u=a||"5",y=c||"2";if(d&&u&&y){const m=parseFloat(d),h=parseFloat(u)/100,g=parseFloat(y),v=m*h*g,w=m+v;s({interest:v,total:w})}},[e,a,c]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Simple Interest Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Principal Amount ($)"}),o.jsx("input",{type:"number",value:e,onChange:d=>t(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"1000"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Interest Rate (% per year)"}),o.jsx("input",{type:"number",step:"0.1",value:a,onChange:d=>r(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"5"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time Period (years)"}),o.jsx("input",{type:"number",value:c,onChange:d=>i(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"2"})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Results"}),l&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Simple Interest"}),o.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["$",l.interest.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Amount"}),o.jsxs("p",{className:"text-xl font-semibold text-blue-600",children:["$",l.total.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})]})]})]})})},rz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(0),d=Object.keys(M2);return f.useEffect(()=>{if(e&&a&&c){const u=tz(parseFloat(e),a,c);s(u)}},[e,a,c]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Currency Converter"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Amount"}),o.jsx("input",{type:"number",value:e,onChange:u=>t(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"From Currency"}),o.jsx("select",{value:a,onChange:u=>r(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:d.map(u=>o.jsx("option",{value:u,children:u},u))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"To Currency"}),o.jsx("select",{value:c,onChange:u=>i(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:d.map(u=>o.jsx("option",{value:u,children:u},u))})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Conversion Result"}),o.jsxs("div",{className:"bg-white rounded-lg p-6 border border-gray-200 text-center",children:[o.jsxs("p",{className:"text-lg text-gray-600 mb-2",children:[parseFloat(e).toLocaleString()," ",a]}),o.jsx("p",{className:"text-sm text-gray-400 mb-2",children:"="}),o.jsxs("p",{className:"text-3xl font-bold text-blue-600",children:[l.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",c]}),o.jsxs("p",{className:"text-sm text-gray-500 mt-4",children:["Exchange Rate: 1 ",a," = ",(M2[c]/M2[a]).toFixed(4)," ",c]})]})]})]})]})})},oz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(null);return f.useEffect(()=>{const d=e||"300000",u=a||"3.5",y=c||"30";if(d&&u&&y){const m=Qq(parseFloat(d),parseFloat(u),parseFloat(y));s(m)}},[e,a,c]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Mortgage Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Loan Amount ($)"}),o.jsx("input",{type:"number",value:e,onChange:d=>t(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"300000"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Annual Interest Rate (%)"}),o.jsx("input",{type:"number",step:"0.01",value:a,onChange:d=>r(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"3.5"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Loan Term (years)"}),o.jsx("input",{type:"number",value:c,onChange:d=>i(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"30"})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Payment Details"}),l&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Monthly Payment"}),o.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["$",l.monthlyPayment.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Payment"}),o.jsxs("p",{className:"text-xl font-semibold text-blue-600",children:["$",l.totalPayment.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Interest"}),o.jsxs("p",{className:"text-lg font-medium text-red-600",children:["$",l.totalInterest.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})]})]})]})})},cz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(""),[y,m]=f.useState(null);return f.useEffect(()=>{if(e&&a&&c&&l&&d)try{const h=Yq(parseFloat(e),parseFloat(a),parseFloat(c),parseFloat(l),parseFloat(d));m(h)}catch(h){console.error("Calculation error:",h)}},[e,a,c,l,d]),o.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Black-Scholes Option Pricing"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Current Stock Price ($)"}),o.jsx("input",{type:"number",step:"0.01",value:e,onChange:h=>t(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Strike Price ($)"}),o.jsx("input",{type:"number",step:"0.01",value:a,onChange:h=>r(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time to Expiration (years)"}),o.jsx("input",{type:"number",step:"0.01",value:c,onChange:h=>i(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Risk-Free Rate (decimal)"}),o.jsx("input",{type:"number",step:"0.001",value:l,onChange:h=>s(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Volatility (decimal)"}),o.jsx("input",{type:"number",step:"0.01",value:d,onChange:h=>u(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Option Prices & Greeks"}),y&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Call Price"}),o.jsxs("p",{className:"text-xl font-bold text-green-600",children:["$",y.callPrice.toFixed(2)]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Put Price"}),o.jsxs("p",{className:"text-xl font-bold text-red-600",children:["$",y.putPrice.toFixed(2)]})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Greeks"}),o.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-gray-600",children:"Delta"}),o.jsx("p",{className:"font-medium",children:y.delta.toFixed(4)})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-gray-600",children:"Gamma"}),o.jsx("p",{className:"font-medium",children:y.gamma.toFixed(4)})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-gray-600",children:"Theta"}),o.jsx("p",{className:"font-medium",children:y.theta.toFixed(4)})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-gray-600",children:"Vega"}),o.jsx("p",{className:"font-medium",children:y.vega.toFixed(4)})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-gray-600",children:"Rho"}),o.jsx("p",{className:"font-medium",children:y.rho.toFixed(4)})]})]})]})]})]})]})]})})},iz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(""),[y,m]=f.useState(null);return f.useEffect(()=>{if(e&&a&&c&&l&&d)try{const h=ez(parseFloat(e),parseFloat(a),parseFloat(c),parseFloat(l),parseFloat(d));m(h)}catch(h){console.error("Calculation error:",h)}},[e,a,c,l,d]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Bond Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Face Value ($)"}),o.jsx("input",{type:"number",value:e,onChange:h=>t(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Coupon Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:a,onChange:h=>r(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Yield to Maturity (%)"}),o.jsx("input",{type:"number",step:"0.1",value:c,onChange:h=>i(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Years to Maturity"}),o.jsx("input",{type:"number",value:l,onChange:h=>s(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payments Per Year"}),o.jsxs("select",{value:d,onChange:h=>u(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[o.jsx("option",{value:"1",children:"Annual"}),o.jsx("option",{value:"2",children:"Semi-annual"}),o.jsx("option",{value:"4",children:"Quarterly"}),o.jsx("option",{value:"12",children:"Monthly"})]})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Bond Metrics"}),y&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Bond Price"}),o.jsxs("p",{className:"text-2xl font-bold text-blue-600",children:["$",y.price.toFixed(2)]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Current Yield"}),o.jsxs("p",{className:"text-xl font-semibold text-green-600",children:[y.currentYield.toFixed(2),"%"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Duration"}),o.jsxs("p",{className:"text-lg font-medium text-gray-900",children:[y.duration.toFixed(2)," years"]})]})]})]})]})]})})},lz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),d=()=>{const m=parseFloat(e||"100"),h=parseFloat(a||"20");return(m*h/100).toFixed(2)},u=()=>{const m=parseFloat(c||"80");return((parseFloat(l||"100")-m)/m*100).toFixed(2)},y=()=>{const m=parseFloat(e||"100");return(parseFloat(a||"20")/m*100).toFixed(2)};return o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Percentage Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"What is X% of Y?"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Percentage (%)"}),o.jsx("input",{type:"number",value:a,onChange:m=>r(m.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"20"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Value"}),o.jsx("input",{type:"number",value:e,onChange:m=>t(m.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"100"})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Result"}),o.jsx("p",{className:"text-xl font-bold text-blue-600",children:d()})]})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Percentage Change"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Original Value"}),o.jsx("input",{type:"number",value:c,onChange:m=>i(m.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"80"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"New Value"}),o.jsx("input",{type:"number",value:l,onChange:m=>s(m.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"100"})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Change"}),o.jsxs("p",{className:"text-xl font-bold text-green-600",children:[u(),"%"]})]})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"X is what % of Y?"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Part (X)"}),o.jsx("input",{type:"number",value:a,onChange:m=>r(m.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Whole (Y)"}),o.jsx("input",{type:"number",value:e,onChange:m=>t(m.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Percentage"}),o.jsxs("p",{className:"text-xl font-bold text-purple-600",children:[y(),"%"]})]})]})]})]})]})})},dz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(null);f.useEffect(()=>{const u=e||"50",y=a||"18",m=c||"1";if(u&&y&&m){const h=parseFloat(u),g=parseFloat(y),v=parseInt(m),w=h*(g/100),q=h+w,k=q/v,p=w/v;s({tipAmount:w,totalAmount:q,perPerson:k,tipPerPerson:p})}},[e,a,c]);const d=[15,18,20,25];return o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Tip Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Bill Amount ($)"}),o.jsx("input",{type:"number",step:"0.01",value:e,onChange:u=>t(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"50"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tip Percentage (%)"}),o.jsx("input",{type:"number",value:a,onChange:u=>r(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"18"}),o.jsx("div",{className:"flex gap-2 mt-2",children:d.map(u=>o.jsxs("button",{onClick:()=>r(u.toString()),className:"px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm",children:[u,"%"]},u))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Number of People"}),o.jsx("input",{type:"number",min:"1",value:c,onChange:u=>i(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"1"})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Bill Summary"}),l&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Tip Amount"}),o.jsxs("p",{className:"text-xl font-bold text-green-600",children:["$",l.tipAmount.toFixed(2)]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Amount"}),o.jsxs("p",{className:"text-2xl font-bold text-blue-600",children:["$",l.totalAmount.toFixed(2)]})]}),parseInt(c||"1")>1&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Per Person"}),o.jsxs("p",{className:"text-lg font-semibold text-gray-900",children:["$",l.perPerson.toFixed(2)]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Tip Per Person"}),o.jsxs("p",{className:"text-lg font-medium text-green-600",children:["$",l.tipPerPerson.toFixed(2)]})]})]})]})]})]})]})})},sz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(null);return f.useEffect(()=>{const y=e||"10000",m=a||"500",h=c||"8",g=l||"20";if(y&&m&&h&&g){const v=parseFloat(y),w=parseFloat(m),q=parseFloat(h)/100,k=parseFloat(g),p=v*Math.pow(1+q,k),x=q/12,M=k*12,b=w*((Math.pow(1+x,M)-1)/x),C=p+b,S=v+w*12*k,j=C-S;u({totalValue:C,totalContributions:S,totalGrowth:j,returnOnInvestment:j/S*100})}},[e,a,c,l]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Investment Growth Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Initial Investment ($)"}),o.jsx("input",{type:"number",value:e,onChange:y=>t(y.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"10000"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Monthly Contribution ($)"}),o.jsx("input",{type:"number",value:a,onChange:y=>r(y.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Expected Annual Return (%)"}),o.jsx("input",{type:"number",step:"0.1",value:c,onChange:y=>i(y.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"8"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Investment Period (years)"}),o.jsx("input",{type:"number",value:l,onChange:y=>s(y.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"20"})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Investment Projection"}),d&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Portfolio Value"}),o.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["$",d.totalValue.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Contributions"}),o.jsxs("p",{className:"text-xl font-semibold text-blue-600",children:["$",d.totalContributions.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Investment Growth"}),o.jsxs("p",{className:"text-lg font-medium text-purple-600",children:["$",d.totalGrowth.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Return on Investment"}),o.jsxs("p",{className:"text-lg font-medium text-orange-600",children:[d.returnOnInvestment.toFixed(2),"%"]})]})]})]})]})]})})},hz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(null);return f.useEffect(()=>{const d=e||"25000",u=a||"6.5",y=c||"5";if(d&&u&&y){const m=parseFloat(d),h=parseFloat(u)/100/12,g=parseFloat(y)*12,v=m*(h*Math.pow(1+h,g))/(Math.pow(1+h,g)-1),w=v*g,q=w-m;s({monthlyPayment:v,totalPayment:w,totalInterest:q,interestPercentage:q/m*100})}},[e,a,c]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Loan Payment Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Loan Amount ($)"}),o.jsx("input",{type:"number",value:e,onChange:d=>t(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"25000"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Annual Interest Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:a,onChange:d=>r(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"6.5"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Loan Term (years)"}),o.jsx("input",{type:"number",value:c,onChange:d=>i(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",placeholder:"5"})]}),o.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[o.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"Loan Types"}),o.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[o.jsx("li",{children:"• Personal Loans: 6-36% APR"}),o.jsx("li",{children:"• Auto Loans: 3-10% APR"}),o.jsx("li",{children:"• Student Loans: 3-7% APR"}),o.jsx("li",{children:"• Home Equity: 3-8% APR"})]})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Payment Details"}),l&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Monthly Payment"}),o.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["$",l.monthlyPayment.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Payment"}),o.jsxs("p",{className:"text-xl font-semibold text-blue-600",children:["$",l.totalPayment.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Interest"}),o.jsxs("p",{className:"text-lg font-medium text-red-600",children:["$",l.totalInterest.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Interest as % of Loan"}),o.jsxs("p",{className:"text-lg font-medium text-orange-600",children:[l.interestPercentage.toFixed(1),"%"]})]})]})]})]})]})})},uz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(""),[y,m]=f.useState(null);return f.useEffect(()=>{if(e&&a&&c&&l&&d){const h=parseFloat(a)-parseFloat(e),g=parseFloat(c),v=parseFloat(l),w=parseFloat(d)/100;if(h>0){const q=g*Math.pow(1+w,h),k=w/12,p=h*12,x=v*((Math.pow(1+k,p)-1)/k),M=q+x,b=g+v*12*h,C=M-b,S=M*.04,j=S/12;m({yearsToRetirement:h,totalRetirementSavings:M,totalContributions:b,totalGrowth:C,annualWithdrawal:S,monthlyWithdrawal:j})}}},[e,a,c,l,d]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Retirement Planning Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Current Age"}),o.jsx("input",{type:"number",value:e,onChange:h=>t(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Retirement Age"}),o.jsx("input",{type:"number",value:a,onChange:h=>r(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Current Retirement Savings ($)"}),o.jsx("input",{type:"number",value:c,onChange:h=>i(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Monthly Contribution ($)"}),o.jsx("input",{type:"number",value:l,onChange:h=>s(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Expected Annual Return (%)"}),o.jsx("input",{type:"number",step:"0.1",value:d,onChange:h=>u(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Retirement Projection"}),y&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Years to Retirement"}),o.jsxs("p",{className:"text-xl font-bold text-blue-600",children:[y.yearsToRetirement," years"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Retirement Savings"}),o.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["$",y.totalRetirementSavings.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Total Contributions"}),o.jsxs("p",{className:"text-lg font-semibold text-blue-600",children:["$",y.totalContributions.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Investment Growth"}),o.jsxs("p",{className:"text-lg font-medium text-purple-600",children:["$",y.totalGrowth.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Monthly Retirement Income (4% Rule)"}),o.jsxs("p",{className:"text-lg font-medium text-orange-600",children:["$",y.monthlyWithdrawal.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]})]})]})]})]})})},yz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(null),d={single:[{min:0,max:11e3,rate:.1},{min:11e3,max:44725,rate:.12},{min:44725,max:95375,rate:.22},{min:95375,max:182050,rate:.24},{min:182050,max:231250,rate:.32},{min:231250,max:578125,rate:.35},{min:578125,max:1/0,rate:.37}],marriedJoint:[{min:0,max:22e3,rate:.1},{min:22e3,max:89450,rate:.12},{min:89450,max:190750,rate:.22},{min:190750,max:364200,rate:.24},{min:364200,max:462500,rate:.32},{min:462500,max:693750,rate:.35},{min:693750,max:1/0,rate:.37}]},u=(m,h)=>{const g=d[h];let v=0,w=m;for(const q of g){if(w<=0)break;const k=Math.min(w,q.max-q.min);v+=k*q.rate,w-=k}return v};f.useEffect(()=>{if(e&&c){const m=parseFloat(e),h=parseFloat(c),g=Math.max(0,m-h),v=u(g,a),w=v/m*100,q=y(g,a),k=m-v;s({grossIncome:m,taxableIncome:g,federalTax:v,effectiveRate:w,marginalRate:q,afterTaxIncome:k,monthlyAfterTax:k/12})}},[e,a,c]);const y=(m,h)=>{const g=d[h];for(const v of g)if(m>=v.min&&m<v.max)return v.rate*100;return 37};return o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Federal Tax Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Annual Income ($)"}),o.jsx("input",{type:"number",value:e,onChange:m=>t(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Filing Status"}),o.jsxs("select",{value:a,onChange:m=>r(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",children:[o.jsx("option",{value:"single",children:"Single"}),o.jsx("option",{value:"marriedJoint",children:"Married Filing Jointly"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Total Deductions ($)"}),o.jsx("input",{type:"number",value:c,onChange:m=>i(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Standard deduction: Single $12,950, Married $25,900"})]}),o.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[o.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"2023 Tax Year"}),o.jsx("p",{className:"text-sm text-blue-700",children:"This calculator uses 2023 federal tax brackets and standard deductions. State taxes are not included."})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Tax Calculation"}),l&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Taxable Income"}),o.jsxs("p",{className:"text-xl font-bold text-blue-600",children:["$",l.taxableIncome.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Federal Tax Owed"}),o.jsxs("p",{className:"text-2xl font-bold text-red-600",children:["$",l.federalTax.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"After-Tax Income"}),o.jsxs("p",{className:"text-xl font-semibold text-green-600",children:["$",l.afterTaxIncome.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Effective Rate"}),o.jsxs("p",{className:"text-lg font-medium text-orange-600",children:[l.effectiveRate.toFixed(1),"%"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Marginal Rate"}),o.jsxs("p",{className:"text-lg font-medium text-purple-600",children:[l.marginalRate.toFixed(0),"%"]})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Monthly After-Tax"}),o.jsxs("p",{className:"text-lg font-medium text-gray-900",children:["$",l.monthlyAfterTax.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]})]})]})]})]})})},pz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(""),[y,m]=f.useState(null);return f.useEffect(()=>{if(l&&d){const h=parseFloat(l)/100,g=parseFloat(d);if(e==="pv"&&a){const v=parseFloat(a),w=v/Math.pow(1+h,g),q=v-w;m({type:"Present Value",value:w,futureValue:v,discount:q,rate:h*100,periods:g})}else if(e==="fv"&&c){const v=parseFloat(c),w=v*Math.pow(1+h,g),q=w-v;m({type:"Future Value",value:w,presentValue:v,growth:q,rate:h*100,periods:g})}}},[e,a,c,l,d]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Present/Future Value Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Calculation Type"}),o.jsxs("select",{value:e,onChange:h=>t(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400",children:[o.jsx("option",{value:"pv",children:"Calculate Present Value"}),o.jsx("option",{value:"fv",children:"Calculate Future Value"})]})]}),e==="pv"?o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Future Value ($)"}),o.jsx("input",{type:"number",value:a,onChange:h=>r(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}):o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Present Value ($)"}),o.jsx("input",{type:"number",value:c,onChange:h=>i(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Annual Interest Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:l,onChange:h=>s(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Number of Periods (years)"}),o.jsx("input",{type:"number",value:d,onChange:h=>u(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"})]}),o.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[o.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"Time Value of Money"}),o.jsx("p",{className:"text-sm text-blue-700",children:"Money available today is worth more than the same amount in the future due to its potential earning capacity."})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Calculation Result"}),y&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:y.type}),o.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["$",y.value.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),y.type==="Present Value"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Future Value"}),o.jsxs("p",{className:"text-xl font-semibold text-blue-600",children:["$",y.futureValue.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Discount Amount"}),o.jsxs("p",{className:"text-lg font-medium text-red-600",children:["$",y.discount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Present Value"}),o.jsxs("p",{className:"text-xl font-semibold text-blue-600",children:["$",y.presentValue.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Growth Amount"}),o.jsxs("p",{className:"text-lg font-medium text-green-600",children:["$",y.growth.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Interest Rate"}),o.jsxs("p",{className:"text-lg font-medium text-purple-600",children:[y.rate.toFixed(1),"%"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Time Period"}),o.jsxs("p",{className:"text-lg font-medium text-orange-600",children:[y.periods," years"]})]})]})]})]})]})]})})},kz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(null),y={stocks:{return:10,volatility:16},bonds:{return:4.5,volatility:4},reits:{return:8.5,volatility:20}};f.useEffect(()=>{const g=parseFloat(e)/100,v=parseFloat(a)/100,w=parseFloat(c)/100,q=g+v+w;if(Math.abs(q-1)<.01&&l){const k=parseFloat(l),p=g*y.stocks.return+v*y.bonds.return+w*y.reits.return,x=Math.sqrt(Math.pow(g*y.stocks.volatility,2)+Math.pow(v*y.bonds.volatility,2)+Math.pow(w*y.reits.volatility,2)+2*g*v*.2*y.stocks.volatility*y.bonds.volatility+2*g*w*.6*y.stocks.volatility*y.reits.volatility+2*v*w*.1*y.bonds.volatility*y.reits.volatility),M=(p-2.5)/x,b=k*(p/100),C=k*g,S=k*v,j=k*w;u({expectedReturn:p,portfolioVolatility:x,sharpeRatio:M,annualExpectedGain:b,stocksValue:C,bondsValue:S,reitsValue:j,riskLevel:x<8?"Conservative":x<15?"Moderate":"Aggressive"})}else u(null)},[e,a,c,l]);const m=(g,v)=>{g(v)},h=parseFloat(e)+parseFloat(a)+parseFloat(c);return o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Portfolio Optimization Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Portfolio Value ($)"}),o.jsx("input",{type:"number",value:l,onChange:g=>s(g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Stocks Allocation (%)"}),o.jsx("input",{type:"number",min:"0",max:"100",value:e,onChange:g=>m(t,g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Expected return: 10.0%, Volatility: 16.0%"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Bonds Allocation (%)"}),o.jsx("input",{type:"number",min:"0",max:"100",value:a,onChange:g=>m(r,g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Expected return: 4.5%, Volatility: 4.0%"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"REITs Allocation (%)"}),o.jsx("input",{type:"number",min:"0",max:"100",value:c,onChange:g=>m(i,g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Expected return: 8.5%, Volatility: 20.0%"})]}),o.jsx("div",{className:`p-4 rounded-lg ${h===100?"bg-green-50":"bg-red-50"}`,children:o.jsxs("p",{className:`text-sm font-medium ${h===100?"text-green-700":"text-red-700"}`,children:["Total Allocation: ",h.toFixed(1),"%",h!==100&&" (Must equal 100%)"]})})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Portfolio Analysis"}),d?o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Expected Annual Return"}),o.jsxs("p",{className:"text-2xl font-bold text-green-600",children:[d.expectedReturn.toFixed(2),"%"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Portfolio Volatility"}),o.jsxs("p",{className:"text-xl font-semibold text-orange-600",children:[d.portfolioVolatility.toFixed(2),"%"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Sharpe Ratio"}),o.jsx("p",{className:"text-lg font-medium text-blue-600",children:d.sharpeRatio.toFixed(2)})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Risk Level"}),o.jsx("p",{className:`text-lg font-medium ${d.riskLevel==="Conservative"?"text-green-600":d.riskLevel==="Moderate"?"text-yellow-600":"text-red-600"}`,children:d.riskLevel})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Expected Annual Gain"}),o.jsxs("p",{className:"text-lg font-medium text-purple-600",children:["$",d.annualExpectedGain.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Asset Allocation ($)"}),o.jsxs("div",{className:"space-y-1 text-sm",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Stocks:"}),o.jsxs("span",{className:"font-medium",children:["$",d.stocksValue.toLocaleString()]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Bonds:"}),o.jsxs("span",{className:"font-medium",children:["$",d.bondsValue.toLocaleString()]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"REITs:"}),o.jsxs("span",{className:"font-medium",children:["$",d.reitsValue.toLocaleString()]})]})]})]})]}):o.jsx("div",{className:"bg-white rounded-lg p-4 border border-gray-200 text-center",children:o.jsx("p",{className:"text-gray-500",children:"Please ensure allocations total 100%"})})]})]})]})})},mz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(""),[y,m]=f.useState(null),h={90:1.282,95:1.645,99:2.326};return f.useEffect(()=>{if(e&&a&&c&&l&&d){const g=parseFloat(e),v=parseFloat(a)/100,w=parseFloat(c)/100,q=parseFloat(l),k=parseFloat(d),p=v*k,x=w*Math.sqrt(k),M=h[l],b=g*(p-M*x),C=Math.abs(b),S=g*(p-x*Math.exp(-.5*M*M)/(Math.sqrt(2*Math.PI)*(1-q/100))),j=Math.abs(S),D=C/g*100,A=j/g*100;m({varAmount:C,varPercentage:D,esAmount:j,esPercentage:A,confidence:q,timeHorizon:k,portfolioValue:g})}},[e,a,c,l,d]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Value at Risk (VaR) Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Portfolio Value ($)"}),o.jsx("input",{type:"number",value:e,onChange:g=>t(g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Expected Annual Return (%)"}),o.jsx("input",{type:"number",step:"0.1",value:a,onChange:g=>r(g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Annual Volatility (%)"}),o.jsx("input",{type:"number",step:"0.1",value:c,onChange:g=>i(g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Confidence Level (%)"}),o.jsxs("select",{value:l,onChange:g=>s(g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[o.jsx("option",{value:"90",children:"90%"}),o.jsx("option",{value:"95",children:"95%"}),o.jsx("option",{value:"99",children:"99%"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time Horizon (days)"}),o.jsxs("select",{value:d,onChange:g=>u(g.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[o.jsx("option",{value:"1",children:"1 Day"}),o.jsx("option",{value:"10",children:"10 Days"}),o.jsx("option",{value:"30",children:"30 Days"}),o.jsx("option",{value:"252",children:"1 Year"})]})]}),o.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[o.jsx("h4",{className:"font-medium text-red-900 mb-2",children:"Risk Warning"}),o.jsx("p",{className:"text-sm text-red-700",children:"VaR estimates potential losses under normal market conditions. Extreme market events may result in losses exceeding VaR estimates."})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Risk Analysis"}),y&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsxs("p",{className:"text-sm text-gray-600",children:["Value at Risk (",y.confidence,"%)"]}),o.jsxs("p",{className:"text-2xl font-bold text-red-600",children:["$",y.varAmount.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]}),o.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:[y.varPercentage.toFixed(2),"% of portfolio value"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Expected Shortfall (CVaR)"}),o.jsxs("p",{className:"text-xl font-semibold text-orange-600",children:["$",y.esAmount.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]}),o.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:[y.esPercentage.toFixed(2),"% of portfolio value"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Risk Interpretation"}),o.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[o.jsxs("p",{children:["• There is a ",100-y.confidence,"% chance of losing more than $",y.varAmount.toLocaleString()," over ",y.timeHorizon," day(s)"]}),o.jsxs("p",{children:["• If losses exceed VaR, the expected loss is $",y.esAmount.toLocaleString()]})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Risk Level"}),o.jsx("div",{className:`inline-flex px-3 py-1 rounded-full text-sm font-medium ${y.varPercentage<2?"bg-green-100 text-green-800":y.varPercentage<5?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:y.varPercentage<2?"Low Risk":y.varPercentage<5?"Moderate Risk":"High Risk"})]})]})]})]})]})})},xz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(null);return f.useEffect(()=>{if(e&&a&&c){const d=parseFloat(e)/100,u=parseFloat(a)/100,y=parseFloat(c),m=d+y*(u-d),h=u-d,g=y*h;let v="Low";y>1.5?v="High":y>1&&(v="Moderate"),s({expectedReturn:m*100,marketRiskPremium:h*100,riskPremium:g*100,beta:y,riskLevel:v})}},[e,a,c]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"CAPM Calculator"}),o.jsx("p",{className:"text-gray-600 mb-6",children:"Calculate expected returns using the Capital Asset Pricing Model"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Risk-Free Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:e,onChange:d=>t(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Typically 10-year Treasury bond rate"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Market Return (%)"}),o.jsx("input",{type:"number",step:"0.1",value:a,onChange:d=>r(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Expected return of the market (e.g., S&P 500)"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Beta (β)"}),o.jsx("input",{type:"number",step:"0.1",value:c,onChange:d=>i(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Measure of systematic risk relative to market"})]}),o.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[o.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"CAPM Formula"}),o.jsx("p",{className:"text-sm text-blue-700 mb-2",children:"Expected Return = Risk-Free Rate + β × (Market Return - Risk-Free Rate)"}),o.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[o.jsx("li",{children:"• β < 1: Less volatile than market"}),o.jsx("li",{children:"• β = 1: Same volatility as market"}),o.jsx("li",{children:"• β > 1: More volatile than market"})]})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"CAPM Results"}),l&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Expected Return"}),o.jsxs("p",{className:"text-2xl font-bold text-green-600",children:[l.expectedReturn.toFixed(2),"%"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Market Risk Premium"}),o.jsxs("p",{className:"text-xl font-semibold text-blue-600",children:[l.marketRiskPremium.toFixed(2),"%"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Risk Premium"}),o.jsxs("p",{className:"text-lg font-medium text-purple-600",children:[l.riskPremium.toFixed(2),"%"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Beta (β)"}),o.jsx("p",{className:"text-lg font-medium text-orange-600",children:l.beta.toFixed(2)})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Risk Level"}),o.jsx("div",{className:`inline-flex px-3 py-1 rounded-full text-sm font-medium ${l.riskLevel==="Low"?"bg-green-100 text-green-800":l.riskLevel==="Moderate"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:l.riskLevel})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Interpretation"}),o.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[o.jsxs("p",{children:["• This asset is expected to return ",l.expectedReturn.toFixed(2),"% annually"]}),o.jsxs("p",{children:["• The risk premium over risk-free rate is ",l.riskPremium.toFixed(2),"%"]}),o.jsxs("p",{children:["• Beta of ",l.beta.toFixed(2)," indicates ",l.beta<1?"lower":l.beta>1?"higher":"equal"," volatility vs. market"]})]})]})]})]})]})]})})},gz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(""),[y,m]=f.useState(null);return f.useEffect(()=>{if(e&&a&&c&&l&&d){const h=parseFloat(e),g=parseFloat(a)/100,v=parseFloat(c)/100,w=parseFloat(l),q=parseFloat(d),k=w*q,p=h*g/q,x=v/q;let M=0,b=0,C=0;for(let de=1;de<=k;de++){const se=p/Math.pow(1+x,de);M+=se,b+=de/q*se,C+=de*(de+1)*se/Math.pow(1+x,2)}const S=h/Math.pow(1+x,k);M+=S,b+=w*S,C+=k*(k+1)*S/Math.pow(1+x,2),b=b/M;const j=b/(1+x);C=C/(M*Math.pow(q,2));const D=j*.01,A=.5*C*Math.pow(.01,2),oe=(D+A)*100;let ee="Low";j>7?ee="High":j>4&&(ee="Moderate"),m({bondPrice:M,macaulayDuration:b,modifiedDuration:j,convexity:C,durationRisk:D*100,convexityAdjustment:A*100,totalPriceSensitivity:oe,riskLevel:ee,currentYield:h*g/M*100})}},[e,a,c,l,d]),o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Bond Duration & Convexity Calculator"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Face Value ($)"}),o.jsx("input",{type:"number",value:e,onChange:h=>t(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Coupon Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:a,onChange:h=>r(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Yield to Maturity (%)"}),o.jsx("input",{type:"number",step:"0.1",value:c,onChange:h=>i(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Years to Maturity"}),o.jsx("input",{type:"number",value:l,onChange:h=>s(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payments Per Year"}),o.jsxs("select",{value:d,onChange:h=>u(h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[o.jsx("option",{value:"1",children:"Annual"}),o.jsx("option",{value:"2",children:"Semi-annual"}),o.jsx("option",{value:"4",children:"Quarterly"})]})]}),o.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[o.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"Duration & Convexity"}),o.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[o.jsx("li",{children:"• Duration measures price sensitivity to yield changes"}),o.jsx("li",{children:"• Convexity measures the curvature of price-yield relationship"}),o.jsx("li",{children:"• Higher duration = higher interest rate risk"})]})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Bond Risk Metrics"}),y&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Bond Price"}),o.jsxs("p",{className:"text-2xl font-bold text-blue-600",children:["$",y.bondPrice.toFixed(2)]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Macaulay Duration"}),o.jsxs("p",{className:"text-lg font-semibold text-green-600",children:[y.macaulayDuration.toFixed(2)," years"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Modified Duration"}),o.jsxs("p",{className:"text-lg font-semibold text-purple-600",children:[y.modifiedDuration.toFixed(2)," years"]})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Convexity"}),o.jsx("p",{className:"text-xl font-bold text-orange-600",children:y.convexity.toFixed(2)})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Interest Rate Risk Level"}),o.jsx("div",{className:`inline-flex px-3 py-1 rounded-full text-sm font-medium ${y.riskLevel==="Low"?"bg-green-100 text-green-800":y.riskLevel==="Moderate"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:y.riskLevel})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Price Sensitivity (1% yield change)"}),o.jsxs("div",{className:"space-y-2 text-sm",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Duration Effect:"}),o.jsxs("span",{className:"font-medium",children:[y.durationRisk.toFixed(2),"%"]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Convexity Adjustment:"}),o.jsxs("span",{className:"font-medium",children:[y.convexityAdjustment.toFixed(2),"%"]})]}),o.jsxs("div",{className:"flex justify-between border-t pt-2",children:[o.jsx("span",{className:"font-medium",children:"Total Price Change:"}),o.jsxs("span",{className:"font-bold text-red-600",children:[y.totalPriceSensitivity.toFixed(2),"%"]})]})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"Current Yield"}),o.jsxs("p",{className:"text-lg font-medium text-gray-900",children:[y.currentYield.toFixed(2),"%"]})]})]})]})]})]})})},fz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(""),[y,m]=f.useState(""),[h,g]=f.useState(""),[v,w]=f.useState(""),[q,k]=f.useState(""),[p,x]=f.useState(""),[M,b]=f.useState(null),[C,S]=f.useState(!1),[j,D]=f.useState(!1),[A,oe]=f.useState(""),[ee,de]=f.useState(""),[se,Xa]=f.useState(""),[be,At]=f.useState(""),[I,N]=f.useState(""),[F,U]=f.useState(null),[R,st]=f.useState(""),[P,Ht]=f.useState(""),[K,ht]=f.useState(""),[Z2,MM]=f.useState(null),_2=()=>{if(A&&ee&&se&&be&&I){const H=parseFloat(A),De=parseFloat(ee),We=parseFloat(se)/100,ut=parseFloat(be)/100,ka=parseFloat(I)/100,ma=H+De,Nt=(H/ma*We+De/ma*ut*(1-ka))*100;U(Nt)}},W2=()=>{F!==null&&(g(F.toFixed(2)),S(!1))},G2=()=>{F!==null&&(Ht(F.toFixed(2)),S(!1),D(!0))},Ka=()=>{if(R&&P&&K){const H=parseFloat(R),De=parseFloat(P)/100,We=parseFloat(K)/100,ut=H*(1+We)/(De-We);MM(ut)}},Qa=()=>{K&&(w(K),D(!1))};return f.useEffect(()=>{A&&ee&&se&&be&&I&&_2()},[A,ee,se,be,I]),f.useEffect(()=>{R&&P&&K&&Ka()},[R,P,K]),f.useEffect(()=>{if(e&&a&&c&&l&&d&&y&&h&&v&&q&&p){const H=parseFloat(e),De=parseFloat(a)/100,We=parseFloat(c)/100,ut=parseFloat(l)/100,ka=parseFloat(d)/100,ma=parseFloat(y)/100,Nt=parseFloat(h)/100,Q=parseFloat(v)/100,Vt=parseFloat(q),lj=parseFloat(p),VL=5,xa=[];let ga=H;for(let Rt=1;Rt<=VL;Rt++){ga=ga*(1+De);const uj=ga*We*(1-ut),yj=ga*ka,pj=ga*ma*De,kj=uj-yj-pj;xa.push(kj)}let wM=0;for(let Rt=0;Rt<xa.length;Rt++)wM+=xa[Rt]/Math.pow(1+Nt,Rt+1);const RL=xa[xa.length-1]*(1+Q)/(Nt-Q),DL=RL/Math.pow(1+Nt,VL),$2=wM+DL,TL=$2-lj,dj=TL/Vt,sj=$2/H,hj=$2/(H*We);b({cashFlows:xa,pvCashFlows:wM,terminalValue:RL,pvTerminalValue:DL,enterpriseValue:$2,equityValue:TL,sharePrice:dj,evRevenue:sj,evEbitda:hj,projectedRevenue:ga/(1+De)})}},[e,a,c,l,d,y,h,v,q,p]),o.jsxs("div",{className:"max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 md:py-8",children:[o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8",children:[o.jsx("h2",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6",children:"DCF Valuation Calculator"}),o.jsx("p",{className:"text-sm md:text-base text-gray-600 mb-4 md:mb-6",children:"Calculate company valuation using Discounted Cash Flow analysis"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8",children:[o.jsxs("div",{className:"space-y-4 md:space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Current Revenue ($)"}),o.jsx("input",{type:"number",value:e,onChange:H=>t(H.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Revenue Growth Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:a,onChange:H=>r(H.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"EBITDA Margin (%)"}),o.jsx("input",{type:"number",step:"0.1",value:c,onChange:H=>i(H.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Tax Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:l,onChange:H=>s(H.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"CapEx (% of Revenue)"}),o.jsx("input",{type:"number",step:"0.1",value:d,onChange:H=>u(H.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Working Capital (% of Revenue)"}),o.jsx("input",{type:"number",step:"0.1",value:y,onChange:H=>m(H.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"WACC - Discount Rate (%)"}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"number",step:"0.1",value:h,onChange:H=>g(H.target.value),className:"flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., 8.5"}),o.jsx("button",{onClick:()=>S(!0),className:"px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 text-sm",title:"Calculate WACC",children:o.jsx(ia,{size:16})})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Terminal Growth Rate (%)"}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"number",step:"0.1",value:v,onChange:H=>w(H.target.value),className:"flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., 2.5"}),o.jsx("button",{onClick:()=>D(!0),className:"px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1 text-sm",title:"Calculate Terminal Value",children:o.jsx(ia,{size:16})})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Shares Outstanding"}),o.jsx("input",{type:"number",value:q,onChange:H=>k(H.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Net Debt ($)"}),o.jsx("input",{type:"number",value:p,onChange:H=>x(H.target.value),className:"w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 md:p-6",children:[o.jsx("h3",{className:"text-base md:text-lg font-semibold text-gray-900 mb-4",children:"DCF Valuation Results"}),M&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Intrinsic Share Price"}),o.jsxs("p",{className:"text-lg md:text-2xl font-bold text-green-600",children:["$",M.sharePrice.toFixed(2)]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Enterprise Value"}),o.jsxs("p",{className:"text-base md:text-xl font-semibold text-blue-600",children:["$",(M.enterpriseValue/1e6).toFixed(0),"M"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Equity Value"}),o.jsxs("p",{className:"text-base md:text-lg font-medium text-purple-600",children:["$",(M.equityValue/1e6).toFixed(0),"M"]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs text-gray-600",children:"EV/Revenue"}),o.jsxs("p",{className:"text-sm md:text-base font-medium text-orange-600",children:[M.evRevenue.toFixed(1),"x"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs text-gray-600",children:"EV/EBITDA"}),o.jsxs("p",{className:"text-sm md:text-base font-medium text-red-600",children:[M.evEbitda.toFixed(1),"x"]})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"PV of Cash Flows (5Y)"}),o.jsxs("p",{className:"text-sm md:text-base font-medium text-gray-900",children:["$",(M.pvCashFlows/1e6).toFixed(0),"M"]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"PV of Terminal Value"}),o.jsxs("p",{className:"text-sm md:text-base font-medium text-gray-900",children:["$",(M.pvTerminalValue/1e6).toFixed(0),"M"]})]}),o.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg",children:[o.jsx("h4",{className:"font-medium text-blue-900 mb-2 text-xs md:text-sm",children:"DCF Components"}),o.jsxs("div",{className:"text-xs text-blue-700 space-y-1",children:[o.jsx("p",{children:"• 5-year cash flow projection"}),o.jsx("p",{children:"• Terminal value calculation"}),o.jsx("p",{children:"• WACC discount rate applied"}),o.jsx("p",{children:"• Net debt subtracted from EV"})]})]})]})]})]})]}),C&&o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsx("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"flex justify-between items-center mb-6",children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900",children:"WACC Calculator"}),o.jsx("button",{onClick:()=>S(!1),className:"text-gray-500 hover:text-gray-700 text-2xl",children:"×"})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Market Value of Equity ($)"}),o.jsx("input",{type:"number",value:A,onChange:H=>oe(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., 1000000000"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Market Value of Debt ($)"}),o.jsx("input",{type:"number",value:ee,onChange:H=>de(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., 300000000"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Cost of Equity (%)"}),o.jsx("input",{type:"number",step:"0.1",value:se,onChange:H=>Xa(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., 10"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Cost of Debt (%)"}),o.jsx("input",{type:"number",step:"0.1",value:be,onChange:H=>At(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., 5"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tax Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:I,onChange:H=>N(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., 21"})]}),F!==null&&o.jsxs("div",{className:"bg-blue-50 rounded-lg p-4 border border-blue-200",children:[o.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Calculated WACC"}),o.jsxs("p",{className:"text-3xl font-bold text-blue-600",children:[F.toFixed(2),"%"]}),o.jsxs("div",{className:"mt-4 text-xs text-gray-600",children:[o.jsx("p",{className:"font-medium mb-1",children:"Formula:"}),o.jsx("p",{children:"WACC = (E/V × Re) + (D/V × Rd × (1 - Tc))"}),o.jsx("p",{className:"mt-2",children:"Where:"}),o.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-2",children:[o.jsx("li",{children:"E = Market value of equity"}),o.jsx("li",{children:"D = Market value of debt"}),o.jsx("li",{children:"V = E + D (Total value)"}),o.jsx("li",{children:"Re = Cost of equity"}),o.jsx("li",{children:"Rd = Cost of debt"}),o.jsx("li",{children:"Tc = Tax rate"})]})]})]}),o.jsxs("div",{className:"flex gap-3 pt-4",children:[o.jsx("button",{onClick:W2,disabled:F===null,className:"flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium",children:"Use in DCF"}),o.jsx("button",{onClick:G2,disabled:F===null,className:"flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium",children:"Use in Terminal Growth"})]})]})]})})}),j&&o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:o.jsx("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"flex justify-between items-center mb-6",children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900",children:"Terminal Value Calculator"}),o.jsx("button",{onClick:()=>D(!1),className:"text-gray-500 hover:text-gray-700 text-2xl",children:"×"})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Final Year Free Cash Flow ($)"}),o.jsx("input",{type:"number",value:R,onChange:H=>st(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"e.g., 100000000"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WACC - Discount Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:P,onChange:H=>Ht(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"e.g., 8.5"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Terminal Growth Rate (%)"}),o.jsx("input",{type:"number",step:"0.1",value:K,onChange:H=>ht(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"e.g., 2.5"})]}),Z2!==null&&o.jsxs("div",{className:"bg-green-50 rounded-lg p-4 border border-green-200",children:[o.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Terminal Value"}),o.jsxs("p",{className:"text-3xl font-bold text-green-600",children:["$",(Z2/1e6).toFixed(0),"M"]}),o.jsxs("div",{className:"mt-4 text-xs text-gray-600",children:[o.jsx("p",{className:"font-medium mb-1",children:"Formula:"}),o.jsx("p",{children:"TV = FCF × (1 + g) / (WACC - g)"}),o.jsx("p",{className:"mt-2",children:"Where:"}),o.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-2",children:[o.jsx("li",{children:"TV = Terminal Value"}),o.jsx("li",{children:"FCF = Final year Free Cash Flow"}),o.jsx("li",{children:"g = Terminal growth rate"}),o.jsx("li",{children:"WACC = Weighted Average Cost of Capital"})]})]})]}),o.jsx("div",{className:"flex gap-3 pt-4",children:o.jsx("button",{onClick:Qa,disabled:!K,className:"flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium",children:"Use Growth Rate in DCF"})})]})]})})})]})},vz=()=>{const[e,t]=f.useState(""),[a,r]=f.useState(""),[c,i]=f.useState(""),[l,s]=f.useState(""),[d,u]=f.useState(""),[y,m]=f.useState(""),[h,g]=f.useState(""),[v,w]=f.useState(""),[q,k]=f.useState(""),[p,x]=f.useState(""),[M,b]=f.useState(""),[C,S]=f.useState(""),[j,D]=f.useState(""),[A,oe]=f.useState(""),[ee,de]=f.useState(""),[se,Xa]=f.useState(""),[be,At]=f.useState(""),[I,N]=f.useState(""),[F,U]=f.useState(""),[R,st]=f.useState(null);return f.useEffect(()=>{if(e&&a&&c&&l){const P={revenue:parseFloat(e),ebitda:parseFloat(a),earnings:parseFloat(c),shares:parseFloat(l)},K=[{revenue:parseFloat(d),ev:parseFloat(y),ebitda:parseFloat(h),earnings:parseFloat(v),marketCap:parseFloat(q)},{revenue:parseFloat(p),ev:parseFloat(M),ebitda:parseFloat(C),earnings:parseFloat(j),marketCap:parseFloat(A)},{revenue:parseFloat(ee),ev:parseFloat(se),ebitda:parseFloat(be),earnings:parseFloat(I),marketCap:parseFloat(F)}].map(Q=>({evRevenue:Q.ev/Q.revenue,evEbitda:Q.ev/Q.ebitda,peRatio:Q.marketCap/Q.earnings})),ht=K.map(Q=>Q.evRevenue).sort((Q,Vt)=>Q-Vt),Z2=K.map(Q=>Q.evEbitda).sort((Q,Vt)=>Q-Vt),MM=K.map(Q=>Q.peRatio).sort((Q,Vt)=>Q-Vt),_2=ht[1],W2=Z2[1],G2=MM[1],Ka=P.revenue*_2,Qa=P.ebitda*W2,H=P.earnings*G2,De=Ka/P.shares,We=Qa/P.shares,ut=H/P.shares,ka=(Ka+Qa)/2,ma=(ka+H)/2,Nt=(De+We+ut)/3;st({multiples:K,medianEVRevenue:_2,medianEVEbitda:W2,medianPE:G2,evByRevenue:Ka,evByEbitda:Qa,marketCapByEarnings:H,sharePriceByRevenue:De,sharePriceByEbitda:We,sharePriceByEarnings:ut,averageEV:ka,averageMarketCap:ma,averageSharePrice:Nt})}},[e,a,c,l,d,y,h,v,q,p,M,C,j,A,ee,se,be,I,F]),o.jsx("div",{className:"max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 md:py-8",children:o.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8",children:[o.jsx("h2",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6",children:"Comparative Analysis Calculator"}),o.jsx("p",{className:"text-sm md:text-base text-gray-600 mb-4 md:mb-6",children:"Value companies using trading multiples from comparable companies"}),o.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6",children:[o.jsxs("div",{className:"bg-blue-50 rounded-lg p-4 md:p-6",children:[o.jsx("h3",{className:"text-base md:text-lg font-semibold text-blue-900 mb-4",children:"Target Company"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Revenue ($)"}),o.jsx("input",{type:"number",value:e,onChange:P=>t(P.target.value),className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"EBITDA ($)"}),o.jsx("input",{type:"number",value:a,onChange:P=>r(P.target.value),className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Net Earnings ($)"}),o.jsx("input",{type:"number",value:c,onChange:P=>i(P.target.value),className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs md:text-sm font-medium text-gray-700 mb-2",children:"Shares Outstanding"}),o.jsx("input",{type:"number",value:l,onChange:P=>s(P.target.value),className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]})]}),o.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 md:p-6",children:[o.jsx("h3",{className:"text-base md:text-lg font-semibold text-gray-900 mb-4",children:"Comparable Companies"}),o.jsxs("div",{className:"mb-6",children:[o.jsx("h4",{className:"text-sm font-medium text-gray-800 mb-3",children:"Company 1"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsx("input",{type:"number",placeholder:"Revenue",value:d,onChange:P=>u(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Enterprise Value",value:y,onChange:P=>m(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"EBITDA",value:h,onChange:P=>g(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Earnings",value:v,onChange:P=>w(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Market Cap",value:q,onChange:P=>k(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 col-span-2"})]})]}),o.jsxs("div",{className:"mb-6",children:[o.jsx("h4",{className:"text-sm font-medium text-gray-800 mb-3",children:"Company 2"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsx("input",{type:"number",placeholder:"Revenue",value:p,onChange:P=>x(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Enterprise Value",value:M,onChange:P=>b(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"EBITDA",value:C,onChange:P=>S(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Earnings",value:j,onChange:P=>D(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Market Cap",value:A,onChange:P=>oe(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 col-span-2"})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-medium text-gray-800 mb-3",children:"Company 3"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsx("input",{type:"number",placeholder:"Revenue",value:ee,onChange:P=>de(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Enterprise Value",value:se,onChange:P=>Xa(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"EBITDA",value:be,onChange:P=>At(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Earnings",value:I,onChange:P=>N(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"}),o.jsx("input",{type:"number",placeholder:"Market Cap",value:F,onChange:P=>U(P.target.value),className:"px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 col-span-2"})]})]})]}),o.jsxs("div",{className:"bg-green-50 rounded-lg p-4 md:p-6",children:[o.jsx("h3",{className:"text-base md:text-lg font-semibold text-green-900 mb-4",children:"Valuation Results"}),R&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-200",children:[o.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Average Share Price"}),o.jsxs("p",{className:"text-lg md:text-2xl font-bold text-green-600",children:["$",R.averageSharePrice.toFixed(2)]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-3 border border-gray-200",children:[o.jsx("h4",{className:"text-xs font-medium text-gray-900 mb-2",children:"Median Multiples"}),o.jsxs("div",{className:"space-y-1 text-xs",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"EV/Revenue:"}),o.jsxs("span",{className:"font-medium",children:[R.medianEVRevenue.toFixed(1),"x"]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"EV/EBITDA:"}),o.jsxs("span",{className:"font-medium",children:[R.medianEVEbitda.toFixed(1),"x"]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"P/E Ratio:"}),o.jsxs("span",{className:"font-medium",children:[R.medianPE.toFixed(1),"x"]})]})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-3 border border-gray-200",children:[o.jsx("h4",{className:"text-xs font-medium text-gray-900 mb-2",children:"Share Price by Multiple"}),o.jsxs("div",{className:"space-y-1 text-xs",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"By Revenue:"}),o.jsxs("span",{className:"font-medium",children:["$",R.sharePriceByRevenue.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"By EBITDA:"}),o.jsxs("span",{className:"font-medium",children:["$",R.sharePriceByEbitda.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"By Earnings:"}),o.jsxs("span",{className:"font-medium",children:["$",R.sharePriceByEarnings.toFixed(2)]})]})]})]}),o.jsxs("div",{className:"bg-white rounded-lg p-3 border border-gray-200",children:[o.jsx("h4",{className:"text-xs font-medium text-gray-900 mb-2",children:"Implied Valuations"}),o.jsxs("div",{className:"space-y-1 text-xs",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Enterprise Value:"}),o.jsxs("span",{className:"font-medium",children:["$",(R.averageEV/1e6).toFixed(0),"M"]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Market Cap:"}),o.jsxs("span",{className:"font-medium",children:["$",(R.averageMarketCap/1e6).toFixed(0),"M"]})]})]})]}),o.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg",children:[o.jsx("h4",{className:"font-medium text-blue-900 mb-2 text-xs",children:"Analysis Method"}),o.jsxs("div",{className:"text-xs text-blue-700 space-y-1",children:[o.jsx("p",{children:"• Uses median multiples from comps"}),o.jsx("p",{children:"• EV/Revenue & EV/EBITDA multiples"}),o.jsx("p",{children:"• P/E ratio for equity valuation"}),o.jsx("p",{children:"• Average of all methods"})]})]})]})]})]})]})})};function Mz(){const[e,t]=f.useState("category-selection"),[a,r]=f.useState(null),c=d=>{t(d)},i=d=>{r(d),t("category-landing")},l=()=>{e==="category-landing"?(t("category-selection"),r(null)):t("category-landing")},s=()=>{switch(e){case"category-selection":return o.jsx(XM,{onSelectCategory:i});case"category-landing":return a?o.jsx(Xq,{category:a,onSelectCalculator:c,onBack:l}):o.jsx(XM,{onSelectCategory:i});case"simple-interest":return o.jsx(nz,{});case"compound-interest":return o.jsx(az,{});case"currency-converter":return o.jsx(rz,{});case"percentage":return o.jsx(lz,{});case"tip-calculator":return o.jsx(dz,{});case"mortgage":return o.jsx(oz,{});case"bond-yield":return o.jsx(iz,{});case"black-scholes":return o.jsx(cz,{});case"investment-growth":return o.jsx(sz,{});case"loan-payment":return o.jsx(hz,{});case"retirement-planning":return o.jsx(uz,{});case"tax-calculator":return o.jsx(yz,{});case"present-value":return o.jsx(pz,{});case"portfolio-optimization":return o.jsx(kz,{});case"value-at-risk":return o.jsx(mz,{});case"capm":return o.jsx(xz,{});case"bond-duration":return o.jsx(gz,{});case"dcf-valuation":return o.jsx(fz,{});case"comparative-analysis":return o.jsx(vz,{});default:return o.jsx(XM,{onSelectCategory:i})}};return o.jsxs("div",{className:"min-h-screen bg-gray-50",children:[o.jsx(Gq,{currentView:e,onBack:l}),s()]})}ij(document.getElementById("root")).render(o.jsx(f.StrictMode,{children:o.jsx(Mz,{})}));

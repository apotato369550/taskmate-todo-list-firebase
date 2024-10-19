function Rw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var py={exports:{}},bl={},my={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),Cw=Symbol.for("react.portal"),kw=Symbol.for("react.fragment"),Nw=Symbol.for("react.strict_mode"),Dw=Symbol.for("react.profiler"),xw=Symbol.for("react.provider"),Vw=Symbol.for("react.context"),Ow=Symbol.for("react.forward_ref"),Lw=Symbol.for("react.suspense"),Mw=Symbol.for("react.memo"),bw=Symbol.for("react.lazy"),Lp=Symbol.iterator;function Fw(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yy=Object.assign,_y={};function ji(t,e,n){this.props=t,this.context=e,this.refs=_y,this.updater=n||gy}ji.prototype.isReactComponent={};ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vy(){}vy.prototype=ji.prototype;function Kh(t,e,n){this.props=t,this.context=e,this.refs=_y,this.updater=n||gy}var Gh=Kh.prototype=new vy;Gh.constructor=Kh;yy(Gh,ji.prototype);Gh.isPureReactComponent=!0;var Mp=Array.isArray,Ey=Object.prototype.hasOwnProperty,Qh={current:null},wy={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ey.call(e,r)&&!wy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:vo,type:t,key:s,ref:o,props:i,_owner:Qh.current}}function Uw(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function jw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bp=/\/+/g;function $u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jw(""+t.key):e.toString(36)}function Pa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case Cw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$u(o,0):r,Mp(i)?(n="",t!=null&&(n=t.replace(bp,"$&/")+"/"),Pa(i,e,n,"",function(h){return h})):i!=null&&(Yh(i)&&(i=Uw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+$u(s,l);o+=Pa(s,e,n,u,i)}else if(u=Fw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+$u(s,l++),o+=Pa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(t,e,n){if(t==null)return t;var r=[],i=0;return Pa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Bw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Ca={transition:null},zw={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:Qh};function Iy(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:ra,forEach:function(t,e,n){ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ra(t,function(){e++}),e},toArray:function(t){return ra(t,function(e){return e})||[]},only:function(t){if(!Yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=ji;Z.Fragment=kw;Z.Profiler=Dw;Z.PureComponent=Kh;Z.StrictMode=Nw;Z.Suspense=Lw;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zw;Z.act=Iy;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=yy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ey.call(e,u)&&!wy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:vo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:Vw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xw,_context:t},t.Consumer=t};Z.createElement=Ty;Z.createFactory=function(t){var e=Ty.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:Ow,render:t}};Z.isValidElement=Yh;Z.lazy=function(t){return{$$typeof:bw,_payload:{_status:-1,_result:t},_init:Bw}};Z.memo=function(t,e){return{$$typeof:Mw,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ca.transition;Ca.transition={};try{t()}finally{Ca.transition=e}};Z.unstable_act=Iy;Z.useCallback=function(t,e){return ot.current.useCallback(t,e)};Z.useContext=function(t){return ot.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ot.current.useEffect(t,e)};Z.useId=function(){return ot.current.useId()};Z.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ot.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};Z.useRef=function(t){return ot.current.useRef(t)};Z.useState=function(t){return ot.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ot.current.useTransition()};Z.version="18.3.1";my.exports=Z;var j=my.exports;const $w=Pw(j),Ww=Rw({__proto__:null,default:$w},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hw=j,qw=Symbol.for("react.element"),Kw=Symbol.for("react.fragment"),Gw=Object.prototype.hasOwnProperty,Qw=Hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yw={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Gw.call(e,r)&&!Yw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qw,type:t,key:s,ref:o,props:i,_owner:Qw.current}}bl.Fragment=Kw;bl.jsx=Sy;bl.jsxs=Sy;py.exports=bl;var B=py.exports,Ay={exports:{}},wt={},Ry={exports:{}},Py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ge=J-1>>>1,ae=z[ge];if(0<i(ae,Q))z[ge]=Q,z[J]=ae,J=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ge=0,ae=z.length,Ie=ae>>>1;ge<Ie;){var Zt=2*(ge+1)-1,en=z[Zt],tn=Zt+1,nn=z[tn];if(0>i(en,J))tn<ae&&0>i(nn,en)?(z[ge]=nn,z[tn]=J,ge=tn):(z[ge]=en,z[Zt]=J,ge=Zt);else if(tn<ae&&0>i(nn,J))z[ge]=nn,z[tn]=J,ge=tn;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,S=!1,P=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=z)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function V(z){if(N=!1,A(z),!P)if(n(u)!==null)P=!0,Yi(b);else{var Q=n(h);Q!==null&&Jt(V,Q.startTime-z)}}function b(z,Q){P=!1,N&&(N=!1,I(y),y=-1),S=!0;var J=g;try{for(A(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||z&&!R());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,g=p.priorityLevel;var ae=ge(p.expirationTime<=Q);Q=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(u)&&r(u),A(Q)}else r(u);p=n(u)}if(p!==null)var Ie=!0;else{var Zt=n(h);Zt!==null&&Jt(V,Zt.startTime-Q),Ie=!1}return Ie}finally{p=null,g=J,S=!1}}var U=!1,E=null,y=-1,v=5,w=-1;function R(){return!(t.unstable_now()-w<v)}function k(){if(E!==null){var z=t.unstable_now();w=z;var Q=!0;try{Q=E(!0,z)}finally{Q?T():(U=!1,E=null)}}else U=!1}var T;if(typeof _=="function")T=function(){_(k)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,fr=It.port2;It.port1.onmessage=k,T=function(){fr.postMessage(null)}}else T=function(){D(k,0)};function Yi(z){E=z,U||(U=!0,T())}function Jt(z,Q){y=D(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||S||(P=!0,Yi(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(z,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=J+ae,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:ae,sortIndex:-1},J>ge?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(N?(I(y),y=-1):N=!0,Jt(V,J-ge))):(z.sortIndex=ae,e(u,z),P||S||(P=!0,Yi(b))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var Q=g;return function(){var J=g;g=Q;try{return z.apply(this,arguments)}finally{g=J}}}})(Py);Ry.exports=Py;var Xw=Ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jw=j,Et=Xw;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cy=new Set,Ws={};function jr(t,e){Ai(t,e),Ai(t+"Capture",e)}function Ai(t,e){for(Ws[t]=e,t=0;t<e.length;t++)Cy.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=Object.prototype.hasOwnProperty,Zw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},Up={};function eT(t){return Pc.call(Up,t)?!0:Pc.call(Fp,t)?!1:Zw.test(t)?Up[t]=!0:(Fp[t]=!0,!1)}function tT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nT(t,e,n,r){if(e===null||typeof e>"u"||tT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xh=/[\-:]([a-z])/g;function Jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xh,Jh);$e[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xh,Jh);$e[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xh,Jh);$e[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zh(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nT(e,n,i,r)&&(n=null),r||i===null?eT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=Jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ia=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),ky=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),kc=Symbol.for("react.suspense"),Nc=Symbol.for("react.suspense_list"),nd=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),Dy=Symbol.for("react.offscreen"),jp=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Wu;function Es(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var Hu=!1;function qu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function rT(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function Dc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ni:return"Fragment";case ti:return"Portal";case Cc:return"Profiler";case ed:return"StrictMode";case kc:return"Suspense";case Nc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ny:return(t.displayName||"Context")+".Consumer";case ky:return(t._context.displayName||"Context")+".Provider";case td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nd:return e=t.displayName||null,e!==null?e:Dc(t.type)||"Memo";case Nn:e=t._payload,t=t._init;try{return Dc(t(e))}catch{}}return null}function iT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dc(e);case 8:return e===ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sT(t){var e=xy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sa(t){t._valueTracker||(t._valueTracker=sT(t))}function Vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Oy(t,e){e=e.checked,e!=null&&Zh(t,"checked",e,!1)}function Vc(t,e){Oy(t,e);var n=nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oc(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oc(t,e,n){(e!=="number"||Ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(ws(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Ly(t,e){var n=nr(e.value),r=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function My(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?My(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,by=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oT=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){oT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function Fy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function Uy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aT=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(t,e){if(e){if(aT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uc=null;function rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jc=null,mi=null,gi=null;function Hp(t){if(t=To(t)){if(typeof jc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=zl(e),jc(t.stateNode,t.type,e))}}function jy(t){mi?gi?gi.push(t):gi=[t]:mi=t}function By(){if(mi){var t=mi,e=gi;if(gi=mi=null,Hp(t),e)for(t=0;t<e.length;t++)Hp(e[t])}}function zy(t,e){return t(e)}function $y(){}var Ku=!1;function Wy(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return zy(t,e,n)}finally{Ku=!1,(mi!==null||gi!==null)&&($y(),By())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Bc=!1;if(mn)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Bc=!1}function lT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ds=!1,Qa=null,Ya=!1,zc=null,uT={onError:function(t){Ds=!0,Qa=t}};function cT(t,e,n,r,i,s,o,l,u){Ds=!1,Qa=null,lT.apply(uT,arguments)}function hT(t,e,n,r,i,s,o,l,u){if(cT.apply(this,arguments),Ds){if(Ds){var h=Qa;Ds=!1,Qa=null}else throw Error(M(198));Ya||(Ya=!0,zc=h)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qp(t){if(Br(t)!==t)throw Error(M(188))}function dT(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qp(i),t;if(s===r)return qp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function qy(t){return t=dT(t),t!==null?Ky(t):null}function Ky(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ky(t);if(e!==null)return e;t=t.sibling}return null}var Gy=Et.unstable_scheduleCallback,Kp=Et.unstable_cancelCallback,fT=Et.unstable_shouldYield,pT=Et.unstable_requestPaint,Ae=Et.unstable_now,mT=Et.unstable_getCurrentPriorityLevel,id=Et.unstable_ImmediatePriority,Qy=Et.unstable_UserBlockingPriority,Xa=Et.unstable_NormalPriority,gT=Et.unstable_LowPriority,Yy=Et.unstable_IdlePriority,Fl=null,Ht=null;function yT(t){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:ET,_T=Math.log,vT=Math.LN2;function ET(t){return t>>>=0,t===0?32:31-(_T(t)/vT|0)|0}var aa=64,la=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ts(l):(s&=o,s!==0&&(r=Ts(s)))}else o=n&~i,o!==0?r=Ts(o):s!==0&&(r=Ts(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),i=1<<n,r|=t[n],e&=~i;return r}function wT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Lt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=wT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xy(){var t=aa;return aa<<=1,!(aa&4194240)&&(aa=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function IT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Jy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zy,od,e_,t_,n_,Wc=!1,ua=[],zn=null,$n=null,Wn=null,Ks=new Map,Gs=new Map,xn=[],ST="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=To(e),e!==null&&od(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AT(t,e,n,r,i){switch(e){case"focusin":return zn=fs(zn,t,e,n,r,i),!0;case"dragenter":return $n=fs($n,t,e,n,r,i),!0;case"mouseover":return Wn=fs(Wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ks.set(s,fs(Ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gs.set(s,fs(Gs.get(s)||null,t,e,n,r,i)),!0}return!1}function r_(t){var e=wr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=Hy(n),e!==null){t.blockedOn=e,n_(t.priority,function(){e_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uc=r,n.target.dispatchEvent(r),Uc=null}else return e=To(n),e!==null&&od(e),t.blockedOn=n,!1;e.shift()}return!0}function Qp(t,e,n){ka(t)&&n.delete(e)}function RT(){Wc=!1,zn!==null&&ka(zn)&&(zn=null),$n!==null&&ka($n)&&($n=null),Wn!==null&&ka(Wn)&&(Wn=null),Ks.forEach(Qp),Gs.forEach(Qp)}function ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Wc||(Wc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,RT)))}function Qs(t){function e(i){return ps(i,t)}if(0<ua.length){ps(ua[0],t);for(var n=1;n<ua.length;n++){var r=ua[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&ps(zn,t),$n!==null&&ps($n,t),Wn!==null&&ps(Wn,t),Ks.forEach(e),Gs.forEach(e),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)r_(n),n.blockedOn===null&&xn.shift()}var yi=In.ReactCurrentBatchConfig,Za=!0;function PT(t,e,n,r){var i=oe,s=yi.transition;yi.transition=null;try{oe=1,ad(t,e,n,r)}finally{oe=i,yi.transition=s}}function CT(t,e,n,r){var i=oe,s=yi.transition;yi.transition=null;try{oe=4,ad(t,e,n,r)}finally{oe=i,yi.transition=s}}function ad(t,e,n,r){if(Za){var i=Hc(t,e,n,r);if(i===null)ic(t,e,r,el,n),Gp(t,r);else if(AT(i,t,e,n,r))r.stopPropagation();else if(Gp(t,r),e&4&&-1<ST.indexOf(t)){for(;i!==null;){var s=To(i);if(s!==null&&Zy(s),s=Hc(t,e,n,r),s===null&&ic(t,e,r,el,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ic(t,e,r,null,n)}}var el=null;function Hc(t,e,n,r){if(el=null,t=rd(r),t=wr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function i_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mT()){case id:return 1;case Qy:return 4;case Xa:case gT:return 16;case Yy:return 536870912;default:return 16}default:return 16}}var Fn=null,ld=null,Na=null;function s_(){if(Na)return Na;var t,e=ld,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Na=i.slice(t,1<r?1-r:void 0)}function Da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Yp(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:Yp,this.isPropagationStopped=Yp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),e}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ud=Tt(Bi),wo=ve({},Bi,{view:0,detail:0}),kT=Tt(wo),Qu,Yu,ms,Ul=ve({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ms&&(ms&&t.type==="mousemove"?(Qu=t.screenX-ms.screenX,Yu=t.screenY-ms.screenY):Yu=Qu=0,ms=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Xp=Tt(Ul),NT=ve({},Ul,{dataTransfer:0}),DT=Tt(NT),xT=ve({},wo,{relatedTarget:0}),Xu=Tt(xT),VT=ve({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),OT=Tt(VT),LT=ve({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MT=Tt(LT),bT=ve({},Bi,{data:0}),Jp=Tt(bT),FT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jT[t])?!!e[t]:!1}function cd(){return BT}var zT=ve({},wo,{key:function(t){if(t.key){var e=FT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(t){return t.type==="keypress"?Da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$T=Tt(zT),WT=ve({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Tt(WT),HT=ve({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),qT=Tt(HT),KT=ve({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),GT=Tt(KT),QT=ve({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YT=Tt(QT),XT=[9,13,27,32],hd=mn&&"CompositionEvent"in window,xs=null;mn&&"documentMode"in document&&(xs=document.documentMode);var JT=mn&&"TextEvent"in window&&!xs,o_=mn&&(!hd||xs&&8<xs&&11>=xs),em=" ",tm=!1;function a_(t,e){switch(t){case"keyup":return XT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ri=!1;function ZT(t,e){switch(t){case"compositionend":return l_(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return t=e.data,t===em&&tm?null:t;default:return null}}function eI(t,e){if(ri)return t==="compositionend"||!hd&&a_(t,e)?(t=s_(),Na=ld=Fn=null,ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o_&&e.locale!=="ko"?null:e.data;default:return null}}var tI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tI[t.type]:e==="textarea"}function u_(t,e,n,r){jy(r),e=tl(e,"onChange"),0<e.length&&(n=new ud("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vs=null,Ys=null;function nI(t){E_(t,0)}function jl(t){var e=oi(t);if(Vy(e))return t}function rI(t,e){if(t==="change")return e}var c_=!1;if(mn){var Ju;if(mn){var Zu="oninput"in document;if(!Zu){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),Zu=typeof rm.oninput=="function"}Ju=Zu}else Ju=!1;c_=Ju&&(!document.documentMode||9<document.documentMode)}function im(){Vs&&(Vs.detachEvent("onpropertychange",h_),Ys=Vs=null)}function h_(t){if(t.propertyName==="value"&&jl(Ys)){var e=[];u_(e,Ys,t,rd(t)),Wy(nI,e)}}function iI(t,e,n){t==="focusin"?(im(),Vs=e,Ys=n,Vs.attachEvent("onpropertychange",h_)):t==="focusout"&&im()}function sI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Ys)}function oI(t,e){if(t==="click")return jl(e)}function aI(t,e){if(t==="input"||t==="change")return jl(e)}function lI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:lI;function Xs(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function om(t,e){var n=sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sm(n)}}function d_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f_(){for(var t=window,e=Ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uI(t){var e=f_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d_(n.ownerDocument.documentElement,n)){if(r!==null&&dd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=om(n,s);var o=om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cI=mn&&"documentMode"in document&&11>=document.documentMode,ii=null,qc=null,Os=null,Kc=!1;function am(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kc||ii==null||ii!==Ga(r)||(r=ii,"selectionStart"in r&&dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Xs(Os,r)||(Os=r,r=tl(qc,"onSelect"),0<r.length&&(e=new ud("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var si={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},ec={},p_={};mn&&(p_=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Bl(t){if(ec[t])return ec[t];if(!si[t])return t;var e=si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p_)return ec[t]=e[n];return t}var m_=Bl("animationend"),g_=Bl("animationiteration"),y_=Bl("animationstart"),__=Bl("transitionend"),v_=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){v_.set(t,e),jr(e,[t])}for(var tc=0;tc<lm.length;tc++){var nc=lm[tc],hI=nc.toLowerCase(),dI=nc[0].toUpperCase()+nc.slice(1);ar(hI,"on"+dI)}ar(m_,"onAnimationEnd");ar(g_,"onAnimationIteration");ar(y_,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(__,"onTransitionEnd");Ai("onMouseEnter",["mouseout","mouseover"]);Ai("onMouseLeave",["mouseout","mouseover"]);Ai("onPointerEnter",["pointerout","pointerover"]);Ai("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function um(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hT(r,e,void 0,t),t.currentTarget=null}function E_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;um(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;um(i,l,h),s=u}}}if(Ya)throw t=zc,Ya=!1,zc=null,t}function de(t,e){var n=e[Jc];n===void 0&&(n=e[Jc]=new Set);var r=t+"__bubble";n.has(r)||(w_(e,t,2,!1),n.add(r))}function rc(t,e,n){var r=0;e&&(r|=4),w_(n,t,r,e)}var da="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[da]){t[da]=!0,Cy.forEach(function(n){n!=="selectionchange"&&(fI.has(n)||rc(n,!1,t),rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[da]||(e[da]=!0,rc("selectionchange",!1,e))}}function w_(t,e,n,r){switch(i_(e)){case 1:var i=PT;break;case 4:i=CT;break;default:i=ad}n=i.bind(null,e,n,t),i=void 0,!Bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ic(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Wy(function(){var h=s,f=rd(n),p=[];e:{var g=v_.get(t);if(g!==void 0){var S=ud,P=t;switch(t){case"keypress":if(Da(n)===0)break e;case"keydown":case"keyup":S=$T;break;case"focusin":P="focus",S=Xu;break;case"focusout":P="blur",S=Xu;break;case"beforeblur":case"afterblur":S=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=DT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=qT;break;case m_:case g_:case y_:S=OT;break;case __:S=GT;break;case"scroll":S=kT;break;case"wheel":S=YT;break;case"copy":case"cut":case"paste":S=MT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Zp}var N=(e&4)!==0,D=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;N=[];for(var _=h,A;_!==null;){A=_;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,I!==null&&(V=qs(_,I),V!=null&&N.push(Zs(_,V,A)))),D)break;_=_.return}0<N.length&&(g=new S(g,P,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==Uc&&(P=n.relatedTarget||n.fromElement)&&(wr(P)||P[gn]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(P=n.relatedTarget||n.toElement,S=h,P=P?wr(P):null,P!==null&&(D=Br(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(S=null,P=h),S!==P)){if(N=Xp,V="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=Zp,V="onPointerLeave",I="onPointerEnter",_="pointer"),D=S==null?g:oi(S),A=P==null?g:oi(P),g=new N(V,_+"leave",S,n,f),g.target=D,g.relatedTarget=A,V=null,wr(f)===h&&(N=new N(I,_+"enter",P,n,f),N.target=A,N.relatedTarget=D,V=N),D=V,S&&P)t:{for(N=S,I=P,_=0,A=N;A;A=Xr(A))_++;for(A=0,V=I;V;V=Xr(V))A++;for(;0<_-A;)N=Xr(N),_--;for(;0<A-_;)I=Xr(I),A--;for(;_--;){if(N===I||I!==null&&N===I.alternate)break t;N=Xr(N),I=Xr(I)}N=null}else N=null;S!==null&&cm(p,g,S,N,!1),P!==null&&D!==null&&cm(p,D,P,N,!0)}}e:{if(g=h?oi(h):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var b=rI;else if(nm(g))if(c_)b=aI;else{b=sI;var U=iI}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=oI);if(b&&(b=b(t,h))){u_(p,b,n,f);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Oc(g,"number",g.value)}switch(U=h?oi(h):window,t){case"focusin":(nm(U)||U.contentEditable==="true")&&(ii=U,qc=h,Os=null);break;case"focusout":Os=qc=ii=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,am(p,n,f);break;case"selectionchange":if(cI)break;case"keydown":case"keyup":am(p,n,f)}var E;if(hd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ri?a_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(o_&&n.locale!=="ko"&&(ri||y!=="onCompositionStart"?y==="onCompositionEnd"&&ri&&(E=s_()):(Fn=f,ld="value"in Fn?Fn.value:Fn.textContent,ri=!0)),U=tl(h,y),0<U.length&&(y=new Jp(y,t,null,n,f),p.push({event:y,listeners:U}),E?y.data=E:(E=l_(n),E!==null&&(y.data=E)))),(E=JT?ZT(t,n):eI(t,n))&&(h=tl(h,"onBeforeInput"),0<h.length&&(f=new Jp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=E))}E_(p,e)})}function Zs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qs(t,n),s!=null&&r.unshift(Zs(t,s,i)),s=qs(t,e),s!=null&&r.push(Zs(t,s,i))),t=t.return}return r}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=qs(n,s),u!=null&&o.unshift(Zs(n,u,l))):i||(u=qs(n,s),u!=null&&o.push(Zs(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pI=/\r\n?/g,mI=/\u0000|\uFFFD/g;function hm(t){return(typeof t=="string"?t:""+t).replace(pI,`
`).replace(mI,"")}function fa(t,e,n){if(e=hm(e),hm(t)!==e&&n)throw Error(M(425))}function nl(){}var Gc=null,Qc=null;function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,gI=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,yI=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(t){return dm.resolve(null).then(t).catch(_I)}:Xc;function _I(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qs(e)}function Hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zi=Math.random().toString(36).slice(2),$t="__reactFiber$"+zi,eo="__reactProps$"+zi,gn="__reactContainer$"+zi,Jc="__reactEvents$"+zi,vI="__reactListeners$"+zi,EI="__reactHandles$"+zi;function wr(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fm(t);t!==null;){if(n=t[$t])return n;t=fm(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[$t]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function zl(t){return t[eo]||null}var Zc=[],ai=-1;function lr(t){return{current:t}}function pe(t){0>ai||(t.current=Zc[ai],Zc[ai]=null,ai--)}function ce(t,e){ai++,Zc[ai]=t.current,t.current=e}var rr={},et=lr(rr),ht=lr(!1),Cr=rr;function Ri(t,e){var n=t.type.contextTypes;if(!n)return rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function rl(){pe(ht),pe(et)}function pm(t,e,n){if(et.current!==rr)throw Error(M(168));ce(et,e),ce(ht,n)}function T_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,iT(t)||"Unknown",i));return ve({},n,r)}function il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Cr=et.current,ce(et,t),ce(ht,ht.current),!0}function mm(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=T_(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,pe(ht),pe(et),ce(et,t)):pe(ht),ce(ht,n)}var an=null,$l=!1,oc=!1;function I_(t){an===null?an=[t]:an.push(t)}function wI(t){$l=!0,I_(t)}function ur(){if(!oc&&an!==null){oc=!0;var t=0,e=oe;try{var n=an;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,$l=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),Gy(id,ur),i}finally{oe=e,oc=!1}}return null}var li=[],ui=0,sl=null,ol=0,St=[],At=0,kr=null,ln=1,un="";function _r(t,e){li[ui++]=ol,li[ui++]=sl,sl=t,ol=e}function S_(t,e,n){St[At++]=ln,St[At++]=un,St[At++]=kr,kr=t;var r=ln;t=un;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var s=32-Lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ln=1<<32-Lt(e)+i|n<<i|r,un=s+t}else ln=1<<s|n<<i|r,un=t}function fd(t){t.return!==null&&(_r(t,1),S_(t,1,0))}function pd(t){for(;t===sl;)sl=li[--ui],li[ui]=null,ol=li[--ui],li[ui]=null;for(;t===kr;)kr=St[--At],St[At]=null,un=St[--At],St[At]=null,ln=St[--At],St[At]=null}var _t=null,gt=null,me=!1,Ot=null;function A_(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_t=t,gt=Hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_t=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:ln,overflow:un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_t=t,gt=null,!0):!1;default:return!1}}function eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function th(t){if(me){var e=gt;if(e){var n=e;if(!gm(t,e)){if(eh(t))throw Error(M(418));e=Hn(n.nextSibling);var r=_t;e&&gm(t,e)?A_(r,n):(t.flags=t.flags&-4097|2,me=!1,_t=t)}}else{if(eh(t))throw Error(M(418));t.flags=t.flags&-4097|2,me=!1,_t=t}}}function ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function pa(t){if(t!==_t)return!1;if(!me)return ym(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yc(t.type,t.memoizedProps)),e&&(e=gt)){if(eh(t))throw R_(),Error(M(418));for(;e;)A_(t,e),e=Hn(e.nextSibling)}if(ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=_t?Hn(t.stateNode.nextSibling):null;return!0}function R_(){for(var t=gt;t;)t=Hn(t.nextSibling)}function Pi(){gt=_t=null,me=!1}function md(t){Ot===null?Ot=[t]:Ot.push(t)}var TI=In.ReactCurrentBatchConfig;function gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ma(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _m(t){var e=t._init;return e(t._payload)}function P_(t){function e(I,_){if(t){var A=I.deletions;A===null?(I.deletions=[_],I.flags|=16):A.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=Qn(I,_),I.index=0,I.sibling=null,I}function s(I,_,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<_?(I.flags|=2,_):A):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,A,V){return _===null||_.tag!==6?(_=fc(A,I.mode,V),_.return=I,_):(_=i(_,A),_.return=I,_)}function u(I,_,A,V){var b=A.type;return b===ni?f(I,_,A.props.children,V,A.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Nn&&_m(b)===_.type)?(V=i(_,A.props),V.ref=gs(I,_,A),V.return=I,V):(V=Fa(A.type,A.key,A.props,null,I.mode,V),V.ref=gs(I,_,A),V.return=I,V)}function h(I,_,A,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=pc(A,I.mode,V),_.return=I,_):(_=i(_,A.children||[]),_.return=I,_)}function f(I,_,A,V,b){return _===null||_.tag!==7?(_=Rr(A,I.mode,V,b),_.return=I,_):(_=i(_,A),_.return=I,_)}function p(I,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=fc(""+_,I.mode,A),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ia:return A=Fa(_.type,_.key,_.props,null,I.mode,A),A.ref=gs(I,null,_),A.return=I,A;case ti:return _=pc(_,I.mode,A),_.return=I,_;case Nn:var V=_._init;return p(I,V(_._payload),A)}if(ws(_)||hs(_))return _=Rr(_,I.mode,A,null),_.return=I,_;ma(I,_)}return null}function g(I,_,A,V){var b=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return b!==null?null:l(I,_,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ia:return A.key===b?u(I,_,A,V):null;case ti:return A.key===b?h(I,_,A,V):null;case Nn:return b=A._init,g(I,_,b(A._payload),V)}if(ws(A)||hs(A))return b!==null?null:f(I,_,A,V,null);ma(I,A)}return null}function S(I,_,A,V,b){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(A)||null,l(_,I,""+V,b);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ia:return I=I.get(V.key===null?A:V.key)||null,u(_,I,V,b);case ti:return I=I.get(V.key===null?A:V.key)||null,h(_,I,V,b);case Nn:var U=V._init;return S(I,_,A,U(V._payload),b)}if(ws(V)||hs(V))return I=I.get(A)||null,f(_,I,V,b,null);ma(_,V)}return null}function P(I,_,A,V){for(var b=null,U=null,E=_,y=_=0,v=null;E!==null&&y<A.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var w=g(I,E,A[y],V);if(w===null){E===null&&(E=v);break}t&&E&&w.alternate===null&&e(I,E),_=s(w,_,y),U===null?b=w:U.sibling=w,U=w,E=v}if(y===A.length)return n(I,E),me&&_r(I,y),b;if(E===null){for(;y<A.length;y++)E=p(I,A[y],V),E!==null&&(_=s(E,_,y),U===null?b=E:U.sibling=E,U=E);return me&&_r(I,y),b}for(E=r(I,E);y<A.length;y++)v=S(E,I,y,A[y],V),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),_=s(v,_,y),U===null?b=v:U.sibling=v,U=v);return t&&E.forEach(function(R){return e(I,R)}),me&&_r(I,y),b}function N(I,_,A,V){var b=hs(A);if(typeof b!="function")throw Error(M(150));if(A=b.call(A),A==null)throw Error(M(151));for(var U=b=null,E=_,y=_=0,v=null,w=A.next();E!==null&&!w.done;y++,w=A.next()){E.index>y?(v=E,E=null):v=E.sibling;var R=g(I,E,w.value,V);if(R===null){E===null&&(E=v);break}t&&E&&R.alternate===null&&e(I,E),_=s(R,_,y),U===null?b=R:U.sibling=R,U=R,E=v}if(w.done)return n(I,E),me&&_r(I,y),b;if(E===null){for(;!w.done;y++,w=A.next())w=p(I,w.value,V),w!==null&&(_=s(w,_,y),U===null?b=w:U.sibling=w,U=w);return me&&_r(I,y),b}for(E=r(I,E);!w.done;y++,w=A.next())w=S(E,I,y,w.value,V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),_=s(w,_,y),U===null?b=w:U.sibling=w,U=w);return t&&E.forEach(function(k){return e(I,k)}),me&&_r(I,y),b}function D(I,_,A,V){if(typeof A=="object"&&A!==null&&A.type===ni&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ia:e:{for(var b=A.key,U=_;U!==null;){if(U.key===b){if(b=A.type,b===ni){if(U.tag===7){n(I,U.sibling),_=i(U,A.props.children),_.return=I,I=_;break e}}else if(U.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Nn&&_m(b)===U.type){n(I,U.sibling),_=i(U,A.props),_.ref=gs(I,U,A),_.return=I,I=_;break e}n(I,U);break}else e(I,U);U=U.sibling}A.type===ni?(_=Rr(A.props.children,I.mode,V,A.key),_.return=I,I=_):(V=Fa(A.type,A.key,A.props,null,I.mode,V),V.ref=gs(I,_,A),V.return=I,I=V)}return o(I);case ti:e:{for(U=A.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(I,_.sibling),_=i(_,A.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=pc(A,I.mode,V),_.return=I,I=_}return o(I);case Nn:return U=A._init,D(I,_,U(A._payload),V)}if(ws(A))return P(I,_,A,V);if(hs(A))return N(I,_,A,V);ma(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,A),_.return=I,I=_):(n(I,_),_=fc(A,I.mode,V),_.return=I,I=_),o(I)):n(I,_)}return D}var Ci=P_(!0),C_=P_(!1),al=lr(null),ll=null,ci=null,gd=null;function yd(){gd=ci=ll=null}function _d(t){var e=al.current;pe(al),t._currentValue=e}function nh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _i(t,e){ll=t,gd=ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(gd!==t)if(t={context:t,memoizedValue:e,next:null},ci===null){if(ll===null)throw Error(M(308));ci=t,ll.dependencies={lanes:0,firstContext:t}}else ci=ci.next=t;return e}var Tr=null;function vd(t){Tr===null?Tr=[t]:Tr.push(t)}function k_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vd(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,vd(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sd(t,n)}}function vm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,r){var i=t.updateQueue;Dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(g=e,S=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){p=P.call(S,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,g=typeof P=="function"?P.call(S,p,g):P,g==null)break e;p=ve({},p,g);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=p):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=p}}function Em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Io={},qt=lr(Io),to=lr(Io),no=lr(Io);function Ir(t){if(t===Io)throw Error(M(174));return t}function wd(t,e){switch(ce(no,e),ce(to,t),ce(qt,Io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mc(e,t)}pe(qt),ce(qt,e)}function ki(){pe(qt),pe(to),pe(no)}function D_(t){Ir(no.current);var e=Ir(qt.current),n=Mc(e,t.type);e!==n&&(ce(to,t),ce(qt,n))}function Td(t){to.current===t&&(pe(qt),pe(to))}var ye=lr(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ac=[];function Id(){for(var t=0;t<ac.length;t++)ac[t]._workInProgressVersionPrimary=null;ac.length=0}var Va=In.ReactCurrentDispatcher,lc=In.ReactCurrentBatchConfig,Nr=0,_e=null,Ne=null,Oe=null,hl=!1,Ls=!1,ro=0,II=0;function Ge(){throw Error(M(321))}function Sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function Ad(t,e,n,r,i,s){if(Nr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Va.current=t===null||t.memoizedState===null?PI:CI,t=n(r,i),Ls){s=0;do{if(Ls=!1,ro=0,25<=s)throw Error(M(301));s+=1,Oe=Ne=null,e.updateQueue=null,Va.current=kI,t=n(r,i)}while(Ls)}if(Va.current=dl,e=Ne!==null&&Ne.next!==null,Nr=0,Oe=Ne=_e=null,hl=!1,e)throw Error(M(300));return t}function Rd(){var t=ro!==0;return ro=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function kt(){if(Ne===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Oe===null?_e.memoizedState:Oe.next;if(e!==null)Oe=e,Ne=t;else{if(t===null)throw Error(M(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function io(t,e){return typeof e=="function"?e(t):e}function uc(t){var e=kt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Nr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,Dr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ft(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cc(t){var e=kt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function x_(){}function V_(t,e){var n=_e,r=kt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,Pd(M_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,so(9,L_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(M(349));Nr&30||O_(n,e,i)}return i}function O_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L_(t,e,n,r){e.value=n,e.getSnapshot=r,b_(e)&&F_(t)}function M_(t,e,n){return n(function(){b_(e)&&F_(t)})}function b_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function F_(t){var e=yn(t,1);e!==null&&Mt(e,t,1,-1)}function wm(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:t},e.queue=t,t=t.dispatch=RI.bind(null,_e,t),[e.memoizedState,t]}function so(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function U_(){return kt().memoizedState}function Oa(t,e,n,r){var i=zt();_e.flags|=t,i.memoizedState=so(1|e,n,void 0,r===void 0?null:r)}function Wl(t,e,n,r){var i=kt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Sd(r,o.deps)){i.memoizedState=so(e,n,s,r);return}}_e.flags|=t,i.memoizedState=so(1|e,n,s,r)}function Tm(t,e){return Oa(8390656,8,t,e)}function Pd(t,e){return Wl(2048,8,t,e)}function j_(t,e){return Wl(4,2,t,e)}function B_(t,e){return Wl(4,4,t,e)}function z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $_(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,z_.bind(null,e,t),n)}function Cd(){}function W_(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function H_(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function q_(t,e,n){return Nr&21?(Ft(n,e)||(n=Xy(),_e.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function SI(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=lc.transition;lc.transition={};try{t(!1),e()}finally{oe=n,lc.transition=r}}function K_(){return kt().memoizedState}function AI(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G_(t))Q_(e,n);else if(n=k_(t,e,n,r),n!==null){var i=st();Mt(n,t,r,i),Y_(n,e,r)}}function RI(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G_(t))Q_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,o)){var u=e.interleaved;u===null?(i.next=i,vd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=k_(t,e,i,r),n!==null&&(i=st(),Mt(n,t,r,i),Y_(n,e,r))}}function G_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function Q_(t,e){Ls=hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sd(t,n)}}var dl={readContext:Ct,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},PI={readContext:Ct,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:Tm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AI.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:wm,useDebugValue:Cd,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=wm(!1),e=t[0];return t=SI.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=zt();if(me){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Le===null)throw Error(M(349));Nr&30||O_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tm(M_.bind(null,r,s,t),[t]),r.flags|=2048,so(9,L_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=Le.identifierPrefix;if(me){var n=un,r=ln;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=II++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CI={readContext:Ct,useCallback:W_,useContext:Ct,useEffect:Pd,useImperativeHandle:$_,useInsertionEffect:j_,useLayoutEffect:B_,useMemo:H_,useReducer:uc,useRef:U_,useState:function(){return uc(io)},useDebugValue:Cd,useDeferredValue:function(t){var e=kt();return q_(e,Ne.memoizedState,t)},useTransition:function(){var t=uc(io)[0],e=kt().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:V_,useId:K_,unstable_isNewReconciler:!1},kI={readContext:Ct,useCallback:W_,useContext:Ct,useEffect:Pd,useImperativeHandle:$_,useInsertionEffect:j_,useLayoutEffect:B_,useMemo:H_,useReducer:cc,useRef:U_,useState:function(){return cc(io)},useDebugValue:Cd,useDeferredValue:function(t){var e=kt();return Ne===null?e.memoizedState=t:q_(e,Ne.memoizedState,t)},useTransition:function(){var t=cc(io)[0],e=kt().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:V_,useId:K_,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=Gn(t),s=fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Mt(e,t,i,r),xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=Gn(t),s=fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Mt(e,t,i,r),xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=Gn(t),i=fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(Mt(e,t,r,n),xa(e,t,r))}};function Im(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function X_(t,e,n){var r=!1,i=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=dt(e)?Cr:et.current,r=e.contextTypes,s=(r=r!=null)?Ri(t,i):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hl.enqueueReplaceState(e,e.state,null)}function ih(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ed(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=dt(e)?Cr:et.current,i.context=Ri(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hl.enqueueReplaceState(i,i.state,null),ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ni(t,e){try{var n="",r=e;do n+=rT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NI=typeof WeakMap=="function"?WeakMap:Map;function J_(t,e,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pl||(pl=!0,mh=r),sh(t,e)},n}function Z_(t,e,n){n=fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sh(t,e),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Am(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=WI.bind(null,t,e,n),e.then(t,t))}function Rm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var DI=In.ReactCurrentOwner,ct=!1;function it(t,e,n,r){e.child=t===null?C_(e,null,n,r):Ci(e,t.child,n,r)}function Cm(t,e,n,r,i){n=n.render;var s=e.ref;return _i(e,i),r=Ad(t,e,n,r,s,i),n=Rd(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(me&&n&&fd(e),e.flags|=1,it(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Md(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ev(t,e,s,r,i)):(t=Fa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return _n(t,e,i)}return e.flags|=1,t=Qn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ev(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xs(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,_n(t,e,i)}return oh(t,e,n,r,i)}function tv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(di,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(di,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(di,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(di,mt),mt|=r;return it(t,e,i,n),e.child}function nv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function oh(t,e,n,r,i){var s=dt(n)?Cr:et.current;return s=Ri(e,s),_i(e,i),n=Ad(t,e,n,r,s,i),r=Rd(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(me&&r&&fd(e),e.flags|=1,it(t,e,n,i),e.child)}function Nm(t,e,n,r,i){if(dt(n)){var s=!0;il(e)}else s=!1;if(_i(e,i),e.stateNode===null)La(t,e),X_(e,n,r),ih(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=dt(n)?Cr:et.current,h=Ri(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Sm(e,o,r,h),Dn=!1;var g=e.memoizedState;o.state=g,ul(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ht.current||Dn?(typeof f=="function"&&(rh(e,n,f,r),u=e.memoizedState),(l=Dn||Im(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,N_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:xt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=dt(n)?Cr:et.current,u=Ri(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Sm(e,o,r,u),Dn=!1,g=e.memoizedState,o.state=g,ul(e,r,o,i);var P=e.memoizedState;l!==p||g!==P||ht.current||Dn?(typeof S=="function"&&(rh(e,n,S,r),P=e.memoizedState),(h=Dn||Im(e,n,h,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ah(t,e,n,r,s,i)}function ah(t,e,n,r,i,s){nv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mm(e,n,!1),_n(t,e,s);r=e.stateNode,DI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ci(e,t.child,null,s),e.child=Ci(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&mm(e,n,!0),e.child}function rv(t){var e=t.stateNode;e.pendingContext?pm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pm(t,e.context,!1),wd(t,e.containerInfo)}function Dm(t,e,n,r,i){return Pi(),md(i),e.flags|=256,it(t,e,n,r),e.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function iv(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return th(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gl(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uh(n),e.memoizedState=lh,t):kd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Qn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Qn(l,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lh,r}return s=t.child,t=s.sibling,r=Qn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kd(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ga(t,e,n,r){return r!==null&&md(r),Ci(e,t.child,null,n),t=kd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hc(Error(M(422))),ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gl({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ci(e,t.child,null,o),e.child.memoizedState=uh(o),e.memoizedState=lh,s);if(!(e.mode&1))return ga(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=hc(s,r,void 0),ga(t,e,o,r)}if(l=(o&t.childLanes)!==0,ct||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),Mt(r,t,i,-1))}return Ld(),r=hc(Error(M(421))),ga(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Hn(i.nextSibling),_t=e,me=!0,Ot=null,t!==null&&(St[At++]=ln,St[At++]=un,St[At++]=kr,ln=t.id,un=t.overflow,kr=e),e=kd(e,r.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nh(t.return,e,n)}function dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dc(e,!0,n,null,s);break;case"together":dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VI(t,e,n){switch(e.tag){case 3:rv(e),Pi();break;case 5:D_(e);break;case 1:dt(e.type)&&il(e);break;case 4:wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(al,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?iv(t,e,n):(ce(ye,ye.current&1),t=_n(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,tv(t,e,n)}return _n(t,e,n)}var ov,ch,av,lv;ov=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ch=function(){};av=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(qt.current);var s=null;switch(n){case"input":i=xc(t,i),r=xc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Lc(t,i),r=Lc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nl)}bc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ws.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};lv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ys(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OI(t,e,n){var r=e.pendingProps;switch(pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return dt(e.type)&&rl(),Qe(e),null;case 3:return r=e.stateNode,ki(),pe(ht),pe(et),Id(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(_h(Ot),Ot=null))),ch(t,e),Qe(e),null;case 5:Td(e);var i=Ir(no.current);if(n=e.type,t!==null&&e.stateNode!=null)av(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Qe(e),null}if(t=Ir(qt.current),pa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$t]=e,r[eo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)de(Is[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Bp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":$p(r,s),de("invalid",r)}bc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&fa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&fa(r.textContent,l,t),i=["children",""+l]):Ws.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":sa(r),zp(r,s,!0);break;case"textarea":sa(r),Wp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=My(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$t]=e,t[eo]=r,ov(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)de(Is[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Bp(t,r),i=xc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":$p(t,r),i=Lc(t,r),de("invalid",t);break;default:i=r}bc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Uy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&by(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hs(t,u):typeof u=="number"&&Hs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ws.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Zh(t,s,u,o))}switch(n){case"input":sa(t),zp(t,r,!1);break;case"textarea":sa(t),Wp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)lv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Ir(no.current),Ir(qt.current),pa(e)){if(r=e.stateNode,n=e.memoizedProps,r[$t]=e,(s=r.nodeValue!==n)&&(t=_t,t!==null))switch(t.tag){case 3:fa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&gt!==null&&e.mode&1&&!(e.flags&128))R_(),Pi(),e.flags|=98560,s=!1;else if(s=pa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[$t]=e}else Pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Ot!==null&&(_h(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?De===0&&(De=3):Ld())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return ki(),ch(t,e),t===null&&Js(e.stateNode.containerInfo),Qe(e),null;case 10:return _d(e.type._context),Qe(e),null;case 17:return dt(e.type)&&rl(),Qe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ys(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cl(t),o!==null){for(e.flags|=128,ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Di&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=cl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Qe(e),null}else 2*Ae()-s.renderingStartTime>Di&&n!==1073741824&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return Od(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function LI(t,e){switch(pd(e),e.tag){case 1:return dt(e.type)&&rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(),pe(ht),pe(et),Id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Td(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return ki(),null;case 10:return _d(e.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var ya=!1,Je=!1,MI=typeof WeakSet=="function"?WeakSet:Set,$=null;function hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function hh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Vm=!1;function bI(t,e){if(Gc=Za,t=f_(),dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)g=p,p=S;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qc={focusedElem:t,selectionRange:n},Za=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,D=P.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:xt(e.type,N),D);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){Te(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=Vm,Vm=!1,P}function Ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hh(e,n,s)}i=i.next}while(i!==r)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uv(t){var e=t.alternate;e!==null&&(t.alternate=null,uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$t],delete e[eo],delete e[Jc],delete e[vI],delete e[EI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cv(t){return t.tag===5||t.tag===3||t.tag===4}function Om(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}function ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}var Fe=null,Vt=!1;function Cn(t,e,n){for(n=n.child;n!==null;)hv(t,e,n),n=n.sibling}function hv(t,e,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Je||hi(n,e);case 6:var r=Fe,i=Vt;Fe=null,Cn(t,e,n),Fe=r,Vt=i,Fe!==null&&(Vt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Vt?(t=Fe,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),Qs(t)):sc(Fe,n.stateNode));break;case 4:r=Fe,i=Vt,Fe=n.stateNode.containerInfo,Vt=!0,Cn(t,e,n),Fe=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hh(n,e,o),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!Je&&(hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Cn(t,e,n),Je=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function Lm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MI),e.forEach(function(r){var i=qI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Vt=!1;break e;case 3:Fe=l.stateNode.containerInfo,Vt=!0;break e;case 4:Fe=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(Fe===null)throw Error(M(160));hv(s,o,i),Fe=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dv(e,t),e=e.sibling}function dv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Bt(t),r&4){try{Ms(3,t,t.return),ql(3,t)}catch(N){Te(t,t.return,N)}try{Ms(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:Dt(e,t),Bt(t),r&512&&n!==null&&hi(n,n.return);break;case 5:if(Dt(e,t),Bt(t),r&512&&n!==null&&hi(n,n.return),t.flags&32){var i=t.stateNode;try{Hs(i,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Oy(i,s),Fc(l,o);var h=Fc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Uy(i,p):f==="dangerouslySetInnerHTML"?by(i,p):f==="children"?Hs(i,p):Zh(i,f,p,h)}switch(l){case"input":Vc(i,s);break;case"textarea":Ly(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?pi(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?pi(i,!!s.multiple,s.defaultValue,!0):pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[eo]=s}catch(N){Te(t,t.return,N)}}break;case 6:if(Dt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Te(t,t.return,N)}}break;case 3:if(Dt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:Dt(e,t),Bt(t);break;case 13:Dt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xd=Ae())),r&4&&Lm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Dt(e,t),Je=h):Dt(e,t),Bt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,S=g.child,g.tag){case 0:case 11:case 14:case 15:Ms(4,g,g.return);break;case 1:hi(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:hi(g,g.return);break;case 22:if(g.memoizedState!==null){bm(p);continue}}S!==null?(S.return=g,$=S):bm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Fy("display",o))}catch(N){Te(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){Te(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dt(e,t),Bt(t),r&4&&Lm(t);break;case 21:break;default:Dt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cv(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hs(i,""),r.flags&=-33);var s=Om(t);ph(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Om(t);fh(t,l,o);break;default:throw Error(M(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FI(t,e,n){$=t,fv(t)}function fv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ya;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=ya;var h=Je;if(ya=o,(Je=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Fm(i):u!==null?(u.return=o,$=u):Fm(i);for(;s!==null;)$=s,fv(s),s=s.sibling;$=i,ya=l,Je=h}Mm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Mm(t)}}function Mm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||ql(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Em(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Em(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Qs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Je||e.flags&512&&dh(e)}catch(g){Te(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function bm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Fm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{dh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{dh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var UI=Math.ceil,fl=In.ReactCurrentDispatcher,Nd=In.ReactCurrentOwner,Pt=In.ReactCurrentBatchConfig,re=0,Le=null,Pe=null,Be=0,mt=0,di=lr(0),De=0,oo=null,Dr=0,Kl=0,Dd=0,bs=null,lt=null,xd=0,Di=1/0,on=null,pl=!1,mh=null,Kn=null,_a=!1,Un=null,ml=0,Fs=0,gh=null,Ma=-1,ba=0;function st(){return re&6?Ae():Ma!==-1?Ma:Ma=Ae()}function Gn(t){return t.mode&1?re&2&&Be!==0?Be&-Be:TI.transition!==null?(ba===0&&(ba=Xy()),ba):(t=oe,t!==0||(t=window.event,t=t===void 0?16:i_(t.type)),t):1}function Mt(t,e,n,r){if(50<Fs)throw Fs=0,gh=null,Error(M(185));Eo(t,n,r),(!(re&2)||t!==Le)&&(t===Le&&(!(re&2)&&(Kl|=n),De===4&&Vn(t,Be)),ft(t,r),n===1&&re===0&&!(e.mode&1)&&(Di=Ae()+500,$l&&ur()))}function ft(t,e){var n=t.callbackNode;TT(t,e);var r=Ja(t,t===Le?Be:0);if(r===0)n!==null&&Kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kp(n),e===1)t.tag===0?wI(Um.bind(null,t)):I_(Um.bind(null,t)),yI(function(){!(re&6)&&ur()}),n=null;else{switch(Jy(r)){case 1:n=id;break;case 4:n=Qy;break;case 16:n=Xa;break;case 536870912:n=Yy;break;default:n=Xa}n=wv(n,pv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pv(t,e){if(Ma=-1,ba=0,re&6)throw Error(M(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=Ja(t,t===Le?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gl(t,r);else{e=r;var i=re;re|=2;var s=gv();(Le!==t||Be!==e)&&(on=null,Di=Ae()+500,Ar(t,e));do try{zI();break}catch(l){mv(t,l)}while(!0);yd(),fl.current=s,re=i,Pe!==null?e=0:(Le=null,Be=0,e=De)}if(e!==0){if(e===2&&(i=$c(t),i!==0&&(r=i,e=yh(t,i))),e===1)throw n=oo,Ar(t,0),Vn(t,r),ft(t,Ae()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!jI(i)&&(e=gl(t,r),e===2&&(s=$c(t),s!==0&&(r=s,e=yh(t,s))),e===1))throw n=oo,Ar(t,0),Vn(t,r),ft(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:vr(t,lt,on);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=xd+500-Ae(),10<e)){if(Ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xc(vr.bind(null,t,lt,on),e);break}vr(t,lt,on);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UI(r/1960))-r,10<r){t.timeoutHandle=Xc(vr.bind(null,t,lt,on),r);break}vr(t,lt,on);break;case 5:vr(t,lt,on);break;default:throw Error(M(329))}}}return ft(t,Ae()),t.callbackNode===n?pv.bind(null,t):null}function yh(t,e){var n=bs;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=gl(t,e),t!==2&&(e=lt,lt=n,e!==null&&_h(e)),t}function _h(t){lt===null?lt=t:lt.push.apply(lt,t)}function jI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~Dd,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function Um(t){if(re&6)throw Error(M(327));vi();var e=Ja(t,0);if(!(e&1))return ft(t,Ae()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var r=$c(t);r!==0&&(e=r,n=yh(t,r))}if(n===1)throw n=oo,Ar(t,0),Vn(t,e),ft(t,Ae()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,lt,on),ft(t,Ae()),null}function Vd(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Di=Ae()+500,$l&&ur())}}function xr(t){Un!==null&&Un.tag===0&&!(re&6)&&vi();var e=re;re|=1;var n=Pt.transition,r=oe;try{if(Pt.transition=null,oe=1,t)return t()}finally{oe=r,Pt.transition=n,re=e,!(re&6)&&ur()}}function Od(){mt=di.current,pe(di)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gI(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:ki(),pe(ht),pe(et),Id();break;case 5:Td(r);break;case 4:ki();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:_d(r.type._context);break;case 22:case 23:Od()}n=n.return}if(Le=t,Pe=t=Qn(t.current,null),Be=mt=e,De=0,oo=null,Dd=Kl=Dr=0,lt=bs=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tr=null}return t}function mv(t,e){do{var n=Pe;try{if(yd(),Va.current=dl,hl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(Nr=0,Oe=Ne=_e=null,Ls=!1,ro=0,Nd.current=null,n===null||n.return===null){De=1,oo=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Rm(o);if(S!==null){S.flags&=-257,Pm(S,o,l,s,e),S.mode&1&&Am(s,h,e),e=S,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Am(s,h,e),Ld();break e}u=Error(M(426))}}else if(me&&l.mode&1){var D=Rm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Pm(D,o,l,s,e),md(Ni(u,l));break e}}s=u=Ni(u,l),De!==4&&(De=2),bs===null?bs=[s]:bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=J_(s,u,e);vm(s,I);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Kn===null||!Kn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=Z_(s,l,e);vm(s,V);break e}}s=s.return}while(s!==null)}_v(n)}catch(b){e=b,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function gv(){var t=fl.current;return fl.current=dl,t===null?dl:t}function Ld(){(De===0||De===3||De===2)&&(De=4),Le===null||!(Dr&268435455)&&!(Kl&268435455)||Vn(Le,Be)}function gl(t,e){var n=re;re|=2;var r=gv();(Le!==t||Be!==e)&&(on=null,Ar(t,e));do try{BI();break}catch(i){mv(t,i)}while(!0);if(yd(),re=n,fl.current=r,Pe!==null)throw Error(M(261));return Le=null,Be=0,De}function BI(){for(;Pe!==null;)yv(Pe)}function zI(){for(;Pe!==null&&!fT();)yv(Pe)}function yv(t){var e=Ev(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?_v(t):Pe=e,Nd.current=null}function _v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LI(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Pe=null;return}}else if(n=OI(n,e,mt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);De===0&&(De=5)}function vr(t,e,n){var r=oe,i=Pt.transition;try{Pt.transition=null,oe=1,$I(t,e,n,r)}finally{Pt.transition=i,oe=r}return null}function $I(t,e,n,r){do vi();while(Un!==null);if(re&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(IT(t,s),t===Le&&(Pe=Le=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,wv(Xa,function(){return vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=oe;oe=1;var l=re;re|=4,Nd.current=null,bI(t,n),dv(n,t),uI(Qc),Za=!!Gc,Qc=Gc=null,t.current=n,FI(n),pT(),re=l,oe=o,Pt.transition=s}else t.current=n;if(_a&&(_a=!1,Un=t,ml=i),s=t.pendingLanes,s===0&&(Kn=null),yT(n.stateNode),ft(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pl)throw pl=!1,t=mh,mh=null,t;return ml&1&&t.tag!==0&&vi(),s=t.pendingLanes,s&1?t===gh?Fs++:(Fs=0,gh=t):Fs=0,ur(),null}function vi(){if(Un!==null){var t=Jy(ml),e=Pt.transition,n=oe;try{if(Pt.transition=null,oe=16>t?16:t,Un===null)var r=!1;else{if(t=Un,Un=null,ml=0,re&6)throw Error(M(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Ms(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,S=f.return;if(uv(f),f===h){$=null;break}if(g!==null){g.return=S,$=g;break}$=S}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ms(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ql(9,l)}}catch(b){Te(l,l.return,b)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(re=i,ur(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Fl,t)}catch{}r=!0}return r}finally{oe=n,Pt.transition=e}}return!1}function jm(t,e,n){e=Ni(n,e),e=J_(t,e,1),t=qn(t,e,1),e=st(),t!==null&&(Eo(t,1,e),ft(t,e))}function Te(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){t=Ni(n,t),t=Z_(e,t,1),e=qn(e,t,1),t=st(),e!==null&&(Eo(e,1,t),ft(e,t));break}}e=e.return}}function WI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(Be&n)===n&&(De===4||De===3&&(Be&130023424)===Be&&500>Ae()-xd?Ar(t,0):Dd|=n),ft(t,e)}function vv(t,e){e===0&&(t.mode&1?(e=la,la<<=1,!(la&130023424)&&(la=4194304)):e=1);var n=st();t=yn(t,e),t!==null&&(Eo(t,e,n),ft(t,n))}function HI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vv(t,n)}function qI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),vv(t,n)}var Ev;Ev=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ht.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,VI(t,e,n);ct=!!(t.flags&131072)}else ct=!1,me&&e.flags&1048576&&S_(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;La(t,e),t=e.pendingProps;var i=Ri(e,et.current);_i(e,n),i=Ad(null,e,r,t,i,n);var s=Rd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ed(e),i.updater=Hl,e.stateNode=i,i._reactInternals=e,ih(e,r,t,n),e=ah(null,e,r,!0,s,n)):(e.tag=0,me&&s&&fd(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(La(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GI(r),t=xt(r,t),i){case 0:e=oh(null,e,r,t,n);break e;case 1:e=Nm(null,e,r,t,n);break e;case 11:e=Cm(null,e,r,t,n);break e;case 14:e=km(null,e,r,xt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Nm(t,e,r,i,n);case 3:e:{if(rv(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,N_(t,e),ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ni(Error(M(423)),e),e=Dm(t,e,r,n,i);break e}else if(r!==i){i=Ni(Error(M(424)),e),e=Dm(t,e,r,n,i);break e}else for(gt=Hn(e.stateNode.containerInfo.firstChild),_t=e,me=!0,Ot=null,n=C_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pi(),r===i){e=_n(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return D_(e),t===null&&th(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yc(r,i)?o=null:s!==null&&Yc(r,s)&&(e.flags|=32),nv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&th(e),null;case 13:return iv(t,e,n);case 4:return wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ci(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Cm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(al,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!ht.current){e=_n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=fn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),nh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),nh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_i(e,n),i=Ct(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),km(t,e,r,i,n);case 15:return ev(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),La(t,e),e.tag=1,dt(r)?(t=!0,il(e)):t=!1,_i(e,n),X_(e,r,i),ih(e,r,i,n),ah(null,e,r,!0,t,n);case 19:return sv(t,e,n);case 22:return tv(t,e,n)}throw Error(M(156,e.tag))};function wv(t,e){return Gy(t,e)}function KI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new KI(t,e,n,r)}function Md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GI(t){if(typeof t=="function")return Md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===td)return 11;if(t===nd)return 14}return 2}function Qn(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ni:return Rr(n.children,i,s,e);case ed:o=8,i|=8;break;case Cc:return t=Rt(12,n,e,i|2),t.elementType=Cc,t.lanes=s,t;case kc:return t=Rt(13,n,e,i),t.elementType=kc,t.lanes=s,t;case Nc:return t=Rt(19,n,e,i),t.elementType=Nc,t.lanes=s,t;case Dy:return Gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ky:o=10;break e;case Ny:o=9;break e;case td:o=11;break e;case nd:o=14;break e;case Nn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function Gl(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=Dy,t.lanes=n,t.stateNode={isHidden:!1},t}function fc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bd(t,e,n,r,i,s,o,l,u){return t=new QI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(s),t}function YI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Tv(t){if(!t)return rr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(dt(n))return T_(t,n,e)}return e}function Iv(t,e,n,r,i,s,o,l,u){return t=bd(n,r,!0,t,i,s,o,l,u),t.context=Tv(null),n=t.current,r=st(),i=Gn(n),s=fn(r,i),s.callback=e??null,qn(n,s,i),t.current.lanes=i,Eo(t,i,r),ft(t,r),t}function Ql(t,e,n,r){var i=e.current,s=st(),o=Gn(i);return n=Tv(n),e.context===null?e.context=n:e.pendingContext=n,e=fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(Mt(t,i,o,s),xa(t,i,o)),o}function yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fd(t,e){Bm(t,e),(t=t.alternate)&&Bm(t,e)}function XI(){return null}var Sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ud(t){this._internalRoot=t}Yl.prototype.render=Ud.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Ql(t,e,null,null)};Yl.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){Ql(null,t,null,null)}),e[gn]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=t_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xn.length&&e!==0&&e<xn[n].priority;n++);xn.splice(n,0,t),n===0&&r_(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zm(){}function JI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=yl(o);s.call(h)}}var o=Iv(e,r,t,0,null,!1,!1,"",zm);return t._reactRootContainer=o,t[gn]=o.current,Js(t.nodeType===8?t.parentNode:t),xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=yl(u);l.call(h)}}var u=bd(t,0,!1,null,null,!1,!1,"",zm);return t._reactRootContainer=u,t[gn]=u.current,Js(t.nodeType===8?t.parentNode:t),xr(function(){Ql(e,u,n,r)}),u}function Jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=yl(o);l.call(u)}}Ql(e,o,t,i)}else o=JI(n,e,t,i,r);return yl(o)}Zy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(sd(e,n|1),ft(e,Ae()),!(re&6)&&(Di=Ae()+500,ur()))}break;case 13:xr(function(){var r=yn(t,1);if(r!==null){var i=st();Mt(r,t,1,i)}}),Fd(t,1)}};od=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=st();Mt(e,t,134217728,n)}Fd(t,134217728)}};e_=function(t){if(t.tag===13){var e=Gn(t),n=yn(t,e);if(n!==null){var r=st();Mt(n,t,e,r)}Fd(t,e)}};t_=function(){return oe};n_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};jc=function(t,e,n){switch(e){case"input":if(Vc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zl(r);if(!i)throw Error(M(90));Vy(r),Vc(r,i)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&pi(t,!!n.multiple,e,!1)}};zy=Vd;$y=xr;var ZI={usingClientEntryPoint:!1,Events:[To,oi,zl,jy,By,Vd]},_s={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qy(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||XI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{Fl=va.inject(e1),Ht=va}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZI;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(e))throw Error(M(200));return YI(t,e,null,n)};wt.createRoot=function(t,e){if(!jd(t))throw Error(M(299));var n=!1,r="",i=Sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bd(t,1,!1,null,null,n,!1,r,i),t[gn]=e.current,Js(t.nodeType===8?t.parentNode:t),new Ud(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=qy(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return xr(t)};wt.hydrate=function(t,e,n){if(!Xl(e))throw Error(M(200));return Jl(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!jd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Sv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Iv(e,null,t,1,n??null,i,!1,s,o),t[gn]=e.current,Js(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yl(e)};wt.render=function(t,e,n){if(!Xl(e))throw Error(M(200));return Jl(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(M(40));return t._reactRootContainer?(xr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};wt.unstable_batchedUpdates=Vd;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xl(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Jl(t,e,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),Ay.exports=wt;var t1=Ay.exports,Rv,$m=t1;Rv=$m.createRoot,$m.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ao.apply(this,arguments)}var jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(jn||(jn={}));const Wm="popstate";function n1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return vh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_l(i)}return i1(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function r1(){return Math.random().toString(36).substr(2,8)}function Hm(t,e){return{usr:t.state,key:t.key,idx:e}}function vh(t,e,n,r){return n===void 0&&(n=null),ao({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?$i(e):e,{state:n,key:e&&e.key||r||r1()})}function _l(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function $i(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function i1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=jn.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(ao({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=jn.Pop;let D=f(),I=D==null?null:D-h;h=D,u&&u({action:l,location:N.location,delta:I})}function g(D,I){l=jn.Push;let _=vh(N.location,D,I);h=f()+1;let A=Hm(_,h),V=N.createHref(_);try{o.pushState(A,"",V)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(V)}s&&u&&u({action:l,location:N.location,delta:1})}function S(D,I){l=jn.Replace;let _=vh(N.location,D,I);h=f();let A=Hm(_,h),V=N.createHref(_);o.replaceState(A,"",V),s&&u&&u({action:l,location:N.location,delta:0})}function P(D){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof D=="string"?D:_l(D);return _=_.replace(/ $/,"%20"),ke(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let N={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Wm,p),u=D,()=>{i.removeEventListener(Wm,p),u=null}},createHref(D){return e(i,D)},createURL:P,encodeLocation(D){let I=P(D);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:S,go(D){return o.go(D)}};return N}var qm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qm||(qm={}));function s1(t,e,n){return n===void 0&&(n="/"),o1(t,e,n,!1)}function o1(t,e,n,r){let i=typeof e=="string"?$i(e):e,s=Bd(i.pathname||"/",n);if(s==null)return null;let o=Cv(t);a1(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=_1(s);l=g1(o[u],h,r)}return l}function Cv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Yn([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Cv(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:p1(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of kv(s.path))i(s,o,u)}),e}function kv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=kv(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function a1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:m1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const l1=/^:[\w-]+$/,u1=3,c1=2,h1=1,d1=10,f1=-2,Km=t=>t==="*";function p1(t,e){let n=t.split("/"),r=n.length;return n.some(Km)&&(r+=f1),e&&(r+=c1),n.filter(i=>!Km(i)).reduce((i,s)=>i+(l1.test(s)?u1:s===""?h1:d1),r)}function m1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function g1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Gm({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!p&&h&&n&&!r[r.length-1].route.index&&(p=Gm({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Yn([s,p.pathname]),pathnameBase:T1(Yn([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Yn([s,p.pathnameBase]))}return o}function Gm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=y1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:g,isOptional:S}=f;if(g==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[p];return S&&!P?h[g]=void 0:h[g]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function y1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Bd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function v1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?$i(t):t;return{pathname:n?n.startsWith("/")?n:E1(n,e):e,search:I1(r),hash:S1(i)}}function E1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function w1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Nv(t,e){let n=w1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=$i(t):(i=ao({},t),ke(!i.pathname||!i.pathname.includes("?"),mc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),mc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),mc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=v1(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Yn=t=>t.join("/").replace(/\/\/+/g,"/"),T1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),I1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,S1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function A1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xv=["post","put","patch","delete"];new Set(xv);const R1=["get",...xv];new Set(R1);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lo.apply(this,arguments)}const zd=j.createContext(null),P1=j.createContext(null),zr=j.createContext(null),Zl=j.createContext(null),$r=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Vv=j.createContext(null);function C1(t,e){let{relative:n}=e===void 0?{}:e;So()||ke(!1);let{basename:r,navigator:i}=j.useContext(zr),{hash:s,pathname:o,search:l}=Lv(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Yn([r,o])),i.createHref({pathname:u,search:l,hash:s})}function So(){return j.useContext(Zl)!=null}function eu(){return So()||ke(!1),j.useContext(Zl).location}function Ov(t){j.useContext(zr).static||j.useLayoutEffect(t)}function tu(){let{isDataRoute:t}=j.useContext($r);return t?B1():k1()}function k1(){So()||ke(!1);let t=j.useContext(zd),{basename:e,future:n,navigator:r}=j.useContext(zr),{matches:i}=j.useContext($r),{pathname:s}=eu(),o=JSON.stringify(Nv(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return Ov(()=>{l.current=!0}),j.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=Dv(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Yn([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function Lv(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(zr),{matches:i}=j.useContext($r),{pathname:s}=eu(),o=JSON.stringify(Nv(i,r.v7_relativeSplatPath));return j.useMemo(()=>Dv(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function N1(t,e){return D1(t,e)}function D1(t,e,n,r){So()||ke(!1);let{navigator:i}=j.useContext(zr),{matches:s}=j.useContext($r),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=eu(),f;if(e){var p;let D=typeof e=="string"?$i(e):e;u==="/"||(p=D.pathname)!=null&&p.startsWith(u)||ke(!1),f=D}else f=h;let g=f.pathname||"/",S=g;if(u!=="/"){let D=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(D.length).join("/")}let P=s1(t,{pathname:S}),N=M1(P&&P.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:Yn([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:Yn([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&N?j.createElement(Zl.Provider,{value:{location:lo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:jn.Pop}},N):N}function x1(){let t=j1(),e=A1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const V1=j.createElement(x1,null);class O1 extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement($r.Provider,{value:this.props.routeContext},j.createElement(Vv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function L1(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(zd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement($r.Provider,{value:e},r)}function M1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ke(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:g,errors:S}=n,P=p.route.loader&&g[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||P){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let S,P=!1,N=null,D=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||V1,u&&(h<0&&g===0?(P=!0,D=null):h===g&&(P=!0,D=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),_=()=>{let A;return S?A=N:P?A=D:p.route.Component?A=j.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=f,j.createElement(L1,{match:p,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:A})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?j.createElement(O1,{location:n.location,revalidation:n.revalidation,component:N,error:S,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var Mv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Mv||{}),vl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vl||{});function b1(t){let e=j.useContext(zd);return e||ke(!1),e}function F1(t){let e=j.useContext(P1);return e||ke(!1),e}function U1(t){let e=j.useContext($r);return e||ke(!1),e}function bv(t){let e=U1(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function j1(){var t;let e=j.useContext(Vv),n=F1(vl.UseRouteError),r=bv(vl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function B1(){let{router:t}=b1(Mv.UseNavigateStable),e=bv(vl.UseNavigateStable),n=j.useRef(!1);return Ov(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,lo({fromRouteId:e},s)))},[t,e])}function Ss(t){ke(!1)}function z1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:s,static:o=!1,future:l}=t;So()&&ke(!1);let u=e.replace(/^\/*/,"/"),h=j.useMemo(()=>({basename:u,navigator:s,static:o,future:lo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=$i(r));let{pathname:f="/",search:p="",hash:g="",state:S=null,key:P="default"}=r,N=j.useMemo(()=>{let D=Bd(f,u);return D==null?null:{location:{pathname:D,search:p,hash:g,state:S,key:P},navigationType:i}},[u,f,p,g,S,P,i]);return N==null?null:j.createElement(zr.Provider,{value:h},j.createElement(Zl.Provider,{children:n,value:N}))}function $1(t){let{children:e,location:n}=t;return N1(Eh(e),n)}new Promise(()=>{});function Eh(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Eh(r.props.children,s));return}r.type!==Ss&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Eh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wh(){return wh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wh.apply(this,arguments)}function W1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function H1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function q1(t,e){return t.button===0&&(!e||e==="_self")&&!H1(t)}const K1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],G1="6";try{window.__reactRouterVersion=G1}catch{}const Q1="startTransition",Qm=Ww[Q1];function Y1(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=n1({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=j.useCallback(p=>{h&&Qm?Qm(()=>u(p)):u(p)},[u,h]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.createElement(z1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const X1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,El=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:f,unstable_viewTransition:p}=e,g=W1(e,K1),{basename:S}=j.useContext(zr),P,N=!1;if(typeof h=="string"&&J1.test(h)&&(P=h,X1))try{let A=new URL(window.location.href),V=h.startsWith("//")?new URL(A.protocol+h):new URL(h),b=Bd(V.pathname,S);V.origin===A.origin&&b!=null?h=b+V.search+V.hash:N=!0}catch{}let D=C1(h,{relative:i}),I=Z1(h,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:p});function _(A){r&&r(A),A.defaultPrevented||I(A)}return j.createElement("a",wh({},g,{href:P||D,onClick:N||s?r:_,ref:n,target:u}))});var Ym;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ym||(Ym={}));var Xm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Xm||(Xm={}));function Z1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=tu(),h=eu(),f=Lv(t,{relative:o});return j.useCallback(p=>{if(q1(p,n)){p.preventDefault();let g=r!==void 0?r:_l(h)===_l(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[h,u,f,r,i,n,t,s,o,l])}var Jm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(g=64)),r.push(n[f],n[p],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new tS;const g=s<<2|l>>4;if(r.push(g),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nS=function(t){const e=Fv(t);return Uv.encodeByteArray(e,!0)},wl=function(t){return nS(t).replace(/\./g,"")},jv=function(t){try{return Uv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=()=>rS().__FIREBASE_DEFAULTS__,sS=()=>{if(typeof process>"u"||typeof Jm>"u")return;const t=Jm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jv(t[1]);return e&&JSON.parse(e)},nu=()=>{try{return iS()||sS()||oS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bv=t=>{var e,n;return(n=(e=nu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aS=t=>{const e=Bv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zv=()=>{var t;return(t=nu())===null||t===void 0?void 0:t.config},$v=t=>{var e;return(e=nu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wl(JSON.stringify(n)),wl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function hS(){var t;const e=(t=nu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mS(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gS(){return!hS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yS(){try{return typeof indexedDB=="object"}catch{return!1}}function _S(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vS,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ES(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,l,r)}}function ES(t,e){return t.replace(wS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wS=/\{\$([^}]+)}/g;function TS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zm(s)&&Zm(o)){if(!Tl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function IS(t,e){const n=new SS(t,e);return n.subscribe.bind(n)}class SS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CS(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PS(t){return t===Er?void 0:t}function CS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const NS={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},DS=te.INFO,xS={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},VS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $d{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=VS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const OS=(t,e)=>e.some(n=>t instanceof n);let eg,tg;function LS(){return eg||(eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MS(){return tg||(tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wv=new WeakMap,Th=new WeakMap,Hv=new WeakMap,yc=new WeakMap,Wd=new WeakMap;function bS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wv.set(n,t)}).catch(()=>{}),Wd.set(e,t),e}function FS(t){if(Th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Th.set(t,e)}let Ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function US(t){Ih=t(Ih)}function jS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return Hv.set(r,e.sort?e.sort():[e]),Xn(r)}:MS().includes(t)?function(...e){return t.apply(_c(this),e),Xn(Wv.get(this))}:function(...e){return Xn(t.apply(_c(this),e))}}function BS(t){return typeof t=="function"?jS(t):(t instanceof IDBTransaction&&FS(t),OS(t,LS())?new Proxy(t,Ih):t)}function Xn(t){if(t instanceof IDBRequest)return bS(t);if(yc.has(t))return yc.get(t);const e=BS(t);return e!==t&&(yc.set(t,e),Wd.set(e,t)),e}const _c=t=>Wd.get(t);function zS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Xn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Xn(o.result),u.oldVersion,u.newVersion,Xn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const $S=["get","getKey","getAll","getAllKeys","count"],WS=["put","add","delete","clear"],vc=new Map;function ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$S.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return vc.set(e,s),s}US(t=>({...t,get:(e,n,r)=>ng(e,n)||t.get(e,n,r),has:(e,n)=>!!ng(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",rg="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new $d("@firebase/app"),KS="@firebase/app-compat",GS="@firebase/analytics-compat",QS="@firebase/analytics",YS="@firebase/app-check-compat",XS="@firebase/app-check",JS="@firebase/auth",ZS="@firebase/auth-compat",eA="@firebase/database",tA="@firebase/database-compat",nA="@firebase/functions",rA="@firebase/functions-compat",iA="@firebase/installations",sA="@firebase/installations-compat",oA="@firebase/messaging",aA="@firebase/messaging-compat",lA="@firebase/performance",uA="@firebase/performance-compat",cA="@firebase/remote-config",hA="@firebase/remote-config-compat",dA="@firebase/storage",fA="@firebase/storage-compat",pA="@firebase/firestore",mA="@firebase/vertexai-preview",gA="@firebase/firestore-compat",yA="firebase",_A="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="[DEFAULT]",vA={[Sh]:"fire-core",[KS]:"fire-core-compat",[QS]:"fire-analytics",[GS]:"fire-analytics-compat",[XS]:"fire-app-check",[YS]:"fire-app-check-compat",[JS]:"fire-auth",[ZS]:"fire-auth-compat",[eA]:"fire-rtdb",[tA]:"fire-rtdb-compat",[nA]:"fire-fn",[rA]:"fire-fn-compat",[iA]:"fire-iid",[sA]:"fire-iid-compat",[oA]:"fire-fcm",[aA]:"fire-fcm-compat",[lA]:"fire-perf",[uA]:"fire-perf-compat",[cA]:"fire-rc",[hA]:"fire-rc-compat",[dA]:"fire-gcs",[fA]:"fire-gcs-compat",[pA]:"fire-fst",[gA]:"fire-fst-compat",[mA]:"fire-vertex","fire-js":"fire-js",[yA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Map,EA=new Map,Rh=new Map;function ig(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xi(t){const e=t.name;if(Rh.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Rh.set(e,t);for(const n of Il.values())ig(n,t);for(const n of EA.values())ig(n,t);return!0}function Hd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Ao("app","Firebase",wA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=_A;function qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ah,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});if(n||(n=zv()),!n)throw Jn.create("no-options");const s=Il.get(i);if(s){if(Tl(n,s.options)&&Tl(r,s.config))return s;throw Jn.create("duplicate-app",{appName:i})}const o=new kS(i);for(const u of Rh.values())o.addComponent(u);const l=new TA(n,r,o);return Il.set(i,l),l}function Kv(t=Ah){const e=Il.get(t);if(!e&&t===Ah&&zv())return qv();if(!e)throw Jn.create("no-app",{appName:t});return e}function Zn(t,e,n){var r;let i=(r=vA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(l.join(" "));return}xi(new Vr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="firebase-heartbeat-database",SA=1,uo="firebase-heartbeat-store";let Ec=null;function Gv(){return Ec||(Ec=zS(IA,SA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(uo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),Ec}async function AA(t){try{const n=(await Gv()).transaction(uo),r=await n.objectStore(uo).get(Qv(t));return await n.done,r}catch(e){if(e instanceof Sn)vn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function sg(t,e){try{const r=(await Gv()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,Qv(t)),await r.done}catch(n){if(n instanceof Sn)vn.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(r.message)}}}function Qv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1024,PA=30*24*60*60*1e3;class CA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=og();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=PA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=og(),{heartbeatsToSend:r,unsentEntries:i}=kA(this._heartbeatsCache.heartbeats),s=wl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return vn.warn(n),""}}}function og(){return new Date().toISOString().substring(0,10)}function kA(t,e=RA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ag(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ag(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yS()?_S().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ag(t){return wl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){xi(new Vr("platform-logger",e=>new HS(e),"PRIVATE")),xi(new Vr("heartbeat",e=>new CA(e),"PRIVATE")),Zn(Sh,rg,t),Zn(Sh,rg,"esm2017"),Zn("fire-js","")}DA("");function qd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Yv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xA=Yv,Xv=new Ao("auth","Firebase",Yv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new $d("@firebase/auth");function VA(t,...e){Sl.logLevel<=te.WARN&&Sl.warn(`Auth (${Wi}): ${t}`,...e)}function Ua(t,...e){Sl.logLevel<=te.ERROR&&Sl.error(`Auth (${Wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,...e){throw Kd(t,...e)}function Kt(t,...e){return Kd(t,...e)}function Jv(t,e,n){const r=Object.assign(Object.assign({},xA()),{[e]:n});return new Ao("auth","Firebase",r).create(e,{appName:t.name})}function pn(t){return Jv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xv.create(t,...e)}function K(t,e,...n){if(!t)throw Kd(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function En(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OA(){return lg()==="http:"||lg()==="https:"}function lg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OA()||fS()||"connection"in navigator)?navigator.onLine:!0}function MA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=cS()||pS()}get(){return LA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new Po(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hr(t,e,n,r,i={}){return e0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ro(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return dS()||(h.referrerPolicy="no-referrer"),Zv.fetch()(t0(t,t.config.apiHost,n,l),h)})}async function e0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bA),e);try{const i=new jA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ea(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Jv(t,f,h);Ut(t,f)}}catch(i){if(i instanceof Sn)throw i;Ut(t,"network-request-failed",{message:String(i)})}}async function Co(t,e,n,r,i={}){const s=await hr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function t0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gd(t.config,i):`${t.config.apiScheme}://${i}`}function UA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),FA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}function ug(t){return t!==void 0&&t.enterprise!==void 0}class BA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zA(t,e){return hr(t,"GET","/v2/recaptchaConfig",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function n0(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WA(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Qd(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Us(wc(i.auth_time)),issuedAtTime:Us(wc(i.iat)),expirationTime:Us(wc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wc(t){return Number(t)*1e3}function Qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=jv(n);return i?JSON.parse(i):(Ua("Failed to decode base64 JWT payload"),null)}catch(i){return Ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cg(t){const e=Qd(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&HA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t){var e;const n=t.auth,r=await t.getIdToken(),i=await co(t,n0(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?r0(s.providerUserInfo):[],l=GA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ch(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function KA(t){const e=Me(t);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function r0(t){return t.map(e=>{var{providerId:n}=e,r=qd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){const n=await e0(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=t0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Zv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YA(t,e){return hr(t,"POST","/v2/accounts:revokeToken",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=cg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ei;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ch(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WA(this,e)}reload(){return KA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await co(this,$A(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:V,isAnonymous:b,providerData:U,stsTokenManager:E}=n;K(A&&E,e,"internal-error");const y=Ei.fromJSON(this.name,E);K(typeof A=="string",e,"internal-error"),kn(p,e.name),kn(g,e.name),K(typeof V=="boolean",e,"internal-error"),K(typeof b=="boolean",e,"internal-error"),kn(S,e.name),kn(P,e.name),kn(N,e.name),kn(D,e.name),kn(I,e.name),kn(_,e.name);const v=new hn({uid:A,auth:e,email:g,emailVerified:V,displayName:p,isAnonymous:b,photoURL:P,phoneNumber:S,tenantId:N,stsTokenManager:y,createdAt:I,lastLoginAt:_});return U&&Array.isArray(U)&&(v.providerData=U.map(w=>Object.assign({},w))),D&&(v._redirectEventId=D),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ei;i.updateFromServerResponse(n);const s=new hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?r0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ei;l.updateFromIdToken(r);const u=new hn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ch(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function dn(t){En(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}i0.type="NONE";const dg=i0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(dn(dg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dn(dg);const o=ja(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=hn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new wi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c0(e))return"Blackberry";if(h0(e))return"Webos";if(o0(e))return"Safari";if((e.includes("chrome/")||a0(e))&&!e.includes("edge/"))return"Chrome";if(u0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function s0(t=tt()){return/firefox\//i.test(t)}function o0(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a0(t=tt()){return/crios\//i.test(t)}function l0(t=tt()){return/iemobile/i.test(t)}function u0(t=tt()){return/android/i.test(t)}function c0(t=tt()){return/blackberry/i.test(t)}function h0(t=tt()){return/webos/i.test(t)}function Yd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XA(t=tt()){var e;return Yd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JA(){return mS()&&document.documentMode===10}function d0(t=tt()){return Yd(t)||u0(t)||h0(t)||c0(t)||/windows phone/i.test(t)||l0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t,e=[]){let n;switch(t){case"Browser":n=fg(tt());break;case"Worker":n=`${fg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e={}){return hr(t,"GET","/v2/passwordPolicy",cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=6;class nR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new ZA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await n0(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(pn(this));const n=e?Me(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eR(this),n=new nR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wr(t){return Me(t)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=IS(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iR(t){ru=t}function p0(t){return ru.loadJS(t)}function sR(){return ru.recaptchaEnterpriseScript}function oR(){return ru.gapiScript}function aR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lR="recaptcha-enterprise",uR="NO_RECAPTCHA";class cR{constructor(e){this.type=lR,this.auth=Wr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{zA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new BA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;ug(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(uR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ug(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sR();u.length!==0&&(u+=l),p0(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function mg(t,e,n,r=!1){const i=new cR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function kh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await mg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t,e){const n=Hd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tl(s,e??{}))return i;Ut(i,"already-initialized")}return n.initialize({options:e})}function dR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fR(t,e,n){const r=Wr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=m0(e),{host:o,port:l}=pR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),mR()}function m0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pR(t){const e=m0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gg(o)}}}function gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function gR(t,e){return hr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e){return Co(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function vR(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Xd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ho(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ho(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kh(e,n,"signInWithPassword",yR);case"emailLink":return _R(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kh(e,r,"signUpPassword",gR);case"emailLink":return vR(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e){return Co(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="http://localhost";class Or extends Xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ti(e,n)}buildRequest(){const e={requestUri:ER,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TR(t){const e=As(Rs(t)).link,n=e?As(Rs(e)).deep_link_id:null,r=As(Rs(t)).deep_link_id;return(r?As(Rs(r)).link:null)||r||n||e||t}class Jd{constructor(e){var n,r,i,s,o,l;const u=As(Rs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=wR((i=u.mode)!==null&&i!==void 0?i:null);K(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=TR(e);try{return new Jd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.providerId=Hi.PROVIDER_ID}static credential(e,n){return ho._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jd.parseLink(n);return K(r,"argument-error"),ho._fromEmailAndCode(e,r.code,r.tenantId)}}Hi.PROVIDER_ID="password";Hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends g0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends ko{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ko{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends ko{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(t,e){return Co(t,"POST","/v1/accounts:signUp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hn._fromIdTokenResponse(e,r,i),o=yg(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yg(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rl(e,n,r,i)}}function y0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(t,s,e,r):s})}async function SR(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(pn(r));const i="reauthenticate";try{const s=await co(t,y0(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Qd(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e,n=!1){if(Wt(t.app))return Promise.reject(pn(t));const r="signIn",i=await y0(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function RR(t,e){return _0(Wr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(t){const e=Wr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PR(t,e,n){if(Wt(t.app))return Promise.reject(pn(t));const r=Wr(t),o=await kh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&v0(t),u}),l=await Lr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function CR(t,e,n){return Wt(t.app)?Promise.reject(pn(t)):RR(Me(t),Hi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&v0(t),r})}function kR(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function NR(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function DR(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function xR(t){return Me(t).signOut()}const Pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=1e3,OR=10;class w0 extends E0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=d0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w0.type="LOCAL";const LR=w0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0 extends E0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T0.type="SESSION";const I0=T0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await MR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Zd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function FR(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function UR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BR(){return S0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="firebaseLocalStorageDb",zR=1,Cl="firebaseLocalStorage",R0="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function su(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function $R(){const t=indexedDB.deleteDatabase(A0);return new No(t).toPromise()}function Nh(){const t=indexedDB.open(A0,zR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cl,{keyPath:R0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cl)?e(r):(r.close(),await $R(),e(await Nh()))})})}async function _g(t,e,n){const r=su(t,!0).put({[R0]:e,value:n});return new No(r).toPromise()}async function WR(t,e){const n=su(t,!1).get(e),r=await new No(n).toPromise();return r===void 0?null:r.value}function vg(t,e){const n=su(t,!0).delete(e);return new No(n).toPromise()}const HR=800,qR=3;class P0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=iu._getInstance(BR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UR(),!this.activeServiceWorker)return;this.sender=new bR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nh();return await _g(e,Pl,"1"),await vg(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=su(i,!1).getAll();return new No(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P0.type="LOCAL";const KR=P0;new Po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t,e){return e?dn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends Xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QR(t){return _0(t.auth,new ef(t),t.bypassAuthState)}function YR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),AR(n,new ef(t),t.bypassAuthState)}async function XR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),SR(n,new ef(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QR;case"linkViaPopup":case"linkViaRedirect":return XR;case"reauthViaPopup":case"reauthViaRedirect":return YR;default:Ut(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new Po(2e3,1e4);class fi extends C0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JR.get())};e()}}fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="pendingRedirect",Ba=new Map;class eP extends C0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await tP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tP(t,e){const n=iP(e),r=rP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nP(t,e){Ba.set(t._key(),e)}function rP(t){return dn(t._redirectPersistence)}function iP(t){return ja(ZR,t.config.apiKey,t.name)}async function sP(t,e,n=!1){if(Wt(t.app))return Promise.reject(pn(t));const r=Wr(t),i=GR(r,e),o=await new eP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=10*60*1e3;class aP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!k0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function k0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hP=/^https?/;async function dP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uP(t);for(const n of e)try{if(fP(n))return}catch{}Ut(t,"unauthorized-domain")}function fP(t){const e=Ph(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hP.test(n))return!1;if(cP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=new Po(3e4,6e4);function wg(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mP(t){return new Promise((e,n)=>{var r,i,s;function o(){wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wg(),n(Kt(t,"network-request-failed"))},timeout:pP.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const l=aR("iframefcb");return Gt()[l]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},p0(`${oR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw za=null,e})}let za=null;function gP(t){return za=za||mP(t),za}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=new Po(5e3,15e3),_P="__/auth/iframe",vP="emulator/auth/iframe",EP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TP(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gd(e,vP):`https://${t.config.authDomain}/${_P}`,r={apiKey:e.apiKey,appName:t.name,v:Wi},i=wP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ro(r).slice(1)}`}async function IP(t){const e=await gP(t),n=Gt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:TP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),l=Gt().setTimeout(()=>{s(o)},yP.get());function u(){Gt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AP=500,RP=600,PP="_blank",CP="http://localhost";class Tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kP(t,e,n,r=AP,i=RP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},SP),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=a0(h)?PP:n),s0(h)&&(e=e||CP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,P])=>`${g}${S}=${P},`,"");if(XA(h)&&l!=="_self")return NP(e||"",l),new Tg(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Tg(p)}function NP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP="__/auth/handler",xP="emulator/auth/handler",VP=encodeURIComponent("fac");async function Ig(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wi,eventId:i};if(e instanceof g0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ko){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${VP}=${encodeURIComponent(u)}`:"";return`${OP(t)}?${Ro(l).slice(1)}${h}`}function OP({config:t}){return t.emulator?Gd(t,xP):`https://${t.authDomain}/${DP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class LP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I0,this._completeRedirectFn=sP,this._overrideRedirectResult=nP}async _openPopup(e,n,r,i){var s;En((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ig(e,n,r,Ph(),i);return kP(e,o,Zd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ig(e,n,r,Ph(),i);return FR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(En(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IP(e),r=new aP(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Tc];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d0()||o0()||Yd()}}const MP=LP;var Sg="@firebase/auth",Ag="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UP(t){xi(new Vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f0(t)},h=new rR(r,i,s,u);return dR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xi(new Vr("auth-internal",e=>{const n=Wr(e.getProvider("auth").getImmediate());return(r=>new bP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Sg,Ag,FP(t)),Zn(Sg,Ag,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=5*60,BP=$v("authIdTokenMaxAge")||jP;let Rg=null;const zP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BP)return;const i=n==null?void 0:n.token;Rg!==i&&(Rg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $P(t=Kv()){const e=Hd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hR(t,{popupRedirectResolver:MP,persistence:[KR,LR,I0]}),r=$v("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zP(s.toString());NR(n,o,()=>o(n.currentUser)),kR(n,l=>o(l))}}const i=Bv("auth");return i&&fR(n,`http://${i}`),n}function WP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UP("Browser");var HP="firebase",qP="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(HP,qP,"app");var Pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,N0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(w,R,k){for(var T=Array(arguments.length-2),It=2;It<arguments.length;It++)T[It-2]=arguments[It];return y.prototype[R].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)w[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)w[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],R=E.g[2];var k=E.g[3],T=y+(k^v&(R^k))+w[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=k+(R^y&(v^R))+w[1]+3905402710&4294967295,k=y+(T<<12&4294967295|T>>>20),T=R+(v^k&(y^v))+w[2]+606105819&4294967295,R=k+(T<<17&4294967295|T>>>15),T=v+(y^R&(k^y))+w[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(k^v&(R^k))+w[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=k+(R^y&(v^R))+w[5]+1200080426&4294967295,k=y+(T<<12&4294967295|T>>>20),T=R+(v^k&(y^v))+w[6]+2821735955&4294967295,R=k+(T<<17&4294967295|T>>>15),T=v+(y^R&(k^y))+w[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(k^v&(R^k))+w[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=k+(R^y&(v^R))+w[9]+2336552879&4294967295,k=y+(T<<12&4294967295|T>>>20),T=R+(v^k&(y^v))+w[10]+4294925233&4294967295,R=k+(T<<17&4294967295|T>>>15),T=v+(y^R&(k^y))+w[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(k^v&(R^k))+w[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=k+(R^y&(v^R))+w[13]+4254626195&4294967295,k=y+(T<<12&4294967295|T>>>20),T=R+(v^k&(y^v))+w[14]+2792965006&4294967295,R=k+(T<<17&4294967295|T>>>15),T=v+(y^R&(k^y))+w[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(R^k&(v^R))+w[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=k+(v^R&(y^v))+w[6]+3225465664&4294967295,k=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(k^y))+w[11]+643717713&4294967295,R=k+(T<<14&4294967295|T>>>18),T=v+(k^y&(R^k))+w[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^k&(v^R))+w[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=k+(v^R&(y^v))+w[10]+38016083&4294967295,k=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(k^y))+w[15]+3634488961&4294967295,R=k+(T<<14&4294967295|T>>>18),T=v+(k^y&(R^k))+w[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^k&(v^R))+w[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=k+(v^R&(y^v))+w[14]+3275163606&4294967295,k=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(k^y))+w[3]+4107603335&4294967295,R=k+(T<<14&4294967295|T>>>18),T=v+(k^y&(R^k))+w[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^k&(v^R))+w[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=k+(v^R&(y^v))+w[2]+4243563512&4294967295,k=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(k^y))+w[7]+1735328473&4294967295,R=k+(T<<14&4294967295|T>>>18),T=v+(k^y&(R^k))+w[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(v^R^k)+w[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=k+(y^v^R)+w[8]+2272392833&4294967295,k=y+(T<<11&4294967295|T>>>21),T=R+(k^y^v)+w[11]+1839030562&4294967295,R=k+(T<<16&4294967295|T>>>16),T=v+(R^k^y)+w[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^k)+w[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=k+(y^v^R)+w[4]+1272893353&4294967295,k=y+(T<<11&4294967295|T>>>21),T=R+(k^y^v)+w[7]+4139469664&4294967295,R=k+(T<<16&4294967295|T>>>16),T=v+(R^k^y)+w[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^k)+w[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=k+(y^v^R)+w[0]+3936430074&4294967295,k=y+(T<<11&4294967295|T>>>21),T=R+(k^y^v)+w[3]+3572445317&4294967295,R=k+(T<<16&4294967295|T>>>16),T=v+(R^k^y)+w[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^k)+w[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=k+(y^v^R)+w[12]+3873151461&4294967295,k=y+(T<<11&4294967295|T>>>21),T=R+(k^y^v)+w[15]+530742520&4294967295,R=k+(T<<16&4294967295|T>>>16),T=v+(R^k^y)+w[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(R^(v|~k))+w[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=k+(v^(y|~R))+w[7]+1126891415&4294967295,k=y+(T<<10&4294967295|T>>>22),T=R+(y^(k|~v))+w[14]+2878612391&4294967295,R=k+(T<<15&4294967295|T>>>17),T=v+(k^(R|~y))+w[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~k))+w[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=k+(v^(y|~R))+w[3]+2399980690&4294967295,k=y+(T<<10&4294967295|T>>>22),T=R+(y^(k|~v))+w[10]+4293915773&4294967295,R=k+(T<<15&4294967295|T>>>17),T=v+(k^(R|~y))+w[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~k))+w[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=k+(v^(y|~R))+w[15]+4264355552&4294967295,k=y+(T<<10&4294967295|T>>>22),T=R+(y^(k|~v))+w[6]+2734768916&4294967295,R=k+(T<<15&4294967295|T>>>17),T=v+(k^(R|~y))+w[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~k))+w[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=k+(v^(y|~R))+w[11]+3174756917&4294967295,k=y+(T<<10&4294967295|T>>>22),T=R+(y^(k|~v))+w[2]+718787259&4294967295,R=k+(T<<15&4294967295|T>>>17),T=v+(k^(R|~y))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,w=this.B,R=this.h,k=0;k<y;){if(R==0)for(;k<=v;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<y;)if(w[R++]=E.charCodeAt(k++),R==this.blockSize){i(this,w),R=0;break}}else for(;k<y;)if(w[R++]=E[k++],R==this.blockSize){i(this,w),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)E[v++]=this.g[y]>>>w&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],w=!0,R=E.length-1;0<=R;R--){var k=E[R]|0;w&&k==y||(v[R]=k,w=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return D(h(-E));for(var y=[],v=1,w=0;E>=v;w++)y[w]=E/v|0,v*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return D(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),w=p,R=0;R<E.length;R+=8){var k=Math.min(8,E.length-R),T=parseInt(E.substring(R,R+k),y);8>k?(k=h(Math.pow(y,k)),w=w.j(k).add(h(T))):(w=w.j(v),w=w.add(h(T)))}return w}var p=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);E+=(0<=w?w:4294967296+w)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+D(this).toString(E);for(var y=h(Math.pow(E,6)),v=this,w="";;){var R=V(v,y).g;v=I(v,R.j(y));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=R,P(v))return k+w;for(;6>k.length;)k="0"+k;w=k+w}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=I(this,E),N(E)?-1:P(E)?0:1};function D(E){for(var y=E.g.length,v=[],w=0;w<y;w++)v[w]=~E.g[w];return new o(v,~E.h).add(g)}t.abs=function(){return N(this)?D(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0,R=0;R<=y;R++){var k=w+(this.i(R)&65535)+(E.i(R)&65535),T=(k>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);w=T>>>16,k&=65535,T&=65535,v[R]=T<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(D(y))}t.j=function(E){if(P(this)||P(E))return p;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(0>this.l(S)&&0>E.l(S))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<E.g.length;R++){var k=this.i(w)>>>16,T=this.i(w)&65535,It=E.i(R)>>>16,fr=E.i(R)&65535;v[2*w+2*R]+=T*fr,_(v,2*w+2*R),v[2*w+2*R+1]+=k*fr,_(v,2*w+2*R+1),v[2*w+2*R+1]+=T*It,_(v,2*w+2*R+1),v[2*w+2*R+2]+=k*It,_(v,2*w+2*R+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function V(E,y){if(P(y))throw Error("division by zero");if(P(E))return new A(p,p);if(N(E))return y=V(D(E),y),new A(D(y.g),D(y.h));if(N(y))return y=V(E,D(y)),new A(D(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,w=y;0>=w.l(E);)v=b(v),w=b(w);var R=U(v,1),k=U(w,1);for(w=U(w,2),v=U(v,2);!P(w);){var T=k.add(w);0>=T.l(E)&&(R=R.add(v),k=T),w=U(w,1),v=U(v,1)}return y=I(E,R.j(y)),new A(R,y)}for(R=p;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),k=h(v),T=k.j(y);N(T)||0<T.l(E);)v-=w,k=h(v),T=k.j(y);P(k)&&(k=g),R=R.add(k),E=I(E,T)}return new A(R,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&E.i(w);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|E.i(w);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^E.i(w);return new o(v,this.h^E.h)};function b(E){for(var y=E.g.length+1,v=[],w=0;w<y;w++)v[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(v,E.h)}function U(E,y){var v=y>>5;y%=32;for(var w=E.g.length-v,R=[],k=0;k<w;k++)R[k]=0<y?E.i(k+v)>>>y|E.i(k+v+1)<<32-y:E.i(k+v);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,N0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Pr=o}).apply(typeof Pg<"u"?Pg:typeof self<"u"?self:typeof window<"u"?window:{});var wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D0,x0,Ps,V0,$a,Dh,O0,L0,M0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wa=="object"&&wa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var x=d++;return{value:c(x,a[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,x){for(var F=Array(arguments.length-2),le=2;le<arguments.length;le++)F[le-2]=arguments[le];return c.prototype[C].apply(m,F)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function D(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const C=a.length||0,x=m.length||0;a.length=C+x;for(let F=0;F<x;F++)a[C+F]=m[F]}else a.push(m)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var b=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class It{constructor(){this.h=this.g=null}add(c,d){const m=fr.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var fr=new I(()=>new Yi,a=>a.reset());class Yi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,z=!1,Q=new It,J=()=>{const a=l.Promise.resolve(void 0);Jt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var c=fr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Zt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function en(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(b){e:{try{V(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&en.aa.h.call(this)}}P(en,Ie);var tn={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),QE=0;function YE(a,c,d,m,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=C,this.key=++QE,this.da=this.fa=!1}function jo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Bo(a){this.src=a,this.g={},this.h=0}Bo.prototype.add=function(a,c,d,m,C){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var F=wu(a,c,m,C);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new YE(c,this.src,x,!!m,C),c.fa=d,a.push(c)),c};function Eu(a,c){var d=c.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,c,void 0),x;(x=0<=C)&&Array.prototype.splice.call(m,C,1),x&&(jo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wu(a,c,d,m){for(var C=0;C<a.length;++C){var x=a[C];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==m)return C}return-1}var Tu="closure_lm_"+(1e6*Math.random()|0),Iu={};function Mf(a,c,d,m,C){if(Array.isArray(c)){for(var x=0;x<c.length;x++)Mf(a,c[x],d,m,C);return null}return d=Uf(d),a&&a[nn]?a.K(c,d,h(m)?!!m.capture:!!m,C):XE(a,c,d,!1,m,C)}function XE(a,c,d,m,C,x){if(!c)throw Error("Invalid event type");var F=h(C)?!!C.capture:!!C,le=Au(a);if(le||(a[Tu]=le=new Bo(a)),d=le.add(c,d,m,F,x),d.proxy)return d;if(m=JE(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Zt||(C=F),C===void 0&&(C=!1),a.addEventListener(c.toString(),m,C);else if(a.attachEvent)a.attachEvent(Ff(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function JE(){function a(d){return c.call(a.src,a.listener,d)}const c=ZE;return a}function bf(a,c,d,m,C){if(Array.isArray(c))for(var x=0;x<c.length;x++)bf(a,c[x],d,m,C);else m=h(m)?!!m.capture:!!m,d=Uf(d),a&&a[nn]?(a=a.i,c=String(c).toString(),c in a.g&&(x=a.g[c],d=wu(x,d,m,C),-1<d&&(jo(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[c],a.h--)))):a&&(a=Au(a))&&(c=a.g[c.toString()],a=-1,c&&(a=wu(c,d,m,C)),(d=-1<a?c[a]:null)&&Su(d))}function Su(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[nn])Eu(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Ff(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Au(c))?(Eu(d,a),d.h==0&&(d.src=null,c[Tu]=null)):jo(a)}}}function Ff(a){return a in Iu?Iu[a]:Iu[a]="on"+a}function ZE(a,c){if(a.da)a=!0;else{c=new en(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&Su(a),a=d.call(m,c)}return a}function Au(a){return a=a[Tu],a instanceof Bo?a:null}var Ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uf(a){return typeof a=="function"?a:(a[Ru]||(a[Ru]=function(c){return a.handleEvent(c)}),a[Ru])}function He(){ae.call(this),this.i=new Bo(this),this.M=this,this.F=null}P(He,ae),He.prototype[nn]=!0,He.prototype.removeEventListener=function(a,c,d,m){bf(this,a,c,d,m)};function nt(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var C=c;c=new Ie(m,a),w(c,C)}if(C=!0,d)for(var x=d.length-1;0<=x;x--){var F=c.g=d[x];C=zo(F,m,!0,c)&&C}if(F=c.g=a,C=zo(F,m,!0,c)&&C,C=zo(F,m,!1,c)&&C,d)for(x=0;x<d.length;x++)F=c.g=d[x],C=zo(F,m,!1,c)&&C}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)jo(d[m]);delete a.g[c],a.h--}}this.F=null},He.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},He.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function zo(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,x=0;x<c.length;++x){var F=c[x];if(F&&!F.da&&F.capture==d){var le=F.listener,be=F.ha||F.src;F.fa&&Eu(a.i,F),C=le.call(be,m)!==!1&&C}}return C&&!m.defaultPrevented}function jf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Bf(a){a.g=jf(()=>{a.g=null,a.i&&(a.i=!1,Bf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ew extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Bf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(a){ae.call(this),this.h=a,this.g={}}P(Xi,ae);var zf=[];function $f(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&Su(c)},a),a.g={}}Xi.prototype.N=function(){Xi.aa.N.call(this),$f(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pu=l.JSON.stringify,tw=l.JSON.parse,nw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Cu(){}Cu.prototype.h=null;function Wf(a){return a.h||(a.h=a.i())}function Hf(){}var Ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ku(){Ie.call(this,"d")}P(ku,Ie);function Nu(){Ie.call(this,"c")}P(Nu,Ie);var pr={},qf=null;function $o(){return qf=qf||new He}pr.La="serverreachability";function Kf(a){Ie.call(this,pr.La,a)}P(Kf,Ie);function Zi(a){const c=$o();nt(c,new Kf(c))}pr.STAT_EVENT="statevent";function Gf(a,c){Ie.call(this,pr.STAT_EVENT,a),this.stat=c}P(Gf,Ie);function rt(a){const c=$o();nt(c,new Gf(c,a))}pr.Ma="timingevent";function Qf(a,c){Ie.call(this,pr.Ma,a),this.size=c}P(Qf,Ie);function es(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function rw(a,c,d,m,C,x){a.info(function(){if(a.g)if(x)for(var F="",le=x.split("&"),be=0;be<le.length;be++){var ie=le[be].split("=");if(1<ie.length){var qe=ie[0];ie=ie[1];var Ke=qe.split("_");F=2<=Ke.length&&Ke[1]=="type"?F+(qe+"="+ie+"&"):F+(qe+"=redacted&")}}else F=null;else F=x;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+c+`
`+d+`
`+F})}function iw(a,c,d,m,C,x,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+c+`
`+d+`
`+x+" "+F})}function Kr(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+ow(a,d)+(m?" "+m:"")})}function sw(a,c){a.info(function(){return"TIMEOUT: "+c})}ts.prototype.info=function(){};function ow(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var x=C[0];if(x!="noop"&&x!="stop"&&x!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return Pu(d)}catch{return c}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Du;function Ho(){}P(Ho,Cu),Ho.prototype.g=function(){return new XMLHttpRequest},Ho.prototype.i=function(){return{}},Du=new Ho;function An(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new Xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xf}function Xf(){this.i=null,this.g="",this.h=!1}var Jf={},xu={};function Vu(a,c,d){a.L=1,a.v=Qo(rn(c)),a.m=d,a.P=!0,Zf(a,null)}function Zf(a,c){a.F=Date.now(),qo(a),a.A=rn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),fp(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Xf,a.g=Dp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new ew(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(zf[0]=C.toString()),C=zf);for(var x=0;x<C.length;x++){var F=Mf(d,C[x],m||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Zi(),rw(a.i,a.u,a.A,a.l,a.R,a.m)}An.prototype.ca=function(a){a=a.target;const c=this.M;c&&sn(a)==3?c.j():this.Y(a)},An.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=sn(this.g);var c=this.g.Ba();const Yr=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||Ep(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=Yr?Zi(3):Zi(2)),Ou(this);var d=this.g.Z();this.X=d;t:if(ep(this)){var m=Ep(this.g);a="";var C=m.length,x=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),ns(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(x&&c==C-1)});m.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,iw(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,be=this.g;if((le=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(le)){var ie=le;break t}}ie=null}if(d=ie)Kr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lu(this,d);else{this.o=!1,this.s=3,rt(12),mr(this),ns(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<F.length;)if(Nt=aw(this,F),Nt==xu){Ke==4&&(this.s=4,rt(14),d=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Jf){this.s=4,rt(15),Kr(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else Kr(this.i,this.l,Nt,null),Lu(this,Nt);if(ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||F.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)Kr(this.i,this.l,F,"[Invalid Chunked Response]"),mr(this),ns(this);else if(0<F.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Bu(qe),qe.M=!0,rt(11))}}else Kr(this.i,this.l,F,null),Lu(this,F);Ke==4&&mr(this),this.o&&!this.J&&(Ke==4?Pp(this.j,this):(this.o=!1,qo(this)))}else Sw(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),mr(this),ns(this)}}}catch{}finally{}};function ep(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function aw(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?xu:(d=Number(c.substring(d,m)),isNaN(d)?Jf:(m+=1,m+d>c.length?xu:(c=c.slice(m,m+d),a.C=m+d,c)))}An.prototype.cancel=function(){this.J=!0,mr(this)};function qo(a){a.S=Date.now()+a.I,tp(a,a.I)}function tp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=es(g(a.ba,a),c)}function Ou(a){a.B&&(l.clearTimeout(a.B),a.B=null)}An.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(sw(this.i,this.A),this.L!=2&&(Zi(),rt(17)),mr(this),this.s=2,ns(this)):tp(this,this.S-a)};function ns(a){a.j.G==0||a.J||Pp(a.j,a)}function mr(a){Ou(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,$f(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Lu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Mu(d.h,a))){if(!a.K&&Mu(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ea(d),Jo(d);else break e;ju(d),rt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=es(g(d.Za,d),6e3));if(1>=ip(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((a.K||d.g==a)&&ea(d),!_(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ie=C[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const qe=ie[3];qe!=null&&(d.la=qe,d.j.info("VER="+d.la));const Ke=ie[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const Yr=ie[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(m=1.5*Yr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Nt=a.g;if(Nt){const na=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(na){var x=m.h;x.g||na.indexOf("spdy")==-1&&na.indexOf("quic")==-1&&na.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(bu(x,x.h),x.h=null))}if(m.D){const zu=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;zu&&(m.ya=zu,he(m.I,m.D,zu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var F=a;if(m.qa=Np(m,m.J?m.ia:null,m.W),F.K){sp(m.h,F);var le=F,be=m.L;be&&(le.I=be),le.B&&(Ou(le),qo(le)),m.g=F}else Ap(m);0<d.i.length&&Zo(d)}else ie[0]!="stop"&&ie[0]!="close"||yr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?yr(d,7):Uu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Zi(4)}catch{}}var lw=class{constructor(a,c){this.g=a,this.map=c}};function np(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ip(a){return a.h?1:a.g?a.g.size:0}function Mu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function bu(a,c){a.g?a.g.add(c):a.h=c}function sp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}np.prototype.cancel=function(){if(this.i=op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function op(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function uw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function cw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function ap(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=cw(a),m=uw(a),C=m.length,x=0;x<C;x++)c.call(void 0,m[x],d&&d[x],a)}var lp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var x=a[d].substring(0,m);C=a[d].substring(m+1)}else x=a[d];c(x,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Ko(this,a.j),this.o=a.o,this.g=a.g,Go(this,a.s),this.l=a.l;var c=a.i,d=new ss;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),up(this,d),this.m=a.m}else a&&(c=String(a).match(lp))?(this.h=!1,Ko(this,c[1]||"",!0),this.o=rs(c[2]||""),this.g=rs(c[3]||"",!0),Go(this,c[4]),this.l=rs(c[5]||"",!0),up(this,c[6]||"",!0),this.m=rs(c[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}gr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(is(c,cp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(is(c,cp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(is(d,d.charAt(0)=="/"?pw:fw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",is(d,gw)),a.join("")};function rn(a){return new gr(a)}function Ko(a,c,d){a.j=d?rs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Go(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function up(a,c,d){c instanceof ss?(a.i=c,yw(a.i,a.h)):(d||(c=is(c,mw)),a.i=new ss(c,a.h))}function he(a,c,d){a.i.set(c,d)}function Qo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function rs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function is(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,dw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cp=/[#\/\?@]/g,fw=/[#\?:]/g,pw=/[#\?]/g,mw=/[#\?@]/g,gw=/#/g;function ss(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Rn(a){a.g||(a.g=new Map,a.h=0,a.i&&hw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ss.prototype,t.add=function(a,c){Rn(this),this.i=null,a=Gr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function hp(a,c){Rn(a),c=Gr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function dp(a,c){return Rn(a),c=Gr(a,c),a.g.has(c)}t.forEach=function(a,c){Rn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(c,C,m,this)},this)},this)},t.na=function(){Rn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const C=a[m];for(let x=0;x<C.length;x++)d.push(c[m])}return d},t.V=function(a){Rn(this);let c=[];if(typeof a=="string")dp(this,a)&&(c=c.concat(this.g.get(Gr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Rn(this),this.i=null,a=Gr(this,a),dp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function fp(a,c,d){hp(a,c),0<d.length&&(a.i=null,a.g.set(Gr(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const x=encodeURIComponent(String(m)),F=this.V(m);for(m=0;m<F.length;m++){var C=x;F[m]!==""&&(C+="="+encodeURIComponent(String(F[m]))),a.push(C)}}return this.i=a.join("&")};function Gr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function yw(a,c){c&&!a.j&&(Rn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(hp(this,m),fp(this,C,d))},a)),a.j=c}function _w(a,c){const d=new ts;if(l.Image){const m=new Image;m.onload=S(Pn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=S(Pn,d,"TestLoadImage: error",!1,c,m),m.onabort=S(Pn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=S(Pn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function vw(a,c){const d=new ts,m=new AbortController,C=setTimeout(()=>{m.abort(),Pn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(C),x.ok?Pn(d,"TestPingServer: ok",!0,c):Pn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Pn(d,"TestPingServer: error",!1,c)})}function Pn(a,c,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function Ew(){this.g=new nw}function ww(a,c,d){const m=d||"";try{ap(a,function(C,x){let F=C;h(C)&&(F=Pu(C)),c.push(m+x+"="+encodeURIComponent(F))})}catch(C){throw c.push(m+"type="+encodeURIComponent("_badmap")),C}}function os(a){this.l=a.Ub||null,this.j=a.eb||!1}P(os,Cu),os.prototype.g=function(){return new Yo(this.l,this.j)},os.prototype.i=function(a){return function(){return a}}({});function Yo(a,c){He.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Yo,He),t=Yo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function pp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?as(this):ls(this),this.readyState==3&&pp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,as(this))},t.Qa=function(a){this.g&&(this.response=a,as(this))},t.ga=function(){this.g&&as(this)};function as(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ls(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mp(a){let c="";return U(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Fu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=mp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function we(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(we,He);var Tw=/^https?$/i,Iw=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Du.g(),this.v=this.o?Wf(this.o):Wf(Du),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){gp(this,x);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())d.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Iw,c,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,F]of d)this.g.setRequestHeader(x,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vp(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){gp(this,x)}};function gp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,yp(a),Xo(a)}function yp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),Xo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xo(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_p(this):this.bb())},t.bb=function(){_p(this)};function _p(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)jf(a.Ea,0,a);else if(nt(a,"readystatechange"),sn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=F===0){var C=String(a.D).match(lp)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Tw.test(C?C.toLowerCase():"")}d=m}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var x=2<sn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",yp(a)}}finally{Xo(a)}}}}function Xo(a,c){if(a.g){vp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=m}catch{}}}function vp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),tw(c)}};function Ep(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Sw(a){const c={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=R(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[C]||[];c[C]=x,x.push(d)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function wp(a){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,a),this.cb=us("retryDelaySeedMs",1e4,a),this.Wa=us("forwardChannelMaxRetries",2,a),this.wa=us("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new np(a&&a.concurrentRequestLimit),this.Da=new Ew,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){rt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Np(this,null,this.W),Zo(this)};function Uu(a){if(Tp(a),a.G==3){var c=a.U++,d=rn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),cs(a,d),c=new An(a,a.j,c),c.L=2,c.v=Qo(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Dp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),qo(c)}kp(a)}function Jo(a){a.g&&(Bu(a),a.g.cancel(),a.g=null)}function Tp(a){Jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Zo(a){if(!rp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Jt||J(),z||(Jt(),z=!0),Q.add(c,a),a.B=0}}function Aw(a,c){return ip(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=es(g(a.Ga,a,c),Cp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new An(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),w(x,this.S)):x=this.S),this.m!==null||this.O||(C.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Sp(this,C,c),d=rn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),cs(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(mp(x)))+"&"+c:this.m&&Fu(d,this.m,x)),bu(this.h,C),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),C.T=!0,Vu(C,d,null)):Vu(C,d,c),this.G=2}}else this.G==3&&(a?Ip(this,a):this.i.length==0||rp(this.h)||Ip(this))};function Ip(a,c){var d;c?d=c.l:d=a.U++;const m=rn(a.I);he(m,"SID",a.K),he(m,"RID",d),he(m,"AID",a.T),cs(a,m),a.m&&a.o&&Fu(m,a.m,a.o),d=new An(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Sp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),bu(a.h,d),Vu(d,m,c)}function cs(a,c){a.H&&U(a.H,function(d,m){he(c,m,d)}),a.l&&ap({},function(d,m){he(c,m,d)})}function Sp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let x=-1;for(;;){const F=["count="+d];x==-1?0<d?(x=C[0].g,F.push("ofs="+x)):x=0:F.push("ofs="+x);let le=!0;for(let be=0;be<d;be++){let ie=C[be].g;const qe=C[be].map;if(ie-=x,0>ie)x=Math.max(0,C[be].g-100),le=!1;else try{ww(qe,F,"req"+ie+"_")}catch{m&&m(qe)}}if(le){m=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function Ap(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Jt||J(),z||(Jt(),z=!0),Q.add(c,a),a.v=0}}function ju(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=es(g(a.Fa,a),Cp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Rp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=es(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Jo(this),Rp(this))};function Bu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Rp(a){a.g=new An(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=rn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),cs(a,c),a.m&&a.o&&Fu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Qo(rn(c)),d.m=null,d.P=!0,Zf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Jo(this),ju(this),rt(19))};function ea(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Pp(a,c){var d=null;if(a.g==c){ea(a),Bu(a),a.g=null;var m=2}else if(Mu(a.h,c))d=c.D,sp(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;m=$o(),nt(m,new Qf(m,d)),Zo(a)}else Ap(a);else if(C=c.s,C==3||C==0&&0<c.X||!(m==1&&Aw(a,c)||m==2&&ju(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Cp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function yr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new gr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ko(m,"https"),Qo(m),C?_w(m.toString(),d):vw(m.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(c),kp(a),Tp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function kp(a){if(a.G=0,a.ka=[],a.l){const c=op(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Np(a,c,d){var m=d instanceof gr?rn(d):new gr(d);if(m.g!="")c&&(m.g=c+"."+m.g),Go(m,m.s);else{var C=l.location;m=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var x=new gr(null);m&&Ko(x,m),c&&(x.g=c),C&&Go(x,C),d&&(x.l=d),m=x}return d=a.D,c=a.ya,d&&c&&he(m,d,c),he(m,"VER",a.la),cs(a,m),m}function Dp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new we(new os({eb:d})):new we(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xp(){}t=xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ta(){}ta.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){He.call(this),this.g=new wp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Qr(this)}P(pt,He),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Uu(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Pu(a),a=d);c.i.push(new lw(c.Ya++,a)),c.G==3&&Zo(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,Uu(this.g),delete this.g,pt.aa.N.call(this)};function Vp(a){ku.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Vp,ku);function Op(){Nu.call(this),this.status=1}P(Op,Nu);function Qr(a){this.g=a}P(Qr,xp),Qr.prototype.ua=function(){nt(this.g,"a")},Qr.prototype.ta=function(a){nt(this.g,new Vp(a))},Qr.prototype.sa=function(a){nt(this.g,new Op)},Qr.prototype.ra=function(){nt(this.g,"b")},ta.prototype.createWebChannel=ta.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,M0=function(){return new ta},L0=function(){return $o()},O0=pr,Dh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,$a=Wo,Yf.COMPLETE="complete",V0=Yf,Hf.EventType=Ji,Ji.OPEN="a",Ji.CLOSE="b",Ji.ERROR="c",Ji.MESSAGE="d",He.prototype.listen=He.prototype.K,Ps=Hf,x0=os,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,D0=we}).apply(typeof wa<"u"?wa:typeof self<"u"?self:typeof window<"u"?window:{});const Cg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new $d("@firebase/firestore");function vs(){return Mr.logLevel}function H(t,...e){if(Mr.logLevel<=te.DEBUG){const n=e.map(tf);Mr.debug(`Firestore (${qi}): ${t}`,...n)}}function wn(t,...e){if(Mr.logLevel<=te.ERROR){const n=e.map(tf);Mr.error(`Firestore (${qi}): ${t}`,...n)}}function Vi(t,...e){if(Mr.logLevel<=te.WARN){const n=e.map(tf);Mr.warn(`Firestore (${qi}): ${t}`,...n)}}function tf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${qi}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function ue(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class GP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QP{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new b0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Xe(e)}}class YP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new JP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Oi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new xe(0,0))}static max(){return new Y(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends fo{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const tC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends fo{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return tC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}function nC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new ir(i,q.empty(),e)}function rC(t){return new ir(t.readTime,t.key,-1)}class ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ir(Y.min(),q.empty(),-1)}static max(){return new ir(Y.max(),q.empty(),-1)}}function iC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==sC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}nf.oe=-1;function ou(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function lC(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ta(this.root,e,this.comparator,!0)}}class Ta{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new yt([])}unionWith(e){let n=new ze(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new j0("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const uC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=uC.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sf(t){const e=t.mapValue.fields.__previous_value__;return rf(e)?sf(e):e}function po(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rf(t)?4:dC(t)?9007199254740991:hC(t)?10:11:G()}function Xt(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return po(t).isEqual(po(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=sr(i.timestampValue),l=sr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return br(i.bytesValue).isEqual(br(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?kl(o)===kl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Oi(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(kg(o)!==kg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Xt(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function go(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Dg(t.timestampValue,e.timestampValue);case 4:return Dg(po(t),po(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=br(s),u=br(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Se(s.latitude),Se(o.latitude));return l!==0?l:se(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},g=o.fields||{},S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=se(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:xg(S,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ia.mapValue&&o===Ia.mapValue)return 0;if(s===Ia.mapValue)return 1;if(o===Ia.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=se(u[p],f[p]);if(g!==0)return g;const S=Li(l[u[p]],h[f[p]]);if(S!==0)return S}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Dg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=sr(t),r=sr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function xg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Li(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Mi(t){return xh(t)}function xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xh(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function Vg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vh(t){return!!t&&"integerValue"in t}function of(t){return!!t&&"arrayValue"in t}function Og(t){return!!t&&"nullValue"in t}function Lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function hC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=js(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ut(js(this.value))}}function B0(t){const e=[];return Hr(t.fields,(n,r)=>{const i=new je([n]);if(Wa(r)){const s=B0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Y.min(),Y.min(),Y.min(),ut.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Y.min(),Y.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Y.min(),Y.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function Mg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function fC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{}class Ce extends z0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mC(e,n,r):n==="array-contains"?new _C(e,r):n==="in"?new vC(e,r):n==="not-in"?new EC(e,r):n==="array-contains-any"?new wC(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gC(e,r):new yC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Li(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends z0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jt(e,n)}matches(e){return $0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $0(t){return t.op==="and"}function W0(t){return pC(t)&&$0(t)}function pC(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function Oh(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Mi(t.value);if(W0(t))return t.filters.map(e=>Oh(e)).join(",");{const e=t.filters.map(n=>Oh(n)).join(",");return`${t.op}(${e})`}}function H0(t,e){return t instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof jt?function(r,i){return i instanceof jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&H0(o,i.filters[l]),!0):!1}(t,e):void G()}function q0(t){return t instanceof Ce?function(n){return`${n.field.canonicalString()} ${n.op} ${Mi(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(q0).join(" ,")+"}"}(t):"Filter"}class mC extends Ce{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class gC extends Ce{constructor(e,n){super(e,"in",n),this.keys=K0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yC extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=K0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class _C extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&go(n.arrayValue,this.value)}}class vC extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&go(this.value.arrayValue,n)}}class EC extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!go(this.value.arrayValue,n)}}class wC extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>go(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Fg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new TC(t,e,n,r,i,s,o)}function af(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Oh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ou(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mi(r)).join(",")),e.ue=n}return e.ue}function lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!H0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bg(t.startAt,e.startAt)&&bg(t.endAt,e.endAt)}function Lh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IC(t,e,n,r,i,s,o,l){return new Vo(t,e,n,r,i,s,o,l)}function G0(t){return new Vo(t)}function Ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Q0(t){return t.collectionGroup!==null}function Bs(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Dl(s,r))}),n.has(je.keyField().canonicalString())||e.ce.push(new Dl(je.keyField(),r))}return e.ce}function Qt(t){const e=X(t);return e.le||(e.le=SC(e,Bs(t))),e.le}function SC(t,e){if(t.limitType==="F")return Fg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Dl(i.field,s)});const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return Fg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mh(t,e){const n=t.filters.concat([e]);return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bh(t,e,n){return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function au(t,e){return lf(Qt(t),Qt(e))&&t.limitType===e.limitType}function Y0(t){return`${af(Qt(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>q0(i)).join(", ")}]`),ou(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Mi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Mi(i)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Bs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Mg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Bs(r),i)||r.endAt&&!function(o,l,u){const h=Mg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Bs(r),i))}(t,e)}function AC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function X0(t){return(e,n)=>{let r=!1;for(const i of Bs(t)){const s=RC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Li(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return U0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new Ee(q.comparator);function Tn(){return PC}const J0=new Ee(q.comparator);function Cs(...t){let e=J0;for(const n of t)e=e.insert(n.key,n);return e}function Z0(t){let e=J0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return zs()}function eE(){return zs()}function zs(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const CC=new Ee(q.comparator),kC=new ze(q.comparator);function ee(...t){let e=kC;for(const n of t)e=e.add(n);return e}const NC=new ze(se);function DC(){return NC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function tE(t){return{integerValue:""+t}}function xC(t,e){return lC(e)?tE(e):uf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this._=void 0}}function VC(t,e,n){return t instanceof xl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rf(s)&&(s=sf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof yo?rE(t,e):t instanceof _o?iE(t,e):function(i,s){const o=nE(i,s),l=jg(o)+jg(i.Pe);return Vh(o)&&Vh(i.Pe)?tE(l):uf(i.serializer,l)}(t,e)}function OC(t,e,n){return t instanceof yo?rE(t,e):t instanceof _o?iE(t,e):n}function nE(t,e){return t instanceof Vl?function(r){return Vh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xl extends uu{}class yo extends uu{constructor(e){super(),this.elements=e}}function rE(t,e){const n=sE(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends uu{constructor(e){super(),this.elements=e}}function iE(t,e){let n=sE(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class Vl extends uu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function jg(t){return Se(t.integerValue||t.doubleValue)}function sE(t){return of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function LC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof yo&&i instanceof yo||r instanceof _o&&i instanceof _o?Oi(r.elements,i.elements,Xt):r instanceof Vl&&i instanceof Vl?Xt(r.Pe,i.Pe):r instanceof xl&&i instanceof xl}(t.transform,e.transform)}class MC{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cu{}function oE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cf(t.key,bt.none()):new Oo(t.key,t.data,bt.none());{const n=t.data,r=ut.empty();let i=new ze(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new dr(t.key,r,new yt(i.toArray()),bt.none())}}function bC(t,e,n){t instanceof Oo?function(i,s,o){const l=i.value.clone(),u=zg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(i,s,o){if(!Ha(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=zg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $s(t,e,n,r){return t instanceof Oo?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=s.value.clone(),f=$g(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=$g(s.fieldTransforms,u,o),f=o.data;return f.setAll(aE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function FC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nE(r.transform,i||null);s!=null&&(n===null&&(n=ut.empty()),n.set(r.field,s))}return n||null}function Bg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Oi(r,i,(s,o)=>LC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends cu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dr extends cu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zg(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,OC(o,l,n[i]))}return r}function $g(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,VC(s,o,e))}return r}class cf extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UC extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=oE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Oi(this.mutations,e.mutations,(n,r)=>Bg(n,r))&&Oi(this.baseMutations,e.baseMutations,(n,r)=>Bg(n,r))}}class hf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return CC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ne;function $C(t){switch(t){default:return G();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function lE(t){if(t===void 0)return wn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Re.OK:return O.OK;case Re.CANCELLED:return O.CANCELLED;case Re.UNKNOWN:return O.UNKNOWN;case Re.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Re.INTERNAL:return O.INTERNAL;case Re.UNAVAILABLE:return O.UNAVAILABLE;case Re.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Re.NOT_FOUND:return O.NOT_FOUND;case Re.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Re.ABORTED:return O.ABORTED;case Re.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Re.DATA_LOSS:return O.DATA_LOSS;default:return G()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new Pr([4294967295,4294967295],0);function Wg(t){const e=WC().encode(t),n=new N0;return n.update(e),new Uint8Array(n.digest())}function Hg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([i,s],0)]}class df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ks(`Invalid padding: ${n}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Pr.fromNumber(r)));return i.compare(HC)===1&&(i=new Pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Wg(e),[r,i]=Hg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new df(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Wg(e),[r,i]=Hg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hu(Y.min(),i,new Ee(se),Tn(),ee())}}class Lo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Lo(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class uE{constructor(e,n){this.targetId=e,this.me=n}}class cE{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qg{constructor(){this.fe=0,this.ge=Gg(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Lo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Gg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=Kg(),this.Qe=new Ee(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Lh(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Ze.newNoDocument(o,Y.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=br(r).toUint8Array()}catch(u){if(u instanceof j0)return Vi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new df(o,i,s)}catch(u){return Vi(u instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Lh(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new hu(e,n,this.Qe,this.ke,r);return this.ke=Tn(),this.qe=Kg(),this.Qe=new Ee(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new qg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new qg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Kg(){return new Ee(q.comparator)}function Gg(){return new Ee(q.comparator)}const KC={asc:"ASCENDING",desc:"DESCENDING"},GC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QC={and:"AND",or:"OR"};class YC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fh(t,e){return t.useProto3Json||ou(e)?e:{value:e}}function Ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XC(t,e){return Ol(t,e.toTimestamp())}function Yt(t){return ue(!!t),Y.fromTimestamp(function(n){const r=sr(n);return new xe(r.seconds,r.nanos)}(t))}function ff(t,e){return Uh(t,e).canonicalString()}function Uh(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dE(t){const e=fe.fromString(t);return ue(yE(e)),e}function jh(t,e){return ff(t.databaseId,e.path)}function Ic(t,e){const n=dE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(pE(n))}function fE(t,e){return ff(t.databaseId,e)}function JC(t){const e=dE(t);return e.length===4?fe.emptyPath():pE(e)}function Bh(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pE(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qg(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function ZC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:lE(h.code);return new W(f,h.message||"")}(o);n=new cE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ic(t,r.document.name),s=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):Y.min(),l=new ut({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new qa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ic(t,r.document),s=r.readTime?Yt(r.readTime):Y.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new qa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ic(t,r.document),s=r.removedTargetIds||[];n=new qa([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new zC(i,s),l=r.targetId;n=new uE(l,o)}}return n}function ek(t,e){let n;if(e instanceof Oo)n={update:Qg(t,e.key,e.value)};else if(e instanceof cf)n={delete:jh(t,e.key)};else if(e instanceof dr)n={update:Qg(t,e.key,e.data),updateMask:uk(e.fieldMask)};else{if(!(e instanceof UC))return G();n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Vl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:XC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function tk(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Yt(i.updateTime):Yt(s);return o.isEqual(Y.min())&&(o=Yt(s)),new MC(o,i.transformResults||[])}(n,e))):[]}function nk(t,e){return{documents:[fE(t,e.path)]}}function rk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fE(t,i);const s=function(h){if(h.length!==0)return gE(jt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Zr(g.field),direction:ok(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Fh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function ik(t){let e=JC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=mE(p);return g instanceof jt&&W0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Dl(ei(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ou(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,S=p.values||[];return new Nl(S,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,S=p.values||[];return new Nl(S,g)}(n.endAt)),IC(e,i,o,s,l,"F",u,h)}function sk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ei(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(n.unaryFilter.field);return Ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ei(n.unaryFilter.field);return Ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(n.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ce.create(ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>mE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function ok(t){return KC[t]}function ak(t){return GC[t]}function lk(t){return QC[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function ei(t){return je.fromServerFormat(t.fieldPath)}function gE(t){return t instanceof Ce?function(n){if(n.op==="=="){if(Lg(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NAN"}};if(Og(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lg(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NAN"}};if(Og(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(n.field),op:ak(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(i=>gE(i));return r.length===1?r[0]:{compositeFilter:{op:lk(n.op),filters:r}}}(t):G()}function uk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.ct=e}}function hk(t){const e=ik({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.un=new fk}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ir.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class fk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new bi(0)}static kn(){return new bi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$s(r.mutation,i,yt.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Cs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Tn();const o=zs(),l=function(){return zs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof dr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),$s(f.mutation,h,f.mutation.getFieldMask(),xe.now())):o.set(h.key,yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new mk(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=zs();let i=new Ee((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||yt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=eE();f.forEach(g=>{if(!s.has(g)){const S=oE(n.get(g),r.get(g));S!==null&&p.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Q0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Sr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:Z0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Cs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Cs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,g){return new Vo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Cs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&$s(f.mutation,h,yt.empty(),xe.now()),lu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:hk(i.bundledQuery),readTime:Yt(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.overlays=new Ee(q.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Sr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Sr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BC(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.Tr=new ze(Ve.Er),this.dr=new ze(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ze(Ve.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(se);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new q(s),0);let l=new ze(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.Mr=e,this.docs=function(){return new Ee(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||iC(rC(f),r)<=0||(i.has(f.key)||lu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Tk(this)}getSize(e){return L.resolve(this.size)}}class Tk extends pk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.persistence=e,this.Nr=new Ki(n=>af(n),lf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pf,this.targetCount=0,this.kr=bi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new nf(0),this.Kr=!1,this.Kr=!0,this.$r=new vk,this.referenceDelegate=e(this),this.Ur=new Ik(this),this.indexManager=new dk,this.remoteDocumentCache=function(i){return new wk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ck(n),this.Gr=new yk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _k,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Ek(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Ak(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Ak extends oC{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Jr=new pf,this.Yr=null}static Zr(e){return new mf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gS()?8:aC(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Rk;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(vs()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(vs()<=te.DEBUG&&H("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(vs()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):L.resolve())}Yi(e,n){if(Ug(n))return L.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bh(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,bh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Ug(n)||i.isEqual(Y.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(vs()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jr(n)),this.rs(e,o,n,nC(i,-1)).next(l=>l))})}ts(e,n){let r=new ze(X0(e));return n.forEach((i,s)=>{lu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return vs()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.Ji.getDocumentsMatchingQuery(e,n,ir.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(se),this._s=new Ki(s=>af(s),lf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function kk(t,e,n,r){return new Ck(t,e,n,r)}async function _E(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Nk(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let S=L.resolve();return g.forEach(P=>{S=S.next(()=>f.getEntry(u,P)).next(N=>{const D=h.docVersions.get(P);ue(D!==null),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function vE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Dk(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(N,D,I){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=Tn(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(xk(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function xk(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Vk(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ok(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zh(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Yg(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=X(u),g=p._s.get(f);return g!==void 0?L.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,Qt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(Lk(r,AC(e),l),{documents:l,Ts:s})))}function Lk(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Xg{constructor(){this.activeTargetIds=DC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mk{constructor(){this.so=new Xg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Xg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa=null;function Sc(){return Sa===null?Sa=function(){return 268435456+Math.round(2147483648*Math.random())}():Sa++,"0x"+Sa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class jk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Sc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Vi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Fk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Sc();return new Promise((o,l)=>{const u=new D0;u.setWithCredentials(!0),u.listenOnce(V0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $a.NO_ERROR:const f=u.getResponseJson();H(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case $a.TIMEOUT:H(Ye,`RPC '${e}' ${s} timed out`),l(new W(O.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const p=u.getStatus();if(H(Ye,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const P=function(D){const I=D.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(S.status);l(new W(P,S.message))}else l(new W(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(O.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(Ye,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Sc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=M0(),l=L0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new x0({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,S=!1;const P=new Uk({Io:D=>{S?H(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(H(Ye,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(Ye,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},To:()=>p.close()}),N=(D,I,_)=>{D.listen(I,A=>{try{_(A)}catch(V){setTimeout(()=>{throw V},0)}})};return N(p,Ps.EventType.OPEN,()=>{S||(H(Ye,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(p,Ps.EventType.CLOSE,()=>{S||(S=!0,H(Ye,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(p,Ps.EventType.ERROR,D=>{S||(S=!0,Vi(Ye,`RPC '${e}' stream ${i} transport errored:`,D),P.So(new W(O.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ps.EventType.MESSAGE,D=>{var I;if(!S){const _=D.data[0];ue(!!_);const A=_,V=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(V){H(Ye,`RPC '${e}' stream ${i} received error:`,V);const b=V.status;let U=function(v){const w=Re[v];if(w!==void 0)return lE(w)}(b),E=V.message;U===void 0&&(U=O.INTERNAL,E="Unknown error status: "+b+" with message "+V.message),S=!0,P.So(new W(U,E)),p.close()}else H(Ye,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),N(l,O0.STAT_EVENT,D=>{D.stat===Dh.PROXY?H(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Dh.NOPROXY&&H(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return new YC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new EE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bk extends wE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=ZC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Yt(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Bh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Lh(u)?{documents:nk(s,u)}:{query:rk(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hE(s,o.resumeToken);const h=Fh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Ol(s,o.snapshotVersion.toTimestamp());const h=Fh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=sk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Bh(this.serializer),n.removeTarget=e,this.a_(n)}}class zk extends wE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=tk(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Bh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ek(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Uh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Uh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Wk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{qr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await Mo(h),h.q_.set("Unknown"),h.L_.delete(4),await fu(h)}(this))})}),this.q_=new Wk(r,i)}}async function fu(t){if(qr(t))for(const e of t.B_)await e(!0)}async function Mo(t){for(const e of t.B_)await e(!1)}function TE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ef(n)?vf(n):Gi(n).r_()&&_f(n,e))}function yf(t,e){const n=X(t),r=Gi(n);n.N_.delete(e),r.r_()&&IE(n,e),n.N_.size===0&&(r.r_()?r.o_():qr(n)&&n.q_.set("Unknown"))}function _f(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gi(t).A_(e)}function IE(t,e){t.Q_.xe(e),Gi(t).R_(e)}function vf(t){t.Q_=new qC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gi(t).start(),t.q_.v_()}function Ef(t){return qr(t)&&!Gi(t).n_()&&t.N_.size>0}function qr(t){return X(t).L_.size===0}function SE(t){t.Q_=void 0}async function qk(t){t.q_.set("Online")}async function Kk(t){t.N_.forEach((e,n)=>{_f(t,e)})}async function Gk(t,e){SE(t),Ef(t)?(t.q_.M_(e),vf(t)):t.q_.set("Unknown")}async function Qk(t,e,n){if(t.q_.set("Online"),e instanceof cE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ll(t,r)}else if(e instanceof qa?t.Q_.Ke(e):e instanceof uE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await vE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),IE(s,u);const p=new Bn(f.target,u,h,f.sequenceNumber);_f(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ll(t,r)}}async function Ll(t,e,n){if(!xo(e))throw e;t.L_.add(1),await Mo(t),t.q_.set("Offline"),n||(n=()=>vE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await fu(t)})}function AE(t,e){return e().catch(n=>Ll(t,n,e))}async function pu(t){const e=X(t),n=or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Yk(e);)try{const i=await Vk(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Xk(e,i)}catch(i){await Ll(e,i)}RE(e)&&PE(e)}function Yk(t){return qr(t)&&t.O_.length<10}function Xk(t,e){t.O_.push(e);const n=or(t);n.r_()&&n.V_&&n.m_(e.mutations)}function RE(t){return qr(t)&&!or(t).n_()&&t.O_.length>0}function PE(t){or(t).start()}async function Jk(t){or(t).p_()}async function Zk(t){const e=or(t);for(const n of t.O_)e.m_(n.mutations)}async function eN(t,e,n){const r=t.O_.shift(),i=hf.from(r,e,n);await AE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pu(t)}async function tN(t,e){e&&or(t).V_&&await async function(r,i){if(function(o){return $C(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();or(r).s_(),await AE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pu(r)}}(t,e),RE(t)&&PE(t)}async function Zg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=qr(n);n.L_.add(3),await Mo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await fu(n)}async function nN(t,e){const n=X(t);e?(n.L_.delete(2),await fu(n)):e||(n.L_.add(2),await Mo(n),n.q_.set("Unknown"))}function Gi(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new Bk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:qk.bind(null,t),Ro:Kk.bind(null,t),mo:Gk.bind(null,t),d_:Qk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ef(t)?vf(t):t.q_.set("Unknown")):(await t.K_.stop(),SE(t))})),t.K_}function or(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new zk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Jk.bind(null,t),mo:tN.bind(null,t),f_:Zk.bind(null,t),g_:eN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await pu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new wf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(t,e){if(wn("AsyncQueue",`${e}: ${t}`),xo(t))return new W(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.W_=new Ee(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Fi(e,n,Ii.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class iN{constructor(){this.queries=ty(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=ty(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(O.ABORTED,"Firestore shutting down"))}}function ty(){return new Ki(t=>Y0(t),au)}async function sN(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new rN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tf(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&If(n)}async function oN(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&If(n)}function lN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function If(t){t.Y_.forEach(e=>{e.next()})}var $h,ny;(ny=$h||($h={})).ea="default",ny.Cache="cache";class uN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$h.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.key=e}}class kE{constructor(e){this.key=e}}class cN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=X0(e),this.Ra=new Ii(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ey,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),S=lu(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;g&&S?g.data.isEqual(S.data)?P!==N&&(r.track({type:3,doc:S}),D=!0):this.ga(g,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),D=!0):g&&!S&&(r.track({type:1,doc:g}),D=!0,(u||h)&&(l=!0)),D&&(S?(o=o.add(S),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,P){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return N(S)-N(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Fi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ey,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new kE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new CE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Fi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class hN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dN{constructor(e){this.key=e,this.va=!1}}class fN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ki(l=>Y0(l),au),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(q.comparator),this.Na=new Map,this.La=new pf,this.Ba={},this.ka=new Map,this.qa=bi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pN(t,e,n=!0){const r=LE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await NE(r,e,n,!0),i}async function mN(t,e){const n=LE(t);await NE(n,e,!0,!1)}async function NE(t,e,n,r){const i=await Ok(t.localStore,Qt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await gN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&TE(t.remoteStore,i),l}async function gN(t,e,n,r,i){t.Ka=(p,g,S)=>async function(N,D,I,_){let A=D.view.ma(I);A.ns&&(A=await Yg(N.localStore,D.query,!1).then(({documents:E})=>D.view.ma(E,A)));const V=_&&_.targetChanges.get(D.targetId),b=_&&_.targetMismatches.get(D.targetId)!=null,U=D.view.applyChanges(A,N.isPrimaryClient,V,b);return iy(N,D.targetId,U.wa),U.snapshot}(t,p,g,S);const s=await Yg(t.localStore,e,!0),o=new cN(e,s.Ts),l=o.ma(s.documents),u=Lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);iy(t,n,h.wa);const f=new hN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function yN(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!au(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yf(r.remoteStore,i.targetId),Wh(r,i.targetId)}).catch(Do)):(Wh(r,i.targetId),await zh(r.localStore,i.targetId,!0))}async function _N(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yf(n.remoteStore,r.targetId))}async function vN(t,e,n){const r=RN(t);try{const i=await function(o,l){const u=X(o),h=xe.now(),f=l.reduce((S,P)=>S.add(P.key),ee());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Tn(),N=ee();return u.cs.getEntries(S,f).next(D=>{P=D,P.forEach((I,_)=>{_.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(D=>{p=D;const I=[];for(const _ of l){const A=FC(_,p.get(_.key).overlayedDocument);A!=null&&I.push(new dr(_.key,A,B0(A.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,I,l)}).next(D=>{g=D;const I=D.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(S,D.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Z0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ee(se)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await bo(r,i.changes),await pu(r.remoteStore)}catch(i){const s=Tf(i,"Failed to persist write");n.reject(s)}}async function DE(t,e){const n=X(t);try{const r=await Dk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await bo(n,r,e)}catch(r){await Do(r)}}function ry(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&If(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(q.comparator);o=o.insert(s,Ze.newNoDocument(s,Y.min()));const l=ee().add(s),u=new hu(Y.min(),new Map,new Ee(se),o,l);await DE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Sf(r)}else await zh(r.localStore,e,!1).then(()=>Wh(r,e,n)).catch(Do)}async function wN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await Nk(n.localStore,e);VE(n,r,null),xE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,i)}catch(i){await Do(i)}}async function TN(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ue(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);VE(r,e,n),xE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,i)}catch(i){await Do(i)}}function xE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function VE(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||OE(t,r)})}function OE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Sf(t))}function iy(t,e,n){for(const r of n)r instanceof CE?(t.La.addReference(r.key,e),IN(t,r)):r instanceof kE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||OE(t,r.key)):G()}function IN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Sf(t))}function Sf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new dN(n)),t.Oa=t.Oa.insert(n,r),TE(t.remoteStore,new Bn(Qt(G0(n.path)),r,"TargetPurposeLimboResolution",nf.oe))}}async function bo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=gf.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.$i,S=>f.persistence.referenceDelegate.addReference(p,g.targetId,S)).next(()=>L.forEach(g.Ui,S=>f.persistence.referenceDelegate.removeReference(p,g.targetId,S)))))}catch(p){if(!xo(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const S=f.os.get(g),P=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(g,N)}}}(r.localStore,s))}async function SN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await _E(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.hs)}}function AN(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function LE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EN.bind(null,e),e.Ca.d_=aN.bind(null,e.eventManager),e.Ca.$a=lN.bind(null,e.eventManager),e}function RN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TN.bind(null,e),e}class sy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kk(this.persistence,new Pk,e.initialUser,this.serializer)}createPersistence(e){return new Sk(mf.Zr,this.serializer)}createSharedClientState(e){return new Mk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ry(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SN.bind(null,this.syncEngine),await nN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iN}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),r=function(s){return new jk(s)}(e.databaseInfo);return function(s,o,l,u){return new $k(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Hk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ry(this.syncEngine,n,0),function(){return Jg.D()?new Jg:new bk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new fN(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Mo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=F0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _E(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zg(e.remoteStore,i)),t._onlineComponents=e}function NN(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!NN(n))throw n;Vi("Error using user provided cache. Falling back to memory cache: "+n),await Rc(t,new sy)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Rc(t,new sy);return t._offlineComponents}async function ME(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await oy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await oy(t,new PN))),t._onlineComponents}function xN(t){return ME(t).then(e=>e.syncEngine)}async function VN(t){const e=await ME(t),n=e.eventManager;return n.onListen=pN.bind(null,e.syncEngine),n.onUnlisten=yN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_N.bind(null,e.syncEngine),n}function ON(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new CN({next:g=>{o.enqueueAndForget(()=>oN(s,p)),g.fromCache&&u.source==="server"?h.reject(new W(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new uN(l,f,{includeMetadataChanges:!0,_a:!0});return sN(s,p)}(await VN(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e,n){if(!n)throw new W(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LN(t,e,n,r){if(e===!0&&r===!0)throw new W(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ly(t){if(!q.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uy(t){if(q.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mu(t);throw new W(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KP;switch(r.type){case"firstParty":return new XP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ay.get(n);r&&(H("ComponentProvider","Removing Datastore"),ay.delete(n),r.terminate())}(this),Promise.resolve()}}function MN(t,e,n,r={}){var i;const s=(t=Ur(t,gu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=uS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new GP(new b0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qi(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class tr extends Qi{constructor(e,n,r){super(e,n,G0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new q(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function hy(t,e,...n){if(t=Me(t),FE("collection","path",e),t instanceof gu){const r=fe.fromString(e,...n);return uy(r),new tr(t,null,r)}{if(!(t instanceof vt||t instanceof tr))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return uy(r),new tr(t.firestore,null,r)}}function Hh(t,e,...n){if(t=Me(t),arguments.length===1&&(e=F0.newId()),FE("doc","path",e),t instanceof gu){const r=fe.fromString(e,...n);return ly(r),new vt(t,null,new q(r))}{if(!(t instanceof vt||t instanceof tr))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return ly(r),new vt(t.firestore,t instanceof tr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new EE(this,"async_queue_retry"),this.Eu=()=>{const n=Ac();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Ac();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new er;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!xo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=wf.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&G()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Fo extends gu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new bN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jE(this),this._firestoreClient.terminate()}}function FN(t,e){const n=typeof t=="object"?t:Kv(),r=typeof t=="string"?t:"(default)",i=Hd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aS("firestore");s&&MN(i,...s)}return i}function UE(t){return t._firestoreClient||jE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jE(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new cC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,bE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new kN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ui(We.fromBase64String(e))}catch(n){throw new W(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ui(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=/^__.*__$/;class jN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}class BE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Cf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Ml(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(zE(this.wu)&&UN.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class BN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}Nu(e,n,r,i=!1){return new Cf({wu:e,methodName:n,Ou:r,path:je.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kf(t){const e=t._freezeSettings(),n=du(t._databaseId);return new BN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zN(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);Nf("Data must be an object, but it was:",o,r);const l=$E(r,o);let u,h;if(s.merge)u=new yt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=qh(e,p,n);if(!o.contains(g))throw new W(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);HE(f,g)||f.push(g)}u=new yt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new jN(new ut(l),u,h)}class _u extends Af{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _u}}function $N(t,e,n,r){const i=t.Nu(1,e,n);Nf("Data must be an object, but it was:",i,r);const s=[],o=ut.empty();Hr(r,(u,h)=>{const f=Df(e,u,n);h=Me(h);const p=i.Cu(f);if(h instanceof _u)s.push(f);else{const g=Uo(h,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new yt(s);return new BE(o,l,i.fieldTransforms)}function WN(t,e,n,r,i,s){const o=t.Nu(1,e,n),l=[qh(e,r,n)],u=[i];if(s.length%2!=0)throw new W(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(qh(e,s[g])),u.push(s[g+1]);const h=[],f=ut.empty();for(let g=l.length-1;g>=0;--g)if(!HE(h,l[g])){const S=l[g];let P=u[g];P=Me(P);const N=o.Cu(S);if(P instanceof _u)h.push(S);else{const D=Uo(P,N);D!=null&&(h.push(S),f.set(S,D))}}const p=new yt(h);return new BE(f,p,o.fieldTransforms)}function HN(t,e,n,r=!1){return Uo(n,t.Nu(r?4:3,e))}function Uo(t,e){if(WE(t=Me(t)))return Nf("Unsupported field value:",e,t),$E(t,e);if(t instanceof Af)return function(r,i){if(!zE(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Uo(l,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:Ol(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ol(i.serializer,s)}}if(r instanceof Rf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ui)return{bytesValue:hE(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ff(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Pf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return uf(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${mu(r)}`)}(t,e)}function $E(t,e){const n={};return U0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(t,(r,i)=>{const s=Uo(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Rf||t instanceof Ui||t instanceof vt||t instanceof Af||t instanceof Pf)}function Nf(t,e,n){if(!WE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=mu(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function qh(t,e,n){if((e=Me(e))instanceof yu)return e._internalPath;if(typeof e=="string")return Df(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const qN=new RegExp("[~\\*/\\[\\]]");function Df(t,e,n){if(e.search(qN)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yu(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(O.INVALID_ARGUMENT,l+t+u)}function HE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KN extends qE{data(){return super.data()}}function xf(t,e){return typeof e=="string"?Df(t,e):e instanceof yu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vf{}class QN extends Vf{}function YN(t,e,...n){let r=[];e instanceof Vf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Of).length,l=s.filter(u=>u instanceof vu).length;if(o>1||o>0&&l>0)throw new W(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vu extends QN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vu(e,n,r)}_apply(e){const n=this._parse(e);return KE(e._query,n),new Qi(e.firestore,e.converter,Mh(e._query,n))}_parse(e){const n=kf(e.firestore);return function(s,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){fy(p,f);const S=[];for(const P of p)S.push(dy(u,s,P));g={arrayValue:{values:S}}}else g=dy(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||fy(p,f),g=HN(l,o,p,f==="in"||f==="not-in");return Ce.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function XN(t,e,n){const r=e,i=xf("where",t);return vu._create(i,r,n)}class Of extends Vf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Of(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)KE(o,u),o=Mh(o,u)}(e._query,n),new Qi(e.firestore,e.converter,Mh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function dy(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new W(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Q0(e)&&n.indexOf("/")!==-1)throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!q.isDocumentKey(r))throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vg(t,new q(r))}if(n instanceof vt)return Vg(t,n._key);throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mu(n)}.`)}function fy(t,e){if(!Array.isArray(t)||t.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JN{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new Pf(s)}convertGeoPoint(e){return new Rf(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(po(e));default:return null}}convertTimestamp(e){const n=sr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ue(yE(r));const i=new mo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eD extends qE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ka extends eD{data(e={}){return super.data(e)}}class tD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Aa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ka(this._firestore,this._userDataWriter,r.key,r,new Aa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Aa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Aa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:nD(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class rD extends JN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function iD(t){t=Ur(t,Qi);const e=Ur(t.firestore,Fo),n=UE(e),r=new rD(e);return GN(t._query),ON(n,t._query).then(i=>new tD(e,r,t,i))}function sD(t,e,n,...r){t=Ur(t,vt);const i=Ur(t.firestore,Fo),s=kf(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof yu?WN(s,"updateDoc",t._key,e,n,r):$N(s,"updateDoc",t._key,e),Lf(i,[o.toMutation(t._key,bt.exists(!0))])}function oD(t){return Lf(Ur(t.firestore,Fo),[new cf(t._key,bt.none())])}function aD(t,e){const n=Ur(t.firestore,Fo),r=Hh(t),i=ZN(t.converter,e);return Lf(n,[zN(kf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function Lf(t,e){return function(r,i){const s=new er;return r.asyncQueue.enqueueAndForget(async()=>vN(await xN(r),i,s)),s.promise}(UE(t),e)}(function(e,n=!0){(function(i){qi=i})(Wi),xi(new Vr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Fo(new QP(r.getProvider("auth-internal")),new ZP(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Zn(Cg,"4.7.2",e),Zn(Cg,"4.7.2","esm2017")})();const lD={apiKey:"AIzaSyARs9_r06s5VzgDxi_YZZmoSF2bWQxeJUg",authDomain:"sample-login-system-c9939.firebaseapp.com",projectId:"sample-login-system-c9939",storageBucket:"sample-login-system-c9939.appspot.com",messagingSenderId:"1032836128371",appId:"1:1032836128371:web:f603f1c7f355b4ab411406"},GE=qv(lD),Si=$P(GE),Ra=FN(GE),uD=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),o=tu(),l=async u=>{u.preventDefault(),s("");try{await CR(Si,t,n),console.log("Login Successfully"),o("/")}catch(h){console.log(h),s("Invalid email or password. Please try again.")}};return B.jsx("div",{className:"login-container",children:B.jsxs("form",{className:"login-form",onSubmit:l,children:[B.jsx("h2",{className:"form-title",children:"Login"}),i&&B.jsx("p",{className:"error-message",children:i})," ",B.jsx("div",{className:"form-group",children:B.jsxs("label",{htmlFor:"email",className:"form-label",children:["Email:",B.jsx("input",{type:"email",id:"email",className:"form-input",value:t,onChange:u=>e(u.target.value),required:!0,placeholder:"Enter your email"})]})}),B.jsx("div",{className:"form-group",children:B.jsxs("label",{htmlFor:"password",className:"form-label",children:["Password:",B.jsx("input",{type:"password",id:"password",className:"form-input",value:n,onChange:u=>r(u.target.value),required:!0,placeholder:"Enter your password"})]})}),B.jsx("button",{type:"submit",className:"submit-btn",children:"Login"}),B.jsxs("p",{className:"redirect-text",children:["Don't have an account?"," ",B.jsx(El,{to:"/taskmate-todo-list-firebase/signup",className:"redirect-link",children:"Register Here!"})]})]})})},cD=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),i=tu(),s=async o=>{o.preventDefault();try{await PR(Si,t,n),console.log("Account created."),i("/")}catch(l){console.log(l)}};return B.jsx("div",{className:"signup-container",children:B.jsxs("form",{className:"signup-form",onSubmit:s,children:[B.jsx("h2",{className:"form-title",children:"Sign Up"}),B.jsx("div",{className:"form-group",children:B.jsxs("label",{htmlFor:"email",className:"form-label",children:["Email:",B.jsx("input",{type:"text",className:"form-input",onChange:o=>e(o.target.value)})]})}),B.jsx("div",{className:"form-group",children:B.jsxs("label",{htmlFor:"password",className:"form-label",children:["Password:",B.jsx("input",{type:"password",className:"form-input",onChange:o=>r(o.target.value)})]})}),B.jsx("button",{type:"submit",className:"submit-btn",children:"Sign Up"}),B.jsxs("p",{className:"redirect-text",children:["Already Registered?",B.jsx(El,{to:"/taskmate-todo-list-firebase/login",className:"redirect-link",children:"Login"}),"Here!"]})]})})},hD=({task:t,deleteTask:e,completeTask:n})=>B.jsxs("div",{className:"todo-item",children:[B.jsxs("div",{className:"todo-header",children:[B.jsx("h3",{children:t.name}),B.jsx("p",{className:`priority ${t.priority}`,children:t.priority})]}),B.jsx("p",{className:"description",children:t.description}),B.jsxs("p",{className:"completed-status",children:["Completed: ",B.jsx("span",{children:t.completed?"Yes":"No"})]}),B.jsxs("div",{className:"actions",children:[B.jsx("button",{className:`btn complete-btn ${t.completed?"disabled":""}`,onClick:()=>n(t.id),disabled:t.completed,children:t.completed?"Completed":"Complete Task"}),B.jsx("button",{className:"btn delete-btn",onClick:()=>e(t.id),children:"Delete Task"})]})]}),dD=({setLogin:t})=>{const[e,n]=j.useState([]),r=j.useRef(),i=j.useRef(),s=j.useRef(),o=tu();j.useEffect(()=>{f()},[]);const l=async()=>{const g=Si.currentUser;let S={name:r.current.value,completed:!1,priority:s.current.value,description:i.current.value,userId:g?g.uid:null,userEmail:g?g.email:null};try{const P=await aD(hy(Ra,"tasks"),S);S.id=P.id,n([...e,S])}catch(P){console.error("Error adding task to Firestore: ",P)}r.current.value="",i.current.value="",s.current.value="4"},u=async g=>{try{await oD(Hh(Ra,"tasks",g)),n(e.filter(S=>S.id!==g))}catch(S){console.error("Error deleting task from Firestore: ",S)}},h=async g=>{try{await sD(Hh(Ra,"tasks",g),{completed:!0}),n(e.map(S=>S.id===g?{...S,completed:!0}:S))}catch(S){console.error("Error updating task completion: ",S)}},f=async()=>{const g=Si.currentUser;if(g)try{const S=YN(hy(Ra,"tasks"),XN("userId","==",g.uid)),P=await iD(S);let N=[];P.forEach(D=>{N.push({id:D.id,...D.data()})}),n(N)}catch(S){console.error("Error loading tasks from Firestore: ",S)}},p=async()=>{try{await xR(Si),t(null),o("/taskmate-todo-list-firebase/")}catch(g){console.error("Error logging out: ",g)}};return B.jsxs("div",{className:"todo-container",children:[B.jsxs("div",{className:"header",children:[B.jsx("h1",{children:"TaskMate"}),B.jsx("button",{className:"logout-btn",onClick:p,children:"Logout"})]}),B.jsxs("div",{className:"task-inputs",children:[B.jsx("input",{type:"text",placeholder:"Type in a Task",ref:r,className:"input-field"}),B.jsx("input",{type:"text",placeholder:"Task Description",ref:i,className:"input-field"}),B.jsxs("select",{ref:s,className:"priority-select",children:[B.jsx("option",{value:"1",children:"Priority 1"}),B.jsx("option",{value:"2",children:"Priority 2"}),B.jsx("option",{value:"3",children:"Priority 3"}),B.jsx("option",{value:"4",selected:!0,children:"Priority 4"})]}),B.jsx("button",{className:"add-btn",onClick:l,children:"Add Task"})]}),B.jsx("div",{className:"tasks-list",children:e.length===0?B.jsx("p",{className:"no-tasks",children:"No tasks available. Add a new task!"}):e.map(g=>B.jsx(hD,{task:g,deleteTask:u,completeTask:h},g.id))})]})},fD=()=>B.jsx("div",{className:"homepage-container",children:B.jsxs("div",{className:"hero",children:[B.jsx("h1",{className:"title",children:"Welcome to CheckMate!"}),B.jsx("p",{className:"subtitle",children:"Your ultimate To-do List."}),B.jsxs("div",{className:"buttons",children:[B.jsx(El,{to:"/taskmate-todo-list-firebase/signup",className:"btn signup-btn",children:"Register Here"}),B.jsx(El,{to:"/taskmate-todo-list-firebase/login",className:"btn login-btn",children:"Login Here"})]})]})});function pD(){const[t,e]=j.useState(null);return j.useEffect(()=>{const n=DR(Si,r=>{e(r||null)});return()=>{n()}},[]),B.jsx(Y1,{children:B.jsx($1,{children:t?B.jsx(Ss,{path:"/",element:B.jsx(dD,{setLogin:()=>e(null),username:t.email})}):B.jsxs(B.Fragment,{children:[B.jsx(Ss,{path:"/taskmate-todo-list-firebase/",element:B.jsx(fD,{})}),B.jsx(Ss,{path:"/taskmate-todo-list-firebase/login",element:B.jsx(uD,{})}),B.jsx(Ss,{path:"/taskmate-todo-list-firebase/signup",element:B.jsx(cD,{})})]})})})}Rv(document.getElementById("root")).render(B.jsx(j.StrictMode,{children:B.jsx(pD,{})}));

const Wi=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}};Wi();function jo(t,r){const e=Object.create(null),o=t.split(",");for(let a=0;a<o.length;a++)e[o[a]]=!0;return r?a=>!!e[a.toLowerCase()]:a=>!!e[a]}const Ki="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qi=jo(Ki);function hn(t){return!!t||t===""}function Io(t){if(M(t)){const r={};for(let e=0;e<t.length;e++){const o=t[e],a=Q(o)?Gi(o):Io(o);if(a)for(const n in a)r[n]=a[n]}return r}else{if(Q(t))return t;if(Z(t))return t}}const Xi=/;(?![^(]*\))/g,Vi=/:(.+)/;function Gi(t){const r={};return t.split(Xi).forEach(e=>{if(e){const o=e.split(Vi);o.length>1&&(r[o[0].trim()]=o[1].trim())}}),r}function To(t){let r="";if(Q(t))r=t;else if(M(t))for(let e=0;e<t.length;e++){const o=To(t[e]);o&&(r+=o+" ")}else if(Z(t))for(const e in t)t[e]&&(r+=e+" ");return r.trim()}const br=t=>Q(t)?t:t==null?"":M(t)||Z(t)&&(t.toString===kn||!F(t.toString))?JSON.stringify(t,xn,2):String(t),xn=(t,r)=>r&&r.__v_isRef?xn(t,r.value):ur(r)?{[`Map(${r.size})`]:[...r.entries()].reduce((e,[o,a])=>(e[`${o} =>`]=a,e),{})}:wn(r)?{[`Set(${r.size})`]:[...r.values()]}:Z(r)&&!M(r)&&!_n(r)?String(r):r,q={},gr=[],wt=()=>{},Ji=()=>!1,Zi=/^on[^a-z]/,_e=t=>Zi.test(t),So=t=>t.startsWith("onUpdate:"),at=Object.assign,No=(t,r)=>{const e=t.indexOf(r);e>-1&&t.splice(e,1)},Qi=Object.prototype.hasOwnProperty,D=(t,r)=>Qi.call(t,r),M=Array.isArray,ur=t=>ze(t)==="[object Map]",wn=t=>ze(t)==="[object Set]",F=t=>typeof t=="function",Q=t=>typeof t=="string",Mo=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",yn=t=>Z(t)&&F(t.then)&&F(t.catch),kn=Object.prototype.toString,ze=t=>kn.call(t),ts=t=>ze(t).slice(8,-1),_n=t=>ze(t)==="[object Object]",Lo=t=>Q(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ae=jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ae=t=>{const r=Object.create(null);return e=>r[e]||(r[e]=t(e))},rs=/-(\w)/g,jt=Ae(t=>t.replace(rs,(r,e)=>e?e.toUpperCase():"")),es=/\B([A-Z])/g,_r=Ae(t=>t.replace(es,"-$1").toLowerCase()),Oe=Ae(t=>t.charAt(0).toUpperCase()+t.slice(1)),He=Ae(t=>t?`on${Oe(t)}`:""),me=(t,r)=>!Object.is(t,r),We=(t,r)=>{for(let e=0;e<t.length;e++)t[e](r)},pe=(t,r,e)=>{Object.defineProperty(t,r,{configurable:!0,enumerable:!1,value:e})},os=t=>{const r=parseFloat(t);return isNaN(r)?t:r};let va;const as=()=>va||(va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let At;class ns{constructor(r=!1){this.active=!0,this.effects=[],this.cleanups=[],!r&&At&&(this.parent=At,this.index=(At.scopes||(At.scopes=[])).push(this)-1)}run(r){if(this.active){const e=At;try{return At=this,r()}finally{At=e}}}on(){At=this}off(){At=this.parent}stop(r){if(this.active){let e,o;for(e=0,o=this.effects.length;e<o;e++)this.effects[e].stop();for(e=0,o=this.cleanups.length;e<o;e++)this.cleanups[e]();if(this.scopes)for(e=0,o=this.scopes.length;e<o;e++)this.scopes[e].stop(!0);if(this.parent&&!r){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function is(t,r=At){r&&r.active&&r.effects.push(t)}const Fo=t=>{const r=new Set(t);return r.w=0,r.n=0,r},zn=t=>(t.w&qt)>0,An=t=>(t.n&qt)>0,ss=({deps:t})=>{if(t.length)for(let r=0;r<t.length;r++)t[r].w|=qt},ls=t=>{const{deps:r}=t;if(r.length){let e=0;for(let o=0;o<r.length;o++){const a=r[o];zn(a)&&!An(a)?a.delete(t):r[e++]=a,a.w&=~qt,a.n&=~qt}r.length=e}},ro=new WeakMap;let Tr=0,qt=1;const eo=30;let ut;const rr=Symbol(""),oo=Symbol("");class Ro{constructor(r,e=null,o){this.fn=r,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,is(this,o)}run(){if(!this.active)return this.fn();let r=ut,e=Wt;for(;r;){if(r===this)return;r=r.parent}try{return this.parent=ut,ut=this,Wt=!0,qt=1<<++Tr,Tr<=eo?ss(this):ha(this),this.fn()}finally{Tr<=eo&&ls(this),qt=1<<--Tr,ut=this.parent,Wt=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(ha(this),this.onStop&&this.onStop(),this.active=!1)}}function ha(t){const{deps:r}=t;if(r.length){for(let e=0;e<r.length;e++)r[e].delete(t);r.length=0}}let Wt=!0;const On=[];function zr(){On.push(Wt),Wt=!1}function Ar(){const t=On.pop();Wt=t===void 0?!0:t}function pt(t,r,e){if(Wt&&ut){let o=ro.get(t);o||ro.set(t,o=new Map);let a=o.get(e);a||o.set(e,a=Fo()),Cn(a)}}function Cn(t,r){let e=!1;Tr<=eo?An(t)||(t.n|=qt,e=!zn(t)):e=!t.has(ut),e&&(t.add(ut),ut.deps.push(t))}function Nt(t,r,e,o,a,n){const i=ro.get(t);if(!i)return;let s=[];if(r==="clear")s=[...i.values()];else if(e==="length"&&M(t))i.forEach((l,m)=>{(m==="length"||m>=o)&&s.push(l)});else switch(e!==void 0&&s.push(i.get(e)),r){case"add":M(t)?Lo(e)&&s.push(i.get("length")):(s.push(i.get(rr)),ur(t)&&s.push(i.get(oo)));break;case"delete":M(t)||(s.push(i.get(rr)),ur(t)&&s.push(i.get(oo)));break;case"set":ur(t)&&s.push(i.get(rr));break}if(s.length===1)s[0]&&ao(s[0]);else{const l=[];for(const m of s)m&&l.push(...m);ao(Fo(l))}}function ao(t,r){const e=M(t)?t:[...t];for(const o of e)o.computed&&xa(o);for(const o of e)o.computed||xa(o)}function xa(t,r){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ds=jo("__proto__,__v_isRef,__isVue"),En=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mo)),cs=$o(),ms=$o(!1,!0),ps=$o(!0),wa=fs();function fs(){const t={};return["includes","indexOf","lastIndexOf"].forEach(r=>{t[r]=function(...e){const o=Y(this);for(let n=0,i=this.length;n<i;n++)pt(o,"get",n+"");const a=o[r](...e);return a===-1||a===!1?o[r](...e.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(r=>{t[r]=function(...e){zr();const o=Y(this)[r].apply(this,e);return Ar(),o}}),t}function $o(t=!1,r=!1){return function(o,a,n){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return r;if(a==="__v_raw"&&n===(t?r?Ps:Sn:r?Tn:In).get(o))return o;const i=M(o);if(!t&&i&&D(wa,a))return Reflect.get(wa,a,n);const s=Reflect.get(o,a,n);return(Mo(a)?En.has(a):ds(a))||(t||pt(o,"get",a),r)?s:ot(s)?i&&Lo(a)?s:s.value:Z(s)?t?Nn(s):Uo(s):s}}const bs=Pn(),gs=Pn(!0);function Pn(t=!1){return function(e,o,a,n){let i=e[o];if(Br(i)&&ot(i)&&!ot(a))return!1;if(!t&&!Br(a)&&(no(a)||(a=Y(a),i=Y(i)),!M(e)&&ot(i)&&!ot(a)))return i.value=a,!0;const s=M(e)&&Lo(o)?Number(o)<e.length:D(e,o),l=Reflect.set(e,o,a,n);return e===Y(n)&&(s?me(a,i)&&Nt(e,"set",o,a):Nt(e,"add",o,a)),l}}function us(t,r){const e=D(t,r);t[r];const o=Reflect.deleteProperty(t,r);return o&&e&&Nt(t,"delete",r,void 0),o}function vs(t,r){const e=Reflect.has(t,r);return(!Mo(r)||!En.has(r))&&pt(t,"has",r),e}function hs(t){return pt(t,"iterate",M(t)?"length":rr),Reflect.ownKeys(t)}const jn={get:cs,set:bs,deleteProperty:us,has:vs,ownKeys:hs},xs={get:ps,set(t,r){return!0},deleteProperty(t,r){return!0}},ws=at({},jn,{get:ms,set:gs}),Do=t=>t,Ce=t=>Reflect.getPrototypeOf(t);function Zr(t,r,e=!1,o=!1){t=t.__v_raw;const a=Y(t),n=Y(r);e||(r!==n&&pt(a,"get",r),pt(a,"get",n));const{has:i}=Ce(a),s=o?Do:e?Wo:Ho;if(i.call(a,r))return s(t.get(r));if(i.call(a,n))return s(t.get(n));t!==a&&t.get(r)}function Qr(t,r=!1){const e=this.__v_raw,o=Y(e),a=Y(t);return r||(t!==a&&pt(o,"has",t),pt(o,"has",a)),t===a?e.has(t):e.has(t)||e.has(a)}function te(t,r=!1){return t=t.__v_raw,!r&&pt(Y(t),"iterate",rr),Reflect.get(t,"size",t)}function ya(t){t=Y(t);const r=Y(this);return Ce(r).has.call(r,t)||(r.add(t),Nt(r,"add",t,t)),this}function ka(t,r){r=Y(r);const e=Y(this),{has:o,get:a}=Ce(e);let n=o.call(e,t);n||(t=Y(t),n=o.call(e,t));const i=a.call(e,t);return e.set(t,r),n?me(r,i)&&Nt(e,"set",t,r):Nt(e,"add",t,r),this}function _a(t){const r=Y(this),{has:e,get:o}=Ce(r);let a=e.call(r,t);a||(t=Y(t),a=e.call(r,t)),o&&o.call(r,t);const n=r.delete(t);return a&&Nt(r,"delete",t,void 0),n}function za(){const t=Y(this),r=t.size!==0,e=t.clear();return r&&Nt(t,"clear",void 0,void 0),e}function re(t,r){return function(o,a){const n=this,i=n.__v_raw,s=Y(i),l=r?Do:t?Wo:Ho;return!t&&pt(s,"iterate",rr),i.forEach((m,p)=>o.call(a,l(m),l(p),n))}}function ee(t,r,e){return function(...o){const a=this.__v_raw,n=Y(a),i=ur(n),s=t==="entries"||t===Symbol.iterator&&i,l=t==="keys"&&i,m=a[t](...o),p=e?Do:r?Wo:Ho;return!r&&pt(n,"iterate",l?oo:rr),{next(){const{value:f,done:h}=m.next();return h?{value:f,done:h}:{value:s?[p(f[0]),p(f[1])]:p(f),done:h}},[Symbol.iterator](){return this}}}}function Bt(t){return function(...r){return t==="delete"?!1:this}}function ys(){const t={get(n){return Zr(this,n)},get size(){return te(this)},has:Qr,add:ya,set:ka,delete:_a,clear:za,forEach:re(!1,!1)},r={get(n){return Zr(this,n,!1,!0)},get size(){return te(this)},has:Qr,add:ya,set:ka,delete:_a,clear:za,forEach:re(!1,!0)},e={get(n){return Zr(this,n,!0)},get size(){return te(this,!0)},has(n){return Qr.call(this,n,!0)},add:Bt("add"),set:Bt("set"),delete:Bt("delete"),clear:Bt("clear"),forEach:re(!0,!1)},o={get(n){return Zr(this,n,!0,!0)},get size(){return te(this,!0)},has(n){return Qr.call(this,n,!0)},add:Bt("add"),set:Bt("set"),delete:Bt("delete"),clear:Bt("clear"),forEach:re(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=ee(n,!1,!1),e[n]=ee(n,!0,!1),r[n]=ee(n,!1,!0),o[n]=ee(n,!0,!0)}),[t,e,r,o]}const[ks,_s,zs,As]=ys();function Bo(t,r){const e=r?t?As:zs:t?_s:ks;return(o,a,n)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?o:Reflect.get(D(e,a)&&a in o?e:o,a,n)}const Os={get:Bo(!1,!1)},Cs={get:Bo(!1,!0)},Es={get:Bo(!0,!1)},In=new WeakMap,Tn=new WeakMap,Sn=new WeakMap,Ps=new WeakMap;function js(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Is(t){return t.__v_skip||!Object.isExtensible(t)?0:js(ts(t))}function Uo(t){return Br(t)?t:Yo(t,!1,jn,Os,In)}function Ts(t){return Yo(t,!1,ws,Cs,Tn)}function Nn(t){return Yo(t,!0,xs,Es,Sn)}function Yo(t,r,e,o,a){if(!Z(t)||t.__v_raw&&!(r&&t.__v_isReactive))return t;const n=a.get(t);if(n)return n;const i=Is(t);if(i===0)return t;const s=new Proxy(t,i===2?o:e);return a.set(t,s),s}function vr(t){return Br(t)?vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Br(t){return!!(t&&t.__v_isReadonly)}function no(t){return!!(t&&t.__v_isShallow)}function Mn(t){return vr(t)||Br(t)}function Y(t){const r=t&&t.__v_raw;return r?Y(r):t}function Ln(t){return pe(t,"__v_skip",!0),t}const Ho=t=>Z(t)?Uo(t):t,Wo=t=>Z(t)?Nn(t):t;function Ss(t){Wt&&ut&&(t=Y(t),Cn(t.dep||(t.dep=Fo())))}function Ns(t,r){t=Y(t),t.dep&&ao(t.dep)}function ot(t){return!!(t&&t.__v_isRef===!0)}function Ms(t){return ot(t)?t.value:t}const Ls={get:(t,r,e)=>Ms(Reflect.get(t,r,e)),set:(t,r,e,o)=>{const a=t[r];return ot(a)&&!ot(e)?(a.value=e,!0):Reflect.set(t,r,e,o)}};function Fn(t){return vr(t)?t:new Proxy(t,Ls)}class Fs{constructor(r,e,o,a){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ro(r,()=>{this._dirty||(this._dirty=!0,Ns(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=o}get value(){const r=Y(this);return Ss(r),(r._dirty||!r._cacheable)&&(r._dirty=!1,r._value=r.effect.run()),r._value}set value(r){this._setter(r)}}function Rs(t,r,e=!1){let o,a;const n=F(t);return n?(o=t,a=wt):(o=t.get,a=t.set),new Fs(o,a,n||!a,e)}function Kt(t,r,e,o){let a;try{a=o?t(...o):t()}catch(n){Ee(n,r,e)}return a}function yt(t,r,e,o){if(F(t)){const n=Kt(t,r,e,o);return n&&yn(n)&&n.catch(i=>{Ee(i,r,e)}),n}const a=[];for(let n=0;n<t.length;n++)a.push(yt(t[n],r,e,o));return a}function Ee(t,r,e,o=!0){const a=r?r.vnode:null;if(r){let n=r.parent;const i=r.proxy,s=e;for(;n;){const m=n.ec;if(m){for(let p=0;p<m.length;p++)if(m[p](t,i,s)===!1)return}n=n.parent}const l=r.appContext.config.errorHandler;if(l){Kt(l,null,10,[t,i,s]);return}}$s(t,e,a,o)}function $s(t,r,e,o=!0){console.error(t)}let fe=!1,io=!1;const mt=[];let St=0;const Mr=[];let Sr=null,dr=0;const Lr=[];let Yt=null,cr=0;const Rn=Promise.resolve();let Ko=null,so=null;function Ds(t){const r=Ko||Rn;return t?r.then(this?t.bind(this):t):r}function Bs(t){let r=St+1,e=mt.length;for(;r<e;){const o=r+e>>>1;Ur(mt[o])<t?r=o+1:e=o}return r}function $n(t){(!mt.length||!mt.includes(t,fe&&t.allowRecurse?St+1:St))&&t!==so&&(t.id==null?mt.push(t):mt.splice(Bs(t.id),0,t),Dn())}function Dn(){!fe&&!io&&(io=!0,Ko=Rn.then(Yn))}function Us(t){const r=mt.indexOf(t);r>St&&mt.splice(r,1)}function Bn(t,r,e,o){M(t)?e.push(...t):(!r||!r.includes(t,t.allowRecurse?o+1:o))&&e.push(t),Dn()}function Ys(t){Bn(t,Sr,Mr,dr)}function Hs(t){Bn(t,Yt,Lr,cr)}function Pe(t,r=null){if(Mr.length){for(so=r,Sr=[...new Set(Mr)],Mr.length=0,dr=0;dr<Sr.length;dr++)Sr[dr]();Sr=null,dr=0,so=null,Pe(t,r)}}function Un(t){if(Pe(),Lr.length){const r=[...new Set(Lr)];if(Lr.length=0,Yt){Yt.push(...r);return}for(Yt=r,Yt.sort((e,o)=>Ur(e)-Ur(o)),cr=0;cr<Yt.length;cr++)Yt[cr]();Yt=null,cr=0}}const Ur=t=>t.id==null?1/0:t.id;function Yn(t){io=!1,fe=!0,Pe(t),mt.sort((e,o)=>Ur(e)-Ur(o));const r=wt;try{for(St=0;St<mt.length;St++){const e=mt[St];e&&e.active!==!1&&Kt(e,null,14)}}finally{St=0,mt.length=0,Un(),fe=!1,Ko=null,(mt.length||Mr.length||Lr.length)&&Yn(t)}}function Ws(t,r,...e){if(t.isUnmounted)return;const o=t.vnode.props||q;let a=e;const n=r.startsWith("update:"),i=n&&r.slice(7);if(i&&i in o){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:h}=o[p]||q;h&&(a=e.map(A=>A.trim())),f&&(a=e.map(os))}let s,l=o[s=He(r)]||o[s=He(jt(r))];!l&&n&&(l=o[s=He(_r(r))]),l&&yt(l,t,6,a);const m=o[s+"Once"];if(m){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,yt(m,t,6,a)}}function Hn(t,r,e=!1){const o=r.emitsCache,a=o.get(t);if(a!==void 0)return a;const n=t.emits;let i={},s=!1;if(!F(t)){const l=m=>{const p=Hn(m,r,!0);p&&(s=!0,at(i,p))};!e&&r.mixins.length&&r.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!n&&!s?(o.set(t,null),null):(M(n)?n.forEach(l=>i[l]=null):at(i,n),o.set(t,i),i)}function je(t,r){return!t||!_e(r)?!1:(r=r.slice(2).replace(/Once$/,""),D(t,r[0].toLowerCase()+r.slice(1))||D(t,_r(r))||D(t,r))}let Et=null,Wn=null;function be(t){const r=Et;return Et=t,Wn=t&&t.type.__scopeId||null,r}function Ks(t,r=Et,e){if(!r||t._n)return t;const o=(...a)=>{o._d&&Na(-1);const n=be(r),i=t(...a);return be(n),o._d&&Na(1),i};return o._n=!0,o._c=!0,o._d=!0,o}function Ke(t){const{type:r,vnode:e,proxy:o,withProxy:a,props:n,propsOptions:[i],slots:s,attrs:l,emit:m,render:p,renderCache:f,data:h,setupState:A,ctx:L,inheritAttrs:R}=t;let T,x;const O=be(t);try{if(e.shapeFlag&4){const $=a||o;T=Ct(p.call($,$,f,n,A,h,L)),x=l}else{const $=r;T=Ct($.length>1?$(n,{attrs:l,slots:s,emit:m}):$(n,null)),x=r.props?l:qs(l)}}catch($){Fr.length=0,Ee($,t,1),T=U(Yr)}let S=T;if(x&&R!==!1){const $=Object.keys(x),{shapeFlag:K}=S;$.length&&K&7&&(i&&$.some(So)&&(x=Xs(x,i)),S=yr(S,x))}return e.dirs&&(S=yr(S),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&(S.transition=e.transition),T=S,be(O),T}const qs=t=>{let r;for(const e in t)(e==="class"||e==="style"||_e(e))&&((r||(r={}))[e]=t[e]);return r},Xs=(t,r)=>{const e={};for(const o in t)(!So(o)||!(o.slice(9)in r))&&(e[o]=t[o]);return e};function Vs(t,r,e){const{props:o,children:a,component:n}=t,{props:i,children:s,patchFlag:l}=r,m=n.emitsOptions;if(r.dirs||r.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return o?Aa(o,i,m):!!i;if(l&8){const p=r.dynamicProps;for(let f=0;f<p.length;f++){const h=p[f];if(i[h]!==o[h]&&!je(m,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:o===i?!1:o?i?Aa(o,i,m):!0:!!i;return!1}function Aa(t,r,e){const o=Object.keys(r);if(o.length!==Object.keys(t).length)return!0;for(let a=0;a<o.length;a++){const n=o[a];if(r[n]!==t[n]&&!je(e,n))return!0}return!1}function Gs({vnode:t,parent:r},e){for(;r&&r.subTree===t;)(t=r.vnode).el=e,r=r.parent}const Js=t=>t.__isSuspense;function Zs(t,r){r&&r.pendingBranch?M(t)?r.effects.push(...t):r.effects.push(t):Hs(t)}function Qs(t,r){if(tt){let e=tt.provides;const o=tt.parent&&tt.parent.provides;o===e&&(e=tt.provides=Object.create(o)),e[t]=r}}function qe(t,r,e=!1){const o=tt||Et;if(o){const a=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(a&&t in a)return a[t];if(arguments.length>1)return e&&F(r)?r.call(o.proxy):r}}const Oa={};function ne(t,r,e){return Kn(t,r,e)}function Kn(t,r,{immediate:e,deep:o,flush:a,onTrack:n,onTrigger:i}=q){const s=tt;let l,m=!1,p=!1;if(ot(t)?(l=()=>t.value,m=no(t)):vr(t)?(l=()=>t,o=!0):M(t)?(p=!0,m=t.some(x=>vr(x)||no(x)),l=()=>t.map(x=>{if(ot(x))return x.value;if(vr(x))return mr(x);if(F(x))return Kt(x,s,2)})):F(t)?r?l=()=>Kt(t,s,2):l=()=>{if(!(s&&s.isUnmounted))return f&&f(),yt(t,s,3,[h])}:l=wt,r&&o){const x=l;l=()=>mr(x())}let f,h=x=>{f=T.onStop=()=>{Kt(x,s,4)}};if(Wr)return h=wt,r?e&&yt(r,s,3,[l(),p?[]:void 0,h]):l(),wt;let A=p?[]:Oa;const L=()=>{if(!!T.active)if(r){const x=T.run();(o||m||(p?x.some((O,S)=>me(O,A[S])):me(x,A)))&&(f&&f(),yt(r,s,3,[x,A===Oa?void 0:A,h]),A=x)}else T.run()};L.allowRecurse=!!r;let R;a==="sync"?R=L:a==="post"?R=()=>lt(L,s&&s.suspense):R=()=>Ys(L);const T=new Ro(l,R);return r?e?L():A=T.run():a==="post"?lt(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&No(s.scope.effects,T)}}function tl(t,r,e){const o=this.proxy,a=Q(t)?t.includes(".")?qn(o,t):()=>o[t]:t.bind(o,o);let n;F(r)?n=r:(n=r.handler,e=r);const i=tt;kr(this);const s=Kn(a,n.bind(o),e);return i?kr(i):er(),s}function qn(t,r){const e=r.split(".");return()=>{let o=t;for(let a=0;a<e.length&&o;a++)o=o[e[a]];return o}}function mr(t,r){if(!Z(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),ot(t))mr(t.value,r);else if(M(t))for(let e=0;e<t.length;e++)mr(t[e],r);else if(wn(t)||ur(t))t.forEach(e=>{mr(e,r)});else if(_n(t))for(const e in t)mr(t[e],r);return t}function Ie(t){return F(t)?{setup:t,name:t.name}:t}const ie=t=>!!t.type.__asyncLoader,Xn=t=>t.type.__isKeepAlive;function rl(t,r){Vn(t,"a",r)}function el(t,r){Vn(t,"da",r)}function Vn(t,r,e=tt){const o=t.__wdc||(t.__wdc=()=>{let a=e;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Te(r,o,e),e){let a=e.parent;for(;a&&a.parent;)Xn(a.parent.vnode)&&ol(o,r,e,a),a=a.parent}}function ol(t,r,e,o){const a=Te(r,t,o,!0);Gn(()=>{No(o[r],a)},e)}function Te(t,r,e=tt,o=!1){if(e){const a=e[t]||(e[t]=[]),n=r.__weh||(r.__weh=(...i)=>{if(e.isUnmounted)return;zr(),kr(e);const s=yt(r,e,t,i);return er(),Ar(),s});return o?a.unshift(n):a.push(n),n}}const Rt=t=>(r,e=tt)=>(!Wr||t==="sp")&&Te(t,r,e),al=Rt("bm"),nl=Rt("m"),il=Rt("bu"),sl=Rt("u"),ll=Rt("bum"),Gn=Rt("um"),dl=Rt("sp"),cl=Rt("rtg"),ml=Rt("rtc");function pl(t,r=tt){Te("ec",t,r)}function Gt(t,r,e,o){const a=t.dirs,n=r&&r.dirs;for(let i=0;i<a.length;i++){const s=a[i];n&&(s.oldValue=n[i].value);let l=s.dir[o];l&&(zr(),yt(l,e,8,[t.el,s,t,r]),Ar())}}const Jn="components";function Se(t,r){return bl(Jn,t,!0,r)||t}const fl=Symbol();function bl(t,r,e=!0,o=!1){const a=Et||tt;if(a){const n=a.type;if(t===Jn){const s=Kl(n,!1);if(s&&(s===r||s===jt(r)||s===Oe(jt(r))))return n}const i=Ca(a[t]||n[t],r)||Ca(a.appContext[t],r);return!i&&o?n:i}}function Ca(t,r){return t&&(t[r]||t[jt(r)]||t[Oe(jt(r))])}function gl(t,r,e,o){let a;const n=e&&e[o];if(M(t)||Q(t)){a=new Array(t.length);for(let i=0,s=t.length;i<s;i++)a[i]=r(t[i],i,void 0,n&&n[i])}else if(typeof t=="number"){a=new Array(t);for(let i=0;i<t;i++)a[i]=r(i+1,i,void 0,n&&n[i])}else if(Z(t))if(t[Symbol.iterator])a=Array.from(t,(i,s)=>r(i,s,void 0,n&&n[s]));else{const i=Object.keys(t);a=new Array(i.length);for(let s=0,l=i.length;s<l;s++){const m=i[s];a[s]=r(t[m],m,s,n&&n[s])}}else a=[];return e&&(e[o]=a),a}const lo=t=>t?li(t)?Go(t)||t.proxy:lo(t.parent):null,ge=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lo(t.parent),$root:t=>lo(t.root),$emit:t=>t.emit,$options:t=>Qn(t),$forceUpdate:t=>t.f||(t.f=()=>$n(t.update)),$nextTick:t=>t.n||(t.n=Ds.bind(t.proxy)),$watch:t=>tl.bind(t)}),ul={get({_:t},r){const{ctx:e,setupState:o,data:a,props:n,accessCache:i,type:s,appContext:l}=t;let m;if(r[0]!=="$"){const A=i[r];if(A!==void 0)switch(A){case 1:return o[r];case 2:return a[r];case 4:return e[r];case 3:return n[r]}else{if(o!==q&&D(o,r))return i[r]=1,o[r];if(a!==q&&D(a,r))return i[r]=2,a[r];if((m=t.propsOptions[0])&&D(m,r))return i[r]=3,n[r];if(e!==q&&D(e,r))return i[r]=4,e[r];co&&(i[r]=0)}}const p=ge[r];let f,h;if(p)return r==="$attrs"&&pt(t,"get",r),p(t);if((f=s.__cssModules)&&(f=f[r]))return f;if(e!==q&&D(e,r))return i[r]=4,e[r];if(h=l.config.globalProperties,D(h,r))return h[r]},set({_:t},r,e){const{data:o,setupState:a,ctx:n}=t;return a!==q&&D(a,r)?(a[r]=e,!0):o!==q&&D(o,r)?(o[r]=e,!0):D(t.props,r)||r[0]==="$"&&r.slice(1)in t?!1:(n[r]=e,!0)},has({_:{data:t,setupState:r,accessCache:e,ctx:o,appContext:a,propsOptions:n}},i){let s;return!!e[i]||t!==q&&D(t,i)||r!==q&&D(r,i)||(s=n[0])&&D(s,i)||D(o,i)||D(ge,i)||D(a.config.globalProperties,i)},defineProperty(t,r,e){return e.get!=null?t._.accessCache[r]=0:D(e,"value")&&this.set(t,r,e.value,null),Reflect.defineProperty(t,r,e)}};let co=!0;function vl(t){const r=Qn(t),e=t.proxy,o=t.ctx;co=!1,r.beforeCreate&&Ea(r.beforeCreate,t,"bc");const{data:a,computed:n,methods:i,watch:s,provide:l,inject:m,created:p,beforeMount:f,mounted:h,beforeUpdate:A,updated:L,activated:R,deactivated:T,beforeDestroy:x,beforeUnmount:O,destroyed:S,unmounted:$,render:K,renderTracked:rt,renderTriggered:dt,errorCaptured:kt,serverPrefetch:nt,expose:Cr,inheritAttrs:nr,components:Er,directives:Gr,filters:ma}=r;if(m&&hl(m,o,null,t.appContext.config.unwrapInjectedRef),i)for(const J in i){const X=i[J];F(X)&&(o[J]=X.bind(e))}if(a){const J=a.call(e,e);Z(J)&&(t.data=Uo(J))}if(co=!0,n)for(const J in n){const X=n[J],It=F(X)?X.bind(e,e):F(X.get)?X.get.bind(e,e):wt,Be=!F(X)&&F(X.set)?X.set.bind(e):wt,Pr=bt({get:It,set:Be});Object.defineProperty(o,J,{enumerable:!0,configurable:!0,get:()=>Pr.value,set:ir=>Pr.value=ir})}if(s)for(const J in s)Zn(s[J],o,e,J);if(l){const J=F(l)?l.call(e):l;Reflect.ownKeys(J).forEach(X=>{Qs(X,J[X])})}p&&Ea(p,t,"c");function it(J,X){M(X)?X.forEach(It=>J(It.bind(e))):X&&J(X.bind(e))}if(it(al,f),it(nl,h),it(il,A),it(sl,L),it(rl,R),it(el,T),it(pl,kt),it(ml,rt),it(cl,dt),it(ll,O),it(Gn,$),it(dl,nt),M(Cr))if(Cr.length){const J=t.exposed||(t.exposed={});Cr.forEach(X=>{Object.defineProperty(J,X,{get:()=>e[X],set:It=>e[X]=It})})}else t.exposed||(t.exposed={});K&&t.render===wt&&(t.render=K),nr!=null&&(t.inheritAttrs=nr),Er&&(t.components=Er),Gr&&(t.directives=Gr)}function hl(t,r,e=wt,o=!1){M(t)&&(t=mo(t));for(const a in t){const n=t[a];let i;Z(n)?"default"in n?i=qe(n.from||a,n.default,!0):i=qe(n.from||a):i=qe(n),ot(i)&&o?Object.defineProperty(r,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):r[a]=i}}function Ea(t,r,e){yt(M(t)?t.map(o=>o.bind(r.proxy)):t.bind(r.proxy),r,e)}function Zn(t,r,e,o){const a=o.includes(".")?qn(e,o):()=>e[o];if(Q(t)){const n=r[t];F(n)&&ne(a,n)}else if(F(t))ne(a,t.bind(e));else if(Z(t))if(M(t))t.forEach(n=>Zn(n,r,e,o));else{const n=F(t.handler)?t.handler.bind(e):r[t.handler];F(n)&&ne(a,n,t)}}function Qn(t){const r=t.type,{mixins:e,extends:o}=r,{mixins:a,optionsCache:n,config:{optionMergeStrategies:i}}=t.appContext,s=n.get(r);let l;return s?l=s:!a.length&&!e&&!o?l=r:(l={},a.length&&a.forEach(m=>ue(l,m,i,!0)),ue(l,r,i)),n.set(r,l),l}function ue(t,r,e,o=!1){const{mixins:a,extends:n}=r;n&&ue(t,n,e,!0),a&&a.forEach(i=>ue(t,i,e,!0));for(const i in r)if(!(o&&i==="expose")){const s=xl[i]||e&&e[i];t[i]=s?s(t[i],r[i]):r[i]}return t}const xl={data:Pa,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Zt,directives:Zt,watch:yl,provide:Pa,inject:wl};function Pa(t,r){return r?t?function(){return at(F(t)?t.call(this,this):t,F(r)?r.call(this,this):r)}:r:t}function wl(t,r){return Zt(mo(t),mo(r))}function mo(t){if(M(t)){const r={};for(let e=0;e<t.length;e++)r[t[e]]=t[e];return r}return t}function et(t,r){return t?[...new Set([].concat(t,r))]:r}function Zt(t,r){return t?at(at(Object.create(null),t),r):r}function yl(t,r){if(!t)return r;if(!r)return t;const e=at(Object.create(null),t);for(const o in r)e[o]=et(t[o],r[o]);return e}function kl(t,r,e,o=!1){const a={},n={};pe(n,Ne,1),t.propsDefaults=Object.create(null),ti(t,r,a,n);for(const i in t.propsOptions[0])i in a||(a[i]=void 0);e?t.props=o?a:Ts(a):t.type.props?t.props=a:t.props=n,t.attrs=n}function _l(t,r,e,o){const{props:a,attrs:n,vnode:{patchFlag:i}}=t,s=Y(a),[l]=t.propsOptions;let m=!1;if((o||i>0)&&!(i&16)){if(i&8){const p=t.vnode.dynamicProps;for(let f=0;f<p.length;f++){let h=p[f];if(je(t.emitsOptions,h))continue;const A=r[h];if(l)if(D(n,h))A!==n[h]&&(n[h]=A,m=!0);else{const L=jt(h);a[L]=po(l,s,L,A,t,!1)}else A!==n[h]&&(n[h]=A,m=!0)}}}else{ti(t,r,a,n)&&(m=!0);let p;for(const f in s)(!r||!D(r,f)&&((p=_r(f))===f||!D(r,p)))&&(l?e&&(e[f]!==void 0||e[p]!==void 0)&&(a[f]=po(l,s,f,void 0,t,!0)):delete a[f]);if(n!==s)for(const f in n)(!r||!D(r,f)&&!0)&&(delete n[f],m=!0)}m&&Nt(t,"set","$attrs")}function ti(t,r,e,o){const[a,n]=t.propsOptions;let i=!1,s;if(r)for(let l in r){if(ae(l))continue;const m=r[l];let p;a&&D(a,p=jt(l))?!n||!n.includes(p)?e[p]=m:(s||(s={}))[p]=m:je(t.emitsOptions,l)||(!(l in o)||m!==o[l])&&(o[l]=m,i=!0)}if(n){const l=Y(e),m=s||q;for(let p=0;p<n.length;p++){const f=n[p];e[f]=po(a,l,f,m[f],t,!D(m,f))}}return i}function po(t,r,e,o,a,n){const i=t[e];if(i!=null){const s=D(i,"default");if(s&&o===void 0){const l=i.default;if(i.type!==Function&&F(l)){const{propsDefaults:m}=a;e in m?o=m[e]:(kr(a),o=m[e]=l.call(null,r),er())}else o=l}i[0]&&(n&&!s?o=!1:i[1]&&(o===""||o===_r(e))&&(o=!0))}return o}function ri(t,r,e=!1){const o=r.propsCache,a=o.get(t);if(a)return a;const n=t.props,i={},s=[];let l=!1;if(!F(t)){const p=f=>{l=!0;const[h,A]=ri(f,r,!0);at(i,h),A&&s.push(...A)};!e&&r.mixins.length&&r.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!n&&!l)return o.set(t,gr),gr;if(M(n))for(let p=0;p<n.length;p++){const f=jt(n[p]);ja(f)&&(i[f]=q)}else if(n)for(const p in n){const f=jt(p);if(ja(f)){const h=n[p],A=i[f]=M(h)||F(h)?{type:h}:h;if(A){const L=Sa(Boolean,A.type),R=Sa(String,A.type);A[0]=L>-1,A[1]=R<0||L<R,(L>-1||D(A,"default"))&&s.push(f)}}}const m=[i,s];return o.set(t,m),m}function ja(t){return t[0]!=="$"}function Ia(t){const r=t&&t.toString().match(/^\s*function (\w+)/);return r?r[1]:t===null?"null":""}function Ta(t,r){return Ia(t)===Ia(r)}function Sa(t,r){return M(r)?r.findIndex(e=>Ta(e,t)):F(r)&&Ta(r,t)?0:-1}const ei=t=>t[0]==="_"||t==="$stable",qo=t=>M(t)?t.map(Ct):[Ct(t)],zl=(t,r,e)=>{if(r._n)return r;const o=Ks((...a)=>qo(r(...a)),e);return o._c=!1,o},oi=(t,r,e)=>{const o=t._ctx;for(const a in t){if(ei(a))continue;const n=t[a];if(F(n))r[a]=zl(a,n,o);else if(n!=null){const i=qo(n);r[a]=()=>i}}},ai=(t,r)=>{const e=qo(r);t.slots.default=()=>e},Al=(t,r)=>{if(t.vnode.shapeFlag&32){const e=r._;e?(t.slots=Y(r),pe(r,"_",e)):oi(r,t.slots={})}else t.slots={},r&&ai(t,r);pe(t.slots,Ne,1)},Ol=(t,r,e)=>{const{vnode:o,slots:a}=t;let n=!0,i=q;if(o.shapeFlag&32){const s=r._;s?e&&s===1?n=!1:(at(a,r),!e&&s===1&&delete a._):(n=!r.$stable,oi(r,a)),i=r}else r&&(ai(t,r),i={default:1});if(n)for(const s in a)!ei(s)&&!(s in i)&&delete a[s]};function ni(){return{app:null,config:{isNativeTag:Ji,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cl=0;function El(t,r){return function(o,a=null){F(o)||(o=Object.assign({},o)),a!=null&&!Z(a)&&(a=null);const n=ni(),i=new Set;let s=!1;const l=n.app={_uid:Cl++,_component:o,_props:a,_container:null,_context:n,_instance:null,version:Xl,get config(){return n.config},set config(m){},use(m,...p){return i.has(m)||(m&&F(m.install)?(i.add(m),m.install(l,...p)):F(m)&&(i.add(m),m(l,...p))),l},mixin(m){return n.mixins.includes(m)||n.mixins.push(m),l},component(m,p){return p?(n.components[m]=p,l):n.components[m]},directive(m,p){return p?(n.directives[m]=p,l):n.directives[m]},mount(m,p,f){if(!s){const h=U(o,a);return h.appContext=n,p&&r?r(h,m):t(h,m,f),s=!0,l._container=m,m.__vue_app__=l,Go(h.component)||h.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(m,p){return n.provides[m]=p,l}};return l}}function fo(t,r,e,o,a=!1){if(M(t)){t.forEach((h,A)=>fo(h,r&&(M(r)?r[A]:r),e,o,a));return}if(ie(o)&&!a)return;const n=o.shapeFlag&4?Go(o.component)||o.component.proxy:o.el,i=a?null:n,{i:s,r:l}=t,m=r&&r.r,p=s.refs===q?s.refs={}:s.refs,f=s.setupState;if(m!=null&&m!==l&&(Q(m)?(p[m]=null,D(f,m)&&(f[m]=null)):ot(m)&&(m.value=null)),F(l))Kt(l,s,12,[i,p]);else{const h=Q(l),A=ot(l);if(h||A){const L=()=>{if(t.f){const R=h?p[l]:l.value;a?M(R)&&No(R,n):M(R)?R.includes(n)||R.push(n):h?(p[l]=[n],D(f,l)&&(f[l]=p[l])):(l.value=[n],t.k&&(p[t.k]=l.value))}else h?(p[l]=i,D(f,l)&&(f[l]=i)):A&&(l.value=i,t.k&&(p[t.k]=i))};i?(L.id=-1,lt(L,e)):L()}}}const lt=Zs;function Pl(t){return jl(t)}function jl(t,r){const e=as();e.__VUE__=!0;const{insert:o,remove:a,patchProp:n,createElement:i,createText:s,createComment:l,setText:m,setElementText:p,parentNode:f,nextSibling:h,setScopeId:A=wt,cloneNode:L,insertStaticContent:R}=t,T=(d,c,b,u=null,g=null,y=null,_=!1,w=null,k=!!c.dynamicChildren)=>{if(d===c)return;d&&!Ir(d,c)&&(u=Jr(d),Dt(d,g,y,!0),d=null),c.patchFlag===-2&&(k=!1,c.dynamicChildren=null);const{type:v,ref:E,shapeFlag:C}=c;switch(v){case Xo:x(d,c,b,u);break;case Yr:O(d,c,b,u);break;case Xe:d==null&&S(c,b,u,_);break;case Ot:Gr(d,c,b,u,g,y,_,w,k);break;default:C&1?rt(d,c,b,u,g,y,_,w,k):C&6?ma(d,c,b,u,g,y,_,w,k):(C&64||C&128)&&v.process(d,c,b,u,g,y,_,w,k,sr)}E!=null&&g&&fo(E,d&&d.ref,y,c||d,!c)},x=(d,c,b,u)=>{if(d==null)o(c.el=s(c.children),b,u);else{const g=c.el=d.el;c.children!==d.children&&m(g,c.children)}},O=(d,c,b,u)=>{d==null?o(c.el=l(c.children||""),b,u):c.el=d.el},S=(d,c,b,u)=>{[d.el,d.anchor]=R(d.children,c,b,u,d.el,d.anchor)},$=({el:d,anchor:c},b,u)=>{let g;for(;d&&d!==c;)g=h(d),o(d,b,u),d=g;o(c,b,u)},K=({el:d,anchor:c})=>{let b;for(;d&&d!==c;)b=h(d),a(d),d=b;a(c)},rt=(d,c,b,u,g,y,_,w,k)=>{_=_||c.type==="svg",d==null?dt(c,b,u,g,y,_,w,k):Cr(d,c,g,y,_,w,k)},dt=(d,c,b,u,g,y,_,w)=>{let k,v;const{type:E,props:C,shapeFlag:P,transition:N,patchFlag:B,dirs:H}=d;if(d.el&&L!==void 0&&B===-1)k=d.el=L(d.el);else{if(k=d.el=i(d.type,y,C&&C.is,C),P&8?p(k,d.children):P&16&&nt(d.children,k,null,u,g,y&&E!=="foreignObject",_,w),H&&Gt(d,null,u,"created"),C){for(const V in C)V!=="value"&&!ae(V)&&n(k,V,null,C[V],y,d.children,u,g,Tt);"value"in C&&n(k,"value",null,C.value),(v=C.onVnodeBeforeMount)&&zt(v,u,d)}kt(k,d,d.scopeId,_,u)}H&&Gt(d,null,u,"beforeMount");const W=(!g||g&&!g.pendingBranch)&&N&&!N.persisted;W&&N.beforeEnter(k),o(k,c,b),((v=C&&C.onVnodeMounted)||W||H)&&lt(()=>{v&&zt(v,u,d),W&&N.enter(k),H&&Gt(d,null,u,"mounted")},g)},kt=(d,c,b,u,g)=>{if(b&&A(d,b),u)for(let y=0;y<u.length;y++)A(d,u[y]);if(g){let y=g.subTree;if(c===y){const _=g.vnode;kt(d,_,_.scopeId,_.slotScopeIds,g.parent)}}},nt=(d,c,b,u,g,y,_,w,k=0)=>{for(let v=k;v<d.length;v++){const E=d[v]=w?Ht(d[v]):Ct(d[v]);T(null,E,c,b,u,g,y,_,w)}},Cr=(d,c,b,u,g,y,_)=>{const w=c.el=d.el;let{patchFlag:k,dynamicChildren:v,dirs:E}=c;k|=d.patchFlag&16;const C=d.props||q,P=c.props||q;let N;b&&Jt(b,!1),(N=P.onVnodeBeforeUpdate)&&zt(N,b,c,d),E&&Gt(c,d,b,"beforeUpdate"),b&&Jt(b,!0);const B=g&&c.type!=="foreignObject";if(v?nr(d.dynamicChildren,v,w,b,u,B,y):_||It(d,c,w,null,b,u,B,y,!1),k>0){if(k&16)Er(w,c,C,P,b,u,g);else if(k&2&&C.class!==P.class&&n(w,"class",null,P.class,g),k&4&&n(w,"style",C.style,P.style,g),k&8){const H=c.dynamicProps;for(let W=0;W<H.length;W++){const V=H[W],gt=C[V],lr=P[V];(lr!==gt||V==="value")&&n(w,V,gt,lr,g,d.children,b,u,Tt)}}k&1&&d.children!==c.children&&p(w,c.children)}else!_&&v==null&&Er(w,c,C,P,b,u,g);((N=P.onVnodeUpdated)||E)&&lt(()=>{N&&zt(N,b,c,d),E&&Gt(c,d,b,"updated")},u)},nr=(d,c,b,u,g,y,_)=>{for(let w=0;w<c.length;w++){const k=d[w],v=c[w],E=k.el&&(k.type===Ot||!Ir(k,v)||k.shapeFlag&70)?f(k.el):b;T(k,v,E,null,u,g,y,_,!0)}},Er=(d,c,b,u,g,y,_)=>{if(b!==u){for(const w in u){if(ae(w))continue;const k=u[w],v=b[w];k!==v&&w!=="value"&&n(d,w,v,k,_,c.children,g,y,Tt)}if(b!==q)for(const w in b)!ae(w)&&!(w in u)&&n(d,w,b[w],null,_,c.children,g,y,Tt);"value"in u&&n(d,"value",b.value,u.value)}},Gr=(d,c,b,u,g,y,_,w,k)=>{const v=c.el=d?d.el:s(""),E=c.anchor=d?d.anchor:s("");let{patchFlag:C,dynamicChildren:P,slotScopeIds:N}=c;N&&(w=w?w.concat(N):N),d==null?(o(v,b,u),o(E,b,u),nt(c.children,b,E,g,y,_,w,k)):C>0&&C&64&&P&&d.dynamicChildren?(nr(d.dynamicChildren,P,b,g,y,_,w),(c.key!=null||g&&c===g.subTree)&&ii(d,c,!0)):It(d,c,b,E,g,y,_,w,k)},ma=(d,c,b,u,g,y,_,w,k)=>{c.slotScopeIds=w,d==null?c.shapeFlag&512?g.ctx.activate(c,b,u,_,k):De(c,b,u,g,y,_,k):it(d,c,k)},De=(d,c,b,u,g,y,_)=>{const w=d.component=Bl(d,u,g);if(Xn(d)&&(w.ctx.renderer=sr),Ul(w),w.asyncDep){if(g&&g.registerDep(w,J),!d.el){const k=w.subTree=U(Yr);O(null,k,c,b)}return}J(w,d,c,b,g,y,_)},it=(d,c,b)=>{const u=c.component=d.component;if(Vs(d,c,b))if(u.asyncDep&&!u.asyncResolved){X(u,c,b);return}else u.next=c,Us(u.update),u.update();else c.el=d.el,u.vnode=c},J=(d,c,b,u,g,y,_)=>{const w=()=>{if(d.isMounted){let{next:E,bu:C,u:P,parent:N,vnode:B}=d,H=E,W;Jt(d,!1),E?(E.el=B.el,X(d,E,_)):E=B,C&&We(C),(W=E.props&&E.props.onVnodeBeforeUpdate)&&zt(W,N,E,B),Jt(d,!0);const V=Ke(d),gt=d.subTree;d.subTree=V,T(gt,V,f(gt.el),Jr(gt),d,g,y),E.el=V.el,H===null&&Gs(d,V.el),P&&lt(P,g),(W=E.props&&E.props.onVnodeUpdated)&&lt(()=>zt(W,N,E,B),g)}else{let E;const{el:C,props:P}=c,{bm:N,m:B,parent:H}=d,W=ie(c);if(Jt(d,!1),N&&We(N),!W&&(E=P&&P.onVnodeBeforeMount)&&zt(E,H,c),Jt(d,!0),C&&Ye){const V=()=>{d.subTree=Ke(d),Ye(C,d.subTree,d,g,null)};W?c.type.__asyncLoader().then(()=>!d.isUnmounted&&V()):V()}else{const V=d.subTree=Ke(d);T(null,V,b,u,d,g,y),c.el=V.el}if(B&&lt(B,g),!W&&(E=P&&P.onVnodeMounted)){const V=c;lt(()=>zt(E,H,V),g)}(c.shapeFlag&256||H&&ie(H.vnode)&&H.vnode.shapeFlag&256)&&d.a&&lt(d.a,g),d.isMounted=!0,c=b=u=null}},k=d.effect=new Ro(w,()=>$n(v),d.scope),v=d.update=()=>k.run();v.id=d.uid,Jt(d,!0),v()},X=(d,c,b)=>{c.component=d;const u=d.vnode.props;d.vnode=c,d.next=null,_l(d,c.props,u,b),Ol(d,c.children,b),zr(),Pe(void 0,d.update),Ar()},It=(d,c,b,u,g,y,_,w,k=!1)=>{const v=d&&d.children,E=d?d.shapeFlag:0,C=c.children,{patchFlag:P,shapeFlag:N}=c;if(P>0){if(P&128){Pr(v,C,b,u,g,y,_,w,k);return}else if(P&256){Be(v,C,b,u,g,y,_,w,k);return}}N&8?(E&16&&Tt(v,g,y),C!==v&&p(b,C)):E&16?N&16?Pr(v,C,b,u,g,y,_,w,k):Tt(v,g,y,!0):(E&8&&p(b,""),N&16&&nt(C,b,u,g,y,_,w,k))},Be=(d,c,b,u,g,y,_,w,k)=>{d=d||gr,c=c||gr;const v=d.length,E=c.length,C=Math.min(v,E);let P;for(P=0;P<C;P++){const N=c[P]=k?Ht(c[P]):Ct(c[P]);T(d[P],N,b,null,g,y,_,w,k)}v>E?Tt(d,g,y,!0,!1,C):nt(c,b,u,g,y,_,w,k,C)},Pr=(d,c,b,u,g,y,_,w,k)=>{let v=0;const E=c.length;let C=d.length-1,P=E-1;for(;v<=C&&v<=P;){const N=d[v],B=c[v]=k?Ht(c[v]):Ct(c[v]);if(Ir(N,B))T(N,B,b,null,g,y,_,w,k);else break;v++}for(;v<=C&&v<=P;){const N=d[C],B=c[P]=k?Ht(c[P]):Ct(c[P]);if(Ir(N,B))T(N,B,b,null,g,y,_,w,k);else break;C--,P--}if(v>C){if(v<=P){const N=P+1,B=N<E?c[N].el:u;for(;v<=P;)T(null,c[v]=k?Ht(c[v]):Ct(c[v]),b,B,g,y,_,w,k),v++}}else if(v>P)for(;v<=C;)Dt(d[v],g,y,!0),v++;else{const N=v,B=v,H=new Map;for(v=B;v<=P;v++){const ct=c[v]=k?Ht(c[v]):Ct(c[v]);ct.key!=null&&H.set(ct.key,v)}let W,V=0;const gt=P-B+1;let lr=!1,ba=0;const jr=new Array(gt);for(v=0;v<gt;v++)jr[v]=0;for(v=N;v<=C;v++){const ct=d[v];if(V>=gt){Dt(ct,g,y,!0);continue}let _t;if(ct.key!=null)_t=H.get(ct.key);else for(W=B;W<=P;W++)if(jr[W-B]===0&&Ir(ct,c[W])){_t=W;break}_t===void 0?Dt(ct,g,y,!0):(jr[_t-B]=v+1,_t>=ba?ba=_t:lr=!0,T(ct,c[_t],b,null,g,y,_,w,k),V++)}const ga=lr?Il(jr):gr;for(W=ga.length-1,v=gt-1;v>=0;v--){const ct=B+v,_t=c[ct],ua=ct+1<E?c[ct+1].el:u;jr[v]===0?T(null,_t,b,ua,g,y,_,w,k):lr&&(W<0||v!==ga[W]?ir(_t,b,ua,2):W--)}}},ir=(d,c,b,u,g=null)=>{const{el:y,type:_,transition:w,children:k,shapeFlag:v}=d;if(v&6){ir(d.component.subTree,c,b,u);return}if(v&128){d.suspense.move(c,b,u);return}if(v&64){_.move(d,c,b,sr);return}if(_===Ot){o(y,c,b);for(let C=0;C<k.length;C++)ir(k[C],c,b,u);o(d.anchor,c,b);return}if(_===Xe){$(d,c,b);return}if(u!==2&&v&1&&w)if(u===0)w.beforeEnter(y),o(y,c,b),lt(()=>w.enter(y),g);else{const{leave:C,delayLeave:P,afterLeave:N}=w,B=()=>o(y,c,b),H=()=>{C(y,()=>{B(),N&&N()})};P?P(y,B,H):H()}else o(y,c,b)},Dt=(d,c,b,u=!1,g=!1)=>{const{type:y,props:_,ref:w,children:k,dynamicChildren:v,shapeFlag:E,patchFlag:C,dirs:P}=d;if(w!=null&&fo(w,null,b,d,!0),E&256){c.ctx.deactivate(d);return}const N=E&1&&P,B=!ie(d);let H;if(B&&(H=_&&_.onVnodeBeforeUnmount)&&zt(H,c,d),E&6)Hi(d.component,b,u);else{if(E&128){d.suspense.unmount(b,u);return}N&&Gt(d,null,c,"beforeUnmount"),E&64?d.type.remove(d,c,b,g,sr,u):v&&(y!==Ot||C>0&&C&64)?Tt(v,c,b,!1,!0):(y===Ot&&C&384||!g&&E&16)&&Tt(k,c,b),u&&pa(d)}(B&&(H=_&&_.onVnodeUnmounted)||N)&&lt(()=>{H&&zt(H,c,d),N&&Gt(d,null,c,"unmounted")},b)},pa=d=>{const{type:c,el:b,anchor:u,transition:g}=d;if(c===Ot){Yi(b,u);return}if(c===Xe){K(d);return}const y=()=>{a(b),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(d.shapeFlag&1&&g&&!g.persisted){const{leave:_,delayLeave:w}=g,k=()=>_(b,y);w?w(d.el,y,k):k()}else y()},Yi=(d,c)=>{let b;for(;d!==c;)b=h(d),a(d),d=b;a(c)},Hi=(d,c,b)=>{const{bum:u,scope:g,update:y,subTree:_,um:w}=d;u&&We(u),g.stop(),y&&(y.active=!1,Dt(_,d,c,b)),w&&lt(w,c),lt(()=>{d.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Tt=(d,c,b,u=!1,g=!1,y=0)=>{for(let _=y;_<d.length;_++)Dt(d[_],c,b,u,g)},Jr=d=>d.shapeFlag&6?Jr(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),fa=(d,c,b)=>{d==null?c._vnode&&Dt(c._vnode,null,null,!0):T(c._vnode||null,d,c,null,null,null,b),Un(),c._vnode=d},sr={p:T,um:Dt,m:ir,r:pa,mt:De,mc:nt,pc:It,pbc:nr,n:Jr,o:t};let Ue,Ye;return r&&([Ue,Ye]=r(sr)),{render:fa,hydrate:Ue,createApp:El(fa,Ue)}}function Jt({effect:t,update:r},e){t.allowRecurse=r.allowRecurse=e}function ii(t,r,e=!1){const o=t.children,a=r.children;if(M(o)&&M(a))for(let n=0;n<o.length;n++){const i=o[n];let s=a[n];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[n]=Ht(a[n]),s.el=i.el),e||ii(i,s))}}function Il(t){const r=t.slice(),e=[0];let o,a,n,i,s;const l=t.length;for(o=0;o<l;o++){const m=t[o];if(m!==0){if(a=e[e.length-1],t[a]<m){r[o]=a,e.push(o);continue}for(n=0,i=e.length-1;n<i;)s=n+i>>1,t[e[s]]<m?n=s+1:i=s;m<t[e[n]]&&(n>0&&(r[o]=e[n-1]),e[n]=o)}}for(n=e.length,i=e[n-1];n-- >0;)e[n]=i,i=r[i];return e}const Tl=t=>t.__isTeleport,Ot=Symbol(void 0),Xo=Symbol(void 0),Yr=Symbol(void 0),Xe=Symbol(void 0),Fr=[];let ht=null;function xr(t=!1){Fr.push(ht=t?null:[])}function Sl(){Fr.pop(),ht=Fr[Fr.length-1]||null}let Hr=1;function Na(t){Hr+=t}function Nl(t){return t.dynamicChildren=Hr>0?ht||gr:null,Sl(),Hr>0&&ht&&ht.push(t),t}function wr(t,r,e,o,a,n){return Nl(I(t,r,e,o,a,n,!0))}function bo(t){return t?t.__v_isVNode===!0:!1}function Ir(t,r){return t.type===r.type&&t.key===r.key}const Ne="__vInternal",si=({key:t})=>t!=null?t:null,se=({ref:t,ref_key:r,ref_for:e})=>t!=null?Q(t)||ot(t)||F(t)?{i:Et,r:t,k:r,f:!!e}:t:null;function I(t,r=null,e=null,o=0,a=null,n=t===Ot?0:1,i=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:r,key:r&&si(r),ref:r&&se(r),scopeId:Wn,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:o,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Vo(l,e),n&128&&t.normalize(l)):e&&(l.shapeFlag|=Q(e)?8:16),Hr>0&&!i&&ht&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&ht.push(l),l}const U=Ml;function Ml(t,r=null,e=null,o=0,a=null,n=!1){if((!t||t===fl)&&(t=Yr),bo(t)){const s=yr(t,r,!0);return e&&Vo(s,e),Hr>0&&!n&&ht&&(s.shapeFlag&6?ht[ht.indexOf(t)]=s:ht.push(s)),s.patchFlag|=-2,s}if(ql(t)&&(t=t.__vccOpts),r){r=Ll(r);let{class:s,style:l}=r;s&&!Q(s)&&(r.class=To(s)),Z(l)&&(Mn(l)&&!M(l)&&(l=at({},l)),r.style=Io(l))}const i=Q(t)?1:Js(t)?128:Tl(t)?64:Z(t)?4:F(t)?2:0;return I(t,r,e,o,a,i,n,!0)}function Ll(t){return t?Mn(t)||Ne in t?at({},t):t:null}function yr(t,r,e=!1){const{props:o,ref:a,patchFlag:n,children:i}=t,s=r?Rl(o||{},r):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&si(s),ref:r&&r.ref?e&&a?M(a)?a.concat(se(r)):[a,se(r)]:se(r):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:r&&t.type!==Ot?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yr(t.ssContent),ssFallback:t.ssFallback&&yr(t.ssFallback),el:t.el,anchor:t.anchor}}function Fl(t=" ",r=0){return U(Xo,null,t,r)}function Ct(t){return t==null||typeof t=="boolean"?U(Yr):M(t)?U(Ot,null,t.slice()):typeof t=="object"?Ht(t):U(Xo,null,String(t))}function Ht(t){return t.el===null||t.memo?t:yr(t)}function Vo(t,r){let e=0;const{shapeFlag:o}=t;if(r==null)r=null;else if(M(r))e=16;else if(typeof r=="object")if(o&65){const a=r.default;a&&(a._c&&(a._d=!1),Vo(t,a()),a._c&&(a._d=!0));return}else{e=32;const a=r._;!a&&!(Ne in r)?r._ctx=Et:a===3&&Et&&(Et.slots._===1?r._=1:(r._=2,t.patchFlag|=1024))}else F(r)?(r={default:r,_ctx:Et},e=32):(r=String(r),o&64?(e=16,r=[Fl(r)]):e=8);t.children=r,t.shapeFlag|=e}function Rl(...t){const r={};for(let e=0;e<t.length;e++){const o=t[e];for(const a in o)if(a==="class")r.class!==o.class&&(r.class=To([r.class,o.class]));else if(a==="style")r.style=Io([r.style,o.style]);else if(_e(a)){const n=r[a],i=o[a];i&&n!==i&&!(M(n)&&n.includes(i))&&(r[a]=n?[].concat(n,i):i)}else a!==""&&(r[a]=o[a])}return r}function zt(t,r,e,o=null){yt(t,r,7,[e,o])}const $l=ni();let Dl=0;function Bl(t,r,e){const o=t.type,a=(r?r.appContext:t.appContext)||$l,n={uid:Dl++,vnode:t,type:o,parent:r,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ns(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:r?r.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ri(o,a),emitsOptions:Hn(o,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:o.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=r?r.root:n,n.emit=Ws.bind(null,n),t.ce&&t.ce(n),n}let tt=null;const kr=t=>{tt=t,t.scope.on()},er=()=>{tt&&tt.scope.off(),tt=null};function li(t){return t.vnode.shapeFlag&4}let Wr=!1;function Ul(t,r=!1){Wr=r;const{props:e,children:o}=t.vnode,a=li(t);kl(t,e,a,r),Al(t,o);const n=a?Yl(t,r):void 0;return Wr=!1,n}function Yl(t,r){const e=t.type;t.accessCache=Object.create(null),t.proxy=Ln(new Proxy(t.ctx,ul));const{setup:o}=e;if(o){const a=t.setupContext=o.length>1?Wl(t):null;kr(t),zr();const n=Kt(o,t,0,[t.props,a]);if(Ar(),er(),yn(n)){if(n.then(er,er),r)return n.then(i=>{Ma(t,i,r)}).catch(i=>{Ee(i,t,0)});t.asyncDep=n}else Ma(t,n,r)}else di(t,r)}function Ma(t,r,e){F(r)?t.type.__ssrInlineRender?t.ssrRender=r:t.render=r:Z(r)&&(t.setupState=Fn(r)),di(t,e)}let La;function di(t,r,e){const o=t.type;if(!t.render){if(!r&&La&&!o.render){const a=o.template;if(a){const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:s,compilerOptions:l}=o,m=at(at({isCustomElement:n,delimiters:s},i),l);o.render=La(a,m)}}t.render=o.render||wt}kr(t),zr(),vl(t),Ar(),er()}function Hl(t){return new Proxy(t.attrs,{get(r,e){return pt(t,"get","$attrs"),r[e]}})}function Wl(t){const r=o=>{t.exposed=o||{}};let e;return{get attrs(){return e||(e=Hl(t))},slots:t.slots,emit:t.emit,expose:r}}function Go(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fn(Ln(t.exposed)),{get(r,e){if(e in r)return r[e];if(e in ge)return ge[e](t)}}))}function Kl(t,r=!0){return F(t)?t.displayName||t.name:t.name||r&&t.__name}function ql(t){return F(t)&&"__vccOpts"in t}const bt=(t,r)=>Rs(t,r,Wr);function ci(t,r,e){const o=arguments.length;return o===2?Z(r)&&!M(r)?bo(r)?U(t,null,[r]):U(t,r):U(t,null,r):(o>3?e=Array.prototype.slice.call(arguments,2):o===3&&bo(e)&&(e=[e]),U(t,r,e))}const Xl="3.2.37",Vl="http://www.w3.org/2000/svg",Qt=typeof document<"u"?document:null,Fa=Qt&&Qt.createElement("template"),Gl={insert:(t,r,e)=>{r.insertBefore(t,e||null)},remove:t=>{const r=t.parentNode;r&&r.removeChild(t)},createElement:(t,r,e,o)=>{const a=r?Qt.createElementNS(Vl,t):Qt.createElement(t,e?{is:e}:void 0);return t==="select"&&o&&o.multiple!=null&&a.setAttribute("multiple",o.multiple),a},createText:t=>Qt.createTextNode(t),createComment:t=>Qt.createComment(t),setText:(t,r)=>{t.nodeValue=r},setElementText:(t,r)=>{t.textContent=r},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qt.querySelector(t),setScopeId(t,r){t.setAttribute(r,"")},cloneNode(t){const r=t.cloneNode(!0);return"_value"in t&&(r._value=t._value),r},insertStaticContent(t,r,e,o,a,n){const i=e?e.previousSibling:r.lastChild;if(a&&(a===n||a.nextSibling))for(;r.insertBefore(a.cloneNode(!0),e),!(a===n||!(a=a.nextSibling)););else{Fa.innerHTML=o?`<svg>${t}</svg>`:t;const s=Fa.content;if(o){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}r.insertBefore(s,e)}return[i?i.nextSibling:r.firstChild,e?e.previousSibling:r.lastChild]}};function Jl(t,r,e){const o=t._vtc;o&&(r=(r?[r,...o]:[...o]).join(" ")),r==null?t.removeAttribute("class"):e?t.setAttribute("class",r):t.className=r}function Zl(t,r,e){const o=t.style,a=Q(e);if(e&&!a){for(const n in e)go(o,n,e[n]);if(r&&!Q(r))for(const n in r)e[n]==null&&go(o,n,"")}else{const n=o.display;a?r!==e&&(o.cssText=e):r&&t.removeAttribute("style"),"_vod"in t&&(o.display=n)}}const Ra=/\s*!important$/;function go(t,r,e){if(M(e))e.forEach(o=>go(t,r,o));else if(e==null&&(e=""),r.startsWith("--"))t.setProperty(r,e);else{const o=Ql(t,r);Ra.test(e)?t.setProperty(_r(o),e.replace(Ra,""),"important"):t[o]=e}}const $a=["Webkit","Moz","ms"],Ve={};function Ql(t,r){const e=Ve[r];if(e)return e;let o=jt(r);if(o!=="filter"&&o in t)return Ve[r]=o;o=Oe(o);for(let a=0;a<$a.length;a++){const n=$a[a]+o;if(n in t)return Ve[r]=n}return r}const Da="http://www.w3.org/1999/xlink";function td(t,r,e,o,a){if(o&&r.startsWith("xlink:"))e==null?t.removeAttributeNS(Da,r.slice(6,r.length)):t.setAttributeNS(Da,r,e);else{const n=qi(r);e==null||n&&!hn(e)?t.removeAttribute(r):t.setAttribute(r,n?"":e)}}function rd(t,r,e,o,a,n,i){if(r==="innerHTML"||r==="textContent"){o&&i(o,a,n),t[r]=e==null?"":e;return}if(r==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=e;const l=e==null?"":e;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),e==null&&t.removeAttribute(r);return}let s=!1;if(e===""||e==null){const l=typeof t[r];l==="boolean"?e=hn(e):e==null&&l==="string"?(e="",s=!0):l==="number"&&(e=0,s=!0)}try{t[r]=e}catch{}s&&t.removeAttribute(r)}const[mi,ed]=(()=>{let t=Date.now,r=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);r=!!(e&&Number(e[1])<=53)}return[t,r]})();let uo=0;const od=Promise.resolve(),ad=()=>{uo=0},nd=()=>uo||(od.then(ad),uo=mi());function id(t,r,e,o){t.addEventListener(r,e,o)}function sd(t,r,e,o){t.removeEventListener(r,e,o)}function ld(t,r,e,o,a=null){const n=t._vei||(t._vei={}),i=n[r];if(o&&i)i.value=o;else{const[s,l]=dd(r);if(o){const m=n[r]=cd(o,a);id(t,s,m,l)}else i&&(sd(t,s,i,l),n[r]=void 0)}}const Ba=/(?:Once|Passive|Capture)$/;function dd(t){let r;if(Ba.test(t)){r={};let e;for(;e=t.match(Ba);)t=t.slice(0,t.length-e[0].length),r[e[0].toLowerCase()]=!0}return[_r(t.slice(2)),r]}function cd(t,r){const e=o=>{const a=o.timeStamp||mi();(ed||a>=e.attached-1)&&yt(md(o,e.value),r,5,[o])};return e.value=t,e.attached=nd(),e}function md(t,r){if(M(r)){const e=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{e.call(t),t._stopped=!0},r.map(o=>a=>!a._stopped&&o&&o(a))}else return r}const Ua=/^on[a-z]/,pd=(t,r,e,o,a=!1,n,i,s,l)=>{r==="class"?Jl(t,o,a):r==="style"?Zl(t,e,o):_e(r)?So(r)||ld(t,r,e,o,i):(r[0]==="."?(r=r.slice(1),!0):r[0]==="^"?(r=r.slice(1),!1):fd(t,r,o,a))?rd(t,r,o,n,i,s,l):(r==="true-value"?t._trueValue=o:r==="false-value"&&(t._falseValue=o),td(t,r,o,a))};function fd(t,r,e,o){return o?!!(r==="innerHTML"||r==="textContent"||r in t&&Ua.test(r)&&F(e)):r==="spellcheck"||r==="draggable"||r==="translate"||r==="form"||r==="list"&&t.tagName==="INPUT"||r==="type"&&t.tagName==="TEXTAREA"||Ua.test(r)&&Q(e)?!1:r in t}const bd=at({patchProp:pd},Gl);let Ya;function gd(){return Ya||(Ya=Pl(bd))}const ud=(...t)=>{const r=gd().createApp(...t),{mount:e}=r;return r.mount=o=>{const a=vd(o);if(!a)return;const n=r._component;!F(n)&&!n.render&&!n.template&&(n.template=a.innerHTML),a.innerHTML="";const i=e(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),i},r};function vd(t){return Q(t)?document.querySelector(t):t}const hd={props:{title:String,repCount:Number,set:Number}},qr=(t,r)=>{const e=t.__vccOpts||t;for(const[o,a]of r)e[o]=a;return e},xd={class:"row my-3"},wd={class:"col-9"},yd={class:"card h-100"},kd={class:"card-header"},_d={class:"card-body"},zd={class:"col"},Ad={class:""},Od={class:"col"},Cd={class:""},Ed={class:"col d-flex justify-content-center align-items-center"},Pd={class:"btn-group-vertical"},jd={class:"btn btn-lg rounded btn-outline-primary my-2"},Id={class:"btn btn-lg rounded btn-outline-danger my-2"},Td={class:"btn btn-lg rounded btn-outline-primary my-2"};function Sd(t,r,e,o,a,n){const i=Se("font-awesome-icon");return xr(),wr("div",xd,[I("div",wd,[I("div",yd,[I("div",kd,[I("h2",null,br(e.title),1)]),I("div",_d,[(xr(),wr(Ot,null,gl(5,s=>I("div",{class:"row",key:t.index},[I("div",zd,[I("span",Ad,"Rep: "+br(s),1)]),I("div",Od,[I("span",Cd,"Set: "+br(e.set),1)])])),64))])])]),I("div",Ed,[I("div",Pd,[I("a",jd,[U(i,{icon:"fa-solid fa-arrow-up"})]),I("a",Id,[U(i,{icon:"fa-solid fa-circle-xmark"})]),I("a",Td,[U(i,{icon:"fa-solid fa-arrow-down"})])])])])}const Ge=qr(hd,[["render",Sd]]),Nd={},Md={class:"row my-3"},Ld=I("div",{class:"col-9"},[I("div",{class:"card bg-info text-white h-100"},[I("div",{class:"card-body d-flex align-items-center"},[I("h2",null,"Rest")])])],-1),Fd={class:"col d-flex justify-content-center align-items-center"},Rd={class:"btn-group-vertical"},$d={class:"btn btn-lg rounded btn-outline-primary my-2"},Dd={class:"btn btn-lg rounded btn-outline-danger my-2"},Bd={class:"btn btn-lg rounded btn-outline-primary my-2"};function Ud(t,r,e,o,a,n){const i=Se("font-awesome-icon");return xr(),wr("div",Md,[Ld,I("div",Fd,[I("div",Rd,[I("a",$d,[U(i,{icon:"fa-solid fa-arrow-up"})]),I("a",Dd,[U(i,{icon:"fa-solid fa-circle-xmark"})]),I("a",Bd,[U(i,{icon:"fa-solid fa-arrow-down"})])])])])}const Ha=qr(Nd,[["render",Ud]]),Yd={props:{title:String,rep:Number,set:Number}},Hd={class:"row my-3"},Wd={class:"col-9"},Kd={class:"card h-100"},qd={class:"card-header"},Xd={class:"card-body d-flex flex-column align-items-center"},Vd={class:"row w-100 mb-3"},Gd={class:"col"},Jd={class:""},Zd={class:"col"},Qd={class:""},tc=I("div",{class:"row w-100"},[I("div",{class:"col-12"},[I("div",{class:"progress"},[I("div",{class:"progress-bar progress-bar-striped bg-success",role:"progressbar","aria-label":"Success striped example",style:{width:"25%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})])])],-1),rc={class:"col d-flex justify-content-center align-items-center"},ec={class:"btn-group-vertical"},oc={class:"btn btn-lg rounded btn-outline-primary my-2"},ac={class:"btn btn-lg rounded btn-outline-danger my-2"},nc={class:"btn btn-lg rounded btn-outline-primary my-2"};function ic(t,r,e,o,a,n){const i=Se("font-awesome-icon");return xr(),wr("div",Hd,[I("div",Wd,[I("div",Kd,[I("div",qd,[I("h2",null,br(e.title),1)]),I("div",Xd,[I("div",Vd,[I("div",Gd,[I("span",Jd,"Rep: "+br(e.rep),1)]),I("div",Zd,[I("span",Qd,"Set: "+br(e.set),1)])]),tc])])]),I("div",rc,[I("div",ec,[I("a",oc,[U(i,{icon:"fa-solid fa-arrow-up"})]),I("a",ac,[U(i,{icon:"fa-solid fa-circle-xmark"})]),I("a",nc,[U(i,{icon:"fa-solid fa-arrow-down"})])])])])}const sc=qr(Yd,[["render",ic]]),lc={props:{}},dc={class:"row bg-light border bt-1"},cc={class:"col-12 d-flex justify-content-center align-items-center"},mc={class:"btn btn-lg rounded btn-outline-primary my-2"};function pc(t,r,e,o,a,n){const i=Se("font-awesome-icon");return xr(),wr("div",dc,[I("div",cc,[I("a",mc,[U(i,{icon:"fa-solid fa-pause"})])])])}const fc=qr(lc,[["render",pc]]),bc={class:"container-fluid"},gc={class:"set-container"},uc=Ie({__name:"App",setup(t){return(r,e)=>(xr(),wr("div",bc,[I("div",gc,[U(sc,{title:"Exercise 1",rep:"1",set:"1"}),U(Ge,{title:"Exercise 1","rep-count":"3",set:"1"}),U(Ha),U(Ge,{title:"Exercise 2","rep-count":"5",set:"2"}),U(Ha),U(Ge,{title:"Exercise 3","rep-count":"10",set:"3"})]),U(fc,{class:"controls fixed-bottom"})]))}});const vc=qr(uc,[["__scopeId","data-v-a1d78057"]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Wa(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,o)}return e}function z(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?Wa(Object(e),!0).forEach(function(o){wc(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Wa(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function ve(t){return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ve(t)}function hc(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function Ka(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function xc(t,r,e){return r&&Ka(t.prototype,r),e&&Ka(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function wc(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function Jo(t,r){return kc(t)||zc(t,r)||pi(t,r)||Oc()}function Me(t){return yc(t)||_c(t)||pi(t)||Ac()}function yc(t){if(Array.isArray(t))return vo(t)}function kc(t){if(Array.isArray(t))return t}function _c(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zc(t,r){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var o=[],a=!0,n=!1,i,s;try{for(e=e.call(t);!(a=(i=e.next()).done)&&(o.push(i.value),!(r&&o.length===r));a=!0);}catch(l){n=!0,s=l}finally{try{!a&&e.return!=null&&e.return()}finally{if(n)throw s}}return o}}function pi(t,r){if(!!t){if(typeof t=="string")return vo(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return vo(t,r)}}function vo(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}function Ac(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qa=function(){},Zo={},fi={},bi=null,gi={mark:qa,measure:qa};try{typeof window<"u"&&(Zo=window),typeof document<"u"&&(fi=document),typeof MutationObserver<"u"&&(bi=MutationObserver),typeof performance<"u"&&(gi=performance)}catch{}var Cc=Zo.navigator||{},Xa=Cc.userAgent,Va=Xa===void 0?"":Xa,Xt=Zo,G=fi,Ga=bi,oe=gi;Xt.document;var $t=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",ui=~Va.indexOf("MSIE")||~Va.indexOf("Trident/"),Mt="___FONT_AWESOME___",ho=16,vi="fa",hi="svg-inline--fa",or="data-fa-i2svg",xo="data-fa-pseudo-element",Ec="data-fa-pseudo-element-pending",Qo="data-prefix",ta="data-icon",Ja="fontawesome-i2svg",Pc="async",jc=["HTML","HEAD","STYLE","SCRIPT"],xi=function(){try{return!0}catch{return!1}}(),ra={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},he={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},wi={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Ic={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Tc=/fa[srltdbk\-\ ]/,yi="fa-layers-text",Sc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Nc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},ki=[1,2,3,4,5,6,7,8,9,10],Mc=ki.concat([11,12,13,14,15,16,17,18,19,20]),Lc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fc=[].concat(Me(Object.keys(he)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tr.GROUP,tr.SWAP_OPACITY,tr.PRIMARY,tr.SECONDARY]).concat(ki.map(function(t){return"".concat(t,"x")})).concat(Mc.map(function(t){return"w-".concat(t)})),_i=Xt.FontAwesomeConfig||{};function Rc(t){var r=G.querySelector("script["+t+"]");if(r)return r.getAttribute(t)}function $c(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(G&&typeof G.querySelector=="function"){var Dc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dc.forEach(function(t){var r=Jo(t,2),e=r[0],o=r[1],a=$c(Rc(e));a!=null&&(_i[o]=a)})}var Bc={familyPrefix:vi,styleDefault:"solid",replacementClass:hi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Rr=z(z({},Bc),_i);Rr.autoReplaceSvg||(Rr.observeMutations=!1);var j={};Object.keys(Rr).forEach(function(t){Object.defineProperty(j,t,{enumerable:!0,set:function(e){Rr[t]=e,le.forEach(function(o){return o(j)})},get:function(){return Rr[t]}})});Xt.FontAwesomeConfig=j;var le=[];function Uc(t){return le.push(t),function(){le.splice(le.indexOf(t),1)}}var Ut=ho,Pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yc(t){if(!(!t||!$t)){var r=G.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=t;for(var e=G.head.childNodes,o=null,a=e.length-1;a>-1;a--){var n=e[a],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(o=n)}return G.head.insertBefore(r,o),t}}var Hc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kr(){for(var t=12,r="";t-- >0;)r+=Hc[Math.random()*62|0];return r}function Or(t){for(var r=[],e=(t||[]).length>>>0;e--;)r[e]=t[e];return r}function ea(t){return t.classList?Or(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(r){return r})}function zi(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wc(t){return Object.keys(t||{}).reduce(function(r,e){return r+"".concat(e,'="').concat(zi(t[e]),'" ')},"").trim()}function Le(t){return Object.keys(t||{}).reduce(function(r,e){return r+"".concat(e,": ").concat(t[e].trim(),";")},"")}function oa(t){return t.size!==Pt.size||t.x!==Pt.x||t.y!==Pt.y||t.rotate!==Pt.rotate||t.flipX||t.flipY}function Kc(t){var r=t.transform,e=t.containerWidth,o=t.iconWidth,a={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),i="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(s)},m={transform:"translate(".concat(o/2*-1," -256)")};return{outer:a,inner:l,path:m}}function qc(t){var r=t.transform,e=t.width,o=e===void 0?ho:e,a=t.height,n=a===void 0?ho:a,i=t.startCentered,s=i===void 0?!1:i,l="";return s&&ui?l+="translate(".concat(r.x/Ut-o/2,"em, ").concat(r.y/Ut-n/2,"em) "):s?l+="translate(calc(-50% + ".concat(r.x/Ut,"em), calc(-50% + ").concat(r.y/Ut,"em)) "):l+="translate(".concat(r.x/Ut,"em, ").concat(r.y/Ut,"em) "),l+="scale(".concat(r.size/Ut*(r.flipX?-1:1),", ").concat(r.size/Ut*(r.flipY?-1:1),") "),l+="rotate(".concat(r.rotate,"deg) "),l}var Xc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ai(){var t=vi,r=hi,e=j.familyPrefix,o=j.replacementClass,a=Xc;if(e!==t||o!==r){var n=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(r),"g");a=a.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(o))}return a}var Za=!1;function Je(){j.autoAddCss&&!Za&&(Yc(Ai()),Za=!0)}var Vc={mixout:function(){return{dom:{css:Ai,insertCss:Je}}},hooks:function(){return{beforeDOMElementCreation:function(){Je()},beforeI2svg:function(){Je()}}}},Lt=Xt||{};Lt[Mt]||(Lt[Mt]={});Lt[Mt].styles||(Lt[Mt].styles={});Lt[Mt].hooks||(Lt[Mt].hooks={});Lt[Mt].shims||(Lt[Mt].shims=[]);var xt=Lt[Mt],Oi=[],Gc=function t(){G.removeEventListener("DOMContentLoaded",t),xe=1,Oi.map(function(r){return r()})},xe=!1;$t&&(xe=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),xe||G.addEventListener("DOMContentLoaded",Gc));function Jc(t){!$t||(xe?setTimeout(t,0):Oi.push(t))}function Xr(t){var r=t.tag,e=t.attributes,o=e===void 0?{}:e,a=t.children,n=a===void 0?[]:a;return typeof t=="string"?zi(t):"<".concat(r," ").concat(Wc(o),">").concat(n.map(Xr).join(""),"</").concat(r,">")}function Qa(t,r,e){if(t&&t[r]&&t[r][e])return{prefix:r,iconName:e,icon:t[r][e]}}var Zc=function(r,e){return function(o,a,n,i){return r.call(e,o,a,n,i)}},Ze=function(r,e,o,a){var n=Object.keys(r),i=n.length,s=a!==void 0?Zc(e,a):e,l,m,p;for(o===void 0?(l=1,p=r[n[0]]):(l=0,p=o);l<i;l++)m=n[l],p=s(p,r[m],m,r);return p};function Qc(t){for(var r=[],e=0,o=t.length;e<o;){var a=t.charCodeAt(e++);if(a>=55296&&a<=56319&&e<o){var n=t.charCodeAt(e++);(n&64512)==56320?r.push(((a&1023)<<10)+(n&1023)+65536):(r.push(a),e--)}else r.push(a)}return r}function wo(t){var r=Qc(t);return r.length===1?r[0].toString(16):null}function tm(t,r){var e=t.length,o=t.charCodeAt(r),a;return o>=55296&&o<=56319&&e>r+1&&(a=t.charCodeAt(r+1),a>=56320&&a<=57343)?(o-55296)*1024+a-56320+65536:o}function tn(t){return Object.keys(t).reduce(function(r,e){var o=t[e],a=!!o.icon;return a?r[o.iconName]=o.icon:r[e]=o,r},{})}function yo(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=e.skipHooks,a=o===void 0?!1:o,n=tn(r);typeof xt.hooks.addPack=="function"&&!a?xt.hooks.addPack(t,tn(r)):xt.styles[t]=z(z({},xt.styles[t]||{}),n),t==="fas"&&yo("fa",r)}var $r=xt.styles,rm=xt.shims,em=Object.values(wi),aa=null,Ci={},Ei={},Pi={},ji={},Ii={},om=Object.keys(ra);function am(t){return~Fc.indexOf(t)}function nm(t,r){var e=r.split("-"),o=e[0],a=e.slice(1).join("-");return o===t&&a!==""&&!am(a)?a:null}var Ti=function(){var r=function(n){return Ze($r,function(i,s,l){return i[l]=Ze(s,n,{}),i},{})};Ci=r(function(a,n,i){if(n[3]&&(a[n[3]]=i),n[2]){var s=n[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=i})}return a}),Ei=r(function(a,n,i){if(a[i]=i,n[2]){var s=n[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=i})}return a}),Ii=r(function(a,n,i){var s=n[2];return a[i]=i,s.forEach(function(l){a[l]=i}),a});var e="far"in $r||j.autoFetchSvg,o=Ze(rm,function(a,n){var i=n[0],s=n[1],l=n[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Pi=o.names,ji=o.unicodes,aa=Fe(j.styleDefault)};Uc(function(t){aa=Fe(t.styleDefault)});Ti();function na(t,r){return(Ci[t]||{})[r]}function im(t,r){return(Ei[t]||{})[r]}function pr(t,r){return(Ii[t]||{})[r]}function Si(t){return Pi[t]||{prefix:null,iconName:null}}function sm(t){var r=ji[t],e=na("fas",t);return r||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function Vt(){return aa}var ia=function(){return{prefix:null,iconName:null,rest:[]}};function Fe(t){var r=ra[t],e=he[t]||he[r],o=t in xt.styles?t:null;return e||o||null}function Re(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,o=e===void 0?!1:e,a=null,n=t.reduce(function(i,s){var l=nm(j.familyPrefix,s);if($r[s]?(s=em.includes(s)?Ic[s]:s,a=s,i.prefix=s):om.indexOf(s)>-1?(a=s,i.prefix=Fe(s)):l?i.iconName=l:s!==j.replacementClass&&i.rest.push(s),!o&&i.prefix&&i.iconName){var m=a==="fa"?Si(i.iconName):{},p=pr(i.prefix,i.iconName);m.prefix&&(a=null),i.iconName=m.iconName||p||i.iconName,i.prefix=m.prefix||i.prefix,i.prefix==="far"&&!$r.far&&$r.fas&&!j.autoFetchSvg&&(i.prefix="fas")}return i},ia());return(n.prefix==="fa"||a==="fa")&&(n.prefix=Vt()||"fas"),n}var lm=function(){function t(){hc(this,t),this.definitions={}}return xc(t,[{key:"add",value:function(){for(var e=this,o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];var i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=z(z({},e.definitions[s]||{}),i[s]),yo(s,i[s]);var l=wi[s];l&&yo(l,i[s]),Ti()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,o){var a=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(a).map(function(n){var i=a[n],s=i.prefix,l=i.iconName,m=i.icon,p=m[2];e[s]||(e[s]={}),p.length>0&&p.forEach(function(f){typeof f=="string"&&(e[s][f]=m)}),e[s][l]=m}),e}}]),t}(),rn=[],fr={},hr={},dm=Object.keys(hr);function cm(t,r){var e=r.mixoutsTo;return rn=t,fr={},Object.keys(hr).forEach(function(o){dm.indexOf(o)===-1&&delete hr[o]}),rn.forEach(function(o){var a=o.mixout?o.mixout():{};if(Object.keys(a).forEach(function(i){typeof a[i]=="function"&&(e[i]=a[i]),ve(a[i])==="object"&&Object.keys(a[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=a[i][s]})}),o.hooks){var n=o.hooks();Object.keys(n).forEach(function(i){fr[i]||(fr[i]=[]),fr[i].push(n[i])})}o.provides&&o.provides(hr)}),e}function ko(t,r){for(var e=arguments.length,o=new Array(e>2?e-2:0),a=2;a<e;a++)o[a-2]=arguments[a];var n=fr[t]||[];return n.forEach(function(i){r=i.apply(null,[r].concat(o))}),r}function ar(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];var a=fr[t]||[];a.forEach(function(n){n.apply(null,e)})}function Ft(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1);return hr[t]?hr[t].apply(null,r):void 0}function _o(t){t.prefix==="fa"&&(t.prefix="fas");var r=t.iconName,e=t.prefix||Vt();if(!!r)return r=pr(e,r)||r,Qa(Ni.definitions,e,r)||Qa(xt.styles,e,r)}var Ni=new lm,mm=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,ar("noAuto")},pm={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $t?(ar("beforeI2svg",r),Ft("pseudoElements2svg",r),Ft("i2svg",r)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,Jc(function(){bm({autoReplaceSvgRoot:e}),ar("watch",r)})}},fm={icon:function(r){if(r===null)return null;if(ve(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:pr(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var e=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],o=Fe(r[0]);return{prefix:o,iconName:pr(o,e)||e}}if(typeof r=="string"&&(r.indexOf("".concat(j.familyPrefix,"-"))>-1||r.match(Tc))){var a=Re(r.split(" "),{skipLookups:!0});return{prefix:a.prefix||Vt(),iconName:pr(a.prefix,a.iconName)||a.iconName}}if(typeof r=="string"){var n=Vt();return{prefix:n,iconName:pr(n,r)||r}}}},ft={noAuto:mm,config:j,dom:pm,parse:fm,library:Ni,findIconDefinition:_o,toHtml:Xr},bm=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.autoReplaceSvgRoot,o=e===void 0?G:e;(Object.keys(xt.styles).length>0||j.autoFetchSvg)&&$t&&j.autoReplaceSvg&&ft.dom.i2svg({node:o})};function $e(t,r){return Object.defineProperty(t,"abstract",{get:r}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(o){return Xr(o)})}}),Object.defineProperty(t,"node",{get:function(){if(!!$t){var o=G.createElement("div");return o.innerHTML=t.html,o.children}}}),t}function gm(t){var r=t.children,e=t.main,o=t.mask,a=t.attributes,n=t.styles,i=t.transform;if(oa(i)&&e.found&&!o.found){var s=e.width,l=e.height,m={x:s/l/2,y:.5};a.style=Le(z(z({},n),{},{"transform-origin":"".concat(m.x+i.x/16,"em ").concat(m.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:r}]}function um(t){var r=t.prefix,e=t.iconName,o=t.children,a=t.attributes,n=t.symbol,i=n===!0?"".concat(r,"-").concat(j.familyPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},a),{},{id:i}),children:o}]}]}function sa(t){var r=t.icons,e=r.main,o=r.mask,a=t.prefix,n=t.iconName,i=t.transform,s=t.symbol,l=t.title,m=t.maskId,p=t.titleId,f=t.extra,h=t.watchable,A=h===void 0?!1:h,L=o.found?o:e,R=L.width,T=L.height,x=a==="fak",O=[j.replacementClass,n?"".concat(j.familyPrefix,"-").concat(n):""].filter(function(nt){return f.classes.indexOf(nt)===-1}).filter(function(nt){return nt!==""||!!nt}).concat(f.classes).join(" "),S={children:[],attributes:z(z({},f.attributes),{},{"data-prefix":a,"data-icon":n,class:O,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(T)})},$=x&&!~f.classes.indexOf("fa-fw")?{width:"".concat(R/T*16*.0625,"em")}:{};A&&(S.attributes[or]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(p||Kr())},children:[l]}),delete S.attributes.title);var K=z(z({},S),{},{prefix:a,iconName:n,main:e,mask:o,maskId:m,transform:i,symbol:s,styles:z(z({},$),f.styles)}),rt=o.found&&e.found?Ft("generateAbstractMask",K)||{children:[],attributes:{}}:Ft("generateAbstractIcon",K)||{children:[],attributes:{}},dt=rt.children,kt=rt.attributes;return K.children=dt,K.attributes=kt,s?um(K):gm(K)}function en(t){var r=t.content,e=t.width,o=t.height,a=t.transform,n=t.title,i=t.extra,s=t.watchable,l=s===void 0?!1:s,m=z(z(z({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(m[or]="");var p=z({},i.styles);oa(a)&&(p.transform=qc({transform:a,startCentered:!0,width:e,height:o}),p["-webkit-transform"]=p.transform);var f=Le(p);f.length>0&&(m.style=f);var h=[];return h.push({tag:"span",attributes:m,children:[r]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function vm(t){var r=t.content,e=t.title,o=t.extra,a=z(z(z({},o.attributes),e?{title:e}:{}),{},{class:o.classes.join(" ")}),n=Le(o.styles);n.length>0&&(a.style=n);var i=[];return i.push({tag:"span",attributes:a,children:[r]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var Qe=xt.styles;function zo(t){var r=t[0],e=t[1],o=t.slice(4),a=Jo(o,1),n=a[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(tr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(tr.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(tr.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:r,height:e,icon:i}}var hm={found:!1,width:512,height:512};function xm(t,r){!xi&&!j.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(r,'" is missing.'))}function Ao(t,r){var e=r;return r==="fa"&&j.styleDefault!==null&&(r=Vt()),new Promise(function(o,a){if(Ft("missingIconAbstract"),e==="fa"){var n=Si(t)||{};t=n.iconName||t,r=n.prefix||r}if(t&&r&&Qe[r]&&Qe[r][t]){var i=Qe[r][t];return o(zo(i))}xm(t,r),o(z(z({},hm),{},{icon:j.showMissingIcons&&t?Ft("missingIconAbstract")||{}:{}}))})}var on=function(){},Oo=j.measurePerformance&&oe&&oe.mark&&oe.measure?oe:{mark:on,measure:on},Nr='FA "6.1.1"',wm=function(r){return Oo.mark("".concat(Nr," ").concat(r," begins")),function(){return Mi(r)}},Mi=function(r){Oo.mark("".concat(Nr," ").concat(r," ends")),Oo.measure("".concat(Nr," ").concat(r),"".concat(Nr," ").concat(r," begins"),"".concat(Nr," ").concat(r," ends"))},la={begin:wm,end:Mi},de=function(){};function an(t){var r=t.getAttribute?t.getAttribute(or):null;return typeof r=="string"}function ym(t){var r=t.getAttribute?t.getAttribute(Qo):null,e=t.getAttribute?t.getAttribute(ta):null;return r&&e}function km(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(j.replacementClass)}function _m(){if(j.autoReplaceSvg===!0)return ce.replace;var t=ce[j.autoReplaceSvg];return t||ce.replace}function zm(t){return G.createElementNS("http://www.w3.org/2000/svg",t)}function Am(t){return G.createElement(t)}function Li(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.ceFn,o=e===void 0?t.tag==="svg"?zm:Am:e;if(typeof t=="string")return G.createTextNode(t);var a=o(t.tag);Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])});var n=t.children||[];return n.forEach(function(i){a.appendChild(Li(i,{ceFn:o}))}),a}function Om(t){var r=" ".concat(t.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var ce={replace:function(r){var e=r[0];if(e.parentNode)if(r[1].forEach(function(a){e.parentNode.insertBefore(Li(a),e)}),e.getAttribute(or)===null&&j.keepOriginalSource){var o=G.createComment(Om(e));e.parentNode.replaceChild(o,e)}else e.remove()},nest:function(r){var e=r[0],o=r[1];if(~ea(e).indexOf(j.replacementClass))return ce.replace(r);var a=new RegExp("".concat(j.familyPrefix,"-.*"));if(delete o[0].attributes.id,o[0].attributes.class){var n=o[0].attributes.class.split(" ").reduce(function(s,l){return l===j.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});o[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=o.map(function(s){return Xr(s)}).join(`
`);e.setAttribute(or,""),e.innerHTML=i}};function nn(t){t()}function Fi(t,r){var e=typeof r=="function"?r:de;if(t.length===0)e();else{var o=nn;j.mutateApproach===Pc&&(o=Xt.requestAnimationFrame||nn),o(function(){var a=_m(),n=la.begin("mutate");t.map(a),n(),e()})}}var da=!1;function Ri(){da=!0}function Co(){da=!1}var we=null;function sn(t){if(!!Ga&&!!j.observeMutations){var r=t.treeCallback,e=r===void 0?de:r,o=t.nodeCallback,a=o===void 0?de:o,n=t.pseudoElementsCallback,i=n===void 0?de:n,s=t.observeMutationsRoot,l=s===void 0?G:s;we=new Ga(function(m){if(!da){var p=Vt();Or(m).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!an(f.addedNodes[0])&&(j.searchPseudoElements&&i(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&j.searchPseudoElements&&i(f.target.parentNode),f.type==="attributes"&&an(f.target)&&~Lc.indexOf(f.attributeName))if(f.attributeName==="class"&&ym(f.target)){var h=Re(ea(f.target)),A=h.prefix,L=h.iconName;f.target.setAttribute(Qo,A||p),L&&f.target.setAttribute(ta,L)}else km(f.target)&&a(f.target)})}}),$t&&we.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Cm(){!we||we.disconnect()}function Em(t){var r=t.getAttribute("style"),e=[];return r&&(e=r.split(";").reduce(function(o,a){var n=a.split(":"),i=n[0],s=n.slice(1);return i&&s.length>0&&(o[i]=s.join(":").trim()),o},{})),e}function Pm(t){var r=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),o=t.innerText!==void 0?t.innerText.trim():"",a=Re(ea(t));return a.prefix||(a.prefix=Vt()),r&&e&&(a.prefix=r,a.iconName=e),a.iconName&&a.prefix||a.prefix&&o.length>0&&(a.iconName=im(a.prefix,t.innerText)||na(a.prefix,wo(t.innerText))),a}function jm(t){var r=Or(t.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{}),e=t.getAttribute("title"),o=t.getAttribute("data-fa-title-id");return j.autoA11y&&(e?r["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(o||Kr()):(r["aria-hidden"]="true",r.focusable="false")),r}function Im(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ln(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Pm(t),o=e.iconName,a=e.prefix,n=e.rest,i=jm(t),s=ko("parseNodeAttributes",{},t),l=r.styleParser?Em(t):[];return z({iconName:o,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Pt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},s)}var Tm=xt.styles;function $i(t){var r=j.autoReplaceSvg==="nest"?ln(t,{styleParser:!1}):ln(t);return~r.extra.classes.indexOf(yi)?Ft("generateLayersText",t,r):Ft("generateSvgReplacementMutation",t,r)}function dn(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$t)return Promise.resolve();var e=G.documentElement.classList,o=function(f){return e.add("".concat(Ja,"-").concat(f))},a=function(f){return e.remove("".concat(Ja,"-").concat(f))},n=j.autoFetchSvg?Object.keys(ra):Object.keys(Tm),i=[".".concat(yi,":not([").concat(or,"])")].concat(n.map(function(p){return".".concat(p,":not([").concat(or,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Or(t.querySelectorAll(i))}catch{}if(s.length>0)o("pending"),a("complete");else return Promise.resolve();var l=la.begin("onTree"),m=s.reduce(function(p,f){try{var h=$i(f);h&&p.push(h)}catch(A){xi||A.name==="MissingIcon"&&console.error(A)}return p},[]);return new Promise(function(p,f){Promise.all(m).then(function(h){Fi(h,function(){o("active"),o("complete"),a("pending"),typeof r=="function"&&r(),l(),p()})}).catch(function(h){l(),f(h)})})}function Sm(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$i(t).then(function(e){e&&Fi([e],r)})}function Nm(t){return function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=(r||{}).icon?r:_o(r||{}),a=e.mask;return a&&(a=(a||{}).icon?a:_o(a||{})),t(o,z(z({},e),{},{mask:a}))}}var Mm=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=e.transform,a=o===void 0?Pt:o,n=e.symbol,i=n===void 0?!1:n,s=e.mask,l=s===void 0?null:s,m=e.maskId,p=m===void 0?null:m,f=e.title,h=f===void 0?null:f,A=e.titleId,L=A===void 0?null:A,R=e.classes,T=R===void 0?[]:R,x=e.attributes,O=x===void 0?{}:x,S=e.styles,$=S===void 0?{}:S;if(!!r){var K=r.prefix,rt=r.iconName,dt=r.icon;return $e(z({type:"icon"},r),function(){return ar("beforeDOMElementCreation",{iconDefinition:r,params:e}),j.autoA11y&&(h?O["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(L||Kr()):(O["aria-hidden"]="true",O.focusable="false")),sa({icons:{main:zo(dt),mask:l?zo(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:rt,transform:z(z({},Pt),a),symbol:i,title:h,maskId:p,titleId:L,extra:{attributes:O,styles:$,classes:T}})})}},Lm={mixout:function(){return{icon:Nm(Mm)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=dn,e.nodeCallback=Sm,e}}},provides:function(r){r.i2svg=function(e){var o=e.node,a=o===void 0?G:o,n=e.callback,i=n===void 0?function(){}:n;return dn(a,i)},r.generateSvgReplacementMutation=function(e,o){var a=o.iconName,n=o.title,i=o.titleId,s=o.prefix,l=o.transform,m=o.symbol,p=o.mask,f=o.maskId,h=o.extra;return new Promise(function(A,L){Promise.all([Ao(a,s),p.iconName?Ao(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var T=Jo(R,2),x=T[0],O=T[1];A([e,sa({icons:{main:x,mask:O},prefix:s,iconName:a,transform:l,symbol:m,maskId:f,title:n,titleId:i,extra:h,watchable:!0})])}).catch(L)})},r.generateAbstractIcon=function(e){var o=e.children,a=e.attributes,n=e.main,i=e.transform,s=e.styles,l=Le(s);l.length>0&&(a.style=l);var m;return oa(i)&&(m=Ft("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),o.push(m||n.icon),{children:o,attributes:a}}}},Fm={mixout:function(){return{layer:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.classes,n=a===void 0?[]:a;return $e({type:"layer"},function(){ar("beforeDOMElementCreation",{assembler:e,params:o});var i=[];return e(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(j.familyPrefix,"-layers")].concat(Me(n)).join(" ")},children:i}]})}}}},Rm={mixout:function(){return{counter:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.title,n=a===void 0?null:a,i=o.classes,s=i===void 0?[]:i,l=o.attributes,m=l===void 0?{}:l,p=o.styles,f=p===void 0?{}:p;return $e({type:"counter",content:e},function(){return ar("beforeDOMElementCreation",{content:e,params:o}),vm({content:e.toString(),title:n,extra:{attributes:m,styles:f,classes:["".concat(j.familyPrefix,"-layers-counter")].concat(Me(s))}})})}}}},$m={mixout:function(){return{text:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.transform,n=a===void 0?Pt:a,i=o.title,s=i===void 0?null:i,l=o.classes,m=l===void 0?[]:l,p=o.attributes,f=p===void 0?{}:p,h=o.styles,A=h===void 0?{}:h;return $e({type:"text",content:e},function(){return ar("beforeDOMElementCreation",{content:e,params:o}),en({content:e,transform:z(z({},Pt),n),title:s,extra:{attributes:f,styles:A,classes:["".concat(j.familyPrefix,"-layers-text")].concat(Me(m))}})})}}},provides:function(r){r.generateLayersText=function(e,o){var a=o.title,n=o.transform,i=o.extra,s=null,l=null;if(ui){var m=parseInt(getComputedStyle(e).fontSize,10),p=e.getBoundingClientRect();s=p.width/m,l=p.height/m}return j.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,en({content:e.innerHTML,width:s,height:l,transform:n,title:a,extra:i,watchable:!0})])}}},Dm=new RegExp('"',"ug"),cn=[1105920,1112319];function Bm(t){var r=t.replace(Dm,""),e=tm(r,0),o=e>=cn[0]&&e<=cn[1],a=r.length===2?r[0]===r[1]:!1;return{value:wo(a?r[0]:r),isSecondary:o||a}}function mn(t,r){var e="".concat(Ec).concat(r.replace(":","-"));return new Promise(function(o,a){if(t.getAttribute(e)!==null)return o();var n=Or(t.children),i=n.filter(function(rt){return rt.getAttribute(xo)===r})[0],s=Xt.getComputedStyle(t,r),l=s.getPropertyValue("font-family").match(Sc),m=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(i&&!l)return t.removeChild(i),o();if(l&&p!=="none"&&p!==""){var f=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?he[l[2].toLowerCase()]:Nc[m],A=Bm(f),L=A.value,R=A.isSecondary,T=l[0].startsWith("FontAwesome"),x=na(h,L),O=x;if(T){var S=sm(L);S.iconName&&S.prefix&&(x=S.iconName,h=S.prefix)}if(x&&!R&&(!i||i.getAttribute(Qo)!==h||i.getAttribute(ta)!==O)){t.setAttribute(e,O),i&&t.removeChild(i);var $=Im(),K=$.extra;K.attributes[xo]=r,Ao(x,h).then(function(rt){var dt=sa(z(z({},$),{},{icons:{main:rt,mask:ia()},prefix:h,iconName:O,extra:K,watchable:!0})),kt=G.createElement("svg");r==="::before"?t.insertBefore(kt,t.firstChild):t.appendChild(kt),kt.outerHTML=dt.map(function(nt){return Xr(nt)}).join(`
`),t.removeAttribute(e),o()}).catch(a)}else o()}else o()})}function Um(t){return Promise.all([mn(t,"::before"),mn(t,"::after")])}function Ym(t){return t.parentNode!==document.head&&!~jc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xo)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function pn(t){if(!!$t)return new Promise(function(r,e){var o=Or(t.querySelectorAll("*")).filter(Ym).map(Um),a=la.begin("searchPseudoElements");Ri(),Promise.all(o).then(function(){a(),Co(),r()}).catch(function(){a(),Co(),e()})})}var Hm={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=pn,e}}},provides:function(r){r.pseudoElements2svg=function(e){var o=e.node,a=o===void 0?G:o;j.searchPseudoElements&&pn(a)}}},fn=!1,Wm={mixout:function(){return{dom:{unwatch:function(){Ri(),fn=!0}}}},hooks:function(){return{bootstrap:function(){sn(ko("mutationObserverCallbacks",{}))},noAuto:function(){Cm()},watch:function(e){var o=e.observeMutationsRoot;fn?Co():sn(ko("mutationObserverCallbacks",{observeMutationsRoot:o}))}}}},bn=function(r){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(o,a){var n=a.toLowerCase().split("-"),i=n[0],s=n.slice(1).join("-");if(i&&s==="h")return o.flipX=!0,o;if(i&&s==="v")return o.flipY=!0,o;if(s=parseFloat(s),isNaN(s))return o;switch(i){case"grow":o.size=o.size+s;break;case"shrink":o.size=o.size-s;break;case"left":o.x=o.x-s;break;case"right":o.x=o.x+s;break;case"up":o.y=o.y-s;break;case"down":o.y=o.y+s;break;case"rotate":o.rotate=o.rotate+s;break}return o},e)},Km={mixout:function(){return{parse:{transform:function(e){return bn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,o){var a=o.getAttribute("data-fa-transform");return a&&(e.transform=bn(a)),e}}},provides:function(r){r.generateAbstractTransformGrouping=function(e){var o=e.main,a=e.transform,n=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(n/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),m="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),p="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(l," ").concat(m," ").concat(p)},h={transform:"translate(".concat(i/2*-1," -256)")},A={outer:s,inner:f,path:h};return{tag:"g",attributes:z({},A.outer),children:[{tag:"g",attributes:z({},A.inner),children:[{tag:o.icon.tag,children:o.icon.children,attributes:z(z({},o.icon.attributes),A.path)}]}]}}}},to={x:0,y:0,width:"100%",height:"100%"};function gn(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||r)&&(t.attributes.fill="black"),t}function qm(t){return t.tag==="g"?t.children:[t]}var Xm={hooks:function(){return{parseNodeAttributes:function(e,o){var a=o.getAttribute("data-fa-mask"),n=a?Re(a.split(" ").map(function(i){return i.trim()})):ia();return n.prefix||(n.prefix=Vt()),e.mask=n,e.maskId=o.getAttribute("data-fa-mask-id"),e}}},provides:function(r){r.generateAbstractMask=function(e){var o=e.children,a=e.attributes,n=e.main,i=e.mask,s=e.maskId,l=e.transform,m=n.width,p=n.icon,f=i.width,h=i.icon,A=Kc({transform:l,containerWidth:f,iconWidth:m}),L={tag:"rect",attributes:z(z({},to),{},{fill:"white"})},R=p.children?{children:p.children.map(gn)}:{},T={tag:"g",attributes:z({},A.inner),children:[gn(z({tag:p.tag,attributes:z(z({},p.attributes),A.path)},R))]},x={tag:"g",attributes:z({},A.outer),children:[T]},O="mask-".concat(s||Kr()),S="clip-".concat(s||Kr()),$={tag:"mask",attributes:z(z({},to),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,x]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:qm(h)},$]};return o.push(K,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(O,")")},to)}),{children:o,attributes:a}}}},Vm={provides:function(r){var e=!1;Xt.matchMedia&&(e=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var o=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};o.push({tag:"path",attributes:z(z({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=z(z({},n),{},{attributeName:"opacity"}),s={tag:"circle",attributes:z(z({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:z(z({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},i),{},{values:"1;0;1;1;0;1;"})}),o.push(s),o.push({tag:"path",attributes:z(z({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||o.push({tag:"path",attributes:z(z({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:o}}}},Gm={hooks:function(){return{parseNodeAttributes:function(e,o){var a=o.getAttribute("data-fa-symbol"),n=a===null?!1:a===""?!0:a;return e.symbol=n,e}}}},Jm=[Vc,Lm,Fm,Rm,$m,Hm,Wm,Km,Xm,Vm,Gm];cm(Jm,{mixoutsTo:ft});ft.noAuto;var Di=ft.config,Vr=ft.library;ft.dom;var ye=ft.parse;ft.findIconDefinition;ft.toHtml;var Zm=ft.icon;ft.layer;var Qm=ft.text;ft.counter;function un(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,o)}return e}function vt(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?un(Object(e),!0).forEach(function(o){st(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):un(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function ke(t){return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ke(t)}function st(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function tp(t,r){if(t==null)return{};var e={},o=Object.keys(t),a,n;for(n=0;n<o.length;n++)a=o[n],!(r.indexOf(a)>=0)&&(e[a]=t[a]);return e}function rp(t,r){if(t==null)return{};var e=tp(t,r),o,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,o)||(e[o]=t[o]))}return e}function Eo(t){return ep(t)||op(t)||ap(t)||np()}function ep(t){if(Array.isArray(t))return Po(t)}function op(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ap(t,r){if(!!t){if(typeof t=="string")return Po(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Po(t,r)}}function Po(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}function np(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bi={exports:{}};(function(t){(function(r){var e=function(x,O,S){if(!m(O)||f(O)||h(O)||A(O)||l(O))return O;var $,K=0,rt=0;if(p(O))for($=[],rt=O.length;K<rt;K++)$.push(e(x,O[K],S));else{$={};for(var dt in O)Object.prototype.hasOwnProperty.call(O,dt)&&($[x(dt,S)]=e(x,O[dt],S))}return $},o=function(x,O){O=O||{};var S=O.separator||"_",$=O.split||/(?=[A-Z])/;return x.split($).join(S)},a=function(x){return L(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(O,S){return S?S.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},n=function(x){var O=a(x);return O.substr(0,1).toUpperCase()+O.substr(1)},i=function(x,O){return o(x,O).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},m=function(x){return x===Object(x)},p=function(x){return s.call(x)=="[object Array]"},f=function(x){return s.call(x)=="[object Date]"},h=function(x){return s.call(x)=="[object RegExp]"},A=function(x){return s.call(x)=="[object Boolean]"},L=function(x){return x=x-0,x===x},R=function(x,O){var S=O&&"process"in O?O.process:O;return typeof S!="function"?x:function($,K){return S($,x,K)}},T={camelize:a,decamelize:i,pascalize:n,depascalize:i,camelizeKeys:function(x,O){return e(R(a,O),x)},decamelizeKeys:function(x,O){return e(R(i,O),x,O)},pascalizeKeys:function(x,O){return e(R(n,O),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=T:r.humps=T})(ip)})(Bi);var sp=Bi.exports,lp=["class","style"];function dp(t){return t.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,e){var o=e.indexOf(":"),a=sp.camelize(e.slice(0,o)),n=e.slice(o+1).trim();return r[a]=n,r},{})}function cp(t){return t.split(/\s+/).reduce(function(r,e){return r[e]=!0,r},{})}function ca(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var o=(t.children||[]).map(function(l){return ca(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,m){var p=t.attributes[m];switch(m){case"class":l.class=cp(p);break;case"style":l.style=dp(p);break;default:l.attrs[m]=p}return l},{attrs:{},class:{},style:{}});e.class;var n=e.style,i=n===void 0?{}:n,s=rp(e,lp);return ci(t.tag,vt(vt(vt({},r),{},{class:a.class,style:vt(vt({},a.style),i)},a.attrs),s),o)}var Ui=!1;try{Ui=!0}catch{}function mp(){if(!Ui&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Dr(t,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?st({},t,r):{}}function pp(t){var r,e=(r={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},st(r,"fa-".concat(t.size),t.size!==null),st(r,"fa-rotate-".concat(t.rotation),t.rotation!==null),st(r,"fa-pull-".concat(t.pull),t.pull!==null),st(r,"fa-swap-opacity",t.swapOpacity),st(r,"fa-bounce",t.bounce),st(r,"fa-shake",t.shake),st(r,"fa-beat",t.beat),st(r,"fa-fade",t.fade),st(r,"fa-beat-fade",t.beatFade),st(r,"fa-flash",t.flash),st(r,"fa-spin-pulse",t.spinPulse),st(r,"fa-spin-reverse",t.spinReverse),r);return Object.keys(e).map(function(o){return e[o]?o:null}).filter(function(o){return o})}function vn(t){if(t&&ke(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ye.icon)return ye.icon(t);if(t===null)return null;if(ke(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var fp=Ie({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(r){return[!0,!1,"horizontal","vertical","both"].indexOf(r)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(r){return["right","left"].indexOf(r)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(r){return[90,180,270].indexOf(Number.parseInt(r,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(r){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(r)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(r,e){var o=e.attrs,a=bt(function(){return vn(r.icon)}),n=bt(function(){return Dr("classes",pp(r))}),i=bt(function(){return Dr("transform",typeof r.transform=="string"?ye.transform(r.transform):r.transform)}),s=bt(function(){return Dr("mask",vn(r.mask))}),l=bt(function(){return Zm(a.value,vt(vt(vt(vt({},n.value),i.value),s.value),{},{symbol:r.symbol,title:r.title}))});ne(l,function(p){if(!p)return mp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var m=bt(function(){return l.value?ca(l.value.abstract[0],{},o):null});return function(){return m.value}}});Ie({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(r,e){var o=e.slots,a=Di.familyPrefix,n=bt(function(){return["".concat(a,"-layers")].concat(Eo(r.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ci("div",{class:n.value},o.default?o.default():[])}}});Ie({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(r){return["bottom-left","bottom-right","top-left","top-right"].indexOf(r)>-1}}},setup:function(r,e){var o=e.attrs,a=Di.familyPrefix,n=bt(function(){return Dr("classes",[].concat(Eo(r.counter?["".concat(a,"-layers-counter")]:[]),Eo(r.position?["".concat(a,"-layers-").concat(r.position)]:[])))}),i=bt(function(){return Dr("transform",typeof r.transform=="string"?ye.transform(r.transform):r.transform)}),s=bt(function(){var m=Qm(r.value.toString(),vt(vt({},i.value),n.value)),p=m.abstract;return r.counter&&(p[0].attributes.class=p[0].attributes.class.replace("fa-layers-text","")),p[0]}),l=bt(function(){return ca(s.value,{},o)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var bp={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"]},gp={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"]},up={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},vp={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"]},hp={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]};Vr.add(vp);Vr.add(hp);Vr.add(gp);Vr.add(bp);Vr.add(up);ud(vc).component("font-awesome-icon",fp).mount("#app");

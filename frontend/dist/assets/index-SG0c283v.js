var kn=e=>{throw TypeError(e)};var Eo=(e,t,i)=>t.has(e)||kn("Cannot "+i);var v=(e,t,i)=>(Eo(e,t,"read from private field"),i?i.call(e):t.get(e)),U=(e,t,i)=>t.has(e)?kn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),O=(e,t,i,r)=>(Eo(e,t,"write to private field"),r?r.call(e,i):t.set(e,i),i),Y=(e,t,i)=>(Eo(e,t,"access private method"),i);var Ls=(e,t,i,r)=>({set _(s){O(e,t,s,i)},get _(){return v(e,t,r)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();var ys,j,dc,Ti,Cn,uc,Xo,hc,Oa,Jo,Zo,pc,ls={},fc=[],fu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ho=Array.isArray;function Gt(e,t){for(var i in t)e[i]=t[i];return e}function La(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function K(e,t,i){var r,s,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?ys.call(arguments,2):i),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return Jr(e,a,r,s,null)}function Jr(e,t,i,r,s){var o={type:e,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++dc,__i:-1,__u:0};return s==null&&j.vnode!=null&&j.vnode(o),o}function mc(){return{current:null}}function Oe(e){return e.children}function ht(e,t){this.props=e,this.context=t}function wr(e,t){if(t==null)return e.__?wr(e.__,e.__i+1):null;for(var i;t<e.__k.length;t++)if((i=e.__k[t])!=null&&i.__e!=null)return i.__e;return typeof e.type=="function"?wr(e):null}function gc(e){var t,i;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((i=e.__k[t])!=null&&i.__e!=null){e.__e=e.__c.base=i.__e;break}return gc(e)}}function ea(e){(!e.__d&&(e.__d=!0)&&Ti.push(e)&&!eo.__r++||Cn!==j.debounceRendering)&&((Cn=j.debounceRendering)||uc)(eo)}function eo(){var e,t,i,r,s,o,a,n;for(Ti.sort(Xo);e=Ti.shift();)e.__d&&(t=Ti.length,r=void 0,o=(s=(i=e).__v).__e,a=[],n=[],i.__P&&((r=Gt({},s)).__v=s.__v+1,j.vnode&&j.vnode(r),Na(i.__P,r,s,i.__n,i.__P.namespaceURI,32&s.__u?[o]:null,a,o??wr(s),!!(32&s.__u),n),r.__v=s.__v,r.__.__k[r.__i]=r,yc(a,r,n),r.__e!=o&&gc(r)),Ti.length>t&&Ti.sort(Xo));eo.__r=0}function bc(e,t,i,r,s,o,a,n,c,d,f){var u,p,m,g,b,_,w=r&&r.__k||fc,y=t.length;for(c=mu(i,t,w,c,y),u=0;u<y;u++)(m=i.__k[u])!=null&&(p=m.__i===-1?ls:w[m.__i]||ls,m.__i=u,_=Na(e,m,p,s,o,a,n,c,d,f),g=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&Da(p.ref,null,m),f.push(m.ref,m.__c||g,m)),b==null&&g!=null&&(b=g),4&m.__u||p.__k===m.__k?c=vc(m,c,e):typeof m.type=="function"&&_!==void 0?c=_:g&&(c=g.nextSibling),m.__u&=-7);return i.__e=b,c}function mu(e,t,i,r,s){var o,a,n,c,d,f=i.length,u=f,p=0;for(e.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(c=o+p,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Jr(null,a,null,null,null):ho(a)?Jr(Oe,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?Jr(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,n=null,(d=a.__i=gu(a,i,c,u))!==-1&&(u--,(n=i[d])&&(n.__u|=2)),n==null||n.__v===null?(d==-1&&p--,typeof a.type!="function"&&(a.__u|=4)):d!=c&&(d==c-1?p--:d==c+1?p++:(d>c?p--:p++,a.__u|=4))):e.__k[o]=null;if(u)for(o=0;o<f;o++)(n=i[o])!=null&&(2&n.__u)==0&&(n.__e==r&&(r=wr(n)),_c(n,n));return r}function vc(e,t,i){var r,s;if(typeof e.type=="function"){for(r=e.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=e,t=vc(r[s],t,i));return t}e.__e!=t&&(t&&e.type&&!i.contains(t)&&(t=wr(e)),i.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Yt(e,t){return t=t||[],e==null||typeof e=="boolean"||(ho(e)?e.some(function(i){Yt(i,t)}):t.push(e)),t}function gu(e,t,i,r){var s,o,a=e.key,n=e.type,c=t[i];if(c===null||c&&a==c.key&&n===c.type&&(2&c.__u)==0)return i;if(r>(c!=null&&(2&c.__u)==0?1:0))for(s=i-1,o=i+1;s>=0||o<t.length;){if(s>=0){if((c=t[s])&&(2&c.__u)==0&&a==c.key&&n===c.type)return s;s--}if(o<t.length){if((c=t[o])&&(2&c.__u)==0&&a==c.key&&n===c.type)return o;o++}}return-1}function Sn(e,t,i){t[0]=="-"?e.setProperty(t,i??""):e[t]=i==null?"":typeof i!="number"||fu.test(t)?i:i+"px"}function Ns(e,t,i,r,s){var o;e:if(t=="style")if(typeof i=="string")e.style.cssText=i;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)i&&t in i||Sn(e.style,t,"");if(i)for(t in i)r&&i[t]===r[t]||Sn(e.style,t,i[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(hc,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=i,i?r?i.u=r.u:(i.u=Oa,e.addEventListener(t,o?Zo:Jo,o)):e.removeEventListener(t,o?Zo:Jo,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&i==1?"":i))}}function $n(e){return function(t){if(this.l){var i=this.l[t.type+e];if(t.t==null)t.t=Oa++;else if(t.t<i.u)return;return i(j.event?j.event(t):t)}}}function Na(e,t,i,r,s,o,a,n,c,d){var f,u,p,m,g,b,_,w,y,C,k,S,z,I,R,E,T,W=t.type;if(t.constructor!==void 0)return null;128&i.__u&&(c=!!(32&i.__u),o=[n=t.__e=i.__e]),(f=j.__b)&&f(t);e:if(typeof W=="function")try{if(w=t.props,y="prototype"in W&&W.prototype.render,C=(f=W.contextType)&&r[f.__c],k=f?C?C.props.value:f.__:r,i.__c?_=(u=t.__c=i.__c).__=u.__E:(y?t.__c=u=new W(w,k):(t.__c=u=new ht(w,k),u.constructor=W,u.render=vu),C&&C.sub(u),u.props=w,u.state||(u.state={}),u.context=k,u.__n=r,p=u.__d=!0,u.__h=[],u._sb=[]),y&&u.__s==null&&(u.__s=u.state),y&&W.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Gt({},u.__s)),Gt(u.__s,W.getDerivedStateFromProps(w,u.__s))),m=u.props,g=u.state,u.__v=t,p)y&&W.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),y&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(y&&W.getDerivedStateFromProps==null&&w!==m&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(w,k),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(w,u.__s,k)===!1||t.__v==i.__v)){for(t.__v!=i.__v&&(u.props=w,u.state=u.__s,u.__d=!1),t.__e=i.__e,t.__k=i.__k,t.__k.some(function(te){te&&(te.__=t)}),S=0;S<u._sb.length;S++)u.__h.push(u._sb[S]);u._sb=[],u.__h.length&&a.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(w,u.__s,k),y&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(m,g,b)})}if(u.context=k,u.props=w,u.__P=e,u.__e=!1,z=j.__r,I=0,y){for(u.state=u.__s,u.__d=!1,z&&z(t),f=u.render(u.props,u.state,u.context),R=0;R<u._sb.length;R++)u.__h.push(u._sb[R]);u._sb=[]}else do u.__d=!1,z&&z(t),f=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++I<25);u.state=u.__s,u.getChildContext!=null&&(r=Gt(Gt({},r),u.getChildContext())),y&&!p&&u.getSnapshotBeforeUpdate!=null&&(b=u.getSnapshotBeforeUpdate(m,g)),n=bc(e,ho(E=f!=null&&f.type===Oe&&f.key==null?f.props.children:f)?E:[E],t,i,r,s,o,a,n,c,d),u.base=t.__e,t.__u&=-161,u.__h.length&&a.push(u),_&&(u.__E=u.__=null)}catch(te){if(t.__v=null,c||o!=null)if(te.then){for(t.__u|=c?160:128;n&&n.nodeType==8&&n.nextSibling;)n=n.nextSibling;o[o.indexOf(n)]=null,t.__e=n}else for(T=o.length;T--;)La(o[T]);else t.__e=i.__e,t.__k=i.__k;j.__e(te,t,i)}else o==null&&t.__v==i.__v?(t.__k=i.__k,t.__e=i.__e):n=t.__e=bu(i.__e,t,i,r,s,o,a,c,d);return(f=j.diffed)&&f(t),128&t.__u?void 0:n}function yc(e,t,i){for(var r=0;r<i.length;r++)Da(i[r],i[++r],i[++r]);j.__c&&j.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){j.__e(o,s.__v)}})}function bu(e,t,i,r,s,o,a,n,c){var d,f,u,p,m,g,b,_=i.props,w=t.props,y=t.type;if(y=="svg"?s="http://www.w3.org/2000/svg":y=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(d=0;d<o.length;d++)if((m=o[d])&&"setAttribute"in m==!!y&&(y?m.localName==y:m.nodeType==3)){e=m,o[d]=null;break}}if(e==null){if(y==null)return document.createTextNode(w);e=document.createElementNS(s,y,w.is&&w),n&&(j.__m&&j.__m(t,o),n=!1),o=null}if(y===null)_===w||n&&e.data===w||(e.data=w);else{if(o=o&&ys.call(e.childNodes),_=i.props||ls,!n&&o!=null)for(_={},d=0;d<e.attributes.length;d++)_[(m=e.attributes[d]).name]=m.value;for(d in _)if(m=_[d],d!="children"){if(d=="dangerouslySetInnerHTML")u=m;else if(!(d in w)){if(d=="value"&&"defaultValue"in w||d=="checked"&&"defaultChecked"in w)continue;Ns(e,d,null,m,s)}}for(d in w)m=w[d],d=="children"?p=m:d=="dangerouslySetInnerHTML"?f=m:d=="value"?g=m:d=="checked"?b=m:n&&typeof m!="function"||_[d]===m||Ns(e,d,m,_[d],s);if(f)n||u&&(f.__html===u.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(u&&(e.innerHTML=""),bc(e,ho(p)?p:[p],t,i,r,y=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:i.__k&&wr(i,0),n,c),o!=null)for(d=o.length;d--;)La(o[d]);n||(d="value",y=="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[d]||y=="progress"&&!g||y=="option"&&g!==_[d])&&Ns(e,d,g,_[d],s),d="checked",b!==void 0&&b!==e[d]&&Ns(e,d,b,_[d],s))}return e}function Da(e,t,i){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(s){j.__e(s,i)}}function _c(e,t,i){var r,s;if(j.unmount&&j.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Da(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){j.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&_c(r[s],t,i||typeof e.type!="function");i||La(e.__e),e.__c=e.__=e.__e=void 0}function vu(e,t,i){return this.constructor(e,i)}function xr(e,t,i){var r,s,o,a;t==document&&(t=document.documentElement),j.__&&j.__(e,t),s=(r=typeof i=="function")?null:i&&i.__k||t.__k,o=[],a=[],Na(t,e=(!r&&i||t).__k=K(Oe,null,[e]),s||ls,ls,t.namespaceURI,!r&&i?[i]:s?null:t.firstChild?ys.call(t.childNodes):null,o,!r&&i?i:s?s.__e:t.firstChild,r,a),yc(o,e,a)}function wc(e,t){xr(e,t,wc)}function yu(e,t,i){var r,s,o,a,n=Gt({},e.props);for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?s=t[o]:n[o]=t[o]===void 0&&a!==void 0?a[o]:t[o];return arguments.length>2&&(n.children=arguments.length>3?ys.call(arguments,2):i),Jr(e.type,n,r||e.key,s||e.ref,null)}function He(e,t){var i={__c:t="__cC"+pc++,__:e,Consumer:function(r,s){return r.children(s)},Provider:function(r){var s,o;return this.getChildContext||(s=new Set,(o={})[t]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){s=null},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&s.forEach(function(n){n.__e=!0,ea(n)})},this.sub=function(a){s.add(a);var n=a.componentWillUnmount;a.componentWillUnmount=function(){s&&s.delete(a),n&&n.call(a)}}),r.children}};return i.Provider.__=i.Consumer.contextType=i}ys=fc.slice,j={__e:function(e,t,i,r){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,r||{}),a=s.__d),a)return s.__E=s}catch(n){e=n}throw e}},dc=0,ht.prototype.setState=function(e,t){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Gt({},this.state),typeof e=="function"&&(e=e(Gt({},i),this.props)),e&&Gt(i,e),e!=null&&this.__v&&(t&&this._sb.push(t),ea(this))},ht.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ea(this))},ht.prototype.render=Oe,Ti=[],uc=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Xo=function(e,t){return e.__v.__b-t.__v.__b},eo.__r=0,hc=/(PointerCapture)$|Capture$/i,Oa=0,Jo=$n(!1),Zo=$n(!0),pc=0;var _u=0;function x(e,t,i,r,s,o){t||(t={});var a,n,c=t;if("ref"in c)for(n in c={},t)n=="ref"?a=t[n]:c[n]=t[n];var d={type:e,props:c,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--_u,__i:-1,__u:0,__source:s,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(n in a)c[n]===void 0&&(c[n]=a[n]);return j.vnode&&j.vnode(d),d}var ta="";function ia(e){ta=e}function wu(e=""){if(!ta){const t=[...document.getElementsByTagName("script")],i=t.find(r=>r.hasAttribute("data-shoelace"));if(i)ia(i.getAttribute("data-shoelace"));else{const r=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let s="";r&&(s=r.getAttribute("src")),ia(s.split("/").slice(0,-1).join("/"))}}return ta.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var xc=Object.defineProperty,xu=Object.defineProperties,ku=Object.getOwnPropertyDescriptor,Cu=Object.getOwnPropertyDescriptors,En=Object.getOwnPropertySymbols,Su=Object.prototype.hasOwnProperty,$u=Object.prototype.propertyIsEnumerable,Ao=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Fa=e=>{throw TypeError(e)},An=(e,t,i)=>t in e?xc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ei=(e,t)=>{for(var i in t||(t={}))Su.call(t,i)&&An(e,i,t[i]);if(En)for(var i of En(t))$u.call(t,i)&&An(e,i,t[i]);return e},_s=(e,t)=>xu(e,Cu(t)),l=(e,t,i,r)=>{for(var s=r>1?void 0:r?ku(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&xc(t,i,s),s},kc=(e,t,i)=>t.has(e)||Fa("Cannot "+i),Eu=(e,t,i)=>(kc(e,t,"read from private field"),t.get(e)),Au=(e,t,i)=>t.has(e)?Fa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),zu=(e,t,i,r)=>(kc(e,t,"write to private field"),t.set(e,i),i),Ru=function(e,t){this[0]=e,this[1]=t},Tu=e=>{var t=e[Ao("asyncIterator")],i=!1,r,s={};return t==null?(t=e[Ao("iterator")](),r=o=>s[o]=a=>t[o](a)):(t=t.call(e),r=o=>s[o]=a=>{if(i){if(i=!1,o==="throw")throw a;return a}return i=!0,{done:!1,value:new Ru(new Promise(n=>{var c=t[o](a);c instanceof Object||Fa("Object expected"),n(c)}),1)}}),s[Ao("iterator")]=()=>s,r("next"),"throw"in t?r("throw"):s.throw=o=>{throw o},"return"in t&&r("return"),s};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws=globalThis,Ma=Ws.ShadowRoot&&(Ws.ShadyCSS===void 0||Ws.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ba=Symbol(),zn=new WeakMap;let Cc=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==Ba)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Ma&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=zn.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&zn.set(i,t))}return t}toString(){return this.cssText}};const Pu=e=>new Cc(typeof e=="string"?e:e+"",void 0,Ba),M=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,s,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new Cc(i,e,Ba)},Iu=(e,t)=>{if(Ma)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),s=Ws.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=i.cssText,e.appendChild(r)}},Rn=Ma?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return Pu(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ou,defineProperty:Lu,getOwnPropertyDescriptor:Nu,getOwnPropertyNames:Du,getOwnPropertySymbols:Fu,getPrototypeOf:Mu}=Object,vi=globalThis,Tn=vi.trustedTypes,Bu=Tn?Tn.emptyScript:"",zo=vi.reactiveElementPolyfillSupport,Zr=(e,t)=>e,kr={toAttribute(e,t){switch(t){case Boolean:e=e?Bu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ha=(e,t)=>!Ou(e,t),Pn={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:Ha};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),vi.litPropertyMetadata??(vi.litPropertyMetadata=new WeakMap);let tr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Pn){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,i);s!==void 0&&Lu(this.prototype,t,s)}}static getPropertyDescriptor(t,i,r){const{get:s,set:o}=Nu(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const n=s==null?void 0:s.call(this);o.call(this,a),this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pn}static _$Ei(){if(this.hasOwnProperty(Zr("elementProperties")))return;const t=Mu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Zr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zr("properties"))){const i=this.properties,r=[...Du(i),...Fu(i)];for(const s of r)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[r,s]of i)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const s=this._$Eu(i,r);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)i.unshift(Rn(s))}else t!==void 0&&i.push(Rn(t));return i}static _$Eu(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Iu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostDisconnected)==null?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EC(t,i){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:kr).toAttribute(i,r.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,i){var o;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=r.getPropertyOptions(s),n=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:kr;this._$Em=s,this[s]=n.fromAttribute(i,a.type),this._$Em=null}}requestUpdate(t,i,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Ha)(this[t],i))return;this.P(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,r){this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(i)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}};tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},tr[Zr("elementProperties")]=new Map,tr[Zr("finalized")]=new Map,zo==null||zo({ReactiveElement:tr}),(vi.reactiveElementVersions??(vi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=globalThis,to=es.trustedTypes,In=to?to.createPolicy("lit-html",{createHTML:e=>e}):void 0,Sc="$lit$",ci=`lit$${Math.random().toFixed(9).slice(2)}$`,$c="?"+ci,Hu=`<${$c}>`,qi=document,cs=()=>qi.createComment(""),ds=e=>e===null||typeof e!="object"&&typeof e!="function",Va=Array.isArray,Vu=e=>Va(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ro=`[ 	
\f\r]`,Hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,On=/-->/g,Ln=/>/g,zi=RegExp(`>|${Ro}(?:([^\\s"'>=/]+)(${Ro}*=${Ro}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nn=/'/g,Dn=/"/g,Ec=/^(?:script|style|textarea|title)$/i,Uu=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),$=Uu(1),st=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),Fn=new WeakMap,Ii=qi.createTreeWalker(qi,129);function Ac(e,t){if(!Va(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return In!==void 0?In.createHTML(t):t}const qu=(e,t)=>{const i=e.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",a=Hr;for(let n=0;n<i;n++){const c=e[n];let d,f,u=-1,p=0;for(;p<c.length&&(a.lastIndex=p,f=a.exec(c),f!==null);)p=a.lastIndex,a===Hr?f[1]==="!--"?a=On:f[1]!==void 0?a=Ln:f[2]!==void 0?(Ec.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=zi):f[3]!==void 0&&(a=zi):a===zi?f[0]===">"?(a=s??Hr,u=-1):f[1]===void 0?u=-2:(u=a.lastIndex-f[2].length,d=f[1],a=f[3]===void 0?zi:f[3]==='"'?Dn:Nn):a===Dn||a===Nn?a=zi:a===On||a===Ln?a=Hr:(a=zi,s=void 0);const m=a===zi&&e[n+1].startsWith("/>")?" ":"";o+=a===Hr?c+Hu:u>=0?(r.push(d),c.slice(0,u)+Sc+c.slice(u)+ci+m):c+ci+(u===-2?n:m)}return[Ac(e,o+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let ra=class zc{constructor({strings:t,_$litType$:i},r){let s;this.parts=[];let o=0,a=0;const n=t.length-1,c=this.parts,[d,f]=qu(t,i);if(this.el=zc.createElement(d,r),Ii.currentNode=this.el.content,i===2||i===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=Ii.nextNode())!==null&&c.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Sc)){const p=f[a++],m=s.getAttribute(u).split(ci),g=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:g[2],strings:m,ctor:g[1]==="."?Wu:g[1]==="?"?Ku:g[1]==="@"?Qu:po}),s.removeAttribute(u)}else u.startsWith(ci)&&(c.push({type:6,index:o}),s.removeAttribute(u));if(Ec.test(s.tagName)){const u=s.textContent.split(ci),p=u.length-1;if(p>0){s.textContent=to?to.emptyScript:"";for(let m=0;m<p;m++)s.append(u[m],cs()),Ii.nextNode(),c.push({type:2,index:++o});s.append(u[p],cs())}}}else if(s.nodeType===8)if(s.data===$c)c.push({type:2,index:o});else{let u=-1;for(;(u=s.data.indexOf(ci,u+1))!==-1;)c.push({type:7,index:o}),u+=ci.length-1}o++}}static createElement(t,i){const r=qi.createElement("template");return r.innerHTML=t,r}};function Cr(e,t,i=e,r){var a,n;if(t===st)return t;let s=r!==void 0?(a=i._$Co)==null?void 0:a[r]:i._$Cl;const o=ds(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,i,r)),r!==void 0?(i._$Co??(i._$Co=[]))[r]=s:i._$Cl=s),s!==void 0&&(t=Cr(e,s._$AS(e,t.values),s,r)),t}let ju=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??qi).importNode(i,!0);Ii.currentNode=s;let o=Ii.nextNode(),a=0,n=0,c=r[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new Ua(o,o.nextSibling,this,t):c.type===1?d=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(d=new Gu(o,this,t)),this._$AV.push(d),c=r[++n]}a!==(c==null?void 0:c.index)&&(o=Ii.nextNode(),a++)}return Ii.currentNode=qi,s}p(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}},Ua=class Rc{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,r,s){this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Cr(this,t,i),ds(t)?t===le||t==null||t===""?(this._$AH!==le&&this._$AR(),this._$AH=le):t!==this._$AH&&t!==st&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==le&&ds(this._$AH)?this._$AA.nextSibling.data=t:this.T(qi.createTextNode(t)),this._$AH=t}$(t){var o;const{values:i,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ra.createElement(Ac(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(i);else{const a=new ju(s,this),n=a.u(this.options);a.p(i),this.T(n),this._$AH=a}}_$AC(t){let i=Fn.get(t.strings);return i===void 0&&Fn.set(t.strings,i=new ra(t)),i}k(t){Va(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,s=0;for(const o of t)s===i.length?i.push(r=new Rc(this.O(cs()),this.O(cs()),this,this.options)):r=i[s],r._$AI(o),s++;s<i.length&&(this._$AR(r&&r._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,i);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}},po=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,s,o){this.type=1,this._$AH=le,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=le}_$AI(t,i=this,r,s){const o=this.strings;let a=!1;if(o===void 0)t=Cr(this,t,i,0),a=!ds(t)||t!==this._$AH&&t!==st,a&&(this._$AH=t);else{const n=t;let c,d;for(t=o[0],c=0;c<o.length-1;c++)d=Cr(this,n[r+c],i,c),d===st&&(d=this._$AH[c]),a||(a=!ds(d)||d!==this._$AH[c]),d===le?t=le:t!==le&&(t+=(d??"")+o[c+1]),this._$AH[c]=d}a&&!s&&this.j(t)}j(t){t===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Wu=class extends po{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===le?void 0:t}},Ku=class extends po{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==le)}},Qu=class extends po{constructor(t,i,r,s,o){super(t,i,r,s,o),this.type=5}_$AI(t,i=this){if((t=Cr(this,t,i,0)??le)===st)return;const r=this._$AH,s=t===le&&r!==le||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==le&&(r===le||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}},Gu=class{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Cr(this,t)}};const To=es.litHtmlPolyfillSupport;To==null||To(ra,Ua),(es.litHtmlVersions??(es.litHtmlVersions=[])).push("3.2.1");const Yu=(e,t,i)=>{const r=(i==null?void 0:i.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(i==null?void 0:i.renderBefore)??null;r._$litPart$=s=new Ua(t.insertBefore(cs(),o),o,void 0,i??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ts=class extends tr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yu(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return st}};var ec;ts._$litElement$=!0,ts.finalized=!0,(ec=globalThis.litElementHydrateSupport)==null||ec.call(globalThis,{LitElement:ts});const Po=globalThis.litElementPolyfillSupport;Po==null||Po({LitElement:ts});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var Xu=M`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,V=M`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ju={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:Ha},Zu=(e=Ju,t,i)=>{const{kind:r,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(i.name,e),r==="accessor"){const{name:a}=i;return{set(n){const c=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,c,e)},init(n){return n!==void 0&&this.P(a,void 0,e),n}}}if(r==="setter"){const{name:a}=i;return function(n){const c=this[a];t.call(this,n),this.requestUpdate(a,c,e)}}throw Error("Unsupported decorator location: "+r)};function h(e){return(t,i)=>typeof i=="object"?Zu(e,t,i):((r,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(e){return h({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ws(e){return(t,i)=>{const r=typeof t=="function"?t:t[i];Object.assign(r,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tc=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(e,t){return(i,r,s)=>{const o=a=>{var n;return((n=a.renderRoot)==null?void 0:n.querySelector(e))??null};return Tc(i,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function eh(e){return(t,i)=>Tc(t,i,{async get(){var r;return await this.updateComplete,((r=this.renderRoot)==null?void 0:r.querySelector(e))??null}})}var Ks,N=class extends ts{constructor(){super(),Au(this,Ks,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,ei({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,i)}catch{customElements.define(e,class extends t{},i)}return}let s=" (unknown version)",o=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in r&&r.version&&(o=" v"+r.version),!(s&&o&&s===o)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${o} has already been registered.`)}attributeChangedCallback(e,t,i){Eu(this,Ks)||(this.constructor.elementProperties.forEach((r,s)=>{r.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),zu(this,Ks,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&this[i]==null&&(this[i]=t)})}};Ks=new WeakMap;N.version="2.20.0";N.dependencies={};l([h()],N.prototype,"dir",2);l([h()],N.prototype,"lang",2);var fo=class extends N{render(){return $` <slot></slot> `}};fo.styles=[V,Xu];var Jt,ne,Io,Mn,Sr=0,Pc=[],ue=j,Bn=ue.__b,Hn=ue.__r,Vn=ue.diffed,Un=ue.__c,qn=ue.unmount,jn=ue.__;function Gi(e,t){ue.__h&&ue.__h(ne,e,Sr||t),Sr=0;var i=ne.__H||(ne.__H={__:[],__h:[]});return e>=i.__.length&&i.__.push({}),i.__[e]}function he(e){return Sr=1,mo(Ic,e)}function mo(e,t,i){var r=Gi(Jt++,2);if(r.t=e,!r.__c&&(r.__=[i?i(t):Ic(void 0,t),function(n){var c=r.__N?r.__N[0]:r.__[0],d=r.t(c,n);c!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=ne,!ne.u)){var s=function(n,c,d){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(p){return!!p.__c});if(f.every(function(p){return!p.__N}))return!o||o.call(this,n,c,d);var u=r.__c.props!==n;return f.forEach(function(p){if(p.__N){var m=p.__[0];p.__=p.__N,p.__N=void 0,m!==p.__[0]&&(u=!0)}}),o&&o.call(this,n,c,d)||u};ne.u=!0;var o=ne.shouldComponentUpdate,a=ne.componentWillUpdate;ne.componentWillUpdate=function(n,c,d){if(this.__e){var f=o;o=void 0,s(n,c,d),o=f}a&&a.call(this,n,c,d)},ne.shouldComponentUpdate=s}return r.__N||r.__}function Bt(e,t){var i=Gi(Jt++,3);!ue.__s&&Ka(i.__H,t)&&(i.__=e,i.i=t,ne.__H.__h.push(i))}function ki(e,t){var i=Gi(Jt++,4);!ue.__s&&Ka(i.__H,t)&&(i.__=e,i.i=t,ne.__h.push(i))}function pt(e){return Sr=5,ot(function(){return{current:e}},[])}function qa(e,t,i){Sr=6,ki(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},i==null?i:i.concat(e))}function ot(e,t){var i=Gi(Jt++,7);return Ka(i.__H,t)&&(i.__=e(),i.__H=t,i.__h=e),i.__}function ti(e,t){return Sr=8,ot(function(){return e},t)}function J(e){var t=ne.context[e.__c],i=Gi(Jt++,9);return i.c=e,t?(i.__==null&&(i.__=!0,t.sub(ne)),t.props.value):e.__}function ja(e,t){ue.useDebugValue&&ue.useDebugValue(t?t(e):e)}function th(e){var t=Gi(Jt++,10),i=he();return t.__=e,ne.componentDidCatch||(ne.componentDidCatch=function(r,s){t.__&&t.__(r,s),i[1](r)}),[i[0],function(){i[1](void 0)}]}function Wa(){var e=Gi(Jt++,11);if(!e.__){for(var t=ne.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var i=t.__m||(t.__m=[0,0]);e.__="P"+i[0]+"-"+i[1]++}return e.__}function ih(){for(var e;e=Pc.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Qs),e.__H.__h.forEach(sa),e.__H.__h=[]}catch(t){e.__H.__h=[],ue.__e(t,e.__v)}}ue.__b=function(e){ne=null,Bn&&Bn(e)},ue.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),jn&&jn(e,t)},ue.__r=function(e){Hn&&Hn(e),Jt=0;var t=(ne=e.__c).__H;t&&(Io===ne?(t.__h=[],ne.__h=[],t.__.forEach(function(i){i.__N&&(i.__=i.__N),i.i=i.__N=void 0})):(t.__h.forEach(Qs),t.__h.forEach(sa),t.__h=[],Jt=0)),Io=ne},ue.diffed=function(e){Vn&&Vn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Pc.push(t)!==1&&Mn===ue.requestAnimationFrame||((Mn=ue.requestAnimationFrame)||rh)(ih)),t.__H.__.forEach(function(i){i.i&&(i.__H=i.i),i.i=void 0})),Io=ne=null},ue.__c=function(e,t){t.some(function(i){try{i.__h.forEach(Qs),i.__h=i.__h.filter(function(r){return!r.__||sa(r)})}catch(r){t.some(function(s){s.__h&&(s.__h=[])}),t=[],ue.__e(r,i.__v)}}),Un&&Un(e,t)},ue.unmount=function(e){qn&&qn(e);var t,i=e.__c;i&&i.__H&&(i.__H.__.forEach(function(r){try{Qs(r)}catch(s){t=s}}),i.__H=void 0,t&&ue.__e(t,i.__v))};var Wn=typeof requestAnimationFrame=="function";function rh(e){var t,i=function(){clearTimeout(r),Wn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(i,100);Wn&&(t=requestAnimationFrame(i))}function Qs(e){var t=ne,i=e.__c;typeof i=="function"&&(e.__c=void 0,i()),ne=t}function sa(e){var t=ne;e.__c=e.__(),ne=t}function Ka(e,t){return!e||e.length!==t.length||t.some(function(i,r){return i!==e[r]})}function Ic(e,t){return typeof t=="function"?t(e):t}function Oc(e,t){for(var i in t)e[i]=t[i];return e}function oa(e,t){for(var i in e)if(i!=="__source"&&!(i in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function go(e,t){var i=t(),r=he({t:{__:i,u:t}}),s=r[0].t,o=r[1];return ki(function(){s.__=i,s.u=t,Oo(s)&&o({t:s})},[e,i,t]),Bt(function(){return Oo(s)&&o({t:s}),e(function(){Oo(s)&&o({t:s})})},[e]),i}function Oo(e){var t,i,r=e.u,s=e.__;try{var o=r();return!((t=s)===(i=o)&&(t!==0||1/t==1/i)||t!=t&&i!=i)}catch{return!0}}function bo(e){e()}function Qa(e){return e}function Ga(){return[!1,bo]}var Ya=ki;function io(e,t){this.props=e,this.context=t}function Xa(e,t){function i(s){var o=this.props.ref,a=o==s.ref;return!a&&o&&(o.call?o(null):o.current=null),t?!t(this.props,s)||!a:oa(this.props,s)}function r(s){return this.shouldComponentUpdate=i,K(e,s)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(io.prototype=new ht).isPureReactComponent=!0,io.prototype.shouldComponentUpdate=function(e,t){return oa(this.props,e)||oa(this.state,t)};var Kn=j.__b;j.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Kn&&Kn(e)};var sh=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function xs(e){function t(i){var r=Oc({},i);return delete r.ref,e(r,i.ref||null)}return t.$$typeof=sh,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Qn=function(e,t){return e==null?null:Yt(Yt(e).map(t))},Ja={map:Qn,forEach:Qn,count:function(e){return e?Yt(e).length:0},only:function(e){var t=Yt(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:Yt},oh=j.__e;j.__e=function(e,t,i,r){if(e.then){for(var s,o=t;o=o.__;)if((s=o.__c)&&s.__c)return t.__e==null&&(t.__e=i.__e,t.__k=i.__k),s.__c(e,t)}oh(e,t,i,r)};var Gn=j.unmount;function Lc(e,t,i){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Oc({},e)).__c!=null&&(e.__c.__P===i&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Lc(r,t,i)})),e}function Nc(e,t,i){return e&&i&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Nc(r,t,i)}),e.__c&&e.__c.__P===t&&(e.__e&&i.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=i)),e}function is(){this.__u=0,this.o=null,this.__b=null}function Dc(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Fc(e){var t,i,r;function s(o){if(t||(t=e()).then(function(a){i=a.default||a},function(a){r=a}),r)throw r;if(!i)throw t;return K(i,o)}return s.displayName="Lazy",s.__f=!0,s}function ir(){this.i=null,this.l=null}j.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Gn&&Gn(e)},(is.prototype=new ht).__c=function(e,t){var i=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(i);var s=Dc(r.__v),o=!1,a=function(){o||(o=!0,i.__R=null,s?s(n):n())};i.__R=a;var n=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=Nc(c,c.__c.__P,c.__c.__O)}var d;for(r.setState({__a:r.__b=null});d=r.o.pop();)d.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},is.prototype.componentWillUnmount=function(){this.o=[]},is.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var i=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Lc(this.__b,i,r.__O=r.__P)}this.__b=null}var s=t.__a&&K(Oe,null,e.fallback);return s&&(s.__u&=-33),[K(Oe,null,t.__a?null:e.children),s]};var Yn=function(e,t,i){if(++i[1]===i[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(i=e.i;i;){for(;i.length>3;)i.pop()();if(i[1]<i[0])break;e.i=i=i[2]}};function ah(e){return this.getChildContext=function(){return e.context},e.children}function nh(e){var t=this,i=e.h;t.componentWillUnmount=function(){xr(null,t.v),t.v=null,t.h=null},t.h&&t.h!==i&&t.componentWillUnmount(),t.v||(t.h=i,t.v={nodeType:1,parentNode:i,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),t.h.appendChild(r)},insertBefore:function(r,s){this.childNodes.push(r),t.h.insertBefore(r,s)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.h.removeChild(r)}}),xr(K(ah,{context:t.context},e.__v),t.v)}function Mc(e,t){var i=K(nh,{__v:e,h:t});return i.containerInfo=t,i}(ir.prototype=new ht).__a=function(e){var t=this,i=Dc(t.__v),r=t.l.get(e);return r[0]++,function(s){var o=function(){t.props.revealOrder?(r.push(s),Yn(t,e,r)):s()};i?i(o):o()}},ir.prototype.render=function(e){this.i=null,this.l=new Map;var t=Yt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var i=t.length;i--;)this.l.set(t[i],this.i=[1,0,this.i]);return e.children},ir.prototype.componentDidUpdate=ir.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,i){Yn(e,i,t)})};var Bc=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,lh=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ch=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,dh=/[A-Z0-9]/g,uh=typeof document<"u",hh=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Hc(e,t,i){return t.__k==null&&(t.textContent=""),xr(e,t),typeof i=="function"&&i(),e?e.__c:null}function Vc(e,t,i){return wc(e,t),typeof i=="function"&&i(),e?e.__c:null}ht.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(ht.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Xn=j.event;function ph(){}function fh(){return this.cancelBubble}function mh(){return this.defaultPrevented}j.event=function(e){return Xn&&(e=Xn(e)),e.persist=ph,e.isPropagationStopped=fh,e.isDefaultPrevented=mh,e.nativeEvent=e};var Za,gh={enumerable:!1,configurable:!0,get:function(){return this.class}},Jn=j.vnode;j.vnode=function(e){typeof e.type=="string"&&function(t){var i=t.props,r=t.type,s={},o=r.indexOf("-")===-1;for(var a in i){var n=i[a];if(!(a==="value"&&"defaultValue"in i&&n==null||uh&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var c=a.toLowerCase();a==="defaultValue"&&"value"in i&&i.value==null?a="value":a==="download"&&n===!0?n="":c==="translate"&&n==="no"?n=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?a="ondblclick":c!=="onchange"||r!=="input"&&r!=="textarea"||hh(i.type)?c==="onfocus"?a="onfocusin":c==="onblur"?a="onfocusout":ch.test(a)&&(a=c):c=a="oninput":o&&lh.test(a)?a=a.replace(dh,"-$&").toLowerCase():n===null&&(n=void 0),c==="oninput"&&s[a=c]&&(a="oninputCapture"),s[a]=n}}r=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Yt(i.children).forEach(function(d){d.props.selected=s.value.indexOf(d.props.value)!=-1})),r=="select"&&s.defaultValue!=null&&(s.value=Yt(i.children).forEach(function(d){d.props.selected=s.multiple?s.defaultValue.indexOf(d.props.value)!=-1:s.defaultValue==d.props.value})),i.class&&!i.className?(s.class=i.class,Object.defineProperty(s,"className",gh)):(i.className&&!i.class||i.class&&i.className)&&(s.class=s.className=i.className),t.props=s}(e),e.$$typeof=Bc,Jn&&Jn(e)};var Zn=j.__r;j.__r=function(e){Zn&&Zn(e),Za=e.__c};var el=j.diffed;j.diffed=function(e){el&&el(e);var t=e.props,i=e.__e;i!=null&&e.type==="textarea"&&"value"in t&&t.value!==i.value&&(i.value=t.value==null?"":t.value),Za=null};var Uc={ReactCurrentDispatcher:{current:{readContext:function(e){return Za.__n[e.__c].props.value},useCallback:ti,useContext:J,useDebugValue:ja,useDeferredValue:Qa,useEffect:Bt,useId:Wa,useImperativeHandle:qa,useInsertionEffect:Ya,useLayoutEffect:ki,useMemo:ot,useReducer:mo,useRef:pt,useState:he,useSyncExternalStore:go,useTransition:Ga}}},bh="18.3.1";function qc(e){return K.bind(null,e)}function Er(e){return!!e&&e.$$typeof===Bc}function jc(e){return Er(e)&&e.type===Oe}function Wc(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function Kc(e){return Er(e)?yu.apply(null,arguments):e}function Qc(e){return!!e.__k&&(xr(null,e),!0)}function Gc(e){return e&&(e.base||e.nodeType===1&&e)||null}var Yc=function(e,t){return e(t)},Xc=function(e,t){return e(t)},Jc=Oe,Zc=Er,aa={useState:he,useId:Wa,useReducer:mo,useEffect:Bt,useLayoutEffect:ki,useInsertionEffect:Ya,useTransition:Ga,useDeferredValue:Qa,useSyncExternalStore:go,startTransition:bo,useRef:pt,useImperativeHandle:qa,useMemo:ot,useCallback:ti,useContext:J,useDebugValue:ja,version:"18.3.1",Children:Ja,render:Hc,hydrate:Vc,unmountComponentAtNode:Qc,createPortal:Mc,createElement:K,createContext:He,createFactory:qc,cloneElement:Kc,createRef:mc,Fragment:Oe,isValidElement:Er,isElement:Zc,isFragment:jc,isMemo:Wc,findDOMNode:Gc,Component:ht,PureComponent:io,memo:Xa,forwardRef:xs,flushSync:Xc,unstable_batchedUpdates:Yc,StrictMode:Jc,Suspense:is,SuspenseList:ir,lazy:Fc,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Uc};const D=Object.freeze(Object.defineProperty({__proto__:null,Children:Ja,Component:ht,Fragment:Oe,PureComponent:io,StrictMode:Jc,Suspense:is,SuspenseList:ir,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Uc,cloneElement:Kc,createContext:He,createElement:K,createFactory:qc,createPortal:Mc,createRef:mc,default:aa,findDOMNode:Gc,flushSync:Xc,forwardRef:xs,hydrate:Vc,isElement:Zc,isFragment:jc,isMemo:Wc,isValidElement:Er,lazy:Fc,memo:Xa,render:Hc,startTransition:bo,unmountComponentAtNode:Qc,unstable_batchedUpdates:Yc,useCallback:ti,useContext:J,useDebugValue:ja,useDeferredValue:Qa,useEffect:Bt,useErrorBoundary:th,useId:Wa,useImperativeHandle:qa,useInsertionEffect:Ya,useLayoutEffect:ki,useMemo:ot,useReducer:mo,useRef:pt,useState:he,useSyncExternalStore:go,useTransition:Ga,version:bh},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vh=new Set(["children","localName","ref","style","className"]),tl=new WeakMap,il=(e,t,i,r,s)=>{const o=s==null?void 0:s[t];o===void 0?(e[t]=i,i==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):i!==r&&((a,n,c)=>{let d=tl.get(a);d===void 0&&tl.set(a,d=new Map);let f=d.get(n);c!==void 0?f===void 0?(d.set(n,f={handleEvent:c}),a.addEventListener(n,f)):f.handleEvent=c:f!==void 0&&(d.delete(n),a.removeEventListener(n,f))})(e,o,i)},F=({react:e,tagName:t,elementClass:i,events:r,displayName:s})=>{const o=new Set(Object.keys(r??{})),a=e.forwardRef((n,c)=>{const d=e.useRef(new Map),f=e.useRef(null),u={},p={};for(const[m,g]of Object.entries(n))vh.has(m)?u[m==="className"?"class":m]=g:o.has(m)||m in i.prototype?p[m]=g:u[m]=g;return e.useLayoutEffect(()=>{if(f.current===null)return;const m=new Map;for(const g in p)il(f.current,g,n[g],d.current.get(g),r),d.current.delete(g),m.set(g,n[g]);for(const[g,b]of d.current)il(f.current,g,void 0,b,r);d.current=m}),e.useLayoutEffect(()=>{var m;(m=f.current)==null||m.removeAttribute("defer-hydration")},[]),u.suppressHydrationWarning=!0,e.createElement(t,{...u,ref:e.useCallback(m=>{f.current=m,typeof c=="function"?c(m):c!==null&&(c.current=m)},[c])})});return a.displayName=s??i.name,a};var yh="sl-visually-hidden";fo.define("sl-visually-hidden");F({tagName:yh,elementClass:fo,react:D,events:{},displayName:"SlVisuallyHidden"});var _h=M`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Ar=(e="value")=>(t,i)=>{const r=t.constructor,s=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(o,a,n){var c;const d=r.getPropertyOptions(e),f=typeof d.attribute=="string"?d.attribute:e;if(o===f){const u=d.converter||kr,m=(typeof u=="function"?u:(c=u==null?void 0:u.fromAttribute)!=null?c:kr.fromAttribute)(n,d.type);this[e]!==m&&(this[i]=m)}s.call(this,o,a,n)}},Yi=M`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Vr=new WeakMap,Ur=new WeakMap,qr=new WeakMap,Lo=new WeakSet,Ds=new WeakMap,ii=class{constructor(e,t){this.handleFormData=i=>{const r=this.options.disabled(this.host),s=this.options.name(this.host),o=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!a&&typeof s=="string"&&s.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(n=>{i.formData.append(s,n.toString())}):i.formData.append(s,o.toString()))},this.handleFormSubmit=i=>{var r;const s=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Vr.get(this.form))==null||r.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!s&&!o(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ds.set(this.host,[])},this.handleInteraction=i=>{const r=Ds.get(this.host);r.includes(i.type)||r.push(i.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const r of i)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const r of i)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=ei({form:i=>{const r=i.form;if(r){const o=i.getRootNode().querySelector(`#${r}`);if(o)return o}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var r;return(r=i.disabled)!=null?r:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,r)=>i.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ds.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ds.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Vr.has(this.form)?Vr.get(this.form).add(this.host):Vr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ur.has(this.form)||(Ur.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),qr.has(this.form)||(qr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Vr.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ur.has(this.form)&&(this.form.reportValidity=Ur.get(this.form),Ur.delete(this.form)),qr.has(this.form)&&(this.form.checkValidity=qr.get(this.form),qr.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Lo.add(e):Lo.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&i.setAttribute(r,t.getAttribute(r))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!Lo.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},vo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),wh=Object.freeze(_s(ei({},vo),{valid:!1,valueMissing:!0})),xh=Object.freeze(_s(ei({},vo),{valid:!1,customError:!0})),We=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const r=i.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function kh(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(i+=r.textContent)}),i}function A(e,t){const i=ei({waitUntilFirstUpdate:!1},t);return(r,s)=>{const{update:o}=r,a=Array.isArray(e)?e:[e];r.update=function(n){a.forEach(c=>{const d=c;if(n.has(d)){const f=n.get(d),u=this[d];f!==u&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[s](f,u)}}),o.call(this,n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ks=e=>(...t)=>({_$litDirective$:e,values:t});let Cs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=ks(class extends Cs{constructor(e){var t;if(super(e),e.type!==Dt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const i=e.element.classList;for(const o of this.st)o in t||(i.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(s=this.nt)!=null&&s.has(o)||(a?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return st}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=e=>e??le;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ch=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,ed=e=>e.strings===void 0,Sh={},$h=(e,t=Sh)=>e._$AH=t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=ks(class extends Cs{constructor(e){if(super(e),e.type!==Dt.PROPERTY&&e.type!==Dt.ATTRIBUTE&&e.type!==Dt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ed(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===st||t===le)return t;const i=e.element,r=e.name;if(e.type===Dt.PROPERTY){if(t===i[r])return st}else if(e.type===Dt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return st}else if(e.type===Dt.ATTRIBUTE&&i.getAttribute(r)===t+"")return st;return $h(e),t}});var Le=class extends N{constructor(){super(...arguments),this.formControlController=new ii(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new We(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return $`
      <div
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${H({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${L(this.value)}
            .checked=${ji(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Le.styles=[V,Yi,_h];l([P('input[type="checkbox"]')],Le.prototype,"input",2);l([B()],Le.prototype,"hasFocus",2);l([h()],Le.prototype,"title",2);l([h()],Le.prototype,"name",2);l([h()],Le.prototype,"value",2);l([h({reflect:!0})],Le.prototype,"size",2);l([h({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],Le.prototype,"checked",2);l([Ar("checked")],Le.prototype,"defaultChecked",2);l([h({reflect:!0})],Le.prototype,"form",2);l([h({type:Boolean,reflect:!0})],Le.prototype,"required",2);l([h({attribute:"help-text"})],Le.prototype,"helpText",2);l([A("checked",{waitUntilFirstUpdate:!0})],Le.prototype,"handleCheckedChange",1);l([A("disabled",{waitUntilFirstUpdate:!0})],Le.prototype,"handleDisabledChange",1);var Eh="sl-switch";Le.define("sl-switch");F({tagName:Eh,elementClass:Le,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var Ah=M`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,zh=M`
  :host {
    display: contents;
  }
`,zr=class extends N{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],t.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};zr.styles=[V,zh];l([h({type:Boolean,reflect:!0})],zr.prototype,"disabled",2);l([A("disabled",{waitUntilFirstUpdate:!0})],zr.prototype,"handleDisabledChange",1);function Rh(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var na=new Set;function Th(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ph(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function rs(e){if(na.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Th()+Ph();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),t<2&&(i=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function ss(e){na.delete(e),na.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function la(e,t,i="vertical",r="smooth"){const s=Rh(e,t),o=s.top+t.scrollTop,a=s.left+t.scrollLeft,n=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,d=t.scrollTop,f=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(a<n?t.scrollTo({left:a,behavior:r}):a+e.clientWidth>c&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:r})),(i==="vertical"||i==="both")&&(o<d?t.scrollTo({top:o,behavior:r}):o+e.clientHeight>f&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:r}))}var Ih=M`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Oh={name:"default",resolver:e=>wu(`assets/icons/${e}.svg`)},Lh=Oh,rl={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Nh={name:"system",resolver:e=>e in rl?`data:image/svg+xml,${encodeURIComponent(rl[e])}`:""},Dh=Nh,Fh=[Lh,Dh],ca=[];function Mh(e){ca.push(e)}function Bh(e){ca=ca.filter(t=>t!==e)}function sl(e){return Fh.find(t=>t.name===e)}var Hh=M`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,jr=Symbol(),Fs=Symbol(),No,Do=new Map,ae=class extends N{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let r;if(t!=null&&t.spriteSheet)return this.svg=$`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?jr:Fs}catch{return Fs}try{const s=document.createElement("div");s.innerHTML=await r.text();const o=s.firstElementChild;if(((i=o==null?void 0:o.tagName)==null?void 0:i.toLowerCase())!=="svg")return jr;No||(No=new DOMParser);const n=No.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):jr}catch{return jr}}connectedCallback(){super.connectedCallback(),Mh(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Bh(this)}getIconSource(){const e=sl(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),r=i?sl(this.library):void 0;if(!t){this.svg=null;return}let s=Do.get(t);if(s||(s=this.resolveIcon(t,r),Do.set(t,s)),!this.initialRender)return;const o=await s;if(o===Fs&&Do.delete(t),t===this.getIconSource().url){if(Ch(o)){if(this.svg=o,r){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&a&&r.mutator(a)}return}switch(o){case Fs:case jr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=r==null?void 0:r.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ae.styles=[V,Hh];l([B()],ae.prototype,"svg",2);l([h({reflect:!0})],ae.prototype,"name",2);l([h()],ae.prototype,"src",2);l([h()],ae.prototype,"label",2);l([h({reflect:!0})],ae.prototype,"library",2);l([A("label")],ae.prototype,"handleLabelChange",1);l([A(["name","src","library"])],ae.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const td=Symbol.for(""),Vh=e=>{if((e==null?void 0:e.r)===td)return e==null?void 0:e._$litStatic$},ro=(e,...t)=>({_$litStatic$:t.reduce((i,r,s)=>i+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[s+1],e[0]),r:td}),ol=new Map,Uh=e=>(t,...i)=>{const r=i.length;let s,o;const a=[],n=[];let c,d=0,f=!1;for(;d<r;){for(c=t[d];d<r&&(o=i[d],(s=Vh(o))!==void 0);)c+=s+t[++d],f=!0;d!==r&&n.push(o),a.push(c),d++}if(d===r&&a.push(t[r]),f){const u=a.join("$$lit$$");(t=ol.get(u))===void 0&&(a.raw=a,ol.set(u,t=a)),i=n}return e(t,...i)},os=Uh($);var ke=class extends N{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ro`a`:ro`button`;return os`
      <${t}
        part="base"
        class=${H({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${L(e?void 0:this.disabled)}
        type=${L(e?void 0:"button")}
        href=${L(e?this.href:void 0)}
        target=${L(e?this.target:void 0)}
        download=${L(e?this.download:void 0)}
        rel=${L(e&&this.target?"noreferrer noopener":void 0)}
        role=${L(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${L(this.name)}
          library=${L(this.library)}
          src=${L(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};ke.styles=[V,Ih];ke.dependencies={"sl-icon":ae};l([P(".icon-button")],ke.prototype,"button",2);l([B()],ke.prototype,"hasFocus",2);l([h()],ke.prototype,"name",2);l([h()],ke.prototype,"library",2);l([h()],ke.prototype,"src",2);l([h()],ke.prototype,"href",2);l([h()],ke.prototype,"target",2);l([h()],ke.prototype,"download",2);l([h()],ke.prototype,"label",2);l([h({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);const da=new Set,rr=new Map;let Pi,en="ltr",tn="en";const id=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(id){const e=new MutationObserver(sd);en=document.documentElement.dir||"ltr",tn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rd(...e){e.map(t=>{const i=t.$code.toLowerCase();rr.has(i)?rr.set(i,Object.assign(Object.assign({},rr.get(i)),t)):rr.set(i,t),Pi||(Pi=t)}),sd()}function sd(){id&&(en=document.documentElement.dir||"ltr",tn=document.documentElement.lang||navigator.language),[...da.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let qh=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){da.add(this.host)}hostDisconnected(){da.delete(this.host)}dir(){return`${this.host.dir||en}`.toLowerCase()}lang(){return`${this.host.lang||tn}`.toLowerCase()}getTranslationData(t){var i,r;const s=new Intl.Locale(t.replace(/_/g,"-")),o=s==null?void 0:s.language.toLowerCase(),a=(r=(i=s==null?void 0:s.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",n=rr.get(`${o}-${a}`),c=rr.get(o);return{locale:s,language:o,region:a,primary:n,secondary:c}}exists(t,i){var r;const{primary:s,secondary:o}=this.getTranslationData((r=i.lang)!==null&&r!==void 0?r:this.lang());return i=Object.assign({includeFallback:!1},i),!!(s&&s[t]||o&&o[t]||i.includeFallback&&Pi&&Pi[t])}term(t,...i){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let o;if(r&&r[t])o=r[t];else if(s&&s[t])o=s[t];else if(Pi&&Pi[t])o=Pi[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...i):o}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,i)}};var od={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};rd(od);var jh=od,ee=class extends qh{};rd(jh);var ze=class extends N{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ee(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{if(t.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(t.some(i=>i.attributeName==="active")){const r=t.filter(s=>s.attributeName==="active"&&s.target.tagName.toLowerCase()==="sl-tab").map(s=>s.target).find(s=>s.active);r&&this.setActiveTab(r)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((i,r)=>{var s;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),r.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("sl-tab");(i==null?void 0:i.closest("sl-tab-group"))===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const s=this.tabs.find(n=>n.matches(":focus")),o=this.localize.dir()==="rtl";let a=null;if((s==null?void 0:s.tagName.toLowerCase())==="sl-tab"){if(e.key==="Home")a=this.focusableTabs[0];else if(e.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const n=this.tabs.findIndex(c=>c===s);a=this.findNextFocusableTab(n,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const n=this.tabs.findIndex(c=>c===s);a=this.findNextFocusableTab(n,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===a?0:-1}),["top","bottom"].includes(this.placement)&&la(a,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=ei({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.activeTab=e,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var s;return r.active=r.name===((s=this.activeTab)==null?void 0:s.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&la(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(i=>i.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,i=e.clientHeight,r=this.localize.dir()==="rtl",s=this.getAllTabs(),a=s.slice(0,s.indexOf(e)).reduce((n,c)=>({left:n.left+c.clientWidth,top:n.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let i=null;const r=t==="forward"?1:-1;let s=e+r;for(;e<this.tabs.length;){if(i=this.tabs[s]||null,i===null){t==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;s+=r}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(i=>i.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${H({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${H({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${H({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ze.styles=[V,Ah];ze.dependencies={"sl-icon-button":ke,"sl-resize-observer":zr};l([P(".tab-group")],ze.prototype,"tabGroup",2);l([P(".tab-group__body")],ze.prototype,"body",2);l([P(".tab-group__nav")],ze.prototype,"nav",2);l([P(".tab-group__indicator")],ze.prototype,"indicator",2);l([B()],ze.prototype,"hasScrollControls",2);l([B()],ze.prototype,"shouldHideScrollStartButton",2);l([B()],ze.prototype,"shouldHideScrollEndButton",2);l([h()],ze.prototype,"placement",2);l([h()],ze.prototype,"activation",2);l([h({attribute:"no-scroll-controls",type:Boolean})],ze.prototype,"noScrollControls",2);l([h({attribute:"fixed-scroll-controls",type:Boolean})],ze.prototype,"fixedScrollControls",2);l([ws({passive:!0})],ze.prototype,"updateScrollButtons",1);l([A("noScrollControls",{waitUntilFirstUpdate:!0})],ze.prototype,"updateScrollControls",1);l([A("placement",{waitUntilFirstUpdate:!0})],ze.prototype,"syncIndicator",1);var Wh="sl-tab-group";ze.define("sl-tab-group");F({tagName:Wh,elementClass:ze,react:D,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var Kh=M`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Qh=0,Rr=class extends N{constructor(){super(...arguments),this.attrId=++Qh,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${H({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Rr.styles=[V,Kh];l([h({reflect:!0})],Rr.prototype,"name",2);l([h({type:Boolean,reflect:!0})],Rr.prototype,"active",2);l([A("active")],Rr.prototype,"handleActiveChange",1);var Gh="sl-tab-panel";Rr.define("sl-tab-panel");F({tagName:Gh,elementClass:Rr,react:D,events:{},displayName:"SlTabPanel"});var Yh=M`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,ri=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${H({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?$`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};ri.styles=[V,Yh];ri.dependencies={"sl-icon-button":ke};l([h({reflect:!0})],ri.prototype,"variant",2);l([h({reflect:!0})],ri.prototype,"size",2);l([h({type:Boolean,reflect:!0})],ri.prototype,"pill",2);l([h({type:Boolean})],ri.prototype,"removable",2);var Xh="sl-tag";ri.define("sl-tag");var Jh=F({tagName:Xh,elementClass:ri,react:D,events:{onSlRemove:"sl-remove"},displayName:"SlTag"}),Zh=Jh,ep=M`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,tp=M`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const yi=Math.min,rt=Math.max,so=Math.round,Ms=Math.floor,Mt=e=>({x:e,y:e}),ip={left:"right",right:"left",bottom:"top",top:"bottom"},rp={start:"end",end:"start"};function ua(e,t,i){return rt(e,yi(t,i))}function Tr(e,t){return typeof e=="function"?e(t):e}function _i(e){return e.split("-")[0]}function Pr(e){return e.split("-")[1]}function ad(e){return e==="x"?"y":"x"}function rn(e){return e==="y"?"height":"width"}function Wi(e){return["top","bottom"].includes(_i(e))?"y":"x"}function sn(e){return ad(Wi(e))}function sp(e,t,i){i===void 0&&(i=!1);const r=Pr(e),s=sn(e),o=rn(s);let a=s==="x"?r===(i?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=oo(a)),[a,oo(a)]}function op(e){const t=oo(e);return[ha(e),t,ha(t)]}function ha(e){return e.replace(/start|end/g,t=>rp[t])}function ap(e,t,i){const r=["left","right"],s=["right","left"],o=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?s:r:t?r:s;case"left":case"right":return t?o:a;default:return[]}}function np(e,t,i,r){const s=Pr(e);let o=ap(_i(e),i==="start",r);return s&&(o=o.map(a=>a+"-"+s),t&&(o=o.concat(o.map(ha)))),o}function oo(e){return e.replace(/left|right|bottom|top/g,t=>ip[t])}function lp(e){return{top:0,right:0,bottom:0,left:0,...e}}function nd(e){return typeof e!="number"?lp(e):{top:e,right:e,bottom:e,left:e}}function ao(e){const{x:t,y:i,width:r,height:s}=e;return{width:r,height:s,top:i,left:t,right:t+r,bottom:i+s,x:t,y:i}}function al(e,t,i){let{reference:r,floating:s}=e;const o=Wi(t),a=sn(t),n=rn(a),c=_i(t),d=o==="y",f=r.x+r.width/2-s.width/2,u=r.y+r.height/2-s.height/2,p=r[n]/2-s[n]/2;let m;switch(c){case"top":m={x:f,y:r.y-s.height};break;case"bottom":m={x:f,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:u};break;case"left":m={x:r.x-s.width,y:u};break;default:m={x:r.x,y:r.y}}switch(Pr(t)){case"start":m[a]-=p*(i&&d?-1:1);break;case"end":m[a]+=p*(i&&d?-1:1);break}return m}const cp=async(e,t,i)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=i,n=o.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:f,y:u}=al(d,r,c),p=r,m={},g=0;for(let b=0;b<n.length;b++){const{name:_,fn:w}=n[b],{x:y,y:C,data:k,reset:S}=await w({x:f,y:u,initialPlacement:r,placement:p,strategy:s,middlewareData:m,rects:d,platform:a,elements:{reference:e,floating:t}});f=y??f,u=C??u,m={...m,[_]:{...m[_],...k}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(p=S.placement),S.rects&&(d=S.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):S.rects),{x:f,y:u}=al(d,p,c)),b=-1)}return{x:f,y:u,placement:p,strategy:s,middlewareData:m}};async function on(e,t){var i;t===void 0&&(t={});const{x:r,y:s,platform:o,rects:a,elements:n,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:p=!1,padding:m=0}=Tr(t,e),g=nd(m),_=n[p?u==="floating"?"reference":"floating":u],w=ao(await o.getClippingRect({element:(i=await(o.isElement==null?void 0:o.isElement(_)))==null||i?_:_.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(n.floating)),boundary:d,rootBoundary:f,strategy:c})),y=u==="floating"?{x:r,y:s,width:a.floating.width,height:a.floating.height}:a.reference,C=await(o.getOffsetParent==null?void 0:o.getOffsetParent(n.floating)),k=await(o.isElement==null?void 0:o.isElement(C))?await(o.getScale==null?void 0:o.getScale(C))||{x:1,y:1}:{x:1,y:1},S=ao(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:y,offsetParent:C,strategy:c}):y);return{top:(w.top-S.top+g.top)/k.y,bottom:(S.bottom-w.bottom+g.bottom)/k.y,left:(w.left-S.left+g.left)/k.x,right:(S.right-w.right+g.right)/k.x}}const dp=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:r,placement:s,rects:o,platform:a,elements:n,middlewareData:c}=t,{element:d,padding:f=0}=Tr(e,t)||{};if(d==null)return{};const u=nd(f),p={x:i,y:r},m=sn(s),g=rn(m),b=await a.getDimensions(d),_=m==="y",w=_?"top":"left",y=_?"bottom":"right",C=_?"clientHeight":"clientWidth",k=o.reference[g]+o.reference[m]-p[m]-o.floating[g],S=p[m]-o.reference[m],z=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d));let I=z?z[C]:0;(!I||!await(a.isElement==null?void 0:a.isElement(z)))&&(I=n.floating[C]||o.floating[g]);const R=k/2-S/2,E=I/2-b[g]/2-1,T=yi(u[w],E),W=yi(u[y],E),te=T,Fe=I-b[g]-W,_e=I/2-b[g]/2+R,_t=ua(te,_e,Fe),Tt=!c.arrow&&Pr(s)!=null&&_e!==_t&&o.reference[g]/2-(_e<te?T:W)-b[g]/2<0,Pt=Tt?_e<te?_e-te:_e-Fe:0;return{[m]:p[m]+Pt,data:{[m]:_t,centerOffset:_e-_t-Pt,...Tt&&{alignmentOffset:Pt}},reset:Tt}}}),up=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,r;const{placement:s,middlewareData:o,rects:a,initialPlacement:n,platform:c,elements:d}=t,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,..._}=Tr(e,t);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const w=_i(s),y=Wi(n),C=_i(n)===n,k=await(c.isRTL==null?void 0:c.isRTL(d.floating)),S=p||(C||!b?[oo(n)]:op(n)),z=g!=="none";!p&&z&&S.push(...np(n,b,g,k));const I=[n,...S],R=await on(t,_),E=[];let T=((r=o.flip)==null?void 0:r.overflows)||[];if(f&&E.push(R[w]),u){const _e=sp(s,a,k);E.push(R[_e[0]],R[_e[1]])}if(T=[...T,{placement:s,overflows:E}],!E.every(_e=>_e<=0)){var W,te;const _e=(((W=o.flip)==null?void 0:W.index)||0)+1,_t=I[_e];if(_t)return{data:{index:_e,overflows:T},reset:{placement:_t}};let Tt=(te=T.filter(Pt=>Pt.overflows[0]<=0).sort((Pt,ai)=>Pt.overflows[1]-ai.overflows[1])[0])==null?void 0:te.placement;if(!Tt)switch(m){case"bestFit":{var Fe;const Pt=(Fe=T.filter(ai=>{if(z){const ni=Wi(ai.placement);return ni===y||ni==="y"}return!0}).map(ai=>[ai.placement,ai.overflows.filter(ni=>ni>0).reduce((ni,pu)=>ni+pu,0)]).sort((ai,ni)=>ai[1]-ni[1])[0])==null?void 0:Fe[0];Pt&&(Tt=Pt);break}case"initialPlacement":Tt=n;break}if(s!==Tt)return{reset:{placement:Tt}}}return{}}}};async function hp(e,t){const{placement:i,platform:r,elements:s}=e,o=await(r.isRTL==null?void 0:r.isRTL(s.floating)),a=_i(i),n=Pr(i),c=Wi(i)==="y",d=["left","top"].includes(a)?-1:1,f=o&&c?-1:1,u=Tr(t,e);let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return n&&typeof g=="number"&&(m=n==="end"?g*-1:g),c?{x:m*f,y:p*d}:{x:p*d,y:m*f}}const pp=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,r;const{x:s,y:o,placement:a,middlewareData:n}=t,c=await hp(t,e);return a===((i=n.offset)==null?void 0:i.placement)&&(r=n.arrow)!=null&&r.alignmentOffset?{}:{x:s+c.x,y:o+c.y,data:{...c,placement:a}}}}},fp=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:r,placement:s}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:n={fn:_=>{let{x:w,y}=_;return{x:w,y}}},...c}=Tr(e,t),d={x:i,y:r},f=await on(t,c),u=Wi(_i(s)),p=ad(u);let m=d[p],g=d[u];if(o){const _=p==="y"?"top":"left",w=p==="y"?"bottom":"right",y=m+f[_],C=m-f[w];m=ua(y,m,C)}if(a){const _=u==="y"?"top":"left",w=u==="y"?"bottom":"right",y=g+f[_],C=g-f[w];g=ua(y,g,C)}const b=n.fn({...t,[p]:m,[u]:g});return{...b,data:{x:b.x-i,y:b.y-r,enabled:{[p]:o,[u]:a}}}}}},mp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,r;const{placement:s,rects:o,platform:a,elements:n}=t,{apply:c=()=>{},...d}=Tr(e,t),f=await on(t,d),u=_i(s),p=Pr(s),m=Wi(s)==="y",{width:g,height:b}=o.floating;let _,w;u==="top"||u==="bottom"?(_=u,w=p===(await(a.isRTL==null?void 0:a.isRTL(n.floating))?"start":"end")?"left":"right"):(w=u,_=p==="end"?"top":"bottom");const y=b-f.top-f.bottom,C=g-f.left-f.right,k=yi(b-f[_],y),S=yi(g-f[w],C),z=!t.middlewareData.shift;let I=k,R=S;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(R=C),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(I=y),z&&!p){const T=rt(f.left,0),W=rt(f.right,0),te=rt(f.top,0),Fe=rt(f.bottom,0);m?R=g-2*(T!==0||W!==0?T+W:rt(f.left,f.right)):I=b-2*(te!==0||Fe!==0?te+Fe:rt(f.top,f.bottom))}await c({...t,availableWidth:R,availableHeight:I});const E=await a.getDimensions(n.floating);return g!==E.width||b!==E.height?{reset:{rects:!0}}:{}}}};function yo(){return typeof window<"u"}function Ir(e){return ld(e)?(e.nodeName||"").toLowerCase():"#document"}function at(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function qt(e){var t;return(t=(ld(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ld(e){return yo()?e instanceof Node||e instanceof at(e).Node:!1}function Ct(e){return yo()?e instanceof Element||e instanceof at(e).Element:!1}function Ht(e){return yo()?e instanceof HTMLElement||e instanceof at(e).HTMLElement:!1}function nl(e){return!yo()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof at(e).ShadowRoot}function Ss(e){const{overflow:t,overflowX:i,overflowY:r,display:s}=St(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(s)}function gp(e){return["table","td","th"].includes(Ir(e))}function _o(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function wo(e){const t=an(),i=Ct(e)?St(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>i[r]?i[r]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(i.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(i.contain||"").includes(r))}function bp(e){let t=wi(e);for(;Ht(t)&&!$r(t);){if(wo(t))return t;if(_o(t))return null;t=wi(t)}return null}function an(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function $r(e){return["html","body","#document"].includes(Ir(e))}function St(e){return at(e).getComputedStyle(e)}function xo(e){return Ct(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function wi(e){if(Ir(e)==="html")return e;const t=e.assignedSlot||e.parentNode||nl(e)&&e.host||qt(e);return nl(t)?t.host:t}function cd(e){const t=wi(e);return $r(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ht(t)&&Ss(t)?t:cd(t)}function us(e,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const s=cd(e),o=s===((r=e.ownerDocument)==null?void 0:r.body),a=at(s);if(o){const n=pa(a);return t.concat(a,a.visualViewport||[],Ss(s)?s:[],n&&i?us(n):[])}return t.concat(s,us(s,[],i))}function pa(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function dd(e){const t=St(e);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const s=Ht(e),o=s?e.offsetWidth:i,a=s?e.offsetHeight:r,n=so(i)!==o||so(r)!==a;return n&&(i=o,r=a),{width:i,height:r,$:n}}function nn(e){return Ct(e)?e:e.contextElement}function or(e){const t=nn(e);if(!Ht(t))return Mt(1);const i=t.getBoundingClientRect(),{width:r,height:s,$:o}=dd(t);let a=(o?so(i.width):i.width)/r,n=(o?so(i.height):i.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!n||!Number.isFinite(n))&&(n=1),{x:a,y:n}}const vp=Mt(0);function ud(e){const t=at(e);return!an()||!t.visualViewport?vp:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function yp(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==at(e)?!1:t}function Ki(e,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const s=e.getBoundingClientRect(),o=nn(e);let a=Mt(1);t&&(r?Ct(r)&&(a=or(r)):a=or(e));const n=yp(o,i,r)?ud(o):Mt(0);let c=(s.left+n.x)/a.x,d=(s.top+n.y)/a.y,f=s.width/a.x,u=s.height/a.y;if(o){const p=at(o),m=r&&Ct(r)?at(r):r;let g=p,b=pa(g);for(;b&&r&&m!==g;){const _=or(b),w=b.getBoundingClientRect(),y=St(b),C=w.left+(b.clientLeft+parseFloat(y.paddingLeft))*_.x,k=w.top+(b.clientTop+parseFloat(y.paddingTop))*_.y;c*=_.x,d*=_.y,f*=_.x,u*=_.y,c+=C,d+=k,g=at(b),b=pa(g)}}return ao({width:f,height:u,x:c,y:d})}function ln(e,t){const i=xo(e).scrollLeft;return t?t.left+i:Ki(qt(e)).left+i}function hd(e,t,i){i===void 0&&(i=!1);const r=e.getBoundingClientRect(),s=r.left+t.scrollLeft-(i?0:ln(e,r)),o=r.top+t.scrollTop;return{x:s,y:o}}function _p(e){let{elements:t,rect:i,offsetParent:r,strategy:s}=e;const o=s==="fixed",a=qt(r),n=t?_o(t.floating):!1;if(r===a||n&&o)return i;let c={scrollLeft:0,scrollTop:0},d=Mt(1);const f=Mt(0),u=Ht(r);if((u||!u&&!o)&&((Ir(r)!=="body"||Ss(a))&&(c=xo(r)),Ht(r))){const m=Ki(r);d=or(r),f.x=m.x+r.clientLeft,f.y=m.y+r.clientTop}const p=a&&!u&&!o?hd(a,c,!0):Mt(0);return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-c.scrollLeft*d.x+f.x+p.x,y:i.y*d.y-c.scrollTop*d.y+f.y+p.y}}function wp(e){return Array.from(e.getClientRects())}function xp(e){const t=qt(e),i=xo(e),r=e.ownerDocument.body,s=rt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=rt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-i.scrollLeft+ln(e);const n=-i.scrollTop;return St(r).direction==="rtl"&&(a+=rt(t.clientWidth,r.clientWidth)-s),{width:s,height:o,x:a,y:n}}function kp(e,t){const i=at(e),r=qt(e),s=i.visualViewport;let o=r.clientWidth,a=r.clientHeight,n=0,c=0;if(s){o=s.width,a=s.height;const d=an();(!d||d&&t==="fixed")&&(n=s.offsetLeft,c=s.offsetTop)}return{width:o,height:a,x:n,y:c}}function Cp(e,t){const i=Ki(e,!0,t==="fixed"),r=i.top+e.clientTop,s=i.left+e.clientLeft,o=Ht(e)?or(e):Mt(1),a=e.clientWidth*o.x,n=e.clientHeight*o.y,c=s*o.x,d=r*o.y;return{width:a,height:n,x:c,y:d}}function ll(e,t,i){let r;if(t==="viewport")r=kp(e,i);else if(t==="document")r=xp(qt(e));else if(Ct(t))r=Cp(t,i);else{const s=ud(e);r={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return ao(r)}function pd(e,t){const i=wi(e);return i===t||!Ct(i)||$r(i)?!1:St(i).position==="fixed"||pd(i,t)}function Sp(e,t){const i=t.get(e);if(i)return i;let r=us(e,[],!1).filter(n=>Ct(n)&&Ir(n)!=="body"),s=null;const o=St(e).position==="fixed";let a=o?wi(e):e;for(;Ct(a)&&!$r(a);){const n=St(a),c=wo(a);!c&&n.position==="fixed"&&(s=null),(o?!c&&!s:!c&&n.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ss(a)&&!c&&pd(e,a))?r=r.filter(f=>f!==a):s=n,a=wi(a)}return t.set(e,r),r}function $p(e){let{element:t,boundary:i,rootBoundary:r,strategy:s}=e;const a=[...i==="clippingAncestors"?_o(t)?[]:Sp(t,this._c):[].concat(i),r],n=a[0],c=a.reduce((d,f)=>{const u=ll(t,f,s);return d.top=rt(u.top,d.top),d.right=yi(u.right,d.right),d.bottom=yi(u.bottom,d.bottom),d.left=rt(u.left,d.left),d},ll(t,n,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ep(e){const{width:t,height:i}=dd(e);return{width:t,height:i}}function Ap(e,t,i){const r=Ht(t),s=qt(t),o=i==="fixed",a=Ki(e,!0,o,t);let n={scrollLeft:0,scrollTop:0};const c=Mt(0);if(r||!r&&!o)if((Ir(t)!=="body"||Ss(s))&&(n=xo(t)),r){const p=Ki(t,!0,o,t);c.x=p.x+t.clientLeft,c.y=p.y+t.clientTop}else s&&(c.x=ln(s));const d=s&&!r&&!o?hd(s,n):Mt(0),f=a.left+n.scrollLeft-c.x-d.x,u=a.top+n.scrollTop-c.y-d.y;return{x:f,y:u,width:a.width,height:a.height}}function Fo(e){return St(e).position==="static"}function cl(e,t){if(!Ht(e)||St(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return qt(e)===i&&(i=i.ownerDocument.body),i}function fd(e,t){const i=at(e);if(_o(e))return i;if(!Ht(e)){let s=wi(e);for(;s&&!$r(s);){if(Ct(s)&&!Fo(s))return s;s=wi(s)}return i}let r=cl(e,t);for(;r&&gp(r)&&Fo(r);)r=cl(r,t);return r&&$r(r)&&Fo(r)&&!wo(r)?i:r||bp(e)||i}const zp=async function(e){const t=this.getOffsetParent||fd,i=this.getDimensions,r=await i(e.floating);return{reference:Ap(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Rp(e){return St(e).direction==="rtl"}const Gs={convertOffsetParentRelativeRectToViewportRelativeRect:_p,getDocumentElement:qt,getClippingRect:$p,getOffsetParent:fd,getElementRects:zp,getClientRects:wp,getDimensions:Ep,getScale:or,isElement:Ct,isRTL:Rp};function md(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Tp(e,t){let i=null,r;const s=qt(e);function o(){var n;clearTimeout(r),(n=i)==null||n.disconnect(),i=null}function a(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();const d=e.getBoundingClientRect(),{left:f,top:u,width:p,height:m}=d;if(n||t(),!p||!m)return;const g=Ms(u),b=Ms(s.clientWidth-(f+p)),_=Ms(s.clientHeight-(u+m)),w=Ms(f),C={rootMargin:-g+"px "+-b+"px "+-_+"px "+-w+"px",threshold:rt(0,yi(1,c))||1};let k=!0;function S(z){const I=z[0].intersectionRatio;if(I!==c){if(!k)return a();I?a(!1,I):r=setTimeout(()=>{a(!1,1e-7)},1e3)}I===1&&!md(d,e.getBoundingClientRect())&&a(),k=!1}try{i=new IntersectionObserver(S,{...C,root:s.ownerDocument})}catch{i=new IntersectionObserver(S,C)}i.observe(e)}return a(!0),o}function Pp(e,t,i,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,d=nn(e),f=s||o?[...d?us(d):[],...us(t)]:[];f.forEach(w=>{s&&w.addEventListener("scroll",i,{passive:!0}),o&&w.addEventListener("resize",i)});const u=d&&n?Tp(d,i):null;let p=-1,m=null;a&&(m=new ResizeObserver(w=>{let[y]=w;y&&y.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(t)})),i()}),d&&!c&&m.observe(d),m.observe(t));let g,b=c?Ki(e):null;c&&_();function _(){const w=Ki(e);b&&!md(b,w)&&i(),b=w,g=requestAnimationFrame(_)}return i(),()=>{var w;f.forEach(y=>{s&&y.removeEventListener("scroll",i),o&&y.removeEventListener("resize",i)}),u==null||u(),(w=m)==null||w.disconnect(),m=null,c&&cancelAnimationFrame(g)}}const Ip=pp,Op=fp,Lp=up,dl=mp,Np=dp,Dp=(e,t,i)=>{const r=new Map,s={platform:Gs,...i},o={...s.platform,_c:r};return cp(e,t,{...s,platform:o})};function Fp(e){return Mp(e)}function Mo(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Mp(e){for(let t=e;t;t=Mo(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Mo(e);t;t=Mo(t)){if(!(t instanceof Element))continue;const i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||wo(i)||t.tagName==="BODY"))return t}return null}function Bp(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var ie=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let r=0,s=0,o=0,a=0,n=0,c=0,d=0,f=0;i?e.top<t.top?(r=e.left,s=e.bottom,o=e.right,a=e.bottom,n=t.left,c=t.top,d=t.right,f=t.top):(r=t.left,s=t.bottom,o=t.right,a=t.bottom,n=e.left,c=e.top,d=e.right,f=e.top):e.left<t.left?(r=e.right,s=e.top,o=t.left,a=t.top,n=e.right,c=e.bottom,d=t.left,f=t.bottom):(r=t.right,s=t.top,o=e.left,a=e.top,n=t.right,c=t.bottom,d=e.left,f=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Bp(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Pp(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Ip({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(dl({apply:({rects:i})=>{const r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${i.reference.width}px`:"",this.popup.style.height=s?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Lp({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Op({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(dl({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Np({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?i=>Gs.getOffsetParent(i,Fp):Gs.getOffsetParent;Dp(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:_s(ei({},Gs),{getOffsetParent:t})}).then(({x:i,y:r,middlewareData:s,placement:o})=>{const a=this.localize.dir()==="rtl",n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${i}px`,top:`${r}px`}),this.arrow){const c=s.arrow.x,d=s.arrow.y;let f="",u="",p="",m="";if(this.arrowPlacement==="start"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=a?g:"",m=a?"":g}else if(this.arrowPlacement==="end"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=a?"":g,m=a?g:"",p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof c=="number"?`${c}px`:"",f=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:f,right:u,bottom:p,left:m,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${H({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${H({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ie.styles=[V,tp];l([P(".popup")],ie.prototype,"popup",2);l([P(".popup__arrow")],ie.prototype,"arrowEl",2);l([h()],ie.prototype,"anchor",2);l([h({type:Boolean,reflect:!0})],ie.prototype,"active",2);l([h({reflect:!0})],ie.prototype,"placement",2);l([h({reflect:!0})],ie.prototype,"strategy",2);l([h({type:Number})],ie.prototype,"distance",2);l([h({type:Number})],ie.prototype,"skidding",2);l([h({type:Boolean})],ie.prototype,"arrow",2);l([h({attribute:"arrow-placement"})],ie.prototype,"arrowPlacement",2);l([h({attribute:"arrow-padding",type:Number})],ie.prototype,"arrowPadding",2);l([h({type:Boolean})],ie.prototype,"flip",2);l([h({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ie.prototype,"flipFallbackPlacements",2);l([h({attribute:"flip-fallback-strategy"})],ie.prototype,"flipFallbackStrategy",2);l([h({type:Object})],ie.prototype,"flipBoundary",2);l([h({attribute:"flip-padding",type:Number})],ie.prototype,"flipPadding",2);l([h({type:Boolean})],ie.prototype,"shift",2);l([h({type:Object})],ie.prototype,"shiftBoundary",2);l([h({attribute:"shift-padding",type:Number})],ie.prototype,"shiftPadding",2);l([h({attribute:"auto-size"})],ie.prototype,"autoSize",2);l([h()],ie.prototype,"sync",2);l([h({type:Object})],ie.prototype,"autoSizeBoundary",2);l([h({attribute:"auto-size-padding",type:Number})],ie.prototype,"autoSizePadding",2);l([h({attribute:"hover-bridge",type:Boolean})],ie.prototype,"hoverBridge",2);var gd=new Map,Hp=new WeakMap;function Vp(e){return e??{keyframes:[],options:{duration:0}}}function ul(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function oe(e,t){gd.set(e,Vp(t))}function ce(e,t,i){const r=Hp.get(e);if(r!=null&&r[t])return ul(r[t],i.dir);const s=gd.get(t);return s?ul(s,i.dir):{keyframes:[],options:{duration:0}}}function je(e,t){return new Promise(i=>{function r(s){s.target===e&&(e.removeEventListener(t,r),i())}e.addEventListener(t,r)})}function be(e,t,i){return new Promise(r=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,_s(ei({},i),{duration:fa()?0:i.duration}));s.addEventListener("cancel",r,{once:!0}),s.addEventListener("finish",r,{once:!0})})}function hl(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function fa(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xe(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}function no(e,t){return e.map(i=>_s(ei({},i),{height:i.height==="auto"?`${t}px`:i.height}))}var $e=class extends N{constructor(){super(),this.localize=new ee(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=hl(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=hl(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await xe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:r}=ce(this,"tooltip.show",{dir:this.localize.dir()});await be(this.popup.popup,i,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await xe(this.body);const{keyframes:i,options:r}=ce(this,"tooltip.hide",{dir:this.localize.dir()});await be(this.popup.popup,i,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}render(){return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${H({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};$e.styles=[V,ep];$e.dependencies={"sl-popup":ie};l([P("slot:not([name])")],$e.prototype,"defaultSlot",2);l([P(".tooltip__body")],$e.prototype,"body",2);l([P("sl-popup")],$e.prototype,"popup",2);l([h()],$e.prototype,"content",2);l([h()],$e.prototype,"placement",2);l([h({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);l([h({type:Number})],$e.prototype,"distance",2);l([h({type:Boolean,reflect:!0})],$e.prototype,"open",2);l([h({type:Number})],$e.prototype,"skidding",2);l([h()],$e.prototype,"trigger",2);l([h({type:Boolean})],$e.prototype,"hoist",2);l([A("open",{waitUntilFirstUpdate:!0})],$e.prototype,"handleOpenChange",1);l([A(["content","distance","hoist","placement","skidding"])],$e.prototype,"handleOptionsChange",1);l([A("disabled")],$e.prototype,"handleDisabledChange",1);oe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});oe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Up="sl-tooltip";$e.define("sl-tooltip");var qp=F({tagName:Up,elementClass:$e,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"}),Ft=qp,jp=M`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Z=class extends N{constructor(){super(...arguments),this.formControlController=new ii(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new We(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){const s=t??this.input.selectionStart,o=i??this.input.selectionEnd;this.input.setRangeText(e,s,o,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,r=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${L(this.name)}
              .value=${ji(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              rows=${L(this.rows)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              autocapitalize=${L(this.autocapitalize)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${L(this.spellcheck)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Z.styles=[V,Yi,jp];l([P(".textarea__control")],Z.prototype,"input",2);l([P(".textarea__size-adjuster")],Z.prototype,"sizeAdjuster",2);l([B()],Z.prototype,"hasFocus",2);l([h()],Z.prototype,"title",2);l([h()],Z.prototype,"name",2);l([h()],Z.prototype,"value",2);l([h({reflect:!0})],Z.prototype,"size",2);l([h({type:Boolean,reflect:!0})],Z.prototype,"filled",2);l([h()],Z.prototype,"label",2);l([h({attribute:"help-text"})],Z.prototype,"helpText",2);l([h()],Z.prototype,"placeholder",2);l([h({type:Number})],Z.prototype,"rows",2);l([h()],Z.prototype,"resize",2);l([h({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],Z.prototype,"readonly",2);l([h({reflect:!0})],Z.prototype,"form",2);l([h({type:Boolean,reflect:!0})],Z.prototype,"required",2);l([h({type:Number})],Z.prototype,"minlength",2);l([h({type:Number})],Z.prototype,"maxlength",2);l([h()],Z.prototype,"autocapitalize",2);l([h()],Z.prototype,"autocorrect",2);l([h()],Z.prototype,"autocomplete",2);l([h({type:Boolean})],Z.prototype,"autofocus",2);l([h()],Z.prototype,"enterkeyhint",2);l([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Z.prototype,"spellcheck",2);l([h()],Z.prototype,"inputmode",2);l([Ar()],Z.prototype,"defaultValue",2);l([A("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);l([A("rows",{waitUntilFirstUpdate:!0})],Z.prototype,"handleRowsChange",1);l([A("value",{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);var Wp="sl-textarea";Z.define("sl-textarea");F({tagName:Wp,elementClass:Z,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var Kp=M`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,Qp=M`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Gp=M`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ce=class extends N{constructor(){super(...arguments),this.formControlController=new ii(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new We(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return $`
      <div
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${H({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${L(this.value)}
            .indeterminate=${ji(this.indeterminate)}
            .checked=${ji(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?$`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?$`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ce.styles=[V,Yi,Gp];Ce.dependencies={"sl-icon":ae};l([P('input[type="checkbox"]')],Ce.prototype,"input",2);l([B()],Ce.prototype,"hasFocus",2);l([h()],Ce.prototype,"title",2);l([h()],Ce.prototype,"name",2);l([h()],Ce.prototype,"value",2);l([h({reflect:!0})],Ce.prototype,"size",2);l([h({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],Ce.prototype,"checked",2);l([h({type:Boolean,reflect:!0})],Ce.prototype,"indeterminate",2);l([Ar("checked")],Ce.prototype,"defaultChecked",2);l([h({reflect:!0})],Ce.prototype,"form",2);l([h({type:Boolean,reflect:!0})],Ce.prototype,"required",2);l([h({attribute:"help-text"})],Ce.prototype,"helpText",2);l([A("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);l([A(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ce.prototype,"handleStateChange",1);var Yp=M`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Or=class extends N{constructor(){super(...arguments),this.localize=new ee(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Or.styles=[V,Yp];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pl(e,t,i){return e?t(e):i==null?void 0:i(e)}var ve=class ma extends N{constructor(){super(...arguments),this.localize=new ee(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await xe(this.childrenContainer);const{keyframes:t,options:i}=ce(this,"tree-item.collapse",{dir:this.localize.dir()});await be(this.childrenContainer,no(t,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&ma.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await xe(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:i}=ce(this,"tree-item.expand",{dir:this.localize.dir()});await be(this.childrenContainer,no(t,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>ma.isTreeItem(i)&&(t||!i.disabled)):[]}render(){const t=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return $`
      <div
        part="base"
        class="${H({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${H({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${pl(this.loading,()=>$` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${pl(this.selectable,()=>$`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${ji(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};ve.styles=[V,Qp];ve.dependencies={"sl-checkbox":Ce,"sl-icon":ae,"sl-spinner":Or};l([B()],ve.prototype,"indeterminate",2);l([B()],ve.prototype,"isLeaf",2);l([B()],ve.prototype,"loading",2);l([B()],ve.prototype,"selectable",2);l([h({type:Boolean,reflect:!0})],ve.prototype,"expanded",2);l([h({type:Boolean,reflect:!0})],ve.prototype,"selected",2);l([h({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],ve.prototype,"lazy",2);l([P("slot:not([name])")],ve.prototype,"defaultSlot",2);l([P("slot[name=children]")],ve.prototype,"childrenSlot",2);l([P(".tree-item__item")],ve.prototype,"itemElement",2);l([P(".tree-item__children")],ve.prototype,"childrenContainer",2);l([P(".tree-item__expand-button slot")],ve.prototype,"expandButtonSlot",2);l([A("loading",{waitUntilFirstUpdate:!0})],ve.prototype,"handleLoadingChange",1);l([A("disabled")],ve.prototype,"handleDisabledChange",1);l([A("selected")],ve.prototype,"handleSelectedChange",1);l([A("expanded",{waitUntilFirstUpdate:!0})],ve.prototype,"handleExpandedChange",1);l([A("expanded",{waitUntilFirstUpdate:!0})],ve.prototype,"handleExpandAnimation",1);l([A("lazy",{waitUntilFirstUpdate:!0})],ve.prototype,"handleLazyChange",1);var ar=ve;oe("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});oe("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function we(e,t,i){const r=s=>Object.is(s,-0)?0:s;return e<t?r(t):e>i?r(i):r(e)}function fl(e,t=!1){function i(o){const a=o.getChildrenItems({includeDisabled:!1});if(a.length){const n=a.every(d=>d.selected),c=a.every(d=>!d.selected&&!d.indeterminate);o.selected=n,o.indeterminate=!n&&!c}}function r(o){const a=o.parentElement;ar.isTreeItem(a)&&(i(a),r(a))}function s(o){for(const a of o.getChildrenItems())a.selected=t?o.selected||a.selected:!a.disabled&&o.selected,s(a);t&&i(o)}s(e),r(e)}var Ci=class extends N{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new ee(this),this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const i=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(i===null?e.append(r):i.hasAttribute("data-default")&&i.replaceWith(r))})},this.handleTreeChanged=e=>{for(const t of e){const i=[...t.addedNodes].filter(ar.isTreeItem),r=[...t.removedNodes].filter(ar.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),ar.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){const i=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const r=i.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${e}-icon`,r}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),fl(e);else if(this.selection==="single"||e.isLeaf){const r=this.getAllTreeItems();for(const s of r)s.selected=s===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const i=this.selectedItems;(t.length!==i.length||i.some(r=>!t.includes(r)))&&Promise.all(i.map(r=>r.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(s=>{var o;return["input","textarea"].includes((o=s==null?void 0:s.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),i=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const s=t.findIndex(c=>c.matches(":focus")),o=t[s],a=c=>{const d=t[we(c,0,t.length-1)];this.focusItem(d)},n=c=>{o.expanded=c};e.key==="ArrowDown"?a(s+1):e.key==="ArrowUp"?a(s-1):i&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?a(s+1):n(!0):i&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?a(s-1):n(!1):e.key==="Home"?a(0):e.key==="End"?a(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,i=t.closest("sl-tree-item"),r=e.composedPath().some(s=>{var o;return(o=s==null?void 0:s.classList)==null?void 0:o.contains("tree-item__expand-button")});!i||i.disabled||t!==this.clickTarget||(r?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const i of t)i.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>fl(i,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=i=>i.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(i=>{var r;if(i.disabled)return!1;const s=(r=i.parentElement)==null?void 0:r.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||t.has(s))&&t.add(i),!t.has(i)})}render(){return $`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ci.styles=[V,Kp];l([P("slot:not([name])")],Ci.prototype,"defaultSlot",2);l([P("slot[name=expand-icon]")],Ci.prototype,"expandedIconSlot",2);l([P("slot[name=collapse-icon]")],Ci.prototype,"collapsedIconSlot",2);l([h()],Ci.prototype,"selection",2);l([A("selection")],Ci.prototype,"handleSelectionChange",1);var Xp="sl-tree";Ci.define("sl-tree");F({tagName:Xp,elementClass:Ci,react:D,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var Jp="sl-tree-item";ar.define("sl-tree-item");F({tagName:Jp,elementClass:ar,react:D,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Zp=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Si=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=t.getTime()-e.getTime(),{unit:r,value:s}=Zp.find(o=>Math.abs(i)<o.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/s),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;r==="minute"?o=Bs("second"):r==="hour"?o=Bs("minute"):r==="day"?o=Bs("hour"):o=Bs("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return $` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};l([B()],Si.prototype,"isoTime",2);l([B()],Si.prototype,"relativeTime",2);l([h()],Si.prototype,"date",2);l([h()],Si.prototype,"format",2);l([h()],Si.prototype,"numeric",2);l([h({type:Boolean})],Si.prototype,"sync",2);function Bs(e){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return i-Date.now()%i}var ef="sl-relative-time";Si.define("sl-relative-time");F({tagName:ef,elementClass:Si,react:D,events:{},displayName:"SlRelativeTime"});var tf=M`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,de=class extends N{constructor(){super(...arguments),this.formControlController=new ii(this),this.hasSlotController=new We(this,"help-text","label"),this.localize=new ee(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=this.localize.dir()==="rtl",o=t*e;if(s){const a=`${t-o}px + ${e} * ${r}`;this.output.style.translate=`calc((${a} - ${i/2}px - ${r} / 2))`}else{const a=`${o}px - ${e} * ${r}`;this.output.style.translate=`calc(${a} - ${i/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,r=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${L(this.name)}
              ?disabled=${this.disabled}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${ji(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?$`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};de.styles=[V,Yi,tf];l([P(".range__control")],de.prototype,"input",2);l([P(".range__tooltip")],de.prototype,"output",2);l([B()],de.prototype,"hasFocus",2);l([B()],de.prototype,"hasTooltip",2);l([h()],de.prototype,"title",2);l([h()],de.prototype,"name",2);l([h({type:Number})],de.prototype,"value",2);l([h()],de.prototype,"label",2);l([h({attribute:"help-text"})],de.prototype,"helpText",2);l([h({type:Boolean,reflect:!0})],de.prototype,"disabled",2);l([h({type:Number})],de.prototype,"min",2);l([h({type:Number})],de.prototype,"max",2);l([h({type:Number})],de.prototype,"step",2);l([h()],de.prototype,"tooltip",2);l([h({attribute:!1})],de.prototype,"tooltipFormatter",2);l([h({reflect:!0})],de.prototype,"form",2);l([Ar()],de.prototype,"defaultValue",2);l([ws({passive:!0})],de.prototype,"handleThumbDragStart",1);l([A("value",{waitUntilFirstUpdate:!0})],de.prototype,"handleValueChange",1);l([A("disabled",{waitUntilFirstUpdate:!0})],de.prototype,"handleDisabledChange",1);l([A("hasTooltip",{waitUntilFirstUpdate:!0})],de.prototype,"syncRange",1);var rf="sl-range";de.define("sl-range");F({tagName:rf,elementClass:de,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var sf="sl-resize-observer";zr.define("sl-resize-observer");F({tagName:sf,elementClass:zr,react:D,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var of=M`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ga=class extends Cs{constructor(t){if(super(t),this.it=le,t.type!==Dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===le||t==null)return this._t=void 0,this.it=t;if(t===st)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};ga.directiveName="unsafeHTML",ga.resultType=1;const Ys=ks(ga);var Q=class extends N{constructor(){super(...arguments),this.formControlController=new ii(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new We(this,"help-text","label"),this.localize=new ee(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>$`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest(".select__clear")!==null,r=t.closest("sl-icon-button")!==null;if(!(i||r)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const s=this.getAllOptions(),o=s.indexOf(this.currentOption);let a=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(a=o+1,a>s.length-1&&(a=0)):e.key==="ArrowUp"?(a=o-1,a<0&&(a=s.length-1)):e.key==="Home"?a=0:e.key==="End"&&(a=s.length-1),this.setCurrentOption(s[a])}if(e.key&&e.key.length===1||e.key==="Backspace"){const s=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of s)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const i=e.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("sl-option"),r=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(t)?t:[t],r=[];e.forEach(s=>r.push(s.value)),this.setSelectedOptions(e.filter(s=>i.includes(s.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(r=>r.selected=!1),i.length&&i.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,i;const r=this.getAllOptions();this.selectedOptions=r.filter(o=>o.selected);const s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(e=o==null?void 0:o.value)!=null?e:"",this.displayLabel=(i=(t=o==null?void 0:o.getTextLabel)==null?void 0:t.call(o))!=null?i:""}this.valueHasChanged=s,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return $`<div @sl-remove=${r=>this.handleTagRemove(r,e)}>
          ${typeof i=="string"?Ys(i):i}
        </div>`}else if(t===this.maxOptionsVisible)return $`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return $``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="value"){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}}handleValueChange(){if(!this.valueHasChanged){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(i=>t.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await xe(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=ce(this,"select.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.currentOption&&la(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await xe(this);const{keyframes:e,options:t}=ce(this,"select.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,je(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,je(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,r=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${H({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?$`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?$`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Q.styles=[V,Yi,of];Q.dependencies={"sl-icon":ae,"sl-popup":ie,"sl-tag":ri};l([P(".select")],Q.prototype,"popup",2);l([P(".select__combobox")],Q.prototype,"combobox",2);l([P(".select__display-input")],Q.prototype,"displayInput",2);l([P(".select__value-input")],Q.prototype,"valueInput",2);l([P(".select__listbox")],Q.prototype,"listbox",2);l([B()],Q.prototype,"hasFocus",2);l([B()],Q.prototype,"displayLabel",2);l([B()],Q.prototype,"currentOption",2);l([B()],Q.prototype,"selectedOptions",2);l([B()],Q.prototype,"valueHasChanged",2);l([h()],Q.prototype,"name",2);l([B()],Q.prototype,"value",1);l([h({attribute:"value"})],Q.prototype,"defaultValue",2);l([h({reflect:!0})],Q.prototype,"size",2);l([h()],Q.prototype,"placeholder",2);l([h({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);l([h({attribute:"max-options-visible",type:Number})],Q.prototype,"maxOptionsVisible",2);l([h({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);l([h({type:Boolean})],Q.prototype,"clearable",2);l([h({type:Boolean,reflect:!0})],Q.prototype,"open",2);l([h({type:Boolean})],Q.prototype,"hoist",2);l([h({type:Boolean,reflect:!0})],Q.prototype,"filled",2);l([h({type:Boolean,reflect:!0})],Q.prototype,"pill",2);l([h()],Q.prototype,"label",2);l([h({reflect:!0})],Q.prototype,"placement",2);l([h({attribute:"help-text"})],Q.prototype,"helpText",2);l([h({reflect:!0})],Q.prototype,"form",2);l([h({type:Boolean,reflect:!0})],Q.prototype,"required",2);l([h()],Q.prototype,"getTag",2);l([A("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);l([A(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Q.prototype,"handleValueChange",1);l([A("open",{waitUntilFirstUpdate:!0})],Q.prototype,"handleOpenChange",1);oe("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var af="sl-select";Q.define("sl-select");F({tagName:af,elementClass:Q,react:D,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var nf=M`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ko=class extends N{constructor(){super(...arguments),this.effect="none"}render(){return $`
      <div
        part="base"
        class=${H({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ko.styles=[V,nf];l([h()],ko.prototype,"effect",2);var lf="sl-skeleton";ko.define("sl-skeleton");F({tagName:lf,elementClass:ko,react:D,events:{},displayName:"SlSkeleton"});var cf="sl-spinner";Or.define("sl-spinner");F({tagName:cf,elementClass:Or,react:D,events:{},displayName:"SlSpinner"});var df=M`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function as(e,t){function i(s){const o=e.getBoundingClientRect(),a=e.ownerDocument.defaultView,n=o.left+a.scrollX,c=o.top+a.scrollY,d=s.pageX-n,f=s.pageY-c;t!=null&&t.onMove&&t.onMove(d,f)}function r(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}var ml=()=>null,Xe=class extends N{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new ee(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=ml,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:i,size:r,snapThreshold:s,isRtl:o,vertical:a})=>{let n=i,c=Number.POSITIVE_INFINITY;return t.forEach(d=>{let f;if(d.startsWith("repeat(")){const p=e.substring(7,e.length-1),m=p.endsWith("%"),g=Number.parseFloat(p),b=m?r*(g/100):g;f=Math.round((o&&!a?r-i:i)/b)*b}else d.endsWith("%")?f=r*(Number.parseFloat(d)/100):f=Number.parseFloat(d);o&&!a&&(f=r-f);const u=Math.abs(i-f);u<=s&&u<c&&(n=f,c=u)}),n}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=ml}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),as(this,{onMove:(i,r)=>{var s;let o=this.vertical?r:i;this.primary==="end"&&(o=this.size-o),o=(s=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?s:o,this.position=we(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=i),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=i),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const r=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=we(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.vertical?i:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,s="auto";return this.primary==="end"?i&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${r}`:i&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${s}`,this.style[t]="",$`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${L(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Xe.styles=[V,df];l([P(".divider")],Xe.prototype,"divider",2);l([h({type:Number,reflect:!0})],Xe.prototype,"position",2);l([h({attribute:"position-in-pixels",type:Number})],Xe.prototype,"positionInPixels",2);l([h({type:Boolean,reflect:!0})],Xe.prototype,"vertical",2);l([h({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);l([h()],Xe.prototype,"primary",2);l([h({reflect:!0})],Xe.prototype,"snap",1);l([h({type:Number,attribute:"snap-threshold"})],Xe.prototype,"snapThreshold",2);l([A("position")],Xe.prototype,"handlePositionChange",1);l([A("positionInPixels")],Xe.prototype,"handlePositionInPixelsChange",1);l([A("vertical")],Xe.prototype,"handleVerticalChange",1);var uf="sl-split-panel";Xe.define("sl-split-panel");F({tagName:uf,elementClass:Xe,react:D,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var hf=M`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,pf=0,ft=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.attrId=++pf,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${H({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ft.styles=[V,hf];ft.dependencies={"sl-icon-button":ke};l([P(".tab")],ft.prototype,"tab",2);l([h({reflect:!0})],ft.prototype,"panel",2);l([h({type:Boolean,reflect:!0})],ft.prototype,"active",2);l([h({type:Boolean,reflect:!0})],ft.prototype,"closable",2);l([h({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);l([h({type:Number,reflect:!0})],ft.prototype,"tabIndex",2);l([A("active")],ft.prototype,"handleActiveChange",1);l([A("disabled")],ft.prototype,"handleDisabledChange",1);var ff="sl-tab";ft.define("sl-tab");F({tagName:ff,elementClass:ft,react:D,events:{onSlClose:"sl-close"},displayName:"SlTab"});var mf=M`
  :host {
    display: contents;
  }
`,$t=class extends N{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return $` <slot></slot> `}};$t.styles=[V,mf];l([h({reflect:!0})],$t.prototype,"attr",2);l([h({attribute:"attr-old-value",type:Boolean,reflect:!0})],$t.prototype,"attrOldValue",2);l([h({attribute:"char-data",type:Boolean,reflect:!0})],$t.prototype,"charData",2);l([h({attribute:"char-data-old-value",type:Boolean,reflect:!0})],$t.prototype,"charDataOldValue",2);l([h({attribute:"child-list",type:Boolean,reflect:!0})],$t.prototype,"childList",2);l([h({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);l([A("disabled")],$t.prototype,"handleDisabledChange",1);l([A("attr",{waitUntilFirstUpdate:!0}),A("attr-old-value",{waitUntilFirstUpdate:!0}),A("char-data",{waitUntilFirstUpdate:!0}),A("char-data-old-value",{waitUntilFirstUpdate:!0}),A("childList",{waitUntilFirstUpdate:!0})],$t.prototype,"handleChange",1);var gf="sl-mutation-observer";$t.define("sl-mutation-observer");F({tagName:gf,elementClass:$t,react:D,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var bf="sl-popup";ie.define("sl-popup");F({tagName:bf,elementClass:ie,react:D,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var vf=M`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Xi=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*t,r=i-this.value/100*i;this.indicatorOffset=`${r}px`}}render(){return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Xi.styles=[V,vf];l([P(".progress-ring__indicator")],Xi.prototype,"indicator",2);l([B()],Xi.prototype,"indicatorOffset",2);l([h({type:Number,reflect:!0})],Xi.prototype,"value",2);l([h()],Xi.prototype,"label",2);var yf="sl-progress-ring";Xi.define("sl-progress-ring");F({tagName:yf,elementClass:Xi,react:D,events:{},displayName:"SlProgressRing"});var _f=M`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Et=class extends N{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return $`
      <span
        part="base"
        class=${H({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?$` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Et.styles=[V,_f];Et.dependencies={"sl-icon":ae};l([B()],Et.prototype,"checked",2);l([B()],Et.prototype,"hasFocus",2);l([h()],Et.prototype,"value",2);l([h({reflect:!0})],Et.prototype,"size",2);l([h({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);l([A("checked")],Et.prototype,"handleCheckedChange",1);l([A("disabled",{waitUntilFirstUpdate:!0})],Et.prototype,"handleDisabledChange",1);var wf="sl-radio";Et.define("sl-radio");F({tagName:wf,elementClass:Et,react:D,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var xf=M`
  :host {
    display: inline-block;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bd="important",kf=" !"+bd,Qe=ks(class extends Cs{constructor(e){var t;if(super(e),e.type!==Dt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const r=e[i];return r==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?i.removeProperty(r):i[r]=null);for(const r in t){const s=t[r];if(s!=null){this.ft.add(r);const o=typeof s=="string"&&s.endsWith(kf);r.includes("-")||o?i.setProperty(r,o?s.slice(0,-11):s,o?bd:""):i[r]=s}}return st}});let vd=null;class yd{}yd.render=function(e,t){vd(e,t)};self.QrCreator=yd;(function(e){function t(n,c,d,f){var u={},p=e(d,c);p.u(n),p.J(),f=f||0;var m=p.h(),g=p.h()+2*f;return u.text=n,u.level=c,u.version=d,u.O=g,u.a=function(b,_){return b-=f,_-=f,0>b||b>=m||0>_||_>=m?!1:p.a(b,_)},u}function i(n,c,d,f,u,p,m,g,b,_){function w(y,C,k,S,z,I,R){y?(n.lineTo(C+I,k+R),n.arcTo(C,k,S,z,p)):n.lineTo(C,k)}m?n.moveTo(c+p,d):n.moveTo(c,d),w(g,f,d,f,u,-p,0),w(b,f,u,c,u,0,-p),w(_,c,u,c,d,p,0),w(m,c,d,f,d,0,p)}function r(n,c,d,f,u,p,m,g,b,_){function w(y,C,k,S){n.moveTo(y+k,C),n.lineTo(y,C),n.lineTo(y,C+S),n.arcTo(y,C,y+k,C,p)}m&&w(c,d,p,p),g&&w(f,d,-p,p),b&&w(f,u,-p,-p),_&&w(c,u,p,-p)}function s(n,c){var d=c.fill;if(typeof d=="string")n.fillStyle=d;else{var f=d.type,u=d.colorStops;if(d=d.position.map(m=>Math.round(m*c.size)),f==="linear-gradient")var p=n.createLinearGradient.apply(n,d);else if(f==="radial-gradient")p=n.createRadialGradient.apply(n,d);else throw Error("Unsupported fill");u.forEach(([m,g])=>{p.addColorStop(m,g)}),n.fillStyle=p}}function o(n,c){e:{var d=c.text,f=c.v,u=c.N,p=c.K,m=c.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var g=t(d,f,u,m);break e}catch{}g=void 0}if(!g)return null;for(d=n.getContext("2d"),c.background&&(d.fillStyle=c.background,d.fillRect(c.left,c.top,c.size,c.size)),f=g.O,p=c.size/f,d.beginPath(),m=0;m<f;m+=1)for(u=0;u<f;u+=1){var b=d,_=c.left+u*p,w=c.top+m*p,y=m,C=u,k=g.a,S=_+p,z=w+p,I=y-1,R=y+1,E=C-1,T=C+1,W=Math.floor(Math.min(.5,Math.max(0,c.R))*p),te=k(y,C),Fe=k(I,E),_e=k(I,C);I=k(I,T);var _t=k(y,T);T=k(R,T),C=k(R,C),R=k(R,E),y=k(y,E),_=Math.round(_),w=Math.round(w),S=Math.round(S),z=Math.round(z),te?i(b,_,w,S,z,W,!_e&&!y,!_e&&!_t,!C&&!_t,!C&&!y):r(b,_,w,S,z,W,_e&&y&&Fe,_e&&_t&&I,C&&_t&&T,C&&y&&R)}return s(d,c),d.fill(),n}var a={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};vd=function(n,c){var d={};Object.assign(d,a,n),d.N=d.minVersion,d.K=d.maxVersion,d.v=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.R=d.radius,d.P=d.quiet,c instanceof HTMLCanvasElement?((c.width!==d.size||c.height!==d.size)&&(c.width=d.size,c.height=d.size),c.getContext("2d").clearRect(0,0,c.width,c.height),o(c,d)):(n=document.createElement("canvas"),n.width=d.size,n.height=d.size,d=o(n,d),c.appendChild(d))}})(function(){function e(c){var d=i.s(c);return{S:function(){return 4},b:function(){return d.length},write:function(f){for(var u=0;u<d.length;u+=1)f.put(d[u],8)}}}function t(){var c=[],d=0,f={B:function(){return c},c:function(u){return(c[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var m=0;m<p;m+=1)f.m((u>>>p-m-1&1)==1)},f:function(){return d},m:function(u){var p=Math.floor(d/8);c.length<=p&&c.push(0),u&&(c[p]|=128>>>d%8),d+=1}};return f}function i(c,d){function f(y,C){for(var k=-1;7>=k;k+=1)if(!(-1>=y+k||g<=y+k))for(var S=-1;7>=S;S+=1)-1>=C+S||g<=C+S||(m[y+k][C+S]=0<=k&&6>=k&&(S==0||S==6)||0<=S&&6>=S&&(k==0||k==6)||2<=k&&4>=k&&2<=S&&4>=S)}function u(y,C){for(var k=g=4*c+17,S=Array(k),z=0;z<k;z+=1){S[z]=Array(k);for(var I=0;I<k;I+=1)S[z][I]=null}for(m=S,f(0,0),f(g-7,0),f(0,g-7),k=o.G(c),S=0;S<k.length;S+=1)for(z=0;z<k.length;z+=1){I=k[S];var R=k[z];if(m[I][R]==null)for(var E=-2;2>=E;E+=1)for(var T=-2;2>=T;T+=1)m[I+E][R+T]=E==-2||E==2||T==-2||T==2||E==0&&T==0}for(k=8;k<g-8;k+=1)m[k][6]==null&&(m[k][6]=k%2==0);for(k=8;k<g-8;k+=1)m[6][k]==null&&(m[6][k]=k%2==0);for(k=o.w(p<<3|C),S=0;15>S;S+=1)z=!y&&(k>>S&1)==1,m[6>S?S:8>S?S+1:g-15+S][8]=z,m[8][8>S?g-S-1:9>S?15-S:14-S]=z;if(m[g-8][8]=!y,7<=c){for(k=o.A(c),S=0;18>S;S+=1)z=!y&&(k>>S&1)==1,m[Math.floor(S/3)][S%3+g-8-3]=z;for(S=0;18>S;S+=1)z=!y&&(k>>S&1)==1,m[S%3+g-8-3][Math.floor(S/3)]=z}if(b==null){for(y=n.I(c,p),k=t(),S=0;S<_.length;S+=1)z=_[S],k.put(4,4),k.put(z.b(),o.f(4,c)),z.write(k);for(S=z=0;S<y.length;S+=1)z+=y[S].j;if(k.f()>8*z)throw Error("code length overflow. ("+k.f()+">"+8*z+")");for(k.f()+4<=8*z&&k.put(0,4);k.f()%8!=0;)k.m(!1);for(;!(k.f()>=8*z)&&(k.put(236,8),!(k.f()>=8*z));)k.put(17,8);var W=0;for(z=S=0,I=Array(y.length),R=Array(y.length),E=0;E<y.length;E+=1){var te=y[E].j,Fe=y[E].o-te;for(S=Math.max(S,te),z=Math.max(z,Fe),I[E]=Array(te),T=0;T<I[E].length;T+=1)I[E][T]=255&k.B()[T+W];for(W+=te,T=o.C(Fe),te=r(I[E],T.b()-1).l(T),R[E]=Array(T.b()-1),T=0;T<R[E].length;T+=1)Fe=T+te.b()-R[E].length,R[E][T]=0<=Fe?te.c(Fe):0}for(T=k=0;T<y.length;T+=1)k+=y[T].o;for(k=Array(k),T=W=0;T<S;T+=1)for(E=0;E<y.length;E+=1)T<I[E].length&&(k[W]=I[E][T],W+=1);for(T=0;T<z;T+=1)for(E=0;E<y.length;E+=1)T<R[E].length&&(k[W]=R[E][T],W+=1);b=k}for(y=b,k=-1,S=g-1,z=7,I=0,C=o.F(C),R=g-1;0<R;R-=2)for(R==6&&--R;;){for(E=0;2>E;E+=1)m[S][R-E]==null&&(T=!1,I<y.length&&(T=(y[I]>>>z&1)==1),C(S,R-E)&&(T=!T),m[S][R-E]=T,--z,z==-1&&(I+=1,z=7));if(S+=k,0>S||g<=S){S-=k,k=-k;break}}}var p=s[d],m=null,g=0,b=null,_=[],w={u:function(y){y=e(y),_.push(y),b=null},a:function(y,C){if(0>y||g<=y||0>C||g<=C)throw Error(y+","+C);return m[y][C]},h:function(){return g},J:function(){for(var y=0,C=0,k=0;8>k;k+=1){u(!0,k);var S=o.D(w);(k==0||y>S)&&(y=S,C=k)}u(!1,C)}};return w}function r(c,d){if(typeof c.length>"u")throw Error(c.length+"/"+d);var f=function(){for(var p=0;p<c.length&&c[p]==0;)p+=1;for(var m=Array(c.length-p+d),g=0;g<c.length-p;g+=1)m[g]=c[g+p];return m}(),u={c:function(p){return f[p]},b:function(){return f.length},multiply:function(p){for(var m=Array(u.b()+p.b()-1),g=0;g<u.b();g+=1)for(var b=0;b<p.b();b+=1)m[g+b]^=a.i(a.g(u.c(g))+a.g(p.c(b)));return r(m,0)},l:function(p){if(0>u.b()-p.b())return u;for(var m=a.g(u.c(0))-a.g(p.c(0)),g=Array(u.b()),b=0;b<u.b();b+=1)g[b]=u.c(b);for(b=0;b<p.b();b+=1)g[b]^=a.i(a.g(p.c(b))+m);return r(g,0).l(p)}};return u}i.s=function(c){for(var d=[],f=0;f<c.length;f++){var u=c.charCodeAt(f);128>u?d.push(u):2048>u?d.push(192|u>>6,128|u&63):55296>u||57344<=u?d.push(224|u>>12,128|u>>6&63,128|u&63):(f++,u=65536+((u&1023)<<10|c.charCodeAt(f)&1023),d.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return d};var s={L:1,M:0,Q:3,H:2},o=function(){function c(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(u){for(var p=u<<10;0<=c(p)-c(1335);)p^=1335<<c(p)-c(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=c(p)-c(7973);)p^=7973<<c(p)-c(7973);return u<<12|p},G:function(u){return d[u-1]},F:function(u){switch(u){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=r([1],0),m=0;m<u;m+=1)p=p.multiply(r([1,a.i(m)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),m=0,g=0;g<p;g+=1)for(var b=0;b<p;b+=1){for(var _=0,w=u.a(g,b),y=-1;1>=y;y+=1)if(!(0>g+y||p<=g+y))for(var C=-1;1>=C;C+=1)0>b+C||p<=b+C||(y!=0||C!=0)&&w==u.a(g+y,b+C)&&(_+=1);5<_&&(m+=3+_-5)}for(g=0;g<p-1;g+=1)for(b=0;b<p-1;b+=1)_=0,u.a(g,b)&&(_+=1),u.a(g+1,b)&&(_+=1),u.a(g,b+1)&&(_+=1),u.a(g+1,b+1)&&(_+=1),(_==0||_==4)&&(m+=3);for(g=0;g<p;g+=1)for(b=0;b<p-6;b+=1)u.a(g,b)&&!u.a(g,b+1)&&u.a(g,b+2)&&u.a(g,b+3)&&u.a(g,b+4)&&!u.a(g,b+5)&&u.a(g,b+6)&&(m+=40);for(b=0;b<p;b+=1)for(g=0;g<p-6;g+=1)u.a(g,b)&&!u.a(g+1,b)&&u.a(g+2,b)&&u.a(g+3,b)&&u.a(g+4,b)&&!u.a(g+5,b)&&u.a(g+6,b)&&(m+=40);for(b=_=0;b<p;b+=1)for(g=0;g<p;g+=1)u.a(g,b)&&(_+=1);return m+=Math.abs(100*_/p/p-50)/5*10}};return f}(),a=function(){for(var c=Array(256),d=Array(256),f=0;8>f;f+=1)c[f]=1<<f;for(f=8;256>f;f+=1)c[f]=c[f-4]^c[f-5]^c[f-6]^c[f-8];for(f=0;255>f;f+=1)d[c[f]]=f;return{g:function(u){if(1>u)throw Error("glog("+u+")");return d[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return c[u]}}}(),n=function(){function c(u,p){switch(p){case s.L:return d[4*(u-1)];case s.M:return d[4*(u-1)+1];case s.Q:return d[4*(u-1)+2];case s.H:return d[4*(u-1)+3]}}var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(u,p){var m=c(u,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=m.length/3,p=[];for(var g=0;g<u;g+=1)for(var b=m[3*g],_=m[3*g+1],w=m[3*g+2],y=0;y<b;y+=1){var C=w,k={};k.o=_,k.j=C,p.push(k)}return p}};return f}();return i}());const Cf=QrCreator;var mt=class extends N{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Cf.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return $`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${Qe({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};mt.styles=[V,xf];l([P("canvas")],mt.prototype,"canvas",2);l([h()],mt.prototype,"value",2);l([h()],mt.prototype,"label",2);l([h({type:Number})],mt.prototype,"size",2);l([h()],mt.prototype,"fill",2);l([h()],mt.prototype,"background",2);l([h({type:Number})],mt.prototype,"radius",2);l([h({attribute:"error-correction"})],mt.prototype,"errorCorrection",2);l([A(["background","errorCorrection","fill","radius","size","value"])],mt.prototype,"generate",1);var Sf="sl-qr-code";mt.define("sl-qr-code");F({tagName:Sf,elementClass:mt,react:D,events:{},displayName:"SlQrCode"});var _d=M`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,$f=M`
  ${_d}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,gt=class extends N{constructor(){super(...arguments),this.hasSlotController=new We(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return os`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${H({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${L(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};gt.styles=[V,$f];l([P(".button")],gt.prototype,"input",2);l([P(".hidden-input")],gt.prototype,"hiddenInput",2);l([B()],gt.prototype,"hasFocus",2);l([h({type:Boolean,reflect:!0})],gt.prototype,"checked",2);l([h()],gt.prototype,"value",2);l([h({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);l([h({reflect:!0})],gt.prototype,"size",2);l([h({type:Boolean,reflect:!0})],gt.prototype,"pill",2);l([A("disabled",{waitUntilFirstUpdate:!0})],gt.prototype,"handleDisabledChange",1);var Ef="sl-radio-button";gt.define("sl-radio-button");F({tagName:Ef,elementClass:gt,react:D,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var Af=M`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,zf=M`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,$i=class extends N{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Wr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Wr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Wr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Wr(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const i=e.indexOf(t),r=Wr(t);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",i===0),r.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<e.length-1),r.toggleAttribute("data-sl-button-group__button--last",i===e.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};$i.styles=[V,zf];l([P("slot")],$i.prototype,"defaultSlot",2);l([B()],$i.prototype,"disableRole",2);l([h()],$i.prototype,"label",2);function Wr(e){var t;const i="sl-button, sl-radio-button";return(t=e.closest(i))!=null?t:e.querySelector(i)}var Re=class extends N{constructor(){super(...arguments),this.formControlController=new ii(this),this.hasSlotController=new We(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?xh:e?wh:vo}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),r=this.value;!t||t.disabled||(this.value=t.value,i.forEach(s=>s.checked=s===t),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const i=this.getAllRadios().filter(n=>!n.disabled),r=(t=i.find(n=>n.checked))!=null?t:i[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let a=i.indexOf(r)+s;a<0&&(a=i.length-1),a>i.length-1&&(a=0),this.getAllRadios().forEach(n=>{n.checked=!1,this.hasButtonGroup||n.setAttribute("tabindex","-1")}),this.value=i[a].value,i[a].checked=!0,this.hasButtonGroup?i[a].shadowRoot.querySelector("button").focus():(i[a].setAttribute("tabindex","0"),i[a].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const i=this.getAllRadios();if(await Promise.all(i.map(async r=>{await r.updateComplete,r.checked=r.value===this.value,r.size=this.size})),this.hasButtonGroup=i.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(r=>r.checked))if(this.hasButtonGroup){const r=(e=i[0].shadowRoot)==null?void 0:e.querySelector("button");r&&r.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const r=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");r&&(r.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),i=t.find(o=>o.checked),r=t.find(o=>!o.disabled),s=i||r;s&&s.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,r=this.helpText?!0:!!t,s=$`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?$`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Re.styles=[V,Yi,Af];Re.dependencies={"sl-button-group":$i};l([P("slot:not([name])")],Re.prototype,"defaultSlot",2);l([P(".radio-group__validation-input")],Re.prototype,"validationInput",2);l([B()],Re.prototype,"hasButtonGroup",2);l([B()],Re.prototype,"errorMessage",2);l([B()],Re.prototype,"defaultValue",2);l([h()],Re.prototype,"label",2);l([h({attribute:"help-text"})],Re.prototype,"helpText",2);l([h()],Re.prototype,"name",2);l([h({reflect:!0})],Re.prototype,"value",2);l([h({reflect:!0})],Re.prototype,"size",2);l([h({reflect:!0})],Re.prototype,"form",2);l([h({type:Boolean,reflect:!0})],Re.prototype,"required",2);l([A("size",{waitUntilFirstUpdate:!0})],Re.prototype,"handleSizeChange",1);l([A("value")],Re.prototype,"handleValueChange",1);var Rf="sl-radio-group";Re.define("sl-radio-group");F({tagName:Rf,elementClass:Re,react:D,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var Tf=M`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,Ne=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:i,right:r,width:s}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((r-e)/s*this.max,this.precision):this.roundToPrecision((e-i)/s*this.max,this.precision);return we(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"){const s=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"){const s=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const i=1/t;return Math.ceil(e*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,$`
      <div
        part="base"
        class=${H({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(r=>i>r&&i<r+1?$`
                <span
                  class=${H({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===r+1})}
                  role="presentation"
                >
                  <div
                    style=${Qe({clipPath:e?`inset(0 ${(i-r)*100}% 0 0)`:`inset(0 0 0 ${(i-r)*100}%)`})}
                  >
                    ${Ys(this.getSymbol(r+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Qe({clipPath:e?`inset(0 0 0 ${100-(i-r)*100}%)`:`inset(0 ${100-(i-r)*100}% 0 0)`})}
                  >
                    ${Ys(this.getSymbol(r+1))}
                  </div>
                </span>
              `:$`
              <span
                class=${H({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===r+1,"rating__symbol--active":i>=r+1})}
                role="presentation"
              >
                ${Ys(this.getSymbol(r+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ne.styles=[V,Tf];Ne.dependencies={"sl-icon":ae};l([P(".rating")],Ne.prototype,"rating",2);l([B()],Ne.prototype,"hoverValue",2);l([B()],Ne.prototype,"isHovering",2);l([h()],Ne.prototype,"label",2);l([h({type:Number})],Ne.prototype,"value",2);l([h({type:Number})],Ne.prototype,"max",2);l([h({type:Number})],Ne.prototype,"precision",2);l([h({type:Boolean,reflect:!0})],Ne.prototype,"readonly",2);l([h({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);l([h()],Ne.prototype,"getSymbol",2);l([ws({passive:!0})],Ne.prototype,"handleTouchMove",1);l([A("hoverValue")],Ne.prototype,"handleHoverValueChange",1);l([A("isHovering")],Ne.prototype,"handleIsHoveringChange",1);var Pf="sl-rating";Ne.define("sl-rating");F({tagName:Pf,elementClass:Ne,react:D,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var If=M`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Ei=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";e.preventDefault(),as(this.base,{onMove:r=>{this.position=parseFloat(we(r/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let s=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight")&&(s-=r),(t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft")&&(s+=r),e.key==="Home"&&(s=0),e.key==="End"&&(s=100),s=we(s,0,100),this.position=s}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        id="image-comparer"
        class=${H({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Qe({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Qe({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Ei.styles=[V,If];Ei.scopedElement={"sl-icon":ae};l([P(".image-comparer")],Ei.prototype,"base",2);l([P(".image-comparer__handle")],Ei.prototype,"handle",2);l([h({type:Number,reflect:!0})],Ei.prototype,"position",2);l([A("position",{waitUntilFirstUpdate:!0})],Ei.prototype,"handlePositionChange",1);var Of="sl-image-comparer";Ei.define("sl-image-comparer");F({tagName:Of,elementClass:Ei,react:D,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var Lf=M`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,q=class extends N{constructor(){super(...arguments),this.formControlController=new ii(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new We(this,"help-text","label"),this.localize=new ee(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){const s=t??this.input.selectionStart,o=i??this.input.selectionEnd;this.input.setRangeText(e,s,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,r=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${L(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${ji(this.value)}
              autocapitalize=${L(this.autocapitalize)}
              autocomplete=${L(this.autocomplete)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${L(this.pattern)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?$`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?$`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?$`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:$`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};q.styles=[V,Yi,Lf];q.dependencies={"sl-icon":ae};l([P(".input__control")],q.prototype,"input",2);l([B()],q.prototype,"hasFocus",2);l([h()],q.prototype,"title",2);l([h({reflect:!0})],q.prototype,"type",2);l([h()],q.prototype,"name",2);l([h()],q.prototype,"value",2);l([Ar()],q.prototype,"defaultValue",2);l([h({reflect:!0})],q.prototype,"size",2);l([h({type:Boolean,reflect:!0})],q.prototype,"filled",2);l([h({type:Boolean,reflect:!0})],q.prototype,"pill",2);l([h()],q.prototype,"label",2);l([h({attribute:"help-text"})],q.prototype,"helpText",2);l([h({type:Boolean})],q.prototype,"clearable",2);l([h({type:Boolean,reflect:!0})],q.prototype,"disabled",2);l([h()],q.prototype,"placeholder",2);l([h({type:Boolean,reflect:!0})],q.prototype,"readonly",2);l([h({attribute:"password-toggle",type:Boolean})],q.prototype,"passwordToggle",2);l([h({attribute:"password-visible",type:Boolean})],q.prototype,"passwordVisible",2);l([h({attribute:"no-spin-buttons",type:Boolean})],q.prototype,"noSpinButtons",2);l([h({reflect:!0})],q.prototype,"form",2);l([h({type:Boolean,reflect:!0})],q.prototype,"required",2);l([h()],q.prototype,"pattern",2);l([h({type:Number})],q.prototype,"minlength",2);l([h({type:Number})],q.prototype,"maxlength",2);l([h()],q.prototype,"min",2);l([h()],q.prototype,"max",2);l([h()],q.prototype,"step",2);l([h()],q.prototype,"autocapitalize",2);l([h()],q.prototype,"autocorrect",2);l([h()],q.prototype,"autocomplete",2);l([h({type:Boolean})],q.prototype,"autofocus",2);l([h()],q.prototype,"enterkeyhint",2);l([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],q.prototype,"spellcheck",2);l([h()],q.prototype,"inputmode",2);l([A("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);l([A("step",{waitUntilFirstUpdate:!0})],q.prototype,"handleStepChange",1);l([A("value",{waitUntilFirstUpdate:!0})],q.prototype,"handleValueChange",1);var Nf="sl-input";q.define("sl-input");var Df=F({tagName:Nf,elementClass:q,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),Ye=Df,Ff="sl-icon";ae.define("sl-icon");var Mf=F({tagName:Ff,elementClass:ae,react:D,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),cn=Mf,Bf=M`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Co=class extends N{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath(),r=i.find(n=>{var c;return t.includes(((c=n==null?void 0:n.getAttribute)==null?void 0:c.call(n,"role"))||"")});if(!r||i.find(n=>{var c;return((c=n==null?void 0:n.getAttribute)==null?void 0:c.call(n,"role"))==="menu"})!==this)return;const a=r;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let r=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?r++:e.key==="ArrowUp"?r--:e.key==="Home"?r=0:e.key==="End"&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===e?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Co.styles=[V,Bf];l([P("slot")],Co.prototype,"defaultSlot",2);var Hf="sl-menu";Co.define("sl-menu");var Vf=F({tagName:Hf,elementClass:Co,react:D,events:{onSlSelect:"sl-select"},displayName:"SlMenu"}),wd=Vf,Uf=M`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=(e,t)=>{var r;const i=e._$AN;if(i===void 0)return!1;for(const s of i)(r=s._$AO)==null||r.call(s,t,!1),ns(s,t);return!0},lo=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},xd=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Wf(t)}};function qf(e){this._$AN!==void 0?(lo(this),this._$AM=e,xd(this)):this._$AM=e}function jf(e,t=!1,i=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=i;o<r.length;o++)ns(r[o],!1),lo(r[o]);else r!=null&&(ns(r,!1),lo(r));else ns(this,e)}const Wf=e=>{e.type==Dt.CHILD&&(e._$AP??(e._$AP=jf),e._$AQ??(e._$AQ=qf))};class Kf extends Cs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),xd(this),this.isConnected=t._$AU}_$AO(t,i=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),i&&(ns(this,t),lo(this))}setValue(t){if(ed(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qf=()=>new Gf;class Gf{}const Bo=new WeakMap,Yf=ks(class extends Kf{render(e){return le}update(e,[t]){var r;const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),le}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=Bo.get(t);i===void 0&&(i=new WeakMap,Bo.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Bo.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Xf=class{constructor(e,t){this.popupRef=Qf(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var r;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(r=i.target.role)!=null&&r.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),r=i==null?void 0:i.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],s=getComputedStyle(this.host).direction==="rtl";if(!r)return;const{left:o,top:a,width:n,height:c}=r.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?o+n:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?o+n:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+c}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const r of t.assignedElements())if(i=r.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let r=1;r!==i.length;++r)i[r].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),r=["padding-top","border-top-width","margin-top"].reduce((s,o)=>{var a;const n=(a=t.get(o))!=null?a:new CSSUnitValue(0,"px"),d=(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px");return s-d.value},0);this.skidding=r}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?$`
      <sl-popup
        ${Yf(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:$` <slot name="submenu" hidden></slot> `}},Je=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new We(this,"submenu"),this.submenuController=new Xf(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return kh(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return $`
      <div
        id="anchor"
        part="base"
        class=${H({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?$` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Je.styles=[V,Uf];Je.dependencies={"sl-icon":ae,"sl-popup":ie,"sl-spinner":Or};l([P("slot:not([name])")],Je.prototype,"defaultSlot",2);l([P(".menu-item")],Je.prototype,"menuItem",2);l([h()],Je.prototype,"type",2);l([h({type:Boolean,reflect:!0})],Je.prototype,"checked",2);l([h()],Je.prototype,"value",2);l([h({type:Boolean,reflect:!0})],Je.prototype,"loading",2);l([h({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);l([A("checked")],Je.prototype,"handleCheckedChange",1);l([A("disabled")],Je.prototype,"handleDisabledChange",1);l([A("type")],Je.prototype,"handleTypeChange",1);var Jf="sl-menu-item";Je.define("sl-menu-item");var Zf=F({tagName:Jf,elementClass:Je,react:D,events:{},displayName:"SlMenuItem"}),sr=Zf,em=M`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,dn=class extends N{render(){return $` <slot part="base" class="menu-label"></slot> `}};dn.styles=[V,em];var tm="sl-menu-label";dn.define("sl-menu-label");var im=F({tagName:tm,elementClass:dn,react:D,events:{},displayName:"SlMenuLabel"}),rm=im,sm=M`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,nt=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(t+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(t+=i.textContent)}),t.trim()}render(){return $`
      <div
        part="base"
        class=${H({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};nt.styles=[V,sm];nt.dependencies={"sl-icon":ae};l([P(".option__label")],nt.prototype,"defaultSlot",2);l([B()],nt.prototype,"current",2);l([B()],nt.prototype,"selected",2);l([B()],nt.prototype,"hasHover",2);l([h({reflect:!0})],nt.prototype,"value",2);l([h({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);l([A("disabled")],nt.prototype,"handleDisabledChange",1);l([A("selected")],nt.prototype,"handleSelectedChange",1);l([A("value")],nt.prototype,"handleValueChange",1);var om="sl-option";nt.define("sl-option");F({tagName:om,elementClass:nt,react:D,events:{},displayName:"SlOption"});var am=M`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Lr=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return $`
      <div
        part="base"
        class=${H({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${L(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Qe({width:`${this.value}%`})}>
          ${this.indeterminate?"":$` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Lr.styles=[V,am];l([h({type:Number,reflect:!0})],Lr.prototype,"value",2);l([h({type:Boolean,reflect:!0})],Lr.prototype,"indeterminate",2);l([h()],Lr.prototype,"label",2);var nm="sl-progress-bar";Lr.define("sl-progress-bar");F({tagName:nm,elementClass:Lr,react:D,events:{},displayName:"SlProgressBar"});var lm=M`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,$s=class extends N{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};$s.styles=[V,lm];l([h({type:Boolean,reflect:!0})],$s.prototype,"vertical",2);l([A("vertical")],$s.prototype,"handleVerticalChange",1);var cm="sl-divider";$s.define("sl-divider");F({tagName:cm,elementClass:$s,react:D,events:{},displayName:"SlDivider"});var dm=M`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,gl=new WeakMap;function kd(e){let t=gl.get(e);return t||(t=window.getComputedStyle(e,null),gl.set(e,t)),t}function um(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=kd(e);return t.visibility!=="hidden"&&t.display!=="none"}function hm(e){const t=kd(e),{overflowY:i,overflowX:r}=t;return i==="scroll"||r==="scroll"?!0:i!=="auto"||r!=="auto"?!1:e.scrollHeight>e.clientHeight&&i==="auto"||e.scrollWidth>e.clientWidth&&r==="auto"}function pm(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const o=e.getRootNode(),a=`input[type='radio'][name="${e.getAttribute("name")}"]`,n=o.querySelector(`${a}:checked`);return n?n===e:o.querySelector(a)===e}return um(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:hm(e):!1}function fm(e){var t,i;const r=ba(e),s=(t=r[0])!=null?t:null,o=(i=r[r.length-1])!=null?i:null;return{start:s,end:o}}function mm(e,t){var i;return((i=e.getRootNode({composed:!0}))==null?void 0:i.host)!==t}function ba(e){const t=new WeakMap,i=[];function r(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||t.has(s))return;t.set(s,!0),!i.includes(s)&&pm(s)&&i.push(s),s instanceof HTMLSlotElement&&mm(s,e)&&s.assignedElements({flatten:!0}).forEach(o=>{r(o)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&r(s.shadowRoot)}for(const o of s.children)r(o)}return r(e),i.sort((s,o)=>{const a=Number(s.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-a})}function*un(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Tu(un(e.shadowRoot.activeElement))))}function gm(){return[...un()].pop()}var Kr=[],Cd=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=gm();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=ba(this.element);let o=s.findIndex(n=>n===r);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){o+a>=s.length?o=0:o+a<0?o=s.length-1:o+=a,this.previousFocus=this.currentFocus;const n=s[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;t.preventDefault(),this.currentFocus=n,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const c=[...un()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Kr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Kr=Kr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Kr[Kr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=ba(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],r=this.tabDirection==="forward"?t:i;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function bl(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ze=class extends N{constructor(){super(...arguments),this.hasSlotController=new We(this,"footer"),this.localize=new ee(this),this.modal=new Cd(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),rs(this)))}disconnectedCallback(){super.disconnectedCallback(),ss(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=ce(this,"drawer.denyClose",{dir:this.localize.dir()});be(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),rs(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([xe(this.drawer),xe(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ce(this,`drawer.show${bl(this.placement)}`,{dir:this.localize.dir()}),i=ce(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,t.keyframes,t.options),be(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ss(this)),await Promise.all([xe(this.drawer),xe(this.overlay)]);const e=ce(this,`drawer.hide${bl(this.placement)}`,{dir:this.localize.dir()}),t=ce(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),rs(this)),this.open&&this.contained&&(this.modal.deactivate(),ss(this))}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${H({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${L(this.noHeader?this.label:void 0)}
          aria-labelledby=${L(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ze.styles=[V,dm];Ze.dependencies={"sl-icon-button":ke};l([P(".drawer")],Ze.prototype,"drawer",2);l([P(".drawer__panel")],Ze.prototype,"panel",2);l([P(".drawer__overlay")],Ze.prototype,"overlay",2);l([h({type:Boolean,reflect:!0})],Ze.prototype,"open",2);l([h({reflect:!0})],Ze.prototype,"label",2);l([h({reflect:!0})],Ze.prototype,"placement",2);l([h({type:Boolean,reflect:!0})],Ze.prototype,"contained",2);l([h({attribute:"no-header",type:Boolean,reflect:!0})],Ze.prototype,"noHeader",2);l([A("open",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleOpenChange",1);l([A("contained",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleNoModalChange",1);oe("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});oe("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});oe("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});oe("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var bm="sl-drawer";Ze.define("sl-drawer");var vm=F({tagName:bm,elementClass:Ze,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"}),Sd=vm,ym=M`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Te=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,r,s;const o=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(s=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const i=t.getAllItems(),r=i[0],s=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>fm(r).start);let i;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=t.button;break;default:i=t}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await xe(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ce(this,"dropdown.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await xe(this);const{keyframes:e,options:t}=ce(this,"dropdown.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${L(this.sync?this.sync:void 0)}
        class=${H({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Te.styles=[V,ym];Te.dependencies={"sl-popup":ie};l([P(".dropdown")],Te.prototype,"popup",2);l([P(".dropdown__trigger")],Te.prototype,"trigger",2);l([P(".dropdown__panel")],Te.prototype,"panel",2);l([h({type:Boolean,reflect:!0})],Te.prototype,"open",2);l([h({reflect:!0})],Te.prototype,"placement",2);l([h({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);l([h({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Te.prototype,"stayOpenOnSelect",2);l([h({attribute:!1})],Te.prototype,"containingElement",2);l([h({type:Number})],Te.prototype,"distance",2);l([h({type:Number})],Te.prototype,"skidding",2);l([h({type:Boolean})],Te.prototype,"hoist",2);l([h({reflect:!0})],Te.prototype,"sync",2);l([A("open",{waitUntilFirstUpdate:!0})],Te.prototype,"handleOpenChange",1);oe("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var _m="sl-dropdown";Te.define("sl-dropdown");var wm=F({tagName:_m,elementClass:Te,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"}),$d=wm,et=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return $`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};l([h()],et.prototype,"date",2);l([h()],et.prototype,"weekday",2);l([h()],et.prototype,"era",2);l([h()],et.prototype,"year",2);l([h()],et.prototype,"month",2);l([h()],et.prototype,"day",2);l([h()],et.prototype,"hour",2);l([h()],et.prototype,"minute",2);l([h()],et.prototype,"second",2);l([h({attribute:"time-zone-name"})],et.prototype,"timeZoneName",2);l([h({attribute:"time-zone"})],et.prototype,"timeZone",2);l([h({attribute:"hour-format"})],et.prototype,"hourFormat",2);var xm="sl-format-date";et.define("sl-format-date");F({tagName:xm,elementClass:et,react:D,events:{},displayName:"SlFormatDate"});var Es=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?e:t,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),s=i[r]+this.unit,o=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:s,unitDisplay:this.display})}};l([h({type:Number})],Es.prototype,"value",2);l([h()],Es.prototype,"unit",2);l([h()],Es.prototype,"display",2);var km="sl-format-bytes";Es.define("sl-format-bytes");F({tagName:km,elementClass:Es,react:D,events:{},displayName:"SlFormatBytes"});var bt=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};l([h({type:Number})],bt.prototype,"value",2);l([h()],bt.prototype,"type",2);l([h({attribute:"no-grouping",type:Boolean})],bt.prototype,"noGrouping",2);l([h()],bt.prototype,"currency",2);l([h({attribute:"currency-display"})],bt.prototype,"currencyDisplay",2);l([h({attribute:"minimum-integer-digits",type:Number})],bt.prototype,"minimumIntegerDigits",2);l([h({attribute:"minimum-fraction-digits",type:Number})],bt.prototype,"minimumFractionDigits",2);l([h({attribute:"maximum-fraction-digits",type:Number})],bt.prototype,"maximumFractionDigits",2);l([h({attribute:"minimum-significant-digits",type:Number})],bt.prototype,"minimumSignificantDigits",2);l([h({attribute:"maximum-significant-digits",type:Number})],bt.prototype,"maximumSignificantDigits",2);var Cm="sl-format-number";bt.define("sl-format-number");F({tagName:Cm,elementClass:bt,react:D,events:{},displayName:"SlFormatNumber"});var Sm="sl-icon-button";ke.define("sl-icon-button");var $m=F({tagName:Sm,elementClass:ke,react:D,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),Ge=$m,Em=M`
  :host {
    display: block;
  }
`,Ho=new Map;function Am(e,t="cors"){const i=Ho.get(e);if(i!==void 0)return Promise.resolve(i);const r=fetch(e,{mode:t}).then(async s=>{const o={ok:s.ok,status:s.status,html:await s.text()};return Ho.set(e,o),o});return Ho.set(e,r),r}var Ji=class extends N{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(i=>t.setAttribute(i.name,i.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Am(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return $`<slot></slot>`}};Ji.styles=[V,Em];l([h()],Ji.prototype,"src",2);l([h()],Ji.prototype,"mode",2);l([h({attribute:"allow-scripts",type:Boolean})],Ji.prototype,"allowScripts",2);l([A("src")],Ji.prototype,"handleSrcChange",1);var zm="sl-include";Ji.define("sl-include");F({tagName:zm,elementClass:Ji,react:D,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var Rm=M`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,hn=class extends N{constructor(){super(...arguments),this.hasSlotController=new We(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${H({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};hn.styles=[V,Rm];var Tm="sl-card";hn.define("sl-card");var Pm=F({tagName:Tm,elementClass:hn,react:D,events:{},displayName:"SlCard"}),pn=Pm,Im=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Om=M`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Lm(e,t){if(e!==void 0){let i=0;for(const r of e)yield t(r,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Nm(e,t,i=1){const r=t===void 0?0:e;t??(t=e);for(let s=r;i>0?s<t:t<s;s+=i)yield s}var fe=class extends N{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Im(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new ee(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const r=e.scrollLeft,s=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||i!==s)&&(e.scrollTo({left:r,top:s,behavior:fa()?"auto":"smooth"}),await je(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(i=>[...i.addedNodes,...i.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:r}=this,s=r?e/i:(e-t)/i+1;return Math.ceil(s)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),i=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+i*i)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,s=e.key==="ArrowDown"||!i&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!i&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),s&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector('[part~="pagination-item--active"]');n&&n.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const n of t){const c=n.target;c.toggleAttribute("inert",!n.isIntersecting),c.classList.toggle("--in-view",n.isIntersecting),c.setAttribute("aria-hidden",n.isIntersecting?"false":"true")}const i=t.find(n=>n.isIntersecting);if(!i)return;const r=this.getSlides({excludeClones:!1}),s=this.getSlides().length,o=r.indexOf(i.target),a=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+s)%s,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){const n=Number(i.target.getAttribute("data-clone"));this.goToSlide(n,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),r=e.slice(0,t);i.reverse().forEach((s,o)=>{const a=s.cloneNode(!0);a.setAttribute("data-clone",String(e.length-o-1)),this.prepend(a)}),r.forEach((s,o)=>{const a=s.cloneNode(!0);a.setAttribute("data-clone",String(o)),this.append(a)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,i)=>{t.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((i,r)=>{(r+t)%t===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:r}=this,s=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!s.length)return;const a=r?(e+s.length)%s.length:we(e,0,s.length-i);this.activeSlide=a;const n=this.localize.dir()==="rtl",c=we(e+(r?i:0)+(n?i-1:0),0,o.length-1),d=o[c];this.scrollToSlide(d,fa()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,r=i.getBoundingClientRect(),s=e.getBoundingClientRect(),o=s.left-r.left,a=s.top-r.top;o||a?(this.pendingSlideChange=!0,i.scrollTo({left:o+i.scrollLeft,top:a+i.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this,i=this.getPageCount(),r=this.getCurrentPage(),s=this.canScrollPrev(),o=this.canScrollNext(),a=this.localize.dir()==="ltr";return $`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${H({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?$`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${H({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${H({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?$`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Lm(Nm(i),n=>{const c=n===r;return $`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${H({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
                      role="tab"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",n+1,i)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(n*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};fe.styles=[V,Om];fe.dependencies={"sl-icon":ae};l([h({type:Boolean,reflect:!0})],fe.prototype,"loop",2);l([h({type:Boolean,reflect:!0})],fe.prototype,"navigation",2);l([h({type:Boolean,reflect:!0})],fe.prototype,"pagination",2);l([h({type:Boolean,reflect:!0})],fe.prototype,"autoplay",2);l([h({type:Number,attribute:"autoplay-interval"})],fe.prototype,"autoplayInterval",2);l([h({type:Number,attribute:"slides-per-page"})],fe.prototype,"slidesPerPage",2);l([h({type:Number,attribute:"slides-per-move"})],fe.prototype,"slidesPerMove",2);l([h()],fe.prototype,"orientation",2);l([h({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],fe.prototype,"mouseDragging",2);l([P(".carousel__slides")],fe.prototype,"scrollContainer",2);l([P(".carousel__pagination")],fe.prototype,"paginationContainer",2);l([B()],fe.prototype,"activeSlide",2);l([B()],fe.prototype,"scrolling",2);l([B()],fe.prototype,"dragging",2);l([ws({passive:!0})],fe.prototype,"handleScroll",1);l([A("loop",{waitUntilFirstUpdate:!0}),A("slidesPerPage",{waitUntilFirstUpdate:!0})],fe.prototype,"initializeSlides",1);l([A("activeSlide")],fe.prototype,"handleSlideChange",1);l([A("slidesPerMove")],fe.prototype,"updateSlidesSnap",1);l([A("autoplay")],fe.prototype,"handleAutoplayChange",1);var Dm="sl-carousel";fe.define("sl-carousel");F({tagName:Dm,elementClass:fe,react:D,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var Fm=M`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,fn=class extends N{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return $` <slot></slot> `}};fn.styles=[V,Fm];var Mm="sl-carousel-item";fn.define("sl-carousel-item");F({tagName:Mm,elementClass:fn,react:D,events:{},displayName:"SlCarouselItem"});var Bm=M`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,re=class extends N{constructor(){super(...arguments),this.formControlController=new ii(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new We(this,"[default]","prefix","suffix"),this.localize=new ee(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:vo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ro`a`:ro`button`;return os`
      <${t}
        part="base"
        class=${H({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${L(e?void 0:this.disabled)}
        type=${L(e?void 0:this.type)}
        title=${this.title}
        name=${L(e?void 0:this.name)}
        value=${L(e?void 0:this.value)}
        href=${L(e&&!this.disabled?this.href:void 0)}
        target=${L(e?this.target:void 0)}
        download=${L(e?this.download:void 0)}
        rel=${L(e?this.rel:void 0)}
        role=${L(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?os` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?os`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};re.styles=[V,_d];re.dependencies={"sl-icon":ae,"sl-spinner":Or};l([P(".button")],re.prototype,"button",2);l([B()],re.prototype,"hasFocus",2);l([B()],re.prototype,"invalid",2);l([h()],re.prototype,"title",2);l([h({reflect:!0})],re.prototype,"variant",2);l([h({reflect:!0})],re.prototype,"size",2);l([h({type:Boolean,reflect:!0})],re.prototype,"caret",2);l([h({type:Boolean,reflect:!0})],re.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],re.prototype,"loading",2);l([h({type:Boolean,reflect:!0})],re.prototype,"outline",2);l([h({type:Boolean,reflect:!0})],re.prototype,"pill",2);l([h({type:Boolean,reflect:!0})],re.prototype,"circle",2);l([h()],re.prototype,"type",2);l([h()],re.prototype,"name",2);l([h()],re.prototype,"value",2);l([h()],re.prototype,"href",2);l([h()],re.prototype,"target",2);l([h()],re.prototype,"rel",2);l([h()],re.prototype,"download",2);l([h()],re.prototype,"form",2);l([h({attribute:"formaction"})],re.prototype,"formAction",2);l([h({attribute:"formenctype"})],re.prototype,"formEnctype",2);l([h({attribute:"formmethod"})],re.prototype,"formMethod",2);l([h({attribute:"formnovalidate",type:Boolean})],re.prototype,"formNoValidate",2);l([h({attribute:"formtarget"})],re.prototype,"formTarget",2);l([A("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);function Ie(e,t){Hm(e)&&(e="100%");const i=Vm(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Hs(e){return Math.min(1,Math.max(0,e))}function Hm(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Vm(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Ed(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Vs(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Oi(e){return e.length===1?"0"+e:String(e)}function Um(e,t,i){return{r:Ie(e,255)*255,g:Ie(t,255)*255,b:Ie(i,255)*255}}function vl(e,t,i){e=Ie(e,255),t=Ie(t,255),i=Ie(i,255);const r=Math.max(e,t,i),s=Math.min(e,t,i);let o=0,a=0;const n=(r+s)/2;if(r===s)a=0,o=0;else{const c=r-s;switch(a=n>.5?c/(2-r-s):c/(r+s),r){case e:o=(t-i)/c+(t<i?6:0);break;case t:o=(i-e)/c+2;break;case i:o=(e-t)/c+4;break}o/=6}return{h:o,s:a,l:n}}function Vo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*(6*i):i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function qm(e,t,i){let r,s,o;if(e=Ie(e,360),t=Ie(t,100),i=Ie(i,100),t===0)s=i,o=i,r=i;else{const a=i<.5?i*(1+t):i+t-i*t,n=2*i-a;r=Vo(n,a,e+1/3),s=Vo(n,a,e),o=Vo(n,a,e-1/3)}return{r:r*255,g:s*255,b:o*255}}function yl(e,t,i){e=Ie(e,255),t=Ie(t,255),i=Ie(i,255);const r=Math.max(e,t,i),s=Math.min(e,t,i);let o=0;const a=r,n=r-s,c=r===0?0:n/r;if(r===s)o=0;else{switch(r){case e:o=(t-i)/n+(t<i?6:0);break;case t:o=(i-e)/n+2;break;case i:o=(e-t)/n+4;break}o/=6}return{h:o,s:c,v:a}}function jm(e,t,i){e=Ie(e,360)*6,t=Ie(t,100),i=Ie(i,100);const r=Math.floor(e),s=e-r,o=i*(1-t),a=i*(1-s*t),n=i*(1-(1-s)*t),c=r%6,d=[i,a,o,o,n,i][c],f=[n,i,i,a,o,o][c],u=[o,o,n,i,i,a][c];return{r:d*255,g:f*255,b:u*255}}function _l(e,t,i,r){const s=[Oi(Math.round(e).toString(16)),Oi(Math.round(t).toString(16)),Oi(Math.round(i).toString(16))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Wm(e,t,i,r,s){const o=[Oi(Math.round(e).toString(16)),Oi(Math.round(t).toString(16)),Oi(Math.round(i).toString(16)),Oi(Qm(r))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Km(e,t,i,r){const s=e/100,o=t/100,a=i/100,n=r/100,c=255*(1-s)*(1-n),d=255*(1-o)*(1-n),f=255*(1-a)*(1-n);return{r:c,g:d,b:f}}function wl(e,t,i){let r=1-e/255,s=1-t/255,o=1-i/255,a=Math.min(r,s,o);return a===1?(r=0,s=0,o=0):(r=(r-a)/(1-a)*100,s=(s-a)/(1-a)*100,o=(o-a)/(1-a)*100),a*=100,{c:Math.round(r),m:Math.round(s),y:Math.round(o),k:Math.round(a)}}function Qm(e){return Math.round(parseFloat(e)*255).toString(16)}function xl(e){return it(e)/255}function it(e){return parseInt(e,16)}function Gm(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const va={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ym(e){let t={r:0,g:0,b:0},i=1,r=null,s=null,o=null,a=!1,n=!1;return typeof e=="string"&&(e=Zm(e)),typeof e=="object"&&(tt(e.r)&&tt(e.g)&&tt(e.b)?(t=Um(e.r,e.g,e.b),a=!0,n=String(e.r).substr(-1)==="%"?"prgb":"rgb"):tt(e.h)&&tt(e.s)&&tt(e.v)?(r=Vs(e.s),s=Vs(e.v),t=jm(e.h,r,s),a=!0,n="hsv"):tt(e.h)&&tt(e.s)&&tt(e.l)?(r=Vs(e.s),o=Vs(e.l),t=qm(e.h,r,o),a=!0,n="hsl"):tt(e.c)&&tt(e.m)&&tt(e.y)&&tt(e.k)&&(t=Km(e.c,e.m,e.y,e.k),a=!0,n="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(i=e.a)),i=Ed(i),{ok:a,format:e.format||n,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}const Xm="[-\\+]?\\d+%?",Jm="[-\\+]?\\d*\\.\\d+%?",bi="(?:"+Jm+")|(?:"+Xm+")",Uo="[\\s|\\(]+("+bi+")[,|\\s]+("+bi+")[,|\\s]+("+bi+")\\s*\\)?",Us="[\\s|\\(]+("+bi+")[,|\\s]+("+bi+")[,|\\s]+("+bi+")[,|\\s]+("+bi+")\\s*\\)?",ct={CSS_UNIT:new RegExp(bi),rgb:new RegExp("rgb"+Uo),rgba:new RegExp("rgba"+Us),hsl:new RegExp("hsl"+Uo),hsla:new RegExp("hsla"+Us),hsv:new RegExp("hsv"+Uo),hsva:new RegExp("hsva"+Us),cmyk:new RegExp("cmyk"+Us),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Zm(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(va[e])e=va[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=ct.rgb.exec(e);return i?{r:i[1],g:i[2],b:i[3]}:(i=ct.rgba.exec(e),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=ct.hsl.exec(e),i?{h:i[1],s:i[2],l:i[3]}:(i=ct.hsla.exec(e),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=ct.hsv.exec(e),i?{h:i[1],s:i[2],v:i[3]}:(i=ct.hsva.exec(e),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=ct.cmyk.exec(e),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=ct.hex8.exec(e),i?{r:it(i[1]),g:it(i[2]),b:it(i[3]),a:xl(i[4]),format:t?"name":"hex8"}:(i=ct.hex6.exec(e),i?{r:it(i[1]),g:it(i[2]),b:it(i[3]),format:t?"name":"hex"}:(i=ct.hex4.exec(e),i?{r:it(i[1]+i[1]),g:it(i[2]+i[2]),b:it(i[3]+i[3]),a:xl(i[4]+i[4]),format:t?"name":"hex8"}:(i=ct.hex3.exec(e),i?{r:it(i[1]+i[1]),g:it(i[2]+i[2]),b:it(i[3]+i[3]),format:t?"name":"hex"}:!1))))))))))}function tt(e){return typeof e=="number"?!Number.isNaN(e):ct.CSS_UNIT.test(e)}class me{constructor(t="",i={}){if(t instanceof me)return t;typeof t=="number"&&(t=Gm(t)),this.originalInput=t;const r=Ym(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??r.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let i,r,s;const o=t.r/255,a=t.g/255,n=t.b/255;return o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),.2126*i+.7152*r+.0722*s}getAlpha(){return this.a}setAlpha(t){return this.a=Ed(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=yl(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=yl(this.r,this.g,this.b),i=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.v*100);return this.a===1?`hsv(${i}, ${r}%, ${s}%)`:`hsva(${i}, ${r}%, ${s}%, ${this.roundA})`}toHsl(){const t=vl(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=vl(this.r,this.g,this.b),i=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.l*100);return this.a===1?`hsl(${i}, ${r}%, ${s}%)`:`hsla(${i}, ${r}%, ${s}%, ${this.roundA})`}toHex(t=!1){return _l(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Wm(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),i=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${i}, ${r})`:`rgba(${t}, ${i}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=i=>`${Math.round(Ie(i,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=i=>Math.round(Ie(i,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...wl(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:i,y:r,k:s}=wl(this.r,this.g,this.b);return`cmyk(${t}, ${i}, ${r}, ${s})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+_l(this.r,this.g,this.b,!1);for(const[i,r]of Object.entries(va))if(t===r)return i;return!1}toString(t){const i=!!t;t=t??this.format;let r=!1;const s=this.a<1&&this.a>=0;return!i&&s&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new me(this.toString())}lighten(t=10){const i=this.toHsl();return i.l+=t/100,i.l=Hs(i.l),new me(i)}brighten(t=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(t/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(t/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(t/100)))),new me(i)}darken(t=10){const i=this.toHsl();return i.l-=t/100,i.l=Hs(i.l),new me(i)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const i=this.toHsl();return i.s-=t/100,i.s=Hs(i.s),new me(i)}saturate(t=10){const i=this.toHsl();return i.s+=t/100,i.s=Hs(i.s),new me(i)}greyscale(){return this.desaturate(100)}spin(t){const i=this.toHsl(),r=(i.h+t)%360;return i.h=r<0?360+r:r,new me(i)}mix(t,i=50){const r=this.toRgb(),s=new me(t).toRgb(),o=i/100,a={r:(s.r-r.r)*o+r.r,g:(s.g-r.g)*o+r.g,b:(s.b-r.b)*o+r.b,a:(s.a-r.a)*o+r.a};return new me(a)}analogous(t=6,i=30){const r=this.toHsl(),s=360/i,o=[this];for(r.h=(r.h-(s*t>>1)+720)%360;--t;)r.h=(r.h+s)%360,o.push(new me(r));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new me(t)}monochromatic(t=6){const i=this.toHsv(),{h:r}=i,{s}=i;let{v:o}=i;const a=[],n=1/t;for(;t--;)a.push(new me({h:r,s,v:o})),o=(o+n)%1;return a}splitcomplement(){const t=this.toHsl(),{h:i}=t;return[this,new me({h:(i+72)%360,s:t.s,l:t.l}),new me({h:(i+216)%360,s:t.s,l:t.l})]}onBackground(t){const i=this.toRgb(),r=new me(t).toRgb(),s=i.a+r.a*(1-i.a);return new me({r:(i.r*i.a+r.r*r.a*(1-i.a))/s,g:(i.g*i.a+r.g*r.a*(1-i.a))/s,b:(i.b*i.a+r.b*r.a*(1-i.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const i=this.toHsl(),{h:r}=i,s=[this],o=360/t;for(let a=1;a<t;a++)s.push(new me({h:(r+a*o)%360,s:i.s,l:i.l}));return s}equals(t){const i=new me(t);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var kl="EyeDropper"in window,G=class extends N{constructor(){super(),this.formControlController=new ii(this),this.isSafeValue=!1,this.localize=new ee(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let s=this.value,o=this.value;i.focus(),e.preventDefault(),as(t,{onMove:a=>{this.alpha=we(a/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let s=this.value,o=this.value;i.focus(),e.preventDefault(),as(t,{onMove:a=>{this.hue=we(a/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),i=t.querySelector(".color-picker__grid-handle"),{width:r,height:s}=t.getBoundingClientRect();let o=this.value,a=this.value;i.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,as(t,{onMove:(n,c)=>{this.saturation=we(n/r*100,0,100),this.brightness=we(100-c/s*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=we(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=we(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=we(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=we(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=we(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=we(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=we(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=we(this.brightness-t,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,i=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new me(e);if(!t.isValid)return null;const i=t.toHsl(),r={h:i.h,s:i.s*100,l:i.l*100,a:i.a},s=t.toRgb(),o=t.toHexString(),a=t.toHex8String(),n=t.toHsv(),c={h:n.h,s:n.s*100,v:n.v*100,a:n.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(a)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!kl)return;new EyeDropper().open().then(t=>{const i=this.value;this.setColor(t.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,i,r=100){const s=new me(`hsva(${e}, ${t}%, ${i}%, ${r/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(t);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(s=>s.trim()!==""),r=$`
      <div
        part="base"
        class=${H({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?$`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Qe({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${H({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Qe({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${L(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Qe({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${L(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?$`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Qe({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Qe({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${L(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Qe({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":$`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${kl?$`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?$`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(s=>{const o=this.parseColor(s);return o?$`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${L(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${s}
                      @click=${()=>this.selectSwatch(s)}
                      @keydown=${a=>!this.disabled&&a.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Qe({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${s}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:$`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${H({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Qe({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};G.styles=[V,Bm];G.dependencies={"sl-button-group":$i,"sl-button":re,"sl-dropdown":Te,"sl-icon":ae,"sl-input":q,"sl-visually-hidden":fo};l([P('[part~="base"]')],G.prototype,"base",2);l([P('[part~="input"]')],G.prototype,"input",2);l([P(".color-dropdown")],G.prototype,"dropdown",2);l([P('[part~="preview"]')],G.prototype,"previewButton",2);l([P('[part~="trigger"]')],G.prototype,"trigger",2);l([B()],G.prototype,"hasFocus",2);l([B()],G.prototype,"isDraggingGridHandle",2);l([B()],G.prototype,"isEmpty",2);l([B()],G.prototype,"inputValue",2);l([B()],G.prototype,"hue",2);l([B()],G.prototype,"saturation",2);l([B()],G.prototype,"brightness",2);l([B()],G.prototype,"alpha",2);l([h()],G.prototype,"value",2);l([Ar()],G.prototype,"defaultValue",2);l([h()],G.prototype,"label",2);l([h()],G.prototype,"format",2);l([h({type:Boolean,reflect:!0})],G.prototype,"inline",2);l([h({reflect:!0})],G.prototype,"size",2);l([h({attribute:"no-format-toggle",type:Boolean})],G.prototype,"noFormatToggle",2);l([h()],G.prototype,"name",2);l([h({type:Boolean,reflect:!0})],G.prototype,"disabled",2);l([h({type:Boolean})],G.prototype,"hoist",2);l([h({type:Boolean})],G.prototype,"opacity",2);l([h({type:Boolean})],G.prototype,"uppercase",2);l([h()],G.prototype,"swatches",2);l([h({reflect:!0})],G.prototype,"form",2);l([h({type:Boolean,reflect:!0})],G.prototype,"required",2);l([ws({passive:!1})],G.prototype,"handleTouchMove",1);l([A("format",{waitUntilFirstUpdate:!0})],G.prototype,"handleFormatChange",1);l([A("opacity",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpacityChange",1);l([A("value")],G.prototype,"handleValueChange",1);var eg="sl-color-picker";G.define("sl-color-picker");F({tagName:eg,elementClass:G,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var tg="sl-checkbox";Ce.define("sl-checkbox");var ig=F({tagName:tg,elementClass:Ce,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"}),Qr=ig,rg=M`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Ee=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let s=this.from,o="";i?[s,o]=this.from.trim().split("."):r&&([s,o]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in t?t.getElementById(s):null;a?r?e=a.getAttribute(o)||"":i?e=a[o]||"":e=a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),r=this.errorLabel||this.localize.term("error"),s=e==="success"?this.successIcon:this.errorIcon,o=ce(this,"copy.in",{dir:"ltr"}),a=ce(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?i:r,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=e,s.hidden=!1,await s.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await s.animate(a.keyframes,a.options).finished,s.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return $`
      <sl-tooltip
        class=${H({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Ee.styles=[V,rg];Ee.dependencies={"sl-icon":ae,"sl-tooltip":$e};l([P('slot[name="copy-icon"]')],Ee.prototype,"copyIcon",2);l([P('slot[name="success-icon"]')],Ee.prototype,"successIcon",2);l([P('slot[name="error-icon"]')],Ee.prototype,"errorIcon",2);l([P("sl-tooltip")],Ee.prototype,"tooltip",2);l([B()],Ee.prototype,"isCopying",2);l([B()],Ee.prototype,"status",2);l([h()],Ee.prototype,"value",2);l([h()],Ee.prototype,"from",2);l([h({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);l([h({attribute:"copy-label"})],Ee.prototype,"copyLabel",2);l([h({attribute:"success-label"})],Ee.prototype,"successLabel",2);l([h({attribute:"error-label"})],Ee.prototype,"errorLabel",2);l([h({attribute:"feedback-duration",type:Number})],Ee.prototype,"feedbackDuration",2);l([h({attribute:"tooltip-placement"})],Ee.prototype,"tooltipPlacement",2);l([h({type:Boolean})],Ee.prototype,"hoist",2);oe("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});oe("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var sg="sl-copy-button";Ee.define("sl-copy-button");var og=F({tagName:sg,elementClass:Ee,react:D,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"}),ag=og,ng=M`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,At=class extends N{constructor(){super(...arguments),this.hasSlotController=new We(this,"footer"),this.localize=new ee(this),this.modal=new Cd(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),rs(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ss(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=ce(this,"dialog.denyClose",{dir:this.localize.dir()});be(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),rs(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([xe(this.dialog),xe(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ce(this,"dialog.show",{dir:this.localize.dir()}),i=ce(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,t.keyframes,t.options),be(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([xe(this.dialog),xe(this.overlay)]);const e=ce(this,"dialog.hide",{dir:this.localize.dir()}),t=ce(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ss(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${H({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${L(this.noHeader?this.label:void 0)}
          aria-labelledby=${L(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":$`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};At.styles=[V,ng];At.dependencies={"sl-icon-button":ke};l([P(".dialog")],At.prototype,"dialog",2);l([P(".dialog__panel")],At.prototype,"panel",2);l([P(".dialog__overlay")],At.prototype,"overlay",2);l([h({type:Boolean,reflect:!0})],At.prototype,"open",2);l([h({reflect:!0})],At.prototype,"label",2);l([h({attribute:"no-header",type:Boolean,reflect:!0})],At.prototype,"noHeader",2);l([A("open",{waitUntilFirstUpdate:!0})],At.prototype,"handleOpenChange",1);oe("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});oe("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});oe("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});oe("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});oe("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var lg="sl-dialog";At.define("sl-dialog");var cg=F({tagName:lg,elementClass:At,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),As=cg,dg=M`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,vt=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await xe(this.body);const{keyframes:t,options:i}=ce(this,"details.show",{dir:this.localize.dir()});await be(this.body,no(t,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await xe(this.body);const{keyframes:t,options:i}=ce(this,"details.hide",{dir:this.localize.dir()});await be(this.body,no(t,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,je(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,je(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return $`
      <details
        part="base"
        class=${H({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};vt.styles=[V,dg];vt.dependencies={"sl-icon":ae};l([P(".details")],vt.prototype,"details",2);l([P(".details__header")],vt.prototype,"header",2);l([P(".details__body")],vt.prototype,"body",2);l([P(".details__expand-icon-slot")],vt.prototype,"expandIconSlot",2);l([h({type:Boolean,reflect:!0})],vt.prototype,"open",2);l([h()],vt.prototype,"summary",2);l([h({type:Boolean,reflect:!0})],vt.prototype,"disabled",2);l([A("open",{waitUntilFirstUpdate:!0})],vt.prototype,"handleOpenChange",1);oe("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});oe("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var ug="sl-details";vt.define("sl-details");F({tagName:ug,elementClass:vt,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var hg=M`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,yt=class extends N{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:i}=this.animatedImage;e.width=t,e.height=i,e.getContext("2d").drawImage(this.animatedImage,0,0,t,i),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?$`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};yt.styles=[V,hg];yt.dependencies={"sl-icon":ae};l([P(".animated-image__animated")],yt.prototype,"animatedImage",2);l([B()],yt.prototype,"frozenFrame",2);l([B()],yt.prototype,"isLoaded",2);l([h()],yt.prototype,"src",2);l([h()],yt.prototype,"alt",2);l([h({type:Boolean,reflect:!0})],yt.prototype,"play",2);l([A("play",{waitUntilFirstUpdate:!0})],yt.prototype,"handlePlayChange",1);l([A("src")],yt.prototype,"handleSrcChange",1);var pg="sl-animated-image";yt.define("sl-animated-image");F({tagName:pg,elementClass:yt,react:D,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});var fg=M`
  :host {
    display: contents;
  }
`;const mg=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],gg=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],bg=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],vg=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],yg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_g=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],wg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],xg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],kg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sg=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],$g=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Eg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ag=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],zg=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Rg=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Tg=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Pg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Ig=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Og=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Lg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ng=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Dg=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Fg=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Mg=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Bg=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Hg=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Vg=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Ug=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],qg=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],jg=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Wg=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Kg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qg=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gg=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yg=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jg=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zg=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],eb=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tb=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ib=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rb=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sb=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ob=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],ab=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],nb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],lb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],cb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],db=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],ub=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],hb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],pb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],fb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],mb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],gb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],bb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],vb=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],yb=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],_b=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],wb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],xb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],kb=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cb=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sb=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],$b=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Eb=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ab=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Rb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Tb=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Pb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Ib=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Ob=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Lb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Nb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Db=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Fb=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Mb=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bb=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Vb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Ub=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],qb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],jb=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Wb=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Kb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Gb=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Yb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Jb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Zb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ev=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],tv=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],iv=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],rv=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],sv=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ad={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},ov=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Ag,backInLeft:zg,backInRight:Rg,backInUp:Tg,backOutDown:Pg,backOutLeft:Ig,backOutRight:Og,backOutUp:Lg,bounce:mg,bounceIn:Ng,bounceInDown:Dg,bounceInLeft:Fg,bounceInRight:Mg,bounceInUp:Bg,bounceOut:Hg,bounceOutDown:Vg,bounceOutLeft:Ug,bounceOutRight:qg,bounceOutUp:jg,easings:Ad,fadeIn:Wg,fadeInBottomLeft:Kg,fadeInBottomRight:Qg,fadeInDown:Gg,fadeInDownBig:Yg,fadeInLeft:Xg,fadeInLeftBig:Jg,fadeInRight:Zg,fadeInRightBig:eb,fadeInTopLeft:tb,fadeInTopRight:ib,fadeInUp:rb,fadeInUpBig:sb,fadeOut:ob,fadeOutBottomLeft:ab,fadeOutBottomRight:nb,fadeOutDown:lb,fadeOutDownBig:cb,fadeOutLeft:db,fadeOutLeftBig:ub,fadeOutRight:hb,fadeOutRightBig:pb,fadeOutTopLeft:fb,fadeOutTopRight:mb,fadeOutUp:gb,fadeOutUpBig:bb,flash:gg,flip:vb,flipInX:yb,flipInY:_b,flipOutX:wb,flipOutY:xb,headShake:bg,heartBeat:vg,hinge:jb,jackInTheBox:Wb,jello:yg,lightSpeedInLeft:kb,lightSpeedInRight:Cb,lightSpeedOutLeft:Sb,lightSpeedOutRight:$b,pulse:_g,rollIn:Kb,rollOut:Qb,rotateIn:Eb,rotateInDownLeft:Ab,rotateInDownRight:zb,rotateInUpLeft:Rb,rotateInUpRight:Tb,rotateOut:Pb,rotateOutDownLeft:Ib,rotateOutDownRight:Ob,rotateOutUpLeft:Lb,rotateOutUpRight:Nb,rubberBand:wg,shake:xg,shakeX:kg,shakeY:Cg,slideInDown:Db,slideInLeft:Fb,slideInRight:Mb,slideInUp:Bb,slideOutDown:Hb,slideOutLeft:Vb,slideOutRight:Ub,slideOutUp:qb,swing:Sg,tada:$g,wobble:Eg,zoomIn:Gb,zoomInDown:Yb,zoomInLeft:Xb,zoomInRight:Jb,zoomInUp:Zb,zoomOut:ev,zoomOutDown:tv,zoomOutLeft:iv,zoomOutRight:rv,zoomOutUp:sv},Symbol.toStringTag,{value:"Module"}));var Ae=class extends N{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const i=(e=Ad[this.easing])!=null?e:this.easing,r=(t=this.keyframes)!=null?t:ov[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!r?!1:(this.destroyAnimation(),this.animation=o.animate(r,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ae.styles=[V,fg];l([eh("slot")],Ae.prototype,"defaultSlot",2);l([h()],Ae.prototype,"name",2);l([h({type:Boolean,reflect:!0})],Ae.prototype,"play",2);l([h({type:Number})],Ae.prototype,"delay",2);l([h()],Ae.prototype,"direction",2);l([h({type:Number})],Ae.prototype,"duration",2);l([h()],Ae.prototype,"easing",2);l([h({attribute:"end-delay",type:Number})],Ae.prototype,"endDelay",2);l([h()],Ae.prototype,"fill",2);l([h({type:Number})],Ae.prototype,"iterations",2);l([h({attribute:"iteration-start",type:Number})],Ae.prototype,"iterationStart",2);l([h({attribute:!1})],Ae.prototype,"keyframes",2);l([h({attribute:"playback-rate",type:Number})],Ae.prototype,"playbackRate",2);l([A(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ae.prototype,"handleAnimationChange",1);l([A("play")],Ae.prototype,"handlePlayChange",1);l([A("playbackRate")],Ae.prototype,"handlePlaybackRateChange",1);var av="sl-animation";Ae.define("sl-animation");F({tagName:av,elementClass:Ae,react:D,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var nv=M`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Zi=class extends N{constructor(){super(...arguments),this.localize=new ee(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,i)=>{const r=t.querySelector('[slot="separator"]');r===null?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),$`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Zi.styles=[V,nv];Zi.dependencies={"sl-icon":ae};l([P("slot")],Zi.prototype,"defaultSlot",2);l([P('slot[name="separator"]')],Zi.prototype,"separatorSlot",2);l([h()],Zi.prototype,"label",2);var lv="sl-breadcrumb";Zi.define("sl-breadcrumb");F({tagName:lv,elementClass:Zi,react:D,events:{},displayName:"SlBreadcrumb"});var cv=M`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Nr=class extends N{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <span
        part="base"
        class=${H({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Nr.styles=[V,cv];l([h({reflect:!0})],Nr.prototype,"variant",2);l([h({type:Boolean,reflect:!0})],Nr.prototype,"pill",2);l([h({type:Boolean,reflect:!0})],Nr.prototype,"pulse",2);var dv="sl-badge";Nr.define("sl-badge");F({tagName:dv,elementClass:Nr,react:D,events:{},displayName:"SlBadge"});var uv=M`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,zt=class extends N{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=$`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=$``;return this.initials?t=$`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=$`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,$`
      <div
        part="base"
        class=${H({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};zt.styles=[V,uv];zt.dependencies={"sl-icon":ae};l([B()],zt.prototype,"hasError",2);l([h()],zt.prototype,"image",2);l([h()],zt.prototype,"label",2);l([h()],zt.prototype,"initials",2);l([h()],zt.prototype,"loading",2);l([h({reflect:!0})],zt.prototype,"shape",2);l([A("image")],zt.prototype,"handleImageChange",1);var hv="sl-avatar";zt.define("sl-avatar");var pv=F({tagName:hv,elementClass:zt,react:D,events:{onSlError:"sl-error"},displayName:"SlAvatar"}),Cl=pv,fv=M`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,si=class extends N{constructor(){super(...arguments),this.hasSlotController=new We(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return $`
      <div
        part="base"
        class=${H({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?$`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${L(this.target?this.target:void 0)}"
                rel=${L(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?$`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?$`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};si.styles=[V,fv];l([P("slot:not([name])")],si.prototype,"defaultSlot",2);l([B()],si.prototype,"renderType",2);l([h()],si.prototype,"href",2);l([h()],si.prototype,"target",2);l([h()],si.prototype,"rel",2);l([A("href",{waitUntilFirstUpdate:!0})],si.prototype,"hrefChanged",1);var mv="sl-breadcrumb-item";si.define("sl-breadcrumb-item");F({tagName:mv,elementClass:si,react:D,events:{},displayName:"SlBreadcrumbItem"});var gv="sl-button-group";$i.define("sl-button-group");F({tagName:gv,elementClass:$i,react:D,events:{},displayName:"SlButtonGroup"});var bv="sl-button";re.define("sl-button");var vv=F({tagName:bv,elementClass:re,react:D,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),zs=vv,yv=M`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,lt=class Ri extends N{constructor(){super(...arguments),this.hasSlotController=new We(this,"icon","suffix"),this.localize=new ee(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,i="100%",r="0";this.countdownAnimation=t.animate([{width:i},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await xe(this.base),this.base.hidden=!1;const{keyframes:t,options:i}=ce(this,"alert.show",{dir:this.localize.dir()});await be(this.base,t,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await xe(this.base);const{keyframes:t,options:i}=ce(this,"alert.hide",{dir:this.localize.dir()});await be(this.base,t,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Ri.toastStack.parentElement===null&&document.body.append(Ri.toastStack),Ri.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ri.toastStack.removeChild(this),t(),Ri.toastStack.querySelector("sl-alert")===null&&Ri.toastStack.remove()},{once:!0})})}render(){return $`
      <div
        part="base"
        class=${H({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?$`
              <div
                class=${H({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};lt.styles=[V,yv];lt.dependencies={"sl-icon-button":ke};l([P('[part~="base"]')],lt.prototype,"base",2);l([P(".alert__countdown-elapsed")],lt.prototype,"countdownElement",2);l([h({type:Boolean,reflect:!0})],lt.prototype,"open",2);l([h({type:Boolean,reflect:!0})],lt.prototype,"closable",2);l([h({reflect:!0})],lt.prototype,"variant",2);l([h({type:Number})],lt.prototype,"duration",2);l([h({type:String,reflect:!0})],lt.prototype,"countdown",2);l([B()],lt.prototype,"remainingTime",2);l([A("open",{waitUntilFirstUpdate:!0})],lt.prototype,"handleOpenChange",1);l([A("duration")],lt.prototype,"handleDurationChange",1);var zd=lt;oe("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});oe("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var _v="sl-alert";zd.define("sl-alert");var wv=F({tagName:_v,elementClass:zd,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),xv=wv,kv=(e,t)=>{let i=0;return function(...r){window.clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...r)},t)}},Sl=(e,t,i)=>{const r=e[t];e[t]=function(...s){r.call(this,...s),i.call(this,r,...s)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,i=new WeakMap,r=o=>{for(const a of o.changedTouches)t.add(a.identifier)},s=o=>{for(const a of o.changedTouches)t.delete(a.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",s,!0),document.addEventListener("touchcancel",s,!0),Sl(EventTarget.prototype,"addEventListener",function(o,a){if(a!=="scrollend")return;const n=kv(()=>{t.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),i.set(this,n)}),Sl(EventTarget.prototype,"removeEventListener",function(o,a){if(a!=="scrollend")return;const n=i.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}})();const $l={root:{alignItems:"center",display:"flex",height:"2em",justifyContent:"start"},menu:{height:"8em"}};function xi({variant:e,selected:t,available:i=[],setSelected:r=void 0,viewMode:s=!1}){function o(n){r!==void 0&&r(t.slice(0,n).concat(t.slice(n+1)))}function a(n){r!==void 0&&r(t.concat([n]))}return console.log(t),x("div",{style:$l.root,children:[t.map((n,c)=>x(Zh,{variant:e,removable:!s,size:"small",onSlRemove:()=>o(c),children:n},c)),!s&&x($d,{children:[x(Ge,{slot:"trigger",name:"plus"}),x(wd,{style:$l.menu,onSlSelect:n=>a(n.detail.item.value),children:[i.filter(n=>!t.includes(n)).map(n=>x(sr,{value:n,children:n})),x(sr,{value:"NEW_TAG_ITEM",children:"TODO Create tag button?"})]})]})]})}const El=e=>{let t;const i=new Set,r=(d,f)=>{const u=typeof d=="function"?d(t):d;if(!Object.is(u,t)){const p=t;t=f??(typeof u!="object"||u===null)?u:Object.assign({},t,u),i.forEach(m=>m(t,p))}},s=()=>t,n={setState:r,getState:s,getInitialState:()=>c,subscribe:d=>(i.add(d),()=>i.delete(d))},c=t=e(r,s,n);return n},Cv=e=>e?El(e):El,Sv=e=>e;function $v(e,t=Sv){const i=aa.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return aa.useDebugValue(i),i}const Al=e=>{const t=Cv(e),i=r=>$v(t,r);return Object.assign(i,t),i},Ev=e=>e?Al(e):Al;var Vt=(e=>(e[e.SEARCH_SETTINGS=0]="SEARCH_SETTINGS",e[e.MAIN=1]="MAIN",e[e.COLLECTIONS_LIST=2]="COLLECTIONS_LIST",e[e.CHANGE_USERNAME=3]="CHANGE_USERNAME",e[e.CHANGE_PASSWORD=4]="CHANGE_PASSWORD",e[e.LOGIN_PROMPT=5]="LOGIN_PROMPT",e[e.NEW_RECIPE_FORM=6]="NEW_RECIPE_FORM",e[e.UPDATE_RECIPE_FORM=7]="UPDATE_RECIPE_FORM",e[e.RECIPE_SUMMARY=8]="RECIPE_SUMMARY",e))(Vt||{}),ye=(e=>(e[e.NAME=1]="NAME",e[e.AUTHOR=2]="AUTHOR",e[e.ALLERGENS=4]="ALLERGENS",e[e.REFERENCE=8]="REFERENCE",e[e.INGREDIENTS=16]="INGREDIENTS",e))(ye||{});const Av={clientUsername:"",view:1,page:0,numRowsPerPage:10,visibleColumns:11,selectedRecipeName:"",selectedRecipeReference:"",selectedRecipeAuthors:[],selectedRecipeIngredients:[],selectedRecipeAllergens:[]},Rt=Ev((e,t)=>({...Av,setMainView:()=>e({view:1}),setSettingsView:()=>e({view:0}),setLoginView:()=>e({view:5}),setChangeUserView:()=>e({view:3}),setChangePassView:()=>e({view:4}),setCollectionsView:()=>e({view:2}),setNewRecipeView:()=>e({view:6}),setUpdateRecipeView:()=>e({view:7}),setRecipeSummaryView:()=>e({view:8}),gotoFirstPage:()=>e({page:0}),gotoPrevPage:()=>e(i=>({page:Math.max(0,i.page-1)})),gotoNextPage:i=>e(r=>({page:Math.min(i-1,r.page+1)})),gotoLastPage:i=>e(()=>({page:i-1})),setRowsPerPage:i=>e({numRowsPerPage:i}),getColumnVisible:i=>(t().visibleColumns&i)>0,toggleColumn:i=>e(r=>({visibleColumns:r.visibleColumns^i})),setClientUsername:i=>e({clientUsername:i}),setSelectedRecipe:i=>e({selectedRecipeName:i.name,selectedRecipeReference:i.reference,selectedRecipeAllergens:i.allergens,selectedRecipeIngredients:i.ingredients,selectedRecipeAuthors:i.authors})}));var Gr={},zl;function zv(){if(zl)return Gr;zl=1,Object.defineProperty(Gr,"__esModule",{value:!0}),Gr.parse=a,Gr.serialize=d;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,o=(()=>{const p=function(){};return p.prototype=Object.create(null),p})();function a(p,m){const g=new o,b=p.length;if(b<2)return g;const _=(m==null?void 0:m.decode)||f;let w=0;do{const y=p.indexOf("=",w);if(y===-1)break;const C=p.indexOf(";",w),k=C===-1?b:C;if(y>k){w=p.lastIndexOf(";",y-1)+1;continue}const S=n(p,w,y),z=c(p,y,S),I=p.slice(S,z);if(g[I]===void 0){let R=n(p,y+1,k),E=c(p,k,R);const T=_(p.slice(R,E));g[I]=T}w=k+1}while(w<b);return g}function n(p,m,g){do{const b=p.charCodeAt(m);if(b!==32&&b!==9)return m}while(++m<g);return g}function c(p,m,g){for(;m>g;){const b=p.charCodeAt(--m);if(b!==32&&b!==9)return m+1}return g}function d(p,m,g){const b=(g==null?void 0:g.encode)||encodeURIComponent;if(!e.test(p))throw new TypeError(`argument name is invalid: ${p}`);const _=b(m);if(!t.test(_))throw new TypeError(`argument val is invalid: ${m}`);let w=p+"="+_;if(!g)return w;if(g.maxAge!==void 0){if(!Number.isInteger(g.maxAge))throw new TypeError(`option maxAge is invalid: ${g.maxAge}`);w+="; Max-Age="+g.maxAge}if(g.domain){if(!i.test(g.domain))throw new TypeError(`option domain is invalid: ${g.domain}`);w+="; Domain="+g.domain}if(g.path){if(!r.test(g.path))throw new TypeError(`option path is invalid: ${g.path}`);w+="; Path="+g.path}if(g.expires){if(!u(g.expires)||!Number.isFinite(g.expires.valueOf()))throw new TypeError(`option expires is invalid: ${g.expires}`);w+="; Expires="+g.expires.toUTCString()}if(g.httpOnly&&(w+="; HttpOnly"),g.secure&&(w+="; Secure"),g.partitioned&&(w+="; Partitioned"),g.priority)switch(typeof g.priority=="string"?g.priority.toLowerCase():void 0){case"low":w+="; Priority=Low";break;case"medium":w+="; Priority=Medium";break;case"high":w+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${g.priority}`)}if(g.sameSite)switch(typeof g.sameSite=="string"?g.sameSite.toLowerCase():g.sameSite){case!0:case"strict":w+="; SameSite=Strict";break;case"lax":w+="; SameSite=Lax";break;case"none":w+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${g.sameSite}`)}return w}function f(p){if(p.indexOf("%")===-1)return p;try{return decodeURIComponent(p)}catch{return p}}function u(p){return s.call(p)==="[object Date]"}return Gr}zv();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Rl="popstate";function Rv(e={}){function t(r,s){let{pathname:o,search:a,hash:n}=r.location;return ya("",{pathname:o,search:a,hash:n},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(r,s){return typeof s=="string"?s:hs(s)}return Pv(t,i,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ut(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tv(){return Math.random().toString(36).substring(2,10)}function Tl(e,t){return{usr:e.state,key:e.key,idx:t}}function ya(e,t,i=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Dr(t):t,state:i,key:t&&t.key||r||Tv()}}function hs({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Dr(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Pv(e,t,i,r={}){let{window:s=document.defaultView,v5Compat:o=!1}=r,a=s.history,n="POP",c=null,d=f();d==null&&(d=0,a.replaceState({...a.state,idx:d},""));function f(){return(a.state||{idx:null}).idx}function u(){n="POP";let _=f(),w=_==null?null:_-d;d=_,c&&c({action:n,location:b.location,delta:w})}function p(_,w){n="PUSH";let y=ya(b.location,_,w);d=f()+1;let C=Tl(y,d),k=b.createHref(y);try{a.pushState(C,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(k)}o&&c&&c({action:n,location:b.location,delta:1})}function m(_,w){n="REPLACE";let y=ya(b.location,_,w);d=f();let C=Tl(y,d),k=b.createHref(y);a.replaceState(C,"",k),o&&c&&c({action:n,location:b.location,delta:0})}function g(_){let w=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof _=="string"?_:hs(_);return y=y.replace(/ $/,"%20"),pe(w,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,w)}let b={get action(){return n},get location(){return e(s,a)},listen(_){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Rl,u),c=_,()=>{s.removeEventListener(Rl,u),c=null}},createHref(_){return t(s,_)},createURL:g,encodeLocation(_){let w=g(_);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:p,replace:m,go(_){return a.go(_)}};return b}function Rd(e,t,i="/"){return Iv(e,t,i,!1)}function Iv(e,t,i,r){let s=typeof t=="string"?Dr(t):t,o=Zt(s.pathname||"/",i);if(o==null)return null;let a=Td(e);Ov(a);let n=null;for(let c=0;n==null&&c<a.length;++c){let d=jv(o);n=Uv(a[c],d,r)}return n}function Td(e,t=[],i=[],r=""){let s=(o,a,n)=>{let c={relativePath:n===void 0?o.path||"":n,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let d=Xt([r,c.relativePath]),f=i.concat(c);o.children&&o.children.length>0&&(pe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Td(o.children,t,f,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:Hv(d,o.index),routesMeta:f})};return e.forEach((o,a)=>{var n;if(o.path===""||!((n=o.path)!=null&&n.includes("?")))s(o,a);else for(let c of Pd(o.path))s(o,a,c)}),t}function Pd(e){let t=e.split("/");if(t.length===0)return[];let[i,...r]=t,s=i.endsWith("?"),o=i.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let a=Pd(r.join("/")),n=[];return n.push(...a.map(c=>c===""?o:[o,c].join("/"))),s&&n.push(...a),n.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ov(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:Vv(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Lv=/^:[\w-]+$/,Nv=3,Dv=2,Fv=1,Mv=10,Bv=-2,Pl=e=>e==="*";function Hv(e,t){let i=e.split("/"),r=i.length;return i.some(Pl)&&(r+=Bv),t&&(r+=Dv),i.filter(s=>!Pl(s)).reduce((s,o)=>s+(Lv.test(o)?Nv:o===""?Fv:Mv),r)}function Vv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Uv(e,t,i=!1){let{routesMeta:r}=e,s={},o="/",a=[];for(let n=0;n<r.length;++n){let c=r[n],d=n===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",u=co({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),p=c.route;if(!u&&d&&i&&!r[r.length-1].route.index&&(u=co({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!u)return null;Object.assign(s,u.params),a.push({params:s,pathname:Xt([o,u.pathname]),pathnameBase:Gv(Xt([o,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(o=Xt([o,u.pathnameBase]))}return a}function co(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,r]=qv(e.path,e.caseSensitive,e.end),s=t.match(i);if(!s)return null;let o=s[0],a=o.replace(/(.)\/+$/,"$1"),n=s.slice(1);return{params:r.reduce((d,{paramName:f,isOptional:u},p)=>{if(f==="*"){let g=n[p]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const m=n[p];return u&&!m?d[f]=void 0:d[f]=(m||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:e}}function qv(e,t=!1,i=!0){Ut(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,n,c)=>(r.push({paramName:n,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function jv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ut(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Zt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=e.charAt(i);return r&&r!=="/"?null:e.slice(i)||"/"}function Wv(e,t="/"){let{pathname:i,search:r="",hash:s=""}=typeof e=="string"?Dr(e):e;return{pathname:i?i.startsWith("/")?i:Kv(i,t):t,search:Yv(r),hash:Xv(s)}}function Kv(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function qo(e,t,i,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qv(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Id(e){let t=Qv(e);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Od(e,t,i,r=!1){let s;typeof e=="string"?s=Dr(e):(s={...e},pe(!s.pathname||!s.pathname.includes("?"),qo("?","pathname","search",s)),pe(!s.pathname||!s.pathname.includes("#"),qo("#","pathname","hash",s)),pe(!s.search||!s.search.includes("#"),qo("#","search","hash",s)));let o=e===""||s.pathname==="",a=o?"/":s.pathname,n;if(a==null)n=i;else{let u=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),u-=1;s.pathname=p.join("/")}n=u>=0?t[u]:"/"}let c=Wv(s,n),d=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}var Xt=e=>e.join("/").replace(/\/\/+/g,"/"),Gv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ld=["POST","PUT","PATCH","DELETE"];new Set(Ld);var Zv=["GET",...Ld];new Set(Zv);var Fr=He(null);Fr.displayName="DataRouter";var So=He(null);So.displayName="DataRouterState";var Nd=He({isTransitioning:!1});Nd.displayName="ViewTransition";var e0=He(new Map);e0.displayName="Fetchers";var t0=He(null);t0.displayName="Await";var jt=He(null);jt.displayName="Navigation";var Rs=He(null);Rs.displayName="Location";var Wt=He({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var mn=He(null);mn.displayName="RouteError";function i0(e,{relative:t}={}){pe(Ts(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=J(jt),{hash:s,pathname:o,search:a}=Ps(e,{relative:t}),n=o;return i!=="/"&&(n=o==="/"?i:Xt([i,o])),r.createHref({pathname:n,search:a,hash:s})}function Ts(){return J(Rs)!=null}function er(){return pe(Ts(),"useLocation() may be used only in the context of a <Router> component."),J(Rs).location}var Dd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fd(e){J(jt).static||ki(e)}function r0(){let{isDataRoute:e}=J(Wt);return e?g0():s0()}function s0(){pe(Ts(),"useNavigate() may be used only in the context of a <Router> component.");let e=J(Fr),{basename:t,navigator:i}=J(jt),{matches:r}=J(Wt),{pathname:s}=er(),o=JSON.stringify(Id(r)),a=pt(!1);return Fd(()=>{a.current=!0}),ti((c,d={})=>{if(Ut(a.current,Dd),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=Od(c,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Xt([t,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[t,i,o,s,e])}He(null);function Mr(){let{matches:e}=J(Wt),t=e[e.length-1];return t?t.params:{}}function Ps(e,{relative:t}={}){let{matches:i}=J(Wt),{pathname:r}=er(),s=JSON.stringify(Id(i));return ot(()=>Od(e,JSON.parse(s),r,t==="path"),[e,s,r,t])}function o0(e,t){return Md(e,t)}function Md(e,t,i,r){var y;pe(Ts(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:o}=J(jt),{matches:a}=J(Wt),n=a[a.length-1],c=n?n.params:{},d=n?n.pathname:"/",f=n?n.pathnameBase:"/",u=n&&n.route;{let C=u&&u.path||"";Bd(d,!u||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let p=er(),m;if(t){let C=typeof t=="string"?Dr(t):t;pe(f==="/"||((y=C.pathname)==null?void 0:y.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${C.pathname}" was given in the \`location\` prop.`),m=C}else m=p;let g=m.pathname||"/",b=g;if(f!=="/"){let C=f.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let _=!o&&i&&i.matches&&i.matches.length>0?i.matches:Rd(e,{pathname:b});Ut(u||_!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Ut(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=d0(_&&_.map(C=>Object.assign({},C,{params:Object.assign({},c,C.params),pathname:Xt([f,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?f:Xt([f,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,i,r);return t&&w?K(Rs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},w):w}function a0(){let e=m0(),t=Jv(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=K(Oe,null,K("p",null,"💿 Hey developer 👋"),K("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K("code",{style:o},"ErrorBoundary")," or"," ",K("code",{style:o},"errorElement")," prop on your route.")),K(Oe,null,K("h2",null,"Unexpected Application Error!"),K("h3",{style:{fontStyle:"italic"}},t),i?K("pre",{style:s},i):null,a)}var n0=K(a0,null),l0=class extends ht{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?K(Wt.Provider,{value:this.props.routeContext},K(mn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function c0({routeContext:e,match:t,children:i}){let r=J(Fr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),K(Wt.Provider,{value:e},i)}function d0(e,t=[],i=null,r=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let s=e,o=i==null?void 0:i.errors;if(o!=null){let c=s.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);pe(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,c+1))}let a=!1,n=-1;if(i)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(n=c),d.route.id){let{loaderData:f,errors:u}=i,p=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!u||u[d.route.id]===void 0);if(d.route.lazy||p){a=!0,n>=0?s=s.slice(0,n+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let u,p=!1,m=null,g=null;i&&(u=o&&d.route.id?o[d.route.id]:void 0,m=d.route.errorElement||n0,a&&(n<0&&f===0?(Bd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,g=null):n===f&&(p=!0,g=d.route.hydrateFallbackElement||null)));let b=t.concat(s.slice(0,f+1)),_=()=>{let w;return u?w=m:p?w=g:d.route.Component?w=K(d.route.Component,null):d.route.element?w=d.route.element:w=c,K(c0,{match:d,routeContext:{outlet:c,matches:b,isDataRoute:i!=null},children:w})};return i&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?K(l0,{location:i.location,revalidation:i.revalidation,component:m,error:u,children:_(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):_()},null)}function gn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function u0(e){let t=J(Fr);return pe(t,gn(e)),t}function h0(e){let t=J(So);return pe(t,gn(e)),t}function p0(e){let t=J(Wt);return pe(t,gn(e)),t}function bn(e){let t=p0(e),i=t.matches[t.matches.length-1];return pe(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function f0(){return bn("useRouteId")}function m0(){var r;let e=J(mn),t=h0("useRouteError"),i=bn("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[i]}function g0(){let{router:e}=u0("useNavigate"),t=bn("useNavigate"),i=pt(!1);return Fd(()=>{i.current=!0}),ti(async(s,o={})=>{Ut(i.current,Dd),i.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...o}))},[e,t])}var Il={};function Bd(e,t,i){!t&&!Il[e]&&(Il[e]=!0,Ut(!1,i))}Xa(b0);function b0({routes:e,future:t,state:i}){return Md(e,void 0,i,t)}function Xs(e){pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function v0({basename:e="/",children:t=null,location:i,navigationType:r="POP",navigator:s,static:o=!1}){pe(!Ts(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),n=ot(()=>({basename:a,navigator:s,static:o,future:{}}),[a,s,o]);typeof i=="string"&&(i=Dr(i));let{pathname:c="/",search:d="",hash:f="",state:u=null,key:p="default"}=i,m=ot(()=>{let g=Zt(c,a);return g==null?null:{location:{pathname:g,search:d,hash:f,state:u,key:p},navigationType:r}},[a,c,d,f,u,p,r]);return Ut(m!=null,`<Router basename="${a}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:K(jt.Provider,{value:n},K(Rs.Provider,{children:t,value:m}))}function y0({children:e,location:t}){return o0(_a(e),t)}function _a(e,t=[]){let i=[];return Ja.forEach(e,(r,s)=>{if(!Er(r))return;let o=[...t,s];if(r.type===Oe){i.push.apply(i,_a(r.props.children,o));return}pe(r.type===Xs,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),pe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=_a(r.props.children,o)),i.push(a)}),i}var Js="get",Zs="application/x-www-form-urlencoded";function $o(e){return e!=null&&typeof e.tagName=="string"}function _0(e){return $o(e)&&e.tagName.toLowerCase()==="button"}function w0(e){return $o(e)&&e.tagName.toLowerCase()==="form"}function x0(e){return $o(e)&&e.tagName.toLowerCase()==="input"}function k0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C0(e,t){return e.button===0&&(!t||t==="_self")&&!k0(e)}var qs=null;function S0(){if(qs===null)try{new FormData(document.createElement("form"),0),qs=!1}catch{qs=!0}return qs}var $0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jo(e){return e!=null&&!$0.has(e)?(Ut(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zs}"`),null):e}function E0(e,t){let i,r,s,o,a;if(w0(e)){let n=e.getAttribute("action");r=n?Zt(n,t):null,i=e.getAttribute("method")||Js,s=jo(e.getAttribute("enctype"))||Zs,o=new FormData(e)}else if(_0(e)||x0(e)&&(e.type==="submit"||e.type==="image")){let n=e.form;if(n==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||n.getAttribute("action");if(r=c?Zt(c,t):null,i=e.getAttribute("formmethod")||n.getAttribute("method")||Js,s=jo(e.getAttribute("formenctype"))||jo(n.getAttribute("enctype"))||Zs,o=new FormData(n,e),!S0()){let{name:d,type:f,value:u}=e;if(f==="image"){let p=d?`${d}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else d&&o.append(d,u)}}else{if($o(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Js,r=null,s=Zs,a=e}return o&&s==="text/plain"&&(a=o,o=void 0),{action:r,method:i.toLowerCase(),encType:s,formData:o,body:a}}function vn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function A0(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function z0(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function R0(e,t,i){let r=await Promise.all(e.map(async s=>{let o=t.routes[s.route.id];if(o){let a=await A0(o,i);return a.links?a.links():[]}return[]}));return O0(r.flat(1).filter(z0).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Ol(e,t,i,r,s,o){let a=(c,d)=>i[d]?c.route.id!==i[d].route.id:!0,n=(c,d)=>{var f;return i[d].pathname!==c.pathname||((f=i[d].route.path)==null?void 0:f.endsWith("*"))&&i[d].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,d)=>a(c,d)||n(c,d)):o==="data"?t.filter((c,d)=>{var u;let f=r.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(a(c,d)||n(c,d))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((u=i[0])==null?void 0:u.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function T0(e,t,{includeHydrateFallback:i}={}){return P0(e.map(r=>{let s=t.routes[r.route.id];if(!s)return[];let o=[s.module];return s.clientActionModule&&(o=o.concat(s.clientActionModule)),s.clientLoaderModule&&(o=o.concat(s.clientLoaderModule)),i&&s.hydrateFallbackModule&&(o=o.concat(s.hydrateFallbackModule)),s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function P0(e){return[...new Set(e)]}function I0(e){let t={},i=Object.keys(e).sort();for(let r of i)t[r]=e[r];return t}function O0(e,t){let i=new Set;return new Set(t),e.reduce((r,s)=>{let o=JSON.stringify(I0(s));return i.has(o)||(i.add(o),r.push({key:o,link:s})),r},[])}function L0(e,t){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname="_root.data":t&&Zt(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Hd(){let e=J(Fr);return vn(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function N0(){let e=J(So);return vn(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var yn=He(void 0);yn.displayName="FrameworkContext";function Vd(){let e=J(yn);return vn(e,"You must render this element inside a <HydratedRouter> element"),e}function D0(e,t){let i=J(yn),[r,s]=he(!1),[o,a]=he(!1),{onFocus:n,onBlur:c,onMouseEnter:d,onMouseLeave:f,onTouchStart:u}=t,p=pt(null);Bt(()=>{if(e==="render"&&a(!0),e==="viewport"){let b=w=>{w.forEach(y=>{a(y.isIntersecting)})},_=new IntersectionObserver(b,{threshold:.5});return p.current&&_.observe(p.current),()=>{_.disconnect()}}},[e]),Bt(()=>{if(r){let b=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(b)}}},[r]);let m=()=>{s(!0)},g=()=>{s(!1),a(!1)};return i?e!=="intent"?[o,p,{}]:[o,p,{onFocus:Yr(n,m),onBlur:Yr(c,g),onMouseEnter:Yr(d,m),onMouseLeave:Yr(f,g),onTouchStart:Yr(u,m)}]:[!1,p,{}]}function Yr(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function F0({page:e,...t}){let{router:i}=Hd(),r=ot(()=>Rd(i.routes,e,i.basename),[i.routes,e,i.basename]);return r?K(B0,{page:e,matches:r,...t}):null}function M0(e){let{manifest:t,routeModules:i}=Vd(),[r,s]=he([]);return Bt(()=>{let o=!1;return R0(e,t,i).then(a=>{o||s(a)}),()=>{o=!0}},[e,t,i]),r}function B0({page:e,matches:t,...i}){let r=er(),{manifest:s,routeModules:o}=Vd(),{basename:a}=Hd(),{loaderData:n,matches:c}=N0(),d=ot(()=>Ol(e,t,c,s,r,"data"),[e,t,c,s,r]),f=ot(()=>Ol(e,t,c,s,r,"assets"),[e,t,c,s,r]),u=ot(()=>{if(e===r.pathname+r.search+r.hash)return[];let g=new Set,b=!1;if(t.forEach(w=>{var C;let y=s.routes[w.route.id];!y||!y.hasLoader||(!d.some(k=>k.route.id===w.route.id)&&w.route.id in n&&((C=o[w.route.id])!=null&&C.shouldRevalidate)||y.hasClientLoader?b=!0:g.add(w.route.id))}),g.size===0)return[];let _=L0(e,a);return b&&g.size>0&&_.searchParams.set("_routes",t.filter(w=>g.has(w.route.id)).map(w=>w.route.id).join(",")),[_.pathname+_.search]},[a,n,r,s,d,t,e,o]),p=ot(()=>T0(f,s),[f,s]),m=M0(f);return K(Oe,null,u.map(g=>K("link",{key:g,rel:"prefetch",as:"fetch",href:g,...i})),p.map(g=>K("link",{key:g,rel:"modulepreload",href:g,...i})),m.map(({key:g,link:b})=>K("link",{key:g,...b})))}function H0(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Ud=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ud&&(window.__reactRouterVersion="7.5.0")}catch{}function V0({basename:e,children:t,window:i}){let r=pt();r.current==null&&(r.current=Rv({window:i,v5Compat:!0}));let s=r.current,[o,a]=he({action:s.action,location:s.location}),n=ti(c=>{bo(()=>a(c))},[a]);return ki(()=>s.listen(n),[s,n]),K(v0,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s})}var qd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jd=xs(function({onClick:t,discover:i="render",prefetch:r="none",relative:s,reloadDocument:o,replace:a,state:n,target:c,to:d,preventScrollReset:f,viewTransition:u,...p},m){let{basename:g}=J(jt),b=typeof d=="string"&&qd.test(d),_,w=!1;if(typeof d=="string"&&b&&(_=d,Ud))try{let E=new URL(window.location.href),T=d.startsWith("//")?new URL(E.protocol+d):new URL(d),W=Zt(T.pathname,g);T.origin===E.origin&&W!=null?d=W+T.search+T.hash:w=!0}catch{Ut(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=i0(d,{relative:s}),[C,k,S]=D0(r,p),z=W0(d,{replace:a,state:n,target:c,preventScrollReset:f,relative:s,viewTransition:u});function I(E){t&&t(E),E.defaultPrevented||z(E)}let R=K("a",{...p,...S,href:_||y,onClick:w||o?t:I,ref:H0(m,k),target:c,"data-discover":!b&&i==="render"?"true":void 0});return C&&!b?K(Oe,null,R,K(F0,{page:y})):R});jd.displayName="Link";var U0=xs(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:s=!1,style:o,to:a,viewTransition:n,children:c,...d},f){let u=Ps(a,{relative:d.relative}),p=er(),m=J(So),{navigator:g,basename:b}=J(jt),_=m!=null&&X0(u)&&n===!0,w=g.encodeLocation?g.encodeLocation(u).pathname:u.pathname,y=p.pathname,C=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(y=y.toLowerCase(),C=C?C.toLowerCase():null,w=w.toLowerCase()),C&&b&&(C=Zt(C,b)||C);const k=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let S=y===w||!s&&y.startsWith(w)&&y.charAt(k)==="/",z=C!=null&&(C===w||!s&&C.startsWith(w)&&C.charAt(w.length)==="/"),I={isActive:S,isPending:z,isTransitioning:_},R=S?t:void 0,E;typeof r=="function"?E=r(I):E=[r,S?"active":null,z?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let T=typeof o=="function"?o(I):o;return K(jd,{...d,"aria-current":R,className:E,ref:f,style:T,to:a,viewTransition:n},typeof c=="function"?c(I):c)});U0.displayName="NavLink";var q0=xs(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:s,state:o,method:a=Js,action:n,onSubmit:c,relative:d,preventScrollReset:f,viewTransition:u,...p},m)=>{let g=G0(),b=Y0(n,{relative:d}),_=a.toLowerCase()==="get"?"get":"post",w=typeof n=="string"&&qd.test(n);return K("form",{ref:m,method:_,action:b,onSubmit:r?c:C=>{if(c&&c(C),C.defaultPrevented)return;C.preventDefault();let k=C.nativeEvent.submitter,S=(k==null?void 0:k.getAttribute("formmethod"))||a;g(k||C.currentTarget,{fetcherKey:t,method:S,navigate:i,replace:s,state:o,relative:d,preventScrollReset:f,viewTransition:u})},...p,"data-discover":!w&&e==="render"?"true":void 0})});q0.displayName="Form";function j0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wd(e){let t=J(Fr);return pe(t,j0(e)),t}function W0(e,{target:t,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}={}){let n=r0(),c=er(),d=Ps(e,{relative:o});return ti(f=>{if(C0(f,t)){f.preventDefault();let u=i!==void 0?i:hs(c)===hs(d);n(e,{replace:u,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,n,d,i,r,t,e,s,o,a])}var K0=0,Q0=()=>`__${String(++K0)}__`;function G0(){let{router:e}=Wd("useSubmit"),{basename:t}=J(jt),i=f0();return ti(async(r,s={})=>{let{action:o,method:a,encType:n,formData:c,body:d}=E0(r,t);if(s.navigate===!1){let f=s.fetcherKey||Q0();await e.fetch(f,i,s.action||o,{preventScrollReset:s.preventScrollReset,formData:c,body:d,formMethod:s.method||a,formEncType:s.encType||n,flushSync:s.flushSync})}else await e.navigate(s.action||o,{preventScrollReset:s.preventScrollReset,formData:c,body:d,formMethod:s.method||a,formEncType:s.encType||n,replace:s.replace,state:s.state,fromRouteId:i,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,i])}function Y0(e,{relative:t}={}){let{basename:i}=J(jt),r=J(Wt);pe(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),o={...Ps(e||".",{relative:t})},a=er();if(e==null){o.search=a.search;let n=new URLSearchParams(o.search),c=n.getAll("index");if(c.some(f=>f==="")){n.delete("index"),c.filter(u=>u).forEach(u=>n.append("index",u));let f=n.toString();o.search=f?`?${f}`:""}}return(!e||e===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(o.pathname=o.pathname==="/"?i:Xt([i,o.pathname])),hs(o)}function X0(e,t={}){let i=J(Nd);pe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Wd("useViewTransitionState"),s=Ps(e,{relative:t.relative});if(!i.isTransitioning)return!1;let o=Zt(i.currentLocation.pathname,r)||i.currentLocation.pathname,a=Zt(i.nextLocation.pathname,r)||i.nextLocation.pathname;return co(s.pathname,a)!=null||co(s.pathname,o)!=null}new TextEncoder;var Is=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Qi=typeof window>"u"||"Deno"in globalThis;function ut(){}function J0(e,t){return typeof e=="function"?e(t):e}function wa(e){return typeof e=="number"&&e>=0&&e!==1/0}function Kd(e,t){return Math.max(e+(t||0)-Date.now(),0)}function nr(e,t){return typeof e=="function"?e(t):e}function kt(e,t){return typeof e=="function"?e(t):e}function Ll(e,t){const{type:i="all",exact:r,fetchStatus:s,predicate:o,queryKey:a,stale:n}=e;if(a){if(r){if(t.queryHash!==_n(a,t.options))return!1}else if(!fs(t.queryKey,a))return!1}if(i!=="all"){const c=t.isActive();if(i==="active"&&!c||i==="inactive"&&c)return!1}return!(typeof n=="boolean"&&t.isStale()!==n||s&&s!==t.state.fetchStatus||o&&!o(t))}function Nl(e,t){const{exact:i,status:r,predicate:s,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(i){if(ps(t.options.mutationKey)!==ps(o))return!1}else if(!fs(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||s&&!s(t))}function _n(e,t){return((t==null?void 0:t.queryKeyHashFn)||ps)(e)}function ps(e){return JSON.stringify(e,(t,i)=>ka(i)?Object.keys(i).sort().reduce((r,s)=>(r[s]=i[s],r),{}):i)}function fs(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(i=>fs(e[i],t[i])):!1}function Qd(e,t){if(e===t)return e;const i=Dl(e)&&Dl(t);if(i||ka(e)&&ka(t)){const r=i?e:Object.keys(e),s=r.length,o=i?t:Object.keys(t),a=o.length,n=i?[]:{};let c=0;for(let d=0;d<a;d++){const f=i?d:o[d];(!i&&r.includes(f)||i)&&e[f]===void 0&&t[f]===void 0?(n[f]=void 0,c++):(n[f]=Qd(e[f],t[f]),n[f]===e[f]&&e[f]!==void 0&&c++)}return s===a&&c===s?e:n}return t}function xa(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(e[i]!==t[i])return!1;return!0}function Dl(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function ka(e){if(!Fl(e))return!1;const t=e.constructor;if(t===void 0)return!0;const i=t.prototype;return!(!Fl(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Fl(e){return Object.prototype.toString.call(e)==="[object Object]"}function Z0(e){return new Promise(t=>{setTimeout(t,e)})}function Ca(e,t,i){return typeof i.structuralSharing=="function"?i.structuralSharing(e,t):i.structuralSharing!==!1?Qd(e,t):t}function ey(e,t,i=0){const r=[...e,t];return i&&r.length>i?r.slice(1):r}function ty(e,t,i=0){const r=[t,...e];return i&&r.length>i?r.slice(0,-1):r}var Br=Symbol();function Gd(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Br?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Ni,di,lr,tc,iy=(tc=class extends Is{constructor(){super();U(this,Ni);U(this,di);U(this,lr);O(this,lr,t=>{if(!Qi&&window.addEventListener){const i=()=>t();return window.addEventListener("visibilitychange",i,!1),()=>{window.removeEventListener("visibilitychange",i)}}})}onSubscribe(){v(this,di)||this.setEventListener(v(this,lr))}onUnsubscribe(){var t;this.hasListeners()||((t=v(this,di))==null||t.call(this),O(this,di,void 0))}setEventListener(t){var i;O(this,lr,t),(i=v(this,di))==null||i.call(this),O(this,di,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){v(this,Ni)!==t&&(O(this,Ni,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(i=>{i(t)})}isFocused(){var t;return typeof v(this,Ni)=="boolean"?v(this,Ni):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Ni=new WeakMap,di=new WeakMap,lr=new WeakMap,tc),wn=new iy,cr,ui,dr,ic,ry=(ic=class extends Is{constructor(){super();U(this,cr,!0);U(this,ui);U(this,dr);O(this,dr,t=>{if(!Qi&&window.addEventListener){const i=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",i,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",r)}}})}onSubscribe(){v(this,ui)||this.setEventListener(v(this,dr))}onUnsubscribe(){var t;this.hasListeners()||((t=v(this,ui))==null||t.call(this),O(this,ui,void 0))}setEventListener(t){var i;O(this,dr,t),(i=v(this,ui))==null||i.call(this),O(this,ui,t(this.setOnline.bind(this)))}setOnline(t){v(this,cr)!==t&&(O(this,cr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return v(this,cr)}},cr=new WeakMap,ui=new WeakMap,dr=new WeakMap,ic),uo=new ry;function Sa(){let e,t;const i=new Promise((s,o)=>{e=s,t=o});i.status="pending",i.catch(()=>{});function r(s){Object.assign(i,s),delete i.resolve,delete i.reject}return i.resolve=s=>{r({status:"fulfilled",value:s}),e(s)},i.reject=s=>{r({status:"rejected",reason:s}),t(s)},i}function sy(e){return Math.min(1e3*2**e,3e4)}function Yd(e){return(e??"online")==="online"?uo.isOnline():!0}var Xd=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Wo(e){return e instanceof Xd}function Jd(e){let t=!1,i=0,r=!1,s;const o=Sa(),a=b=>{var _;r||(p(new Xd(b)),(_=e.abort)==null||_.call(e))},n=()=>{t=!0},c=()=>{t=!1},d=()=>wn.isFocused()&&(e.networkMode==="always"||uo.isOnline())&&e.canRun(),f=()=>Yd(e.networkMode)&&e.canRun(),u=b=>{var _;r||(r=!0,(_=e.onSuccess)==null||_.call(e,b),s==null||s(),o.resolve(b))},p=b=>{var _;r||(r=!0,(_=e.onError)==null||_.call(e,b),s==null||s(),o.reject(b))},m=()=>new Promise(b=>{var _;s=w=>{(r||d())&&b(w)},(_=e.onPause)==null||_.call(e)}).then(()=>{var b;s=void 0,r||(b=e.onContinue)==null||b.call(e)}),g=()=>{if(r)return;let b;const _=i===0?e.initialPromise:void 0;try{b=_??e.fn()}catch(w){b=Promise.reject(w)}Promise.resolve(b).then(u).catch(w=>{var z;if(r)return;const y=e.retry??(Qi?0:3),C=e.retryDelay??sy,k=typeof C=="function"?C(i,w):C,S=y===!0||typeof y=="number"&&i<y||typeof y=="function"&&y(i,w);if(t||!S){p(w);return}i++,(z=e.onFail)==null||z.call(e,i,w),Z0(k).then(()=>d()?void 0:m()).then(()=>{t?p(w):g()})})};return{promise:o,cancel:a,continue:()=>(s==null||s(),o),cancelRetry:n,continueRetry:c,canStart:f,start:()=>(f()?g():m().then(g),o)}}var oy=e=>setTimeout(e,0);function ay(){let e=[],t=0,i=n=>{n()},r=n=>{n()},s=oy;const o=n=>{t?e.push(n):s(()=>{i(n)})},a=()=>{const n=e;e=[],n.length&&s(()=>{r(()=>{n.forEach(c=>{i(c)})})})};return{batch:n=>{let c;t++;try{c=n()}finally{t--,t||a()}return c},batchCalls:n=>(...c)=>{o(()=>{n(...c)})},schedule:o,setNotifyFunction:n=>{i=n},setBatchNotifyFunction:n=>{r=n},setScheduler:n=>{s=n}}}var Pe=ay(),Di,rc,Zd=(rc=class{constructor(){U(this,Di)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),wa(this.gcTime)&&O(this,Di,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Qi?1/0:5*60*1e3))}clearGcTimeout(){v(this,Di)&&(clearTimeout(v(this,Di)),O(this,Di,void 0))}},Di=new WeakMap,rc),ur,hr,dt,Fi,Me,ms,Mi,wt,Kt,sc,ny=(sc=class extends Zd{constructor(t){super();U(this,wt);U(this,ur);U(this,hr);U(this,dt);U(this,Fi);U(this,Me);U(this,ms);U(this,Mi);O(this,Mi,!1),O(this,ms,t.defaultOptions),this.setOptions(t.options),this.observers=[],O(this,Fi,t.client),O(this,dt,v(this,Fi).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,O(this,ur,ly(this.options)),this.state=t.state??v(this,ur),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=v(this,Me))==null?void 0:t.promise}setOptions(t){this.options={...v(this,ms),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&v(this,dt).remove(this)}setData(t,i){const r=Ca(this.state.data,t,this.options);return Y(this,wt,Kt).call(this,{data:r,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual}),r}setState(t,i){Y(this,wt,Kt).call(this,{type:"setState",state:t,setStateOptions:i})}cancel(t){var r,s;const i=(r=v(this,Me))==null?void 0:r.promise;return(s=v(this,Me))==null||s.cancel(t),i?i.then(ut).catch(ut):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(v(this,ur))}isActive(){return this.observers.some(t=>kt(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Br||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!Kd(this.state.dataUpdatedAt,t)}onFocus(){var i;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(i=v(this,Me))==null||i.continue()}onOnline(){var i;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(i=v(this,Me))==null||i.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),v(this,dt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(i=>i!==t),this.observers.length||(v(this,Me)&&(v(this,Mi)?v(this,Me).cancel({revert:!0}):v(this,Me).cancelRetry()),this.scheduleGc()),v(this,dt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Y(this,wt,Kt).call(this,{type:"invalidate"})}fetch(t,i){var c,d,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(v(this,Me))return v(this,Me).continueRetry(),v(this,Me).promise}if(t&&this.setOptions(t),!this.options.queryFn){const u=this.observers.find(p=>p.options.queryFn);u&&this.setOptions(u.options)}const r=new AbortController,s=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(O(this,Mi,!0),r.signal)})},o=()=>{const u=Gd(this.options,i),p={client:v(this,Fi),queryKey:this.queryKey,meta:this.meta};return s(p),O(this,Mi,!1),this.options.persister?this.options.persister(u,p,this):u(p)},a={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:v(this,Fi),state:this.state,fetchFn:o};s(a),(c=this.options.behavior)==null||c.onFetch(a,this),O(this,hr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=a.fetchOptions)==null?void 0:d.meta))&&Y(this,wt,Kt).call(this,{type:"fetch",meta:(f=a.fetchOptions)==null?void 0:f.meta});const n=u=>{var p,m,g,b;Wo(u)&&u.silent||Y(this,wt,Kt).call(this,{type:"error",error:u}),Wo(u)||((m=(p=v(this,dt).config).onError)==null||m.call(p,u,this),(b=(g=v(this,dt).config).onSettled)==null||b.call(g,this.state.data,u,this)),this.scheduleGc()};return O(this,Me,Jd({initialPromise:i==null?void 0:i.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:u=>{var p,m,g,b;if(u===void 0){n(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(u)}catch(_){n(_);return}(m=(p=v(this,dt).config).onSuccess)==null||m.call(p,u,this),(b=(g=v(this,dt).config).onSettled)==null||b.call(g,u,this.state.error,this),this.scheduleGc()},onError:n,onFail:(u,p)=>{Y(this,wt,Kt).call(this,{type:"failed",failureCount:u,error:p})},onPause:()=>{Y(this,wt,Kt).call(this,{type:"pause"})},onContinue:()=>{Y(this,wt,Kt).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),v(this,Me).start()}},ur=new WeakMap,hr=new WeakMap,dt=new WeakMap,Fi=new WeakMap,Me=new WeakMap,ms=new WeakMap,Mi=new WeakMap,wt=new WeakSet,Kt=function(t){const i=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...eu(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=t.error;return Wo(s)&&s.revert&&v(this,hr)?{...v(this,hr),fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=i(this.state),Pe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),v(this,dt).notify({query:this,type:"updated",action:t})})},sc);function eu(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Yd(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function ly(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,i=t!==void 0,r=i?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:i?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var It,oc,cy=(oc=class extends Is{constructor(t={}){super();U(this,It);this.config=t,O(this,It,new Map)}build(t,i,r){const s=i.queryKey,o=i.queryHash??_n(s,i);let a=this.get(o);return a||(a=new ny({client:t,queryKey:s,queryHash:o,options:t.defaultQueryOptions(i),state:r,defaultOptions:t.getQueryDefaults(s)}),this.add(a)),a}add(t){v(this,It).has(t.queryHash)||(v(this,It).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const i=v(this,It).get(t.queryHash);i&&(t.destroy(),i===t&&v(this,It).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Pe.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return v(this,It).get(t)}getAll(){return[...v(this,It).values()]}find(t){const i={exact:!0,...t};return this.getAll().find(r=>Ll(i,r))}findAll(t={}){const i=this.getAll();return Object.keys(t).length>0?i.filter(r=>Ll(t,r)):i}notify(t){Pe.batch(()=>{this.listeners.forEach(i=>{i(t)})})}onFocus(){Pe.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Pe.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},It=new WeakMap,oc),Ot,Ue,Bi,Lt,li,ac,dy=(ac=class extends Zd{constructor(t){super();U(this,Lt);U(this,Ot);U(this,Ue);U(this,Bi);this.mutationId=t.mutationId,O(this,Ue,t.mutationCache),O(this,Ot,[]),this.state=t.state||uy(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){v(this,Ot).includes(t)||(v(this,Ot).push(t),this.clearGcTimeout(),v(this,Ue).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){O(this,Ot,v(this,Ot).filter(i=>i!==t)),this.scheduleGc(),v(this,Ue).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){v(this,Ot).length||(this.state.status==="pending"?this.scheduleGc():v(this,Ue).remove(this))}continue(){var t;return((t=v(this,Bi))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,o,a,n,c,d,f,u,p,m,g,b,_,w,y,C,k,S,z,I;O(this,Bi,Jd({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(R,E)=>{Y(this,Lt,li).call(this,{type:"failed",failureCount:R,error:E})},onPause:()=>{Y(this,Lt,li).call(this,{type:"pause"})},onContinue:()=>{Y(this,Lt,li).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>v(this,Ue).canRun(this)}));const i=this.state.status==="pending",r=!v(this,Bi).canStart();try{if(!i){Y(this,Lt,li).call(this,{type:"pending",variables:t,isPaused:r}),await((o=(s=v(this,Ue).config).onMutate)==null?void 0:o.call(s,t,this));const E=await((n=(a=this.options).onMutate)==null?void 0:n.call(a,t));E!==this.state.context&&Y(this,Lt,li).call(this,{type:"pending",context:E,variables:t,isPaused:r})}const R=await v(this,Bi).start();return await((d=(c=v(this,Ue).config).onSuccess)==null?void 0:d.call(c,R,t,this.state.context,this)),await((u=(f=this.options).onSuccess)==null?void 0:u.call(f,R,t,this.state.context)),await((m=(p=v(this,Ue).config).onSettled)==null?void 0:m.call(p,R,null,this.state.variables,this.state.context,this)),await((b=(g=this.options).onSettled)==null?void 0:b.call(g,R,null,t,this.state.context)),Y(this,Lt,li).call(this,{type:"success",data:R}),R}catch(R){try{throw await((w=(_=v(this,Ue).config).onError)==null?void 0:w.call(_,R,t,this.state.context,this)),await((C=(y=this.options).onError)==null?void 0:C.call(y,R,t,this.state.context)),await((S=(k=v(this,Ue).config).onSettled)==null?void 0:S.call(k,void 0,R,this.state.variables,this.state.context,this)),await((I=(z=this.options).onSettled)==null?void 0:I.call(z,void 0,R,t,this.state.context)),R}finally{Y(this,Lt,li).call(this,{type:"error",error:R})}}finally{v(this,Ue).runNext(this)}}},Ot=new WeakMap,Ue=new WeakMap,Bi=new WeakMap,Lt=new WeakSet,li=function(t){const i=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=i(this.state),Pe.batch(()=>{v(this,Ot).forEach(r=>{r.onMutationUpdate(t)}),v(this,Ue).notify({mutation:this,type:"updated",action:t})})},ac);function uy(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Qt,xt,gs,nc,hy=(nc=class extends Is{constructor(t={}){super();U(this,Qt);U(this,xt);U(this,gs);this.config=t,O(this,Qt,new Set),O(this,xt,new Map),O(this,gs,0)}build(t,i,r){const s=new dy({mutationCache:this,mutationId:++Ls(this,gs)._,options:t.defaultMutationOptions(i),state:r});return this.add(s),s}add(t){v(this,Qt).add(t);const i=js(t);if(typeof i=="string"){const r=v(this,xt).get(i);r?r.push(t):v(this,xt).set(i,[t])}this.notify({type:"added",mutation:t})}remove(t){if(v(this,Qt).delete(t)){const i=js(t);if(typeof i=="string"){const r=v(this,xt).get(i);if(r)if(r.length>1){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}else r[0]===t&&v(this,xt).delete(i)}}this.notify({type:"removed",mutation:t})}canRun(t){const i=js(t);if(typeof i=="string"){const r=v(this,xt).get(i),s=r==null?void 0:r.find(o=>o.state.status==="pending");return!s||s===t}else return!0}runNext(t){var r;const i=js(t);if(typeof i=="string"){const s=(r=v(this,xt).get(i))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Pe.batch(()=>{v(this,Qt).forEach(t=>{this.notify({type:"removed",mutation:t})}),v(this,Qt).clear(),v(this,xt).clear()})}getAll(){return Array.from(v(this,Qt))}find(t){const i={exact:!0,...t};return this.getAll().find(r=>Nl(i,r))}findAll(t={}){return this.getAll().filter(i=>Nl(t,i))}notify(t){Pe.batch(()=>{this.listeners.forEach(i=>{i(t)})})}resumePausedMutations(){const t=this.getAll().filter(i=>i.state.isPaused);return Pe.batch(()=>Promise.all(t.map(i=>i.continue().catch(ut))))}},Qt=new WeakMap,xt=new WeakMap,gs=new WeakMap,nc);function js(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Ml(e){return{onFetch:(t,i)=>{var f,u,p,m,g;const r=t.options,s=(p=(u=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:u.fetchMore)==null?void 0:p.direction,o=((m=t.state.data)==null?void 0:m.pages)||[],a=((g=t.state.data)==null?void 0:g.pageParams)||[];let n={pages:[],pageParams:[]},c=0;const d=async()=>{let b=!1;const _=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(t.signal.aborted?b=!0:t.signal.addEventListener("abort",()=>{b=!0}),t.signal)})},w=Gd(t.options,t.fetchOptions),y=async(C,k,S)=>{if(b)return Promise.reject();if(k==null&&C.pages.length)return Promise.resolve(C);const z={client:t.client,queryKey:t.queryKey,pageParam:k,direction:S?"backward":"forward",meta:t.options.meta};_(z);const I=await w(z),{maxPages:R}=t.options,E=S?ty:ey;return{pages:E(C.pages,I,R),pageParams:E(C.pageParams,k,R)}};if(s&&o.length){const C=s==="backward",k=C?py:Bl,S={pages:o,pageParams:a},z=k(r,S);n=await y(S,z,C)}else{const C=e??o.length;do{const k=c===0?a[0]??r.initialPageParam:Bl(r,n);if(c>0&&k==null)break;n=await y(n,k),c++}while(c<C)}return n};t.options.persister?t.fetchFn=()=>{var b,_;return(_=(b=t.options).persister)==null?void 0:_.call(b,d,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},i)}:t.fetchFn=d}}}function Bl(e,{pages:t,pageParams:i}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,i[r],i):void 0}function py(e,{pages:t,pageParams:i}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,i[0],i):void 0}var ge,hi,pi,pr,fr,fi,mr,gr,lc,fy=(lc=class{constructor(e={}){U(this,ge);U(this,hi);U(this,pi);U(this,pr);U(this,fr);U(this,fi);U(this,mr);U(this,gr);O(this,ge,e.queryCache||new cy),O(this,hi,e.mutationCache||new hy),O(this,pi,e.defaultOptions||{}),O(this,pr,new Map),O(this,fr,new Map),O(this,fi,0)}mount(){Ls(this,fi)._++,v(this,fi)===1&&(O(this,mr,wn.subscribe(async e=>{e&&(await this.resumePausedMutations(),v(this,ge).onFocus())})),O(this,gr,uo.subscribe(async e=>{e&&(await this.resumePausedMutations(),v(this,ge).onOnline())})))}unmount(){var e,t;Ls(this,fi)._--,v(this,fi)===0&&((e=v(this,mr))==null||e.call(this),O(this,mr,void 0),(t=v(this,gr))==null||t.call(this),O(this,gr,void 0))}isFetching(e){return v(this,ge).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return v(this,hi).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const t=this.defaultQueryOptions({queryKey:e});return(i=v(this,ge).get(t.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),i=v(this,ge).build(this,t),r=i.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(nr(t.staleTime,i))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return v(this,ge).findAll(e).map(({queryKey:t,state:i})=>{const r=i.data;return[t,r]})}setQueryData(e,t,i){const r=this.defaultQueryOptions({queryKey:e}),s=v(this,ge).get(r.queryHash),o=s==null?void 0:s.state.data,a=J0(t,o);if(a!==void 0)return v(this,ge).build(this,r).setData(a,{...i,manual:!0})}setQueriesData(e,t,i){return Pe.batch(()=>v(this,ge).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,i)]))}getQueryState(e){var i;const t=this.defaultQueryOptions({queryKey:e});return(i=v(this,ge).get(t.queryHash))==null?void 0:i.state}removeQueries(e){const t=v(this,ge);Pe.batch(()=>{t.findAll(e).forEach(i=>{t.remove(i)})})}resetQueries(e,t){const i=v(this,ge);return Pe.batch(()=>(i.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const i={revert:!0,...t},r=Pe.batch(()=>v(this,ge).findAll(e).map(s=>s.cancel(i)));return Promise.all(r).then(ut).catch(ut)}invalidateQueries(e,t={}){return Pe.batch(()=>(v(this,ge).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const i={...t,cancelRefetch:t.cancelRefetch??!0},r=Pe.batch(()=>v(this,ge).findAll(e).filter(s=>!s.isDisabled()).map(s=>{let o=s.fetch(void 0,i);return i.throwOnError||(o=o.catch(ut)),s.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(ut)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const i=v(this,ge).build(this,t);return i.isStaleByTime(nr(t.staleTime,i))?i.fetch(t):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ut).catch(ut)}fetchInfiniteQuery(e){return e.behavior=Ml(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ut).catch(ut)}ensureInfiniteQueryData(e){return e.behavior=Ml(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return uo.isOnline()?v(this,hi).resumePausedMutations():Promise.resolve()}getQueryCache(){return v(this,ge)}getMutationCache(){return v(this,hi)}getDefaultOptions(){return v(this,pi)}setDefaultOptions(e){O(this,pi,e)}setQueryDefaults(e,t){v(this,pr).set(ps(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...v(this,pr).values()],i={};return t.forEach(r=>{fs(e,r.queryKey)&&Object.assign(i,r.defaultOptions)}),i}setMutationDefaults(e,t){v(this,fr).set(ps(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...v(this,fr).values()],i={};return t.forEach(r=>{fs(e,r.mutationKey)&&Object.assign(i,r.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const t={...v(this,pi).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=_n(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Br&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...v(this,pi).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){v(this,ge).clear(),v(this,hi).clear()}},ge=new WeakMap,hi=new WeakMap,pi=new WeakMap,pr=new WeakMap,fr=new WeakMap,fi=new WeakMap,mr=new WeakMap,gr=new WeakMap,lc),Ke,X,bs,qe,Hi,br,mi,Nt,vs,vr,yr,Vi,Ui,gi,_r,se,Xr,$a,Ea,Aa,za,Ra,Ta,Pa,tu,cc,my=(cc=class extends Is{constructor(t,i){super();U(this,se);U(this,Ke);U(this,X);U(this,bs);U(this,qe);U(this,Hi);U(this,br);U(this,mi);U(this,Nt);U(this,vs);U(this,vr);U(this,yr);U(this,Vi);U(this,Ui);U(this,gi);U(this,_r,new Set);this.options=i,O(this,Ke,t),O(this,Nt,null),O(this,mi,Sa()),this.options.experimental_prefetchInRender||v(this,mi).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(i)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(v(this,X).addObserver(this),Hl(v(this,X),this.options)?Y(this,se,Xr).call(this):this.updateResult(),Y(this,se,za).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Ia(v(this,X),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Ia(v(this,X),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Y(this,se,Ra).call(this),Y(this,se,Ta).call(this),v(this,X).removeObserver(this)}setOptions(t){const i=this.options,r=v(this,X);if(this.options=v(this,Ke).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof kt(this.options.enabled,v(this,X))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");Y(this,se,Pa).call(this),v(this,X).setOptions(this.options),i._defaulted&&!xa(this.options,i)&&v(this,Ke).getQueryCache().notify({type:"observerOptionsUpdated",query:v(this,X),observer:this});const s=this.hasListeners();s&&Vl(v(this,X),r,this.options,i)&&Y(this,se,Xr).call(this),this.updateResult(),s&&(v(this,X)!==r||kt(this.options.enabled,v(this,X))!==kt(i.enabled,v(this,X))||nr(this.options.staleTime,v(this,X))!==nr(i.staleTime,v(this,X)))&&Y(this,se,$a).call(this);const o=Y(this,se,Ea).call(this);s&&(v(this,X)!==r||kt(this.options.enabled,v(this,X))!==kt(i.enabled,v(this,X))||o!==v(this,gi))&&Y(this,se,Aa).call(this,o)}getOptimisticResult(t){const i=v(this,Ke).getQueryCache().build(v(this,Ke),t),r=this.createResult(i,t);return by(this,r)&&(O(this,qe,r),O(this,br,this.options),O(this,Hi,v(this,X).state)),r}getCurrentResult(){return v(this,qe)}trackResult(t,i){const r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),i==null||i(s),t[s])})}),r}trackProp(t){v(this,_r).add(t)}getCurrentQuery(){return v(this,X)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const i=v(this,Ke).defaultQueryOptions(t),r=v(this,Ke).getQueryCache().build(v(this,Ke),i);return r.fetch().then(()=>this.createResult(r,i))}fetch(t){return Y(this,se,Xr).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),v(this,qe)))}createResult(t,i){var R;const r=v(this,X),s=this.options,o=v(this,qe),a=v(this,Hi),n=v(this,br),d=t!==r?t.state:v(this,bs),{state:f}=t;let u={...f},p=!1,m;if(i._optimisticResults){const E=this.hasListeners(),T=!E&&Hl(t,i),W=E&&Vl(t,r,i,s);(T||W)&&(u={...u,...eu(f.data,t.options)}),i._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:g,errorUpdatedAt:b,status:_}=u;if(i.select&&u.data!==void 0)if(o&&u.data===(a==null?void 0:a.data)&&i.select===v(this,vs))m=v(this,vr);else try{O(this,vs,i.select),m=i.select(u.data),m=Ca(o==null?void 0:o.data,m,i),O(this,vr,m),O(this,Nt,null)}catch(E){O(this,Nt,E)}else m=u.data;if(i.placeholderData!==void 0&&m===void 0&&_==="pending"){let E;if(o!=null&&o.isPlaceholderData&&i.placeholderData===(n==null?void 0:n.placeholderData))E=o.data;else if(E=typeof i.placeholderData=="function"?i.placeholderData((R=v(this,yr))==null?void 0:R.state.data,v(this,yr)):i.placeholderData,i.select&&E!==void 0)try{E=i.select(E),O(this,Nt,null)}catch(T){O(this,Nt,T)}E!==void 0&&(_="success",m=Ca(o==null?void 0:o.data,E,i),p=!0)}v(this,Nt)&&(g=v(this,Nt),m=v(this,vr),b=Date.now(),_="error");const w=u.fetchStatus==="fetching",y=_==="pending",C=_==="error",k=y&&w,S=m!==void 0,I={status:_,fetchStatus:u.fetchStatus,isPending:y,isSuccess:_==="success",isError:C,isInitialLoading:k,isLoading:k,data:m,dataUpdatedAt:u.dataUpdatedAt,error:g,errorUpdatedAt:b,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>d.dataUpdateCount||u.errorUpdateCount>d.errorUpdateCount,isFetching:w,isRefetching:w&&!y,isLoadingError:C&&!S,isPaused:u.fetchStatus==="paused",isPlaceholderData:p,isRefetchError:C&&S,isStale:xn(t,i),refetch:this.refetch,promise:v(this,mi)};if(this.options.experimental_prefetchInRender){const E=te=>{I.status==="error"?te.reject(I.error):I.data!==void 0&&te.resolve(I.data)},T=()=>{const te=O(this,mi,I.promise=Sa());E(te)},W=v(this,mi);switch(W.status){case"pending":t.queryHash===r.queryHash&&E(W);break;case"fulfilled":(I.status==="error"||I.data!==W.value)&&T();break;case"rejected":(I.status!=="error"||I.error!==W.reason)&&T();break}}return I}updateResult(){const t=v(this,qe),i=this.createResult(v(this,X),this.options);if(O(this,Hi,v(this,X).state),O(this,br,this.options),v(this,Hi).data!==void 0&&O(this,yr,v(this,X)),xa(i,t))return;O(this,qe,i);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:s}=this.options,o=typeof s=="function"?s():s;if(o==="all"||!o&&!v(this,_r).size)return!0;const a=new Set(o??v(this,_r));return this.options.throwOnError&&a.add("error"),Object.keys(v(this,qe)).some(n=>{const c=n;return v(this,qe)[c]!==t[c]&&a.has(c)})};Y(this,se,tu).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Y(this,se,za).call(this)}},Ke=new WeakMap,X=new WeakMap,bs=new WeakMap,qe=new WeakMap,Hi=new WeakMap,br=new WeakMap,mi=new WeakMap,Nt=new WeakMap,vs=new WeakMap,vr=new WeakMap,yr=new WeakMap,Vi=new WeakMap,Ui=new WeakMap,gi=new WeakMap,_r=new WeakMap,se=new WeakSet,Xr=function(t){Y(this,se,Pa).call(this);let i=v(this,X).fetch(this.options,t);return t!=null&&t.throwOnError||(i=i.catch(ut)),i},$a=function(){Y(this,se,Ra).call(this);const t=nr(this.options.staleTime,v(this,X));if(Qi||v(this,qe).isStale||!wa(t))return;const r=Kd(v(this,qe).dataUpdatedAt,t)+1;O(this,Vi,setTimeout(()=>{v(this,qe).isStale||this.updateResult()},r))},Ea=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(v(this,X)):this.options.refetchInterval)??!1},Aa=function(t){Y(this,se,Ta).call(this),O(this,gi,t),!(Qi||kt(this.options.enabled,v(this,X))===!1||!wa(v(this,gi))||v(this,gi)===0)&&O(this,Ui,setInterval(()=>{(this.options.refetchIntervalInBackground||wn.isFocused())&&Y(this,se,Xr).call(this)},v(this,gi)))},za=function(){Y(this,se,$a).call(this),Y(this,se,Aa).call(this,Y(this,se,Ea).call(this))},Ra=function(){v(this,Vi)&&(clearTimeout(v(this,Vi)),O(this,Vi,void 0))},Ta=function(){v(this,Ui)&&(clearInterval(v(this,Ui)),O(this,Ui,void 0))},Pa=function(){const t=v(this,Ke).getQueryCache().build(v(this,Ke),this.options);if(t===v(this,X))return;const i=v(this,X);O(this,X,t),O(this,bs,t.state),this.hasListeners()&&(i==null||i.removeObserver(this),t.addObserver(this))},tu=function(t){Pe.batch(()=>{t.listeners&&this.listeners.forEach(i=>{i(v(this,qe))}),v(this,Ke).getQueryCache().notify({query:v(this,X),type:"observerResultsUpdated"})})},cc);function gy(e,t){return kt(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Hl(e,t){return gy(e,t)||e.state.data!==void 0&&Ia(e,t,t.refetchOnMount)}function Ia(e,t,i){if(kt(t.enabled,e)!==!1){const r=typeof i=="function"?i(e):i;return r==="always"||r!==!1&&xn(e,t)}return!1}function Vl(e,t,i,r){return(e!==t||kt(r.enabled,e)===!1)&&(!i.suspense||e.state.status!=="error")&&xn(e,i)}function xn(e,t){return kt(t.enabled,e)!==!1&&e.isStaleByTime(nr(t.staleTime,e))}function by(e,t){return!xa(e.getCurrentResult(),t)}var iu=He(void 0),oi=e=>{const t=J(iu);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},vy=({client:e,children:t})=>(Bt(()=>(e.mount(),()=>{e.unmount()}),[e]),x(iu.Provider,{value:e,children:t})),ru=He(!1),yy=()=>J(ru);ru.Provider;function _y(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var wy=He(_y()),xy=()=>J(wy);function ky(e,t){return typeof e=="function"?e(...t):!!e}function Ul(){}var Cy=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},Sy=e=>{Bt(()=>{e.clearReset()},[e])},$y=({result:e,errorResetBoundary:t,throwOnError:i,query:r,suspense:s})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(s&&e.data===void 0||ky(i,[e.error,r])),Ey=e=>{const t=e.staleTime;e.suspense&&(e.staleTime=typeof t=="function"?(...i)=>Math.max(t(...i),1e3):Math.max(t??1e3,1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},Ay=(e,t)=>e.isLoading&&e.isFetching&&!t,zy=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,ql=(e,t,i)=>t.fetchOptimistic(e).catch(()=>{i.clearReset()});function Ry(e,t,i){var u,p,m,g,b;const r=oi(),s=yy(),o=xy(),a=r.defaultQueryOptions(e);(p=(u=r.getDefaultOptions().queries)==null?void 0:u._experimental_beforeQuery)==null||p.call(u,a),a._optimisticResults=s?"isRestoring":"optimistic",Ey(a),Cy(a,o),Sy(o);const n=!r.getQueryCache().get(a.queryHash),[c]=he(()=>new t(r,a)),d=c.getOptimisticResult(a),f=!s&&e.subscribed!==!1;if(go(ti(_=>{const w=f?c.subscribe(Pe.batchCalls(_)):Ul;return c.updateResult(),w},[c,f]),()=>c.getCurrentResult()),Bt(()=>{c.setOptions(a)},[a,c]),zy(a,d))throw ql(a,c,o);if($y({result:d,errorResetBoundary:o,throwOnError:a.throwOnError,query:r.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw d.error;if((g=(m=r.getDefaultOptions().queries)==null?void 0:m._experimental_afterQuery)==null||g.call(m,a,d),a.experimental_prefetchInRender&&!Qi&&Ay(d,s)){const _=n?ql(a,c,o):(b=r.getQueryCache().get(a.queryHash))==null?void 0:b.promise;_==null||_.catch(Ul).finally(()=>{c.updateResult()})}return a.notifyOnChangeProps?d:c.trackResult(d)}function Ai(e,t){return Ry(e,my)}const Ty=new fy({defaultOptions:{queries:{gcTime:1e3*60*60*24}}});function Ve(e){const t={parse_error:"[ERROR] Parse failed!",auth_token_error:"[ERROR] Bad authentication token!",bad_fetch_error:"Fetch failed! Server seems to be down...",resource_error:"[ERROR] Invalid resource: ",username_error:"Invalid username or password!",password_error:"Invalid username or password!",internal_server_error:"[ERROR] Robert or Bre screwed up: "};let i="Unknown error";switch(e.type){case"bad_fetch_error":{i=t[e.type]+e.message;break}case"auth_token_error":{i=t[e.type];break}case"parse_error":{i=t[e.type];break}case"resource_error":{i=t[e.type]+e.message;break}case"username_error":{i=t[e.type];break}case"password_error":{i=t[e.type];break}case"internal_server_error":{i=t[e.type]+e.message;break}}return i}async function De(e){try{return await fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){return new Response(JSON.stringify({type:"bad_fetch_error",message:t.message}),{status:400})}}let Se={auth:""};async function Py(e,t){const i=await De({type:"login",username:e,password:t}),r=await i.json();if(i.status!==200)throw new Error(Ve(r));Se={auth:r.auth,lifetime:r.lifetime}}async function Iy(){const e=await De({type:"logout",auth:Se.auth}),t=await e.json();if(e.status!==200)throw new Error(Ve(t));Se={auth:"",lifetime:-1}}async function Oy(){return Se?(await De({type:"is_logged_in",auth:Se.auth})).status===200:!1}function su(){return Ai({queryKey:["loggedIn"],queryFn:()=>Oy()})}async function Ly(e,t){const i=await De({type:"change_username",auth:Se.auth,password:e,new_username:t}),r=await i.json();if(i.status!==200)throw new Error(Ve(r))}async function Ny(e,t){const i=await De({type:"change_password",auth:Se.auth,password:e,new_password:t}),r=await i.json();if(i.status!==200)throw new Error(Ve(r))}async function ou({collection_id:e,recipe_name:t,include_allergens:i,exclude_allergens:r,include_ingredients:s,exclude_ingredients:o,authors:a,view_min:n,view_max:c}){const d=await De({type:"filter_recipe_collection",collection_id:e,recipe_name:t,include_allergens:i,exclude_allergens:r,include_ingredients:s,exclude_ingredients:o,authors:a,view_min:n,view_max:c}),f=await d.json();if(d.status!==200)throw new Error(Ve(f));return console.log(f.recipes),f.recipes.map(u=>({...u,allergens:u.allergens.filter(p=>p!==null),ingredients:u.ingredients.filter(p=>p!==null)}))}function Dy(e){return Ai({queryKey:["filterCollection",e.collection_id],queryFn:()=>ou(e)})}async function Fy(e,t){const i=await De({type:"rename_recipe_collection",auth:Se.auth,id:e,new_name:t}),r=await i.json();if(i.status!==200)throw new Error(Ve(r))}async function My(e){const t=await De({type:"add_recipe_collection",auth:Se.auth,name:e}),i=await t.json();if(t.status!==200)throw new Error(Ve(i));return i.id}async function By(e){const t=await De({type:"remove_recipe_collection",auth:Se.auth,id:e}),i=await t.json();if(t.status!==200)throw new Error(Ve(i))}async function Hy(){const e=await De({type:"get_owned_recipe_collections",auth:Se.auth}),t=await e.json();if(e.status!==200)throw new Error(Ve(t));return t.ids}function au(){return Ai({queryKey:["ownedCollections"],queryFn:Se.auth!==""?()=>Hy():Br})}async function Vy(e){const t=await De({type:"get_allergens_in_collection",auth:Se.auth,id:e}),i=await t.json();if(t.status!==200)throw new Error(Ve(i));return i.allergens}function nu(e){return Ai({queryKey:["collectionAllergens",e],queryFn:()=>Vy(e)})}async function Uy(e){const t=await De({type:"get_ingredients_in_collection",auth:Se.auth,id:e}),i=await t.json();if(t.status!==200)throw new Error(Ve(i));return i.ingredients}function lu(e){return Ai({queryKey:["collectionIngredients",e],queryFn:()=>Uy(e)})}async function qy(e){const t=await De({type:"get_authors_in_collection",auth:Se.auth,id:e}),i=await t.json();if(t.status!==200)throw new Error(Ve(i));return i.authors}function jy(e){return Ai({queryKey:["collectionAuthors",e],queryFn:()=>qy(e)})}async function cu(e){const t=await De({type:"count_recipes_in_collection",auth:Se.auth,id:e}),i=await t.json();if(t.status!==200)throw new Error(Ve(i));return i.count}function du(e){return Ai({queryKey:["recipeCount",e],queryFn:e!==-1?()=>cu(e):Br})}async function Wy(e){const t=await De({type:"get_collection_name",auth:Se.auth,id:e}),i=await t.json();if(t.status!==200)throw new Error(Ve(i));return i.collection_name}function uu(e){return Ai({queryKey:["collectionName",e],queryFn:e!==-1?()=>Wy(e):Br})}const Li={settingContainer:{display:"flex",flexDirection:"row",marginBottom:"1em"},filterContainer:{display:"flex",flex:1,flexDirection:"column"}};function Ko({columnName:e,columnOptions:t=[]}){const[i,r]=he([]),[s,o]=he([]);return x("div",{style:Li.settingContainer,children:[x("div",{style:Li.filterContainer,children:["Include ",e,x(xi,{variant:"success",available:t.filter(a=>!s.includes(a)),selected:i,setSelected:r})]}),x("div",{style:Li.filterContainer,children:["Exclude ",e,x(xi,{variant:"danger",available:t.filter(a=>!i.includes(a)),selected:s,setSelected:o})]})]})}function Ky(){const{view:e,numRowsPerPage:t,getColumnVisible:i,toggleColumn:r,setMainView:s,setRowsPerPage:o,gotoFirstPage:a}=Rt(),n=oi(),c=Mr(),d=parseInt(c.id||"-1"),{data:f}=jy(d),{data:u}=nu(d),{data:p}=lu(d),m=1,g=20;async function b(y){isNaN(y)||(o(Math.min(g,Math.max(m,y))),a(),await n.invalidateQueries({queryKey:["filterCollection"]}))}function _(y){if(y.eventPhase!==Event.AT_TARGET){y.preventDefault();return}s()}async function w(){await n.invalidateQueries({queryKey:["filterCollection"]})}return x(Sd,{class:"drawer-placement-top",open:e===Vt.SEARCH_SETTINGS,onSlHide:y=>_(y),placement:"top",label:"Search Settings",children:[x("div",{style:Li.settingContainer,children:x("div",{style:Li.filterContainer,children:["Recipes Per Page",x(Ye,{type:"number",value:t.toString(),min:m,max:g,onSlBlur:y=>{b(parseInt(y.target.value))}})]})}),x("div",{style:Li.settingContainer,children:x("div",{style:Li.filterContainer,children:["Visible Columns",x(Qr,{size:"small",checked:i(ye.NAME),onSlChange:()=>r(ye.NAME),children:"Recipe Name"}),x(Qr,{size:"small",checked:i(ye.AUTHOR),onSlChange:()=>r(ye.AUTHOR),children:"Author"}),x(Qr,{size:"small",checked:i(ye.ALLERGENS),onSlChange:()=>r(ye.ALLERGENS),children:"Allergens"}),x(Qr,{size:"small",checked:i(ye.REFERENCE),onSlChange:()=>r(ye.REFERENCE),children:"Reference"}),x(Qr,{size:"small",checked:i(ye.INGREDIENTS),onSlChange:()=>r(ye.INGREDIENTS),children:"Ingredients"})]})}),x(Ko,{columnName:"Author",columnOptions:f}),x(Ko,{columnName:"Allergens",columnOptions:u}),x(Ko,{columnName:"Ingredients",columnOptions:p}),x(zs,{onClick:()=>{w()},children:"Apply"})]})}function Os({message:e,variant:t="primary",duration:i=3e3}){return x(xv,{variant:t,closable:!0,duration:i,children:[x(cn,{name:{primary:"info-circle",success:"check2-circle",neutral:"gear",warning:"exclamation-triangle",danger:"exclamation-octagon"}[t],slot:"icon"}),e]})}const Qo={root:{display:"flex",flexDirection:"row-reverse",alignItems:"center",flex:"1"},avatar:{"--size":"1.75em",cursor:"pointer",marginLeft:"8px"}};function Qy({collectionDef:e}){const{clientUsername:t,setSettingsView:i,setLoginView:r,setChangePassView:s,setChangeUserView:o,setCollectionsView:a,setRecipeSummaryView:n,setClientUsername:c,setSelectedRecipe:d}=Rt(),f=oi(),u=Mr(),p=parseInt(u.id||"-1"),{data:m}=uu(p),{status:g,data:b,error:_,isFetching:w}=su(),y=pt(null);g==="error"&&console.error(_.message);let C;(R=>{R.VIEW_COLLECTIONS="0",R.CHANGE_USERNAME="1",R.CHANGE_PASSWORD="2",R.LOGOUT="3"})(C||(C={}));async function k(){const R=await cu(p),E=Math.floor(Math.random()*(R||0)),T=await ou({collection_id:p,recipe_name:"",authors:[],include_allergens:[],exclude_allergens:[],include_ingredients:[],exclude_ingredients:[],view_min:E,view_max:E+1});d(T[0]),n()}async function S(){await Iy(),c(""),await f.invalidateQueries({queryKey:["loggedIn"]}),y.current!==null&&y.current.base.toast()}async function z(){await f.invalidateQueries({queryKey:["filterCollection"]})}async function I(R){switch(R){case"0":a();break;case"1":o();break;case"2":s();break;case"3":await S();break}}return x("div",{style:Qo.root,children:[x(Os,{variant:"success",message:"Logged out successfully",ref:y}),w||!b?x(Cl,{style:Qo.avatar,label:"Empty avatar",onClick:()=>r()}):x($d,{children:[x(Cl,{style:Qo.avatar,slot:"trigger",initials:t[0],label:"Avatar with username initial"}),x(wd,{onSlSelect:R=>{I(R.detail.item.value)},children:[x(rm,{className:"userMenuLabel",children:t}),x(sr,{value:"0",children:"View Collections"}),x(sr,{value:"1",children:"Change Username"}),x(sr,{value:"2",children:"Change Password"}),x(sr,{value:"3",children:["Log Out",x(cn,{name:"box-arrow-right",slot:"suffix"})]})]})]}),x(Ge,{disabled:!e,name:"shuffle",label:"Generate Random Recipe",onClick:()=>{k()}}),x(Ge,{disabled:!e,name:"sliders",label:"Search Settings",onClick:()=>i()}),x(Ye,{disabled:!e,clearable:!0,type:"search",placeholder:`Search ${m||""}...`,style:{flex:"1"},children:x(Ge,{disabled:!e,name:"search",label:"Run Search",slot:"suffix",onClick:()=>{z()}})})]})}async function Gy(e,t,i,r,s,o){const a=await De({type:"add_recipe",auth:Se.auth,collection_id:e,recipe_name:t,reference:i,authors:r,ingredients:s,allergens:o}),n=await a.json();if(a.status!==200)throw new Error(Ve(n))}async function hu(e){const t=await De({type:"remove_recipe",auth:Se.auth,recipe_name:e}),i=await t.json();if(t.status!==200)throw new Error(Ve(i))}const Be={root:{display:"flex",flexDirection:"column",flex:"10",overflowX:"hidden"},header:{fontSize:"large",fontWeight:"bold",position:"sticky",top:"0",zIndex:"1"},row:{display:"flex",alignItems:"center",height:"30px",position:"relative"},cell:{alignItems:"center",display:"flex",flex:"3",justifyContent:"start",overflow:"auto hidden"},end:{alignItems:"center",display:"flex",flex:"1",justifyContent:"end"}};function Yy({editMode:e,rowData:t}){const{getColumnVisible:i,setUpdateRecipeView:r,setRecipeSummaryView:s,setSelectedRecipe:o}=Rt(),a=oi();function n(){o(t),s()}function c(){o(t),r()}async function d(){await hu(t.name),await a.invalidateQueries({queryKey:["filterCollection"]})}return x(pn,{style:{"--border-radius":"0"},children:x("div",{style:Be.row,children:[i(ye.NAME)&&x("div",{style:Be.cell,children:t.name}),i(ye.AUTHOR)&&x("div",{style:Be.cell,children:t.authors.join(",")}),i(ye.ALLERGENS)&&x("div",{style:Be.cell,children:x(xi,{variant:"warning",selected:t.allergens,viewMode:!0})}),i(ye.REFERENCE)&&x("div",{style:Be.cell,children:t.reference}),i(ye.INGREDIENTS)&&x("div",{style:Be.cell,children:x(xi,{variant:"primary",selected:t.ingredients,viewMode:!0})}),x("div",{style:Be.end,children:[x(Ft,{content:"View Recipe",children:x(Ge,{name:"eye",label:"View Recipe",onClick:()=>n()})}),e&&x(Oe,{children:[x(Ft,{content:"Edit Recipe",children:x(Ge,{name:"pencil",label:"Edit Recipe",onClick:()=>c()})}),x(Ft,{content:"Delete Recipe",children:x(Ge,{name:"trash",label:"Delete Recipe",onClick:()=>{d()}})})]})]})]})})}function Xy({editMode:e}){const{page:t,numRowsPerPage:i,getColumnVisible:r,setNewRecipeView:s,setSelectedRecipe:o}=Rt(),a=Mr(),n=parseInt(a.id||"-1"),{data:c}=Dy({collection_id:n,recipe_name:"",include_allergens:[],exclude_allergens:[],include_ingredients:[],exclude_ingredients:[],authors:[],view_min:t*i,view_max:(t+1)*i});function d(){o({name:"",reference:"",authors:[],allergens:[],ingredients:[]}),s()}return x("div",{style:Be.root,children:[x(pn,{style:{...Be.header,"--border-radius":"0"},children:x("div",{style:Be.row,children:[r(ye.NAME)&&x("div",{style:Be.cell,children:"Recipe Name"}),r(ye.AUTHOR)&&x("div",{style:Be.cell,children:"Author"}),r(ye.ALLERGENS)&&x("div",{style:Be.cell,children:"Allergens"}),r(ye.REFERENCE)&&x("div",{style:Be.cell,children:"Reference"}),r(ye.INGREDIENTS)&&x("div",{style:Be.cell,children:"Ingredients"}),x("div",{style:{...Be.end,fontSize:"2em"},children:e&&x(Ft,{content:"Create Recipe",placement:"left",children:x(Ge,{name:"plus",label:"Create Recipe",onClick:()=>d()})})})]})}),c!==void 0&&c.map(f=>x(Yy,{editMode:e,rowData:f}))]})}const jl={root:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flex:"1"}};function Jy(){const{page:e,numRowsPerPage:t,gotoFirstPage:i,gotoPrevPage:r,gotoNextPage:s,gotoLastPage:o}=Rt(),a=oi(),n=Mr(),c=parseInt(n.id||"-1"),{data:d}=du(c),f=Math.ceil((d||0)/t),u=async()=>{await a.invalidateQueries({queryKey:["filterCollection"]}),i()},p=async()=>{await a.invalidateQueries({queryKey:["filterCollection"]}),r()},m=async()=>{await a.invalidateQueries({queryKey:["filterCollection"]}),s(f)},g=async()=>{await a.invalidateQueries({queryKey:["filterCollection"]}),o(f)};return f==0?x("div",{style:jl.root}):x("div",{style:jl.root,children:[x(Ft,{content:"First Page",children:x(Ge,{disabled:e===0,name:"chevron-double-left",onClick:()=>{u()},label:"First Page"})}),x(Ft,{content:"Previous Page",children:x(Ge,{disabled:e===0,name:"chevron-left",onClick:()=>{p()},label:"Previous Page"})}),e+1,x(Ft,{content:"Next Page",children:x(Ge,{disabled:e===f-1,name:"chevron-right",onClick:()=>{m()},label:"Next Page"})}),x(Ft,{content:"Last Page",children:x(Ge,{disabled:e===f-1,name:"chevron-double-right",onClick:()=>{g()},label:"Last Page"})})]})}const Wl={inputField:{marginBottom:"1em"}};function Zy(){const{view:e,setMainView:t,setClientUsername:i}=Rt(),r=oi(),[s,o]=he(""),[a,n]=he(""),[c,d]=he(""),f=pt(null);function u(){t(),o(""),n(""),d("")}async function p(){try{await Py(s,a),await r.invalidateQueries({queryKey:["loggedIn"]}),i(s),u(),f.current!==null&&f.current.base.toast()}catch(m){m instanceof Error&&d(m.message)}}return x(As,{class:"dialog-overview",open:e===Vt.LOGIN_PROMPT,onSlAfterHide:()=>u(),label:"Log In",children:[x(Os,{message:"Logged in successfully",variant:"success",ref:f}),x(Ye,{style:Wl.inputField,type:"text",value:s,onSlChange:m=>o(m.target.value),placeholder:"Username"}),x(Ye,{className:"errorHelp",style:Wl.inputField,helpText:c,type:"password",value:a,onSlChange:m=>n(m.target.value),placeholder:"Password",passwordToggle:!0}),x(zs,{onClick:()=>{p()},children:"Log In"})]})}const Go={inputField:{marginBottom:"1em"}};function e_(){const{view:e,setMainView:t}=Rt(),[i,r]=he(""),[s,o]=he(""),[a,n]=he(""),[c,d]=he(""),f=pt(null);function u(){t(),r(""),o(""),n("")}async function p(){if(d(""),a!==s){d("New passwords do not match");return}try{await Ny(i,s)}catch(m){m instanceof Error&&d(m.message)}u(),f.current!==null&&f.current.base.toast()}return x(As,{class:"dialog-overview",open:e===Vt.CHANGE_PASSWORD,onSlAfterHide:()=>u(),label:"Change Password",children:[x(Os,{message:"Password changed successfully",variant:"success",ref:f}),x(Ye,{style:Go.inputField,type:"password",helpText:"Must be 8 - 20 characters",value:i,onSlChange:m=>r(m.target.value),placeholder:"Old Password",passwordToggle:!0}),x(Ye,{style:Go.inputField,type:"password",value:s,onSlChange:m=>o(m.target.value),placeholder:"New Password",passwordToggle:!0}),x(Ye,{className:"errorHelp",style:Go.inputField,helpText:c,type:"password",value:a,onSlChange:m=>n(m.target.value),placeholder:"Retype New Password",passwordToggle:!0}),x(zs,{onClick:()=>{p()},children:"Confirm"})]})}const Kl={inputField:{marginBottom:"1em"}};function t_(){const{view:e,setMainView:t,setClientUsername:i}=Rt(),[r,s]=he(""),[o,a]=he(""),[n,c]=he(""),d=pt(null);function f(){t(),s(""),a(""),c("")}async function u(){try{await Ly(o,r),i(r)}catch(p){p instanceof Error&&c(p.message);return}f(),d.current!==null&&d.current.base.toast()}return x(As,{className:"dialog-overview",open:e===Vt.CHANGE_USERNAME,onSlAfterHide:()=>f(),label:"Change Username",children:[x(Os,{message:"Changed username successfully",variant:"success",ref:d}),x(Ye,{style:Kl.inputField,helpText:"Must be 8 - 20 characters",type:"text",value:r,onSlChange:p=>s(p.target.value),placeholder:"New Username"}),x(Ye,{className:"errorHelp",style:Kl.inputField,helpText:n,type:"password",value:o,onSlChange:p=>a(p.target.value),placeholder:"Password",passwordToggle:!0}),x(zs,{onClick:()=>{u()},children:"Confirm"})]})}const Ql={collectionTitle:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},collectionCard:{marginBottom:"1em",flex:1,width:"100%"}};function i_({collectionId:e,searchTerm:t}){const i=oi(),{data:r}=uu(e),{data:s}=du(e);async function o(n){try{await By(n),await i.invalidateQueries({queryKey:["ownedCollections"]})}catch(c){console.error(c)}}async function a(n,c){try{await Fy(n,c),await i.invalidateQueries({queryKey:["collectionName"]})}catch(d){d instanceof Error&&console.error(d.message)}}return r===void 0||!r.toLocaleLowerCase().includes(t.toLocaleLowerCase())?null:x(pn,{style:Ql.collectionCard,children:[x("div",{slot:"header",style:Ql.collectionTitle,children:[x(Ye,{className:"collectionsName",filled:!0,value:r,onSlBlur:n=>{a(e,n.target.value)}}),x(ag,{value:window.location.origin+"/collection/"+e,copyLabel:"Share Collection",successLabel:"Copied",errorLabel:"Failed to copy",children:x(cn,{name:"share",slot:"copy-icon"})}),x(Ft,{content:"Delete Collection",children:x(Ge,{name:"trash",label:"Delete Collection",onClick:()=>{o(e)}})})]}),"Included recipes: ",s]})}const Gl={root:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},collectionCard:{marginBottom:"1em",flex:1,width:"100%"}};function r_(){const e=oi(),{view:t,setMainView:i}=Rt(),{data:r}=au(),[s,o]=he("");function a(c){c.eventPhase===Event.AT_TARGET?i():c.preventDefault()}async function n(){try{await My("New Collection"),await e.invalidateQueries({queryKey:["ownedCollections"]})}catch(c){c instanceof Error&&console.error(c.message)}}return x(Sd,{class:"drawer-placement-start",open:t===Vt.COLLECTIONS_LIST,onSlHide:c=>a(c),placement:"start",label:"Collections",children:r!==void 0&&x("div",{style:Gl.root,children:[x(Ye,{style:Gl.collectionCard,clearable:!0,type:"search",placeholder:"Find a collection...",value:s,onSlChange:c=>o(c.target.value)}),r.map(c=>x(i_,{collectionId:c,searchTerm:s})),x(Ft,{content:"Add Collection",children:x(Ge,{name:"plus",label:"Add Collection",style:{fontSize:"2em"},onClick:()=>{n()}})})]})})}const Yo={inputField:{marginBottom:"1em"}};function Yl({formTitle:e,submitLabel:t,submitMessage:i,viewState:r}){const{view:s,setMainView:o,setSelectedRecipe:a,selectedRecipeName:n,selectedRecipeReference:c,selectedRecipeAllergens:d,selectedRecipeIngredients:f,selectedRecipeAuthors:u}=Rt(),p={recipeName:n,reference:c,allergens:d,ingredients:f,authors:u},m=oi(),g=pt(null),b=Mr(),_=parseInt(b.id||"-1"),{data:w}=nu(_),{data:y}=lu(_);function C(S){if(S.eventPhase!==Event.AT_TARGET){S.preventDefault();return}o()}async function k(S){try{r===Vt.UPDATE_RECIPE_FORM&&await hu(n),await Gy(_,p.recipeName,p.reference,p.authors,p.ingredients,p.allergens),await m.invalidateQueries({queryKey:["filterCollection"]}),C(S),g.current!==null&&g.current.base.toast()}catch(z){console.error(z)}}return x(As,{class:"dialog-overview",open:s===r,onSlHide:S=>C(S),label:e,children:[x(Os,{message:i,variant:"success",ref:g}),x(Ye,{style:Yo.inputField,type:"text",value:n,onSlChange:S=>a({...p,name:S.target.value}),placeholder:"Recipe Name"}),x(Ye,{style:Yo.inputField,type:"text",value:u.join(","),onSlChange:S=>a({...p,authors:S.target.value.split(",")}),placeholder:"Authors"}),x(Ye,{style:Yo.inputField,type:"text",value:c,onSlChange:S=>a({...p,reference:S.target.value}),placeholder:"Reference"}),x(xi,{variant:"primary",available:w,selected:d,setSelected:S=>a({...p,allergens:S})}),x(xi,{variant:"primary",available:y,selected:f,setSelected:S=>a({...p,ingredients:S})}),x(zs,{onClick:S=>{k(S)},children:t})]})}const Xl={summaryField:{marginBottom:"1em"}};function s_(){const{view:e,setMainView:t,selectedRecipeName:i,selectedRecipeReference:r,selectedRecipeAllergens:s,selectedRecipeIngredients:o,selectedRecipeAuthors:a}=Rt();function n(){t()}return x(As,{class:"dialog-overview",open:e===Vt.RECIPE_SUMMARY,onSlHide:()=>n(),label:i,children:[x("strong",{children:"Author(s)"}),x("div",{style:Xl.summaryField,children:a.join(",")}),x("strong",{children:"Reference"}),x("div",{style:Xl.summaryField,children:r}),x("strong",{children:"Allergens"}),x(xi,{variant:"primary",selected:s,viewMode:!0}),x("strong",{children:"Ingredients"}),x(xi,{variant:"primary",selected:o,viewMode:!0})]})}ia("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/");const Jl={root:{display:"flex",flexDirection:"column",height:"95vh"},missingCollection:{alignItems:"center",color:"gray",display:"flex",flexDirection:"column",flex:"11",fontSize:"72px",justifyContent:"center",userSelect:"none"}};function Zl(){const e=Mr(),t=parseInt(e.id||"-1"),i=t!==-1,{data:r}=su(),{data:s}=au(),o=!!(i&&r&&s&&s.includes(t));return x("div",{style:Jl.root,children:[i&&x(Ky,{}),x(r_,{}),x(Zy,{}),x(t_,{}),x(e_,{}),x(Qy,{collectionDef:i}),i?x(Oe,{children:[x(Xy,{editMode:o}),x(Jy,{}),x(Yl,{formTitle:"New Recipe",submitLabel:"Add Recipe",submitMessage:"Added recipe successfully",viewState:Vt.NEW_RECIPE_FORM}),x(Yl,{formTitle:"Update Recipe",submitLabel:"Update",submitMessage:"Updated recipe successfully",viewState:Vt.UPDATE_RECIPE_FORM}),x(s_,{})]}):x("div",{style:Jl.missingCollection,children:"No collection selected!"})]})}const o_={alignItems:"center",color:"gray",display:"flex",flexDirection:"column",flex:"11",fontSize:"25px",justifyContent:"center",userSelect:"none",fontFamily:"monospace",whiteSpace:"pre-wrap"};function a_(){return x("div",{style:o_,children:["             _._  _-=.",x("br",{}),"      -=-_ _-    Y    \\  _.",x("br",{}),'     O    \\      |     &"  =-',x("br",{}),"     |     |          /      )",x("br",{}),"  ==-*                       '",x("br",{})," -    \\                     |",x("br",{}),"(      -                    *",x("br",{})," \\_         _        -     /     404?????",x("br",{}),"   -._       \\        |    |",x("br",{}),'      "\\       \\      |    |',x("br",{}),"        -       |     \\    L     _",x("br",{}),`         '.      \\     | ..#=--"" |`,x("br",{}),"           \\      \\   _|-          \\",x("br",{}),'            &    _"-^             _-x',x("br",{}),'            _#--             _.-""',x("br",{}),'         <--            _.--"',x("br",{}),'          -        __-""',x("br",{}),'           \\   ..-"              O',x("br",{}),"            x-'",x("br",{}),"                        O",x("br",{}),"                                _.--.",x("br",{}),"                              -'",x("br",{}),"                             '"]})}xr(x(vy,{client:Ty,children:x(V0,{children:x(y0,{children:[x(Xs,{path:"/",element:x(Zl,{})}),x(Xs,{path:"/collection/:id",element:x(Zl,{})}),x(Xs,{path:"*",element:x(a_,{})})]})})}),document.getElementById("app"));

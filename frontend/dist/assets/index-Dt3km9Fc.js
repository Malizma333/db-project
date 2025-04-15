var Ba=t=>{throw TypeError(t)};var to=(t,e,s)=>e.has(t)||Ba("Cannot "+s);var b=(t,e,s)=>(to(t,e,"read from private field"),s?s.call(t):e.get(t)),U=(t,e,s)=>e.has(t)?Ba("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),P=(t,e,s,i)=>(to(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),Q=(t,e,s)=>(to(t,e,"access private method"),s);var fr=(t,e,s,i)=>({set _(r){P(t,e,r,s)},get _(){return b(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();var Ji,W,_l,gs,Ua,wl,Co,xl,oa,So,$o,kl,Ui={},Cl=[],ed=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Vr=Array.isArray;function Me(t,e){for(var s in e)t[s]=e[s];return t}function aa(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Oe(t,e,s){var i,r,o,a={};for(o in e)o=="key"?i=e[o]:o=="ref"?r=e[o]:a[o]=e[o];if(arguments.length>2&&(a.children=arguments.length>3?Ji.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)a[o]===void 0&&(a[o]=t.defaultProps[o]);return Oi(t,a,i,r,null)}function Oi(t,e,s,i,r){var o={type:t,props:e,key:s,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++_l,__i:-1,__u:0};return r==null&&W.vnode!=null&&W.vnode(o),o}function Sl(){return{current:null}}function be(t){return t.children}function ge(t,e){this.props=t,this.context=e}function oi(t,e){if(e==null)return t.__?oi(t.__,t.__i+1):null;for(var s;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?oi(t):null}function $l(t){var e,s;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null){t.__e=t.__c.base=s.__e;break}return $l(t)}}function Ao(t){(!t.__d&&(t.__d=!0)&&gs.push(t)&&!Tr.__r++||Ua!==W.debounceRendering)&&((Ua=W.debounceRendering)||wl)(Tr)}function Tr(){var t,e,s,i,r,o,a,l;for(gs.sort(Co);t=gs.shift();)t.__d&&(e=gs.length,i=void 0,o=(r=(s=t).__v).__e,a=[],l=[],s.__P&&((i=Me({},r)).__v=r.__v+1,W.vnode&&W.vnode(i),na(s.__P,i,r,s.__n,s.__P.namespaceURI,32&r.__u?[o]:null,a,o??oi(r),!!(32&r.__u),l),i.__v=r.__v,i.__.__k[i.__i]=i,zl(a,i,l),i.__e!=o&&$l(i)),gs.length>e&&gs.sort(Co));Tr.__r=0}function Al(t,e,s,i,r,o,a,l,c,h,f){var d,p,m,g,v,x,C=i&&i.__k||Cl,y=e.length;for(c=sd(s,e,C,c,y),d=0;d<y;d++)(m=s.__k[d])!=null&&(p=m.__i===-1?Ui:C[m.__i]||Ui,m.__i=d,x=na(t,m,p,r,o,a,l,c,h,f),g=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&la(p.ref,null,m),f.push(m.ref,m.__c||g,m)),v==null&&g!=null&&(v=g),4&m.__u||p.__k===m.__k?c=El(m,c,t):typeof m.type=="function"&&x!==void 0?c=x:g&&(c=g.nextSibling),m.__u&=-7);return s.__e=v,c}function sd(t,e,s,i,r){var o,a,l,c,h,f=s.length,d=f,p=0;for(t.__k=new Array(r),o=0;o<r;o++)(a=e[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(c=o+p,(a=t.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Oi(null,a,null,null,null):Vr(a)?Oi(be,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?Oi(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=t,a.__b=t.__b+1,l=null,(h=a.__i=id(a,s,c,d))!==-1&&(d--,(l=s[h])&&(l.__u|=2)),l==null||l.__v===null?(h==-1&&p--,typeof a.type!="function"&&(a.__u|=4)):h!=c&&(h==c-1?p--:h==c+1?p++:(h>c?p--:p++,a.__u|=4))):t.__k[o]=null;if(d)for(o=0;o<f;o++)(l=s[o])!=null&&(2&l.__u)==0&&(l.__e==i&&(i=oi(l)),Tl(l,l));return i}function El(t,e,s){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=El(i[r],e,s));return e}t.__e!=e&&(e&&t.type&&!s.contains(e)&&(e=oi(t)),s.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Fe(t,e){return e=e||[],t==null||typeof t=="boolean"||(Vr(t)?t.some(function(s){Fe(s,e)}):e.push(t)),e}function id(t,e,s,i){var r,o,a=t.key,l=t.type,c=e[s];if(c===null||c&&a==c.key&&l===c.type&&(2&c.__u)==0)return s;if(i>(c!=null&&(2&c.__u)==0?1:0))for(r=s-1,o=s+1;r>=0||o<e.length;){if(r>=0){if((c=e[r])&&(2&c.__u)==0&&a==c.key&&l===c.type)return r;r--}if(o<e.length){if((c=e[o])&&(2&c.__u)==0&&a==c.key&&l===c.type)return o;o++}}return-1}function qa(t,e,s){e[0]=="-"?t.setProperty(e,s??""):t[e]=s==null?"":typeof s!="number"||ed.test(e)?s:s+"px"}function mr(t,e,s,i,r){var o;t:if(e=="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)s&&e in s||qa(t.style,e,"");if(s)for(e in s)i&&s[e]===i[e]||qa(t.style,e,s[e])}else if(e[0]=="o"&&e[1]=="n")o=e!=(e=e.replace(xl,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=s,s?i?s.u=i.u:(s.u=oa,t.addEventListener(e,o?$o:So,o)):t.removeEventListener(e,o?$o:So,o);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=s??"";break t}catch{}typeof s=="function"||(s==null||s===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&s==1?"":s))}}function Wa(t){return function(e){if(this.l){var s=this.l[e.type+t];if(e.t==null)e.t=oa++;else if(e.t<s.u)return;return s(W.event?W.event(e):e)}}}function na(t,e,s,i,r,o,a,l,c,h){var f,d,p,m,g,v,x,C,y,S,_,k,E,O,I,z,R,j=e.type;if(e.constructor!==void 0)return null;128&s.__u&&(c=!!(32&s.__u),o=[l=e.__e=s.__e]),(f=W.__b)&&f(e);t:if(typeof j=="function")try{if(C=e.props,y="prototype"in j&&j.prototype.render,S=(f=j.contextType)&&i[f.__c],_=f?S?S.props.value:f.__:i,s.__c?x=(d=e.__c=s.__c).__=d.__E:(y?e.__c=d=new j(C,_):(e.__c=d=new ge(C,_),d.constructor=j,d.render=od),S&&S.sub(d),d.props=C,d.state||(d.state={}),d.context=_,d.__n=i,p=d.__d=!0,d.__h=[],d._sb=[]),y&&d.__s==null&&(d.__s=d.state),y&&j.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Me({},d.__s)),Me(d.__s,j.getDerivedStateFromProps(C,d.__s))),m=d.props,g=d.state,d.__v=e,p)y&&j.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),y&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(y&&j.getDerivedStateFromProps==null&&C!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(C,_),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(C,d.__s,_)===!1||e.__v==s.__v)){for(e.__v!=s.__v&&(d.props=C,d.state=d.__s,d.__d=!1),e.__e=s.__e,e.__k=s.__k,e.__k.some(function(J){J&&(J.__=e)}),k=0;k<d._sb.length;k++)d.__h.push(d._sb[k]);d._sb=[],d.__h.length&&a.push(d);break t}d.componentWillUpdate!=null&&d.componentWillUpdate(C,d.__s,_),y&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,g,v)})}if(d.context=_,d.props=C,d.__P=t,d.__e=!1,E=W.__r,O=0,y){for(d.state=d.__s,d.__d=!1,E&&E(e),f=d.render(d.props,d.state,d.context),I=0;I<d._sb.length;I++)d.__h.push(d._sb[I]);d._sb=[]}else do d.__d=!1,E&&E(e),f=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++O<25);d.state=d.__s,d.getChildContext!=null&&(i=Me(Me({},i),d.getChildContext())),y&&!p&&d.getSnapshotBeforeUpdate!=null&&(v=d.getSnapshotBeforeUpdate(m,g)),l=Al(t,Vr(z=f!=null&&f.type===be&&f.key==null?f.props.children:f)?z:[z],e,s,i,r,o,a,l,c,h),d.base=e.__e,e.__u&=-161,d.__h.length&&a.push(d),x&&(d.__E=d.__=null)}catch(J){if(e.__v=null,c||o!=null)if(J.then){for(e.__u|=c?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,e.__e=l}else for(R=o.length;R--;)aa(o[R]);else e.__e=s.__e,e.__k=s.__k;W.__e(J,e,s)}else o==null&&e.__v==s.__v?(e.__k=s.__k,e.__e=s.__e):l=e.__e=rd(s.__e,e,s,i,r,o,a,c,h);return(f=W.diffed)&&f(e),128&e.__u?void 0:l}function zl(t,e,s){for(var i=0;i<s.length;i++)la(s[i],s[++i],s[++i]);W.__c&&W.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){W.__e(o,r.__v)}})}function rd(t,e,s,i,r,o,a,l,c){var h,f,d,p,m,g,v,x=s.props,C=e.props,y=e.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(h=0;h<o.length;h++)if((m=o[h])&&"setAttribute"in m==!!y&&(y?m.localName==y:m.nodeType==3)){t=m,o[h]=null;break}}if(t==null){if(y==null)return document.createTextNode(C);t=document.createElementNS(r,y,C.is&&C),l&&(W.__m&&W.__m(e,o),l=!1),o=null}if(y===null)x===C||l&&t.data===C||(t.data=C);else{if(o=o&&Ji.call(t.childNodes),x=s.props||Ui,!l&&o!=null)for(x={},h=0;h<t.attributes.length;h++)x[(m=t.attributes[h]).name]=m.value;for(h in x)if(m=x[h],h!="children"){if(h=="dangerouslySetInnerHTML")d=m;else if(!(h in C)){if(h=="value"&&"defaultValue"in C||h=="checked"&&"defaultChecked"in C)continue;mr(t,h,null,m,r)}}for(h in C)m=C[h],h=="children"?p=m:h=="dangerouslySetInnerHTML"?f=m:h=="value"?g=m:h=="checked"?v=m:l&&typeof m!="function"||x[h]===m||mr(t,h,m,x[h],r);if(f)l||d&&(f.__html===d.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(d&&(t.innerHTML=""),Al(t,Vr(p)?p:[p],e,s,i,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,a,o?o[0]:s.__k&&oi(s,0),l,c),o!=null)for(h=o.length;h--;)aa(o[h]);l||(h="value",y=="progress"&&g==null?t.removeAttribute("value"):g!==void 0&&(g!==t[h]||y=="progress"&&!g||y=="option"&&g!==x[h])&&mr(t,h,g,x[h],r),h="checked",v!==void 0&&v!==t[h]&&mr(t,h,v,x[h],r))}return t}function la(t,e,s){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(r){W.__e(r,s)}}function Tl(t,e,s){var i,r;if(W.unmount&&W.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||la(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){W.__e(o,e)}i.base=i.__P=null}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&Tl(i[r],e,s||typeof t.type!="function");s||aa(t.__e),t.__c=t.__=t.__e=void 0}function od(t,e,s){return this.constructor(t,s)}function ai(t,e,s){var i,r,o,a;e==document&&(e=document.documentElement),W.__&&W.__(t,e),r=(i=typeof s=="function")?null:s&&s.__k||e.__k,o=[],a=[],na(e,t=(!i&&s||e).__k=Oe(be,null,[t]),r||Ui,Ui,e.namespaceURI,!i&&s?[s]:r?null:e.firstChild?Ji.call(e.childNodes):null,o,!i&&s?s:r?r.__e:e.firstChild,i,a),zl(o,t,a)}function Rl(t,e){ai(t,e,Rl)}function ad(t,e,s){var i,r,o,a,l=Me({},t.props);for(o in t.type&&t.type.defaultProps&&(a=t.type.defaultProps),e)o=="key"?i=e[o]:o=="ref"?r=e[o]:l[o]=e[o]===void 0&&a!==void 0?a[o]:e[o];return arguments.length>2&&(l.children=arguments.length>3?Ji.call(arguments,2):s),Oi(t.type,l,i||t.key,r||t.ref,null)}function tr(t,e){var s={__c:e="__cC"+kl++,__:t,Consumer:function(i,r){return i.children(r)},Provider:function(i){var r,o;return this.getChildContext||(r=new Set,(o={})[e]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&r.forEach(function(l){l.__e=!0,Ao(l)})},this.sub=function(a){r.add(a);var l=a.componentWillUnmount;a.componentWillUnmount=function(){r&&r.delete(a),l&&l.call(a)}}),i.children}};return s.Provider.__=s.Consumer.contextType=s}Ji=Cl.slice,W={__e:function(t,e,s,i){for(var r,o,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,i||{}),a=r.__d),a)return r.__E=r}catch(l){t=l}throw t}},_l=0,ge.prototype.setState=function(t,e){var s;s=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Me({},this.state),typeof t=="function"&&(t=t(Me({},s),this.props)),t&&Me(s,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ao(this))},ge.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ao(this))},ge.prototype.render=be,gs=[],wl=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Co=function(t,e){return t.__v.__b-e.__v.__b},Tr.__r=0,xl=/(PointerCapture)$|Capture$/i,oa=0,So=Wa(!1),$o=Wa(!0),kl=0;var nd=0;function w(t,e,s,i,r,o){e||(e={});var a,l,c=e;if("ref"in c)for(l in c={},e)l=="ref"?a=e[l]:c[l]=e[l];var h={type:t,props:c,key:s,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--nd,__i:-1,__u:0,__source:r,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)c[l]===void 0&&(c[l]=a[l]);return W.vnode&&W.vnode(h),h}var Eo="";function zo(t){Eo=t}function ld(t=""){if(!Eo){const e=[...document.getElementsByTagName("script")],s=e.find(i=>i.hasAttribute("data-shoelace"));if(s)zo(s.getAttribute("data-shoelace"));else{const i=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";i&&(r=i.getAttribute("src")),zo(r.split("/").slice(0,-1).join("/"))}}return Eo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Pl=Object.defineProperty,cd=Object.defineProperties,dd=Object.getOwnPropertyDescriptor,hd=Object.getOwnPropertyDescriptors,ja=Object.getOwnPropertySymbols,ud=Object.prototype.hasOwnProperty,pd=Object.prototype.propertyIsEnumerable,eo=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ca=t=>{throw TypeError(t)},Ka=(t,e,s)=>e in t?Pl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,Be=(t,e)=>{for(var s in e||(e={}))ud.call(e,s)&&Ka(t,s,e[s]);if(ja)for(var s of ja(e))pd.call(e,s)&&Ka(t,s,e[s]);return t},er=(t,e)=>cd(t,hd(e)),n=(t,e,s,i)=>{for(var r=i>1?void 0:i?dd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Pl(e,s,r),r},Ol=(t,e,s)=>e.has(t)||ca("Cannot "+s),fd=(t,e,s)=>(Ol(t,e,"read from private field"),e.get(t)),md=(t,e,s)=>e.has(t)?ca("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),gd=(t,e,s,i)=>(Ol(t,e,"write to private field"),e.set(t,s),s),bd=function(t,e){this[0]=t,this[1]=e},vd=t=>{var e=t[eo("asyncIterator")],s=!1,i,r={};return e==null?(e=t[eo("iterator")](),i=o=>r[o]=a=>e[o](a)):(e=e.call(t),i=o=>r[o]=a=>{if(s){if(s=!1,o==="throw")throw a;return a}return s=!0,{done:!1,value:new bd(new Promise(l=>{var c=e[o](a);c instanceof Object||ca("Object expected"),l(c)}),1)}}),r[eo("iterator")]=()=>r,i("next"),"throw"in e?i("throw"):r.throw=o=>{throw o},"return"in e&&i("return"),r};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=globalThis,da=Sr.ShadowRoot&&(Sr.ShadyCSS===void 0||Sr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ha=Symbol(),Ga=new WeakMap;let Il=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==ha)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(da&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=Ga.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ga.set(s,e))}return e}toString(){return this.cssText}};const yd=t=>new Il(typeof t=="string"?t:t+"",void 0,ha),F=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new Il(s,t,ha)},_d=(t,e)=>{if(da)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=Sr.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},Qa=da?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return yd(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wd,defineProperty:xd,getOwnPropertyDescriptor:kd,getOwnPropertyNames:Cd,getOwnPropertySymbols:Sd,getPrototypeOf:$d}=Object,rs=globalThis,Ya=rs.trustedTypes,Ad=Ya?Ya.emptyScript:"",so=rs.reactiveElementPolyfillSupport,Ii=(t,e)=>t,ni={toAttribute(t,e){switch(e){case Boolean:t=t?Ad:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ua=(t,e)=>!wd(t,e),Xa={attribute:!0,type:String,converter:ni,reflect:!1,hasChanged:ua};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),rs.litPropertyMetadata??(rs.litPropertyMetadata=new WeakMap);let Vs=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Xa){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&xd(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:o}=kd(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){const l=r==null?void 0:r.call(this);o.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xa}static _$Ei(){if(this.hasOwnProperty(Ii("elementProperties")))return;const e=$d(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ii("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ii("properties"))){const s=this.properties,i=[...Cd(s),...Sd(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(Qa(r))}else e!==void 0&&s.push(Qa(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _d(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$EC(e,s){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const a=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:ni).toAttribute(s,i.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,s){var o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:ni;this._$Em=r,this[r]=l.fromAttribute(s,a.type),this._$Em=null}}requestUpdate(e,s,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ua)(this[e],s))return;this.P(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,s,i){this._$AL.has(e)||this._$AL.set(e,s),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(s)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(e){}firstUpdated(e){}};Vs.elementStyles=[],Vs.shadowRootOptions={mode:"open"},Vs[Ii("elementProperties")]=new Map,Vs[Ii("finalized")]=new Map,so==null||so({ReactiveElement:Vs}),(rs.reactiveElementVersions??(rs.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=globalThis,Rr=Ni.trustedTypes,Za=Rr?Rr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Nl="$lit$",Qe=`lit$${Math.random().toFixed(9).slice(2)}$`,Ll="?"+Qe,Ed=`<${Ll}>`,zs=document,qi=()=>zs.createComment(""),Wi=t=>t===null||typeof t!="object"&&typeof t!="function",pa=Array.isArray,zd=t=>pa(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",io=`[ 	
\f\r]`,ki=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ja=/-->/g,tn=/>/g,fs=RegExp(`>|${io}(?:([^\\s"'>=/]+)(${io}*=${io}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),en=/'/g,sn=/"/g,Dl=/^(?:script|style|textarea|title)$/i,Td=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),$=Td(1),Xt=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),rn=new WeakMap,vs=zs.createTreeWalker(zs,129);function Ml(t,e){if(!pa(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Za!==void 0?Za.createHTML(e):e}const Rd=(t,e)=>{const s=t.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",a=ki;for(let l=0;l<s;l++){const c=t[l];let h,f,d=-1,p=0;for(;p<c.length&&(a.lastIndex=p,f=a.exec(c),f!==null);)p=a.lastIndex,a===ki?f[1]==="!--"?a=Ja:f[1]!==void 0?a=tn:f[2]!==void 0?(Dl.test(f[2])&&(r=RegExp("</"+f[2],"g")),a=fs):f[3]!==void 0&&(a=fs):a===fs?f[0]===">"?(a=r??ki,d=-1):f[1]===void 0?d=-2:(d=a.lastIndex-f[2].length,h=f[1],a=f[3]===void 0?fs:f[3]==='"'?sn:en):a===sn||a===en?a=fs:a===Ja||a===tn?a=ki:(a=fs,r=void 0);const m=a===fs&&t[l+1].startsWith("/>")?" ":"";o+=a===ki?c+Ed:d>=0?(i.push(h),c.slice(0,d)+Nl+c.slice(d)+Qe+m):c+Qe+(d===-2?l:m)}return[Ml(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let To=class Fl{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,a=0;const l=e.length-1,c=this.parts,[h,f]=Rd(e,s);if(this.el=Fl.createElement(h,i),vs.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=vs.nextNode())!==null&&c.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Nl)){const p=f[a++],m=r.getAttribute(d).split(Qe),g=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:g[2],strings:m,ctor:g[1]==="."?Od:g[1]==="?"?Id:g[1]==="@"?Nd:Hr}),r.removeAttribute(d)}else d.startsWith(Qe)&&(c.push({type:6,index:o}),r.removeAttribute(d));if(Dl.test(r.tagName)){const d=r.textContent.split(Qe),p=d.length-1;if(p>0){r.textContent=Rr?Rr.emptyScript:"";for(let m=0;m<p;m++)r.append(d[m],qi()),vs.nextNode(),c.push({type:2,index:++o});r.append(d[p],qi())}}}else if(r.nodeType===8)if(r.data===Ll)c.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(Qe,d+1))!==-1;)c.push({type:7,index:o}),d+=Qe.length-1}o++}}static createElement(e,s){const i=zs.createElement("template");return i.innerHTML=e,i}};function li(t,e,s=t,i){var a,l;if(e===Xt)return e;let r=i!==void 0?(a=s._$Co)==null?void 0:a[i]:s._$Cl;const o=Wi(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=li(t,r._$AS(t,e.values),r,i)),e}let Pd=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??zs).importNode(s,!0);vs.currentNode=r;let o=vs.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new fa(o,o.nextSibling,this,e):c.type===1?h=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(h=new Ld(o,this,e)),this._$AV.push(h),c=i[++l]}a!==(c==null?void 0:c.index)&&(o=vs.nextNode(),a++)}return vs.currentNode=zs,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}},fa=class Vl{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=li(this,e,s),Wi(e)?e===at||e==null||e===""?(this._$AH!==at&&this._$AR(),this._$AH=at):e!==this._$AH&&e!==Xt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==at&&Wi(this._$AH)?this._$AA.nextSibling.data=e:this.T(zs.createTextNode(e)),this._$AH=e}$(e){var o;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=To.createElement(Ml(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(s);else{const a=new Pd(r,this),l=a.u(this.options);a.p(s),this.T(l),this._$AH=a}}_$AC(e){let s=rn.get(e.strings);return s===void 0&&rn.set(e.strings,s=new To(e)),s}k(e){pa(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const o of e)r===s.length?s.push(i=new Vl(this.O(qi()),this.O(qi()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}},Hr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,o){this.type=1,this._$AH=at,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=at}_$AI(e,s=this,i,r){const o=this.strings;let a=!1;if(o===void 0)e=li(this,e,s,0),a=!Wi(e)||e!==this._$AH&&e!==Xt,a&&(this._$AH=e);else{const l=e;let c,h;for(e=o[0],c=0;c<o.length-1;c++)h=li(this,l[i+c],s,c),h===Xt&&(h=this._$AH[c]),a||(a=!Wi(h)||h!==this._$AH[c]),h===at?e=at:e!==at&&(e+=(h??"")+o[c+1]),this._$AH[c]=h}a&&!r&&this.j(e)}j(e){e===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Od=class extends Hr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===at?void 0:e}},Id=class extends Hr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==at)}},Nd=class extends Hr{constructor(e,s,i,r,o){super(e,s,i,r,o),this.type=5}_$AI(e,s=this){if((e=li(this,e,s,0)??at)===Xt)return;const i=this._$AH,r=e===at&&i!==at||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==at&&(i===at||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}},Ld=class{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){li(this,e)}};const ro=Ni.litHtmlPolyfillSupport;ro==null||ro(To,fa),(Ni.litHtmlVersions??(Ni.litHtmlVersions=[])).push("3.2.1");const Dd=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const o=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new fa(e.insertBefore(qi(),o),o,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Li=class extends Vs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Dd(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Xt}};var dl;Li._$litElement$=!0,Li.finalized=!0,(dl=globalThis.litElementHydrateSupport)==null||dl.call(globalThis,{LitElement:Li});const oo=globalThis.litElementPolyfillSupport;oo==null||oo({LitElement:Li});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var Md=F`
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
`,B=F`
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
 */const Fd={attribute:!0,type:String,converter:ni,reflect:!1,hasChanged:ua},Vd=(t=Fd,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),i==="accessor"){const{name:a}=s;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,c,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=s;return function(l){const c=this[a];e.call(this,l),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+i)};function u(t){return(e,s)=>typeof s=="object"?Vd(t,e,s):((i,r,o)=>{const a=r.hasOwnProperty(o);return r.constructor.createProperty(o,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(t){return u({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sr(t){return(e,s)=>{const i=typeof e=="function"?e:e[s];Object.assign(i,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hl=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(t,e){return(s,i,r)=>{const o=a=>{var l;return((l=a.renderRoot)==null?void 0:l.querySelector(t))??null};return Hl(s,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Hd(t){return(e,s)=>Hl(e,s,{async get(){var i;return await this.updateComplete,((i=this.renderRoot)==null?void 0:i.querySelector(t))??null}})}var $r,L=class extends Li{constructor(){super(),md(this,$r,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const s=new CustomEvent(t,Be({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,s)}catch{customElements.define(t,class extends e{},s)}return}let r=" (unknown version)",o=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(o=" v"+i.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${o} has already been registered.`)}attributeChangedCallback(t,e,s){fd(this,$r)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),gd(this,$r,!0)),super.attributeChangedCallback(t,e,s)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,s)=>{t.has(s)&&this[s]==null&&(this[s]=e)})}};$r=new WeakMap;L.version="2.20.0";L.dependencies={};n([u()],L.prototype,"dir",2);n([u()],L.prototype,"lang",2);var Br=class extends L{render(){return $` <slot></slot> `}};Br.styles=[B,Md];var He,ot,ao,on,ci=0,Bl=[],ct=W,an=ct.__b,nn=ct.__r,ln=ct.diffed,cn=ct.__c,dn=ct.unmount,hn=ct.__;function Is(t,e){ct.__h&&ct.__h(ot,t,ci||e),ci=0;var s=ot.__H||(ot.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({}),s.__[t]}function ht(t){return ci=1,Ur(Ul,t)}function Ur(t,e,s){var i=Is(He++,2);if(i.t=t,!i.__c&&(i.__=[s?s(e):Ul(void 0,e),function(l){var c=i.__N?i.__N[0]:i.__[0],h=i.t(c,l);c!==h&&(i.__N=[h,i.__[1]],i.__c.setState({}))}],i.__c=ot,!ot.u)){var r=function(l,c,h){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(p){return!!p.__c});if(f.every(function(p){return!p.__N}))return!o||o.call(this,l,c,h);var d=i.__c.props!==l;return f.forEach(function(p){if(p.__N){var m=p.__[0];p.__=p.__N,p.__N=void 0,m!==p.__[0]&&(d=!0)}}),o&&o.call(this,l,c,h)||d};ot.u=!0;var o=ot.shouldComponentUpdate,a=ot.componentWillUpdate;ot.componentWillUpdate=function(l,c,h){if(this.__e){var f=o;o=void 0,r(l,c,h),o=f}a&&a.call(this,l,c,h)},ot.shouldComponentUpdate=r}return i.__N||i.__}function Ns(t,e){var s=Is(He++,3);!ct.__s&&va(s.__H,e)&&(s.__=t,s.i=e,ot.__H.__h.push(s))}function hi(t,e){var s=Is(He++,4);!ct.__s&&va(s.__H,e)&&(s.__=t,s.i=e,ot.__h.push(s))}function cs(t){return ci=5,ir(function(){return{current:t}},[])}function ma(t,e,s){ci=6,hi(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},s==null?s:s.concat(t))}function ir(t,e){var s=Is(He++,7);return va(s.__H,e)&&(s.__=t(),s.__H=e,s.__h=t),s.__}function qr(t,e){return ci=8,ir(function(){return t},e)}function ui(t){var e=ot.context[t.__c],s=Is(He++,9);return s.c=t,e?(s.__==null&&(s.__=!0,e.sub(ot)),e.props.value):t.__}function ga(t,e){ct.useDebugValue&&ct.useDebugValue(e?e(t):t)}function Bd(t){var e=Is(He++,10),s=ht();return e.__=t,ot.componentDidCatch||(ot.componentDidCatch=function(i,r){e.__&&e.__(i,r),s[1](i)}),[s[0],function(){s[1](void 0)}]}function ba(){var t=Is(He++,11);if(!t.__){for(var e=ot.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var s=e.__m||(e.__m=[0,0]);t.__="P"+s[0]+"-"+s[1]++}return t.__}function Ud(){for(var t;t=Bl.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ar),t.__H.__h.forEach(Ro),t.__H.__h=[]}catch(e){t.__H.__h=[],ct.__e(e,t.__v)}}ct.__b=function(t){ot=null,an&&an(t)},ct.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),hn&&hn(t,e)},ct.__r=function(t){nn&&nn(t),He=0;var e=(ot=t.__c).__H;e&&(ao===ot?(e.__h=[],ot.__h=[],e.__.forEach(function(s){s.__N&&(s.__=s.__N),s.i=s.__N=void 0})):(e.__h.forEach(Ar),e.__h.forEach(Ro),e.__h=[],He=0)),ao=ot},ct.diffed=function(t){ln&&ln(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Bl.push(e)!==1&&on===ct.requestAnimationFrame||((on=ct.requestAnimationFrame)||qd)(Ud)),e.__H.__.forEach(function(s){s.i&&(s.__H=s.i),s.i=void 0})),ao=ot=null},ct.__c=function(t,e){e.some(function(s){try{s.__h.forEach(Ar),s.__h=s.__h.filter(function(i){return!i.__||Ro(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],ct.__e(i,s.__v)}}),cn&&cn(t,e)},ct.unmount=function(t){dn&&dn(t);var e,s=t.__c;s&&s.__H&&(s.__H.__.forEach(function(i){try{Ar(i)}catch(r){e=r}}),s.__H=void 0,e&&ct.__e(e,s.__v))};var un=typeof requestAnimationFrame=="function";function qd(t){var e,s=function(){clearTimeout(i),un&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(s,100);un&&(e=requestAnimationFrame(s))}function Ar(t){var e=ot,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),ot=e}function Ro(t){var e=ot;t.__c=t.__(),ot=e}function va(t,e){return!t||t.length!==e.length||e.some(function(s,i){return s!==t[i]})}function Ul(t,e){return typeof e=="function"?e(t):e}function ql(t,e){for(var s in e)t[s]=e[s];return t}function Po(t,e){for(var s in t)if(s!=="__source"&&!(s in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function Wr(t,e){var s=e(),i=ht({t:{__:s,u:e}}),r=i[0].t,o=i[1];return hi(function(){r.__=s,r.u=e,no(r)&&o({t:r})},[t,s,e]),Ns(function(){return no(r)&&o({t:r}),t(function(){no(r)&&o({t:r})})},[t]),s}function no(t){var e,s,i=t.u,r=t.__;try{var o=i();return!((e=r)===(s=o)&&(e!==0||1/e==1/s)||e!=e&&s!=s)}catch{return!0}}function ya(t){t()}function _a(t){return t}function wa(){return[!1,ya]}var xa=hi;function Pr(t,e){this.props=t,this.context=e}function Wl(t,e){function s(r){var o=this.props.ref,a=o==r.ref;return!a&&o&&(o.call?o(null):o.current=null),e?!e(this.props,r)||!a:Po(this.props,r)}function i(r){return this.shouldComponentUpdate=s,Oe(t,r)}return i.displayName="Memo("+(t.displayName||t.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(Pr.prototype=new ge).isPureReactComponent=!0,Pr.prototype.shouldComponentUpdate=function(t,e){return Po(this.props,t)||Po(this.state,e)};var pn=W.__b;W.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),pn&&pn(t)};var Wd=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function jl(t){function e(s){var i=ql({},s);return delete i.ref,t(i,s.ref||null)}return e.$$typeof=Wd,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var fn=function(t,e){return t==null?null:Fe(Fe(t).map(e))},Kl={map:fn,forEach:fn,count:function(t){return t?Fe(t).length:0},only:function(t){var e=Fe(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:Fe},jd=W.__e;W.__e=function(t,e,s,i){if(t.then){for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return e.__e==null&&(e.__e=s.__e,e.__k=s.__k),r.__c(t,e)}jd(t,e,s,i)};var mn=W.unmount;function Gl(t,e,s){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),t.__c.__H=null),(t=ql({},t)).__c!=null&&(t.__c.__P===s&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(i){return Gl(i,e,s)})),t}function Ql(t,e,s){return t&&s&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(i){return Ql(i,e,s)}),t.__c&&t.__c.__P===e&&(t.__e&&s.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=s)),t}function Di(){this.__u=0,this.o=null,this.__b=null}function Yl(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Xl(t){var e,s,i;function r(o){if(e||(e=t()).then(function(a){s=a.default||a},function(a){i=a}),i)throw i;if(!s)throw e;return Oe(s,o)}return r.displayName="Lazy",r.__f=!0,r}function Hs(){this.i=null,this.l=null}W.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),mn&&mn(t)},(Di.prototype=new ge).__c=function(t,e){var s=e.__c,i=this;i.o==null&&(i.o=[]),i.o.push(s);var r=Yl(i.__v),o=!1,a=function(){o||(o=!0,s.__R=null,r?r(l):l())};s.__R=a;var l=function(){if(!--i.__u){if(i.state.__a){var c=i.state.__a;i.__v.__k[0]=Ql(c,c.__c.__P,c.__c.__O)}var h;for(i.setState({__a:i.__b=null});h=i.o.pop();)h.forceUpdate()}};i.__u++||32&e.__u||i.setState({__a:i.__b=i.__v.__k[0]}),t.then(a,a)},Di.prototype.componentWillUnmount=function(){this.o=[]},Di.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var s=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=Gl(this.__b,s,i.__O=i.__P)}this.__b=null}var r=e.__a&&Oe(be,null,t.fallback);return r&&(r.__u&=-33),[Oe(be,null,e.__a?null:t.children),r]};var gn=function(t,e,s){if(++s[1]===s[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(s=t.i;s;){for(;s.length>3;)s.pop()();if(s[1]<s[0])break;t.i=s=s[2]}};function Kd(t){return this.getChildContext=function(){return t.context},t.children}function Gd(t){var e=this,s=t.h;e.componentWillUnmount=function(){ai(null,e.v),e.v=null,e.h=null},e.h&&e.h!==s&&e.componentWillUnmount(),e.v||(e.h=s,e.v={nodeType:1,parentNode:s,childNodes:[],contains:function(){return!0},appendChild:function(i){this.childNodes.push(i),e.h.appendChild(i)},insertBefore:function(i,r){this.childNodes.push(i),e.h.insertBefore(i,r)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),e.h.removeChild(i)}}),ai(Oe(Kd,{context:e.context},t.__v),e.v)}function Zl(t,e){var s=Oe(Gd,{__v:t,h:e});return s.containerInfo=e,s}(Hs.prototype=new ge).__a=function(t){var e=this,s=Yl(e.__v),i=e.l.get(t);return i[0]++,function(r){var o=function(){e.props.revealOrder?(i.push(r),gn(e,t,i)):r()};s?s(o):o()}},Hs.prototype.render=function(t){this.i=null,this.l=new Map;var e=Fe(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var s=e.length;s--;)this.l.set(e[s],this.i=[1,0,this.i]);return t.children},Hs.prototype.componentDidUpdate=Hs.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,s){gn(t,s,e)})};var Jl=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qd=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Yd=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Xd=/[A-Z0-9]/g,Zd=typeof document<"u",Jd=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function tc(t,e,s){return e.__k==null&&(e.textContent=""),ai(t,e),typeof s=="function"&&s(),t?t.__c:null}function ec(t,e,s){return Rl(t,e),typeof s=="function"&&s(),t?t.__c:null}ge.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(ge.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var bn=W.event;function th(){}function eh(){return this.cancelBubble}function sh(){return this.defaultPrevented}W.event=function(t){return bn&&(t=bn(t)),t.persist=th,t.isPropagationStopped=eh,t.isDefaultPrevented=sh,t.nativeEvent=t};var ka,ih={enumerable:!1,configurable:!0,get:function(){return this.class}},vn=W.vnode;W.vnode=function(t){typeof t.type=="string"&&function(e){var s=e.props,i=e.type,r={},o=i.indexOf("-")===-1;for(var a in s){var l=s[a];if(!(a==="value"&&"defaultValue"in s&&l==null||Zd&&a==="children"&&i==="noscript"||a==="class"||a==="className")){var c=a.toLowerCase();a==="defaultValue"&&"value"in s&&s.value==null?a="value":a==="download"&&l===!0?l="":c==="translate"&&l==="no"?l=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?a="ondblclick":c!=="onchange"||i!=="input"&&i!=="textarea"||Jd(s.type)?c==="onfocus"?a="onfocusin":c==="onblur"?a="onfocusout":Yd.test(a)&&(a=c):c=a="oninput":o&&Qd.test(a)?a=a.replace(Xd,"-$&").toLowerCase():l===null&&(l=void 0),c==="oninput"&&r[a=c]&&(a="oninputCapture"),r[a]=l}}i=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Fe(s.children).forEach(function(h){h.props.selected=r.value.indexOf(h.props.value)!=-1})),i=="select"&&r.defaultValue!=null&&(r.value=Fe(s.children).forEach(function(h){h.props.selected=r.multiple?r.defaultValue.indexOf(h.props.value)!=-1:r.defaultValue==h.props.value})),s.class&&!s.className?(r.class=s.class,Object.defineProperty(r,"className",ih)):(s.className&&!s.class||s.class&&s.className)&&(r.class=r.className=s.className),e.props=r}(t),t.$$typeof=Jl,vn&&vn(t)};var yn=W.__r;W.__r=function(t){yn&&yn(t),ka=t.__c};var _n=W.diffed;W.diffed=function(t){_n&&_n(t);var e=t.props,s=t.__e;s!=null&&t.type==="textarea"&&"value"in e&&e.value!==s.value&&(s.value=e.value==null?"":e.value),ka=null};var sc={ReactCurrentDispatcher:{current:{readContext:function(t){return ka.__n[t.__c].props.value},useCallback:qr,useContext:ui,useDebugValue:ga,useDeferredValue:_a,useEffect:Ns,useId:ba,useImperativeHandle:ma,useInsertionEffect:xa,useLayoutEffect:hi,useMemo:ir,useReducer:Ur,useRef:cs,useState:ht,useSyncExternalStore:Wr,useTransition:wa}}},rh="18.3.1";function ic(t){return Oe.bind(null,t)}function rr(t){return!!t&&t.$$typeof===Jl}function rc(t){return rr(t)&&t.type===be}function oc(t){return!!t&&!!t.displayName&&(typeof t.displayName=="string"||t.displayName instanceof String)&&t.displayName.startsWith("Memo(")}function ac(t){return rr(t)?ad.apply(null,arguments):t}function nc(t){return!!t.__k&&(ai(null,t),!0)}function lc(t){return t&&(t.base||t.nodeType===1&&t)||null}var cc=function(t,e){return t(e)},dc=function(t,e){return t(e)},hc=be,uc=rr,Oo={useState:ht,useId:ba,useReducer:Ur,useEffect:Ns,useLayoutEffect:hi,useInsertionEffect:xa,useTransition:wa,useDeferredValue:_a,useSyncExternalStore:Wr,startTransition:ya,useRef:cs,useImperativeHandle:ma,useMemo:ir,useCallback:qr,useContext:ui,useDebugValue:ga,version:"18.3.1",Children:Kl,render:tc,hydrate:ec,unmountComponentAtNode:nc,createPortal:Zl,createElement:Oe,createContext:tr,createFactory:ic,cloneElement:ac,createRef:Sl,Fragment:be,isValidElement:rr,isElement:uc,isFragment:rc,isMemo:oc,findDOMNode:lc,Component:ge,PureComponent:Pr,memo:Wl,forwardRef:jl,flushSync:dc,unstable_batchedUpdates:cc,StrictMode:hc,Suspense:Di,SuspenseList:Hs,lazy:Xl,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:sc};const D=Object.freeze(Object.defineProperty({__proto__:null,Children:Kl,Component:ge,Fragment:be,PureComponent:Pr,StrictMode:hc,Suspense:Di,SuspenseList:Hs,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:sc,cloneElement:ac,createContext:tr,createElement:Oe,createFactory:ic,createPortal:Zl,createRef:Sl,default:Oo,findDOMNode:lc,flushSync:dc,forwardRef:jl,hydrate:ec,isElement:uc,isFragment:rc,isMemo:oc,isValidElement:rr,lazy:Xl,memo:Wl,render:tc,startTransition:ya,unmountComponentAtNode:nc,unstable_batchedUpdates:cc,useCallback:qr,useContext:ui,useDebugValue:ga,useDeferredValue:_a,useEffect:Ns,useErrorBoundary:Bd,useId:ba,useImperativeHandle:ma,useInsertionEffect:xa,useLayoutEffect:hi,useMemo:ir,useReducer:Ur,useRef:cs,useState:ht,useSyncExternalStore:Wr,useTransition:wa,version:rh},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oh=new Set(["children","localName","ref","style","className"]),wn=new WeakMap,xn=(t,e,s,i,r)=>{const o=r==null?void 0:r[e];o===void 0?(t[e]=s,s==null&&e in HTMLElement.prototype&&t.removeAttribute(e)):s!==i&&((a,l,c)=>{let h=wn.get(a);h===void 0&&wn.set(a,h=new Map);let f=h.get(l);c!==void 0?f===void 0?(h.set(l,f={handleEvent:c}),a.addEventListener(l,f)):f.handleEvent=c:f!==void 0&&(h.delete(l),a.removeEventListener(l,f))})(t,o,s)},M=({react:t,tagName:e,elementClass:s,events:i,displayName:r})=>{const o=new Set(Object.keys(i??{})),a=t.forwardRef((l,c)=>{const h=t.useRef(new Map),f=t.useRef(null),d={},p={};for(const[m,g]of Object.entries(l))oh.has(m)?d[m==="className"?"class":m]=g:o.has(m)||m in s.prototype?p[m]=g:d[m]=g;return t.useLayoutEffect(()=>{if(f.current===null)return;const m=new Map;for(const g in p)xn(f.current,g,l[g],h.current.get(g),i),h.current.delete(g),m.set(g,l[g]);for(const[g,v]of h.current)xn(f.current,g,void 0,v,i);h.current=m}),t.useLayoutEffect(()=>{var m;(m=f.current)==null||m.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,t.createElement(e,{...d,ref:t.useCallback(m=>{f.current=m,typeof c=="function"?c(m):c!==null&&(c.current=m)},[c])})});return a.displayName=r??s.name,a};var ah="sl-visually-hidden";Br.define("sl-visually-hidden");M({tagName:ah,elementClass:Br,react:D,events:{},displayName:"SlVisuallyHidden"});var nh=F`
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
`,pi=(t="value")=>(e,s)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,a,l){var c;const h=i.getPropertyOptions(t),f=typeof h.attribute=="string"?h.attribute:t;if(o===f){const d=h.converter||ni,m=(typeof d=="function"?d:(c=d==null?void 0:d.fromAttribute)!=null?c:ni.fromAttribute)(l,h.type);this[t]!==m&&(this[s]=m)}r.call(this,o,a,l)}},Ls=F`
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
`,Ci=new WeakMap,Si=new WeakMap,$i=new WeakMap,lo=new WeakSet,gr=new WeakMap,Ue=class{constructor(t,e){this.handleFormData=s=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!a&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(l=>{s.formData.append(r,l.toString())}):s.formData.append(r,o.toString()))},this.handleFormSubmit=s=>{var i;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Ci.get(this.form))==null||i.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),gr.set(this.host,[])},this.handleInteraction=s=>{const i=gr.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Be({form:s=>{const i=s.form;if(i){const o=s.getRootNode().querySelector(`#${i}`);if(o)return o}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),gr.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),gr.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Ci.has(this.form)?Ci.get(this.form).add(this.host):Ci.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Si.has(this.form)||(Si.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),$i.has(this.form)||($i.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Ci.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Si.has(this.form)&&(this.form.reportValidity=Si.get(this.form),Si.delete(this.form)),$i.has(this.form)&&(this.form.checkValidity=$i.get(this.form),$i.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?lo.add(t):lo.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&s.setAttribute(i,e.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=!!lo.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},jr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),lh=Object.freeze(er(Be({},jr),{valid:!1,valueMissing:!0})),ch=Object.freeze(er(Be({},jr),{valid:!1,customError:!0})),Ft=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function dh(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let s="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}function A(t,e){const s=Be({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:o}=i,a=Array.isArray(t)?t:[t];i.update=function(l){a.forEach(c=>{const h=c;if(l.has(h)){const f=l.get(h),d=this[h];f!==d&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[r](f,d)}}),o.call(this,l)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},or=t=>(...e)=>({_$litDirective$:t,values:e});let ar=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=or(class extends ar{constructor(t){var e;if(super(t),t.type!==Te.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(e)}const s=t.element.classList;for(const o of this.st)o in e||(s.remove(o),this.st.delete(o));for(const o in e){const a=!!e[o];a===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(a?(s.add(o),this.st.add(o)):(s.remove(o),this.st.delete(o)))}return Xt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>t??at;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hh=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,pc=t=>t.strings===void 0,uh={},ph=(t,e=uh)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts=or(class extends ar{constructor(t){if(super(t),t.type!==Te.PROPERTY&&t.type!==Te.ATTRIBUTE&&t.type!==Te.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!pc(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Xt||e===at)return e;const s=t.element,i=t.name;if(t.type===Te.PROPERTY){if(e===s[i])return Xt}else if(t.type===Te.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return Xt}else if(t.type===Te.ATTRIBUTE&&s.getAttribute(i)===e+"")return Xt;return ph(t),e}});var Rt=class extends L{constructor(){super(...arguments),this.formControlController=new Ue(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Ft(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return $`
      <div
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
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
            value=${N(this.value)}
            .checked=${Ts(this.checked)}
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
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Rt.styles=[B,Ls,nh];n([T('input[type="checkbox"]')],Rt.prototype,"input",2);n([V()],Rt.prototype,"hasFocus",2);n([u()],Rt.prototype,"title",2);n([u()],Rt.prototype,"name",2);n([u()],Rt.prototype,"value",2);n([u({reflect:!0})],Rt.prototype,"size",2);n([u({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2);n([u({type:Boolean,reflect:!0})],Rt.prototype,"checked",2);n([pi("checked")],Rt.prototype,"defaultChecked",2);n([u({reflect:!0})],Rt.prototype,"form",2);n([u({type:Boolean,reflect:!0})],Rt.prototype,"required",2);n([u({attribute:"help-text"})],Rt.prototype,"helpText",2);n([A("checked",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleCheckedChange",1);n([A("disabled",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleDisabledChange",1);var fh="sl-switch";Rt.define("sl-switch");M({tagName:fh,elementClass:Rt,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var mh=F`
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
`,gh=F`
  :host {
    display: contents;
  }
`,fi=class extends L{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],e.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};fi.styles=[B,gh];n([u({type:Boolean,reflect:!0})],fi.prototype,"disabled",2);n([A("disabled",{waitUntilFirstUpdate:!0})],fi.prototype,"handleDisabledChange",1);function bh(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Io=new Set;function vh(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function yh(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Mi(t){if(Io.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=vh()+yh();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Fi(t){Io.delete(t),Io.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function No(t,e,s="vertical",i="smooth"){const r=bh(t,e),o=r.top+e.scrollTop,a=r.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,f=e.scrollTop+e.offsetHeight;(s==="horizontal"||s==="both")&&(a<l?e.scrollTo({left:a,behavior:i}):a+t.clientWidth>c&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(o<h?e.scrollTo({top:o,behavior:i}):o+t.clientHeight>f&&e.scrollTo({top:o-e.offsetHeight+t.clientHeight,behavior:i}))}var _h=F`
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
`,wh={name:"default",resolver:t=>ld(`assets/icons/${t}.svg`)},xh=wh,kn={caret:`
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
  `},kh={name:"system",resolver:t=>t in kn?`data:image/svg+xml,${encodeURIComponent(kn[t])}`:""},Ch=kh,Sh=[xh,Ch],Lo=[];function $h(t){Lo.push(t)}function Ah(t){Lo=Lo.filter(e=>e!==t)}function Cn(t){return Sh.find(e=>e.name===t)}var Eh=F`
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
`,Ai=Symbol(),br=Symbol(),co,ho=new Map,rt=class extends L{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let i;if(e!=null&&e.spriteSheet)return this.svg=$`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Ai:br}catch{return br}try{const r=document.createElement("div");r.innerHTML=await i.text();const o=r.firstElementChild;if(((s=o==null?void 0:o.tagName)==null?void 0:s.toLowerCase())!=="svg")return Ai;co||(co=new DOMParser);const l=co.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Ai}catch{return Ai}}connectedCallback(){super.connectedCallback(),$h(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ah(this)}getIconSource(){const t=Cn(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:s}=this.getIconSource(),i=s?Cn(this.library):void 0;if(!e){this.svg=null;return}let r=ho.get(e);if(r||(r=this.resolveIcon(e,i),ho.set(e,r)),!this.initialRender)return;const o=await r;if(o===br&&ho.delete(e),e===this.getIconSource().url){if(hh(o)){if(this.svg=o,i){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&a&&i.mutator(a)}return}switch(o){case br:case Ai:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};rt.styles=[B,Eh];n([V()],rt.prototype,"svg",2);n([u({reflect:!0})],rt.prototype,"name",2);n([u()],rt.prototype,"src",2);n([u()],rt.prototype,"label",2);n([u({reflect:!0})],rt.prototype,"library",2);n([A("label")],rt.prototype,"handleLabelChange",1);n([A(["name","src","library"])],rt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fc=Symbol.for(""),zh=t=>{if((t==null?void 0:t.r)===fc)return t==null?void 0:t._$litStatic$},Or=(t,...e)=>({_$litStatic$:e.reduce((s,i,r)=>s+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:fc}),Sn=new Map,Th=t=>(e,...s)=>{const i=s.length;let r,o;const a=[],l=[];let c,h=0,f=!1;for(;h<i;){for(c=e[h];h<i&&(o=s[h],(r=zh(o))!==void 0);)c+=r+e[++h],f=!0;h!==i&&l.push(o),a.push(c),h++}if(h===i&&a.push(e[i]),f){const d=a.join("$$lit$$");(e=Sn.get(d))===void 0&&(a.raw=a,Sn.set(d,e=a)),s=l}return t(e,...s)},Vi=Th($);var _t=class extends L{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Or`a`:Or`button`;return Vi`
      <${e}
        part="base"
        class=${H({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${N(t?void 0:this.disabled)}
        type=${N(t?void 0:"button")}
        href=${N(t?this.href:void 0)}
        target=${N(t?this.target:void 0)}
        download=${N(t?this.download:void 0)}
        rel=${N(t&&this.target?"noreferrer noopener":void 0)}
        role=${N(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${N(this.name)}
          library=${N(this.library)}
          src=${N(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};_t.styles=[B,_h];_t.dependencies={"sl-icon":rt};n([T(".icon-button")],_t.prototype,"button",2);n([V()],_t.prototype,"hasFocus",2);n([u()],_t.prototype,"name",2);n([u()],_t.prototype,"library",2);n([u()],_t.prototype,"src",2);n([u()],_t.prototype,"href",2);n([u()],_t.prototype,"target",2);n([u()],_t.prototype,"download",2);n([u()],_t.prototype,"label",2);n([u({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);const Do=new Set,Bs=new Map;let bs,Ca="ltr",Sa="en";const mc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(mc){const t=new MutationObserver(bc);Ca=document.documentElement.dir||"ltr",Sa=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function gc(...t){t.map(e=>{const s=e.$code.toLowerCase();Bs.has(s)?Bs.set(s,Object.assign(Object.assign({},Bs.get(s)),e)):Bs.set(s,e),bs||(bs=e)}),bc()}function bc(){mc&&(Ca=document.documentElement.dir||"ltr",Sa=document.documentElement.lang||navigator.language),[...Do.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Rh=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Do.add(this.host)}hostDisconnected(){Do.delete(this.host)}dir(){return`${this.host.dir||Ca}`.toLowerCase()}lang(){return`${this.host.lang||Sa}`.toLowerCase()}getTranslationData(e){var s,i;const r=new Intl.Locale(e.replace(/_/g,"-")),o=r==null?void 0:r.language.toLowerCase(),a=(i=(s=r==null?void 0:r.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",l=Bs.get(`${o}-${a}`),c=Bs.get(o);return{locale:r,language:o,region:a,primary:l,secondary:c}}exists(e,s){var i;const{primary:r,secondary:o}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(r&&r[e]||o&&o[e]||s.includeFallback&&bs&&bs[e])}term(e,...s){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let o;if(i&&i[e])o=i[e];else if(r&&r[e])o=r[e];else if(bs&&bs[e])o=bs[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...s):o}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,s)}};var vc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};gc(vc);var Ph=vc,Z=class extends Rh{};gc(Ph);var $t=class extends L{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Z(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{if(e.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(s=>s.attributeName==="active")){const i=e.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="sl-tab").map(r=>r.target).find(r=>r.active);i&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,i)=>{var r;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");(s==null?void 0:s.closest("sl-tab-group"))===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if((s==null?void 0:s.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(l=>l.matches(":focus")),o=this.localize.dir()==="rtl";let a=null;if((r==null?void 0:r.tagName.toLowerCase())==="sl-tab"){if(t.key==="Home")a=this.focusableTabs[0];else if(t.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===r);a=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===r);a=this.findNextFocusableTab(l,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===a?0:-1}),["top","bottom"].includes(this.placement)&&No(a,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Be({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&No(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),a=r.slice(0,r.indexOf(t)).reduce((l,c)=>({left:l.left+c.clientWidth,top:l.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let s=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(s=this.tabs[r]||null,s===null){e==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;r+=i}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return $`
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
                  name=${t?"chevron-right":"chevron-left"}
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
                  name=${t?"chevron-left":"chevron-right"}
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
    `}};$t.styles=[B,mh];$t.dependencies={"sl-icon-button":_t,"sl-resize-observer":fi};n([T(".tab-group")],$t.prototype,"tabGroup",2);n([T(".tab-group__body")],$t.prototype,"body",2);n([T(".tab-group__nav")],$t.prototype,"nav",2);n([T(".tab-group__indicator")],$t.prototype,"indicator",2);n([V()],$t.prototype,"hasScrollControls",2);n([V()],$t.prototype,"shouldHideScrollStartButton",2);n([V()],$t.prototype,"shouldHideScrollEndButton",2);n([u()],$t.prototype,"placement",2);n([u()],$t.prototype,"activation",2);n([u({attribute:"no-scroll-controls",type:Boolean})],$t.prototype,"noScrollControls",2);n([u({attribute:"fixed-scroll-controls",type:Boolean})],$t.prototype,"fixedScrollControls",2);n([sr({passive:!0})],$t.prototype,"updateScrollButtons",1);n([A("noScrollControls",{waitUntilFirstUpdate:!0})],$t.prototype,"updateScrollControls",1);n([A("placement",{waitUntilFirstUpdate:!0})],$t.prototype,"syncIndicator",1);var Oh="sl-tab-group";$t.define("sl-tab-group");M({tagName:Oh,elementClass:$t,react:D,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var Ih=F`
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
`,Nh=0,mi=class extends L{constructor(){super(...arguments),this.attrId=++Nh,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${H({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};mi.styles=[B,Ih];n([u({reflect:!0})],mi.prototype,"name",2);n([u({type:Boolean,reflect:!0})],mi.prototype,"active",2);n([A("active")],mi.prototype,"handleActiveChange",1);var Lh="sl-tab-panel";mi.define("sl-tab-panel");M({tagName:Lh,elementClass:mi,react:D,events:{},displayName:"SlTabPanel"});var Dh=F`
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
`,qe=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
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
    `}};qe.styles=[B,Dh];qe.dependencies={"sl-icon-button":_t};n([u({reflect:!0})],qe.prototype,"variant",2);n([u({reflect:!0})],qe.prototype,"size",2);n([u({type:Boolean,reflect:!0})],qe.prototype,"pill",2);n([u({type:Boolean})],qe.prototype,"removable",2);var Mh="sl-tag";qe.define("sl-tag");var Fh=M({tagName:Mh,elementClass:qe,react:D,events:{onSlRemove:"sl-remove"},displayName:"SlTag"}),Vh=Fh,Hh=F`
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
`,Bh=F`
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
`;const os=Math.min,Yt=Math.max,Ir=Math.round,vr=Math.floor,Pe=t=>({x:t,y:t}),Uh={left:"right",right:"left",bottom:"top",top:"bottom"},qh={start:"end",end:"start"};function Mo(t,e,s){return Yt(t,os(e,s))}function gi(t,e){return typeof t=="function"?t(e):t}function as(t){return t.split("-")[0]}function bi(t){return t.split("-")[1]}function yc(t){return t==="x"?"y":"x"}function $a(t){return t==="y"?"height":"width"}function Rs(t){return["top","bottom"].includes(as(t))?"y":"x"}function Aa(t){return yc(Rs(t))}function Wh(t,e,s){s===void 0&&(s=!1);const i=bi(t),r=Aa(t),o=$a(r);let a=r==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=Nr(a)),[a,Nr(a)]}function jh(t){const e=Nr(t);return[Fo(t),e,Fo(e)]}function Fo(t){return t.replace(/start|end/g,e=>qh[e])}function Kh(t,e,s){const i=["left","right"],r=["right","left"],o=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return s?e?r:i:e?i:r;case"left":case"right":return e?o:a;default:return[]}}function Gh(t,e,s,i){const r=bi(t);let o=Kh(as(t),s==="start",i);return r&&(o=o.map(a=>a+"-"+r),e&&(o=o.concat(o.map(Fo)))),o}function Nr(t){return t.replace(/left|right|bottom|top/g,e=>Uh[e])}function Qh(t){return{top:0,right:0,bottom:0,left:0,...t}}function _c(t){return typeof t!="number"?Qh(t):{top:t,right:t,bottom:t,left:t}}function Lr(t){const{x:e,y:s,width:i,height:r}=t;return{width:i,height:r,top:s,left:e,right:e+i,bottom:s+r,x:e,y:s}}function $n(t,e,s){let{reference:i,floating:r}=t;const o=Rs(e),a=Aa(e),l=$a(a),c=as(e),h=o==="y",f=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,p=i[l]/2-r[l]/2;let m;switch(c){case"top":m={x:f,y:i.y-r.height};break;case"bottom":m={x:f,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:d};break;case"left":m={x:i.x-r.width,y:d};break;default:m={x:i.x,y:i.y}}switch(bi(e)){case"start":m[a]-=p*(s&&h?-1:1);break;case"end":m[a]+=p*(s&&h?-1:1);break}return m}const Yh=async(t,e,s)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:a}=s,l=o.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:d}=$n(h,i,c),p=i,m={},g=0;for(let v=0;v<l.length;v++){const{name:x,fn:C}=l[v],{x:y,y:S,data:_,reset:k}=await C({x:f,y:d,initialPlacement:i,placement:p,strategy:r,middlewareData:m,rects:h,platform:a,elements:{reference:t,floating:e}});f=y??f,d=S??d,m={...m,[x]:{...m[x],..._}},k&&g<=50&&(g++,typeof k=="object"&&(k.placement&&(p=k.placement),k.rects&&(h=k.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:r}):k.rects),{x:f,y:d}=$n(h,p,c)),v=-1)}return{x:f,y:d,placement:p,strategy:r,middlewareData:m}};async function Ea(t,e){var s;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:a,elements:l,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=gi(e,t),g=_c(m),x=l[p?d==="floating"?"reference":"floating":d],C=Lr(await o.getClippingRect({element:(s=await(o.isElement==null?void 0:o.isElement(x)))==null||s?x:x.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:h,rootBoundary:f,strategy:c})),y=d==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),_=await(o.isElement==null?void 0:o.isElement(S))?await(o.getScale==null?void 0:o.getScale(S))||{x:1,y:1}:{x:1,y:1},k=Lr(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:S,strategy:c}):y);return{top:(C.top-k.top+g.top)/_.y,bottom:(k.bottom-C.bottom+g.bottom)/_.y,left:(C.left-k.left+g.left)/_.x,right:(k.right-C.right+g.right)/_.x}}const Xh=t=>({name:"arrow",options:t,async fn(e){const{x:s,y:i,placement:r,rects:o,platform:a,elements:l,middlewareData:c}=e,{element:h,padding:f=0}=gi(t,e)||{};if(h==null)return{};const d=_c(f),p={x:s,y:i},m=Aa(r),g=$a(m),v=await a.getDimensions(h),x=m==="y",C=x?"top":"left",y=x?"bottom":"right",S=x?"clientHeight":"clientWidth",_=o.reference[g]+o.reference[m]-p[m]-o.floating[g],k=p[m]-o.reference[m],E=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let O=E?E[S]:0;(!O||!await(a.isElement==null?void 0:a.isElement(E)))&&(O=l.floating[S]||o.floating[g]);const I=_/2-k/2,z=O/2-v[g]/2-1,R=os(d[C],z),j=os(d[y],z),J=R,Ot=O-v[g]-j,bt=O/2-v[g]/2+I,ue=Mo(J,bt,Ot),Ce=!c.arrow&&bi(r)!=null&&bt!==ue&&o.reference[g]/2-(bt<J?R:j)-v[g]/2<0,Se=Ce?bt<J?bt-J:bt-Ot:0;return{[m]:p[m]+Se,data:{[m]:ue,centerOffset:bt-ue-Se,...Ce&&{alignmentOffset:Se}},reset:Ce}}}),Zh=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:r,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:h}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...x}=gi(t,e);if((s=o.arrow)!=null&&s.alignmentOffset)return{};const C=as(r),y=Rs(l),S=as(l)===l,_=await(c.isRTL==null?void 0:c.isRTL(h.floating)),k=p||(S||!v?[Nr(l)]:jh(l)),E=g!=="none";!p&&E&&k.push(...Gh(l,v,g,_));const O=[l,...k],I=await Ea(e,x),z=[];let R=((i=o.flip)==null?void 0:i.overflows)||[];if(f&&z.push(I[C]),d){const bt=Wh(r,a,_);z.push(I[bt[0]],I[bt[1]])}if(R=[...R,{placement:r,overflows:z}],!z.every(bt=>bt<=0)){var j,J;const bt=(((j=o.flip)==null?void 0:j.index)||0)+1,ue=O[bt];if(ue)return{data:{index:bt,overflows:R},reset:{placement:ue}};let Ce=(J=R.filter(Se=>Se.overflows[0]<=0).sort((Se,je)=>Se.overflows[1]-je.overflows[1])[0])==null?void 0:J.placement;if(!Ce)switch(m){case"bestFit":{var Ot;const Se=(Ot=R.filter(je=>{if(E){const Ke=Rs(je.placement);return Ke===y||Ke==="y"}return!0}).map(je=>[je.placement,je.overflows.filter(Ke=>Ke>0).reduce((Ke,td)=>Ke+td,0)]).sort((je,Ke)=>je[1]-Ke[1])[0])==null?void 0:Ot[0];Se&&(Ce=Se);break}case"initialPlacement":Ce=l;break}if(r!==Ce)return{reset:{placement:Ce}}}return{}}}};async function Jh(t,e){const{placement:s,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),a=as(s),l=bi(s),c=Rs(s)==="y",h=["left","top"].includes(a)?-1:1,f=o&&c?-1:1,d=gi(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof g=="number"&&(m=l==="end"?g*-1:g),c?{x:m*f,y:p*h}:{x:p*h,y:m*f}}const tu=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:r,y:o,placement:a,middlewareData:l}=e,c=await Jh(e,t);return a===((s=l.offset)==null?void 0:s.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:r+c.x,y:o+c.y,data:{...c,placement:a}}}}},eu=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:x=>{let{x:C,y}=x;return{x:C,y}}},...c}=gi(t,e),h={x:s,y:i},f=await Ea(e,c),d=Rs(as(r)),p=yc(d);let m=h[p],g=h[d];if(o){const x=p==="y"?"top":"left",C=p==="y"?"bottom":"right",y=m+f[x],S=m-f[C];m=Mo(y,m,S)}if(a){const x=d==="y"?"top":"left",C=d==="y"?"bottom":"right",y=g+f[x],S=g-f[C];g=Mo(y,g,S)}const v=l.fn({...e,[p]:m,[d]:g});return{...v,data:{x:v.x-s,y:v.y-i,enabled:{[p]:o,[d]:a}}}}}},su=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var s,i;const{placement:r,rects:o,platform:a,elements:l}=e,{apply:c=()=>{},...h}=gi(t,e),f=await Ea(e,h),d=as(r),p=bi(r),m=Rs(r)==="y",{width:g,height:v}=o.floating;let x,C;d==="top"||d==="bottom"?(x=d,C=p===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(C=d,x=p==="end"?"top":"bottom");const y=v-f.top-f.bottom,S=g-f.left-f.right,_=os(v-f[x],y),k=os(g-f[C],S),E=!e.middlewareData.shift;let O=_,I=k;if((s=e.middlewareData.shift)!=null&&s.enabled.x&&(I=S),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(O=y),E&&!p){const R=Yt(f.left,0),j=Yt(f.right,0),J=Yt(f.top,0),Ot=Yt(f.bottom,0);m?I=g-2*(R!==0||j!==0?R+j:Yt(f.left,f.right)):O=v-2*(J!==0||Ot!==0?J+Ot:Yt(f.top,f.bottom))}await c({...e,availableWidth:I,availableHeight:O});const z=await a.getDimensions(l.floating);return g!==z.width||v!==z.height?{reset:{rects:!0}}:{}}}};function Kr(){return typeof window<"u"}function vi(t){return wc(t)?(t.nodeName||"").toLowerCase():"#document"}function Zt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ne(t){var e;return(e=(wc(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function wc(t){return Kr()?t instanceof Node||t instanceof Zt(t).Node:!1}function ve(t){return Kr()?t instanceof Element||t instanceof Zt(t).Element:!1}function Ie(t){return Kr()?t instanceof HTMLElement||t instanceof Zt(t).HTMLElement:!1}function An(t){return!Kr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Zt(t).ShadowRoot}function nr(t){const{overflow:e,overflowX:s,overflowY:i,display:r}=ye(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!["inline","contents"].includes(r)}function iu(t){return["table","td","th"].includes(vi(t))}function Gr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Qr(t){const e=za(),s=ve(t)?ye(t):t;return["transform","translate","scale","rotate","perspective"].some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!e&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!e&&(s.filter?s.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function ru(t){let e=ns(t);for(;Ie(e)&&!di(e);){if(Qr(e))return e;if(Gr(e))return null;e=ns(e)}return null}function za(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function di(t){return["html","body","#document"].includes(vi(t))}function ye(t){return Zt(t).getComputedStyle(t)}function Yr(t){return ve(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ns(t){if(vi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||An(t)&&t.host||Ne(t);return An(e)?e.host:e}function xc(t){const e=ns(t);return di(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ie(e)&&nr(e)?e:xc(e)}function ji(t,e,s){var i;e===void 0&&(e=[]),s===void 0&&(s=!0);const r=xc(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),a=Zt(r);if(o){const l=Vo(a);return e.concat(a,a.visualViewport||[],nr(r)?r:[],l&&s?ji(l):[])}return e.concat(r,ji(r,[],s))}function Vo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function kc(t){const e=ye(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ie(t),o=r?t.offsetWidth:s,a=r?t.offsetHeight:i,l=Ir(s)!==o||Ir(i)!==a;return l&&(s=o,i=a),{width:s,height:i,$:l}}function Ta(t){return ve(t)?t:t.contextElement}function Us(t){const e=Ta(t);if(!Ie(e))return Pe(1);const s=e.getBoundingClientRect(),{width:i,height:r,$:o}=kc(e);let a=(o?Ir(s.width):s.width)/i,l=(o?Ir(s.height):s.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const ou=Pe(0);function Cc(t){const e=Zt(t);return!za()||!e.visualViewport?ou:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function au(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==Zt(t)?!1:e}function Ps(t,e,s,i){e===void 0&&(e=!1),s===void 0&&(s=!1);const r=t.getBoundingClientRect(),o=Ta(t);let a=Pe(1);e&&(i?ve(i)&&(a=Us(i)):a=Us(t));const l=au(o,s,i)?Cc(o):Pe(0);let c=(r.left+l.x)/a.x,h=(r.top+l.y)/a.y,f=r.width/a.x,d=r.height/a.y;if(o){const p=Zt(o),m=i&&ve(i)?Zt(i):i;let g=p,v=Vo(g);for(;v&&i&&m!==g;){const x=Us(v),C=v.getBoundingClientRect(),y=ye(v),S=C.left+(v.clientLeft+parseFloat(y.paddingLeft))*x.x,_=C.top+(v.clientTop+parseFloat(y.paddingTop))*x.y;c*=x.x,h*=x.y,f*=x.x,d*=x.y,c+=S,h+=_,g=Zt(v),v=Vo(g)}}return Lr({width:f,height:d,x:c,y:h})}function Ra(t,e){const s=Yr(t).scrollLeft;return e?e.left+s:Ps(Ne(t)).left+s}function Sc(t,e,s){s===void 0&&(s=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(s?0:Ra(t,i)),o=i.top+e.scrollTop;return{x:r,y:o}}function nu(t){let{elements:e,rect:s,offsetParent:i,strategy:r}=t;const o=r==="fixed",a=Ne(i),l=e?Gr(e.floating):!1;if(i===a||l&&o)return s;let c={scrollLeft:0,scrollTop:0},h=Pe(1);const f=Pe(0),d=Ie(i);if((d||!d&&!o)&&((vi(i)!=="body"||nr(a))&&(c=Yr(i)),Ie(i))){const m=Ps(i);h=Us(i),f.x=m.x+i.clientLeft,f.y=m.y+i.clientTop}const p=a&&!d&&!o?Sc(a,c,!0):Pe(0);return{width:s.width*h.x,height:s.height*h.y,x:s.x*h.x-c.scrollLeft*h.x+f.x+p.x,y:s.y*h.y-c.scrollTop*h.y+f.y+p.y}}function lu(t){return Array.from(t.getClientRects())}function cu(t){const e=Ne(t),s=Yr(t),i=t.ownerDocument.body,r=Yt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=Yt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-s.scrollLeft+Ra(t);const l=-s.scrollTop;return ye(i).direction==="rtl"&&(a+=Yt(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:a,y:l}}function du(t,e){const s=Zt(t),i=Ne(t),r=s.visualViewport;let o=i.clientWidth,a=i.clientHeight,l=0,c=0;if(r){o=r.width,a=r.height;const h=za();(!h||h&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}return{width:o,height:a,x:l,y:c}}function hu(t,e){const s=Ps(t,!0,e==="fixed"),i=s.top+t.clientTop,r=s.left+t.clientLeft,o=Ie(t)?Us(t):Pe(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,c=r*o.x,h=i*o.y;return{width:a,height:l,x:c,y:h}}function En(t,e,s){let i;if(e==="viewport")i=du(t,s);else if(e==="document")i=cu(Ne(t));else if(ve(e))i=hu(e,s);else{const r=Cc(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Lr(i)}function $c(t,e){const s=ns(t);return s===e||!ve(s)||di(s)?!1:ye(s).position==="fixed"||$c(s,e)}function uu(t,e){const s=e.get(t);if(s)return s;let i=ji(t,[],!1).filter(l=>ve(l)&&vi(l)!=="body"),r=null;const o=ye(t).position==="fixed";let a=o?ns(t):t;for(;ve(a)&&!di(a);){const l=ye(a),c=Qr(a);!c&&l.position==="fixed"&&(r=null),(o?!c&&!r:!c&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||nr(a)&&!c&&$c(t,a))?i=i.filter(f=>f!==a):r=l,a=ns(a)}return e.set(t,i),i}function pu(t){let{element:e,boundary:s,rootBoundary:i,strategy:r}=t;const a=[...s==="clippingAncestors"?Gr(e)?[]:uu(e,this._c):[].concat(s),i],l=a[0],c=a.reduce((h,f)=>{const d=En(e,f,r);return h.top=Yt(d.top,h.top),h.right=os(d.right,h.right),h.bottom=os(d.bottom,h.bottom),h.left=Yt(d.left,h.left),h},En(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function fu(t){const{width:e,height:s}=kc(t);return{width:e,height:s}}function mu(t,e,s){const i=Ie(e),r=Ne(e),o=s==="fixed",a=Ps(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const c=Pe(0);if(i||!i&&!o)if((vi(e)!=="body"||nr(r))&&(l=Yr(e)),i){const p=Ps(e,!0,o,e);c.x=p.x+e.clientLeft,c.y=p.y+e.clientTop}else r&&(c.x=Ra(r));const h=r&&!i&&!o?Sc(r,l):Pe(0),f=a.left+l.scrollLeft-c.x-h.x,d=a.top+l.scrollTop-c.y-h.y;return{x:f,y:d,width:a.width,height:a.height}}function uo(t){return ye(t).position==="static"}function zn(t,e){if(!Ie(t)||ye(t).position==="fixed")return null;if(e)return e(t);let s=t.offsetParent;return Ne(t)===s&&(s=s.ownerDocument.body),s}function Ac(t,e){const s=Zt(t);if(Gr(t))return s;if(!Ie(t)){let r=ns(t);for(;r&&!di(r);){if(ve(r)&&!uo(r))return r;r=ns(r)}return s}let i=zn(t,e);for(;i&&iu(i)&&uo(i);)i=zn(i,e);return i&&di(i)&&uo(i)&&!Qr(i)?s:i||ru(t)||s}const gu=async function(t){const e=this.getOffsetParent||Ac,s=this.getDimensions,i=await s(t.floating);return{reference:mu(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function bu(t){return ye(t).direction==="rtl"}const Er={convertOffsetParentRelativeRectToViewportRelativeRect:nu,getDocumentElement:Ne,getClippingRect:pu,getOffsetParent:Ac,getElementRects:gu,getClientRects:lu,getDimensions:fu,getScale:Us,isElement:ve,isRTL:bu};function Ec(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function vu(t,e){let s=null,i;const r=Ne(t);function o(){var l;clearTimeout(i),(l=s)==null||l.disconnect(),s=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),o();const h=t.getBoundingClientRect(),{left:f,top:d,width:p,height:m}=h;if(l||e(),!p||!m)return;const g=vr(d),v=vr(r.clientWidth-(f+p)),x=vr(r.clientHeight-(d+m)),C=vr(f),S={rootMargin:-g+"px "+-v+"px "+-x+"px "+-C+"px",threshold:Yt(0,os(1,c))||1};let _=!0;function k(E){const O=E[0].intersectionRatio;if(O!==c){if(!_)return a();O?a(!1,O):i=setTimeout(()=>{a(!1,1e-7)},1e3)}O===1&&!Ec(h,t.getBoundingClientRect())&&a(),_=!1}try{s=new IntersectionObserver(k,{...S,root:r.ownerDocument})}catch{s=new IntersectionObserver(k,S)}s.observe(t)}return a(!0),o}function yu(t,e,s,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,h=Ta(t),f=r||o?[...h?ji(h):[],...ji(e)]:[];f.forEach(C=>{r&&C.addEventListener("scroll",s,{passive:!0}),o&&C.addEventListener("resize",s)});const d=h&&l?vu(h,s):null;let p=-1,m=null;a&&(m=new ResizeObserver(C=>{let[y]=C;y&&y.target===h&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var S;(S=m)==null||S.observe(e)})),s()}),h&&!c&&m.observe(h),m.observe(e));let g,v=c?Ps(t):null;c&&x();function x(){const C=Ps(t);v&&!Ec(v,C)&&s(),v=C,g=requestAnimationFrame(x)}return s(),()=>{var C;f.forEach(y=>{r&&y.removeEventListener("scroll",s),o&&y.removeEventListener("resize",s)}),d==null||d(),(C=m)==null||C.disconnect(),m=null,c&&cancelAnimationFrame(g)}}const _u=tu,wu=eu,xu=Zh,Tn=su,ku=Xh,Cu=(t,e,s)=>{const i=new Map,r={platform:Er,...s},o={...r.platform,_c:i};return Yh(t,e,{...r,platform:o})};function Su(t){return $u(t)}function po(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function $u(t){for(let e=t;e;e=po(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=po(t);e;e=po(e)){if(!(e instanceof Element))continue;const s=getComputedStyle(e);if(s.display!=="contents"&&(s.position!=="static"||Qr(s)||e.tagName==="BODY"))return e}return null}function Au(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var tt=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,o=0,a=0,l=0,c=0,h=0,f=0;s?t.top<e.top?(i=t.left,r=t.bottom,o=t.right,a=t.bottom,l=e.left,c=e.top,h=e.right,f=e.top):(i=e.left,r=e.bottom,o=e.right,a=e.bottom,l=t.left,c=t.top,h=t.right,f=t.top):t.left<e.left?(i=t.right,r=t.top,o=e.left,a=e.top,l=t.right,c=t.bottom,h=e.left,f=e.bottom):(i=e.right,r=e.top,o=t.left,a=t.top,l=e.right,c=e.bottom,h=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Au(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=yu(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[_u({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Tn({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=r?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(xu({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(wu({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Tn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ku({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>Er.getOffsetParent(s,Su):Er.getOffsetParent;Cu(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:er(Be({},Er),{getOffsetParent:e})}).then(({x:s,y:i,middlewareData:r,placement:o})=>{const a=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const c=r.arrow.x,h=r.arrow.y;let f="",d="",p="",m="";if(this.arrowPlacement==="start"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=a?g:"",m=a?"":g}else if(this.arrowPlacement==="end"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=a?"":g,m=a?g:"",p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof c=="number"?`${c}px`:"",f=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:f,right:d,bottom:p,left:m,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return $`
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
    `}};tt.styles=[B,Bh];n([T(".popup")],tt.prototype,"popup",2);n([T(".popup__arrow")],tt.prototype,"arrowEl",2);n([u()],tt.prototype,"anchor",2);n([u({type:Boolean,reflect:!0})],tt.prototype,"active",2);n([u({reflect:!0})],tt.prototype,"placement",2);n([u({reflect:!0})],tt.prototype,"strategy",2);n([u({type:Number})],tt.prototype,"distance",2);n([u({type:Number})],tt.prototype,"skidding",2);n([u({type:Boolean})],tt.prototype,"arrow",2);n([u({attribute:"arrow-placement"})],tt.prototype,"arrowPlacement",2);n([u({attribute:"arrow-padding",type:Number})],tt.prototype,"arrowPadding",2);n([u({type:Boolean})],tt.prototype,"flip",2);n([u({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],tt.prototype,"flipFallbackPlacements",2);n([u({attribute:"flip-fallback-strategy"})],tt.prototype,"flipFallbackStrategy",2);n([u({type:Object})],tt.prototype,"flipBoundary",2);n([u({attribute:"flip-padding",type:Number})],tt.prototype,"flipPadding",2);n([u({type:Boolean})],tt.prototype,"shift",2);n([u({type:Object})],tt.prototype,"shiftBoundary",2);n([u({attribute:"shift-padding",type:Number})],tt.prototype,"shiftPadding",2);n([u({attribute:"auto-size"})],tt.prototype,"autoSize",2);n([u()],tt.prototype,"sync",2);n([u({type:Object})],tt.prototype,"autoSizeBoundary",2);n([u({attribute:"auto-size-padding",type:Number})],tt.prototype,"autoSizePadding",2);n([u({attribute:"hover-bridge",type:Boolean})],tt.prototype,"hoverBridge",2);var zc=new Map,Eu=new WeakMap;function zu(t){return t??{keyframes:[],options:{duration:0}}}function Rn(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function it(t,e){zc.set(t,zu(e))}function nt(t,e,s){const i=Eu.get(t);if(i!=null&&i[e])return Rn(i[e],s.dir);const r=zc.get(e);return r?Rn(r,s.dir):{keyframes:[],options:{duration:0}}}function Mt(t,e){return new Promise(s=>{function i(r){r.target===t&&(t.removeEventListener(e,i),s())}t.addEventListener(e,i)})}function mt(t,e,s){return new Promise(i=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,er(Be({},s),{duration:Ho()?0:s.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Pn(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Ho(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function yt(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{e.cancel(),requestAnimationFrame(s)})))}function Dr(t,e){return t.map(s=>er(Be({},s),{height:s.height==="auto"?`${e}px`:s.height}))}var xt=class extends L{constructor(){super(),this.localize=new Z(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Pn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Pn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await yt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:i}=nt(this,"tooltip.show",{dir:this.localize.dir()});await mt(this.popup.popup,s,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await yt(this.body);const{keyframes:s,options:i}=nt(this,"tooltip.hide",{dir:this.localize.dir()});await mt(this.popup.popup,s,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Mt(this,"sl-after-hide")}render(){return $`
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
    `}};xt.styles=[B,Hh];xt.dependencies={"sl-popup":tt};n([T("slot:not([name])")],xt.prototype,"defaultSlot",2);n([T(".tooltip__body")],xt.prototype,"body",2);n([T("sl-popup")],xt.prototype,"popup",2);n([u()],xt.prototype,"content",2);n([u()],xt.prototype,"placement",2);n([u({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);n([u({type:Number})],xt.prototype,"distance",2);n([u({type:Boolean,reflect:!0})],xt.prototype,"open",2);n([u({type:Number})],xt.prototype,"skidding",2);n([u()],xt.prototype,"trigger",2);n([u({type:Boolean})],xt.prototype,"hoist",2);n([A("open",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpenChange",1);n([A(["content","distance","hoist","placement","skidding"])],xt.prototype,"handleOptionsChange",1);n([A("disabled")],xt.prototype,"handleDisabledChange",1);it("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});it("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Tu="sl-tooltip";xt.define("sl-tooltip");var Ru=M({tagName:Tu,elementClass:xt,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"}),Re=Ru,Pu=F`
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
`,X=class extends L{constructor(){super(...arguments),this.formControlController=new Ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ft(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
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
              name=${N(this.name)}
              .value=${Ts(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              rows=${N(this.rows)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              autocapitalize=${N(this.autocapitalize)}
              autocorrect=${N(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${N(this.spellcheck)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};X.styles=[B,Ls,Pu];n([T(".textarea__control")],X.prototype,"input",2);n([T(".textarea__size-adjuster")],X.prototype,"sizeAdjuster",2);n([V()],X.prototype,"hasFocus",2);n([u()],X.prototype,"title",2);n([u()],X.prototype,"name",2);n([u()],X.prototype,"value",2);n([u({reflect:!0})],X.prototype,"size",2);n([u({type:Boolean,reflect:!0})],X.prototype,"filled",2);n([u()],X.prototype,"label",2);n([u({attribute:"help-text"})],X.prototype,"helpText",2);n([u()],X.prototype,"placeholder",2);n([u({type:Number})],X.prototype,"rows",2);n([u()],X.prototype,"resize",2);n([u({type:Boolean,reflect:!0})],X.prototype,"disabled",2);n([u({type:Boolean,reflect:!0})],X.prototype,"readonly",2);n([u({reflect:!0})],X.prototype,"form",2);n([u({type:Boolean,reflect:!0})],X.prototype,"required",2);n([u({type:Number})],X.prototype,"minlength",2);n([u({type:Number})],X.prototype,"maxlength",2);n([u()],X.prototype,"autocapitalize",2);n([u()],X.prototype,"autocorrect",2);n([u()],X.prototype,"autocomplete",2);n([u({type:Boolean})],X.prototype,"autofocus",2);n([u()],X.prototype,"enterkeyhint",2);n([u({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],X.prototype,"spellcheck",2);n([u()],X.prototype,"inputmode",2);n([pi()],X.prototype,"defaultValue",2);n([A("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);n([A("rows",{waitUntilFirstUpdate:!0})],X.prototype,"handleRowsChange",1);n([A("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);var Ou="sl-textarea";X.define("sl-textarea");M({tagName:Ou,elementClass:X,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var Iu=F`
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
`,Nu=F`
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
`,Lu=F`
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
`,wt=class extends L{constructor(){super(...arguments),this.formControlController=new Ue(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Ft(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return $`
      <div
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
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
            value=${N(this.value)}
            .indeterminate=${Ts(this.indeterminate)}
            .checked=${Ts(this.checked)}
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
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};wt.styles=[B,Ls,Lu];wt.dependencies={"sl-icon":rt};n([T('input[type="checkbox"]')],wt.prototype,"input",2);n([V()],wt.prototype,"hasFocus",2);n([u()],wt.prototype,"title",2);n([u()],wt.prototype,"name",2);n([u()],wt.prototype,"value",2);n([u({reflect:!0})],wt.prototype,"size",2);n([u({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);n([u({type:Boolean,reflect:!0})],wt.prototype,"checked",2);n([u({type:Boolean,reflect:!0})],wt.prototype,"indeterminate",2);n([pi("checked")],wt.prototype,"defaultChecked",2);n([u({reflect:!0})],wt.prototype,"form",2);n([u({type:Boolean,reflect:!0})],wt.prototype,"required",2);n([u({attribute:"help-text"})],wt.prototype,"helpText",2);n([A("disabled",{waitUntilFirstUpdate:!0})],wt.prototype,"handleDisabledChange",1);n([A(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],wt.prototype,"handleStateChange",1);var Du=F`
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
`,yi=class extends L{constructor(){super(...arguments),this.localize=new Z(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};yi.styles=[B,Du];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function On(t,e,s){return t?e(t):s==null?void 0:s(t)}var gt=class Bo extends L{constructor(){super(...arguments),this.localize=new Z(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await yt(this.childrenContainer);const{keyframes:e,options:s}=nt(this,"tree-item.collapse",{dir:this.localize.dir()});await mt(this.childrenContainer,Dr(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&Bo.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await yt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:s}=nt(this,"tree-item.expand",{dir:this.localize.dir()});await mt(this.childrenContainer,Dr(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>Bo.isTreeItem(s)&&(e||!s.disabled)):[]}render(){const e=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return $`
      <div
        part="base"
        class="${H({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${H({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${On(this.loading,()=>$` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${On(this.selectable,()=>$`
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
                ?checked="${Ts(this.selected)}"
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
    `}};gt.styles=[B,Nu];gt.dependencies={"sl-checkbox":wt,"sl-icon":rt,"sl-spinner":yi};n([V()],gt.prototype,"indeterminate",2);n([V()],gt.prototype,"isLeaf",2);n([V()],gt.prototype,"loading",2);n([V()],gt.prototype,"selectable",2);n([u({type:Boolean,reflect:!0})],gt.prototype,"expanded",2);n([u({type:Boolean,reflect:!0})],gt.prototype,"selected",2);n([u({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);n([u({type:Boolean,reflect:!0})],gt.prototype,"lazy",2);n([T("slot:not([name])")],gt.prototype,"defaultSlot",2);n([T("slot[name=children]")],gt.prototype,"childrenSlot",2);n([T(".tree-item__item")],gt.prototype,"itemElement",2);n([T(".tree-item__children")],gt.prototype,"childrenContainer",2);n([T(".tree-item__expand-button slot")],gt.prototype,"expandButtonSlot",2);n([A("loading",{waitUntilFirstUpdate:!0})],gt.prototype,"handleLoadingChange",1);n([A("disabled")],gt.prototype,"handleDisabledChange",1);n([A("selected")],gt.prototype,"handleSelectedChange",1);n([A("expanded",{waitUntilFirstUpdate:!0})],gt.prototype,"handleExpandedChange",1);n([A("expanded",{waitUntilFirstUpdate:!0})],gt.prototype,"handleExpandAnimation",1);n([A("lazy",{waitUntilFirstUpdate:!0})],gt.prototype,"handleLazyChange",1);var qs=gt;it("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});it("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function vt(t,e,s){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>s?i(s):i(t)}function In(t,e=!1){function s(o){const a=o.getChildrenItems({includeDisabled:!1});if(a.length){const l=a.every(h=>h.selected),c=a.every(h=>!h.selected&&!h.indeterminate);o.selected=l,o.indeterminate=!l&&!c}}function i(o){const a=o.parentElement;qs.isTreeItem(a)&&(s(a),i(a))}function r(o){for(const a of o.getChildrenItems())a.selected=e?o.selected||a.selected:!a.disabled&&o.selected,r(a);e&&s(o)}r(t),i(t)}var ds=class extends L{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Z(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const s=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(s===null?t.append(i):s.hasAttribute("data-default")&&s.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const s=[...e.addedNodes].filter(qs.isTreeItem),i=[...e.removedNodes].filter(qs.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),qs.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const s=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),In(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const s=this.selectedItems;(e.length!==s.length||s.some(i=>!e.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t==null||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>{var o;return["input","textarea"].includes((o=r==null?void 0:r.tagName)==null?void 0:o.toLowerCase())}))return;const e=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(c=>c.matches(":focus")),o=e[r],a=c=>{const h=e[vt(c,0,e.length-1)];this.focusItem(h)},l=c=>{o.expanded=c};t.key==="ArrowDown"?a(r+1):t.key==="ArrowUp"?a(r-1):s&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?a(r+1):l(!0):s&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?a(r-1):l(!1):t.key==="Home"?a(0):t.key==="End"?a(e.length-1):(t.key==="Enter"||t.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(t){const e=t.target,s=e.closest("sl-tree-item"),i=t.composedPath().some(r=>{var o;return(o=r==null?void 0:r.classList)==null?void 0:o.contains("tree-item__expand-button")});!s||s.disabled||e!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const s of e)s.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>In(s,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=s=>s.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(s=>{var i;if(s.disabled)return!1;const r=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||e.has(r))&&e.add(s),!e.has(s)})}render(){return $`
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
    `}};ds.styles=[B,Iu];n([T("slot:not([name])")],ds.prototype,"defaultSlot",2);n([T("slot[name=expand-icon]")],ds.prototype,"expandedIconSlot",2);n([T("slot[name=collapse-icon]")],ds.prototype,"collapsedIconSlot",2);n([u()],ds.prototype,"selection",2);n([A("selection")],ds.prototype,"handleSelectionChange",1);var Mu="sl-tree";ds.define("sl-tree");M({tagName:Mu,elementClass:ds,react:D,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var Fu="sl-tree-item";qs.define("sl-tree-item");M({tagName:Fu,elementClass:qs,react:D,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Vu=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],hs=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=e.getTime()-t.getTime(),{unit:i,value:r}=Vu.find(o=>Math.abs(s)<o.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/r),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;i==="minute"?o=yr("second"):i==="hour"?o=yr("minute"):i==="day"?o=yr("hour"):o=yr("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return $` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};n([V()],hs.prototype,"isoTime",2);n([V()],hs.prototype,"relativeTime",2);n([u()],hs.prototype,"date",2);n([u()],hs.prototype,"format",2);n([u()],hs.prototype,"numeric",2);n([u({type:Boolean})],hs.prototype,"sync",2);function yr(t){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return s-Date.now()%s}var Hu="sl-relative-time";hs.define("sl-relative-time");M({tagName:Hu,elementClass:hs,react:D,events:{},displayName:"SlRelativeTime"});var Bu=F`
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
`,lt=class extends L{constructor(){super(...arguments),this.formControlController=new Ue(this),this.hasSlotController=new Ft(this,"help-text","label"),this.localize=new Z(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,s=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",o=e*t;if(r){const a=`${e-o}px + ${t} * ${i}`;this.output.style.translate=`calc((${a} - ${s/2}px - ${i} / 2))`}else{const a=`${o}px - ${t} * ${i}`;this.output.style.translate=`calc(${a} - ${s/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
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
              name=${N(this.name)}
              ?disabled=${this.disabled}
              min=${N(this.min)}
              max=${N(this.max)}
              step=${N(this.step)}
              .value=${Ts(this.value.toString())}
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};lt.styles=[B,Ls,Bu];n([T(".range__control")],lt.prototype,"input",2);n([T(".range__tooltip")],lt.prototype,"output",2);n([V()],lt.prototype,"hasFocus",2);n([V()],lt.prototype,"hasTooltip",2);n([u()],lt.prototype,"title",2);n([u()],lt.prototype,"name",2);n([u({type:Number})],lt.prototype,"value",2);n([u()],lt.prototype,"label",2);n([u({attribute:"help-text"})],lt.prototype,"helpText",2);n([u({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);n([u({type:Number})],lt.prototype,"min",2);n([u({type:Number})],lt.prototype,"max",2);n([u({type:Number})],lt.prototype,"step",2);n([u()],lt.prototype,"tooltip",2);n([u({attribute:!1})],lt.prototype,"tooltipFormatter",2);n([u({reflect:!0})],lt.prototype,"form",2);n([pi()],lt.prototype,"defaultValue",2);n([sr({passive:!0})],lt.prototype,"handleThumbDragStart",1);n([A("value",{waitUntilFirstUpdate:!0})],lt.prototype,"handleValueChange",1);n([A("disabled",{waitUntilFirstUpdate:!0})],lt.prototype,"handleDisabledChange",1);n([A("hasTooltip",{waitUntilFirstUpdate:!0})],lt.prototype,"syncRange",1);var Uu="sl-range";lt.define("sl-range");M({tagName:Uu,elementClass:lt,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var qu="sl-resize-observer";fi.define("sl-resize-observer");M({tagName:qu,elementClass:fi,react:D,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var Wu=F`
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
 */let Uo=class extends ar{constructor(e){if(super(e),this.it=at,e.type!==Te.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===at||e==null)return this._t=void 0,this.it=e;if(e===Xt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Uo.directiveName="unsafeHTML",Uo.resultType=1;const zr=or(Uo);var K=class extends L{constructor(){super(...arguments),this.formControlController=new Ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ft(this,"help-text","label"),this.localize=new Z(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>$`
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
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,s=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(s||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),o=r.indexOf(this.currentOption);let a=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(a=o+1,a>r.length-1&&(a=0)):t.key==="ArrowUp"?(a=o-1,a<0&&(a=r.length-1)):t.key==="Home"?a=0:t.key==="End"&&(a=r.length-1),this.setCurrentOption(r[a])}if(t.key&&t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const o of r)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const s=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const s=t.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(e)?e:[e],i=[];t.forEach(r=>i.push(r.value)),this.setSelectedOptions(t.filter(r=>s.includes(r.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),s=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,s;const i=this.getAllOptions();this.selectedOptions=i.filter(o=>o.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(t=o==null?void 0:o.value)!=null?t:"",this.displayLabel=(s=(e=o==null?void 0:o.getTextLabel)==null?void 0:e.call(o))!=null?s:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(t,e);return $`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof s=="string"?zr(s):s}
        </div>`}else if(e===this.maxOptionsVisible)return $`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return $``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await yt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=nt(this,"select.show",{dir:this.localize.dir()});await mt(this.popup.popup,t,e),this.currentOption&&No(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await yt(this);const{keyframes:t,options:e}=nt(this,"select.hide",{dir:this.localize.dir()});await mt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Mt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
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

              ${r?$`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};K.styles=[B,Ls,Wu];K.dependencies={"sl-icon":rt,"sl-popup":tt,"sl-tag":qe};n([T(".select")],K.prototype,"popup",2);n([T(".select__combobox")],K.prototype,"combobox",2);n([T(".select__display-input")],K.prototype,"displayInput",2);n([T(".select__value-input")],K.prototype,"valueInput",2);n([T(".select__listbox")],K.prototype,"listbox",2);n([V()],K.prototype,"hasFocus",2);n([V()],K.prototype,"displayLabel",2);n([V()],K.prototype,"currentOption",2);n([V()],K.prototype,"selectedOptions",2);n([V()],K.prototype,"valueHasChanged",2);n([u()],K.prototype,"name",2);n([V()],K.prototype,"value",1);n([u({attribute:"value"})],K.prototype,"defaultValue",2);n([u({reflect:!0})],K.prototype,"size",2);n([u()],K.prototype,"placeholder",2);n([u({type:Boolean,reflect:!0})],K.prototype,"multiple",2);n([u({attribute:"max-options-visible",type:Number})],K.prototype,"maxOptionsVisible",2);n([u({type:Boolean,reflect:!0})],K.prototype,"disabled",2);n([u({type:Boolean})],K.prototype,"clearable",2);n([u({type:Boolean,reflect:!0})],K.prototype,"open",2);n([u({type:Boolean})],K.prototype,"hoist",2);n([u({type:Boolean,reflect:!0})],K.prototype,"filled",2);n([u({type:Boolean,reflect:!0})],K.prototype,"pill",2);n([u()],K.prototype,"label",2);n([u({reflect:!0})],K.prototype,"placement",2);n([u({attribute:"help-text"})],K.prototype,"helpText",2);n([u({reflect:!0})],K.prototype,"form",2);n([u({type:Boolean,reflect:!0})],K.prototype,"required",2);n([u()],K.prototype,"getTag",2);n([A("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1);n([A(["defaultValue","value"],{waitUntilFirstUpdate:!0})],K.prototype,"handleValueChange",1);n([A("open",{waitUntilFirstUpdate:!0})],K.prototype,"handleOpenChange",1);it("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});it("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var ju="sl-select";K.define("sl-select");M({tagName:ju,elementClass:K,react:D,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var Ku=F`
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
`,Xr=class extends L{constructor(){super(...arguments),this.effect="none"}render(){return $`
      <div
        part="base"
        class=${H({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Xr.styles=[B,Ku];n([u()],Xr.prototype,"effect",2);var Gu="sl-skeleton";Xr.define("sl-skeleton");M({tagName:Gu,elementClass:Xr,react:D,events:{},displayName:"SlSkeleton"});var Qu="sl-spinner";yi.define("sl-spinner");M({tagName:Qu,elementClass:yi,react:D,events:{},displayName:"SlSpinner"});var Yu=F`
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
`;function Hi(t,e){function s(r){const o=t.getBoundingClientRect(),a=t.ownerDocument.defaultView,l=o.left+a.scrollX,c=o.top+a.scrollY,h=r.pageX-l,f=r.pageY-c;e!=null&&e.onMove&&e.onMove(h,f)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),e!=null&&e.onStop&&e.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),(e==null?void 0:e.initialEvent)instanceof PointerEvent&&s(e.initialEvent)}var Nn=()=>null,qt=class extends L{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Z(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Nn,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:s,size:i,snapThreshold:r,isRtl:o,vertical:a})=>{let l=s,c=Number.POSITIVE_INFINITY;return e.forEach(h=>{let f;if(h.startsWith("repeat(")){const p=t.substring(7,t.length-1),m=p.endsWith("%"),g=Number.parseFloat(p),v=m?i*(g/100):g;f=Math.round((o&&!a?i-s:s)/v)*v}else h.endsWith("%")?f=i*(Number.parseFloat(h)/100):f=Number.parseFloat(h);o&&!a&&(f=i-f);const d=Math.abs(s-f);d<=r&&d<c&&(l=f,c=d)}),l}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=Nn}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Hi(this,{onMove:(s,i)=>{var r;let o=this.vertical?i:s;this.primary==="end"&&(o=this.size-o),o=(r=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?r:o,this.position=vt(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const s=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=s),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=s),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=vt(e,0,100)}}handleResize(t){const{width:e,height:s}=t[0].contentRect;this.size=this.vertical?s:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?s&&!this.vertical?this.style[t]=`${i} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${i}`:s&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${r}`,this.style[e]="",$`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${N(this.disabled?void 0:"0")}
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
    `}};qt.styles=[B,Yu];n([T(".divider")],qt.prototype,"divider",2);n([u({type:Number,reflect:!0})],qt.prototype,"position",2);n([u({attribute:"position-in-pixels",type:Number})],qt.prototype,"positionInPixels",2);n([u({type:Boolean,reflect:!0})],qt.prototype,"vertical",2);n([u({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);n([u()],qt.prototype,"primary",2);n([u({reflect:!0})],qt.prototype,"snap",1);n([u({type:Number,attribute:"snap-threshold"})],qt.prototype,"snapThreshold",2);n([A("position")],qt.prototype,"handlePositionChange",1);n([A("positionInPixels")],qt.prototype,"handlePositionInPixelsChange",1);n([A("vertical")],qt.prototype,"handleVerticalChange",1);var Xu="sl-split-panel";qt.define("sl-split-panel");M({tagName:Xu,elementClass:qt,react:D,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var Zu=F`
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
`,Ju=0,oe=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.attrId=++Ju,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
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
    `}};oe.styles=[B,Zu];oe.dependencies={"sl-icon-button":_t};n([T(".tab")],oe.prototype,"tab",2);n([u({reflect:!0})],oe.prototype,"panel",2);n([u({type:Boolean,reflect:!0})],oe.prototype,"active",2);n([u({type:Boolean,reflect:!0})],oe.prototype,"closable",2);n([u({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);n([u({type:Number,reflect:!0})],oe.prototype,"tabIndex",2);n([A("active")],oe.prototype,"handleActiveChange",1);n([A("disabled")],oe.prototype,"handleDisabledChange",1);var tp="sl-tab";oe.define("sl-tab");M({tagName:tp,elementClass:oe,react:D,events:{onSlClose:"sl-close"},displayName:"SlTab"});var ep=F`
  :host {
    display: contents;
  }
`,_e=class extends L{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return $` <slot></slot> `}};_e.styles=[B,ep];n([u({reflect:!0})],_e.prototype,"attr",2);n([u({attribute:"attr-old-value",type:Boolean,reflect:!0})],_e.prototype,"attrOldValue",2);n([u({attribute:"char-data",type:Boolean,reflect:!0})],_e.prototype,"charData",2);n([u({attribute:"char-data-old-value",type:Boolean,reflect:!0})],_e.prototype,"charDataOldValue",2);n([u({attribute:"child-list",type:Boolean,reflect:!0})],_e.prototype,"childList",2);n([u({type:Boolean,reflect:!0})],_e.prototype,"disabled",2);n([A("disabled")],_e.prototype,"handleDisabledChange",1);n([A("attr",{waitUntilFirstUpdate:!0}),A("attr-old-value",{waitUntilFirstUpdate:!0}),A("char-data",{waitUntilFirstUpdate:!0}),A("char-data-old-value",{waitUntilFirstUpdate:!0}),A("childList",{waitUntilFirstUpdate:!0})],_e.prototype,"handleChange",1);var sp="sl-mutation-observer";_e.define("sl-mutation-observer");M({tagName:sp,elementClass:_e,react:D,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var ip="sl-popup";tt.define("sl-popup");M({tagName:ip,elementClass:tt,react:D,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var rp=F`
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
`,Ds=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*e,i=s-this.value/100*s;this.indicatorOffset=`${i}px`}}render(){return $`
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
    `}};Ds.styles=[B,rp];n([T(".progress-ring__indicator")],Ds.prototype,"indicator",2);n([V()],Ds.prototype,"indicatorOffset",2);n([u({type:Number,reflect:!0})],Ds.prototype,"value",2);n([u()],Ds.prototype,"label",2);var op="sl-progress-ring";Ds.define("sl-progress-ring");M({tagName:op,elementClass:Ds,react:D,events:{},displayName:"SlProgressRing"});var ap=F`
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
`,we=class extends L{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return $`
      <span
        part="base"
        class=${H({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?$` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};we.styles=[B,ap];we.dependencies={"sl-icon":rt};n([V()],we.prototype,"checked",2);n([V()],we.prototype,"hasFocus",2);n([u()],we.prototype,"value",2);n([u({reflect:!0})],we.prototype,"size",2);n([u({type:Boolean,reflect:!0})],we.prototype,"disabled",2);n([A("checked")],we.prototype,"handleCheckedChange",1);n([A("disabled",{waitUntilFirstUpdate:!0})],we.prototype,"handleDisabledChange",1);var np="sl-radio";we.define("sl-radio");M({tagName:np,elementClass:we,react:D,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var lp=F`
  :host {
    display: inline-block;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tc="important",cp=" !"+Tc,Ht=or(class extends ar{constructor(t){var e;if(super(t),t.type!==Te.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const o=typeof r=="string"&&r.endsWith(cp);i.includes("-")||o?s.setProperty(i,o?r.slice(0,-11):r,o?Tc:""):s[i]=r}}return Xt}});let Rc=null;class Pc{}Pc.render=function(t,e){Rc(t,e)};self.QrCreator=Pc;(function(t){function e(l,c,h,f){var d={},p=t(h,c);p.u(l),p.J(),f=f||0;var m=p.h(),g=p.h()+2*f;return d.text=l,d.level=c,d.version=h,d.O=g,d.a=function(v,x){return v-=f,x-=f,0>v||v>=m||0>x||x>=m?!1:p.a(v,x)},d}function s(l,c,h,f,d,p,m,g,v,x){function C(y,S,_,k,E,O,I){y?(l.lineTo(S+O,_+I),l.arcTo(S,_,k,E,p)):l.lineTo(S,_)}m?l.moveTo(c+p,h):l.moveTo(c,h),C(g,f,h,f,d,-p,0),C(v,f,d,c,d,0,-p),C(x,c,d,c,h,p,0),C(m,c,h,f,h,0,p)}function i(l,c,h,f,d,p,m,g,v,x){function C(y,S,_,k){l.moveTo(y+_,S),l.lineTo(y,S),l.lineTo(y,S+k),l.arcTo(y,S,y+_,S,p)}m&&C(c,h,p,p),g&&C(f,h,-p,p),v&&C(f,d,-p,-p),x&&C(c,d,p,-p)}function r(l,c){var h=c.fill;if(typeof h=="string")l.fillStyle=h;else{var f=h.type,d=h.colorStops;if(h=h.position.map(m=>Math.round(m*c.size)),f==="linear-gradient")var p=l.createLinearGradient.apply(l,h);else if(f==="radial-gradient")p=l.createRadialGradient.apply(l,h);else throw Error("Unsupported fill");d.forEach(([m,g])=>{p.addColorStop(m,g)}),l.fillStyle=p}}function o(l,c){t:{var h=c.text,f=c.v,d=c.N,p=c.K,m=c.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var g=e(h,f,d,m);break t}catch{}g=void 0}if(!g)return null;for(h=l.getContext("2d"),c.background&&(h.fillStyle=c.background,h.fillRect(c.left,c.top,c.size,c.size)),f=g.O,p=c.size/f,h.beginPath(),m=0;m<f;m+=1)for(d=0;d<f;d+=1){var v=h,x=c.left+d*p,C=c.top+m*p,y=m,S=d,_=g.a,k=x+p,E=C+p,O=y-1,I=y+1,z=S-1,R=S+1,j=Math.floor(Math.min(.5,Math.max(0,c.R))*p),J=_(y,S),Ot=_(O,z),bt=_(O,S);O=_(O,R);var ue=_(y,R);R=_(I,R),S=_(I,S),I=_(I,z),y=_(y,z),x=Math.round(x),C=Math.round(C),k=Math.round(k),E=Math.round(E),J?s(v,x,C,k,E,j,!bt&&!y,!bt&&!ue,!S&&!ue,!S&&!y):i(v,x,C,k,E,j,bt&&y&&Ot,bt&&ue&&O,S&&ue&&R,S&&y&&I)}return r(h,c),h.fill(),l}var a={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Rc=function(l,c){var h={};Object.assign(h,a,l),h.N=h.minVersion,h.K=h.maxVersion,h.v=h.ecLevel,h.left=h.left,h.top=h.top,h.size=h.size,h.fill=h.fill,h.background=h.background,h.text=h.text,h.R=h.radius,h.P=h.quiet,c instanceof HTMLCanvasElement?((c.width!==h.size||c.height!==h.size)&&(c.width=h.size,c.height=h.size),c.getContext("2d").clearRect(0,0,c.width,c.height),o(c,h)):(l=document.createElement("canvas"),l.width=h.size,l.height=h.size,h=o(l,h),c.appendChild(h))}})(function(){function t(c){var h=s.s(c);return{S:function(){return 4},b:function(){return h.length},write:function(f){for(var d=0;d<h.length;d+=1)f.put(h[d],8)}}}function e(){var c=[],h=0,f={B:function(){return c},c:function(d){return(c[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var m=0;m<p;m+=1)f.m((d>>>p-m-1&1)==1)},f:function(){return h},m:function(d){var p=Math.floor(h/8);c.length<=p&&c.push(0),d&&(c[p]|=128>>>h%8),h+=1}};return f}function s(c,h){function f(y,S){for(var _=-1;7>=_;_+=1)if(!(-1>=y+_||g<=y+_))for(var k=-1;7>=k;k+=1)-1>=S+k||g<=S+k||(m[y+_][S+k]=0<=_&&6>=_&&(k==0||k==6)||0<=k&&6>=k&&(_==0||_==6)||2<=_&&4>=_&&2<=k&&4>=k)}function d(y,S){for(var _=g=4*c+17,k=Array(_),E=0;E<_;E+=1){k[E]=Array(_);for(var O=0;O<_;O+=1)k[E][O]=null}for(m=k,f(0,0),f(g-7,0),f(0,g-7),_=o.G(c),k=0;k<_.length;k+=1)for(E=0;E<_.length;E+=1){O=_[k];var I=_[E];if(m[O][I]==null)for(var z=-2;2>=z;z+=1)for(var R=-2;2>=R;R+=1)m[O+z][I+R]=z==-2||z==2||R==-2||R==2||z==0&&R==0}for(_=8;_<g-8;_+=1)m[_][6]==null&&(m[_][6]=_%2==0);for(_=8;_<g-8;_+=1)m[6][_]==null&&(m[6][_]=_%2==0);for(_=o.w(p<<3|S),k=0;15>k;k+=1)E=!y&&(_>>k&1)==1,m[6>k?k:8>k?k+1:g-15+k][8]=E,m[8][8>k?g-k-1:9>k?15-k:14-k]=E;if(m[g-8][8]=!y,7<=c){for(_=o.A(c),k=0;18>k;k+=1)E=!y&&(_>>k&1)==1,m[Math.floor(k/3)][k%3+g-8-3]=E;for(k=0;18>k;k+=1)E=!y&&(_>>k&1)==1,m[k%3+g-8-3][Math.floor(k/3)]=E}if(v==null){for(y=l.I(c,p),_=e(),k=0;k<x.length;k+=1)E=x[k],_.put(4,4),_.put(E.b(),o.f(4,c)),E.write(_);for(k=E=0;k<y.length;k+=1)E+=y[k].j;if(_.f()>8*E)throw Error("code length overflow. ("+_.f()+">"+8*E+")");for(_.f()+4<=8*E&&_.put(0,4);_.f()%8!=0;)_.m(!1);for(;!(_.f()>=8*E)&&(_.put(236,8),!(_.f()>=8*E));)_.put(17,8);var j=0;for(E=k=0,O=Array(y.length),I=Array(y.length),z=0;z<y.length;z+=1){var J=y[z].j,Ot=y[z].o-J;for(k=Math.max(k,J),E=Math.max(E,Ot),O[z]=Array(J),R=0;R<O[z].length;R+=1)O[z][R]=255&_.B()[R+j];for(j+=J,R=o.C(Ot),J=i(O[z],R.b()-1).l(R),I[z]=Array(R.b()-1),R=0;R<I[z].length;R+=1)Ot=R+J.b()-I[z].length,I[z][R]=0<=Ot?J.c(Ot):0}for(R=_=0;R<y.length;R+=1)_+=y[R].o;for(_=Array(_),R=j=0;R<k;R+=1)for(z=0;z<y.length;z+=1)R<O[z].length&&(_[j]=O[z][R],j+=1);for(R=0;R<E;R+=1)for(z=0;z<y.length;z+=1)R<I[z].length&&(_[j]=I[z][R],j+=1);v=_}for(y=v,_=-1,k=g-1,E=7,O=0,S=o.F(S),I=g-1;0<I;I-=2)for(I==6&&--I;;){for(z=0;2>z;z+=1)m[k][I-z]==null&&(R=!1,O<y.length&&(R=(y[O]>>>E&1)==1),S(k,I-z)&&(R=!R),m[k][I-z]=R,--E,E==-1&&(O+=1,E=7));if(k+=_,0>k||g<=k){k-=_,_=-_;break}}}var p=r[h],m=null,g=0,v=null,x=[],C={u:function(y){y=t(y),x.push(y),v=null},a:function(y,S){if(0>y||g<=y||0>S||g<=S)throw Error(y+","+S);return m[y][S]},h:function(){return g},J:function(){for(var y=0,S=0,_=0;8>_;_+=1){d(!0,_);var k=o.D(C);(_==0||y>k)&&(y=k,S=_)}d(!1,S)}};return C}function i(c,h){if(typeof c.length>"u")throw Error(c.length+"/"+h);var f=function(){for(var p=0;p<c.length&&c[p]==0;)p+=1;for(var m=Array(c.length-p+h),g=0;g<c.length-p;g+=1)m[g]=c[g+p];return m}(),d={c:function(p){return f[p]},b:function(){return f.length},multiply:function(p){for(var m=Array(d.b()+p.b()-1),g=0;g<d.b();g+=1)for(var v=0;v<p.b();v+=1)m[g+v]^=a.i(a.g(d.c(g))+a.g(p.c(v)));return i(m,0)},l:function(p){if(0>d.b()-p.b())return d;for(var m=a.g(d.c(0))-a.g(p.c(0)),g=Array(d.b()),v=0;v<d.b();v+=1)g[v]=d.c(v);for(v=0;v<p.b();v+=1)g[v]^=a.i(a.g(p.c(v))+m);return i(g,0).l(p)}};return d}s.s=function(c){for(var h=[],f=0;f<c.length;f++){var d=c.charCodeAt(f);128>d?h.push(d):2048>d?h.push(192|d>>6,128|d&63):55296>d||57344<=d?h.push(224|d>>12,128|d>>6&63,128|d&63):(f++,d=65536+((d&1023)<<10|c.charCodeAt(f)&1023),h.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return h};var r={L:1,M:0,Q:3,H:2},o=function(){function c(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(d){for(var p=d<<10;0<=c(p)-c(1335);)p^=1335<<c(p)-c(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=c(p)-c(7973);)p^=7973<<c(p)-c(7973);return d<<12|p},G:function(d){return h[d-1]},F:function(d){switch(d){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=i([1],0),m=0;m<d;m+=1)p=p.multiply(i([1,a.i(m)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),m=0,g=0;g<p;g+=1)for(var v=0;v<p;v+=1){for(var x=0,C=d.a(g,v),y=-1;1>=y;y+=1)if(!(0>g+y||p<=g+y))for(var S=-1;1>=S;S+=1)0>v+S||p<=v+S||(y!=0||S!=0)&&C==d.a(g+y,v+S)&&(x+=1);5<x&&(m+=3+x-5)}for(g=0;g<p-1;g+=1)for(v=0;v<p-1;v+=1)x=0,d.a(g,v)&&(x+=1),d.a(g+1,v)&&(x+=1),d.a(g,v+1)&&(x+=1),d.a(g+1,v+1)&&(x+=1),(x==0||x==4)&&(m+=3);for(g=0;g<p;g+=1)for(v=0;v<p-6;v+=1)d.a(g,v)&&!d.a(g,v+1)&&d.a(g,v+2)&&d.a(g,v+3)&&d.a(g,v+4)&&!d.a(g,v+5)&&d.a(g,v+6)&&(m+=40);for(v=0;v<p;v+=1)for(g=0;g<p-6;g+=1)d.a(g,v)&&!d.a(g+1,v)&&d.a(g+2,v)&&d.a(g+3,v)&&d.a(g+4,v)&&!d.a(g+5,v)&&d.a(g+6,v)&&(m+=40);for(v=x=0;v<p;v+=1)for(g=0;g<p;g+=1)d.a(g,v)&&(x+=1);return m+=Math.abs(100*x/p/p-50)/5*10}};return f}(),a=function(){for(var c=Array(256),h=Array(256),f=0;8>f;f+=1)c[f]=1<<f;for(f=8;256>f;f+=1)c[f]=c[f-4]^c[f-5]^c[f-6]^c[f-8];for(f=0;255>f;f+=1)h[c[f]]=f;return{g:function(d){if(1>d)throw Error("glog("+d+")");return h[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return c[d]}}}(),l=function(){function c(d,p){switch(p){case r.L:return h[4*(d-1)];case r.M:return h[4*(d-1)+1];case r.Q:return h[4*(d-1)+2];case r.H:return h[4*(d-1)+3]}}var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(d,p){var m=c(d,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=m.length/3,p=[];for(var g=0;g<d;g+=1)for(var v=m[3*g],x=m[3*g+1],C=m[3*g+2],y=0;y<v;y+=1){var S=C,_={};_.o=x,_.j=S,p.push(_)}return p}};return f}();return s}());const dp=QrCreator;var ae=class extends L{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&dp.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return $`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Ht({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ae.styles=[B,lp];n([T("canvas")],ae.prototype,"canvas",2);n([u()],ae.prototype,"value",2);n([u()],ae.prototype,"label",2);n([u({type:Number})],ae.prototype,"size",2);n([u()],ae.prototype,"fill",2);n([u()],ae.prototype,"background",2);n([u({type:Number})],ae.prototype,"radius",2);n([u({attribute:"error-correction"})],ae.prototype,"errorCorrection",2);n([A(["background","errorCorrection","fill","radius","size","value"])],ae.prototype,"generate",1);var hp="sl-qr-code";ae.define("sl-qr-code");M({tagName:hp,elementClass:ae,react:D,events:{},displayName:"SlQrCode"});var Oc=F`
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
`,up=F`
  ${Oc}

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
`,ne=class extends L{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Vi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${H({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${N(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ne.styles=[B,up];n([T(".button")],ne.prototype,"input",2);n([T(".hidden-input")],ne.prototype,"hiddenInput",2);n([V()],ne.prototype,"hasFocus",2);n([u({type:Boolean,reflect:!0})],ne.prototype,"checked",2);n([u()],ne.prototype,"value",2);n([u({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);n([u({reflect:!0})],ne.prototype,"size",2);n([u({type:Boolean,reflect:!0})],ne.prototype,"pill",2);n([A("disabled",{waitUntilFirstUpdate:!0})],ne.prototype,"handleDisabledChange",1);var pp="sl-radio-button";ne.define("sl-radio-button");M({tagName:pp,elementClass:ne,react:D,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var fp=F`
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
`,mp=F`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,us=class extends L{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Ei(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Ei(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Ei(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Ei(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),i=Ei(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",s===0),i.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",s===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
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
    `}};us.styles=[B,mp];n([T("slot")],us.prototype,"defaultSlot",2);n([V()],us.prototype,"disableRole",2);n([u()],us.prototype,"label",2);function Ei(t){var e;const s="sl-button, sl-radio-button";return(e=t.closest(s))!=null?e:t.querySelector(s)}var At=class extends L{constructor(){super(...arguments),this.formControlController=new Ue(this),this.hasSlotController=new Ft(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?ch:t?lh:jr}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,s.forEach(r=>r.checked=r===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const s=this.getAllRadios().filter(l=>!l.disabled),i=(e=s.find(l=>l.checked))!=null?e:s[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,o=this.value;let a=s.indexOf(i)+r;a<0&&(a=s.length-1),a>s.length-1&&(a=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||l.setAttribute("tabindex","-1")}),this.value=s[a].value,s[a].checked=!0,this.hasButtonGroup?s[a].shadowRoot.querySelector("button").focus():(s[a].setAttribute("tabindex","0"),s[a].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),s=e.find(o=>o.checked),i=e.find(o=>!o.disabled),r=s||i;r&&r.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=$`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
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
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};At.styles=[B,Ls,fp];At.dependencies={"sl-button-group":us};n([T("slot:not([name])")],At.prototype,"defaultSlot",2);n([T(".radio-group__validation-input")],At.prototype,"validationInput",2);n([V()],At.prototype,"hasButtonGroup",2);n([V()],At.prototype,"errorMessage",2);n([V()],At.prototype,"defaultValue",2);n([u()],At.prototype,"label",2);n([u({attribute:"help-text"})],At.prototype,"helpText",2);n([u()],At.prototype,"name",2);n([u({reflect:!0})],At.prototype,"value",2);n([u({reflect:!0})],At.prototype,"size",2);n([u({reflect:!0})],At.prototype,"form",2);n([u({type:Boolean,reflect:!0})],At.prototype,"required",2);n([A("size",{waitUntilFirstUpdate:!0})],At.prototype,"handleSizeChange",1);n([A("value")],At.prototype,"handleValueChange",1);var gp="sl-radio-group";At.define("sl-radio-group");M({tagName:gp,elementClass:At,react:D,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var bp=F`
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
`,Pt=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:s,right:i,width:r}=this.rating.getBoundingClientRect(),o=e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-s)/r*this.max,this.precision);return vt(o,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const s=1/e;return Math.ceil(t*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,$`
      <div
        part="base"
        class=${H({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
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
          ${e.map(i=>s>i&&s<i+1?$`
                <span
                  class=${H({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${Ht({clipPath:t?`inset(0 ${(s-i)*100}% 0 0)`:`inset(0 0 0 ${(s-i)*100}%)`})}
                  >
                    ${zr(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Ht({clipPath:t?`inset(0 0 0 ${100-(s-i)*100}%)`:`inset(0 ${100-(s-i)*100}% 0 0)`})}
                  >
                    ${zr(this.getSymbol(i+1))}
                  </div>
                </span>
              `:$`
              <span
                class=${H({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
              >
                ${zr(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Pt.styles=[B,bp];Pt.dependencies={"sl-icon":rt};n([T(".rating")],Pt.prototype,"rating",2);n([V()],Pt.prototype,"hoverValue",2);n([V()],Pt.prototype,"isHovering",2);n([u()],Pt.prototype,"label",2);n([u({type:Number})],Pt.prototype,"value",2);n([u({type:Number})],Pt.prototype,"max",2);n([u({type:Number})],Pt.prototype,"precision",2);n([u({type:Boolean,reflect:!0})],Pt.prototype,"readonly",2);n([u({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);n([u()],Pt.prototype,"getSymbol",2);n([sr({passive:!0})],Pt.prototype,"handleTouchMove",1);n([A("hoverValue")],Pt.prototype,"handleHoverValueChange",1);n([A("isHovering")],Pt.prototype,"handleIsHoveringChange",1);var vp="sl-rating";Pt.define("sl-rating");M({tagName:vp,elementClass:Pt,react:D,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var yp=F`
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
`,ps=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";t.preventDefault(),Hi(this.base,{onMove:i=>{this.position=parseFloat(vt(i/e*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight")&&(r-=i),(e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft")&&(r+=i),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=vt(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        id="image-comparer"
        class=${H({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Ht({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Ht({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};ps.styles=[B,yp];ps.scopedElement={"sl-icon":rt};n([T(".image-comparer")],ps.prototype,"base",2);n([T(".image-comparer__handle")],ps.prototype,"handle",2);n([u({type:Number,reflect:!0})],ps.prototype,"position",2);n([A("position",{waitUntilFirstUpdate:!0})],ps.prototype,"handlePositionChange",1);var _p="sl-image-comparer";ps.define("sl-image-comparer");M({tagName:_p,elementClass:ps,react:D,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var wp=F`
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
`,q=class extends L{constructor(){super(...arguments),this.formControlController=new Ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ft(this,"help-text","label"),this.localize=new Z(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
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
              name=${N(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              min=${N(this.min)}
              max=${N(this.max)}
              step=${N(this.step)}
              .value=${Ts(this.value)}
              autocapitalize=${N(this.autocapitalize)}
              autocomplete=${N(this.autocomplete)}
              autocorrect=${N(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${N(this.pattern)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};q.styles=[B,Ls,wp];q.dependencies={"sl-icon":rt};n([T(".input__control")],q.prototype,"input",2);n([V()],q.prototype,"hasFocus",2);n([u()],q.prototype,"title",2);n([u({reflect:!0})],q.prototype,"type",2);n([u()],q.prototype,"name",2);n([u()],q.prototype,"value",2);n([pi()],q.prototype,"defaultValue",2);n([u({reflect:!0})],q.prototype,"size",2);n([u({type:Boolean,reflect:!0})],q.prototype,"filled",2);n([u({type:Boolean,reflect:!0})],q.prototype,"pill",2);n([u()],q.prototype,"label",2);n([u({attribute:"help-text"})],q.prototype,"helpText",2);n([u({type:Boolean})],q.prototype,"clearable",2);n([u({type:Boolean,reflect:!0})],q.prototype,"disabled",2);n([u()],q.prototype,"placeholder",2);n([u({type:Boolean,reflect:!0})],q.prototype,"readonly",2);n([u({attribute:"password-toggle",type:Boolean})],q.prototype,"passwordToggle",2);n([u({attribute:"password-visible",type:Boolean})],q.prototype,"passwordVisible",2);n([u({attribute:"no-spin-buttons",type:Boolean})],q.prototype,"noSpinButtons",2);n([u({reflect:!0})],q.prototype,"form",2);n([u({type:Boolean,reflect:!0})],q.prototype,"required",2);n([u()],q.prototype,"pattern",2);n([u({type:Number})],q.prototype,"minlength",2);n([u({type:Number})],q.prototype,"maxlength",2);n([u()],q.prototype,"min",2);n([u()],q.prototype,"max",2);n([u()],q.prototype,"step",2);n([u()],q.prototype,"autocapitalize",2);n([u()],q.prototype,"autocorrect",2);n([u()],q.prototype,"autocomplete",2);n([u({type:Boolean})],q.prototype,"autofocus",2);n([u()],q.prototype,"enterkeyhint",2);n([u({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],q.prototype,"spellcheck",2);n([u()],q.prototype,"inputmode",2);n([A("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);n([A("step",{waitUntilFirstUpdate:!0})],q.prototype,"handleStepChange",1);n([A("value",{waitUntilFirstUpdate:!0})],q.prototype,"handleValueChange",1);var xp="sl-input";q.define("sl-input");var kp=M({tagName:xp,elementClass:q,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),Ut=kp,Cp="sl-icon";rt.define("sl-icon");var Sp=M({tagName:Cp,elementClass:rt,react:D,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),Pa=Sp,$p=F`
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
`,Zr=class extends L{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath(),i=s.find(l=>{var c;return e.includes(((c=l==null?void 0:l.getAttribute)==null?void 0:c.call(l,"role"))||"")});if(!i||s.find(l=>{var c;return((c=l==null?void 0:l.getAttribute)==null?void 0:c.call(l,"role"))==="menu"})!==this)return;const a=i;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e==null||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let i=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Zr.styles=[B,$p];n([T("slot")],Zr.prototype,"defaultSlot",2);var Ap="sl-menu";Zr.define("sl-menu");var Ep=M({tagName:Ap,elementClass:Zr,react:D,events:{onSlSelect:"sl-select"},displayName:"SlMenu"}),Ic=Ep,zp=F`
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
 */const Bi=(t,e)=>{var i;const s=t._$AN;if(s===void 0)return!1;for(const r of s)(i=r._$AO)==null||i.call(r,e,!1),Bi(r,e);return!0},Mr=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Nc=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Pp(e)}};function Tp(t){this._$AN!==void 0?(Mr(this),this._$AM=t,Nc(this)):this._$AM=t}function Rp(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)Bi(i[o],!1),Mr(i[o]);else i!=null&&(Bi(i,!1),Mr(i));else Bi(this,t)}const Pp=t=>{t.type==Te.CHILD&&(t._$AP??(t._$AP=Rp),t._$AQ??(t._$AQ=Tp))};class Op extends ar{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Nc(this),this.isConnected=e._$AU}_$AO(e,s=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),s&&(Bi(this,e),Mr(this))}setValue(e){if(pc(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ip=()=>new Np;class Np{}const fo=new WeakMap,Lp=or(class extends Op{render(t){return at}update(t,[e]){var i;const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),at}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let s=fo.get(e);s===void 0&&(s=new WeakMap,fo.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=fo.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Dp=class{constructor(t,e){this.popupRef=Ip(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s==null?void 0:s.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:o,top:a,width:l,height:c}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?o+l:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?o+l:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of e.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((r,o)=>{var a;const l=(a=e.get(o))!=null?a:new CSSUnitValue(0,"px"),h=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return r-h.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?$`
      <sl-popup
        ${Lp(this.popupRef)}
        placement=${t?"left-start":"right-start"}
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
    `:$` <slot name="submenu" hidden></slot> `}},Wt=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Ft(this,"submenu"),this.submenuController=new Dp(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return dh(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return $`
      <div
        id="anchor"
        part="base"
        class=${H({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?$` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Wt.styles=[B,zp];Wt.dependencies={"sl-icon":rt,"sl-popup":tt,"sl-spinner":yi};n([T("slot:not([name])")],Wt.prototype,"defaultSlot",2);n([T(".menu-item")],Wt.prototype,"menuItem",2);n([u()],Wt.prototype,"type",2);n([u({type:Boolean,reflect:!0})],Wt.prototype,"checked",2);n([u()],Wt.prototype,"value",2);n([u({type:Boolean,reflect:!0})],Wt.prototype,"loading",2);n([u({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);n([A("checked")],Wt.prototype,"handleCheckedChange",1);n([A("disabled")],Wt.prototype,"handleDisabledChange",1);n([A("type")],Wt.prototype,"handleTypeChange",1);var Mp="sl-menu-item";Wt.define("sl-menu-item");var Fp=M({tagName:Mp,elementClass:Wt,react:D,events:{},displayName:"SlMenuItem"}),Ri=Fp,Vp=F`
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
`,Oa=class extends L{render(){return $` <slot part="base" class="menu-label"></slot> `}};Oa.styles=[B,Vp];var Hp="sl-menu-label";Oa.define("sl-menu-label");var Bp=M({tagName:Hp,elementClass:Oa,react:D,events:{},displayName:"SlMenuLabel"}),Up=Bp,qp=F`
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
`,te=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(e+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e.trim()}render(){return $`
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
    `}};te.styles=[B,qp];te.dependencies={"sl-icon":rt};n([T(".option__label")],te.prototype,"defaultSlot",2);n([V()],te.prototype,"current",2);n([V()],te.prototype,"selected",2);n([V()],te.prototype,"hasHover",2);n([u({reflect:!0})],te.prototype,"value",2);n([u({type:Boolean,reflect:!0})],te.prototype,"disabled",2);n([A("disabled")],te.prototype,"handleDisabledChange",1);n([A("selected")],te.prototype,"handleSelectedChange",1);n([A("value")],te.prototype,"handleValueChange",1);var Wp="sl-option";te.define("sl-option");M({tagName:Wp,elementClass:te,react:D,events:{},displayName:"SlOption"});var jp=F`
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
`,_i=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return $`
      <div
        part="base"
        class=${H({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${N(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Ht({width:`${this.value}%`})}>
          ${this.indeterminate?"":$` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};_i.styles=[B,jp];n([u({type:Number,reflect:!0})],_i.prototype,"value",2);n([u({type:Boolean,reflect:!0})],_i.prototype,"indeterminate",2);n([u()],_i.prototype,"label",2);var Kp="sl-progress-bar";_i.define("sl-progress-bar");M({tagName:Kp,elementClass:_i,react:D,events:{},displayName:"SlProgressBar"});var Gp=F`
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
`,lr=class extends L{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};lr.styles=[B,Gp];n([u({type:Boolean,reflect:!0})],lr.prototype,"vertical",2);n([A("vertical")],lr.prototype,"handleVerticalChange",1);var Qp="sl-divider";lr.define("sl-divider");M({tagName:Qp,elementClass:lr,react:D,events:{},displayName:"SlDivider"});var Yp=F`
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
`,Ln=new WeakMap;function Lc(t){let e=Ln.get(t);return e||(e=window.getComputedStyle(t,null),Ln.set(t,e)),e}function Xp(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Lc(t);return e.visibility!=="hidden"&&e.display!=="none"}function Zp(t){const e=Lc(t),{overflowY:s,overflowX:i}=e;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&s==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Jp(t){const e=t.tagName.toLowerCase(),s=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const o=t.getRootNode(),a=`input[type='radio'][name="${t.getAttribute("name")}"]`,l=o.querySelector(`${a}:checked`);return l?l===t:o.querySelector(a)===t}return Xp(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Zp(t):!1}function tf(t){var e,s;const i=qo(t),r=(e=i[0])!=null?e:null,o=(s=i[i.length-1])!=null?s:null;return{start:r,end:o}}function ef(t,e){var s;return((s=t.getRootNode({composed:!0}))==null?void 0:s.host)!==e}function qo(t){const e=new WeakMap,s=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!s.includes(r)&&Jp(r)&&s.push(r),r instanceof HTMLSlotElement&&ef(r,t)&&r.assignedElements({flatten:!0}).forEach(o=>{i(o)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const o of r.children)i(o)}return i(t),s.sort((r,o)=>{const a=Number(r.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-a})}function*Ia(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*vd(Ia(t.shadowRoot.activeElement))))}function sf(){return[...Ia()].pop()}var zi=[],Dc=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=sf();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=qo(this.element);let o=r.findIndex(l=>l===i);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){o+a>=r.length?o=0:o+a<0?o=r.length-1:o+=a,this.previousFocus=this.currentFocus;const l=r[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const c=[...Ia()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){zi.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){zi=zi.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return zi[zi.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=qo(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],i=this.tabDirection==="forward"?e:s;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function Dn(t){return t.charAt(0).toUpperCase()+t.slice(1)}var jt=class extends L{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"footer"),this.localize=new Z(this),this.modal=new Dc(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Mi(this)))}disconnectedCallback(){super.disconnectedCallback(),Fi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=nt(this,"drawer.denyClose",{dir:this.localize.dir()});mt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Mi(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([yt(this.drawer),yt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=nt(this,`drawer.show${Dn(this.placement)}`,{dir:this.localize.dir()}),s=nt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([mt(this.panel,e.keyframes,e.options),mt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Fi(this)),await Promise.all([yt(this.drawer),yt(this.overlay)]);const t=nt(this,`drawer.hide${Dn(this.placement)}`,{dir:this.localize.dir()}),e=nt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([mt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),mt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Mi(this)),this.open&&this.contained&&(this.modal.deactivate(),Fi(this))}async show(){if(!this.open)return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Mt(this,"sl-after-hide")}render(){return $`
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
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:"title")}
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
    `}};jt.styles=[B,Yp];jt.dependencies={"sl-icon-button":_t};n([T(".drawer")],jt.prototype,"drawer",2);n([T(".drawer__panel")],jt.prototype,"panel",2);n([T(".drawer__overlay")],jt.prototype,"overlay",2);n([u({type:Boolean,reflect:!0})],jt.prototype,"open",2);n([u({reflect:!0})],jt.prototype,"label",2);n([u({reflect:!0})],jt.prototype,"placement",2);n([u({type:Boolean,reflect:!0})],jt.prototype,"contained",2);n([u({attribute:"no-header",type:Boolean,reflect:!0})],jt.prototype,"noHeader",2);n([A("open",{waitUntilFirstUpdate:!0})],jt.prototype,"handleOpenChange",1);n([A("contained",{waitUntilFirstUpdate:!0})],jt.prototype,"handleNoModalChange",1);it("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});it("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});it("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});it("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});it("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});it("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});it("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});it("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});it("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});it("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});it("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var rf="sl-drawer";jt.define("sl-drawer");var of=M({tagName:rf,elementClass:jt,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"}),Mc=of,af=F`
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
`,Et=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,r;const o=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),i=s[0],r=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>tf(i).start);let s;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Mt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await yt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=nt(this,"dropdown.show",{dir:this.localize.dir()});await mt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await yt(this);const{keyframes:t,options:e}=nt(this,"dropdown.hide",{dir:this.localize.dir()});await mt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
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
        sync=${N(this.sync?this.sync:void 0)}
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
    `}};Et.styles=[B,af];Et.dependencies={"sl-popup":tt};n([T(".dropdown")],Et.prototype,"popup",2);n([T(".dropdown__trigger")],Et.prototype,"trigger",2);n([T(".dropdown__panel")],Et.prototype,"panel",2);n([u({type:Boolean,reflect:!0})],Et.prototype,"open",2);n([u({reflect:!0})],Et.prototype,"placement",2);n([u({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);n([u({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Et.prototype,"stayOpenOnSelect",2);n([u({attribute:!1})],Et.prototype,"containingElement",2);n([u({type:Number})],Et.prototype,"distance",2);n([u({type:Number})],Et.prototype,"skidding",2);n([u({type:Boolean})],Et.prototype,"hoist",2);n([u({reflect:!0})],Et.prototype,"sync",2);n([A("open",{waitUntilFirstUpdate:!0})],Et.prototype,"handleOpenChange",1);it("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});it("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var nf="sl-dropdown";Et.define("sl-dropdown");var lf=M({tagName:nf,elementClass:Et,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"}),Fc=lf,Kt=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return $`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};n([u()],Kt.prototype,"date",2);n([u()],Kt.prototype,"weekday",2);n([u()],Kt.prototype,"era",2);n([u()],Kt.prototype,"year",2);n([u()],Kt.prototype,"month",2);n([u()],Kt.prototype,"day",2);n([u()],Kt.prototype,"hour",2);n([u()],Kt.prototype,"minute",2);n([u()],Kt.prototype,"second",2);n([u({attribute:"time-zone-name"})],Kt.prototype,"timeZoneName",2);n([u({attribute:"time-zone"})],Kt.prototype,"timeZone",2);n([u({attribute:"hour-format"})],Kt.prototype,"hourFormat",2);var cf="sl-format-date";Kt.define("sl-format-date");M({tagName:cf,elementClass:Kt,react:D,events:{},displayName:"SlFormatDate"});var cr=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),r=s[i]+this.unit,o=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:r,unitDisplay:this.display})}};n([u({type:Number})],cr.prototype,"value",2);n([u()],cr.prototype,"unit",2);n([u()],cr.prototype,"display",2);var df="sl-format-bytes";cr.define("sl-format-bytes");M({tagName:df,elementClass:cr,react:D,events:{},displayName:"SlFormatBytes"});var le=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};n([u({type:Number})],le.prototype,"value",2);n([u()],le.prototype,"type",2);n([u({attribute:"no-grouping",type:Boolean})],le.prototype,"noGrouping",2);n([u()],le.prototype,"currency",2);n([u({attribute:"currency-display"})],le.prototype,"currencyDisplay",2);n([u({attribute:"minimum-integer-digits",type:Number})],le.prototype,"minimumIntegerDigits",2);n([u({attribute:"minimum-fraction-digits",type:Number})],le.prototype,"minimumFractionDigits",2);n([u({attribute:"maximum-fraction-digits",type:Number})],le.prototype,"maximumFractionDigits",2);n([u({attribute:"minimum-significant-digits",type:Number})],le.prototype,"minimumSignificantDigits",2);n([u({attribute:"maximum-significant-digits",type:Number})],le.prototype,"maximumSignificantDigits",2);var hf="sl-format-number";le.define("sl-format-number");M({tagName:hf,elementClass:le,react:D,events:{},displayName:"SlFormatNumber"});var uf="sl-icon-button";_t.define("sl-icon-button");var pf=M({tagName:uf,elementClass:_t,react:D,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),Bt=pf,ff=F`
  :host {
    display: block;
  }
`,mo=new Map;function mf(t,e="cors"){const s=mo.get(t);if(s!==void 0)return Promise.resolve(s);const i=fetch(t,{mode:e}).then(async r=>{const o={ok:r.ok,status:r.status,html:await r.text()};return mo.set(t,o),o});return mo.set(t,i),i}var Ms=class extends L{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(s=>e.setAttribute(s.name,s.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await mf(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return $`<slot></slot>`}};Ms.styles=[B,ff];n([u()],Ms.prototype,"src",2);n([u()],Ms.prototype,"mode",2);n([u({attribute:"allow-scripts",type:Boolean})],Ms.prototype,"allowScripts",2);n([A("src")],Ms.prototype,"handleSrcChange",1);var gf="sl-include";Ms.define("sl-include");M({tagName:gf,elementClass:Ms,react:D,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var bf=F`
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
`,Na=class extends L{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${H({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Na.styles=[B,bf];var vf="sl-card";Na.define("sl-card");var yf=M({tagName:vf,elementClass:Na,react:D,events:{},displayName:"SlCard"}),La=yf,_f=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},wf=F`
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
 */function*xf(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*kf(t,e,s=1){const i=e===void 0?0:t;e??(e=t);for(let r=i;s>0?r<e:e<r;r+=s)yield r}var ut=class extends L{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new _f(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new Z(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||s!==r)&&(t.scrollTo({left:i,top:r,behavior:Ho()?"auto":"smooth"}),await Mt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:i}=this,r=i?t/s:(t-e)/s+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),s=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+s*s)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,s=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",o=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),o&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var a;const l=(a=this.shadowRoot)==null?void 0:a.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const s=e.find(l=>l.isIntersecting);if(!s)return;const i=this.getSlides({excludeClones:!1}),r=this.getSlides().length,o=i.indexOf(s.target),a=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const l=Number(s.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),i=t.slice(0,e);s.reverse().forEach((r,o)=>{const a=r.cloneNode(!0);a.setAttribute("data-clone",String(t.length-o-1)),this.prepend(a)}),i.forEach((r,o)=>{const a=r.cloneNode(!0);a.setAttribute("data-clone",String(o)),this.append(a)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,i)=>{(i+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:s,loop:i}=this,r=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!r.length)return;const a=i?(t+r.length)%r.length:vt(t,0,r.length-s);this.activeSlide=a;const l=this.localize.dir()==="rtl",c=vt(t+(i?s:0)+(l?s-1:0),0,o.length-1),h=o[c];this.scrollToSlide(h,Ho()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,i=s.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.left-i.left,a=r.top-i.top;o||a?(this.pendingSlideChange=!0,s.scrollTo({left:o+s.scrollLeft,top:a+s.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),i=this.getCurrentPage(),r=this.canScrollPrev(),o=this.canScrollNext(),a=this.localize.dir()==="ltr";return $`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${H({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
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
                  class="${H({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
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
                ${xf(kf(s),l=>{const c=l===i;return $`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${H({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
                      role="tab"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,s)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ut.styles=[B,wf];ut.dependencies={"sl-icon":rt};n([u({type:Boolean,reflect:!0})],ut.prototype,"loop",2);n([u({type:Boolean,reflect:!0})],ut.prototype,"navigation",2);n([u({type:Boolean,reflect:!0})],ut.prototype,"pagination",2);n([u({type:Boolean,reflect:!0})],ut.prototype,"autoplay",2);n([u({type:Number,attribute:"autoplay-interval"})],ut.prototype,"autoplayInterval",2);n([u({type:Number,attribute:"slides-per-page"})],ut.prototype,"slidesPerPage",2);n([u({type:Number,attribute:"slides-per-move"})],ut.prototype,"slidesPerMove",2);n([u()],ut.prototype,"orientation",2);n([u({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ut.prototype,"mouseDragging",2);n([T(".carousel__slides")],ut.prototype,"scrollContainer",2);n([T(".carousel__pagination")],ut.prototype,"paginationContainer",2);n([V()],ut.prototype,"activeSlide",2);n([V()],ut.prototype,"scrolling",2);n([V()],ut.prototype,"dragging",2);n([sr({passive:!0})],ut.prototype,"handleScroll",1);n([A("loop",{waitUntilFirstUpdate:!0}),A("slidesPerPage",{waitUntilFirstUpdate:!0})],ut.prototype,"initializeSlides",1);n([A("activeSlide")],ut.prototype,"handleSlideChange",1);n([A("slidesPerMove")],ut.prototype,"updateSlidesSnap",1);n([A("autoplay")],ut.prototype,"handleAutoplayChange",1);var Cf="sl-carousel";ut.define("sl-carousel");M({tagName:Cf,elementClass:ut,react:D,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var Sf=F`
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
`,Da=class extends L{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return $` <slot></slot> `}};Da.styles=[B,Sf];var $f="sl-carousel-item";Da.define("sl-carousel-item");M({tagName:$f,elementClass:Da,react:D,events:{},displayName:"SlCarouselItem"});var Af=F`
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
`,et=class extends L{constructor(){super(...arguments),this.formControlController=new Ue(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ft(this,"[default]","prefix","suffix"),this.localize=new Z(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:jr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Or`a`:Or`button`;return Vi`
      <${e}
        part="base"
        class=${H({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${N(t?void 0:this.disabled)}
        type=${N(t?void 0:this.type)}
        title=${this.title}
        name=${N(t?void 0:this.name)}
        value=${N(t?void 0:this.value)}
        href=${N(t&&!this.disabled?this.href:void 0)}
        target=${N(t?this.target:void 0)}
        download=${N(t?this.download:void 0)}
        rel=${N(t?this.rel:void 0)}
        role=${N(t?void 0:"button")}
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
        ${this.caret?Vi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Vi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};et.styles=[B,Oc];et.dependencies={"sl-icon":rt,"sl-spinner":yi};n([T(".button")],et.prototype,"button",2);n([V()],et.prototype,"hasFocus",2);n([V()],et.prototype,"invalid",2);n([u()],et.prototype,"title",2);n([u({reflect:!0})],et.prototype,"variant",2);n([u({reflect:!0})],et.prototype,"size",2);n([u({type:Boolean,reflect:!0})],et.prototype,"caret",2);n([u({type:Boolean,reflect:!0})],et.prototype,"disabled",2);n([u({type:Boolean,reflect:!0})],et.prototype,"loading",2);n([u({type:Boolean,reflect:!0})],et.prototype,"outline",2);n([u({type:Boolean,reflect:!0})],et.prototype,"pill",2);n([u({type:Boolean,reflect:!0})],et.prototype,"circle",2);n([u()],et.prototype,"type",2);n([u()],et.prototype,"name",2);n([u()],et.prototype,"value",2);n([u()],et.prototype,"href",2);n([u()],et.prototype,"target",2);n([u()],et.prototype,"rel",2);n([u()],et.prototype,"download",2);n([u()],et.prototype,"form",2);n([u({attribute:"formaction"})],et.prototype,"formAction",2);n([u({attribute:"formenctype"})],et.prototype,"formEnctype",2);n([u({attribute:"formmethod"})],et.prototype,"formMethod",2);n([u({attribute:"formnovalidate",type:Boolean})],et.prototype,"formNoValidate",2);n([u({attribute:"formtarget"})],et.prototype,"formTarget",2);n([A("disabled",{waitUntilFirstUpdate:!0})],et.prototype,"handleDisabledChange",1);function Tt(t,e){Ef(t)&&(t="100%");const s=zf(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function _r(t){return Math.min(1,Math.max(0,t))}function Ef(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function zf(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Vc(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function wr(t){return Number(t)<=1?`${Number(t)*100}%`:t}function ys(t){return t.length===1?"0"+t:String(t)}function Tf(t,e,s){return{r:Tt(t,255)*255,g:Tt(e,255)*255,b:Tt(s,255)*255}}function Mn(t,e,s){t=Tt(t,255),e=Tt(e,255),s=Tt(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0,a=0;const l=(i+r)/2;if(i===r)a=0,o=0;else{const c=i-r;switch(a=l>.5?c/(2-i-r):c/(i+r),i){case t:o=(e-s)/c+(e<s?6:0);break;case e:o=(s-t)/c+2;break;case s:o=(t-e)/c+4;break}o/=6}return{h:o,s:a,l}}function go(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(e-t)*(6*s):s<1/2?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function Rf(t,e,s){let i,r,o;if(t=Tt(t,360),e=Tt(e,100),s=Tt(s,100),e===0)r=s,o=s,i=s;else{const a=s<.5?s*(1+e):s+e-s*e,l=2*s-a;i=go(l,a,t+1/3),r=go(l,a,t),o=go(l,a,t-1/3)}return{r:i*255,g:r*255,b:o*255}}function Fn(t,e,s){t=Tt(t,255),e=Tt(e,255),s=Tt(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0;const a=i,l=i-r,c=i===0?0:l/i;if(i===r)o=0;else{switch(i){case t:o=(e-s)/l+(e<s?6:0);break;case e:o=(s-t)/l+2;break;case s:o=(t-e)/l+4;break}o/=6}return{h:o,s:c,v:a}}function Pf(t,e,s){t=Tt(t,360)*6,e=Tt(e,100),s=Tt(s,100);const i=Math.floor(t),r=t-i,o=s*(1-e),a=s*(1-r*e),l=s*(1-(1-r)*e),c=i%6,h=[s,a,o,o,l,s][c],f=[l,s,s,a,o,o][c],d=[o,o,l,s,s,a][c];return{r:h*255,g:f*255,b:d*255}}function Vn(t,e,s,i){const r=[ys(Math.round(t).toString(16)),ys(Math.round(e).toString(16)),ys(Math.round(s).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Of(t,e,s,i,r){const o=[ys(Math.round(t).toString(16)),ys(Math.round(e).toString(16)),ys(Math.round(s).toString(16)),ys(Nf(i))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function If(t,e,s,i){const r=t/100,o=e/100,a=s/100,l=i/100,c=255*(1-r)*(1-l),h=255*(1-o)*(1-l),f=255*(1-a)*(1-l);return{r:c,g:h,b:f}}function Hn(t,e,s){let i=1-t/255,r=1-e/255,o=1-s/255,a=Math.min(i,r,o);return a===1?(i=0,r=0,o=0):(i=(i-a)/(1-a)*100,r=(r-a)/(1-a)*100,o=(o-a)/(1-a)*100),a*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(o),k:Math.round(a)}}function Nf(t){return Math.round(parseFloat(t)*255).toString(16)}function Bn(t){return Qt(t)/255}function Qt(t){return parseInt(t,16)}function Lf(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Wo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Df(t){let e={r:0,g:0,b:0},s=1,i=null,r=null,o=null,a=!1,l=!1;return typeof t=="string"&&(t=Vf(t)),typeof t=="object"&&(Gt(t.r)&&Gt(t.g)&&Gt(t.b)?(e=Tf(t.r,t.g,t.b),a=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Gt(t.h)&&Gt(t.s)&&Gt(t.v)?(i=wr(t.s),r=wr(t.v),e=Pf(t.h,i,r),a=!0,l="hsv"):Gt(t.h)&&Gt(t.s)&&Gt(t.l)?(i=wr(t.s),o=wr(t.l),e=Rf(t.h,i,o),a=!0,l="hsl"):Gt(t.c)&&Gt(t.m)&&Gt(t.y)&&Gt(t.k)&&(e=If(t.c,t.m,t.y,t.k),a=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=Vc(s),{ok:a,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}const Mf="[-\\+]?\\d+%?",Ff="[-\\+]?\\d*\\.\\d+%?",is="(?:"+Ff+")|(?:"+Mf+")",bo="[\\s|\\(]+("+is+")[,|\\s]+("+is+")[,|\\s]+("+is+")\\s*\\)?",xr="[\\s|\\(]+("+is+")[,|\\s]+("+is+")[,|\\s]+("+is+")[,|\\s]+("+is+")\\s*\\)?",se={CSS_UNIT:new RegExp(is),rgb:new RegExp("rgb"+bo),rgba:new RegExp("rgba"+xr),hsl:new RegExp("hsl"+bo),hsla:new RegExp("hsla"+xr),hsv:new RegExp("hsv"+bo),hsva:new RegExp("hsva"+xr),cmyk:new RegExp("cmyk"+xr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Vf(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Wo[t])t=Wo[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=se.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=se.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=se.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=se.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=se.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=se.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=se.cmyk.exec(t),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=se.hex8.exec(t),s?{r:Qt(s[1]),g:Qt(s[2]),b:Qt(s[3]),a:Bn(s[4]),format:e?"name":"hex8"}:(s=se.hex6.exec(t),s?{r:Qt(s[1]),g:Qt(s[2]),b:Qt(s[3]),format:e?"name":"hex"}:(s=se.hex4.exec(t),s?{r:Qt(s[1]+s[1]),g:Qt(s[2]+s[2]),b:Qt(s[3]+s[3]),a:Bn(s[4]+s[4]),format:e?"name":"hex8"}:(s=se.hex3.exec(t),s?{r:Qt(s[1]+s[1]),g:Qt(s[2]+s[2]),b:Qt(s[3]+s[3]),format:e?"name":"hex"}:!1))))))))))}function Gt(t){return typeof t=="number"?!Number.isNaN(t):se.CSS_UNIT.test(t)}class pt{constructor(e="",s={}){if(e instanceof pt)return e;typeof e=="number"&&(e=Lf(e)),this.originalInput=e;const i=Df(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let s,i,r;const o=e.r/255,a=e.g/255,l=e.b/255;return o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*s+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Vc(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Fn(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Fn(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${s}, ${i}%, ${r}%)`:`hsva(${s}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=Mn(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Mn(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${s}, ${i}%, ${r}%)`:`hsla(${s}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Vn(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Of(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${s}, ${i})`:`rgba(${e}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=s=>`${Math.round(Tt(s,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=s=>Math.round(Tt(s,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Hn(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:s,y:i,k:r}=Hn(this.r,this.g,this.b);return`cmyk(${e}, ${s}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Vn(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(Wo))if(e===i)return s;return!1}toString(e){const s=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!s&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new pt(this.toString())}lighten(e=10){const s=this.toHsl();return s.l+=e/100,s.l=_r(s.l),new pt(s)}brighten(e=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(e/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(e/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(e/100)))),new pt(s)}darken(e=10){const s=this.toHsl();return s.l-=e/100,s.l=_r(s.l),new pt(s)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const s=this.toHsl();return s.s-=e/100,s.s=_r(s.s),new pt(s)}saturate(e=10){const s=this.toHsl();return s.s+=e/100,s.s=_r(s.s),new pt(s)}greyscale(){return this.desaturate(100)}spin(e){const s=this.toHsl(),i=(s.h+e)%360;return s.h=i<0?360+i:i,new pt(s)}mix(e,s=50){const i=this.toRgb(),r=new pt(e).toRgb(),o=s/100,a={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return new pt(a)}analogous(e=6,s=30){const i=this.toHsl(),r=360/s,o=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(new pt(i));return o}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new pt(e)}monochromatic(e=6){const s=this.toHsv(),{h:i}=s,{s:r}=s;let{v:o}=s;const a=[],l=1/e;for(;e--;)a.push(new pt({h:i,s:r,v:o})),o=(o+l)%1;return a}splitcomplement(){const e=this.toHsl(),{h:s}=e;return[this,new pt({h:(s+72)%360,s:e.s,l:e.l}),new pt({h:(s+216)%360,s:e.s,l:e.l})]}onBackground(e){const s=this.toRgb(),i=new pt(e).toRgb(),r=s.a+i.a*(1-s.a);return new pt({r:(s.r*s.a+i.r*i.a*(1-s.a))/r,g:(s.g*s.a+i.g*i.a*(1-s.a))/r,b:(s.b*s.a+i.b*i.a*(1-s.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const s=this.toHsl(),{h:i}=s,r=[this],o=360/e;for(let a=1;a<e;a++)r.push(new pt({h:(i+a*o)%360,s:s.s,l:s.l}));return r}equals(e){const s=new pt(e);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var Un="EyeDropper"in window,G=class extends L{constructor(){super(),this.formControlController=new Ue(this),this.isSafeValue=!1,this.localize=new Z(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),Hi(e,{onMove:a=>{this.alpha=vt(a/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),Hi(e,{onMove:a=>{this.hue=vt(a/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),s=e.querySelector(".color-picker__grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let o=this.value,a=this.value;s.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Hi(e,{onMove:(l,c)=>{this.saturation=vt(l/i*100,0,100),this.brightness=vt(100-c/r*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=vt(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=vt(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=vt(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=vt(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=vt(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=vt(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=vt(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=vt(this.brightness-e,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,s=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new pt(t);if(!e.isValid)return null;const s=e.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},r=e.toRgb(),o=e.toHexString(),a=e.toHex8String(),l=e.toHsv(),c={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(a)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Un)return;new EyeDropper().open().then(e=>{const s=this.value;this.setColor(e.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,s,i=100){const r=new pt(`hsva(${t}, ${e}%, ${s}%, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(e);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),i=$`
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
          style=${Ht({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${H({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ht({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${N(this.disabled?void 0:"0")}
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
                style=${Ht({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${N(this.disabled?void 0:"0")}
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
                      style=${Ht({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ht({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${N(this.disabled?void 0:"0")}
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
            style=${Ht({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${Un?$`
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

        ${s.length>0?$`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(r=>{const o=this.parseColor(r);return o?$`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${N(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${a=>!this.disabled&&a.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Ht({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${r}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:$`
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
          style=${Ht({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};G.styles=[B,Af];G.dependencies={"sl-button-group":us,"sl-button":et,"sl-dropdown":Et,"sl-icon":rt,"sl-input":q,"sl-visually-hidden":Br};n([T('[part~="base"]')],G.prototype,"base",2);n([T('[part~="input"]')],G.prototype,"input",2);n([T(".color-dropdown")],G.prototype,"dropdown",2);n([T('[part~="preview"]')],G.prototype,"previewButton",2);n([T('[part~="trigger"]')],G.prototype,"trigger",2);n([V()],G.prototype,"hasFocus",2);n([V()],G.prototype,"isDraggingGridHandle",2);n([V()],G.prototype,"isEmpty",2);n([V()],G.prototype,"inputValue",2);n([V()],G.prototype,"hue",2);n([V()],G.prototype,"saturation",2);n([V()],G.prototype,"brightness",2);n([V()],G.prototype,"alpha",2);n([u()],G.prototype,"value",2);n([pi()],G.prototype,"defaultValue",2);n([u()],G.prototype,"label",2);n([u()],G.prototype,"format",2);n([u({type:Boolean,reflect:!0})],G.prototype,"inline",2);n([u({reflect:!0})],G.prototype,"size",2);n([u({attribute:"no-format-toggle",type:Boolean})],G.prototype,"noFormatToggle",2);n([u()],G.prototype,"name",2);n([u({type:Boolean,reflect:!0})],G.prototype,"disabled",2);n([u({type:Boolean})],G.prototype,"hoist",2);n([u({type:Boolean})],G.prototype,"opacity",2);n([u({type:Boolean})],G.prototype,"uppercase",2);n([u()],G.prototype,"swatches",2);n([u({reflect:!0})],G.prototype,"form",2);n([u({type:Boolean,reflect:!0})],G.prototype,"required",2);n([sr({passive:!1})],G.prototype,"handleTouchMove",1);n([A("format",{waitUntilFirstUpdate:!0})],G.prototype,"handleFormatChange",1);n([A("opacity",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpacityChange",1);n([A("value")],G.prototype,"handleValueChange",1);var Hf="sl-color-picker";G.define("sl-color-picker");M({tagName:Hf,elementClass:G,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var Bf="sl-checkbox";wt.define("sl-checkbox");var Uf=M({tagName:Bf,elementClass:wt,react:D,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"}),Ti=Uf,qf=F`
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
`,kt=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,o="";s?[r,o]=this.from.trim().split("."):i&&([r,o]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in e?e.getElementById(r):null;a?i?t=a.getAttribute(o)||"":s?t=a[o]||"":t=a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),r=t==="success"?this.successIcon:this.errorIcon,o=nt(this,"copy.in",{dir:"ltr"}),a=nt(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?s:i,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await r.animate(a.keyframes,a.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return $`
      <sl-tooltip
        class=${H({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
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
    `}};kt.styles=[B,qf];kt.dependencies={"sl-icon":rt,"sl-tooltip":xt};n([T('slot[name="copy-icon"]')],kt.prototype,"copyIcon",2);n([T('slot[name="success-icon"]')],kt.prototype,"successIcon",2);n([T('slot[name="error-icon"]')],kt.prototype,"errorIcon",2);n([T("sl-tooltip")],kt.prototype,"tooltip",2);n([V()],kt.prototype,"isCopying",2);n([V()],kt.prototype,"status",2);n([u()],kt.prototype,"value",2);n([u()],kt.prototype,"from",2);n([u({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);n([u({attribute:"copy-label"})],kt.prototype,"copyLabel",2);n([u({attribute:"success-label"})],kt.prototype,"successLabel",2);n([u({attribute:"error-label"})],kt.prototype,"errorLabel",2);n([u({attribute:"feedback-duration",type:Number})],kt.prototype,"feedbackDuration",2);n([u({attribute:"tooltip-placement"})],kt.prototype,"tooltipPlacement",2);n([u({type:Boolean})],kt.prototype,"hoist",2);it("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});it("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var Wf="sl-copy-button";kt.define("sl-copy-button");var jf=M({tagName:Wf,elementClass:kt,react:D,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"}),Kf=jf,Gf=F`
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
`,xe=class extends L{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"footer"),this.localize=new Z(this),this.modal=new Dc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Mi(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Fi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=nt(this,"dialog.denyClose",{dir:this.localize.dir()});mt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Mi(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([yt(this.dialog),yt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=nt(this,"dialog.show",{dir:this.localize.dir()}),s=nt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([mt(this.panel,e.keyframes,e.options),mt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([yt(this.dialog),yt(this.overlay)]);const t=nt(this,"dialog.hide",{dir:this.localize.dir()}),e=nt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([mt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),mt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Fi(this);const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Mt(this,"sl-after-hide")}render(){return $`
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
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:"title")}
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
    `}};xe.styles=[B,Gf];xe.dependencies={"sl-icon-button":_t};n([T(".dialog")],xe.prototype,"dialog",2);n([T(".dialog__panel")],xe.prototype,"panel",2);n([T(".dialog__overlay")],xe.prototype,"overlay",2);n([u({type:Boolean,reflect:!0})],xe.prototype,"open",2);n([u({reflect:!0})],xe.prototype,"label",2);n([u({attribute:"no-header",type:Boolean,reflect:!0})],xe.prototype,"noHeader",2);n([A("open",{waitUntilFirstUpdate:!0})],xe.prototype,"handleOpenChange",1);it("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});it("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});it("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});it("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});it("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Qf="sl-dialog";xe.define("sl-dialog");var Yf=M({tagName:Qf,elementClass:xe,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),dr=Yf,Xf=F`
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
`,ce=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await yt(this.body);const{keyframes:e,options:s}=nt(this,"details.show",{dir:this.localize.dir()});await mt(this.body,Dr(e,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await yt(this.body);const{keyframes:e,options:s}=nt(this,"details.hide",{dir:this.localize.dir()});await mt(this.body,Dr(e,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Mt(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return $`
      <details
        part="base"
        class=${H({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};ce.styles=[B,Xf];ce.dependencies={"sl-icon":rt};n([T(".details")],ce.prototype,"details",2);n([T(".details__header")],ce.prototype,"header",2);n([T(".details__body")],ce.prototype,"body",2);n([T(".details__expand-icon-slot")],ce.prototype,"expandIconSlot",2);n([u({type:Boolean,reflect:!0})],ce.prototype,"open",2);n([u()],ce.prototype,"summary",2);n([u({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);n([A("open",{waitUntilFirstUpdate:!0})],ce.prototype,"handleOpenChange",1);it("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});it("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var Zf="sl-details";ce.define("sl-details");M({tagName:Zf,elementClass:ce,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var Jf=F`
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
`,de=class extends L{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:s}=this.animatedImage;t.width=e,t.height=s,t.getContext("2d").drawImage(this.animatedImage,0,0,e,s),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return $`
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
    `}};de.styles=[B,Jf];de.dependencies={"sl-icon":rt};n([T(".animated-image__animated")],de.prototype,"animatedImage",2);n([V()],de.prototype,"frozenFrame",2);n([V()],de.prototype,"isLoaded",2);n([u()],de.prototype,"src",2);n([u()],de.prototype,"alt",2);n([u({type:Boolean,reflect:!0})],de.prototype,"play",2);n([A("play",{waitUntilFirstUpdate:!0})],de.prototype,"handlePlayChange",1);n([A("src")],de.prototype,"handleSrcChange",1);var tm="sl-animated-image";de.define("sl-animated-image");M({tagName:tm,elementClass:de,react:D,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});var em=F`
  :host {
    display: contents;
  }
`;const sm=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],im=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],rm=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],om=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],am=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],nm=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],lm=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],cm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],dm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],hm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],um=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],pm=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],fm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],mm=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],gm=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],bm=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],vm=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],ym=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],_m=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],wm=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],xm=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],km=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Cm=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Sm=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],$m=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Am=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Em=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],zm=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Tm=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Rm=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Pm=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Om=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Im=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Nm=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Lm=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Dm=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Mm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Fm=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Vm=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hm=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Bm=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Um=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qm=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wm=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jm=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Km=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Gm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Qm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Ym=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Xm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Zm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Jm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],tg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],eg=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],sg=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],ig=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],rg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],og=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],ag=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ng=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],lg=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],cg=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],dg=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],hg=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ug=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],pg=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],fg=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],mg=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],gg=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],bg=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],vg=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],yg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],_g=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],wg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],xg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],kg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Cg=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sg=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],$g=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ag=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Eg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],zg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Tg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Rg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Pg=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Og=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Ig=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ng=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Lg=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Dg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Mg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Fg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Vg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Hg=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Bg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ug=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],qg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Wg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Hc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},jg=Object.freeze(Object.defineProperty({__proto__:null,backInDown:mm,backInLeft:gm,backInRight:bm,backInUp:vm,backOutDown:ym,backOutLeft:_m,backOutRight:wm,backOutUp:xm,bounce:sm,bounceIn:km,bounceInDown:Cm,bounceInLeft:Sm,bounceInRight:$m,bounceInUp:Am,bounceOut:Em,bounceOutDown:zm,bounceOutLeft:Tm,bounceOutRight:Rm,bounceOutUp:Pm,easings:Hc,fadeIn:Om,fadeInBottomLeft:Im,fadeInBottomRight:Nm,fadeInDown:Lm,fadeInDownBig:Dm,fadeInLeft:Mm,fadeInLeftBig:Fm,fadeInRight:Vm,fadeInRightBig:Hm,fadeInTopLeft:Bm,fadeInTopRight:Um,fadeInUp:qm,fadeInUpBig:Wm,fadeOut:jm,fadeOutBottomLeft:Km,fadeOutBottomRight:Gm,fadeOutDown:Qm,fadeOutDownBig:Ym,fadeOutLeft:Xm,fadeOutLeftBig:Zm,fadeOutRight:Jm,fadeOutRightBig:tg,fadeOutTopLeft:eg,fadeOutTopRight:sg,fadeOutUp:ig,fadeOutUpBig:rg,flash:im,flip:og,flipInX:ag,flipInY:ng,flipOutX:lg,flipOutY:cg,headShake:rm,heartBeat:om,hinge:Pg,jackInTheBox:Og,jello:am,lightSpeedInLeft:dg,lightSpeedInRight:hg,lightSpeedOutLeft:ug,lightSpeedOutRight:pg,pulse:nm,rollIn:Ig,rollOut:Ng,rotateIn:fg,rotateInDownLeft:mg,rotateInDownRight:gg,rotateInUpLeft:bg,rotateInUpRight:vg,rotateOut:yg,rotateOutDownLeft:_g,rotateOutDownRight:wg,rotateOutUpLeft:xg,rotateOutUpRight:kg,rubberBand:lm,shake:cm,shakeX:dm,shakeY:hm,slideInDown:Cg,slideInLeft:Sg,slideInRight:$g,slideInUp:Ag,slideOutDown:Eg,slideOutLeft:zg,slideOutRight:Tg,slideOutUp:Rg,swing:um,tada:pm,wobble:fm,zoomIn:Lg,zoomInDown:Dg,zoomInLeft:Mg,zoomInRight:Fg,zoomInUp:Vg,zoomOut:Hg,zoomOutDown:Bg,zoomOutLeft:Ug,zoomOutRight:qg,zoomOutUp:Wg},Symbol.toStringTag,{value:"Module"}));var Ct=class extends L{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const s=(t=Hc[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:jg[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!i?!1:(this.destroyAnimation(),this.animation=o.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ct.styles=[B,em];n([Hd("slot")],Ct.prototype,"defaultSlot",2);n([u()],Ct.prototype,"name",2);n([u({type:Boolean,reflect:!0})],Ct.prototype,"play",2);n([u({type:Number})],Ct.prototype,"delay",2);n([u()],Ct.prototype,"direction",2);n([u({type:Number})],Ct.prototype,"duration",2);n([u()],Ct.prototype,"easing",2);n([u({attribute:"end-delay",type:Number})],Ct.prototype,"endDelay",2);n([u()],Ct.prototype,"fill",2);n([u({type:Number})],Ct.prototype,"iterations",2);n([u({attribute:"iteration-start",type:Number})],Ct.prototype,"iterationStart",2);n([u({attribute:!1})],Ct.prototype,"keyframes",2);n([u({attribute:"playback-rate",type:Number})],Ct.prototype,"playbackRate",2);n([A(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ct.prototype,"handleAnimationChange",1);n([A("play")],Ct.prototype,"handlePlayChange",1);n([A("playbackRate")],Ct.prototype,"handlePlaybackRateChange",1);var Kg="sl-animation";Ct.define("sl-animation");M({tagName:Kg,elementClass:Ct,react:D,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var Gg=F`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Fs=class extends L{constructor(){super(...arguments),this.localize=new Z(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,s)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),s===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),$`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Fs.styles=[B,Gg];Fs.dependencies={"sl-icon":rt};n([T("slot")],Fs.prototype,"defaultSlot",2);n([T('slot[name="separator"]')],Fs.prototype,"separatorSlot",2);n([u()],Fs.prototype,"label",2);var Qg="sl-breadcrumb";Fs.define("sl-breadcrumb");M({tagName:Qg,elementClass:Fs,react:D,events:{},displayName:"SlBreadcrumb"});var Yg=F`
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
`,wi=class extends L{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <span
        part="base"
        class=${H({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};wi.styles=[B,Yg];n([u({reflect:!0})],wi.prototype,"variant",2);n([u({type:Boolean,reflect:!0})],wi.prototype,"pill",2);n([u({type:Boolean,reflect:!0})],wi.prototype,"pulse",2);var Xg="sl-badge";wi.define("sl-badge");M({tagName:Xg,elementClass:wi,react:D,events:{},displayName:"SlBadge"});var Zg=F`
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
`,ke=class extends L{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=$`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=$``;return this.initials?e=$`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=$`
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
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};ke.styles=[B,Zg];ke.dependencies={"sl-icon":rt};n([V()],ke.prototype,"hasError",2);n([u()],ke.prototype,"image",2);n([u()],ke.prototype,"label",2);n([u()],ke.prototype,"initials",2);n([u()],ke.prototype,"loading",2);n([u({reflect:!0})],ke.prototype,"shape",2);n([A("image")],ke.prototype,"handleImageChange",1);var Jg="sl-avatar";ke.define("sl-avatar");var tb=M({tagName:Jg,elementClass:ke,react:D,events:{onSlError:"sl-error"},displayName:"SlAvatar"}),qn=tb,eb=F`
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
`,We=class extends L{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return $`
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
                target="${N(this.target?this.target:void 0)}"
                rel=${N(this.target?this.rel:void 0)}
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
    `}};We.styles=[B,eb];n([T("slot:not([name])")],We.prototype,"defaultSlot",2);n([V()],We.prototype,"renderType",2);n([u()],We.prototype,"href",2);n([u()],We.prototype,"target",2);n([u()],We.prototype,"rel",2);n([A("href",{waitUntilFirstUpdate:!0})],We.prototype,"hrefChanged",1);var sb="sl-breadcrumb-item";We.define("sl-breadcrumb-item");M({tagName:sb,elementClass:We,react:D,events:{},displayName:"SlBreadcrumbItem"});var ib="sl-button-group";us.define("sl-button-group");M({tagName:ib,elementClass:us,react:D,events:{},displayName:"SlButtonGroup"});var rb="sl-button";et.define("sl-button");var ob=M({tagName:rb,elementClass:et,react:D,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Jr=ob,ab=F`
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
`,ee=class ms extends L{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"icon","suffix"),this.localize=new Z(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,s="100%",i="0";this.countdownAnimation=e.animate([{width:s},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await yt(this.base),this.base.hidden=!1;const{keyframes:e,options:s}=nt(this,"alert.show",{dir:this.localize.dir()});await mt(this.base,e,s),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await yt(this.base);const{keyframes:e,options:s}=nt(this,"alert.hide",{dir:this.localize.dir()});await mt(this.base,e,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Mt(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),ms.toastStack.parentElement===null&&document.body.append(ms.toastStack),ms.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ms.toastStack.removeChild(this),e(),ms.toastStack.querySelector("sl-alert")===null&&ms.toastStack.remove()},{once:!0})})}render(){return $`
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
    `}};ee.styles=[B,ab];ee.dependencies={"sl-icon-button":_t};n([T('[part~="base"]')],ee.prototype,"base",2);n([T(".alert__countdown-elapsed")],ee.prototype,"countdownElement",2);n([u({type:Boolean,reflect:!0})],ee.prototype,"open",2);n([u({type:Boolean,reflect:!0})],ee.prototype,"closable",2);n([u({reflect:!0})],ee.prototype,"variant",2);n([u({type:Number})],ee.prototype,"duration",2);n([u({type:String,reflect:!0})],ee.prototype,"countdown",2);n([V()],ee.prototype,"remainingTime",2);n([A("open",{waitUntilFirstUpdate:!0})],ee.prototype,"handleOpenChange",1);n([A("duration")],ee.prototype,"handleDurationChange",1);var Bc=ee;it("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});it("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var nb="sl-alert";Bc.define("sl-alert");var lb=M({tagName:nb,elementClass:Bc,react:D,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),cb=lb,db=(t,e)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...i)},e)}},Wn=(t,e,s)=>{const i=t[e];t[e]=function(...r){i.call(this,...r),s.call(this,i,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,s=new WeakMap,i=o=>{for(const a of o.changedTouches)e.add(a.identifier)},r=o=>{for(const a of o.changedTouches)e.delete(a.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),Wn(EventTarget.prototype,"addEventListener",function(o,a){if(a!=="scrollend")return;const l=db(()=>{e.size?l():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",l,{passive:!0}),s.set(this,l)}),Wn(EventTarget.prototype,"removeEventListener",function(o,a){if(a!=="scrollend")return;const l=s.get(this);l&&o.call(this,"scroll",l,{passive:!0})})}})();const jn={root:{alignItems:"center",display:"flex",height:"2em",justifyContent:"start"},menu:{height:"8em"}};function ls({variant:t,selected:e,available:s=void 0,setSelected:i=void 0,viewMode:r=!1}){function o(l){i(e.slice(0,l).concat(e.slice(l+1)))}function a(l){i(e.concat([l]))}return w("div",{style:jn.root,children:[e.map((l,c)=>w(Vh,{variant:t,removable:!r,size:"small",onSlRemove:()=>o(c),children:l},c)),!r&&e.length<s.length&&w(Fc,{children:[w(Bt,{slot:"trigger",name:"plus"}),w(Ic,{style:jn.menu,onSlSelect:l=>a(l.detail.item.value),children:s.filter(l=>!e.includes(l)).map((l,c)=>w(Ri,{value:l,children:l}))})]})]})}const Kn=t=>{let e;const s=new Set,i=(h,f)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const p=e;e=f??(typeof d!="object"||d===null)?d:Object.assign({},e,d),s.forEach(m=>m(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:h=>(s.add(h),()=>s.delete(h))},c=e=t(i,r,l);return l},hb=t=>t?Kn(t):Kn,ub=t=>t;function pb(t,e=ub){const s=Oo.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return Oo.useDebugValue(s),s}const Gn=t=>{const e=hb(t),s=i=>pb(e,i);return Object.assign(s,e),s},fb=t=>t?Gn(t):Gn;var vo={},Qn;function mb(){return Qn||(Qn=1,function(t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});function e(r,o){if(Object.is(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;if(r instanceof Map&&o instanceof Map){if(r.size!==o.size)return!1;for(const[l,c]of r)if(!Object.is(c,o.get(l)))return!1;return!0}if(r instanceof Set&&o instanceof Set){if(r.size!==o.size)return!1;for(const l of r)if(!o.has(l))return!1;return!0}const a=Object.keys(r);if(a.length!==Object.keys(o).length)return!1;for(const l of a)if(!Object.prototype.hasOwnProperty.call(o,l)||!Object.is(r[l],o[l]))return!1;return!0}const i=(r,o)=>a=>{const l=new Set;return(c,h,f)=>{const d=(o==null?void 0:o.equalityFn)??e;if(o!=null&&o.keys){const y=o.keys;for(const S of y)l.add(S)}const p=(o==null?void 0:o.disableProxy)!==!0||!!(o!=null&&o.keys),m=(o==null?void 0:o.disableProxy)!==!0&&!(o!=null&&o.keys),g=y=>{const S=new Proxy({...y},{get:(k,E)=>(l.add(E),y[E])}),_=r(m?S:{...y});for(const k of Object.keys(_))d(_[k],y[k])&&(_[k]=y[k]);return{...y,..._}},v=(y,S,..._)=>{c(k=>{const E=typeof y=="object"?y:y(k);return p&&l.size!==0&&!Object.keys(E).some(O=>l.has(O))?{...k,...E}:g({...k,...E})},S,..._)},x=f;x.setState=v;const C=a(v,h,x);return Object.assign({},C,r(C))}};t.createComputed=i}(vo)),vo}var gb=mb(),hr=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Os=typeof window>"u"||"Deno"in globalThis;function re(){}function bb(t,e){return typeof t=="function"?t(e):t}function jo(t){return typeof t=="number"&&t>=0&&t!==1/0}function Uc(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Ws(t,e){return typeof t=="function"?t(e):t}function me(t,e){return typeof t=="function"?t(e):t}function Yn(t,e){const{type:s="all",exact:i,fetchStatus:r,predicate:o,queryKey:a,stale:l}=t;if(a){if(i){if(e.queryHash!==Ma(a,e.options))return!1}else if(!Gi(e.queryKey,a))return!1}if(s!=="all"){const c=e.isActive();if(s==="active"&&!c||s==="inactive"&&c)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||r&&r!==e.state.fetchStatus||o&&!o(e))}function Xn(t,e){const{exact:s,status:i,predicate:r,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(s){if(Ki(e.options.mutationKey)!==Ki(o))return!1}else if(!Gi(e.options.mutationKey,o))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function Ma(t,e){return((e==null?void 0:e.queryKeyHashFn)||Ki)(t)}function Ki(t){return JSON.stringify(t,(e,s)=>Go(s)?Object.keys(s).sort().reduce((i,r)=>(i[r]=s[r],i),{}):s)}function Gi(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(s=>Gi(t[s],e[s])):!1}function qc(t,e){if(t===e)return t;const s=Zn(t)&&Zn(e);if(s||Go(t)&&Go(e)){const i=s?t:Object.keys(t),r=i.length,o=s?e:Object.keys(e),a=o.length,l=s?[]:{};let c=0;for(let h=0;h<a;h++){const f=s?h:o[h];(!s&&i.includes(f)||s)&&t[f]===void 0&&e[f]===void 0?(l[f]=void 0,c++):(l[f]=qc(t[f],e[f]),l[f]===t[f]&&t[f]!==void 0&&c++)}return r===a&&c===r?t:l}return e}function Ko(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(t[s]!==e[s])return!1;return!0}function Zn(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Go(t){if(!Jn(t))return!1;const e=t.constructor;if(e===void 0)return!0;const s=e.prototype;return!(!Jn(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Jn(t){return Object.prototype.toString.call(t)==="[object Object]"}function vb(t){return new Promise(e=>{setTimeout(e,t)})}function Qo(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?qc(t,e):e}function yb(t,e,s=0){const i=[...t,e];return s&&i.length>s?i.slice(1):i}function _b(t,e,s=0){const i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var Fa=Symbol();function Wc(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Fa?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ws,Ye,js,hl,wb=(hl=class extends hr{constructor(){super();U(this,ws);U(this,Ye);U(this,js);P(this,js,e=>{if(!Os&&window.addEventListener){const s=()=>e();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){b(this,Ye)||this.setEventListener(b(this,js))}onUnsubscribe(){var e;this.hasListeners()||((e=b(this,Ye))==null||e.call(this),P(this,Ye,void 0))}setEventListener(e){var s;P(this,js,e),(s=b(this,Ye))==null||s.call(this),P(this,Ye,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){b(this,ws)!==e&&(P(this,ws,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(s=>{s(e)})}isFocused(){var e;return typeof b(this,ws)=="boolean"?b(this,ws):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ws=new WeakMap,Ye=new WeakMap,js=new WeakMap,hl),Va=new wb,Ks,Xe,Gs,ul,xb=(ul=class extends hr{constructor(){super();U(this,Ks,!0);U(this,Xe);U(this,Gs);P(this,Gs,e=>{if(!Os&&window.addEventListener){const s=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}}})}onSubscribe(){b(this,Xe)||this.setEventListener(b(this,Gs))}onUnsubscribe(){var e;this.hasListeners()||((e=b(this,Xe))==null||e.call(this),P(this,Xe,void 0))}setEventListener(e){var s;P(this,Gs,e),(s=b(this,Xe))==null||s.call(this),P(this,Xe,e(this.setOnline.bind(this)))}setOnline(e){b(this,Ks)!==e&&(P(this,Ks,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return b(this,Ks)}},Ks=new WeakMap,Xe=new WeakMap,Gs=new WeakMap,ul),Fr=new xb;function Yo(){let t,e;const s=new Promise((r,o)=>{t=r,e=o});s.status="pending",s.catch(()=>{});function i(r){Object.assign(s,r),delete s.resolve,delete s.reject}return s.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},s.reject=r=>{i({status:"rejected",reason:r}),e(r)},s}function kb(t){return Math.min(1e3*2**t,3e4)}function jc(t){return(t??"online")==="online"?Fr.isOnline():!0}var Kc=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function yo(t){return t instanceof Kc}function Gc(t){let e=!1,s=0,i=!1,r;const o=Yo(),a=v=>{var x;i||(p(new Kc(v)),(x=t.abort)==null||x.call(t))},l=()=>{e=!0},c=()=>{e=!1},h=()=>Va.isFocused()&&(t.networkMode==="always"||Fr.isOnline())&&t.canRun(),f=()=>jc(t.networkMode)&&t.canRun(),d=v=>{var x;i||(i=!0,(x=t.onSuccess)==null||x.call(t,v),r==null||r(),o.resolve(v))},p=v=>{var x;i||(i=!0,(x=t.onError)==null||x.call(t,v),r==null||r(),o.reject(v))},m=()=>new Promise(v=>{var x;r=C=>{(i||h())&&v(C)},(x=t.onPause)==null||x.call(t)}).then(()=>{var v;r=void 0,i||(v=t.onContinue)==null||v.call(t)}),g=()=>{if(i)return;let v;const x=s===0?t.initialPromise:void 0;try{v=x??t.fn()}catch(C){v=Promise.reject(C)}Promise.resolve(v).then(d).catch(C=>{var E;if(i)return;const y=t.retry??(Os?0:3),S=t.retryDelay??kb,_=typeof S=="function"?S(s,C):S,k=y===!0||typeof y=="number"&&s<y||typeof y=="function"&&y(s,C);if(e||!k){p(C);return}s++,(E=t.onFail)==null||E.call(t,s,C),vb(_).then(()=>h()?void 0:m()).then(()=>{e?p(C):g()})})};return{promise:o,cancel:a,continue:()=>(r==null||r(),o),cancelRetry:l,continueRetry:c,canStart:f,start:()=>(f()?g():m().then(g),o)}}var Cb=t=>setTimeout(t,0);function Sb(){let t=[],e=0,s=l=>{l()},i=l=>{l()},r=Cb;const o=l=>{e?t.push(l):r(()=>{s(l)})},a=()=>{const l=t;t=[],l.length&&r(()=>{i(()=>{l.forEach(c=>{s(c)})})})};return{batch:l=>{let c;e++;try{c=l()}finally{e--,e||a()}return c},batchCalls:l=>(...c)=>{o(()=>{l(...c)})},schedule:o,setNotifyFunction:l=>{s=l},setBatchNotifyFunction:l=>{i=l},setScheduler:l=>{r=l}}}var zt=Sb(),xs,pl,Qc=(pl=class{constructor(){U(this,xs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),jo(this.gcTime)&&P(this,xs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Os?1/0:5*60*1e3))}clearGcTimeout(){b(this,xs)&&(clearTimeout(b(this,xs)),P(this,xs,void 0))}},xs=new WeakMap,pl),Qs,Ys,ie,ks,It,Qi,Cs,pe,Le,fl,$b=(fl=class extends Qc{constructor(e){super();U(this,pe);U(this,Qs);U(this,Ys);U(this,ie);U(this,ks);U(this,It);U(this,Qi);U(this,Cs);P(this,Cs,!1),P(this,Qi,e.defaultOptions),this.setOptions(e.options),this.observers=[],P(this,ks,e.client),P(this,ie,b(this,ks).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,P(this,Qs,Ab(this.options)),this.state=e.state??b(this,Qs),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=b(this,It))==null?void 0:e.promise}setOptions(e){this.options={...b(this,Qi),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&b(this,ie).remove(this)}setData(e,s){const i=Qo(this.state.data,e,this.options);return Q(this,pe,Le).call(this,{data:i,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),i}setState(e,s){Q(this,pe,Le).call(this,{type:"setState",state:e,setStateOptions:s})}cancel(e){var i,r;const s=(i=b(this,It))==null?void 0:i.promise;return(r=b(this,It))==null||r.cancel(e),s?s.then(re).catch(re):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(b(this,Qs))}isActive(){return this.observers.some(e=>me(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Fa||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!Uc(this.state.dataUpdatedAt,e)}onFocus(){var s;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(s=b(this,It))==null||s.continue()}onOnline(){var s;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(s=b(this,It))==null||s.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),b(this,ie).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(s=>s!==e),this.observers.length||(b(this,It)&&(b(this,Cs)?b(this,It).cancel({revert:!0}):b(this,It).cancelRetry()),this.scheduleGc()),b(this,ie).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Q(this,pe,Le).call(this,{type:"invalidate"})}fetch(e,s){var c,h,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(b(this,It))return b(this,It).continueRetry(),b(this,It).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(p=>p.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,r=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(P(this,Cs,!0),i.signal)})},o=()=>{const d=Wc(this.options,s),p={client:b(this,ks),queryKey:this.queryKey,meta:this.meta};return r(p),P(this,Cs,!1),this.options.persister?this.options.persister(d,p,this):d(p)},a={fetchOptions:s,options:this.options,queryKey:this.queryKey,client:b(this,ks),state:this.state,fetchFn:o};r(a),(c=this.options.behavior)==null||c.onFetch(a,this),P(this,Ys,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=a.fetchOptions)==null?void 0:h.meta))&&Q(this,pe,Le).call(this,{type:"fetch",meta:(f=a.fetchOptions)==null?void 0:f.meta});const l=d=>{var p,m,g,v;yo(d)&&d.silent||Q(this,pe,Le).call(this,{type:"error",error:d}),yo(d)||((m=(p=b(this,ie).config).onError)==null||m.call(p,d,this),(v=(g=b(this,ie).config).onSettled)==null||v.call(g,this.state.data,d,this)),this.scheduleGc()};return P(this,It,Gc({initialPromise:s==null?void 0:s.initialPromise,fn:a.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var p,m,g,v;if(d===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(x){l(x);return}(m=(p=b(this,ie).config).onSuccess)==null||m.call(p,d,this),(v=(g=b(this,ie).config).onSettled)==null||v.call(g,d,this.state.error,this),this.scheduleGc()},onError:l,onFail:(d,p)=>{Q(this,pe,Le).call(this,{type:"failed",failureCount:d,error:p})},onPause:()=>{Q(this,pe,Le).call(this,{type:"pause"})},onContinue:()=>{Q(this,pe,Le).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),b(this,It).start()}},Qs=new WeakMap,Ys=new WeakMap,ie=new WeakMap,ks=new WeakMap,It=new WeakMap,Qi=new WeakMap,Cs=new WeakMap,pe=new WeakSet,Le=function(e){const s=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Yc(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return yo(r)&&r.revert&&b(this,Ys)?{...b(this,Ys),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=s(this.state),zt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),b(this,ie).notify({query:this,type:"updated",action:e})})},fl);function Yc(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:jc(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Ab(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,s=e!==void 0,i=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var $e,ml,Eb=(ml=class extends hr{constructor(e={}){super();U(this,$e);this.config=e,P(this,$e,new Map)}build(e,s,i){const r=s.queryKey,o=s.queryHash??Ma(r,s);let a=this.get(o);return a||(a=new $b({client:e,queryKey:r,queryHash:o,options:e.defaultQueryOptions(s),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){b(this,$e).has(e.queryHash)||(b(this,$e).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const s=b(this,$e).get(e.queryHash);s&&(e.destroy(),s===e&&b(this,$e).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){zt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return b(this,$e).get(e)}getAll(){return[...b(this,$e).values()]}find(e){const s={exact:!0,...e};return this.getAll().find(i=>Yn(s,i))}findAll(e={}){const s=this.getAll();return Object.keys(e).length>0?s.filter(i=>Yn(e,i)):s}notify(e){zt.batch(()=>{this.listeners.forEach(s=>{s(e)})})}onFocus(){zt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){zt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},$e=new WeakMap,ml),Ae,Lt,Ss,Ee,Ge,gl,zb=(gl=class extends Qc{constructor(e){super();U(this,Ee);U(this,Ae);U(this,Lt);U(this,Ss);this.mutationId=e.mutationId,P(this,Lt,e.mutationCache),P(this,Ae,[]),this.state=e.state||Tb(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){b(this,Ae).includes(e)||(b(this,Ae).push(e),this.clearGcTimeout(),b(this,Lt).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){P(this,Ae,b(this,Ae).filter(s=>s!==e)),this.scheduleGc(),b(this,Lt).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){b(this,Ae).length||(this.state.status==="pending"?this.scheduleGc():b(this,Lt).remove(this))}continue(){var e;return((e=b(this,Ss))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,h,f,d,p,m,g,v,x,C,y,S,_,k,E,O;P(this,Ss,Gc({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(I,z)=>{Q(this,Ee,Ge).call(this,{type:"failed",failureCount:I,error:z})},onPause:()=>{Q(this,Ee,Ge).call(this,{type:"pause"})},onContinue:()=>{Q(this,Ee,Ge).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>b(this,Lt).canRun(this)}));const s=this.state.status==="pending",i=!b(this,Ss).canStart();try{if(!s){Q(this,Ee,Ge).call(this,{type:"pending",variables:e,isPaused:i}),await((o=(r=b(this,Lt).config).onMutate)==null?void 0:o.call(r,e,this));const z=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));z!==this.state.context&&Q(this,Ee,Ge).call(this,{type:"pending",context:z,variables:e,isPaused:i})}const I=await b(this,Ss).start();return await((h=(c=b(this,Lt).config).onSuccess)==null?void 0:h.call(c,I,e,this.state.context,this)),await((d=(f=this.options).onSuccess)==null?void 0:d.call(f,I,e,this.state.context)),await((m=(p=b(this,Lt).config).onSettled)==null?void 0:m.call(p,I,null,this.state.variables,this.state.context,this)),await((v=(g=this.options).onSettled)==null?void 0:v.call(g,I,null,e,this.state.context)),Q(this,Ee,Ge).call(this,{type:"success",data:I}),I}catch(I){try{throw await((C=(x=b(this,Lt).config).onError)==null?void 0:C.call(x,I,e,this.state.context,this)),await((S=(y=this.options).onError)==null?void 0:S.call(y,I,e,this.state.context)),await((k=(_=b(this,Lt).config).onSettled)==null?void 0:k.call(_,void 0,I,this.state.variables,this.state.context,this)),await((O=(E=this.options).onSettled)==null?void 0:O.call(E,void 0,I,e,this.state.context)),I}finally{Q(this,Ee,Ge).call(this,{type:"error",error:I})}}finally{b(this,Lt).runNext(this)}}},Ae=new WeakMap,Lt=new WeakMap,Ss=new WeakMap,Ee=new WeakSet,Ge=function(e){const s=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=s(this.state),zt.batch(()=>{b(this,Ae).forEach(i=>{i.onMutationUpdate(e)}),b(this,Lt).notify({mutation:this,type:"updated",action:e})})},gl);function Tb(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var De,fe,Yi,bl,Rb=(bl=class extends hr{constructor(e={}){super();U(this,De);U(this,fe);U(this,Yi);this.config=e,P(this,De,new Set),P(this,fe,new Map),P(this,Yi,0)}build(e,s,i){const r=new zb({mutationCache:this,mutationId:++fr(this,Yi)._,options:e.defaultMutationOptions(s),state:i});return this.add(r),r}add(e){b(this,De).add(e);const s=kr(e);if(typeof s=="string"){const i=b(this,fe).get(s);i?i.push(e):b(this,fe).set(s,[e])}this.notify({type:"added",mutation:e})}remove(e){if(b(this,De).delete(e)){const s=kr(e);if(typeof s=="string"){const i=b(this,fe).get(s);if(i)if(i.length>1){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}else i[0]===e&&b(this,fe).delete(s)}}this.notify({type:"removed",mutation:e})}canRun(e){const s=kr(e);if(typeof s=="string"){const i=b(this,fe).get(s),r=i==null?void 0:i.find(o=>o.state.status==="pending");return!r||r===e}else return!0}runNext(e){var i;const s=kr(e);if(typeof s=="string"){const r=(i=b(this,fe).get(s))==null?void 0:i.find(o=>o!==e&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){zt.batch(()=>{b(this,De).forEach(e=>{this.notify({type:"removed",mutation:e})}),b(this,De).clear(),b(this,fe).clear()})}getAll(){return Array.from(b(this,De))}find(e){const s={exact:!0,...e};return this.getAll().find(i=>Xn(s,i))}findAll(e={}){return this.getAll().filter(s=>Xn(e,s))}notify(e){zt.batch(()=>{this.listeners.forEach(s=>{s(e)})})}resumePausedMutations(){const e=this.getAll().filter(s=>s.state.isPaused);return zt.batch(()=>Promise.all(e.map(s=>s.continue().catch(re))))}},De=new WeakMap,fe=new WeakMap,Yi=new WeakMap,bl);function kr(t){var e;return(e=t.options.scope)==null?void 0:e.id}function tl(t){return{onFetch:(e,s)=>{var f,d,p,m,g;const i=e.options,r=(p=(d=(f=e.fetchOptions)==null?void 0:f.meta)==null?void 0:d.fetchMore)==null?void 0:p.direction,o=((m=e.state.data)==null?void 0:m.pages)||[],a=((g=e.state.data)==null?void 0:g.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const h=async()=>{let v=!1;const x=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(e.signal.aborted?v=!0:e.signal.addEventListener("abort",()=>{v=!0}),e.signal)})},C=Wc(e.options,e.fetchOptions),y=async(S,_,k)=>{if(v)return Promise.reject();if(_==null&&S.pages.length)return Promise.resolve(S);const E={client:e.client,queryKey:e.queryKey,pageParam:_,direction:k?"backward":"forward",meta:e.options.meta};x(E);const O=await C(E),{maxPages:I}=e.options,z=k?_b:yb;return{pages:z(S.pages,O,I),pageParams:z(S.pageParams,_,I)}};if(r&&o.length){const S=r==="backward",_=S?Pb:el,k={pages:o,pageParams:a},E=_(i,k);l=await y(k,E,S)}else{const S=t??o.length;do{const _=c===0?a[0]??i.initialPageParam:el(i,l);if(c>0&&_==null)break;l=await y(l,_),c++}while(c<S)}return l};e.options.persister?e.fetchFn=()=>{var v,x;return(x=(v=e.options).persister)==null?void 0:x.call(v,h,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s)}:e.fetchFn=h}}}function el(t,{pages:e,pageParams:s}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}function Pb(t,{pages:e,pageParams:s}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,s[0],s):void 0}var ft,Ze,Je,Xs,Zs,ts,Js,ti,vl,Ob=(vl=class{constructor(t={}){U(this,ft);U(this,Ze);U(this,Je);U(this,Xs);U(this,Zs);U(this,ts);U(this,Js);U(this,ti);P(this,ft,t.queryCache||new Eb),P(this,Ze,t.mutationCache||new Rb),P(this,Je,t.defaultOptions||{}),P(this,Xs,new Map),P(this,Zs,new Map),P(this,ts,0)}mount(){fr(this,ts)._++,b(this,ts)===1&&(P(this,Js,Va.subscribe(async t=>{t&&(await this.resumePausedMutations(),b(this,ft).onFocus())})),P(this,ti,Fr.subscribe(async t=>{t&&(await this.resumePausedMutations(),b(this,ft).onOnline())})))}unmount(){var t,e;fr(this,ts)._--,b(this,ts)===0&&((t=b(this,Js))==null||t.call(this),P(this,Js,void 0),(e=b(this,ti))==null||e.call(this),P(this,ti,void 0))}isFetching(t){return b(this,ft).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return b(this,Ze).findAll({...t,status:"pending"}).length}getQueryData(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=b(this,ft).get(e.queryHash))==null?void 0:s.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),s=b(this,ft).build(this,e),i=s.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime(Ws(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return b(this,ft).findAll(t).map(({queryKey:e,state:s})=>{const i=s.data;return[e,i]})}setQueryData(t,e,s){const i=this.defaultQueryOptions({queryKey:t}),r=b(this,ft).get(i.queryHash),o=r==null?void 0:r.state.data,a=bb(e,o);if(a!==void 0)return b(this,ft).build(this,i).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return zt.batch(()=>b(this,ft).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,s)]))}getQueryState(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=b(this,ft).get(e.queryHash))==null?void 0:s.state}removeQueries(t){const e=b(this,ft);zt.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=b(this,ft);return zt.batch(()=>(s.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const s={revert:!0,...e},i=zt.batch(()=>b(this,ft).findAll(t).map(r=>r.cancel(s)));return Promise.all(i).then(re).catch(re)}invalidateQueries(t,e={}){return zt.batch(()=>(b(this,ft).findAll(t).forEach(s=>{s.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const s={...e,cancelRefetch:e.cancelRefetch??!0},i=zt.batch(()=>b(this,ft).findAll(t).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,s);return s.throwOnError||(o=o.catch(re)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(i).then(re)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const s=b(this,ft).build(this,e);return s.isStaleByTime(Ws(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(re).catch(re)}fetchInfiniteQuery(t){return t.behavior=tl(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(re).catch(re)}ensureInfiniteQueryData(t){return t.behavior=tl(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Fr.isOnline()?b(this,Ze).resumePausedMutations():Promise.resolve()}getQueryCache(){return b(this,ft)}getMutationCache(){return b(this,Ze)}getDefaultOptions(){return b(this,Je)}setDefaultOptions(t){P(this,Je,t)}setQueryDefaults(t,e){b(this,Xs).set(Ki(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...b(this,Xs).values()],s={};return e.forEach(i=>{Gi(t,i.queryKey)&&Object.assign(s,i.defaultOptions)}),s}setMutationDefaults(t,e){b(this,Zs).set(Ki(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...b(this,Zs).values()],s={};return e.forEach(i=>{Gi(t,i.mutationKey)&&Object.assign(s,i.defaultOptions)}),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...b(this,Je).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Ma(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Fa&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...b(this,Je).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){b(this,ft).clear(),b(this,Ze).clear()}},ft=new WeakMap,Ze=new WeakMap,Je=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,ts=new WeakMap,Js=new WeakMap,ti=new WeakMap,vl),Vt,Y,Xi,Dt,$s,ei,es,ze,Zi,si,ii,As,Es,ss,ri,st,Pi,Xo,Zo,Jo,ta,ea,sa,ia,Xc,yl,Ib=(yl=class extends hr{constructor(e,s){super();U(this,st);U(this,Vt);U(this,Y);U(this,Xi);U(this,Dt);U(this,$s);U(this,ei);U(this,es);U(this,ze);U(this,Zi);U(this,si);U(this,ii);U(this,As);U(this,Es);U(this,ss);U(this,ri,new Set);this.options=s,P(this,Vt,e),P(this,ze,null),P(this,es,Yo()),this.options.experimental_prefetchInRender||b(this,es).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(b(this,Y).addObserver(this),sl(b(this,Y),this.options)?Q(this,st,Pi).call(this):this.updateResult(),Q(this,st,ta).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ra(b(this,Y),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ra(b(this,Y),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Q(this,st,ea).call(this),Q(this,st,sa).call(this),b(this,Y).removeObserver(this)}setOptions(e){const s=this.options,i=b(this,Y);if(this.options=b(this,Vt).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof me(this.options.enabled,b(this,Y))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");Q(this,st,ia).call(this),b(this,Y).setOptions(this.options),s._defaulted&&!Ko(this.options,s)&&b(this,Vt).getQueryCache().notify({type:"observerOptionsUpdated",query:b(this,Y),observer:this});const r=this.hasListeners();r&&il(b(this,Y),i,this.options,s)&&Q(this,st,Pi).call(this),this.updateResult(),r&&(b(this,Y)!==i||me(this.options.enabled,b(this,Y))!==me(s.enabled,b(this,Y))||Ws(this.options.staleTime,b(this,Y))!==Ws(s.staleTime,b(this,Y)))&&Q(this,st,Xo).call(this);const o=Q(this,st,Zo).call(this);r&&(b(this,Y)!==i||me(this.options.enabled,b(this,Y))!==me(s.enabled,b(this,Y))||o!==b(this,ss))&&Q(this,st,Jo).call(this,o)}getOptimisticResult(e){const s=b(this,Vt).getQueryCache().build(b(this,Vt),e),i=this.createResult(s,e);return Lb(this,i)&&(P(this,Dt,i),P(this,ei,this.options),P(this,$s,b(this,Y).state)),i}getCurrentResult(){return b(this,Dt)}trackResult(e,s){const i={};return Object.keys(e).forEach(r=>{Object.defineProperty(i,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),s==null||s(r),e[r])})}),i}trackProp(e){b(this,ri).add(e)}getCurrentQuery(){return b(this,Y)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=b(this,Vt).defaultQueryOptions(e),i=b(this,Vt).getQueryCache().build(b(this,Vt),s);return i.fetch().then(()=>this.createResult(i,s))}fetch(e){return Q(this,st,Pi).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),b(this,Dt)))}createResult(e,s){var I;const i=b(this,Y),r=this.options,o=b(this,Dt),a=b(this,$s),l=b(this,ei),h=e!==i?e.state:b(this,Xi),{state:f}=e;let d={...f},p=!1,m;if(s._optimisticResults){const z=this.hasListeners(),R=!z&&sl(e,s),j=z&&il(e,i,s,r);(R||j)&&(d={...d,...Yc(f.data,e.options)}),s._optimisticResults==="isRestoring"&&(d.fetchStatus="idle")}let{error:g,errorUpdatedAt:v,status:x}=d;if(s.select&&d.data!==void 0)if(o&&d.data===(a==null?void 0:a.data)&&s.select===b(this,Zi))m=b(this,si);else try{P(this,Zi,s.select),m=s.select(d.data),m=Qo(o==null?void 0:o.data,m,s),P(this,si,m),P(this,ze,null)}catch(z){P(this,ze,z)}else m=d.data;if(s.placeholderData!==void 0&&m===void 0&&x==="pending"){let z;if(o!=null&&o.isPlaceholderData&&s.placeholderData===(l==null?void 0:l.placeholderData))z=o.data;else if(z=typeof s.placeholderData=="function"?s.placeholderData((I=b(this,ii))==null?void 0:I.state.data,b(this,ii)):s.placeholderData,s.select&&z!==void 0)try{z=s.select(z),P(this,ze,null)}catch(R){P(this,ze,R)}z!==void 0&&(x="success",m=Qo(o==null?void 0:o.data,z,s),p=!0)}b(this,ze)&&(g=b(this,ze),m=b(this,si),v=Date.now(),x="error");const C=d.fetchStatus==="fetching",y=x==="pending",S=x==="error",_=y&&C,k=m!==void 0,O={status:x,fetchStatus:d.fetchStatus,isPending:y,isSuccess:x==="success",isError:S,isInitialLoading:_,isLoading:_,data:m,dataUpdatedAt:d.dataUpdatedAt,error:g,errorUpdatedAt:v,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>h.dataUpdateCount||d.errorUpdateCount>h.errorUpdateCount,isFetching:C,isRefetching:C&&!y,isLoadingError:S&&!k,isPaused:d.fetchStatus==="paused",isPlaceholderData:p,isRefetchError:S&&k,isStale:Ha(e,s),refetch:this.refetch,promise:b(this,es)};if(this.options.experimental_prefetchInRender){const z=J=>{O.status==="error"?J.reject(O.error):O.data!==void 0&&J.resolve(O.data)},R=()=>{const J=P(this,es,O.promise=Yo());z(J)},j=b(this,es);switch(j.status){case"pending":e.queryHash===i.queryHash&&z(j);break;case"fulfilled":(O.status==="error"||O.data!==j.value)&&R();break;case"rejected":(O.status!=="error"||O.error!==j.reason)&&R();break}}return O}updateResult(){const e=b(this,Dt),s=this.createResult(b(this,Y),this.options);if(P(this,$s,b(this,Y).state),P(this,ei,this.options),b(this,$s).data!==void 0&&P(this,ii,b(this,Y)),Ko(s,e))return;P(this,Dt,s);const i=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,o=typeof r=="function"?r():r;if(o==="all"||!o&&!b(this,ri).size)return!0;const a=new Set(o??b(this,ri));return this.options.throwOnError&&a.add("error"),Object.keys(b(this,Dt)).some(l=>{const c=l;return b(this,Dt)[c]!==e[c]&&a.has(c)})};Q(this,st,Xc).call(this,{listeners:i()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Q(this,st,ta).call(this)}},Vt=new WeakMap,Y=new WeakMap,Xi=new WeakMap,Dt=new WeakMap,$s=new WeakMap,ei=new WeakMap,es=new WeakMap,ze=new WeakMap,Zi=new WeakMap,si=new WeakMap,ii=new WeakMap,As=new WeakMap,Es=new WeakMap,ss=new WeakMap,ri=new WeakMap,st=new WeakSet,Pi=function(e){Q(this,st,ia).call(this);let s=b(this,Y).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(re)),s},Xo=function(){Q(this,st,ea).call(this);const e=Ws(this.options.staleTime,b(this,Y));if(Os||b(this,Dt).isStale||!jo(e))return;const i=Uc(b(this,Dt).dataUpdatedAt,e)+1;P(this,As,setTimeout(()=>{b(this,Dt).isStale||this.updateResult()},i))},Zo=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(b(this,Y)):this.options.refetchInterval)??!1},Jo=function(e){Q(this,st,sa).call(this),P(this,ss,e),!(Os||me(this.options.enabled,b(this,Y))===!1||!jo(b(this,ss))||b(this,ss)===0)&&P(this,Es,setInterval(()=>{(this.options.refetchIntervalInBackground||Va.isFocused())&&Q(this,st,Pi).call(this)},b(this,ss)))},ta=function(){Q(this,st,Xo).call(this),Q(this,st,Jo).call(this,Q(this,st,Zo).call(this))},ea=function(){b(this,As)&&(clearTimeout(b(this,As)),P(this,As,void 0))},sa=function(){b(this,Es)&&(clearInterval(b(this,Es)),P(this,Es,void 0))},ia=function(){const e=b(this,Vt).getQueryCache().build(b(this,Vt),this.options);if(e===b(this,Y))return;const s=b(this,Y);P(this,Y,e),P(this,Xi,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},Xc=function(e){zt.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(b(this,Dt))}),b(this,Vt).getQueryCache().notify({query:b(this,Y),type:"observerResultsUpdated"})})},yl);function Nb(t,e){return me(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function sl(t,e){return Nb(t,e)||t.state.data!==void 0&&ra(t,e,e.refetchOnMount)}function ra(t,e,s){if(me(e.enabled,t)!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&Ha(t,e)}return!1}function il(t,e,s,i){return(t!==e||me(i.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&Ha(t,s)}function Ha(t,e){return me(e.enabled,t)!==!1&&t.isStaleByTime(Ws(e.staleTime,t))}function Lb(t,e){return!Ko(t.getCurrentResult(),e)}var Zc=tr(void 0),Db=t=>{const e=ui(Zc);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},Mb=({client:t,children:e})=>(Ns(()=>(t.mount(),()=>{t.unmount()}),[t]),w(Zc.Provider,{value:t,children:e})),Jc=tr(!1),Fb=()=>ui(Jc);Jc.Provider;function Vb(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Hb=tr(Vb()),Bb=()=>ui(Hb);function Ub(t,e){return typeof t=="function"?t(...e):!!t}function rl(){}var qb=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},Wb=t=>{Ns(()=>{t.clearReset()},[t])},jb=({result:t,errorResetBoundary:e,throwOnError:s,query:i,suspense:r})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&(r&&t.data===void 0||Ub(s,[t.error,i])),Kb=t=>{const e=t.staleTime;t.suspense&&(t.staleTime=typeof e=="function"?(...s)=>Math.max(e(...s),1e3):Math.max(e??1e3,1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},Gb=(t,e)=>t.isLoading&&t.isFetching&&!e,Qb=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,ol=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function Yb(t,e,s){var d,p,m,g,v;const i=Db(),r=Fb(),o=Bb(),a=i.defaultQueryOptions(t);(p=(d=i.getDefaultOptions().queries)==null?void 0:d._experimental_beforeQuery)==null||p.call(d,a),a._optimisticResults=r?"isRestoring":"optimistic",Kb(a),qb(a,o),Wb(o);const l=!i.getQueryCache().get(a.queryHash),[c]=ht(()=>new e(i,a)),h=c.getOptimisticResult(a),f=!r&&t.subscribed!==!1;if(Wr(qr(x=>{const C=f?c.subscribe(zt.batchCalls(x)):rl;return c.updateResult(),C},[c,f]),()=>c.getCurrentResult()),Ns(()=>{c.setOptions(a)},[a,c]),Qb(a,h))throw ol(a,c,o);if(jb({result:h,errorResetBoundary:o,throwOnError:a.throwOnError,query:i.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw h.error;if((g=(m=i.getDefaultOptions().queries)==null?void 0:m._experimental_afterQuery)==null||g.call(m,a,h),a.experimental_prefetchInRender&&!Os&&Gb(h,r)){const x=l?ol(a,c,o):(v=i.getQueryCache().get(a.queryHash))==null?void 0:v.promise;x==null||x.catch(rl).finally(()=>{c.updateResult()})}return a.notifyOnChangeProps?h:c.trackResult(h)}function Xb(t,e){return Yb(t,Ib)}const Zb=new Ob({defaultOptions:{queries:{gcTime:1e3*60*60*24}}});function ur(t){let s={parse_failed:"[ERROR] Parse failed",missing_keys:"[ERROR] Missing keys:",bad_values:"[ERROR] Bad values:",bad_auth_token:"[ERROR] Bad authentication token",bad_fetch:"[ERROR] Bad fetch:"}[t.type];switch(t.type){case"missing_keys":s+=JSON.stringify(t.keys);break;case"bad_values":s+=JSON.stringify(t.values);break;case"bad_fetch":s+=t.message}return s}async function xi(t){try{return await fetch("api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}catch(e){return new Response({status:400,body:{type:"bad_fetch",message:e.message}})}}const Jt={collectionArray:[{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"}],collectionData:[{recipeName:"Ravioli",authors:["Alice"],allergens:["Gluten","Cheese"],reference:"http://www.example.com/",ingredients:["Bread","Cheese"]},{recipeName:"Spaghetti",authors:["Bob"],allergens:["Gluten","Shellfish"],reference:"Some Book",ingredients:["Bread","Cheese","Ham","Turkey","Butter","Pasta Sauce"]}],allAllergens:["Gluten","Nuts","Shellfish"],allIngredients:["Bread","Cheese","Ham","Turkey","Butter","Pasta Sauce"],allAuthors:["Alice","Bob"]},St=Object.freeze({SEARCH_SETTINGS:0,MAIN:1,COLLECTIONS_LIST:2,CHANGE_USERNAME:3,CHANGE_PASSWORD:4,LOGIN_PROMPT:5,NEW_RECIPE_FORM:6,UPDATE_RECIPE_FORM:7,RECIPE_SUMMARY:8}),dt=Object.freeze({NAME:1,AUTHOR:2,ALLERGENS:4,REFERENCE:8,INGREDIENTS:16}),Jb={clientUsername:"",view:St.MAIN,page:0,numRowsPerPage:10,numRecipesInCollection:Jt.collectionData.length,visibleColumns:dt.NAME|dt.AUTHOR|dt.REFERENCE,activeRecipeId:0},tv=gb.createComputed(t=>({numPages:Math.ceil(t.numRecipesInCollection/t.numRowsPerPage),editMode:!0})),he=fb(tv((t,e)=>({...Jb,setMainView:()=>t({view:St.MAIN}),setSettingsView:()=>t({view:St.SEARCH_SETTINGS}),setLoginView:()=>t({view:St.LOGIN_PROMPT}),setChangeUserView:()=>t({view:St.CHANGE_USERNAME}),setChangePassView:()=>t({view:St.CHANGE_PASSWORD}),setCollectionsView:()=>t({view:St.COLLECTIONS_LIST}),setNewRecipeView:()=>t({view:St.NEW_RECIPE_FORM}),setUpdateRecipeView:()=>t({view:St.UPDATE_RECIPE_FORM}),setRecipeSummaryView:()=>t({view:St.RECIPE_SUMMARY}),gotoFirstPage:()=>t({page:0}),gotoPrevPage:()=>t(s=>({page:Math.max(0,s.page-1)})),gotoNextPage:()=>t(s=>({page:Math.min(e().numPages-1,s.page+1)})),gotoLastPage:()=>t(()=>({page:e().numPages-1})),setRowsPerPage:s=>t({numRowsPerPage:s}),getColumnVisible:s=>(e().visibleColumns&s)>0,toggleColumn:s=>t(i=>({visibleColumns:i.visibleColumns^s})),setActiveRecipeId:s=>t({activeRecipeId:s}),setClientUsername:s=>t({clientUsername:s})}))),_s={settingContainer:{display:"flex",flexDirection:"row",marginBottom:"1em"},filterContainer:{display:"flex",flex:1,flexDirection:"column"}};function _o({columnName:t,columnOptions:e}){const[s,i]=ht([]),[r,o]=ht([]);return w("div",{style:_s.settingContainer,children:[w("div",{style:_s.filterContainer,children:["Include ",t,w(ls,{variant:"success",available:e.filter(a=>!r.includes(a)),selected:s,setSelected:i})]}),w("div",{style:_s.filterContainer,children:["Exclude ",t,w(ls,{variant:"danger",available:e.filter(a=>!s.includes(a)),selected:r,setSelected:o})]})]})}function ev(){const{view:t,numRowsPerPage:e,getColumnVisible:s,toggleColumn:i,setMainView:r,setRowsPerPage:o,gotoFirstPage:a}=he(),l=1,c=20;function h(d){isNaN(d)||(o(Math.min(c,Math.max(l,d))),a())}function f(d){if(d.eventPhase!==Event.AT_TARGET){d.preventDefault();return}r()}return w(Mc,{class:"drawer-placement-top",open:t===St.SEARCH_SETTINGS,onSlHide:d=>f(d),placement:"top",label:"Search Settings",children:[w("div",{style:_s.settingContainer,children:w("div",{style:_s.filterContainer,children:["Recipes Per Page",w(Ut,{type:"number",value:e,min:l,max:c,onSlBlur:d=>h(parseInt(d.target.value))})]})}),w("div",{style:_s.settingContainer,children:w("div",{style:_s.filterContainer,children:["Visible Columns",w(Ti,{size:"small",checked:s(dt.NAME),onSlChange:()=>i(dt.NAME),children:"Recipe Name"}),w(Ti,{size:"small",checked:s(dt.AUTHOR),onSlChange:()=>i(dt.AUTHOR),children:"Author"}),w(Ti,{size:"small",checked:s(dt.ALLERGENS),onSlChange:()=>i(dt.ALLERGENS),children:"Allergens"}),w(Ti,{size:"small",checked:s(dt.REFERENCE),onSlChange:()=>i(dt.REFERENCE),children:"Reference"}),w(Ti,{size:"small",checked:s(dt.INGREDIENTS),onSlChange:()=>i(dt.INGREDIENTS),children:"Ingredients"})]})}),w(_o,{columnName:"Author",columnOptions:Jt.allAuthors}),w(_o,{columnName:"Allergens",columnOptions:Jt.allAllergens}),w(_o,{columnName:"Ingredients",columnOptions:Jt.allIngredients})]})}function pr({message:t,variant:e="primary",duration:s=3e3}){return w(cb,{variant:e,closable:!0,duration:s,children:[w(Pa,{name:{primary:"info-circle",success:"check2-circle",neutral:"gear",warning:"exclamation-triangle",danger:"exclamation-octagon"}[e],slot:"icon"}),t]})}let Ve=null;async function sv(t,e){const s=await xi({type:"login",username:t,password:e}),i=await s.json();if(s.status!==200)throw new Error(ur(i));Ve={auth:i.auth,lifetime:i.lifetime},console.log(Ve)}async function iv(){const t=await xi({type:"logout",auth:Ve.auth}),e=await t.json();if(t.status!==200)throw new Error(ur(e));Ve=null,console.log(Ve)}async function rv(){return Ve?(await xi({type:"is logged in",auth:Ve.auth})).status===200:!1}function ov(){return Xb({queryKey:["loggedIn"],queryFn:()=>rv()})}async function av(t,e){const s=await xi({type:"change username",auth:Ve.auth,password:t,new_username:e}),i=await s.json();if(s.status!==200)throw new Error(ur(i))}async function nv(t,e){const s=await xi({type:"change password",auth:Ve.auth,password:t,new_password:e}),i=await s.json();if(s.status!==200)throw new Error(ur(i))}const wo={root:{display:"flex",flexDirection:"row",alignItems:"center",flex:"1"},avatar:{"--size":"1.75em",cursor:"pointer",marginLeft:"8px"}};function lv(){const{setSettingsView:t,setLoginView:e,setChangePassView:s,setChangeUserView:i,setCollectionsView:r,setRecipeSummaryView:o,clientUsername:a,setClientUsername:l}=he(),{status:c,data:h,error:f,isFetching:d}=ov();c==="error"&&console.error(f.message);const p={VIEW_COLLECTIONS:0,CHANGE_USERNAME:1,CHANGE_PASSWORD:2,LOGOUT:3},m=cs(null);function g(){const C=Math.floor(Math.random()*Jt.collectionData.length);console.log(Jt.collectionData[C]),o()}async function v(){await iv(),l(""),m.current.base.toast()}function x(C){switch(C){case p.VIEW_COLLECTIONS:r();break;case p.CHANGE_USERNAME:i();break;case p.CHANGE_PASSWORD:s();break;case p.LOGOUT:v();break}}return w("div",{style:wo.root,children:[w(pr,{variant:"success",message:"Logged out successfully",ref:m}),w(Ut,{clearable:!0,type:"search",placeholder:`Search ${Jt.collectionArray[0].name}...`,style:{flex:"1"},children:w(Bt,{name:"search",label:"Run Search",slot:"suffix"})}),w(Bt,{name:"sliders",label:"Search Settings",onClick:()=>t()}),w(Bt,{name:"shuffle",label:"Generate Random Recipe",onClick:()=>g()}),d||!h?w(qn,{style:wo.avatar,label:"Empty avatar",onClick:()=>e()}):w(Fc,{children:[w(qn,{style:wo.avatar,slot:"trigger",initials:a[0],label:"Avatar with username initial"}),w(Ic,{onSlSelect:C=>x(C.detail.item.value),children:[w(Up,{className:"userMenuLabel",children:a}),w(Ri,{value:p.VIEW_COLLECTIONS,children:"View Collections"}),w(Ri,{value:p.CHANGE_USERNAME,children:"Change Username"}),w(Ri,{value:p.CHANGE_PASSWORD,children:"Change Password"}),w(Ri,{value:p.LOGOUT,children:["Log Out",w(Pa,{name:"box-arrow-right",slot:"suffix"})]})]})]})]})}const Nt={root:{display:"flex",flexDirection:"column",flex:"10",overflowX:"hidden"},header:{fontSize:"large",fontWeight:"bold",position:"sticky",top:"0",zIndex:"1"},row:{display:"flex",alignItems:"center",height:"30px",position:"relative"},cell:{alignItems:"center",display:"flex",flex:"3",justifyContent:"start",overflow:"auto hidden"},end:{alignItems:"center",display:"flex",flex:"1",justifyContent:"end"}};function cv({id:t,name:e,authors:s,allergens:i,reference:r,ingredients:o,setRecipeData:a}){const{editMode:l,getColumnVisible:c,setUpdateRecipeView:h,setRecipeSummaryView:f,setActiveRecipeId:d}=he();function p(){a.setRecipeName(e),a.setAuthors(s),a.setReference(r),a.setAllergens(i),a.setIngredients(o),f(),d(t)}function m(){a.setRecipeName(e),a.setAuthors(s),a.setReference(r),a.setAllergens(i),a.setIngredients(o),h(),d(t)}return w(La,{style:{"--border-radius":"0"},children:w("div",{style:Nt.row,children:[c(dt.NAME)&&w("div",{style:Nt.cell,children:e}),c(dt.AUTHOR)&&w("div",{style:Nt.cell,children:s.join(",")}),c(dt.ALLERGENS)&&w("div",{style:Nt.cell,children:w(ls,{variant:"warning",selected:i,viewMode:!0})}),c(dt.REFERENCE)&&w("div",{style:Nt.cell,children:r}),c(dt.INGREDIENTS)&&w("div",{style:Nt.cell,children:w(ls,{variant:"primary",selected:o,viewMode:!0})}),w("div",{style:Nt.end,children:[w(Re,{content:"View Recipe",children:w(Bt,{name:"eye",label:"View Recipe",onClick:()=>p()})}),l&&w(be,{children:[w(Re,{content:"Edit Recipe",children:w(Bt,{name:"pencil",label:"Edit Recipe",onClick:()=>m()})}),w(Re,{content:"Delete Recipe",children:w(Bt,{name:"trash",label:"Delete Recipe"})})]})]})]})})}function dv({pageData:t,setRecipeData:e}){const{editMode:s,getColumnVisible:i,setNewRecipeView:r}=he();function o(){e.setRecipeName(""),e.setAuthors([]),e.setReference(""),e.setAllergens([]),e.setIngredients([]),r()}return w("div",{style:Nt.root,children:[w(La,{style:{...Nt.header,"--border-radius":"0"},children:w("div",{style:Nt.row,children:[i(dt.NAME)&&w("div",{style:Nt.cell,children:"Recipe Name"}),i(dt.AUTHOR)&&w("div",{style:Nt.cell,children:"Author"}),i(dt.ALLERGENS)&&w("div",{style:Nt.cell,children:"Allergens"}),i(dt.REFERENCE)&&w("div",{style:Nt.cell,children:"Reference"}),i(dt.INGREDIENTS)&&w("div",{style:Nt.cell,children:"Ingredients"}),w("div",{style:{...Nt.end,fontSize:"2em"},children:s&&w(Re,{content:"Create Recipe",placement:"left",children:w(Bt,{name:"plus",label:"Create Recipe",onClick:()=>o()})})})]})}),t.map((a,l)=>w(cv,{setRecipeData:e,editMode:s,id:l,...a}))]})}const hv={root:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flex:"1"}};function uv(){const{page:t,numPages:e,gotoFirstPage:s,gotoPrevPage:i,gotoNextPage:r,gotoLastPage:o}=he();return w("div",{style:hv.root,children:[w(Re,{content:"First Page",children:w(Bt,{disabled:t===0,name:"chevron-double-left",onClick:s,label:"First Page"})}),w(Re,{content:"Previous Page",children:w(Bt,{disabled:t===0,name:"chevron-left",onClick:i,label:"Previous Page"})}),t+1,w(Re,{content:"Next Page",children:w(Bt,{disabled:t===e-1,name:"chevron-right",onClick:r,label:"Next Page"})}),w(Re,{content:"Last Page",children:w(Bt,{disabled:t===e-1,name:"chevron-double-right",onClick:o,label:"Last Page"})})]})}const al={inputField:{marginBottom:"1em"}};function pv(){const{view:t,setMainView:e,setClientUsername:s}=he(),[i,r]=ht(""),[o,a]=ht(""),[l,c]=ht(""),h=cs(null);function f(){e(),r(""),a(""),c("")}async function d(){try{await sv(i,o),s(i),f(),h.current.base.toast()}catch(p){c(p.message)}}return w(dr,{class:"dialog-overview",open:t===St.LOGIN_PROMPT,onSlAfterHide:()=>f(),label:"Log In",children:[w(pr,{message:"Logged in successfully",variant:"success",ref:h}),w(Ut,{style:al.inputField,type:"text",value:i,onSlChange:p=>r(p.target.value),placeholder:"Username"}),w(Ut,{className:"errorHelp",style:al.inputField,helpText:l,type:"password",value:o,onSlChange:p=>a(p.target.value),placeholder:"Password",passwordToggle:!0}),w(Jr,{onClick:()=>d(),children:"Log In"})]})}const xo={inputField:{marginBottom:"1em"}};function fv(){const{view:t,setMainView:e}=he(),[s,i]=ht(""),[r,o]=ht(""),[a,l]=ht(""),[c,h]=ht(""),f=cs(null);function d(){e(),i(""),o(""),l("")}async function p(){if(h(""),a!==r){h("New passwords do not match");return}try{await nv(s,r)}catch(m){h(m.message)}d(),f.current.base.toast()}return w(dr,{class:"dialog-overview",open:t===St.CHANGE_PASSWORD,onSlAfterHide:()=>d(),label:"Change Password",children:[w(pr,{message:"Password changed successfully",variant:"success",ref:f}),w(Ut,{style:xo.inputField,type:"password",helpText:"Must be 8 - 20 characters",value:s,onSlChange:m=>i(m.target.value),placeholder:"Old Password",passwordToggle:!0}),w(Ut,{style:xo.inputField,type:"password",value:r,onSlChange:m=>o(m.target.value),placeholder:"New Password",passwordToggle:!0}),w(Ut,{className:"errorHelp",style:xo.inputField,helpText:c,type:"password",value:a,onSlChange:m=>l(m.target.value),placeholder:"Retype New Password",passwordToggle:!0}),w(Jr,{onClick:()=>p(),children:"Confirm"})]})}const nl={inputField:{marginBottom:"1em"}};function mv(){const{view:t,setMainView:e,setClientUsername:s}=he(),[i,r]=ht(""),[o,a]=ht(""),[l,c]=ht(""),h=cs(null);function f(){e(),r(""),a(""),c("")}async function d(){try{await av(o,i),s(i)}catch(p){c(p.message);return}f(),h.current.base.toast()}return w(dr,{class:"dialog-overview",open:t===St.CHANGE_USERNAME,onSlAfterHide:()=>f(),label:"Change Username",children:[w(pr,{message:"Changed username successfully",variant:"success",ref:h}),w(Ut,{style:nl.inputField,helpText:"Must be 8 - 20 characters",type:"text",value:i,onSlChange:p=>r(p.target.value),placeholder:"New Username"}),w(Ut,{className:"errorHelp",style:nl.inputField,helpText:l,type:"password",value:o,onSlChange:p=>a(p.target.value),placeholder:"Password",passwordToggle:!0}),w(Jr,{onClick:()=>d(),children:"Confirm"})]})}const Cr={root:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},collectionTitle:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},collectionCard:{marginBottom:"1em",flex:1,width:"100%"}};function gv(){const{view:t,setMainView:e}=he();function s(i){i.eventPhase===Event.AT_TARGET?e():i.preventDefault()}return w(Mc,{class:"drawer-placement-start",open:t===St.COLLECTIONS_LIST,onSlHide:i=>s(i),placement:"start",label:"Collections",children:w("div",{style:Cr.root,children:[w(Ut,{style:Cr.collectionCard,clearable:!0,type:"search",placeholder:"Find a collection..."}),Jt.collectionArray.map(i=>w(La,{style:Cr.collectionCard,children:[w("div",{slot:"header",style:Cr.collectionTitle,children:[w(Ut,{className:"collectionsName",filled:!0,value:i.name,placeholder:`Collection ${i.id}`}),w(Kf,{value:window.location.origin+"/?id="+i.id,copyLabel:"Share Collection",successLabel:"Copied",errorLabel:"Failed to copy",children:w(Pa,{name:"share",slot:"copy-icon"})}),w(Re,{content:"Delete Collection",children:w(Bt,{name:"trash",label:"Delete Collection"})})]}),"Included recipes: ",i.numRecipes]})),w(Re,{content:"Add Collection",children:w(Bt,{name:"plus",label:"Add Collection",style:{fontSize:"2em"}})})]})})}async function bv(t,e,s,i,r,o){const a=await xi({type:"add recipe",auth:session_auth.auth,collection_id:t,recipe_name:e,reference:s,authors:i,ingredients:r,allergens:o}),l=await a.json();if(a.status!==200)throw new Error(ur(l))}const ko={inputField:{marginBottom:"1em"}};function ll({formTitle:t,submitLabel:e,submitMessage:s,viewState:i,recipeData:r,setRecipeData:o}){const{view:a,setMainView:l}=he(),c=cs(null);function h(d){if(d.eventPhase!==Event.AT_TARGET){d.preventDefault();return}l()}async function f(d){console.log(r);try{await bv(0,r.recipeName,r.reference,r.authors,r.ingredients,r.allergens),h(d),c.current.base.toast()}catch(p){console.error(p)}}return w(dr,{class:"dialog-overview",open:a===i,onSlHide:d=>h(d),label:t,children:[w(pr,{message:s,variant:"success",ref:c}),w(Ut,{style:ko.inputField,type:"text",value:r.recipeName,onSlChange:d=>o.setRecipeName(d.target.value),placeholder:"Recipe Name"}),w(Ut,{style:ko.inputField,type:"text",value:r.authors.join(","),onSlChange:d=>o.setAuthors(d.target.value.split(",")),placeholder:"Authors"}),w(Ut,{style:ko.inputField,type:"text",value:r.reference,onSlChange:d=>o.setReference(d.target.value),placeholder:"Reference"}),w(ls,{variant:"primary",available:Jt.allAllergens,selected:r.allergens,setSelected:o.setAllergens}),w(ls,{variant:"primary",available:Jt.allIngredients,selected:r.ingredients,setSelected:o.setIngredients}),w(Jr,{onClick:d=>f(d),children:e})]})}const cl={summaryField:{marginBottom:"1em"}};function vv(){const{activeRecipeId:t,view:e,setMainView:s}=he(),i=Jt.collectionData[t];function r(){s()}return w(dr,{class:"dialog-overview",open:e===St.RECIPE_SUMMARY,onSlHide:o=>r(),label:i.name,children:[w("strong",{children:"Author(s)"}),w("div",{style:cl.summaryField,children:i.authors.join(",")}),w("strong",{children:"Reference"}),w("div",{style:cl.summaryField,children:i.reference}),w("strong",{children:"Allergens"}),w(ls,{variant:"primary",selected:i.allergens,viewMode:!0}),w("strong",{children:"Ingredients"}),w(ls,{variant:"primary",selected:i.ingredients,viewMode:!0})]})}zo("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/");const yv={root:{display:"flex",flexDirection:"column",height:"95vh"}};function _v(){const{page:t,numRowsPerPage:e,activeRecipeId:s}=he();let i=Jt.collectionData.slice(t*e,(t+1)*e);const r=Jt.collectionData[s],[o,a]=ht(""),[l,c]=ht([]),[h,f]=ht(""),[d,p]=ht([]),[m,g]=ht([]),v={recipeName:o,authors:l,reference:h,ingredients:d,allergens:m},x={setRecipeName:a,setAuthors:c,setReference:f,setIngredients:p,setAllergens:g};return w("div",{style:yv.root,children:[w(ev,{}),w(gv,{}),w(pv,{}),w(mv,{}),w(fv,{}),w(lv,{}),w(dv,{pageData:i,setRecipeData:x}),w(uv,{}),w(ll,{formTitle:"New Recipe",submitLabel:"Add Recipe",submitMessage:"Added recipe successfully",viewState:St.NEW_RECIPE_FORM,recipeData:v,setRecipeData:x}),w(ll,{formTitle:"Update Recipe",submitLabel:"Update",submitMessage:"Updated recipe successfully",viewState:St.UPDATE_RECIPE_FORM,recipeData:r,setRecipeData:x}),w(vv,{})]})}ai(w(Mb,{client:Zb,children:w(_v,{})}),document.getElementById("app"));

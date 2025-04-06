(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();var Ui,B,wa,Fe,cr,xa,oo,ka,Ao,ro,ao,Ca,Fi={},Sa=[],Gn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Cs=Array.isArray;function me(t,e){for(var i in e)t[i]=e[i];return t}function zo(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e,i){var s,o,r,n={};for(r in e)r=="key"?s=e[r]:r=="ref"?o=e[r]:n[r]=e[r];if(arguments.length>2&&(n.children=arguments.length>3?Ui.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)n[r]===void 0&&(n[r]=t.defaultProps[r]);return Ei(t,n,s,o,null)}function Ei(t,e,i,s,o){var r={type:t,props:e,key:i,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++wa,__i:-1,__u:0};return o==null&&B.vnode!=null&&B.vnode(r),r}function $a(){return{current:null}}function te(t){return t.children}function Jt(t,e){this.props=t,this.context=e}function oi(t,e){if(e==null)return t.__?oi(t.__,t.__i+1):null;for(var i;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?oi(t):null}function Aa(t){var e,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return Aa(t)}}function no(t){(!t.__d&&(t.__d=!0)&&Fe.push(t)&&!ms.__r++||cr!==B.debounceRendering)&&((cr=B.debounceRendering)||xa)(ms)}function ms(){var t,e,i,s,o,r,n,l;for(Fe.sort(oo);t=Fe.shift();)t.__d&&(e=Fe.length,s=void 0,r=(o=(i=t).__v).__e,n=[],l=[],i.__P&&((s=me({},o)).__v=o.__v+1,B.vnode&&B.vnode(s),Eo(i.__P,s,o,i.__n,i.__P.namespaceURI,32&o.__u?[r]:null,n,r??oi(o),!!(32&o.__u),l),s.__v=o.__v,s.__.__k[s.__i]=s,Ta(n,s,l),s.__e!=r&&Aa(s)),Fe.length>e&&Fe.sort(oo));ms.__r=0}function za(t,e,i,s,o,r,n,l,c,u,f){var d,p,m,g,y,k,C=s&&s.__k||Sa,v=e.length;for(c=Yn(i,e,C,c,v),d=0;d<v;d++)(m=i.__k[d])!=null&&(p=m.__i===-1?Fi:C[m.__i]||Fi,m.__i=d,k=Eo(t,m,p,o,r,n,l,c,u,f),g=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&To(p.ref,null,m),f.push(m.ref,m.__c||g,m)),y==null&&g!=null&&(y=g),4&m.__u||p.__k===m.__k?c=Ea(m,c,t):typeof m.type=="function"&&k!==void 0?c=k:g&&(c=g.nextSibling),m.__u&=-7);return i.__e=y,c}function Yn(t,e,i,s,o){var r,n,l,c,u,f=i.length,d=f,p=0;for(t.__k=new Array(o),r=0;r<o;r++)(n=e[r])!=null&&typeof n!="boolean"&&typeof n!="function"?(c=r+p,(n=t.__k[r]=typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?Ei(null,n,null,null,null):Cs(n)?Ei(te,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?Ei(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n).__=t,n.__b=t.__b+1,l=null,(u=n.__i=Xn(n,i,c,d))!==-1&&(d--,(l=i[u])&&(l.__u|=2)),l==null||l.__v===null?(u==-1&&p--,typeof n.type!="function"&&(n.__u|=4)):u!=c&&(u==c-1?p--:u==c+1?p++:(u>c?p--:p++,n.__u|=4))):t.__k[r]=null;if(d)for(r=0;r<f;r++)(l=i[r])!=null&&(2&l.__u)==0&&(l.__e==s&&(s=oi(l)),Ia(l,l));return s}function Ea(t,e,i){var s,o;if(typeof t.type=="function"){for(s=t.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=t,e=Ea(s[o],e,i));return e}t.__e!=e&&(e&&t.type&&!i.contains(e)&&(e=oi(t)),i.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ge(t,e){return e=e||[],t==null||typeof t=="boolean"||(Cs(t)?t.some(function(i){ge(i,e)}):e.push(t)),e}function Xn(t,e,i,s){var o,r,n=t.key,l=t.type,c=e[i];if(c===null||c&&n==c.key&&l===c.type&&(2&c.__u)==0)return i;if(s>(c!=null&&(2&c.__u)==0?1:0))for(o=i-1,r=i+1;o>=0||r<e.length;){if(o>=0){if((c=e[o])&&(2&c.__u)==0&&n==c.key&&l===c.type)return o;o--}if(r<e.length){if((c=e[r])&&(2&c.__u)==0&&n==c.key&&l===c.type)return r;r++}}return-1}function dr(t,e,i){e[0]=="-"?t.setProperty(e,i??""):t[e]=i==null?"":typeof i!="number"||Gn.test(e)?i:i+"px"}function es(t,e,i,s,o){var r;t:if(e=="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof s=="string"&&(t.style.cssText=s=""),s)for(e in s)i&&e in i||dr(t.style,e,"");if(i)for(e in i)s&&i[e]===s[e]||dr(t.style,e,i[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(ka,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=i,i?s?i.u=s.u:(i.u=Ao,t.addEventListener(e,r?ao:ro,r)):t.removeEventListener(e,r?ao:ro,r);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=i??"";break t}catch{}typeof i=="function"||(i==null||i===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&i==1?"":i))}}function hr(t){return function(e){if(this.l){var i=this.l[e.type+t];if(e.t==null)e.t=Ao++;else if(e.t<i.u)return;return i(B.event?B.event(e):e)}}}function Eo(t,e,i,s,o,r,n,l,c,u){var f,d,p,m,g,y,k,C,v,S,w,_,z,F,H,L,I,Y=e.type;if(e.constructor!==void 0)return null;128&i.__u&&(c=!!(32&i.__u),r=[l=e.__e=i.__e]),(f=B.__b)&&f(e);t:if(typeof Y=="function")try{if(C=e.props,v="prototype"in Y&&Y.prototype.render,S=(f=Y.contextType)&&s[f.__c],w=f?S?S.props.value:f.__:s,i.__c?k=(d=e.__c=i.__c).__=d.__E:(v?e.__c=d=new Y(C,w):(e.__c=d=new Jt(C,w),d.constructor=Y,d.render=Zn),S&&S.sub(d),d.props=C,d.state||(d.state={}),d.context=w,d.__n=s,p=d.__d=!0,d.__h=[],d._sb=[]),v&&d.__s==null&&(d.__s=d.state),v&&Y.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=me({},d.__s)),me(d.__s,Y.getDerivedStateFromProps(C,d.__s))),m=d.props,g=d.state,d.__v=e,p)v&&Y.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),v&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(v&&Y.getDerivedStateFromProps==null&&C!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(C,w),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(C,d.__s,w)===!1||e.__v==i.__v)){for(e.__v!=i.__v&&(d.props=C,d.state=d.__s,d.__d=!1),e.__e=i.__e,e.__k=i.__k,e.__k.some(function(J){J&&(J.__=e)}),_=0;_<d._sb.length;_++)d.__h.push(d._sb[_]);d._sb=[],d.__h.length&&n.push(d);break t}d.componentWillUpdate!=null&&d.componentWillUpdate(C,d.__s,w),v&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,g,y)})}if(d.context=w,d.props=C,d.__P=t,d.__e=!1,z=B.__r,F=0,v){for(d.state=d.__s,d.__d=!1,z&&z(e),f=d.render(d.props,d.state,d.context),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[]}else do d.__d=!1,z&&z(e),f=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++F<25);d.state=d.__s,d.getChildContext!=null&&(s=me(me({},s),d.getChildContext())),v&&!p&&d.getSnapshotBeforeUpdate!=null&&(y=d.getSnapshotBeforeUpdate(m,g)),l=za(t,Cs(L=f!=null&&f.type===te&&f.key==null?f.props.children:f)?L:[L],e,i,s,o,r,n,l,c,u),d.base=e.__e,e.__u&=-161,d.__h.length&&n.push(d),k&&(d.__E=d.__=null)}catch(J){if(e.__v=null,c||r!=null)if(J.then){for(e.__u|=c?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;r[r.indexOf(l)]=null,e.__e=l}else for(I=r.length;I--;)zo(r[I]);else e.__e=i.__e,e.__k=i.__k;B.__e(J,e,i)}else r==null&&e.__v==i.__v?(e.__k=i.__k,e.__e=i.__e):l=e.__e=Qn(i.__e,e,i,s,o,r,n,c,u);return(f=B.diffed)&&f(e),128&e.__u?void 0:l}function Ta(t,e,i){for(var s=0;s<i.length;s++)To(i[s],i[++s],i[++s]);B.__c&&B.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(r){r.call(o)})}catch(r){B.__e(r,o.__v)}})}function Qn(t,e,i,s,o,r,n,l,c){var u,f,d,p,m,g,y,k=i.props,C=e.props,v=e.type;if(v=="svg"?o="http://www.w3.org/2000/svg":v=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(u=0;u<r.length;u++)if((m=r[u])&&"setAttribute"in m==!!v&&(v?m.localName==v:m.nodeType==3)){t=m,r[u]=null;break}}if(t==null){if(v==null)return document.createTextNode(C);t=document.createElementNS(o,v,C.is&&C),l&&(B.__m&&B.__m(e,r),l=!1),r=null}if(v===null)k===C||l&&t.data===C||(t.data=C);else{if(r=r&&Ui.call(t.childNodes),k=i.props||Fi,!l&&r!=null)for(k={},u=0;u<t.attributes.length;u++)k[(m=t.attributes[u]).name]=m.value;for(u in k)if(m=k[u],u!="children"){if(u=="dangerouslySetInnerHTML")d=m;else if(!(u in C)){if(u=="value"&&"defaultValue"in C||u=="checked"&&"defaultChecked"in C)continue;es(t,u,null,m,o)}}for(u in C)m=C[u],u=="children"?p=m:u=="dangerouslySetInnerHTML"?f=m:u=="value"?g=m:u=="checked"?y=m:l&&typeof m!="function"||k[u]===m||es(t,u,m,k[u],o);if(f)l||d&&(f.__html===d.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(d&&(t.innerHTML=""),za(t,Cs(p)?p:[p],e,i,s,v=="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,n,r?r[0]:i.__k&&oi(i,0),l,c),r!=null)for(u=r.length;u--;)zo(r[u]);l||(u="value",v=="progress"&&g==null?t.removeAttribute("value"):g!==void 0&&(g!==t[u]||v=="progress"&&!g||v=="option"&&g!==k[u])&&es(t,u,g,k[u],o),u="checked",y!==void 0&&y!==t[u]&&es(t,u,y,k[u],o))}return t}function To(t,e,i){try{if(typeof t=="function"){var s=typeof t.__u=="function";s&&t.__u(),s&&e==null||(t.__u=t(e))}else t.current=e}catch(o){B.__e(o,i)}}function Ia(t,e,i){var s,o;if(B.unmount&&B.unmount(t),(s=t.ref)&&(s.current&&s.current!==t.__e||To(s,null,e)),(s=t.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(r){B.__e(r,e)}s.base=s.__P=null}if(s=t.__k)for(o=0;o<s.length;o++)s[o]&&Ia(s[o],e,i||typeof t.type!="function");i||zo(t.__e),t.__c=t.__=t.__e=void 0}function Zn(t,e,i){return this.constructor(t,i)}function ri(t,e,i){var s,o,r,n;e==document&&(e=document.documentElement),B.__&&B.__(t,e),o=(s=typeof i=="function")?null:i&&i.__k||e.__k,r=[],n=[],Eo(e,t=(!s&&i||e).__k=ue(te,null,[t]),o||Fi,Fi,e.namespaceURI,!s&&i?[i]:o?null:e.firstChild?Ui.call(e.childNodes):null,r,!s&&i?i:o?o.__e:e.firstChild,s,n),Ta(r,t,n)}function Pa(t,e){ri(t,e,Pa)}function Jn(t,e,i){var s,o,r,n,l=me({},t.props);for(r in t.type&&t.type.defaultProps&&(n=t.type.defaultProps),e)r=="key"?s=e[r]:r=="ref"?o=e[r]:l[r]=e[r]===void 0&&n!==void 0?n[r]:e[r];return arguments.length>2&&(l.children=arguments.length>3?Ui.call(arguments,2):i),Ei(t.type,l,s||t.key,o||t.ref,null)}function Na(t,e){var i={__c:e="__cC"+Ca++,__:t,Consumer:function(s,o){return s.children(o)},Provider:function(s){var o,r;return this.getChildContext||(o=new Set,(r={})[e]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&o.forEach(function(l){l.__e=!0,no(l)})},this.sub=function(n){o.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){o&&o.delete(n),l&&l.call(n)}}),s.children}};return i.Provider.__=i.Consumer.contextType=i}Ui=Sa.slice,B={__e:function(t,e,i,s){for(var o,r,n;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(t)),n=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,s||{}),n=o.__d),n)return o.__E=o}catch(l){t=l}throw t}},wa=0,Jt.prototype.setState=function(t,e){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=me({},this.state),typeof t=="function"&&(t=t(me({},i),this.props)),t&&me(i,t),t!=null&&this.__v&&(e&&this._sb.push(e),no(this))},Jt.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),no(this))},Jt.prototype.render=te,Fe=[],xa=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,oo=function(t,e){return t.__v.__b-e.__v.__b},ms.__r=0,ka=/(PointerCapture)$|Capture$/i,Ao=0,ro=hr(!1),ao=hr(!0),Ca=0;var tl=0;function b(t,e,i,s,o,r){e||(e={});var n,l,c=e;if("ref"in c)for(l in c={},e)l=="ref"?n=e[l]:c[l]=e[l];var u={type:t,props:c,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--tl,__i:-1,__u:0,__source:o,__self:r};if(typeof t=="function"&&(n=t.defaultProps))for(l in n)c[l]===void 0&&(c[l]=n[l]);return B.vnode&&B.vnode(u),u}var lo="";function co(t){lo=t}function el(t=""){if(!lo){const e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-shoelace"));if(i)co(i.getAttribute("data-shoelace"));else{const s=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";s&&(o=s.getAttribute("src")),co(o.split("/").slice(0,-1).join("/"))}}return lo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ra=Object.defineProperty,il=Object.defineProperties,sl=Object.getOwnPropertyDescriptor,ol=Object.getOwnPropertyDescriptors,ur=Object.getOwnPropertySymbols,rl=Object.prototype.hasOwnProperty,al=Object.prototype.propertyIsEnumerable,Ds=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Io=t=>{throw TypeError(t)},pr=(t,e,i)=>e in t?Ra(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ve=(t,e)=>{for(var i in e||(e={}))rl.call(e,i)&&pr(t,i,e[i]);if(ur)for(var i of ur(e))al.call(e,i)&&pr(t,i,e[i]);return t},Wi=(t,e)=>il(t,ol(e)),a=(t,e,i,s)=>{for(var o=s>1?void 0:s?sl(e,i):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(o=(s?n(e,i,o):n(o))||o);return s&&o&&Ra(e,i,o),o},Oa=(t,e,i)=>e.has(t)||Io("Cannot "+i),nl=(t,e,i)=>(Oa(t,e,"read from private field"),e.get(t)),ll=(t,e,i)=>e.has(t)?Io("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),cl=(t,e,i,s)=>(Oa(t,e,"write to private field"),e.set(t,i),i),dl=function(t,e){this[0]=t,this[1]=e},hl=t=>{var e=t[Ds("asyncIterator")],i=!1,s,o={};return e==null?(e=t[Ds("iterator")](),s=r=>o[r]=n=>e[r](n)):(e=e.call(t),s=r=>o[r]=n=>{if(i){if(i=!1,r==="throw")throw n;return n}return i=!0,{done:!1,value:new dl(new Promise(l=>{var c=e[r](n);c instanceof Object||Io("Object expected"),l(c)}),1)}}),o[Ds("iterator")]=()=>o,s("next"),"throw"in e?s("throw"):o.throw=r=>{throw r},"return"in e&&s("return"),o};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds=globalThis,Po=ds.ShadowRoot&&(ds.ShadyCSS===void 0||ds.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,No=Symbol(),fr=new WeakMap;let La=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==No)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Po&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=fr.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&fr.set(i,e))}return e}toString(){return this.cssText}};const ul=t=>new La(typeof t=="string"?t:t+"",void 0,No),R=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new La(i,t,No)},pl=(t,e)=>{if(Po)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),o=ds.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}},mr=Po?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return ul(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fl,defineProperty:ml,getOwnPropertyDescriptor:gl,getOwnPropertyNames:bl,getOwnPropertySymbols:vl,getPrototypeOf:yl}=Object,$e=globalThis,gr=$e.trustedTypes,_l=gr?gr.emptyScript:"",Ms=$e.reactiveElementPolyfillSupport,Ti=(t,e)=>t,ai={toAttribute(t,e){switch(e){case Boolean:t=t?_l:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ro=(t,e)=>!fl(t,e),br={attribute:!0,type:String,converter:ai,reflect:!1,hasChanged:Ro};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$e.litPropertyMetadata??($e.litPropertyMetadata=new WeakMap);let Je=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=br){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,i);o!==void 0&&ml(this.prototype,e,o)}}static getPropertyDescriptor(e,i,s){const{get:o,set:r}=gl(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return o==null?void 0:o.call(this)},set(n){const l=o==null?void 0:o.call(this);r.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??br}static _$Ei(){if(this.hasOwnProperty(Ti("elementProperties")))return;const e=yl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ti("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ti("properties"))){const i=this.properties,s=[...bl(i),...vl(i)];for(const o of s)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)i.unshift(mr(o))}else e!==void 0&&i.push(mr(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostDisconnected)==null?void 0:s.call(i)})}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$EC(e,i){var r;const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:ai).toAttribute(i,s.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,i){var r;const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=s.getPropertyOptions(o),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:ai;this._$Em=o,this[o]=l.fromAttribute(i,n.type),this._$Em=null}}requestUpdate(e,i,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Ro)(this[e],i))return;this.P(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,s){this._$AL.has(e)||this._$AL.set(e,i),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,n]of o)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(s=this._$EO)==null||s.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(i)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdated)==null?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(e){}firstUpdated(e){}};Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},Je[Ti("elementProperties")]=new Map,Je[Ti("finalized")]=new Map,Ms==null||Ms({ReactiveElement:Je}),($e.reactiveElementVersions??($e.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ii=globalThis,gs=Ii.trustedTypes,vr=gs?gs.createPolicy("lit-html",{createHTML:t=>t}):void 0,Da="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,Ma="?"+Ce,wl=`<${Ma}>`,We=document,Vi=()=>We.createComment(""),Bi=t=>t===null||typeof t!="object"&&typeof t!="function",Oo=Array.isArray,xl=t=>Oo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Fs=`[ 	
\f\r]`,_i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yr=/-->/g,_r=/>/g,De=RegExp(`>|${Fs}(?:([^\\s"'>=/]+)(${Fs}*=${Fs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wr=/'/g,xr=/"/g,Fa=/^(?:script|style|textarea|title)$/i,kl=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),x=kl(1),Ft=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),kr=new WeakMap,Be=We.createTreeWalker(We,129);function Va(t,e){if(!Oo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return vr!==void 0?vr.createHTML(e):e}const Cl=(t,e)=>{const i=t.length-1,s=[];let o,r=e===2?"<svg>":e===3?"<math>":"",n=_i;for(let l=0;l<i;l++){const c=t[l];let u,f,d=-1,p=0;for(;p<c.length&&(n.lastIndex=p,f=n.exec(c),f!==null);)p=n.lastIndex,n===_i?f[1]==="!--"?n=yr:f[1]!==void 0?n=_r:f[2]!==void 0?(Fa.test(f[2])&&(o=RegExp("</"+f[2],"g")),n=De):f[3]!==void 0&&(n=De):n===De?f[0]===">"?(n=o??_i,d=-1):f[1]===void 0?d=-2:(d=n.lastIndex-f[2].length,u=f[1],n=f[3]===void 0?De:f[3]==='"'?xr:wr):n===xr||n===wr?n=De:n===yr||n===_r?n=_i:(n=De,o=void 0);const m=n===De&&t[l+1].startsWith("/>")?" ":"";r+=n===_i?c+wl:d>=0?(s.push(u),c.slice(0,d)+Da+c.slice(d)+Ce+m):c+Ce+(d===-2?l:m)}return[Va(t,r+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};let ho=class Ba{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let r=0,n=0;const l=e.length-1,c=this.parts,[u,f]=Cl(e,i);if(this.el=Ba.createElement(u,s),Be.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Be.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Da)){const p=f[n++],m=o.getAttribute(d).split(Ce),g=/([.?@])?(.*)/.exec(p);c.push({type:1,index:r,name:g[2],strings:m,ctor:g[1]==="."?$l:g[1]==="?"?Al:g[1]==="@"?zl:Ss}),o.removeAttribute(d)}else d.startsWith(Ce)&&(c.push({type:6,index:r}),o.removeAttribute(d));if(Fa.test(o.tagName)){const d=o.textContent.split(Ce),p=d.length-1;if(p>0){o.textContent=gs?gs.emptyScript:"";for(let m=0;m<p;m++)o.append(d[m],Vi()),Be.nextNode(),c.push({type:2,index:++r});o.append(d[p],Vi())}}}else if(o.nodeType===8)if(o.data===Ma)c.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(Ce,d+1))!==-1;)c.push({type:7,index:r}),d+=Ce.length-1}r++}}static createElement(e,i){const s=We.createElement("template");return s.innerHTML=e,s}};function ni(t,e,i=t,s){var n,l;if(e===Ft)return e;let o=s!==void 0?(n=i._$Co)==null?void 0:n[s]:i._$Cl;const r=Bi(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),r===void 0?o=void 0:(o=new r(t),o._$AT(t,i,s)),s!==void 0?(i._$Co??(i._$Co=[]))[s]=o:i._$Cl=o),o!==void 0&&(e=ni(t,o._$AS(t,e.values),o,s)),e}let Sl=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,o=((e==null?void 0:e.creationScope)??We).importNode(i,!0);Be.currentNode=o;let r=Be.nextNode(),n=0,l=0,c=s[0];for(;c!==void 0;){if(n===c.index){let u;c.type===2?u=new Lo(r,r.nextSibling,this,e):c.type===1?u=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(u=new El(r,this,e)),this._$AV.push(u),c=s[++l]}n!==(c==null?void 0:c.index)&&(r=Be.nextNode(),n++)}return Be.currentNode=We,o}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}},Lo=class Ha{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,s,o){this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=ni(this,e,i),Bi(e)?e===tt||e==null||e===""?(this._$AH!==tt&&this._$AR(),this._$AH=tt):e!==this._$AH&&e!==Ft&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==tt&&Bi(this._$AH)?this._$AA.nextSibling.data=e:this.T(We.createTextNode(e)),this._$AH=e}$(e){var r;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ho.createElement(Va(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(i);else{const n=new Sl(o,this),l=n.u(this.options);n.p(i),this.T(l),this._$AH=n}}_$AC(e){let i=kr.get(e.strings);return i===void 0&&kr.set(e.strings,i=new ho(e)),i}k(e){Oo(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const r of e)o===i.length?i.push(s=new Ha(this.O(Vi()),this.O(Vi()),this,this.options)):s=i[o],s._$AI(r),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,i);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}},Ss=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,o,r){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=tt}_$AI(e,i=this,s,o){const r=this.strings;let n=!1;if(r===void 0)e=ni(this,e,i,0),n=!Bi(e)||e!==this._$AH&&e!==Ft,n&&(this._$AH=e);else{const l=e;let c,u;for(e=r[0],c=0;c<r.length-1;c++)u=ni(this,l[s+c],i,c),u===Ft&&(u=this._$AH[c]),n||(n=!Bi(u)||u!==this._$AH[c]),u===tt?e=tt:e!==tt&&(e+=(u??"")+r[c+1]),this._$AH[c]=u}n&&!o&&this.j(e)}j(e){e===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},$l=class extends Ss{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===tt?void 0:e}},Al=class extends Ss{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==tt)}},zl=class extends Ss{constructor(e,i,s,o,r){super(e,i,s,o,r),this.type=5}_$AI(e,i=this){if((e=ni(this,e,i,0)??tt)===Ft)return;const s=this._$AH,o=e===tt&&s!==tt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==tt&&(s===tt||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}},El=class{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ni(this,e)}};const Vs=Ii.litHtmlPolyfillSupport;Vs==null||Vs(ho,Lo),(Ii.litHtmlVersions??(Ii.litHtmlVersions=[])).push("3.2.1");const Tl=(t,e,i)=>{const s=(i==null?void 0:i.renderBefore)??e;let o=s._$litPart$;if(o===void 0){const r=(i==null?void 0:i.renderBefore)??null;s._$litPart$=o=new Lo(e.insertBefore(Vi(),r),r,void 0,i??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pi=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Tl(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ft}};var _a;Pi._$litElement$=!0,Pi.finalized=!0,(_a=globalThis.litElementHydrateSupport)==null||_a.call(globalThis,{LitElement:Pi});const Bs=globalThis.litElementPolyfillSupport;Bs==null||Bs({LitElement:Pi});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var Il=R`
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
`,M=R`
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
 */const Pl={attribute:!0,type:String,converter:ai,reflect:!1,hasChanged:Ro},Nl=(t=Pl,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),s==="accessor"){const{name:n}=i;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,c,t)},init(l){return l!==void 0&&this.P(n,void 0,t),l}}}if(s==="setter"){const{name:n}=i;return function(l){const c=this[n];e.call(this,l),this.requestUpdate(n,c,t)}}throw Error("Unsupported decorator location: "+s)};function h(t){return(e,i)=>typeof i=="object"?Nl(t,e,i):((s,o,r)=>{const n=o.hasOwnProperty(r);return o.constructor.createProperty(r,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(o,r):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(t){return h({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qi(t){return(e,i)=>{const s=typeof e=="function"?e:e[i];Object.assign(s,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ua=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(t,e){return(i,s,o)=>{const r=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(t))??null};return Ua(i,s,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rl(t){return(e,i)=>Ua(e,i,{async get(){var s;return await this.updateComplete,((s=this.renderRoot)==null?void 0:s.querySelector(t))??null}})}var hs,T=class extends Pi{constructor(){super(),ll(this,hs,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,ve({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",r=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(r=" v"+s.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,i){nl(this,hs)||(this.constructor.elementProperties.forEach((s,o)=>{s.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),cl(this,hs,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};hs=new WeakMap;T.version="2.20.0";T.dependencies={};a([h()],T.prototype,"dir",2);a([h()],T.prototype,"lang",2);var $s=class extends T{render(){return x` <slot></slot> `}};$s.styles=[M,Il];var be,Z,Hs,Cr,li=0,Wa=[],st=B,Sr=st.__b,$r=st.__r,Ar=st.diffed,zr=st.__c,Er=st.unmount,Tr=st.__;function Ge(t,e){st.__h&&st.__h(Z,t,li||e),li=0;var i=Z.__H||(Z.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function nt(t){return li=1,As(qa,t)}function As(t,e,i){var s=Ge(be++,2);if(s.t=t,!s.__c&&(s.__=[i?i(e):qa(void 0,e),function(l){var c=s.__N?s.__N[0]:s.__[0],u=s.t(c,l);c!==u&&(s.__N=[u,s.__[1]],s.__c.setState({}))}],s.__c=Z,!Z.u)){var o=function(l,c,u){if(!s.__c.__H)return!0;var f=s.__c.__H.__.filter(function(p){return!!p.__c});if(f.every(function(p){return!p.__N}))return!r||r.call(this,l,c,u);var d=s.__c.props!==l;return f.forEach(function(p){if(p.__N){var m=p.__[0];p.__=p.__N,p.__N=void 0,m!==p.__[0]&&(d=!0)}}),r&&r.call(this,l,c,u)||d};Z.u=!0;var r=Z.shouldComponentUpdate,n=Z.componentWillUpdate;Z.componentWillUpdate=function(l,c,u){if(this.__e){var f=r;r=void 0,o(l,c,u),r=f}n&&n.call(this,l,c,u)},Z.shouldComponentUpdate=o}return s.__N||s.__}function zs(t,e){var i=Ge(be++,3);!st.__s&&Ho(i.__H,e)&&(i.__=t,i.i=e,Z.__H.__h.push(i))}function di(t,e){var i=Ge(be++,4);!st.__s&&Ho(i.__H,e)&&(i.__=t,i.i=e,Z.__h.push(i))}function Pe(t){return li=5,ji(function(){return{current:t}},[])}function Do(t,e,i){li=6,di(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},i==null?i:i.concat(t))}function ji(t,e){var i=Ge(be++,7);return Ho(i.__H,e)&&(i.__=t(),i.__H=e,i.__h=t),i.__}function Mo(t,e){return li=8,ji(function(){return t},e)}function Fo(t){var e=Z.context[t.__c],i=Ge(be++,9);return i.c=t,e?(i.__==null&&(i.__=!0,e.sub(Z)),e.props.value):t.__}function Vo(t,e){st.useDebugValue&&st.useDebugValue(e?e(t):t)}function Ol(t){var e=Ge(be++,10),i=nt();return e.__=t,Z.componentDidCatch||(Z.componentDidCatch=function(s,o){e.__&&e.__(s,o),i[1](s)}),[i[0],function(){i[1](void 0)}]}function Bo(){var t=Ge(be++,11);if(!t.__){for(var e=Z.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var i=e.__m||(e.__m=[0,0]);t.__="P"+i[0]+"-"+i[1]++}return t.__}function Ll(){for(var t;t=Wa.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(us),t.__H.__h.forEach(uo),t.__H.__h=[]}catch(e){t.__H.__h=[],st.__e(e,t.__v)}}st.__b=function(t){Z=null,Sr&&Sr(t)},st.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Tr&&Tr(t,e)},st.__r=function(t){$r&&$r(t),be=0;var e=(Z=t.__c).__H;e&&(Hs===Z?(e.__h=[],Z.__h=[],e.__.forEach(function(i){i.__N&&(i.__=i.__N),i.i=i.__N=void 0})):(e.__h.forEach(us),e.__h.forEach(uo),e.__h=[],be=0)),Hs=Z},st.diffed=function(t){Ar&&Ar(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Wa.push(e)!==1&&Cr===st.requestAnimationFrame||((Cr=st.requestAnimationFrame)||Dl)(Ll)),e.__H.__.forEach(function(i){i.i&&(i.__H=i.i),i.i=void 0})),Hs=Z=null},st.__c=function(t,e){e.some(function(i){try{i.__h.forEach(us),i.__h=i.__h.filter(function(s){return!s.__||uo(s)})}catch(s){e.some(function(o){o.__h&&(o.__h=[])}),e=[],st.__e(s,i.__v)}}),zr&&zr(t,e)},st.unmount=function(t){Er&&Er(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(s){try{us(s)}catch(o){e=o}}),i.__H=void 0,e&&st.__e(e,i.__v))};var Ir=typeof requestAnimationFrame=="function";function Dl(t){var e,i=function(){clearTimeout(s),Ir&&cancelAnimationFrame(e),setTimeout(t)},s=setTimeout(i,100);Ir&&(e=requestAnimationFrame(i))}function us(t){var e=Z,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),Z=e}function uo(t){var e=Z;t.__c=t.__(),Z=e}function Ho(t,e){return!t||t.length!==e.length||e.some(function(i,s){return i!==t[s]})}function qa(t,e){return typeof e=="function"?e(t):e}function ja(t,e){for(var i in e)t[i]=e[i];return t}function po(t,e){for(var i in t)if(i!=="__source"&&!(i in e))return!0;for(var s in e)if(s!=="__source"&&t[s]!==e[s])return!0;return!1}function Uo(t,e){var i=e(),s=nt({t:{__:i,u:e}}),o=s[0].t,r=s[1];return di(function(){o.__=i,o.u=e,Us(o)&&r({t:o})},[t,i,e]),zs(function(){return Us(o)&&r({t:o}),t(function(){Us(o)&&r({t:o})})},[t]),i}function Us(t){var e,i,s=t.u,o=t.__;try{var r=s();return!((e=o)===(i=r)&&(e!==0||1/e==1/i)||e!=e&&i!=i)}catch{return!0}}function Wo(t){t()}function qo(t){return t}function jo(){return[!1,Wo]}var Ko=di;function bs(t,e){this.props=t,this.context=e}function Ka(t,e){function i(o){var r=this.props.ref,n=r==o.ref;return!n&&r&&(r.call?r(null):r.current=null),e?!e(this.props,o)||!n:po(this.props,o)}function s(o){return this.shouldComponentUpdate=i,ue(t,o)}return s.displayName="Memo("+(t.displayName||t.name)+")",s.prototype.isReactComponent=!0,s.__f=!0,s}(bs.prototype=new Jt).isPureReactComponent=!0,bs.prototype.shouldComponentUpdate=function(t,e){return po(this.props,t)||po(this.state,e)};var Pr=B.__b;B.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Pr&&Pr(t)};var Ml=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ga(t){function e(i){var s=ja({},i);return delete s.ref,t(s,i.ref||null)}return e.$$typeof=Ml,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var Nr=function(t,e){return t==null?null:ge(ge(t).map(e))},Ya={map:Nr,forEach:Nr,count:function(t){return t?ge(t).length:0},only:function(t){var e=ge(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:ge},Fl=B.__e;B.__e=function(t,e,i,s){if(t.then){for(var o,r=e;r=r.__;)if((o=r.__c)&&o.__c)return e.__e==null&&(e.__e=i.__e,e.__k=i.__k),o.__c(t,e)}Fl(t,e,i,s)};var Rr=B.unmount;function Xa(t,e,i){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(s){typeof s.__c=="function"&&s.__c()}),t.__c.__H=null),(t=ja({},t)).__c!=null&&(t.__c.__P===i&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(s){return Xa(s,e,i)})),t}function Qa(t,e,i){return t&&i&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(s){return Qa(s,e,i)}),t.__c&&t.__c.__P===e&&(t.__e&&i.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=i)),t}function Ni(){this.__u=0,this.o=null,this.__b=null}function Za(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Ja(t){var e,i,s;function o(r){if(e||(e=t()).then(function(n){i=n.default||n},function(n){s=n}),s)throw s;if(!i)throw e;return ue(i,r)}return o.displayName="Lazy",o.__f=!0,o}function ti(){this.i=null,this.l=null}B.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Rr&&Rr(t)},(Ni.prototype=new Jt).__c=function(t,e){var i=e.__c,s=this;s.o==null&&(s.o=[]),s.o.push(i);var o=Za(s.__v),r=!1,n=function(){r||(r=!0,i.__R=null,o?o(l):l())};i.__R=n;var l=function(){if(!--s.__u){if(s.state.__a){var c=s.state.__a;s.__v.__k[0]=Qa(c,c.__c.__P,c.__c.__O)}var u;for(s.setState({__a:s.__b=null});u=s.o.pop();)u.forceUpdate()}};s.__u++||32&e.__u||s.setState({__a:s.__b=s.__v.__k[0]}),t.then(n,n)},Ni.prototype.componentWillUnmount=function(){this.o=[]},Ni.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var i=document.createElement("div"),s=this.__v.__k[0].__c;this.__v.__k[0]=Xa(this.__b,i,s.__O=s.__P)}this.__b=null}var o=e.__a&&ue(te,null,t.fallback);return o&&(o.__u&=-33),[ue(te,null,e.__a?null:t.children),o]};var Or=function(t,e,i){if(++i[1]===i[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(i=t.i;i;){for(;i.length>3;)i.pop()();if(i[1]<i[0])break;t.i=i=i[2]}};function Vl(t){return this.getChildContext=function(){return t.context},t.children}function Bl(t){var e=this,i=t.h;e.componentWillUnmount=function(){ri(null,e.v),e.v=null,e.h=null},e.h&&e.h!==i&&e.componentWillUnmount(),e.v||(e.h=i,e.v={nodeType:1,parentNode:i,childNodes:[],contains:function(){return!0},appendChild:function(s){this.childNodes.push(s),e.h.appendChild(s)},insertBefore:function(s,o){this.childNodes.push(s),e.h.insertBefore(s,o)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),e.h.removeChild(s)}}),ri(ue(Vl,{context:e.context},t.__v),e.v)}function tn(t,e){var i=ue(Bl,{__v:t,h:e});return i.containerInfo=e,i}(ti.prototype=new Jt).__a=function(t){var e=this,i=Za(e.__v),s=e.l.get(t);return s[0]++,function(o){var r=function(){e.props.revealOrder?(s.push(o),Or(e,t,s)):o()};i?i(r):r()}},ti.prototype.render=function(t){this.i=null,this.l=new Map;var e=ge(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var i=e.length;i--;)this.l.set(e[i],this.i=[1,0,this.i]);return t.children},ti.prototype.componentDidUpdate=ti.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,i){Or(t,i,e)})};var en=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Hl=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ul=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Wl=/[A-Z0-9]/g,ql=typeof document<"u",jl=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function sn(t,e,i){return e.__k==null&&(e.textContent=""),ri(t,e),typeof i=="function"&&i(),t?t.__c:null}function on(t,e,i){return Pa(t,e),typeof i=="function"&&i(),t?t.__c:null}Jt.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Jt.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Lr=B.event;function Kl(){}function Gl(){return this.cancelBubble}function Yl(){return this.defaultPrevented}B.event=function(t){return Lr&&(t=Lr(t)),t.persist=Kl,t.isPropagationStopped=Gl,t.isDefaultPrevented=Yl,t.nativeEvent=t};var Go,Xl={enumerable:!1,configurable:!0,get:function(){return this.class}},Dr=B.vnode;B.vnode=function(t){typeof t.type=="string"&&function(e){var i=e.props,s=e.type,o={},r=s.indexOf("-")===-1;for(var n in i){var l=i[n];if(!(n==="value"&&"defaultValue"in i&&l==null||ql&&n==="children"&&s==="noscript"||n==="class"||n==="className")){var c=n.toLowerCase();n==="defaultValue"&&"value"in i&&i.value==null?n="value":n==="download"&&l===!0?l="":c==="translate"&&l==="no"?l=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?n="ondblclick":c!=="onchange"||s!=="input"&&s!=="textarea"||jl(i.type)?c==="onfocus"?n="onfocusin":c==="onblur"?n="onfocusout":Ul.test(n)&&(n=c):c=n="oninput":r&&Hl.test(n)?n=n.replace(Wl,"-$&").toLowerCase():l===null&&(l=void 0),c==="oninput"&&o[n=c]&&(n="oninputCapture"),o[n]=l}}s=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=ge(i.children).forEach(function(u){u.props.selected=o.value.indexOf(u.props.value)!=-1})),s=="select"&&o.defaultValue!=null&&(o.value=ge(i.children).forEach(function(u){u.props.selected=o.multiple?o.defaultValue.indexOf(u.props.value)!=-1:o.defaultValue==u.props.value})),i.class&&!i.className?(o.class=i.class,Object.defineProperty(o,"className",Xl)):(i.className&&!i.class||i.class&&i.className)&&(o.class=o.className=i.className),e.props=o}(t),t.$$typeof=en,Dr&&Dr(t)};var Mr=B.__r;B.__r=function(t){Mr&&Mr(t),Go=t.__c};var Fr=B.diffed;B.diffed=function(t){Fr&&Fr(t);var e=t.props,i=t.__e;i!=null&&t.type==="textarea"&&"value"in e&&e.value!==i.value&&(i.value=e.value==null?"":e.value),Go=null};var rn={ReactCurrentDispatcher:{current:{readContext:function(t){return Go.__n[t.__c].props.value},useCallback:Mo,useContext:Fo,useDebugValue:Vo,useDeferredValue:qo,useEffect:zs,useId:Bo,useImperativeHandle:Do,useInsertionEffect:Ko,useLayoutEffect:di,useMemo:ji,useReducer:As,useRef:Pe,useState:nt,useSyncExternalStore:Uo,useTransition:jo}}},Ql="18.3.1";function an(t){return ue.bind(null,t)}function Ki(t){return!!t&&t.$$typeof===en}function nn(t){return Ki(t)&&t.type===te}function ln(t){return!!t&&!!t.displayName&&(typeof t.displayName=="string"||t.displayName instanceof String)&&t.displayName.startsWith("Memo(")}function cn(t){return Ki(t)?Jn.apply(null,arguments):t}function dn(t){return!!t.__k&&(ri(null,t),!0)}function hn(t){return t&&(t.base||t.nodeType===1&&t)||null}var un=function(t,e){return t(e)},pn=function(t,e){return t(e)},fn=te,mn=Ki,fo={useState:nt,useId:Bo,useReducer:As,useEffect:zs,useLayoutEffect:di,useInsertionEffect:Ko,useTransition:jo,useDeferredValue:qo,useSyncExternalStore:Uo,startTransition:Wo,useRef:Pe,useImperativeHandle:Do,useMemo:ji,useCallback:Mo,useContext:Fo,useDebugValue:Vo,version:"18.3.1",Children:Ya,render:sn,hydrate:on,unmountComponentAtNode:dn,createPortal:tn,createElement:ue,createContext:Na,createFactory:an,cloneElement:cn,createRef:$a,Fragment:te,isValidElement:Ki,isElement:mn,isFragment:nn,isMemo:ln,findDOMNode:hn,Component:Jt,PureComponent:bs,memo:Ka,forwardRef:Ga,flushSync:pn,unstable_batchedUpdates:un,StrictMode:fn,Suspense:Ni,SuspenseList:ti,lazy:Ja,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:rn};const P=Object.freeze(Object.defineProperty({__proto__:null,Children:Ya,Component:Jt,Fragment:te,PureComponent:bs,StrictMode:fn,Suspense:Ni,SuspenseList:ti,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:rn,cloneElement:cn,createContext:Na,createElement:ue,createFactory:an,createPortal:tn,createRef:$a,default:fo,findDOMNode:hn,flushSync:pn,forwardRef:Ga,hydrate:on,isElement:mn,isFragment:nn,isMemo:ln,isValidElement:Ki,lazy:Ja,memo:Ka,render:sn,startTransition:Wo,unmountComponentAtNode:dn,unstable_batchedUpdates:un,useCallback:Mo,useContext:Fo,useDebugValue:Vo,useDeferredValue:qo,useEffect:zs,useErrorBoundary:Ol,useId:Bo,useImperativeHandle:Do,useInsertionEffect:Ko,useLayoutEffect:di,useMemo:ji,useReducer:As,useRef:Pe,useState:nt,useSyncExternalStore:Uo,useTransition:jo,version:Ql},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zl=new Set(["children","localName","ref","style","className"]),Vr=new WeakMap,Br=(t,e,i,s,o)=>{const r=o==null?void 0:o[e];r===void 0?(t[e]=i,i==null&&e in HTMLElement.prototype&&t.removeAttribute(e)):i!==s&&((n,l,c)=>{let u=Vr.get(n);u===void 0&&Vr.set(n,u=new Map);let f=u.get(l);c!==void 0?f===void 0?(u.set(l,f={handleEvent:c}),n.addEventListener(l,f)):f.handleEvent=c:f!==void 0&&(u.delete(l),n.removeEventListener(l,f))})(t,r,i)},N=({react:t,tagName:e,elementClass:i,events:s,displayName:o})=>{const r=new Set(Object.keys(s??{})),n=t.forwardRef((l,c)=>{const u=t.useRef(new Map),f=t.useRef(null),d={},p={};for(const[m,g]of Object.entries(l))Zl.has(m)?d[m==="className"?"class":m]=g:r.has(m)||m in i.prototype?p[m]=g:d[m]=g;return t.useLayoutEffect(()=>{if(f.current===null)return;const m=new Map;for(const g in p)Br(f.current,g,l[g],u.current.get(g),s),u.current.delete(g),m.set(g,l[g]);for(const[g,y]of u.current)Br(f.current,g,void 0,y,s);u.current=m}),t.useLayoutEffect(()=>{var m;(m=f.current)==null||m.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,t.createElement(e,{...d,ref:t.useCallback(m=>{f.current=m,typeof c=="function"?c(m):c!==null&&(c.current=m)},[c])})});return n.displayName=o??i.name,n};var Jl="sl-visually-hidden";$s.define("sl-visually-hidden");N({tagName:Jl,elementClass:$s,react:P,events:{},displayName:"SlVisuallyHidden"});var tc=R`
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
`,hi=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(r,n,l){var c;const u=s.getPropertyOptions(t),f=typeof u.attribute=="string"?u.attribute:t;if(r===f){const d=u.converter||ai,m=(typeof d=="function"?d:(c=d==null?void 0:d.fromAttribute)!=null?c:ai.fromAttribute)(l,u.type);this[t]!==m&&(this[i]=m)}o.call(this,r,n,l)}},Ye=R`
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
`,wi=new WeakMap,xi=new WeakMap,ki=new WeakMap,Ws=new WeakSet,is=new WeakMap,ye=class{constructor(t,e){this.handleFormData=i=>{const s=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{i.formData.append(o,l.toString())}):i.formData.append(o,r.toString()))},this.handleFormSubmit=i=>{var s;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=wi.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),is.set(this.host,[])},this.handleInteraction=i=>{const s=is.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=ve({form:i=>{const s=i.form;if(s){const r=i.getRootNode().querySelector(`#${s}`);if(r)return r}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),is.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),is.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,wi.has(this.form)?wi.get(this.form).add(this.host):wi.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),xi.has(this.form)||(xi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ki.has(this.form)||(ki.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=wi.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),xi.has(this.form)&&(this.form.reportValidity=xi.get(this.form),xi.delete(this.form)),ki.has(this.form)&&(this.form.checkValidity=ki.get(this.form),ki.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Ws.add(t):Ws.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&i.setAttribute(s,e.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Ws.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},Es=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),ec=Object.freeze(Wi(ve({},Es),{valid:!1,valueMissing:!0})),ic=Object.freeze(Wi(ve({},Es),{valid:!1,customError:!0})),zt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function sc(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}function $(t,e){const i=ve({waitUntilFirstUpdate:!1},e);return(s,o)=>{const{update:r}=s,n=Array.isArray(t)?t:[t];s.update=function(l){n.forEach(c=>{const u=c;if(l.has(u)){const f=l.get(u),d=this[u];f!==d&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](f,d)}}),r.call(this,l)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Gi=t=>(...e)=>({_$litDirective$:t,values:e});let Yi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=Gi(class extends Yi{constructor(t){var e;if(super(t),t.type!==ce.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((s=this.nt)!=null&&s.has(r))&&this.st.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(n?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return Ft}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=t=>t??tt;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oc=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,gn=t=>t.strings===void 0,rc={},ac=(t,e=rc)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=Gi(class extends Yi{constructor(t){if(super(t),t.type!==ce.PROPERTY&&t.type!==ce.ATTRIBUTE&&t.type!==ce.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!gn(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ft||e===tt)return e;const i=t.element,s=t.name;if(t.type===ce.PROPERTY){if(e===i[s])return Ft}else if(t.type===ce.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return Ft}else if(t.type===ce.ATTRIBUTE&&i.getAttribute(s)===e+"")return Ft;return ac(t),e}});var kt=class extends T{constructor(){super(...arguments),this.formControlController=new ye(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new zt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return x`
      <div
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${D({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${E(this.value)}
            .checked=${qe(this.checked)}
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
    `}};kt.styles=[M,Ye,tc];a([A('input[type="checkbox"]')],kt.prototype,"input",2);a([O()],kt.prototype,"hasFocus",2);a([h()],kt.prototype,"title",2);a([h()],kt.prototype,"name",2);a([h()],kt.prototype,"value",2);a([h({reflect:!0})],kt.prototype,"size",2);a([h({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],kt.prototype,"checked",2);a([hi("checked")],kt.prototype,"defaultChecked",2);a([h({reflect:!0})],kt.prototype,"form",2);a([h({type:Boolean,reflect:!0})],kt.prototype,"required",2);a([h({attribute:"help-text"})],kt.prototype,"helpText",2);a([$("checked",{waitUntilFirstUpdate:!0})],kt.prototype,"handleCheckedChange",1);a([$("disabled",{waitUntilFirstUpdate:!0})],kt.prototype,"handleDisabledChange",1);var nc="sl-switch";kt.define("sl-switch");N({tagName:nc,elementClass:kt,react:P,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var lc=R`
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
`,cc=R`
  :host {
    display: contents;
  }
`,ui=class extends T{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};ui.styles=[M,cc];a([h({type:Boolean,reflect:!0})],ui.prototype,"disabled",2);a([$("disabled",{waitUntilFirstUpdate:!0})],ui.prototype,"handleDisabledChange",1);function dc(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var mo=new Set;function hc(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function uc(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Ri(t){if(mo.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=hc()+uc();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),e<2&&(i=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Oi(t){mo.delete(t),mo.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function go(t,e,i="vertical",s="smooth"){const o=dc(t,e),r=o.top+e.scrollTop,n=o.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,u=e.scrollTop,f=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<l?e.scrollTo({left:n,behavior:s}):n+t.clientWidth>c&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(r<u?e.scrollTo({top:r,behavior:s}):r+t.clientHeight>f&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:s}))}var pc=R`
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
`,fc={name:"default",resolver:t=>el(`assets/icons/${t}.svg`)},mc=fc,Hr={caret:`
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
  `},gc={name:"system",resolver:t=>t in Hr?`data:image/svg+xml,${encodeURIComponent(Hr[t])}`:""},bc=gc,vc=[mc,bc],bo=[];function yc(t){bo.push(t)}function _c(t){bo=bo.filter(e=>e!==t)}function Ur(t){return vc.find(e=>e.name===t)}var wc=R`
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
`,Ci=Symbol(),ss=Symbol(),qs,js=new Map,Q=class extends T{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e!=null&&e.spriteSheet)return this.svg=x`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?Ci:ss}catch{return ss}try{const o=document.createElement("div");o.innerHTML=await s.text();const r=o.firstElementChild;if(((i=r==null?void 0:r.tagName)==null?void 0:i.toLowerCase())!=="svg")return Ci;qs||(qs=new DOMParser);const l=qs.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Ci}catch{return Ci}}connectedCallback(){super.connectedCallback(),yc(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),_c(this)}getIconSource(){const t=Ur(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?Ur(this.library):void 0;if(!e){this.svg=null;return}let o=js.get(e);if(o||(o=this.resolveIcon(e,s),js.set(e,o)),!this.initialRender)return;const r=await o;if(r===ss&&js.delete(e),e===this.getIconSource().url){if(oc(r)){if(this.svg=r,s){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&n&&s.mutator(n)}return}switch(r){case ss:case Ci:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=s==null?void 0:s.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Q.styles=[M,wc];a([O()],Q.prototype,"svg",2);a([h({reflect:!0})],Q.prototype,"name",2);a([h()],Q.prototype,"src",2);a([h()],Q.prototype,"label",2);a([h({reflect:!0})],Q.prototype,"library",2);a([$("label")],Q.prototype,"handleLabelChange",1);a([$(["name","src","library"])],Q.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bn=Symbol.for(""),xc=t=>{if((t==null?void 0:t.r)===bn)return t==null?void 0:t._$litStatic$},vs=(t,...e)=>({_$litStatic$:e.reduce((i,s,o)=>i+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[o+1],t[0]),r:bn}),Wr=new Map,kc=t=>(e,...i)=>{const s=i.length;let o,r;const n=[],l=[];let c,u=0,f=!1;for(;u<s;){for(c=e[u];u<s&&(r=i[u],(o=xc(r))!==void 0);)c+=o+e[++u],f=!0;u!==s&&l.push(r),n.push(c),u++}if(u===s&&n.push(e[s]),f){const d=n.join("$$lit$$");(e=Wr.get(d))===void 0&&(n.raw=n,Wr.set(d,e=n)),i=l}return t(e,...i)},Li=kc(x);var pt=class extends T{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?vs`a`:vs`button`;return Li`
      <${e}
        part="base"
        class=${D({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${E(t?void 0:this.disabled)}
        type=${E(t?void 0:"button")}
        href=${E(t?this.href:void 0)}
        target=${E(t?this.target:void 0)}
        download=${E(t?this.download:void 0)}
        rel=${E(t&&this.target?"noreferrer noopener":void 0)}
        role=${E(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${E(this.name)}
          library=${E(this.library)}
          src=${E(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};pt.styles=[M,pc];pt.dependencies={"sl-icon":Q};a([A(".icon-button")],pt.prototype,"button",2);a([O()],pt.prototype,"hasFocus",2);a([h()],pt.prototype,"name",2);a([h()],pt.prototype,"library",2);a([h()],pt.prototype,"src",2);a([h()],pt.prototype,"href",2);a([h()],pt.prototype,"target",2);a([h()],pt.prototype,"download",2);a([h()],pt.prototype,"label",2);a([h({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);const vo=new Set,ei=new Map;let Ve,Yo="ltr",Xo="en";const vn=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(vn){const t=new MutationObserver(_n);Yo=document.documentElement.dir||"ltr",Xo=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function yn(...t){t.map(e=>{const i=e.$code.toLowerCase();ei.has(i)?ei.set(i,Object.assign(Object.assign({},ei.get(i)),e)):ei.set(i,e),Ve||(Ve=e)}),_n()}function _n(){vn&&(Yo=document.documentElement.dir||"ltr",Xo=document.documentElement.lang||navigator.language),[...vo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Cc=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){vo.add(this.host)}hostDisconnected(){vo.delete(this.host)}dir(){return`${this.host.dir||Yo}`.toLowerCase()}lang(){return`${this.host.lang||Xo}`.toLowerCase()}getTranslationData(e){var i,s;const o=new Intl.Locale(e.replace(/_/g,"-")),r=o==null?void 0:o.language.toLowerCase(),n=(s=(i=o==null?void 0:o.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",l=ei.get(`${r}-${n}`),c=ei.get(r);return{locale:o,language:r,region:n,primary:l,secondary:c}}exists(e,i){var s;const{primary:o,secondary:r}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[e]||r&&r[e]||i.includeFallback&&Ve&&Ve[e])}term(e,...i){const{primary:s,secondary:o}=this.getTranslationData(this.lang());let r;if(s&&s[e])r=s[e];else if(o&&o[e])r=o[e];else if(Ve&&Ve[e])r=Ve[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...i):r}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}};var wn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};yn(wn);var Sc=wn,j=class extends Cc{};yn(Sc);var yt=class extends T{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new j(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{if(e.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(i=>i.attributeName==="active")){const s=e.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);s&&this.setActiveTab(s)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,s)=>{var o;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),s.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("sl-tab");(i==null?void 0:i.closest("sl-tab-group"))===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(l=>l.matches(":focus")),r=this.localize.dir()==="rtl";let n=null;if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===o);n=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===o);n=this.findNextFocusableTab(l,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===n?0:-1}),["top","bottom"].includes(this.placement)&&go(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=ve({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var o;return s.active=s.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&go(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((l,c)=>({left:l.left+c.clientWidth,top:l.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null;const s=e==="forward"?1:-1;let o=t+s;for(;t<this.tabs.length;){if(i=this.tabs[o]||null,i===null){e==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;o+=s}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return x`
      <div
        part="base"
        class=${D({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?x`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${D({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?x`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${D({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};yt.styles=[M,lc];yt.dependencies={"sl-icon-button":pt,"sl-resize-observer":ui};a([A(".tab-group")],yt.prototype,"tabGroup",2);a([A(".tab-group__body")],yt.prototype,"body",2);a([A(".tab-group__nav")],yt.prototype,"nav",2);a([A(".tab-group__indicator")],yt.prototype,"indicator",2);a([O()],yt.prototype,"hasScrollControls",2);a([O()],yt.prototype,"shouldHideScrollStartButton",2);a([O()],yt.prototype,"shouldHideScrollEndButton",2);a([h()],yt.prototype,"placement",2);a([h()],yt.prototype,"activation",2);a([h({attribute:"no-scroll-controls",type:Boolean})],yt.prototype,"noScrollControls",2);a([h({attribute:"fixed-scroll-controls",type:Boolean})],yt.prototype,"fixedScrollControls",2);a([qi({passive:!0})],yt.prototype,"updateScrollButtons",1);a([$("noScrollControls",{waitUntilFirstUpdate:!0})],yt.prototype,"updateScrollControls",1);a([$("placement",{waitUntilFirstUpdate:!0})],yt.prototype,"syncIndicator",1);var $c="sl-tab-group";yt.define("sl-tab-group");N({tagName:$c,elementClass:yt,react:P,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var Ac=R`
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
`,zc=0,pi=class extends T{constructor(){super(...arguments),this.attrId=++zc,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return x`
      <slot
        part="base"
        class=${D({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};pi.styles=[M,Ac];a([h({reflect:!0})],pi.prototype,"name",2);a([h({type:Boolean,reflect:!0})],pi.prototype,"active",2);a([$("active")],pi.prototype,"handleActiveChange",1);var Ec="sl-tab-panel";pi.define("sl-tab-panel");N({tagName:Ec,elementClass:pi,react:P,events:{},displayName:"SlTabPanel"});var Tc=R`
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
`,_e=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return x`
      <span
        part="base"
        class=${D({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?x`
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
    `}};_e.styles=[M,Tc];_e.dependencies={"sl-icon-button":pt};a([h({reflect:!0})],_e.prototype,"variant",2);a([h({reflect:!0})],_e.prototype,"size",2);a([h({type:Boolean,reflect:!0})],_e.prototype,"pill",2);a([h({type:Boolean})],_e.prototype,"removable",2);var Ic="sl-tag";_e.define("sl-tag");var Pc=N({tagName:Ic,elementClass:_e,react:P,events:{onSlRemove:"sl-remove"},displayName:"SlTag"}),Nc=Pc,Rc=R`
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
`,Oc=R`
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
`;const Ae=Math.min,Mt=Math.max,ys=Math.round,os=Math.floor,he=t=>({x:t,y:t}),Lc={left:"right",right:"left",bottom:"top",top:"bottom"},Dc={start:"end",end:"start"};function yo(t,e,i){return Mt(t,Ae(e,i))}function fi(t,e){return typeof t=="function"?t(e):t}function ze(t){return t.split("-")[0]}function mi(t){return t.split("-")[1]}function xn(t){return t==="x"?"y":"x"}function Qo(t){return t==="y"?"height":"width"}function je(t){return["top","bottom"].includes(ze(t))?"y":"x"}function Zo(t){return xn(je(t))}function Mc(t,e,i){i===void 0&&(i=!1);const s=mi(t),o=Zo(t),r=Qo(o);let n=o==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=_s(n)),[n,_s(n)]}function Fc(t){const e=_s(t);return[_o(t),e,_o(e)]}function _o(t){return t.replace(/start|end/g,e=>Dc[e])}function Vc(t,e,i){const s=["left","right"],o=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return i?e?o:s:e?s:o;case"left":case"right":return e?r:n;default:return[]}}function Bc(t,e,i,s){const o=mi(t);let r=Vc(ze(t),i==="start",s);return o&&(r=r.map(n=>n+"-"+o),e&&(r=r.concat(r.map(_o)))),r}function _s(t){return t.replace(/left|right|bottom|top/g,e=>Lc[e])}function Hc(t){return{top:0,right:0,bottom:0,left:0,...t}}function kn(t){return typeof t!="number"?Hc(t):{top:t,right:t,bottom:t,left:t}}function ws(t){const{x:e,y:i,width:s,height:o}=t;return{width:s,height:o,top:i,left:e,right:e+s,bottom:i+o,x:e,y:i}}function qr(t,e,i){let{reference:s,floating:o}=t;const r=je(e),n=Zo(e),l=Qo(n),c=ze(e),u=r==="y",f=s.x+s.width/2-o.width/2,d=s.y+s.height/2-o.height/2,p=s[l]/2-o[l]/2;let m;switch(c){case"top":m={x:f,y:s.y-o.height};break;case"bottom":m={x:f,y:s.y+s.height};break;case"right":m={x:s.x+s.width,y:d};break;case"left":m={x:s.x-o.width,y:d};break;default:m={x:s.x,y:s.y}}switch(mi(e)){case"start":m[n]-=p*(i&&u?-1:1);break;case"end":m[n]+=p*(i&&u?-1:1);break}return m}const Uc=async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:r=[],platform:n}=i,l=r.filter(Boolean),c=await(n.isRTL==null?void 0:n.isRTL(e));let u=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:f,y:d}=qr(u,s,c),p=s,m={},g=0;for(let y=0;y<l.length;y++){const{name:k,fn:C}=l[y],{x:v,y:S,data:w,reset:_}=await C({x:f,y:d,initialPlacement:s,placement:p,strategy:o,middlewareData:m,rects:u,platform:n,elements:{reference:t,floating:e}});f=v??f,d=S??d,m={...m,[k]:{...m[k],...w}},_&&g<=50&&(g++,typeof _=="object"&&(_.placement&&(p=_.placement),_.rects&&(u=_.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):_.rects),{x:f,y:d}=qr(u,p,c)),y=-1)}return{x:f,y:d,placement:p,strategy:o,middlewareData:m}};async function Jo(t,e){var i;e===void 0&&(e={});const{x:s,y:o,platform:r,rects:n,elements:l,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=fi(e,t),g=kn(m),k=l[p?d==="floating"?"reference":"floating":d],C=ws(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(k)))==null||i?k:k.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:u,rootBoundary:f,strategy:c})),v=d==="floating"?{x:s,y:o,width:n.floating.width,height:n.floating.height}:n.reference,S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),w=await(r.isElement==null?void 0:r.isElement(S))?await(r.getScale==null?void 0:r.getScale(S))||{x:1,y:1}:{x:1,y:1},_=ws(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:S,strategy:c}):v);return{top:(C.top-_.top+g.top)/w.y,bottom:(_.bottom-C.bottom+g.bottom)/w.y,left:(C.left-_.left+g.left)/w.x,right:(_.right-C.right+g.right)/w.x}}const Wc=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:r,platform:n,elements:l,middlewareData:c}=e,{element:u,padding:f=0}=fi(t,e)||{};if(u==null)return{};const d=kn(f),p={x:i,y:s},m=Zo(o),g=Qo(m),y=await n.getDimensions(u),k=m==="y",C=k?"top":"left",v=k?"bottom":"right",S=k?"clientHeight":"clientWidth",w=r.reference[g]+r.reference[m]-p[m]-r.floating[g],_=p[m]-r.reference[m],z=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let F=z?z[S]:0;(!F||!await(n.isElement==null?void 0:n.isElement(z)))&&(F=l.floating[S]||r.floating[g]);const H=w/2-_/2,L=F/2-y[g]/2-1,I=Ae(d[C],L),Y=Ae(d[v],L),J=I,St=F-y[g]-Y,dt=F/2-y[g]/2+H,Zt=yo(J,dt,St),ne=!c.arrow&&mi(o)!=null&&dt!==Zt&&r.reference[g]/2-(dt<J?I:Y)-y[g]/2<0,le=ne?dt<J?dt-J:dt-St:0;return{[m]:p[m]+le,data:{[m]:Zt,centerOffset:dt-Zt-le,...ne&&{alignmentOffset:le}},reset:ne}}}),qc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:r,rects:n,initialPlacement:l,platform:c,elements:u}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...k}=fi(t,e);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const C=ze(o),v=je(l),S=ze(l)===l,w=await(c.isRTL==null?void 0:c.isRTL(u.floating)),_=p||(S||!y?[_s(l)]:Fc(l)),z=g!=="none";!p&&z&&_.push(...Bc(l,y,g,w));const F=[l,..._],H=await Jo(e,k),L=[];let I=((s=r.flip)==null?void 0:s.overflows)||[];if(f&&L.push(H[C]),d){const dt=Mc(o,n,w);L.push(H[dt[0]],H[dt[1]])}if(I=[...I,{placement:o,overflows:L}],!L.every(dt=>dt<=0)){var Y,J;const dt=(((Y=r.flip)==null?void 0:Y.index)||0)+1,Zt=F[dt];if(Zt)return{data:{index:dt,overflows:I},reset:{placement:Zt}};let ne=(J=I.filter(le=>le.overflows[0]<=0).sort((le,xe)=>le.overflows[1]-xe.overflows[1])[0])==null?void 0:J.placement;if(!ne)switch(m){case"bestFit":{var St;const le=(St=I.filter(xe=>{if(z){const ke=je(xe.placement);return ke===v||ke==="y"}return!0}).map(xe=>[xe.placement,xe.overflows.filter(ke=>ke>0).reduce((ke,Kn)=>ke+Kn,0)]).sort((xe,ke)=>xe[1]-ke[1])[0])==null?void 0:St[0];le&&(ne=le);break}case"initialPlacement":ne=l;break}if(o!==ne)return{reset:{placement:ne}}}return{}}}};async function jc(t,e){const{placement:i,platform:s,elements:o}=t,r=await(s.isRTL==null?void 0:s.isRTL(o.floating)),n=ze(i),l=mi(i),c=je(i)==="y",u=["left","top"].includes(n)?-1:1,f=r&&c?-1:1,d=fi(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof g=="number"&&(m=l==="end"?g*-1:g),c?{x:m*f,y:p*u}:{x:p*u,y:m*f}}const Kc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:r,placement:n,middlewareData:l}=e,c=await jc(e,t);return n===((i=l.offset)==null?void 0:i.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:o+c.x,y:r+c.y,data:{...c,placement:n}}}}},Gc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:l={fn:k=>{let{x:C,y:v}=k;return{x:C,y:v}}},...c}=fi(t,e),u={x:i,y:s},f=await Jo(e,c),d=je(ze(o)),p=xn(d);let m=u[p],g=u[d];if(r){const k=p==="y"?"top":"left",C=p==="y"?"bottom":"right",v=m+f[k],S=m-f[C];m=yo(v,m,S)}if(n){const k=d==="y"?"top":"left",C=d==="y"?"bottom":"right",v=g+f[k],S=g-f[C];g=yo(v,g,S)}const y=l.fn({...e,[p]:m,[d]:g});return{...y,data:{x:y.x-i,y:y.y-s,enabled:{[p]:r,[d]:n}}}}}},Yc=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:o,rects:r,platform:n,elements:l}=e,{apply:c=()=>{},...u}=fi(t,e),f=await Jo(e,u),d=ze(o),p=mi(o),m=je(o)==="y",{width:g,height:y}=r.floating;let k,C;d==="top"||d==="bottom"?(k=d,C=p===(await(n.isRTL==null?void 0:n.isRTL(l.floating))?"start":"end")?"left":"right"):(C=d,k=p==="end"?"top":"bottom");const v=y-f.top-f.bottom,S=g-f.left-f.right,w=Ae(y-f[k],v),_=Ae(g-f[C],S),z=!e.middlewareData.shift;let F=w,H=_;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(H=S),(s=e.middlewareData.shift)!=null&&s.enabled.y&&(F=v),z&&!p){const I=Mt(f.left,0),Y=Mt(f.right,0),J=Mt(f.top,0),St=Mt(f.bottom,0);m?H=g-2*(I!==0||Y!==0?I+Y:Mt(f.left,f.right)):F=y-2*(J!==0||St!==0?J+St:Mt(f.top,f.bottom))}await c({...e,availableWidth:H,availableHeight:F});const L=await n.getDimensions(l.floating);return g!==L.width||y!==L.height?{reset:{rects:!0}}:{}}}};function Ts(){return typeof window<"u"}function gi(t){return Cn(t)?(t.nodeName||"").toLowerCase():"#document"}function Vt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function fe(t){var e;return(e=(Cn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Cn(t){return Ts()?t instanceof Node||t instanceof Vt(t).Node:!1}function ee(t){return Ts()?t instanceof Element||t instanceof Vt(t).Element:!1}function pe(t){return Ts()?t instanceof HTMLElement||t instanceof Vt(t).HTMLElement:!1}function jr(t){return!Ts()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Vt(t).ShadowRoot}function Xi(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=ie(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!["inline","contents"].includes(o)}function Xc(t){return["table","td","th"].includes(gi(t))}function Is(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ps(t){const e=tr(),i=ee(t)?ie(t):t;return["transform","translate","scale","rotate","perspective"].some(s=>i[s]?i[s]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(s=>(i.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(i.contain||"").includes(s))}function Qc(t){let e=Ee(t);for(;pe(e)&&!ci(e);){if(Ps(e))return e;if(Is(e))return null;e=Ee(e)}return null}function tr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ci(t){return["html","body","#document"].includes(gi(t))}function ie(t){return Vt(t).getComputedStyle(t)}function Ns(t){return ee(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ee(t){if(gi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||jr(t)&&t.host||fe(t);return jr(e)?e.host:e}function Sn(t){const e=Ee(t);return ci(e)?t.ownerDocument?t.ownerDocument.body:t.body:pe(e)&&Xi(e)?e:Sn(e)}function Hi(t,e,i){var s;e===void 0&&(e=[]),i===void 0&&(i=!0);const o=Sn(t),r=o===((s=t.ownerDocument)==null?void 0:s.body),n=Vt(o);if(r){const l=wo(n);return e.concat(n,n.visualViewport||[],Xi(o)?o:[],l&&i?Hi(l):[])}return e.concat(o,Hi(o,[],i))}function wo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function $n(t){const e=ie(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=pe(t),r=o?t.offsetWidth:i,n=o?t.offsetHeight:s,l=ys(i)!==r||ys(s)!==n;return l&&(i=r,s=n),{width:i,height:s,$:l}}function er(t){return ee(t)?t:t.contextElement}function ii(t){const e=er(t);if(!pe(e))return he(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:r}=$n(e);let n=(r?ys(i.width):i.width)/s,l=(r?ys(i.height):i.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const Zc=he(0);function An(t){const e=Vt(t);return!tr()||!e.visualViewport?Zc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Jc(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==Vt(t)?!1:e}function Ke(t,e,i,s){e===void 0&&(e=!1),i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=er(t);let n=he(1);e&&(s?ee(s)&&(n=ii(s)):n=ii(t));const l=Jc(r,i,s)?An(r):he(0);let c=(o.left+l.x)/n.x,u=(o.top+l.y)/n.y,f=o.width/n.x,d=o.height/n.y;if(r){const p=Vt(r),m=s&&ee(s)?Vt(s):s;let g=p,y=wo(g);for(;y&&s&&m!==g;){const k=ii(y),C=y.getBoundingClientRect(),v=ie(y),S=C.left+(y.clientLeft+parseFloat(v.paddingLeft))*k.x,w=C.top+(y.clientTop+parseFloat(v.paddingTop))*k.y;c*=k.x,u*=k.y,f*=k.x,d*=k.y,c+=S,u+=w,g=Vt(y),y=wo(g)}}return ws({width:f,height:d,x:c,y:u})}function ir(t,e){const i=Ns(t).scrollLeft;return e?e.left+i:Ke(fe(t)).left+i}function zn(t,e,i){i===void 0&&(i=!1);const s=t.getBoundingClientRect(),o=s.left+e.scrollLeft-(i?0:ir(t,s)),r=s.top+e.scrollTop;return{x:o,y:r}}function td(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const r=o==="fixed",n=fe(s),l=e?Is(e.floating):!1;if(s===n||l&&r)return i;let c={scrollLeft:0,scrollTop:0},u=he(1);const f=he(0),d=pe(s);if((d||!d&&!r)&&((gi(s)!=="body"||Xi(n))&&(c=Ns(s)),pe(s))){const m=Ke(s);u=ii(s),f.x=m.x+s.clientLeft,f.y=m.y+s.clientTop}const p=n&&!d&&!r?zn(n,c,!0):he(0);return{width:i.width*u.x,height:i.height*u.y,x:i.x*u.x-c.scrollLeft*u.x+f.x+p.x,y:i.y*u.y-c.scrollTop*u.y+f.y+p.y}}function ed(t){return Array.from(t.getClientRects())}function id(t){const e=fe(t),i=Ns(t),s=t.ownerDocument.body,o=Mt(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),r=Mt(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+ir(t);const l=-i.scrollTop;return ie(s).direction==="rtl"&&(n+=Mt(e.clientWidth,s.clientWidth)-o),{width:o,height:r,x:n,y:l}}function sd(t,e){const i=Vt(t),s=fe(t),o=i.visualViewport;let r=s.clientWidth,n=s.clientHeight,l=0,c=0;if(o){r=o.width,n=o.height;const u=tr();(!u||u&&e==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:r,height:n,x:l,y:c}}function od(t,e){const i=Ke(t,!0,e==="fixed"),s=i.top+t.clientTop,o=i.left+t.clientLeft,r=pe(t)?ii(t):he(1),n=t.clientWidth*r.x,l=t.clientHeight*r.y,c=o*r.x,u=s*r.y;return{width:n,height:l,x:c,y:u}}function Kr(t,e,i){let s;if(e==="viewport")s=sd(t,i);else if(e==="document")s=id(fe(t));else if(ee(e))s=od(e,i);else{const o=An(t);s={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return ws(s)}function En(t,e){const i=Ee(t);return i===e||!ee(i)||ci(i)?!1:ie(i).position==="fixed"||En(i,e)}function rd(t,e){const i=e.get(t);if(i)return i;let s=Hi(t,[],!1).filter(l=>ee(l)&&gi(l)!=="body"),o=null;const r=ie(t).position==="fixed";let n=r?Ee(t):t;for(;ee(n)&&!ci(n);){const l=ie(n),c=Ps(n);!c&&l.position==="fixed"&&(o=null),(r?!c&&!o:!c&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Xi(n)&&!c&&En(t,n))?s=s.filter(f=>f!==n):o=l,n=Ee(n)}return e.set(t,s),s}function ad(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const n=[...i==="clippingAncestors"?Is(e)?[]:rd(e,this._c):[].concat(i),s],l=n[0],c=n.reduce((u,f)=>{const d=Kr(e,f,o);return u.top=Mt(d.top,u.top),u.right=Ae(d.right,u.right),u.bottom=Ae(d.bottom,u.bottom),u.left=Mt(d.left,u.left),u},Kr(e,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function nd(t){const{width:e,height:i}=$n(t);return{width:e,height:i}}function ld(t,e,i){const s=pe(e),o=fe(e),r=i==="fixed",n=Ke(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=he(0);if(s||!s&&!r)if((gi(e)!=="body"||Xi(o))&&(l=Ns(e)),s){const p=Ke(e,!0,r,e);c.x=p.x+e.clientLeft,c.y=p.y+e.clientTop}else o&&(c.x=ir(o));const u=o&&!s&&!r?zn(o,l):he(0),f=n.left+l.scrollLeft-c.x-u.x,d=n.top+l.scrollTop-c.y-u.y;return{x:f,y:d,width:n.width,height:n.height}}function Ks(t){return ie(t).position==="static"}function Gr(t,e){if(!pe(t)||ie(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return fe(t)===i&&(i=i.ownerDocument.body),i}function Tn(t,e){const i=Vt(t);if(Is(t))return i;if(!pe(t)){let o=Ee(t);for(;o&&!ci(o);){if(ee(o)&&!Ks(o))return o;o=Ee(o)}return i}let s=Gr(t,e);for(;s&&Xc(s)&&Ks(s);)s=Gr(s,e);return s&&ci(s)&&Ks(s)&&!Ps(s)?i:s||Qc(t)||i}const cd=async function(t){const e=this.getOffsetParent||Tn,i=this.getDimensions,s=await i(t.floating);return{reference:ld(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function dd(t){return ie(t).direction==="rtl"}const ps={convertOffsetParentRelativeRectToViewportRelativeRect:td,getDocumentElement:fe,getClippingRect:ad,getOffsetParent:Tn,getElementRects:cd,getClientRects:ed,getDimensions:nd,getScale:ii,isElement:ee,isRTL:dd};function In(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function hd(t,e){let i=null,s;const o=fe(t);function r(){var l;clearTimeout(s),(l=i)==null||l.disconnect(),i=null}function n(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const u=t.getBoundingClientRect(),{left:f,top:d,width:p,height:m}=u;if(l||e(),!p||!m)return;const g=os(d),y=os(o.clientWidth-(f+p)),k=os(o.clientHeight-(d+m)),C=os(f),S={rootMargin:-g+"px "+-y+"px "+-k+"px "+-C+"px",threshold:Mt(0,Ae(1,c))||1};let w=!0;function _(z){const F=z[0].intersectionRatio;if(F!==c){if(!w)return n();F?n(!1,F):s=setTimeout(()=>{n(!1,1e-7)},1e3)}F===1&&!In(u,t.getBoundingClientRect())&&n(),w=!1}try{i=new IntersectionObserver(_,{...S,root:o.ownerDocument})}catch{i=new IntersectionObserver(_,S)}i.observe(t)}return n(!0),r}function ud(t,e,i,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,u=er(t),f=o||r?[...u?Hi(u):[],...Hi(e)]:[];f.forEach(C=>{o&&C.addEventListener("scroll",i,{passive:!0}),r&&C.addEventListener("resize",i)});const d=u&&l?hd(u,i):null;let p=-1,m=null;n&&(m=new ResizeObserver(C=>{let[v]=C;v&&v.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var S;(S=m)==null||S.observe(e)})),i()}),u&&!c&&m.observe(u),m.observe(e));let g,y=c?Ke(t):null;c&&k();function k(){const C=Ke(t);y&&!In(y,C)&&i(),y=C,g=requestAnimationFrame(k)}return i(),()=>{var C;f.forEach(v=>{o&&v.removeEventListener("scroll",i),r&&v.removeEventListener("resize",i)}),d==null||d(),(C=m)==null||C.disconnect(),m=null,c&&cancelAnimationFrame(g)}}const pd=Kc,fd=Gc,md=qc,Yr=Yc,gd=Wc,bd=(t,e,i)=>{const s=new Map,o={platform:ps,...i},r={...o.platform,_c:s};return Uc(t,e,{...o,platform:r})};function vd(t){return yd(t)}function Gs(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function yd(t){for(let e=t;e;e=Gs(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Gs(t);e;e=Gs(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||Ps(i)||e.tagName==="BODY"))return e}return null}function _d(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var K=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,o=0,r=0,n=0,l=0,c=0,u=0,f=0;i?t.top<e.top?(s=t.left,o=t.bottom,r=t.right,n=t.bottom,l=e.left,c=e.top,u=e.right,f=e.top):(s=e.left,o=e.bottom,r=e.right,n=e.bottom,l=t.left,c=t.top,u=t.right,f=t.top):t.left<e.left?(s=t.right,o=t.top,r=e.left,n=e.top,l=t.right,c=t.bottom,u=e.left,f=e.bottom):(s=e.right,o=e.top,r=t.left,n=t.top,l=e.right,c=e.bottom,u=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||_d(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=ud(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[pd({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Yr({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(md({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(fd({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Yr({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(gd({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>ps.getOffsetParent(i,vd):ps.getOffsetParent;bd(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Wi(ve({},ps),{getOffsetParent:e})}).then(({x:i,y:s,middlewareData:o,placement:r})=>{const n=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const c=o.arrow.x,u=o.arrow.y;let f="",d="",p="",m="";if(this.arrowPlacement==="start"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?g:"",m=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":g,m=n?g:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof c=="number"?`${c}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:d,bottom:p,left:m,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${D({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${D({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};K.styles=[M,Oc];a([A(".popup")],K.prototype,"popup",2);a([A(".popup__arrow")],K.prototype,"arrowEl",2);a([h()],K.prototype,"anchor",2);a([h({type:Boolean,reflect:!0})],K.prototype,"active",2);a([h({reflect:!0})],K.prototype,"placement",2);a([h({reflect:!0})],K.prototype,"strategy",2);a([h({type:Number})],K.prototype,"distance",2);a([h({type:Number})],K.prototype,"skidding",2);a([h({type:Boolean})],K.prototype,"arrow",2);a([h({attribute:"arrow-placement"})],K.prototype,"arrowPlacement",2);a([h({attribute:"arrow-padding",type:Number})],K.prototype,"arrowPadding",2);a([h({type:Boolean})],K.prototype,"flip",2);a([h({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],K.prototype,"flipFallbackPlacements",2);a([h({attribute:"flip-fallback-strategy"})],K.prototype,"flipFallbackStrategy",2);a([h({type:Object})],K.prototype,"flipBoundary",2);a([h({attribute:"flip-padding",type:Number})],K.prototype,"flipPadding",2);a([h({type:Boolean})],K.prototype,"shift",2);a([h({type:Object})],K.prototype,"shiftBoundary",2);a([h({attribute:"shift-padding",type:Number})],K.prototype,"shiftPadding",2);a([h({attribute:"auto-size"})],K.prototype,"autoSize",2);a([h()],K.prototype,"sync",2);a([h({type:Object})],K.prototype,"autoSizeBoundary",2);a([h({attribute:"auto-size-padding",type:Number})],K.prototype,"autoSizePadding",2);a([h({attribute:"hover-bridge",type:Boolean})],K.prototype,"hoverBridge",2);var Pn=new Map,wd=new WeakMap;function xd(t){return t??{keyframes:[],options:{duration:0}}}function Xr(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function X(t,e){Pn.set(t,xd(e))}function et(t,e,i){const s=wd.get(t);if(s!=null&&s[e])return Xr(s[e],i.dir);const o=Pn.get(e);return o?Xr(o,i.dir):{keyframes:[],options:{duration:0}}}function At(t,e){return new Promise(i=>{function s(o){o.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}function lt(t,e,i){return new Promise(s=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,Wi(ve({},i),{duration:xo()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function Qr(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function xo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ut(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}function xs(t,e){return t.map(i=>Wi(ve({},i),{height:i.height==="auto"?`${e}px`:i.height}))}var mt=class extends T{constructor(){super(),this.localize=new j(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Qr(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Qr(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ut(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=et(this,"tooltip.show",{dir:this.localize.dir()});await lt(this.popup.popup,i,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ut(this.body);const{keyframes:i,options:s}=et(this,"tooltip.hide",{dir:this.localize.dir()});await lt(this.popup.popup,i,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,At(this,"sl-after-hide")}render(){return x`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${D({tooltip:!0,"tooltip--open":this.open})}
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
    `}};mt.styles=[M,Rc];mt.dependencies={"sl-popup":K};a([A("slot:not([name])")],mt.prototype,"defaultSlot",2);a([A(".tooltip__body")],mt.prototype,"body",2);a([A("sl-popup")],mt.prototype,"popup",2);a([h()],mt.prototype,"content",2);a([h()],mt.prototype,"placement",2);a([h({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);a([h({type:Number})],mt.prototype,"distance",2);a([h({type:Boolean,reflect:!0})],mt.prototype,"open",2);a([h({type:Number})],mt.prototype,"skidding",2);a([h()],mt.prototype,"trigger",2);a([h({type:Boolean})],mt.prototype,"hoist",2);a([$("open",{waitUntilFirstUpdate:!0})],mt.prototype,"handleOpenChange",1);a([$(["content","distance","hoist","placement","skidding"])],mt.prototype,"handleOptionsChange",1);a([$("disabled")],mt.prototype,"handleDisabledChange",1);X("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});X("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var kd="sl-tooltip";mt.define("sl-tooltip");var Cd=N({tagName:kd,elementClass:mt,react:P,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"}),de=Cd,Sd=R`
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
`,q=class extends T{constructor(){super(...arguments),this.formControlController=new ye(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(t,o,r,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return x`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
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
            class=${D({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${E(this.name)}
              .value=${qe(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${E(this.placeholder)}
              rows=${E(this.rows)}
              minlength=${E(this.minlength)}
              maxlength=${E(this.maxlength)}
              autocapitalize=${E(this.autocapitalize)}
              autocorrect=${E(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${E(this.spellcheck)}
              enterkeyhint=${E(this.enterkeyhint)}
              inputmode=${E(this.inputmode)}
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};q.styles=[M,Ye,Sd];a([A(".textarea__control")],q.prototype,"input",2);a([A(".textarea__size-adjuster")],q.prototype,"sizeAdjuster",2);a([O()],q.prototype,"hasFocus",2);a([h()],q.prototype,"title",2);a([h()],q.prototype,"name",2);a([h()],q.prototype,"value",2);a([h({reflect:!0})],q.prototype,"size",2);a([h({type:Boolean,reflect:!0})],q.prototype,"filled",2);a([h()],q.prototype,"label",2);a([h({attribute:"help-text"})],q.prototype,"helpText",2);a([h()],q.prototype,"placeholder",2);a([h({type:Number})],q.prototype,"rows",2);a([h()],q.prototype,"resize",2);a([h({type:Boolean,reflect:!0})],q.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],q.prototype,"readonly",2);a([h({reflect:!0})],q.prototype,"form",2);a([h({type:Boolean,reflect:!0})],q.prototype,"required",2);a([h({type:Number})],q.prototype,"minlength",2);a([h({type:Number})],q.prototype,"maxlength",2);a([h()],q.prototype,"autocapitalize",2);a([h()],q.prototype,"autocorrect",2);a([h()],q.prototype,"autocomplete",2);a([h({type:Boolean})],q.prototype,"autofocus",2);a([h()],q.prototype,"enterkeyhint",2);a([h({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],q.prototype,"spellcheck",2);a([h()],q.prototype,"inputmode",2);a([hi()],q.prototype,"defaultValue",2);a([$("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);a([$("rows",{waitUntilFirstUpdate:!0})],q.prototype,"handleRowsChange",1);a([$("value",{waitUntilFirstUpdate:!0})],q.prototype,"handleValueChange",1);var $d="sl-textarea";q.define("sl-textarea");N({tagName:$d,elementClass:q,react:P,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var Ad=R`
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
`,zd=R`
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
`,Ed=R`
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
`,ft=class extends T{constructor(){super(...arguments),this.formControlController=new ye(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new zt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return x`
      <div
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${D({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${E(this.value)}
            .indeterminate=${qe(this.indeterminate)}
            .checked=${qe(this.checked)}
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
            ${this.checked?x`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?x`
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
    `}};ft.styles=[M,Ye,Ed];ft.dependencies={"sl-icon":Q};a([A('input[type="checkbox"]')],ft.prototype,"input",2);a([O()],ft.prototype,"hasFocus",2);a([h()],ft.prototype,"title",2);a([h()],ft.prototype,"name",2);a([h()],ft.prototype,"value",2);a([h({reflect:!0})],ft.prototype,"size",2);a([h({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],ft.prototype,"checked",2);a([h({type:Boolean,reflect:!0})],ft.prototype,"indeterminate",2);a([hi("checked")],ft.prototype,"defaultChecked",2);a([h({reflect:!0})],ft.prototype,"form",2);a([h({type:Boolean,reflect:!0})],ft.prototype,"required",2);a([h({attribute:"help-text"})],ft.prototype,"helpText",2);a([$("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);a([$(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ft.prototype,"handleStateChange",1);var Td=R`
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
`,bi=class extends T{constructor(){super(...arguments),this.localize=new j(this)}render(){return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};bi.styles=[M,Td];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zr(t,e,i){return t?e(t):i==null?void 0:i(t)}var ct=class ko extends T{constructor(){super(...arguments),this.localize=new j(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ut(this.childrenContainer);const{keyframes:e,options:i}=et(this,"tree-item.collapse",{dir:this.localize.dir()});await lt(this.childrenContainer,xs(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&ko.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ut(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:i}=et(this,"tree-item.expand",{dir:this.localize.dir()});await lt(this.childrenContainer,xs(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>ko.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const e=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return x`
      <div
        part="base"
        class="${D({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${D({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${Zr(this.loading,()=>x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Zr(this.selectable,()=>x`
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
                ?checked="${qe(this.selected)}"
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
    `}};ct.styles=[M,zd];ct.dependencies={"sl-checkbox":ft,"sl-icon":Q,"sl-spinner":bi};a([O()],ct.prototype,"indeterminate",2);a([O()],ct.prototype,"isLeaf",2);a([O()],ct.prototype,"loading",2);a([O()],ct.prototype,"selectable",2);a([h({type:Boolean,reflect:!0})],ct.prototype,"expanded",2);a([h({type:Boolean,reflect:!0})],ct.prototype,"selected",2);a([h({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],ct.prototype,"lazy",2);a([A("slot:not([name])")],ct.prototype,"defaultSlot",2);a([A("slot[name=children]")],ct.prototype,"childrenSlot",2);a([A(".tree-item__item")],ct.prototype,"itemElement",2);a([A(".tree-item__children")],ct.prototype,"childrenContainer",2);a([A(".tree-item__expand-button slot")],ct.prototype,"expandButtonSlot",2);a([$("loading",{waitUntilFirstUpdate:!0})],ct.prototype,"handleLoadingChange",1);a([$("disabled")],ct.prototype,"handleDisabledChange",1);a([$("selected")],ct.prototype,"handleSelectedChange",1);a([$("expanded",{waitUntilFirstUpdate:!0})],ct.prototype,"handleExpandedChange",1);a([$("expanded",{waitUntilFirstUpdate:!0})],ct.prototype,"handleExpandAnimation",1);a([$("lazy",{waitUntilFirstUpdate:!0})],ct.prototype,"handleLazyChange",1);var si=ct;X("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});X("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function ht(t,e,i){const s=o=>Object.is(o,-0)?0:o;return t<e?s(e):t>i?s(i):s(t)}function Jr(t,e=!1){function i(r){const n=r.getChildrenItems({includeDisabled:!1});if(n.length){const l=n.every(u=>u.selected),c=n.every(u=>!u.selected&&!u.indeterminate);r.selected=l,r.indeterminate=!l&&!c}}function s(r){const n=r.parentElement;si.isTreeItem(n)&&(i(n),s(n))}function o(r){for(const n of r.getChildrenItems())n.selected=e?r.selected||n.selected:!n.disabled&&r.selected,o(n);e&&i(r)}o(t),s(t)}var Ne=class extends T{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new j(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),s=this.getExpandButtonIcon(e);s&&(i===null?t.append(s):i.hasAttribute("data-default")&&i.replaceWith(s))})},this.handleTreeChanged=t=>{for(const e of t){const i=[...e.addedNodes].filter(si.isTreeItem),s=[...e.removedNodes].filter(si.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),si.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const s=i.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${t}-icon`,s}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Jr(t);else if(this.selection==="single"||t.isLeaf){const s=this.getAllTreeItems();for(const o of s)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(s=>!e.includes(s)))&&Promise.all(i.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t==null||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var r;return["input","textarea"].includes((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())}))return;const e=this.getFocusableItems(),i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const o=e.findIndex(c=>c.matches(":focus")),r=e[o],n=c=>{const u=e[ht(c,0,e.length-1)];this.focusItem(u)},l=c=>{r.expanded=c};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):i&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?n(o+1):l(!0):i&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"?!r||r.disabled||r.isLeaf||!r.expanded?n(o-1):l(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(r.disabled||this.selectItem(r))}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),s=t.composedPath().some(o=>{var r;return(r=o==null?void 0:o.classList)==null?void 0:r.contains("tree-item__expand-button")});!i||i.disabled||e!==this.clickTarget||(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>Jr(i,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{var s;if(i.disabled)return!1;const o=(s=i.parentElement)==null?void 0:s.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(i),!e.has(i)})}render(){return x`
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
    `}};Ne.styles=[M,Ad];a([A("slot:not([name])")],Ne.prototype,"defaultSlot",2);a([A("slot[name=expand-icon]")],Ne.prototype,"expandedIconSlot",2);a([A("slot[name=collapse-icon]")],Ne.prototype,"collapsedIconSlot",2);a([h()],Ne.prototype,"selection",2);a([$("selection")],Ne.prototype,"handleSelectionChange",1);var Id="sl-tree";Ne.define("sl-tree");N({tagName:Id,elementClass:Ne,react:P,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var Pd="sl-tree-item";si.define("sl-tree-item");N({tagName:Pd,elementClass:si,react:P,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var Nd=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Re=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:s,value:o}=Nd.find(r=>Math.abs(i)<r.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/o),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let r;s==="minute"?r=rs("second"):s==="hour"?r=rs("minute"):s==="day"?r=rs("hour"):r=rs("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),r)}return x` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};a([O()],Re.prototype,"isoTime",2);a([O()],Re.prototype,"relativeTime",2);a([h()],Re.prototype,"date",2);a([h()],Re.prototype,"format",2);a([h()],Re.prototype,"numeric",2);a([h({type:Boolean})],Re.prototype,"sync",2);function rs(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}var Rd="sl-relative-time";Re.define("sl-relative-time");N({tagName:Rd,elementClass:Re,react:P,events:{},displayName:"SlRelativeTime"});var Od=R`
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
`,it=class extends T{constructor(){super(...arguments),this.formControlController=new ye(this),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new j(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",r=e*t;if(o){const n=`${e-r}px + ${t} * ${s}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${s} / 2))`}else{const n=`${r}px - ${t} * ${s}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return x`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
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
            class=${D({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${E(this.name)}
              ?disabled=${this.disabled}
              min=${E(this.min)}
              max=${E(this.max)}
              step=${E(this.step)}
              .value=${qe(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?x`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};it.styles=[M,Ye,Od];a([A(".range__control")],it.prototype,"input",2);a([A(".range__tooltip")],it.prototype,"output",2);a([O()],it.prototype,"hasFocus",2);a([O()],it.prototype,"hasTooltip",2);a([h()],it.prototype,"title",2);a([h()],it.prototype,"name",2);a([h({type:Number})],it.prototype,"value",2);a([h()],it.prototype,"label",2);a([h({attribute:"help-text"})],it.prototype,"helpText",2);a([h({type:Boolean,reflect:!0})],it.prototype,"disabled",2);a([h({type:Number})],it.prototype,"min",2);a([h({type:Number})],it.prototype,"max",2);a([h({type:Number})],it.prototype,"step",2);a([h()],it.prototype,"tooltip",2);a([h({attribute:!1})],it.prototype,"tooltipFormatter",2);a([h({reflect:!0})],it.prototype,"form",2);a([hi()],it.prototype,"defaultValue",2);a([qi({passive:!0})],it.prototype,"handleThumbDragStart",1);a([$("value",{waitUntilFirstUpdate:!0})],it.prototype,"handleValueChange",1);a([$("disabled",{waitUntilFirstUpdate:!0})],it.prototype,"handleDisabledChange",1);a([$("hasTooltip",{waitUntilFirstUpdate:!0})],it.prototype,"syncRange",1);var Ld="sl-range";it.define("sl-range");N({tagName:Ld,elementClass:it,react:P,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var Dd="sl-resize-observer";ui.define("sl-resize-observer");N({tagName:Dd,elementClass:ui,react:P,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var Md=R`
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
 */let Co=class extends Yi{constructor(e){if(super(e),this.it=tt,e.type!==ce.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===tt||e==null)return this._t=void 0,this.it=e;if(e===Ft)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};Co.directiveName="unsafeHTML",Co.resultType=1;const fs=Gi(Co);var U=class extends T{constructor(){super(...arguments),this.formControlController=new ye(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new j(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>x`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,s=e.closest("sl-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),r=o.indexOf(this.currentOption);let n=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=r+1,n>o.length-1&&(n=0)):t.key==="ArrowUp"?(n=r-1,n<0&&(n=o.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of o)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),s=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],s=[];t.forEach(o=>s.push(o.value)),this.setSelectedOptions(t.filter(o=>i.includes(o.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const s=this.getAllOptions();this.selectedOptions=s.filter(r=>r.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(r=>r.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const r=this.selectedOptions[0];this.value=(t=r==null?void 0:r.value)!=null?t:"",this.displayLabel=(i=(e=r==null?void 0:r.getTextLabel)==null?void 0:e.call(r))!=null?i:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return x`<div @sl-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?fs(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return x`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return x``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ut(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=et(this,"select.show",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.currentOption&&go(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ut(this);const{keyframes:t,options:e}=et(this,"select.hide",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,At(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,At(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return x`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
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
            class=${D({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?x`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?x`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};U.styles=[M,Ye,Md];U.dependencies={"sl-icon":Q,"sl-popup":K,"sl-tag":_e};a([A(".select")],U.prototype,"popup",2);a([A(".select__combobox")],U.prototype,"combobox",2);a([A(".select__display-input")],U.prototype,"displayInput",2);a([A(".select__value-input")],U.prototype,"valueInput",2);a([A(".select__listbox")],U.prototype,"listbox",2);a([O()],U.prototype,"hasFocus",2);a([O()],U.prototype,"displayLabel",2);a([O()],U.prototype,"currentOption",2);a([O()],U.prototype,"selectedOptions",2);a([O()],U.prototype,"valueHasChanged",2);a([h()],U.prototype,"name",2);a([O()],U.prototype,"value",1);a([h({attribute:"value"})],U.prototype,"defaultValue",2);a([h({reflect:!0})],U.prototype,"size",2);a([h()],U.prototype,"placeholder",2);a([h({type:Boolean,reflect:!0})],U.prototype,"multiple",2);a([h({attribute:"max-options-visible",type:Number})],U.prototype,"maxOptionsVisible",2);a([h({type:Boolean,reflect:!0})],U.prototype,"disabled",2);a([h({type:Boolean})],U.prototype,"clearable",2);a([h({type:Boolean,reflect:!0})],U.prototype,"open",2);a([h({type:Boolean})],U.prototype,"hoist",2);a([h({type:Boolean,reflect:!0})],U.prototype,"filled",2);a([h({type:Boolean,reflect:!0})],U.prototype,"pill",2);a([h()],U.prototype,"label",2);a([h({reflect:!0})],U.prototype,"placement",2);a([h({attribute:"help-text"})],U.prototype,"helpText",2);a([h({reflect:!0})],U.prototype,"form",2);a([h({type:Boolean,reflect:!0})],U.prototype,"required",2);a([h()],U.prototype,"getTag",2);a([$("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1);a([$(["defaultValue","value"],{waitUntilFirstUpdate:!0})],U.prototype,"handleValueChange",1);a([$("open",{waitUntilFirstUpdate:!0})],U.prototype,"handleOpenChange",1);X("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});X("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Fd="sl-select";U.define("sl-select");N({tagName:Fd,elementClass:U,react:P,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var Vd=R`
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
`,Rs=class extends T{constructor(){super(...arguments),this.effect="none"}render(){return x`
      <div
        part="base"
        class=${D({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Rs.styles=[M,Vd];a([h()],Rs.prototype,"effect",2);var Bd="sl-skeleton";Rs.define("sl-skeleton");N({tagName:Bd,elementClass:Rs,react:P,events:{},displayName:"SlSkeleton"});var Hd="sl-spinner";bi.define("sl-spinner");N({tagName:Hd,elementClass:bi,react:P,events:{},displayName:"SlSpinner"});var Ud=R`
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
`;function Di(t,e){function i(o){const r=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,l=r.left+n.scrollX,c=r.top+n.scrollY,u=o.pageX-l,f=o.pageY-c;e!=null&&e.onMove&&e.onMove(u,f)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),e!=null&&e.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),(e==null?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}var ta=()=>null,Pt=class extends T{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new j(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=ta,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:i,size:s,snapThreshold:o,isRtl:r,vertical:n})=>{let l=i,c=Number.POSITIVE_INFINITY;return e.forEach(u=>{let f;if(u.startsWith("repeat(")){const p=t.substring(7,t.length-1),m=p.endsWith("%"),g=Number.parseFloat(p),y=m?s*(g/100):g;f=Math.round((r&&!n?s-i:i)/y)*y}else u.endsWith("%")?f=s*(Number.parseFloat(u)/100):f=Number.parseFloat(u);r&&!n&&(f=s-f);const d=Math.abs(i-f);d<=o&&d<c&&(l=f,c=d)}),l}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=ta}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Di(this,{onMove:(i,s)=>{var o;let r=this.vertical?s:i;this.primary==="end"&&(r=this.size-r),r=(o=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?o:r,this.position=ht(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=ht(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`,this.style[e]="",x`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${E(this.disabled?void 0:"0")}
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
    `}};Pt.styles=[M,Ud];a([A(".divider")],Pt.prototype,"divider",2);a([h({type:Number,reflect:!0})],Pt.prototype,"position",2);a([h({attribute:"position-in-pixels",type:Number})],Pt.prototype,"positionInPixels",2);a([h({type:Boolean,reflect:!0})],Pt.prototype,"vertical",2);a([h({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);a([h()],Pt.prototype,"primary",2);a([h({reflect:!0})],Pt.prototype,"snap",1);a([h({type:Number,attribute:"snap-threshold"})],Pt.prototype,"snapThreshold",2);a([$("position")],Pt.prototype,"handlePositionChange",1);a([$("positionInPixels")],Pt.prototype,"handlePositionInPixelsChange",1);a([$("vertical")],Pt.prototype,"handleVerticalChange",1);var Wd="sl-split-panel";Pt.define("sl-split-panel");N({tagName:Wd,elementClass:Pt,react:P,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var qd=R`
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
`,jd=0,qt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.attrId=++jd,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,x`
      <div
        part="base"
        class=${D({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?x`
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
    `}};qt.styles=[M,qd];qt.dependencies={"sl-icon-button":pt};a([A(".tab")],qt.prototype,"tab",2);a([h({reflect:!0})],qt.prototype,"panel",2);a([h({type:Boolean,reflect:!0})],qt.prototype,"active",2);a([h({type:Boolean,reflect:!0})],qt.prototype,"closable",2);a([h({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);a([h({type:Number,reflect:!0})],qt.prototype,"tabIndex",2);a([$("active")],qt.prototype,"handleActiveChange",1);a([$("disabled")],qt.prototype,"handleDisabledChange",1);var Kd="sl-tab";qt.define("sl-tab");N({tagName:Kd,elementClass:qt,react:P,events:{onSlClose:"sl-close"},displayName:"SlTab"});var Gd=R`
  :host {
    display: contents;
  }
`,se=class extends T{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return x` <slot></slot> `}};se.styles=[M,Gd];a([h({reflect:!0})],se.prototype,"attr",2);a([h({attribute:"attr-old-value",type:Boolean,reflect:!0})],se.prototype,"attrOldValue",2);a([h({attribute:"char-data",type:Boolean,reflect:!0})],se.prototype,"charData",2);a([h({attribute:"char-data-old-value",type:Boolean,reflect:!0})],se.prototype,"charDataOldValue",2);a([h({attribute:"child-list",type:Boolean,reflect:!0})],se.prototype,"childList",2);a([h({type:Boolean,reflect:!0})],se.prototype,"disabled",2);a([$("disabled")],se.prototype,"handleDisabledChange",1);a([$("attr",{waitUntilFirstUpdate:!0}),$("attr-old-value",{waitUntilFirstUpdate:!0}),$("char-data",{waitUntilFirstUpdate:!0}),$("char-data-old-value",{waitUntilFirstUpdate:!0}),$("childList",{waitUntilFirstUpdate:!0})],se.prototype,"handleChange",1);var Yd="sl-mutation-observer";se.define("sl-mutation-observer");N({tagName:Yd,elementClass:se,react:P,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var Xd="sl-popup";K.define("sl-popup");N({tagName:Xd,elementClass:K,react:P,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var Qd=R`
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
`,Xe=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return x`
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
    `}};Xe.styles=[M,Qd];a([A(".progress-ring__indicator")],Xe.prototype,"indicator",2);a([O()],Xe.prototype,"indicatorOffset",2);a([h({type:Number,reflect:!0})],Xe.prototype,"value",2);a([h()],Xe.prototype,"label",2);var Zd="sl-progress-ring";Xe.define("sl-progress-ring");N({tagName:Zd,elementClass:Xe,react:P,events:{},displayName:"SlProgressRing"});var Jd=R`
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
`,oe=class extends T{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return x`
      <span
        part="base"
        class=${D({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?x` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};oe.styles=[M,Jd];oe.dependencies={"sl-icon":Q};a([O()],oe.prototype,"checked",2);a([O()],oe.prototype,"hasFocus",2);a([h()],oe.prototype,"value",2);a([h({reflect:!0})],oe.prototype,"size",2);a([h({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);a([$("checked")],oe.prototype,"handleCheckedChange",1);a([$("disabled",{waitUntilFirstUpdate:!0})],oe.prototype,"handleDisabledChange",1);var th="sl-radio";oe.define("sl-radio");N({tagName:th,elementClass:oe,react:P,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var eh=R`
  :host {
    display: inline-block;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn="important",ih=" !"+Nn,Et=Gi(class extends Yi{constructor(t){var e;if(super(t),t.type!==ce.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const o=e[s];if(o!=null){this.ft.add(s);const r=typeof o=="string"&&o.endsWith(ih);s.includes("-")||r?i.setProperty(s,r?o.slice(0,-11):o,r?Nn:""):i[s]=o}}return Ft}});let Rn=null;class On{}On.render=function(t,e){Rn(t,e)};self.QrCreator=On;(function(t){function e(l,c,u,f){var d={},p=t(u,c);p.u(l),p.J(),f=f||0;var m=p.h(),g=p.h()+2*f;return d.text=l,d.level=c,d.version=u,d.O=g,d.a=function(y,k){return y-=f,k-=f,0>y||y>=m||0>k||k>=m?!1:p.a(y,k)},d}function i(l,c,u,f,d,p,m,g,y,k){function C(v,S,w,_,z,F,H){v?(l.lineTo(S+F,w+H),l.arcTo(S,w,_,z,p)):l.lineTo(S,w)}m?l.moveTo(c+p,u):l.moveTo(c,u),C(g,f,u,f,d,-p,0),C(y,f,d,c,d,0,-p),C(k,c,d,c,u,p,0),C(m,c,u,f,u,0,p)}function s(l,c,u,f,d,p,m,g,y,k){function C(v,S,w,_){l.moveTo(v+w,S),l.lineTo(v,S),l.lineTo(v,S+_),l.arcTo(v,S,v+w,S,p)}m&&C(c,u,p,p),g&&C(f,u,-p,p),y&&C(f,d,-p,-p),k&&C(c,d,p,-p)}function o(l,c){var u=c.fill;if(typeof u=="string")l.fillStyle=u;else{var f=u.type,d=u.colorStops;if(u=u.position.map(m=>Math.round(m*c.size)),f==="linear-gradient")var p=l.createLinearGradient.apply(l,u);else if(f==="radial-gradient")p=l.createRadialGradient.apply(l,u);else throw Error("Unsupported fill");d.forEach(([m,g])=>{p.addColorStop(m,g)}),l.fillStyle=p}}function r(l,c){t:{var u=c.text,f=c.v,d=c.N,p=c.K,m=c.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var g=e(u,f,d,m);break t}catch{}g=void 0}if(!g)return null;for(u=l.getContext("2d"),c.background&&(u.fillStyle=c.background,u.fillRect(c.left,c.top,c.size,c.size)),f=g.O,p=c.size/f,u.beginPath(),m=0;m<f;m+=1)for(d=0;d<f;d+=1){var y=u,k=c.left+d*p,C=c.top+m*p,v=m,S=d,w=g.a,_=k+p,z=C+p,F=v-1,H=v+1,L=S-1,I=S+1,Y=Math.floor(Math.min(.5,Math.max(0,c.R))*p),J=w(v,S),St=w(F,L),dt=w(F,S);F=w(F,I);var Zt=w(v,I);I=w(H,I),S=w(H,S),H=w(H,L),v=w(v,L),k=Math.round(k),C=Math.round(C),_=Math.round(_),z=Math.round(z),J?i(y,k,C,_,z,Y,!dt&&!v,!dt&&!Zt,!S&&!Zt,!S&&!v):s(y,k,C,_,z,Y,dt&&v&&St,dt&&Zt&&F,S&&Zt&&I,S&&v&&H)}return o(u,c),u.fill(),l}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Rn=function(l,c){var u={};Object.assign(u,n,l),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,c instanceof HTMLCanvasElement?((c.width!==u.size||c.height!==u.size)&&(c.width=u.size,c.height=u.size),c.getContext("2d").clearRect(0,0,c.width,c.height),r(c,u)):(l=document.createElement("canvas"),l.width=u.size,l.height=u.size,u=r(l,u),c.appendChild(u))}})(function(){function t(c){var u=i.s(c);return{S:function(){return 4},b:function(){return u.length},write:function(f){for(var d=0;d<u.length;d+=1)f.put(u[d],8)}}}function e(){var c=[],u=0,f={B:function(){return c},c:function(d){return(c[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var m=0;m<p;m+=1)f.m((d>>>p-m-1&1)==1)},f:function(){return u},m:function(d){var p=Math.floor(u/8);c.length<=p&&c.push(0),d&&(c[p]|=128>>>u%8),u+=1}};return f}function i(c,u){function f(v,S){for(var w=-1;7>=w;w+=1)if(!(-1>=v+w||g<=v+w))for(var _=-1;7>=_;_+=1)-1>=S+_||g<=S+_||(m[v+w][S+_]=0<=w&&6>=w&&(_==0||_==6)||0<=_&&6>=_&&(w==0||w==6)||2<=w&&4>=w&&2<=_&&4>=_)}function d(v,S){for(var w=g=4*c+17,_=Array(w),z=0;z<w;z+=1){_[z]=Array(w);for(var F=0;F<w;F+=1)_[z][F]=null}for(m=_,f(0,0),f(g-7,0),f(0,g-7),w=r.G(c),_=0;_<w.length;_+=1)for(z=0;z<w.length;z+=1){F=w[_];var H=w[z];if(m[F][H]==null)for(var L=-2;2>=L;L+=1)for(var I=-2;2>=I;I+=1)m[F+L][H+I]=L==-2||L==2||I==-2||I==2||L==0&&I==0}for(w=8;w<g-8;w+=1)m[w][6]==null&&(m[w][6]=w%2==0);for(w=8;w<g-8;w+=1)m[6][w]==null&&(m[6][w]=w%2==0);for(w=r.w(p<<3|S),_=0;15>_;_+=1)z=!v&&(w>>_&1)==1,m[6>_?_:8>_?_+1:g-15+_][8]=z,m[8][8>_?g-_-1:9>_?15-_:14-_]=z;if(m[g-8][8]=!v,7<=c){for(w=r.A(c),_=0;18>_;_+=1)z=!v&&(w>>_&1)==1,m[Math.floor(_/3)][_%3+g-8-3]=z;for(_=0;18>_;_+=1)z=!v&&(w>>_&1)==1,m[_%3+g-8-3][Math.floor(_/3)]=z}if(y==null){for(v=l.I(c,p),w=e(),_=0;_<k.length;_+=1)z=k[_],w.put(4,4),w.put(z.b(),r.f(4,c)),z.write(w);for(_=z=0;_<v.length;_+=1)z+=v[_].j;if(w.f()>8*z)throw Error("code length overflow. ("+w.f()+">"+8*z+")");for(w.f()+4<=8*z&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*z)&&(w.put(236,8),!(w.f()>=8*z));)w.put(17,8);var Y=0;for(z=_=0,F=Array(v.length),H=Array(v.length),L=0;L<v.length;L+=1){var J=v[L].j,St=v[L].o-J;for(_=Math.max(_,J),z=Math.max(z,St),F[L]=Array(J),I=0;I<F[L].length;I+=1)F[L][I]=255&w.B()[I+Y];for(Y+=J,I=r.C(St),J=s(F[L],I.b()-1).l(I),H[L]=Array(I.b()-1),I=0;I<H[L].length;I+=1)St=I+J.b()-H[L].length,H[L][I]=0<=St?J.c(St):0}for(I=w=0;I<v.length;I+=1)w+=v[I].o;for(w=Array(w),I=Y=0;I<_;I+=1)for(L=0;L<v.length;L+=1)I<F[L].length&&(w[Y]=F[L][I],Y+=1);for(I=0;I<z;I+=1)for(L=0;L<v.length;L+=1)I<H[L].length&&(w[Y]=H[L][I],Y+=1);y=w}for(v=y,w=-1,_=g-1,z=7,F=0,S=r.F(S),H=g-1;0<H;H-=2)for(H==6&&--H;;){for(L=0;2>L;L+=1)m[_][H-L]==null&&(I=!1,F<v.length&&(I=(v[F]>>>z&1)==1),S(_,H-L)&&(I=!I),m[_][H-L]=I,--z,z==-1&&(F+=1,z=7));if(_+=w,0>_||g<=_){_-=w,w=-w;break}}}var p=o[u],m=null,g=0,y=null,k=[],C={u:function(v){v=t(v),k.push(v),y=null},a:function(v,S){if(0>v||g<=v||0>S||g<=S)throw Error(v+","+S);return m[v][S]},h:function(){return g},J:function(){for(var v=0,S=0,w=0;8>w;w+=1){d(!0,w);var _=r.D(C);(w==0||v>_)&&(v=_,S=w)}d(!1,S)}};return C}function s(c,u){if(typeof c.length>"u")throw Error(c.length+"/"+u);var f=function(){for(var p=0;p<c.length&&c[p]==0;)p+=1;for(var m=Array(c.length-p+u),g=0;g<c.length-p;g+=1)m[g]=c[g+p];return m}(),d={c:function(p){return f[p]},b:function(){return f.length},multiply:function(p){for(var m=Array(d.b()+p.b()-1),g=0;g<d.b();g+=1)for(var y=0;y<p.b();y+=1)m[g+y]^=n.i(n.g(d.c(g))+n.g(p.c(y)));return s(m,0)},l:function(p){if(0>d.b()-p.b())return d;for(var m=n.g(d.c(0))-n.g(p.c(0)),g=Array(d.b()),y=0;y<d.b();y+=1)g[y]=d.c(y);for(y=0;y<p.b();y+=1)g[y]^=n.i(n.g(p.c(y))+m);return s(g,0).l(p)}};return d}i.s=function(c){for(var u=[],f=0;f<c.length;f++){var d=c.charCodeAt(f);128>d?u.push(d):2048>d?u.push(192|d>>6,128|d&63):55296>d||57344<=d?u.push(224|d>>12,128|d>>6&63,128|d&63):(f++,d=65536+((d&1023)<<10|c.charCodeAt(f)&1023),u.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return u};var o={L:1,M:0,Q:3,H:2},r=function(){function c(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(d){for(var p=d<<10;0<=c(p)-c(1335);)p^=1335<<c(p)-c(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=c(p)-c(7973);)p^=7973<<c(p)-c(7973);return d<<12|p},G:function(d){return u[d-1]},F:function(d){switch(d){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=s([1],0),m=0;m<d;m+=1)p=p.multiply(s([1,n.i(m)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),m=0,g=0;g<p;g+=1)for(var y=0;y<p;y+=1){for(var k=0,C=d.a(g,y),v=-1;1>=v;v+=1)if(!(0>g+v||p<=g+v))for(var S=-1;1>=S;S+=1)0>y+S||p<=y+S||(v!=0||S!=0)&&C==d.a(g+v,y+S)&&(k+=1);5<k&&(m+=3+k-5)}for(g=0;g<p-1;g+=1)for(y=0;y<p-1;y+=1)k=0,d.a(g,y)&&(k+=1),d.a(g+1,y)&&(k+=1),d.a(g,y+1)&&(k+=1),d.a(g+1,y+1)&&(k+=1),(k==0||k==4)&&(m+=3);for(g=0;g<p;g+=1)for(y=0;y<p-6;y+=1)d.a(g,y)&&!d.a(g,y+1)&&d.a(g,y+2)&&d.a(g,y+3)&&d.a(g,y+4)&&!d.a(g,y+5)&&d.a(g,y+6)&&(m+=40);for(y=0;y<p;y+=1)for(g=0;g<p-6;g+=1)d.a(g,y)&&!d.a(g+1,y)&&d.a(g+2,y)&&d.a(g+3,y)&&d.a(g+4,y)&&!d.a(g+5,y)&&d.a(g+6,y)&&(m+=40);for(y=k=0;y<p;y+=1)for(g=0;g<p;g+=1)d.a(g,y)&&(k+=1);return m+=Math.abs(100*k/p/p-50)/5*10}};return f}(),n=function(){for(var c=Array(256),u=Array(256),f=0;8>f;f+=1)c[f]=1<<f;for(f=8;256>f;f+=1)c[f]=c[f-4]^c[f-5]^c[f-6]^c[f-8];for(f=0;255>f;f+=1)u[c[f]]=f;return{g:function(d){if(1>d)throw Error("glog("+d+")");return u[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return c[d]}}}(),l=function(){function c(d,p){switch(p){case o.L:return u[4*(d-1)];case o.M:return u[4*(d-1)+1];case o.Q:return u[4*(d-1)+2];case o.H:return u[4*(d-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(d,p){var m=c(d,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=m.length/3,p=[];for(var g=0;g<d;g+=1)for(var y=m[3*g],k=m[3*g+1],C=m[3*g+2],v=0;v<y;v+=1){var S=C,w={};w.o=k,w.j=S,p.push(w)}return p}};return f}();return i}());const sh=QrCreator;var jt=class extends T{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&sh.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return x`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Et({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};jt.styles=[M,eh];a([A("canvas")],jt.prototype,"canvas",2);a([h()],jt.prototype,"value",2);a([h()],jt.prototype,"label",2);a([h({type:Number})],jt.prototype,"size",2);a([h()],jt.prototype,"fill",2);a([h()],jt.prototype,"background",2);a([h({type:Number})],jt.prototype,"radius",2);a([h({attribute:"error-correction"})],jt.prototype,"errorCorrection",2);a([$(["background","errorCorrection","fill","radius","size","value"])],jt.prototype,"generate",1);var oh="sl-qr-code";jt.define("sl-qr-code");N({tagName:oh,elementClass:jt,react:P,events:{},displayName:"SlQrCode"});var Ln=R`
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
`,rh=R`
  ${Ln}

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
`,Kt=class extends T{constructor(){super(...arguments),this.hasSlotController=new zt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Li`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${D({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${E(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Kt.styles=[M,rh];a([A(".button")],Kt.prototype,"input",2);a([A(".hidden-input")],Kt.prototype,"hiddenInput",2);a([O()],Kt.prototype,"hasFocus",2);a([h({type:Boolean,reflect:!0})],Kt.prototype,"checked",2);a([h()],Kt.prototype,"value",2);a([h({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);a([h({reflect:!0})],Kt.prototype,"size",2);a([h({type:Boolean,reflect:!0})],Kt.prototype,"pill",2);a([$("disabled",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleDisabledChange",1);var ah="sl-radio-button";Kt.define("sl-radio-button");N({tagName:ah,elementClass:Kt,react:P,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var nh=R`
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
`,lh=R`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Oe=class extends T{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Si(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Si(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Si(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Si(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=Si(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",i===0),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return x`
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
    `}};Oe.styles=[M,lh];a([A("slot")],Oe.prototype,"defaultSlot",2);a([O()],Oe.prototype,"disableRole",2);a([h()],Oe.prototype,"label",2);function Si(t){var e;const i="sl-button, sl-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var _t=class extends T{constructor(){super(...arguments),this.formControlController=new ye(this),this.hasSlotController=new zt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?ic:t?ec:Es}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;!e||e.disabled||(this.value=e.value,i.forEach(o=>o.checked=o===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(l=>!l.disabled),s=(e=i.find(l=>l.checked))!=null?e:i[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let n=i.indexOf(s)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||l.setAttribute("tabindex","-1")}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].setAttribute("tabindex","0"),i[n].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=i.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(s=>s.checked))if(this.hasButtonGroup){const s=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");s&&s.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(r=>r.checked),s=e.find(r=>!r.disabled),o=i||s;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return x`
      <fieldset
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
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

          ${this.hasButtonGroup?x`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};_t.styles=[M,Ye,nh];_t.dependencies={"sl-button-group":Oe};a([A("slot:not([name])")],_t.prototype,"defaultSlot",2);a([A(".radio-group__validation-input")],_t.prototype,"validationInput",2);a([O()],_t.prototype,"hasButtonGroup",2);a([O()],_t.prototype,"errorMessage",2);a([O()],_t.prototype,"defaultValue",2);a([h()],_t.prototype,"label",2);a([h({attribute:"help-text"})],_t.prototype,"helpText",2);a([h()],_t.prototype,"name",2);a([h({reflect:!0})],_t.prototype,"value",2);a([h({reflect:!0})],_t.prototype,"size",2);a([h({reflect:!0})],_t.prototype,"form",2);a([h({type:Boolean,reflect:!0})],_t.prototype,"required",2);a([$("size",{waitUntilFirstUpdate:!0})],_t.prototype,"handleSizeChange",1);a([$("value")],_t.prototype,"handleValueChange",1);var ch="sl-radio-group";_t.define("sl-radio-group");N({tagName:ch,elementClass:_t,react:P,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var dh=R`
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
`,Ct=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:s,width:o}=this.rating.getBoundingClientRect(),r=e?this.roundToPrecision((s-t)/o*this.max,this.precision):this.roundToPrecision((t-i)/o*this.max,this.precision);return ht(r,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,x`
      <div
        part="base"
        class=${D({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
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
          ${e.map(s=>i>s&&i<s+1?x`
                <span
                  class=${D({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${Et({clipPath:t?`inset(0 ${(i-s)*100}% 0 0)`:`inset(0 0 0 ${(i-s)*100}%)`})}
                  >
                    ${fs(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Et({clipPath:t?`inset(0 0 0 ${100-(i-s)*100}%)`:`inset(0 ${100-(i-s)*100}% 0 0)`})}
                  >
                    ${fs(this.getSymbol(s+1))}
                  </div>
                </span>
              `:x`
              <span
                class=${D({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1,"rating__symbol--active":i>=s+1})}
                role="presentation"
              >
                ${fs(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ct.styles=[M,dh];Ct.dependencies={"sl-icon":Q};a([A(".rating")],Ct.prototype,"rating",2);a([O()],Ct.prototype,"hoverValue",2);a([O()],Ct.prototype,"isHovering",2);a([h()],Ct.prototype,"label",2);a([h({type:Number})],Ct.prototype,"value",2);a([h({type:Number})],Ct.prototype,"max",2);a([h({type:Number})],Ct.prototype,"precision",2);a([h({type:Boolean,reflect:!0})],Ct.prototype,"readonly",2);a([h({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);a([h()],Ct.prototype,"getSymbol",2);a([qi({passive:!0})],Ct.prototype,"handleTouchMove",1);a([$("hoverValue")],Ct.prototype,"handleHoverValueChange",1);a([$("isHovering")],Ct.prototype,"handleIsHoveringChange",1);var hh="sl-rating";Ct.define("sl-rating");N({tagName:hh,elementClass:Ct,react:P,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var uh=R`
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
`,Le=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),Di(this.base,{onMove:s=>{this.position=parseFloat(ht(s/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const s=t.shiftKey?10:1;let o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(o-=s),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(o+=s),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=ht(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return x`
      <div
        part="base"
        id="image-comparer"
        class=${D({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Et({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Et({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Le.styles=[M,uh];Le.scopedElement={"sl-icon":Q};a([A(".image-comparer")],Le.prototype,"base",2);a([A(".image-comparer__handle")],Le.prototype,"handle",2);a([h({type:Number,reflect:!0})],Le.prototype,"position",2);a([$("position",{waitUntilFirstUpdate:!0})],Le.prototype,"handlePositionChange",1);var ph="sl-image-comparer";Le.define("sl-image-comparer");N({tagName:ph,elementClass:Le,react:P,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var fh=R`
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
`,V=class extends T{constructor(){super(...arguments),this.formControlController=new ye(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new j(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(t,o,r,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return x`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
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
            class=${D({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${E(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${E(this.placeholder)}
              minlength=${E(this.minlength)}
              maxlength=${E(this.maxlength)}
              min=${E(this.min)}
              max=${E(this.max)}
              step=${E(this.step)}
              .value=${qe(this.value)}
              autocapitalize=${E(this.autocapitalize)}
              autocomplete=${E(this.autocomplete)}
              autocorrect=${E(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${E(this.pattern)}
              enterkeyhint=${E(this.enterkeyhint)}
              inputmode=${E(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?x`
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
            ${this.passwordToggle&&!this.disabled?x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?x`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:x`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};V.styles=[M,Ye,fh];V.dependencies={"sl-icon":Q};a([A(".input__control")],V.prototype,"input",2);a([O()],V.prototype,"hasFocus",2);a([h()],V.prototype,"title",2);a([h({reflect:!0})],V.prototype,"type",2);a([h()],V.prototype,"name",2);a([h()],V.prototype,"value",2);a([hi()],V.prototype,"defaultValue",2);a([h({reflect:!0})],V.prototype,"size",2);a([h({type:Boolean,reflect:!0})],V.prototype,"filled",2);a([h({type:Boolean,reflect:!0})],V.prototype,"pill",2);a([h()],V.prototype,"label",2);a([h({attribute:"help-text"})],V.prototype,"helpText",2);a([h({type:Boolean})],V.prototype,"clearable",2);a([h({type:Boolean,reflect:!0})],V.prototype,"disabled",2);a([h()],V.prototype,"placeholder",2);a([h({type:Boolean,reflect:!0})],V.prototype,"readonly",2);a([h({attribute:"password-toggle",type:Boolean})],V.prototype,"passwordToggle",2);a([h({attribute:"password-visible",type:Boolean})],V.prototype,"passwordVisible",2);a([h({attribute:"no-spin-buttons",type:Boolean})],V.prototype,"noSpinButtons",2);a([h({reflect:!0})],V.prototype,"form",2);a([h({type:Boolean,reflect:!0})],V.prototype,"required",2);a([h()],V.prototype,"pattern",2);a([h({type:Number})],V.prototype,"minlength",2);a([h({type:Number})],V.prototype,"maxlength",2);a([h()],V.prototype,"min",2);a([h()],V.prototype,"max",2);a([h()],V.prototype,"step",2);a([h()],V.prototype,"autocapitalize",2);a([h()],V.prototype,"autocorrect",2);a([h()],V.prototype,"autocomplete",2);a([h({type:Boolean})],V.prototype,"autofocus",2);a([h()],V.prototype,"enterkeyhint",2);a([h({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],V.prototype,"spellcheck",2);a([h()],V.prototype,"inputmode",2);a([$("disabled",{waitUntilFirstUpdate:!0})],V.prototype,"handleDisabledChange",1);a([$("step",{waitUntilFirstUpdate:!0})],V.prototype,"handleStepChange",1);a([$("value",{waitUntilFirstUpdate:!0})],V.prototype,"handleValueChange",1);var mh="sl-input";V.define("sl-input");var gh=N({tagName:mh,elementClass:V,react:P,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),It=gh,bh="sl-icon";Q.define("sl-icon");var vh=N({tagName:bh,elementClass:Q,react:P,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),sr=vh,yh=R`
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
`,Os=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),s=i.find(l=>{var c;return e.includes(((c=l==null?void 0:l.getAttribute)==null?void 0:c.call(l,"role"))||"")});if(!s||i.find(l=>{var c;return((c=l==null?void 0:l.getAttribute)==null?void 0:c.call(l,"role"))==="menu"})!==this)return;const n=s;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e==null||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Os.styles=[M,yh];a([A("slot")],Os.prototype,"defaultSlot",2);var _h="sl-menu";Os.define("sl-menu");var wh=N({tagName:_h,elementClass:Os,react:P,events:{onSlSelect:"sl-select"},displayName:"SlMenu"}),Dn=wh,xh=R`
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
 */const Mi=(t,e)=>{var s;const i=t._$AN;if(i===void 0)return!1;for(const o of i)(s=o._$AO)==null||s.call(o,e,!1),Mi(o,e);return!0},ks=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},Mn=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Sh(e)}};function kh(t){this._$AN!==void 0?(ks(this),this._$AM=t,Mn(this)):this._$AM=t}function Ch(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let r=i;r<s.length;r++)Mi(s[r],!1),ks(s[r]);else s!=null&&(Mi(s,!1),ks(s));else Mi(this,t)}const Sh=t=>{t.type==ce.CHILD&&(t._$AP??(t._$AP=Ch),t._$AQ??(t._$AQ=kh))};class $h extends Yi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),Mn(this),this.isConnected=e._$AU}_$AO(e,i=!0){var s,o;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(o=this.disconnected)==null||o.call(this)),i&&(Mi(this,e),ks(this))}setValue(e){if(gn(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ah=()=>new zh;class zh{}const Ys=new WeakMap,Eh=Gi(class extends $h{render(t){return tt}update(t,[e]){var s;const i=e!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=(s=t.options)==null?void 0:s.host,this.rt(this.ct=t.element)),tt}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let i=Ys.get(e);i===void 0&&(i=new WeakMap,Ys.set(e,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Ys.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Th=class{constructor(t,e){this.popupRef=Ah(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var s;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(s=i.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),s=i==null?void 0:i.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:r,top:n,width:l,height:c}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const s of e.assignedElements())if(i=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let s=1;s!==i.length;++s)i[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var n;const l=(n=e.get(r))!=null?n:new CSSUnitValue(0,"px"),u=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return o-u.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?x`
      <sl-popup
        ${Eh(this.popupRef)}
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
    `:x` <slot name="submenu" hidden></slot> `}},Nt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new zt(this,"submenu"),this.submenuController=new Th(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return sc(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return x`
      <div
        id="anchor"
        part="base"
        class=${D({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Nt.styles=[M,xh];Nt.dependencies={"sl-icon":Q,"sl-popup":K,"sl-spinner":bi};a([A("slot:not([name])")],Nt.prototype,"defaultSlot",2);a([A(".menu-item")],Nt.prototype,"menuItem",2);a([h()],Nt.prototype,"type",2);a([h({type:Boolean,reflect:!0})],Nt.prototype,"checked",2);a([h()],Nt.prototype,"value",2);a([h({type:Boolean,reflect:!0})],Nt.prototype,"loading",2);a([h({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);a([$("checked")],Nt.prototype,"handleCheckedChange",1);a([$("disabled")],Nt.prototype,"handleDisabledChange",1);a([$("type")],Nt.prototype,"handleTypeChange",1);var Ih="sl-menu-item";Nt.define("sl-menu-item");var Ph=N({tagName:Ih,elementClass:Nt,react:P,events:{},displayName:"SlMenuItem"}),zi=Ph,Nh=R`
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
`,or=class extends T{render(){return x` <slot part="base" class="menu-label"></slot> `}};or.styles=[M,Nh];var Rh="sl-menu-label";or.define("sl-menu-label");var Oh=N({tagName:Rh,elementClass:or,react:P,events:{},displayName:"SlMenuLabel"}),Lh=Oh,Dh=R`
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
`,Ht=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(e+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e.trim()}render(){return x`
      <div
        part="base"
        class=${D({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ht.styles=[M,Dh];Ht.dependencies={"sl-icon":Q};a([A(".option__label")],Ht.prototype,"defaultSlot",2);a([O()],Ht.prototype,"current",2);a([O()],Ht.prototype,"selected",2);a([O()],Ht.prototype,"hasHover",2);a([h({reflect:!0})],Ht.prototype,"value",2);a([h({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);a([$("disabled")],Ht.prototype,"handleDisabledChange",1);a([$("selected")],Ht.prototype,"handleSelectedChange",1);a([$("value")],Ht.prototype,"handleValueChange",1);var Mh="sl-option";Ht.define("sl-option");N({tagName:Mh,elementClass:Ht,react:P,events:{},displayName:"SlOption"});var Fh=R`
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
`,vi=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return x`
      <div
        part="base"
        class=${D({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${E(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Et({width:`${this.value}%`})}>
          ${this.indeterminate?"":x` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};vi.styles=[M,Fh];a([h({type:Number,reflect:!0})],vi.prototype,"value",2);a([h({type:Boolean,reflect:!0})],vi.prototype,"indeterminate",2);a([h()],vi.prototype,"label",2);var Vh="sl-progress-bar";vi.define("sl-progress-bar");N({tagName:Vh,elementClass:vi,react:P,events:{},displayName:"SlProgressBar"});var Bh=R`
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
`,Qi=class extends T{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Qi.styles=[M,Bh];a([h({type:Boolean,reflect:!0})],Qi.prototype,"vertical",2);a([$("vertical")],Qi.prototype,"handleVerticalChange",1);var Hh="sl-divider";Qi.define("sl-divider");N({tagName:Hh,elementClass:Qi,react:P,events:{},displayName:"SlDivider"});var Uh=R`
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
`,ea=new WeakMap;function Fn(t){let e=ea.get(t);return e||(e=window.getComputedStyle(t,null),ea.set(t,e)),e}function Wh(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Fn(t);return e.visibility!=="hidden"&&e.display!=="none"}function qh(t){const e=Fn(t),{overflowY:i,overflowX:s}=e;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function jh(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const r=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,l=r.querySelector(`${n}:checked`);return l?l===t:r.querySelector(n)===t}return Wh(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:qh(t):!1}function Kh(t){var e,i;const s=So(t),o=(e=s[0])!=null?e:null,r=(i=s[s.length-1])!=null?i:null;return{start:o,end:r}}function Gh(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function So(t){const e=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!i.includes(o)&&jh(o)&&i.push(o),o instanceof HTMLSlotElement&&Gh(o,t)&&o.assignedElements({flatten:!0}).forEach(r=>{s(r)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const r of o.children)s(r)}return s(t),i.sort((o,r)=>{const n=Number(o.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-n})}function*rr(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*hl(rr(t.shadowRoot.activeElement))))}function Yh(){return[...rr()].pop()}var $i=[],Vn=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Yh();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=So(this.element);let r=o.findIndex(l=>l===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){r+n>=o.length?r=0:r+n<0?r=o.length-1:r+=n,this.previousFocus=this.currentFocus;const l=o[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const c=[...rr()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){$i.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){$i=$i.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return $i[$i.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=So(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],s=this.tabDirection==="forward"?e:i;typeof(s==null?void 0:s.focus)=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function ia(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Rt=class extends T{constructor(){super(...arguments),this.hasSlotController=new zt(this,"footer"),this.localize=new j(this),this.modal=new Vn(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ri(this)))}disconnectedCallback(){super.disconnectedCallback(),Oi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=et(this,"drawer.denyClose",{dir:this.localize.dir()});lt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ri(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ut(this.drawer),ut(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=et(this,`drawer.show${ia(this.placement)}`,{dir:this.localize.dir()}),i=et(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([lt(this.panel,e.keyframes,e.options),lt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Oi(this)),await Promise.all([ut(this.drawer),ut(this.overlay)]);const t=et(this,`drawer.hide${ia(this.placement)}`,{dir:this.localize.dir()}),e=et(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([lt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),lt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ri(this)),this.open&&this.contained&&(this.modal.deactivate(),Oi(this))}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,At(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${D({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${E(this.noHeader?this.label:void 0)}
          aria-labelledby=${E(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":x`
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
    `}};Rt.styles=[M,Uh];Rt.dependencies={"sl-icon-button":pt};a([A(".drawer")],Rt.prototype,"drawer",2);a([A(".drawer__panel")],Rt.prototype,"panel",2);a([A(".drawer__overlay")],Rt.prototype,"overlay",2);a([h({type:Boolean,reflect:!0})],Rt.prototype,"open",2);a([h({reflect:!0})],Rt.prototype,"label",2);a([h({reflect:!0})],Rt.prototype,"placement",2);a([h({type:Boolean,reflect:!0})],Rt.prototype,"contained",2);a([h({attribute:"no-header",type:Boolean,reflect:!0})],Rt.prototype,"noHeader",2);a([$("open",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleOpenChange",1);a([$("contained",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleNoModalChange",1);X("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});X("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});X("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});X("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});X("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});X("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});X("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});X("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});X("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});X("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});X("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Xh="sl-drawer";Rt.define("sl-drawer");var Qh=N({tagName:Xh,elementClass:Rt,react:P,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"}),Bn=Qh,Zh=R`
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
`,wt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,s,o;const r=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(o=(s=document.activeElement)==null?void 0:s.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(r==null?void 0:r.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(s=>Kh(s).start);let i;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,At(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ut(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=et(this,"dropdown.show",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ut(this);const{keyframes:t,options:e}=et(this,"dropdown.hide",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return x`
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
        sync=${E(this.sync?this.sync:void 0)}
        class=${D({dropdown:!0,"dropdown--open":this.open})}
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
    `}};wt.styles=[M,Zh];wt.dependencies={"sl-popup":K};a([A(".dropdown")],wt.prototype,"popup",2);a([A(".dropdown__trigger")],wt.prototype,"trigger",2);a([A(".dropdown__panel")],wt.prototype,"panel",2);a([h({type:Boolean,reflect:!0})],wt.prototype,"open",2);a([h({reflect:!0})],wt.prototype,"placement",2);a([h({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);a([h({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],wt.prototype,"stayOpenOnSelect",2);a([h({attribute:!1})],wt.prototype,"containingElement",2);a([h({type:Number})],wt.prototype,"distance",2);a([h({type:Number})],wt.prototype,"skidding",2);a([h({type:Boolean})],wt.prototype,"hoist",2);a([h({reflect:!0})],wt.prototype,"sync",2);a([$("open",{waitUntilFirstUpdate:!0})],wt.prototype,"handleOpenChange",1);X("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});X("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Jh="sl-dropdown";wt.define("sl-dropdown");var tu=N({tagName:Jh,elementClass:wt,react:P,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"}),Hn=tu,Ot=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return x`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};a([h()],Ot.prototype,"date",2);a([h()],Ot.prototype,"weekday",2);a([h()],Ot.prototype,"era",2);a([h()],Ot.prototype,"year",2);a([h()],Ot.prototype,"month",2);a([h()],Ot.prototype,"day",2);a([h()],Ot.prototype,"hour",2);a([h()],Ot.prototype,"minute",2);a([h()],Ot.prototype,"second",2);a([h({attribute:"time-zone-name"})],Ot.prototype,"timeZoneName",2);a([h({attribute:"time-zone"})],Ot.prototype,"timeZone",2);a([h({attribute:"hour-format"})],Ot.prototype,"hourFormat",2);var eu="sl-format-date";Ot.define("sl-format-date");N({tagName:eu,elementClass:Ot,react:P,events:{},displayName:"SlFormatDate"});var Zi=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),o=i[s]+this.unit,r=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(r,{style:"unit",unit:o,unitDisplay:this.display})}};a([h({type:Number})],Zi.prototype,"value",2);a([h()],Zi.prototype,"unit",2);a([h()],Zi.prototype,"display",2);var iu="sl-format-bytes";Zi.define("sl-format-bytes");N({tagName:iu,elementClass:Zi,react:P,events:{},displayName:"SlFormatBytes"});var Gt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};a([h({type:Number})],Gt.prototype,"value",2);a([h()],Gt.prototype,"type",2);a([h({attribute:"no-grouping",type:Boolean})],Gt.prototype,"noGrouping",2);a([h()],Gt.prototype,"currency",2);a([h({attribute:"currency-display"})],Gt.prototype,"currencyDisplay",2);a([h({attribute:"minimum-integer-digits",type:Number})],Gt.prototype,"minimumIntegerDigits",2);a([h({attribute:"minimum-fraction-digits",type:Number})],Gt.prototype,"minimumFractionDigits",2);a([h({attribute:"maximum-fraction-digits",type:Number})],Gt.prototype,"maximumFractionDigits",2);a([h({attribute:"minimum-significant-digits",type:Number})],Gt.prototype,"minimumSignificantDigits",2);a([h({attribute:"maximum-significant-digits",type:Number})],Gt.prototype,"maximumSignificantDigits",2);var su="sl-format-number";Gt.define("sl-format-number");N({tagName:su,elementClass:Gt,react:P,events:{},displayName:"SlFormatNumber"});var ou="sl-icon-button";pt.define("sl-icon-button");var ru=N({tagName:ou,elementClass:pt,react:P,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),Tt=ru,au=R`
  :host {
    display: block;
  }
`,Xs=new Map;function nu(t,e="cors"){const i=Xs.get(t);if(i!==void 0)return Promise.resolve(i);const s=fetch(t,{mode:e}).then(async o=>{const r={ok:o.ok,status:o.status,html:await o.text()};return Xs.set(t,r),r});return Xs.set(t,s),s}var Qe=class extends T{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await nu(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return x`<slot></slot>`}};Qe.styles=[M,au];a([h()],Qe.prototype,"src",2);a([h()],Qe.prototype,"mode",2);a([h({attribute:"allow-scripts",type:Boolean})],Qe.prototype,"allowScripts",2);a([$("src")],Qe.prototype,"handleSrcChange",1);var lu="sl-include";Qe.define("sl-include");N({tagName:lu,elementClass:Qe,react:P,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var cu=R`
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
`,ar=class extends T{constructor(){super(...arguments),this.hasSlotController=new zt(this,"footer","header","image")}render(){return x`
      <div
        part="base"
        class=${D({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ar.styles=[M,cu];var du="sl-card";ar.define("sl-card");var hu=N({tagName:du,elementClass:ar,react:P,events:{},displayName:"SlCard"}),nr=hu,uu=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},pu=R`
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
 */function*fu(t,e){if(t!==void 0){let i=0;for(const s of t)yield e(s,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*mu(t,e,i=1){const s=e===void 0?0:t;e??(e=t);for(let o=s;i>0?o<e:e<o;o+=i)yield o}var rt=class extends T{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new uu(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new j(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const s=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==s||i!==o)&&(t.scrollTo({left:s,top:o,behavior:xo()?"auto":"smooth"}),await At(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:s}=this,o=s?t/i:(t-e)/i+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",s=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",r=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),r&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const i=e.find(l=>l.isIntersecting);if(!i)return;const s=this.getSlides({excludeClones:!1}),o=this.getSlides().length,r=s.indexOf(i.target),n=this.loop?r-this.slidesPerPage:r;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){const l=Number(i.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),s=t.slice(0,e);i.reverse().forEach((o,r)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(t.length-r-1)),this.prepend(n)}),s.forEach((o,r)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(r)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((i,s)=>{(s+e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:s}=this,o=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!o.length)return;const n=s?(t+o.length)%o.length:ht(t,0,o.length-i);this.activeSlide=n;const l=this.localize.dir()==="rtl",c=ht(t+(s?i:0)+(l?i-1:0),0,r.length-1),u=r[c];this.scrollToSlide(u,xo()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,s=i.getBoundingClientRect(),o=t.getBoundingClientRect(),r=o.left-s.left,n=o.top-s.top;r||n?(this.pendingSlideChange=!0,i.scrollTo({left:r+i.scrollLeft,top:n+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),s=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),n=this.localize.dir()==="ltr";return x`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${D({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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

        ${this.navigation?x`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${D({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${D({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?x`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${fu(mu(i),l=>{const c=l===s;return x`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${D({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
                      role="tab"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,i)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};rt.styles=[M,pu];rt.dependencies={"sl-icon":Q};a([h({type:Boolean,reflect:!0})],rt.prototype,"loop",2);a([h({type:Boolean,reflect:!0})],rt.prototype,"navigation",2);a([h({type:Boolean,reflect:!0})],rt.prototype,"pagination",2);a([h({type:Boolean,reflect:!0})],rt.prototype,"autoplay",2);a([h({type:Number,attribute:"autoplay-interval"})],rt.prototype,"autoplayInterval",2);a([h({type:Number,attribute:"slides-per-page"})],rt.prototype,"slidesPerPage",2);a([h({type:Number,attribute:"slides-per-move"})],rt.prototype,"slidesPerMove",2);a([h()],rt.prototype,"orientation",2);a([h({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],rt.prototype,"mouseDragging",2);a([A(".carousel__slides")],rt.prototype,"scrollContainer",2);a([A(".carousel__pagination")],rt.prototype,"paginationContainer",2);a([O()],rt.prototype,"activeSlide",2);a([O()],rt.prototype,"scrolling",2);a([O()],rt.prototype,"dragging",2);a([qi({passive:!0})],rt.prototype,"handleScroll",1);a([$("loop",{waitUntilFirstUpdate:!0}),$("slidesPerPage",{waitUntilFirstUpdate:!0})],rt.prototype,"initializeSlides",1);a([$("activeSlide")],rt.prototype,"handleSlideChange",1);a([$("slidesPerMove")],rt.prototype,"updateSlidesSnap",1);a([$("autoplay")],rt.prototype,"handleAutoplayChange",1);var gu="sl-carousel";rt.define("sl-carousel");N({tagName:gu,elementClass:rt,react:P,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"});var bu=R`
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
`,lr=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return x` <slot></slot> `}};lr.styles=[M,bu];var vu="sl-carousel-item";lr.define("sl-carousel-item");N({tagName:vu,elementClass:lr,react:P,events:{},displayName:"SlCarouselItem"});var yu=R`
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
`,G=class extends T{constructor(){super(...arguments),this.formControlController=new ye(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new zt(this,"[default]","prefix","suffix"),this.localize=new j(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Es}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?vs`a`:vs`button`;return Li`
      <${e}
        part="base"
        class=${D({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${E(t?void 0:this.disabled)}
        type=${E(t?void 0:this.type)}
        title=${this.title}
        name=${E(t?void 0:this.name)}
        value=${E(t?void 0:this.value)}
        href=${E(t&&!this.disabled?this.href:void 0)}
        target=${E(t?this.target:void 0)}
        download=${E(t?this.download:void 0)}
        rel=${E(t?this.rel:void 0)}
        role=${E(t?void 0:"button")}
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
        ${this.caret?Li` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Li`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};G.styles=[M,Ln];G.dependencies={"sl-icon":Q,"sl-spinner":bi};a([A(".button")],G.prototype,"button",2);a([O()],G.prototype,"hasFocus",2);a([O()],G.prototype,"invalid",2);a([h()],G.prototype,"title",2);a([h({reflect:!0})],G.prototype,"variant",2);a([h({reflect:!0})],G.prototype,"size",2);a([h({type:Boolean,reflect:!0})],G.prototype,"caret",2);a([h({type:Boolean,reflect:!0})],G.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],G.prototype,"loading",2);a([h({type:Boolean,reflect:!0})],G.prototype,"outline",2);a([h({type:Boolean,reflect:!0})],G.prototype,"pill",2);a([h({type:Boolean,reflect:!0})],G.prototype,"circle",2);a([h()],G.prototype,"type",2);a([h()],G.prototype,"name",2);a([h()],G.prototype,"value",2);a([h()],G.prototype,"href",2);a([h()],G.prototype,"target",2);a([h()],G.prototype,"rel",2);a([h()],G.prototype,"download",2);a([h()],G.prototype,"form",2);a([h({attribute:"formaction"})],G.prototype,"formAction",2);a([h({attribute:"formenctype"})],G.prototype,"formEnctype",2);a([h({attribute:"formmethod"})],G.prototype,"formMethod",2);a([h({attribute:"formnovalidate",type:Boolean})],G.prototype,"formNoValidate",2);a([h({attribute:"formtarget"})],G.prototype,"formTarget",2);a([$("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);function xt(t,e){_u(t)&&(t="100%");const i=wu(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function as(t){return Math.min(1,Math.max(0,t))}function _u(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function wu(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Un(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ns(t){return Number(t)<=1?`${Number(t)*100}%`:t}function He(t){return t.length===1?"0"+t:String(t)}function xu(t,e,i){return{r:xt(t,255)*255,g:xt(e,255)*255,b:xt(i,255)*255}}function sa(t,e,i){t=xt(t,255),e=xt(e,255),i=xt(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0,n=0;const l=(s+o)/2;if(s===o)n=0,r=0;else{const c=s-o;switch(n=l>.5?c/(2-s-o):c/(s+o),s){case t:r=(e-i)/c+(e<i?6:0);break;case e:r=(i-t)/c+2;break;case i:r=(t-e)/c+4;break}r/=6}return{h:r,s:n,l}}function Qs(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function ku(t,e,i){let s,o,r;if(t=xt(t,360),e=xt(e,100),i=xt(i,100),e===0)o=i,r=i,s=i;else{const n=i<.5?i*(1+e):i+e-i*e,l=2*i-n;s=Qs(l,n,t+1/3),o=Qs(l,n,t),r=Qs(l,n,t-1/3)}return{r:s*255,g:o*255,b:r*255}}function oa(t,e,i){t=xt(t,255),e=xt(e,255),i=xt(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0;const n=s,l=s-o,c=s===0?0:l/s;if(s===o)r=0;else{switch(s){case t:r=(e-i)/l+(e<i?6:0);break;case e:r=(i-t)/l+2;break;case i:r=(t-e)/l+4;break}r/=6}return{h:r,s:c,v:n}}function Cu(t,e,i){t=xt(t,360)*6,e=xt(e,100),i=xt(i,100);const s=Math.floor(t),o=t-s,r=i*(1-e),n=i*(1-o*e),l=i*(1-(1-o)*e),c=s%6,u=[i,n,r,r,l,i][c],f=[l,i,i,n,r,r][c],d=[r,r,l,i,i,n][c];return{r:u*255,g:f*255,b:d*255}}function ra(t,e,i,s){const o=[He(Math.round(t).toString(16)),He(Math.round(e).toString(16)),He(Math.round(i).toString(16))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Su(t,e,i,s,o){const r=[He(Math.round(t).toString(16)),He(Math.round(e).toString(16)),He(Math.round(i).toString(16)),He(Au(s))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function $u(t,e,i,s){const o=t/100,r=e/100,n=i/100,l=s/100,c=255*(1-o)*(1-l),u=255*(1-r)*(1-l),f=255*(1-n)*(1-l);return{r:c,g:u,b:f}}function aa(t,e,i){let s=1-t/255,o=1-e/255,r=1-i/255,n=Math.min(s,o,r);return n===1?(s=0,o=0,r=0):(s=(s-n)/(1-n)*100,o=(o-n)/(1-n)*100,r=(r-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(o),y:Math.round(r),k:Math.round(n)}}function Au(t){return Math.round(parseFloat(t)*255).toString(16)}function na(t){return Dt(t)/255}function Dt(t){return parseInt(t,16)}function zu(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const $o={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Eu(t){let e={r:0,g:0,b:0},i=1,s=null,o=null,r=null,n=!1,l=!1;return typeof t=="string"&&(t=Pu(t)),typeof t=="object"&&(Lt(t.r)&&Lt(t.g)&&Lt(t.b)?(e=xu(t.r,t.g,t.b),n=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Lt(t.h)&&Lt(t.s)&&Lt(t.v)?(s=ns(t.s),o=ns(t.v),e=Cu(t.h,s,o),n=!0,l="hsv"):Lt(t.h)&&Lt(t.s)&&Lt(t.l)?(s=ns(t.s),r=ns(t.l),e=ku(t.h,s,r),n=!0,l="hsl"):Lt(t.c)&&Lt(t.m)&&Lt(t.y)&&Lt(t.k)&&(e=$u(t.c,t.m,t.y,t.k),n=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Un(i),{ok:n,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const Tu="[-\\+]?\\d+%?",Iu="[-\\+]?\\d*\\.\\d+%?",Se="(?:"+Iu+")|(?:"+Tu+")",Zs="[\\s|\\(]+("+Se+")[,|\\s]+("+Se+")[,|\\s]+("+Se+")\\s*\\)?",ls="[\\s|\\(]+("+Se+")[,|\\s]+("+Se+")[,|\\s]+("+Se+")[,|\\s]+("+Se+")\\s*\\)?",Wt={CSS_UNIT:new RegExp(Se),rgb:new RegExp("rgb"+Zs),rgba:new RegExp("rgba"+ls),hsl:new RegExp("hsl"+Zs),hsla:new RegExp("hsla"+ls),hsv:new RegExp("hsv"+Zs),hsva:new RegExp("hsva"+ls),cmyk:new RegExp("cmyk"+ls),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Pu(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if($o[t])t=$o[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=Wt.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=Wt.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=Wt.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=Wt.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=Wt.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=Wt.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=Wt.cmyk.exec(t),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=Wt.hex8.exec(t),i?{r:Dt(i[1]),g:Dt(i[2]),b:Dt(i[3]),a:na(i[4]),format:e?"name":"hex8"}:(i=Wt.hex6.exec(t),i?{r:Dt(i[1]),g:Dt(i[2]),b:Dt(i[3]),format:e?"name":"hex"}:(i=Wt.hex4.exec(t),i?{r:Dt(i[1]+i[1]),g:Dt(i[2]+i[2]),b:Dt(i[3]+i[3]),a:na(i[4]+i[4]),format:e?"name":"hex8"}:(i=Wt.hex3.exec(t),i?{r:Dt(i[1]+i[1]),g:Dt(i[2]+i[2]),b:Dt(i[3]+i[3]),format:e?"name":"hex"}:!1))))))))))}function Lt(t){return typeof t=="number"?!Number.isNaN(t):Wt.CSS_UNIT.test(t)}class at{constructor(e="",i={}){if(e instanceof at)return e;typeof e=="number"&&(e=zu(e)),this.originalInput=e;const s=Eu(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??s.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let i,s,o;const r=e.r/255,n=e.g/255,l=e.b/255;return r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*i+.7152*s+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=Un(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=oa(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=oa(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${i}, ${s}%, ${o}%)`:`hsva(${i}, ${s}%, ${o}%, ${this.roundA})`}toHsl(){const e=sa(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=sa(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${i}, ${s}%, ${o}%)`:`hsla(${i}, ${s}%, ${o}%, ${this.roundA})`}toHex(e=!1){return ra(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Su(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),i=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${e}, ${i}, ${s})`:`rgba(${e}, ${i}, ${s}, ${this.roundA})`}toPercentageRgb(){const e=i=>`${Math.round(xt(i,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=i=>Math.round(xt(i,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...aa(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:i,y:s,k:o}=aa(this.r,this.g,this.b);return`cmyk(${e}, ${i}, ${s}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+ra(this.r,this.g,this.b,!1);for(const[i,s]of Object.entries($o))if(e===s)return i;return!1}toString(e){const i=!!e;e=e??this.format;let s=!1;const o=this.a<1&&this.a>=0;return!i&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(s=this.toRgbString()),e==="prgb"&&(s=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(s=this.toHexString()),e==="hex3"&&(s=this.toHexString(!0)),e==="hex4"&&(s=this.toHex8String(!0)),e==="hex8"&&(s=this.toHex8String()),e==="name"&&(s=this.toName()),e==="hsl"&&(s=this.toHslString()),e==="hsv"&&(s=this.toHsvString()),e==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new at(this.toString())}lighten(e=10){const i=this.toHsl();return i.l+=e/100,i.l=as(i.l),new at(i)}brighten(e=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new at(i)}darken(e=10){const i=this.toHsl();return i.l-=e/100,i.l=as(i.l),new at(i)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const i=this.toHsl();return i.s-=e/100,i.s=as(i.s),new at(i)}saturate(e=10){const i=this.toHsl();return i.s+=e/100,i.s=as(i.s),new at(i)}greyscale(){return this.desaturate(100)}spin(e){const i=this.toHsl(),s=(i.h+e)%360;return i.h=s<0?360+s:s,new at(i)}mix(e,i=50){const s=this.toRgb(),o=new at(e).toRgb(),r=i/100,n={r:(o.r-s.r)*r+s.r,g:(o.g-s.g)*r+s.g,b:(o.b-s.b)*r+s.b,a:(o.a-s.a)*r+s.a};return new at(n)}analogous(e=6,i=30){const s=this.toHsl(),o=360/i,r=[this];for(s.h=(s.h-(o*e>>1)+720)%360;--e;)s.h=(s.h+o)%360,r.push(new at(s));return r}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new at(e)}monochromatic(e=6){const i=this.toHsv(),{h:s}=i,{s:o}=i;let{v:r}=i;const n=[],l=1/e;for(;e--;)n.push(new at({h:s,s:o,v:r})),r=(r+l)%1;return n}splitcomplement(){const e=this.toHsl(),{h:i}=e;return[this,new at({h:(i+72)%360,s:e.s,l:e.l}),new at({h:(i+216)%360,s:e.s,l:e.l})]}onBackground(e){const i=this.toRgb(),s=new at(e).toRgb(),o=i.a+s.a*(1-i.a);return new at({r:(i.r*i.a+s.r*s.a*(1-i.a))/o,g:(i.g*i.a+s.g*s.a*(1-i.a))/o,b:(i.b*i.a+s.b*s.a*(1-i.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const i=this.toHsl(),{h:s}=i,o=[this],r=360/e;for(let n=1;n<e;n++)o.push(new at({h:(s+n*r)%360,s:i.s,l:i.l}));return o}equals(e){const i=new at(e);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var la="EyeDropper"in window,W=class extends T{constructor(){super(),this.formControlController=new ye(this),this.isSafeValue=!1,this.localize=new j(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),Di(e,{onMove:n=>{this.alpha=ht(n/s*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),Di(e,{onMove:n=>{this.hue=ht(n/s*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:s,height:o}=e.getBoundingClientRect();let r=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Di(e,{onMove:(l,c)=>{this.saturation=ht(l/s*100,0,100),this.brightness=ht(100-c/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=ht(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=ht(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=ht(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=ht(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=ht(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=ht(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=ht(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=ht(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new at(t);if(!e.isValid)return null;const i=e.toHsl(),s={h:i.h,s:i.s*100,l:i.l*100,a:i.a},o=e.toRgb(),r=e.toHexString(),n=e.toHex8String(),l=e.toHsv(),c={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!la)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,s=100){const o=new at(`hsva(${t}, ${e}%, ${i}%, ${s/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),s=x`
      <div
        part="base"
        class=${D({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?x`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Et({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${D({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Et({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${E(this.disabled?void 0:"0")}
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
                style=${Et({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${E(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?x`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Et({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Et({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${E(this.disabled?void 0:"0")}
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
            style=${Et({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":x`
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
            ${la?x`
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

        ${i.length>0?x`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(o=>{const r=this.parseColor(o);return r?x`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${E(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(r.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Et({backgroundColor:r.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:x`
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
          class=${D({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Et({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};W.styles=[M,yu];W.dependencies={"sl-button-group":Oe,"sl-button":G,"sl-dropdown":wt,"sl-icon":Q,"sl-input":V,"sl-visually-hidden":$s};a([A('[part~="base"]')],W.prototype,"base",2);a([A('[part~="input"]')],W.prototype,"input",2);a([A(".color-dropdown")],W.prototype,"dropdown",2);a([A('[part~="preview"]')],W.prototype,"previewButton",2);a([A('[part~="trigger"]')],W.prototype,"trigger",2);a([O()],W.prototype,"hasFocus",2);a([O()],W.prototype,"isDraggingGridHandle",2);a([O()],W.prototype,"isEmpty",2);a([O()],W.prototype,"inputValue",2);a([O()],W.prototype,"hue",2);a([O()],W.prototype,"saturation",2);a([O()],W.prototype,"brightness",2);a([O()],W.prototype,"alpha",2);a([h()],W.prototype,"value",2);a([hi()],W.prototype,"defaultValue",2);a([h()],W.prototype,"label",2);a([h()],W.prototype,"format",2);a([h({type:Boolean,reflect:!0})],W.prototype,"inline",2);a([h({reflect:!0})],W.prototype,"size",2);a([h({attribute:"no-format-toggle",type:Boolean})],W.prototype,"noFormatToggle",2);a([h()],W.prototype,"name",2);a([h({type:Boolean,reflect:!0})],W.prototype,"disabled",2);a([h({type:Boolean})],W.prototype,"hoist",2);a([h({type:Boolean})],W.prototype,"opacity",2);a([h({type:Boolean})],W.prototype,"uppercase",2);a([h()],W.prototype,"swatches",2);a([h({reflect:!0})],W.prototype,"form",2);a([h({type:Boolean,reflect:!0})],W.prototype,"required",2);a([qi({passive:!1})],W.prototype,"handleTouchMove",1);a([$("format",{waitUntilFirstUpdate:!0})],W.prototype,"handleFormatChange",1);a([$("opacity",{waitUntilFirstUpdate:!0})],W.prototype,"handleOpacityChange",1);a([$("value")],W.prototype,"handleValueChange",1);var Nu="sl-color-picker";W.define("sl-color-picker");N({tagName:Nu,elementClass:W,react:P,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var Ru="sl-checkbox";ft.define("sl-checkbox");var Ou=N({tagName:Ru,elementClass:ft,react:P,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"}),Ai=Ou,Lu=R`
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
`,gt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";i?[o,r]=this.from.trim().split("."):s&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(o):null;n?s?t=n.getAttribute(r)||"":i?t=n[r]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,r=et(this,"copy.in",{dir:"ltr"}),n=et(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?i:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return x`
      <sl-tooltip
        class=${D({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};gt.styles=[M,Lu];gt.dependencies={"sl-icon":Q,"sl-tooltip":mt};a([A('slot[name="copy-icon"]')],gt.prototype,"copyIcon",2);a([A('slot[name="success-icon"]')],gt.prototype,"successIcon",2);a([A('slot[name="error-icon"]')],gt.prototype,"errorIcon",2);a([A("sl-tooltip")],gt.prototype,"tooltip",2);a([O()],gt.prototype,"isCopying",2);a([O()],gt.prototype,"status",2);a([h()],gt.prototype,"value",2);a([h()],gt.prototype,"from",2);a([h({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);a([h({attribute:"copy-label"})],gt.prototype,"copyLabel",2);a([h({attribute:"success-label"})],gt.prototype,"successLabel",2);a([h({attribute:"error-label"})],gt.prototype,"errorLabel",2);a([h({attribute:"feedback-duration",type:Number})],gt.prototype,"feedbackDuration",2);a([h({attribute:"tooltip-placement"})],gt.prototype,"tooltipPlacement",2);a([h({type:Boolean})],gt.prototype,"hoist",2);X("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});X("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var Du="sl-copy-button";gt.define("sl-copy-button");var Mu=N({tagName:Du,elementClass:gt,react:P,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"}),Fu=Mu,Vu=R`
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
`,re=class extends T{constructor(){super(...arguments),this.hasSlotController=new zt(this,"footer"),this.localize=new j(this),this.modal=new Vn(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ri(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Oi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=et(this,"dialog.denyClose",{dir:this.localize.dir()});lt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ri(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ut(this.dialog),ut(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=et(this,"dialog.show",{dir:this.localize.dir()}),i=et(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([lt(this.panel,e.keyframes,e.options),lt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ut(this.dialog),ut(this.overlay)]);const t=et(this,"dialog.hide",{dir:this.localize.dir()}),e=et(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([lt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),lt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Oi(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,At(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${D({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${E(this.noHeader?this.label:void 0)}
          aria-labelledby=${E(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":x`
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
    `}};re.styles=[M,Vu];re.dependencies={"sl-icon-button":pt};a([A(".dialog")],re.prototype,"dialog",2);a([A(".dialog__panel")],re.prototype,"panel",2);a([A(".dialog__overlay")],re.prototype,"overlay",2);a([h({type:Boolean,reflect:!0})],re.prototype,"open",2);a([h({reflect:!0})],re.prototype,"label",2);a([h({attribute:"no-header",type:Boolean,reflect:!0})],re.prototype,"noHeader",2);a([$("open",{waitUntilFirstUpdate:!0})],re.prototype,"handleOpenChange",1);X("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});X("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});X("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});X("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});X("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Bu="sl-dialog";re.define("sl-dialog");var Hu=N({tagName:Bu,elementClass:re,react:P,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),Ji=Hu,Uu=R`
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
`,Yt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ut(this.body);const{keyframes:e,options:i}=et(this,"details.show",{dir:this.localize.dir()});await lt(this.body,xs(e,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ut(this.body);const{keyframes:e,options:i}=et(this,"details.hide",{dir:this.localize.dir()});await lt(this.body,xs(e,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,At(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,At(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return x`
      <details
        part="base"
        class=${D({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
    `}};Yt.styles=[M,Uu];Yt.dependencies={"sl-icon":Q};a([A(".details")],Yt.prototype,"details",2);a([A(".details__header")],Yt.prototype,"header",2);a([A(".details__body")],Yt.prototype,"body",2);a([A(".details__expand-icon-slot")],Yt.prototype,"expandIconSlot",2);a([h({type:Boolean,reflect:!0})],Yt.prototype,"open",2);a([h()],Yt.prototype,"summary",2);a([h({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);a([$("open",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleOpenChange",1);X("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});X("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var Wu="sl-details";Yt.define("sl-details");N({tagName:Wu,elementClass:Yt,react:P,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var qu=R`
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
`,Xt=class extends T{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return x`
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

        ${this.isLoaded?x`
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
    `}};Xt.styles=[M,qu];Xt.dependencies={"sl-icon":Q};a([A(".animated-image__animated")],Xt.prototype,"animatedImage",2);a([O()],Xt.prototype,"frozenFrame",2);a([O()],Xt.prototype,"isLoaded",2);a([h()],Xt.prototype,"src",2);a([h()],Xt.prototype,"alt",2);a([h({type:Boolean,reflect:!0})],Xt.prototype,"play",2);a([$("play",{waitUntilFirstUpdate:!0})],Xt.prototype,"handlePlayChange",1);a([$("src")],Xt.prototype,"handleSrcChange",1);var ju="sl-animated-image";Xt.define("sl-animated-image");N({tagName:ju,elementClass:Xt,react:P,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});var Ku=R`
  :host {
    display: contents;
  }
`;const Gu=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Yu=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Xu=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Qu=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Zu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ju=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],tp=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],ep=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ip=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],sp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],op=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],rp=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],ap=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],np=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],lp=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],cp=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],dp=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],hp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],up=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],pp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],fp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],mp=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],gp=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bp=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],vp=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],yp=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],_p=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],wp=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],xp=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],kp=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Cp=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Sp=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],$p=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ap=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],zp=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ep=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Tp=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ip=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Pp=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Np=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Rp=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Op=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Lp=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Dp=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Mp=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Fp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Vp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Bp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Hp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Up=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Wp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],qp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],jp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Kp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Gp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Yp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Xp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Qp=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Zp=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Jp=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],tf=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],ef=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],sf=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],of=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],rf=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],af=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],nf=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],lf=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],cf=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],df=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],hf=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],uf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],pf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],ff=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],mf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],gf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],bf=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],vf=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],yf=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],_f=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],wf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],xf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],kf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Cf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Sf=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],$f=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Af=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],zf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Ef=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Tf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],If=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Pf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Nf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Rf=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Of=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Lf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Df=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Mf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Wn={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Ff=Object.freeze(Object.defineProperty({__proto__:null,backInDown:np,backInLeft:lp,backInRight:cp,backInUp:dp,backOutDown:hp,backOutLeft:up,backOutRight:pp,backOutUp:fp,bounce:Gu,bounceIn:mp,bounceInDown:gp,bounceInLeft:bp,bounceInRight:vp,bounceInUp:yp,bounceOut:_p,bounceOutDown:wp,bounceOutLeft:xp,bounceOutRight:kp,bounceOutUp:Cp,easings:Wn,fadeIn:Sp,fadeInBottomLeft:$p,fadeInBottomRight:Ap,fadeInDown:zp,fadeInDownBig:Ep,fadeInLeft:Tp,fadeInLeftBig:Ip,fadeInRight:Pp,fadeInRightBig:Np,fadeInTopLeft:Rp,fadeInTopRight:Op,fadeInUp:Lp,fadeInUpBig:Dp,fadeOut:Mp,fadeOutBottomLeft:Fp,fadeOutBottomRight:Vp,fadeOutDown:Bp,fadeOutDownBig:Hp,fadeOutLeft:Up,fadeOutLeftBig:Wp,fadeOutRight:qp,fadeOutRightBig:jp,fadeOutTopLeft:Kp,fadeOutTopRight:Gp,fadeOutUp:Yp,fadeOutUpBig:Xp,flash:Yu,flip:Qp,flipInX:Zp,flipInY:Jp,flipOutX:tf,flipOutY:ef,headShake:Xu,heartBeat:Qu,hinge:Sf,jackInTheBox:$f,jello:Zu,lightSpeedInLeft:sf,lightSpeedInRight:of,lightSpeedOutLeft:rf,lightSpeedOutRight:af,pulse:Ju,rollIn:Af,rollOut:zf,rotateIn:nf,rotateInDownLeft:lf,rotateInDownRight:cf,rotateInUpLeft:df,rotateInUpRight:hf,rotateOut:uf,rotateOutDownLeft:pf,rotateOutDownRight:ff,rotateOutUpLeft:mf,rotateOutUpRight:gf,rubberBand:tp,shake:ep,shakeX:ip,shakeY:sp,slideInDown:bf,slideInLeft:vf,slideInRight:yf,slideInUp:_f,slideOutDown:wf,slideOutLeft:xf,slideOutRight:kf,slideOutUp:Cf,swing:op,tada:rp,wobble:ap,zoomIn:Ef,zoomInDown:Tf,zoomInLeft:If,zoomInRight:Pf,zoomInUp:Nf,zoomOut:Rf,zoomOutDown:Of,zoomOutLeft:Lf,zoomOutRight:Df,zoomOutUp:Mf},Symbol.toStringTag,{value:"Module"}));var bt=class extends T{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const i=(t=Wn[this.easing])!=null?t:this.easing,s=(e=this.keyframes)!=null?e:Ff[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!s?!1:(this.destroyAnimation(),this.animation=r.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};bt.styles=[M,Ku];a([Rl("slot")],bt.prototype,"defaultSlot",2);a([h()],bt.prototype,"name",2);a([h({type:Boolean,reflect:!0})],bt.prototype,"play",2);a([h({type:Number})],bt.prototype,"delay",2);a([h()],bt.prototype,"direction",2);a([h({type:Number})],bt.prototype,"duration",2);a([h()],bt.prototype,"easing",2);a([h({attribute:"end-delay",type:Number})],bt.prototype,"endDelay",2);a([h()],bt.prototype,"fill",2);a([h({type:Number})],bt.prototype,"iterations",2);a([h({attribute:"iteration-start",type:Number})],bt.prototype,"iterationStart",2);a([h({attribute:!1})],bt.prototype,"keyframes",2);a([h({attribute:"playback-rate",type:Number})],bt.prototype,"playbackRate",2);a([$(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],bt.prototype,"handleAnimationChange",1);a([$("play")],bt.prototype,"handlePlayChange",1);a([$("playbackRate")],bt.prototype,"handlePlaybackRateChange",1);var Vf="sl-animation";bt.define("sl-animation");N({tagName:Vf,elementClass:bt,react:P,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var Bf=R`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ze=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,i)=>{const s=e.querySelector('[slot="separator"]');s===null?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ze.styles=[M,Bf];Ze.dependencies={"sl-icon":Q};a([A("slot")],Ze.prototype,"defaultSlot",2);a([A('slot[name="separator"]')],Ze.prototype,"separatorSlot",2);a([h()],Ze.prototype,"label",2);var Hf="sl-breadcrumb";Ze.define("sl-breadcrumb");N({tagName:Hf,elementClass:Ze,react:P,events:{},displayName:"SlBreadcrumb"});var Uf=R`
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
`,yi=class extends T{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return x`
      <span
        part="base"
        class=${D({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};yi.styles=[M,Uf];a([h({reflect:!0})],yi.prototype,"variant",2);a([h({type:Boolean,reflect:!0})],yi.prototype,"pill",2);a([h({type:Boolean,reflect:!0})],yi.prototype,"pulse",2);var Wf="sl-badge";yi.define("sl-badge");N({tagName:Wf,elementClass:yi,react:P,events:{},displayName:"SlBadge"});var qf=R`
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
`,ae=class extends T{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=x``;return this.initials?e=x`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,x`
      <div
        part="base"
        class=${D({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};ae.styles=[M,qf];ae.dependencies={"sl-icon":Q};a([O()],ae.prototype,"hasError",2);a([h()],ae.prototype,"image",2);a([h()],ae.prototype,"label",2);a([h()],ae.prototype,"initials",2);a([h()],ae.prototype,"loading",2);a([h({reflect:!0})],ae.prototype,"shape",2);a([$("image")],ae.prototype,"handleImageChange",1);var jf="sl-avatar";ae.define("sl-avatar");var Kf=N({tagName:jf,elementClass:ae,react:P,events:{onSlError:"sl-error"},displayName:"SlAvatar"}),ca=Kf,Gf=R`
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
`,we=class extends T{constructor(){super(...arguments),this.hasSlotController=new zt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return x`
      <div
        part="base"
        class=${D({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?x`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${E(this.target?this.target:void 0)}"
                rel=${E(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?x`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?x`
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
    `}};we.styles=[M,Gf];a([A("slot:not([name])")],we.prototype,"defaultSlot",2);a([O()],we.prototype,"renderType",2);a([h()],we.prototype,"href",2);a([h()],we.prototype,"target",2);a([h()],we.prototype,"rel",2);a([$("href",{waitUntilFirstUpdate:!0})],we.prototype,"hrefChanged",1);var Yf="sl-breadcrumb-item";we.define("sl-breadcrumb-item");N({tagName:Yf,elementClass:we,react:P,events:{},displayName:"SlBreadcrumbItem"});var Xf="sl-button-group";Oe.define("sl-button-group");N({tagName:Xf,elementClass:Oe,react:P,events:{},displayName:"SlButtonGroup"});var Qf="sl-button";G.define("sl-button");var Zf=N({tagName:Qf,elementClass:G,react:P,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Ls=Zf,Jf=R`
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
`,Ut=class Me extends T{constructor(){super(...arguments),this.hasSlotController=new zt(this,"icon","suffix"),this.localize=new j(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,i="100%",s="0";this.countdownAnimation=e.animate([{width:i},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ut(this.base),this.base.hidden=!1;const{keyframes:e,options:i}=et(this,"alert.show",{dir:this.localize.dir()});await lt(this.base,e,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ut(this.base);const{keyframes:e,options:i}=et(this,"alert.hide",{dir:this.localize.dir()});await lt(this.base,e,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,At(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Me.toastStack.parentElement===null&&document.body.append(Me.toastStack),Me.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Me.toastStack.removeChild(this),e(),Me.toastStack.querySelector("sl-alert")===null&&Me.toastStack.remove()},{once:!0})})}render(){return x`
      <div
        part="base"
        class=${D({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?x`
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

        ${this.countdown?x`
              <div
                class=${D({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Ut.styles=[M,Jf];Ut.dependencies={"sl-icon-button":pt};a([A('[part~="base"]')],Ut.prototype,"base",2);a([A(".alert__countdown-elapsed")],Ut.prototype,"countdownElement",2);a([h({type:Boolean,reflect:!0})],Ut.prototype,"open",2);a([h({type:Boolean,reflect:!0})],Ut.prototype,"closable",2);a([h({reflect:!0})],Ut.prototype,"variant",2);a([h({type:Number})],Ut.prototype,"duration",2);a([h({type:String,reflect:!0})],Ut.prototype,"countdown",2);a([O()],Ut.prototype,"remainingTime",2);a([$("open",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleOpenChange",1);a([$("duration")],Ut.prototype,"handleDurationChange",1);var qn=Ut;X("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});X("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var tm="sl-alert";qn.define("sl-alert");var em=N({tagName:tm,elementClass:qn,react:P,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),im=em,sm=(t,e)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...s)},e)}},da=(t,e,i)=>{const s=t[e];t[e]=function(...o){s.call(this,...o),i.call(this,s,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,i=new WeakMap,s=r=>{for(const n of r.changedTouches)e.add(n.identifier)},o=r=>{for(const n of r.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),da(EventTarget.prototype,"addEventListener",function(r,n){if(n!=="scrollend")return;const l=sm(()=>{e.size?l():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",l,{passive:!0}),i.set(this,l)}),da(EventTarget.prototype,"removeEventListener",function(r,n){if(n!=="scrollend")return;const l=i.get(this);l&&r.call(this,"scroll",l,{passive:!0})})}})();const ha={root:{alignItems:"center",display:"flex",height:"2em",justifyContent:"start"},menu:{height:"8em"}};function Te({variant:t,selected:e,available:i=void 0,setSelected:s=void 0,viewMode:o=!1}){function r(l){s(e.slice(0,l).concat(e.slice(l+1)))}function n(l){s(e.concat([l]))}return b("div",{style:ha.root,children:[e.map((l,c)=>b(Nc,{variant:t,removable:!o,size:"small",onSlRemove:()=>r(c),children:l},c)),!o&&e.length<i.length&&b(Hn,{children:[b(Tt,{slot:"trigger",name:"plus"}),b(Dn,{style:ha.menu,onSlSelect:l=>n(l.detail.item.value),children:i.filter(l=>!e.includes(l)).map((l,c)=>b(zi,{value:l,children:l}))})]})]})}const ua="./recipeapp/dbrequest/";async function om(){try{console.log(ua);const e=await(await fetch(`${ua}?test_var=1&other_test_var=some+cool+text&otherstuff=3`)).text();console.log(e)}catch(t){console.error(t.message)}}const Bt={collectionArray:[{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"},{name:"First Collection",numRecipes:2,id:"test_string"}],collectionData:[{name:"Ravioli",author:"Alice",allergens:["Gluten","Cheese"],reference:"http://www.example.com/",ingredients:["Bread","Cheese"]},{name:"Spaghetti",author:"Bob",allergens:["Gluten","Shellfish"],reference:"Some Book",ingredients:["Bread","Cheese","Ham","Turkey","Butter","Pasta Sauce"]}],allAllergens:["Gluten","Nuts","Shellfish"],allIngredients:["Bread","Cheese","Ham","Turkey","Butter","Pasta Sauce"],allAuthors:["Alice","Bob"]},Ie={username:"test",password:"test"};function rm(t,e){return t===Ie.username&&e===Ie.password}function jn(t){return t===Ie.password}function am(t){return 8<=t.length&&t.length<=20}function nm(t){return 8<=t.length&&t.length<=20}function lm(t){return t!==Ie.username}function cm(t){Ie.password=t}function dm(t){Ie.username=t}const pa=t=>{let e;const i=new Set,s=(u,f)=>{const d=typeof u=="function"?u(e):u;if(!Object.is(d,e)){const p=e;e=f??(typeof d!="object"||d===null)?d:Object.assign({},e,d),i.forEach(m=>m(e,p))}},o=()=>e,l={setState:s,getState:o,getInitialState:()=>c,subscribe:u=>(i.add(u),()=>i.delete(u))},c=e=t(s,o,l);return l},hm=t=>t?pa(t):pa,um=t=>t;function pm(t,e=um){const i=fo.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return fo.useDebugValue(i),i}const fa=t=>{const e=hm(t),i=s=>pm(e,s);return Object.assign(i,e),i},fm=t=>t?fa(t):fa;var Js={},ma;function mm(){return ma||(ma=1,function(t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});function e(o,r){if(Object.is(o,r))return!0;if(typeof o!="object"||o===null||typeof r!="object"||r===null)return!1;if(o instanceof Map&&r instanceof Map){if(o.size!==r.size)return!1;for(const[l,c]of o)if(!Object.is(c,r.get(l)))return!1;return!0}if(o instanceof Set&&r instanceof Set){if(o.size!==r.size)return!1;for(const l of o)if(!r.has(l))return!1;return!0}const n=Object.keys(o);if(n.length!==Object.keys(r).length)return!1;for(const l of n)if(!Object.prototype.hasOwnProperty.call(r,l)||!Object.is(o[l],r[l]))return!1;return!0}const s=(o,r)=>n=>{const l=new Set;return(c,u,f)=>{const d=(r==null?void 0:r.equalityFn)??e;if(r!=null&&r.keys){const v=r.keys;for(const S of v)l.add(S)}const p=(r==null?void 0:r.disableProxy)!==!0||!!(r!=null&&r.keys),m=(r==null?void 0:r.disableProxy)!==!0&&!(r!=null&&r.keys),g=v=>{const S=new Proxy({...v},{get:(_,z)=>(l.add(z),v[z])}),w=o(m?S:{...v});for(const _ of Object.keys(w))d(w[_],v[_])&&(w[_]=v[_]);return{...v,...w}},y=(v,S,...w)=>{c(_=>{const z=typeof v=="object"?v:v(_);return p&&l.size!==0&&!Object.keys(z).some(F=>l.has(F))?{..._,...z}:g({..._,...z})},S,...w)},k=f;k.setState=y;const C=n(y,u,k);return Object.assign({},C,o(C))}};t.createComputed=s}(Js)),Js}var gm=mm();const vt=Object.freeze({SEARCH_SETTINGS:0,MAIN:1,COLLECTIONS_LIST:2,CHANGE_USERNAME:3,CHANGE_PASSWORD:4,LOGIN_PROMPT:5,NEW_RECIPE_FORM:6,UPDATE_RECIPE_FORM:7,RECIPE_SUMMARY:8}),ot=Object.freeze({NAME:1,AUTHOR:2,ALLERGENS:4,REFERENCE:8,INGREDIENTS:16}),bm={view:vt.MAIN,loggedIn:!1,page:0,numRowsPerPage:10,numRecipesInCollection:Bt.collectionData.length,visibleColumns:ot.NAME|ot.AUTHOR|ot.REFERENCE,activeRecipeId:0},vm=gm.createComputed(t=>({numPages:Math.ceil(t.numRecipesInCollection/t.numRowsPerPage),editMode:t.loggedIn&&!0})),Qt=fm(vm((t,e)=>({...bm,setMainView:()=>t({view:vt.MAIN}),setSettingsView:()=>t({view:vt.SEARCH_SETTINGS}),setLoginView:()=>t({view:vt.LOGIN_PROMPT}),setChangeUserView:()=>t({view:vt.CHANGE_USERNAME}),setChangePassView:()=>t({view:vt.CHANGE_PASSWORD}),setCollectionsView:()=>t({view:vt.COLLECTIONS_LIST}),setNewRecipeView:()=>t({view:vt.NEW_RECIPE_FORM}),setUpdateRecipeView:()=>t({view:vt.UPDATE_RECIPE_FORM}),setRecipeSummaryView:()=>t({view:vt.RECIPE_SUMMARY}),logIn:()=>t({loggedIn:!0}),logOut:()=>t({loggedIn:!1}),gotoFirstPage:()=>t({page:0}),gotoPrevPage:()=>t(i=>({page:Math.max(0,i.page-1)})),gotoNextPage:()=>t(i=>({page:Math.min(e().numPages-1,i.page+1)})),gotoLastPage:()=>t(()=>({page:e().numPages-1})),setRowsPerPage:i=>t({numRowsPerPage:i}),getColumnVisible:i=>(e().visibleColumns&i)>0,toggleColumn:i=>t(s=>({visibleColumns:s.visibleColumns^i})),setActiveRecipeId:i=>t({activeRecipeId:i})}))),Ue={settingContainer:{display:"flex",flexDirection:"row",marginBottom:"1em"},filterContainer:{display:"flex",flex:1,flexDirection:"column"}};function to({columnName:t,columnOptions:e}){const[i,s]=nt([]),[o,r]=nt([]);return b("div",{style:Ue.settingContainer,children:[b("div",{style:Ue.filterContainer,children:["Include ",t,b(Te,{variant:"success",available:e.filter(n=>!o.includes(n)),selected:i,setSelected:s})]}),b("div",{style:Ue.filterContainer,children:["Exclude ",t,b(Te,{variant:"danger",available:e.filter(n=>!i.includes(n)),selected:o,setSelected:r})]})]})}function ym(){const{view:t,numRowsPerPage:e,getColumnVisible:i,toggleColumn:s,setMainView:o,setRowsPerPage:r,gotoFirstPage:n}=Qt(),l=1,c=20;function u(d){isNaN(d)||(r(Math.min(c,Math.max(l,d))),n())}function f(d){if(d.eventPhase!==Event.AT_TARGET){d.preventDefault();return}o()}return b(Bn,{class:"drawer-placement-top",open:t===vt.SEARCH_SETTINGS,onSlHide:d=>f(d),placement:"top",label:"Search Settings",children:[b("div",{style:Ue.settingContainer,children:b("div",{style:Ue.filterContainer,children:["Recipes Per Page",b(It,{type:"number",value:e,min:l,max:c,onSlBlur:d=>u(parseInt(d.target.value))})]})}),b("div",{style:Ue.settingContainer,children:b("div",{style:Ue.filterContainer,children:["Visible Columns",b(Ai,{size:"small",checked:i(ot.NAME),onSlChange:()=>s(ot.NAME),children:"Recipe Name"}),b(Ai,{size:"small",checked:i(ot.AUTHOR),onSlChange:()=>s(ot.AUTHOR),children:"Author"}),b(Ai,{size:"small",checked:i(ot.ALLERGENS),onSlChange:()=>s(ot.ALLERGENS),children:"Allergens"}),b(Ai,{size:"small",checked:i(ot.REFERENCE),onSlChange:()=>s(ot.REFERENCE),children:"Reference"}),b(Ai,{size:"small",checked:i(ot.INGREDIENTS),onSlChange:()=>s(ot.INGREDIENTS),children:"Ingredients"})]})}),b(to,{columnName:"Author",columnOptions:Bt.allAuthors}),b(to,{columnName:"Allergens",columnOptions:Bt.allAllergens}),b(to,{columnName:"Ingredients",columnOptions:Bt.allIngredients})]})}function ts({message:t,variant:e="primary",duration:i=3e3}){return b(im,{variant:e,closable:!0,duration:i,children:[b(sr,{name:{primary:"info-circle",success:"check2-circle",neutral:"gear",warning:"exclamation-triangle",danger:"exclamation-octagon"}[e],slot:"icon"}),t]})}const eo={root:{display:"flex",flexDirection:"row",alignItems:"center",flex:"1"},avatar:{"--size":"1.75em",cursor:"pointer",marginLeft:"8px"}};function _m(){const{loggedIn:t,setSettingsView:e,setLoginView:i,setChangePassView:s,setChangeUserView:o,setCollectionsView:r,setRecipeSummaryView:n,logOut:l}=Qt(),c={VIEW_COLLECTIONS:0,CHANGE_USERNAME:1,CHANGE_PASSWORD:2,LOGOUT:3},u=Pe(null);function f(){const m=Math.floor(Math.random()*Bt.collectionData.length);console.log(Bt.collectionData[m]),n()}function d(){l(),u.current.base.toast()}function p(m){switch(m){case c.VIEW_COLLECTIONS:r();break;case c.CHANGE_USERNAME:o();break;case c.CHANGE_PASSWORD:s();break;case c.LOGOUT:d();break}}return b("div",{style:eo.root,children:[b(ts,{variant:"success",message:"Logged out successfully",ref:u}),b(It,{clearable:!0,type:"search",placeholder:`Search ${Bt.collectionArray[0].name}...`,style:{flex:"1"},children:b(Tt,{name:"search",label:"Run Search",slot:"suffix"})}),b(Tt,{name:"sliders",label:"Search Settings",onClick:()=>e()}),b(Tt,{name:"shuffle",label:"Generate Random Recipe",onClick:()=>f()}),t?b(Hn,{children:[b(ca,{style:eo.avatar,slot:"trigger",initials:Ie.username[0],label:"Avatar with username initial"}),b(Dn,{onSlSelect:m=>p(m.detail.item.value),children:[b(Lh,{className:"userMenuLabel",children:Ie.username}),b(zi,{value:c.VIEW_COLLECTIONS,children:"View Collections"}),b(zi,{value:c.CHANGE_USERNAME,children:"Change Username"}),b(zi,{value:c.CHANGE_PASSWORD,children:"Change Password"}),b(zi,{value:c.LOGOUT,children:["Log Out",b(sr,{name:"box-arrow-right",slot:"suffix"})]})]})]}):b(ca,{style:eo.avatar,label:"Empty avatar",onClick:()=>i()})]})}const $t={root:{display:"flex",flexDirection:"column",flex:"10",overflowX:"hidden"},header:{fontSize:"large",fontWeight:"bold",position:"sticky",top:"0",zIndex:"1"},row:{display:"flex",alignItems:"center",height:"30px",position:"relative"},cell:{alignItems:"center",display:"flex",flex:"3",justifyContent:"start",overflow:"auto hidden"},end:{alignItems:"center",display:"flex",flex:"1",justifyContent:"end"}};function wm({id:t,name:e,author:i,allergens:s,reference:o,ingredients:r}){const{editMode:n,getColumnVisible:l,setUpdateRecipeView:c,setRecipeSummaryView:u,setActiveRecipeId:f}=Qt();function d(){u(),f(t)}function p(){c(),f(t)}return b(nr,{style:{"--border-radius":"0"},children:b("div",{style:$t.row,children:[l(ot.NAME)&&b("div",{style:$t.cell,children:e}),l(ot.AUTHOR)&&b("div",{style:$t.cell,children:i}),l(ot.ALLERGENS)&&b("div",{style:$t.cell,children:b(Te,{variant:"warning",selected:s,viewMode:!0})}),l(ot.REFERENCE)&&b("div",{style:$t.cell,children:o}),l(ot.INGREDIENTS)&&b("div",{style:$t.cell,children:b(Te,{variant:"primary",selected:r,viewMode:!0})}),b("div",{style:$t.end,children:[b(de,{content:"View Recipe",children:b(Tt,{name:"eye",label:"View Recipe",onClick:()=>d()})}),n&&b(te,{children:[b(de,{content:"Edit Recipe",children:b(Tt,{name:"pencil",label:"Edit Recipe",onClick:()=>p()})}),b(de,{content:"Delete Recipe",children:b(Tt,{name:"trash",label:"Delete Recipe"})})]})]})]})})}function xm({pageData:t}){const{editMode:e,getColumnVisible:i,setNewRecipeView:s}=Qt();return b("div",{style:$t.root,children:[b(nr,{style:{...$t.header,"--border-radius":"0"},children:b("div",{style:$t.row,children:[i(ot.NAME)&&b("div",{style:$t.cell,children:"Recipe Name"}),i(ot.AUTHOR)&&b("div",{style:$t.cell,children:"Author"}),i(ot.ALLERGENS)&&b("div",{style:$t.cell,children:"Allergens"}),i(ot.REFERENCE)&&b("div",{style:$t.cell,children:"Reference"}),i(ot.INGREDIENTS)&&b("div",{style:$t.cell,children:"Ingredients"}),b("div",{style:{...$t.end,fontSize:"2em"},children:e&&b(de,{content:"Create Recipe",placement:"left",children:b(Tt,{name:"plus",label:"Create Recipe",onClick:()=>s()})})})]})}),t.map((o,r)=>b(wm,{editMode:e,id:r,...o}))]})}const km={root:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flex:"1"}};function Cm(){const{page:t,numPages:e,gotoFirstPage:i,gotoPrevPage:s,gotoNextPage:o,gotoLastPage:r}=Qt();return b("div",{style:km.root,children:[b(de,{content:"First Page",children:b(Tt,{disabled:t===0,name:"chevron-double-left",onClick:i,label:"First Page"})}),b(de,{content:"Previous Page",children:b(Tt,{disabled:t===0,name:"chevron-left",onClick:s,label:"Previous Page"})}),t+1,b(de,{content:"Next Page",children:b(Tt,{disabled:t===e-1,name:"chevron-right",onClick:o,label:"Next Page"})}),b(de,{content:"Last Page",children:b(Tt,{disabled:t===e-1,name:"chevron-double-right",onClick:r,label:"Last Page"})})]})}const ga={inputField:{marginBottom:"1em"}};function Sm(){const{view:t,logIn:e,setMainView:i}=Qt(),[s,o]=nt(""),[r,n]=nt(""),[l,c]=nt(""),u=Pe(null);function f(){i(),o(""),n(""),c("")}function d(){rm(s,r)?(e(),f(),u.current.base.toast()):c("Invalid username or password")}return b(Ji,{class:"dialog-overview",open:t===vt.LOGIN_PROMPT,onSlAfterHide:()=>f(),label:"Log In",children:[b(ts,{message:"Logged in successfully",variant:"success",ref:u}),b(It,{style:ga.inputField,type:"text",value:s,onSlChange:p=>o(p.target.value),placeholder:"Username"}),b(It,{className:"errorHelp",style:ga.inputField,helpText:l,type:"password",value:r,onSlChange:p=>n(p.target.value),placeholder:"Password",passwordToggle:!0}),b(Ls,{onClick:()=>d(),children:"Log In"})]})}const io={inputField:{marginBottom:"1em"}};function $m(){const{view:t,setMainView:e}=Qt(),[i,s]=nt(""),[o,r]=nt(""),[n,l]=nt(""),[c,u]=nt(""),f=Pe(null);function d(){e(),s(""),r(""),l("")}function p(){if(u(""),!jn(i)){u("Old password must match");return}if(!am(o)){u("New password must be 8 - 20 characters");return}if(n!==o){u("New passwords do not match");return}cm(o),d(),f.current.base.toast()}return b(Ji,{class:"dialog-overview",open:t===vt.CHANGE_PASSWORD,onSlAfterHide:()=>d(),label:"Change Password",children:[b(ts,{message:"Password changed successfully",variant:"success",ref:f}),b(It,{style:io.inputField,type:"password",helpText:"Must be 8 - 20 characters",value:i,onSlChange:m=>s(m.target.value),placeholder:"Old Password",passwordToggle:!0}),b(It,{style:io.inputField,type:"password",value:o,onSlChange:m=>r(m.target.value),placeholder:"New Password",passwordToggle:!0}),b(It,{className:"errorHelp",style:io.inputField,helpText:c,type:"password",value:n,onSlChange:m=>l(m.target.value),placeholder:"Retype New Password",passwordToggle:!0}),b(Ls,{onClick:()=>p(),children:"Confirm"})]})}const ba={inputField:{marginBottom:"1em"}};function Am(){const{view:t,setMainView:e}=Qt(),[i,s]=nt(""),[o,r]=nt(""),[n,l]=nt(""),c=Pe(null);function u(){e(),s(""),r(""),l("")}function f(){if(!jn(o)){l("Invalid password");return}if(!nm(i)){l("New username must be 8 - 20 characters");return}if(!lm(i)){l("Username already taken");return}dm(i),u(),c.current.base.toast()}return b(Ji,{class:"dialog-overview",open:t===vt.CHANGE_USERNAME,onSlAfterHide:()=>u(),label:"Change Username",children:[b(ts,{message:"Changed username successfully",variant:"success",ref:c}),b(It,{style:ba.inputField,helpText:"Must be 8 - 20 characters",type:"text",value:i,onSlChange:d=>s(d.target.value),placeholder:"New Username"}),b(It,{className:"errorHelp",style:ba.inputField,helpText:n,type:"password",value:o,onSlChange:d=>r(d.target.value),placeholder:"Password",passwordToggle:!0}),b(Ls,{onClick:()=>f(),children:"Confirm"})]})}const cs={root:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},collectionTitle:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},collectionCard:{marginBottom:"1em",flex:1,width:"100%"}};function zm(){const{view:t,setMainView:e}=Qt();function i(s){s.eventPhase===Event.AT_TARGET?e():s.preventDefault()}return b(Bn,{class:"drawer-placement-start",open:t===vt.COLLECTIONS_LIST,onSlHide:s=>i(s),placement:"start",label:"Collections",children:b("div",{style:cs.root,children:[b(It,{style:cs.collectionCard,clearable:!0,type:"search",placeholder:"Find a collection..."}),Bt.collectionArray.map(s=>b(nr,{style:cs.collectionCard,children:[b("div",{slot:"header",style:cs.collectionTitle,children:[b(It,{className:"collectionsName",filled:!0,value:s.name,placeholder:`Collection ${s.id}`}),b(Fu,{value:window.location.origin+"/?id="+s.id,copyLabel:"Share Collection",successLabel:"Copied",errorLabel:"Failed to copy",children:b(sr,{name:"share",slot:"copy-icon"})}),b(de,{content:"Delete Collection",children:b(Tt,{name:"trash",label:"Delete Collection"})})]}),"Included recipes: ",s.numRecipes]})),b(de,{content:"Add Collection",children:b(Tt,{name:"plus",label:"Add Collection",style:{fontSize:"2em"}})})]})})}const so={inputField:{marginBottom:"1em"}};function va({formTitle:t,submitLabel:e,submitMessage:i,viewState:s}){const{activeRecipeId:o,view:r,setMainView:n}=Qt(),l=Bt.collectionData[o],[c,u]=nt(""),[f,d]=nt(""),[p,m]=nt(""),[g,y]=nt([]),[k,C]=nt([]);u(l.name),d(l.author),m(l.reference),y(l.ingredients),C(l.allergens);const v=Pe(null);function S(_){if(_.eventPhase!==Event.AT_TARGET){_.preventDefault();return}n()}function w(_){console.log({activeRecipeId:o,recipeName:c,author:f,reference:p,allergens:k,ingredients:g}),S(_),v.current.base.toast()}return b(Ji,{class:"dialog-overview",open:r===s,onSlHide:_=>S(_),label:t,children:[b(ts,{message:i,variant:"success",ref:v}),b(It,{style:so.inputField,type:"text",value:c,onSlChange:_=>u(_.target.value),placeholder:"Recipe Name"}),b(It,{style:so.inputField,type:"text",value:f,onSlChange:_=>d(_.target.value),placeholder:"Author"}),b(It,{style:so.inputField,type:"text",value:p,onSlChange:_=>m(_.target.value),placeholder:"Reference"}),b(Te,{variant:"primary",available:Bt.allAllergens,selected:k,setSelected:C}),b(Te,{variant:"primary",available:Bt.allIngredients,selected:g,setSelected:y}),b(Ls,{onClick:_=>w(_),children:e})]})}const ya={summaryField:{marginBottom:"1em"}};function Em(){const{activeRecipeId:t,view:e,setMainView:i}=Qt(),s=Bt.collectionData[t];function o(){i()}return b(Ji,{class:"dialog-overview",open:e===vt.RECIPE_SUMMARY,onSlHide:r=>o(),label:s.name,children:[b("strong",{children:"Author(s)"}),b("div",{style:ya.summaryField,children:s.author}),b("strong",{children:"Reference"}),b("div",{style:ya.summaryField,children:s.reference}),b("strong",{children:"Allergens"}),b(Te,{variant:"primary",selected:s.allergens,viewMode:!0}),b("strong",{children:"Ingredients"}),b(Te,{variant:"primary",selected:s.ingredients,viewMode:!0})]})}co("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/");const Tm={root:{display:"flex",flexDirection:"column",height:"95vh"}};function Im(){const{page:t,numRowsPerPage:e}=Qt();let i=Bt.collectionData.slice(t*e,(t+1)*e);return b("div",{style:Tm.root,children:[b(ym,{}),b(zm,{}),b(Sm,{}),b(Am,{}),b($m,{}),b(_m,{}),b(xm,{pageData:i}),b(Cm,{}),b(va,{formTitle:"New Recipe",submitLabel:"Add Recipe",submitMessage:"Added recipe successfully",viewState:vt.NEW_RECIPE_FORM}),b(va,{formTitle:"Update Recipe",submitLabel:"Update",submitMessage:"Updated recipe successfully",viewState:vt.UPDATE_RECIPE_FORM}),b(Em,{})]})}om();ri(b(Im,{}),document.getElementById("app"));

var P=Object.defineProperty;var j=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var d=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{r as $,n as x,j as T,k as I,l as S,m as D,p as E,q,u as G,v as A,w as O,x as R,y as z}from"./scheduler.TwWJsNmc.js";let y=!1;function F(){y=!0}function U(){y=!1}function V(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function W(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const u=t[a];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=a?s+1:V(1,s,h=>t[n[h]].claim_order,a))-1;i[r]=n[u]+1;const o=u+1;n[o]=r,s=Math.max(o,s)}const c=[],l=[];let f=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);f>=r;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;e.insertBefore(l[r],u)}}function J(e,t){if(y){for(W(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function Q(e,t,n){y&&!n?J(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function L(e){return document.createElement(e)}function H(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function v(e){return document.createTextNode(e)}function ce(){return v(" ")}function fe(){return v("")}function oe(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function X(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e,t){for(const n in t)X(e,n,t[n])}function de(e){return e.dataset.svelteH}function Y(e){return Array.from(e.childNodes)}function M(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function C(e,t,n,i,s=!1){M(e);const c=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function B(e,t,n,i){return C(e,s=>s.nodeName===t,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(t))}function _e(e,t,n){return B(e,t,n,L)}function he(e,t,n){return B(e,t,n,H)}function Z(e,t){return C(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(t),!0)}function me(e){return Z(e," ")}function b(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function pe(e,t){const n=b(e,"HTML_TAG_START",0),i=b(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(t);M(e);const s=e.splice(n,i-n+1);p(s[0]),p(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new g(t);for(const l of c)l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new g(t,c)}function $e(e,t){t=""+t,e.data!==t&&(e.data=t)}function ye(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ge(e,t,n){e.classList.toggle(t,!!n)}class k{constructor(t=!1){d(this,"is_svg",!1);d(this,"e");d(this,"n");d(this,"t");d(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=H(n.nodeName):this.e=L(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)K(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}class g extends k{constructor(n=!1,i){super(n);d(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Q(this.t,this.n[i],n)}}function xe(e,t){return new e(t)}const m=new Set;let _;function ve(){_={r:0,c:[],p:_}}function we(){_.r||$(_.c),_=_.p}function ee(e,t){e&&e.i&&(m.delete(e),e.i(t))}function Ne(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Te(e){e&&e.c()}function Ee(e,t){e&&e.l(t)}function te(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),E(()=>{const c=e.$$.on_mount.map(O).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...c):$(c),e.$$.on_mount=[]}),s.forEach(E)}function ne(e,t){const n=e.$$;n.fragment!==null&&(q(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(R.push(e),z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ae(e,t,n,i,s,c,l=null,f=[-1]){const r=G;A(e);const a=e.$$={fragment:null,ctx:[],props:c,update:x,not_equal:s,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:T(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};l&&l(a.root);let u=!1;if(a.ctx=n?n(e,t.props||{},(o,h,...w)=>{const N=w.length?w[0]:h;return a.ctx&&s(a.ctx[o],a.ctx[o]=N)&&(!a.skip_bound&&a.bound[o]&&a.bound[o](N),u&&ie(e,o)),h}):[],a.update(),u=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){F();const o=Y(t.target);a.fragment&&a.fragment.l(o),o.forEach(p)}else a.fragment&&a.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor),U(),I()}A(r)}class be{constructor(){d(this,"$$");d(this,"$$set")}$destroy(){ne(this,1),this.$destroy=x}$on(t,n){if(!S(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);export{pe as A,fe as B,we as C,ve as D,xe as E,ge as F,g as H,be as S,Y as a,Z as b,_e as c,p as d,L as e,me as f,Q as g,J as h,Ae as i,$e as j,de as k,X as l,ee as m,H as n,he as o,ue as p,oe as q,Te as r,ce as s,v as t,Ee as u,te as v,Ne as w,ne as x,ye as y,ae as z};

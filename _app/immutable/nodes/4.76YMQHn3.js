import{s as Z,n as V,i as $}from"../chunks/scheduler.TwWJsNmc.js";import{S as ee,i as te,e as b,s as L,c as k,a as E,k as le,f as R,d as h,l as _,g as S,h as u,t as q,b as w,B as W}from"../chunks/index.3Tpho3Eu.js";import{e as x,u as Q,d as Y}from"../chunks/each.tKF0B0X0.js";const ae=""+new URL("../assets/projet-ugp.bmNkgRch.png",import.meta.url).href,se=""+new URL("../assets/projet-mobistory.mXd6IWiT.png",import.meta.url).href,ie=""+new URL("../assets/projet-galaxy.z9Dl4FW1.png",import.meta.url).href,oe=[{link:"https://github.com/Mikdaam/Protocol-UGP",image:ae,categories:["Java","Git","Maven","Réseaux"],title:"Protocol UGP",description:"Le protocole UGEGreed, développé pour le cours de 'Programmation Réseaux', vise à créer un protocole de distribution de calcul, 'UGP', pour tester efficacement des conjectures."},{link:"https://github.com/Mikdaam/mobistory-flutter",image:se,categories:["Flutter","Sqlite","Git"],title:"Mobistory",description:"Application mobile d'exploration des évènements historiques à proximité de l'utilisateur. Réalisé avec Flutter."},{link:"https://github.com/Mikdaam/Galaxy_Simulation",image:ie,categories:["Langage C","Algorithmes"],title:"Galaxy Simulation",description:"Simulation de mouvements de corps dans la galaxie, réalisé en C avec une librairie interne."}],re=async()=>({projects:oe}),_e=Object.freeze(Object.defineProperty({__proto__:null,load:re},Symbol.toStringTag,{value:"Module"}));function B(v,e,t){const a=v.slice();return a[2]=e[t],a}function J(v,e,t){const a=v.slice();return a[5]=e[t],a}function ce(v){let e;return{c(){e=b("span"),this.h()},l(t){e=k(t,"SPAN",{class:!0}),E(e).forEach(h),this.h()},h(){_(e,"class","dot")},m(t,a){S(t,e,a)},d(t){t&&h(e)}}}function X(v,e){let t,a=e[5]+"",f,i,p,s=e[5]!==e[2].categories[e[2].categories.length-1]&&ce();return{key:v,first:null,c(){t=b("p"),f=q(a),i=L(),s&&s.c(),p=W(),this.h()},l(l){t=k(l,"P",{class:!0});var r=E(t);f=w(r,a),r.forEach(h),i=R(l),s&&s.l(l),p=W(),this.h()},h(){_(t,"class","blog-category"),this.first=t},m(l,r){S(l,t,r),u(t,f),S(l,i,r),s&&s.m(l,r),S(l,p,r)},p(l,r){e=l},d(l){l&&(h(t),h(i),h(p)),s&&s.d(l)}}}function K(v,e){let t,a,f,i,p,s,l,r,g=[],o=new Map,c,d,j=e[2].title+"",P,I,G,z=e[2].description+"",A,C,U=x(e[2].categories);const D=n=>n[5];for(let n=0;n<U.length;n+=1){let m=J(e,U,n),y=D(m);o.set(y,g[n]=X(y,m))}return{key:v,first:null,c(){t=b("li"),a=b("a"),f=b("figure"),i=b("img"),s=L(),l=b("div"),r=b("div");for(let n=0;n<g.length;n+=1)g[n].c();c=L(),d=b("h3"),P=q(j),I=L(),G=b("p"),A=q(z),C=L(),this.h()},l(n){t=k(n,"LI",{class:!0});var m=E(t);a=k(m,"A",{href:!0});var y=E(a);f=k(y,"FIGURE",{class:!0});var F=E(f);i=k(F,"IMG",{src:!0,alt:!0,loading:!0}),F.forEach(h),s=R(y),l=k(y,"DIV",{class:!0});var M=E(l);r=k(M,"DIV",{class:!0});var H=E(r);for(let T=0;T<g.length;T+=1)g[T].l(H);H.forEach(h),c=R(M),d=k(M,"H3",{class:!0});var N=E(d);P=w(N,j),N.forEach(h),I=R(M),G=k(M,"P",{class:!0});var O=E(G);A=w(O,z),O.forEach(h),M.forEach(h),y.forEach(h),C=R(m),m.forEach(h),this.h()},h(){$(i.src,p=e[2].image)||_(i,"src",p),_(i,"alt",e[2].title),_(i,"loading","lazy"),_(f,"class","blog-banner-box"),_(r,"class","blog-meta"),_(d,"class","h3 blog-item-title"),_(G,"class","blog-text"),_(l,"class","blog-content"),_(a,"href",e[2].link),_(t,"class","blog-post-item"),this.first=t},m(n,m){S(n,t,m),u(t,a),u(a,f),u(f,i),u(a,s),u(a,l),u(l,r);for(let y=0;y<g.length;y+=1)g[y]&&g[y].m(r,null);u(l,c),u(l,d),u(d,P),u(l,I),u(l,G),u(G,A),u(t,C)},p(n,m){e=n,m&1&&(U=x(e[2].categories),g=Q(g,m,D,1,e,U,o,r,Y,X,null,J))},d(n){n&&h(t);for(let m=0;m<g.length;m+=1)g[m].d()}}}function ne(v){let e,t,a='<h2 class="h2 article-title">Projets</h2>',f,i,p,s=[],l=new Map,r=x(v[0]);const g=o=>o[2].link;for(let o=0;o<r.length;o+=1){let c=B(v,r,o),d=g(c);l.set(d,s[o]=K(d,c))}return{c(){e=b("article"),t=b("header"),t.innerHTML=a,f=L(),i=b("section"),p=b("ul");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=k(o,"ARTICLE",{class:!0,"data-page":!0});var c=E(e);t=k(c,"HEADER",{"data-svelte-h":!0}),le(t)!=="svelte-zq9pha"&&(t.innerHTML=a),f=R(c),i=k(c,"SECTION",{class:!0});var d=E(i);p=k(d,"UL",{class:!0});var j=E(p);for(let P=0;P<s.length;P+=1)s[P].l(j);j.forEach(h),d.forEach(h),c.forEach(h),this.h()},h(){_(p,"class","blog-posts-list"),_(i,"class","blog-posts"),_(e,"class","active"),_(e,"data-page","blog")},m(o,c){S(o,e,c),u(e,t),u(e,f),u(e,i),u(i,p);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(p,null)},p(o,[c]){c&1&&(r=x(o[0]),s=Q(s,c,g,1,o,r,l,p,Y,K,null,B))},i:V,o:V,d(o){o&&h(e);for(let c=0;c<s.length;c+=1)s[c].d()}}}function ue(v,e,t){let{data:a}=e;const{projects:f}=a;return v.$$set=i=>{"data"in i&&t(1,a=i.data)},[f,a]}class pe extends ee{constructor(e){super(),te(this,e,ue,ne,Z,{data:1})}}export{pe as component,_e as universal};
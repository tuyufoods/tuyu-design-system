var x=Object.defineProperty;var i=(e,r)=>x(e,"name",{value:r,configurable:!0});import{_ as u,V as b,j as h,E as j,N as $,R as p,U as I,F as N,an as w,ao as D,ap as y,$ as E,y as S,aq as P,ar as U}from"./es.object.get-own-property-descriptor-3a7d61f2.js";import{G as _}from"./web.url.constructor-4ae78f78.js";var F=u,L=h.findIndex,M=b,v="findIndex",O=!0;v in[]&&Array(1)[v](function(){O=!1});F({target:"Array",proto:!0,forced:O},{findIndex:i(function(r){return L(this,r,arguments.length>1?arguments[1]:void 0)},"findIndex")});M(v);var R=u,q=_,A=b;R({target:"Array",proto:!0},{fill:q});A("fill");var c=j,G=i(function(e){return e!==void 0&&(c(e,"value")||c(e,"writable"))},"isDataDescriptor$1"),T=u,V=$,C=p,W=I,K=G,X=N,k=w;function m(e,r){var t=arguments.length<3?e:arguments[2],n,a;if(W(e)===t)return e[r];if(n=X.f(e,r),n)return K(n)?n.value:n.get===void 0?void 0:V(n.get,t);if(C(a=k(e)))return m(a,r,t)}i(m,"get");T({target:"Reflect",stat:!0},{get:m});var z=Object.is||i(function(r,t){return r===t?r!==0||1/r===1/t:r!=r&&t!=t},"is"),B=$,H=D,J=I,Q=y,Y=E,d=z,g=S,Z=P,rr=U;H("search",function(e,r,t){return[i(function(a){var s=Y(this),o=Q(a)?void 0:Z(a,e);return o?B(o,a,s):new RegExp(a)[e](g(s))},"search"),function(n){var a=J(this),s=g(n),o=t(r,a,s);if(o.done)return o.value;var l=a.lastIndex;d(l,0)||(a.lastIndex=0);var f=rr(a,s);return d(a.lastIndex,l)||(a.lastIndex=l),f===null?-1:f.index}]});var er=p,ar=Math.floor,tr=Number.isInteger||i(function(r){return!er(r)&&isFinite(r)&&ar(r)===r},"isInteger"),nr=u,ir=tr;nr({target:"Number",stat:!0},{isInteger:ir});export{tr as i};
//# sourceMappingURL=es.number.is-integer-44abbe1b.js.map

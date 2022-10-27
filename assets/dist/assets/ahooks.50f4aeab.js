import{c as N,r as z}from"./vendor.82aea7ea.js";function it(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var L=it,st=typeof N=="object"&&N&&N.Object===Object&&N,Be=st,ot=Be,ut=typeof self=="object"&&self&&self.Object===Object&&self,ct=ot||ut||Function("return this")(),m=ct,ft=m,vt=function(){return ft.Date.now()},lt=vt,ht=/\s/;function dt(e){for(var t=e.length;t--&&ht.test(e.charAt(t)););return t}var pt=dt,_t=pt,gt=/^\s+/;function bt(e){return e&&e.slice(0,_t(e)+1).replace(gt,"")}var yt=bt,$t=m,mt=$t.Symbol,ue=mt,le=ue,qe=Object.prototype,Tt=qe.hasOwnProperty,Ot=qe.toString,R=le?le.toStringTag:void 0;function At(e){var t=Tt.call(e,R),r=e[R];try{e[R]=void 0;var n=!0}catch{}var a=Ot.call(e);return n&&(t?e[R]=r:delete e[R]),a}var wt=At,Et=Object.prototype,St=Et.toString;function Ct(e){return St.call(e)}var jt=Ct,he=ue,xt=wt,It=jt,Pt="[object Null]",Mt="[object Undefined]",de=he?he.toStringTag:void 0;function Rt(e){return e==null?e===void 0?Mt:Pt:de&&de in Object(e)?xt(e):It(e)}var D=Rt;function Lt(e){return e!=null&&typeof e=="object"}var G=Lt,Dt=D,Gt=G,Ht="[object Symbol]";function Nt(e){return typeof e=="symbol"||Gt(e)&&Dt(e)==Ht}var Ft=Nt,zt=yt,pe=L,Bt=Ft,_e=0/0,qt=/^[-+]0x[0-9a-f]+$/i,Ut=/^0b[01]+$/i,Kt=/^0o[0-7]+$/i,Wt=parseInt;function Vt(e){if(typeof e=="number")return e;if(Bt(e))return _e;if(pe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=pe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=zt(e);var r=Ut.test(e);return r||Kt.test(e)?Wt(e.slice(2),r?2:8):qt.test(e)?_e:+e}var kt=Vt,Xt=L,Y=lt,ge=kt,Jt="Expected a function",Yt=Math.max,Zt=Math.min;function Qt(e,t,r){var n,a,i,s,o,u,c=0,d=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(Jt);t=ge(t)||0,Xt(r)&&(d=!!r.leading,h="maxWait"in r,i=h?Yt(ge(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v);function _(l){var O=n,M=a;return n=a=void 0,c=l,s=e.apply(M,O),s}function p(l){return c=l,o=setTimeout(b,t),d?_(l):s}function g(l){var O=l-u,M=l-c,ve=t-O;return h?Zt(ve,i-M):ve}function y(l){var O=l-u,M=l-c;return u===void 0||O>=t||O<0||h&&M>=i}function b(){var l=Y();if(y(l))return $(l);o=setTimeout(b,g(l))}function $(l){return o=void 0,v&&n?_(l):(n=a=void 0,s)}function H(){o!==void 0&&clearTimeout(o),c=0,n=u=a=o=void 0}function w(){return o===void 0?s:$(Y())}function T(){var l=Y(),O=y(l);if(n=arguments,a=this,u=l,O){if(o===void 0)return p(u);if(h)return clearTimeout(o),o=setTimeout(b,t),_(u)}return o===void 0&&(o=setTimeout(b,t)),s}return T.cancel=H,T.flush=w,T}var er=Qt,Ue=function(){if(typeof Map<"u")return Map;function e(t,r){var n=-1;return t.some(function(a,i){return a[0]===r?(n=i,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var n=e(this.__entries__,r),a=this.__entries__[n];return a&&a[1]},t.prototype.set=function(r,n){var a=e(this.__entries__,r);~a?this.__entries__[a][1]=n:this.__entries__.push([r,n])},t.prototype.delete=function(r){var n=this.__entries__,a=e(n,r);~a&&n.splice(a,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var a=0,i=this.__entries__;a<i.length;a++){var s=i[a];r.call(n,s[1],s[0])}},t}()}(),te=typeof window<"u"&&typeof document<"u"&&window.document===document,B=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),tr=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(B):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),rr=2;function nr(e,t){var r=!1,n=!1,a=0;function i(){r&&(r=!1,e()),n&&o()}function s(){tr(i)}function o(){var u=Date.now();if(r){if(u-a<rr)return;n=!0}else r=!0,n=!1,setTimeout(s,t);a=u}return o}var ar=20,ir=["top","right","bottom","left","width","height","size","weight"],sr=typeof MutationObserver<"u",or=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=nr(this.refresh.bind(this),ar)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,n=r.indexOf(t);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!te||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),sr?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!te||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,n=r===void 0?"":r,a=ir.some(function(i){return!!~n.indexOf(i)});a&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Ke=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var a=n[r];Object.defineProperty(e,a,{value:t[a],enumerable:!1,writable:!1,configurable:!0})}return e},E=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||B},We=W(0,0,0,0);function q(e){return parseFloat(e)||0}function be(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(n,a){var i=e["border-"+a+"-width"];return n+q(i)},0)}function ur(e){for(var t=["top","right","bottom","left"],r={},n=0,a=t;n<a.length;n++){var i=a[n],s=e["padding-"+i];r[i]=q(s)}return r}function cr(e){var t=e.getBBox();return W(0,0,t.width,t.height)}function fr(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return We;var n=E(e).getComputedStyle(e),a=ur(n),i=a.left+a.right,s=a.top+a.bottom,o=q(n.width),u=q(n.height);if(n.boxSizing==="border-box"&&(Math.round(o+i)!==t&&(o-=be(n,"left","right")+i),Math.round(u+s)!==r&&(u-=be(n,"top","bottom")+s)),!lr(e)){var c=Math.round(o+i)-t,d=Math.round(u+s)-r;Math.abs(c)!==1&&(o-=c),Math.abs(d)!==1&&(u-=d)}return W(a.left,a.top,o,u)}var vr=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof E(e).SVGGraphicsElement}:function(e){return e instanceof E(e).SVGElement&&typeof e.getBBox=="function"}}();function lr(e){return e===E(e).document.documentElement}function hr(e){return te?vr(e)?cr(e):fr(e):We}function dr(e){var t=e.x,r=e.y,n=e.width,a=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(i.prototype);return Ke(s,{x:t,y:r,width:n,height:a,top:r,right:t+n,bottom:a+r,left:t}),s}function W(e,t,r,n){return{x:e,y:t,width:r,height:n}}var pr=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=W(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=hr(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),_r=function(){function e(t,r){var n=dr(r);Ke(this,{target:t,contentRect:n})}return e}(),gr=function(){function e(t,r,n){if(this.activeObservations_=[],this.observations_=new Ue,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof E(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new pr(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof E(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;!r.has(t)||(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new _r(n.target,n.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Ve=typeof WeakMap<"u"?new WeakMap:new Ue,ke=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=or.getInstance(),n=new gr(t,r,this);Ve.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ke.prototype[e]=function(){var t;return(t=Ve.get(this))[e].apply(t,arguments)}});var Iu=function(){return typeof B.ResizeObserver<"u"?B.ResizeObserver:ke}();function br(){this.__data__=[],this.size=0}var yr=br;function $r(e,t){return e===t||e!==e&&t!==t}var Xe=$r,mr=Xe;function Tr(e,t){for(var r=e.length;r--;)if(mr(e[r][0],t))return r;return-1}var V=Tr,Or=V,Ar=Array.prototype,wr=Ar.splice;function Er(e){var t=this.__data__,r=Or(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():wr.call(t,r,1),--this.size,!0}var Sr=Er,Cr=V;function jr(e){var t=this.__data__,r=Cr(t,e);return r<0?void 0:t[r][1]}var xr=jr,Ir=V;function Pr(e){return Ir(this.__data__,e)>-1}var Mr=Pr,Rr=V;function Lr(e,t){var r=this.__data__,n=Rr(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var Dr=Lr,Gr=yr,Hr=Sr,Nr=xr,Fr=Mr,zr=Dr;function S(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}S.prototype.clear=Gr;S.prototype.delete=Hr;S.prototype.get=Nr;S.prototype.has=Fr;S.prototype.set=zr;var k=S,Br=k;function qr(){this.__data__=new Br,this.size=0}var Ur=qr;function Kr(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var Wr=Kr;function Vr(e){return this.__data__.get(e)}var kr=Vr;function Xr(e){return this.__data__.has(e)}var Jr=Xr,Yr=D,Zr=L,Qr="[object AsyncFunction]",en="[object Function]",tn="[object GeneratorFunction]",rn="[object Proxy]";function nn(e){if(!Zr(e))return!1;var t=Yr(e);return t==en||t==tn||t==Qr||t==rn}var Je=nn,an=m,sn=an["__core-js_shared__"],on=sn,Z=on,ye=function(){var e=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function un(e){return!!ye&&ye in e}var cn=un,fn=Function.prototype,vn=fn.toString;function ln(e){if(e!=null){try{return vn.call(e)}catch{}try{return e+""}catch{}}return""}var Ye=ln,hn=Je,dn=cn,pn=L,_n=Ye,gn=/[\\^$.*+?()[\]{}|]/g,bn=/^\[object .+?Constructor\]$/,yn=Function.prototype,$n=Object.prototype,mn=yn.toString,Tn=$n.hasOwnProperty,On=RegExp("^"+mn.call(Tn).replace(gn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function An(e){if(!pn(e)||dn(e))return!1;var t=hn(e)?On:bn;return t.test(_n(e))}var wn=An;function En(e,t){return e==null?void 0:e[t]}var Sn=En,Cn=wn,jn=Sn;function xn(e,t){var r=jn(e,t);return Cn(r)?r:void 0}var C=xn,In=C,Pn=m,Mn=In(Pn,"Map"),ce=Mn,Rn=C,Ln=Rn(Object,"create"),X=Ln,$e=X;function Dn(){this.__data__=$e?$e(null):{},this.size=0}var Gn=Dn;function Hn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Nn=Hn,Fn=X,zn="__lodash_hash_undefined__",Bn=Object.prototype,qn=Bn.hasOwnProperty;function Un(e){var t=this.__data__;if(Fn){var r=t[e];return r===zn?void 0:r}return qn.call(t,e)?t[e]:void 0}var Kn=Un,Wn=X,Vn=Object.prototype,kn=Vn.hasOwnProperty;function Xn(e){var t=this.__data__;return Wn?t[e]!==void 0:kn.call(t,e)}var Jn=Xn,Yn=X,Zn="__lodash_hash_undefined__";function Qn(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Yn&&t===void 0?Zn:t,this}var ea=Qn,ta=Gn,ra=Nn,na=Kn,aa=Jn,ia=ea;function j(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}j.prototype.clear=ta;j.prototype.delete=ra;j.prototype.get=na;j.prototype.has=aa;j.prototype.set=ia;var sa=j,me=sa,oa=k,ua=ce;function ca(){this.size=0,this.__data__={hash:new me,map:new(ua||oa),string:new me}}var fa=ca;function va(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var la=va,ha=la;function da(e,t){var r=e.__data__;return ha(t)?r[typeof t=="string"?"string":"hash"]:r.map}var J=da,pa=J;function _a(e){var t=pa(this,e).delete(e);return this.size-=t?1:0,t}var ga=_a,ba=J;function ya(e){return ba(this,e).get(e)}var $a=ya,ma=J;function Ta(e){return ma(this,e).has(e)}var Oa=Ta,Aa=J;function wa(e,t){var r=Aa(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var Ea=wa,Sa=fa,Ca=ga,ja=$a,xa=Oa,Ia=Ea;function x(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}x.prototype.clear=Sa;x.prototype.delete=Ca;x.prototype.get=ja;x.prototype.has=xa;x.prototype.set=Ia;var Ze=x,Pa=k,Ma=ce,Ra=Ze,La=200;function Da(e,t){var r=this.__data__;if(r instanceof Pa){var n=r.__data__;if(!Ma||n.length<La-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ra(n)}return r.set(e,t),this.size=r.size,this}var Ga=Da,Ha=k,Na=Ur,Fa=Wr,za=kr,Ba=Jr,qa=Ga;function I(e){var t=this.__data__=new Ha(e);this.size=t.size}I.prototype.clear=Na;I.prototype.delete=Fa;I.prototype.get=za;I.prototype.has=Ba;I.prototype.set=qa;var Ua=I,Ka="__lodash_hash_undefined__";function Wa(e){return this.__data__.set(e,Ka),this}var Va=Wa;function ka(e){return this.__data__.has(e)}var Xa=ka,Ja=Ze,Ya=Va,Za=Xa;function U(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new Ja;++t<r;)this.add(e[t])}U.prototype.add=U.prototype.push=Ya;U.prototype.has=Za;var Qa=U;function ei(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var ti=ei;function ri(e,t){return e.has(t)}var ni=ri,ai=Qa,ii=ti,si=ni,oi=1,ui=2;function ci(e,t,r,n,a,i){var s=r&oi,o=e.length,u=t.length;if(o!=u&&!(s&&u>o))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var h=-1,v=!0,_=r&ui?new ai:void 0;for(i.set(e,t),i.set(t,e);++h<o;){var p=e[h],g=t[h];if(n)var y=s?n(g,p,h,t,e,i):n(p,g,h,e,t,i);if(y!==void 0){if(y)continue;v=!1;break}if(_){if(!ii(t,function(b,$){if(!si(_,$)&&(p===b||a(p,b,r,n,i)))return _.push($)})){v=!1;break}}else if(!(p===g||a(p,g,r,n,i))){v=!1;break}}return i.delete(e),i.delete(t),v}var Qe=ci,fi=m,vi=fi.Uint8Array,li=vi;function hi(e){var t=-1,r=Array(e.size);return e.forEach(function(n,a){r[++t]=[a,n]}),r}var di=hi;function pi(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var _i=pi,Te=ue,Oe=li,gi=Xe,bi=Qe,yi=di,$i=_i,mi=1,Ti=2,Oi="[object Boolean]",Ai="[object Date]",wi="[object Error]",Ei="[object Map]",Si="[object Number]",Ci="[object RegExp]",ji="[object Set]",xi="[object String]",Ii="[object Symbol]",Pi="[object ArrayBuffer]",Mi="[object DataView]",Ae=Te?Te.prototype:void 0,Q=Ae?Ae.valueOf:void 0;function Ri(e,t,r,n,a,i,s){switch(r){case Mi:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Pi:return!(e.byteLength!=t.byteLength||!i(new Oe(e),new Oe(t)));case Oi:case Ai:case Si:return gi(+e,+t);case wi:return e.name==t.name&&e.message==t.message;case Ci:case xi:return e==t+"";case Ei:var o=yi;case ji:var u=n&mi;if(o||(o=$i),e.size!=t.size&&!u)return!1;var c=s.get(e);if(c)return c==t;n|=Ti,s.set(e,t);var d=bi(o(e),o(t),n,a,i,s);return s.delete(e),d;case Ii:if(Q)return Q.call(e)==Q.call(t)}return!1}var Li=Ri;function Di(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var Gi=Di,Hi=Array.isArray,fe=Hi,Ni=Gi,Fi=fe;function zi(e,t,r){var n=t(e);return Fi(e)?n:Ni(n,r(e))}var Bi=zi;function qi(e,t){for(var r=-1,n=e==null?0:e.length,a=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[a++]=s)}return i}var Ui=qi;function Ki(){return[]}var Wi=Ki,Vi=Ui,ki=Wi,Xi=Object.prototype,Ji=Xi.propertyIsEnumerable,we=Object.getOwnPropertySymbols,Yi=we?function(e){return e==null?[]:(e=Object(e),Vi(we(e),function(t){return Ji.call(e,t)}))}:ki,Zi=Yi;function Qi(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var es=Qi,ts=D,rs=G,ns="[object Arguments]";function as(e){return rs(e)&&ts(e)==ns}var is=as,Ee=is,ss=G,et=Object.prototype,os=et.hasOwnProperty,us=et.propertyIsEnumerable,cs=Ee(function(){return arguments}())?Ee:function(e){return ss(e)&&os.call(e,"callee")&&!us.call(e,"callee")},fs=cs,K={exports:{}};function vs(){return!1}var ls=vs;(function(e,t){var r=m,n=ls,a=t&&!t.nodeType&&t,i=a&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===a,o=s?r.Buffer:void 0,u=o?o.isBuffer:void 0,c=u||n;e.exports=c})(K,K.exports);var hs=9007199254740991,ds=/^(?:0|[1-9]\d*)$/;function ps(e,t){var r=typeof e;return t=t==null?hs:t,!!t&&(r=="number"||r!="symbol"&&ds.test(e))&&e>-1&&e%1==0&&e<t}var _s=ps,gs=9007199254740991;function bs(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=gs}var tt=bs,ys=D,$s=tt,ms=G,Ts="[object Arguments]",Os="[object Array]",As="[object Boolean]",ws="[object Date]",Es="[object Error]",Ss="[object Function]",Cs="[object Map]",js="[object Number]",xs="[object Object]",Is="[object RegExp]",Ps="[object Set]",Ms="[object String]",Rs="[object WeakMap]",Ls="[object ArrayBuffer]",Ds="[object DataView]",Gs="[object Float32Array]",Hs="[object Float64Array]",Ns="[object Int8Array]",Fs="[object Int16Array]",zs="[object Int32Array]",Bs="[object Uint8Array]",qs="[object Uint8ClampedArray]",Us="[object Uint16Array]",Ks="[object Uint32Array]",f={};f[Gs]=f[Hs]=f[Ns]=f[Fs]=f[zs]=f[Bs]=f[qs]=f[Us]=f[Ks]=!0;f[Ts]=f[Os]=f[Ls]=f[As]=f[Ds]=f[ws]=f[Es]=f[Ss]=f[Cs]=f[js]=f[xs]=f[Is]=f[Ps]=f[Ms]=f[Rs]=!1;function Ws(e){return ms(e)&&$s(e.length)&&!!f[ys(e)]}var Vs=Ws;function ks(e){return function(t){return e(t)}}var Xs=ks,re={exports:{}};(function(e,t){var r=Be,n=t&&!t.nodeType&&t,a=n&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===n,s=i&&r.process,o=function(){try{var u=a&&a.require&&a.require("util").types;return u||s&&s.binding&&s.binding("util")}catch{}}();e.exports=o})(re,re.exports);var Js=Vs,Ys=Xs,Se=re.exports,Ce=Se&&Se.isTypedArray,Zs=Ce?Ys(Ce):Js,rt=Zs,Qs=es,eo=fs,to=fe,ro=K.exports,no=_s,ao=rt,io=Object.prototype,so=io.hasOwnProperty;function oo(e,t){var r=to(e),n=!r&&eo(e),a=!r&&!n&&ro(e),i=!r&&!n&&!a&&ao(e),s=r||n||a||i,o=s?Qs(e.length,String):[],u=o.length;for(var c in e)(t||so.call(e,c))&&!(s&&(c=="length"||a&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||no(c,u)))&&o.push(c);return o}var uo=oo,co=Object.prototype;function fo(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||co;return e===r}var vo=fo;function lo(e,t){return function(r){return e(t(r))}}var ho=lo,po=ho,_o=po(Object.keys,Object),go=_o,bo=vo,yo=go,$o=Object.prototype,mo=$o.hasOwnProperty;function To(e){if(!bo(e))return yo(e);var t=[];for(var r in Object(e))mo.call(e,r)&&r!="constructor"&&t.push(r);return t}var Oo=To,Ao=Je,wo=tt;function Eo(e){return e!=null&&wo(e.length)&&!Ao(e)}var So=Eo,Co=uo,jo=Oo,xo=So;function Io(e){return xo(e)?Co(e):jo(e)}var Po=Io,Mo=Bi,Ro=Zi,Lo=Po;function Do(e){return Mo(e,Lo,Ro)}var Go=Do,je=Go,Ho=1,No=Object.prototype,Fo=No.hasOwnProperty;function zo(e,t,r,n,a,i){var s=r&Ho,o=je(e),u=o.length,c=je(t),d=c.length;if(u!=d&&!s)return!1;for(var h=u;h--;){var v=o[h];if(!(s?v in t:Fo.call(t,v)))return!1}var _=i.get(e),p=i.get(t);if(_&&p)return _==t&&p==e;var g=!0;i.set(e,t),i.set(t,e);for(var y=s;++h<u;){v=o[h];var b=e[v],$=t[v];if(n)var H=s?n($,b,v,t,e,i):n(b,$,v,e,t,i);if(!(H===void 0?b===$||a(b,$,r,n,i):H)){g=!1;break}y||(y=v=="constructor")}if(g&&!y){var w=e.constructor,T=t.constructor;w!=T&&"constructor"in e&&"constructor"in t&&!(typeof w=="function"&&w instanceof w&&typeof T=="function"&&T instanceof T)&&(g=!1)}return i.delete(e),i.delete(t),g}var Bo=zo,qo=C,Uo=m,Ko=qo(Uo,"DataView"),Wo=Ko,Vo=C,ko=m,Xo=Vo(ko,"Promise"),Jo=Xo,Yo=C,Zo=m,Qo=Yo(Zo,"Set"),eu=Qo,tu=C,ru=m,nu=tu(ru,"WeakMap"),au=nu,ne=Wo,ae=ce,ie=Jo,se=eu,oe=au,nt=D,P=Ye,xe="[object Map]",iu="[object Object]",Ie="[object Promise]",Pe="[object Set]",Me="[object WeakMap]",Re="[object DataView]",su=P(ne),ou=P(ae),uu=P(ie),cu=P(se),fu=P(oe),A=nt;(ne&&A(new ne(new ArrayBuffer(1)))!=Re||ae&&A(new ae)!=xe||ie&&A(ie.resolve())!=Ie||se&&A(new se)!=Pe||oe&&A(new oe)!=Me)&&(A=function(e){var t=nt(e),r=t==iu?e.constructor:void 0,n=r?P(r):"";if(n)switch(n){case su:return Re;case ou:return xe;case uu:return Ie;case cu:return Pe;case fu:return Me}return t});var vu=A,ee=Ua,lu=Qe,hu=Li,du=Bo,Le=vu,De=fe,Ge=K.exports,pu=rt,_u=1,He="[object Arguments]",Ne="[object Array]",F="[object Object]",gu=Object.prototype,Fe=gu.hasOwnProperty;function bu(e,t,r,n,a,i){var s=De(e),o=De(t),u=s?Ne:Le(e),c=o?Ne:Le(t);u=u==He?F:u,c=c==He?F:c;var d=u==F,h=c==F,v=u==c;if(v&&Ge(e)){if(!Ge(t))return!1;s=!0,d=!1}if(v&&!d)return i||(i=new ee),s||pu(e)?lu(e,t,r,n,a,i):hu(e,t,u,r,n,a,i);if(!(r&_u)){var _=d&&Fe.call(e,"__wrapped__"),p=h&&Fe.call(t,"__wrapped__");if(_||p){var g=_?e.value():e,y=p?t.value():t;return i||(i=new ee),a(g,y,r,n,i)}}return v?(i||(i=new ee),du(e,t,r,n,a,i)):!1}var yu=bu,$u=yu,ze=G;function at(e,t,r,n,a){return e===t?!0:e==null||t==null||!ze(e)&&!ze(t)?e!==e&&t!==t:$u(e,t,r,n,at,a)}var mu=at,Tu=mu;function Ou(e,t){return Tu(e,t)}var Pu=Ou,Au=er,wu=L,Eu="Expected a function";function Su(e,t,r){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(Eu);return wu(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),Au(e,t,{leading:n,maxWait:t,trailing:a})}var Mu=Su,Cu=function(t){return typeof t=="number"};function ju(e){var t=z.exports.useRef(e);return t.current=e,t}function Ru(e,t,r){r===void 0&&(r={});var n=r.immediate,a=ju(e),i=z.exports.useRef(null);z.exports.useEffect(function(){if(!(!Cu(t)||t<0))return n&&a.current(),i.current=setInterval(function(){a.current()},t),function(){i.current&&clearInterval(i.current)}},[t]);var s=z.exports.useCallback(function(){i.current&&clearInterval(i.current)},[]);return s}export{Pu as a,er as d,Iu as i,Mu as t,Ru as u};
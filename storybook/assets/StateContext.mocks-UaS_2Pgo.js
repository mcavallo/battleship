import{r as f,g as L}from"./index-CDs2tPxN.js";import{d as N,e as A,f as M,i as F,g as H,h as K,j as V,k as B,c as y,l as U,m as W,n as J,o as Y,p as j,q as Q}from"./_getTag-CT8Ckwq-.js";import{_ as X,k as T,a as Z,b as z,c as ee,d as re}from"./_baseClone-CB-v1pJ-.js";import{i as te}from"./isPlainObject-BQjU2nco.js";var $={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=f,ae=Symbol.for("react.element"),ie=Symbol.for("react.fragment"),se=Object.prototype.hasOwnProperty,ue=ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,t){var n,a={},i=null,u=null;t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(u=r.ref);for(n in r)se.call(r,n)&&!oe.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)a[n]===void 0&&(a[n]=r[n]);return{$$typeof:ae,type:e,key:i,ref:u,props:a,_owner:ue.current}}c.Fragment=ie;c.jsx=R;c.jsxs=R;$.exports=c;var le=$.exports,me=(e=>(e.End="End",e.Hit="Hit",e.Miss="Miss",e.Sink="Sink",e.Start="Start",e))(me||{}),C=(e=>(e.Attack="Attack",e.End="End",e.Introspection="Introspection",e.Start="Start",e.ToggleDebug="ToggleDebug",e))(C||{}),ce=N,de=A;function pe(e,r,t){(t!==void 0&&!de(e[r],t)||t===void 0&&!(r in e))&&ce(e,r,t)}var I=pe,ve=M,fe=F;function ye(e){return fe(e)&&ve(e)}var be=ye;function ge(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var D=ge,he=X,_e=T;function ke(e){return he(e,_e(e))}var Se=ke,k=I,we=Z,Ee=z,qe=ee,xe=re,S=H,w=K,Oe=be,Ae=V,Me=B,je=y,Te=te,$e=U,E=D,Re=Se;function Ce(e,r,t,n,a,i,u){var s=E(e,t),o=E(r,t),h=u.get(o);if(h){k(e,t,h);return}var l=i?i(s,o,t+"",e,r,u):void 0,m=l===void 0;if(m){var d=w(o),p=!d&&Ae(o),_=!d&&!p&&$e(o);l=o,d||p||_?w(s)?l=s:Oe(s)?l=qe(s):p?(m=!1,l=we(o,!0)):_?(m=!1,l=Ee(o,!0)):l=[]:Te(o)||S(o)?(l=s,S(s)?l=Re(s):(!je(s)||Me(s))&&(l=xe(o))):m=!1}m&&(u.set(o,l),a(l,o,n,i,u),u.delete(o)),k(e,t,l)}var Ie=Ce,De=W,Pe=I,Ge=J,Le=Ie,Ne=y,Fe=T,He=D;function P(e,r,t,n,a){e!==r&&Ge(r,function(i,u){if(a||(a=new De),Ne(i))Le(e,r,u,t,P,n,a);else{var s=n?n(He(e,u),i,u+"",e,r,a):void 0;s===void 0&&(s=i),Pe(e,u,s)}},Fe)}var Ke=P;function Ve(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}var Be=Ve,Ue=Be,q=Math.max;function We(e,r,t){return r=q(r===void 0?e.length-1:r,0),function(){for(var n=arguments,a=-1,i=q(n.length-r,0),u=Array(i);++a<i;)u[a]=n[r+a];a=-1;for(var s=Array(r+1);++a<r;)s[a]=n[a];return s[r]=t(u),Ue(e,this,s)}}var Je=We;function Ye(e){return function(){return e}}var Qe=Ye,Xe=Qe,x=Y,Ze=j,ze=x?function(e,r){return x(e,"toString",{configurable:!0,enumerable:!1,value:Xe(r),writable:!0})}:Ze,er=ze,rr=800,tr=16,nr=Date.now;function ar(e){var r=0,t=0;return function(){var n=nr(),a=tr-(n-t);if(t=n,a>0){if(++r>=rr)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}var ir=ar,sr=er,ur=ir,or=ur(sr),lr=or,mr=j,cr=Je,dr=lr;function pr(e,r){return dr(cr(e,r,mr),e+"")}var vr=pr,fr=A,yr=M,br=Q,gr=y;function hr(e,r,t){if(!gr(t))return!1;var n=typeof r;return(n=="number"?yr(t)&&br(r,t.length):n=="string"&&r in t)?fr(t[r],e):!1}var _r=hr,kr=vr,Sr=_r;function wr(e){return kr(function(r,t){var n=-1,a=t.length,i=a>1?t[a-1]:void 0,u=a>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(a--,i):void 0,u&&Sr(t[0],t[1],u)&&(i=a<3?void 0:i,a=1),r=Object(r);++n<a;){var s=t[n];s&&e(r,s,n,i)}return r})}var Er=wr,qr=Ke,xr=Er,Or=xr(function(e,r,t){qr(e,r,t)}),Ar=Or;const Mr=L(Ar);var v=function(e,r){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])},v(e,r)};function b(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}v(e,r),e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var O,g=function(){function e(){}return e._xfnv1a=function(r){for(var t=2166136261,n=0;n<r.length;n++)t=Math.imul(t^r.charCodeAt(n),16777619);return function(){return t+=t<<13,t^=t>>>7,t+=t<<3,t^=t>>>17,(t+=t<<5)>>>0}},e}();(function(e){function r(t){var n=e.call(this)||this;return n.a=r._xfnv1a(t)(),n}return b(r,e),r.prototype.next=function(){var t=this.a+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296},r})(g);(function(e){function r(t){var n=e.call(this)||this,a=r._xfnv1a(t);return n.a=a(),n.b=a(),n.c=a(),n.d=a(),n}return b(r,e),r.prototype.next=function(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;var t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296},r})(g);(function(e){function r(t){var n=e.call(this)||this,a=r._xfnv1a(t);return n.a=a(),n.b=a(),n.c=a(),n.d=a(),n}return b(r,e),r.prototype.next=function(){var t=this.b<<9,n=5*this.a;return n=n<<7|9*(n>>>25),this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=t,this.d=this.d<<11|this.d>>>21,(n>>>0)/4294967296},r})(g);(function(e){e.sfc32="sfc32",e.mulberry32="mulberry32",e.xoshiro128ss="xoshiro128ss"})(O||(O={}));const G=f.createContext({}),Dr=()=>{const e=f.useContext(G);if(!e||Object.keys(e).length===0)throw new Error("'useGameState' should only be used inside 'StateContext'.");return e},jr={attacksMap:{},board:[],hasGameEnded:!1,hasGameStarted:!1,isDebug:!1,log:[],shipsMap:{},score:{current:0,win:0}};C.Introspection;const Tr=({children:e,value:{state:r={},dispatch:t=()=>{}}={}})=>{const n={state:Mr(structuredClone(jr),r),dispatch:t};return le.jsx(G.Provider,{value:n,children:e})};Tr.__docgenInfo={description:"",methods:[],displayName:"MockedStateContextProvider",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  state?: Partial<GameState>;
  dispatch?: Dispatch<GameAction>;
}`,signature:{properties:[{key:"state",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  attacksMap: Record<string, boolean>;
  board: Board;
  hasGameEnded: boolean;
  hasGameStarted: boolean;
  isDebug: boolean;
  log: LogEntry<Event>[];
  shipsMap: ShipsMap;
  score: GameScore;
}`,signature:{properties:[{key:"attacksMap",value:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>",required:!0}},{key:"board",value:{name:"Array",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}],raw:"number[][]",required:!0}},{key:"hasGameEnded",value:{name:"boolean",required:!0}},{key:"hasGameStarted",value:{name:"boolean",required:!0}},{key:"isDebug",value:{name:"boolean",required:!0}},{key:"log",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  ts: number;
  event: T;
}`,signature:{properties:[{key:"ts",value:{name:"number",required:!0}},{key:"event",value:{name:"union",raw:"EndEvent | HitEvent | MissEvent | SinkEvent | StartEvent",elements:[{name:"signature",type:"object",raw:`{
  stats: GameStats;
  type: EventKind.End;
}`,signature:{properties:[{key:"stats",value:{name:"signature",type:"object",raw:`{
  attacks: number;
  hitRatio: number;
  hits: number;
  misses: number;
  score: number;
  sunk: number;
}`,signature:{properties:[{key:"attacks",value:{name:"number",required:!0}},{key:"hitRatio",value:{name:"number",required:!0}},{key:"hits",value:{name:"number",required:!0}},{key:"misses",value:{name:"number",required:!0}},{key:"score",value:{name:"number",required:!0}},{key:"sunk",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"EventKind.End",required:!0}}]}},{name:"intersection",raw:`Coords & {
  targetId: number;
  type: EventKind.Hit;
}`,elements:[{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  targetId: number;
  type: EventKind.Hit;
}`,signature:{properties:[{key:"targetId",value:{name:"number",required:!0}},{key:"type",value:{name:"EventKind.Hit",required:!0}}]}}]},{name:"intersection",raw:`Coords & {
  type: EventKind.Miss;
}`,elements:[{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: EventKind.Miss;
}`,signature:{properties:[{key:"type",value:{name:"EventKind.Miss",required:!0}}]}}]},{name:"intersection",raw:`Coords & {
  targetId: number;
  type: EventKind.Sink;
}`,elements:[{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  targetId: number;
  type: EventKind.Sink;
}`,signature:{properties:[{key:"targetId",value:{name:"number",required:!0}},{key:"type",value:{name:"EventKind.Sink",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  type: EventKind.Start;
}`,signature:{properties:[{key:"type",value:{name:"EventKind.Start",required:!0}}]}}],required:!0}}]}}],raw:"LogEntry<Event>[]",required:!0}},{key:"shipsMap",value:{name:"Record",elements:[{name:"number"},{name:"intersection",raw:`ShipTemplate & {
  id: number;
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string;
  size: number;
  hits: number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"hits",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}}]}],raw:"Record<number, Ship>",required:!0}},{key:"score",value:{name:"signature",type:"object",raw:`{
  current: number;
  win: number;
}`,signature:{properties:[{key:"current",value:{name:"number",required:!0}},{key:"win",value:{name:"number",required:!0}}]},required:!0}}]}}],raw:"Partial<GameState>",required:!1}},{key:"dispatch",value:{name:"Dispatch",elements:[{name:"union",raw:`| AttackAction
| EndAction
| IntrospectionAction
| StartAction
| ToggleDebugAction`,elements:[{name:"AttackAction"},{name:"EndAction"},{name:"IntrospectionAction"},{name:"StartAction"},{name:"ToggleDebugAction"}]}],raw:"Dispatch<GameAction>",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};export{me as E,Tr as M,le as j,Dr as u};

import{j as u,u as F,M as ne}from"./StateContext.mocks-UaS_2Pgo.js";import{a as T}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as se,d as V,e as J,f as K,B as ae}from"./StateContext.fixtures-C70V51lz.js";import{g as oe,r as v}from"./index-CDs2tPxN.js";import"./_getTag-CT8Ckwq-.js";import"./_baseClone-CB-v1pJ-.js";import"./isPlainObject-BQjU2nco.js";import"./v4-CQkTLCs1.js";var Q={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var s={}.hasOwnProperty;function n(){for(var r="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(r=o(r,a(i)))}return r}function a(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var t="";for(var i in r)s.call(r,i)&&r[i]&&(t=o(t,i));return t}function o(r,t){return t?r?r+" "+t:r+t:r}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Q);var ie=Q.exports;const U=oe(ie),X=({size:e})=>{const s=v.useMemo(()=>Array(e).fill(0).map((n,a)=>a+1),[e]);return u.jsx("div",{className:"header-row",role:"columnheader",children:s.map((n,a)=>u.jsx("div",{className:"header-cell",role:"cell",children:n},`headers-cell${a}`))})};X.__docgenInfo={description:"",methods:[],displayName:"NumberHeadersRow",props:{size:{required:!0,tsType:{name:"number"},description:""}}};function ue(e,s,n,a){return!e&&!s?"":String(n!=null&&n.size?n.size:a)}function me(e,s){return!s||!e?"":s.name}function ce(e){return e!=null&&e.name&&(e!=null&&e.id)?`${e.name} #${e.id}`:""}function de(e,s,n){var c,d;const a=e.board[n][s],o=(c=e.attacksMap)==null?void 0:c[`${n}${s}`],r=o===!0,t=(d=e.shipsMap)==null?void 0:d[a],i=U({cell:!0,taken:a!==0,available:o===void 0,hit:r,miss:o===!1});return{id:`cell-${n}${s}`,className:i,label:ue(e.isDebug,r,t,a),tooltipContent:e.isDebug?ce(t):me(r,t)}}const Y=({onClick:e,onMouseOut:s,onMouseOver:n,x:a,y:o})=>{const{state:r}=F(),{id:t,className:i,tooltipContent:c,label:d}=v.useMemo(()=>de(r,a,o),[r,a,o]);return u.jsx("div",{className:i,id:t,onClick:e,onMouseOut:s,onMouseOver:n(t,c),role:"cell",children:d})};Y.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMouseOut:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMouseOver:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string, content: string) => () => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"content"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},x:{required:!0,tsType:{name:"number"},description:""},y:{required:!0,tsType:{name:"number"},description:""}}};const ee=({idx:e})=>{const s=v.useMemo(()=>String.fromCharCode(e+1+64),[e]);return u.jsx("div",{className:"header-cell vertical",role:"rowheader",children:s})};ee.__docgenInfo={description:"",methods:[],displayName:"LetterHeaderCell",props:{idx:{required:!0,tsType:{name:"number"},description:""}}};const re=({onAttack:e,onCellMouseOut:s,onCellMouseOver:n,row:a,rowIdx:o})=>u.jsxs("div",{className:"row",role:"row",children:[u.jsx(ee,{idx:o},`headerCell${o}`),a.map((r,t)=>u.jsx(Y,{onClick:e(t,o),onMouseOut:s,onMouseOver:n,x:t,y:o},`cell${o}${t}`))]});re.__docgenInfo={description:"",methods:[],displayName:"Row",props:{onAttack:{required:!0,tsType:{name:"signature",type:"function",raw:"(x: number, y: number) => () => void",signature:{arguments:[{type:{name:"number"},name:"x"},{type:{name:"number"},name:"y"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},onCellMouseOut:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCellMouseOver:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string, content: string) => () => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"content"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},row:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},rowIdx:{required:!0,tsType:{name:"number"},description:""}}};const te=({onAttack:e,onCellMouseOut:s,onCellMouseOver:n})=>{const{state:a}=F(),{board:o,className:r}=v.useMemo(()=>({board:a.board,className:U({board:!0,"game-ended":a.hasGameEnded,"game-active":!a.hasGameEnded})}),[a]);return u.jsxs("div",{className:r,role:"grid",children:[u.jsx(X,{size:o.length}),o.map((t,i)=>u.jsx(re,{onAttack:e,onCellMouseOut:s,onCellMouseOver:n,row:t,rowIdx:i},`row${i}`))]})};te.__docgenInfo={description:"",methods:[],displayName:"Board",props:{onAttack:{required:!0,tsType:{name:"signature",type:"function",raw:"(x: number, y: number) => () => void",signature:{arguments:[{type:{name:"number"},name:"x"},{type:{name:"number"},name:"y"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},onCellMouseOut:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCellMouseOver:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string, content: string) => () => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"content"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""}}};const ve={component:te,decorators:[(e,{parameters:s})=>u.jsx(ne,{value:{state:s.state},children:u.jsx(e,{})})]},m={onAttack:()=>T("onAttack"),onCellMouseOut:T("onCellMouseOut"),onCellMouseOver:()=>T("onCellMouseOver")},p={args:m,parameters:{state:se}},g={args:m,parameters:{state:V}},l={args:m,parameters:{state:{...J}}},_={args:m,parameters:{state:{...K}}},f={args:m,parameters:{state:{board:ae,isDebug:!0}}},S={args:m,parameters:{state:{...V,isDebug:!0}}},y={args:m,parameters:{state:{...J,isDebug:!0}}},b={args:m,parameters:{state:{...K,isDebug:!0}}};var A,D,h;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: STATE_BOARD_10
  }
}`,...(h=(D=p.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var O,M,W;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: STATE_BOARD_10_W_SHIPS
  }
}`,...(W=(M=g.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var w,C,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS_W_MISS
    }
  }
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var H,E,N;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS_W_HIT
    }
  }
}`,...(N=(E=_.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,j,B;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: {
      board: BOARD_SIZE_10,
      isDebug: true
    }
  }
}`,...(B=(j=f.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var I,q,P;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS,
      isDebug: true
    }
  }
}`,...(P=(q=S.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var $,k,z;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS_W_MISS,
      isDebug: true
    }
  }
}`,...(z=(k=y.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var G,L,Z;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS_W_HIT,
      isDebug: true
    }
  }
}`,...(Z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};const Te=["Default","DefaultWithShips","DefaultWithMiss","DefaultWithHit","Debug","DebugWithShips","DebugWithMiss","DebugWithHit"];export{f as Debug,b as DebugWithHit,y as DebugWithMiss,S as DebugWithShips,p as Default,_ as DefaultWithHit,l as DefaultWithMiss,g as DefaultWithShips,Te as __namedExportsOrder,ve as default};

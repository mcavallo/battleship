import{u as v,j as e,M as G}from"./StateContext.mocks-UaS_2Pgo.js";import{a as s}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./index-CDs2tPxN.js";import"./_getTag-CT8Ckwq-.js";import"./_baseClone-CB-v1pJ-.js";import"./isPlainObject-BQjU2nco.js";import"./v4-CQkTLCs1.js";const p=({onGiveUp:a,onRestart:n,onToggleDebug:l})=>{const{state:b}=v();return e.jsxs("div",{className:"buttons-panel",role:"menubar",children:[e.jsx("button",{"aria-label":"give up",onClick:a,disabled:b.hasGameEnded,role:"button",children:"Give up"}),e.jsx("button",{"aria-label":"restart",onClick:n,role:"button",children:"Restart"}),e.jsx("button",{"aria-label":"toggle debug",onClick:l,role:"button",children:"Debug"})]})};p.__docgenInfo={description:"",methods:[],displayName:"ButtonsPanel",props:{onGiveUp:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRestart:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleDebug:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const R={component:p,decorators:[(a,{parameters:n})=>e.jsx(G,{value:{state:n.state},children:e.jsx(a,{})})]},g={onGiveUp:()=>s("onGiveUp"),onRestart:s("onRestart"),onToggleDebug:()=>s("onToggleDebug")},t={args:g,parameters:{state:{hasGameEnded:!1}}},r={args:g,parameters:{state:{hasGameEnded:!0}}};var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: {
      hasGameEnded: false
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: commonArgs,
  parameters: {
    state: {
      hasGameEnded: true
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const k=["GameOngoing","GameEnded"];export{r as GameEnded,t as GameOngoing,k as __namedExportsOrder,R as default};

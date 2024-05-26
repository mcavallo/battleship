import{j as e,u as f,E as s,M as Y}from"./StateContext.mocks-UaS_2Pgo.js";import{E as $,H,S as N,M as K,a as O,b as G}from"./StateContext.fixtures-C70V51lz.js";import{r as z}from"./index-CDs2tPxN.js";import"./_getTag-CT8Ckwq-.js";import"./_baseClone-CB-v1pJ-.js";import"./isPlainObject-BQjU2nco.js";function C(r){return r.toFixed(2).replace(/\.?0+$/,"")}function d(r,t,n="s"){return`${t}${r!==1?n:""}`}const T=({entry:r})=>e.jsxs("div",{className:"entry",role:"log",children:[e.jsxs("div",{className:"content",children:[e.jsx("span",{children:"🏅"}),e.jsxs("span",{children:[e.jsx("strong",{children:"The game is over!"})," This is how you did:"]})]}),e.jsxs("ul",{className:"stats",children:[e.jsxs("li",{children:["Your score is ",e.jsx("strong",{children:r.event.stats.score})]}),e.jsxs("li",{children:["You sunk ",e.jsx("strong",{children:r.event.stats.sunk})," ",d(r.event.stats.sunk,"ship")]}),e.jsxs("li",{children:["You fired ",e.jsx("strong",{children:r.event.stats.attacks})," ",d(r.event.stats.attacks,"time")]}),e.jsxs("li",{children:["Your hit ratio is ",e.jsxs("strong",{children:[C(r.event.stats.hitRatio),"%"]})]})]})]});T.__docgenInfo={description:"",methods:[],displayName:"EndEntry",props:{entry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ts: number;
  event: T;
}`,signature:{properties:[{key:"ts",value:{name:"number",required:!0}},{key:"event",value:{name:"signature",type:"object",raw:`{
  stats: GameStats;
  type: EventKind.End;
}`,signature:{properties:[{key:"stats",value:{name:"signature",type:"object",raw:`{
  attacks: number;
  hitRatio: number;
  hits: number;
  misses: number;
  score: number;
  sunk: number;
}`,signature:{properties:[{key:"attacks",value:{name:"number",required:!0}},{key:"hitRatio",value:{name:"number",required:!0}},{key:"hits",value:{name:"number",required:!0}},{key:"misses",value:{name:"number",required:!0}},{key:"score",value:{name:"number",required:!0}},{key:"sunk",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"EventKind.End",required:!0}}]},required:!0}}]}},description:""}}};const w=({entry:r,shipsMap:t})=>e.jsx("div",{className:"entry",role:"log",children:e.jsxs("div",{className:"content",children:[e.jsx("span",{children:"💥"}),e.jsxs("span",{children:[e.jsxs("strong",{children:["You hit a ",t[r.event.targetId].name]}),"!"]})]})});w.__docgenInfo={description:"",methods:[],displayName:"HitEntry",props:{entry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ts: number;
  event: T;
}`,signature:{properties:[{key:"ts",value:{name:"number",required:!0}},{key:"event",value:{name:"intersection",raw:`Coords & {
  targetId: number;
  type: EventKind.Hit;
}`,elements:[{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  targetId: number;
  type: EventKind.Hit;
}`,signature:{properties:[{key:"targetId",value:{name:"number",required:!0}},{key:"type",value:{name:"EventKind.Hit",required:!0}}]}}],required:!0}}]}},description:""},shipsMap:{required:!0,tsType:{name:"Record",elements:[{name:"number"},{name:"intersection",raw:`ShipTemplate & {
  id: number;
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string;
  size: number;
  hits: number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"hits",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}}]}],raw:"Record<number, Ship>"},description:""}}};const M=({entry:r})=>e.jsx("div",{className:"entry",role:"log",children:e.jsxs("div",{className:"content",children:[e.jsx("span",{children:"🌊"}),e.jsx("span",{children:"Miss"})]})},`${r.ts}${r.event.type}`);M.__docgenInfo={description:"",methods:[],displayName:"MissEntry",props:{entry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ts: number;
  event: T;
}`,signature:{properties:[{key:"ts",value:{name:"number",required:!0}},{key:"event",value:{name:"intersection",raw:`Coords & {
  type: EventKind.Miss;
}`,elements:[{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: EventKind.Miss;
}`,signature:{properties:[{key:"type",value:{name:"EventKind.Miss",required:!0}}]}}],required:!0}}]}},description:""}}};const I=({entry:r,shipsMap:t})=>e.jsx("div",{className:"entry",role:"log",children:e.jsxs("div",{className:"content",children:[e.jsx("span",{children:"🚢"}),e.jsx("span",{children:e.jsxs("strong",{children:["A ",t[r.event.targetId].name," sank!"]})})]})});I.__docgenInfo={description:"",methods:[],displayName:"SinkEntry",props:{entry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ts: number;
  event: T;
}`,signature:{properties:[{key:"ts",value:{name:"number",required:!0}},{key:"event",value:{name:"intersection",raw:`Coords & {
  targetId: number;
  type: EventKind.Sink;
}`,elements:[{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  targetId: number;
  type: EventKind.Sink;
}`,signature:{properties:[{key:"targetId",value:{name:"number",required:!0}},{key:"type",value:{name:"EventKind.Sink",required:!0}}]}}],required:!0}}]}},description:""},shipsMap:{required:!0,tsType:{name:"Record",elements:[{name:"number"},{name:"intersection",raw:`ShipTemplate & {
  id: number;
}`,elements:[{name:"signature",type:"object",raw:`{
  name: string;
  size: number;
  hits: number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"hits",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}}]}],raw:"Record<number, Ship>"},description:""}}};const L=()=>e.jsx("div",{className:"entry",role:"log",children:e.jsxs("div",{className:"content",children:[e.jsx("span",{children:"🏁"}),e.jsx("span",{children:e.jsx("strong",{children:"Game started"})})]})});L.__docgenInfo={description:"",methods:[],displayName:"StartEntry"};const R=()=>{const{state:r}=f(),t=z.useMemo(()=>r.log.slice().reverse(),[r.log]);return t.length===0?null:e.jsx("div",{className:"event-log",role:"feed",children:t.map(n=>{switch(n.event.type){case s.End:return e.jsx(T,{entry:n},`${n.ts}${n.event.type}`);case s.Hit:return e.jsx(w,{entry:n,shipsMap:r.shipsMap},`${n.ts}${n.event.type}`);case s.Miss:return e.jsx(M,{entry:n},`${n.ts}${n.event.type}`);case s.Sink:return e.jsx(I,{entry:n,shipsMap:r.shipsMap},`${n.ts}${n.event.type}`);case s.Start:return e.jsx(L,{},`${n.ts}${n.event.type}`)}})})};R.__docgenInfo={description:"",methods:[],displayName:"EventLog"};const Q={component:R,decorators:[(r,{parameters:t})=>e.jsx(Y,{value:{state:t.state},children:e.jsx(r,{})})]},a={parameters:{state:{log:[$]}}},i={parameters:{state:{log:[H],shipsMap:{1:N}}}},u={parameters:{state:{log:[K]}}},o={parameters:{state:{log:[O],shipsMap:{1:N}}}},m={parameters:{state:{log:[G]}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    state: {
      log: [END_LOG_ENTRY]
    }
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var y,g,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    state: {
      log: [HIT_LOG_ENTRY],
      shipsMap: {
        1: SHIP_ONE
      }
    }
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,h,E;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    state: {
      log: [MISS_LOG_ENTRY]
    }
  }
}`,...(E=(h=u.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var j,k,x;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    state: {
      log: [SINK_LOG_ENTRY],
      shipsMap: {
        1: SHIP_ONE
      }
    }
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var q,S,_;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    state: {
      log: [START_LOG_ENTRY]
    }
  }
}`,...(_=(S=m.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const U=["EndLogEntry","HitLogEntry","MissLogEntry","SinkLogEntry","StartLogEntry"];export{a as EndLogEntry,i as HitLogEntry,u as MissLogEntry,o as SinkLogEntry,m as StartLogEntry,U as __namedExportsOrder,Q as default};

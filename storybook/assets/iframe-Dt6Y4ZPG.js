const __vite__fileDeps=["./Board.stories-CgUoVdQf.js","./StateContext.mocks-UaS_2Pgo.js","./index-CDs2tPxN.js","./_getTag-CT8Ckwq-.js","./_baseClone-CB-v1pJ-.js","./isPlainObject-BQjU2nco.js","./chunk-MZXVCX43-CM0pFb8Z.js","./v4-CQkTLCs1.js","./StateContext.fixtures-C70V51lz.js","./ButtonsPanel.stories-DPTWBrZq.js","./EventLog.stories-B82XXmP0.js","./entry-preview-DRtwuanT.js","./react-18-CqnZ7Kye.js","./entry-preview-docs-B8jSMG6W.js","./index-BZSPx_Za.js","./index-DrFu-skq.js","./preview-CJTK1H4D.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-D99Rw7yA.js","./preview-DRhrQ47e.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="modulepreload",R=function(_,s){return new URL(_,s).href},O={},r=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,l),i in O)return;O[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let m=t.length-1;m>=0;m--){const a=t[m];if(a.href===i&&(!u||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":f,u||(n.as="script",n.crossOrigin=""),n.href=i,d&&n.setAttribute("nonce",d),document.head.appendChild(n),u)return new Promise((m,a)=>{n.addEventListener("load",m),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,E=P({page:"preview"});L.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const T={"./src/components/Board/Board.stories.tsx":async()=>r(()=>import("./Board.stories-CgUoVdQf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./src/components/ButtonsPanel/ButtonsPanel.stories.tsx":async()=>r(()=>import("./ButtonsPanel.stories-DPTWBrZq.js"),__vite__mapDeps([9,1,2,3,4,5,6,7]),import.meta.url),"./src/components/EventLog/EventLog.stories.tsx":async()=>r(()=>import("./EventLog.stories-B82XXmP0.js"),__vite__mapDeps([10,1,2,3,4,5,8]),import.meta.url)};async function v(_){return T[_]()}const{composeConfigs:w,PreviewWeb:h,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const _=await Promise.all([r(()=>import("./entry-preview-DRtwuanT.js"),__vite__mapDeps([11,2,12]),import.meta.url),r(()=>import("./entry-preview-docs-B8jSMG6W.js"),__vite__mapDeps([13,14,2,3,15,5]),import.meta.url),r(()=>import("./preview-CJTK1H4D.js"),__vite__mapDeps([16,7]),import.meta.url),r(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([17,18]),import.meta.url),r(()=>import("./preview-C69qpJJf.js"),[],import.meta.url),r(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([19,15]),import.meta.url),r(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),r(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),r(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([20,15]),import.meta.url),r(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),r(()=>import("./preview-BcrGd3F6.js"),[],import.meta.url),r(()=>import("./preview-D99Rw7yA.js"),__vite__mapDeps([21,22]),import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h(v,A);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{r as _};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminApp-Bcmg3zUE.js","assets/motion-GIgwSgjC.js","assets/react-DxhCWetE.js","assets/styled-BR92RCo_.js","assets/services-CrHTAzk8.js","assets/PreviewPage-EUaaBQvi.js"])))=>i.map(i=>d[i]);
import{r as x,j as e,m as g,u as W,a as Se,A as E,b as Me,c as Oe,d as J,e as Ve,L as Ge,f as de,M as Ue}from"./motion-GIgwSgjC.js";import{a as _e}from"./react-DxhCWetE.js";import{m as ee,d as n,l as G,f as We}from"./styled-BR92RCo_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Je=_e();const Ye="modulepreload",Ke=function(t){return"/abtin-portfolio/"+t},pe={},Ie=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let p=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),m=s?.nonce||s?.getAttribute("nonce");o=p(i.map(l=>{if(l=Ke(l),l in pe)return;pe[l]=!0;const u=l.endsWith(".css"),v=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${v}`))return;const b=document.createElement("link");if(b.rel=u?"stylesheet":Ye,u||(b.as="script"),b.crossOrigin="",b.href=l,m&&b.setAttribute("nonce",m),document.head.appendChild(b),u)return new Promise((A,f)=>{b.addEventListener("load",A),b.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function c(s){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=s,window.dispatchEvent(m),!m.defaultPrevented)throw s}return o.then(s=>{for(const m of s||[])m.status==="rejected"&&c(m.reason);return r().catch(c)})},Le=x.createContext(null);function Qe({content:t,children:r}){return e.jsx(Le.Provider,{value:t,children:r})}function M(){const t=x.useContext(Le);if(!t)throw new Error("useContent must be used inside <ContentProvider>");return t}const D={indigo:"#6366f1",violet:"#8b5cf6",pink:"#ec4899",cyan:"#06b6d4",emerald:"#10b981",amber:"#f59e0b"},ue=["indigo","violet","pink","cyan","emerald","amber"],N=(t,r)=>D[ue[t%ue.length]],d={bgElevated:"var(--bg-elevated)",surface:"var(--surface)",border:"var(--border)",borderStrong:"var(--border-strong)",text:"var(--text)",textMuted:"var(--text-muted)",heading:"var(--heading)",primary:"var(--primary)"},S={brand:"linear-gradient(120deg, #6366f1 0%, #8b5cf6 40%, #ec4899 100%)",brandAnimated:"linear-gradient(120deg, #6366f1, #8b5cf6, #ec4899, #06b6d4, #6366f1)"},j={body:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',display:'"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',mono:'"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace'},k={sm:"10px",md:"16px",lg:"24px",pill:"999px"},qe={sm:"var(--shadow-sm)"},C={maxWidth:"1180px",navHeight:"72px",gutter:"clamp(16px, 4vw, 32px)"},L={sm:"@media (max-width: 640px)",md:"@media (max-width: 900px)"},y=(t,r)=>`${t}${Math.round(Math.max(0,Math.min(1,r))*255).toString(16).padStart(2,"0")}`,T={out:[.22,1,.36,1]},Xe={email:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]}),linkedin:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),e.jsx("path",{d:"M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"})]}),github:e.jsx("path",{d:"M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"}),telegram:e.jsx("path",{d:"m21 4-3 16-6-5-3 3v-5l9-8-11 6-4-2z"}),website:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"})]}),arrowRight:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"}),arrowUp:e.jsx("path",{d:"M12 19V5M6 11l6-6 6 6"}),external:e.jsx("path",{d:"M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"}),download:e.jsx("path",{d:"M12 4v11M7 10l5 5 5-5M5 20h14"}),sun:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),moon:e.jsx("path",{d:"M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"}),menu:e.jsx("path",{d:"M4 7h16M4 12h16M4 17h16"}),close:e.jsx("path",{d:"M6 6l12 12M18 6 6 18"}),lock:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),e.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"})]}),pin:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"}),e.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),chevronDown:e.jsx("path",{d:"m6 9 6 6 6-6"}),plus:e.jsx("path",{d:"M12 5v14M5 12h14"}),trash:e.jsx("path",{d:"M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"}),copy:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),e.jsx("path",{d:"M5 15V5a1 1 0 0 1 1-1h10"})]}),eye:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),upload:e.jsx("path",{d:"M12 20V9M7 14l5-5 5 5M5 4h14"}),logout:e.jsx("path",{d:"M15 12H4M8 8l-4 4 4 4M14 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5"}),check:e.jsx("path",{d:"m5 12 5 5 9-10"}),sparkles:e.jsx("path",{d:"M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"}),save:e.jsx("path",{d:"M5 4h11l3 3v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM8 4v5h7V4M8 20v-6h8v6"}),refresh:e.jsx("path",{d:"M20 11a8 8 0 0 0-14.8-3.8L4 9M4 4v5h5M4 13a8 8 0 0 0 14.8 3.8L20 15M20 20v-5h-5"})};function w({name:t,size:r=20,...i}){return e.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...i,children:Xe[t]})}const Ze=ee`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`,Te=n.span`
  background: ${({$animated:t})=>t?S.brandAnimated:S.brand};
  background-size: ${({$animated:t})=>t?"200% auto":"100% auto"};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${({$animated:t})=>t?Ze:"none"} 8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Y={hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.7,ease:T.out}}},_={hidden:{opacity:0,scale:.85},show:{opacity:1,scale:1,transition:{type:"spring",stiffness:260,damping:22}}},te=(t=.08,r=0)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:r}}}),Ce={once:!0,amount:.12};function R({delay:t=0,variants:r=Y,...i}){return e.jsx(g.div,{initial:"hidden",whileInView:"show",viewport:Ce,variants:r,transition:t?{delay:t}:void 0,...i})}function z({gap:t=.08,delay:r=0,...i}){return e.jsx(g.div,{initial:"hidden",whileInView:"show",viewport:Ce,variants:te(t,r),...i})}function ze({variants:t=Y,...r}){return e.jsx(g.div,{variants:t,...r})}const ie=n.div`
  width: 100%;
  max-width: ${C.maxWidth};
  margin: 0 auto;
  padding: 0 ${C.gutter};
`,et=n.section`
  position: relative;
  padding: clamp(80px, 11vw, 128px) 0;
  background: ${({$alt:t})=>t?d.bgElevated:"transparent"};
  transition: background-color 0.4s ease;
`,tt=n.header`
  display: flex;
  flex-direction: column;
  align-items: ${({$align:t})=>t==="center"?"center":"flex-start"};
  text-align: ${({$align:t})=>t};
  gap: 12px;
  margin-bottom: clamp(40px, 6vw, 64px);

  ${L.md} {
    align-items: flex-start;
    text-align: left;
  }
`,it=n.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${j.mono};
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${d.primary};

  &::after {
    content: "";
    width: 36px;
    height: 1px;
    background: currentColor;
    opacity: 0.6;
  }
`,nt=n.h2`
  font-size: clamp(2rem, 4.6vw, 3.1rem);
  font-weight: 700;
`,rt=n.p`
  max-width: 620px;
  font-size: 1.05rem;
  color: ${d.textMuted};
`;function P({id:t,index:r,title:i,subtitle:a,align:o="left",alt:c,children:s}){return e.jsx(et,{id:t,$alt:c??r%2===1,"aria-labelledby":`${t}-title`,children:e.jsxs(ie,{children:[e.jsx(R,{children:e.jsxs(tt,{$align:o,children:[e.jsxs(it,{children:[String(r+1).padStart(2,"0")," / ",t]}),e.jsx(nt,{id:`${t}-title`,children:e.jsx(Te,{children:i})}),a&&e.jsx(rt,{children:a})]})}),s]})})}const at=n(g.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
`,ot=n(g.a)`
  position: relative;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  color: ${d.heading};
  background: var(--surface);
  border: 1px solid ${d.border};
  backdrop-filter: blur(10px);
  overflow: hidden;
  isolation: isolate;
  transition: color 0.25s ease, border-color 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${S.brand};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #fff;
    border-color: transparent;
  }

  &:hover::before {
    opacity: 1;
  }
`,st=t=>/^https?:/.test(t);function Ae({links:t,delay:r=0}){return e.jsx(at,{initial:"hidden",animate:"show",variants:te(.08,r),children:t.map(i=>e.jsx(g.li,{variants:_,children:e.jsx(ot,{href:i.url,"aria-label":i.label,title:i.label,...st(i.url)?{target:"_blank",rel:"noopener noreferrer"}:{},whileHover:{y:-4,rotate:-4},whileTap:{scale:.92},children:e.jsx(w,{name:i.icon})})},`${i.icon}-${i.url}`))})}const lt=n.footer`
  position: relative;
  padding: 56px 0 40px;
  border-top: 1px solid ${d.border};
`,ct=n.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`,dt=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    font-family: ${j.display};
    font-size: 1.25rem;
    color: ${d.heading};
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    color: ${d.textMuted};
  }
`,pt=n.p`
  margin-top: 36px;
  font-size: 0.85rem;
  color: ${d.textMuted};
  text-align: center;
`;function ut(){const{profile:t,socials:r}=M();return e.jsx(lt,{children:e.jsxs(ie,{children:[e.jsxs(ct,{children:[e.jsxs(dt,{children:[e.jsx("strong",{children:t.name}),t.location&&e.jsxs("span",{children:[e.jsx(w,{name:"pin",size:15}),t.location]})]}),e.jsx(Ae,{links:r})]}),e.jsxs(pt,{children:["© ",new Date().getFullYear()," ",t.name,". Crafted with React, TypeScript &"," ",e.jsx(g.span,{style:{display:"inline-block"},animate:{scale:[1,1.25,1]},transition:{duration:1.4,repeat:1/0,repeatDelay:1.2},children:"♥"})]})]})})}function ht(t){const[r,i]=x.useState(null),a=t.join("|");return x.useEffect(()=>{const o=a.split("|").map(m=>document.getElementById(m)).filter(m=>m!==null);if(o.length===0)return;const c=new IntersectionObserver(m=>{const p=m.filter(l=>l.isIntersecting);p.length>0&&(p.sort((l,u)=>l.boundingClientRect.top-u.boundingClientRect.top),i(p[0].target.id))},{rootMargin:"-35% 0px -60% 0px"});o.forEach(m=>c.observe(m));const s=()=>{window.scrollY<200&&i(null)};return window.addEventListener("scroll",s,{passive:!0}),()=>{c.disconnect(),window.removeEventListener("scroll",s)}},[a]),r}function ne(){return x.useCallback(t=>{if(t==="top"){window.scrollTo({top:0,behavior:"smooth"});return}document.getElementById(t)?.scrollIntoView({behavior:"smooth",block:"start"})},[])}const Pe=x.createContext({mode:"dark",toggle:()=>{}}),De="portfolio:theme";function gt(){try{const t=localStorage.getItem(De);if(t==="light"||t==="dark")return t}catch{}return window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"}function mt({children:t}){const[r,i]=x.useState(gt);x.useEffect(()=>{document.documentElement.dataset.theme=r},[r]);const a=x.useCallback(()=>{i(c=>{const s=c==="dark"?"light":"dark";try{localStorage.setItem(De,s)}catch{}return s})},[]),o=x.useMemo(()=>({mode:r,toggle:a}),[r,a]);return e.jsx(Pe.Provider,{value:o,children:t})}const xt=()=>x.useContext(Pe),Re="@media (max-width: 1100px)",ft=n(g.header)`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: ${C.navHeight};
  display: flex;
  align-items: center;
  transition: background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
  background: ${({$scrolled:t})=>t?"var(--surface)":"transparent"};
  border-bottom: 1px solid ${({$scrolled:t})=>t?d.border:"transparent"};
  backdrop-filter: ${({$scrolled:t})=>t?"blur(18px) saturate(160%)":"none"};
  -webkit-backdrop-filter: ${({$scrolled:t})=>t?"blur(18px) saturate(160%)":"none"};
`,bt=n.nav`
  width: 100%;
  max-width: ${C.maxWidth};
  margin: 0 auto;
  padding: 0 ${C.gutter};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`,yt=n(g.button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: 0;
  cursor: pointer;
  font-family: ${j.display};
  font-weight: 700;
  font-size: 1.1rem;
  color: ${d.heading};
`,vt=n.span`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 11px;
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  background: ${S.brand};
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.4);
`,wt=n.ul`
  display: flex;
  align-items: center;
  gap: 2px;
  list-style: none;
  padding: 5px;
  border-radius: ${k.pill};
  border: 1px solid ${d.border};
  background: var(--surface);
  backdrop-filter: blur(12px);

  ${Re} {
    display: none;
  }
`,jt=n.button`
  position: relative;
  padding: 7px 13px;
  font-size: 0.86rem;
  font-weight: 500;
  border: 0;
  border-radius: ${k.pill};
  background: none;
  cursor: pointer;
  color: ${({$active:t})=>t?"#fff":d.textMuted};
  transition: color 0.25s ease;

  &:hover {
    color: ${({$active:t})=>t?"#fff":d.heading};
  }

  span {
    position: relative;
    z-index: 1;
  }
`,kt=n(g.div)`
  position: absolute;
  inset: 0;
  border-radius: ${k.pill};
  background: ${S.brand};
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
`,$t=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ee=n(g.button)`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${d.border};
  background: var(--surface);
  color: ${d.heading};
  cursor: pointer;
  backdrop-filter: blur(12px);
`,St=n(Ee)`
  display: none;
  ${Re} {
    display: grid;
  }
`,Mt=n(g.div)`
  position: fixed;
  inset: ${C.navHeight} 0 0 0;
  z-index: 49;
  padding: 24px ${C.gutter};
  background: var(--bg);
  overflow-y: auto;
`,It=n(g.button)`
  display: flex;
  align-items: baseline;
  gap: 14px;
  width: 100%;
  padding: 14px 4px;
  font-family: ${j.display};
  font-size: 1.6rem;
  font-weight: 600;
  text-align: left;
  border: 0;
  border-bottom: 1px solid ${d.border};
  background: none;
  cursor: pointer;
  color: ${({$active:t})=>t?d.primary:d.heading};

  small {
    font-family: ${j.mono};
    font-size: 0.75rem;
    color: ${d.textMuted};
  }
`;function Lt(){const{profile:t,sections:r}=M(),i=r.filter(f=>f.visible),a=ht(i.map(f=>f.id)),o=ne(),{mode:c,toggle:s}=xt(),[m,p]=x.useState(!1),[l,u]=x.useState(!1),{scrollY:v}=W();Se(v,"change",f=>u(f>24)),x.useEffect(()=>(document.body.style.overflow=m?"hidden":"",()=>{document.body.style.overflow=""}),[m]);const b=f=>{p(!1),o(f)},A=t.name.split(/\s+/).map(f=>f[0]).join("").slice(0,2).toUpperCase();return e.jsxs(e.Fragment,{children:[e.jsx(ft,{$scrolled:l||m,initial:{y:-80,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,ease:T.out},children:e.jsxs(bt,{"aria-label":"Main",children:[e.jsxs(yt,{onClick:()=>b("top"),whileHover:{scale:1.03},whileTap:{scale:.97},children:[e.jsx(vt,{children:A}),t.name]}),e.jsx(wt,{children:i.map(f=>e.jsx("li",{children:e.jsxs(jt,{$active:a===f.id,onClick:()=>b(f.id),children:[a===f.id&&e.jsx(kt,{layoutId:"nav-pill",transition:{type:"spring",stiffness:380,damping:32}}),e.jsx("span",{children:f.navLabel||f.title})]})},f.id))}),e.jsxs($t,{children:[e.jsx(Ee,{onClick:s,"aria-label":`Switch to ${c==="dark"?"light":"dark"} mode`,whileHover:{rotate:15},whileTap:{scale:.9},children:e.jsx(E,{mode:"wait",initial:!1,children:e.jsx(g.span,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.25},style:{display:"grid"},children:e.jsx(w,{name:c==="dark"?"sun":"moon",size:18})},c)})}),e.jsx(St,{onClick:()=>p(f=>!f),"aria-label":m?"Close menu":"Open menu","aria-expanded":m,whileTap:{scale:.9},children:e.jsx(w,{name:m?"close":"menu",size:18})})]})]})}),e.jsx(E,{children:m&&e.jsx(Mt,{initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.3,ease:T.out},children:i.map((f,ce)=>e.jsxs(It,{$active:a===f.id,onClick:()=>b(f.id),initial:{opacity:0,x:-24},animate:{opacity:1,x:0},transition:{delay:.04*ce,duration:.4,ease:T.out},children:[e.jsx("small",{children:String(ce+1).padStart(2,"0")}),f.navLabel||f.title]},f.id))})})]})}const Tt=n(g.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 60;
  transform-origin: 0 50%;
  background: ${S.brand};
`,Ct=n(g.button)`
  position: fixed;
  right: clamp(16px, 3vw, 32px);
  bottom: clamp(16px, 3vw, 32px);
  z-index: 40;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  background: ${S.brand};
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.45);
`;function zt(){const{scrollYProgress:t,scrollY:r}=W(),i=Me(t,{stiffness:140,damping:30,restDelta:.001}),[a,o]=x.useState(!1),c=ne();return Se(r,"change",s=>o(s>700)),e.jsxs(e.Fragment,{children:[e.jsx(Tt,{style:{scaleX:i}}),e.jsx(E,{children:a&&e.jsx(Ct,{"aria-label":"Back to top",onClick:()=>c("top"),initial:{opacity:0,scale:.6,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.6,y:20},whileHover:{y:-4},whileTap:{scale:.9},children:e.jsx(w,{name:"arrowUp"})})})]})}function At({value:t,decimals:r=0,suffix:i="",duration:a=1.6}){const o=x.useRef(null),c=Oe(o,{once:!0,amount:.6}),s=J(),[m,p]=x.useState(0);return x.useEffect(()=>{if(!c)return;if(s){p(t);return}const l=Ve(0,t,{duration:a,ease:[.22,1,.36,1],onUpdate:p});return()=>l.stop()},[c,s,t,a]),e.jsxs("span",{ref:o,children:[m.toFixed(r),i]})}const Pt=n(g.div)`
  --accent: ${({$accent:t})=>t};
  position: relative;
  isolation: isolate;
  overflow: hidden;
  height: 100%;
  padding: clamp(22px, 3vw, 30px);
  border-radius: ${k.lg};
  background: ${d.surface};
  border: 1px solid ${d.border};
  box-shadow: ${qe.sm};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: border-color 0.35s ease, box-shadow 0.35s ease, background-color 0.4s ease;

  /* Cursor-following glow */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.35s ease;
    background: radial-gradient(
      420px circle at var(--mx, 50%) var(--my, 0%),
      ${({$accent:t})=>y(t,.16)},
      transparent 45%
    );
  }

  /* Accent hairline on top */
  &::after {
    content: "";
    position: absolute;
    left: 24px;
    right: 24px;
    top: 0;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.55;
    transition: opacity 0.35s ease, left 0.35s ease, right 0.35s ease;
  }

  &:hover {
    border-color: ${({$accent:t})=>y(t,.45)};
    box-shadow: 0 20px 50px ${({$accent:t})=>y(t,.18)};
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    opacity: 1;
    left: 0;
    right: 0;
  }
`;function B({accent:t,lift:r=!0,onMouseMove:i,...a}){const o=x.useCallback(c=>{const s=c.currentTarget.getBoundingClientRect();c.currentTarget.style.setProperty("--mx",`${c.clientX-s.left}px`),c.currentTarget.style.setProperty("--my",`${c.clientY-s.top}px`),i?.(c)},[i]);return e.jsx(Pt,{$accent:t,variants:Y,whileHover:r?{y:-6,transition:{type:"spring",stiffness:300,damping:20}}:void 0,onMouseMove:o,...a})}const Dt=n.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;

  ${L.md} {
    grid-template-columns: 1fr;
  }
`,Rt=n(ze)`
  font-size: 1.08rem;
  line-height: 1.85;
  color: ${d.text};

  & + & {
    margin-top: 20px;
  }
`,Et=n.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  font-weight: 600;
  color: ${d.primary};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: gap 0.25s ease, border-color 0.25s ease;

  &:hover {
    gap: 14px;
    border-color: currentColor;
  }
`,Nt=n(z)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`,Bt=n.div`
  font-family: ${j.display};
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 700;
  line-height: 1.1;
  color: ${({$accent:t})=>t};
`,Ft=n.div`
  margin-top: 6px;
  font-size: 0.9rem;
  color: ${d.textMuted};
`,Ht=n(R)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`,he=n.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 0.88rem;
  color: ${d.text};
  text-decoration: none;
  border-radius: ${k.pill};
  border: 1px solid ${d.border};
  background: var(--surface);
  transition: border-color 0.25s ease, color 0.25s ease;

  &[href]:hover {
    border-color: ${d.primary};
    color: ${d.primary};
  }
`;function Ot({config:t,index:r}){const{profile:i,stats:a}=M();return e.jsx(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:e.jsxs(Dt,{children:[e.jsxs("div",{children:[e.jsx(z,{gap:.12,children:i.about.map((o,c)=>e.jsx(Rt,{children:o},c))}),i.cta.url&&e.jsx(R,{delay:.2,children:e.jsxs(Et,{href:i.cta.url,target:"_blank",rel:"noopener noreferrer",children:[i.cta.label||i.cta.url," ",e.jsx(w,{name:"arrowRight",size:18})]})})]}),e.jsxs("div",{children:[e.jsx(Nt,{gap:.1,children:a.map((o,c)=>{const s=N(c);return e.jsxs(B,{accent:s,children:[e.jsx(Bt,{$accent:s,children:e.jsx(At,{value:o.value,decimals:o.decimals,suffix:o.suffix})}),e.jsx(Ft,{children:o.label})]},`${o.label}-${c}`)})}),e.jsxs(Ht,{delay:.2,children:[i.location&&e.jsxs(he,{as:"span",children:[e.jsx(w,{name:"pin",size:16})," ",i.location]}),i.email&&e.jsxs(he,{href:`mailto:${i.email}`,children:[e.jsx(w,{name:"email",size:16})," ",i.email]})]})]})]})})}const Vt={primary:G`
    color: #fff;
    background: ${S.brand};
    background-size: 160% 100%;
    background-position: 0% 50%;
    border: 1px solid transparent;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.35);

    &:hover:not(:disabled) {
      background-position: 100% 50%;
      box-shadow: 0 14px 40px rgba(236, 72, 153, 0.35);
    }
  `,ghost:G`
    color: ${d.heading};
    background: ${d.surface};
    border: 1px solid ${d.borderStrong};
    backdrop-filter: blur(10px);

    &:hover:not(:disabled) {
      border-color: ${d.primary};
      color: ${d.primary};
    }
  `,subtle:G`
    color: ${d.text};
    background: transparent;
    border: 1px solid ${d.border};

    &:hover:not(:disabled) {
      background: ${d.surface};
      border-color: ${d.borderStrong};
    }
  `,danger:G`
    color: #ef4444;
    background: transparent;
    border: 1px solid rgba(239, 68, 68, 0.35);

    &:hover:not(:disabled) {
      background: rgba(239, 68, 68, 0.08);
    }
  `},re=G`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({$size:t})=>t==="sm"?"8px 14px":"13px 24px"};
  font-size: ${({$size:t})=>t==="sm"?"0.85rem":"0.95rem"};
  font-weight: 600;
  border-radius: ${k.pill};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background-position 0.5s ease, box-shadow 0.3s ease, border-color 0.25s ease,
    color 0.25s ease, background-color 0.25s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 1.1em;
    height: 1.1em;
    flex-shrink: 0;
  }

  ${({$variant:t})=>Vt[t]}
`,ae={scale:.96},oe={y:-2},Gt=n(g.button)`
  ${re}
`,Ut=n(g.a)`
  ${re}
`,_t=n(g.label)`
  ${re}
  ${({$disabled:t})=>t&&"opacity: 0.5; pointer-events: none;"}

  input[type="file"] {
    display: none;
  }
`;function K({variant:t="ghost",size:r="md",type:i="button",...a}){return e.jsx(Gt,{type:i,$variant:t,$size:r,whileTap:a.disabled?void 0:ae,whileHover:a.disabled?void 0:oe,...a})}function se({variant:t="ghost",size:r="md",...i}){return e.jsx(Ut,{$variant:t,$size:r,whileTap:ae,whileHover:oe,...i})}function Ir({variant:t="ghost",size:r="md",disabled:i,...a}){return e.jsx(_t,{$variant:t,$size:r,$disabled:i,whileTap:i?void 0:ae,whileHover:i?void 0:oe,...a})}const Wt=n(g.span)`
  display: inline-flex;
  align-items: center;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1;
  padding: 7px 12px;
  border-radius: ${k.pill};
  color: ${({$accent:t})=>t};
  background: ${({$accent:t})=>y(t,.1)};
  border: 1px solid ${({$accent:t})=>y(t,.25)};
  white-space: nowrap;
`,Jt=n(g.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({$gap:t})=>t}px;
`;function H({items:t,accent:r,gap:i=8,className:a}){return t.length===0?null:e.jsx(Jt,{$gap:i,className:a,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.2},variants:te(.035),children:t.map((o,c)=>e.jsx(Wt,{$accent:r,variants:_,whileHover:{y:-2,scale:1.05},children:o},`${o}-${c}`))})}const O=6,Yt=n(z)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 18px;
`,Kt=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`,Qt=n.span`
  font-size: 1.6rem;
`,qt=n.span`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({$accent:t})=>t};
`,Xt=n.h3`
  font-size: 1.02rem;
  line-height: 1.4;
`,Zt=n.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin-top: 10px;
  font-size: 0.84rem;
  color: ${d.textMuted};

  code {
    font-family: ${j.mono};
    font-size: 0.78rem;
  }
`,ei=n.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${d.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,ti=n.div`
  margin-top: 14px;
`,ii=n.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;function ni({config:t,index:r}){const{certifications:i}=M(),[a,o]=x.useState(!1),c=a?i:i.slice(0,O);return e.jsxs(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:[e.jsx(Yt,{gap:.07,children:e.jsx(E,{initial:!1,children:c.map((s,m)=>{const p=N(m);return e.jsx(g.div,{initial:m>=O?{opacity:0,y:24}:!1,animate:{opacity:1,y:0},exit:{opacity:0,y:12},transition:{duration:.4,delay:m>=O?(m-O)*.05:0,ease:T.out},children:e.jsxs(B,{accent:p,children:[e.jsxs(Kt,{children:[e.jsx(Qt,{children:s.icon}),e.jsx(qt,{$accent:p,children:s.issuer})]}),e.jsx(Xt,{children:s.title}),e.jsxs(Zt,{children:[s.date&&e.jsx("span",{children:s.date}),s.credentialId&&e.jsxs("span",{children:["ID ",e.jsx("code",{children:s.credentialId})]})]}),s.url&&e.jsxs(ei,{href:s.url,target:"_blank",rel:"noopener noreferrer",children:["Show credential ",e.jsx(w,{name:"external",size:14})]}),s.skills.length>0&&e.jsx(ti,{children:e.jsx(H,{items:s.skills,accent:p,gap:6})})]})},`${s.title}-${m}`)})})}),i.length>O&&e.jsx(ii,{children:e.jsxs(K,{variant:"ghost",onClick:()=>o(s=>!s),children:[a?"Show fewer":`Show all ${i.length} certifications`,e.jsx(g.span,{animate:{rotate:a?180:0},style:{display:"grid"},children:e.jsx(w,{name:"chevronDown"})})]})})]})}const ri=n(z)`
  display: grid;
  gap: 20px;
`,ai=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 18px;

  ${L.sm} {
    flex-direction: column;
    gap: 8px;
  }
`,oi=n.h3`
  font-size: clamp(1.25rem, 2.4vw, 1.55rem);
`,si=n.p`
  margin-top: 6px;
  font-weight: 600;
  color: ${({$accent:t})=>t};
`,li=n.span`
  flex-shrink: 0;
  font-family: ${j.mono};
  font-size: 0.82rem;
  color: ${d.textMuted};
`,ci=n.p`
  margin-bottom: 18px;
  color: ${d.text};

  strong {
    color: ${d.heading};
  }
`,di=n.p`
  margin-bottom: 18px;
  color: ${d.textMuted};
`;function pi({config:t,index:r}){const{education:i}=M();return e.jsx(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:e.jsx(ri,{children:i.map((a,o)=>{const c=N(o);return e.jsxs(B,{accent:c,lift:!1,children:[e.jsxs(ai,{children:[e.jsxs("div",{children:[e.jsx(oi,{children:a.school}),a.degree&&e.jsx(si,{$accent:c,children:a.degree})]}),a.period&&e.jsx(li,{children:a.period})]}),a.grade&&e.jsxs(ci,{children:[e.jsx("strong",{children:"Grade:"})," ",a.grade]}),a.description&&e.jsx(di,{children:a.description}),e.jsx(H,{items:a.skills,accent:c})]},`${a.school}-${o}`)})})})}const ge=3,ui=n.div`
  display: grid;
  gap: clamp(48px, 7vw, 72px);
`,hi=n(R)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`,gi=n.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  font-size: 1.6rem;
  border-radius: 18px;
  background: ${({$accent:t})=>y(t,.14)};
  border: 1px solid ${({$accent:t})=>y(t,.35)};
  box-shadow: 0 10px 30px ${({$accent:t})=>y(t,.2)};
`,mi=n.h3`
  font-size: clamp(1.2rem, 2.4vw, 1.5rem);
`,xi=n.p`
  margin-top: 2px;
  font-size: 0.9rem;
  color: ${d.textMuted};
`,fi=n.div`
  position: relative;
  display: grid;
  gap: 16px;
  padding-left: 44px;

  ${L.sm} {
    padding-left: 30px;
  }
`,bi=n.div`
  position: absolute;
  left: 27px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  border-radius: 2px;
  background: ${d.border};

  ${L.sm} {
    left: 13px;
  }
`,yi=n(g.div)`
  position: absolute;
  inset: 0;
  transform-origin: top;
  border-radius: inherit;
  background: linear-gradient(180deg, ${({$accent:t})=>t}, ${({$accent:t})=>y(t,.2)});
`,vi=n(g.article)`
  position: relative;
  padding: 20px 24px;
  border-radius: ${k.md};
  background: var(--surface);
  border: 1px solid ${d.border};
  backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({$accent:t})=>y(t,.5)};
    box-shadow: 0 16px 40px ${({$accent:t})=>y(t,.16)};
  }

  /* Timeline node */
  &::before {
    content: "";
    position: absolute;
    left: -24px;
    top: 26px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--bg);
    border: 3px solid ${({$accent:t})=>t};
    box-shadow: 0 0 0 5px ${({$accent:t})=>y(t,.18)};
    transform: translateX(-50%);

    ${L.sm} {
      left: -17px;
    }
  }
`,wi=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 6px 16px;
`,ji=n.h4`
  font-size: 1.05rem;
  color: ${d.heading};
`,ki=n.span`
  font-family: ${j.mono};
  font-size: 0.78rem;
  padding: 4px 10px;
  border-radius: ${k.pill};
  color: ${({$accent:t})=>t};
  background: ${({$accent:t})=>y(t,.1)};
`,$i=n.p`
  margin-top: 6px;
  font-size: 0.9rem;
  color: ${d.textMuted};
`,Si=n.p`
  margin-top: 12px;
  line-height: 1.75;
`,Mi=n.div`
  margin-top: 14px;
`,Ii=n.div`
  padding-top: 4px;
`;function me({role:t,accent:r}){return e.jsxs(vi,{$accent:r,variants:Y,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.3},whileHover:{x:6},transition:{type:"spring",stiffness:300,damping:24},children:[e.jsxs(wi,{children:[e.jsx(ji,{$accent:r,children:t.title}),t.period&&e.jsx(ki,{$accent:r,children:t.period})]}),t.location&&e.jsx($i,{children:t.location}),t.description&&e.jsx(Si,{children:t.description}),t.skills.length>0&&e.jsx(Mi,{children:e.jsx(H,{items:t.skills,accent:r})})]})}function Li({group:t}){const r=D[t.accent],i=x.useRef(null),[a,o]=x.useState(!1),{scrollYProgress:c}=W({target:i,offset:["start 85%","end 55%"]}),s=Me(c,{stiffness:120,damping:30}),m=t.roles.slice(0,ge),p=t.roles.slice(ge);return e.jsxs("div",{children:[e.jsxs(hi,{children:[e.jsx(gi,{$accent:r,children:t.icon}),e.jsxs("div",{children:[e.jsx(mi,{children:t.organization}),t.summary&&e.jsx(xi,{children:t.summary})]})]}),e.jsxs(fi,{ref:i,children:[e.jsx(bi,{children:e.jsx(yi,{$accent:r,style:{scaleY:s}})}),m.map((l,u)=>e.jsx(me,{role:l,accent:r},`${l.title}-${u}`)),e.jsx(E,{initial:!1,children:a&&p.map((l,u)=>e.jsx(g.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.45,ease:T.out},children:e.jsx(me,{role:l,accent:r})},`${l.title}-${u}`))}),p.length>0&&e.jsx(Ii,{children:e.jsxs(K,{size:"sm",variant:"subtle",onClick:()=>o(l=>!l),"aria-expanded":a,children:[a?"Show less":`Show ${p.length} more role${p.length>1?"s":""}`,e.jsx(g.span,{animate:{rotate:a?180:0},style:{display:"grid"},children:e.jsx(w,{name:"chevronDown"})})]})})]})]})}function Ti({config:t,index:r}){const{experience:i}=M();return e.jsx(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:e.jsx(ui,{children:i.map((a,o)=>e.jsx(Li,{group:a},`${a.organization}-${o}`))})})}const Ci=n(R)`
  position: relative;
  border-radius: 28px;
  padding: 1px;
  background: ${S.brand};
  box-shadow: var(--shadow-lg);
`,zi=n.div`
  border-radius: 27px;
  overflow: hidden;
  background: ${d.bgElevated};
`,Ai=n.div`
  position: relative;
  padding: clamp(28px, 5vw, 48px);
  color: #fff;
  background: radial-gradient(600px 300px at 10% 0%, rgba(255, 255, 255, 0.18), transparent 60%),
    ${S.brand};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 36px 36px;
    mask-image: linear-gradient(90deg, transparent, #000 70%);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 70%);
    pointer-events: none;
  }

  h3 {
    position: relative;
    z-index: 1;
    color: #fff;
    font-size: clamp(1.5rem, 3.4vw, 2.3rem);
    max-width: 820px;
  }

  p {
    position: relative;
    z-index: 1;
    margin-top: 12px;
    opacity: 0.9;
  }
`,Pi=n(z)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`,Di=n(g.span)`
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: ${k.pill};
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
`,Ri=n.div`
  padding: clamp(24px, 5vw, 48px);
  display: grid;
  gap: 40px;
`,xe=n.p`
  font-size: 1.08rem;
  line-height: 1.85;
`,Ei=n.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px 18px;
  border-radius: ${k.md};
  font-size: 0.93rem;
  color: ${d.text};
  background: ${y(D.amber,.1)};
  border: 1px solid ${y(D.amber,.35)};

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${D.amber};
  }
`,U=n.h4`
  font-family: ${j.mono};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${d.textMuted};
  margin-bottom: 18px;
`,Ni=n(z)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  counter-reset: step;

  ${L.sm} {
    grid-template-columns: 1fr 1fr;
  }
`,Bi=n(g.div)`
  position: relative;
  padding: 16px 14px 14px;
  border-radius: ${k.md};
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${d.heading};
  background: ${({$accent:t})=>y(t,.08)};
  border: 1px solid ${({$accent:t})=>y(t,.3)};
  counter-increment: step;

  &::before {
    content: counter(step, decimal-leading-zero);
    display: block;
    margin-bottom: 8px;
    font-family: ${j.mono};
    font-size: 0.72rem;
    color: ${({$accent:t})=>t};
  }
`,Fi=n(z)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 16px;
`,Hi=n.span`
  font-family: ${j.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({$accent:t})=>t};
`,Oi=n.h5`
  margin: 6px 0 14px;
  font-family: ${j.display};
  font-size: 1.1rem;
  color: ${d.heading};
`,Vi=n.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  font-size: 0.92rem;
  border-top: 1px dashed ${d.border};

  span:first-child {
    color: ${d.textMuted};
  }

  span:last-child {
    font-weight: 700;
    color: ${d.heading};
  }
`,Gi=n.span`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  border-radius: ${k.pill};
  background: ${({$accent:t})=>t};
  box-shadow: 0 6px 18px ${({$accent:t})=>y(t,.5)};
`;function Ui({config:t,index:r}){const{featured:i}=M();return e.jsx(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:e.jsx(Ci,{children:e.jsxs(zi,{children:[e.jsxs(Ai,{children:[i.badges.length>0&&e.jsx(Pi,{gap:.08,children:i.badges.map(a=>e.jsx(Di,{variants:_,children:a},a))}),e.jsx("h3",{children:i.title}),i.affiliation&&e.jsx("p",{children:i.affiliation})]}),e.jsxs(Ri,{children:[e.jsxs("div",{children:[e.jsx(xe,{children:i.summary}),i.link&&e.jsxs(se,{variant:"primary",href:i.link,target:"_blank",rel:"noopener noreferrer",style:{marginTop:20},children:["View project ",e.jsx(w,{name:"external"})]})]}),i.notice&&e.jsx(R,{children:e.jsxs(Ei,{children:[e.jsx(w,{name:"lock"}),e.jsx("span",{children:i.notice})]})}),i.pipeline.length>0&&e.jsxs("div",{children:[e.jsx(U,{children:"End-to-end pipeline"}),e.jsx(Ni,{gap:.09,children:i.pipeline.map((a,o)=>e.jsx(Bi,{$accent:N(o),variants:_,whileHover:{y:-4},children:a},`${a}-${o}`))})]}),i.results.length>0&&e.jsxs("div",{children:[e.jsx(U,{children:"Model evolution & results"}),e.jsx(Fi,{gap:.12,children:i.results.map((a,o)=>{const c=D[a.accent];return e.jsxs(B,{accent:c,children:[a.highlight&&e.jsx(Gi,{$accent:c,children:"★ Best"}),e.jsx(Hi,{$accent:c,children:a.tag}),e.jsx(Oi,{children:a.name}),a.metrics.map(s=>e.jsxs(Vi,{children:[e.jsx("span",{children:s.label}),e.jsx("span",{children:s.value})]},s.label))]},`${a.name}-${o}`)})})]}),i.highlights&&e.jsxs(z,{children:[e.jsx(U,{children:"Highlights"}),e.jsx(ze,{children:e.jsx(xe,{as:"p",children:i.highlights})})]}),i.stack.length>0&&e.jsxs("div",{children:[e.jsx(U,{children:"Tech stack"}),e.jsx(H,{items:i.stack,accent:D.violet})]})]})]})})})}const _i=n(z)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 20px;
`,Wi=n.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`,Ji=n(g.div)`
  flex-shrink: 0;
  font-size: 2.4rem;
  line-height: 1;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.18));
`,Yi=n.h3`
  font-size: 1.08rem;
  line-height: 1.35;
`,Ki=n.p`
  margin-top: 6px;
  font-size: 0.9rem;
  color: ${d.textMuted};
`;function Qi({config:t,index:r}){const{honors:i}=M();return e.jsx(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:e.jsx(_i,{gap:.12,children:i.map((a,o)=>e.jsx(B,{accent:N(o),children:e.jsxs(Wi,{children:[e.jsx(Ji,{whileHover:{rotate:[0,-14,12,-6,0],scale:1.15},transition:{duration:.6},children:a.icon}),e.jsxs("div",{children:[e.jsx(Yi,{children:a.title}),a.detail&&e.jsx(Ki,{children:a.detail})]})]})},`${a.title}-${o}`))})})}const fe=6,Q="All",qi=n(R)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`,Xi=n.button`
  position: relative;
  padding: 8px 16px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: ${k.pill};
  border: 1px solid ${({$active:t})=>t?"transparent":d.border};
  background: var(--surface);
  color: ${({$active:t})=>t?"#fff":d.text};
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    border-color: ${({$active:t})=>t?"transparent":d.primary};
  }

  span {
    position: relative;
    z-index: 1;
  }

  sup {
    position: relative;
    z-index: 1;
    margin-left: 4px;
    font-size: 0.7rem;
    opacity: 0.7;
  }
`,Zi=n(g.div)`
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: ${S.brand};
`,en=n(g.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 330px), 1fr));
  gap: 20px;
`,tn=n(g.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 26px;
  border-radius: ${k.lg};
  background: var(--surface);
  border: 1px solid ${d.border};
  backdrop-filter: blur(12px);
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: linear-gradient(90deg, ${({$accent:t})=>t}, transparent);
  }

  &:hover {
    border-color: ${({$accent:t})=>y(t,.5)};
    box-shadow: 0 22px 50px ${({$accent:t})=>y(t,.18)};
  }
`,nn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`,rn=n.span`
  font-family: ${j.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({$accent:t})=>t};
`,an=n.h3`
  margin-top: 6px;
  font-size: 1.18rem;
  line-height: 1.3;
`,on=n(g.a)`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: ${d.heading};
  border: 1px solid ${d.border};
  transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: #fff;
    background: ${({$accent:t})=>t};
    border-color: transparent;
  }
`,sn=n.ul`
  flex: 1;
  display: grid;
  gap: 10px;
  padding-left: 18px;
  font-size: 0.94rem;
  color: ${d.textMuted};

  li::marker {
    color: ${d.primary};
  }
`,ln=n.div`
  padding-top: 16px;
  border-top: 1px solid ${d.border};
`,cn=n.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;function dn({config:t,index:r}){const{projects:i}=M(),[a,o]=x.useState(Q),[c,s]=x.useState(!1),m=x.useMemo(()=>{const u=new Map;return i.forEach(v=>v.category&&u.set(v.category,(u.get(v.category)??0)+1)),[[Q,i.length],...u.entries()]},[i]),p=i.map((u,v)=>({project:u,key:`${u.title}-${v}`,accent:N(v)})).filter(({project:u})=>a===Q||u.category===a),l=c?p:p.slice(0,fe);return e.jsxs(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:[m.length>2&&e.jsx(qi,{children:e.jsx(Ge,{id:"project-filters",children:m.map(([u,v])=>e.jsxs(Xi,{$active:a===u,onClick:()=>o(u),"aria-pressed":a===u,children:[a===u&&e.jsx(Zi,{layoutId:"filter-pill",transition:{type:"spring",stiffness:380,damping:30}}),e.jsx("span",{children:u}),e.jsx("sup",{children:v})]},u))})}),e.jsx(en,{layout:!0,children:e.jsx(E,{mode:"popLayout",children:l.map(({project:u,key:v,accent:b})=>e.jsxs(tn,{$accent:b,layout:!0,initial:{opacity:0,scale:.92,y:24},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.92},transition:{duration:.45,ease:T.out},whileHover:{y:-6},children:[e.jsxs(nn,{children:[e.jsxs("div",{children:[u.category&&e.jsx(rn,{$accent:b,children:u.category}),e.jsx(an,{children:u.title})]}),u.url&&e.jsx(on,{$accent:b,href:u.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Open ${u.title}`,whileHover:{rotate:-8,scale:1.08},children:e.jsx(w,{name:u.url.includes("github.com")?"github":"external",size:19})})]}),e.jsx(sn,{children:u.description.map((A,f)=>e.jsx("li",{children:A},f))}),u.tech.length>0&&e.jsx(ln,{children:e.jsx(H,{items:u.tech,accent:b,gap:6})})]},v))})}),p.length>fe&&e.jsx(cn,{children:e.jsxs(K,{variant:"ghost",onClick:()=>s(u=>!u),children:[c?"Show fewer projects":`Show all ${p.length} projects`,e.jsx(g.span,{animate:{rotate:c?180:0},style:{display:"grid"},children:e.jsx(w,{name:"chevronDown"})})]})})]})}const pn=n(z)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 20px;
`,un=n.div`
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin-bottom: 18px;
  font-size: 1.5rem;
  border-radius: 16px;
  background: ${({$accent:t})=>y(t,.14)};
  border: 1px solid ${({$accent:t})=>y(t,.3)};
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  *:hover > & {
    transform: rotate(-8deg) scale(1.08);
  }
`,hn=n.h3`
  font-size: 1.2rem;
  margin-bottom: 14px;
`,gn=n.ul`
  list-style: none;
  display: grid;
  gap: 10px;
`,mn=n.li`
  position: relative;
  padding-left: 20px;
  color: ${d.textMuted};
  font-size: 0.95rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 8px;
    height: 8px;
    border-radius: 3px;
    background: ${({$accent:t})=>t};
    transform: rotate(45deg);
  }
`;function xn({config:t,index:r}){const{research:i}=M();return e.jsx(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:e.jsx(pn,{children:i.map((a,o)=>{const c=N(o);return e.jsxs(B,{accent:c,children:[e.jsx(un,{$accent:c,children:a.icon}),e.jsx(hn,{children:a.title}),e.jsx(gn,{children:a.items.map(s=>e.jsx(mn,{$accent:c,children:s},s))})]},`${a.title}-${o}`)})})})}const be={repository:{owner:"abtin81badie",name:"abtin-portfolio",branch:"main"},contentPath:"src/content/content.json",publicDir:"public"},Lr=`https://github.com/${be.repository.owner}/${be.repository.name}`,Z=t=>/^(https?:)?\/\//.test(t)?t:`/abtin-portfolio/${t.replace(/^\/+/,"")}`,fn=n.section`
  padding: clamp(64px, 9vw, 110px) 0;
`,bn=n(R)`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 32px;
  padding: clamp(32px, 6vw, 64px);
  border-radius: 32px;
  color: #fff;
  background: ${S.brand};
  box-shadow: var(--shadow-lg);

  ${L.md} {
    grid-template-columns: 1fr;
  }

  h2 {
    color: #fff;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
  }

  p {
    margin-top: 12px;
    max-width: 560px;
    opacity: 0.92;
    font-size: 1.05rem;
  }
`,ye=n(g.div)`
  position: absolute;
  z-index: -1;
  width: 380px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.35), transparent 65%);
`,yn=n(se)`
  && {
    color: ${d.heading};
    background: #fff;
    border-color: transparent;
    padding: 16px 28px;
    font-size: 1rem;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.25);
  }

  &&:hover {
    color: #4f46e5;
  }
`;function vn({config:t}){const{resume:r}=M(),i=J();return r.file?e.jsx(fn,{id:t.id,"aria-labelledby":`${t.id}-title`,children:e.jsx(ie,{children:e.jsxs(bn,{children:[e.jsx(ye,{style:{top:"-40%",right:"-8%"},animate:i?void 0:{scale:[1,1.2,1],x:[0,-30,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),e.jsx(ye,{style:{bottom:"-50%",left:"-10%"},animate:i?void 0:{scale:[1.1,.9,1.1],y:[0,-20,0]},transition:{duration:12,repeat:1/0,ease:"easeInOut"}}),e.jsxs("div",{children:[e.jsx("h2",{id:`${t.id}-title`,children:t.title}),(t.subtitle||r.text)&&e.jsx("p",{children:r.text||t.subtitle})]}),e.jsxs(yn,{href:Z(r.file),download:r.downloadName||!0,children:[e.jsx(w,{name:"download"})," Download Resume"]})]})})}):null}const wn=n(z)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 20px;
`,jn=n.h3`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 1.2rem;

  span {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    font-size: 1.3rem;
    background: ${({$accent:t})=>y(t,.14)};
  }
`,kn=n.small`
  margin-left: auto;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.6;
`;function $n({config:t,index:r}){const{skills:i}=M();return e.jsx(P,{id:t.id,index:r,title:t.title,subtitle:t.subtitle,children:e.jsx(wn,{gap:.12,children:i.map((a,o)=>{const c=D[a.accent];return e.jsxs(B,{accent:c,children:[e.jsxs(jn,{$accent:c,children:[e.jsx("span",{children:a.icon}),a.title,e.jsx(kn,{children:a.skills.length})]}),e.jsx(H,{items:a.skills,accent:c})]},`${a.title}-${o}`)})})})}const Sn={about:Ot,education:pi,research:xn,featured:Ui,experience:Ti,projects:dn,skills:$n,honors:Qi,certifications:ni,resume:vn},Mn=n.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: calc(${C.navHeight} + 40px) 0 96px;
  overflow: hidden;
  isolation: isolate;
`,In=n.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
`,q=n(g.div)`
  position: absolute;
  z-index: -2;
  width: ${({$size:t})=>t};
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  filter: blur(90px);
  opacity: 0.45;
`,Ln=n(g.div)`
  width: 100%;
  max-width: ${C.maxWidth};
  margin: 0 auto;
  padding: 0 ${C.gutter};
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  align-items: center;
  gap: clamp(32px, 6vw, 80px);

  ${L.md} {
    grid-template-columns: 1fr;
  }
`,Tn=n.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`,Cn=n(g.span)`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 10px;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: ${k.pill};
  color: ${d.text};
  background: var(--surface);
  border: 1px solid ${d.border};
  backdrop-filter: blur(10px);
`,zn=ee`
  0% { transform: scale(1); opacity: 0.7; }
  80%, 100% { transform: scale(2.6); opacity: 0; }
`,An=n.span`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #10b981;
    animation: ${zn} 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`,Pn=n(g.p)`
  font-family: ${j.mono};
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${d.textMuted};
`,Dn=n.h1`
  font-size: clamp(3rem, 9vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
`,Rn=n.span`
  display: inline-block;
  overflow: hidden;
  padding-bottom: 0.08em;
  margin-right: 0.22em;
  vertical-align: top;

  &:last-child {
    margin-right: 0;
  }
`,En=n(g.span)`
  display: inline-block;
`,Nn=n(g.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4em;
  font-family: ${j.display};
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  font-weight: 600;
  color: ${d.heading};
`,Bn=n.span`
  position: relative;
  display: inline-grid;
  overflow: hidden;
  height: 1.35em;
`,Fn=n(g.p)`
  max-width: 580px;
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: ${d.textMuted};
`,Hn=n(g.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 6px;
`,On=n(g.div)`
  position: relative;
  justify-self: center;
  width: min(380px, 78vw);
  aspect-ratio: 1;

  ${L.md} {
    order: -1;
    width: min(260px, 64vw);
  }
`,Vn=ee`
  to { transform: rotate(360deg); }
`,Gn=n.div`
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #06b6d4, #6366f1);
  animation: ${Vn} 10s linear infinite;
  filter: blur(1px);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: inherit;
    filter: blur(30px);
    opacity: 0.6;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Un=n.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid var(--bg);
`,ve=n(g.div)`
  position: absolute;
  ${({$pos:t})=>t};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  white-space: nowrap;
  color: ${d.heading};
  border-radius: 14px;
  background: var(--surface);
  border: 1px solid ${d.border};
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow-md);

  ${L.sm} {
    display: none;
  }
`,_n=n(g.button)`
  position: absolute;
  left: 50%;
  bottom: 28px;
  translate: -50% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${d.textMuted};

  ${L.sm} {
    display: none;
  }
`,Wn=n.span`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 38px;
  padding-top: 7px;
  border-radius: 14px;
  border: 2px solid ${d.borderStrong};
`,Jn=n(g.span)`
  width: 4px;
  height: 8px;
  border-radius: 2px;
  background: ${S.brand};
`,V=t=>({initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.8,delay:t,ease:T.out}});function Yn({roles:t}){const[r,i]=x.useState(0),a=J();if(x.useEffect(()=>{if(t.length<2||a)return;const s=window.setInterval(()=>i(m=>(m+1)%t.length),2600);return()=>window.clearInterval(s)},[t.length,a]),t.length===0)return null;const o=t[r%t.length],c=/^[aeiou]/i.test(o)?"an":"a";return e.jsx(Bn,{"aria-live":"polite",children:e.jsx(E,{mode:"popLayout",initial:!1,children:e.jsxs(g.span,{initial:{y:"100%",opacity:0,filter:"blur(6px)"},animate:{y:"0%",opacity:1,filter:"blur(0px)"},exit:{y:"-100%",opacity:0,filter:"blur(6px)"},transition:{duration:.55,ease:T.out},style:{gridArea:"1 / 1",whiteSpace:"nowrap"},children:[c," ",e.jsx(Te,{$animated:!0,children:o})]},o)})})}function Kn({name:t}){let r=0;return e.jsx(Dn,{"aria-label":t,children:t.split(" ").map((i,a)=>e.jsx(Rn,{"aria-hidden":"true",children:[...i].map(o=>{const c=.25+r++*.035;return e.jsx(En,{initial:{y:"110%"},animate:{y:"0%"},transition:{duration:.8,delay:c,ease:T.out},children:o},`${o}-${c}`)})},`${i}-${a}`))})}const we=(t,r)=>({animate:{y:[0,-t,0]},transition:{duration:r,repeat:1/0,ease:"easeInOut"}});function Qn(){const{profile:t,socials:r,sections:i,resume:a,stats:o}=M(),c=ne(),s=J(),{scrollY:m}=W(),p=de(m,[0,600],[0,s?0:120]),l=de(m,[0,500],[1,0]),u=i.find(A=>A.visible)?.id,v=i.find(A=>A.visible&&A.id==="projects")?.id??u,b=o[0];return e.jsxs(Mn,{id:"top","aria-label":"Introduction",children:[e.jsx(In,{}),e.jsx(q,{$color:"#6366f1",$size:"min(520px, 80vw)",style:{top:"-10%",left:"-8%"},animate:s?void 0:{x:[0,60,0],y:[0,40,0]},transition:{duration:16,repeat:1/0,ease:"easeInOut"}}),e.jsx(q,{$color:"#ec4899",$size:"min(460px, 70vw)",style:{top:"20%",right:"-10%"},animate:s?void 0:{x:[0,-50,0],y:[0,60,0]},transition:{duration:18,repeat:1/0,ease:"easeInOut"}}),e.jsx(q,{$color:"#06b6d4",$size:"min(420px, 70vw)",style:{bottom:"-18%",left:"30%"},animate:s?void 0:{x:[0,40,0],y:[0,-40,0]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}}),e.jsxs(Ln,{style:{y:p,opacity:l},children:[e.jsxs(Tn,{children:[t.availability&&e.jsxs(Cn,{...V(.05),children:[e.jsx(An,{}),t.availability]}),t.eyebrow&&e.jsx(Pn,{...V(.15),children:t.eyebrow}),e.jsx(Kn,{name:t.name}),t.roles.length>0&&e.jsxs(Nn,{...V(.7),children:[e.jsx("span",{children:"I'm"}),e.jsx(Yn,{roles:t.roles})]}),e.jsx(Fn,{...V(.85),children:t.headline}),e.jsxs(Hn,{...V(1),children:[v&&e.jsxs(K,{variant:"primary",onClick:()=>c(v),children:["View my work ",e.jsx(w,{name:"arrowRight"})]}),a.file&&e.jsxs(se,{variant:"ghost",href:Z(a.file),download:a.downloadName||!0,children:[e.jsx(w,{name:"download"})," Download CV"]})]}),e.jsx(Ae,{links:r,delay:1.15})]}),t.photo&&e.jsxs(On,{initial:{opacity:0,scale:.8,rotate:-6},animate:{opacity:1,scale:1,rotate:0},transition:{duration:1.1,delay:.3,ease:T.out},children:[e.jsx(Gn,{}),e.jsx(Un,{src:Z(t.photo),alt:t.name}),t.location&&e.jsxs(ve,{$pos:"top: 8%; left: -14%;",...we(10,5),children:[e.jsx(w,{name:"pin",size:16})," ",t.location]}),b&&e.jsxs(ve,{$pos:"bottom: 10%; right: -12%;",...we(12,6),children:[e.jsx(w,{name:"sparkles",size:16}),b.value.toFixed(b.decimals),b.suffix," · ",b.label]})]})]}),u&&e.jsxs(_n,{onClick:()=>c(u),"aria-label":"Scroll to content",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.6},children:[e.jsx(Wn,{children:e.jsx(Jn,{animate:s?void 0:{y:[0,10,0],opacity:[1,.2,1]},transition:{duration:1.8,repeat:1/0}})}),"Scroll"]})]})}function qn({content:t}){x.useEffect(()=>{document.title=t.meta.title,document.querySelector('meta[name="description"]')?.setAttribute("content",t.meta.description)},[t.meta.title,t.meta.description]);const r=t.sections.filter(i=>i.visible);return e.jsxs(Qe,{content:t,children:[e.jsx(zt,{}),e.jsx(Lt,{}),e.jsxs("main",{children:[e.jsx(Qn,{}),r.map((i,a)=>{const o=Sn[i.id];return e.jsx(o,{config:i,index:a},i.id)})]}),e.jsx(ut,{})]})}const Xn=t=>(window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)),Zn=()=>{const t=window.location.hash;return t.startsWith("#/")?t.slice(1):"/"};function er(){return x.useSyncExternalStore(Xn,Zn,()=>"/")}const Tr=t=>{window.location.hash=t},tr=["indigo","violet","pink","cyan","emerald","amber"],ir=["email","linkedin","github","telegram","website"],je=["about","education","research","featured","experience","projects","skills","honors","certifications","resume"],Ne={stat:()=>({value:0,decimals:0,suffix:"",label:"New stat"}),social:()=>({label:"Website",url:"https://",icon:"website"}),education:()=>({school:"New school",degree:"",period:"",grade:"",description:"",skills:[]}),research:()=>({title:"New research area",icon:"✨",items:[]}),metric:()=>({label:"Metric",value:""}),modelResult:()=>({tag:"Experiment",name:"New model",accent:"indigo",highlight:!1,metrics:[]}),role:()=>({title:"New role",period:"",location:"",description:"",skills:[]}),experience:()=>({organization:"New organization",icon:"💼",summary:"",accent:"indigo",roles:[Ne.role()]}),project:()=>({title:"New project",url:"",category:"",description:[],tech:[]}),skillGroup:()=>({title:"New skill group",icon:"🛠️",accent:"indigo",skills:[]}),honor:()=>({icon:"🏅",title:"New honor",detail:""}),certification:()=>({title:"New certification",issuer:"",icon:"📜",date:"",credentialId:"",url:"",skills:[]})},Be=t=>typeof t=="object"&&t!==null&&!Array.isArray(t),F=t=>Be(t)?t:{},h=(t,r="")=>typeof t=="string"?t:r,ke=(t,r=0)=>typeof t=="number"&&Number.isFinite(t)?t:r,Fe=(t,r=!1)=>typeof t=="boolean"?t:r,I=(t,r=[])=>Array.isArray(t)?t.filter(i=>typeof i=="string"):r,$=(t,r,i)=>Array.isArray(t)?t.filter(Be).map(i):r,le=(t,r,i)=>t.includes(r)?r:i,X=t=>le(tr,t,"indigo");function nr(t,r){const i=$(t,r,s=>({id:le(je,s.id,"about"),navLabel:h(s.navLabel),title:h(s.title),subtitle:h(s.subtitle),visible:Fe(s.visible,!0)})),a=new Set,o=i.filter(s=>je.includes(s.id)&&!a.has(s.id)&&a.add(s.id)),c=r.filter(s=>!a.has(s.id));return[...o,...c]}function rr(t,r){const i=F(t),a=F(i.meta),o=F(i.profile),c=F(o.cta),s=F(i.featured),m=F(i.resume),p=r;return{meta:{title:h(a.title,p.meta.title),description:h(a.description,p.meta.description)},profile:{name:h(o.name,p.profile.name),eyebrow:h(o.eyebrow,p.profile.eyebrow),availability:h(o.availability,p.profile.availability),roles:I(o.roles,p.profile.roles),headline:h(o.headline,p.profile.headline),about:I(o.about,p.profile.about),photo:h(o.photo,p.profile.photo),location:h(o.location,p.profile.location),email:h(o.email,p.profile.email),cta:{label:h(c.label,p.profile.cta.label),url:h(c.url,p.profile.cta.url)}},stats:$(i.stats,p.stats,l=>{const u=Ne.stat();return{value:ke(l.value,u.value),decimals:Math.max(0,Math.min(4,Math.round(ke(l.decimals,u.decimals)))),suffix:h(l.suffix),label:h(l.label,u.label)}}),socials:$(i.socials,p.socials,l=>({label:h(l.label),url:h(l.url),icon:le(ir,l.icon,"website")})),sections:nr(i.sections,p.sections),education:$(i.education,p.education,l=>({school:h(l.school),degree:h(l.degree),period:h(l.period),grade:h(l.grade),description:h(l.description),skills:I(l.skills)})),research:$(i.research,p.research,l=>({title:h(l.title),icon:h(l.icon),items:I(l.items)})),featured:{title:h(s.title,p.featured.title),badges:I(s.badges,p.featured.badges),affiliation:h(s.affiliation,p.featured.affiliation),summary:h(s.summary,p.featured.summary),notice:h(s.notice,p.featured.notice),link:h(s.link,p.featured.link),pipeline:I(s.pipeline,p.featured.pipeline),results:$(s.results,p.featured.results,l=>({tag:h(l.tag),name:h(l.name),accent:X(l.accent),highlight:Fe(l.highlight),metrics:$(l.metrics,[],u=>({label:h(u.label),value:h(u.value)}))})),highlights:h(s.highlights,p.featured.highlights),stack:I(s.stack,p.featured.stack)},experience:$(i.experience,p.experience,l=>({organization:h(l.organization),icon:h(l.icon),summary:h(l.summary),accent:X(l.accent),roles:$(l.roles,[],u=>({title:h(u.title),period:h(u.period),location:h(u.location),description:h(u.description),skills:I(u.skills)}))})),projects:$(i.projects,p.projects,l=>({title:h(l.title),url:h(l.url),category:h(l.category),description:I(l.description),tech:I(l.tech)})),skills:$(i.skills,p.skills,l=>({title:h(l.title),icon:h(l.icon),accent:X(l.accent),skills:I(l.skills)})),honors:$(i.honors,p.honors,l=>({icon:h(l.icon),title:h(l.title),detail:h(l.detail)})),certifications:$(i.certifications,p.certifications,l=>({title:h(l.title),issuer:h(l.issuer),icon:h(l.icon),date:h(l.date),credentialId:h(l.credentialId),url:h(l.url),skills:I(l.skills)})),resume:{text:h(m.text,p.resume.text),file:h(m.file,p.resume.file),downloadName:h(m.downloadName,p.resume.downloadName)}}}const ar={title:"Abtin Badie | Portfolio",description:"Computer Engineer building end-to-end AI systems — from deep learning research to production-ready full-stack apps."},or={name:"Abtin Badie",eyebrow:"Computer Engineer · AI / Deep Learning",availability:"Open to research & engineering opportunities",roles:["Back End Developer","AI Researcher","Deep Learning Engineer","Full-Stack Builder"],headline:"B.Sc. Computer Engineering @ IUST. I build end-to-end AI systems — from deep learning research to production-ready full-stack apps.",about:["I'm a final-year Computer Engineering student at IUST who loves building things end-to-end — from deep-learning research in our NLP Lab to production back-ends as a Back End Developer at Namava. My work spans medical AI (my thesis, NeoScan), LLMs & agents, computer vision, and full-stack development with Python, Go, C#/.NET and React.","Outside of technology, I find balance and inspiration in various hobbies. I'm an avid enthusiast of music and cinema, always on the lookout for compelling stories in TV series and movies. Staying active is important to me, and I make it a point to hit the gym at least twice a week. I also have a passion for travel and aspire to explore different cultures around the world."],photo:"profile.jpg",location:"Tehran, Iran",email:"abtinbadie81@gmail.com",cta:{label:"Connect with me on Telegram",url:"https://t.me/Abtin_003"}},sr=[{value:3.95,decimals:2,suffix:"/4",label:"GPA at IUST"},{value:10,decimals:0,suffix:"+",label:"Open-source projects"},{value:11,decimals:0,suffix:"",label:"Certifications"},{value:8,decimals:0,suffix:"",label:"Courses as TA"}],lr=[{label:"Email",url:"mailto:abtinbadie81@gmail.com",icon:"email"},{label:"LinkedIn",url:"https://www.linkedin.com/in/abtin-badie-262690234/",icon:"linkedin"},{label:"GitHub",url:"https://github.com/abtin81badie",icon:"github"},{label:"Telegram",url:"https://t.me/Abtin_003",icon:"telegram"}],cr=[{id:"about",navLabel:"About",title:"About Me",subtitle:"A little bit about who I am",visible:!0},{id:"education",navLabel:"Education",title:"Education",subtitle:"Where I learned the fundamentals",visible:!0},{id:"research",navLabel:"Research",title:"Research Interests",subtitle:"The problems I love thinking about",visible:!0},{id:"featured",navLabel:"Featured",title:"Featured Project",subtitle:"My undergraduate final project (thesis)",visible:!0},{id:"experience",navLabel:"Experience",title:"Experience",subtitle:"Where I've worked, researched and taught",visible:!0},{id:"projects",navLabel:"Projects",title:"Projects",subtitle:"Things I've designed, trained and shipped",visible:!0},{id:"skills",navLabel:"Skills",title:"Skills",subtitle:"My toolbox",visible:!0},{id:"honors",navLabel:"Honors",title:"Honors & Awards",subtitle:"Recognition along the way",visible:!0},{id:"certifications",navLabel:"Certs",title:"Licenses & Certifications",subtitle:"Courses and credentials I've completed",visible:!0},{id:"resume",navLabel:"Resume",title:"My Resume",subtitle:"",visible:!0}],dr=[{school:"Iran University of Science and Technology (IUST)",degree:"B.Sc. Computer Engineering",period:"Aug 2021 – Feb 2026",grade:"18.80 / 20 (≈ 3.95 / 4)",description:"",skills:["C#","C++","Algorithms","Data Structures","Operating Systems","AI","Machine Learning","+11 skills"]}],pr=[{title:"Deep Learning",icon:"🔬",items:["Convolutional Neural Networks (CNNs)","Recurrent Neural Networks (RNNs) & LSTMs","Transformer Architectures"]},{title:"Machine Learning",icon:"📊",items:["Classical Algorithms (Decision Trees, SVMs)","Genetic Algorithms","Reinforcement Learning"]},{title:"Natural Language Processing",icon:"💬",items:["Medical NLP & Report Generation","Agentic Workflows & Tool Use"]},{title:"Large Language Models",icon:"🤖",items:["Fine-tuning & Model Specialization","Autonomous Agent Systems"]},{title:"Computer Vision",icon:"👁️",items:["Medical Image Captioning","Multimodal Learning (Video-Text Retrieval)"]}],ur={title:"NeoScan — Non-Invasive Neonatal Jaundice Detection",badges:["🩺 Medical AI","🎓 B.Sc. Thesis","🚧 In Progress · Private"],affiliation:"Iran University of Science & Technology · Supervisors: Dr. Isa Zarepour & Dr. Sauleh Etemadi",summary:"NeoScan estimates a newborn's bilirubin level (TCB) from a single smartphone photo of the skin next to a color-calibration card — offering a low-cost, non-invasive alternative to painful blood draws for jaundice screening. The system pairs a robust classical computer-vision pipeline with a modern deep-learning model and ships as a full-stack, containerized application.",notice:"Not publicly available. Because NeoScan is still under active development, the source code and live demo are kept private for now. The summary, architecture and results below are shared from my thesis work.",link:"",pipeline:["Smartphone photo + color card","Canny + Hough card detection","Homography warp (DLT · SVD)","Grid segmentation","Von Kries white-balance","Swin + LoRA inference","Bilirubin (TCB) + risk level"],results:[{tag:"Baseline",name:"1D-CNN (Keras)",accent:"cyan",highlight:!1,metrics:[{label:"Correlation",value:"42%"},{label:"MAE",value:"3.12"},{label:"RMSE",value:"4.05"}]},{tag:"Classical ML benchmark",name:"BiliBin (GPR + 111 features)",accent:"amber",highlight:!1,metrics:[{label:"Approach",value:"Feature eng."},{label:"RMSE",value:"2.28"}]},{tag:"Final model",name:"Swin Transformer + LoRA",accent:"pink",highlight:!0,metrics:[{label:"Correlation",value:"≈ 85%"},{label:"MAE",value:"1.50 mg/dL"},{label:"RMSE",value:"2.20 mg/dL"}]}],highlights:"Built a hardware-agnostic image-preprocessing pipeline (perspective correction via homography, projection-profile grid segmentation, median-based Von Kries color calibration). Benchmarked a 1D-CNN and classical ML regressors (KNN, SVR, Random Forest, Bayesian, GPR), then reached ≈85% correlation by fine-tuning a Swin Transformer with LoRA — training only ~0.7% of parameters to avoid overfitting. Delivered as a FastAPI backend + React frontend, fully Dockerized with CI/CD.",stack:["Python","PyTorch","Swin Transformer","LoRA / PEFT","Hugging Face","OpenCV","NumPy","FastAPI","React","Docker","CI/CD (GitHub Actions)","Clean Architecture"]},hr=[{organization:"Namava",icon:"🎬",summary:"Full-time · 10 mos",accent:"indigo",roles:[{title:"Back End Developer",period:"Jan 2026 – Present · 6 mos",location:"Remote",description:"",skills:["C#",".NET","REST APIs","+12 skills"]},{title:"Back End Developer Intern",period:"Sep 2025 – Jan 2026 · 5 mos",location:"Tehran, Iran",description:"",skills:[]}]},{organization:"Natural Language Processing Lab — IUST",icon:"🧪",summary:"",accent:"pink",roles:[{title:"Research Assistant",period:"Jun 2024 – Feb 2026 · 1 yr 9 mos",location:"Under the supervision of Dr. Sauleh Eetemadi",description:"Conducting research in medical AI and applied NLP — including my undergraduate thesis (NeoScan, non-invasive neonatal jaundice detection) and work on enhancing LLM performance in specialized domains and autonomous agent systems.",skills:["LLMs","NLP","PyTorch","+13 skills"]}]},{organization:"TAPSI",icon:"🚖",summary:"",accent:"emerald",roles:[{title:"Software Engineer · Internship",period:"Feb 2025 – Jun 2025 · 5 mos",location:"Tehran, Iran · Hybrid",description:"Built the MVP for TAPSI-Service, a new platform for on-demand home repair and utility services, as part of the system-design team — designing a scalable back-end with Python, FastAPI and PostgreSQL.",skills:["Python","Software Infrastructure","+3 skills"]}]},{organization:"Iran University of Science and Technology — Teaching",icon:"🎓",summary:"8 teaching roles",accent:"cyan",roles:[{title:"Head Teaching Assistant — Operating Systems",period:"Sep 2025 – Feb 2026 · 6 mos",location:"Instructors: Dr. Entezari-Maleki & Dr. Azhari",description:"",skills:["C","Team Leadership","+3 skills"]},{title:"Head Teaching Assistant — Theory of Languages & Automata",period:"Feb 2025 – Aug 2025 · 7 mos",location:"Instructors: Dr. Entezari-Maleki & Dr. Ghayour Baghbani",description:"",skills:["Teamwork","Team Leadership"]},{title:"Teaching Assistant — Artificial Intelligence",period:"Sep 2024 – Jan 2025 · 5 mos",location:"Instructor: Dr. Arash Abdi Hejrandoost",description:"",skills:["Teamwork"]},{title:"Teaching Assistant — Discrete Mathematics",period:"Feb 2024 – Jun 2024 · 5 mos",location:"Instructor: Dr. Vesal Hakami",description:"",skills:[]},{title:"Teaching Assistant — Designing Digital Computer Systems",period:"Feb 2024 – Jun 2024 · 5 mos",location:"Instructor: Dr. Hakem Beitollahi",description:"",skills:[]},{title:"Teaching Assistant — Advanced Programming",period:"Feb 2024 – Jun 2024 · 5 mos",location:"Instructor: Dr. MalekiMajd",description:"",skills:[]},{title:"Teaching Assistant — Fundamental Programming",period:"Sep 2023 – Jan 2024 · 5 mos",location:"Instructor: Dr. MalekiMajd",description:"",skills:[]},{title:"Teaching Assistant — Logical Circuits",period:"Sep 2023 – Jan 2024 · 5 mos",location:"Instructor: Dr. Kashi",description:"",skills:[]}]}],gr=[{title:"IdeYar: Crowdfunding Platform Front-End",url:"https://github.com/mosaic-2/IdeYar-front",category:"Web",description:["Led the front-end development and system design for a Kickstarter-inspired web platform, enabling users to create, discover, and fund creative projects.","Architected a scalable and maintainable front-end using React, designing a component-based structure, state management strategy, and RESTful API integration.","Developed key user-facing features, including dynamic project pages, user authentication, profile dashboards, and a streamlined campaign creation process."],tech:["React","Front-End Development","System Design","UI/UX"]},{title:"Medical Image Captioning with BLIP & Flan-T5",url:"https://github.com/abtin81badie/medical-image-captioning",category:"Deep Learning",description:["Engineered a two-stage captioning pipeline using BLIP for initial generation and Flan-T5 for refinement, enhancing caption descriptiveness for radiology images.","Fine-tuned the BLIP model on the ROCOv2 dataset to adapt its vision-language understanding to the specialized medical imaging domain.","Developed an automated evaluation framework using BERTScore and ROUGE-L to rigorously measure the semantic similarity and accuracy of generated captions."],tech:["Image Captioning","PyTorch","Hugging Face","BLIP","Flan-T5"]},{title:"Persian Video Understanding: Fine-Tuning CLIP & CLIP4Clip",url:"https://github.com/abtin81badie/Deep-Learning",category:"Deep Learning",description:["Adapted CLIP and CLIP4Clip models for Persian by fine-tuning on the MSR-VTT dataset with 10,000 translated captions, enabling bilingual video-text retrieval.","Implemented multilingual text encoders with custom tokenization and efficient training on an NVIDIA V100 GPU using weighted contrastive loss and dynamic frame sampling.","Achieved 84.1% R@1 accuracy in Persian text-to-video retrieval, outperforming zero-shot baselines, and developed a reusable GitHub framework for multimodal research."],tech:["Multimodal Learning","PyTorch","Video-Text Retrieval"]},{title:"Image Classification DSL: A Language for Deep Learning",url:"https://github.com/abtin81badie/Image-DSL",category:"Languages & Tools",description:["Developed a Domain-Specific Language (DSL) using ANTLR4 and Python to simplify image classification, allowing non-programmers to define models with intuitive syntax.","Designed a custom grammar, built an Abstract Syntax Tree (AST) parser, and created a code generator that produces optimized TensorFlow and Keras models from the DSL.","Reduced model definition code by over 90% and accelerated development time by 10x, enabling rapid, standardized prototyping for ML experimentation."],tech:["Domain-Specific Languages","ANTLR4","Python","TensorFlow"]},{title:"Deep Learning Course Workshops",url:"https://github.com/abtin81badie/Practical-Deep-Learning-Series",category:"Deep Learning",description:["Established a comprehensive workshop series covering fundamentals like NumPy, Pandas, and PyTorch, emphasizing GPU-accelerated tensor operations.","Built a diverse range of models from scratch, including CNNs, RNNs, LSTMs, and generative models like VAEs and Conditional GANs.","Implemented advanced, parameter-efficient fine-tuning (PEFT) techniques, including building a Transformer from the ground up and using LoRA to adapt a Stable Diffusion model."],tech:["PyTorch","Generative Models","PEFT","CNNs","Transformers"]},{title:"Decision Tree for Fraud Detection",url:"https://github.com/abtin81badie/decision-tree",category:"Machine Learning",description:["Implemented a classical Decision Tree algorithm from scratch to perform fraud detection, demonstrating an understanding of core ML principles."],tech:["Python","Classical Machine Learning"]},{title:"SVM for Text Classification",url:"https://github.com/abtin81badie/SVM",category:"Machine Learning",description:["Built a Support Vector Machine (SVM) from the ground up for the task of classifying text documents."],tech:["Python","NLP","Classical Machine Learning"]},{title:"Genetic Algorithm for Clustering",url:"https://github.com/abtin81badie/genetics",category:"Machine Learning",description:["Engineered a Genetic Algorithm to solve a clustering problem, effectively grouping data points into distinct, optimized clusters."],tech:["Python","Optimization Algorithms"]},{title:"MLP Neural Networks with TensorFlow",url:"https://github.com/abtin81badie/Neural-Network",category:"Deep Learning",description:["Built and trained Multi-Layer Perceptron (MLP) networks for function approximation and CIFAR-10 image classification.","Conducted full hyperparameter tuning to optimize model accuracy and performance."],tech:["Python","TensorFlow","Keras","Deep Learning"]},{title:"Deep Reinforcement Learning Agents",url:"https://github.com/abtin81badie/RL",category:"Machine Learning",description:["Engineered deep reinforcement learning agents for pendulum balancing (achieving a 95% success rate) and the game of Othello (reaching an 82% win rate)."],tech:["Python","Reinforcement Learning"]}],mr=[{title:"AI & Machine Learning",icon:"🧠",accent:"indigo",skills:["PyTorch","TensorFlow","Keras","Scikit-learn","LangChain","Hugging Face","NumPy","Pandas","Deep Learning","CNNs","RNNs / LSTMs","Transformers","LLMs","NLP","Computer Vision","PEFT / LoRA"]},{title:"Web & Programming",icon:"💻",accent:"pink",skills:["Python","JavaScript","TypeScript","Go","SQL","C / C++","FastAPI","Django","Fiber (Go)","GORM","React","HTML5","CSS3","PostgreSQL","MySQL"]},{title:"DevOps, Tools & Professional",icon:"⚙️",accent:"cyan",skills:["Git","Docker","Linux","Bash","CI/CD","Android","Kotlin","Teamwork","Team Leadership"]}],xr=[{icon:"🥇",title:"Top 10% Undergraduate Student",detail:"Iran University of Science and Technology (Present)"},{icon:"🥈",title:"Ranked 2nd among first-year cohorts",detail:"2022 — Iran University of Science and Technology"},{icon:"🏅",title:"Ranked 1st for academic achievement",detail:"2018, 2019, 2021 — Tohid High School and Ehsan School"}],fr=[{title:"MongoDB C# Developer Path",issuer:"MongoDB",icon:"🍃",date:"Issued Dec 2025",credentialId:"MDB6j59sdww3t",url:"",skills:[]},{title:"Redis for .NET Developers",issuer:"Redis",icon:"🟥",date:"Issued Nov 2025",credentialId:"vwxbze8cue8znv",url:"",skills:[]},{title:"1st LLM-Agents Hackathon (In Person)",issuer:"Sharif Artificial Intelligence Chapter",icon:"🏆",date:"Issued Jul 2025",credentialId:"",url:"",skills:[]},{title:"Task-Oriented Bootcamp in Software Engineering with Golang",issuer:"Quera",icon:"🐹",date:"Issued Jan 2025",credentialId:"kIQzwH4J",url:"",skills:["HTTP","Testing","+21 skills"]},{title:"Professional Project-Oriented Course in Machine Learning with Python",issuer:"Quera",icon:"🤖",date:"Issued Dec 2024",credentialId:"mVJmmbkV",url:"",skills:["NumPy","Machine Learning","+4 skills"]},{title:"Advanced Algorithmic Thinking and Data Structures",issuer:"Quera",icon:"🧩",date:"Issued Dec 2024",credentialId:"1DeaFNu7",url:"",skills:["Algorithms","C++","+4 skills"]},{title:"Professional Project-Oriented Course in Frontend Development with React",issuer:"Quera",icon:"⚛️",date:"Issued Dec 2024",credentialId:"xi8WxBbA",url:"",skills:["React.js","HTML","+4 skills"]},{title:"Professional Project-Oriented Course in Backend Development with Django",issuer:"Quera",icon:"🌿",date:"Issued Oct 2024",credentialId:"Y4b6ahSU",url:"",skills:["Templates","Application Migrations","+8 skills"]},{title:"Project-Oriented Course in Front-End Web Development",issuer:"Quera",icon:"🎨",date:"Issued Aug 2024",credentialId:"77s2N0Es",url:"",skills:[]},{title:"Data Structures",issuer:"University of California San Diego",icon:"🎓",date:"Issued Dec 2023",credentialId:"8YWZLPWP3T9T",url:"",skills:[]},{title:"Algorithmic Toolbox",issuer:"University of California San Diego",icon:"🎓",date:"Issued Nov 2023",credentialId:"A9RYCC7SVY9N",url:"",skills:[]}],br={text:"Feel free to download my resume for a more detailed look at my skills, experience, and academic background.",file:"AbtinBadie_CV.pdf",downloadName:"Abtin_Badie_CV.pdf"},$e={meta:ar,profile:or,stats:sr,socials:lr,sections:cr,education:dr,research:pr,featured:ur,experience:hr,projects:gr,skills:mr,honors:xr,certifications:fr,resume:br},He=rr($e,$e);class Cr{async load(){return He}}const yr=We`
  :root, :root[data-theme="light"] {
    color-scheme: light;
    --bg: #f6f7fb;
    --bg-elevated: #ffffff;
    --surface: rgba(255, 255, 255, 0.78);
    --surface-strong: #ffffff;
    --border: rgba(15, 23, 42, 0.08);
    --border-strong: rgba(15, 23, 42, 0.16);
    --text: #1e2433;
    --text-muted: #5b6475;
    --heading: #0b1020;
    --primary: #6366f1;
    --glow: rgba(99, 102, 241, 0.22);
    --grid-line: rgba(15, 23, 42, 0.05);
    --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(15, 23, 42, 0.04);
    --shadow-md: 0 8px 30px rgba(15, 23, 42, 0.08);
    --shadow-lg: 0 24px 60px rgba(79, 70, 229, 0.18);
  }

  :root[data-theme="dark"] {
    color-scheme: dark;
    --bg: #070913;
    --bg-elevated: #0d1120;
    --surface: rgba(20, 25, 45, 0.62);
    --surface-strong: #121729;
    --border: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.16);
    --text: #d9deea;
    --text-muted: #939cb3;
    --heading: #ffffff;
    --primary: #818cf8;
    --glow: rgba(129, 140, 248, 0.28);
    --grid-line: rgba(255, 255, 255, 0.045);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.35);
    --shadow-lg: 0 24px 60px rgba(99, 102, 241, 0.25);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }

  body {
    font-family: ${j.body};
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.4s ease, color 0.4s ease;
    overflow-x: hidden;
  }

  section[id] {
    scroll-margin-top: calc(${C.navHeight} + 8px);
  }

  h1, h2, h3, h4 {
    font-family: ${j.display};
    color: var(--heading);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  a { color: inherit; }

  img { max-width: 100%; display: block; }

  button, input, textarea, select { font: inherit; color: inherit; }

  :focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 3px;
    border-radius: 6px;
  }

  ::selection {
    background: rgba(139, 92, 246, 0.3);
  }

  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #6366f1, #ec4899);
    border-radius: 999px;
    border: 2px solid var(--bg);
  }
`,vr=x.lazy(()=>Ie(()=>import("./AdminApp-Bcmg3zUE.js"),__vite__mapDeps([0,1,2,3,4]))),wr=x.lazy(()=>Ie(()=>import("./PreviewPage-EUaaBQvi.js"),__vite__mapDeps([5,1,2,3,4])));function jr(){const t=er();if(t.startsWith("/admin")){const r=t.split("/")[2]||void 0;return e.jsx(vr,{panelId:r})}return t.startsWith("/preview")?e.jsx(wr,{}):e.jsx(qn,{content:He})}function kr(){return e.jsxs(mt,{children:[e.jsx(yr,{}),e.jsx(Ue,{reducedMotion:"user",children:e.jsx(x.Suspense,{fallback:null,children:e.jsx(jr,{})})})]})}Je.createRoot(document.getElementById("root")).render(e.jsx(x.StrictMode,{children:e.jsx(kr,{})}));export{tr as A,K as B,Te as G,w as I,qn as P,ir as S,Lr as a,Ne as b,d as c,Ir as d,T as e,j as f,S as g,He as h,Cr as i,se as j,Tr as k,rr as n,Z as p,k as r,be as s,xt as u};

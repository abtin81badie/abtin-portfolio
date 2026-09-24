import{j as e,m as k,r as x,A as P}from"./motion-GIgwSgjC.js";import{d as s}from"./styled-BR92RCo_.js";import{r as v,c as d,f as B,g as q,I as b,e as M,B as w,a as ce,b as z,A as ge,S as fe,p as ie,d as G,n as ye,h as ke,i as je,u as we,j as ve,k as $e,s as Se,G as Ce}from"./index-C12Z6ODy.js";import{C as ze,d as Le,p as Pe,t as R,c as Te,a as Ee,G as Ae}from"./services-CrHTAzk8.js";import"./react-DxhCWetE.js";const De=s.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 18px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Re=s.div`
  grid-column: ${({$half:t})=>t?"auto":"1 / -1"};
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Ke=s.label`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${d.heading};
`,T=s.p`
  font-size: 0.78rem;
  color: ${d.textMuted};
`;function L({label:t,help:i,half:n,htmlFor:r,children:a}){return e.jsxs(Re,{$half:n,children:[t&&e.jsx(Ke,{htmlFor:r,children:t}),a,i&&e.jsx(T,{children:i})]})}const W=`
  width: 100%;
  padding: 10px 12px;
  font-size: 0.93rem;
  border-radius: ${v.sm};
  border: 1px solid var(--border-strong);
  background: var(--bg);
  color: var(--text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--glow);
  }

  &::placeholder {
    color: var(--text-muted);
    opacity: 0.7;
  }
`,I=s.input`
  ${W}
`,X=s.textarea`
  ${W}
  resize: vertical;
  min-height: 96px;
  line-height: 1.6;
`,Me=s.select`
  ${W}
  cursor: pointer;
`,Oe=s.div`
  padding: 10px 12px;
  font-family: ${B.mono};
  font-size: 0.85rem;
  border-radius: ${v.sm};
  background: var(--surface);
  border: 1px dashed var(--border-strong);
  color: ${d.textMuted};
`,Ie=s.button`
  position: relative;
  width: 46px;
  height: 26px;
  flex-shrink: 0;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  background: ${({$on:t})=>t?q.brand:"var(--border-strong)"};
  transition: background 0.25s ease;
`,Ue=s(k.span)`
  position: absolute;
  top: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
`,Be=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  font-size: 0.9rem;
`;function Ne({value:t,onChange:i,id:n}){return e.jsxs(Be,{children:[e.jsx(Ie,{id:n,type:"button",role:"switch","aria-checked":t,$on:t,onClick:()=>i(!t),children:e.jsx(Ue,{animate:{left:t?23:3},transition:{type:"spring",stiffness:500,damping:30}})}),t?"Yes":"No"]})}const A=s(k.button)`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 9px;
  border: 1px solid transparent;
  background: transparent;
  color: ${({$danger:t})=>t?"#ef4444":d.textMuted};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover:not(:disabled) {
    color: ${({$danger:t})=>t?"#ef4444":d.heading};
    background: ${({$danger:t})=>t?"rgba(239,68,68,0.1)":"var(--surface)"};
    border-color: ${d.border};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,J=s(k.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: ${v.md};
  border: 1.5px dashed var(--border-strong);
  background: transparent;
  color: ${d.textMuted};
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: ${d.primary};
    border-color: ${d.primary};
    background: var(--surface);
  }
`,pe=x.createContext(()=>{}),Fe=s.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  display: grid;
  gap: 10px;
  width: min(400px, calc(100vw - 40px));
`,ne={success:"#10b981",error:"#ef4444",info:"#6366f1"},He=s(k.div)`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 16px;
  font-size: 0.9rem;
  border-radius: ${v.md};
  background: ${d.bgElevated};
  border: 1px solid ${d.border};
  border-left: 4px solid ${({$tone:t})=>ne[t]};
  box-shadow: var(--shadow-md);

  svg {
    flex-shrink: 0;
    margin-top: 1px;
    color: ${({$tone:t})=>ne[t]};
  }

  a {
    color: ${d.primary};
    font-weight: 600;
  }
`;function Ge({children:t}){const[i,n]=x.useState([]),r=x.useCallback((l,o="info")=>{const p=Date.now()+Math.random();n(g=>[...g,{id:p,tone:o,message:l}]),window.setTimeout(()=>n(g=>g.filter(c=>c.id!==p)),o==="error"?9e3:6e3)},[]),a=x.useMemo(()=>r,[r]);return e.jsxs(pe.Provider,{value:a,children:[t,e.jsx(Fe,{role:"status","aria-live":"polite",children:e.jsx(P,{children:i.map(l=>e.jsxs(He,{$tone:l.tone,layout:!0,initial:{opacity:0,x:60,scale:.95},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:60,scale:.95},transition:{type:"spring",stiffness:400,damping:32},children:[e.jsx(b,{name:l.tone==="error"?"close":l.tone==="success"?"check":"sparkles",size:18}),e.jsx("div",{children:l.message})]},l.id))})})]})}const Q=()=>x.useContext(pe),Je=s(k.div)`
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(5, 8, 20, 0.55);
  backdrop-filter: blur(6px);
`,_e=s(k.div)`
  width: min(520px, 100%);
  display: grid;
  gap: 18px;
  padding: 28px;
  border-radius: 24px;
  background: ${d.bgElevated};
  border: 1px solid ${d.border};
  box-shadow: var(--shadow-lg);

  h2 {
    font-size: 1.4rem;
  }
`,Ve=s.div`
  padding: 12px 14px;
  font-size: 0.88rem;
  border-radius: ${v.sm};
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.4);
`,Ye=s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
`;function qe({open:t,editor:i,onClose:n}){const r=Q(),[a,l]=x.useState("content: update portfolio via admin panel"),[o,p]=x.useState(!1),[g,c]=x.useState(!1),u=()=>{o||(c(!1),n())},h=async m=>{p(!0);try{const{commitUrl:j}=await i.publish(a.trim()||"content: update portfolio",m);r(e.jsxs(e.Fragment,{children:["Published! Your site will update in about a minute."," ",e.jsx("a",{href:j,target:"_blank",rel:"noopener noreferrer",children:"Commit"})," ","·"," ",e.jsx("a",{href:`${ce}/actions`,target:"_blank",rel:"noopener noreferrer",children:"Deploy status"})]}),"success"),c(!1),n()}catch(j){j instanceof ze?c(!0):r(`Publish failed: ${j instanceof Error?j.message:String(j)}`,"error")}finally{p(!1)}};return e.jsx(P,{children:t&&e.jsx(Je,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:u,children:e.jsxs(_e,{role:"dialog","aria-modal":"true","aria-labelledby":"publish-title",initial:{opacity:0,y:24,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:24,scale:.96},transition:{duration:.3,ease:M.out},onClick:m=>m.stopPropagation(),children:[e.jsx("h2",{id:"publish-title",children:"Publish changes"}),e.jsx(T,{children:"This commits your content to GitHub. The deploy workflow then rebuilds the site — usually live within a minute or two."}),e.jsx(L,{label:"Commit message",htmlFor:"commit-message",children:e.jsx(X,{id:"commit-message",rows:2,style:{minHeight:64},value:a,onChange:m=>l(m.target.value)})}),g&&e.jsxs(Ve,{children:[e.jsx("strong",{children:"Someone changed the content on GitHub"})," since you opened the editor (maybe another tab or a direct commit). You can overwrite it with your version, or cancel, reload and re-apply your edits."]}),e.jsxs(Ye,{children:[e.jsx(w,{variant:"subtle",onClick:u,disabled:o,children:"Cancel"}),g?e.jsx(w,{variant:"danger",onClick:()=>void h(!0),disabled:o,children:o?"Publishing…":"Overwrite & publish"}):e.jsxs(w,{variant:"primary",onClick:()=>void h(!1),disabled:o,children:[e.jsx(b,{name:"save"})," ",o?"Publishing…":"Publish"]})]})]})})})}const F=ge.map(t=>({value:t,label:t[0].toUpperCase()+t.slice(1)})),We=fe.map(t=>({value:t,label:t[0].toUpperCase()+t.slice(1)})),K=(t="Icon")=>({kind:"text",label:t,half:!0,help:"An emoji, e.g. 🎓"}),Xe={title:{kind:"text",label:"Title"},period:{kind:"text",label:"Period",half:!0,placeholder:"Jan 2026 – Present · 6 mos"},location:{kind:"text",label:"Location / supervisor",half:!0},description:{kind:"text",label:"Description",multiline:!0},skills:{kind:"tags",label:"Skills"}},Qe=[{id:"profile",label:"Profile & Hero",icon:"👤",description:"Your name, the rotating roles in the hero, and the About Me text.",key:"profile",schema:{kind:"object",label:"Profile",fields:{name:{kind:"text",label:"Full name",half:!0},eyebrow:{kind:"text",label:"Eyebrow line",half:!0},availability:{kind:"text",label:"Availability badge",help:"Shown with a green pulsing dot. Leave empty to hide."},roles:{kind:"tags",label:"Rotating roles",help:"Cycled one by one in the hero: “I'm a …”."},headline:{kind:"text",label:"Hero headline",multiline:!0},about:{kind:"textList",label:"About Me paragraphs",itemLabel:"paragraph",multiline:!0},location:{kind:"text",label:"Location",half:!0},email:{kind:"text",label:"Email",half:!0},photo:{kind:"text",label:"Photo file",half:!0,help:"File in /public. Upload a new one under Assets."},cta:{kind:"object",label:"About Me call-to-action link",fields:{label:{kind:"text",label:"Label",half:!0},url:{kind:"text",label:"URL",half:!0}}}}}},{id:"experience",label:"Experience",icon:"💼",description:"Organizations and the roles you held there, newest first.",key:"experience",schema:{kind:"list",label:"Organizations",itemLabel:"organization",titleKey:"organization",subtitleKey:"summary",iconKey:"icon",create:z.experience,fields:{organization:{kind:"text",label:"Organization"},icon:K(),accent:{kind:"select",label:"Accent color",half:!0,options:F},summary:{kind:"text",label:"Summary",placeholder:"Full-time · 10 mos"},roles:{kind:"list",label:"Roles",itemLabel:"role",titleKey:"title",subtitleKey:"period",create:z.role,fields:Xe}}}},{id:"projects",label:"Projects",icon:"🚀",description:"Project cards. The category is used for the filter buttons.",key:"projects",schema:{kind:"list",label:"Projects",itemLabel:"project",titleKey:"title",subtitleKey:"category",create:z.project,fields:{title:{kind:"text",label:"Title"},url:{kind:"text",label:"Link (GitHub or website)",half:!0},category:{kind:"text",label:"Category",half:!0,placeholder:"Deep Learning"},description:{kind:"textList",label:"Bullet points",itemLabel:"bullet",multiline:!0},tech:{kind:"tags",label:"Tech stack"}}}},{id:"featured",label:"Featured Project",icon:"⭐",description:"The big highlighted project (your thesis).",key:"featured",schema:{kind:"object",label:"Featured project",fields:{title:{kind:"text",label:"Title"},badges:{kind:"tags",label:"Badges"},affiliation:{kind:"text",label:"Affiliation / supervisors"},summary:{kind:"text",label:"Summary",multiline:!0},notice:{kind:"text",label:"Notice (e.g. private project)",multiline:!0,help:"Leave empty to hide."},link:{kind:"text",label:"Project link",help:"Optional. Shows a “View project” button."},pipeline:{kind:"textList",label:"Pipeline steps",itemLabel:"step"},results:{kind:"list",label:"Model results",itemLabel:"result",titleKey:"name",subtitleKey:"tag",create:z.modelResult,fields:{name:{kind:"text",label:"Model name",half:!0},tag:{kind:"text",label:"Tag",half:!0},accent:{kind:"select",label:"Accent color",half:!0,options:F},highlight:{kind:"toggle",label:"Mark as best",half:!0},metrics:{kind:"list",label:"Metrics",itemLabel:"metric",titleKey:"label",subtitleKey:"value",create:z.metric,fields:{label:{kind:"text",label:"Label",half:!0},value:{kind:"text",label:"Value",half:!0}}}}},highlights:{kind:"text",label:"Highlights",multiline:!0},stack:{kind:"tags",label:"Tech stack"}}}},{id:"education",label:"Education",icon:"🎓",description:"Degrees and schools.",key:"education",schema:{kind:"list",label:"Education",itemLabel:"school",titleKey:"school",subtitleKey:"degree",create:z.education,fields:{school:{kind:"text",label:"School"},degree:{kind:"text",label:"Degree",half:!0},period:{kind:"text",label:"Period",half:!0},grade:{kind:"text",label:"Grade",half:!0},description:{kind:"text",label:"Description",multiline:!0},skills:{kind:"tags",label:"Coursework / skills"}}}},{id:"skills",label:"Skills",icon:"🛠️",description:"Skill groups shown as chip clouds.",key:"skills",schema:{kind:"list",label:"Skill groups",itemLabel:"group",titleKey:"title",iconKey:"icon",create:z.skillGroup,fields:{title:{kind:"text",label:"Title"},icon:K(),accent:{kind:"select",label:"Accent color",half:!0,options:F},skills:{kind:"tags",label:"Skills"}}}},{id:"research",label:"Research",icon:"🔬",description:"Research interest areas.",key:"research",schema:{kind:"list",label:"Research areas",itemLabel:"area",titleKey:"title",iconKey:"icon",create:z.research,fields:{title:{kind:"text",label:"Title",half:!0},icon:K(),items:{kind:"textList",label:"Topics",itemLabel:"topic"}}}},{id:"certifications",label:"Certifications",icon:"📜",description:"Licenses, courses and credentials.",key:"certifications",schema:{kind:"list",label:"Certifications",itemLabel:"certification",titleKey:"title",subtitleKey:"issuer",iconKey:"icon",create:z.certification,fields:{title:{kind:"text",label:"Title"},issuer:{kind:"text",label:"Issuer",half:!0},icon:K(),date:{kind:"text",label:"Date",half:!0,placeholder:"Issued Dec 2025"},credentialId:{kind:"text",label:"Credential ID",half:!0},url:{kind:"text",label:"Credential URL",help:"Optional. Adds a “Show credential” link."},skills:{kind:"tags",label:"Skills"}}}},{id:"honors",label:"Honors",icon:"🏅",description:"Awards and rankings.",key:"honors",schema:{kind:"list",label:"Honors",itemLabel:"honor",titleKey:"title",subtitleKey:"detail",iconKey:"icon",create:z.honor,fields:{title:{kind:"text",label:"Title"},icon:K("Medal"),detail:{kind:"text",label:"Detail"}}}},{id:"stats",label:"Stats",icon:"📈",description:"Animated counters in the About section. The first one also appears in the hero.",key:"stats",schema:{kind:"list",label:"Stats",itemLabel:"stat",titleKey:"label",create:z.stat,fields:{label:{kind:"text",label:"Label"},value:{kind:"number",label:"Value",half:!0,step:.01},decimals:{kind:"number",label:"Decimals",half:!0,min:0,max:4},suffix:{kind:"text",label:"Suffix",half:!0,placeholder:"+ or /4"}}}},{id:"socials",label:"Social Links",icon:"🔗",description:"Icon links in the hero and footer.",key:"socials",schema:{kind:"list",label:"Links",itemLabel:"link",titleKey:"label",subtitleKey:"url",create:z.social,fields:{label:{kind:"text",label:"Label",half:!0},icon:{kind:"select",label:"Icon",half:!0,options:We},url:{kind:"text",label:"URL",help:"Use mailto:you@example.com for email."}}}},{id:"sections",label:"Sections & Order",icon:"🧭",description:"Reorder, rename or hide whole sections of the page.",key:"sections",schema:{kind:"list",label:"Sections",itemLabel:"section",titleKey:"title",subtitleKey:"id",fixed:!0,fields:{id:{kind:"readonly",label:"Section",half:!0},visible:{kind:"toggle",label:"Visible",half:!0},title:{kind:"text",label:"Title",half:!0},navLabel:{kind:"text",label:"Menu label",half:!0},subtitle:{kind:"text",label:"Subtitle"}}}},{id:"resume",label:"Resume",icon:"📄",description:"Resume call-to-action. Upload a new PDF under Assets.",key:"resume",schema:{kind:"object",label:"Resume",fields:{text:{kind:"text",label:"Text",multiline:!0},file:{kind:"text",label:"PDF file in /public",half:!0},downloadName:{kind:"text",label:"Download file name",half:!0}}}},{id:"meta",label:"SEO",icon:"🌐",description:"Browser tab title and search-engine description.",key:"meta",schema:{kind:"object",label:"Site",fields:{title:{kind:"text",label:"Page title"},description:{kind:"text",label:"Meta description",multiline:!0}}}}],Ze=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
`,re=s.div`
  display: grid;
  gap: 14px;
  align-content: start;
  padding: 20px;
  border-radius: ${v.lg};
  border: 1px solid ${d.border};
  background: ${d.bgElevated};

  h3 {
    font-size: 1.05rem;
  }
`,et=s.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--primary);
`,tt=s.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: ${d.primary};
`,it=8*1024*1024,nt=t=>t.name.split(".").pop()?.toLowerCase()??"";function rt({editor:t,uploader:i}){const n=Q(),[r,a]=x.useState(null),[l,o]=x.useState(null),p=t.content;if(!p)return null;const g=async(c,u)=>{const h=u.target.files?.[0];if(u.target.value="",!h||!i)return;if(h.size>it){n("That file is larger than 8 MB — please compress it first.","error");return}const m=c==="photo"?p.profile.photo:p.resume.file,y=`${m.replace(/\.[^.]+$/,"")||(c==="photo"?"profile":"resume")}.${nt(h)}`;a(c);try{const{commitUrl:f}=await i.upload(y,h,`chore(assets): update ${c} via admin panel`);c==="photo"&&o(URL.createObjectURL(h)),y!==m&&(c==="photo"?t.update("profile",{...p.profile,photo:y}):t.update("resume",{...p.resume,file:y})),n(e.jsxs(e.Fragment,{children:["Uploaded ",e.jsx("strong",{children:y}),"."," ",y!==m?"Publish your changes to start using it. ":"It will be live after the next deploy. ",e.jsx("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:"View commit"})]}),"success")}catch(f){n(`Upload failed: ${f instanceof Error?f.message:String(f)}`,"error")}finally{a(null)}};return e.jsxs(Ze,{children:[e.jsxs(re,{children:[e.jsx("h3",{children:"Profile photo"}),e.jsx(et,{src:l??ie(p.profile.photo),alt:"Current profile"}),e.jsxs(T,{children:["Currently ",e.jsx("code",{children:p.profile.photo}),". A square image of at least 600×600 px looks best."]}),e.jsxs(G,{variant:"ghost",size:"sm",disabled:!i||r!==null,children:[e.jsx("input",{type:"file",accept:"image/*",disabled:!i||r!==null,onChange:c=>g("photo",c)}),e.jsx(b,{name:"upload"})," ",r==="photo"?"Uploading…":"Upload new photo"]})]}),e.jsxs(re,{children:[e.jsx("h3",{children:"Resume (PDF)"}),e.jsxs(tt,{href:ie(p.resume.file),target:"_blank",rel:"noopener noreferrer",children:[e.jsx(b,{name:"external",size:16})," ",p.resume.file]}),e.jsx(T,{children:"Upload a new PDF to replace the downloadable resume."}),e.jsxs(G,{variant:"ghost",size:"sm",disabled:!i||r!==null,children:[e.jsx("input",{type:"file",accept:"application/pdf",disabled:!i||r!==null,onChange:c=>g("resume",c)}),e.jsx(b,{name:"upload"})," ",r==="resume"?"Uploading…":"Upload new resume"]})]}),!i&&e.jsx(T,{children:"Sign in with GitHub to upload files."})]})}const st=s.div`
  display: grid;
  gap: 14px;
`,O=s.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 18px 20px;
  border-radius: ${v.lg};
  border: 1px solid ${d.border};
  background: ${d.bgElevated};

  h3 {
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;function ot({editor:t}){const i=Q(),n=t.content;if(!n)return null;const r=()=>{const l=new Blob([`${JSON.stringify(n,null,2)}
`],{type:"application/json"}),o=URL.createObjectURL(l),p=document.createElement("a");p.href=o,p.download=`portfolio-content-${new Date().toISOString().slice(0,10)}.json`,p.click(),URL.revokeObjectURL(o)},a=async l=>{const o=l.target.files?.[0];if(l.target.value="",!!o)try{const p=JSON.parse(await o.text());t.replace(ye(p,ke)),i("Imported. Review the changes, then publish.","success")}catch{i("That file is not valid JSON.","error")}};return e.jsxs(st,{children:[e.jsxs(O,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Export content"}),e.jsx(T,{children:"Download everything as a JSON backup."})]}),e.jsxs(w,{variant:"ghost",size:"sm",onClick:r,children:[e.jsx(b,{name:"download"})," Export JSON"]})]}),e.jsxs(O,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Import content"}),e.jsx(T,{children:"Load a JSON backup into the editor. Nothing is published until you click Publish."})]}),e.jsxs(G,{variant:"ghost",size:"sm",children:[e.jsx("input",{type:"file",accept:"application/json,.json",onChange:a}),e.jsx(b,{name:"upload"})," Import JSON"]})]}),e.jsxs(O,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Discard unpublished changes"}),e.jsx(T,{children:"Revert the editor to the last published version."})]}),e.jsxs(w,{variant:"danger",size:"sm",disabled:!t.dirty,onClick:()=>window.confirm("Discard all unpublished changes?")&&t.discard(),children:[e.jsx(b,{name:"trash"})," Discard changes"]})]}),e.jsxs(O,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Reload from source"}),e.jsx(T,{children:"Fetch the latest published content again (your draft is kept)."})]}),e.jsxs(w,{variant:"subtle",size:"sm",onClick:()=>void t.reload(),children:[e.jsx(b,{name:"refresh"})," Reload"]})]})]})}const _=(t,i,n)=>{if(i===n||i<0||n<0||i>=t.length||n>=t.length)return[...t];const r=[...t],[a]=r.splice(i,1);return r.splice(n,0,a),r},V=(t,i,n)=>{const r=[...t];return r.splice(Math.max(0,Math.min(i,r.length)),0,n),r},Z=(t,i)=>t.filter((n,r)=>r!==i),Y=(t,i,n)=>t.map((r,a)=>a===i?n:r),at=t=>JSON.parse(JSON.stringify(t)),lt=t=>t.split(/[,;\n]/).map(i=>i.trim()).filter(Boolean),dt=s.div`
  padding: 16px;
  border-radius: ${v.md};
  border: 1px solid ${d.border};
  background: var(--surface);
`;function ee({fields:t,value:i,onChange:n,nested:r}){const a=e.jsx(De,{children:Object.entries(t).map(([l,o])=>e.jsx(he,{schema:o,value:i[l],onChange:p=>n({...i,[l]:p})},l))});return r?e.jsx(dt,{children:a}):a}let ct=0;const se=()=>`k${++ct}`;function ue(t){const i=x.useRef([]);return i.current.length!==t&&(i.current=Array.from({length:t},(n,r)=>i.current[r]??se())),{keys:i.current,move(n,r){const a=[...i.current],[l]=a.splice(n,1);a.splice(r,0,l),i.current=a},insert(n){const r=[...i.current];r.splice(n,0,se()),i.current=r},remove(n){i.current=i.current.filter((r,a)=>a!==n)}}}const U=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)?t:{},te=t=>Array.isArray(t)?t:[],oe=t=>te(t).filter(i=>typeof i=="string"),pt=t=>{const i=new Map;return t.map(n=>{const r=i.get(n)??0;return i.set(n,r+1),r===0?n:`${n}#${r}`})},ut=s.div`
  display: grid;
  gap: 10px;
`,xt=s(k.div)`
  border-radius: ${v.md};
  border: 1px solid ${({$open:t})=>t?"var(--primary)":d.border};
  background: ${d.bgElevated};
  box-shadow: ${({$open:t})=>t?"0 10px 30px var(--glow)":"none"};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
`,ht=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 10px 14px;
`,bt=s.button`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 2px 0;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;
`,mt=s.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  font-family: ${B.mono};
  font-size: 0.78rem;
  color: ${d.textMuted};
  background: var(--surface);
  border: 1px solid ${d.border};
`,gt=s.span`
  display: flex;
  flex-direction: column;
  min-width: 0;

  strong,
  small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    font-size: 0.93rem;
    color: ${d.heading};
  }

  small {
    font-size: 0.78rem;
    color: ${d.textMuted};
  }
`,ft=s.div`
  display: flex;
  gap: 2px;
`,yt=s(k.div)`
  overflow: hidden;
`,kt=s.div`
  padding: 6px 16px 18px;
  border-top: 1px solid ${d.border};
  padding-top: 18px;
`,jt=s.div`
  display: flex;
  gap: 10px;
`,wt=s.p`
  padding: 18px;
  text-align: center;
  font-size: 0.88rem;
  color: ${d.textMuted};
  border-radius: ${v.md};
  border: 1px dashed var(--border-strong);
`;function xe({schema:t,value:i,onChange:n}){const r=ue(i.length),[a,l]=x.useState(null),o=u=>{t.create&&(r.insert(u),l(r.keys[u]),n(V(i,u,t.create())))},p=u=>{r.insert(u+1),l(r.keys[u+1]),n(V(i,u+1,at(i[u])))},g=(u,h)=>{r.move(u,h),n(_(i,u,h))},c=u=>{const h=U(i[u]),m=String(h[t.titleKey]??t.itemLabel)||t.itemLabel;window.confirm(`Delete “${m}”?`)&&(r.remove(u),n(Z(i,u)))};return e.jsxs(ut,{children:[i.length===0&&e.jsxs(wt,{children:["No ",t.itemLabel,"s yet."]}),e.jsx(P,{initial:!1,children:i.map((u,h)=>{const m=U(u),j=r.keys[h],y=a===j,f=String(m[t.titleKey]??"")||`Untitled ${t.itemLabel}`,$=t.subtitleKey?String(m[t.subtitleKey]??""):"",S=t.iconKey?String(m[t.iconKey]??""):"";return e.jsxs(xt,{$open:y,layout:"position",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,scale:.97},transition:{duration:.25,ease:M.out},children:[e.jsxs(ht,{children:[e.jsxs(bt,{type:"button","aria-expanded":y,onClick:()=>l(y?null:j),children:[e.jsx(mt,{style:S?{fontSize:"1.05rem"}:void 0,children:S||h+1}),e.jsxs(gt,{children:[e.jsx("strong",{children:f}),$&&e.jsx("small",{children:$})]})]}),e.jsxs(ft,{children:[e.jsx(A,{type:"button","aria-label":"Move up",disabled:h===0,onClick:()=>g(h,h-1),children:e.jsx(b,{name:"arrowUp",size:16})}),e.jsx(A,{type:"button","aria-label":"Move down",disabled:h===i.length-1,onClick:()=>g(h,h+1),children:e.jsx(b,{name:"arrowUp",size:16,style:{transform:"rotate(180deg)"}})}),!t.fixed&&e.jsxs(e.Fragment,{children:[e.jsx(A,{type:"button","aria-label":"Duplicate",onClick:()=>p(h),children:e.jsx(b,{name:"copy",size:16})}),e.jsx(A,{type:"button",$danger:!0,"aria-label":"Delete",onClick:()=>c(h),children:e.jsx(b,{name:"trash",size:16})})]}),e.jsx(A,{type:"button","aria-label":y?"Collapse":"Expand",onClick:()=>l(y?null:j),animate:{rotate:y?180:0},children:e.jsx(b,{name:"chevronDown",size:16})})]})]}),e.jsx(P,{initial:!1,children:y&&e.jsx(yt,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:M.out},children:e.jsx(kt,{children:e.jsx(ee,{fields:t.fields,value:m,onChange:N=>n(Y(i,h,N))})})})})]},j)})}),!t.fixed&&t.create&&e.jsxs(jt,{children:[i.length>0&&e.jsxs(J,{type:"button",whileTap:{scale:.98},onClick:()=>o(0),children:[e.jsx(b,{name:"plus",size:16})," Add ",t.itemLabel," at top"]}),e.jsxs(J,{type:"button",whileTap:{scale:.98},onClick:()=>o(i.length),children:[e.jsx(b,{name:"plus",size:16})," Add ",t.itemLabel,i.length>0?" at bottom":""]})]})]})}const vt=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 7px;
  border-radius: ${v.sm};
  border: 1px solid var(--border-strong);
  background: var(--bg);
  cursor: text;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--glow);
  }
`,$t=s(k.span)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px 4px 10px;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: ${v.pill};
  color: ${d.primary};
  background: var(--glow);

  button {
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.12);
    }
  }
`,St=s.input`
  flex: 1;
  min-width: 140px;
  padding: 4px 6px;
  border: 0;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
`;function Ct({id:t,value:i,onChange:n,placeholder:r}){const[a,l]=x.useState(""),o=c=>{const u=lt(c).filter(h=>!i.includes(h));u.length&&n([...i,...u]),l("")},p=c=>{c.key==="Enter"||c.key===","?(c.preventDefault(),o(a)):c.key==="Backspace"&&a===""&&i.length>0&&n(i.slice(0,-1))},g=pt(i);return e.jsxs(vt,{onClick:c=>c.currentTarget.querySelector("input")?.focus(),children:[e.jsx(P,{initial:!1,children:i.map((c,u)=>e.jsxs($t,{layout:!0,initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{type:"spring",stiffness:500,damping:30},children:[c,e.jsx("button",{type:"button","aria-label":`Remove ${c}`,onClick:()=>n(Z(i,u)),children:e.jsx(b,{name:"close",size:12})})]},g[u]))}),e.jsx(St,{id:t,value:a,placeholder:i.length?"":r??"Type and press Enter",onChange:c=>c.target.value.includes(",")?o(c.target.value):l(c.target.value),onKeyDown:p,onBlur:()=>a&&o(a),onPaste:c=>{const u=c.clipboardData.getData("text");/[,;\n]/.test(u)&&(c.preventDefault(),o(a+u))}})]})}const zt=s.div`
  display: grid;
  gap: 8px;
`,Lt=s(k.div)`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`,Pt=s.span`
  flex-shrink: 0;
  width: 22px;
  padding-top: 11px;
  font-size: 0.75rem;
  text-align: right;
  color: ${d.textMuted};
`,Tt=s.div`
  display: flex;
  gap: 2px;
  padding-top: 4px;
`;function Et({value:t,onChange:i,itemLabel:n,multiline:r}){const a=ue(t.length);return e.jsxs(zt,{children:[e.jsx(P,{initial:!1,children:t.map((l,o)=>e.jsxs(Lt,{layout:!0,initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,height:0},children:[e.jsxs(Pt,{children:[o+1,"."]}),r?e.jsx(X,{value:l,rows:3,"aria-label":`${n} ${o+1}`,onChange:p=>i(Y(t,o,p.target.value))}):e.jsx(I,{value:l,"aria-label":`${n} ${o+1}`,onChange:p=>i(Y(t,o,p.target.value))}),e.jsxs(Tt,{children:[e.jsx(A,{type:"button","aria-label":"Move up",disabled:o===0,onClick:()=>{a.move(o,o-1),i(_(t,o,o-1))},children:e.jsx(b,{name:"arrowUp",size:16})}),e.jsx(A,{type:"button","aria-label":"Move down",disabled:o===t.length-1,onClick:()=>{a.move(o,o+1),i(_(t,o,o+1))},children:e.jsx(b,{name:"arrowUp",size:16,style:{transform:"rotate(180deg)"}})}),e.jsx(A,{type:"button",$danger:!0,"aria-label":`Delete ${n}`,onClick:()=>{a.remove(o),i(Z(t,o))},children:e.jsx(b,{name:"trash",size:16})})]})]},a.keys[o]))}),e.jsxs(J,{type:"button",whileTap:{scale:.98},onClick:()=>{a.insert(t.length),i(V(t,t.length,""))},children:[e.jsx(b,{name:"plus",size:16})," Add ",n]})]})}function he({schema:t,value:i,onChange:n}){const r=x.useId();switch(t.kind){case"text":{const a={id:r,value:typeof i=="string"?i:"",placeholder:t.placeholder};return e.jsx(L,{label:t.label,help:t.help,half:t.half,htmlFor:r,children:t.multiline?e.jsx(X,{...a,onChange:l=>n(l.target.value)}):e.jsx(I,{...a,onChange:l=>n(l.target.value)})})}case"number":return e.jsx(L,{label:t.label,help:t.help,half:t.half,htmlFor:r,children:e.jsx(I,{id:r,type:"number",step:t.step??1,min:t.min,max:t.max,value:typeof i=="number"?i:0,onChange:a=>n(a.target.value===""?0:Number(a.target.value))})});case"toggle":return e.jsx(L,{label:t.label,help:t.help,half:t.half,htmlFor:r,children:e.jsx(Ne,{id:r,value:i===!0,onChange:n})});case"select":return e.jsx(L,{label:t.label,help:t.help,half:t.half,htmlFor:r,children:e.jsx(Me,{id:r,value:typeof i=="string"?i:"",onChange:a=>n(a.target.value),children:t.options.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})});case"readonly":return e.jsx(L,{label:t.label,help:t.help,half:t.half,children:e.jsx(Oe,{children:String(i??"")})});case"tags":return e.jsx(L,{label:t.label,help:t.help,half:t.half,htmlFor:r,children:e.jsx(Ct,{id:r,value:oe(i),onChange:n,placeholder:t.placeholder})});case"textList":return e.jsx(L,{label:t.label,help:t.help,children:e.jsx(Et,{value:oe(i),onChange:n,itemLabel:t.itemLabel,multiline:t.multiline})});case"object":return e.jsx(L,{label:t.label,help:t.help,children:e.jsx(ee,{fields:t.fields,value:U(i),onChange:n,nested:!0})});case"list":return e.jsx(L,{label:t.label,help:t.help,children:e.jsx(xe,{schema:t,value:te(i),onChange:n})})}}function At({page:t,editor:i}){if(!i.content)return null;const n=i.content[t.key],r=a=>i.update(t.key,a);switch(t.schema.kind){case"list":return e.jsx(xe,{schema:t.schema,value:te(n),onChange:r});case"object":return e.jsx(ee,{fields:t.schema.fields,value:U(n),onChange:r});default:return e.jsx(he,{schema:t.schema,value:n,onChange:r})}}const H=[...Qe.map(t=>({id:t.id,label:t.label,icon:t.icon,description:t.description,group:"Content",render:({editor:i})=>e.jsx(At,{page:t,editor:i})})),{id:"assets",label:"Photo & Resume",icon:"🖼️",description:"Upload a new profile photo or resume PDF.",group:"Tools",render:t=>e.jsx(rt,{...t})},{id:"backup",label:"Backup & Reset",icon:"💾",description:"Export, import or discard your changes.",group:"Tools",render:t=>e.jsx(ot,{...t})}];function Dt({reader:t,publisher:i,drafts:n,preview:r}){const[a,l]=x.useState(null),[o,p]=x.useState(null),[g,c]=x.useState("loading"),[u,h]=x.useState(),[m,j]=x.useState(!1),y=x.useRef(void 0),f=x.useCallback(async()=>{c("loading");try{const C=await t.load(),D=n.load(),E=D!==null&&JSON.stringify(D)!==JSON.stringify(C);l(C),p(E?D:C),j(E),c("ready")}catch(C){h(C instanceof Error?C.message:String(C)),c("error")}},[t,n]);x.useEffect(()=>{f()},[f]);const $=x.useMemo(()=>o!==null&&a!==null&&JSON.stringify(o)!==JSON.stringify(a),[o,a]);x.useEffect(()=>{if(o)return window.clearTimeout(y.current),y.current=window.setTimeout(()=>{r.save(o),$?n.save(o):n.clear()},250),()=>window.clearTimeout(y.current)},[o,$,n,r]);const S=x.useCallback((C,D)=>{p(E=>E&&{...E,[C]:D})},[]),N=x.useCallback(C=>p(C),[]),be=x.useCallback(()=>{n.clear(),p(a),j(!1)},[n,a]),me=x.useCallback(async(C,D=!1)=>{if(!i||!o)throw new Error("Publishing requires signing in with GitHub.");const E=await i.publish(o,C,{force:D});return l(o),j(!1),n.clear(),E},[i,o,n]);return{content:o,published:a,loadState:g,loadError:u,restoredDraft:m,dismissRestoredNotice:()=>j(!1),dirty:$,canPublish:!!i,reload:f,update:S,replace:N,discard:be,publish:me}}const Rt=s.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`,Kt=s.header`
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px clamp(14px, 3vw, 24px);
  background: var(--surface);
  border-bottom: 1px solid ${d.border};
  backdrop-filter: blur(18px);
`,Mt=s.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${B.display};
  font-weight: 700;
  color: ${d.heading};
  text-decoration: none;

  span:first-child {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 11px;
    color: #fff;
    background: ${q.brand};
  }

  @media (max-width: 720px) {
    span:last-child {
      display: none;
    }
  }
`,ae=s.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: ${v.pill};
  color: ${({$tone:t})=>t==="ok"?"#10b981":t==="warn"?"#f59e0b":d.textMuted};
  background: ${({$tone:t})=>t==="ok"?"rgba(16,185,129,0.12)":t==="warn"?"rgba(245,158,11,0.14)":"var(--surface)"};

  @media (max-width: 900px) {
    &[data-optional] {
      display: none;
    }
  }
`,Ot=s(k.span)`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
`,It=s.div`
  flex: 1;
`,Ut=s.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 720px) {
    .label {
      display: none;
    }
  }
`,Bt=s.div`
  flex: 1;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr) ${({$preview:t})=>t?"minmax(0, 1fr)":""};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Nt=s.nav`
  position: sticky;
  top: 61px;
  align-self: start;
  height: calc(100svh - 61px);
  overflow-y: auto;
  padding: 18px 12px;
  border-right: 1px solid ${d.border};

  @media (max-width: 900px) {
    position: static;
    height: auto;
    display: flex;
    gap: 4px;
    overflow-x: auto;
    padding: 10px;
    border-right: 0;
    border-bottom: 1px solid ${d.border};

    h4 {
      display: none;
    }
  }
`,Ft=s.h4`
  margin: 14px 10px 8px;
  font-family: ${B.mono};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${d.textMuted};
`,Ht=s.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  border: 0;
  border-radius: 12px;
  background: none;
  cursor: pointer;
  color: ${({$active:t})=>t?d.heading:d.textMuted};
  transition: color 0.2s ease;

  &:hover {
    color: ${d.heading};
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    width: auto;
  }
`,Gt=s(k.div)`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid ${d.borderStrong};
  box-shadow: var(--shadow-sm);
`,Jt=s.main`
  min-width: 0;
  padding: clamp(20px, 4vw, 40px);
`,_t=s.div`
  max-width: 860px;
  margin: 0 auto;
`,Vt=s.div`
  margin-bottom: 26px;

  h1 {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    margin-top: 6px;
    color: ${d.textMuted};
  }
`,Yt=s(k.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
  padding: 12px 16px;
  font-size: 0.9rem;
  border-radius: ${v.md};
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
`,qt=s(k.aside)`
  position: sticky;
  top: 61px;
  height: calc(100svh - 61px);
  border-left: 1px solid ${d.border};
  background: var(--bg);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`,Wt=s.div`
  min-height: 100svh;
  display: grid;
  place-items: center;
  gap: 12px;
  text-align: center;
  color: ${d.textMuted};
`,Xt=s(k.div)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid ${d.border};
  border-top-color: var(--primary);
`;function Qt({session:t,panelId:i,onSignOut:n}){const r=t.status==="online"?t.repository:void 0,a=x.useMemo(()=>r??new je,[r]),l=Dt({reader:a,publisher:r,drafts:Le,preview:Pe}),{mode:o,toggle:p}=we(),[g,c]=x.useState(!1),[u,h]=x.useState(!1),m=H.find(f=>f.id===i)??H[0],j=["Content","Tools"];if(x.useEffect(()=>{const f=$=>{($.metaKey||$.ctrlKey)&&$.key.toLowerCase()==="s"&&($.preventDefault(),l.canPublish&&l.dirty&&c(!0))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[l.canPublish,l.dirty]),l.loadState!=="ready")return e.jsx(Wt,{children:l.loadState==="loading"?e.jsx("div",{children:e.jsx(Xt,{animate:{rotate:360},transition:{duration:.9,repeat:1/0,ease:"linear"}})}):e.jsxs("div",{children:[e.jsxs("p",{children:["Could not load content: ",l.loadError]}),e.jsxs(w,{variant:"ghost",onClick:()=>void l.reload(),style:{marginTop:12},children:[e.jsx(b,{name:"refresh"})," Try again"]})]})});const y=`${window.location.pathname}#/preview`;return e.jsxs(Rt,{children:[e.jsxs(Kt,{children:[e.jsxs(Mt,{href:"#/admin",children:[e.jsx("span",{children:e.jsx(b,{name:"sparkles",size:18})}),e.jsx("span",{children:"Portfolio Admin"})]}),e.jsx(ae,{$tone:t.status==="online"?"ok":"muted","data-optional":!0,children:t.status==="online"?`@${t.login}`:"Local only"}),e.jsx(P,{mode:"wait",initial:!1,children:e.jsx(k.div,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},children:e.jsxs(ae,{$tone:l.dirty?"warn":"muted",children:[e.jsx(Ot,{animate:l.dirty?{scale:[1,1.5,1]}:void 0,transition:{duration:1.4,repeat:1/0}}),l.dirty?"Unpublished changes":"Up to date"]})},l.dirty?"dirty":"clean")}),e.jsx(It,{}),e.jsxs(Ut,{children:[e.jsxs(w,{size:"sm",variant:"subtle",onClick:()=>h(f=>!f),"aria-pressed":u,children:[e.jsx(b,{name:"eye"})," ",e.jsx("span",{className:"label",children:u?"Hide preview":"Live preview"})]}),e.jsxs(ve,{size:"sm",variant:"subtle",href:y,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(b,{name:"external"})," ",e.jsx("span",{className:"label",children:"Open"})]}),e.jsx(w,{size:"sm",variant:"subtle",onClick:p,"aria-label":"Toggle theme",children:e.jsx(b,{name:o==="dark"?"sun":"moon"})}),t.status==="online"?e.jsxs(e.Fragment,{children:[e.jsxs(w,{size:"sm",variant:"primary",disabled:!l.dirty,onClick:()=>c(!0),title:"Publish (Ctrl/⌘ + S)",children:[e.jsx(b,{name:"save"})," ",e.jsx("span",{className:"label",children:"Publish"})]}),e.jsx(w,{size:"sm",variant:"subtle",onClick:n,"aria-label":"Sign out",children:e.jsx(b,{name:"logout"})})]}):e.jsxs(w,{size:"sm",variant:"primary",onClick:n,children:[e.jsx(b,{name:"lock"})," ",e.jsx("span",{className:"label",children:"Sign in to publish"})]})]})]}),e.jsxs(Bt,{$preview:u,children:[e.jsx(Nt,{"aria-label":"Admin sections",children:j.map((f,$)=>e.jsxs("div",{style:{display:"contents"},children:[e.jsx(Ft,{style:$===0?{marginTop:0}:void 0,children:f}),H.filter(S=>S.group===f).map(S=>e.jsxs(Ht,{$active:S.id===m.id,onClick:()=>$e(`/admin/${S.id}`),children:[S.id===m.id&&e.jsx(Gt,{layoutId:"admin-nav",transition:{type:"spring",stiffness:420,damping:34}}),e.jsx("span",{children:S.icon}),e.jsx("span",{children:S.label})]},S.id))]},f))}),e.jsx(Jt,{children:e.jsxs(_t,{children:[e.jsx(P,{children:l.restoredDraft&&e.jsxs(Yt,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[e.jsx("span",{children:"We restored the unpublished changes from your last visit."}),e.jsxs("span",{style:{display:"flex",gap:8},children:[e.jsx(w,{size:"sm",variant:"subtle",onClick:l.dismissRestoredNotice,children:"Keep editing"}),e.jsx(w,{size:"sm",variant:"danger",onClick:l.discard,children:"Discard them"})]})]})}),e.jsx(P,{mode:"wait",children:e.jsxs(k.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3,ease:M.out},children:[e.jsxs(Vt,{children:[e.jsxs("h1",{children:[e.jsx("span",{children:m.icon}),m.label]}),e.jsx("p",{children:m.description})]}),m.render({editor:l,uploader:r})]},m.id)})]})}),e.jsx(P,{children:u&&e.jsx(qt,{initial:{opacity:0,x:40},animate:{opacity:1,x:0},exit:{opacity:0,x:40},children:e.jsx("iframe",{title:"Live preview",src:y})})})]}),e.jsx(qe,{open:g,editor:l,onClose:()=>c(!1)})]})}const Zt=s.div`
  position: relative;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 24px;
  overflow: hidden;
  isolation: isolate;
`,le=s(k.div)`
  position: absolute;
  z-index: -1;
  width: 520px;
  aspect-ratio: 1;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
`,ei=s(k.form)`
  width: min(460px, 100%);
  padding: clamp(24px, 5vw, 40px);
  border-radius: 28px;
  background: var(--surface);
  border: 1px solid ${d.border};
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-lg);
  display: grid;
  gap: 20px;
`,ti=s.div`
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  color: #fff;
  background: ${q.brand};
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.45);
`,ii=s.h1`
  font-size: 1.8rem;
`,ni=s.p`
  font-size: 0.92rem;
  color: ${d.textMuted};
`,ri=s(k.p)`
  padding: 10px 14px;
  font-size: 0.88rem;
  border-radius: ${v.sm};
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
`,si=s.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  cursor: pointer;
`,oi=s.details`
  font-size: 0.86rem;
  color: ${d.textMuted};

  summary {
    cursor: pointer;
    font-weight: 600;
    color: ${d.text};
  }

  ol {
    margin: 10px 0 0 18px;
    display: grid;
    gap: 6px;
  }

  a {
    color: ${d.primary};
  }

  code {
    font-size: 0.8rem;
  }
`,ai=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  color: ${d.textMuted};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${d.border};
  }
`,de=s.a`
  justify-self: center;
  font-size: 0.85rem;
  color: ${d.textMuted};
`;function li({checking:t,error:i,onSignIn:n,onOffline:r}){const[a,l]=x.useState(""),[o,p]=x.useState(!1),{owner:g,name:c}=Se.repository,u=h=>{h.preventDefault(),a.trim()&&n(a,o)};return e.jsxs(Zt,{children:[e.jsx(le,{style:{background:"#6366f1",top:"-10%",left:"-10%"},animate:{x:[0,60,0]},transition:{duration:14,repeat:1/0}}),e.jsx(le,{style:{background:"#ec4899",bottom:"-20%",right:"-10%"},animate:{y:[0,-60,0]},transition:{duration:16,repeat:1/0}}),e.jsxs(ei,{onSubmit:u,initial:{opacity:0,y:30,scale:.97},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:M.out},children:[e.jsx(ti,{children:e.jsx(b,{name:"lock",size:24})}),e.jsxs("div",{children:[e.jsx(ii,{children:e.jsx(Ce,{children:"Admin panel"})}),e.jsxs(ni,{children:["Sign in with a GitHub token to edit and publish your portfolio. Changes are committed to"," ",e.jsxs("code",{children:[g,"/",c]})," ","and deployed automatically."]})]}),e.jsx(P,{children:i&&e.jsx(ri,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:i})}),e.jsx(L,{label:"GitHub personal access token",htmlFor:"token",children:e.jsx(I,{id:"token",type:"password",autoComplete:"off",placeholder:"github_pat_…",value:a,onChange:h=>l(h.target.value)})}),e.jsxs(si,{children:[e.jsx("input",{type:"checkbox",checked:o,onChange:h=>p(h.target.checked)}),"Remember on this device"]}),e.jsxs(w,{type:"submit",variant:"primary",disabled:t||!a.trim(),children:[t?"Verifying…":"Sign in"," ",e.jsx(b,{name:"arrowRight"})]}),e.jsxs(oi,{children:[e.jsx("summary",{children:"How do I get a token?"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Open"," ",e.jsx("a",{href:"https://github.com/settings/personal-access-tokens/new",target:"_blank",rel:"noopener noreferrer",children:"GitHub → Fine-grained tokens"}),"."]}),e.jsxs("li",{children:["Under ",e.jsx("em",{children:"Repository access"})," choose ",e.jsx("em",{children:"Only select repositories"})," →"," ",e.jsx("code",{children:c}),"."]}),e.jsxs("li",{children:["Under ",e.jsx("em",{children:"Permissions → Contents"})," choose ",e.jsx("em",{children:"Read and write"}),"."]}),e.jsx("li",{children:"Generate, copy and paste it above. It is stored only in this browser."})]})]}),e.jsx(ai,{children:"or"}),e.jsx(w,{variant:"subtle",onClick:r,children:"Edit locally without publishing"}),e.jsx(de,{href:"#/",children:"← Back to portfolio"}),e.jsx(de,{href:ce,target:"_blank",rel:"noopener noreferrer",children:"View repository"})]})]})}const di=t=>t instanceof Ae?t.isUnauthorized?"GitHub rejected this token. Check that it is valid and not expired.":t.status===404?"Repository not found — does this token have access to it?":`GitHub error: ${t.message}`:t instanceof Error?t.message:"Something went wrong.";function ci(){const[t,i]=x.useState(()=>R.get()?{status:"checking"}:{status:"signed-out"}),n=x.useCallback(async(o,p)=>{i({status:"checking"});try{const g=Te(o),{login:c,canPush:u}=await g.verifyAccess();if(!u)throw new Error(`@${c} does not have write access to the repository.`);p!==void 0&&R.set(o,p),i({status:"online",login:c,repository:Ee(g)})}catch(g){R.clear(),i({status:"signed-out",error:di(g)})}},[]);x.useEffect(()=>{const o=R.get();o&&n(o)},[n]);const r=x.useCallback((o,p)=>n(o.trim(),p),[n]),a=x.useCallback(()=>{R.clear(),i({status:"signed-out"})},[]),l=x.useCallback(()=>i({status:"offline"}),[]);return{session:t,signIn:r,signOut:a,workOffline:l}}function mi({panelId:t}){const{session:i,signIn:n,signOut:r,workOffline:a}=ci();return e.jsx(Ge,{children:i.status==="online"||i.status==="offline"?e.jsx(Qt,{session:i,panelId:t,onSignOut:r}):e.jsx(li,{checking:i.status==="checking",error:i.status==="signed-out"?i.error:void 0,onSignIn:n,onOffline:a})})}export{mi as default};

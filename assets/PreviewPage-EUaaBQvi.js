import{r as e,j as t}from"./motion-GIgwSgjC.js";import{d}from"./styled-BR92RCo_.js";import{h as o,P as p,r as f,g as m}from"./index-C12Z6ODy.js";import{p as r}from"./services-CrHTAzk8.js";import"./react-DxhCWetE.js";const x=d.a`
  position: fixed;
  left: 50%;
  bottom: 18px;
  z-index: 70;
  translate: -50% 0;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  border-radius: ${f.pill};
  background: ${m.brand};
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.45);
`;function w(){const[n,a]=e.useState(()=>r.load()??o);e.useEffect(()=>r.subscribe(s=>a(s??o)),[]);const i=window.self!==window.top;return t.jsxs(t.Fragment,{children:[t.jsx(p,{content:n}),!i&&t.jsx(x,{href:"#/admin",children:"Preview · back to admin"})]})}export{w as default};

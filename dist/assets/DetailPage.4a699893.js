import{_ as i,h as c,a as n,b as p,i as l}from"./index.1a115356.js";import{r as s,c as d,k as u,j as e}from"./vendor.5d0fb879.js";const _=s.exports.lazy(()=>i(()=>import("./TodoList.41b8219e.js"),["assets/TodoList.41b8219e.js","assets/index.1a115356.js","assets/index.bd4af0f8.css","assets/vendor.5d0fb879.js"])),f=()=>{const t=d(),{slug:a}=u(),o=async()=>{const r=await n(`/activity-groups/${a}`);t(p(r))};return s.exports.useEffect(()=>(o(),()=>{t(c({sortBy:l,isOpen:!1}))}),[]),e(s.exports.Suspense,{fallback:null,children:e(_,{})})};var x=s.exports.memo(f);export{x as default};

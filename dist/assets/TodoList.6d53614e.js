import{_ as d,h as u,c as _,l as f,m as y,n as m,o as E,i as T}from"./index.9a3c40e3.js";import{r,d as p,c as h,j as i}from"./vendor.b30708ff.js";const v=r.exports.lazy(()=>d(()=>import("./TodoCard.669e8dcd.js"),["assets/TodoCard.669e8dcd.js","assets/Indicator.a2721961.js","assets/vendor.b30708ff.js","assets/Trash.aba55a57.js","assets/index.9a3c40e3.js","assets/index.8a4398f2.css","assets/modalAlertAction.6cec7de2.js"])),x=r.exports.lazy(()=>d(()=>import("./Figures.78fc2aa1.js"),["assets/Figures.78fc2aa1.js","assets/vendor.b30708ff.js"])),O=()=>{const o=p(t=>t.selectedActivity.todo_items),a=p(t=>t.sortOptions),c=h(),l=()=>{c(_({isOpen:!0,titleForm:"Tambah List Item",priority:"Very High"}))},n=t=>{switch(t.type){case T:return o.sort((e,s)=>s.id-e.id);case E:return o.sort((e,s)=>e.id-s.id);case m:return o.sort((e,s)=>e.title.toUpperCase()<s.title.toUpperCase()?-1:1);case y:return o.sort((e,s)=>e.title.toUpperCase()<s.title.toUpperCase()?1:-1);case f:return o.sort((e,s)=>s.is_active-e.is_active);default:return o}};return r.exports.useEffect(()=>(n({type:a.sortBy}),()=>{c(u({isOpen:!1}))}),[a.sortBy]),o.length>0?i("div",{className:"flex flex-col w-full space-y-2 md:space-y-3",children:i(r.exports.Suspense,{fallback:!1,children:o.map(t=>i(v,{id:t.id,title:t.title,priority:t.priority,is_active:t.is_active},t.id))})}):i(r.exports.Suspense,{fallback:null,children:i(x,{onClick:l,dataCy:"todo-empty-state",src:"https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"})})};export{O as default};
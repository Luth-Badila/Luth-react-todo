var _=Object.defineProperty,b=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&u(t,a,e[a]);if(d)for(var a of d(e))y.call(e,a)&&u(t,a,e[a]);return t},f=(t,e)=>b(t,g(e));var x=(t,e)=>{var a={};for(var o in t)p.call(t,o)&&e.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&d)for(var o of d(t))e.indexOf(o)<0&&y.call(t,o)&&(a[o]=t[o]);return a};import{c as n,_ as c,B as k,e as D,f as j,a as F,b as I}from"./index.e81f9d47.js";import{r as l,j as i,c as v,d as m,a as r}from"./vendor.0cb41a1d.js";const P=e=>{var t=x(e,[]);return i("svg",f(h({},t),{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:i("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}))};var A=l.exports.memo(P);const E=()=>{const t=v(),e=m(o=>o.modalForm),a=()=>{t(n({isOpen:!1,isSubmitted:!1,title:"",priority:"",isDropDownOpen:!1,is_active:!1}))};return r("div",{className:"flex items-center justify-between w-full h-24 px-4 lg:px-8",children:[i("div",{"data-cy":"modal-add-title",className:"text-xl font-semibold text-fontColor-900",children:e.titleForm}),i(A,{"data-cy":"modal-add-close-button",onClick:a})]})};var L=l.exports.memo(E);const M=l.exports.lazy(()=>c(()=>import("./ButtonPriority.61c1947d.js"),["assets/ButtonPriority.61c1947d.js","assets/index.e81f9d47.js","assets/index.3e634321.css","assets/vendor.0cb41a1d.js","assets/Indicator.5dca64f2.js"])),N=l.exports.lazy(()=>c(()=>import("./Input.4fda1786.js"),["assets/Input.4fda1786.js","assets/index.e81f9d47.js","assets/index.3e634321.css","assets/vendor.0cb41a1d.js"])),S=l.exports.lazy(()=>c(()=>import("./PriorityDD.2a3a06c2.js"),["assets/PriorityDD.2a3a06c2.js","assets/index.e81f9d47.js","assets/index.3e634321.css","assets/vendor.0cb41a1d.js","assets/Indicator.5dca64f2.js"])),O=()=>{const t=m(s=>s.modalForm),e=m(s=>s.selectedActivity),a=v(),o=async()=>{const s=await F(`/activity-groups/${e.id}`);a(I(s))},w=async()=>{const s={title:t.title,priority:t.priority==="Medium"?"normal":t.priority.replace(" ","-").toLowerCase(),activity_group_id:e.id};!t.title||(t.titleForm==="Tambah List Item"?(await D("/todo-items",s),await o(),a(n({isOpen:!1,isDropDownItem:!1,title:"",priority:"Very High"}))):(await j("/todo-items/"+t.id,s),await o(),a(n({isOpen:!1,isDropDownItem:!1,title:"",priority:"Very High"}))))};return r("div",{"data-cy":"modal-add",onClick:s=>s.stopPropagation(),className:"flex flex-col justify-between h-72 md:h-96 w-10/12 md:w-auto aspect-video rounded-lg divide-y translate-y-[-40%] divide-neutral-300 bg-white",children:[i(L,{}),r("div",{className:"flex flex-col justify-evenly w-full h-[80%] py-2 lg:py-4 px-4 lg:px-8 space-y-2 lg:space-y-4",children:[r("section",{children:[i("label",{"data-cy":"modal-add-name-title",htmlFor:"item-name",className:"uppercase text-neutral-800",children:"NAMA LIST ITEM"}),i(l.exports.Suspense,{fallback:null,children:i(N,{})})]}),r("section",{children:[i("div",{"data-cy":"modal-add-priority-title",className:"tracking-wider uppercase text-neutral-900",children:"PRIORITY"}),i(l.exports.Suspense,{fallback:null,children:i(M,{})}),i(l.exports.Suspense,{fallback:null,children:i(S,{})})]})]}),i(k,{onClick:w,"data-cy":"modal-add-save-button",disabled:!(t.title.length>0),className:`w-1/3 md:w-1/4 mr-2 mb-2 md:mr-4 md:mb-4 ml-auto px-4 md:px-8 bg-sky-500 text-white ${t.title.length>0?"opacity-100":"opacity-50"}`,children:"Simpan"})]})};var R=l.exports.memo(O);export{R as default};

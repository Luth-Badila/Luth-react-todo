var x=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var d=(e,t,a)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,l=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&d(e,a,t[a]);if(n)for(var a of n(t))_.call(t,a)&&d(e,a,t[a]);return e},m=(e,t)=>w(e,A(t));import{_ as j,e as b,a as y,s as p,g as P}from"./index.52a13353.js";import{T as D}from"./Trash.5728e1f3.js";import{s as N}from"./modalAlertAction.91845cb9.js";import{r as c,c as o,e as T,a as v,j as s,d as C}from"./vendor.0cb41a1d.js";const z=({id:e,title:t,created_at:a})=>{const i=new Intl.DateTimeFormat("id-ID",{dateStyle:"long"}).format(new Date(a)),u=o(),h=T(),g=()=>u(N({id:e,title:t,isOpen:!0,type:"Activity"}));return v("div",{onClick:()=>h("/detail/"+e),"data-cy":"activity-item",className:"flex flex-col items-center justify-between min-h-[14rem] rounded md:cursor-pointer shadow bg-white",children:[s("div",{className:"w-full h-full p-2 md:p-4",children:s("h3",{"data-cy":"activity-item-title",children:t})}),v("div",{className:"flex items-center justify-between w-full p-2 md:p-4",children:[s("p",{"data-cy":"activity-item-date",children:i}),s(D,{onClick:f=>{f.stopPropagation(),g()},"data-cy":"activity-item-delete-button"})]})]})};var E=c.exports.memo(z);const I=c.exports.lazy(()=>j(()=>import("./Figures.eb1389e1.js"),["assets/Figures.eb1389e1.js","assets/vendor.0cb41a1d.js"])),F=()=>{const e=C(i=>i.activity.activity),t=o(),a=async()=>{const i=await y("/activity-groups?email=rizki.maulana@skyshi.com");t(p(i.data))},r=async()=>{const i=P();await b("/activity-groups",i),await a()};return e.length>0?s("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 flex-[1_1_auto]",children:e.map(i=>c.exports.createElement(E,m(l({},i),{key:i.id})))}):s(c.exports.Suspense,{fallback:null,children:s(I,{"data-cy":"activity-empty-state",onClick:r,src:"https://ik.imagekit.io/mlnzyx/devcode-todo/new-activity_OP7NGluCh3.webp?updatedAt=1641870436456"})})};var L=c.exports.memo(F);const O=()=>{const e=o(),t=async()=>{const a=await y("/activity-groups?email=rizki.maulana@skyshi.com");e(p(a.data))};return c.exports.useEffect(()=>{t()},[]),s(L,{})};var q=c.exports.memo(O);export{q as default};
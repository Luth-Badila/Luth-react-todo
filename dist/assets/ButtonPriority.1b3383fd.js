import{c as i}from"./index.9a3c40e3.js";import{I as l}from"./Indicator.a2721961.js";import{r as a,d as c,c as d,a as m,j as e}from"./vendor.b30708ff.js";const p=t=>{const r=(t==="normal"?"medium":t).replace("-"," ").split(" ");for(var o=0;o<r.length;o++)r[o]=r[o].charAt(0).toUpperCase()+r[o].slice(1);return r.join(" ")},x=()=>{const t=c(s=>s.modalForm),r=d(),o=a.exports.useCallback(()=>{const s={isDropDownOpen:!t.isDropDownOpen};r(i(s))},[]),n=p(t.priority);return m("button",{onClick:o,"data-cy":"modal-add-priority-dropdown",className:"flex items-center justify-between mt-2 lg:mt-4 px-4 lg:px-6 w-40 lg:w-48 h-12 lg:h-14 rounded-md transition outline-none border border-neutral-400 hover:border-primary-500 focus:border-primary-500",children:[e(l,{type:t.priority}),e("span",{className:"text-xs md:text-sm xl:text-base font-semibold",children:n}),e("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",className:"text-xl",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z"})})]})};var f=a.exports.memo(x);export{f as default};

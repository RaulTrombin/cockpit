import{d as a,u as c,r as i,h as l,w as r,b as o,o as s,c as m,i as d,j as _,k as h,n as p}from"./index-BFtXDR0v.js";const w=a({__name:"BaseCommIndicator",setup(f){const e=c();return(u,V)=>{const t=i("FontAwesomeIcon"),n=l("tooltip");return r((s(),m("div",{class:p(["relative",o(e).isVehicleOnline?"text-slate-50":"text-gray-700"])},[d(t,{icon:"fa-solid fa-arrow-right-arrow-left",size:"xl"}),o(e).isVehicleOnline?h("",!0):(s(),_(t,{key:0,icon:"fa-slash",size:"xl",class:"absolute -left-1"}))],2)),[[n,o(e).isVehicleOnline?"Vehicle connected":"Vehicle disconnected"]])}}});export{w as default};

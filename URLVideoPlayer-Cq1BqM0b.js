import{d as f,bl as c,b as e,aE as v,q as y,v as g,aI as x,o as p,c as r,a as i,i as a,a1 as s,ag as b,aU as w,a4 as m,ah as C,bm as S,bn as U,aP as _,bG as d,bo as k,a2 as B,al as I,ao as M,ap as P,aq as E}from"./index-BFtXDR0v.js";const O=n=>(M("data-v-6ed46a9d"),n=n(),P(),n),T={class:"w-full h-full"},h=["autoplay","controls","loop","muted"],L=["src"],N=O(()=>i("span",{class:"text-xs font-semibold leading-3 text-slate-600"},"Fit style",-1)),R=f({__name:"URLVideoPlayer",props:{widget:{}},setup(n){c(V=>({"1ee7820f":e(o).options.fitStyle}));const o=v(n).widget,u=y();return g(o.value.options,()=>{console.log(o.value.options.source),u.value.pause(),u.value.play()}),x(()=>{Object.keys(o.value.options).length===0&&(o.value.options={source:"",fitStyle:"cover",autoplay:!0,controls:!0,loop:!0,muted:!0})}),(V,l)=>(p(),r("div",T,[(p(),r("video",{ref_key:"videoPlayer",ref:u,key:e(o).options.source,autoplay:e(o).options.autoplay,controls:e(o).options.controls,loop:e(o).options.loop,muted:e(o).options.muted},[i("source",{src:e(o).options.source},null,8,L)],8,h)),a(I,{modelValue:e(o).managerVars.configMenuOpen,"onUpdate:modelValue":l[8]||(l[8]=t=>e(o).managerVars.configMenuOpen=t),"min-width":"400","max-width":"35%"},{default:s(()=>[a(b,{class:"pa-2"},{default:s(()=>[a(w,null,{default:s(()=>[m("Video Source")]),_:1}),a(C,null,{default:s(()=>[a(S,{label:"Video Source",variant:"underlined","model-value":e(o).options.source,outlined:"",onChange:l[0]||(l[0]=t=>e(o).options.source=t.srcElement.value),onKeydown:l[1]||(l[1]=U(t=>e(o).options.source=t.srcElement.value,["enter"]))},null,8,["model-value"]),i("div",null,[N,a(_,{modelValue:e(o).options.fitStyle,"onUpdate:modelValue":l[2]||(l[2]=t=>e(o).options.fitStyle=t),options:["cover","fill","contain"],variant:"outlined",class:"max-w-[144px]"},null,8,["modelValue"]),a(d,{modelValue:e(o).options.autoplay,"onUpdate:modelValue":l[3]||(l[3]=t=>e(o).options.autoplay=t),label:"Autoplay","hide-details":""},null,8,["modelValue"]),a(d,{modelValue:e(o).options.controls,"onUpdate:modelValue":l[4]||(l[4]=t=>e(o).options.controls=t),label:"Controls","hide-details":""},null,8,["modelValue"]),a(d,{modelValue:e(o).options.loop,"onUpdate:modelValue":l[5]||(l[5]=t=>e(o).options.loop=t),label:"Loop","hide-details":""},null,8,["modelValue"]),a(d,{modelValue:e(o).options.muted,"onUpdate:modelValue":l[6]||(l[6]=t=>e(o).options.muted=t),label:"Muted","hide-details":""},null,8,["modelValue"])])]),_:1}),a(k,null,{default:s(()=>[a(B,{color:"primary",onClick:l[7]||(l[7]=t=>e(o).managerVars.configMenuOpen=!1)},{default:s(()=>[m("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}}),D=E(R,[["__scopeId","data-v-6ed46a9d"]]);export{D as default};

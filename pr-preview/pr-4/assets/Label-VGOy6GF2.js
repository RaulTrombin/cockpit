import{c as m,y as g,J as h,w as b,o as f,au as v,h as x,av as w,aw as V,l as W,m as y,n as F,t as M,q as t,O as _,v as S,_ as k}from"./index-ZIaq9set.js";const C=m({__name:"Label",props:{miniWidget:{}},setup(u){const i=g(),a=u,e=h(a).miniWidget;return b(()=>i.miniWidgetManagerVars(e.value.hash).configMenuOpen,o=>{o===!0&&(i.showElementPropsDrawer(e.value.hash),setTimeout(()=>{i.miniWidgetManagerVars(e.value.hash).configMenuOpen=!1},200))},{immediate:!0,deep:!0}),f(()=>{var o;(!a.miniWidget.options||Object.keys(a.miniWidget.options).length===0)&&(e.value.isCustomElement=!0,i.updateElementOptions(a.miniWidget.hash,{text:"Label",layout:{textSize:20,weight:"normal",decoration:"none",color:"#FFFFFF",align:"center"},variableType:"string",actionVariable:void 0})),a.miniWidget.options.actionVariable&&(v((o=a.miniWidget.options.actionVariable)==null?void 0:o.name,n=>{e.value.options.text=n}),e.value.options.text=i.getMiniWidgetLastValue(e.value.hash))}),x(()=>{e.value.options.actionVariable&&(w(e.value.options.actionVariable.name),V(e.value.options.actionVariable.id))}),(o,n)=>{var s,l,r,p,c,d;return W(),y("div",{class:S(["label-container",((s=t(i).elementToShowOnDrawer)==null?void 0:s.hash)===t(e).hash&&t(i).editingMode?"bg-[#00000010] ":"border-0"]),onClick:n[0]||(n[0]=O=>t(i).editingMode&&t(i).showElementPropsDrawer(t(e).hash))},[F("div",{style:_({width:"100%",fontSize:`${(l=t(e).options.layout)==null?void 0:l.textSize}px`||"35px",fontWeight:(r=t(e).options.layout)==null?void 0:r.weight,textDecoration:(p=t(e).options.layout)==null?void 0:p.decoration,color:((c=t(e).options.layout)==null?void 0:c.color)||"#FFFFFF",textAlign:((d=t(e).options.layout)==null?void 0:d.align)||"center",margin:"1px"})},M(t(e).options.text||"Label"),5)],2)}}}),D=k(C,[["__scopeId","data-v-ecf3bfab"]]);export{D as default};

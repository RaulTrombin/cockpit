import{c as C,y as f,J as k,w as b,o as w,l as x,m as M,n as W,H as S,N as z,Q as B,t as O,q as e,O as v,a5 as V,v as F,at as E}from"./index-CVjIrIXa.js";const A=C({__name:"Button",props:{miniWidget:{}},setup(y){const o=f(),u=y,t=k(u).miniWidget,h=()=>{o.editingMode||E(`http-request-action (${t.value.options.cockpitAction.name})`)};return b(()=>o.miniWidgetManagerVars(t.value.hash).configMenuOpen,a=>{a===!0&&(o.showElementPropsDrawer(t.value.hash),setTimeout(()=>{o.miniWidgetManagerVars(t.value.hash).configMenuOpen=!1},200))},{immediate:!0,deep:!0}),w(()=>{var a,n,i,s,l,r;(!u.miniWidget.options||Object.keys(u.miniWidget.options).length===0)&&(t.value.isCustomElement=!0,o.updateElementOptions(u.miniWidget.hash,{layout:{align:((a=t.value.options.layout)==null?void 0:a.align)||"center",backgroundColor:((n=t.value.options.layout)==null?void 0:n.backgroundColor)||"#FFFFFF33",label:((i=t.value.options.layout)==null?void 0:i.label)||"Click Here",buttonSize:((s=t.value.options.layout)==null?void 0:s.buttonSize)||"default",textColor:((l=t.value.options.layout)==null?void 0:l.textColor)||"#FFFFFF",variant:((r=t.value.options.layout)==null?void 0:r.variant)||"elevated"},cockpitAction:t.value.options.cockpitAction||""}))}),(a,n)=>{var i,s,l,r,p,d,g,m;return x(),M("div",{class:F(["flex items-center",((i=e(o).elementToShowOnDrawer)==null?void 0:i.hash)===e(t).hash&&e(o).editingMode?"bg-[#00000010] ":"border-0"]),style:v({justifyContent:(s=e(t).options.layout)==null?void 0:s.align}),onClick:n[0]||(n[0]=c=>e(o).editingMode&&e(o).showElementPropsDrawer(e(t).hash))},[W("div",{class:F(e(o).editingMode?"pointer-events-none":"pointer-events-auto")},[S(V,{size:(l=e(t).options.layout)==null?void 0:l.buttonSize,variant:(r=e(t).options.layout)==null?void 0:r.variant,style:v({color:((p=e(t).options.layout)==null?void 0:p.textColor)||"#FFFFFF",backgroundColor:((d=e(t).options.layout)==null?void 0:d.variant)!=="text"&&((g=e(t).options.layout)==null?void 0:g.variant)!=="outlined"?((m=e(t).options.layout)==null?void 0:m.backgroundColor)||"#FFFFFF33":"transparent"}),onClick:h},{default:z(()=>{var c;return[B(O(((c=e(t).options.layout)==null?void 0:c.label)||"Button"),1)]}),_:1},8,["size","variant","style"])],2)],6)}}});export{A as default};

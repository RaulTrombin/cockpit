import{c as V,y as b,J as f,r as w,w as y,o as F,au as M,h as W,av as C,aw as k,l as d,m,H as x,q as t,v as g,a4 as S,t as A,s as D,ax as E}from"./index-ZIaq9set.js";const O={key:0,class:"ml-3 mb-[3px] whitespace-nowrap"},_=V({__name:"Switch",props:{miniWidget:{}},setup(h){const a=b(),s=h,e=f(s).miniWidget,o=w(!0);y(()=>a.miniWidgetManagerVars(e.value.hash).configMenuOpen,n=>{n===!0&&(a.showElementPropsDrawer(e.value.hash),setTimeout(()=>{a.miniWidgetManagerVars(e.value.hash).configMenuOpen=!1},200))},{immediate:!0,deep:!0});const v=()=>{a.editingMode||e.value.options.actionVariable&&(a.setMiniWidgetLastValue(e.value.hash,o.value),E(e.value.options.actionVariable.name,o.value))};return F(()=>{var n,i,l;!s.miniWidget.options||Object.keys(s.miniWidget.options).length===0?(e.value.isCustomElement=!0,a.updateElementOptions(s.miniWidget.hash,{layout:{align:((n=e.value.options.layout)==null?void 0:n.align)||"center",color:((i=e.value.options.layout)==null?void 0:i.color)||"#FFFFFF",label:((l=e.value.options.layout)==null?void 0:l.label)||""},variableType:"boolean",actionVariable:void 0,toggled:!0}),o.value=!0):e.value.options.actionVariable&&(M(e.value.options.actionVariable.name,r=>{o.value=r}),o.value=a.getMiniWidgetLastValue(e.value.hash))}),W(()=>{e.value.options.actionVariable&&(C(e.value.options.actionVariable.name),k(e.value.options.actionVariable.id))}),(n,i)=>{var l,r,u,c;return d(),m("div",{class:g(["flex items-center h-[30px] px-4",((l=t(a).elementToShowOnDrawer)==null?void 0:l.hash)===t(e).hash&&t(a).editingMode?"bg-[#00000010] ":"border-0"]),onClick:i[1]||(i[1]=p=>t(a).editingMode&&t(a).showElementPropsDrawer(t(e).hash))},[x(S,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=p=>o.value=p),"hide-details":"",color:((r=t(e).options.layout)==null?void 0:r.color)||"#FFFFFF",class:g([{"pointer-events-none":t(a).editingMode},"min-w-[35px]"]),onChange:v},null,8,["modelValue","color","class"]),((u=t(e).options.layout)==null?void 0:u.label)!==""?(d(),m("p",O,A((c=t(e).options.layout)==null?void 0:c.label),1)):D("",!0)],2)}}});export{_ as default};

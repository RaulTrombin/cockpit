import{z as b,as as f,b8 as _,at as g,G as A,J as P,b9 as G,O as R,l as d,ba as E,aw as u,T as m,i as l,bb as S,bc as k,bd as D,w as C,aC as L,be as j,ar as V,bf as z,av as h,h as $,a3 as O,bg as F,bh as J,C as N,bi as Q,bj as q,Q as H,bk as K}from"./index-BFtXDR0v.js";const r=Symbol.for("vuetify:v-expansion-panel"),M=["default","accordion","inset","popout"],U=b({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>M.includes(e)},readonly:Boolean,...f(),..._(),...g(),...A()},"VExpansionPanels"),ae=P()({name:"VExpansionPanels",props:U(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;G(e,r);const{themeClasses:a}=R(e),i=d(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return E({VExpansionPanel:{color:u(e,"color"),readonly:u(e,"readonly")},VExpansionPanelTitle:{focusable:u(e,"focusable"),static:u(e,"static")}}),m(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},a.value,i.value,e.class],style:e.style},n)),{}}}),W=b({...f(),...S()},"VExpansionPanelText"),X=P()({name:"VExpansionPanelText",props:W(),setup(e,o){let{slots:n}=o;const a=k(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:v}=D(e,a.isSelected);return m(()=>l(j,{onAfterLeave:v},{default:()=>{var c;return[C(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(c=n.default)==null?void 0:c.call(n)])]),[[L,a.isSelected.value]])]}})),{}}}),I=b({color:String,expandIcon:{type:V,default:"$expand"},collapseIcon:{type:V,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...f()},"VExpansionPanelTitle"),Y=P()({name:"VExpansionPanelTitle",directives:{Ripple:z},props:I(),setup(e,o){let{slots:n}=o;const a=k(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:v}=h(e,"color"),c=d(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return m(()=>{var x;return C(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[v.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(x=n.default)==null?void 0:x.call(n,c.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(c.value):l(O,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[$("ripple"),e.ripple]])}),{}}}),Z=b({title:String,text:String,bgColor:String,...f(),...F(),...J(),...S(),...N(),...g(),...I()},"VExpansionPanel"),ne=P()({name:"VExpansionPanel",props:Z(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=Q(e,r),{backgroundColorClasses:i,backgroundColorStyles:v}=h(e,"bgColor"),{elevationClasses:c}=q(e),{roundedClasses:x}=H(e),T=d(()=>(a==null?void 0:a.disabled.value)||e.disabled),y=d(()=>a.group.items.value.reduce((s,t,p)=>(a.group.selected.value.includes(t.id)&&s.push(p),s),[])),B=d(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&y.value.some(t=>t-s===1)}),w=d(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&y.value.some(t=>t-s===-1)});return K(r,a),E({VExpansionPanelText:{eager:u(e,"eager")},VExpansionPanelTitle:{readonly:u(e,"readonly")}}),m(()=>{const s=!!(n.text||e.text),t=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":B.value,"v-expansion-panel--after-active":w.value,"v-expansion-panel--disabled":T.value},x.value,i.value,e.class],style:[v.value,e.style]},{default:()=>{var p;return[l("div",{class:["v-expansion-panel__shadow",...c.value]},null),t&&l(Y,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),s&&l(X,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(p=n.default)==null?void 0:p.call(n)]}})}),{}}});export{ae as V,ne as a,Y as b,X as c};

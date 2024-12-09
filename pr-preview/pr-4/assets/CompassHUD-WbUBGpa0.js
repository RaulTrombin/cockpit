import{c as U,y as B,K as $,M as G,Y as I,u as j,J as q,r as m,aA as J,L as K,o as Q,aB as Z,k as ee,w as V,aD as P,aF as ae,aH as te,aE as oe,l as se,m as ne,n as _,H as l,N as r,V as le,O as ie,q as s,P as re,Q as D,R as ue,a4 as k,aI as de,W as ce,F as he,aG as fe,_ as ge}from"./index-ZIaq9set.js";import{w as C}from"./index-DxaGCbJO.js";import{g as pe}from"./index-DjKJqAo0.js";import{V as we,a as ve,b as me,c as Ve}from"./VExpansionPanels-D37jQlZT.js";const Ce={class:"main"},Se=["width","height"],be=U({__name:"CompassHUD",props:{widget:{}},setup(A){const S=B(),L=$();G.registerUsage(I.heading);const T=j(),t=q(A).widget,W=m([["#FFFFFF"],["#FF2D2D"],["#0ADB0ACC"]]),X=e=>{switch(e){case-180:return"S";case-135:return"SW";case-90:return"W";case-45:return"NW";case 0:return"N";case 45:return"NE";case 90:return"E";case 135:return"SE";case 180:return"S";case 225:return"SW";case 270:return"W";case 315:return"NW";case 360:return"N";default:return`${e}°`}},c=J({yawLinesX:{}}),b=[];let x=-180;for(;x<181;)b.push(x),x+=3;K(()=>{Object.keys(t.value.options).length===0&&(t.value.options={showYawValue:!0,hudColor:W.value[0][0],useNegativeRange:!1})}),Q(()=>{b.forEach(e=>c.yawLinesX[e]=E(e)),y()});const{width:Y}=Z(),u=ee(()=>({width:t.value.size.width*Y.value,height:64})),w=m(0);let M;V(T.attitude,e=>{Math.abs(P(e.yaw-(M||0)))>.1&&(M=e.yaw,w.value=P(T.attitude.yaw))});const E=e=>{let o=-(e-w.value||0);return o<-180?o+=360:o>180&&(o-=360),-o},h=m(),F=m(),y=()=>{if(h.value===void 0||h.value===null)return;if(F.value===void 0){console.debug("Canvas context undefined!"),F.value=h.value.getContext("2d");return}const e=F.value;ae(e);const a=.5*u.value.width,o=.5*u.value.height,N=12,d=16,f=10,n=2,H=7;e.textAlign="center",e.strokeStyle="white",e.font=`bold ${N}px Arial`,e.fillStyle="white";for(const[i,R]of Object.entries(c.yawLinesX)){if(R<-90||R>90)continue;const O=2*a/Math.PI*Math.sin(fe(R)),v=a+O;if(e.beginPath(),e.moveTo(v,d+n+f+n),e.lineTo(v,o*2-N-n-H),e.lineWidth="1",Number(i)%15===0){e.lineWidth="2",e.lineTo(v,o*2-N-n);let p=Number(i);t.value.options.useNegativeRange||(p=p<0?p+360:p),e.fillText(X(Number(p)),v,o*2-n)}e.stroke()}if(t.value.options.showYawValue){e.font=`bold ${d}px Arial`;let i=Number(w.value);t.value.options.useNegativeRange||(i=i<0?i+360:i),e.fillText(`${i.toFixed(1)}°`,a,d)}e.beginPath(),e.moveTo(a,d+n+f),e.lineTo(a-.5*f,n+d+n),e.lineTo(a+.5*f,n+d+n),e.lineTo(a,d+n+f),e.closePath(),e.fill(),e.globalCompositeOperation="source-in";const g=e.createLinearGradient(0,o,u.value.width,o);g.addColorStop(.18,C(t.value.options.hudColor).alpha(0).toRgbString()),g.addColorStop(.3,C(t.value.options.hudColor).alpha(1).toRgbString()),g.addColorStop(.7,C(t.value.options.hudColor).alpha(1).toRgbString()),g.addColorStop(.82,C(t.value.options.hudColor).alpha(0).toRgbString()),e.fillStyle=g,e.fillRect(0,0,u.value.width,o*2)};V(w,()=>{b.forEach(e=>{const a=E(e);Math.abs(c.yawLinesX[e]-a)>90?c.yawLinesX[e]=a:pe.to(c.yawLinesX,{duration:2.5,ease:"elastic.out(1.2, 0.5)",[e]:a})})}),V([c,u,t.value.options],()=>{S.isWidgetVisible(t.value)&&te(()=>y())});const z=oe(h);return V(z,(e,a)=>{e&&!a&&y()}),(e,a)=>(se(),ne(he,null,[_("div",Ce,[_("canvas",{ref_key:"canvasRef",ref:h,width:u.value.width,height:u.value.height},null,8,Se)]),l(ce,{modelValue:s(S).widgetManagerVars(s(t).hash).configMenuOpen,"onUpdate:modelValue":a[3]||(a[3]=o=>s(S).widgetManagerVars(s(t).hash).configMenuOpen=o),"min-width":"400","max-width":"35%"},{default:r(()=>[l(le,{class:"px-8 pb-6 pt-2",style:ie(s(L).globalGlassMenuStyles)},{default:r(()=>[l(re,{class:"text-center"},{default:r(()=>a[4]||(a[4]=[D("HUD Compass widget config")])),_:1}),l(ue,null,{default:r(()=>[l(k,{class:"ma-1",label:"Show yaw value",color:s(t).options.showYawValue?"white":void 0,"model-value":s(t).options.showYawValue,"hide-details":"",onChange:a[0]||(a[0]=o=>s(t).options.showYawValue=!s(t).options.showYawValue)},null,8,["color","model-value"]),l(k,{class:"ma-1",label:"Use -180/+180 range",color:s(t).options.useNegativeRange?"white":void 0,"model-value":s(t).options.useNegativeRange,"hide-details":"",onChange:a[1]||(a[1]=o=>s(t).options.useNegativeRange=!s(t).options.useNegativeRange)},null,8,["color","model-value"]),l(we,null,{default:r(()=>[l(ve,{class:"bg-[#FFFFFF11] text-white mt-2"},{default:r(()=>[l(me,null,{default:r(()=>a[5]||(a[5]=[D("Color")])),_:1}),l(Ve,null,{default:r(()=>[l(de,{modelValue:s(t).options.hudColor,"onUpdate:modelValue":a[2]||(a[2]=o=>s(t).options.hudColor=o),theme:"dark",class:"ma-1 bg-[#FFFFFF11] text-white",swatches:W.value,width:"100%","show-swatches":""},null,8,["modelValue","swatches"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["style"])]),_:1},8,["modelValue"])],64))}}),Te=ge(be,[["__scopeId","data-v-246f3d78"]]);export{Te as default};

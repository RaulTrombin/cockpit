import{c as x,a0 as y,r as m,o as w,a1 as V,k as i,D as g,l as p,m as C,H as n,N as r,n as d,a2 as J,q as c,I as F,s as B,a3 as I,a4 as N,a5 as j,Q as z,a6 as D}from"./index-ZIaq9set.js";const S={class:"flex items-center justify-center mb-4 flex-col"},A=x({__name:"JoystickCommIndicator",setup(T){const t=y(),o=m(!1),s=m(!1);w(()=>{V.onJoystickUpdate(l=>{f(l)})});const f=l=>{o.value=l.size!==0},v=i(()=>o.value?t.enableForwarding?"text-slate-50":"text-yellow-500":"text-gray-700"),k=i(()=>o.value?t.enableForwarding?"Joystick connected and enabled":"Joystick connected but disabled":"Joystick disconnected"),b=i(()=>t.enableForwarding?"Joystick commands enabled":"Joystick commands paused");return(l,e)=>{const u=g("FontAwesomeIcon");return p(),C("div",null,[n(I,{text:k.value,location:"bottom"},{activator:r(({props:a})=>[d("div",J(a,{class:["relative cursor-pointer",v.value],onClick:e[0]||(e[0]=U=>s.value=!0)}),[n(u,{icon:"fa-solid fa-gamepad",size:"xl"}),!o.value||!c(t).enableForwarding?(p(),F(u,{key:0,icon:"fa-solid fa-slash",size:"xl",class:"absolute left-0"})):B("",!0)],16)]),_:1},8,["text"]),n(D,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=a=>s.value=a),title:o.value?"Joystick connected":"Joystick disconnected","max-width":"400px",variant:"text-only"},{content:r(()=>[d("div",S,[e[4]||(e[4]=d("span",{class:"mr-2"},null,-1)),n(N,{modelValue:c(t).enableForwarding,"onUpdate:modelValue":e[1]||(e[1]=a=>c(t).enableForwarding=a),"hide-details":"",label:b.value,color:"white",disabled:!o.value},null,8,["modelValue","label","disabled"])])]),actions:r(()=>[n(j,{onClick:e[2]||(e[2]=a=>s.value=!1)},{default:r(()=>e[5]||(e[5]=[z("Close")])),_:1})]),_:1},8,["modelValue","title"])])}}});export{A as default};

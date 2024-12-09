import{d as k,u as T,a as I,w as i,A as u,b as m,c as C,e as E,r as h,o as j,f as D,h as H,i as L,j as S,k as N,l as f,m as x,n as e,t as c,F as M,p as U,q as b,s as $,v as F,x as q,_ as z}from"./index-CVjIrIXa.js";const O=k("vehicle-alerter",()=>{const s=T(),t=I();i(s.statusText,()=>{s.statusText.text&&t.pushAlert(new u(s.statusText.severity,s.statusText.text))}),i(()=>s.mode,()=>t.pushAlert(new u(m.Info,`Vehicle mode changed to ${s.mode}.`))),i(()=>s.isArmed,n=>{const o=n?"armed":"disarmed";t.pushAlert(new u(m.Info,`Vehicle ${o}`))}),i(()=>s.isVehicleOnline,n=>{const o=n?m.Success:m.Error,l=n?"connected":"disconnected";t.pushAlert(new u(o,`Vehicle ${l}`))})}),P={class:"mx-1 my-1.5 w-[500px]"},R={class:"mx-1 overflow-hidden text-xl font-medium text-gray-100 text-ellipsis"},G={class:"flex flex-col justify-center mx-1 font-mono text-xs font-semibold leading-3 text-right text-gray-100"},J=["title"],K={class:"mx-1 overflow-hidden text-lg font-medium leading-none text-ellipsis"},Q={class:"flex flex-col justify-center mx-1 font-mono text-xs font-semibold leading-3 text-right text-gray-100"},W={key:0,class:"h-px mx-1 mb-2 bg-slate-50/30"},X=10,Y=C({__name:"Alerter",setup(s){O();const t=I(),n=E({interval:1e3}),o=r=>q(r,"HH:mm:ss"),l=h(t.alerts[0]);let _;j(()=>{_=setInterval(()=>{var a;const r=new Date(n.value);if(D(r,((a=t.alerts.last())==null?void 0:a.time_created)||r)>X){l.value=new u(m.Info,"No recent alerts.");return}l.value=t.alerts.last()},1e3)}),H(()=>{clearInterval(_)});const[p,v]=L(),g=h(),A=S(g),w=h(),y=S(w);i(A,(r,d)=>{d&&!r&&setTimeout(()=>{!y.value&&!A.value&&p.value&&v()},250),!p.value&&v()}),i(y,(r,d)=>{d&&!r&&v()});const B=N(()=>[...t.sortedAlerts].reverse());return(r,d)=>(f(),x("div",P,[e("div",{ref_key:"currentAlertBar",ref:g,class:"flex items-center justify-between p-1 overflow-hidden rounded cursor-pointer select-none whitespace-nowrap bg-slate-800/75"},[e("p",R,c(l.value.message),1),e("div",G,[e("p",null,c(o(l.value.time_created||new Date)),1),e("p",null,c(l.value.level.toUpperCase()),1)])],512),e("div",{ref_key:"expandedAlertsBar",ref:w,class:F(["expanded-alerts-bar absolute w-full p-2 transition-all rounded top-12 max-h-[30vh] overflow-y-auto text-slate-50 scrollbar-hide bg-slate-800/75 select-none flex flex-col",{"opacity-0 invisible":!b(p)}])},[(f(!0),x(M,null,U(B.value,(a,V)=>(f(),x("div",{key:a.time_created.toISOString()},[e("div",{title:a.message,class:"flex items-center justify-between whitespace-nowrap"},[e("p",K,c(a.message),1),e("div",Q,[e("p",null,c(o(a.time_created||new Date)),1),e("p",null,c(a.level.toUpperCase()),1)])],8,J),V!==b(t).alerts.length-1?(f(),x("div",W)):$("",!0)]))),128))],2)]))}}),ee=z(Y,[["__scopeId","data-v-d73840a1"]]);export{ee as default};

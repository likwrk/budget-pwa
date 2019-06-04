var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function p(){return l(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}let f;function y(t){f=t}const h=[],g=Promise.resolve();let $=!1;const b=[],w=[],v=[];function D(t){w.push(t)}function S(){const t=new Set;do{for(;h.length;){const t=h.shift();y(t),x(t.$$)}for(;b.length;)b.shift()();for(;w.length;){const e=w.pop();t.has(e)||(e(),t.add(e))}}while(h.length);for(;v.length;)v.pop()();$=!1}function x(t){t.fragment&&(t.update(t.dirty),o(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(D))}let O;function N(){O={remaining:0,callbacks:[]}}function k(){O.remaining||o(O.callbacks)}function I(t){O.callbacks.push(t)}function T(t,n,s){const{fragment:i,on_mount:a,on_destroy:c,after_render:u}=t.$$;i.m(n,s),D(()=>{const n=a.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(D)}function _(t,e){t.$$.dirty||(h.push(t),$||($=!0,g.then(S)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function C(e,r,s,i,a,c){const u=f;y(e);const l=r.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:null};let d=!1;p.ctx=s?s(e,l,(t,n)=>{p.ctx&&a(p.ctx[t],p.ctx[t]=n)&&(p.bound[t]&&p.bound[t](n),d&&_(e,t))}):l,p.update(),d=!0,o(p.before_render),p.fragment=i(p.ctx),r.target&&(r.hydrate?p.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):p.fragment.c(),r.intro&&e.$$.fragment.i&&e.$$.fragment.i(),T(e,r.target,r.anchor),S()),y(u)}class H{$destroy(){var e,n;n=!0,(e=this).$$&&(o(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function B(t){const e=t.getUTCFullYear(),n=t.getUTCMonth()+1,o=t.getUTCDate();return`${e}-${n<10?"0"+n:n}-${o<10?"0"+o:o}`}function P(t){return`${B(t)} ${function(t){const e=t.getUTCHours()+1,n=t.getUTCDate();return`${e<10?"0"+e:e}:${n<10?"0"+n:n}`}(t)}`}function A(e){var n,o,r,s,l,m,f,y,h,g,$;return{c(){n=u("form"),(o=u("label")).textContent="Date to:",r=p(),s=u("input"),l=p(),(m=u("label")).textContent="Budget:",f=p(),y=u("input"),g=p(),($=u("button")).textContent="Save",o.htmlFor="end",d(s,"type","date"),s.min=e.minDate,s.value=e.dateString,s.id="end",s.required=!0,m.htmlFor="budget",d(y,"type","number"),y.value=h=e.options.budget,y.id="budget",y.required=!0,n.dataset.action="save-options"},m(t,e){a(t,n,e),i(n,o),i(n,r),i(n,s),i(n,l),i(n,m),i(n,f),i(n,y),i(n,g),i(n,$)},p(t,e){t.minDate&&(s.min=e.minDate),t.dateString&&(s.value=e.dateString),t.options&&h!==(h=e.options.budget)&&(y.value=h)},i:t,o:t,d(t){t&&c(n)}}}function E(t,e,n){let{options:o}=e,r="",s="";return t.$set=t=>{"options"in t&&n("options",o=t.options)},t.$$.update=(t={options:1})=>{t.options&&(n("dateString",r=B(new Date(o.end))),n("minDate",s=B(new Date)))},{options:o,dateString:r,minDate:s}}class F extends H{constructor(t){super(),C(this,t,E,A,s,["options"])}}function M(t,e,n){const o=Object.create(t);return o.item=e[n],o}function J(t){var e,n,o,r,s,d,f,y,h,g,$,b=P(new Date(t.item.timestamp)),w=t.item.sum,v=t.item.category;return{c(){e=u("li"),n=l(b),o=p(),r=l(w),s=p(),d=l(v),f=p(),y=u("button"),h=l("Remove"),$=p(),y.type="button",y.dataset.action="remove-item",y.dataset.timestamp=g=t.item.timestamp},m(t,c){a(t,e,c),i(e,n),i(e,o),i(e,r),i(e,s),i(e,d),i(e,f),i(e,y),i(y,h),i(e,$)},p(t,e){t.historyItems&&b!==(b=P(new Date(e.item.timestamp)))&&m(n,b),t.historyItems&&w!==(w=e.item.sum)&&m(r,w),t.historyItems&&v!==(v=e.item.category)&&m(d,v),t.historyItems&&g!==(g=e.item.timestamp)&&(y.dataset.timestamp=g)},d(t){t&&c(e)}}}function U(e){for(var n,o=e.historyItems,r=[],s=0;s<o.length;s+=1)r[s]=J(M(e,o,s));return{c(){n=u("ul");for(var t=0;t<r.length;t+=1)r[t].c()},m(t,e){a(t,n,e);for(var o=0;o<r.length;o+=1)r[o].m(n,null)},p(t,e){if(t.historyItems||t.formatDateTime){o=e.historyItems;for(var s=0;s<o.length;s+=1){const i=M(e,o,s);r[s]?r[s].p(t,i):(r[s]=J(i),r[s].c(),r[s].m(n,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function j(t,e,n){let o,{history:r}=e;return t.$set=t=>{"history"in t&&n("history",r=t.history)},t.$$.update=(t={history:1})=>{t.history&&n("historyItems",o=r.reverse())},{history:r,historyItems:o}}class q extends H{constructor(t){super(),C(this,t,j,U,s,["history"])}}function L(e){var n;return{c(){(n=u("form")).innerHTML='<input placeholder="Sum" name="sum" type="number" value="" required class="svelte-h5p8ml">\n\t\t\t  <input placeholder="Category" name="category" type="text" value="" class="svelte-h5p8ml">\n\t\t\t  <button class="svelte-h5p8ml">Add</button>',n.dataset.action="add-item"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class W extends H{constructor(t){super(),C(this,t,null,L,s,[])}}function R(t){var e,n=new F({props:{options:t.options}});return{c(){n.$$.fragment.c()},m(t,o){T(n,t,o),e=!0},p(t,e){var o={};t.options&&(o.options=e.options),n.$set(o)},i(t){e||(n.$$.fragment.i(t),e=!0)},o(t){n.$$.fragment.o(t),e=!1},d(t){n.$destroy(t)}}}function Y(t){var e,n=new q({props:{history:t.history}});return{c(){n.$$.fragment.c()},m(t,o){T(n,t,o),e=!0},p(t,e){var o={};t.history&&(o.history=e.history),n.$set(o)},i(t){e||(n.$$.fragment.i(t),e=!0)},o(t){n.$$.fragment.o(t),e=!1},d(t){n.$destroy(t)}}}function z(t){var e,n,o,r,s,d,f,y,h,g,$,b,w,v,D,S,x,O,_,C,H=new W({}),B=t.showOptions&&R(t),P=t.showHistory&&Y(t);return{c(){e=u("main"),n=u("p"),o=l("Per day: "),r=l(t.perDay),s=p(),d=u("p"),f=l("Spent: "),y=l(t.spent),h=p(),g=u("p"),$=l("Budget for today: "),b=l(t.todayBudget),w=p(),H.$$.fragment.c(),v=p(),(D=u("button")).textContent="Options",S=p(),(x=u("button")).textContent="History",O=p(),B&&B.c(),_=p(),P&&P.c(),D.type="button",D.dataset.action="toggle-options",x.type="button",x.dataset.action="toggle-history",e.className="svelte-1j39u3t"},m(t,c){a(t,e,c),i(e,n),i(n,o),i(n,r),i(e,s),i(e,d),i(d,f),i(d,y),i(e,h),i(e,g),i(g,$),i(g,b),i(e,w),T(H,e,null),i(e,v),i(e,D),i(e,S),i(e,x),i(e,O),B&&B.m(e,null),i(e,_),P&&P.m(e,null),C=!0},p(t,n){C&&!t.perDay||m(r,n.perDay),C&&!t.spent||m(y,n.spent),C&&!t.todayBudget||m(b,n.todayBudget),n.showOptions?B?(B.p(t,n),B.i(1)):((B=R(n)).c(),B.i(1),B.m(e,_)):B&&(N(),I(()=>{B.d(1),B=null}),B.o(1),k()),n.showHistory?P?(P.p(t,n),P.i(1)):((P=Y(n)).c(),P.i(1),P.m(e,null)):P&&(N(),I(()=>{P.d(1),P=null}),P.o(1),k())},i(t){C||(H.$$.fragment.i(t),B&&B.i(),P&&P.i(),C=!0)},o(t){H.$$.fragment.o(t),B&&B.o(),P&&P.o(),C=!1},d(t){t&&c(e),H.$destroy(),B&&B.d(),P&&P.d()}}}function G(t,e,n){let o,r,s,i,a,c,{options:u,history:l,showOptions:p,showHistory:d}=e;return t.$set=t=>{"options"in t&&n("options",u=t.options),"history"in t&&n("history",l=t.history),"showOptions"in t&&n("showOptions",p=t.showOptions),"showHistory"in t&&n("showHistory",d=t.showHistory)},t.$$.update=(t={options:1,days:1,history:1,spentDays:1,perDay:1,spent:1,maxSpentForToday:1})=>{t.options&&n("days",o=Math.floor((u.end-u.start)/864e5)),t.options&&n("spentDays",r=Math.floor((Date.now()-u.start)/864e5)),(t.options||t.days)&&n("perDay",s=Math.round(u.budget/o)),t.history&&n("spent",i=l.reduce((t,e)=>t+e.sum,0)),(t.spentDays||t.perDay)&&n("maxSpentForToday",a=r*s),(t.perDay||t.spent||t.maxSpentForToday)&&n("todayBudget",c=s-(i-a))},{options:u,history:l,showOptions:p,showHistory:d,perDay:s,spent:i,todayBudget:c}}const K="a3ebe359-db8c-4e82-b340-99d5ff6c0995",Q=`history-${K}`,V=`options-${K}`;function X(){return{budget:0,end:Date.now(),start:Date.now(),active:!1}}function Z(t){return new Promise(e=>{localStorage.setItem(V,JSON.stringify(t)),e(t)})}function tt(){return new Promise(t=>{let e;try{e=JSON.parse(localStorage.getItem(Q))||[]}catch(t){e=[]}t(e)})}let et=!1,nt=!1;const ot=new class extends H{constructor(t){super(),C(this,t,G,z,s,["options","history","showOptions","showHistory"])}}({target:document.body,props:{history:[],options:X(),showOptions:et,showHistory:nt}});return document.body.addEventListener("click",t=>{if("BUTTON"!==t.target.nodeName)return;const e=t.target.getAttribute("data-action");if(e)switch(e){case"remove-item":!async function(t){const e=Number(t.getAttribute("data-timestamp"));if(isNaN(e))return;const n=await function(t){return tt().then(e=>{const n=e.filter(e=>e.timestamp!==t);return localStorage.setItem(Q,JSON.stringify(n)),n})}(e);ot.$set({history:n})}(t.target);break;case"toggle-options":et=!et,ot.$set({showOptions:et});break;case"toggle-history":nt=!nt,ot.$set({showHistory:nt})}}),document.body.addEventListener("submit",t=>{if("FORM"!==t.target.nodeName)return;const e=t.target.getAttribute("data-action");if(e)switch(t.preventDefault(),e){case"save-options":!async function(t){const e=new Date(t.end.value).getTime(),n=Date.now()<e,o=Number(t.budget.value),[r,s]=await Promise.all([Z({end:e,active:n,budget:o,start:Date.now()}),new Promise(t=>{localStorage.setItem(Q,JSON.stringify([])),t([])})]);et=!1,ot.$set({options:r,history:s,showOptions:et})}(t.target);break;case"add-item":!async function(t){const e=Number(t.sum.value),n=t.category.value||"",o=await(r={sum:e,category:n,timestamp:Date.now()},tt().then(t=>(t.push(r),localStorage.setItem(Q,JSON.stringify(t)),t)));var r;t.reset(),ot.$set({history:o})}(t.target)}}),async function(){const[t,e]=await Promise.all([new Promise(t=>{let e;try{e=JSON.parse(localStorage.getItem(V))||X()}catch(t){e=X()}t(e)}),tt()]);ot.$set({options:t,history:e})}(),window.addEventListener("load",function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js",{scope:"/budget-pwa/public/"}).then(()=>{console.log("Service Worker registered successfully.")}).catch(t=>{console.log("Service Worker registration failed:",t)})}),ot}();
//# sourceMappingURL=bundle.js.map
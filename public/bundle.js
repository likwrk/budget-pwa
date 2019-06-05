var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function l(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}let y;function f(t){y=t}const h=[],g=Promise.resolve();let $=!1;const w=[],b=[],v=[];function D(t){b.push(t)}function S(){const t=new Set;do{for(;h.length;){const t=h.shift();f(t),x(t.$$)}for(;w.length;)w.shift()();for(;b.length;){const e=b.pop();t.has(e)||(e(),t.add(e))}}while(h.length);for(;v.length;)v.pop()();$=!1}function x(t){t.fragment&&(t.update(t.dirty),o(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(D))}let O;function N(){O={remaining:0,callbacks:[]}}function T(){O.remaining||o(O.callbacks)}function k(t){O.callbacks.push(t)}function I(t,n,s){const{fragment:i,on_mount:a,on_destroy:c,after_render:u}=t.$$;i.m(n,s),D(()=>{const n=a.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(D)}function _(t,e){t.$$.dirty||(h.push(t),$||($=!0,g.then(S)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function C(e,r,s,i,a,c){const u=y;f(e);const d=r.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:null};let l=!1;p.ctx=s?s(e,d,(t,n)=>{p.ctx&&a(p.ctx[t],p.ctx[t]=n)&&(p.bound[t]&&p.bound[t](n),l&&_(e,t))}):d,p.update(),l=!0,o(p.before_render),p.fragment=i(p.ctx),r.target&&(r.hydrate?p.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):p.fragment.c(),r.intro&&e.$$.fragment.i&&e.$$.fragment.i(),I(e,r.target,r.anchor),S()),f(u)}class H{$destroy(){var e,n;n=!0,(e=this).$$&&(o(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function B(t){const e=t.getUTCFullYear(),n=t.getUTCMonth()+1,o=t.getUTCDate();return`${e}-${n<10?"0"+n:n}-${o<10?"0"+o:o}`}function P(t){return`${B(t)} ${function(t){const e=t.getUTCHours()+1,n=t.getUTCDate();return`${e<10?"0"+e:e}:${n<10?"0"+n:n}`}(t)}`}function A(e){var n,o,r,s,d,m,y,f,h,g,$;return{c(){n=u("form"),(o=u("label")).textContent="Date to:",r=p(),s=u("input"),d=p(),(m=u("label")).textContent="Budget:",y=p(),f=u("input"),g=p(),($=u("button")).textContent="Save",o.htmlFor="end",l(s,"type","date"),s.min=e.minDate,s.value=e.dateString,s.id="end",s.required=!0,m.htmlFor="budget",l(f,"type","number"),f.value=h=e.options.budget,f.id="budget",f.required=!0,n.dataset.action="save-options"},m(t,e){a(t,n,e),i(n,o),i(n,r),i(n,s),i(n,d),i(n,m),i(n,y),i(n,f),i(n,g),i(n,$)},p(t,e){t.minDate&&(s.min=e.minDate),t.dateString&&(s.value=e.dateString),t.options&&h!==(h=e.options.budget)&&(f.value=h)},i:t,o:t,d(t){t&&c(n)}}}function E(t,e,n){let{options:o}=e,r="",s="";return t.$set=t=>{"options"in t&&n("options",o=t.options)},t.$$.update=(t={options:1})=>{t.options&&(n("dateString",r=B(new Date(o.end))),n("minDate",s=B(new Date)))},{options:o,dateString:r,minDate:s}}class F extends H{constructor(t){super(),C(this,t,E,A,s,["options"])}}function M(t,e,n){const o=Object.create(t);return o.item=e[n],o}function J(t){var e,n,o,r,s,l,y,f,h,g,$,w=P(new Date(t.item.timestamp)),b=t.item.sum,v=t.item.category;return{c(){e=u("li"),n=d(w),o=p(),r=d(b),s=p(),l=d(v),y=p(),f=u("button"),h=d("Remove"),$=p(),f.type="button",f.dataset.action="remove-item",f.dataset.timestamp=g=t.item.timestamp},m(t,c){a(t,e,c),i(e,n),i(e,o),i(e,r),i(e,s),i(e,l),i(e,y),i(e,f),i(f,h),i(e,$)},p(t,e){t.historyItems&&w!==(w=P(new Date(e.item.timestamp)))&&m(n,w),t.historyItems&&b!==(b=e.item.sum)&&m(r,b),t.historyItems&&v!==(v=e.item.category)&&m(l,v),t.historyItems&&g!==(g=e.item.timestamp)&&(f.dataset.timestamp=g)},d(t){t&&c(e)}}}function U(e){for(var n,o=e.historyItems,r=[],s=0;s<o.length;s+=1)r[s]=J(M(e,o,s));return{c(){n=u("ul");for(var t=0;t<r.length;t+=1)r[t].c()},m(t,e){a(t,n,e);for(var o=0;o<r.length;o+=1)r[o].m(n,null)},p(t,e){if(t.historyItems||t.formatDateTime){o=e.historyItems;for(var s=0;s<o.length;s+=1){const i=M(e,o,s);r[s]?r[s].p(t,i):(r[s]=J(i),r[s].c(),r[s].m(n,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function j(t,e,n){let o,{history:r}=e;return t.$set=t=>{"history"in t&&n("history",r=t.history)},t.$$.update=(t={history:1})=>{t.history&&n("historyItems",o=r.reverse())},{history:r,historyItems:o}}class q extends H{constructor(t){super(),C(this,t,j,U,s,["history"])}}function L(e){var n;return{c(){(n=u("form")).innerHTML='<input placeholder="Sum" name="sum" type="number" value="" required class="svelte-h5p8ml">\n\t\t\t  <input placeholder="Category" name="category" type="text" value="" class="svelte-h5p8ml">\n\t\t\t  <button class="svelte-h5p8ml">Add</button>',n.dataset.action="add-item"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class W extends H{constructor(t){super(),C(this,t,null,L,s,[])}}function R(t){var e,n=new F({props:{options:t.options}});return{c(){n.$$.fragment.c()},m(t,o){I(n,t,o),e=!0},p(t,e){var o={};t.options&&(o.options=e.options),n.$set(o)},i(t){e||(n.$$.fragment.i(t),e=!0)},o(t){n.$$.fragment.o(t),e=!1},d(t){n.$destroy(t)}}}function Y(t){var e,n=new q({props:{history:t.history}});return{c(){n.$$.fragment.c()},m(t,o){I(n,t,o),e=!0},p(t,e){var o={};t.history&&(o.history=e.history),n.$set(o)},i(t){e||(n.$$.fragment.i(t),e=!0)},o(t){n.$$.fragment.o(t),e=!1},d(t){n.$destroy(t)}}}function z(t){var e,n,o,r,s,l,y,f,h,g,$,w,b,v,D,S,x,O,_,C,H,B,P,A,E,F,M,J,U,j,q,L=new W({}),z=t.showOptions&&R(t),G=t.showHistory&&Y(t);return{c(){e=u("main"),n=u("p"),o=d(t.start),r=d(" - "),s=d(t.end),l=p(),y=u("p"),f=d("Day "),h=d(t.spentDays),g=d(" of "),$=d(t.days),w=p(),b=u("p"),v=d("Per day: "),D=d(t.perDay),S=p(),x=u("p"),O=d("Spent: "),_=d(t.spent),C=p(),H=u("p"),B=d("Budget for today: "),P=d(t.todayBudget),A=p(),L.$$.fragment.c(),E=p(),(F=u("button")).textContent="Options",M=p(),(J=u("button")).textContent="History",U=p(),z&&z.c(),j=p(),G&&G.c(),F.type="button",F.dataset.action="toggle-options",J.type="button",J.dataset.action="toggle-history",e.className="svelte-1j39u3t"},m(t,c){a(t,e,c),i(e,n),i(n,o),i(n,r),i(n,s),i(e,l),i(e,y),i(y,f),i(y,h),i(y,g),i(y,$),i(e,w),i(e,b),i(b,v),i(b,D),i(e,S),i(e,x),i(x,O),i(x,_),i(e,C),i(e,H),i(H,B),i(H,P),i(e,A),I(L,e,null),i(e,E),i(e,F),i(e,M),i(e,J),i(e,U),z&&z.m(e,null),i(e,j),G&&G.m(e,null),q=!0},p(t,n){q&&!t.start||m(o,n.start),q&&!t.end||m(s,n.end),q&&!t.spentDays||m(h,n.spentDays),q&&!t.days||m($,n.days),q&&!t.perDay||m(D,n.perDay),q&&!t.spent||m(_,n.spent),q&&!t.todayBudget||m(P,n.todayBudget),n.showOptions?z?(z.p(t,n),z.i(1)):((z=R(n)).c(),z.i(1),z.m(e,j)):z&&(N(),k(()=>{z.d(1),z=null}),z.o(1),T()),n.showHistory?G?(G.p(t,n),G.i(1)):((G=Y(n)).c(),G.i(1),G.m(e,null)):G&&(N(),k(()=>{G.d(1),G=null}),G.o(1),T())},i(t){q||(L.$$.fragment.i(t),z&&z.i(),G&&G.i(),q=!0)},o(t){L.$$.fragment.o(t),z&&z.o(),G&&G.o(),q=!1},d(t){t&&c(e),L.$destroy(),z&&z.d(),G&&G.d()}}}function G(t,e,n){let o,r,s,i,a,c,u,d,{options:p,history:l,showOptions:m,showHistory:y}=e;return t.$set=t=>{"options"in t&&n("options",p=t.options),"history"in t&&n("history",l=t.history),"showOptions"in t&&n("showOptions",m=t.showOptions),"showHistory"in t&&n("showHistory",y=t.showHistory)},t.$$.update=(t={options:1,days:1,history:1,spentDays:1,perDay:1,spent:1,maxSpentForToday:1})=>{t.options&&n("start",o=B(new Date(B(new Date(p.start))))),t.options&&n("end",r=B(new Date(B(new Date(p.end))))),t.options&&n("days",s=Math.floor((p.end-p.start)/864e5)),t.options&&n("spentDays",i=Math.ceil((new Date(B(new Date(B(new Date)))).getTime()-new Date(p.start).getTime())/864e5)),(t.options||t.days)&&n("perDay",a=Math.round(p.budget/s)),t.history&&n("spent",c=l.reduce((t,e)=>t+e.sum,0)),(t.spentDays||t.perDay)&&n("maxSpentForToday",u=i*a),(t.perDay||t.spent||t.maxSpentForToday)&&n("todayBudget",d=a-(c-u))},{options:p,history:l,showOptions:m,showHistory:y,start:o,end:r,days:s,spentDays:i,perDay:a,spent:c,todayBudget:d}}const K="a3ebe359-db8c-4e82-b340-99d5ff6c0995",Q=`history-${K}`,V=`options-${K}`;function X(){return{budget:0,end:Date.now(),start:Date.now(),active:!1}}function Z(t){return new Promise(e=>{localStorage.setItem(V,JSON.stringify(t)),e(t)})}function tt(){return new Promise(t=>{let e;try{e=JSON.parse(localStorage.getItem(Q))||[]}catch(t){e=[]}t(e)})}let et=!1,nt=!1;const ot=new class extends H{constructor(t){super(),C(this,t,G,z,s,["options","history","showOptions","showHistory"])}}({target:document.body,props:{history:[],options:X(),showOptions:et,showHistory:nt}});return document.body.addEventListener("click",t=>{if("BUTTON"!==t.target.nodeName)return;const e=t.target.getAttribute("data-action");if(e)switch(e){case"remove-item":!async function(t){const e=Number(t.getAttribute("data-timestamp"));if(isNaN(e))return;const n=await function(t){return tt().then(e=>{const n=e.filter(e=>e.timestamp!==t);return localStorage.setItem(Q,JSON.stringify(n)),n})}(e);ot.$set({history:n})}(t.target);break;case"toggle-options":et=!et,ot.$set({showOptions:et});break;case"toggle-history":nt=!nt,ot.$set({showHistory:nt})}}),document.body.addEventListener("submit",t=>{if("FORM"!==t.target.nodeName)return;const e=t.target.getAttribute("data-action");if(e)switch(t.preventDefault(),e){case"save-options":!async function(t){const e=new Date(t.end.value).getTime(),n=Date.now()<e,o=Number(t.budget.value),[r,s]=await Promise.all([Z({end:e,active:n,budget:o,start:Date.now()}),new Promise(t=>{localStorage.setItem(Q,JSON.stringify([])),t([])})]);et=!1,ot.$set({options:r,history:s,showOptions:et})}(t.target);break;case"add-item":!async function(t){const e=Number(t.sum.value),n=t.category.value||"",o=await(r={sum:e,category:n,timestamp:Date.now()},tt().then(t=>(t.push(r),localStorage.setItem(Q,JSON.stringify(t)),t)));var r;t.reset(),ot.$set({history:o})}(t.target)}}),async function(){const[t,e]=await Promise.all([new Promise(t=>{let e;try{e=JSON.parse(localStorage.getItem(V))||X()}catch(t){e=X()}t(e)}),tt()]);ot.$set({options:t,history:e})}(),window.addEventListener("load",function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js",{scope:"/budget-pwa/public/"}).then(()=>{console.log("Service Worker registered successfully.")}).catch(t=>{console.log("Service Worker registration failed:",t)})}),ot}();
//# sourceMappingURL=bundle.js.map

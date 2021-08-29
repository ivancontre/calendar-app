(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{225:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(8),i=a(21),s=a(10),u=a(16),m=a(58),d=a(13),f=a.n(d),p=(a(97),a(98),a(25)),v=a(26),b=a(7),E=a.n(b),h=a(12),g=a.n(h),O=a(20),j=["GET","POST","PUT","DELETE"],y=function(e,t,a,n){if(!j.includes(a.toUpperCase()))throw new Error("Los m\xe9todos permitidos son ".concat(j.join(", ")));var r="".concat("https://calendar-app-backend-ic.herokuapp.com/api","/").concat(e),c={method:a,headers:{"Content-type":"application/json"}};return n&&(c.headers["x-token"]=n),"GET"!==a.toUpperCase()&&(c.body=JSON.stringify(t)),fetch(r,c)},k=function(){return{type:"[auth] Finish checking login state"}},w=function(e){return{type:"[auth] Login",payload:e}},N=function(){return{type:"[auth] Logout"}},x=a(4),S=function(e){return{type:"[calendar] Set active",payload:e}},C=function(e){return{type:"[calendar] Add new",payload:e}},D=function(e){return{type:"[calendar] Load",payload:e}},_=function(e){return{type:"[calendar] Update",payload:e}},T=function(e){return{type:"[calendar] Delete",payload:e}},A=function(e){return{type:"[filter] Add user",payload:e}},I=function(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},"Bienvenido ".concat(e)),r.a.createElement("button",{onClick:function(){E.a.fire({title:"\xbfSeguro que desea salir?",showCancelButton:!0,confirmButtonText:"S\xed",cancelButtonText:"Cancelar"}).then((function(e){e.isConfirmed&&(t((function(e){localStorage.clear(),e(N())})),t({type:"[calendar] Reset"}),t({type:"[filter] Reset user"}))})).catch((function(e){E.a.fire("Error",e,"error")}))},className:"btn btn-outline-danger"},r.a.createElement(p.a,{icon:v.c}),r.a.createElement("span",null," Salir ")))},L={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},R=function(e){var t=e.event,a=t.title,n=t.user,c=Object(l.c)((function(e){return e.auth}))._id,o=n._id===c?"Yo":n.name.charAt(0).toUpperCase()+n.name.slice(1);return r.a.createElement("div",null,r.a.createElement("strong",null,a),r.a.createElement("p",{className:"creator-event"},"Creador: ".concat(o)))},B=a(31),U=a(53),F=a.n(U),P=a(54),V=a.n(P),G=(a(120),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}});F.a.setAppElement("#root");var M=f()().minutes(0).seconds(0).add(1,"hours"),q=M.clone().add(1,"hours"),H={title:"",notes:"",start:M,endDate:q},J=function(){var e=Object(n.useState)(H),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),i=Object(u.a)(o,2),s=i[0],m=i[1],d=a.title,b=a.notes,h=a.start,j=a.endDate,k=Object(l.c)((function(e){return e})),w=k.modal,N=k.calendar,S=k.auth,D=N.activeEvent,T=Object(l.b)();Object(n.useEffect)((function(){if(D){var e=Object(x.a)(Object(x.a)({},D),{},{start:f()(D.start),endDate:f()(D.endDate)});c(e)}else c(H)}),[D,c]);var A=function(e){var t=e.target;c(Object(x.a)(Object(x.a)({},a),{},Object(B.a)({},t.name,t.value)))},I=function(){T({type:"[ui] Close modal"}),setTimeout((function(){T({type:"[calendar] Clear active"}),c(H)}),200)};return r.a.createElement(F.a,{isOpen:w.modalOpen,onRequestClose:I,style:G,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",(null===D||void 0===D?void 0:D.id)?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var t=f()(h),n=f()(j);if(t.isSameOrAfter(n,"hour"))E.a.fire("Error","La fecha fin debe ser mayor a la de inicio","error");else if(d.trim().length<2)m(!1);else{if(null===D||void 0===D?void 0:D.id){var r=Object(x.a)(Object(x.a)({id:(new Date).getTime().toString()},a),{},{start:a.start.toDate(),endDate:a.endDate.toDate(),user:{_id:S._id?S._id:"",name:S.name?S.name:"",email:S.email?S.email:""}});T((o=r,function(){var e=Object(O.a)(g.a.mark((function e(t){var a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,y("calendar-event/".concat(o.id),o,"PUT",a);case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent).ok?t(_(o)):E.a.fire("Error",r.msg,"error"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),E.a.fire("Error","Error en la aplicaci\xf3n","error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()))}else{var c=Object(x.a)(Object(x.a)({},a),{},{start:a.start.toDate(),endDate:a.endDate.toDate(),user:{_id:S._id?S._id:"",name:S.name?S.name:"",email:S.email?S.email:""}});T(function(e){return function(){var t=Object(O.a)(g.a.mark((function t(a){var n,r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,y("calendar-event",e,"POST",n);case 4:return r=t.sent,t.next=7,r.json();case 7:(c=t.sent).ok?(e.id=c.body.calendarEvent.id,a(C(e))):E.a.fire("Error",c.msg,"error"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),E.a.fire("Error","Error en la aplicaci\xf3n","error");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(c))}var o;m(!0),I()}},noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(V.a,{onChange:function(e){var t="string"==typeof e?f()(e):e;c(Object(x.a)(Object(x.a)({},a),{},{start:t}))},value:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(V.a,{onChange:function(e){var t="string"==typeof e?f()(e):e;c(Object(x.a)(Object(x.a)({},a),{},{endDate:t}))},value:j,isValidDate:function(e){return e.isAfter(f()(h))}})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"T\xedtulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!s&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:d,onChange:A}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",placeholder:"Notas",rows:5,name:"notes",value:b,onChange:A}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement(p.a,{icon:v.b}),r.a.createElement("span",null," Guardar"))))},X=function(){var e=Object(l.b)();return r.a.createElement("button",{onClick:function(){e({type:"[ui] Open modal"}),e({type:"[calendar] Clear active"})},className:"btn btn-primary fab"},r.a.createElement(p.a,{icon:v.a}))},Y=function(){var e=Object(l.c)((function(e){return e})).calendar,t=Object(l.b)();return r.a.createElement("button",{onClick:function(){var a=e.activeEvent;a&&E.a.fire({title:"\xbfSeguro que desea eliminar el evento?",showCancelButton:!0,confirmButtonText:"S\xed",cancelButtonText:"Cancelar"}).then((function(e){var n;e.isConfirmed&&(null===a||void 0===a?void 0:a.id)&&t((n=a.id,function(){var e=Object(O.a)(g.a.mark((function e(t){var a,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,y("calendar-event/".concat(n),{},"DELETE",a);case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(T(n)):E.a.fire("Error",c.msg,"error"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),E.a.fire("Error","Error en la aplicaci\xf3n","error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()))})).catch((function(e){E.a.fire("Error",e,"error")}))},className:"btn btn-danger fab-danger"},r.a.createElement(p.a,{icon:v.d}))},z=a(87),K=a(55),Q=a.n(K),W=function(e){return{type:"[user] Load users",payload:e}},Z=function(){var e=Object(l.b)(),t=Object(s.h)(),a=Object(s.g)();Object(n.useEffect)((function(){e(function(){var e=Object(O.a)(g.a.mark((function e(t){var a,n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,y("user",{},"GET",a);case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent).ok?(c=r.body.users,t(W(c))):E.a.fire("Error",r.msg,"error"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),E.a.fire("Error","Error en la aplicaci\xf3n","error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var c=Object(l.c)((function(e){return e})),o=c.user,i=c.filter;Object(n.useEffect)((function(){if(t.search){var a=Q.a.parse(t.search,{arrayFormat:"comma"}).users;if(a){Array.isArray(a)||(a=[a]);var n=o.users.filter((function(e){return a.includes(e._id)}));e(A(n))}}}),[o.users,t.search,e]);return r.a.createElement("div",{className:"mb-3 ml-1 mr-1"},r.a.createElement(z.a,{onChange:function(t,n){var r=t.map((function(e){return e._id})),c=Q.a.stringify({users:r},{arrayFormat:"comma"});e(A(r)),a.push("?".concat(c))},value:i.users,options:o.users,isMulti:!0,getOptionValue:function(e){return e._id},getOptionLabel:function(e){return e.name},placeholder:"Buscar por usuario..."}))},$=function(){var e;f.a.locale("es");var t=Object(m.b)(f.a),a=Object(n.useState)(localStorage.getItem("lastView")||"month"),c=Object(u.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)([]),d=Object(u.a)(s,2),p=d[0],v=d[1],b=Object(l.b)();Object(n.useEffect)((function(){b(function(){var e=Object(O.a)(g.a.mark((function e(t){var a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,y("calendar-event",{},"GET",a);case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent).ok?t(D(r.body.calendarEvents.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{start:f()(e.start).toDate(),endDate:f()(e.endDate).toDate()})})))):E.a.fire("Error",r.msg,"error"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),E.a.fire("Error","Error en la aplicaci\xf3n","error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[b]);var h=Object(l.c)((function(e){return e})),j=h.calendar,k=h.auth;Object(n.useEffect)((function(){v(j.events)}),[j.events]);var w=j.events,N=Object(l.c)((function(e){return e.filter})).users;Object(n.useEffect)((function(){var e;if(N.length){var t=N.map((function(e){return e._id}));e=w.filter((function(e){return t.includes(e.user._id)}))}else e=w;v(e)}),[N,w]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(I,null),r.a.createElement(Z,null),r.a.createElement(m.a,{localizer:t,events:p,startAccessor:"start",endAccessor:function(e){return e.endDate||e.start},messages:L,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:k._id===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){b({type:"[ui] Open modal"})},onSelectEvent:function(e){b(S(e))},onView:function(e){i(e),localStorage.setItem("lastView",e)},view:o,components:{event:R},onSelectSlot:function(e){var t={title:"",start:e.start,endDate:e.end,user:{_id:k._id?k._id:"",name:k.name?k.name:"",email:k.email?k.email:""},notes:""};b(S(t)),b({type:"[ui] Open modal"})},selectable:!0}),r.a.createElement(J,null),r.a.createElement(X,null),(null===(e=j.activeEvent)||void 0===e?void 0:e.id)&&r.a.createElement(Y,null))},ee=a(40),te=a.n(ee),ae=function(e){var t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1];return[r,function(e){var t=e.target;c(Object(x.a)(Object(x.a)({},r),{},Object(B.a)({},t.name,t.value)))},function(){c(e)}]},ne=(a(68),function(){var e=Object(l.b)(),t=ae({email:"",password:""}),a=Object(u.a)(t,2),n=a[0],c=a[1],o=n.email,s=n.password;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){return t.preventDefault(),!!te.a.isEmail(o)&&(!(!s||s.length<5)&&void e(function(e,t){return function(){var a=Object(O.a)(g.a.mark((function a(n){var r,c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y("auth",{email:e,password:t},"POST");case 3:return r=a.sent,a.next=6,r.json();case 6:(c=a.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime().toString()),n(w({_id:c.body.uid,name:c.body.name,email:c.body.email}))):E.a.fire("Error",c.msg,"error"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0),E.a.fire("Error","Error en la aplicaci\xf3n","error");case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(o,s)))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Correo",value:o,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Contrase\xf1a",value:s,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})),r.a.createElement(i.b,{to:"/auth/register",className:"link"},"Crea una nueva cuenta")))))}),re=function(){var e=Object(l.b)(),t=ae({name:"",email:"",password1:"",password2:""}),a=Object(u.a)(t,2),n=a[0],c=a[1],o=n.name,s=n.email,m=n.password1,d=n.password2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){return t.preventDefault(),0===o.trim().length?(E.a.fire("Error","Nombre es requerido","error"),!1):te.a.isEmail(s)?m!==d||m.length<5?(E.a.fire("Error","Contrase\xf1a debe tener al menos 6 caracteres y deben coincidir","error"),!1):void e(function(e,t,a){return function(){var n=Object(O.a)(g.a.mark((function n(r){var c,o;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y("auth/register",{name:e,email:t,password:a},"POST");case 3:return c=n.sent,n.next=6,c.json();case 6:(o=n.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime().toString()),r(w({_id:o.body.uid,name:o.body.name,email:o.body.email}))):E.a.fire("Error",o.msg,"error"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0),E.a.fire("Error","Error en la aplicaci\xf3n","error");case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(o,s,m)):(E.a.fire("Error","Email inv\xe1lido","error"),!1)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"name",autoComplete:"off",value:o,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"email",autoComplete:"off",value:s,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"password1",value:m,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"password2",value:d,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})),r.a.createElement(i.b,{className:"link-register",to:"/auth/login"},"\xbfYa registrado?")))))},ce=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/auth/login",component:ne}),r.a.createElement(s.b,{exact:!0,path:"/auth/register",component:re}),r.a.createElement(s.a,{to:"/auth/login"}))},oe=a(41),le=["isAuthenticated","component"],ie=function(e){var t=e.isAuthenticated,a=e.component,n=Object(oe.a)(e,le),c=a;return r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(c,e):r.a.createElement(s.a,{to:"/auth/login"})}}))},se=["isAuthenticated","component"],ue=function(e){var t=e.isAuthenticated,a=e.component,n=Object(oe.a)(e,se),c=a;return r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(s.a,{to:"/"}):r.a.createElement(c,e)}}))},me=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=void 0!==t._id;return Object(n.useEffect)((function(){e(function(){var e=Object(O.a)(g.a.mark((function e(t){var a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,y("auth/renew-token",{},"GET",a);case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime().toString()),t(w({_id:r.body.uid,name:r.body.name,email:r.body.email}))):t(k()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),E.a.fire("Error","Error en la aplicaci\xf3n","error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h1",null,"Espere..."):r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(ue,{isAuthenticated:c,component:ce,path:"/auth"}),r.a.createElement(ie,{isAuthenticated:c,component:$,path:"/",exact:!0}),r.a.createElement(s.a,{to:"/auth/login"}))))},de=a(34),fe=a(86),pe={modalOpen:!1},ve=a(29),be={events:[],activeEvent:null},Ee={checking:!0},he={users:[]},ge={users:[]},Oe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.c,je=Object(de.b)({modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[ui] Open modal":return Object(x.a)(Object(x.a)({},e),{},{modalOpen:!0});case"[ui] Close modal":return Object(x.a)(Object(x.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[calendar] Add new":return Object(x.a)(Object(x.a)({},e),{},{events:[t.payload].concat(Object(ve.a)(e.events))});case"[calendar] Set active":return Object(x.a)(Object(x.a)({},e),{},{activeEvent:t.payload});case"[calendar] Clear active":return Object(x.a)(Object(x.a)({},e),{},{activeEvent:null});case"[calendar] Update":return Object(x.a)(Object(x.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"[calendar] Delete":return Object(x.a)(Object(x.a)({},e),{},{events:e.events.filter((function(e){return e.id!==t.payload})),activeEvent:null});case"[calendar] Load":return Object(x.a)(Object(x.a)({},e),{},{events:Object(ve.a)(t.payload)});case"[calendar] Reset":return Object(x.a)({},be);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[auth] Login":return Object(x.a)(Object(x.a)(Object(x.a)({},e),t.payload),{},{checking:!1});case"[auth] Finish checking login state":return Object(x.a)(Object(x.a)({},e),{},{checking:!1});case"[auth] Logout":return{checking:!1};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[user] Load users":return Object(x.a)(Object(x.a)({},e),{},{users:Object(ve.a)(t.payload)});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[filter] Add user":return Object(x.a)(Object(x.a)({},e),{},{users:Object(ve.a)(t.payload)});case"[filter] Reset user":return Object(x.a)({},ge);default:return e}}}),ye=Object(de.d)(je,Oe(Object(de.a)(fe.a))),ke=function(){return r.a.createElement(l.a,{store:ye},r.a.createElement(me,null))};a(224),a(225);o.a.render(r.a.createElement(ke,null),document.getElementById("root"))},68:function(e,t,a){},88:function(e,t,a){e.exports=a(226)}},[[88,1,2]]]);
//# sourceMappingURL=main.cf1deaba.chunk.js.map
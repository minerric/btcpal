(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},16:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/btc.d7876d48.svg"},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),m=(a(16),a(2)),s=a(5),i=a(6),o=a(9),d=a(7),u=a(10),p=a(1),h=(a(20),a(21),a(8)),E=a.n(h);function b(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}var f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={email:"",message:"",formSuccess:!1,formPending:!1,formError:!1},e.handleSubmit=e.handleSubmit.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.email;this.setState(Object(m.a)({},this.state,{formPending:!0,result:{}}),function(){return window.fetch("https://btcpal.online:5555/users",{method:"post",body:JSON.stringify({email:a}),headers:{"content-type":"application/json"}}).then(b).then(function(e){return e.json()}).then(function(e){console.log("result",e),t.setState(Object(m.a)({},t.state,{result:Object.assign({},t.state.result,e,{success:!0}),formPending:!1,formSuccess:!0,email:""}))}).catch(function(e){console.error(e),t.setState(Object(m.a)({},t.state,{formError:e,formSuccess:!1,formPending:!1}))})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.formPending,n=t.formSuccess,r=t.formError;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},"CBD STORE!"),c.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Accept Bitcoin and",c.a.createElement("span",null,"\u26a1"),"Lightning Payments")),c.a.createElement("section",null,c.a.createElement("a",{href:"https://btcpal.online/apps/4ZRSH4zZrX8hAYzhXY5WnhYGwmkf/pos",target:"_blank"},"VIEW AUTO GENERATED STORE"),c.a.createElement("div",{className:"row d-sm-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"card m-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Hemp Bud"),c.a.createElement("form",{method:"POST",action:"https://btcpal.online/apps/4ZRSH4zZrX8hAYzhXY5WnhYGwmkf/pos"},c.a.createElement("input",{type:"hidden",name:"email",value:"customer@example.com"}),c.a.createElement("input",{type:"hidden",name:"orderId",value:"CustomOrderId"}),c.a.createElement("input",{type:"hidden",name:"notificationUrl",value:"https://example.com/callbacks"}),c.a.createElement("input",{type:"hidden",name:"redirectUrl",value:"https://example.com/thanksyou"}),c.a.createElement("button",{className:"btn btn-primary",type:"submit",name:"choiceKey",value:"hemp bud"},"Buy now")))),c.a.createElement("div",{className:"card m-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"CBD COFFEE"),c.a.createElement("form",{method:"POST",action:"https://btcpal.online/apps/4ZRSH4zZrX8hAYzhXY5WnhYGwmkf/pos"},c.a.createElement("input",{type:"hidden",name:"email",value:"customer@example.com"}),c.a.createElement("input",{type:"hidden",name:"orderId",value:"CustomOrderId"}),c.a.createElement("input",{type:"hidden",name:"notificationUrl",value:"https://example.com/callbacks"}),c.a.createElement("input",{type:"hidden",name:"redirectUrl",value:"https://example.com/thanksyou"}),c.a.createElement("button",{className:"btn btn-primary",type:"submit",name:"choiceKey",value:"cbd coffee"},"Buy now")))),c.a.createElement("div",{className:"card m-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"CBD CART"),c.a.createElement("form",{method:"POST",action:"https://btcpal.online/apps/4ZRSH4zZrX8hAYzhXY5WnhYGwmkf/pos"},c.a.createElement("input",{type:"hidden",name:"email",value:"customer@example.com"}),c.a.createElement("input",{type:"hidden",name:"orderId",value:"CustomOrderId"}),c.a.createElement("input",{type:"hidden",name:"notificationUrl",value:"https://example.com/callbacks"}),c.a.createElement("input",{type:"hidden",name:"redirectUrl",value:"https://example.com/thanksyou"}),c.a.createElement("button",{className:"btn btn-primary",type:"submit",name:"choiceKey",value:"cbd cart"},"Buy now")))))),c.a.createElement("section",{className:"bg-light"},c.a.createElement("div",{className:"container"},n&&c.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"alert alert-success alert-dismissible"},c.a.createElement("b",null,"Success"))),r&&c.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"alert alert-danger alert-dismissible",style:{width:"10rem"}},c.a.createElement("b",null,"Error!"))),a&&c.a.createElement("div",{className:"bouncing-loader d-flex justify-content-center align-items-center"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("form",{id:"registerForm",onSubmit:this.handleSubmit},c.a.createElement("h3",null,"Contact"),c.a.createElement("p",null,"Enter email address below and we will contact you shortly"),c.a.createElement("div",{className:"my-3 input-group d-flex justify-content-center"},c.a.createElement("input",{id:"email",type:"email",required:!0,onChange:function(t){return e.setState(Object(m.a)({},e.state,{email:t.target.value}))},value:this.state.email,placeholder:"email",className:"form-control-md"})),c.a.createElement("button",{type:"submit",className:"btn btn-lg btn-warning my-3"},"Submit")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",null,"Icons made by ",c.a.createElement("a",{href:"https://www.flaticon.com/authors/roundicons",title:"Roundicons"},"Roundicons")," from ",c.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",c.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);l.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/marijuana.157f1a67.svg"}},[[11,2,1]]]);
//# sourceMappingURL=main.63736d47.chunk.js.map
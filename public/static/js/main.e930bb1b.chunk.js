(this["webpackJsonpmern-poll"]=this["webpackJsonpmern-poll"]||[]).push([[0],{51:function(e,t,n){e.exports=n(63)},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(56),n(33)),l=n(35),m=(n(57),n(99)),s=n(98),p=n(100),u=n(95),d=n(96),h=n(97),f=n(43),E=n.n(f);var v=function(){var e=o.a.useState(["Sample"]),t=Object(l.a)(e,2),n=t[0],a=t[1],c=o.a.useState("Question?"),r=Object(l.a)(c,2),f=r[0],v=r[1],g=function(e){return function(t){var o=Object(i.a)(n);o[e]=t.target.value,a(o)}};return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,{component:"fieldset"},o.a.createElement(u.a,{component:"legend"},o.a.createElement(s.a,{id:"prompt",label:f,onChange:function(e){v(e.target.value)}})),o.a.createElement(d.a,{"aria-label":"choices",name:"choices"},o.a.createElement("div",{style:{padding:20}},n.map((function(e,t){return o.a.createElement(h.a,{container:!0,spacing:1,alignItems:"flex-end"},o.a.createElement(h.a,{item:!0},o.a.createElement(E.a,null)),o.a.createElement(h.a,{item:!0},o.a.createElement(s.a,{id:"option-"+t,label:e,onChange:g(t)})))}))),o.a.createElement(h.a,{container:!0,spacing:1,alignItems:"flex-end"},o.a.createElement(h.a,{item:!0},o.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(e){var t=Object(i.a)(n);t.push("Sample"),a(t)}},"Add")),o.a.createElement(h.a,{item:!0},o.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(e){var t=Object(i.a)(n);t.pop(),a(t)}},"Remove")),o.a.createElement(h.a,{item:!0},o.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(e){fetch("https://mern-poll.herokuapp.com/polls",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({prompt:f,options:n})}).then((function(e){return e.json()})).then((function(e){console.log("Request succeeded with JSON response",e)})).catch((function(e){console.log("Request failed",e)}))}},"Save"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.e930bb1b.chunk.js.map
(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[3],{429:function(e,a,c){"use strict";c.r(a);var t=c(1),n=c(420),r=c(66),i=(c(0),c(18)),s=c(20),o=c(186),j=c(185),p=c(63),b=c(34),m=c(25),l=c(142),h=c.n(l),d=function(e){return Object(t.jsxs)("form",{className:h.a.form,onSubmit:e.handleSubmit,children:[Object(t.jsx)("div",{children:Object(t.jsx)(o.a,{name:"email",validate:[b.c,b.a],component:m.b})}),Object(t.jsx)("div",{className:h.a.inputWrapper,children:Object(t.jsx)(o.a,{name:"password",validate:[b.c],component:m.d})}),Object(t.jsx)("div",{className:h.a.inputWrapper,children:Object(t.jsx)(o.a,{name:"rememberMe",type:"checkbox",component:m.c})}),e.captcha&&Object(t.jsxs)("div",{children:[Object(t.jsx)("img",{alt:"captcha",src:e.captcha}),Object(t.jsx)(o.a,{name:"captcha",type:"text",component:"input"})]}),e.error&&Object(t.jsx)("div",{className:h.a.error,children:e.error}),Object(t.jsx)(n.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})};d=Object(j.a)({form:"login"})(d);a.default=Object(i.b)((function(e){return{isLogin:e.auth.isLogin,captcha:e.auth.captchaUrl}}),{loginUser:p.b})((function(e){return e.isLogin?Object(t.jsx)(s.a,{to:"/profile"}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(r.a,{variant:"h3",children:"Login, please"}),Object(t.jsx)(d,{captcha:e.captcha,onSubmit:function(a){var c=a.email,t=a.password,n=a.rememberMe,r=a.captcha;e.loginUser(c,t,n,r)}})]})}))}}]);
//# sourceMappingURL=3.32940744.chunk.js.map
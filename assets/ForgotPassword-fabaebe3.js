import{a as c,d as l,c as m,j as s,aj as d,B as r}from"./index-953e6951.js";import"./LoginForm.styled-e97ada86.js";import{F as u,a as p,b as h,c as g,d as F,e as j}from"./ForgotPassword.styled-48f8d6c1.js";const w=()=>{const{t:o}=c(),{register:e,handleSubmit:t}=l(),a=m();function n(i){a(d(i)).unwrap().then(()=>r.info("We have sent an email to reset your password.")).catch(()=>r.error("Oops something went wrong!!"))}return s.jsxs(u,{children:[s.jsx(p,{children:o("forgotPassword")}),s.jsx(h,{onSubmit:t(n),children:s.jsxs(g,{children:[s.jsx(F,{...e("email"),name:"email",type:"email",placeholder:"Your email",required:!0}),s.jsx(j,{type:"submit","aria-label":"click to reset password",children:o("send")})]})})]})};export{w as default};

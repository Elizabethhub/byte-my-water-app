import{d as g,c as j,au as P,a as f,r as y,j as s,av as t,O as n,P as d,aw as F,B as i}from"./index-aa6136aa.js";import{F as b,a as C,b as E,c,d as p,e as k}from"./ForgotPassword.styled-14bf0018.js";const B=()=>{const{register:o,handleSubmit:u}=g({mode:"onChange"}),w=j(),l=P(),h=f(),[e,x]=y.useState(!1);function m({newPassword:a}){w(F({tempCode:l,newPassword:a})).unwrap().then(()=>{i.info(`Your password change succsessful!
Please login!`),h("/signin")}).catch(()=>i.error("Oops something went wrong!!"))}function r(){x(a=>!a)}return s.jsxs(b,{children:[s.jsx(C,{children:"Update your password"}),s.jsxs(E,{onSubmit:u(m),children:[s.jsxs(c,{children:["New password",s.jsx(p,{type:e?"text":"password",...o("newPassword"),name:"newPassword",placeholder:"Your password",required:!0,minLength:8}),s.jsx(t,{type:"button",onClick:r,children:e?s.jsx(n,{}):s.jsx(d,{})})]}),s.jsxs(c,{children:["Confirm new password",s.jsx(p,{...o("confPassword"),name:"confPassword",type:e?"text":"password",placeholder:"Your password",required:!0,minLength:8}),s.jsx(t,{type:"button",onClick:r,children:e?s.jsx(n,{}):s.jsx(d,{})})]}),s.jsx(k,{"aria-label":"click to update password",children:"Update"})]})]})};export{B as default};
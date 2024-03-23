import{s as o}from"./index-27897a98.js";const t=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 100px;

  @media only screen and (min-width: 1280px) {
    max-width: 768px;
  }
`,e=o.form`
  display: flex;
  flex-direction: column;
`,r=o.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 25px;
`,n=o.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  position: relative;
`,a=o.input`
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid var(--primary-mediumblue);
  outline: none;
  color: var(--blue);
  margin-bottom: 20px;

  @media only screen and (min-width: 1280px) {
    max-width: 500px;
  }

  &::placeholder {
    color: var(--primary-blue);
    font-size: 16px;
    line-height: 20px;
  }
`,p=o.button`
  margin-bottom: 16px;
  background-color: var(--blue);
  border: 1px solid var(--blue);
  color: var(--white);
  padding: 8px 30px;
  border-radius: 10px;
  max-width: 150px;
  /* margin-left: auto; */

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  transition: all 0.4s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    /* font-size: 18px; */
  }
`;export{t as F,r as a,e as b,n as c,a as d,p as e};

import{s as o,ak as i}from"./index-ba023575.js";const a=o.div`
  margin-top: 24px;
  margin-bottom: 66px;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 162px;
    min-width: 384px;
  }
`,n=o.form`
  display: flex;
  flex-direction: column;

  label:first-child > input {
    border: 1px solid
      var(
        ${r=>r.$errorEmail?"--primary-red":"--primary-mediumblue"}
      );

    color: var(${r=>r.$errorEmail?"--primary-red":"--blue"});
  }
  label:nth-child(2) > input {
    border: 1px solid
      var(
        ${r=>r.$errorPassword?"--primary-red":"--primary-mediumblue"}
      );

    color: var(
      ${r=>r.$errorPassword?"--primary-red":"--blue"}
    );
  }
  label:nth-child(3) > input {
    border: 1px solid
      var(
        ${r=>r.$errorPassword?"--primary-red":"--primary-mediumblue"}
      );

    color: var(
      ${r=>r.$errorPassword?"--primary-red":"--blue"}
    );
  }
`,t=o.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`,p=o.input`
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid var(--primary-mediumblue);
  outline: none;
  background-color: ${r=>r.theme.formInputBackground};
  color: ${r=>r.theme.formInputColor};

  &::placeholder {
    color: var(--primary-blue);
    font-size: 16px;
    line-height: 20px;
  }
`,l=o.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  position: relative;
`,d=o.button`
  margin-bottom: 16px;

  border: 1px solid var(--blue);

  padding: 8px 30px;
  border-radius: 10px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  transition: all 0.4s;
  background: ${r=>r.theme.buttonBackground};
  color: ${r=>r.theme.buttonColor};
  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`,s=o(i)`
  color: var(--blue);
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: var(--primary-orange);
  }

  margin-right: 10px;
`,m=o.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 10px;
  top: 47px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;export{a as F,t as H,l as L,m as P,n as S,p as a,d as b,s as c};

import styled from 'styled-components';

export const StyledModalEditStat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 256px;
  border-radius: 10px;
  background-color: var(--primary-lightblue);
  padding: 8px 24px 8px 24px;
  margin-bottom: 24px;
  span {
    font-size: 18px;
    color: var(--blue);
  }
  p {
    font-size: 12px;
    color: var(--black);
  }
  @media only screen and (min-width: 768px) {
    width: 254px;
  }
  @media only screen and (min-width: 1280px) {
    width: 254px;
  }
`;

export const StyledModalEditInput = styled.input`
  width: 256px;
  border-radius: 6px;
  border: 1px solid var(--primary-mediumblue);
  padding: 12px 10px 12px 10px;
  &::placeholder {
    color: var(--blue);
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    width: 544px;
  }
  @media only screen and (min-width: 1280px) {
    width: 544px;
  }
`;

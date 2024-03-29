import styled from 'styled-components';

export const SectionTodayAndCalendar = styled.section`
  height: max-content;
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  box-shadow: 0px 4px 14px 0px #407bff4d;
  border-radius: 10px;
  background: ${(props) => props.theme.divCantainerBackground};

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
  }
`;

import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;

  h2 {
    color: ${(props) => props.theme.colorBody};
    font-weight: 500;
    font-size: 24px;
    line-height: 1.23;

    @media screen and (min-width: 768px) {
      font-size: 26px;
    }
  }
`;

export const StyledList = styled.ul`
  max-height: 180px;
  overflow: auto;

  @media screen and (min-width: 768px) {
    min-height: 177px;
    max-height: 200px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    margin-left: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.backgroundColorScroll};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.backgroundTrackScroll};
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 12px 0;
  border-bottom: ${(props) => props.theme.borderBottomForToday};
  /* 2A3052 */
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Amount = styled.p`
  color: #407bff;
  font-size: 18px;
  line-height: 1.33;
  min-width: 55px;
`;

export const Time = styled.p`
  color: ${(props) => props.theme.colorBody};
  font-size: 12px;
  line-height: 2;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  & > div:nth-child(1):hover {
    cursor: pointer;
    border-bottom: 1px solid #9ebbff;
  }

  & > div:nth-child(2):hover {
    cursor: pointer;
    border-bottom: 2px solid #ef5050;
  }
`;

export const AddBtnWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: start;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    padding: 0;
    outline: transparent;

    span {
      color: #407bff;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.33;
      transition: all 0.3s ease;
      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
    }

    &:hover {
      cursor: pointer;
      span {
        color: #ff9d43;
      }
    }
  }
`;

export const EmptyListMessage = styled.h3`
  color: #407bff;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.23;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from 'styled-components';

export const ContentWrapperCalendar = styled.div`
  width: 100%;
`;

export const MonthHeading = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.colorBody};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const MonthSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .arrow {
    background: transparent;
    border: none;
    padding: 0;
    width: 14px;
    cursor: pointer;

    svg {
      path {
        transition: all 0.3s ease;
      }
    }
  }

  .arrow:hover {
    svg {
      path {
        fill: #ffa756;
      }
    }
  }

  .month__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #407bff;
    width: 120px;
  }

  .arrow[disabled] {
    cursor: auto;
    svg {
      path {
        fill: transparent;
      }
    }
  }
`;

export const MonthList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 26px;
  margin-top: 16px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px 22px;
  }
`;

export const DayStyles = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 0em;

  &.today {
    span.day {
      font-weight: 900;
      border: ${({ $percentageToday }) =>
        $percentageToday < 100 || $percentageToday?.length === 0
          ? '1px solid #FF9D43'
          : 'none'};
      border: ${({ $percentageToday }) =>
        $percentageToday >= 100 ? '1px solid #407bff' : ''};
    }
  }

  span.day {
    transition: all 0.5s ease;
  }
  span.day:hover,
  span.day:focus {
    box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  }

  span {
    display: block;
  }
  .day {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.dayStylesDayBackground};
    border-radius: 50%;
    border: ${({ $percentage }) =>
      $percentage < 100 || $percentage?.length === 0
        ? '1px solid #FF9D43'
        : 'none'};
    border: ${({ $percentage }) =>
      $percentage >= 100 ? '1px solid #407bff' : ''};

    font-size: 14px;
    line-height: 1.29;

    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
      font-size: 16px;
      line-height: 1.25;
    }
  }
  .percentage {
    font-size: 10px;
    line-height: 16px;
    color: ${(props) => props.theme.dayStylesDayPercentage};
  }
`;

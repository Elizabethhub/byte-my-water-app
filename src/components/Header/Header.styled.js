import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 14px;
  align-items: center;
`;

export const HeaderDivSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 15px;
`;

export const HeaderDivSetting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 15px;
`;

export const HeaderDivButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderImg = styled.img`
  border-radius: 100%;
  width: 28px;
  height: 28px;
`;

export const HeaderSpan = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  color: #407bff;
`;
export const HeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 28px;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;
export const HeaderLink = styled(NavLink)`
  font-weight: 400;
  font-size: 18px;
  padding-right: 9px;
  color: #407bff;
  transition: all ease 0.3s;
  &:hover,
  &:focus {
    color: #ffa756;
    outline: none;
  }
`;

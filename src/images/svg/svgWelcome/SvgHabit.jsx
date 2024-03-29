import styled from 'styled-components';

export const SvgHabitSVG = styled.svg`
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const SvgHabitPath = styled.path`
  @media only screen and (min-width: 768px) {
  }
`;

const SvgHabit = (props) => (
  <SvgHabitSVG
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <SvgHabitPath
      stroke="#407BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 4v3m14-3v3M4 25V10a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v15M4 25a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3M4 25V15a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v10m-12-8h.01v.01H16V17Zm0 3h.01v.01H16V20Zm0 3h.01v.01H16V23Zm-3-3h.01v.01H13V20Zm0 3h.01v.01H13V23Zm-3-3h.01v.01H10V20Zm0 3h.01v.01H10V23Zm9-6h.01v.01H19V17Zm0 3h.01v.01H19V20Zm0 3h.01v.01H19V23Zm3-6h.01v.01H22V17Zm0 3h.01v.01H22V20Z"
    />
  </SvgHabitSVG>
);
export default SvgHabit;

import styled from 'styled-components';

const CupLoader = styled.div`
  margin: 0;
  padding: 0;
  background: #262626;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110px;
  height: 130px;
  border: 6px solid rgba(0, 0, 0, 0%);
  border-top: 2px solid transparent;
  border-radius: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: url(https://image.ibb.co/fmHm66/wave.png);
  background-position: 0px 350px;
  background-repeat: repeat-x;
  animation: filling 1s ease-in-out infinite;
  box-shadow:
    0 0 0 6px #dddddd,
    0 10px 25px #000000;

  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 80px;
    border: 6px solid #dddddd;
    right: -57px;
    top: 30px;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
  }

  @keyframes filling {
    50% {
      background-position: 500px 0px;
    }
    100% {
      background-position: 1000px 50px;
    }
  }
`;

const Cup = () => {
  return <CupLoader></CupLoader>;
};

export default Cup;

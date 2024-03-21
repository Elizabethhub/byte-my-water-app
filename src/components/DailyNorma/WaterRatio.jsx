import {
  RangeWrapper,
  RangeButton,
  RangePercent,
  RangePercentWrap,
  RangeSpanLine,
  RangeInputTitle,
} from './WaterRatio.styled';
import AddSvg from '../../images/svg/svgDailyNorma/AddSvg';

import InputComponent from './InputComponent';

import { useDispatch, useSelector } from 'react-redux';
import { changeModalAddForm } from '../../store/water/waterSlice';
import ModalWater from '../ModalWater/ModalWater';
import { modalIsOpen } from '../../store/water/selectors';

const WaterRatio = () => {
  const isModalOpen = useSelector(modalIsOpen);
  const dispatch = useDispatch();

  return (
    <RangeWrapper>
      <div>
        <RangeInputTitle>Today</RangeInputTitle>
        <InputComponent />
        <RangePercentWrap>
          <RangePercent>
            <RangeSpanLine>|</RangeSpanLine>
            0%
          </RangePercent>
          <RangePercent $fsize="16px" $fweight="500">
            <RangeSpanLine>|</RangeSpanLine>
            50%
          </RangePercent>
          <RangePercent>
            <RangeSpanLine>|</RangeSpanLine>
            100%
          </RangePercent>
        </RangePercentWrap>
      </div>
      <RangeButton
        onClick={() => {
          dispatch(changeModalAddForm(true));
        }}
      >
        <AddSvg />
        Add Water
      </RangeButton>
      {isModalOpen && <ModalWater />}
    </RangeWrapper>
  );
};

export default WaterRatio;

// import { useState } from 'react';
import {
  AddBtnWrapper,
  Amount,
  BtnWrapper,
  InfoWrapper,
  ListItem,
  ListWrapper,
  StyledList,
  Time,
} from './TodayElement.styled';
import EditSvg from '../../images/svg/svgToday/EditSvg';
import DeleteSvg from '../../images/svg/svgToday/DeleteSvg';
import SvgGlass from '../../images/svg/svgToday/GlassSvg';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeModalAddForm,
  changeModalDeleteForm,
  changeModalEditForm,
  changeModalId,
} from '../../store/water/waterSlice';
import {
  modalDeleteOpen,
  modalId,
  selectorWaterToday,
} from '../../store/water/selectors.js';
import ModalDeleteWater from '../ModalDeleteWater/ModalDeleteWater.jsx';
import { useEffect } from 'react';
import { fetchAllWaterThunk } from '../../store/water/operations.js';
import { selectUser } from '../../store/auth/selectors.js';
import { format } from 'date-fns';

const TodayElement = () => {
  const isModalOpen = useSelector(modalDeleteOpen);
  const isUser = useSelector(selectUser);
  const id = useSelector(modalId);
  console.log('id', id);
  const waterTodayList = useSelector(selectorWaterToday);
  console.log('waterTodayList', waterTodayList);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('WORK?');
    if (isUser) {
      dispatch(fetchAllWaterThunk());
    }
  }, [dispatch]);

  return (
    <>
      <ListWrapper>
        <h2>Today</h2>
        <StyledList>
          {waterTodayList.map((item) => {
            return (
              <ListItem id={item._id} key={item._id}>
                <InfoWrapper>
                  <SvgGlass />
                  <Amount>{item.milliliters} ml</Amount>
                  <Time>{format(item.time, 'hh:mm a')}</Time>
                  {/* <Time>{console.log(item.time)} PM</Time> */}
                </InfoWrapper>
                <BtnWrapper>
                  <div
                    onClick={() => {
                      dispatch(changeModalEditForm(true));
                      dispatch(changeModalId(item._id));
                    }}
                  >
                    <EditSvg />
                  </div>
                  <div
                    onClick={() => {
                      dispatch(changeModalId(item._id));
                      dispatch(changeModalDeleteForm(true));
                    }}
                  >
                    <DeleteSvg />
                  </div>
                </BtnWrapper>
              </ListItem>
            );
          })}
        </StyledList>

        <AddBtnWrapper>
          <button
            onClick={() => {
              dispatch(changeModalAddForm(true));
            }}
          >
            <span>+</span>
            <span>Add water</span>
          </button>
        </AddBtnWrapper>
        {isModalOpen && (
          <ModalDeleteWater
            waterItem={waterTodayList.find((item) => {
              console.log('item', item);
              console.log('id', id);
              return item._id === id;
            })}
          />
        )}
      </ListWrapper>
    </>
  );
};

export default TodayElement;

import SvgCross from '../../images/svg/svgModal/SvgCross.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { modalDeleteOpen, modalId } from '../../store/water/selectors.js';
import { changeModalClose, deleteWater } from '../../store/water/waterSlice.js';
import { useEffect } from 'react';
import {
  StyledModalCancelBtn,
  StyledModalDeleteBackdrop,
  StyledModalDeleteBtn,
  StyledModalDeleteButtons,
  StyledModalDeleteClose,
  StyledModalDeleteForm,
  StyledModalDeleteWrapper,
} from './ModalDeleteWater.styled.js';
import useClickBackdrop from '../../hooks/modalCloseBackdrop.js';
import useKeyDown from '../../hooks/modalCloseEsc.js';
import {
  deleteWaterThunk,
  fetchMonthWaterThunk,
  fetchTodayWaterThunk,
} from '../../store/water/operations.js';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const ModalDeleteWater = () => {
  const isModalOpen = useSelector(modalDeleteOpen);
  const id = useSelector(modalId);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = (e) => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    e.preventDefault();
    const date = new Date().toISOString().split('T')[0];
    dispatch(deleteWaterThunk(id))
      .unwrap()
      .then(() => {
        dispatch(deleteWater(id));
        dispatch(fetchTodayWaterThunk({ date }));
        dispatch(changeModalClose(false));
        dispatch(fetchMonthWaterThunk({ year, month }));
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clickBackdrop = useClickBackdrop();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  useKeyDown(() => {
    dispatch(changeModalClose(false));
  }, [dispatch, isModalOpen]);

  return (
    isModalOpen && (
      <StyledModalDeleteBackdrop open={isModalOpen} onClick={clickBackdrop}>
        <StyledModalDeleteWrapper>
          <h2>{t('deleteEntry')}</h2>

          <StyledModalDeleteClose
            onClick={() => {
              dispatch(changeModalClose(false));
            }}
            aria-label={t('closeWindow')}
          >
            <SvgCross />
          </StyledModalDeleteClose>

          <StyledModalDeleteForm onSubmit={onSubmit}>
            <p>{t('areYouSureYouWantToDeleteTheEntry')}</p>
            <StyledModalDeleteButtons>
              <StyledModalDeleteBtn
                type="submit"
                aria-label={t('deleteWaterNote')}
              >
                {t('delete')}
              </StyledModalDeleteBtn>
              <StyledModalCancelBtn
                onClick={() => {
                  dispatch(changeModalClose(false));
                }}
                aria-label={t('cancelAction')}
              >
                {t('cancel')}
              </StyledModalCancelBtn>
            </StyledModalDeleteButtons>
          </StyledModalDeleteForm>
        </StyledModalDeleteWrapper>
      </StyledModalDeleteBackdrop>
    )
  );
};

export default ModalDeleteWater;

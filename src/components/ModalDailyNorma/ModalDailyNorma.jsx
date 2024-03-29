import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { isModalDayNorm } from '../../store/water/selectors';
import { selectUser } from '../../store/auth/selectors.js';
import { editDailyNormaThunk } from '../../store/water/operations.js';
import { changeModalClose } from '../../store/water/waterSlice.js';
import { changeDayNorma } from '../../store/auth/slice.js';
import {
  calculateVolume,
  handleInput,
  textData,
} from '../../helpers/ModalDayNorma/helper.js';
import useClickBackdrop from '../../hooks/modalCloseBackdrop.js';
import FormulaField from './FormulaField.jsx';
import RadioGroupComponent from './RadioGroup.jsx';
import InputBox from './InputBox.jsx';
import {
  SaveButton,
  StyledBackdrop,
  StyledCross,
  StyledRequiredLitres,
  StyledWrapper,
  StyledInputBox,
} from './ModalDailyNorma.styled.js';
import SvgCross from '../../images/svg/svgModal/SvgCross';

const ModalDailyNorma = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalDayNorm);
  const userObject = useSelector(selectUser);
  const dayNormaValue = userObject?.dailyNorma;
  const genderUserValue = userObject?.gender;

  const [genderValue, setGenderValue] = useState(genderUserValue);
  const [massQuery, setMassQuery] = useState(0);
  const [timeQuery, setTimeQuery] = useState(0);
  const [volume, setVolume] = useState(0);
  const [waterQuery, setWaterQuery] = useState('');
  const { time, weight, waterAmount, howMuch } = textData;

  const clickBackdrop = useClickBackdrop();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dispatch(changeModalClose(false));
      }
    };
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isModalOpen]);

  useEffect(() => {
    const calculatedVolume = calculateVolume(massQuery, timeQuery, genderValue);
    const parsedVolume = parseFloat(calculatedVolume);
    setVolume((isNaN(parsedVolume) ? 0 : parsedVolume) || dayNormaValue / 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [massQuery, timeQuery, genderValue]);

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
  };
  const handleMassInput = (e) => {
    handleInput(e, setMassQuery);
  };

  const handleTimeInput = (e) => {
    handleInput(e, setTimeQuery);
  };

  const handleWaterInput = (e) => {
    handleInput(e, setWaterQuery);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const finalValue = waterQuery * 1000 || volume * 1000;
    dispatch(editDailyNormaThunk({ dailyNorma: finalValue }))
      .unwrap()
      .then(() => {
        dispatch(changeDayNorma(finalValue));
        setTimeout(() => {
          dispatch(changeModalClose(false));
        }, 300);
        toast.success('Daily norma successfully updated');
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.message;
          toast.error(errorMessage);
        } else {
          toast.error('An error occurred. Please try again.');
        }
      });
  };

  return (
    isModalOpen && (
      <StyledBackdrop open={isModalOpen} onClick={clickBackdrop}>
        <StyledWrapper onSubmit={onSubmit}>
          <h2>{t('mydailynorma')}</h2>
          <StyledCross
            onClick={() => {
              dispatch(changeModalClose(false));
            }}
            aria-label={t('closeWindow')}
          >
            <SvgCross />
          </StyledCross>
          <FormulaField />
          <RadioGroupComponent
            genderValue={genderValue}
            handleGenderChange={handleGenderChange}
          />
          <InputBox
            paragrName={weight}
            inputName={'mass'}
            min={waterQuery ? false : '40'}
            max={'300'}
            inputValue={massQuery}
            handler={handleMassInput}
          />
          <InputBox
            paragrName={time}
            max={'24'}
            inputName={'time'}
            inputValue={timeQuery}
            handler={handleTimeInput}
          />
          <StyledRequiredLitres>
            <p>{t(`${waterAmount}`)}</p>
            <span>
              {volume.toFixed(1)} {t(`L`)}
            </span>
          </StyledRequiredLitres>
          <h3>{t(`${howMuch}`)}</h3>
          <StyledInputBox>
            <input
              type="number"
              name="waterVolume"
              min="<1"
              max="15"
              value={waterQuery}
              onChange={handleWaterInput}
              placeholder={`${volume}`}
              required={volume > 0 ? waterQuery : true}
            />
          </StyledInputBox>
          <SaveButton type="submit" aria-label="click to save">
            {t('save')}
          </SaveButton>
        </StyledWrapper>
      </StyledBackdrop>
    )
  );
};

export default ModalDailyNorma;

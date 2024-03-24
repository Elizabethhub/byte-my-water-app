import styled, { createGlobalStyle } from 'styled-components';
import imageDesktop from '../../images/backgroundHome/Background.png';
import imageDesktopDark from '../../images/backgroundHome/BackgroundDark.png';

import imageTablet from '../../images/backgroundHome/BackgroundTabletWhite.png';
import imageMobale from '../../images/backgroundHome/BackgroundMobale.png';

import imageTabletDark from '../../images/backgroundHome/BackgroundTabletDark.png';
import imageMobaleDark from '../../images/backgroundHome/BackgroundMobaleDark.png';

import imageWelcomeDesktop from '../../images/backgroundWelcome/BackgroundWelcomWhiteDesctop.png';
import imageWelcomeDesktopDark from '../../images/backgroundWelcome/BackgroundWelcomDarkDesctop.png';

import imageWelcomeTablet from '../../images/backgroundWelcome/BackgroundWelcomWhiteTablet.png';
import imageWelcomeMobale from '../../images/backgroundWelcome/BackgroundWelcomWhiteMobale.png';

import imageWelcomeTabletDark from '../../images/backgroundWelcome/BackgroundWelcomDarkTablet.png';
import imageWelcomeMobaleDark from '../../images/backgroundWelcome/BackgroundWelcomDarkTablet.png';

export const StyledApp = styled.div`
  min-height: 100vh;
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.colorBody};
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.colorBody};
  }
`;

export const ThemeStyledButton = styled.button`
  background: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  /* Контейнер */
  background: ${(props) => props.theme.backgroundWelcomeImageTablet};
  background: ${(props) => props.theme.backgroundWelcomeImageMobale};
`;

export const darkTheme = {
  svgAddSvg: `#1C1D26`,
  backgroundLinearGradientTo: `#2F3875`,
  backgroundLinearGradientRight: '#2A3052',
  body: '#1c1c1c',
  backgroundImage: `url(${imageDesktopDark})`,
  backgroundImageMobale: `url(${imageMobaleDark})`,
  backgroundImageTablet: `url(${imageTabletDark})`,

  backgroundWelcomeImage: `url(${imageWelcomeDesktopDark})`,
  backgroundWelcomeImageMobale: `url(${imageWelcomeMobaleDark})`,
  backgroundWelcomeImageTablet: `url(${imageWelcomeTabletDark})`,

  rangeInputBackground: '#1c1d26;',
  colorBody: '#d5dff5;',
  test: '#ee1010',
  icon: '#d5dff5',
  iconHeader: '#D5DFF5',
  buttonBackground: '#5082f2;',
  buttonColor: '#1c1d26;',
  welcomeWhyDrinkDivCantainerBackground: '#1f2438;',
  BottleSVG: '#1B1B21;',

  formInputBackground: '#1c1d26;',
  formInputColor: '#5082f2;',
  formInputColorPlaceholder: '#2f3875;',

  dailyWrapperBorder: '1px solid #1f2438;',
  dailyWrapperBackground: '#1c1d26;',
  dailyWrapperBoxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2);',

  divCantainerBackground: '#1f2438;',

  modalCantainerBackground: '#1f2438;',
  modalCantainerBoxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2);',

  dayStylesDayBackground: '#1c1d26;',
  dayStylesDayPercentage: '#2f3875;',
  boxShodov: '0 4px 14px 0 rgba(0, 0, 0, 0.54);',

  borderBottomForToday: '1px solid #2A3052',
  backgroundColorScroll: '#2F3875',
  backgroundTrackScroll: '#2A3052',
  inputOnlyColor: '--input-dark',
  inputColorText: '--input-color-dark',
  inputTheme: '1px solid #2f3875',
};

export const lightTheme = {
  svgAddSvg: `#fff`,
  body: '#fff;',
  backgroundImage: `url(${imageDesktop})`,
  backgroundImageMobale: `url(${imageMobale})`,
  backgroundImageTablet: `url(${imageTablet})`,

  backgroundWelcomeImage: `url(${imageWelcomeDesktop})`,
  backgroundWelcomeImageMobale: `url(${imageWelcomeMobale})`,
  backgroundWelcomeImageTablet: `url(${imageWelcomeTablet})`,

  rangeInputBackground: '#d5dff5;',

  backgroundLinearGradientTo: `#9ebbff`,
  backgroundLinearGradientRight: '#d7e3ff',

  colorBody: '#2f2f2f',
  test: '#ee1010',
  icon: '#5d8ffa',
  iconHeader: '#2F2F2F',
  buttonBackground: '#407bff',
  buttonColor: '#fff',
  welcomeWhyDrinkDivCantainerBackground: '#ecf2ff;',
  BottleSVG: '#F5F5F5;',

  formInputBackground: '#fff;',
  formInputColor: '#407bff;',
  formInputColorPlaceholder: '#9ebbff;',

  dailyWrapperBorder: '1px solid #ecf2ff',
  dailyWrapperBackground: '#fff;',
  dailyWrapperBoxShadow: '0 4px 8px 0 rgba(158, 187, 255, 0.12);',

  divCantainerBackground: '#ECF2FF;',

  modalCantainerBackground: '#fff;',
  modalCantainerBoxShadow: '0px 4px 4px 0px rgba(64, 123, 255, 0.3);',

  dayStylesDayBackground: '#fff;',
  dayStylesDayPercentage: '#9ebbff;',
  boxShodov: '0 4px 8px 0 rgba(64, 123, 255, 0.34);',

  borderBottomForToday: '1px solid #d7e3ff',
  backgroundColorScroll: '#9ebbff',
  backgroundTrackScroll: '#d7e3ff',

  inputOnlyColor: '--primary-mediumblue',
  inputColorText: '--primary-blue',
  inputTheme: '1px solid var(--primary-mediumblue)',
};
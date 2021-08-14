import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const COLORS = {
    border: '#e6e6e6',
    background: '#f9f9f9',
    divider: '#eaecef',
    brandMain: '#6f127e',
    brandLight: '#8b4197',
    brandDark: '#4d0c58',

    secondary: '#171717',
    secondaryLight: '#171717',
    secondaryDark: '#171717',
    link: '#23457f',
    label: '#999999',
    data: '#333333',
    chipBackground: '#eeeeee',
    buttonBackground: '#FAFAFA',
    labelHover: '#666666',
    progressStart: '#00a03d',
    progressMiddle: '#FF9900',
    progressFinished: '#FF2152', //#a0003d
    danger: '#FF2152',
    iconColor: '#ccc',
    dividerCutColor: '#e8e9eb',
    dividerCutColorMobile: '#ecedef',
    detected: '#0098ff',
    confirmed: '#00a03d',
    successMain: '#00a03d',
    successLight: '#ccecd852',
    errorLight: '#ffeeee',
    veryLightPink: '#cccccc'
  }

let appTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
      'Yekan Bakh',
    ].join(','),
  },
  palette: {
    primary: {
      main: COLORS.brandMain,
      light: COLORS.brandLight,
      dark: COLORS.brandDark,
    },
    secondary: {
      main: COLORS.secondary,
      light: COLORS.secondaryLight,
      dark: COLORS.secondaryDark,
    },
    success: {
      light: COLORS.successLight,
      main: COLORS.successMain
    },
    error:{
      main: COLORS.danger,
      light: COLORS.errorLight
    },
    info:{
      main: COLORS.detected
    },
    text: {
      primary: COLORS.data,
      secondary: COLORS.label,
    },
    divider: COLORS.divider,
    grey: {
      "700": COLORS.veryLightPink,
      "600": COLORS.data,
      "500": COLORS.labelHover,
      "400": COLORS.label,
      "300": COLORS.border,
      "200": COLORS.chipBackground,
      "100": COLORS.buttonBackground,
    },
    action: {
      active: COLORS.link,
    },
    background: {
      default: COLORS.background,
      paper: '#fff',
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        backgroundColor: COLORS.background,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8,
      },
      elevation1: {
        boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.1)',
      },
    },
    MuiCssBaseline: {
      '@global': {
      body: {
        flip: false,
        direction: 'rtl',
      },
      html: {
          backgroundColor: COLORS.background,
        },
        'html *': {
          fontFamily: 'Yekan Bakh',
        },
      },
    },
  },
});

appTheme = responsiveFontSizes(appTheme)


export default appTheme;


import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold', // Жирное начертание для h1
      fontSize: '4rem', // Размер шрифта для h1 (можно настроить)
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold', // Жирное начертание для h2
      fontSize: '3rem', // Размер шрифта для h2 (можно настроить)
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold', // Жирное начертание для h3
      fontSize: '2.5rem', // Размер шрифта для h3 (можно настроить)
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold', // Жирное начертание для h4
      fontSize: '2rem', // Размер шрифта для h4 (можно настроить)
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold', // Жирное начертание для h5
      fontSize: '1.5rem', // Размер шрифта для h5 (можно настроить)
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold', // Жирное начертание для h6
      fontSize: '1.25rem', // Размер шрифта для h6 (можно настроить)
    },
  },
  palette: {
    primary: {
      main: '#3E87FE', // rgb(62, 135, 254) в hexadecimal формате
      light: '#90B4FF',
      dark: '#0056E9',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#000000', // второстепенный цвет
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#000000', // основной цвет текста
      secondary: '#616161', // второстепенный цвет текста
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: 'none',
          '&:hover': {
            borderColor: '#3E87FE',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '1px solid black',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, sans-serif',
        },
      },
    },
  },
  cssVariables: false, // Явно отключаем CSS-переменные
});

import { createTheme } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';

const mode = 'dark';
const primary = { main: '#ffc107' };
const theme = createTheme({
  palette: {
    mode,
    background: {
      default: '#161c24',
      paper: '#161c24',
    },
    primary,
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar({
          track: '#21272f',
          thumb: '#37362a',
          active: primary.main,
        }),
      },
    },
  },
});

export default theme;

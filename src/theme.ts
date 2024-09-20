'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-montserrat)',
  },
  palette : {
    primary: {
      main : "#18181b"
    }
  }
});

export default theme;

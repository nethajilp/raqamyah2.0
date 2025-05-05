import React from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

const PageContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      sx={{
        minWidth: {
          xs: '100%',    // <600px
          sm: '100%',   // ≥600px
          md: '900px',   // ≥900px
          lg: '1200px',  // ≥1200px
          xl: '1536px',  // ≥1536px
        },
        paddingLeft: {
          xs: theme.spacing(2),
          sm: theme.spacing(3),
          md: theme.spacing(4),
        },
        paddingRight: {
          xs: theme.spacing(2),
          sm: theme.spacing(3),
          md: theme.spacing(4),
        },
        paddingBottom: {
          xs: theme.spacing(4),
          sm: theme.spacing(4),
          md: theme.spacing(6),
        },
        paddingTop: {
          xs: theme.spacing(4),
          sm: theme.spacing(4),
          md: theme.spacing(10),
        },
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;

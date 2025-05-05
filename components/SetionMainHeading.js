

"use client";
import { Button, styled, Typography } from "@mui/material";

const StyledAboutTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.fontSize[56],
    lineHeight: '110%',
    fontWeight: theme.typography.fontWeights.semiBold,
    color: theme.palette.text.darkBlue,
    textAlign: 'center',
    maxWidth:'556px',
    [theme.breakpoints.down('lg')]: {
      fontSize: theme.typography.fontSize[32],
      maxWidth:'343px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.fontSize[32],
      maxWidth:'343px',
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth:'343px',
      fontSize: theme.typography.fontSize[32],

    },
  }));

export default function SetionMainHeading({ children, ...props }) {
    return (
      <StyledAboutTitle variant="h2" {...props}>
        {children}
      </StyledAboutTitle>
    );
  };
  
  
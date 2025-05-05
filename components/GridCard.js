import { CardActionArea, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled components
const AboutCardWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const AboutCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "flex-start",
  textAlign: "left",
  padding: theme.spacing(3),
}));

const FlexContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: theme.spacing(7),
}));

const AboutCardHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[20],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize[28],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  textAlign: "left",
  marginBottom: theme.spacing(1),
}));

const AboutCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "left",
}));

// GridCard Component
const GridCard = ({ image, heading, description }) => {
  return (

    <AboutCardWrapper>
    <CardActionArea style={{ flex: 1 }}>
      <AboutCardContent>
        <FlexContainer>
          <img
            src={image}
            alt={`${heading} icon`}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginBottom: "16px",
            }}
          />
        </FlexContainer>
        <AboutCardHeading variant="h2">{heading}</AboutCardHeading>
        <AboutCardDescription variant="body2">
          {description}
        </AboutCardDescription>
      </AboutCardContent>
    </CardActionArea>
  </AboutCardWrapper>

  );
};

export default GridCard;

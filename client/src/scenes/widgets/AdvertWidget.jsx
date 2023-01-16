import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75ren", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>N&N Cosmetics</Typography>
        <Typography color={medium}>www.nncosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Elevate your look and embrace your individuality with N&N Cosmetics.
        Indulge in a luxurious beauty experience with N&N.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

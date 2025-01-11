import styled from "styled-components";

const BaseTypography = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Pretendard", "Arial, sans-serif";
`;

export const H5 = styled(BaseTypography)`
  font-size: 17.72px;
  font-weight: 700;
`;

export const H6 = styled(BaseTypography)`
  font-size: 16.43px;
  font-weight: 400;
  letter-spacing: 0.0015em;
`;

export const Subtitle1 = styled(BaseTypography)`
  font-size: 15.14px;
  font-weight: 400;
  letter-spacing: 0.0015em;
`;

export const Subtitle2 = styled(BaseTypography)`
  font-size: 14.5px;
  font-weight: 400;
  letter-spacing: 0.001em;
`;

export const Button = styled(BaseTypography)`
  font-size: 14.5px;
  font-weight: 400;
`;

export const Body1 = styled(BaseTypography)`
  font-size: 15.14px;
  font-weight: 700;
`;

export const Body2 = styled(BaseTypography)`
  font-size: 15.14px;
  font-weight: 400;
  letter-spacing: 0.0025em;
  text-align: left;
`;

export const Caption = styled(BaseTypography)`
  font-size: 13.86px;
  font-weight: 400;
  letter-spacing: 0.004em;
`;

export const Overline = styled(BaseTypography)`
  font-size: 13.22px;
  font-weight: 400;
  letter-spacing: 0.015em;
`;

import { ReactNode } from "react";
import { jsx } from "react/jsx-runtime";

import * as S from "./style";
import { theme } from "../../../styles/theme";
import { Color } from "../../../type/color";

type TypographTypoType =
  | "H5"
  | "H6"
  | "Subtitle1"
  | "Subtitle2"
  | "Button"
  | "Body1"
  | "Body2"
  | "Caption"
  | "Overline";

const TypoMap = {
  H5: S.H5,
  H6: S.H6,
  Subtitle1: S.Subtitle1,
  Subtitle2: S.Subtitle2,
  Button: S.Button,
  Body1: S.Body1,
  Body2: S.Body2,
  Caption: S.Caption,
  Overline: S.Overline,
};

const Typography = ({
  color,
  typoSize,
  children,
}: {
  color?: Color;
  typoSize: TypographTypoType;
  children: ReactNode;
}) => {
  const Typo = TypoMap[typoSize];

  const Color = color ? theme[color as keyof typeof theme] : theme.primary50;

  return jsx(Typo, { style: { color: Color }, children });
};
export default Typography;

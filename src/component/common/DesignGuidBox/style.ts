import styled from "styled-components";

import { Color } from "../../../type/color";
import { theme } from "../../../styles/theme";

export const Box = styled.div<{ color: string }>`
  width: 90px;
  height: 90px;
  padding: 10px;
  background-color: ${({ color }) => color};
`;

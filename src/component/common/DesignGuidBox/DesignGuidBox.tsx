import { theme } from "../../../styles/theme";
import { Color } from "../../../type/color";
import Typography from "../Typography/Typography";
import * as S from "./style";

const DesignGuidBox = ({ color }: { color: Color }) => {
  return <S.Box color={theme[color]} />;
};
export default DesignGuidBox;

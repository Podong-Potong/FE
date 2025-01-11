import DesignGuidBox from "../component/common/DesignGuidBox/DesignGuidBox";
import Column from "../component/common/Layouts/Column";
import Row from "../component/common/Layouts/Row";
import Typography from "../component/common/Typography/Typography";
import { Color } from "../type/color";

const PRIMARYCOLOR = [
  "primary98",
  "primary95",
  "primary90",
  "primary80",
  "primary70",
  "primary60",
  "primary50",
  "primary40",
];

const NEUTRALCOLOR = [
  "neutral98",
  "neutral95",
  "neutral90",
  "neutral80",
  "neutral70",
  "neutral60",
  "neutral50",
  "neutral40",
];

const NEUTRALVARIENTCOLOR = [
  "neutralVarient98",
  "neutralVarient95",
  "neutralVarient90",
  "neutralVarient80",
  "neutralVarient70",
  "neutralVarient60",
  "neutralVarient50",
  "neutralVarient40",
];

const Main = () => {
  return (
    <Column style={{ padding: "50px" }} gap={10}>
      <Typography typoSize="Body2" color="primary40">
        {"Primary Spectrum"}
      </Typography>
      <Row>
        {PRIMARYCOLOR.map((val) => (
          <DesignGuidBox color={val as Color} />
        ))}
      </Row>
      <Typography typoSize="Body2" color="neutral40">
        {"Neutral Spectrum"}
      </Typography>
      <Row>
        {NEUTRALCOLOR.map((val) => (
          <DesignGuidBox color={val as Color} />
        ))}
      </Row>
      <Typography typoSize="Body2" color="neutralVarient40">
        {"Neutral Varient Spectrum"}
      </Typography>
      <Row>
        {NEUTRALVARIENTCOLOR.map((val) => (
          <DesignGuidBox color={val as Color} />
        ))}
      </Row>
    </Column>
  );
};
export default Main;

import { useAtom } from "jotai";
import Row from "../../../common/Layouts/Row";
import Typography from "../../../common/Typography/Typography";
import * as S from "./style";
import { selectSpentType } from "../SelectCategory/state/selectCategoryAtom";

export default function SpendKindBtn() {
	const [selectBtn, setSelectBtn] = useAtom(selectSpentType);
	return (
		<Row gap={12}>
			<S.spendKindBtnWrapper isSelect={selectBtn === "in"} onClick={() => setSelectBtn("in")}>
				<Typography color="neutral100" typoSize="Subtitle3">
					{"수입"}
				</Typography>
			</S.spendKindBtnWrapper>
			<S.spendKindBtnWrapper isSelect={selectBtn === "out"} onClick={() => setSelectBtn("out")}>
				<Typography color="neutral100" typoSize="Subtitle3">
					{"지출"}
				</Typography>
			</S.spendKindBtnWrapper>
		</Row>
	);
}

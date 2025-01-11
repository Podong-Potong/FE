import SpendKindBtn from "../component/Calender/WriteSpendHabit/SpendKindBtn/SpendKindBtn";
import CustomInput from "../component/common/CustomInput/CustomInput";
import Column from "../component/common/Layouts/Column";
import Row from "../component/common/Layouts/Row";
import Typography from "../component/common/Typography/Typography";
import { ReactComponent as Arrow } from "../assets/icons/common/ci_chevron-right-md.svg";
import styled from "styled-components";
import SelectCategory from "../component/Calender/WriteSpendHabit/SelectCategory/SelectCategory";
import useModalStore from "../component/Calender/WriteSpendHabit/SelectCategory/useModalStore";

export const WriteSpendHabit = () => {
	const { isOpenModal, openModal } = useModalStore();

	return (
		<>
			<Column gap={10} style={{ marginBottom: "9px" }}>
				<Typography typoSize="Subtitle3" color="neutral60">
					{"01/16 소비 내역"}
				</Typography>
				<SpendKindBtn />
			</Column>
			<Column gap={29}>
				<CustomInput />
				<Row gap={10} verticalAlign="center" horizonAlign="distribute" style={{ width: "100%" }}>
					<Typography typoSize="Subtitle3" color="primary60">
						{"카테고리"}
					</Typography>
					<Arrow onClick={() => openModal()} />
				</Row>
				<Row gap={10}>
					<Typography typoSize="Subtitle2" color="neutral60">
						{"거래 일시"}
					</Typography>
					<Typography typoSize="Subtitle2" color="neutral60">
						{"클릭한 날짜"}
					</Typography>
				</Row>
				<Row gap={10}>
					<Typography typoSize="Subtitle2" color="neutral60">
						{"거래 장소"}
					</Typography>
					<Typography typoSize="Body1" color="neutral60">
						{"붕어빵"}
					</Typography>
				</Row>
			</Column>
			<WriteSpentBtn>
				<Typography typoSize="Button" color="neutral00">
					{"소비 기록하기"}
				</Typography>
			</WriteSpentBtn>
			{isOpenModal && <SelectCategory />}
		</>
	);
};

const WriteSpentBtn = styled.button`
	width: 90%;
	height: 44px;
	border-radius: 24px;
	position: absolute;
	bottom: 72px;
	background-color: #126b56;
`;

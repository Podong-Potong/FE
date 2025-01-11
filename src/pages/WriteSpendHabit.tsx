import SpendKindBtn from "../component/Calender/WriteSpendHabit/SpendKindBtn/SpendKindBtn";
import CustomInput, { inputMoney } from "../component/common/CustomInput/CustomInput";
import Column from "../component/common/Layouts/Column";
import Row from "../component/common/Layouts/Row";
import Typography from "../component/common/Typography/Typography";
import { ReactComponent as Arrow } from "../assets/icons/common/ci_chevron-right-md.svg";
import styled from "styled-components";
import SelectCategory from "../component/Calender/WriteSpendHabit/SelectCategory/SelectCategory";
import useModalStore from "../component/Calender/WriteSpendHabit/SelectCategory/useModalStore";
import axios from "axios";
import { useAtom, useAtomValue } from "jotai";
import {
	isOpenModal,
	selectCategory,
	selectSpentType
} from "../component/Calender/WriteSpendHabit/SelectCategory/state/selectCategoryAtom";
import CategoryBtn from "../component/Calender/WriteSpendHabit/SelectCategory/CategoryBtn";
import { CategoryType, SaveCategoryType } from "../type/category";
import { useNavigate } from "react-router-dom";
import { SelectedDateAtom } from "./CalendarPage";

export const WriteSpendHabit = () => {
	const [isOpenModalState, setIsOpenModalState] = useAtom(isOpenModal);
	const [selectCategoryAtom, setSelectCategoryAtom] = useAtom(selectCategory);
	const selectBtn = useAtomValue(selectSpentType);
	const money = useAtomValue(inputMoney);
	const navigate = useNavigate();
	const SelectedDate = useAtomValue(SelectedDateAtom);

	const handleData = () => {
		if (selectBtn === "out") {
			const selectCategory = CategoryType.find((val) => val.name === selectCategoryAtom);
			axios
				.post("http://121.133.3.6:8081/api/spending", {
					description: "붕어빵",
					amount: money,
					category: selectCategory?.type,
					date: SelectedDate,
					type: "EXPENSE"
				})
				.then(() => {
					navigate("/");
				});
		} else {
			const selectCategory = SaveCategoryType.find((val) => val.name === selectCategoryAtom);
			axios
				.post("http://121.133.3.6:8081/api/spending", {
					description: "붕어빵",
					amount: money,
					category: selectCategory?.type,
					date: SelectedDate,
					type: "INCOME"
				})
				.then(() => {
					navigate("/");
				});
		}
	};

	return (
		<>
			<Column gap={10} style={{ marginBottom: "9px" }}>
				<Typography typoSize="Subtitle3" color="neutral60">
					{SelectedDate + " 소비 내역"}
				</Typography>
				<SpendKindBtn />
			</Column>
			<Column gap={29}>
				<CustomInput />
				<Row gap={10} verticalAlign="center" horizonAlign="distribute" style={{ width: "100%" }}>
					<Typography typoSize="Subtitle3" color="primary60">
						{"카테고리"}
					</Typography>
					{selectCategoryAtom && <CategoryBtn key={selectCategoryAtom} name={selectCategoryAtom} />}
					{selectBtn && <Arrow onClick={() => setIsOpenModalState(true)} />}
				</Row>
				<Row gap={10}>
					<Typography typoSize="Subtitle2" color="neutral60">
						{"거래 일시"}
					</Typography>
					<Typography typoSize="Subtitle2" color="neutral60">
						{SelectedDate}
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
			<WriteSpentBtn onClick={() => handleData()}>
				<Typography typoSize="Button" color="neutral00">
					{"소비 기록하기"}
				</Typography>
			</WriteSpentBtn>
			{isOpenModalState && <SelectCategory />}
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

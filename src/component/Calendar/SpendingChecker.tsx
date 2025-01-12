import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/icons/ci_add-plus-circle.svg";
import { useNavigate } from "react-router-dom";
import { CategoryType, SaveCategoryType } from "../../type/category";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { SelectedDateAtom } from "../../pages/CalendarPage";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";
import Column from "../common/Layouts/Column";

type mockData = {
	category: string;
	date: string;
	description: string;
	amount: number;
	type: string;
};

export const RecommendAtom = atom(0);

export default function SpendingChecker({
	totalSpend,
	mockData,
	clickDate
}: {
	totalSpend: string;
	mockData: mockData[];
	clickDate: string | null;
}) {
	const navigate = useNavigate();
	const filterData = mockData.filter((val) => val.date === clickDate);
	const selectData = useAtomValue(SelectedDateAtom);
	const setRecommendAtom = useSetAtom(RecommendAtom);
	const { data, isLoading } = useQuery(["get"], () => axios.post("http://121.133.3.6:8081/api/goal/getlist"));
	useEffect(() => {
		setRecommendAtom(Number(data?.data.data[0]?.amount));
	}, [data]);

	return (
		<Container>
			<SpendingContainer>
				<TextContainer>
					<Recommended>권장 소비 금액</Recommended>
					<Recommended>{Number(data?.data.data[0]?.amount).toLocaleString("kr-KR") || 0} </Recommended>
				</TextContainer>
				<TextContainer>
					<SpendingText>총 소비</SpendingText>
					<SpendingMoney>{Number(totalSpend).toLocaleString("kr-KR")}</SpendingMoney>
				</TextContainer>
			</SpendingContainer>
			{selectData && (
				<>
					<HistoryContainer>
						{/* <HistoryTitle>권장 소비에서 71%나 덜 썼어요</HistoryTitle> */}

						{filterData.map((item, index) => {
							const category =
								CategoryType.find((category) => category.type === item.category) ||
								SaveCategoryType.find((category) => category.type === item.category);
							return (
								<CategoryContainer key={index}>
									<CategoryName style={{ width: "150px" }}>{category?.name}</CategoryName>
									<Column gap={3.5}>
										<Text>{item.date}</Text>
										<Text>{item.description}</Text>
									</Column>
									<MoneyText isOver={item.type === "EXPENSE"} style={{ width: "100px" }}>
										{Number(item.amount).toLocaleString("kr-KR")}
									</MoneyText>
								</CategoryContainer>
							);
						})}
					</HistoryContainer>

					<AddButton onClick={() => navigate("/writeSpendHabit")}>
						<PlusIcon />
						소비 기록 추가하기
					</AddButton>
				</>
			)}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const SpendingContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TextContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

const Recommended = styled.p`
	color: #8e918f;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.048px;
`;

const SpendingText = styled.p`
	color: #8e918f;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.048px;
`;

const SpendingMoney = styled.p`
	color: #ba1a1a;
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
`;

const HistoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	gap: 0.75rem;
`;

const HistoryTitle = styled.p`
	color: #0da484;
	font-size: 20px;
	font-weight: 700;
	line-height: 25px;
`;

const CategoryContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CategoryName = styled.div`
	display: flex;
	padding: 8px 16px;
	align-items: center;
	border-radius: 41px;
	background: #eff1ee;
	font-size: 14px;
	font-weight: 700;
	line-height: 21px;
`;

const UsageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Text = styled.p`
	color: #8e918f;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.048px;
`;

const MoneyText = styled.p<{ isOver: boolean }>`
	color: ${({ isOver }) => (isOver ? "#BA1A1AB2" : "#126B56B2")};
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
`;

const AddButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	margin-top: 1rem;
	color: #0da484;
	font-size: 16px;
	font-weight: 700;
	line-height: 25px;
`;

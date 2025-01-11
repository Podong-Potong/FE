import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/icons/ci_add-plus-circle.svg";
import { useNavigate } from "react-router-dom";
import { CategoryType } from "../../type/category";

type mockData = {
	category: string;
	date: string;
	usagePlace: string;
	amount: number;
};

export default function SpendingChecker({ totalSpend, mockData }: { totalSpend: string; mockData: mockData[] }) {
	const navigate = useNavigate();
	return (
		<Container>
			<SpendingContainer>
				<TextContainer>
					<Recommended>권장 소비 금액</Recommended>
					<Recommended>150,000원</Recommended>
				</TextContainer>
				<TextContainer>
					<SpendingText>총 소비</SpendingText>
					<SpendingMoney>{Number(totalSpend).toLocaleString("kr-KR")}</SpendingMoney>
				</TextContainer>
			</SpendingContainer>
			<HistoryContainer>
				<HistoryTitle>권장 소비에서 71%나 덜 썼어요</HistoryTitle>
				{mockData.map((item, index) => {
					const category = CategoryType.find((category) => category.type === item.category);
					return (
						<CategoryContainer key={index}>
							<CategoryName>{category?.name}</CategoryName>
							<UsageContainer>
								<Text>{item.date}</Text>
								<Text>{item.usagePlace}</Text>
							</UsageContainer>
							<MoneyText>{Number(item.amount).toLocaleString("kr-KR")}</MoneyText>
						</CategoryContainer>
					);
				})}
			</HistoryContainer>
			<AddButton onClick={() => navigate("/writeSpendHabit")}>
				<PlusIcon />
				소비 기록 추가하기
			</AddButton>
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

const MoneyText = styled.p`
	color: #8e918f;
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

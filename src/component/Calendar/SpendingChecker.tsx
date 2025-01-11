import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/icons/ci_add-plus-circle.svg";
import { useNavigate } from "react-router-dom";

const mockData = [
	{
		categoryName: "💄 뷰티",
		usageTime: "18:01",
		usagePlace: "올리브영 성수",
		amount: "35,870원"
	},
	{
		categoryName: "☕ 카페",
		usageTime: "14:30",
		usagePlace: "스타벅스 종로",
		amount: "8,900원"
	},
	{
		categoryName: "🍔 외식",
		usageTime: "12:15",
		usagePlace: "맥도날드 강남",
		amount: "12,500원"
	},
	{
		categoryName: "📚 도서",
		usageTime: "19:45",
		usagePlace: "교보문고 광화문",
		amount: "22,000원"
	}
];

export default function SpendingChecker() {
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
					<SpendingMoney>3,000원</SpendingMoney>
				</TextContainer>
			</SpendingContainer>
			<HistoryContainer>
				<HistoryTitle>권장 소비에서 71%나 덜 썼어요</HistoryTitle>
				{mockData.map((item, index) => (
					<CategoryContainer key={index}>
						<CategoryName>{item.categoryName}</CategoryName>
						<UsageContainer>
							<Text>{item.usageTime}</Text>
							<Text>{item.usagePlace}</Text>
						</UsageContainer>
						<MoneyText>{item.amount}</MoneyText>
					</CategoryContainer>
				))}
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

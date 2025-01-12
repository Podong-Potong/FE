import styled from "styled-components";
import { ReactComponent as FireWorksIcon } from "../../assets/icons/fireworks.svg";
import { ReactComponent as WarningIcon } from "../../assets/icons/warning.svg";

const mockData = [
	{ id: 1, date: "2025-01-12", spending: 0 },
	{ id: 2, date: "2025-01-11", spending: 15000 },
	{ id: 3, date: "2025-01-10", spending: 0 },
	{ id: 4, date: "2025-01-09", spending: 25000 }
];

export default function ChallengeHistory() {
	return (
		<Container>
			{mockData.map((data) => (
				<HistoryContainer isZero={data.spending === 0}>
					{data.spending === 0 ? <FireWorksIcon /> : <WarningIcon />}
					<TextContainer>
						<Date>{data.date}</Date>
						<MoneyHistory isZero={data.spending === 0}>
							소비내역 {data.spending.toLocaleString("ko-KR")}원
						</MoneyHistory>
					</TextContainer>
				</HistoryContainer>
			))}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const HistoryContainer = styled.div<{ isZero: boolean }>`
	display: flex;
	align-items: center;
	background-color: ${(props) => (props.isZero ? "#fff" : "#FFDAD6")};
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Date = styled.p`
	color: #5c5f5d;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.15px;
`;

const MoneyHistory = styled.p<{ isZero: boolean }>`
	color: ${(props) => (props.isZero ? "#126b56" : "#BA1A1A")};
	text-overflow: ellipsis;
	font-size: 20px;
	font-weight: 700;
	line-height: 25px;
`;

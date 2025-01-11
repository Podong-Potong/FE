import styled from "styled-components";
import PieCharts from "../common/Charts/PieCharts";

export function ProgressCard() {
	return (
		<Wrapper>
			<Title>오늘도 통장을 배부르게!</Title>
			<Container>
				<ChallengeTitle>
					@@@님의 <br /> 무지출 챌린지
				</ChallengeTitle>
				<DayContainer>
					<DDay>D+6</DDay>
					<DayTitle>매주 월, 수</DayTitle>
				</DayContainer>
				<ChartContainer>
					<PieCharts progress={45} width={163} height={163} />
				</ChartContainer>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	margin-top: 0.5rem;
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
`;

const Container = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 13.3125rem;
	height: 17.5rem;
	padding: 0.75rem;
	border-radius: 6px;
	background: linear-gradient(180deg, #a3f2d8 0%, #87d6bc 100%);
`;

const ChallengeTitle = styled.h2`
	font-size: 20px;
	font-weight: 600;
	line-height: 25px;
`;

const DayContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const DDay = styled.p`
	color: #126b56;
	font-size: 14px;
	font-weight: 400;
`;

const DayTitle = styled.p`
	color: #126b56;
	font-size: 14px;
	font-weight: 700;
`;

const ChartContainer = styled.div`
	display: flex;
	justify-content: center;
`;

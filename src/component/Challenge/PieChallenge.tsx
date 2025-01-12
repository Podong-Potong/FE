import styled from "styled-components";
import PieCharts from "../common/Charts/PieCharts";
import { NavigationBar } from "../common/Layouts/NavigationBar";

export default function PieChallenge() {
	return (
		<>
			<Description>이수정님의 무지출 챌린지</Description>
			<DayContainer>
				<DDay>D+100</DDay>
				<Day>매주 월, 수</Day>
			</DayContainer>
			<PieChartsContainer>
				<PieCharts progress={100} width={302} height={302} />
			</PieChartsContainer>
			<NavigationBar />
		</>
	);
}

const Description = styled.h1`
	font-size: 24px;
	font-weight: 700;
	line-height: 36px; /* 150% */
`;

const DayContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const DDay = styled.p`
	color: #126b56;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px; /* 150% */
`;

const Day = styled.p`
	color: #126b56;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px; /* 150% */
`;

const PieChartsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;

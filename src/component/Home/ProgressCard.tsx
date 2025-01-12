import styled from "styled-components";
import PieCharts from "../common/Charts/PieCharts";
import axios from "axios";
import { useQuery } from "react-query";
import { NoProgressCard } from "./NoProgressCard";

const CHALLENGE_NAME = {
	noSpendRate: "무지출 챌린지",
	monthGoalRate: "숫자 게임 저축 챌린지",
	yearGoalRate: "1년동안 저축하기 챌린지",
	weekGoalRate: "요일별 챌린지"
};

export function ProgressCard() {
	const { data } = useQuery(
		["yearingSaving"],
		() =>
			axios.post("http://121.133.3.6:8081/api/challenge").then((response) => {
				return response?.data;
			}),
		{
			staleTime: 5 * 60 * 1000,
			cacheTime: 30 * 60 * 1000,
			onError: (err) => {
				console.error("Error fetching data:", err);
			}
		}
	);

	const { noSpendRate, monthGoalRate, yearGoalRate, weekGoalRate } = data?.data || {};

	// 챌린지 배열 생성
	const challenges = [];
	if (noSpendRate && !isNaN(noSpendRate)) challenges.push({ name: CHALLENGE_NAME.noSpendRate, rate: noSpendRate });
	if (monthGoalRate && !isNaN(monthGoalRate))
		challenges.push({ name: CHALLENGE_NAME.monthGoalRate, rate: monthGoalRate });
	if (yearGoalRate && !isNaN(yearGoalRate))
		challenges.push({ name: CHALLENGE_NAME.yearGoalRate, rate: yearGoalRate });
	if (weekGoalRate && !isNaN(weekGoalRate))
		challenges.push({ name: CHALLENGE_NAME.weekGoalRate, rate: weekGoalRate });

	return (
		<Wrapper>
			<Title>오늘도 통장을 배부르게!</Title>
			{challenges.length > 0 ? (
				<ChallengeList>
					{challenges.map((challenge, index) => (
						<Container key={index}>
							<ChallengeTitle>
								이수정님의 <br /> {challenge.name}
							</ChallengeTitle>
							<DayContainer>
								<DDay>D+{Math.floor(challenge.rate)}</DDay>
								<DayTitle>{challenge.name}</DayTitle>
							</DayContainer>
							<ChartContainer>
								<PieCharts progress={Math.floor(Number(challenge.rate))} width={163} height={163} />
							</ChartContainer>
						</Container>
					))}
				</ChallengeList>
			) : (
				<NoProgressCard />
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Title = styled.h1`
	margin-top: 0.5rem;
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
`;

const ChallengeList = styled.div`
	margin-top: 1rem;
	width: 100%;
	max-width: 100vw;
	display: flex;
	gap: 1rem;
	overflow-x: auto;
	padding-bottom: 1rem;
	scrollbar-width: thin;
	scrollbar-color: #a3f2d8 transparent;

	&::-webkit-scrollbar {
		height: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background: #a3f2d8;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}
`;

const Container = styled.div`
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
	white-space: nowrap;
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

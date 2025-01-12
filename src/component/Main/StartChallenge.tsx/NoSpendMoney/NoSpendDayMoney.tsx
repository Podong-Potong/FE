import Row from "../../../common/Layouts/Row";
import Typography from "../../../common/Typography/Typography";
import * as S from "./style";
import { useStartChallengeStore } from "../useStartChallengeStore";
import styled from "styled-components";
import axios from "axios";

export default function NoSpendDayMoney({ type }: { type: string }) {
	const DAYOFWEEK = ["일", "월", "화", "수", "목", "금", "토"];
	const { challengeStates, toggleDay } = useStartChallengeStore(); // Zustand 상태 사용

	const generateDayString = () => {
		return DAYOFWEEK.map((day) => (challengeStates[type]?.day?.includes(day) ? "1" : "0")).join("");
	};

	const handleClick = () => {
		const dayString = generateDayString();
		axios.put("http://121.133.3.6:8081/api/challenge", {
			challengeType: "WEEKLY_SAVING",
			selectedDaysNoSpending: null,
			selectedDaysWeeklySaving: dayString,
			startDate: "2025-01-11",
			yearGoal: null,
			weekOfMonthGoal: 0
		});
	};

	return (
		<>
			<Row gap={10.5}>
				{DAYOFWEEK.map((val) => (
					<S.DayofWeek
						key={val}
						horizonAlign="center"
						verticalAlign="center"
						isClicked={challengeStates[type]?.day?.includes(val) ?? false} // 선택 상태 확인
						onClick={(ev) => {
							ev.stopPropagation();
							toggleDay(type, val); // 요일 토글
						}}
					>
						<Typography
							color={challengeStates[type]?.day?.includes(val) ? "primary" : "neutral60"} // 선택 여부에 따른 스타일
							typoSize="H6_B"
						>
							{val}
						</Typography>
					</S.DayofWeek>
				))}
			</Row>
			{/* <SubmitButton onClick={handleClick}>챌린지 시작하기</SubmitButton> */}
		</>
	);
}

const SubmitButton = styled.button`
	display: flex;
	width: 341px;
	padding: 12px 20px;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border-radius: 24px;
	background: var(--Schemes-Primary-Container, #a3f2d8);
	margin-top: 1rem;
	cursor: pointer;
`;

import Row from "../../../common/Layouts/Row";
import Typography from "../../../common/Typography/Typography";
import * as S from "./style";
import { useStartChallengeStore } from "../useStartChallengeStore";

export default function NoSpendMoney({ type }: { type: string }) {
	const DAYOFWEEK = ["일", "월", "화", "수", "목", "금", "토"];
	const { challengeStates, toggleDay } = useStartChallengeStore(); // Zustand 상태 사용

	return (
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
	);
}

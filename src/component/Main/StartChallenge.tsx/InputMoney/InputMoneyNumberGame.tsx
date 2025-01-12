import { useState } from "react";
import useFormatMoney from "../../../../hook/useFormatMoney";
import Typography from "../../../common/Typography/Typography";
import * as S from "./style";
import { useStartChallengeStore } from "../useStartChallengeStore";
import axios from "axios";
import styled from "styled-components";

export default function InputMoneyNumberGame({ type }: { type: string }) {
	const { formatMoney } = useFormatMoney();

	const { inputMoney, challengeStates } = useStartChallengeStore();

	const handleEnroll = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		axios.put("http://121.133.3.6:8081/api/challenge", {
			challengeType: "SAVING_GAME",
			selectedDaysNoSpending: null,
			selectedDaysWeeklySaving: null,
			startDate: "2025-01-12",
			yearGoal: null,
			weekOfMonthGoal: 0
		});
	};

	console.log("formatMoney: ", challengeStates[type]?.money);
	return (
		<Container>
			<S.InputMoneyWrap horizonAlign="distribute" onClick={(ev) => ev.stopPropagation()}>
				<S.Input
					type="text"
					inputMode="numeric"
					pattern="[0-9]*"
					onInput={(e) => {
						e.currentTarget.value =
							e.currentTarget.value !== "" ? e.currentTarget.value.replace(/[^0-9]/g, "") : "";
					}}
					isInput={challengeStates[type]?.money ? true : false}
					onChange={(e) => inputMoney(type, e.currentTarget.value)}
					value={formatMoney(challengeStates[type]?.money as string)}
				/>
				<Typography typoSize="H6_B" color="neutral100">
					{"원"}
				</Typography>
			</S.InputMoneyWrap>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

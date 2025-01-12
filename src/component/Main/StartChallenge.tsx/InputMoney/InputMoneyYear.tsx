import { useState } from "react";
import useFormatMoney from "../../../../hook/useFormatMoney";
import Typography from "../../../common/Typography/Typography";
import * as S from "./style";
import { useStartChallengeStore } from "../useStartChallengeStore";
import axios from "axios";
import styled from "styled-components";

export default function InputMoneyYear({ type }: { type: string }) {
	const { formatMoney } = useFormatMoney();

	const { inputMoney, challengeStates } = useStartChallengeStore();

	const handleEnroll = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		axios.put("http://121.133.3.6:8081/api/challenge", {
			challengeType: "YEARLY_SAVING",
			selectedDaysNoSpending: null,
			selectedDaysWeeklySaving: null,
			startDate: "2025-01-11",
			yearGoal: challengeStates[type]?.money,
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
			<SubmitButton onClick={handleEnroll}>챌린지 시작하기</SubmitButton>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

const SubmitButton = styled.button`
	display: flex;
	width: 341px;
	padding: 12px 20px;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border-radius: 24px;
	background: var(--Schemes-Primary-Container, #a3f2d8);
	cursor: pointer;
`;

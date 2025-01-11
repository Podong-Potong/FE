import { useState } from "react";
import useFormatMoney from "../../../../hook/useFormatMoney";
import Typography from "../../../common/Typography/Typography";
import * as S from "./style";
import { useStartChallengeStore } from "../useStartChallengeStore";

export default function InputMoney({ type }: { type: string }) {
	const { formatMoney } = useFormatMoney();

	const { inputMoney, challengeStates } = useStartChallengeStore();

	return (
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
	);
}

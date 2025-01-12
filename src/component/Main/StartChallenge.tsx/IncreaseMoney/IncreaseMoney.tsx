import { useState } from "react";
import Row from "../../../common/Layouts/Row";
import Typography from "../../../common/Typography/Typography";
import * as S from "./style";
import { useStartChallengeStore } from "../useStartChallengeStore";
import { atom, useAtom } from "jotai";

export const increaseAtom = atom("");

export default function IncreaseMoney({ type }: { type: string }) {
	const SAVEMONEY = ["100", "500", "1,000", "5,000", "10,000"];
	const [increaseMoneys, setIncreaseMoney] = useAtom(increaseAtom);

	const { challengeStates, increaseMoney } = useStartChallengeStore();
	return (
		<Row gap={2.75}>
			{SAVEMONEY.map((val) => (
				<S.SaveMoney
					horizonAlign="left"
					verticalAlign="center"
					isClicked={challengeStates[type]?.increaseMoney?.includes(val) ?? false}
					onClick={(ev) => {
						ev.stopPropagation();
						increaseMoney(type, val);
						setIncreaseMoney(val);
					}}
				>
					<Typography
						key={val}
						color={challengeStates[type]?.increaseMoney?.includes(val) ? "primary" : "neutral60"} // 선택 여부에 따른 스타일
						typoSize="H6_B"
					>
						{val}
					</Typography>
				</S.SaveMoney>
			))}
		</Row>
	);
}

import { useState } from "react";

import Column from "../../common/Layouts/Column";
import Typography from "../../common/Typography/Typography";
import { ReactComponent as Money } from "../../../assets/icons/startChallenge/money.svg";
import { ReactComponent as Walk } from "../../../assets/icons/startChallenge/walk.svg";
import { ReactComponent as Save } from "../../../assets/icons/startChallenge/save.svg";
import { ReactComponent as Arrow } from "../../../assets/icons/startChallenge/arrow.svg";
import { ReactComponent as Calender } from "../../../assets/icons/startChallenge/calendar.svg";
import * as S from "./style";
import Row from "../../common/Layouts/Row";
import { Br } from "../../common/Layouts/Br";
import NoSpendMoney from "./NoSpendMoney/NoSpendMoney";
import InputMoney from "./InputMoney/InputMoney";
import IncreaseMoney from "./IncreaseMoney/IncreaseMoney";
import { useStartChallengeStore } from "./useStartChallengeStore";

export default function StartChallengeBox() {
	const [openIndexes, setOpenIndexes] = useState<number[]>([]);
	const { challengeStates } = useStartChallengeStore();

	const toggleOpen = (index: number) => {
		setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
	};
	const challengeData = [
		{ type: "money", icon: Money, title: "무지출 챌린지", subTitle: "정해진 요일만큼은 우리 소비를 잠시 멈춰봐요" },
		{
			type: "save",
			icon: Save,
			title: "숫자게임 저축 챌린지",
			subTitle: "100원부터 점점 금액을 늘려 저축하는 챌린지"
		},
		{
			type: "arrow",
			icon: Arrow,
			title: "1년동안 저축하기 챌린지",
			subTitle: "1년동안 얼마나 모아볼 수 있을까?!\n자신의 한계를 시험하는 저축 챌린지"
		}
		// {
		// 	type: "calender",
		// 	icon: Calender,
		// 	title: "요일별 소비제한 챌린지",
		// 	subTitle: "과소비하는 특정 요일에 소비제한을 걸어\n절약할 수 있는 챌린지"
		// }
	];
	return (
		<>
			{challengeData.map((val, index) => {
				const isSelectState = challengeStates[val.type] ? true : false;
				return (
					<S.ChallengeBox gap={12} onClick={() => toggleOpen(index)} isSelect={isSelectState}>
						<Row gap={12}>
							<val.icon />
							<Column gap={8}>
								<Typography color="primary" typoSize="Body1">
									{val.title}
								</Typography>
								<Typography color="neutral60" typoSize="Subtitle2">
									{val.subTitle}
								</Typography>
							</Column>
						</Row>
						{openIndexes.includes(index) && (
							<>
								<Br />
								{val.type === "money" && (
									<Column gap={12}>
										<Typography color="neutral100" typoSize="Body1">
											{"무지출 챌린지를 시작할 요일을 정해주세요"}
										</Typography>
										<NoSpendMoney type={val.type} />
									</Column>
								)}
								{val.type === "save" && (
									<Column gap={16}>
										<div style={{ width: "100%" }}>
											<Typography color="neutral100" typoSize="Body1">
												{"첫 시작 금액을 얼마로 할까요?"}
											</Typography>
											<InputMoney type={val.type} />
										</div>
										<div>
											<Typography color="neutral100" typoSize="Body1">
												{"얼마씩 증액할까요?"}
											</Typography>
											<IncreaseMoney type={val.type} />
										</div>
									</Column>
								)}
								{val.type === "arrow" && (
									<div style={{ width: "100%" }}>
										<Typography color="neutral100" typoSize="Body1">
											{"1년동안 얼마를 모아볼까요?"}
										</Typography>
										<InputMoney type={val.type} />
									</div>
								)}
								{val.type === "calender" && (
									<>
										<Column gap={8}>
											<div>
												<Typography color="neutral100" typoSize="Body1">
													{"소비에 제한을 둘 요일을 정해주세요"}
												</Typography>
												<NoSpendMoney type={val.type} />
											</div>
										</Column>
										<Typography color="neutral100" typoSize="Body1">
											{"소비 제한 금액을 적어주세요"}
										</Typography>
										<InputMoney type={val.type} />
									</>
								)}
							</>
						)}
					</S.ChallengeBox>
				);
			})}
		</>
	);
}

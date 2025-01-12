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
import InputMoneyYear from "./InputMoney/InputMoneyYear";
import InputMoneyNumberGame from "./InputMoney/InputMoneyNumberGame";
import IncreaseMoney, { increaseAtom } from "./IncreaseMoney/IncreaseMoney";
import { useStartChallengeStore } from "./useStartChallengeStore";
import styled from "styled-components";
import NoSpendDayMoney from "./NoSpendMoney/NoSpendDayMoney";
import axios from "axios";
import { useAtom } from "jotai";

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
	];

	const [firstMoney, setFirstMoeny] = useState(0);
	const [increaseMoneys, setIncreaseMoney] = useAtom(increaseAtom);
	const handleChallenge = () => {
		axios.put("http://121.133.3.6:8081/api/challenge", {
			challengeType: "SAVING_GAME",
			selectedDaysNoSpending: null,
			selectedDaysWeeklySaving: null,
			startDate: "2025-01-11",
			startAmount: firstMoney,
			plusAmount: increaseMoneys,
			weekOfMonthGoal: 0
		});
	};
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
											{/* <InputMoneyNumberGame type={val.type} /> */}
											<S.InputMoneyWrap
												horizonAlign="distribute"
												onClick={(ev) => ev.stopPropagation()}
											>
												<S.Input
													type="text"
													inputMode="numeric"
													pattern="[0-9]*"
													onChange={(e) => {
														const value = e.currentTarget.value.replace(/,/g, "");
														if (!isNaN(Number(value))) {
															setFirstMoeny(Number(value));
														}
													}}
													value={firstMoney.toLocaleString("ko-KR")}
												/>
												<Typography typoSize="H6_B" color="neutral100">
													{"원"}
												</Typography>
											</S.InputMoneyWrap>
										</div>
										<div>
											<Typography color="neutral100" typoSize="Body1">
												{"얼마씩 증액할까요?"}
											</Typography>
											<IncreaseMoney type={val.type} />
											<SubmitButton
												onClick={() => {
													handleChallenge();
												}}
											>
												챌린지 시작하기
											</SubmitButton>
										</div>
									</Column>
								)}
								{val.type === "arrow" && (
									<div style={{ width: "100%" }}>
										<Typography color="neutral100" typoSize="Body1">
											{"1년동안 얼마를 모아볼까요?"}
										</Typography>
										<InputMoneyYear type={val.type} />
									</div>
								)}
								{val.type === "calender" && (
									<>
										<Column gap={8}>
											<div>
												<Typography color="neutral100" typoSize="Body1">
													{"소비에 제한을 둘 요일을 정해주세요"}
												</Typography>
												<NoSpendDayMoney type={val.type} />
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

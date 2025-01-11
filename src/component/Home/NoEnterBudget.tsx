import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import pigImage from "../../assets/images/pig.png";
import { useAtom } from "jotai";
import { isOpenModal } from "../Calender/WriteSpendHabit/SelectCategory/state/selectCategoryAtom";

export function NoEnterBudget() {
	const navigate = useNavigate();

	return (
		<Container>
			<PigImage />
			<Content>월 소비액 정하고 소비습관을 길러봐요</Content>
			<Description>
				통장 살찌우는건 소비습관에서 <br /> 시작 되는 법! 지금 정해볼까요?
			</Description>
			<StartButton onClick={() => navigate("/calendar/goal")}>챌린지 시작하기</StartButton>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	margin-top: 1rem;
	width: 100%;
	height: 22rem;
	border-radius: 16px;
	background-color: #fff; /* 배경 색상 추가 */
	filter: drop-shadow(0px 0px 12px var(--Schemes-Surface-Dim, #d5dbd7));
	margin: 0 auto;
`;

const PigImage = styled.div`
	width: 106px;
	height: 123px;
	margin-bottom: 1rem;
	background-image: url(${pigImage});
	background-size: contain;
`;

const Content = styled.p`
	color: #0da484;
	font-size: 20px;
	font-weight: 700;
`;

const Description = styled.p`
	color: #8e918f;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
`;

const StartButton = styled.button`
	display: flex;
	width: 85%;
	padding: 12px 20px;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border-radius: 24px;
	background: #a3f2d8;
	color: #126b56;
	font-size: 14px;
	font-weight: 700;
	line-height: 21px;
`;

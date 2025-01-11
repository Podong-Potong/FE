import styled from "styled-components";
import pigImage from "../../assets/images/pig.png";

export function NoProgressCard() {
	return (
		<Container>
			<PigImage />
			<Content>아직 실행중인 챌린지가 없어요</Content>
			<Description>
				통장 살찌우기 챌린지 같이하고 <br /> 행운 복권 받아가세요🍀
			</Description>
			<StartButton>챌린지 시작하기</StartButton>
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
	width: 22.625rem;
	height: 22rem;
	border-radius: 16px;
	background-color: #fff; /* 배경 색상 추가 */
	filter: drop-shadow(0px 0px 12px var(--Schemes-Surface-Dim, #d5dbd7));
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
	width: 341px;
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

import styled from "styled-components";
import { NavigationBar } from "../component/common/Layouts/NavigationBar";
import luckyImage from "../assets/images/lucky.png";

export function Reward() {
	return (
		<Container>
			<Title>
				@@@님의 소비 실천으로 모인 <br /> 행운 복권이 벌써 7장이네요!
			</Title>
			<Wrapper>
				<LuckyWrapper />
				<LuckyContainer />
				<Button>모두 긁어보기</Button>
			</Wrapper>
			<NavigationBar />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100vh;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
	text-align: center;
	margin-bottom: 2rem;
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	flex: 1;
`;

const LuckyWrapper = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: calc(100% - 96px);
	border-radius: 267.5px 267.5px 0 0;
	background: var(--material-theme-ref-primary-primary98, #e6fff4); /* 연한 초록색 */
	z-index: -1;
`;

const LuckyContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 14.75rem;
	height: 23rem;
	background-image: url(${luckyImage});
	background-size: contain;
	background-repeat: no-repeat;
	z-index: 1;
`;

const Button = styled.button`
	width: 90%;
	margin: 1.5rem auto 0;
	padding: 12px 20px;
	border-radius: 24px;
	background: #a3f2d8;
	color: #126b56;
	text-align: center;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.175px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	z-index: 10;
`;

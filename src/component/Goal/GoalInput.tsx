import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function GoalInput() {
	const [changeinputNum, setChangeInputNum] = useState(0);
	const navigate = useNavigate();
	const handleEnroll = () => {
		axios
			.post("http://121.133.3.6:8081/api/goal", changeinputNum, {
				headers: {
					"Content-Type": "application/json"
				}
			})
			.then((val) => navigate("/"));
	};

	return (
		<Container>
			<CategoryContainer>
				<GoalText>저번달 목표 : 300,000원</GoalText>
				<InputContainer>
					<Input
						type="text"
						maxLength={9}
						value={changeinputNum.toLocaleString("ko-KR")}
						onChange={(e) => setChangeInputNum(Number(e.currentTarget.value.replace(",", "")))}
					/>
					<Unit>원</Unit>
				</InputContainer>
			</CategoryContainer>
			<SubmitButton onClick={() => handleEnroll()}>등록하기</SubmitButton>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
`;

const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Category = styled.div`
	width: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 16px;
	border-radius: 41px;
	background: #eff1ee;
	font-size: 14px;
	font-weight: 700;
	line-height: 21px;
	white-space: nowrap;
`;

const GoalText = styled.p`
	color: #8e918f;
	font-size: 14px;
	font-weight: 700;
	line-height: 21px;
`;

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 2px solid #8e918f;
	width: 100%;
`;

const Input = styled.input`
	flex: 1;
	border: none;
	outline: none;
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
`;

const Unit = styled.span`
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
	margin-left: 0.5rem;
`;

const SubmitButton = styled.button`
	display: flex;
	padding: 12px 20px;
	justify-content: center;
	align-items: center;
	gap: 20px;
	align-self: stretch;
	border-radius: 24px;
	background: #a3f2d8;

	position: absolute;
	bottom: 48px;
	width: 90%;
`;

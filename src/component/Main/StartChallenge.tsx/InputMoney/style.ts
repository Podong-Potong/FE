import styled from "styled-components";
import Row from "../../../common/Layouts/Row";

export const InputMoneyWrap = styled(Row)`
	border-bottom: 2px solid ${({ theme }) => theme.primary60};
	width: 80%;
	margin-top: 4px;
`;
export const Input = styled.input<{ isInput: boolean }>`
	width: 100%;
	border: 0;
	outline: none;
	font-size: 20px;
	font-weight: 700;
	line-height: 25px;
	padding: 8px 0px;
	background-color: ${({ theme, isInput }) => (isInput ? theme.primary95 : "transparent")};

	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

import styled from "styled-components";

export const spendKindBtnWrapper = styled.button<{ isSelect: boolean }>`
	width: 3.56rem;
	border-radius: 41px;
	height: 37px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ isSelect, theme }) => (isSelect ? theme.primaryContainer : theme.neutral95)};
`;

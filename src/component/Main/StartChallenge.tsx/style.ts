import styled from "styled-components";
import Column from "../../common/Layouts/Column";

export const ChallengeBox = styled(Column)<{ isSelect: boolean }>`
	width: 100%;
	min-height: 97px;
	height: fit-content;
	padding: 16px 0.75rem;
	border-radius: 12px;
	box-shadow: 0px 0px 16px 0px #d5dbd7;
	cursor: pointer;
	background-color: ${({ isSelect, theme }) => (isSelect ? theme.primary95 : "transparent")};
`;

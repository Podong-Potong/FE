import styled from "styled-components";
import Column from "../../../common/Layouts/Column";

export const DayofWeek = styled(Column)<{ isClicked: boolean }>`
	width: 38px;
	height: 38px;
	background-color: ${({ isClicked, theme }) => (isClicked ? theme.primaryContainer : "transparent")};
	border-radius: 50%;
`;

import styled from "styled-components";

export const BasicWrapper = styled.div`
	width: 100%;
`;

export const UseData = styled(BasicWrapper)<{ isOver: boolean }>`
    border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	height: 101px;
	background-color: ${({ theme, isOver }) => (isOver ? theme.onError : theme.primaryContainer)};
	padding: 16px 0px 15px 24px;
`;

export const AnalizeData = styled(BasicWrapper)<{ isOver: boolean }>`
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	height: 49px;
	background-color: ${({ theme, isOver }) => (isOver ? theme.error : theme.primary)};
	opacity: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

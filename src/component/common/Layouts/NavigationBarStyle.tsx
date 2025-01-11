import styled from "styled-components";

export const MenuList = styled.ul`
	width: 100%;
	height: 100px;
	background-color: white;
	position: fixed;
	bottom: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

export const MenuItem = styled.li.withConfig({
	shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding: 0px 24px;
	white-space: nowrap;
	cursor: pointer;
`;

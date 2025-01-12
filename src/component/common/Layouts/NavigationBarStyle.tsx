import styled from "styled-components";

export const MenuList = styled.ul`
	height: 90px;
	background-color: white;
	position: fixed;
	bottom: 0px;
	display: flex;
	justify-content: space-between;
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

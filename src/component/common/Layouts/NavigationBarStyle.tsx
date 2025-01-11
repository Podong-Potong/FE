import styled from "styled-components";

export const MenuList = styled.ul`
	position: fixed;
	bottom: 0px;
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 43.5px 50px 43.5px;
	margin: 0;
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

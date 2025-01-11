import styled from "styled-components";

export const MenuList = styled.ul`
	position: fixed;
	bottom: 0px;
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 43.5px 50px 43.5px;
`;

export const MenuItem = styled.li.withConfig({
	shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 12px 20px;
	border-radius: 8px;
	margin-bottom: 16px;
	cursor: pointer;
`;

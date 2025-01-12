import styled from "styled-components";
export const OverLay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

export const Modal = styled.div`
	background-color: #ffffff;
	border-top-right-radius: 16px;
	border-top-left-radius: 16px;
	width: 100%;
	height: 500px;
	position: fixed;
	bottom: 0;
	padding-top: 30px;
	padding-left: 21px;
	padding-right: 21px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import styled from "styled-components";

export const Layout = () => {
	return (
		<AppWrapper>
			<MainWrapper>
				<Outlet />
			</MainWrapper>
			<NavigationBar />
		</AppWrapper>
	);
};

const AppWrapper = styled.div`
	width: 400px;
	height: 100vh;
	margin: 0 auto;
	border: 1px solid lightgray;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const MainWrapper = styled.div`
	flex: 1;
	padding: 1rem;
	margin-bottom: 96px;
	overflow-y: auto;
`;

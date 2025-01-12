import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";

export const Layout = () => {
	return (
		<AppWrapper>
			<Header leftIcon={<LogoIcon />} />
			<MainWrapper>
				<Outlet />
			</MainWrapper>
		</AppWrapper>
	);
};

const AppWrapper = styled.div`
	::-webkit-scrollbar {
		display: none;
	}
	width: 400px;
	height: 100vh;
	margin: 0 auto;
	/* border: 1px solid lightgray; */
	display: flex;
	flex-direction: column;
	position: relative;
	/* background: yellow; */
`;

const MainWrapper = styled.div`
	flex: 1;
	padding: 1rem;
	margin-bottom: 96px;
	overflow-y: auto;
`;

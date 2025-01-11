import { useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import styled from "styled-components";
import Column from "./Column";

export const Layout = () => {
	return (
		<AppWrapper>
			<MainWrapper>
				<NavigationBar />
				<Outlet />
			</MainWrapper>
		</AppWrapper>
	);
};

const AppWrapper = styled.div`
	width: 400px;
	height: 100vh;
	margin: 0 auto;
	border: 1px solid lightgray;
`;

const MainWrapper = styled.div``;

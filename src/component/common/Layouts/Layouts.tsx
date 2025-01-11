import { useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import styled from "styled-components";
import Column from "./Column";

export const Layout = () => {
	return (
		<AppWrapper horizonAlign="center" verticalAlign="center">
			<MainWrapper>
				<NavigationBar />
				<Outlet />
			</MainWrapper>
		</AppWrapper>
	);
};

const AppWrapper = styled(Column)`
	/* 어플 전체 비율 맞춰서 넣으면 될듯 */
	width: 100%;
	height: 100vh;
`;

const MainWrapper = styled.div``;

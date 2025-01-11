import styled from "styled-components";

export const Header = () => {
	return (
		<Container>
			<LogoSample />
		</Container>
	);
};

const Container = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	height: 4rem;
	padding: 1rem;
	background-color: white;
	z-index: 999;
`;

const LogoSample = styled.div`
	width: 36px;
	height: 36px;
	background: #d9d9d9;
`;

import styled from "styled-components";

interface HeaderProps {
	leftIcon?: React.ReactNode;
	logo?: React.ReactNode;
}

export const Header = ({ leftIcon, logo }: HeaderProps) => {
	return (
		<Container>
			{leftIcon && <IconContainer>{leftIcon}</IconContainer>}
			{logo && <LogoContainer>{logo}</LogoContainer>}
		</Container>
	);
};

const Container = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	height: 4.5rem;
	padding: 0.75rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	z-index: 999;
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
`;

const LogoContainer = styled.div`
	width: 36px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

import styled from "styled-components";
import { GoalInput } from "../component/Goal/GoalInput";

export function Goal() {
	// const [isOpen, setIsOpen] = useState<boolean>(false);

	// const handleClick = () => {
	// 	setIsOpen((prev) => !prev);
	// };

	return (
		<>
			<Container>
				<Title>월 목표 소비액을 설정해봐요</Title>
				<GoalInput />
			</Container>
			{/* {isOpen && (
				<MenuContainer>
					<Link to={{ pathname: "/calendar/category" }}>
						<Menu>카테고리 등록하기</Menu>
					</Link>
				</MenuContainer>
			)} */}
		</>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	padding: 0.5rem;
	gap: 1rem;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
`;

const MenuContainer = styled.div`
	position: absolute;
	top: 4.1rem;
	right: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	z-index: 1000;
	cursor: pointer;
`;

const Menu = styled.div`
	background-color: #a3f2d8;
	padding: 0.75rem 1rem;
	border-radius: 8px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	font-size: 14px;
	font-weight: 600;
	white-space: nowrap;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		top: -8px;
		right: 12px;
		border-width: 0 8px 8px 8px;
		border-style: solid;
		border-color: transparent transparent #a3f2d8 transparent;
	}
`;

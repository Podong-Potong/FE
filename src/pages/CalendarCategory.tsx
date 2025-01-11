import styled from "styled-components";
import { GOAL_CATEGORIES } from "../constants/goal";

export function CalendarCategory() {
	return (
		<Container>
			<Text>카테고리 고르기</Text>
			<CategoryWrapper>
				{GOAL_CATEGORIES.map((category) => (
					<CategoryContainer key={category.id}>{category.name}</CategoryContainer>
				))}
			</CategoryWrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
`;

const Text = styled.p`
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
	margin-bottom: 1rem;
`;

const CategoryWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;

const CategoryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 16px;
	border-radius: 41px;
	background: #eff1ee;
	font-size: 14px;
	font-weight: 700;
	line-height: 21px;
	white-space: nowrap;
	cursor: pointer;
`;

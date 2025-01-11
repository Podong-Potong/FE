import styled from "styled-components";
import BarCharts from "../component/common/Charts/BarCharts";
import PieChallenge from "../component/Challenge/PieChallenge";
import BarChallenge from "../component/Challenge/BarChallenge";

export function Challenge() {
	return (
		<Container>
			<PieChallenge />
			<BarChallenge />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 0.5rem;
`;
